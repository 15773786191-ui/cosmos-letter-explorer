# -*- coding: utf-8 -*-
"""Build a small global name index; full geometry and knowledge stay in country files."""
import json,pathlib,re
root=pathlib.Path(__file__).resolve().parents[1]/'galaxy-preview'
nodes=json.loads((root/'map-data/countries.json').read_text())
for f in sorted((root/'map-data').glob('*.json')):
 if f.name=='countries.json':continue
 d=json.loads(f.read_text());nodes+=d.get('regions',[])+d.get('cities',[])
result=[]
for n in nodes:
 if not all(k in n for k in ('id','name','lat','lon','kind')):continue
 item={k:n[k] for k in ('id','name','lat','lon','kind','country','region','continent') if k in n}
 aliases=list(n.get('aliases',[]))
 for name in [n['name'],n.get('knowledge',{}).get('articleTitle','')]:
  if not name:continue
  aliases.append(name)
  # Administrative suffixes may be omitted in prose. Ambiguity is resolved in context at runtime.
  short=re.sub(r'(特别行政区|维吾尔自治区|壮族自治区|回族自治区|自治区|自治州|省|市)$','',name)
  if len(short)>=2:aliases.append(short)
 item['aliases']=sorted(set(aliases)-{n['name']});result.append(item)
(root/'place-directory.json').write_text(json.dumps(result,ensure_ascii=False,separators=(',',':')))
print('Indexed',len(result),'places; bytes',(root/'place-directory.json').stat().st_size)
# Natural Earth physical entities supply offline destinations for mountains, islands and lakes.
features=[]
for group in ['geography-points','geography-polys','lakes','rivers']:
 file=pathlib.Path('/private/tmp/earth-'+group+'.json')
 if not file.exists():continue
 data=json.loads(file.read_text())
 river_names={'Chang Jiang':'长江','Yangtze':'长江','Huang He':'黄河','Xi Jiang':'西江','Xiang':'湘江','Nile':'尼罗河','Amazonas':'亚马孙河','Mississippi':'密西西比河','Rhine':'莱茵河','Rhein':'莱茵河','Danube':'多瑙河','Donau':'多瑙河','Ganges':'恒河','Indus':'印度河','Mekong':'湄公河','Congo':'刚果河','Volga':'伏尔加河','Thames':'泰晤士河','Seine':'塞纳河','Zambezi':'赞比西河','Lena':'勒拿河','Yenisei':'叶尼塞河','Ob’':'鄂毕河','Amur':'黑龙江','Paraná':'巴拉那河','Orinoco':'奥里诺科河'}
 for f in data['features']:
  p={k.lower():v for k,v in f['properties'].items()};name=p.get('name_zh') or river_names.get(p.get('name'))
  if not name:continue
  coords=f['geometry']['coordinates'];points=[]
  def flatten(c):
   if c and isinstance(c[0],(int,float)):points.append(c)
   else:
    for child in c:flatten(child)
  flatten(coords)
  if not points:continue
  # Choose an actual geometry point, avoiding centroids outside concave landforms.
  anchor=points[len(points)//2];lon,lat=anchor[:2]
  width=max(x[0] for x in points)-min(x[0] for x in points);height=max(x[1] for x in points)-min(x[1] for x in points)
  ident='natural-'+str(p.get('ne_id') or p.get('name')).replace(' ','-')
  features.append({'id':ident,'name':name,'kind':'poi','category':{'lakes':'湖泊 · 岸线参考点','rivers':'河流 · 河段参考点'}.get(group,'自然地理 · 参考位置'),'lat':round(lat,5),'lon':round(lon,5),'altitude':round(max(18000,min(4000000,max(width,height)*95000))),'spanningCountries':True,'physical':True,'aliases':['亚马逊河'] if name=='亚马孙河' else []})
# Merge river pieces under one name, keeping the largest extent as the representative view.
by_name={}
for n in features:
 if n['name'] not in by_name or n['altitude']>by_name[n['name']]['altitude']:by_name[n['name']]=n
result+=list(by_name.values())
(root/'place-directory.json').write_text(json.dumps(result,ensure_ascii=False,separators=(',',':')))
print('Physical destinations',len(by_name),'total',len(result))
