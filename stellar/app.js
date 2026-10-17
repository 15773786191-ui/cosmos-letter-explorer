import * as THREE from './vendor/three.module.js';

const $ = id => document.getElementById(id);
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
const state = {mass:1,progress:2,playing:false,cutaway:false,compare:false,yaw:.18,pitch:1.37,distance:11,answer:null};
const stageNames = ['星云','原恒星','主序星','巨星','释放物质','遗迹'];
const english = ['MOLECULAR CLOUD','PROTOSTAR','MAIN SEQUENCE','GIANT PHASE','MATERIAL RETURNS','STELLAR REMNANT'];
const common = [
 {title:'从一团气体开始',text:'星际气体与尘埃中，有些区域逐渐聚集、收缩。恒星的故事，从这些致密的地方开始。',why:'物质聚得越多，引力越强。致密区域继续吸引周围物质，逐渐向内塌缩。',observe:'推进到“原恒星”，看分散的物质怎样向中心聚集。',action:'观察下一阶段',time:'形成过程 · 先聚集，再收缩',q:'还没有稳定的核聚变，物质为什么也能聚到一起？',answers:['引力可以让物质互相吸引','必须先发光，才会有引力'],correct:0,feedback:'引力并不需要发光才存在。气体聚集、塌缩，会释放引力势能并使内部升温。'},
 {title:'先升温，再点亮',text:'中心越来越致密、越来越热。这时的原恒星已有能量释放，但还没进入稳定的氢聚变阶段。',why:'收缩释放引力势能，使气体升温。只有核心达到足够高的温度与密度，氢核聚变才能持续进行。',observe:'打开内部视图，关注中心。下一阶段，主要能量来源会改变。',action:'查看内部',time:'形成过程 · 收缩释放能量',q:'原恒星还没有稳定的氢聚变，能量主要从哪里来？',answers:['收缩释放的引力势能','在太空里燃烧氧气'],correct:0,feedback:'原恒星主要靠收缩释放能量；恒星的发光并不是木柴那样的燃烧。'},
 {title:'一场持久的平衡',text:'核心把氢转变为氦，释放能量。恒星进入主序阶段，生命中大部分时间都在这里度过。',why:'引力让物质向内聚集，内部压力提供向外的支持。核聚变持续供能，使恒星能长时间维持结构。',observe:'查看内部，观察向内的引力与向外的压力支持。再选一颗更重的恒星比较。',action:'查看内部',time:'主序阶段 · 最漫长的一段',q:'更重的恒星有更多燃料，为什么仍可能活得更短？',answers:['核心更热，消耗燃料的速度增加得更多','燃料更多，所以一定活得更久'],correct:0,feedback:'大质量恒星需要更快地产生能量来支持自身。它们虽然燃料更多，却消耗得更快：寿命常为数百万至数千万年，太阳型则可达数十亿年。'},
 {title:'核心收缩，外层膨胀',text:'核心中的氢逐渐耗尽，原来的结构开始改变。你会看到恒星外层膨胀，表面颜色变红。',why:'核心收缩并升温，周围壳层继续聚变；后续还会出现其他聚变阶段。内部与外层的变化不同，不能把整颗星理解成一起膨胀。',observe:'切开恒星：外层变大，不等于核心也变大。',action:'查看内部',time:'晚期演化 · 核心与外层不同步',q:'恒星外层膨胀时，核心一定也在膨胀吗？',answers:['不一定，核心可能正在收缩','一定，整颗星总是一起变大'],correct:0,feedback:'外层和核心可以有不同变化。核心氢耗尽后，核心收缩，壳层聚变和结构调整可使外层膨胀。'},
 {},{}
];
function content(mass,stage){
 const big=mass>1, black=mass===30;
 if(stage<4){const c={...common[stage]};if(stage===3){c.title=big?'向超巨星演化':'向红巨星演化';if(big)c.text='核心氢耗尽后，大质量恒星进入晚期演化。本例展示红超巨星阶段，内部还会陆续发生更重元素的聚变。';}return c;}
 if(stage===4&&!big)return {title:'外层回到太空',text:'太阳型恒星晚期失去外层，留下被气体包围的炽热核心。发光的气体云称为行星状星云。',why:'外层的物质被抛出，裸露的高温核心照亮周围气体。“行星状”是历史名称，不表示它由行星组成。',observe:'看向中心：外层散开以后，核心还在。试试与大质量恒星并排比较。',action:'并排比较',time:'晚期 · 失去外层',q:'行星状星云里的气体主要来自哪里？',answers:['这颗恒星失去的外层','周围行星突然一起爆炸'],correct:0,feedback:'它主要是恒星失去的外层气体；名称里的“行星”并不是它的来源。'};
 if(stage===4)return {title:'核心塌缩，物质抛出',text:'本例展示核心塌缩超新星路径：中心失去足够的支持，迅速塌缩，爆发把大量外层物质抛向太空。',why:'晚期聚变会形成铁核。继续把铁聚变成更重的元素不能像前面的反应那样供能；核心增重并失稳，最终塌缩。爆发机制比简单的“弹一下”复杂。',observe:'推进到最后：外层物质散开，中心会留下怎样的遗迹？',action:'观察下一阶段',time:'塌缩与爆发 · 远短于主序寿命',q:'核心里的铁为什么不能继续像氢一样供能？',answers:['继续聚变铁需要消耗能量','铁太亮，把能量全照走了'],correct:0,feedback:'前面的聚变阶段能释放能量；继续将铁聚变成更重的元素需要输入能量，不能继续靠它维持同样的支持。'};
 if(!big)return {title:'白矮星，慢慢冷却',text:'外层散去后，留下很致密的白矮星，大小与地球相近。它不再像主序星那样靠稳定的核心氢聚变发光。',why:'白矮星依靠残留的热量逐渐冷却。支撑它的关键是电子简并压力：这是量子规律产生的支持，不是持续聚变。',observe:'切换到大质量路径，比较留下的遗迹。画面将遗迹放大，真实大小差异远大于这里。',action:'比较不同结局',time:'遗迹阶段 · 漫长的冷却',q:'太阳型恒星最终会直接变成黑洞吗？',answers:['这条单星路径留下白矮星','所有恒星最后都变成黑洞'],correct:0,feedback:'太阳型恒星的单星演化留下白矮星。黑洞并不是每一颗恒星的必经终点。'};
 if(!black)return {title:'留下中子星',text:'这条示例路径留下中子星：把超过太阳质量的物质，压进直径约几十千米的区域。',why:'核心塌缩时，许多电子与质子结合形成中子。遗迹靠致密物质的压力支持，已不再是普通恒星的内部结构。',observe:'选择30倍太阳质量示例，看看另一种可能结局。初始质量不能唯一决定遗迹类型。',action:'比较不同结局',time:'遗迹阶段 · 极度致密',q:'画面里的中子星很小，它的质量一定很小吗？',answers:['不一定，小体积也能容纳很大质量','一定，小物体都很轻'],correct:0,feedback:'质量与体积是不同概念。中子星的体积很小，但质量可超过太阳，因此密度极高。'};
 return {title:'形成恒星级黑洞',text:'这条示例路径中，留下的核心继续塌缩，形成黑洞。图中的暗区用来标示事件视界的边界。',why:'在事件视界以内，连光也无法逃到外界。是否形成黑洞与核心最终状态有关，不能只凭初始质量作唯一判断。',observe:'与太阳型恒星并排看：相似的开端，可以走向截然不同的结局。',action:'并排比较',time:'遗迹阶段 · 事件视界出现',q:'把太阳型恒星换成一颗更重的恒星，能否唯一确定结局？',answers:['不能，还要考虑质量损失、成分等因素','能，初始质量直接决定唯一结局'],correct:0,feedback:'初始质量非常重要，但并非全部。质量损失、成分、旋转及伴星相互作用，都会影响核心最终状态。本页只展示代表性路径。'};
}
let lastStage=-1,lastMass=-1;
function update(){
 const stage=Math.min(5,Math.floor(state.progress+.001));
 const c=content(state.mass,stage),big=state.mass>1;
 $('phase-title').textContent=c.title;$('phase-en').textContent=english[stage];$('phenomenon').textContent=c.text;$('reason').textContent=c.why;$('observe').textContent=c.observe;$('observe-action').textContent=c.action;$('phase-time').textContent=c.time;$('stage-count').textContent=`阶段 ${stage+1} / 6`;
 $('view-name').textContent=big?`${state.mass} 倍太阳质量 · 示例路径`:'1 倍太阳质量 · 太阳型';
 $('object-left').textContent=(state.compare?'所选：':'')+c.title;
 const referenceMass=state.mass===1?15:1;
 $('object-right').textContent=(referenceMass===1?'太阳型对照：':'15倍质量对照：')+content(referenceMass,stage).title;
 $('object-right').hidden=!state.compare;
 $('legend').hidden=!state.cutaway||stage===0||stage>3;
 $('core-label').textContent=stage===1?'中心：收缩升温':stage===2?'核心：氢聚变':big?'内部：多层聚变示意':'内部：氦核与壳层聚变示意';
 $('shell-label').textContent=stage===3?'外层膨胀，核心更致密':'高温气体提供压力支持';
 document.querySelector('.force-caption').hidden=stage!==2;
 $('route-note').hidden=!big;
 $('cutaway').disabled=stage===0||stage>3;
 $('cutaway').textContent=state.cutaway?'返回表面':'查看内部';$('cutaway').setAttribute('aria-pressed',String(state.cutaway));
 $('compare').setAttribute('aria-pressed',String(state.compare));$('compare').textContent=state.compare?'结束比较':'并排比较';
 $('play').textContent=state.playing?'Ⅱ 暂停演化':'▶ 自动演化';
 $('next').disabled=stage===5;
 $('evolution').value=state.progress;
 document.querySelectorAll('[data-mass]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.mass)===state.mass)));
 [...$('stages').children].forEach((b,i)=>{b.classList.toggle('active',i===stage);b.setAttribute('aria-current',i===stage?'step':'false');});
 if(lastStage!==stage||lastMass!==state.mass){
  $('question-title').textContent=c.q; $('answers').replaceChildren();$('feedback').hidden=true;state.answer=null;
  c.answers.forEach((text,i)=>{const b=document.createElement('button');b.textContent=text;b.onclick=()=>{state.answer=i;[...$('answers').children].forEach((button,j)=>{button.classList.toggle('correct',j===i&&i===c.correct);button.classList.toggle('incorrect',j===i&&i!==c.correct);button.setAttribute('aria-pressed',String(j===i));});$('feedback').textContent=(i===c.correct?'这个判断有依据。':'再想想刚才的变化。')+c.feedback;$('feedback').hidden=false;};$('answers').append(b);});
  lastStage=stage;lastMass=state.mass;
 }
 $('viewport').setAttribute('aria-label',`${c.title}的三维示意。${c.text}${state.compare?' 同时显示太阳型恒星对照。':''}`);
 window.STELLAR_STATE={...state,stage};
}
function stop(){state.playing=false;}
stageNames.forEach((name,i)=>{const b=document.createElement('button');b.textContent=name;b.onclick=()=>{stop();state.progress=i;update();};$('stages').append(b);});
document.querySelectorAll('[data-mass]').forEach(b=>b.onclick=()=>{state.mass=Number(b.dataset.mass);stop();update();});
$('play').onclick=()=>{if(state.progress>=5)state.progress=0;state.playing=!state.playing;update();};
$('next').onclick=()=>{stop();state.progress=Math.min(5,Math.floor(state.progress)+1);update();};
$('evolution').oninput=e=>{stop();state.progress=Number(e.target.value);update();};
$('cutaway').onclick=()=>{state.cutaway=!state.cutaway;update();};
$('compare').onclick=()=>{state.compare=!state.compare;update();};
$('observe-action').onclick=()=>{stop();const stage=Math.floor(state.progress);if(stage===0||stage===4){state.progress=Math.min(5,stage+1);}else if(stage>=5){if(state.mass===1)state.mass=15;else if(state.mass===15)state.mass=30;state.compare=true;}else{state.cutaway=true;}update();};
$('sources').onclick=()=>{stop();update();$('source-dialog').showModal();};
$('source-dialog').onclick=e=>{if(e.target===$('source-dialog'))$('source-dialog').close();};
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();update();}});
update();

// These are explanatory graphics, not a physical stellar-evolution solver.
const viewport=$('viewport');
let renderer;
try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});}
catch(e){$('render-error').hidden=false;window.STELLAR_RENDER_ERROR=String(e);}
if(renderer){
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x080d17);renderer.outputColorSpace=THREE.SRGBColorSpace;
 viewport.prepend(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(40,1,.1,200);
 const rand=(()=>{let seed=2141;return()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};})();
 const sphereGeometry=new THREE.SphereGeometry(1,72,48);
 const clip=new THREE.Plane(new THREE.Vector3(0,0,-1),0);
 renderer.localClippingEnabled=true;
 const noiseGLSL=`float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}float fbm(vec3 p){return .55*noise(p)+.28*noise(p*2.1)+.14*noise(p*4.3)+.07*noise(p*8.1);}`;
 const starVertex=`varying vec3 vP;varying vec3 vN;varying vec3 vView;
 #include <clipping_planes_pars_vertex>
 void main(){vP=position;vN=normalize(normalMatrix*normal);vec4 mvPosition=modelViewMatrix*vec4(position,1.);vView=normalize(-mvPosition.xyz);gl_Position=projectionMatrix*mvPosition;
 #include <clipping_planes_vertex>
 }`;
 const starFragment=`uniform float uTime;uniform vec3 uColor;uniform float uDark;varying vec3 vP;varying vec3 vN;varying vec3 vView;
 #include <clipping_planes_pars_fragment>
 ${noiseGLSL}
 void main(){
 #include <clipping_planes_fragment>
 float n=fbm(vP*7.+vec3(uTime*.06,0,uTime*.02));float fine=noise(vP*44.+uTime*.1);float limb=pow(max(0.,dot(normalize(vN),normalize(vView))),.5);vec3 hot=mix(uColor*.38,uColor*1.65,smoothstep(.27,.75,n));hot+=vec3(1.,.72,.38)*pow(n,7.)*2.;hot*=.45+.55*limb;hot+=fine*.06;gl_FragColor=vec4(mix(hot,vec3(.002,.004,.012),uDark),1.);}`;
 const pointVertex=`attribute float aSize;varying vec3 vColor;uniform float uScale;uniform float uOpacity;void main(){vColor=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uScale/(-mv.z),1.,60.);}`;
 const pointFragment=`uniform float uOpacity;varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5)*2.;float a=pow(max(0.,1.-d),2.);if(a<.015)discard;gl_FragColor=vec4(vColor,a*uOpacity);}`;
 function cloudGeometry(count,background=false){const g=new THREE.BufferGeometry(),p=new Float32Array(count*3),colors=new Float32Array(count*3),sizes=new Float32Array(count),directions=[],radii=[];for(let i=0;i<count;i++){const a=rand()*Math.PI*2,z=rand()*2-1,rad=Math.sqrt(1-z*z);directions.push(new THREE.Vector3(rad*Math.cos(a),z,rad*Math.sin(a)));radii.push(Math.pow(rand(),.5));const color=new THREE.Color().setHSL(.56+rand()*.23,.35+rand()*.3,.3+rand()*.4);colors.set([color.r,color.g,color.b],i*3);sizes[i]=background?1.2+rand()*2:5+rand()*25;if(background){p.set(directions[i].clone().multiplyScalar(40+rand()*25).toArray(),i*3);}}
 g.setAttribute('position',new THREE.BufferAttribute(p,3));g.setAttribute('color',new THREE.BufferAttribute(colors,3));g.setAttribute('aSize',new THREE.BufferAttribute(sizes,1));return {g,directions,radii};}
 function model(){
  const scene=new THREE.Scene();
  const bg=cloudGeometry(1500,true);const bgmat=new THREE.ShaderMaterial({uniforms:{uScale:{value:140},uOpacity:{value:.9}},vertexShader:pointVertex,fragmentShader:pointFragment,vertexColors:true,transparent:true,depthWrite:false});scene.add(new THREE.Points(bg.g,bgmat));
  const mat=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uColor:{value:new THREE.Color('#ffa959')},uDark:{value:0}},vertexShader:starVertex,fragmentShader:starFragment,clipping:true});
  const star=new THREE.Mesh(sphereGeometry,mat);scene.add(star);
  const glowMat=new THREE.ShaderMaterial({uniforms:{color:{value:new THREE.Color('#ff8844')},opacity:{value:.3}},vertexShader:'varying vec3 vN;varying vec3 vV;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',fragmentShader:'uniform vec3 color;uniform float opacity;varying vec3 vN;varying vec3 vV;void main(){float rim=pow(max(0.,1.-abs(dot(normalize(vN),normalize(vV)))),3.);gl_FragColor=vec4(color,rim*opacity);}',transparent:true,side:THREE.BackSide,blending:THREE.AdditiveBlending,depthWrite:false});
  const glow=new THREE.Mesh(sphereGeometry,glowMat);scene.add(glow);
  const gas=cloudGeometry(4500);const gasmat=new THREE.ShaderMaterial({uniforms:{uScale:{value:180},uOpacity:{value:.8}},vertexShader:pointVertex,fragmentShader:pointFragment,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});const particles=new THREE.Points(gas.g,gasmat);scene.add(particles);
  const interior=new THREE.Group();const disk=new THREE.Mesh(new THREE.CircleGeometry(.985,72),new THREE.MeshBasicMaterial({color:0xa04635,side:THREE.DoubleSide}));disk.position.z=.006;interior.add(disk);
  const shell=new THREE.Mesh(new THREE.CircleGeometry(.61,72),new THREE.MeshBasicMaterial({color:0xe88941,side:THREE.DoubleSide}));shell.position.z=.012;interior.add(shell);
  const core=new THREE.Mesh(new THREE.CircleGeometry(.32,72),new THREE.MeshBasicMaterial({color:0xffe5ac,side:THREE.DoubleSide}));core.position.z=.018;interior.add(core);
  for(const r of [.35,.63]){const ring=new THREE.Mesh(new THREE.RingGeometry(r-.008,r+.008,72),new THREE.MeshBasicMaterial({color:0xfee4bb,transparent:true,opacity:.7,side:THREE.DoubleSide}));ring.position.z=.024;interior.add(ring);}scene.add(interior);
  const arrows=new THREE.Group();for(let i=0;i<6;i++){const angle=i*Math.PI/3;const dir=new THREE.Vector3(Math.cos(angle),Math.sin(angle),0);arrows.add(new THREE.ArrowHelper(dir.clone().negate(),dir.clone().multiplyScalar(2.25),.5,0xffae66,.16,.09));arrows.add(new THREE.ArrowHelper(dir,dir.clone().multiplyScalar(1.45),.5,0x85c7ff,.16,.09));}scene.add(arrows);
  const horizon=new THREE.Mesh(new THREE.TorusGeometry(.52,.012,8,96),new THREE.MeshBasicMaterial({color:0x9cb4cd,transparent:true,opacity:.8}));scene.add(horizon);
  return {scene,star,glow,mat,glowMat,particles,gas,gasmat,interior,core,shell,arrows,horizon};
 }
 const primary=model(),reference=model();
 function keyframes(mass){const big=mass>1;return [
  {r:.04,cloud:5.7,gas:1,color:'#ca8855',glow:.02},
  {r:.65,cloud:2.6,gas:.8,color:'#ff9b52',glow:.13},
  {r:big?1.45:1.12,cloud:0,gas:0,color:big?'#a8caff':'#ffc66c',glow:.28},
  {r:big?2.8:2.35,cloud:0,gas:0,color:'#ff7543',glow:.23},
  {r:big?.18:.21,cloud:4.5,gas:big?.9:.68,color:'#deeeff',glow:big?.6:.25},
  {r:mass===30?.48:big?.14:.25,cloud:6.4,gas:mass===1?.42:.26,color:'#c1deff',glow:mass===30?0:.22}
 ];}
 const lerp=(a,b,t)=>a+(b-a)*t;
 const colA=new THREE.Color(),colB=new THREE.Color(),temp=new THREE.Vector3();
 function paint(m,mass,time){
  const k=keyframes(mass),i=Math.min(5,Math.floor(state.progress)),f=state.progress-i,t=f*f*(3-2*f),a=k[i],b=k[Math.min(5,i+1)];
  const radius=lerp(a.r,b.r,t),cloud=lerp(a.cloud,b.cloud,t),opacity=lerp(a.gas,b.gas,t);
  m.star.scale.setScalar(radius);m.star.rotation.y=time*.028;m.mat.uniforms.uTime.value=time;
  m.mat.uniforms.uColor.value.copy(colA.set(a.color).lerp(colB.set(b.color),t));
  const dark=mass===30?clamp(state.progress-4,0,1):0;m.mat.uniforms.uDark.value=dark;
  m.glow.scale.setScalar(radius*1.22);m.glowMat.uniforms.color.value.copy(m.mat.uniforms.uColor.value);m.glowMat.uniforms.opacity.value=lerp(a.glow,b.glow,t);
  const section=state.cutaway&&i>0&&i<4;
  m.mat.clippingPlanes=section?[clip]:[];m.interior.visible=section;m.interior.scale.setScalar(radius);
  m.core.scale.setScalar(i===3?.7:1);m.shell.material.color.set(i===3&&mass>1?0xdc763b:0xe88941);
  m.arrows.visible=section&&i===2;m.arrows.scale.setScalar(radius/1.12);
  m.glow.visible=!section&&radius>.1;
  m.horizon.visible=mass===30&&state.progress>=4.85;
  const positions=m.gas.g.attributes.position;
  for(let p=0;p<m.gas.directions.length;p++){
   const d=m.gas.directions[p],r=m.gas.radii[p];let radial=cloud*r;
   if(i>=4)radial=cloud*(.65+.35*r);
   const wobble=.07*Math.sin(time*.3+p*.014);
   temp.copy(d).multiplyScalar(radial+wobble);
   if(i<2)temp.y*=.58+f*.18;
   positions.setXYZ(p,temp.x,temp.y,temp.z);
  }
  positions.needsUpdate=true;m.gasmat.uniforms.uOpacity.value=opacity;
  m.particles.visible=opacity>.002;m.particles.rotation.y=time*(i<2?.02:.009);
 }
 let width=1,height=1;
 function resize(){width=viewport.clientWidth;height=viewport.clientHeight;renderer.setSize(width,height,false);camera.aspect=(state.compare?width/2:width)/height;camera.updateProjectionMatrix();}
 new ResizeObserver(resize).observe(viewport);resize();
 let pointer=null,pinch=null;
 const touches=new Map();
 viewport.addEventListener('pointerdown',e=>{touches.set(e.pointerId,{x:e.clientX,y:e.clientY});viewport.setPointerCapture(e.pointerId);pointer={id:e.pointerId,x:e.clientX,y:e.clientY};if(touches.size===2){const pts=[...touches.values()];pinch=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);}});
 viewport.addEventListener('pointermove',e=>{if(!touches.has(e.pointerId))return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touches.size===2){const pts=[...touches.values()],dist=Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);if(pinch)state.distance=clamp(state.distance*pinch/Math.max(10,dist),8,18);pinch=dist;return;}if(pointer&&pointer.id===e.pointerId){state.yaw-=(e.clientX-pointer.x)*.007;state.pitch=clamp(state.pitch-(e.clientY-pointer.y)*.005,.38,2.75);pointer={id:e.pointerId,x:e.clientX,y:e.clientY};}});
 function release(e){touches.delete(e.pointerId);pointer=null;pinch=null;}
 viewport.addEventListener('pointerup',release);viewport.addEventListener('pointercancel',release);
 viewport.addEventListener('wheel',e=>{e.preventDefault();state.distance=clamp(state.distance+e.deltaY*.012,8,18);},{passive:false});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();update();$('render-error').hidden=false;});
 const clock=new THREE.Clock();let lastUI=0,frames=0;
 function frame(){requestAnimationFrame(frame);const delta=Math.min(clock.getDelta(),.08),time=clock.elapsedTime;
  if(document.hidden)return;
  if(state.playing){state.progress=Math.min(5,state.progress+delta/8);if(state.progress===5)state.playing=false;if(time-lastUI>.08){update();lastUI=time;}}
  paint(primary,state.mass,time);if(state.compare)paint(reference,state.mass===1?15:1,time);
  const largestRadius=Math.max(primary.star.scale.x,state.compare?reference.star.scale.x:0);
  const cameraDistance=state.distance*.65*(state.compare?1.35:1)+Math.max(0,largestRadius-1.65)*3.8;
  camera.position.set(cameraDistance*Math.sin(state.pitch)*Math.sin(state.yaw),cameraDistance*Math.cos(state.pitch),cameraDistance*Math.sin(state.pitch)*Math.cos(state.yaw));camera.lookAt(0,0,0);
  renderer.setScissorTest(true);const viewWidth=state.compare?Math.floor(width/2):width;camera.aspect=viewWidth/height;camera.updateProjectionMatrix();
  renderer.setViewport(0,0,viewWidth,height);renderer.setScissor(0,0,viewWidth,height);renderer.render(primary.scene,camera);
  if(state.compare){renderer.setViewport(viewWidth,0,width-viewWidth,height);renderer.setScissor(viewWidth,0,width-viewWidth,height);renderer.render(reference.scene,camera);}
  renderer.setScissorTest(false);if(++frames===3)window.STELLAR_READY=true;
 }
 frame();
}
