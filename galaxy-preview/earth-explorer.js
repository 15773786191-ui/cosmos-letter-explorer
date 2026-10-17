import {PlaceGuide} from './place-guide.js?rev=23';
import {MapAtlas} from './map-atlas.js?rev=16';
// Earth uses the same document and exploration state; no iframe or navigation.
let enginePromise;
function engine(){
 if(window.Cesium)return Promise.resolve(window.Cesium);
 if(!enginePromise)enginePromise=new Promise((resolve,reject)=>{
  const base=new URL('vendor/cesium/',location.href).href;window.CESIUM_BASE_URL=base;
  const css=document.createElement('link');css.rel='stylesheet';css.href=base+'Widgets/widgets.css';document.head.append(css);
  const styles=new Promise((done,fail)=>{css.onload=done;css.onerror=()=>fail(Error('地球样式未能加载'));});const script=document.createElement('script');script.src=base+'Cesium.js';script.onload=()=>styles.then(()=>resolve(window.Cesium),reject);script.onerror=()=>{enginePromise=null;reject(Error('地球引擎未能加载'))};document.head.append(script);
 });return enginePromise;
}
export class EarthExplorer{
 constructor({onExit,onLoading,onReveal}){
  this.onExit=onExit;this.onReveal=onReveal;this.onLoading=onLoading;this.active=false;this.present=false;this.ticket=0;this.heading=90;this.ground=false;
  this.root=document.createElement('section');this.root.id='earth-explorer';this.root.hidden=true;
  this.root.innerHTML=`<div id="earth-view" aria-label="全球地球仪，拖动旋转，指向任意地表位置滚轮缩放"></div><div class="earth-top"><button id="earth-back">← 返回星海</button><span id="earth-path">星海 / 地球</span><button id="earth-global">回到全球视角</button></div><div class="earth-hud"><span id="earth-height">地球全景</span><span id="earth-coordinate">移动镜头，探索任意位置</span><span id="earth-tiles">影像载入中</span><button id="earth-seabed" aria-pressed="false">海底地形</button><span id="earth-image-note">NASA 历史合成影像</span><span id="earth-status" role="status">滚轮 / 双指 · 连续缩放</span></div>`;
  document.body.append(this.root);this.$('earth-back').onclick=()=>this.close();this.guide=new PlaceGuide({root:this.root,onVisit:place=>{this.zoomMotion=null;this.root.classList.add('exploring');this.heading=0;this.fly(place.lon,place.lat,place.altitude,-55,2.4);}});
 }
 $(id){return this.root.querySelector('#'+id)}
 status(text){this.$('earth-status').textContent=text}
 warm(){return engine().catch(()=>null)}
 preload(){return this.prepare().catch(()=>null)}
 prepare(){if(!this.preparing)this.preparing=engine().then(async C=>{this.root.hidden=false;if(!this.viewer)await this.init(C);this.global(false);return C;}).catch(e=>{this.preparing=null;throw e});return this.preparing;}
 async open(){
  const ticket=++this.ticket;this.recoveryCount=0;this.active=true;this.onLoading('正在进入地球，载入地形与影像…');
  try{let timeout;try{await Promise.race([this.prepare(),new Promise((_,reject)=>{timeout=setTimeout(()=>reject(Error('Globe startup timeout')),20000)})]);}finally{clearTimeout(timeout)}if(ticket!==this.ticket)return;
   if(ticket!==this.ticket)return;
   this.seabedMode=false;this.global(false);this.root.hidden=false;this.viewer.resize();this.present=true;this.guide.start();document.body.classList.add('earth-active');
   requestAnimationFrame(()=>this.root.classList.add('visible'));this.onLoading(null);
  }catch(e){if(ticket===this.ticket){this.active=false;this.onLoading('地球加载失败，可返回星海后重试。');}}
 }
 async init(C){
  const imagery=new C.UrlTemplateImageryProvider({url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',maximumLevel:18,tilingScheme:new C.WebMercatorTilingScheme(),credit:'Esri World Imagery · Esri, Maxar, Earthstar Geographics and GIS User Community'});
  const overview=await C.SingleTileImageryProvider.fromUrl('earth-overview-2048.jpg',{credit:'NASA Blue Marble · June 2004 land composite'});
  const v=this.viewer=new C.Viewer(this.$('earth-view'),{baseLayer:new C.ImageryLayer(overview),baseLayerPicker:false,animation:false,timeline:false,geocoder:false,homeButton:false,sceneModePicker:false,navigationHelpButton:false,fullscreenButton:false,selectionIndicator:false,infoBox:false,requestRenderMode:true});
  this.satellite=v.imageryLayers.addImageryProvider(imagery);this.satellite.alpha=0;this.satellite.show=false;v.scene.skyBox.show=false;v.scene.backgroundColor=C.Color.fromCssColorString('#030610');
  v.resolutionScale=Math.min(devicePixelRatio,innerWidth<750?1.25:1.5);v.useBrowserRecommendedResolution=true;v.scene.globe.maximumScreenSpaceError=2;v.scene.globe.tileCacheSize=innerWidth<750?100:200;v.scene.globe.enableLighting=false;v.scene.globe.baseColor=C.Color.fromCssColorString('#154a66');v.scene.globe.preloadAncestors=true;v.scene.globe.showGroundAtmosphere=false;const control=v.scene.screenSpaceCameraController;control.minimumZoomDistance=2;control.maximumZoomDistance=45000000;control.zoomFactor=2;control.inertiaZoom=.65;control.inertiaSpin=.82;control.maximumMovementRatio=.06;control.enableCollisionDetection=true;control.zoomEventTypes=[C.CameraEventType.RIGHT_DRAG];
  imagery.errorEvent.addEventListener(()=>{this.imageryFailed=true;this.imageryRetryAfter=performance.now()+12000;this.satelliteBlend=0;this.satellite.alpha=0;v.scene.requestRender();this.$('earth-tiles').textContent='详细影像加载受阻，当前可能仅显示概览';});
  this.tileQueue=0;this.satelliteBlend=0;this.imageryFailed=false;this.appearanceTime=0;
  v.scene.renderError.addEventListener(()=>{if(this.recovering)return;this.recovering=true;setTimeout(()=>this.recoverView(),0)});
  v.canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();if(this.recovering)return;this.recovering=true;setTimeout(()=>this.recoverView(),0)});

  v.scene.globe.tileLoadProgressEvent.addEventListener(n=>{this.tileQueue=n;if(window.EARTH_STATE)window.EARTH_STATE.tileQueue=n;this.$('earth-tiles').textContent=this.imageryFailed?'详细影像加载受阻，当前可能仅显示概览':n?'正在补充清晰影像':'当前视野已加载'});
  // Historical cloud luminance controls opacity; it is not live weather.
  this.cloudMaterial=new C.Material({fabric:{type:'EarthHistoricalClouds',uniforms:{image:new URL('earth-clouds.jpg',location.href).href,opacity:0.78},source:'czm_material czm_getMaterial(czm_materialInput materialInput){czm_material m=czm_getDefaultMaterial(materialInput);float c=texture(image,materialInput.st).r;m.diffuse=vec3(0.97,0.98,1.0);m.alpha=smoothstep(0.10,0.85,c)*opacity;return m;}'},translucent:true});
  this.clouds=v.scene.primitives.add(new C.Primitive({geometryInstances:new C.GeometryInstance({geometry:new C.EllipsoidGeometry({radii:new C.Cartesian3(6388137,6388137,6366752.314245),vertexFormat:C.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat,stackPartitions:64,slicePartitions:128})}),appearance:new C.MaterialAppearance({material:this.cloudMaterial,materialSupport:C.MaterialAppearance.MaterialSupport.TEXTURED,flat:true,faceForward:false,translucent:true,closed:true}),asynchronous:false,allowPicking:false}));
  v.scene.skyAtmosphere.brightnessShift=-0.25;v.scene.skyAtmosphere.saturationShift=-0.2;
  this.seabedMode=false;this.$('earth-seabed').onclick=async()=>{if(!this.seabed){this.$('earth-seabed').disabled=true;try{const provider=await C.SingleTileImageryProvider.fromUrl('earth-seabed.jpg',{credit:'NASA Blue Marble · topography and bathymetry'});this.seabed=v.imageryLayers.addImageryProvider(provider);this.seabed.show=false;}finally{this.$('earth-seabed').disabled=false;}}this.seabedMode=!this.seabedMode;this.updateAppearance(v.camera.positionCartographic.height);v.scene.requestRender();};
  window.EARTH_STATE={ready:true,terrain:false,mode:'globe',integrated:true,renderHealth:'ready',overview:'earth-overview-2048.jpg'};
  this.$('earth-global').onclick=()=>this.global();
  v.scene.preRender.addEventListener(()=>this.updatePosition());
  this.atlas=new MapAtlas({root:this.root,viewer:v,guide:this.guide,onFocus:(lon,lat,height)=>{this.zoomMotion=null;this.heading=0;this.fly(lon,lat,height,-90,1.25)}});
  window.MAP_ATLAS=this.atlas;
  const explore=()=>{this.root.classList.add('exploring');v.camera.cancelFlight();};
  v.canvas.addEventListener('wheel',e=>{e.preventDefault();e.stopImmediatePropagation();explore();this.wheel(e);},{passive:false,capture:true});const touches=new Map();let pinchDistance=0;
  v.canvas.addEventListener('pointerdown',e=>{this.zoomMotion=null;explore();if(e.pointerType==='touch'){touches.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touches.size===2){control.enableInputs=false;const [a,b]=[...touches.values()];pinchDistance=Math.hypot(a.x-b.x,a.y-b.y);}}},{passive:true,capture:true});
  v.canvas.addEventListener('pointermove',e=>{if(e.pointerType!=='touch'||!touches.has(e.pointerId))return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touches.size===2){e.preventDefault();const [a,b]=[...touches.values()],distance=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance>0&&distance>0)this.wheel({clientX:(a.x+b.x)/2,clientY:(a.y+b.y)/2,deltaY:Math.log(pinchDistance/distance)/.0012,deltaMode:0});pinchDistance=distance;}},{passive:false,capture:true});
  const endTouch=e=>{touches.delete(e.pointerId);if(touches.size<2){control.enableInputs=true;pinchDistance=0;}};v.canvas.addEventListener('pointerup',endTouch,{capture:true});v.canvas.addEventListener('pointercancel',endTouch,{capture:true});
  this.onKey=e=>{if(!this.present||this.closing||e.target.closest('button,summary'))return;const amount=Math.max(1,v.camera.positionCartographic.height*.12);if(e.key==='+'||e.key==='='){e.preventDefault();v.camera.zoomIn(amount);explore()}if(e.key==='-'){e.preventDefault();v.camera.zoomOut(amount);explore()}};addEventListener('keydown',this.onKey);
  // The globe remains explorable while terrain metadata is loading.
  C.ArcGISTiledElevationTerrainProvider.fromUrl('https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer').then(t=>{
   if(v.isDestroyed())return;this.terrain=t;v.terrainProvider=t;window.EARTH_STATE.terrain=true;this.status('滚轮 / 双指 · 连续缩放　中键 / Ctrl + 拖动 · 倾斜');
  }).catch(()=>this.status('地形暂未加载成功；当前仍可观察地球影像。'));
 }
 async recoverView(){
  const old=this.viewer,C=window.Cesium;if(!old||old.isDestroyed()){this.recovering=false;return}
  const position=C.Cartesian3.clone(old.camera.positionWC),direction=C.Cartesian3.clone(old.camera.directionWC),up=C.Cartesian3.clone(old.camera.upWC),node=this.guide.node,reading=!this.guide.panel.hidden;
  this.status('正在恢复地球画面…');window.EARTH_STATE.renderHealth='recovering';
  this.zoomMotion=null;this.recoveryCount=(this.recoveryCount||0)+1;
  try{
   this.atlas?.layer.remove();const path=document.createElement('span');path.id='earth-path';this.atlas?.crumbs.replaceWith(path);removeEventListener('keydown',this.onKey);old.destroy();this.viewer=null;this.preparing=null;
   if(this.recoveryCount>2)throw Error('Repeated rendering failure');
   await this.init(C);this.preparing=Promise.resolve(C);this.viewer.camera.setView({destination:position,orientation:{direction,up}});this.viewer.resize();this.viewer.scene.requestRender();
   if(reading&&node)await this.atlas.select(node);window.EARTH_STATE.renderHealth='recovered';this.status('滚轮 / 双指 · 连续缩放');
  }catch(e){
   window.EARTH_STATE.recoveryError=String(e?.stack||e);window.EARTH_STATE.renderHealth='failed';this.onLoading('地球画面恢复失败，可重新进入地球。');
  }finally{this.recovering=false}
 }
 fly(lon,lat,height,pitch,duration=3){const C=window.Cesium;return new Promise(resolve=>this.viewer.camera.flyTo({destination:C.Cartesian3.fromDegrees(lon,lat,height),orientation:{heading:C.Math.toRadians(this.heading),pitch:C.Math.toRadians(pitch),roll:0},duration,complete:resolve,cancel:resolve}));}
 wheel(event){
  if(!this.present||this.closing)return;const C=window.Cesium,v=this.viewer,box=v.canvas.getBoundingClientRect(),x=event.clientX-box.left,y=event.clientY-box.top,now=performance.now();let motion=this.zoomMotion;
  if(!motion||Math.hypot(x-motion.x,y-motion.y)>8||now-motion.last>700){
   const ray=v.camera.getPickRay(new C.Cartesian2(x,y)),hit=v.scene.globe.pick(ray,v.scene)||v.camera.pickEllipsoid(new C.Cartesian2(x,y),v.scene.globe.ellipsoid);if(!hit)return;
   const offset=C.Cartesian3.subtract(v.camera.positionWC,hit,new C.Cartesian3()),distance=C.Cartesian3.magnitude(offset);
   motion=this.zoomMotion={anchor:C.Cartesian3.clone(hit),axis:C.Cartesian3.normalize(offset,new C.Cartesian3()),distance,wanted:distance,direction:C.Cartesian3.clone(v.camera.directionWC),up:C.Cartesian3.clone(v.camera.upWC),x,y,last:now};
  }
  const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?v.canvas.clientHeight:1);motion.wanted=C.Math.clamp(motion.wanted*Math.exp(C.Math.clamp(delta,-600,600)*.0012),2,80000000);motion.last=now;
  if(!this.zoomRunning){this.zoomRunning=true;this.zoomTime=now;requestAnimationFrame(t=>this.animateZoom(t));}
 }
 animateZoom(now){
  const motion=this.zoomMotion;if(!motion||!this.present||this.closing){this.zoomRunning=false;return}const C=window.Cesium,v=this.viewer,dt=Math.min((now-this.zoomTime)/1000,.05);this.zoomTime=now;
  motion.distance+=(motion.wanted-motion.distance)*(1-Math.exp(-dt*9));let position=C.Cartesian3.add(motion.anchor,C.Cartesian3.multiplyByScalar(motion.axis,motion.distance,new C.Cartesian3()),new C.Cartesian3());const cart=C.Cartographic.fromCartesian(position),height=v.scene.globe.getHeight(cart);
  if(Number.isFinite(height)&&cart.height<height+2){cart.height=height+2;position=C.Cartographic.toCartesian(cart);motion.wanted=motion.distance;}
  v.camera.setView({destination:position,orientation:{direction:motion.direction,up:motion.up}});v.scene.requestRender();
  if(Math.abs(motion.wanted-motion.distance)>.05)requestAnimationFrame(t=>this.animateZoom(t));else{this.zoomRunning=false;this.zoomMotion=null;}
 }
 global(animate=true){this.zoomMotion=null;this.heading=0;this.root.classList.remove('exploring');if(this.atlas){this.atlas.levelHint=null;this.atlas.path=[];this.atlas.renderPath();}window.EARTH_STATE.mode='globe';this.status('滚轮 / 双指 · 连续缩放');if(animate)return this.fly(105,25,18000000,-90);this.viewer.camera.setView({destination:Cesium.Cartesian3.fromDegrees(105,25,18000000),orientation:{heading:0,pitch:-Math.PI/2,roll:0}});}
 updateAppearance(height){
  const C=window.Cesium,t=C.Math.clamp((6000000-height)/4000000,0,1),blend=t*t*(3-2*t),seabed=this.seabedMode&&height>2000000;
  this.satellite.show=height<8000000&&!seabed;
  const now=performance.now(),dt=Math.min((now-(this.appearanceTime||now))/1000,.1);this.appearanceTime=now;
  if(this.imageryFailed&&now>this.imageryRetryAfter&&this.tileQueue===0)this.imageryFailed=false;
  const wanted=!this.imageryFailed&&this.tileQueue===0&&this.viewer.scene.globe.tilesLoaded?blend:Math.min(this.satelliteBlend,blend);
  this.satelliteBlend+=(wanted-this.satelliteBlend)*(1-Math.exp(-dt*6));if(Math.abs(wanted-this.satelliteBlend)<.002)this.satelliteBlend=wanted;
  this.satellite.alpha=this.satelliteBlend;
  if(Math.abs(wanted-this.satelliteBlend)>.002)this.viewer.scene.requestRender();
  if(this.seabed)this.seabed.show=seabed;
  this.cloudMaterial.uniforms.opacity=seabed?0:0.78*(1-blend);this.clouds.show=!seabed&&blend<0.995;
  this.$('earth-seabed').hidden=height<=2000000;this.$('earth-seabed').textContent=seabed?'自然外观':'海底地形';this.$('earth-seabed').setAttribute('aria-pressed',String(seabed));
  this.$('earth-image-note').textContent=seabed?'海底起伏示意 · 深浅用于显示地形':blend<0.01?'NASA 历史合成影像 · 云层非实时':blend<0.99?'正在过渡到卫星地图':'卫星地图 · 多时段拼接';
  Object.assign(window.EARTH_STATE,{appearance:seabed?'seabed':blend<.01?'natural':blend>.99?'satellite':'transition',satelliteAlpha:this.satelliteBlend,requestedSatelliteAlpha:blend,cloudOpacity:this.cloudMaterial.uniforms.opacity});
 }
 updatePosition(){
  if(!this.present||!window.EARTH_STATE)return;this.updateAppearance(this.viewer.camera.positionCartographic.height);const C=window.Cesium,v=this.viewer,p=v.camera.positionCartographic,h=p.height,ray=v.camera.getPickRay(new C.Cartesian2(v.canvas.clientWidth/2,v.canvas.clientHeight/2)),hit=v.scene.globe.pick(ray,v.scene),centre=hit?C.Cartographic.fromCartesian(hit):p;
  const ground=v.scene.globe.getHeight(p),distance=Number.isFinite(ground)?Math.max(0,h-ground):h,mode=distance<250?'ground':h<800000?'region':'globe';
  Object.assign(window.EARTH_STATE,{cameraHeight:h,latitude:C.Math.toDegrees(p.latitude),longitude:C.Math.toDegrees(p.longitude),centreLatitude:C.Math.toDegrees(centre.latitude),centreLongitude:C.Math.toDegrees(centre.longitude),groundDistance:Number.isFinite(ground)?distance:null,mode});
  this.$('earth-height').textContent=h>10000?'海拔 '+(h/1000).toFixed(0)+' km':'海拔 '+h.toFixed(0)+' m';this.$('earth-coordinate').textContent=Math.abs(C.Math.toDegrees(centre.latitude)).toFixed(3)+'° '+(centre.latitude>=0?'N':'S')+' · '+Math.abs(C.Math.toDegrees(centre.longitude)).toFixed(3)+'° '+(centre.longitude>=0?'E':'W');
  if(h>35000000&&!this.closing)this.close({fromZoom:true});
 }
 async close({fromZoom=false}={}){if(this.closing)return;this.closing=true;this.guide.stop();this.zoomMotion=null;++this.ticket;
  try{if(this.present&&this.viewer){this.$('earth-back').disabled=true;this.heading=0;this.atlas?.crumbs.setAttribute('aria-label','正在返回星海');this.status('先拉回地球，再返回刚才的星海位置。');if(!fromZoom)await this.fly(105,25,18000000,-90,1.8);this.onReveal?.({distance:(this.viewer.camera.positionCartographic.height+6378137)*.55/6378137});this.present=false;this.root.classList.remove('visible');await new Promise(r=>setTimeout(r,450));this.root.hidden=true;document.body.classList.remove('earth-active');this.$('earth-back').disabled=false;}
   this.active=false;this.onLoading(null);this.onExit();
  }finally{this.closing=false}
 }
}
