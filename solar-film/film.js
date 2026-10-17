import * as THREE from '../stellar/vendor/three.module.js';

const $=id=>document.getElementById(id),data=window.FILM,cues=data.cues;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const mix=(a,b,t)=>a+(b-a)*t;
const audio=$('narration');
const state={index:0,playing:false,started:false,predicted:false,subtitles:true,ended:false,token:0};
const headings={sun:['先问一个问题','它会一直亮下去吗？'],future:['把时间快进数十亿年','太阳的一生，也有终点。'],question:['现在，向里面走','发光的秘密，在核心。'],fusion:['能量，从这里开始','氢，到氦。'],balance:['两种作用，同时存在','为什么没有被自己压垮？'],pressure:['向外的支持','高温气体的压力。'],compare:['换一个起点','更多燃料，更长寿命？'],burn:['看见一个反直觉的结果','更多，也消耗得更快。'],paths:['分岔的旅程','相似的开端，不同的结局。'],end:['两条线索','能量，平衡，和时间。']};
const fmt=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
$('duration').textContent=`${fmt(data.duration)} · 中文讲解 · 一次预测`;
$('seek').max=data.duration;
function ui(){
 const cue=cues[state.index],h=headings[cue.scene];
 $('chapter').textContent=h[0];$('heading').textContent=h[1];
 $('caption').textContent=cue.text;$('caption').hidden=!state.started||!state.subtitles||state.ended||!$('prediction').hidden;
 $('scene-heading').hidden=!state.started||state.ended||!$('prediction').hidden;
 const compared=['compare','burn','paths'].includes(cue.scene);
 $('labels').hidden=!state.started||!compared||!$('prediction').hidden||state.ended;
 $('left-label').textContent=cue.scene==='paths'?'太阳型 → 白矮星':'太阳型恒星';
 $('right-label').textContent=cue.scene==='paths'?'大质量 → 中子星或黑洞':'大质量恒星';
 $('play').textContent=state.playing?'Ⅱ':'▶';$('play').setAttribute('aria-label',state.playing?'暂停讲解':'播放讲解');
 const time=clamp(cue.start+(audio.currentTime||0),0,data.duration);
 $('seek').value=state.ended?data.duration:time;$('time').textContent=`${fmt(state.ended?data.duration:time)} / ${fmt(data.duration)}`;
 window.SOLAR_STATE={...state,scene:cue.scene,time};
}
function begin(){state.started=true;state.ended=false;$('opening').hidden=true;$('ending').hidden=true;ui();}
function pause(){state.token++;audio.pause();state.playing=false;ui();}
async function play(){const token=++state.token;try{await audio.play();if(token!==state.token)return;state.playing=true;$('status').hidden=true;}catch(e){if(token!==state.token)return;state.playing=false;$('status').textContent='讲解未能播放，请点播放重试。';$('status').hidden=false;}ui();}
function load(index,offset=0,resume=false){pause();state.index=index;audio.onloadedmetadata=()=>{audio.currentTime=offset;ui();};audio.src=cues[index].audio;ui();if(resume)play();}
function seek(time,resume=state.playing){const t=clamp(time,0,data.duration-.05),index=cues.findIndex(c=>t<c.start+c.duration);state.predicted=index>8?true:state.predicted;state.ended=false;$('ending').hidden=true;$('prediction').hidden=true;load(Math.max(0,index),t-cues[Math.max(0,index)].start,resume);}
$('start').onclick=()=>{begin();play();};
$('play').onclick=()=>{if(!state.started)begin();if(state.ended){state.predicted=false;begin();load(0,0,true);return;}if(!$('prediction').hidden)return;state.playing?pause():play();};
$('seek').oninput=e=>{const t=Number(e.target.value);begin();seek(t,state.playing);};
$('replay').onclick=()=>{state.predicted=false;begin();load(0,0,true);};
$('mute').onclick=()=>{audio.muted=!audio.muted;$('mute').textContent=audio.muted?'声音 关':'声音 开';$('mute').setAttribute('aria-pressed',String(audio.muted));};
$('subtitles').onclick=()=>{state.subtitles=!state.subtitles;$('subtitles').textContent=state.subtitles?'字幕 开':'字幕 关';$('subtitles').setAttribute('aria-pressed',String(state.subtitles));$('subtitles').setAttribute('aria-label',state.subtitles?'关闭字幕':'打开字幕');ui();};
document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{state.predicted=true;window.SOLAR_PREDICTION=b.dataset.answer;$('prediction').hidden=true;load(9,0,true);});
$('info').onclick=()=>{pause();$('notes').showModal();};
$('notes').onclick=e=>{if(e.target===$('notes'))$('notes').close();};
audio.addEventListener('timeupdate',ui);
audio.addEventListener('error',()=>{state.playing=false;$('status').textContent='讲解音频加载失败，请刷新后重试。';$('status').hidden=false;ui();});
audio.addEventListener('ended',()=>{if(state.index===8&&!state.predicted){state.playing=false;$('prediction').hidden=false;ui();return;}if(state.index<cues.length-1)load(state.index+1,0,true);else{state.playing=false;state.ended=true;$('ending').hidden=false;ui();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.playing)pause();});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['BUTTON','INPUT'].includes(document.activeElement.tagName)&&!$('notes').open){e.preventDefault();$('play').click();}});
load(0);

const mount=$('space'),overlay=$('overlay'),ctx=overlay.getContext('2d');
let renderer;
try{renderer=new THREE.WebGLRenderer({antialias:true});}catch(e){$('status').textContent='当前浏览器无法显示三维画面，请换用支持 WebGL 的浏览器。';$('status').hidden=false;window.SOLAR_RENDER_ERROR=String(e);}
if(renderer){
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x060913);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.localClippingEnabled=true;mount.append(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,200);camera.position.set(0,.2,10);
 const geometry=new THREE.SphereGeometry(1,72,48);
 const noise=`float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}float fbm(vec3 p){return .55*noise(p)+.28*noise(p*2.1)+.14*noise(p*4.3)+.07*noise(p*8.1);}`;
 const vert=`varying vec3 vP;varying vec3 vN;varying vec3 vV;
 #include <clipping_planes_pars_vertex>
 void main(){vP=position;vN=normalize(normalMatrix*normal);vec4 mvPosition=modelViewMatrix*vec4(position,1.);vV=normalize(-mvPosition.xyz);gl_Position=projectionMatrix*mvPosition;
 #include <clipping_planes_vertex>
 }`;
 const frag=`uniform float uTime;uniform vec3 uColor;varying vec3 vP;varying vec3 vN;varying vec3 vV;
 #include <clipping_planes_pars_fragment>
 ${noise}void main(){
 #include <clipping_planes_fragment>
 float n=fbm(vP*6.+vec3(uTime*.08,0.,uTime*.03));float limb=pow(max(0.,dot(normalize(vN),normalize(vV))),.48);vec3 c=mix(uColor*.24,uColor*1.8,smoothstep(.22,.77,n));c+=vec3(1.,.7,.3)*pow(n,8.)*2.;gl_FragColor=vec4(c*(.4+.6*limb),1.);}`;
 function makeStar(color){
  const group=new THREE.Group(),mat=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uColor:{value:new THREE.Color(color)}},vertexShader:vert,fragmentShader:frag,clipping:true});
  const ball=new THREE.Mesh(geometry,mat);group.add(ball);
  const glowMat=new THREE.ShaderMaterial({uniforms:{uColor:{value:new THREE.Color(color)}},vertexShader:'varying vec3 vN;varying vec3 vV;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',fragmentShader:'uniform vec3 uColor;varying vec3 vN;varying vec3 vV;void main(){float a=pow(max(0.,1.-abs(dot(normalize(vN),normalize(vV)))),3.);gl_FragColor=vec4(uColor,a*.35);}',side:THREE.BackSide,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});const glow=new THREE.Mesh(geometry,glowMat);glow.scale.setScalar(1.2);group.add(glow);
  const inside=new THREE.Group();[1,.67,.32].forEach((r,i)=>{const disk=new THREE.Mesh(new THREE.CircleGeometry(r,72),new THREE.MeshBasicMaterial({color:[0x9c432c,0xef9444,0xffe4a0][i],side:THREE.DoubleSide}));disk.position.z=.01+i*.01;inside.add(disk);});group.add(inside);inside.visible=false;scene.add(group);return {group,ball,glow,inside,mat,glowMat};
 }
 const sun=makeStar('#ffad52'),big=makeStar('#a7cbff');big.group.visible=false;
 let seed=842;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const bgGeo=new THREE.BufferGeometry(),bgPositions=new Float32Array(2400*3),bgColors=new Float32Array(2400*3);
 for(let i=0;i<2400;i++){const r=35+random()*45,theta=random()*Math.PI*2,z=random()*2-1,k=Math.sqrt(1-z*z);bgPositions.set([r*k*Math.cos(theta),r*z,r*k*Math.sin(theta)],i*3);const c=new THREE.Color().setHSL(.52+random()*.18,.15+random()*.3,.42+random()*.43);bgColors.set([c.r,c.g,c.b],i*3);}
 bgGeo.setAttribute('position',new THREE.BufferAttribute(bgPositions,3));bgGeo.setAttribute('color',new THREE.BufferAttribute(bgColors,3));const background=new THREE.Points(bgGeo,new THREE.PointsMaterial({size:.085,vertexColors:true,transparent:true,opacity:.8,depthWrite:false}));scene.add(background);
 const dustGeo=new THREE.BufferGeometry(),dustDirections=[],dustPositions=new Float32Array(1100*3);
 for(let i=0;i<1100;i++){const a=random()*Math.PI*2,z=random()*2-1,k=Math.sqrt(1-z*z);dustDirections.push(new THREE.Vector3(k*Math.cos(a),z,k*Math.sin(a)));}
 dustGeo.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));const dust=new THREE.Points(dustGeo,new THREE.PointsMaterial({color:0x82b9df,size:.075,transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false}));scene.add(dust);dust.visible=false;
 const fusion=new THREE.Group(),atomMat=new THREE.MeshBasicMaterial({color:0xffe8a6}),atoms=[];
 for(let i=0;i<4;i++){const ball=new THREE.Mesh(new THREE.SphereGeometry(.16,24,16),atomMat);fusion.add(ball);atoms.push(ball);}
 const helium=new THREE.Group();for(let i=0;i<4;i++){const ball=new THREE.Mesh(new THREE.SphereGeometry(.18,24,16),new THREE.MeshBasicMaterial({color:i%2?0x84b7ed:0xffc26e}));ball.position.set((i%2-.5)*.28,(Math.floor(i/2)-.5)*.28,(i%2-.5)*.09);helium.add(ball);}helium.position.x=1.3;fusion.add(helium);scene.add(fusion);fusion.visible=false;
 const clip=new THREE.Plane(new THREE.Vector3(0,0,-1),0);
 let width=1,height=1,scale=1;const mobile=()=>width<700;
 function resize(){width=mount.clientWidth;height=mount.clientHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();scale=Math.min(devicePixelRatio,2);overlay.width=Math.round(width*scale);overlay.height=Math.round(height*scale);ctx.setTransform(scale,0,0,scale,0,0);}
 new ResizeObserver(resize).observe(mount);resize();
 const pos=new THREE.Vector3(),project=p=>{pos.copy(p).project(camera);return {x:(pos.x*.5+.5)*width,y:(-.5*pos.y+.5)*height};};
 const size=r=>height*r/(camera.position.z*Math.tan(THREE.MathUtils.degToRad(21)));
 function text(line,x,y,color='#f5e3c5',font=16,align='center'){ctx.font=`${font}px "PingFang SC",sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(line,x,y);}
 function arrow(x,y,angle,length,color){ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(length,0);ctx.stroke();ctx.beginPath();ctx.moveTo(length,0);ctx.lineTo(length-9,-5);ctx.lineTo(length-9,5);ctx.closePath();ctx.fill();ctx.restore();}
 let targetX=2.5,targetR=2.1,targetBigX=2.2,targetBigR=1.4,targetZ=10;
 const smooth=(current,target,dt)=>mix(current,target,1-Math.exp(-dt*3));
 let currentX=2.5,currentR=2.1,currentBigX=2.2,currentBigR=1.4,currentZ=10;
 const clock=new THREE.Clock();let frames=0,visualTime=0;
 function frame(){requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.1);if(state.playing||!state.started)visualTime+=dt;const time=visualTime;const cue=cues[state.index],mode=cue.scene,phase=clamp((audio.currentTime||0)/cue.duration,0,1);
  if(document.hidden)return;
  ctx.clearRect(0,0,width,height);
  const narrow=mobile();targetX=state.started?0:narrow?1.25:2.8;targetR=state.started?1.6:2.5;targetZ=narrow?12:10;
  sun.group.visible=true;sun.mat.uniforms.uColor.value.set('#ffad52');sun.glowMat.uniforms.uColor.value.set('#ffad52');big.group.visible=false;fusion.visible=false;dust.visible=false;sun.inside.visible=false;sun.mat.clippingPlanes=[];sun.glow.visible=true;
  if(state.started){
   if(mode==='future'){
    const giant=phase<.5;targetR=giant?2.6:.3;sun.mat.uniforms.uColor.value.set(giant?'#ff6437':'#d0e8ff');sun.glowMat.uniforms.uColor.value.copy(sun.mat.uniforms.uColor.value);dust.visible=!giant;
    text(giant?'数十亿年后 · 红巨星':'散去外层 · 白矮星',width/2,height*.65,'#cbd8eb',narrow?14:17);
   }
   if(mode==='question'){targetR=2.8;targetZ=narrow?11:9;}
   if(mode==='fusion'){
    sun.group.visible=false;fusion.visible=true;targetZ=narrow?13:9;
    const cycle=(time%5)/5;
    atoms.forEach((a,i)=>{a.position.set(mix(-1.7-(i%2)*.45,.98,clamp(cycle*1.35,0,1)),mix((Math.floor(i/2)-.5)*.65,(Math.floor(i/2)-.5)*.22,cycle),.15*Math.sin(time+i));a.visible=cycle<.77;});
    helium.visible=cycle>.57;helium.rotation.y=time*.23;
    const p1=project(new THREE.Vector3(-1.5,-.85,0)),p2=project(new THREE.Vector3(1.3,-.85,0));text('氢核',p1.x,p1.y,'#f9d7a1',narrow?14:18);text('氦核',p2.x,p2.y,'#b4d1f1',narrow?14:18);
    text('多步反应的总结果示意',width/2,height*.68,'#9baec8',12);
    if(cycle>.6){const center=project(new THREE.Vector3(1.3,0,0));ctx.strokeStyle=`rgba(255,192,101,${1-(cycle-.6)/.4})`;ctx.lineWidth=2;for(let k=0;k<3;k++){ctx.beginPath();ctx.arc(center.x,center.y,(cycle-.6)*230+k*17,0,Math.PI*2);ctx.stroke();}text('释放能量',width/2,height*.60,'#ffca7c',narrow?15:20);}
   }
   if(mode==='balance'||mode==='pressure'){
    targetR=narrow?1.3:1.65;sun.inside.visible=true;sun.mat.clippingPlanes=[clip];sun.glow.visible=false;
    const center={x:width/2,y:height/2};const radius=size(targetR)*.5;
    const showPressure=mode==='pressure'||state.index===7;
    for(let i=0;i<8;i++){const angle=i*Math.PI/4;const travel=(time*.2+i*.06)%1;const r=radius+45-travel*24;arrow(center.x+Math.cos(angle)*r,center.y+Math.sin(angle)*r,angle+Math.PI,20,'#ffb16f');if(showPressure){const r2=radius*.74+travel*20;arrow(center.x+Math.cos(angle)*r2,center.y+Math.sin(angle)*r2,angle,20,'#8ccbf9');}}
    text(showPressure?'向内的引力   ↔   向外的压力支持':'引力一直把物质向内拉',width/2,height*.67,showPressure?'#c2d9eb':'#eaba8c',narrow?14:18);
   }
   if(['compare','burn','paths'].includes(mode)){
    big.group.visible=true;targetX=narrow?-1.55:-2.5;targetBigX=narrow?1.5:2.5;targetR=narrow?.73:1.05;targetBigR=narrow?1.05:1.6;targetZ=narrow?13:10;
    if(mode==='burn'){
     const fraction=phase*.92;const left=project(new THREE.Vector3(targetX,-1.6,0)),right=project(new THREE.Vector3(targetBigX,-1.85,0));const bw=narrow?100:160;
     for(const [point,value,total,color,label] of [[left,1-fraction*.15,.7,'#ffd28a','燃料较少，消耗慢'],[right,1-fraction,1,'#a9d5ff','燃料更多，消耗快']]){ctx.fillStyle='#afc4df25';ctx.fillRect(point.x-bw/2,point.y,bw*total,6);ctx.fillStyle=color;ctx.fillRect(point.x-bw/2,point.y,bw*total*value,6);text(label,point.x,point.y+28,color,narrow?12:15);}
     text('消耗快慢示意，非真实数据',width/2,height*.38,'#879ab7',12);
    }
    if(mode==='paths'){targetR=narrow?.25:.35;sun.mat.uniforms.uColor.value.set('#dceeff');sun.glowMat.uniforms.uColor.value.set('#dceeff');targetBigR=narrow?.4:.5;big.mat.uniforms.uColor.value.set('#a8caff');text('结局还取决于核心状态与质量损失等因素',width/2,height*.68,'#aebdd0',narrow?12:15);}
   }
   if(mode==='end'){targetX=narrow?1.8:3;targetR=narrow?1.2:2;}
  }
  currentX=smooth(currentX,targetX,dt);currentR=smooth(currentR,targetR,dt);currentBigX=smooth(currentBigX,targetBigX,dt);currentBigR=smooth(currentBigR,targetBigR,dt);currentZ=smooth(currentZ,targetZ,dt);
  camera.position.z=currentZ;camera.lookAt(0,0,0);sun.group.position.set(currentX,.1,0);sun.group.scale.setScalar(currentR);sun.ball.rotation.y=time*.04;sun.mat.uniforms.uTime.value=time;big.group.position.set(currentBigX,.1,0);big.group.scale.setScalar(currentBigR);big.ball.rotation.y=-time*.03;big.mat.uniforms.uTime.value=time;
  background.rotation.y=time*.003;background.rotation.z=Math.sin(time*.03)*.018;
  if(dust.visible){const a=dustGeo.attributes.position;for(let i=0;i<dustDirections.length;i++){const d=dustDirections[i],r=1.7+phase*2.8+(i%9)*.1;a.setXYZ(i,d.x*r,d.y*r,d.z*r);}a.needsUpdate=true;dust.rotation.y=time*.025;}
  renderer.render(scene,camera);if(++frames===3)window.SOLAR_READY=true;
 }
 frame();
}
