#!/usr/bin/env python3
"""Build local, identity-matched Chinese reference excerpts; keep map navigation independent of remote encyclopedias."""
import sys,json,time,math,re,hashlib,urllib.request,urllib.parse,concurrent.futures,threading
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];CACHE=Path('/private/tmp/earth-content32');CACHE.mkdir(exist_ok=True)
MAP=ROOT/'galaxy-preview/map-data';lock=threading.Lock()
def load(p):return json.loads(Path(p).read_text())
def request(base,params,group):
 url=base+'?'+urllib.parse.urlencode(params);key=hashlib.sha256(url.encode()).hexdigest();p=CACHE/(group+'-'+key+'.json')
 if p.exists():return load(p)
 for attempt in range(4):
  try:
   req=urllib.request.Request(url,headers={'User-Agent':'CosmosLetterEducationalAtlas/1.0 (local reference build)','Accept':'application/json'})
   with urllib.request.urlopen(req,timeout=35) as r: data=json.load(r)
   if 'error' in data:raise RuntimeError(str(data['error']))
   p.write_text(json.dumps(data,ensure_ascii=False));return data
  except Exception as e:
   if attempt==3:return {'failed':str(e)}
   time.sleep(2+attempt*4)
 return {}
def chunks(items,size):return [items[i:i+size] for i in range(0,len(items),size)]
def run(batches,fn,label):
 out=[]
 with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
  fs=[pool.submit(fn,b) for b in batches]
  for i,f in enumerate(concurrent.futures.as_completed(fs)):
   out.append(f.result())
   if i%12==0 or i==len(fs)-1:print(label,i+1,'/',len(fs),flush=True)
 return out
city={str(f['properties']['NE_ID']):f['properties']['WIKIDATAID'] for f in load(CACHE/'cities-source.geojson')['features']}
region={f['properties']['iso_3166_2']:f['properties']['wikidataid'] for f in load(CACHE/'regions-source.geojson')['features']}
country={f['properties']['ADM0_A3']:f['properties']['WIKIDATAID'] for f in load(CACHE/'countries-source.geojson')['features']}
files={};nodes=[]
for p in MAP.glob('*.json'):
 if p.name=='countries.json':continue
 data=load(p)
 if not isinstance(data,dict):continue
 files[p]=data
 for n in data.get('regions',[]):n['_qid']=region.get(n['id']);nodes.append(n)
 for n in data.get('cities',[]):n['_qid']=city.get(n['id'].removeprefix('city-'));nodes.append(n)
cn=load(MAP/'countries.json')
for n in cn:n['_qid']=country.get(n['id']);nodes.append(n)
qids=sorted({n['_qid'] for n in nodes if re.fullmatch(r'Q[1-9][0-9]*',str(n.get('_qid')))})
print('nodes',len(nodes),'identity IDs',len(qids),flush=True)
def entities(batch):return request('https://www.wikidata.org/w/api.php',{'action':'wbgetentities','ids':'|'.join(batch),'props':'sitelinks','sitefilter':'zhwiki','format':'json','maxlag':5},'entities')
ent={}
if '--resume-excerpts' in sys.argv or '--offline' in sys.argv:
 for p in CACHE.glob('entities-*.json'):ent.update(load(p).get('entities',{}))
else:
 for data in run(chunks(qids,50),entities,'Identity matches'):ent.update(data.get('entities',{}))
titles={q:v.get('sitelinks',{}).get('zhwiki',{}).get('title') for q,v in ent.items()}
unique=sorted({t for t in titles.values() if t});print('Chinese pages',len(unique),flush=True)
def pages(batch):return request('https://zh.wikipedia.org/w/api.php',{'action':'query','titles':'|'.join(batch),'prop':'extracts|coordinates|pageprops','exintro':1,'explaintext':1,'exlimit':20,'redirects':1,'converttitles':1,'variant':'zh-cn','format':'json','maxlag':5},'pages')
articles={};redirect={}
page_data=[load(p) for p in CACHE.glob('pages-*.json')] if '--offline' in sys.argv else run(chunks(unique,20),pages,'Chinese reference excerpts')
for data in page_data:
 q=data.get('query',{})
 for kind in ['normalized','converted','redirects']:
  for a in q.get(kind,[]):redirect[a['from']]=a['to']
 for p in q.get('pages',{}).values():articles[p.get('title')]=p

def article(title):
 seen=set()
 while title in redirect and title not in seen:seen.add(title);title=redirect[title]
 return articles.get(title)
def distance(a,b):
 la,lo=a;lb,lob=b;d1=math.radians(lb-la);d2=math.radians(lob-lo);h=math.sin(d1/2)**2+math.cos(math.radians(la))*math.cos(math.radians(lb))*math.sin(d2/2)**2;return 12742*math.asin(min(1,math.sqrt(h)))
def clean(s):
 s=re.sub(r'\[[^\]]*\]','',s);s=re.sub(r'（[^（）]{0,180}）','',s);s=re.sub(r'\([^()]{0,180}\)','',s);return re.sub(r'\s+',' ',s).strip()
def take(ss,limit):
 out=[];size=0
 for s in ss:
  if s in out:continue
  if size+len(s)>limit:continue
  out.append(s);size+=len(s)
 return '\n'.join(out)
def profile(n,p):
 if not p or 'missing' in p or 'disambiguation' in p.get('pageprops',{}):return None,'no_verified_chinese_article'
 coords=p.get('coordinates',[])
 if n['kind']=='city' and coords and distance((n['lat'],n['lon']),(coords[0]['lat'],coords[0]['lon']))>60:return None,'coordinate_mismatch'
 text=p.get('extract','');ss=[clean(s)+'。' for s in re.split(r'[。\n]+',text) if len(clean(s))>12]
 ss=[s for s in ss if len(s)<280 and not re.search(r'GDP|人口|总面积.{0,12}平方|截至\d{4}|经济排名|国内生产总值',s)]
 if not ss:return None,'insufficient_reference'
 geographic=[s for s in ss if re.search(r'位于|坐落|流域|河流|沿岸|海岸|河口|山脉|盆地|平原|高原|气候|火山|冰川|地形|湖泊|半岛|群岛|地势',s)]
 history=[s for s in ss if re.search(r'古城|遗址|王朝|建于|博物馆|石窟|城墙|世界遗产|建筑|城堡|寺庙|宫殿|文物|考古|民族|传统|节日',s) and s not in geographic]
 sights=[s for s in ss if re.search(r'世界遗产|著名景点|名胜|地标|观光|旅游景点|旅游胜地|博物馆|国家公园|大教堂|故宫|石窟|金字塔',s)]
 geo=take(geographic,420) or take(ss[:3],420)
 if len(geo)<24:return None,'insufficient_reference'
 qid=n['_qid'];return {'theme':n['name']+' · 地点资料','geo':geo,'culture':take(history,220) or None,'see':take(sights,220) or None,'scope':'reference','qid':qid,'articleTitle':p['title'],'attribution':'中文维基百科资料摘编与删节 · CC BY-SA 4.0（作者见原文历史）','sources':[['地点资料 · '+p['title'],'https://zh.wikipedia.org/wiki/'+urllib.parse.quote(p['title'])],['地点身份 · Wikidata','https://www.wikidata.org/wiki/'+qid],['资料许可 · CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/']]},None
counts={};errors=[]
for n in nodes:
 qid=n['_qid'];pr,error=profile(n,article(titles.get(qid)))
 n.pop('_qid',None)
 if pr:n['knowledge']=pr;counts[n['kind']]=counts.get(n['kind'],0)+1
 else:n.pop('knowledge',None);errors.append({'id':n['id'],'kind':n['kind'],'qid':qid,'reason':error})
for p,data in files.items():p.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
(MAP/'countries.json').write_text(json.dumps(cn,ensure_ascii=False,separators=(',',':')))
report={'revision':'earth-knowledge-32','totalNodes':len(nodes),'referenceCoverage':counts,'unmatched':len(errors),'unmatchedByReason':{r:sum(x['reason']==r for x in errors) for r in {x['reason'] for x in errors}},'contentMethod':'Exact Natural Earth Wikidata identity -> Chinese article, city coordinates checked within 60 km. Separate authored profiles take precedence. Missing topics stay unavailable; parent culture is never inherited.'}
(CACHE/'coverage.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));(CACHE/'unmatched.json').write_text(json.dumps(errors,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False),flush=True)
