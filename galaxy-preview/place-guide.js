import {regionalKnowledge,cityKnowledge,worldCityKnowledge,contentRevision} from './regional-knowledge.js';
import {osmDescription} from './local-places.js';
import {earthPlaces} from './earth-places.js';
import {stories,countryProfiles} from './world-stories.js';
const continentNames={'Asia':'亚洲','Africa':'非洲','Europe':'欧洲','North America':'北美洲','South America':'南美洲','Oceania':'大洋洲','Antarctica':'南极洲'};
export function distanceKm(a,b,c,d){const r=x=>x*Math.PI/180,p=r(c-a),q=r(d-b),h=Math.sin(p/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(q/2)**2;return 6371*2*Math.asin(Math.min(1,Math.sqrt(h)))}
function ringContains(ring,lon,lat){let yes=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const [x,y]=ring[i],[a,b]=ring[j];if((y>lat)!==(b>lat)&&lon<(a-x)*(lat-y)/(b-y)+x)yes=!yes}return yes}
export function countryAt(features,lon,lat){return features.find(f=>{const ps=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;return ps.some(p=>ringContains(p[0],lon,lat)&&!p.slice(1).some(r=>ringContains(r,lon,lat)))})?.properties||null}
const genericPlaceWords=new Set('盆地 峡谷 高地 山地 平原 高原 河流 湖泊 海岸 海湾 港口 岛屿 群岛 大陆 沙漠 草原 雨林 冰川 中央 中心 东部 西部 南部 北部 中部 新城 首府 城市 都市 岩石 森林 山谷 河谷 海洋 赤道 北方 南方 东方 西方 开放 自由 联合 和平 胜利 大桥 公园 广场'.split(' '));
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const source=['地名与参考边界 · Natural Earth','https://www.naturalearthdata.com/downloads/10m-cultural-vectors/'];
const local={
 'CN-HN':{theme:'湖南水系 · 四水汇入洞庭湖',geo:'湖南的“湖”，指的是北面的洞庭湖。省内东、西、南部多山，北部有平原；湘江、资水、沅江、澧水分别穿过不同的山地与盆地，汇向洞庭湖，再与长江相连。地图上看似分开的河流，其实属于相互连接的水系。水往低处流，河道的走向也受地势影响。',task:'拉远比较湖南南部和北部的地形，再找湘江通向洞庭湖的方向。猜一猜：上游下大雨，为什么下游也需要关注水位？',culture:'湘剧用唱腔、对白与舞台表演讲述故事，湘绣用不同针法和丝线表现纹样与明暗，湘西织锦把图案织进布料。戏曲、刺绣与织锦分别使用声音、针线和织机，展示地方艺术的不同材料与技法。',see:'洞庭湖：看四水汇入与长江连接。\n长沙：看湘江、橘子洲和岳麓山的位置。\n武陵源：看石英砂岩峰柱与峡谷。',sources:[['湖南自然地理 · 湖南省政府','https://hunan.gov.cn/hnszf/jxxx/hngk/zrdl/zrdl.html'],['湖南非遗 · 湖南省文旅厅','https://whhlyt.hunan.gov.cn/whhlyt/english/Culture/IntangibleCulturalHeritage/202304/t20230421_29319891.html']]},
 'city-1159151369':{theme:'长沙 · 湘江、橘子洲与岳麓山',geo:'长沙是湖南省的省会。湘江穿过城区，橘子洲位于江中，岳麓山在江的西侧。橘子洲是一座江心洲：河流搬运泥沙，在水流减缓的地方沉积，逐渐积成陆地；洪水又能侵蚀洲岸、改变形态。桥梁跨过河道连接两岸，城区沿江展开。\n岳麓山与湘江相邻，山地限制道路和建筑的铺展，河流则提供水源和交通通道。一座城市的形状，包含地形作用，也包含人的建设选择。',task:'在影像上找湘江两岸、橘子洲和过江的桥。桥为什么需要连接两岸？江中的洲和旁边的山，在位置和形状上有什么不同？',culture:'岳麓书院创建于公元976年，讲堂、藏书建筑与院落保存了书院教育的空间。湖南博物院的马王堆汉墓出土文物，则通过帛书、漆器和丝织品展示汉代知识、工艺与生活。两处场所分别用建筑和实物保存历史。',see:'橘子洲：看河流沉积形成的江心洲。\n岳麓山：看山坡与城区道路的区别。\n岳麓书院：看教学、藏书与院落布局。\n湖南博物院：看马王堆汉墓出土文物与制作工艺。',sources:[['岳麓山—橘子洲 · 湖南省文旅厅','https://whhlyt.hunan.gov.cn/whhlyt/english/Tourism/5AScenicAreas/202205/t20220524_24629302.html']]}
};

const plates=['板块如何塑造地形 · USGS','https://pubs.usgs.gov/gip/dynamic/understanding.html'];
const climate=['海洋如何影响气候 · NOAA','https://oceanexplorer.noaa.gov/ocean-fact/climate/'];
const continentProfiles={
 Asia:{theme:'板块抬起高山，季风带来雨水',geo:'喜马拉雅山：印度板块向北移动，与欧亚板块碰撞，岩层被挤压、地壳增厚，形成高耸的山系。地球表面的板块每年只移动几厘米，积累数千万年，就能重塑大陆。\n季风：陆地和海洋升温、降温的速度不同，季节变化使风向改变。夏季来自海洋的湿润空气，为亚洲许多地区带来降雨；高山又会改变空气移动和雨水分布。',culture:'水稻与水：亚洲许多稻作地区利用河流、灌渠和梯田供水。梯田把斜坡分成较平的田块，便于蓄水。小麦等作物则适应不同的温度与水分条件，农业景观与自然环境紧密相连。',see:'喜马拉雅山：两块大陆碰撞，岩层挤压形成高山。\n日本列岛：岛屿沿板块活动区域排列，火山与地震相联系。\n长江流域：支流汇入干流，水由高处向海洋流动。',sources:[plates,['季风的形成 · NOAA','https://www.nesdis.noaa.gov/about/k-12-education/severe-weather/what-monsoon']]},
 Europe:{theme:'海洋、冰川与曲折的海岸',geo:'欧洲有斯堪的纳维亚半岛、伊比利亚半岛和地中海沿岸等不同地形。海水储存和释放热量的速度较慢，靠近海洋的地方，气温的季节变化通常比同纬度内陆更缓和。\n挪威峡湾：冰川沿山谷缓慢移动，侵蚀出深而陡的谷地。冰川退去后，海水进入谷地，形成伸入陆地的狭长海湾。',culture:'河流连接城市与港口，莱茵河沿线的航运就是一个例子。水路运输需要足够水深，也会受到水位和船闸的影响；城市与河流的关系，包含交通、供水和防洪。',see:'挪威峡湾：冰川侵蚀出深谷，退冰后海水进入。\n阿尔卑斯山：高山上的积雪与冰川向谷地供给融水。\n莱茵河：河道把内陆城市与北海港口连接起来。',sources:[climate,plates]},
 Africa:{theme:'赤道雨林与北部沙漠的巨大差异',geo:'赤道穿过非洲中部，刚果盆地有大片热带雨林；撒哈拉沙漠位于北部。阳光、空气运动和水分条件共同影响植被，纬度相近的地方也会因海拔和海洋距离而不同。\n东非大裂谷：大陆地壳受到拉伸，断裂两侧发生位移，形成狭长低地。裂谷附近的火山与湖泊，记录着地球内部力量对地表的影响。',culture:'尼罗河沿岸的农业依靠河水灌溉。河谷中的耕地与两侧干旱区域形成鲜明对照：人类聚落需要水，河流将水源、农田和交通联系起来。',see:'撒哈拉：干旱环境中有沙丘、岩石荒漠等多种地表。\n尼罗河谷：河水支持灌溉，农田集中在水源附近。\n东非裂谷：断裂形成低地，部分凹地积水成为湖泊。',sources:[plates,climate]},
 'North America':{theme:'西部山地、中部平原与汇流的河网',geo:'北美洲西部有落基山脉等山系，中部有广阔平原。潮湿空气遇到山地抬升、冷却，水汽容易凝结成雨雪；越过山脉后的空气变干，能形成雨影区。\n密西西比河与支流组成巨大的水系。支流汇入干流，上游的雨水经过河网向下游输送，最终流入墨西哥湾。',culture:'平原便于大面积耕作，河道与港口承担运输。城市的选址还受到资源、交通和历史的影响。河流提供水路，山口提供陆上通道，多种条件一起影响城市分布。',see:'落基山脉：山地影响潮湿空气的移动，迎风与背风两侧水分不同。\n密西西比河：支流输送的水在干流汇合，下游承接大片区域的来水。\n大湖区：湖泊通过水道连接，组成内陆水运通道。',sources:[climate,plates,['雨影效应 · USGS','https://pubs.usgs.gov/gip/deserts/types/index.html']]},
 'South America':{theme:'安第斯山与亚马孙河的山水联系',geo:'安第斯山沿南美洲西岸延伸。纳斯卡板块向南美洲板块下方俯冲，挤压与火山活动共同塑造山系。\n亚马孙流域在山脉东侧展开，许多支流汇向干流，向大西洋输送水。雨林的树木通过蒸腾把水送回空气，水汽、降雨与植被之间形成联系。',culture:'高山地区与低地的温度不同，作物与聚落分布随海拔变化。安第斯山中的梯田，利用山坡建出较平的种植空间，也体现了农业对地形的适应。',see:'安第斯山：海洋板块俯冲，形成高山与火山带。\n亚马孙河：支流从大片流域汇集，向大西洋输送水与沉积物。\n马丘比丘：梯田、台阶与建筑适应安第斯山坡。',sources:[plates,climate]},
 Oceania:{theme:'大陆、火山岛与珊瑚礁',geo:'大洋洲包含澳大利亚与许多太平洋岛屿。火山岛由喷出的岩浆冷却、堆积形成；珊瑚礁由珊瑚等生物构建，珊瑚虫与体内共生藻共同维持珊瑚的生长。\n澳大利亚内陆与沿海的水分条件差异明显，干旱地区的河流可能季节性断流。观察陆地时，水源的持续供应会影响农业和聚落的位置。',culture:'海洋把岛屿分开，也提供航行通道。岛屿之间的交通和物资运输依赖船舶与飞机，淡水、能源和粮食供应都受到岛屿面积与距离的影响。',see:'澳大利亚：水源差异影响干旱内陆与沿海的聚落。\n大堡礁：珊瑚虫的骨骼逐渐累积，构建许多生物的栖息空间。\n新西兰：板块运动与火山活动塑造山地，河流和冰川继续改变地表。',sources:[plates,climate,['珊瑚礁 · NOAA','https://oceanservice.noaa.gov/education/tutorial_corals/']]},
 Antarctica:{theme:'冰盖、海冰与冰中的气候记录',geo:'南极洲是一块覆盖厚冰的大陆。陆地上的冰盖由积雪逐渐压实形成，冰川缓慢向海岸流动；周围海洋在冬季冻结，海冰范围扩大。\n冰芯：科学家从冰盖中钻取柱状冰样。不同深度的冰保存不同时期的气泡与物质，能帮助研究过去的大气和气候。',culture:'南极的科考站支持气候、冰川、海洋与生态研究。科考队需要运输食物与燃料，安排废物处理，并尽量减少对当地环境的影响。',see:'冰盖：陆地积雪逐渐压实成冰，缓慢向海岸流动。\n冰架：陆地冰流入海洋后形成与大陆相连的浮冰平台。\n海冰：海水冻结形成，面积随季节变化。\n冰芯：冰层中的气泡保留过去大气的线索。',sources:[['南极地理与科学 · BAS','https://www.bas.ac.uk/about/where-we-work/antarctica/']]}
};

export class PlaceGuide{
 constructor({root,onVisit}){this.onVisit=onVisit;this.tab='geo';this.features=[];this.seen=new Set();try{this.seen=new Set(JSON.parse(localStorage.getItem('earth-discoveries')||'[]'))}catch{}this.panel=document.createElement('aside');this.panel.id='place-guide';this.panel.hidden=true;this.panel.innerHTML=`<div class="place-heading"><div><small id="place-scope"></small><h3 id="place-name"></h3></div><button id="place-fold" aria-label="关闭介绍">×</button></div><div id="place-body"><p id="place-theme"></p><button id="place-enter"></button><nav class="place-tabs"><button data-place-tab="geo">地理特征</button><button data-place-tab="culture">人文与生活</button><button data-place-tab="see">看什么</button></nav><div id="place-content"></div><div id="place-children"></div><div class="place-bottom"><button id="place-save">记下发现</button><span id="place-saved" role="status"></span><details id="place-source-details"><summary>资料来源</summary><div id="place-sources"></div></details></div></div>`;root.append(this.panel);new ResizeObserver(()=>root.style.setProperty("--place-height",this.panel.hidden?"0px":this.panel.getBoundingClientRect().height+"px")).observe(this.panel);this.$('place-fold').onclick=()=>this.dismiss();this.panel.querySelectorAll('[data-place-tab]').forEach(b=>b.onclick=()=>{this.tab=b.dataset.placeTab;this.renderContent()});this.$('place-save').onclick=()=>{if(!this.node)return;this.seen.add(this.node.id);try{localStorage.setItem('earth-discoveries',JSON.stringify([...this.seen]))}catch{}this.$('place-saved').textContent='已记录这处发现'};this.$('place-body').addEventListener('click',e=>{const b=e.target.closest('[data-place-link]');if(!b)return;e.preventDefault();e.stopPropagation();let target=this.references?.get(b.dataset.placeLink);if(target?.physical){const d=resolveKnowledge(this.node),name=b.textContent;const excerpts=String(d[this.tab]||'').split('\n').filter(p=>p.includes(name));target={...target,knowledge:{theme:target.category,geo:excerpts.join('\n')||target.name+'的参考位置已在地图中标出。',scope:'linked-geography',sources:[...d.sources,source]}};}if(target)this.onSelect?.(target)});this.directoryReady=fetch('place-directory.json?v=38').then(r=>{if(!r.ok)throw Error('directory');return r.json()}).then(nodes=>{this.directory=nodes;this.renderContent()}).catch(()=>{});this.ready=fetch('world-countries.geojson').then(r=>r.json()).then(d=>{this.features=d.features}).catch(()=>{this.error=true})}
 setReferences(nodes){this.referenceNodes=nodes;this.renderContent()}
 linkedText(text){
  const n=this.node,country=n.kind==='country'?n.id:n.country;
  let groups=this.linkGroups,names=this.linkNames;
  if(this.linkNode!==n||this.linkDirectory!==this.directory||this.linkReferences!==this.referenceNodes){
  const continents=Object.entries(continentNames).map(([id,name])=>({id,name,kind:'continent',lat:({Asia:38,Africa:2,Europe:50,'North America':40,'South America':-20,Oceania:-25,Antarctica:-80})[id],lon:({Asia:100,Africa:20,Europe:18,'North America':-105,'South America':-60,Oceania:135,Antarctica:0})[id]}));
  const targets=[...(this.directory||[]),...continents,...earthPlaces,...(this.referenceNodes||[])].filter(p=>p.id!==n.id);
  names=new Map();this.references=new Map();
  const rank=p=>(p.country===country||p.countries?.includes(country)?4:0)+(p.region===n.region&&p.region?2:0)+(p.kind==='poi'?1:0);
  for(const target of targets){this.references.set(target.id,target);for(const name of [target.name,...(target.aliases||[])]){if(!name||name.length<2||genericPlaceWords.has(name))continue;const old=names.get(name);if(!old||rank(target)>old.rank)names.set(name,{target,rank:rank(target),ambiguous:false});else if(old.target.id!==target.id&&rank(target)===old.rank)old.ambiguous=true;}}
  groups=new Map();for(const [key,value] of names){if(value.ambiguous)continue;const group=groups.get(key[0])||[];group.push(key);groups.set(key[0],group)}for(const group of groups.values())group.sort((a,b)=>b.length-a.length);
  this.linkGroups=groups;this.linkNames=names;this.linkNode=n;this.linkDirectory=this.directory;this.linkReferences=this.referenceNodes;
  }
  let out='',i=0;
  while(i<text.length){const key=(groups.get(text[i])||[]).find(k=>text.startsWith(k,i));if(key){const target=names.get(key).target;out+=`<button type="button" class="place-inline-link" data-place-link="${escape(target.id)}" aria-label="${escape(key)}">${escape(key)}</button>`;i+=key.length}else out+=escape(text[i++])}return out;
 }
 $(id){return this.panel.querySelector('#'+id)}
 start(){this.dismiss()}
 stop(){this.dismiss()}
 dismiss(){this.panel.hidden=true;this.onChange?.()}
 showNode(n,{children=[],onFocus,onSelect}={}){this.node=n;this.onFocus=onFocus;this.onSelect=onSelect;this.tab='geo';this.referenceNodes=[];this.panel.hidden=false;this.panel.classList.remove('moving','folded');this.panel.classList.toggle('place-is-cluster',n.kind==='cluster');this.$('place-source-details').open=false;this.$('place-name').textContent=n.name+(n.nearby?'附近':'');this.$('place-scope').textContent=({continent:'大洲',country:'国家 / 地区',region:'省 / 州',city:n.nearby?'距城市参考点约 '+n.distance.toFixed(1)+' km':'城市',water:'点击位置',poi:n.category||'具体地点 · 参考位置',cluster:'同一屏幕区域 · 点名称展开',point:'点击位置 · 尚无已核实地名'}[n.kind]);this.$('place-saved').textContent='';this.$('place-enter').hidden=!onFocus;this.$('place-enter').textContent=['city','poi'].includes(n.kind)?'在地图上居中 ↗':'进入这片区域 ↗';this.$('place-enter').onclick=onFocus;this.setChildren(children);this.renderContent();this.$('place-body').scrollTop=0;if(window.EARTH_STATE)window.EARTH_STATE.place={id:n.id,name:n.name,kind:n.kind};this.onChange?.()}
 setChildren(nodes){const box=this.$('place-children');box.replaceChildren();if(!nodes.length)return;const label=document.createElement('p');label.className='children-caption';label.textContent=this.node.kind==='cluster'?'选择具体地点':(['city','poi','point'].includes(this.node.kind)?'附近具体地点 · ':'继续了解 · ')+nodes.length+' 处'+(this.node.kind==='region'?'城市与地点':['city','poi','point'].includes(this.node.kind)?'地点':'区域与地点');box.append(label);for(const n of nodes){const b=document.createElement('button');b.textContent=n.name;b.onclick=()=>this.onSelect?.(n);box.append(b)}}
 facts(n){const t=n.tags||{},address=[t['addr:city'],t['addr:street'],t['addr:housenumber']].filter(Boolean).join(' '),rows=[['地点类别',n.category],['地址',address],['品牌',t.brand],['运营方',t.operator],['地图记录营业时间',t.opening_hours],['楼层',t['building:levels']],['坐标',n.lat.toFixed(5)+'°, '+n.lon.toFixed(5)+'°']].filter(([,value])=>value);return '<dl class="place-facts">'+rows.map(([name,value])=>'<div><dt>'+escape(name)+'</dt><dd>'+escape(value)+'</dd></div>').join('')+'</dl><p class="place-record-note">开放地图记录可能过时，不能当作实时营业确认。'+(!address?'这条记录暂无详细地址。':'')+'</p>';}
 renderContent(){
 const n=this.node;if(!n)return;
 if(n.kind==='cluster'){this.$('place-theme').textContent='这些地点在当前视角下靠得很近。';this.$('place-content').innerHTML='<p>点名称查看具体地点，或继续放大让标记分开。</p>';this.$('place-sources').replaceChildren();return}
 const c=n.kind==='country'?n:this.features.find(f=>f.properties.id===n.country)?.properties;
 const d=resolveKnowledge(n,c);
 this.$('place-theme').innerHTML=this.linkedText(d.theme||'');this.panel.querySelector('[data-place-tab=geo]').textContent=d.pending?'地点信息':'地理特征';
 const tabs=this.panel.querySelectorAll('[data-place-tab]');
 if(!d[this.tab])this.tab='geo';
 for(const b of tabs){b.hidden=!d[b.dataset.placeTab];b.setAttribute('aria-selected',String(b.dataset.placeTab===this.tab));}
 this.$('place-content').innerHTML=n.osm&&this.tab==='geo'?this.facts(n):String(d[this.tab]||'').split('\n').filter(Boolean).map(p=>{const i=p.indexOf('：');return '<p>'+(i>0&&i<18?'<strong>'+this.linkedText(p.slice(0,i))+'</strong>：'+this.linkedText(p.slice(i+1)):this.linkedText(p))+'</p>'}).join('');
 this.$('place-sources').innerHTML=(d.attribution?'<p>'+escape(d.attribution)+'</p>':'')+d.sources.map(([title,url])=>`<a href="${escape(url)}" target="_blank" rel="noopener">${escape(title)} ↗</a>`).join('');
 if(window.EARTH_STATE)window.EARTH_STATE.knowledge={revision:contentRevision,scope:d.scope,id:n.id,tab:this.tab};
 }
}

export function resolveKnowledge(n,c){
 const profile=countryProfiles[n.id];
 // Every authored entry is bound to its place. Countries and nearby landmarks cannot masquerade as cities.
 let d=(n.osm?osmDescription(n):null)||earthPlaces.find(p=>p.id===n.id)||local[n.id]||regionalKnowledge[n.id]||worldCityKnowledge[n.id];
 if(!d&&n.kind==='city')d=(n.country==='CHN'?cityKnowledge[n.name]:null)||internationalCity(n);
 if(!d&&n.kind==='city'&&n.country==='CHN'&&['CN-BJ','CN-SH','CN-TJ','CN-CQ'].includes(n.region))d=regionalKnowledge[n.region];
 if(!d&&n.kind==='country'&&profile)d={theme:profile.theme||n.name+' · 山水与人类活动',geo:profile.intro,culture:profile.culture,see:profile.see||stories.filter(s=>s.country===n.id).map(s=>s.name+'：'+s.geo).join('\n'),sources:profile.sources||[profile.source]};
 if(!d&&n.kind==='continent')d=continentProfiles[n.id];
 if(!d&&n.knowledge)d=n.knowledge;
 if(d)return {...d,scope:d.scope||'place',sources:[...(d.sources||[source]),...(n.knowledge&&d!==n.knowledge?[n.knowledge.sources[0]]:[])]};
 const where=n.kind==='city'?`${n.name}位于${c?.name||n.country||'地图所示区域'}。`:n.kind==='region'?`${n.name}是${c?.name||n.country||'地图所示地区'}的一个行政区域。`:n.kind==='country'?`${n.name}的参考边界和名称已在地图中标出。`:'当前选中位置已在地图中标出。';
 return {theme:'这处地点的详细资料仍待补充',geo:where+'\n当地地形、历史与具体看点尚未收录。',scope:'missing',pending:true,culture:null,see:null,sources:[source]};
}
function internationalCity(n){
 const ids={JPN:{'京都':'kyoto'},FRA:{'巴黎':'paris'},ITA:{'罗马':'rome'},IND:{'阿格拉':'taj'}};
 const id=ids[n.country]?.[n.name];return id?stories.find(s=>s.id===id):null;
}
