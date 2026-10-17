#!/usr/bin/env python3
"""Remove repeated tab text from the offline reference package; preserve source attribution."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]/'galaxy-preview/map-data'
counts={'referenceNodes':0,'cultureTabs':0,'sightTabs':0}
for p in root.glob('*.json'):
 data=json.loads(p.read_text());nodes=data if isinstance(data,list) else data.get('regions',[])+data.get('cities',[])
 for n in nodes:
  d=n.get('knowledge')
  if not d:continue
  used=set(d['geo'].split('\n'))
  for key in ['culture','see']:
   rows=[s for s in (d.get(key) or '').split('\n') if s and s not in used]
   d[key]='\n'.join(rows) or None;used.update(rows)
  d['attribution']='中文维基百科资料摘编与删节 · CC BY-SA 4.0（作者见原文历史）'
  counts['referenceNodes']+=1;counts['cultureTabs']+=bool(d['culture']);counts['sightTabs']+=bool(d['see'])
 p.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
print(json.dumps(counts,ensure_ascii=False))
