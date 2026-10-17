import * as T from '../stellar/vendor/three.module.js';
// Match the globe's projected size, position and texture phase across renderers.
export function entryBridge({mount,camera,root,planet,ready}){
 const embedded=parent!==window;let held=embedded,sent=false;
 const initialSpin=Number(new URLSearchParams(location.hash.slice(1)).get('spin')||new URLSearchParams(location.search).get('spin'));
 if(embedded){document.body.classList.add('entry-held');if(Number.isFinite(initialSpin))planet.rotation.y=initialSpin;}
 const pose=()=>{const r=mount.getBoundingClientRect(),center=root.getWorldPosition(new T.Vector3()),p=center.clone().project(camera),distance=camera.position.distanceTo(center);return {cx:(r.left+(p.x*.5+.5)*r.width)/innerWidth,cy:(r.top+(-p.y*.5+.5)*r.height)/innerHeight,radiusPx:r.height/(2*Math.tan(camera.fov*Math.PI/360))*2/Math.sqrt(Math.max(.01,distance*distance-4)),quaternion:root.quaternion.toArray(),spin:planet.rotation.y};};
 addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='cosmos-hold'){held=true;document.body.classList.add('entry-held');}if(e.origin===location.origin&&e.source===parent&&e.data?.type==='cosmos-reveal'){held=false;document.body.classList.remove('entry-held');}});
 return {get held(){return held},get suspended(){return held&&sent},pose,tick(){if(embedded&&!sent&&ready()){sent=true;parent.postMessage({type:'cosmos-ready',pose:pose()},location.origin);}},back(e){if(embedded){e.preventDefault();parent.postMessage({type:'cosmos-return',pose:pose()},location.origin);}}};
}
