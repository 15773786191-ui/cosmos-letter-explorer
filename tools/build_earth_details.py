#!/usr/bin/env python3
"""Build offline, identity-bound geography/history/sight excerpts from full Chinese articles.
Build-only dependencies: mwparserfromhell and opencc-python-reimplemented in EARTH_PARSER_PATH.
No inference from latitude, neighboring places, or parent cultures is presented as local content.
"""
import sys,os,json,re,time,hashlib,math,html,urllib.request,urllib.parse,concurrent.futures
from pathlib import Path
sys.path.insert(0,os.environ.get('EARTH_PARSER_PATH','/private/tmp/earth-content35/vendor'))
import mwparserfromhell
from opencc import OpenCC
cc=OpenCC('t2s');ROOT=Path(__file__).resolve().parents[1];OLD=Path('/private/tmp/earth-content32');CACHE=Path('/private/tmp/earth-content35');CACHE.mkdir(exist_ok=True);MAP=ROOT/'galaxy-preview/map-data'
def read(p):return json.loads(Path(p).read_text())
failures=[]
def request(base,params,group):
 url=base+'?'+urllib.parse.urlencode(params);file=CACHE/(group+'-'+hashlib.sha256(url.encode()).hexdigest()+'.json')
 if file.exists():return read(file)
 for attempt in range(3):
  try:
   with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'CosmosLetterEducationalAtlas/1.0 (offline reference build)','Accept':'application/json'}),timeout=25) as r:d=json.load(r)
   if d.get('error'):raise RuntimeError(str(d['error']))
   file.write_text(json.dumps(d,ensure_ascii=False));return d
  except Exception as e:
   if attempt==2:failures.append({'group':group,'reason':str(e),'key':file.name});return {}
   time.sleep(3+attempt*3)
 return {}
def chunks(xs,n):return [xs[i:i+n] for i in range(0,len(xs),n)]
def parallel(xs,fn,title):
 out=[]
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
  fs=[pool.submit(fn,x) for x in xs]
  for i,f in enumerate(concurrent.futures.as_completed(fs)):
   out.append(f.result())
   if i%10==0 or i==len(fs)-1:print(title,i+1,'/',len(fs),flush=True)
 return out
cities={str(f['properties']['NE_ID']):f['properties']['WIKIDATAID'] for f in read(OLD/'cities-source.geojson')['features']}
regions={f['properties']['iso_3166_2']:f['properties']['wikidataid'] for f in read(OLD/'regions-source.geojson')['features']}
countries={f['properties']['ADM0_A3']:f['properties']['WIKIDATAID'] for f in read(OLD/'countries-source.geojson')['features']}
files={};nodes=[]
for p in MAP.glob('*.json'):
 d=read(p)
 if p.name=='countries.json':files[p]=d;nodes+=d;continue
 if not isinstance(d,dict):continue
 files[p]=d;nodes+=d.get('regions',[])+d.get('cities',[])
qid={n['id']:cities.get(n['id'].removeprefix('city-')) if n['kind']=='city' else regions.get(n['id']) if n['kind']=='region' else countries.get(n['id']) for n in nodes}
qids=sorted({q for q in qid.values() if re.fullmatch(r'Q[1-9][0-9]*',str(q))})
ent={}
for p in OLD.glob('entities-*.json'):ent.update(read(p).get('entities',{}))
for p in CACHE.glob('identity-*.json'):ent.update(read(p).get('entities',{}))
missing=[q for q in qids if q not in ent];print('Missing identities',len(missing),'of',len(qids),flush=True)
def identity(batch):return request('https://www.wikidata.org/w/api.php',{'action':'wbgetentities','ids':'|'.join(batch),'props':'sitelinks','sitefilter':'zhwiki','format':'json','maxlag':5},'identity')
if '--offline' not in sys.argv:
 for d in parallel(chunks(missing,50),identity,'Identity recovery'):ent.update(d.get('entities',{}))
titles={q:e.get('sitelinks',{}).get('zhwiki',{}).get('title') for q,e in ent.items()}
unique=sorted({t for q,t in titles.items() if q in qids and t});print('Full Chinese articles',len(unique),flush=True)
def full(batch):return request('https://zh.wikipedia.org/w/api.php',{'action':'query','titles':'|'.join(batch),'prop':'revisions|coordinates|pageprops','rvprop':'content|ids','rvslots':'main','redirects':1,'converttitles':1,'variant':'zh-cn','format':'json','maxlag':5},'full')
responses=[read(p) for p in CACHE.glob('full-*.json')] if '--offline' in sys.argv else parallel(chunks(unique,20),full,'Full place material')
articles={};redirect={}
for d in responses:
 q=d.get('query',{})
 for key in ['normalized','converted','redirects']:
  for r in q.get(key,[]):redirect[cc.convert(r['from'])]=cc.convert(r['to'])
 for p in q.get('pages',{}).values():articles[cc.convert(p.get('title',''))]=p
def lookup(title):
 title=cc.convert(title or '');seen=set()
 while title in redirect and title not in seen:seen.add(title);title=redirect[title]
 return articles.get(title)
def distance(a,b):
 la,lo=a;lb,lob=b;d1=math.radians(lb-la);d2=math.radians(lob-lo);h=math.sin(d1/2)**2+math.cos(math.radians(la))*math.cos(math.radians(lb))*math.sin(d2/2)**2;return 12742*math.asin(min(1,math.sqrt(h)))
def strip(raw):
 raw=re.sub(r'<ref\b[^>]*>.*?</ref>|<ref\b[^>]*/\s*>|<!--.*?-->|<gallery\b[^>]*>.*?</gallery>|<math\b[^>]*>.*?</math>', '',raw,flags=re.S|re.I)
 raw=re.sub(r'\{\|.*?\|\}','',raw,flags=re.S)
 raw=re.sub(r'\[\[(?:File|Image|文件|檔案|图像|圖像|Category|分类|分類):.*?\]\]','',raw,flags=re.I)
 code=mwparserfromhell.parse(raw)
 text=html.unescape(code.strip_code(normalize=True,collapse=True));text=cc.convert(text)
 text=re.sub(r'[（(][\s,，;；]*[）)]','',text)
 text=re.sub(r'-\{([^{}]*)\}-',lambda m:re.sub(r'zh-[^:;]+:','',m[1]).split(';')[0],text)
 return text
geo_pattern=r'位于|坐落|流域|河流|河谷|海岸|沿岸|河口|山脉|盆地|平原|高原|气候|火山|冰川|地形|湖泊|半岛|群岛|地势|季风|降水|地貌|丘陵|海拔'
history_pattern=r'遗址|遗迹|王朝|始建|建于|建城|建立|历史|古代|古都|博物馆|石窟|城墙|世界遗产|建筑|城堡|寺庙|宫殿|文物|考古|传统|节日|宗教|贸易|丝绸|铁路'
sight_pattern=r'遗产|景点|名胜|地标|观光|旅游|博物馆|国家公园|大教堂|石窟|古城|城堡|宫殿|保护区|瀑布|纪念馆|遗址|遗迹|名山|园林'
def lines(raw):
 text=strip(raw)
 out=[]
 for s in re.split(r'[。！？\n]+',text):
  s=s.strip(' *#;:：\t\r');s=re.sub(r'\s+',' ',s)
  if not 20<=len(s)<=200:continue
  if re.search(r'GDP|人口|截至|据统计|排名|生产总值|现任|书记|市长|参见|参考资料|外部链接|ISBN|米其林|十佳|热门|模范|优秀旅游|荣获|称号|游客|观光客|人次|最多|全球.*枢纽|世界.*唯一|最高级|https?://|\|\||\{\{|\[\[|thumb|align=|border=|px\b',s):continue
  if re.search(r'市内的是|是之一|是，|的则是|的，|是当地的，|命名为，',s):continue
  if re.match(r'^\d{4}年?[:：]?$|^[a-zA-Z\s,\d.]+$',s):continue
  out.append(s+'。')
 return out

def take(ss,used,limit=380,maxn=3,topic='geo'):
 out=[]
 for s in sorted(ss,key=lambda x:(bool(re.search(r'^(此外|因此|也因此|从中心|出于同样|其中|而|它|这里)',x)),bool(re.search(r'经度|纬度|东经|西经|北纬|南纬',x)),-min(2,len(re.findall(r'形成|汇入|流经|冲积|侵蚀|季风|山脉|盆地|平原|河流',x))) if topic=='geo' else -min(1,len(re.findall(r'形成|始建|建于|遗址|传统|文化',x))))):
  if topic=='geo' and re.search(r'博物馆|美术馆|大学|校址',s) and not re.search(r'山脉|盆地|平原|高原|流域|地形|气候',s):continue
  if topic=='see' and (re.search(r'殖民|战士|侵略|起义|冲突|军官',s) or not re.search(r'博物馆|公园|教堂|遗址|石窟|城墙|宫殿|古城|景点|地标|世界遗产|瀑布|寺|保护区|城堡',s)):continue
  if s in used or s in out or sum(map(len,out))+len(s)>limit:continue
  out.append(s)
  if len(out)==maxn:break
 used.update(out);return '\n'.join(out) or None
parse_cache={}
def profile(n,p):
 if not p or 'missing' in p or 'disambiguation' in p.get('pageprops',{}):return None,'no_article'
 coords=p.get('coordinates',[])
 if n['kind']=='city' and coords and distance((n['lat'],n['lon']),(coords[0]['lat'],coords[0]['lon']))>60:return None,'identity_position_mismatch'
 if p['title'] not in parse_cache:
  rev=p.get('revisions',[{}])[0];raw=rev.get('slots',{}).get('main',{}).get('*','');parts=re.split(r'(?m)^={2,6}\s*(.*?)\s*={2,6}\s*$',raw);head='';pools={'geo':[],'culture':[],'see':[]};intro=lines(parts[0]);
  for s in intro:
   if re.search(geo_pattern,s):pools['geo'].append(s)
   elif re.search(sight_pattern,s):pools['see'].append(s)
   elif re.search(history_pattern,s):pools['culture'].append(s)
  for i in range(1,len(parts)-1,2):
   head=cc.convert(parts[i]);ss=lines(parts[i+1]);
   if re.search(r'地理|位置|地形|地貌|气候|水文|环境|自然',head):pools['geo'] += [s for s in ss if re.search(geo_pattern,s)]
   elif re.search(r'历史|文化|文物|艺术|宗教|建筑|传统',head):pools['culture'] += [s for s in ss if re.search(history_pattern,s)]
   elif re.search(r'景点|名胜|旅游|观光|遗产',head):pools['see'] += [s for s in ss if re.search(sight_pattern,s)]
   else:
    pools['geo'] += [s for s in ss if re.search(geo_pattern,s)]
    pools['culture'] += [s for s in ss if re.search(history_pattern,s)]
    pools['see'] += [s for s in ss if re.search(sight_pattern,s)]
  parse_cache[p['title']]=(pools,intro,rev.get('revid'))
 pools,intro,revid=parse_cache[p['title']];used=set();geo=take(pools['geo'],used) or take(intro,used,300,2)
 if not geo:return None,'no_readable_material'
 culture=take(pools['culture'],used,320,2,'culture');see=take(pools['see'],used,320,3,'see')
 title=p['title'];q=qid[n['id']];url='https://zh.wikipedia.org/wiki/'+urllib.parse.quote(title)
 return {'theme':n['name']+' · 地形、历史与地方特色' if culture or see else n['name']+' · 地点概要','geo':geo,'culture':culture,'see':see,'scope':'reference','qid':q,'articleTitle':title,'sourceRevision':revid,'method':'Full-article section excerpts; traditional Chinese converted to simplified; tables, citations, population and current-office statistics omitted.','attribution':'中文维基百科资料摘编、删节与繁简转换 · CC BY-SA 4.0（作者见原文历史）','sources':[['地点资料 · '+cc.convert(title),url],['原文版本与作者','https://zh.wikipedia.org/w/index.php?oldid='+str(revid)],['地点身份 · Wikidata','https://www.wikidata.org/wiki/'+q],['资料许可 · CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/']]},None
counts={};errors=[];full_count=0;old_kept=0
for n in nodes:
 d,error=profile(n,lookup(titles.get(qid[n['id']])))
 if d:n['knowledge']=d;full_count+=1
 elif n.get('knowledge') and not n['knowledge'].get('sourceRevision'):old_kept+=1
 else:
  n.pop('knowledge',None)
  errors.append({'id':n['id'],'kind':n['kind'],'reason':error})
 if n.get('knowledge'):
  k=counts.setdefault(n['kind'],{'geo':0,'culture':0,'see':0});k['geo']+=1;k['culture']+=bool(n['knowledge'].get('culture'));k['see']+=bool(n['knowledge'].get('see'))
for p,d in files.items():p.write_text(json.dumps(d,ensure_ascii=False,separators=(',',':')))
report={'revision':'earth-details-35','nodes':len(nodes),'fullArticleProfiles':full_count,'priorReferencesRetained':old_kept,'coverage':counts,'withoutReference':len(errors),'requestFailures':len(failures),'limitations':'Some articles have only short material; references are excerpts rather than complete authored lessons. Missing place content must be marked explicitly and never replaced by latitude teaching.'}
(CACHE/'coverage.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));(CACHE/'failures.json').write_text(json.dumps(failures,ensure_ascii=False,indent=2));(CACHE/'unmatched.json').write_text(json.dumps(errors,ensure_ascii=False));print(json.dumps(report,ensure_ascii=False),flush=True)
