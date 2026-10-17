import * as T from '../stellar/vendor/three.module.js';
const TILTS={mercury:.03,venus:177.4,moon:6.7,mars:25.2,jupiter:3.1,uranus:97.8,neptune:28.3,sun:7.25};
// Same initial viewport and model framing as the embedded explorer, before any input.
export function initialEntryPose(id,spin=0){const top=innerHeight<=650?105:innerWidth<=700?130:85,h=innerHeight-top,tan=Math.tan(19*Math.PI/180),distance=Math.max(id==='saturn'?13:10,(id==='saturn'?5.4:3.6)/(tan*(innerWidth/h)));const q=new T.Quaternion().setFromEuler(new T.Euler(id==='saturn'?.43:.15,0,id==='saturn'?-.23:-(TILTS[id]||0)*Math.PI/180));return {cx:.5,cy:(top+h/2)/innerHeight,radiusPx:h/tan/Math.sqrt(distance*distance-4),quaternion:q.toArray(),spin};}
