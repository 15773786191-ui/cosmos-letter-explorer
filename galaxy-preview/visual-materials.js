import * as T from '../stellar/vendor/three.module.js';
// Appearance estimates for teaching, not calibrated spectrophotometry. Shared between overview and close-up.
export function planetMaterial(map,id){
 const m=new T.MeshBasicMaterial({map});m.userData.visualRevision=22;m.customProgramCacheKey=()=>`visual22-${id}`;
 m.onBeforeCompile=s=>{s.vertexShader='varying vec3 visualNormal;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvisualNormal=normalize(normalMatrix*normal);');s.fragmentShader='varying vec3 visualNormal;\n'+s.fragmentShader;let tint='';if(['neptune','uranus','venus'].includes(id)){const color=new T.Color(id==='neptune'?'#91b8bf':id==='uranus'?'#a1c4c7':'#dedac5');s.uniforms.visualTint={value:color};s.fragmentShader='uniform vec3 visualTint;\n'+s.fragmentShader;tint='float detailL=dot(diffuseColor.rgb,vec3(0.2126,0.7152,0.0722));diffuseColor.rgb=visualTint*'+(id==='venus'?'(0.92+0.16*detailL);':'(0.70+0.85*sqrt(detailL));');}s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n'+tint+'\nfloat lightAmount=0.66+0.34*max(0.0,dot(normalize(visualNormal),normalize(vec3(-0.45,0.5,1.0))));diffuseColor.rgb*=lightAmount;');};return m;
}
export function sunMaterial(){return new T.ShaderMaterial({uniforms:{uTime:{value:0},uOpacity:{value:1},uColor:{value:new T.Color(0xffffff)}},vertexShader:'#include <clipping_planes_pars_vertex>\nvarying vec2 uvSun;void main(){uvSun=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;\n#include <clipping_planes_vertex>\n}',fragmentShader:'#include <clipping_planes_pars_fragment>\nvarying vec2 uvSun;uniform float uTime;uniform float uOpacity;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){\n#include <clipping_planes_fragment>\nvec2 p=uvSun*vec2(900.0,450.0),cell=floor(p),f=fract(p);float nearD=10.0,nextD=10.0;for(int y=-1;y<=1;y++){for(int x=-1;x<=1;x++){vec2 o=vec2(float(x),float(y));vec2 center=o+0.18+0.64*vec2(hash(cell+o),hash(cell+o+vec2(47.0,19.0)));float dist=length(center-f);if(dist<nearD){nextD=nearD;nearD=dist;}else if(dist<nextD){nextD=dist;}}}float shade=mix(0.74,0.99,smoothstep(0.015,0.14,nextD-nearD));gl_FragColor=vec4(vec3(shade),uOpacity);\n#include <colorspace_fragment>\n}',clipping:true,transparent:true});}
export const INTERIORS={
 mercury:{radii:[2,1.94,1.62],colors:[0x8d9298,0xac7861,0xc0c5cb],note:'较大的金属核心、较薄的岩石外层'},
 venus:{radii:[2,1.93,1.03],colors:[0x9e8976,0xbd7952,0xe0b55f],note:'岩石地壳、地幔与推测的金属核心'},
 mars:{radii:[2,1.94,1.02],colors:[0xa85f43,0x8e6553,0xc1a17b],note:'岩石外层与金属核心'},
 moon:{radii:[2,1.94,.39],colors:[0x8d9098,0x6b7281,0xb1a080],note:'厚实的岩石内部与较小核心'},
 jupiter:{radii:[2,1.62,.85],colors:[0xd5c6b1,0xb7a7bf,0xb38d6b],note:'大气、深层氢与较重物质的渐变区域'},
 uranus:{radii:[2,1.7,.48],colors:[0x9ac5ca,0x557f99,0x8b8990],note:'大气、富含水氨甲烷的高压物质与中心区域'},
 neptune:{radii:[2,1.65,.55],colors:[0x91bbc6,0x4c7992,0x858790],note:'大气、高压物质与较重物质的中心区域'},
 sun:{radii:[2,1.42,.5],colors:[0xf1d59b,0xe69755,0xfff0ae],note:'外部对流区、辐射区与核聚变核心'}
};
