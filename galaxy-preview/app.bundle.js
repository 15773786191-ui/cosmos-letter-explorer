var dc=0,to=1,fc=2;var Il=1,pc=2,on=3,Sn=0,Te=1,Le=2;var yn=0,mi=1,Ds=2,eo=3,no=4,mc=5,On=100,gc=101,_c=102,io=103,so=104,xc=200,vc=201,yc=202,Mc=203,ta=204,ea=205,bc=206,Sc=207,Ec=208,wc=209,Tc=210,Ac=211,Rc=212,Cc=213,Pc=214,Lc=0,Ic=1,Uc=2,Ns=3,Dc=4,Nc=5,Oc=6,Fc=7,Ul=0,Bc=1,zc=2,Mn=0,kc=1,Hc=2,Vc=3,Gc=4,Wc=5,Xc=6;var Dl=300,xi=301,vi=302,na=303,ia=304,ir=306,sa=1e3,Je=1001,ra=1002,Pe=1003,ro=1004;var vr=1005;var Ge=1006,qc=1007;var Vi=1008;var bn=1009,$c=1010,Yc=1011,ka=1012,Nl=1013,xn=1014,vn=1015,Gi=1016,Ol=1017,Fl=1018,Bn=1020,Zc=1021,je=1023,Jc=1024,jc=1025,zn=1026,yi=1027,Kc=1028,Bl=1029,Qc=1030,zl=1031,kl=1033,yr=33776,Mr=33777,br=33778,Sr=33779,ao=35840,oo=35841,lo=35842,co=35843,Hl=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,xo=37813,vo=37814,yo=37815,Mo=37816,bo=37817,So=37818,Eo=37819,wo=37820,To=37821,Er=36492,Ao=36494,Ro=36495,th=36283,Co=36284,Po=36285,Lo=36286;var Os=2300,Fs=2301,wr=2302,Io=2400,Uo=2401,Do=2402;var Vl=3e3,kn=3001,eh=3200,nh=3201,Gl=0,ih=1,We="",ae="srgb",cn="srgb-linear",Ha="display-p3",sr="display-p3-linear",Bs="linear",ee="srgb",zs="rec709",ks="p3";var Zn=7680;var No=519,sh=512,rh=513,ah=514,Wl=515,oh=516,lh=517,ch=518,hh=519,Oo=35044;var Fo="300 es",aa=1035,ln=2e3,Hs=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=1234567,Bi=Math.PI/180,Wi=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Va(i,t){return(i%t+t)%t}function uh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dh(i,t,e){return i!==t?(e-i)/(t-i):0}function zi(i,t,e){return(1-e)*i+e*t}function fh(i,t,e,n){return zi(i,t,1-Math.exp(-e*n))}function ph(i,t=1){return t-Math.abs(Va(i,t*2)-t)}function mh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _h(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xh(i,t){return i+Math.random()*(t-i)}function vh(i){return i*(.5-Math.random())}function yh(i){i!==void 0&&(Bo=i);let t=Bo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mh(i){return i*Bi}function bh(i){return i*Wi}function oa(i){return(i&i-1)===0&&i!==0}function Sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ue={DEG2RAD:Bi,RAD2DEG:Wi,generateUUID:Pi,clamp:ye,euclideanModulo:Va,mapLinear:uh,inverseLerp:dh,lerp:zi,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:xh,randFloatSpread:vh,seededRandom:yh,degToRad:Mh,radToDeg:bh,isPowerOfTwo:oa,ceilPowerOfTwo:Sh,floorPowerOfTwo:Vs,setQuaternionFromProperEuler:Eh,normalize:Re,denormalize:ui},Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],v=s[4],T=s[7],I=s[2],A=s[5],R=s[8];return r[0]=o*_+a*E+l*I,r[3]=o*m+a*v+l*A,r[6]=o*d+a*T+l*R,r[1]=c*_+h*E+u*I,r[4]=c*m+h*v+u*A,r[7]=c*d+h*T+u*R,r[2]=f*_+p*E+g*I,r[5]=f*m+p*v+g*A,r[8]=f*d+p*T+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tr=new Zt;function Xl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){let i=Xi("canvas");return i.style.display="block",i}var zo={};function ki(i){i in zo||(zo[i]=!0,console.warn(i))}var ko=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ho=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[cn]:{transfer:Bs,primaries:zs,toReference:i=>i,fromReference:i=>i},[ae]:{transfer:ee,primaries:zs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sr]:{transfer:Bs,primaries:ks,toReference:i=>i.applyMatrix3(Ho),fromReference:i=>i.applyMatrix3(ko)},[Ha]:{transfer:ee,primaries:ks,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ho),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},Th=new Set([cn,sr]),Kt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Th.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=as[t].toReference,s=as[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return as[i].primaries},getTransfer:function(i){return i===We?Bs:as[i].transfer}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jn,Gs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Xi("canvas")),Jn.width=t.width,Jn.height=t.height;let n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ah=0,Ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rr(s[o].image)):r.push(Rr(s[o]))}else r=Rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rh=0,ze=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Je,s=Je,r=Ge,o=Vi,a=je,l=bn,c=i.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Pi(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?ae:We),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ae?kn:Vl}set encoding(t){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===kn?ae:We}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Dl;ze.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,T=(p+1)/2,I=(d+1)/2,A=(h+f)/4,R=(u+_)/4,W=(g+m)/4;return v>T&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=R/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=W/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=W/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends En{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kn?ae:We),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ws(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends la{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xs=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ca=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let I=Math.sqrt(v),A=Math.atan2(I,d*E);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let T=a*E;if(l=l*m+f*T,c=c*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cr=new P,Vo=new Xe,Hn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),ls.subVectors(this.max,Di),jn.subVectors(t.a,Di),Kn.subVectors(t.b,Di),Qn.subVectors(t.c,Di),fn.subVectors(Kn,jn),pn.subVectors(Qn,Kn),Ln.subVectors(jn,Qn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Ln.z,Ln.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Ln.z,0,-Ln.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Ln.y,Ln.x,0];return!Pr(e,jn,Kn,Qn,ls)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,jn,Kn,Qn,ls))?!1:(cs.crossVectors(fn,pn),e=[cs.x,cs.y,cs.z],Pr(e,jn,Kn,Qn,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},en=[new P,new P,new P,new P,new P,new P,new P,new P],qe=new P,os=new Hn,jn=new P,Kn=new P,Qn=new P,fn=new P,pn=new P,Ln=new P,Di=new P,ls=new P,cs=new P,In=new P;function Pr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){In.fromArray(i,r);let a=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ch=new Hn,Ni=new P,Lr=new P,Vn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ch.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);let e=Ni.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(Lr)),this.expandByPoint(Ni.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},nn=new P,Ir=new P,hs=new P,mn=new P,Ur=new P,us=new P,Dr=new P,Mi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ir.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(Ir);let r=t.distanceTo(e)*.5,o=-this.direction.dot(hs),a=mn.dot(this.direction),l=-mn.dot(hs),c=mn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ir).addScaledVector(hs,f),p}intersectSphere(t,e){nn.subVectors(t.center,this.origin);let n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){Ur.subVectors(e,t),us.subVectors(n,t),Dr.crossVectors(Ur,us);let o=this.direction.dot(Dr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,t);let l=a*this.direction.dot(us.crossVectors(mn,us));if(l<0)return null;let c=a*this.direction.dot(Ur.cross(mn));if(c<0||l+c>o)return null;let h=-a*mn.dot(Dr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Lh)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),gn.crossVectors(n,Fe),gn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),gn.crossVectors(n,Fe)),gn.normalize(),ds.crossVectors(Fe,gn),s[0]=gn.x,s[4]=ds.x,s[8]=Fe.x,s[1]=gn.y,s[5]=ds.y,s[9]=Fe.y,s[2]=gn.z,s[6]=ds.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],v=n[7],T=n[11],I=n[15],A=s[0],R=s[4],W=s[8],y=s[12],S=s[1],k=s[5],q=s[9],st=s[13],L=s[2],O=s[6],X=s[10],$=s[14],Z=s[3],V=s[7],et=s[11],it=s[15];return r[0]=o*A+a*S+l*L+c*Z,r[4]=o*R+a*k+l*O+c*V,r[8]=o*W+a*q+l*X+c*et,r[12]=o*y+a*st+l*$+c*it,r[1]=h*A+u*S+f*L+p*Z,r[5]=h*R+u*k+f*O+p*V,r[9]=h*W+u*q+f*X+p*et,r[13]=h*y+u*st+f*$+p*it,r[2]=g*A+_*S+m*L+d*Z,r[6]=g*R+_*k+m*O+d*V,r[10]=g*W+_*q+m*X+d*et,r[14]=g*y+_*st+m*$+d*it,r[3]=E*A+v*S+T*L+I*Z,r[7]=E*R+v*k+T*O+I*V,r[11]=E*W+v*q+T*X+I*et,r[15]=E*y+v*st+T*$+I*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,T=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,I=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*E+n*v+s*T+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=E*R,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*R,t[4]=v*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=T*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*R,t[12]=I*R,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=l*c,v=l*h,T=l*u,I=n.x,A=n.y,R=n.z;return s[0]=(1-(_+d))*I,s[1]=(p+T)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(f+d))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(m-E)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ti.set(s[0],s[1],s[2]).length(),o=ti.set(s[4],s[5],s[6]).length(),a=ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$e.copy(this);let c=1/r,h=1/o,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ln){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===ln)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ln){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h,g,_;if(a===ln)g=(o+r)*u,_=-2*u;else if(a===Hs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ti=new P,$e=new ue,Ph=new P(0,0,0),Lh=new P(1,1,1),gn=new P,ds=new P,Fe=new P,Go=new ue,Wo=new Xe,bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ih=0,Xo=new P,ei=new Xe,sn=new ue,fs=new P,Oi=new P,Uh=new P,Dh=new Xe,qo=new P(1,0,0),$o=new P(0,1,0),Yo=new P(0,0,1),Nh={type:"added"},Oh={type:"removed"},be=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new bi,n=new Xe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Oi,fs,this.up):sn.lookAt(fs,Oi,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(sn),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new P,rn=new P,Nr=new P,an=new P,ni=new P,ii=new P,Zo=new P,Or=new P,Fr=new P,Br=new P,ps=!1,di=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),rn.subVectors(n,e),Nr.subVectors(t,e);let o=Ye.dot(Ye),a=Ye.dot(rn),l=Ye.dot(Nr),c=rn.dot(rn),h=rn.dot(Nr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(t,e,n,s,r,o,a,l){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),rn.subVectors(t,e),Ye.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ye.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ni.subVectors(s,n),ii.subVectors(r,n),Or.subVectors(t,n);let l=ni.dot(Or),c=ii.dot(Or);if(l<=0&&c<=0)return e.copy(n);Fr.subVectors(t,s);let h=ni.dot(Fr),u=ii.dot(Fr);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ni,o);Br.subVectors(t,r);let p=ni.dot(Br),g=ii.dot(Br);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ii,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zo.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Zo,a);let d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ms={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Va(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zr(o,r,t+1/3),this.g=zr(o,r,t),this.b=zr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){let n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return Kt.fromWorkingColorSpace(we.copy(this),t),Math.round(ye(we.r*255,0,255))*65536+Math.round(ye(we.g*255,0,255))*256+Math.round(ye(we.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=ae){Kt.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ms);let n=zi(_n.h,ms.h,e),s=zi(_n.s,ms.s,e),r=zi(_n.l,ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new zt;zt.NAMES=ql;var Fh=0,un=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=mi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pe=class extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new P,gs=new Wt,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oo&&(t.usage=this.usage),t}};var qs=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $s=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Bh=0,Ve=new ue,kr=new be,si=new P,Be=new Hn,Fi=new Hn,xe=new P,oe=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xl(t)?$s:qs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Be.min,Fi.min),Be.expandByPoint(xe),xe.addVectors(Be.max,Fi.max),Be.expandByPoint(xe)):(Be.expandByPoint(Fi.min),Be.expandByPoint(Fi.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(t,c),xe.add(si)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new P,h[S]=new P;let u=new P,f=new P,p=new P,g=new Wt,_=new Wt,m=new Wt,d=new P,E=new P;function v(S,k,q){u.fromArray(s,S*3),f.fromArray(s,k*3),p.fromArray(s,q*3),g.fromArray(o,S*2),_.fromArray(o,k*2),m.fromArray(o,q*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let st=1/(_.x*m.y-m.x*_.y);isFinite(st)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(st),E.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(st),c[S].add(d),c[k].add(d),c[q].add(d),h[S].add(E),h[k].add(E),h[q].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let S=0,k=T.length;S<k;++S){let q=T[S],st=q.start,L=q.count;for(let O=st,X=st+L;O<X;O+=3)v(n[O+0],n[O+1],n[O+2])}let I=new P,A=new P,R=new P,W=new P;function y(S){R.fromArray(r,S*3),W.copy(R);let k=c[S];I.copy(k),I.sub(R.multiplyScalar(R.dot(k))).normalize(),A.crossVectors(W,k);let st=A.dot(h[S])<0?-1:1;l[S*4]=I.x,l[S*4+1]=I.y,l[S*4+2]=I.z,l[S*4+3]=st}for(let S=0,k=T.length;S<k;++S){let q=T[S],st=q.start,L=q.count;for(let O=st,X=st+L;O<X;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=new ue,Un=new Mi,_s=new Vn,jo=new P,ri=new P,ai=new P,oi=new P,Hr=new P,xs=new P,vs=new Wt,ys=new Wt,Ms=new Wt,Ko=new P,Qo=new P,tl=new P,bs=new P,Ss=new P,Qt=class extends be{constructor(t=new oe,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hr.fromBufferAttribute(u,t),o?xs.addScaledVector(Hr,h):xs.addScaledVector(Hr.sub(e),h))}e.add(xs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(_s.containsPoint(Un.origin)===!1&&(Un.intersectSphere(_s,jo)===null||Un.origin.distanceToSquared(jo)>(t.far-t.near)**2))&&(Jo.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=v;T<I;T+=3){let A=a.getX(T),R=a.getX(T+1),W=a.getX(T+2);s=Es(this,d,t,n,c,h,u,A,R,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=a.getX(m),v=a.getX(m+1),T=a.getX(m+2);s=Es(this,o,t,n,c,h,u,E,v,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,I=v;T<I;T+=3){let A=T,R=T+1,W=T+2;s=Es(this,d,t,n,c,h,u,A,R,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=m,v=m+1,T=m+2;s=Es(this,o,t,n,c,h,u,E,v,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zh(i,t,e,n,s,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Sn,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ss);return c<e.near||c>e.far?null:{distance:c,point:Ss.clone(),object:i}}function Es(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ri),i.getVertexPosition(l,ai),i.getVertexPosition(c,oi);let h=zh(i,t,e,n,ri,ai,oi,bs);if(h){s&&(vs.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,l),Ms.fromBufferAttribute(s,c),h.uv=di.getInterpolation(bs,ri,ai,oi,vs,ys,Ms,new Wt)),r&&(vs.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,c),h.uv1=di.getInterpolation(bs,ri,ai,oi,vs,ys,Ms,new Wt),h.uv2=h.uv1),o&&(Ko.fromBufferAttribute(o,a),Qo.fromBufferAttribute(o,l),tl.fromBufferAttribute(o,c),h.normal=di.getInterpolation(bs,ri,ai,oi,Ko,Qo,tl,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};di.getNormal(ri,ai,oi,u.normal),h.face=u}return h}var $i=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,d,E,v,T,I,A,R,W,y){let S=T/R,k=I/W,q=T/2,st=I/2,L=A/2,O=R+1,X=W+1,$=0,Z=0,V=new P;for(let et=0;et<X;et++){let it=et*k-st;for(let ft=0;ft<O;ft++){let F=ft*S-q;V[_]=F*E,V[m]=it*v,V[d]=L,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[d]=A>0?1:-1,h.push(V.x,V.y,V.z),u.push(ft/R),u.push(1-et/W),$+=1}}for(let et=0;et<W;et++)for(let it=0;it<R;it++){let ft=f+it+O*et,F=f+it+O*(et+1),K=f+(it+1)+O*(et+1),dt=f+(it+1)+O*et;l.push(ft,F,dt),l.push(F,K,dt),Z+=6}a.addGroup(p,Z,y),p+=Z,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=Si(i[e]);for(let s in n)t[s]=n[s]}return t}function kh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $l(i){return i.getRenderTarget()===null?i.outputColorSpace:Kt.workingColorSpace}var Hh={clone:Si,merge:Ce},Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ys=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Me=class extends Ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},li=-90,ci=1,ha=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(li,ci,t,e);s.layers=this.layers,this.add(s);let r=new Me(li,ci,t,e);r.layers=this.layers,this.add(r);let o=new Me(li,ci,t,e);o.layers=this.layers,this.add(o);let a=new Me(li,ci,t,e);a.layers=this.layers,this.add(a);let l=new Me(li,ci,t,e);l.layers=this.layers,this.add(l);let c=new Me(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zs=class extends ze{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ua=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===kn?ae:We),this.texture=new Zs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:yn});r.uniforms.tEquirect.value=e;let o=new Qt(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Ge),new ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Vr=new P,Wh=new P,Xh=new Zt,Ze=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vr.subVectors(n,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xh.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dn=new Vn,ws=new P,Yi=class{constructor(t=new Ze,e=new Ze,n=new Ze,s=new Ze,r=new Ze,o=new Ze){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],v=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+o,f+h,m+g,T+E).normalize(),n[3].setComponents(l-o,f-h,m-g,T-E).normalize(),n[4].setComponents(l-a,f-u,m-_,T-v).normalize(),e===ln)n[5].setComponents(l+a,f+u,m+_,T+v).normalize();else if(e===Hs)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var da=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let v=0;v<c;v++){let T=v*u-r;g.push(T,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let v=E+c*d,T=E+c*(d+1),I=E+1+c*(d+1),A=E+1+c*d;p.push(v,T,A),p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,au=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ld=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ef=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:$h,alphahash_pars_fragment:Yh,alphamap_fragment:Zh,alphamap_pars_fragment:Jh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:Qh,aomap_pars_fragment:tu,batching_pars_vertex:eu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:ou,clipping_planes_fragment:lu,clipping_planes_pars_fragment:cu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:Mu,emissivemap_pars_fragment:bu,colorspace_fragment:Su,colorspace_pars_fragment:Eu,envmap_fragment:wu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:ku,envmap_vertex:Cu,fog_vertex:Pu,fog_pars_vertex:Lu,fog_fragment:Iu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Du,lightmap_fragment:Nu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:$u,lights_fragment_maps:Yu,lights_fragment_end:Zu,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:ld,morphtarget_vertex:cd,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:xd,iridescence_pars_fragment:vd,opaque_fragment:yd,packing:Md,premultiplied_alpha_fragment:bd,project_vertex:Sd,dithering_fragment:Ed,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Id,skinning_pars_vertex:Ud,skinning_vertex:Dd,skinnormal_vertex:Nd,specularmap_fragment:Od,specularmap_pars_fragment:Fd,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:kd,transmission_pars_fragment:Hd,uv_pars_fragment:Vd,uv_pars_vertex:Gd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:qd,background_frag:$d,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:jd,depth_vert:Kd,depth_frag:Qd,distanceRGBA_vert:tf,distanceRGBA_frag:ef,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:of,meshbasic_frag:lf,meshlambert_vert:cf,meshlambert_frag:hf,meshmatcap_vert:uf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:_f,meshphysical_frag:xf,meshtoon_vert:vf,meshtoon_frag:yf,points_vert:Mf,points_frag:bf,shadow_vert:Sf,shadow_frag:Ef,sprite_vert:wf,sprite_frag:Tf},ct={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ce([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ce([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new zt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ce([ct.points,ct.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ce([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ce([ct.common,ct.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ce([ct.sprite,ct.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ce([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ce([ct.lights,ct.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Qe.physical={uniforms:Ce([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ts={r:0,b:0,g:0};function Af(i,t,e,n,s,r,o){let a=new zt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let E=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ir)?(h===void 0&&(h=new Qt(new $i(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Si(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ee,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qt(new da(2,2),new Ae({name:"BackgroundMaterial",uniforms:Si(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Ts,$l(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Rf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,O,X,$,Z){let V=!1;if(o){let et=_($,X,O);c!==et&&(c=et,p(c.object)),V=d(L,$,X,Z),V&&E(L,$,X,Z)}else{let et=O.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==et)&&(c.geometry=$.id,c.program=X.id,c.wireframe=et,V=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,W(L,O,X,$),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,X){let $=X.wireframe===!0,Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let V=Z[O.id];V===void 0&&(V={},Z[O.id]=V);let et=V[$];return et===void 0&&(et=m(f()),V[$]=et),et}function m(L){let O=[],X=[],$=[];for(let Z=0;Z<s;Z++)O[Z]=0,X[Z]=0,$[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:$,object:L,attributes:{},index:null}}function d(L,O,X,$){let Z=c.attributes,V=O.attributes,et=0,it=X.getAttributes();for(let ft in it)if(it[ft].location>=0){let K=Z[ft],dt=V[ft];if(dt===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor)),K===void 0||K.attribute!==dt||dt&&K.data!==dt.data)return!0;et++}return c.attributesNum!==et||c.index!==$}function E(L,O,X,$){let Z={},V=O.attributes,et=0,it=X.getAttributes();for(let ft in it)if(it[ft].location>=0){let K=V[ft];K===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let dt={};dt.attribute=K,K&&K.data&&(dt.data=K.data),Z[ft]=dt,et++}c.attributes=Z,c.attributesNum=et,c.index=$}function v(){let L=c.newAttributes;for(let O=0,X=L.length;O<X;O++)L[O]=0}function T(L){I(L,0)}function I(L,O){let X=c.newAttributes,$=c.enabledAttributes,Z=c.attributeDivisors;X[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),Z[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),Z[L]=O)}function A(){let L=c.newAttributes,O=c.enabledAttributes;for(let X=0,$=O.length;X<$;X++)O[X]!==L[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function R(L,O,X,$,Z,V,et){et===!0?i.vertexAttribIPointer(L,O,X,Z,V):i.vertexAttribPointer(L,O,X,$,Z,V)}function W(L,O,X,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let Z=$.attributes,V=X.getAttributes(),et=O.defaultAttributeValues;for(let it in V){let ft=V[it];if(ft.location>=0){let F=Z[it];if(F===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),F!==void 0){let K=F.normalized,dt=F.itemSize,St=e.get(F);if(St===void 0)continue;let Mt=St.buffer,Ct=St.type,Dt=St.bytesPerElement,wt=n.isWebGL2===!0&&(Ct===i.INT||Ct===i.UNSIGNED_INT||F.gpuType===Nl);if(F.isInterleavedBufferAttribute){let _t=F.data,D=_t.stride,jt=F.offset;if(_t.isInstancedInterleavedBuffer){for(let Tt=0;Tt<ft.locationSize;Tt++)I(ft.location+Tt,_t.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Tt=0;Tt<ft.locationSize;Tt++)T(ft.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Tt=0;Tt<ft.locationSize;Tt++)R(ft.location+Tt,dt/ft.locationSize,Ct,K,D*Dt,(jt+dt/ft.locationSize*Tt)*Dt,wt)}else{if(F.isInstancedBufferAttribute){for(let _t=0;_t<ft.locationSize;_t++)I(ft.location+_t,F.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let _t=0;_t<ft.locationSize;_t++)T(ft.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let _t=0;_t<ft.locationSize;_t++)R(ft.location+_t,dt/ft.locationSize,Ct,K,dt*Dt,dt/ft.locationSize*_t*Dt,wt)}}else if(et!==void 0){let K=et[it];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(ft.location,K);break;case 3:i.vertexAttrib3fv(ft.location,K);break;case 4:i.vertexAttrib4fv(ft.location,K);break;default:i.vertexAttrib1fv(ft.location,K)}}}}A()}function y(){q();for(let L in a){let O=a[L];for(let X in O){let $=O[X];for(let Z in $)g($[Z].object),delete $[Z];delete O[X]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let X in O){let $=O[X];for(let Z in $)g($[Z].object),delete $[Z];delete O[X]}delete a[L.id]}function k(L){for(let O in a){let X=a[O];if(X[L.id]===void 0)continue;let $=X[L.id];for(let Z in $)g($[Z].object),delete $[Z];delete X[L.id]}}function q(){st(),h=!0,c!==l&&(c=l,p(c.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:st,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function Cf(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Pf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||t.has("OES_texture_float"),I=v&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:A}}function Lf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ze,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,v=E*4,T=d.clippingState||null;l.value=T,T=h(g,f,v,p);for(let I=0;I!==v;++I)T[I]=e[I];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,T=p;v!==_;++v,T+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function If(i){let t=new WeakMap;function e(o,a){return a===na?o.mapping=xi:a===ia&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===na||a===ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ua(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Js=class extends Ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fi=4,el=[.125,.215,.35,.446,.526,.582],Fn=20,Gr=new Js,nl=new zt,Wr=null,Xr=0,qr=0,Nn=(1+Math.sqrt(5))/2,hi=1/Nn,il=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Nn,hi),new P(0,Nn,-hi),new P(hi,0,Nn),new P(-hi,0,Nn),new P(Nn,hi,0),new P(-Nn,hi,0)],js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Gi,format:je,colorSpace:cn,depthBuffer:!1},s=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=Df(r,t,e)}return s}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,s){let a=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nl),h.toneMapping=Mn,h.autoClear=!1;let p=new pe({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Qt(new $i,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(nl),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;As(s,E*v,d>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xi||t.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=il[(s-1)%il.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fn;m>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);let d=[],E=0;for(let R=0;R<Fn;++R){let W=R/_,y=Math.exp(-W*W/2);d.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let T=this._sizeLods[s],I=3*T*(s>v-fi?s-v+fi:0),A=4*(this._cubeSize-T);As(e,I,A,3*T,2*T),l.setRenderTarget(e),l.render(u,Gr)}};function Uf(i){let t=[],e=[],n=[],s=i,r=i-fi+1+el.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fi?l=el[o-i+fi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),v=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,W=A>2?0:-1,y=[R,W,0,R+2/3,W,0,R+2/3,W+1,0,R,W,0,R+2/3,W+1,0,R,W+1,0];E.set(y,_*g*A),v.set(f,m*g*A);let S=[A,A,A,A,A,A];T.set(S,d*g*A)}let I=new oe;I.setAttribute("position",new Ne(E,_)),I.setAttribute("uv",new Ne(v,m)),I.setAttribute("faceIndex",new Ne(T,d)),t.push(I),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Df(i,t,e){let n=new Float32Array(Fn),s=new P(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function rl(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function al(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===na||l===ia,h=l===xi||l===vi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new js(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new js(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Of(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ff(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let v=0,T=E.length;v<T;v+=3){let I=E[v+0],A=E[v+1],R=E[v+2];f.push(I,A,A,R,R,I)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,T=E.length/3-1;v<T;v+=3){let I=v+0,A=v+1,R=v+2;f.push(I,A,A,R,R,I)}}else return;let m=new(Xl(f)?$s:qs)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bf(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let E=0;E<_;E++)d+=g[E];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function zf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kf(i,t){return i[0]-t[0]}function Hf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Vf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],W=0;E===!0&&(W=1),v===!0&&(W=2),T===!0&&(W=3);let y=h.attributes.position.count*W,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let k=new Float32Array(y*S*4*g),q=new Xs(k,y,S,g);q.type=vn,q.needsUpdate=!0;let st=W*4;for(let O=0;O<g;O++){let X=I[O],$=A[O],Z=R[O],V=y*S*4*O;for(let et=0;et<X.count;et++){let it=et*st;E===!0&&(o.fromBufferAttribute(X,et),k[V+it+0]=o.x,k[V+it+1]=o.y,k[V+it+2]=o.z,k[V+it+3]=0),v===!0&&(o.fromBufferAttribute($,et),k[V+it+4]=o.x,k[V+it+5]=o.y,k[V+it+6]=o.z,k[V+it+7]=0),T===!0&&(o.fromBufferAttribute(Z,et),k[V+it+8]=o.x,k[V+it+9]=o.y,k[V+it+10]=o.z,k[V+it+11]=Z.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new Wt(y,S)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let E=0;E<f.length;E++)m+=f[E];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let T=g[v];T[0]=v,T[1]=f[v]}g.sort(Hf);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(kf);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let T=a[v],I=T[0],A=T[1];I!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[I]&&h.setAttribute("morphTarget"+v,_[I]),m&&h.getAttribute("morphNormal"+v)!==m[I]&&h.setAttribute("morphNormal"+v,m[I]),s[v]=A,d+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Gf(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ks=class extends ze{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=xn),n===void 0&&h===yi&&(n=Bn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zl=new ze,Jl=new Ks(1,1);Jl.compareFunction=Wl;var jl=new Xs,Kl=new ca,Ql=new Zs,ol=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function Li(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function qf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Yf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),ge(e,n)}}function Zf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),ge(e,n)}}function Jf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),ge(e,n)}}function jf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Qf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function ep(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Jl:Zl;e.setTexture2D(t||r,s)}function ap(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ql,s)}function lp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jl,s)}function cp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return $f;case 35674:return Yf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return jf;case 35667:case 35671:return Kf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}function hp(i,t){i.uniform1fv(this.addr,t)}function up(i,t){let e=Li(t,this.size,2);i.uniform2fv(this.addr,e)}function dp(i,t){let e=Li(t,this.size,3);i.uniform3fv(this.addr,e)}function fp(i,t){let e=Li(t,this.size,4);i.uniform4fv(this.addr,e)}function pp(i,t){let e=Li(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mp(i,t){let e=Li(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gp(i,t){let e=Li(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _p(i,t){i.uniform1iv(this.addr,t)}function xp(i,t){i.uniform2iv(this.addr,t)}function vp(i,t){i.uniform3iv(this.addr,t)}function yp(i,t){i.uniform4iv(this.addr,t)}function Mp(i,t){i.uniform1uiv(this.addr,t)}function bp(i,t){i.uniform2uiv(this.addr,t)}function Sp(i,t){i.uniform3uiv(this.addr,t)}function Ep(i,t){i.uniform4uiv(this.addr,t)}function wp(i,t,e){let n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zl,r[o])}function Tp(i,t,e){let n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kl,r[o])}function Ap(i,t,e){let n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ql,r[o])}function Rp(i,t,e){let n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jl,r[o])}function Cp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return bp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}var fa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}},pa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}},ma=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},$r=/(\w+)(\])?(\[|\.)?/g;function dl(i,t){i.seq.push(t),i.map[t.id]=t}function Pp(i,t,e){let n=i.name,s=n.length;for($r.lastIndex=0;;){let r=$r.exec(n),o=$r.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dl(e,c===void 0?new fa(a,i,t):new pa(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ma(a),dl(e,u)),e=u}}}var _i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Pp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lp=37297,Ip=0;function Up(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Dp(i){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i),n;switch(t===e?n="":t===ks&&e===zs?n="LinearDisplayP3ToLinearSRGB":t===zs&&e===ks&&(n="LinearSRGBToLinearDisplayP3"),i){case cn:case sr:return[n,"LinearTransferOETF"];case ae:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Up(i.getShaderSource(t),o)}else return s}function Np(i,t){let e=Dp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Op(i,t){let e;switch(t){case kc:e="Linear";break;case Hc:e="Reinhard";break;case Vc:e="OptimizedCineon";break;case Gc:e="ACESFilmic";break;case Xc:e="AgX";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pi).join(`
`)}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pi).join(`
`)}function zp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pi(i){return i!==""}function ml(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(i){return i.replace(Hp,Gp)}var Vp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gp(i,t){let e=qt[t];if(e===void 0){let n=Vp.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ga(e)}var Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(Wp,Xp)}function Xp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case vi:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vi&&(t="ENVMAP_MODE_REFRACTION"),t}function Zp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function Jp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qp(e),c=$p(e),h=Yp(e),u=Zp(e),f=Jp(e),p=e.isWebGL2?"":Fp(e),g=Bp(e),_=zp(r),m=s.createProgram(),d,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(pi).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(pi).join(`
`),E.length>0&&(E+=`
`)):(d=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),E=[p,xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Np("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pi).join(`
`)),o=ga(o),o=ml(o,e),o=gl(o,e),a=ga(a),a=ml(a,e),a=gl(a,e),o=_l(o),a=_l(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let T=v+d+o,I=v+E+a,A=fl(s,s.VERTEX_SHADER,T),R=fl(s,s.FRAGMENT_SHADER,I);s.attachShader(m,A),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function W(q){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(R).trim(),X=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,R);else{let Z=pl(s,A,"vertex"),V=pl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+Z+`
`+V)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(L===""||O==="")&&($=!1);$&&(q.diagnostics={runnable:X,programLog:st,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:E}})}s.deleteShader(A),s.deleteShader(R),y=new _i(s,m),S=kp(s,m)}let y;this.getUniforms=function(){return y===void 0&&W(this),y};let S;this.getAttributes=function(){return S===void 0&&W(this),S};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(m,Lp)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var Kp=0,_a=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xa(t),e.set(t,n)),n}},xa=class{constructor(t){this.id=Kp++,this.code=t,this.usedTimes=0}};function Qp(i,t,e,n,s,r,o){let a=new qi,l=new _a,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,S,k,q,st){let L=q.fog,O=st.geometry,X=y.isMeshStandardMaterial?q.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),Z=$&&$.mapping===ir?$.image.height:null,V=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=et!==void 0?et.length:0,ft=0;O.morphAttributes.position!==void 0&&(ft=1),O.morphAttributes.normal!==void 0&&(ft=2),O.morphAttributes.color!==void 0&&(ft=3);let F,K,dt,St;if(V){let mt=Qe[V];F=mt.vertexShader,K=mt.fragmentShader}else F=y.vertexShader,K=y.fragmentShader,l.update(y),dt=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);let Mt=i.getRenderTarget(),Ct=st.isInstancedMesh===!0,Dt=st.isBatchedMesh===!0,wt=!!y.map,_t=!!y.matcap,D=!!$,jt=!!y.aoMap,Tt=!!y.lightMap,rt=!!y.bumpMap,ot=!!y.normalMap,Pt=!!y.displacementMap,It=!!y.emissiveMap,b=!!y.metalnessMap,x=!!y.roughnessMap,U=y.anisotropy>0,Q=y.clearcoat>0,J=y.iridescence>0,nt=y.sheen>0,bt=y.transmission>0,lt=U&&!!y.anisotropyMap,vt=Q&&!!y.clearcoatMap,Et=Q&&!!y.clearcoatNormalMap,Ot=Q&&!!y.clearcoatRoughnessMap,Y=J&&!!y.iridescenceMap,Xt=J&&!!y.iridescenceThicknessMap,Bt=nt&&!!y.sheenColorMap,Ut=nt&&!!y.sheenRoughnessMap,yt=!!y.specularMap,xt=!!y.specularColorMap,kt=!!y.specularIntensityMap,Jt=bt&&!!y.transmissionMap,ne=bt&&!!y.thicknessMap,Rt=!!y.gradientMap,at=!!y.alphaMap,C=y.alphaTest>0,ht=!!y.alphaHash,ut=!!y.extensions,w=!!O.attributes.uv1,H=!!O.attributes.uv2,j=!!O.attributes.uv3,tt=Mn;return y.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(tt=i.toneMapping),{isWebGL2:h,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:F,fragmentShader:K,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Dt,instancing:Ct,instancingColor:Ct&&st.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:cn,map:wt,matcap:_t,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:Z,aoMap:jt,lightMap:Tt,bumpMap:rt,normalMap:ot,displacementMap:f&&Pt,emissiveMap:It,normalMapObjectSpace:ot&&y.normalMapType===ih,normalMapTangentSpace:ot&&y.normalMapType===Gl,metalnessMap:b,roughnessMap:x,anisotropy:U,anisotropyMap:lt,clearcoat:Q,clearcoatMap:vt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Ot,iridescence:J,iridescenceMap:Y,iridescenceThicknessMap:Xt,sheen:nt,sheenColorMap:Bt,sheenRoughnessMap:Ut,specularMap:yt,specularColorMap:xt,specularIntensityMap:kt,transmission:bt,transmissionMap:Jt,thicknessMap:ne,gradientMap:Rt,opaque:y.transparent===!1&&y.blending===mi,alphaMap:at,alphaTest:C,alphaHash:ht,combine:y.combine,mapUv:wt&&_(y.map.channel),aoMapUv:jt&&_(y.aoMap.channel),lightMapUv:Tt&&_(y.lightMap.channel),bumpMapUv:rt&&_(y.bumpMap.channel),normalMapUv:ot&&_(y.normalMap.channel),displacementMapUv:Pt&&_(y.displacementMap.channel),emissiveMapUv:It&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(y.sheenRoughnessMap.channel),specularMapUv:yt&&_(y.specularMap.channel),specularColorMapUv:xt&&_(y.specularColorMap.channel),specularIntensityMapUv:kt&&_(y.specularIntensityMap.channel),transmissionMapUv:Jt&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ot||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:w,vertexUv2s:H,vertexUv3s:j,pointsUvs:st.isPoints===!0&&!!O.attributes.uv&&(wt||at),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Le,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ut&&y.extensions.derivatives===!0,extensionFragDepth:ut&&y.extensions.fragDepth===!0,extensionDrawBuffers:ut&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)S.push(k),S.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(E(S,y),v(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){let S=g[y.type],k;if(S){let q=Qe[S];k=Hh.clone(q.uniforms)}else k=y.uniforms;return k}function I(y,S){let k;for(let q=0,st=c.length;q<st;q++){let L=c[q];if(L.cacheKey===S){k=L,++k.usedTimes;break}}return k===void 0&&(k=new jp(i,S,y,r),c.push(k)),k}function A(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:W}}function tm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||em),n.length>1&&n.sort(f||vl),s.length>1&&s.sort(f||vl)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function nm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yl,i.set(n,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function im(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function sm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rm=0;function am(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function om(i,t){let e=new im,n=sm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ue,a=new ue;function l(h,u){let f=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,d=0,E=0,v=0,T=0,I=0,A=0,R=0,W=0,y=0;h.sort(am);let S=u===!0?Math.PI:1;for(let q=0,st=h.length;q<st;q++){let L=h[q],O=L.color,X=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*X*S,p+=O.g*X*S,g+=O.b*X*S;else if(L.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(L.sh.coefficients[V],X);y++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let et=L.shadow,it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.directionalShadow[_]=it,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=L.shadow.matrix,T++}s.directional[_]=V,_++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(O).multiplyScalar(X*S),V.distance=$,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,s.spot[d]=V;let et=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,et.updateMatrices(L),L.castShadow&&W++),s.spotLightMatrix[d]=et.matrix,L.castShadow){let it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.spotShadow[d]=it,s.spotShadowMap[d]=Z,A++}d++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(O).multiplyScalar(X),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),s.rectArea[E]=V,E++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*S),V.distance=L.distance,V.decay=L.decay,L.castShadow){let et=L.shadow,it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=L.shadow.matrix,I++}s.point[m]=V,m++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(X*S),V.groundColor.copy(L.groundColor).multiplyScalar(X*S),s.hemi[v]=V,v++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let k=s.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==E||k.hemiLength!==v||k.numDirectionalShadows!==T||k.numPointShadows!==I||k.numSpotShadows!==A||k.numSpotMaps!==R||k.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=E,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=A+R-W,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=y,k.directionalLength=_,k.pointLength=m,k.spotLength=d,k.rectAreaLength=E,k.hemiLength=v,k.numDirectionalShadows=T,k.numPointShadows=I,k.numSpotShadows=A,k.numSpotMaps=R,k.numLightProbes=y,s.version=rm++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){let T=h[E];if(T.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(T.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let I=s.rectArea[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Ml(i,t){let e=new om(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lm(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Ml(i,t),e.set(r,[l])):o>=a.length?(l=new Ml(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var va=class extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(i,t,e){let n=new Yi,s=new Wt,r=new Wt,o=new ve,a=new va({depthPacking:nh}),l=new ya,c={},h=e.maxTextureSize,u={[Sn]:Te,[Te]:Sn,[Le]:Le},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:cm,fragmentShader:hm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let d=this.type;this.render=function(A,R,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),S=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let st=d!==on&&this.type===on,L=d===on&&this.type!==on;for(let O=0,X=A.length;O<X;O++){let $=A[O],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let V=Z.getFrameExtents();if(s.multiply(V),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,Z.mapSize.y=r.y)),Z.map===null||st===!0||L===!0){let it=this.type!==on?{minFilter:Pe,magFilter:Pe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new hn(s.x,s.y,it),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let et=Z.getViewportCount();for(let it=0;it<et;it++){let ft=Z.getViewport(it);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),q.viewport(o),Z.updateMatrices($,it),n=Z.getFrustum(),T(R,W,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===on&&E(Z,W),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,k)};function E(A,R){let W=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,W,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,W,p,_,null)}function v(A,R,W,y){let S=null,k=W.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)S=k;else if(S=W.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=S.uuid,st=R.uuid,L=c[q];L===void 0&&(L={},c[q]=L);let O=L[st];O===void 0&&(O=S.clone(),L[st]=O,R.addEventListener("dispose",I)),S=O}if(S.visible=R.visible,S.wireframe=R.wireframe,y===on?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,W.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=i.properties.get(S);q.light=W}return S}function T(A,R,W,y,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===on)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld);let st=t.update(A),L=A.material;if(Array.isArray(L)){let O=st.groups;for(let X=0,$=O.length;X<$;X++){let Z=O[X],V=L[Z.materialIndex];if(V&&V.visible){let et=v(A,V,y,S);A.onBeforeShadow(i,A,R,W,st,et,Z),i.renderBufferDirect(W,null,st,et,A,Z),A.onAfterShadow(i,A,R,W,st,et,Z)}}}else if(L.visible){let O=v(A,L,y,S);A.onBeforeShadow(i,A,R,W,st,O,null),i.renderBufferDirect(W,null,st,O,A,null),A.onAfterShadow(i,A,R,W,st,O,null)}}let q=A.children;for(let st=0,L=q.length;st<L;st++)T(q[st],R,W,y,S)}function I(A){A.target.removeEventListener("dispose",I);for(let W in c){let y=c[W],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function dm(i,t,e){let n=e.isWebGL2;function s(){let C=!1,ht=new ve,ut=null,w=new ve(0,0,0,0);return{setMask:function(H){ut!==H&&!C&&(i.colorMask(H,H,H,H),ut=H)},setLocked:function(H){C=H},setClear:function(H,j,tt,pt,mt){mt===!0&&(H*=pt,j*=pt,tt*=pt),ht.set(H,j,tt,pt),w.equals(ht)===!1&&(i.clearColor(H,j,tt,pt),w.copy(ht))},reset:function(){C=!1,ut=null,w.set(-1,0,0,0)}}}function r(){let C=!1,ht=null,ut=null,w=null;return{setTest:function(H){H?Dt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(H){ht!==H&&!C&&(i.depthMask(H),ht=H)},setFunc:function(H){if(ut!==H){switch(H){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=H}},setLocked:function(H){C=H},setClear:function(H){w!==H&&(i.clearDepth(H),w=H)},reset:function(){C=!1,ht=null,ut=null,w=null}}}function o(){let C=!1,ht=null,ut=null,w=null,H=null,j=null,tt=null,pt=null,mt=null;return{setTest:function(Ft){C||(Ft?Dt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Ft){ht!==Ft&&!C&&(i.stencilMask(Ft),ht=Ft)},setFunc:function(Ft,ie,fe){(ut!==Ft||w!==ie||H!==fe)&&(i.stencilFunc(Ft,ie,fe),ut=Ft,w=ie,H=fe)},setOp:function(Ft,ie,fe){(j!==Ft||tt!==ie||pt!==fe)&&(i.stencilOp(Ft,ie,fe),j=Ft,tt=ie,pt=fe)},setLocked:function(Ft){C=Ft},setClear:function(Ft){mt!==Ft&&(i.clearStencil(Ft),mt=Ft)},reset:function(){C=!1,ht=null,ut=null,w=null,H=null,j=null,tt=null,pt=null,mt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,T=null,I=null,A=null,R=null,W=null,y=new zt(0,0,0),S=0,k=!1,q=null,st=null,L=null,O=null,X=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,V=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(et)[1]),Z=V>=1):et.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Z=V>=2);let it=null,ft={},F=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),dt=new ve().fromArray(F),St=new ve().fromArray(K);function Mt(C,ht,ut,w){let H=new Uint8Array(4),j=i.createTexture();i.bindTexture(C,j),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<ut;tt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,w,0,i.RGBA,i.UNSIGNED_BYTE,H):i.texImage2D(ht+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,H);return j}let Ct={};Ct[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(i.DEPTH_TEST),l.setFunc(Ns),It(!1),b(to),Dt(i.CULL_FACE),ot(yn);function Dt(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function wt(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function _t(C,ht){return p[C]!==ht?(i.bindFramebuffer(C,ht),p[C]=ht,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ht),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function D(C,ht){let ut=_,w=!1;if(C)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),C.isWebGLMultipleRenderTargets){let H=C.texture;if(ut.length!==H.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let j=0,tt=H.length;j<tt;j++)ut[j]=i.COLOR_ATTACHMENT0+j;ut.length=H.length,w=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,w=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,w=!0);w&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function jt(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let Tt={[On]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[io]=i.MIN,Tt[so]=i.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Tt[io]=C.MIN_EXT,Tt[so]=C.MAX_EXT)}let rt={[xc]:i.ZERO,[vc]:i.ONE,[yc]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[Tc]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(C,ht,ut,w,H,j,tt,pt,mt,Ft){if(C===yn){d===!0&&(wt(i.BLEND),d=!1);return}if(d===!1&&(Dt(i.BLEND),d=!0),C!==mc){if(C!==E||Ft!==k){if((v!==On||A!==On)&&(i.blendEquation(i.FUNC_ADD),v=On,A=On),Ft)switch(C){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,I=null,R=null,W=null,y.set(0,0,0),S=0,E=C,k=Ft}return}H=H||ht,j=j||ut,tt=tt||w,(ht!==v||H!==A)&&(i.blendEquationSeparate(Tt[ht],Tt[H]),v=ht,A=H),(ut!==T||w!==I||j!==R||tt!==W)&&(i.blendFuncSeparate(rt[ut],rt[w],rt[j],rt[tt]),T=ut,I=w,R=j,W=tt),(pt.equals(y)===!1||mt!==S)&&(i.blendColor(pt.r,pt.g,pt.b,mt),y.copy(pt),S=mt),E=C,k=!1}function Pt(C,ht){C.side===Le?wt(i.CULL_FACE):Dt(i.CULL_FACE);let ut=C.side===Te;ht&&(ut=!ut),It(ut),C.blending===mi&&C.transparent===!1?ot(yn):ot(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let w=C.stencilWrite;c.setTest(w),w&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Dt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(C){q!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),q=C)}function b(C){C!==dc?(Dt(i.CULL_FACE),C!==st&&(C===to?i.cullFace(i.BACK):C===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),st=C}function x(C){C!==L&&(Z&&i.lineWidth(C),L=C)}function U(C,ht,ut){C?(Dt(i.POLYGON_OFFSET_FILL),(O!==ht||X!==ut)&&(i.polygonOffset(ht,ut),O=ht,X=ut)):wt(i.POLYGON_OFFSET_FILL)}function Q(C){C?Dt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+$-1),it!==C&&(i.activeTexture(C),it=C)}function nt(C,ht,ut){ut===void 0&&(it===null?ut=i.TEXTURE0+$-1:ut=it);let w=ft[ut];w===void 0&&(w={type:void 0,texture:void 0},ft[ut]=w),(w.type!==C||w.texture!==ht)&&(it!==ut&&(i.activeTexture(ut),it=ut),i.bindTexture(C,ht||Ct[C]),w.type=C,w.texture=ht)}function bt(){let C=ft[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(C){dt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),dt.copy(C))}function Jt(C){St.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),St.copy(C))}function ne(C,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let w=ut.get(C);w===void 0&&(w=i.getUniformBlockIndex(ht,C.name),ut.set(C,w))}function Rt(C,ht){let w=u.get(ht).get(C);h.get(ht)!==w&&(i.uniformBlockBinding(ht,w,C.__bindingPointIndex),h.set(ht,w))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,ft={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,T=null,I=null,A=null,R=null,W=null,y=new zt(0,0,0),S=0,k=!1,q=null,st=null,L=null,O=null,X=null,dt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Dt,disable:wt,bindFramebuffer:_t,drawBuffers:D,useProgram:jt,setBlending:ot,setMaterial:Pt,setFlipSided:It,setCullFace:b,setLineWidth:x,setPolygonOffset:U,setScissorTest:Q,activeTexture:J,bindTexture:nt,unbindTexture:bt,compressedTexImage2D:lt,compressedTexImage3D:vt,texImage2D:yt,texImage3D:xt,updateUBOMapping:ne,uniformBlockBinding:Rt,texStorage2D:Bt,texStorage3D:Ut,texSubImage2D:Et,texSubImage3D:Ot,compressedTexSubImage2D:Y,compressedTexSubImage3D:Xt,scissor:kt,viewport:Jt,reset:at}}function fm(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Xi("canvas")}function _(b,x,U,Q){let J=1;if((b.width>Q||b.height>Q)&&(J=Q/Math.max(b.width,b.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let nt=x?Vs:Math.floor,bt=nt(J*b.width),lt=nt(J*b.height);u===void 0&&(u=g(bt,lt));let vt=U?g(bt,lt):u;return vt.width=bt,vt.height=lt,vt.getContext("2d").drawImage(b,0,0,bt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+bt+"x"+lt+")."),vt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return oa(b.width)&&oa(b.height)}function d(b){return a?!1:b.wrapS!==Je||b.wrapT!==Je||b.minFilter!==Pe&&b.minFilter!==Ge}function E(b,x){return b.generateMipmaps&&x&&b.minFilter!==Pe&&b.minFilter!==Ge}function v(b){i.generateMipmap(b)}function T(b,x,U,Q,J=!1){if(a===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=x;if(x===i.RED&&(U===i.FLOAT&&(nt=i.R32F),U===i.HALF_FLOAT&&(nt=i.R16F),U===i.UNSIGNED_BYTE&&(nt=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(nt=i.R8UI),U===i.UNSIGNED_SHORT&&(nt=i.R16UI),U===i.UNSIGNED_INT&&(nt=i.R32UI),U===i.BYTE&&(nt=i.R8I),U===i.SHORT&&(nt=i.R16I),U===i.INT&&(nt=i.R32I)),x===i.RG&&(U===i.FLOAT&&(nt=i.RG32F),U===i.HALF_FLOAT&&(nt=i.RG16F),U===i.UNSIGNED_BYTE&&(nt=i.RG8)),x===i.RGBA){let bt=J?Bs:Kt.getTransfer(Q);U===i.FLOAT&&(nt=i.RGBA32F),U===i.HALF_FLOAT&&(nt=i.RGBA16F),U===i.UNSIGNED_BYTE&&(nt=bt===ee?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function I(b,x,U){return E(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==Pe&&b.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){return b===Pe||b===ro||b===vr?i.NEAREST:i.LINEAR}function R(b){let x=b.target;x.removeEventListener("dispose",R),y(x),x.isVideoTexture&&h.delete(x)}function W(b){let x=b.target;x.removeEventListener("dispose",W),k(x)}function y(b){let x=n.get(b);if(x.__webglInit===void 0)return;let U=b.source,Q=f.get(U);if(Q){let J=Q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(b),Object.keys(Q).length===0&&f.delete(U)}n.remove(b)}function S(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let U=b.source,Q=f.get(U);delete Q[x.__cacheKey],o.memory.textures--}function k(b){let x=b.texture,U=n.get(b),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let nt=0;nt<U.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(U.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)i.deleteFramebuffer(U.__webglFramebuffer[J]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,nt=x.length;J<nt;J++){let bt=n.get(x[J]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(b)}let q=0;function st(){q=0}function L(){let b=q;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),q+=1,b}function O(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){let U=n.get(b);if(b.isVideoTexture&&Pt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){let Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(U,b,x);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function $(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){dt(U,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function Z(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){dt(U,b,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function V(b,x){let U=n.get(b);if(b.version>0&&U.__version!==b.version){St(U,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}let et={[sa]:i.REPEAT,[Je]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},it={[Pe]:i.NEAREST,[ro]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[qc]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},ft={[sh]:i.NEVER,[hh]:i.ALWAYS,[rh]:i.LESS,[Wl]:i.LEQUAL,[ah]:i.EQUAL,[ch]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function F(b,x,U){if(U?(i.texParameteri(b,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,et[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,it[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,it[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Je||x.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Pe&&x.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pe||x.minFilter!==vr&&x.minFilter!==Vi||x.type===vn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Gi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function K(b,x){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));let Q=x.source,J=f.get(Q);J===void 0&&(J={},f.set(Q,J));let nt=O(x);if(nt!==b.__cacheKey){J[nt]===void 0&&(J[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[nt].usedTimes++;let bt=J[b.__cacheKey];bt!==void 0&&(J[b.__cacheKey].usedTimes--,bt.usedTimes===0&&S(x)),b.__cacheKey=nt,b.__webglTexture=J[nt].texture}return U}function dt(b,x,U){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let J=K(b,x),nt=x.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+U);let bt=n.get(nt);if(nt.version!==bt.__version||J===!0){e.activeTexture(i.TEXTURE0+U);let lt=Kt.getPrimaries(Kt.workingColorSpace),vt=x.colorSpace===We?null:Kt.getPrimaries(x.colorSpace),Et=x.colorSpace===We||lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Ot=d(x)&&m(x.image)===!1,Y=_(x.image,Ot,!1,s.maxTextureSize);Y=It(x,Y);let Xt=m(Y)||a,Bt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),yt=T(x.internalFormat,Bt,Ut,x.colorSpace,x.isVideoTexture);F(Q,x,Xt);let xt,kt=x.mipmaps,Jt=a&&x.isVideoTexture!==!0&&yt!==Hl,ne=bt.__version===void 0||J===!0,Rt=I(x,Y,Xt);if(x.isDepthTexture)yt=i.DEPTH_COMPONENT,a?x.type===vn?yt=i.DEPTH_COMPONENT32F:x.type===xn?yt=i.DEPTH_COMPONENT24:x.type===Bn?yt=i.DEPTH24_STENCIL8:yt=i.DEPTH_COMPONENT16:x.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===zn&&yt===i.DEPTH_COMPONENT&&x.type!==ka&&x.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xn,Ut=r.convert(x.type)),x.format===yi&&yt===i.DEPTH_COMPONENT&&(yt=i.DEPTH_STENCIL,x.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Bn,Ut=r.convert(x.type))),ne&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,yt,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,yt,Y.width,Y.height,0,Bt,Ut,null));else if(x.isDataTexture)if(kt.length>0&&Xt){Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Rt,yt,kt[0].width,kt[0].height);for(let at=0,C=kt.length;at<C;at++)xt=kt[at],Jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Bt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,at,yt,xt.width,xt.height,0,Bt,Ut,xt.data);x.generateMipmaps=!1}else Jt?(ne&&e.texStorage2D(i.TEXTURE_2D,Rt,yt,Y.width,Y.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,Bt,Ut,Y.data)):e.texImage2D(i.TEXTURE_2D,0,yt,Y.width,Y.height,0,Bt,Ut,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Jt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,yt,kt[0].width,kt[0].height,Y.depth);for(let at=0,C=kt.length;at<C;at++)xt=kt[at],x.format!==je?Bt!==null?Jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,Y.depth,Bt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,yt,xt.width,xt.height,Y.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,Y.depth,Bt,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,yt,xt.width,xt.height,Y.depth,0,Bt,Ut,xt.data)}else{Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Rt,yt,kt[0].width,kt[0].height);for(let at=0,C=kt.length;at<C;at++)xt=kt[at],x.format!==je?Bt!==null?Jt?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Bt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,yt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,Bt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,at,yt,xt.width,xt.height,0,Bt,Ut,xt.data)}else if(x.isDataArrayTexture)Jt?(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,yt,Y.width,Y.height,Y.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Bt,Ut,Y.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,Y.width,Y.height,Y.depth,0,Bt,Ut,Y.data);else if(x.isData3DTexture)Jt?(ne&&e.texStorage3D(i.TEXTURE_3D,Rt,yt,Y.width,Y.height,Y.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Bt,Ut,Y.data)):e.texImage3D(i.TEXTURE_3D,0,yt,Y.width,Y.height,Y.depth,0,Bt,Ut,Y.data);else if(x.isFramebufferTexture){if(ne)if(Jt)e.texStorage2D(i.TEXTURE_2D,Rt,yt,Y.width,Y.height);else{let at=Y.width,C=Y.height;for(let ht=0;ht<Rt;ht++)e.texImage2D(i.TEXTURE_2D,ht,yt,at,C,0,Bt,Ut,null),at>>=1,C>>=1}}else if(kt.length>0&&Xt){Jt&&ne&&e.texStorage2D(i.TEXTURE_2D,Rt,yt,kt[0].width,kt[0].height);for(let at=0,C=kt.length;at<C;at++)xt=kt[at],Jt?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Bt,Ut,xt):e.texImage2D(i.TEXTURE_2D,at,yt,Bt,Ut,xt);x.generateMipmaps=!1}else Jt?(ne&&e.texStorage2D(i.TEXTURE_2D,Rt,yt,Y.width,Y.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,Ut,Y)):e.texImage2D(i.TEXTURE_2D,0,yt,Bt,Ut,Y);E(x,Xt)&&v(Q),bt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function St(b,x,U){if(x.image.length!==6)return;let Q=K(b,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let nt=n.get(J);if(J.version!==nt.__version||Q===!0){e.activeTexture(i.TEXTURE0+U);let bt=Kt.getPrimaries(Kt.workingColorSpace),lt=x.colorSpace===We?null:Kt.getPrimaries(x.colorSpace),vt=x.colorSpace===We||bt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let at=0;at<6;at++)!Et&&!Ot?Y[at]=_(x.image[at],!1,!0,s.maxCubemapSize):Y[at]=Ot?x.image[at].image:x.image[at],Y[at]=It(x,Y[at]);let Xt=Y[0],Bt=m(Xt)||a,Ut=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),xt=T(x.internalFormat,Ut,yt,x.colorSpace),kt=a&&x.isVideoTexture!==!0,Jt=nt.__version===void 0||Q===!0,ne=I(x,Xt,Bt);F(i.TEXTURE_CUBE_MAP,x,Bt);let Rt;if(Et){kt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,xt,Xt.width,Xt.height);for(let at=0;at<6;at++){Rt=Y[at].mipmaps;for(let C=0;C<Rt.length;C++){let ht=Rt[C];x.format!==je?Ut!==null?kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,0,0,ht.width,ht.height,Ut,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,0,0,ht.width,ht.height,Ut,yt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C,xt,ht.width,ht.height,0,Ut,yt,ht.data)}}}else{Rt=x.mipmaps,kt&&Jt&&(Rt.length>0&&ne++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ne,xt,Y[0].width,Y[0].height));for(let at=0;at<6;at++)if(Ot){kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Y[at].width,Y[at].height,Ut,yt,Y[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,Y[at].width,Y[at].height,0,Ut,yt,Y[at].data);for(let C=0;C<Rt.length;C++){let ut=Rt[C].image[at].image;kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,0,0,ut.width,ut.height,Ut,yt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,xt,ut.width,ut.height,0,Ut,yt,ut.data)}}else{kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,yt,Y[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,Ut,yt,Y[at]);for(let C=0;C<Rt.length;C++){let ht=Rt[C];kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,0,0,Ut,yt,ht.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,C+1,xt,Ut,yt,ht.image[at])}}}E(x,Bt)&&v(i.TEXTURE_CUBE_MAP),nt.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Mt(b,x,U,Q,J,nt){let bt=r.convert(U.format,U.colorSpace),lt=r.convert(U.type),vt=T(U.internalFormat,bt,lt,U.colorSpace);if(!n.get(x).__hasExternalTextures){let Ot=Math.max(1,x.width>>nt),Y=Math.max(1,x.height>>nt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,vt,Ot,Y,x.depth,0,bt,lt,null):e.texImage2D(J,nt,vt,Ot,Y,0,bt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ot(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,0,rt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,n.get(U).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||ot(x)){let J=x.depthTexture;J&&J.isDepthTexture&&(J.type===vn?Q=i.DEPTH_COMPONENT32F:J.type===xn&&(Q=i.DEPTH_COMPONENT24));let nt=rt(x);ot(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){let Q=rt(x);U&&ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):ot(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<Q.length;J++){let nt=Q[J],bt=r.convert(nt.format,nt.colorSpace),lt=r.convert(nt.type),vt=T(nt.internalFormat,bt,lt,nt.colorSpace),Et=rt(x);U&&ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,vt,x.width,x.height):ot(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,vt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,vt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);let Q=n.get(x.depthTexture).__webglTexture,J=rt(x);if(x.depthTexture.format===zn)ot(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===yi)ot(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function wt(b){let x=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,b)}else if(U){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ct(x.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ct(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(b,x,U){let Q=n.get(b);x!==void 0&&Mt(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&wt(b)}function D(b){let x=b.texture,U=n.get(b),Q=n.get(x);b.addEventListener("dispose",W),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++);let J=b.isWebGLCubeRenderTarget===!0,nt=b.isWebGLMultipleRenderTargets===!0,bt=m(b)||a;if(J){U.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[lt]=[];for(let vt=0;vt<x.mipmaps.length;vt++)U.__webglFramebuffer[lt][vt]=i.createFramebuffer()}else U.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)U.__webglFramebuffer[lt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(nt)if(s.drawBuffers){let lt=b.texture;for(let vt=0,Et=lt.length;vt<Et;vt++){let Ot=n.get(lt[vt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ot(b)===!1){let lt=nt?x:[x];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){let Et=lt[vt];U.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[vt]);let Ot=r.convert(Et.format,Et.colorSpace),Y=r.convert(Et.type),Xt=T(Et.internalFormat,Ot,Y,Et.colorSpace,b.isXRRenderTarget===!0),Bt=rt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,U.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),F(i.TEXTURE_CUBE_MAP,x,bt);for(let lt=0;lt<6;lt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)Mt(U.__webglFramebuffer[lt][vt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,vt);else Mt(U.__webglFramebuffer[lt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);E(x,bt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let lt=b.texture;for(let vt=0,Et=lt.length;vt<Et;vt++){let Ot=lt[vt],Y=n.get(Ot);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture),F(i.TEXTURE_2D,Ot,bt),Mt(U.__webglFramebuffer,b,Ot,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),E(Ot,bt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,Q.__webglTexture),F(lt,x,bt),a&&x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)Mt(U.__webglFramebuffer[vt],b,x,i.COLOR_ATTACHMENT0,lt,vt);else Mt(U.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,lt,0);E(x,bt)&&v(lt),e.unbindTexture()}b.depthBuffer&&wt(b)}function jt(b){let x=m(b)||a,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,J=U.length;Q<J;Q++){let nt=U[Q];if(E(nt,x)){let bt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(nt).__webglTexture;e.bindTexture(bt,lt),v(bt),e.unbindTexture()}}}function Tt(b){if(a&&b.samples>0&&ot(b)===!1){let x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Q=b.height,J=i.COLOR_BUFFER_BIT,nt=[],bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(b),vt=b.isWebGLMultipleRenderTargets===!0;if(vt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){nt.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&nt.push(bt);let Ot=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Ot===!1&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),vt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Et]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),vt){let Y=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Et]);let Ot=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function rt(b){return Math.min(s.maxSamples,b.samples)}function ot(b){let x=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pt(b){let x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function It(b,x){let U=b.colorSpace,Q=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===aa||U!==cn&&U!==We&&(Kt.getTransfer(U)===ee?a===!1?t.has("EXT_sRGB")===!0&&Q===je?(b.format=aa,b.minFilter=Ge,b.generateMipmaps=!1):x=Gs.sRGBToLinear(x):(Q!==je||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=L,this.resetTextureUnits=st,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=_t,this.setupRenderTarget=D,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ot}function pm(i,t,e){let n=e.isWebGL2;function s(r,o=We){let a,l=Kt.getTransfer(o);if(r===bn)return i.UNSIGNED_BYTE;if(r===Ol)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$c)return i.BYTE;if(r===Yc)return i.SHORT;if(r===ka)return i.UNSIGNED_SHORT;if(r===Nl)return i.INT;if(r===xn)return i.UNSIGNED_INT;if(r===vn)return i.FLOAT;if(r===Gi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Zc)return i.ALPHA;if(r===je)return i.RGBA;if(r===Jc)return i.LUMINANCE;if(r===jc)return i.LUMINANCE_ALPHA;if(r===zn)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===aa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kc)return i.RED;if(r===Bl)return i.RED_INTEGER;if(r===Qc)return i.RG;if(r===zl)return i.RG_INTEGER;if(r===kl)return i.RGBA_INTEGER;if(r===yr||r===Mr||r===br||r===Sr)if(l===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ao||r===oo||r===lo||r===co)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ho||r===uo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ho)return l===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===yo||r===Mo||r===bo||r===So||r===Eo||r===wo||r===To)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===po)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_o)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===So)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wo)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return l===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Er||r===Ao||r===Ro)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Er)return l===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===th||r===Co||r===Po||r===Lo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Er)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ma=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ba=class extends En{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=e.getContextAttributes(),m=null,d=null,E=[],v=[],T=new Wt,I=null,A=new Me;A.layers.enable(1),A.viewport=new ve;let R=new Me;R.layers.enable(2),R.viewport=new ve;let W=[A,R],y=new Ma;y.layers.enable(1),y.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=E[F];return K===void 0&&(K=new Hi,E[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=E[F];return K===void 0&&(K=new Hi,E[F]=K),K.getGripSpace()},this.getHand=function(F){let K=E[F];return K===void 0&&(K=new Hi,E[F]=K),K.getHandSpace()};function q(F){let K=v.indexOf(F.inputSource);if(K===-1)return;let dt=E[K];dt!==void 0&&(dt.update(F.inputSource,F.frame,c||o),dt.dispatchEvent({type:F.type,data:F.inputSource}))}function st(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",L);for(let F=0;F<E.length;F++){let K=v[F];K!==null&&(v[F]=null,E[F].disconnect(K))}S=null,k=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",st),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new hn(p.framebufferWidth,p.framebufferHeight,{format:je,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,dt=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?yi:zn,dt=_.stencil?Bn:xn);let Mt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new hn(f.textureWidth,f.textureHeight,{format:je,type:bn,depthTexture:new Ks(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ct=t.properties.get(d);Ct.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(F){for(let K=0;K<F.removed.length;K++){let dt=F.removed[K],St=v.indexOf(dt);St>=0&&(v[St]=null,E[St].disconnect(dt))}for(let K=0;K<F.added.length;K++){let dt=F.added[K],St=v.indexOf(dt);if(St===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=v.length){v.push(dt),St=Ct;break}else if(v[Ct]===null){v[Ct]=dt,St=Ct;break}if(St===-1)break}let Mt=E[St];Mt&&Mt.connect(dt)}}let O=new P,X=new P;function $(F,K,dt){O.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(dt.matrixWorld);let St=O.distanceTo(X),Mt=K.projectionMatrix.elements,Ct=dt.projectionMatrix.elements,Dt=Mt[14]/(Mt[10]-1),wt=Mt[14]/(Mt[10]+1),_t=(Mt[9]+1)/Mt[5],D=(Mt[9]-1)/Mt[5],jt=(Mt[8]-1)/Mt[0],Tt=(Ct[8]+1)/Ct[0],rt=Dt*jt,ot=Dt*Tt,Pt=St/(-jt+Tt),It=Pt*-jt;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(It),F.translateZ(Pt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();let b=Dt+Pt,x=wt+Pt,U=rt-It,Q=ot+(St-It),J=_t*wt/x*b,nt=D*wt/x*b;F.projectionMatrix.makePerspective(U,Q,J,nt,b,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Z(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;y.near=R.near=A.near=F.near,y.far=R.far=A.far=F.far,(S!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,k=y.far);let K=F.parent,dt=y.cameras;Z(y,K);for(let St=0;St<dt.length;St++)Z(dt[St],K);dt.length===2?$(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),V(F,y,K)};function V(F,K,dt){dt===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(dt.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Wi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let et=null;function it(F,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let St=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let Mt=0;Mt<dt.length;Mt++){let Ct=dt[Mt],Dt=null;if(p!==null)Dt=p.getViewport(Ct);else{let _t=u.getViewSubImage(f,Ct);Dt=_t.viewport,Mt===0&&(t.setRenderTargetTextures(d,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(d))}let wt=W[Mt];wt===void 0&&(wt=new Me,wt.layers.enable(Mt),wt.viewport=new ve,W[Mt]=wt),wt.matrix.fromArray(Ct.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Ct.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Mt===0&&(y.matrix.copy(wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(wt)}}for(let dt=0;dt<E.length;dt++){let St=v[dt],Mt=E[dt];St!==null&&Mt!==void 0&&Mt.update(St,K,c||o)}et&&et(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ft=new Yl;ft.setAnimationLoop(it),this.setAnimationLoop=function(F){et=F},this.dispose=function(){}}};function gm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$l(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,v,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Te&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Te&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _m(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){let T=v.program;n.uniformBlockBinding(E,T)}function c(E,v){let T=s[E.id];T===void 0&&(g(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",m));let I=v.program;n.updateUBOMapping(E,I);let A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let v=u();E.__bindingPointIndex=v;let T=i.createBuffer(),I=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let v=s[E.id],T=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,R=T.length;A<R;A++){let W=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,S=W.length;y<S;y++){let k=W[y];if(p(k,A,y,I)===!0){let q=k.__offset,st=Array.isArray(k.value)?k.value:[k.value],L=0;for(let O=0;O<st.length;O++){let X=st[O],$=_(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,q+L,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,v,T,I){let A=E.value,R=v+"_"+T;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let W=I[R];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return I[R]=A,!0}else if(W.equals(A)===!1)return W.copy(A),!0}return!1}function g(E){let v=E.uniforms,T=0,I=16;for(let R=0,W=v.length;R<W;R++){let y=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,k=y.length;S<k;S++){let q=y[S],st=Array.isArray(q.value)?q.value:[q.value];for(let L=0,O=st.length;L<O;L++){let X=st[L],$=_(X),Z=T%I;Z!==0&&I-Z<$.boundary&&(T+=I-Z),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=$.storage}}}let A=T%I;return A>0&&(T+=I-A),E.__size=T,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Gn=class{constructor(t={}){let{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;let v=this,T=!1,I=0,A=0,R=null,W=-1,y=null,S=new ve,k=new ve,q=null,st=new zt(0),L=0,O=e.width,X=e.height,$=1,Z=null,V=null,et=new ve(0,0,O,X),it=new ve(0,0,O,X),ft=!1,F=new Yi,K=!1,dt=!1,St=null,Mt=new ue,Ct=new Wt,Dt=new P,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return R===null?$:1}let D=n;function jt(M,N){for(let z=0;z<M.length;z++){let G=M[z],B=e.getContext(G,N);if(B!==null)return B}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),D=jt(N,M),D===null)throw jt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Tt,rt,ot,Pt,It,b,x,U,Q,J,nt,bt,lt,vt,Et,Ot,Y,Xt,Bt,Ut,yt,xt,kt,Jt;function ne(){Tt=new Of(D),rt=new Pf(D,Tt,t),Tt.init(rt),xt=new pm(D,Tt,rt),ot=new dm(D,Tt,rt),Pt=new zf(D),It=new tm,b=new fm(D,Tt,ot,It,rt,xt,Pt),x=new If(v),U=new Nf(v),Q=new qh(D,rt),kt=new Rf(D,Tt,Q,rt),J=new Ff(D,Q,Pt,kt),nt=new Gf(D,J,Q,Pt),Bt=new Vf(D,rt,b),Ot=new Lf(It),bt=new Qp(v,x,U,Tt,rt,kt,Ot),lt=new gm(v,It),vt=new nm,Et=new lm(Tt,rt),Xt=new Af(v,x,U,ot,nt,f,l),Y=new um(v,nt,rt),Jt=new _m(D,Pt,rt,ot),Ut=new Cf(D,Tt,Pt,rt),yt=new Bf(D,Tt,Pt,rt),Pt.programs=bt.programs,v.capabilities=rt,v.extensions=Tt,v.properties=It,v.renderLists=vt,v.shadowMap=Y,v.state=ot,v.info=Pt}ne();let Rt=new ba(v,D);this.xr=Rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=Tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(O,X,!1))},this.getSize=function(M){return M.set(O,X)},this.setSize=function(M,N,z=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,X=N,e.width=Math.floor(M*$),e.height=Math.floor(N*$),z===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(O*$,X*$).floor()},this.setDrawingBufferSize=function(M,N,z){O=M,X=N,$=z,e.width=Math.floor(M*z),e.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(et)},this.setViewport=function(M,N,z,G){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,N,z,G),ot.viewport(S.copy(et).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(it)},this.setScissor=function(M,N,z,G){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,N,z,G),ot.scissor(k.copy(it).multiplyScalar($).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(M){ot.setScissorTest(ft=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(M=!0,N=!0,z=!0){let G=0;if(M){let B=!1;if(R!==null){let gt=R.texture.format;B=gt===kl||gt===zl||gt===Bl}if(B){let gt=R.texture.type,At=gt===bn||gt===xn||gt===ka||gt===Bn||gt===Ol||gt===Fl,Lt=Xt.getClearColor(),Nt=Xt.getClearAlpha(),$t=Lt.r,Ht=Lt.g,Gt=Lt.b;At?(p[0]=$t,p[1]=Ht,p[2]=Gt,p[3]=Nt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=$t,g[1]=Ht,g[2]=Gt,g[3]=Nt,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),z&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Et.dispose(),It.dispose(),x.dispose(),U.dispose(),nt.dispose(),kt.dispose(),Jt.dispose(),bt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",mt),Rt.removeEventListener("sessionend",Ft),St&&(St.dispose(),St=null),ie.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=Pt.autoReset,N=Y.enabled,z=Y.autoUpdate,G=Y.needsUpdate,B=Y.type;ne(),Pt.autoReset=M,Y.enabled=N,Y.autoUpdate=z,Y.needsUpdate=G,Y.type=B}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ut(M){let N=M.target;N.removeEventListener("dispose",ut),w(N)}function w(M){H(M),It.remove(M)}function H(M){let N=It.get(M).programs;N!==void 0&&(N.forEach(function(z){bt.releaseProgram(z)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,G,B,gt){N===null&&(N=wt);let At=B.isMesh&&B.matrixWorld.determinant()<0,Lt=lc(M,N,z,G,B);ot.setMaterial(G,At);let Nt=z.index,$t=1;if(G.wireframe===!0){if(Nt=J.getWireframeAttribute(z),Nt===void 0)return;$t=2}let Ht=z.drawRange,Gt=z.attributes.position,he=Ht.start*$t,Oe=(Ht.start+Ht.count)*$t;gt!==null&&(he=Math.max(he,gt.start*$t),Oe=Math.min(Oe,(gt.start+gt.count)*$t)),Nt!==null?(he=Math.max(he,0),Oe=Math.min(Oe,Nt.count)):Gt!=null&&(he=Math.max(he,0),Oe=Math.min(Oe,Gt.count));let _e=Oe-he;if(_e<0||_e===1/0)return;kt.setup(B,G,Lt,z,Nt);let tn,re=Ut;if(Nt!==null&&(tn=Q.get(Nt),re=yt,re.setIndex(tn)),B.isMesh)G.wireframe===!0?(ot.setLineWidth(G.wireframeLinewidth*_t()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(B.isLine){let Yt=G.linewidth;Yt===void 0&&(Yt=1),ot.setLineWidth(Yt*_t()),B.isLineSegments?re.setMode(D.LINES):B.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else B.isPoints?re.setMode(D.POINTS):B.isSprite&&re.setMode(D.TRIANGLES);if(B.isBatchedMesh)re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)re.renderInstances(he,_e,B.count);else if(z.isInstancedBufferGeometry){let Yt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mr=Math.min(z.instanceCount,Yt);re.renderInstances(he,_e,mr)}else re.render(he,_e)};function j(M,N,z){M.transparent===!0&&M.side===Le&&M.forceSinglePass===!1?(M.side=Te,M.needsUpdate=!0,rs(M,N,z),M.side=Sn,M.needsUpdate=!0,rs(M,N,z),M.side=Le):rs(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),m=Et.get(z),m.init(),E.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==z&&M.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);let G=new Set;return M.traverse(function(B){let gt=B.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){let Lt=gt[At];j(Lt,z,B),G.add(Lt)}else j(gt,z,B),G.add(gt)}),E.pop(),m=null,G},this.compileAsync=function(M,N,z=null){let G=this.compile(M,N,z);return new Promise(B=>{function gt(){if(G.forEach(function(At){It.get(At).currentProgram.isReady()&&G.delete(At)}),G.size===0){B(M);return}setTimeout(gt,10)}Tt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let tt=null;function pt(M){tt&&tt(M)}function mt(){ie.stop()}function Ft(){ie.start()}let ie=new Yl;ie.setAnimationLoop(pt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(M){tt=M,Rt.setAnimationLoop(M),M===null?ie.stop():ie.start()},Rt.addEventListener("sessionstart",mt),Rt.addEventListener("sessionend",Ft),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(N),N=Rt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,R),m=Et.get(M,E.length),m.init(),E.push(m),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F.setFromProjectionMatrix(Mt),dt=this.localClippingEnabled,K=Ot.init(this.clippingPlanes,dt),_=vt.get(M,d.length),_.init(),d.push(_),fe(M,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,V),this.info.render.frame++,K===!0&&Ot.beginShadows();let z=m.state.shadowsArray;if(Y.render(z,M,N),K===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,M),m.setupLights(v._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let B=0,gt=G.length;B<gt;B++){let At=G[B];Ii(_,M,At,At.viewport)}}else Ii(_,M,N);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,N),kt.resetDefaultState(),W=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function fe(M,N,z,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||F.intersectsSprite(M)){G&&Dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);let At=nt.update(M),Lt=M.material;Lt.visible&&_.push(M,At,Lt,z,Dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||F.intersectsObject(M))){let At=nt.update(M),Lt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Dt.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Dt.copy(At.boundingSphere.center)),Dt.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){let Nt=At.groups;for(let $t=0,Ht=Nt.length;$t<Ht;$t++){let Gt=Nt[$t],he=Lt[Gt.materialIndex];he&&he.visible&&_.push(M,At,he,z,Dt.z,Gt)}}else Lt.visible&&_.push(M,At,Lt,z,Dt.z,null)}}let gt=M.children;for(let At=0,Lt=gt.length;At<Lt;At++)fe(gt[At],N,z,G)}function Ii(M,N,z,G){let B=M.opaque,gt=M.transmissive,At=M.transparent;m.setupLightsView(z),K===!0&&Ot.setGlobalState(v.clippingPlanes,z),gt.length>0&&oc(B,gt,N,z),G&&ot.viewport(S.copy(G)),B.length>0&&ss(B,N,z),gt.length>0&&ss(gt,N,z),At.length>0&&ss(At,N,z),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function oc(M,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let gt=rt.isWebGL2;St===null&&(St=new hn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Gi:bn,minFilter:Vi,samples:gt?4:0})),v.getDrawingBufferSize(Ct),gt?St.setSize(Ct.x,Ct.y):St.setSize(Vs(Ct.x),Vs(Ct.y));let At=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(st),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Lt=v.toneMapping;v.toneMapping=Mn,ss(M,z,G),b.updateMultisampleRenderTarget(St),b.updateRenderTargetMipmap(St);let Nt=!1;for(let $t=0,Ht=N.length;$t<Ht;$t++){let Gt=N[$t],he=Gt.object,Oe=Gt.geometry,_e=Gt.material,tn=Gt.group;if(_e.side===Le&&he.layers.test(G.layers)){let re=_e.side;_e.side=Te,_e.needsUpdate=!0,Za(he,z,G,Oe,_e,tn),_e.side=re,_e.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(St),b.updateRenderTargetMipmap(St)),v.setRenderTarget(At),v.setClearColor(st,L),v.toneMapping=Lt}function ss(M,N,z){let G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,gt=M.length;B<gt;B++){let At=M[B],Lt=At.object,Nt=At.geometry,$t=G===null?At.material:G,Ht=At.group;Lt.layers.test(z.layers)&&Za(Lt,N,z,Nt,$t,Ht)}}function Za(M,N,z,G,B,gt){M.onBeforeRender(v,N,z,G,B,gt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(v,N,z,G,M,gt),B.transparent===!0&&B.side===Le&&B.forceSinglePass===!1?(B.side=Te,B.needsUpdate=!0,v.renderBufferDirect(z,N,G,B,M,gt),B.side=Sn,B.needsUpdate=!0,v.renderBufferDirect(z,N,G,B,M,gt),B.side=Le):v.renderBufferDirect(z,N,G,B,M,gt),M.onAfterRender(v,N,z,G,B,gt)}function rs(M,N,z){N.isScene!==!0&&(N=wt);let G=It.get(M),B=m.state.lights,gt=m.state.shadowsArray,At=B.state.version,Lt=bt.getParameters(M,B.state,gt,N,z),Nt=bt.getProgramCacheKey(Lt),$t=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?U:x).get(M.envMap||G.environment),$t===void 0&&(M.addEventListener("dispose",ut),$t=new Map,G.programs=$t);let Ht=$t.get(Nt);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===At)return ja(M,Lt),Ht}else Lt.uniforms=bt.getUniforms(M),M.onBuild(z,Lt,v),M.onBeforeCompile(Lt,v),Ht=bt.acquireProgram(Lt,Nt),$t.set(Nt,Ht),G.uniforms=Lt.uniforms;let Gt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Gt.clippingPlanes=Ot.uniform),ja(M,Lt),G.needsLights=hc(M),G.lightsStateVersion=At,G.needsLights&&(Gt.ambientLightColor.value=B.state.ambient,Gt.lightProbe.value=B.state.probe,Gt.directionalLights.value=B.state.directional,Gt.directionalLightShadows.value=B.state.directionalShadow,Gt.spotLights.value=B.state.spot,Gt.spotLightShadows.value=B.state.spotShadow,Gt.rectAreaLights.value=B.state.rectArea,Gt.ltc_1.value=B.state.rectAreaLTC1,Gt.ltc_2.value=B.state.rectAreaLTC2,Gt.pointLights.value=B.state.point,Gt.pointLightShadows.value=B.state.pointShadow,Gt.hemisphereLights.value=B.state.hemi,Gt.directionalShadowMap.value=B.state.directionalShadowMap,Gt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Gt.spotShadowMap.value=B.state.spotShadowMap,Gt.spotLightMatrix.value=B.state.spotLightMatrix,Gt.spotLightMap.value=B.state.spotLightMap,Gt.pointShadowMap.value=B.state.pointShadowMap,Gt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function Ja(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=_i.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ja(M,N){let z=It.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function lc(M,N,z,G,B){N.isScene!==!0&&(N=wt),b.resetTextureUnits();let gt=N.fog,At=G.isMeshStandardMaterial?N.environment:null,Lt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cn,Nt=(G.isMeshStandardMaterial?U:x).get(G.envMap||At),$t=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Gt=!!z.morphAttributes.position,he=!!z.morphAttributes.normal,Oe=!!z.morphAttributes.color,_e=Mn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=v.toneMapping);let tn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=tn!==void 0?tn.length:0,Yt=It.get(G),mr=m.state.lights;if(K===!0&&(dt===!0||M!==y)){let He=M===y&&G.id===W;Ot.setState(G,M,He)}let le=!1;G.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==mr.state.version||Yt.outputColorSpace!==Lt||B.isBatchedMesh&&Yt.batching===!1||!B.isBatchedMesh&&Yt.batching===!0||B.isInstancedMesh&&Yt.instancing===!1||!B.isInstancedMesh&&Yt.instancing===!0||B.isSkinnedMesh&&Yt.skinning===!1||!B.isSkinnedMesh&&Yt.skinning===!0||B.isInstancedMesh&&Yt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Yt.instancingColor===!1&&B.instanceColor!==null||Yt.envMap!==Nt||G.fog===!0&&Yt.fog!==gt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ot.numPlanes||Yt.numIntersection!==Ot.numIntersection)||Yt.vertexAlphas!==$t||Yt.vertexTangents!==Ht||Yt.morphTargets!==Gt||Yt.morphNormals!==he||Yt.morphColors!==Oe||Yt.toneMapping!==_e||rt.isWebGL2===!0&&Yt.morphTargetsCount!==re)&&(le=!0):(le=!0,Yt.__version=G.version);let Cn=Yt.currentProgram;le===!0&&(Cn=rs(G,N,B));let Ka=!1,Ui=!1,gr=!1,Se=Cn.getUniforms(),Pn=Yt.uniforms;if(ot.useProgram(Cn.program)&&(Ka=!0,Ui=!0,gr=!0),G.id!==W&&(W=G.id,Ui=!0),Ka||y!==M){Se.setValue(D,"projectionMatrix",M.projectionMatrix),Se.setValue(D,"viewMatrix",M.matrixWorldInverse);let He=Se.map.cameraPosition;He!==void 0&&He.setValue(D,Dt.setFromMatrixPosition(M.matrixWorld)),rt.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ui=!0,gr=!0)}if(B.isSkinnedMesh){Se.setOptional(D,B,"bindMatrix"),Se.setOptional(D,B,"bindMatrixInverse");let He=B.skeleton;He&&(rt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Se.setValue(D,"boneTexture",He.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Se.setOptional(D,B,"batchingTexture"),Se.setValue(D,"batchingTexture",B._matricesTexture,b));let _r=z.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0&&rt.isWebGL2===!0)&&Bt.update(B,z,Cn),(Ui||Yt.receiveShadow!==B.receiveShadow)&&(Yt.receiveShadow=B.receiveShadow,Se.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pn.envMap.value=Nt,Pn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Ui&&(Se.setValue(D,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&cc(Pn,gr),gt&&G.fog===!0&&lt.refreshFogUniforms(Pn,gt),lt.refreshMaterialUniforms(Pn,G,$,X,St),_i.upload(D,Ja(Yt),Pn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_i.upload(D,Ja(Yt),Pn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(D,"center",B.center),Se.setValue(D,"modelViewMatrix",B.modelViewMatrix),Se.setValue(D,"normalMatrix",B.normalMatrix),Se.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let He=G.uniformsGroups;for(let xr=0,uc=He.length;xr<uc;xr++)if(rt.isWebGL2){let Qa=He[xr];Jt.update(Qa,Cn),Jt.bind(Qa,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function cc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function hc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,N,z){It.get(M.texture).__webglTexture=N,It.get(M.depthTexture).__webglTexture=z;let G=It.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){let z=It.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,z=0){R=M,I=N,A=z;let G=!0,B=null,gt=!1,At=!1;if(M){let Nt=It.get(M);Nt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):Nt.__webglFramebuffer===void 0?b.setupRenderTarget(M):Nt.__hasExternalTextures&&b.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);let $t=M.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(At=!0);let Ht=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?B=Ht[N][z]:B=Ht[N],gt=!0):rt.isWebGL2&&M.samples>0&&b.useMultisampledRTT(M)===!1?B=It.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[z]:B=Ht,S.copy(M.viewport),k.copy(M.scissor),q=M.scissorTest}else S.copy(et).multiplyScalar($).floor(),k.copy(it).multiplyScalar($).floor(),q=ft;if(ot.bindFramebuffer(D.FRAMEBUFFER,B)&&rt.drawBuffers&&G&&ot.drawBuffers(M,B),ot.viewport(S),ot.scissor(k),ot.setScissorTest(q),gt){let Nt=It.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,z)}else if(At){let Nt=It.get(M.texture),$t=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,z||0,$t)}W=-1},this.readRenderTargetPixels=function(M,N,z,G,B,gt,At){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){ot.bindFramebuffer(D.FRAMEBUFFER,Lt);try{let Nt=M.texture,$t=Nt.format,Ht=Nt.type;if($t!==je&&xt.convert($t)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Ht===Gi&&(Tt.has("EXT_color_buffer_half_float")||rt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Ht!==bn&&xt.convert(Ht)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===vn&&(rt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&z>=0&&z<=M.height-B&&D.readPixels(N,z,G,B,xt.convert($t),xt.convert(Ht),gt)}finally{let Nt=R!==null?It.get(R).__webglFramebuffer:null;ot.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(M,N,z=0){let G=Math.pow(2,-z),B=Math.floor(N.image.width*G),gt=Math.floor(N.image.height*G);b.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,M.x,M.y,B,gt),ot.unbindTexture()},this.copyTextureToTexture=function(M,N,z,G=0){let B=N.image.width,gt=N.image.height,At=xt.convert(z.format),Lt=xt.convert(z.type);b.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,M.x,M.y,B,gt,At,Lt,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,At,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,G,M.x,M.y,At,Lt,N.image),G===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(M,N,z,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=M.max.x-M.min.x+1,At=M.max.y-M.min.y+1,Lt=M.max.z-M.min.z+1,Nt=xt.convert(G.format),$t=xt.convert(G.type),Ht;if(G.isData3DTexture)b.setTexture3D(G,0),Ht=D.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)b.setTexture2DArray(G,0),Ht=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);let Gt=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Oe=D.getParameter(D.UNPACK_SKIP_PIXELS),_e=D.getParameter(D.UNPACK_SKIP_ROWS),tn=D.getParameter(D.UNPACK_SKIP_IMAGES),re=z.isCompressedTexture?z.mipmaps[B]:z.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?D.texSubImage3D(Ht,B,N.x,N.y,N.z,gt,At,Lt,Nt,$t,re.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ht,B,N.x,N.y,N.z,gt,At,Lt,Nt,re.data)):D.texSubImage3D(Ht,B,N.x,N.y,N.z,gt,At,Lt,Nt,$t,re),D.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,_e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tn),B===0&&G.generateMipmaps&&D.generateMipmap(Ht),ot.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),ot.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,ot.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ha?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===sr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ae?kn:Vl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===kn?ae:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Sa=class extends Gn{};Sa.prototype.isWebGL1Renderer=!0;var Ei=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var dn=class extends un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bl=new P,Sl=new P,El=new ue,Yr=new Mi,Rs=new Vn,wn=class extends be{constructor(t=new oe,e=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bl.fromBufferAttribute(e,s-1),Sl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bl.distanceTo(Sl);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,t.ray.intersectsSphere(Rs)===!1)return;El.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(El);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,u=new P,f=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=d,T=E-1;v<T;v+=p){let I=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,I),h.fromBufferAttribute(m,A),Yr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let W=t.ray.origin.distanceTo(f);W<t.near||W>t.far||e.push({distance:W,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=d,T=E-1;v<T;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Yr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Zi=class extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wl=new ue,Ea=new Mi,Cs=new Vn,Ps=new P,wi=class extends be{constructor(t=new oe,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;wl.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(wl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);Ps.fromBufferAttribute(u,m),Tl(Ps,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Ps.fromBufferAttribute(u,g),Tl(Ps,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tl(i,t,e,n,s,r,o){let a=Ea.distanceSqToPoint(i);if(a<e){let l=new P;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Qs=class extends ze{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Wt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new ue;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Wa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ls=new P,Zr=new Wa,Jr=new Wa,jr=new Wa,Ji=class extends wa{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ls.subVectors(s[0],s[1]).add(s[0]),c=Ls);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ls.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Jr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),jr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Jr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),jr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Zr.calc(l),Jr.calc(l),jr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var tr=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new Wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ta=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=n/2,d=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function E(){let T=new P,I=new P,A=0,R=(e-t)/n;for(let W=0;W<=r;W++){let y=[],S=W/r,k=S*(e-t)+t;for(let q=0;q<=s;q++){let st=q/s,L=st*l+a,O=Math.sin(L),X=Math.cos(L);I.x=k*O,I.y=-S*n+m,I.z=k*X,u.push(I.x,I.y,I.z),T.set(O,R,X).normalize(),f.push(T.x,T.y,T.z),p.push(st,1-S),y.push(g++)}_.push(y)}for(let W=0;W<s;W++)for(let y=0;y<r;y++){let S=_[y][W],k=_[y+1][W],q=_[y+1][W+1],st=_[y][W+1];h.push(S,k,st),h.push(k,q,st),A+=6}c.addGroup(d,A,0),d+=A}function v(T){let I=g,A=new Wt,R=new P,W=0,y=T===!0?t:e,S=T===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let k=g;for(let q=0;q<=s;q++){let L=q/s*l+a,O=Math.cos(L),X=Math.sin(L);R.x=y*X,R.y=m*S,R.z=y*O,u.push(R.x,R.y,R.z),f.push(0,S,0),A.x=O*.5+.5,A.y=X*.5*S+.5,p.push(A.x,A.y),g++}for(let q=0;q<s;q++){let st=I+q,L=k+q;T===!0?h.push(L,L+1,st):h.push(L+1,L,st),W+=3}c.addGroup(d,W,T===!0?1:2),d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Wn=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new P,g=new Wt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let E=d+m,v=E,T=E+n+1,I=E+n+2,A=E+1;a.push(v,T,A),a.push(T,I,A)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ie=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let E=[],v=d/n,T=0;d===0&&o===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+T,1-v),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let v=h[d][E+1],T=h[d][E],I=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&p.push(v,T,A),(d!==n-1||l<Math.PI)&&p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var er=class extends un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Is(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Aa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uo:r=t,a=2*e-n;break;case Do:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uo:o=t,l=2*n-e;break;case Do:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let I=0;I!==a;++I)r[I]=d*o[h+I]+E*o[c+I]+v*o[l+I]+T*o[u+I];return r}},Ra=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ca=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Aa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Fs:e=this.InterpolantFactoryMethodLinear;break;case wr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&xm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Fs;var Xn=class extends Ke{};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Os;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Ke{};Pa.prototype.ValueTypeName="color";var La=class extends Ke{};La.prototype.ValueTypeName="number";var Ia=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Xe.slerpFlat(r,0,o,c-a,o,c,l);return r}},ji=class extends Ke{InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Fs;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Ke{};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Os;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Ke{};Ua.prototype.ValueTypeName="vector";var Al={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Da=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},vm=new Da,Ki=class{constructor(t){this.manager=t!==void 0?t:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Na=class extends Ki{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Al.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Xi("img");function l(){h(),Al.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Tn=class extends Ki{constructor(t){super(t)}load(t,e,n,s){let r=new ze,o=new Na(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},nr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Kr=new ue,Rl=new P,Cl=new P,Oa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fa=class extends Oa{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Fa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ri=class extends nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xa="\\[\\]\\.:\\/",ym=new RegExp("["+Xa+"]","g"),qa="[^"+Xa+"]",Mm="[^"+Xa.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",qa),Sm=/(WCOD+)?/.source.replace("WCOD",Mm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qa),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qa),Tm=new RegExp("^"+bm+Sm+Em+wm+"$"),Am=["material","materials","bones","map"],Ba=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(t){let e=Tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Am.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Ba;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pm=new Float32Array(1);var Ci=class{constructor(t,e,n=0,s=1/0){this.ray=new Mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,n,e);return n.sort(Pl),n}};function Pl(i,t){return i.distance-t.distance}function za(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)za(s[r],t,e,!0)}}var Ll=new P,Us,Qr,Qi=class extends be{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Us===void 0&&(Us=new oe,Us.setAttribute("position",new te([0,0,0,0,1,0],3)),Qr=new Ta(0,.5,1,5,1),Qr.translate(0,-.5,0)),this.position.copy(e),this.line=new wn(Us,new dn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(Qr,new pe({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ll.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ll,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Rm={mercury:.03,venus:177.4,moon:6.7,mars:25.2,jupiter:3.1,uranus:97.8,neptune:28.3,sun:7.25};function ts(i,t=0){let e=innerHeight<=650?105:innerWidth<=700?130:85,n=innerHeight-e,s=Math.tan(19*Math.PI/180),r=Math.max(i==="saturn"?13:10,(i==="saturn"?5.4:3.6)/(s*(innerWidth/n))),o=new Xe().setFromEuler(new bi(i==="saturn"?.43:.15,0,i==="saturn"?-.23:-(Rm[i]||0)*Math.PI/180));return{cx:.5,cy:(e+n/2)/innerHeight,radiusPx:n/s/Math.sqrt(r*r-4),quaternion:o.toArray(),spin:t}}function tc(i,t){let e=new pe({map:i});return e.userData.visualRevision=22,e.customProgramCacheKey=()=>`visual22-${t}`,e.onBeforeCompile=n=>{n.vertexShader=`varying vec3 visualNormal;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
visualNormal=normalize(normalMatrix*normal);`),n.fragmentShader=`varying vec3 visualNormal;
`+n.fragmentShader;let s="";if(["neptune","uranus","venus"].includes(t)){let r=new zt(t==="neptune"?"#91b8bf":t==="uranus"?"#a1c4c7":"#dedac5");n.uniforms.visualTint={value:r},n.fragmentShader=`uniform vec3 visualTint;
`+n.fragmentShader,s="float detailL=dot(diffuseColor.rgb,vec3(0.2126,0.7152,0.0722));diffuseColor.rgb=visualTint*"+(t==="venus"?"(0.92+0.16*detailL);":"(0.70+0.85*sqrt(detailL));")}n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+s+`
float lightAmount=0.66+0.34*max(0.0,dot(normalize(visualNormal),normalize(vec3(-0.45,0.5,1.0))));diffuseColor.rgb*=lightAmount;`)},e}function ec(){return new Ae({uniforms:{uTime:{value:0},uColor:{value:new zt(16777215)}},vertexShader:`#include <clipping_planes_pars_vertex>
varying vec2 uvSun;void main(){uvSun=uv;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,fragmentShader:`#include <clipping_planes_pars_fragment>
varying vec2 uvSun;uniform float uTime;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){
#include <clipping_planes_fragment>
vec2 p=uvSun*vec2(900.0,450.0),cell=floor(p),f=fract(p);float nearD=10.0,nextD=10.0;for(int y=-1;y<=1;y++){for(int x=-1;x<=1;x++){vec2 o=vec2(float(x),float(y));vec2 center=o+0.18+0.64*vec2(hash(cell+o),hash(cell+o+vec2(47.0,19.0)));float dist=length(center-f);if(dist<nearD){nextD=nearD;nearD=dist;}else if(dist<nextD){nextD=dist;}}}float shade=mix(0.74,0.99,smoothstep(0.015,0.14,nextD-nearD));gl_FragColor=vec4(vec3(shade),1.0);
#include <colorspace_fragment>
}`,clipping:!0})}var ar="https://science.nasa.gov/solar-system/solar-system-facts/",nc="https://science.nasa.gov/universe/galaxies/",Cm="https://spaceplace.nasa.gov/galaxy/en/",ic={galaxy:{label:"\u94F6\u6CB3\u7684\u7EC4\u6210",title:"\u6052\u661F\u3001\u6C14\u4F53\u4E0E\u5C18\u57C3\uFF0C\u7531\u5F15\u529B\u8054\u7CFB\u5728\u4E00\u8D77",copy:["\u592A\u9633\u662F\u94F6\u6CB3\u91CC\u7684\u4E00\u9897\u6052\u661F\uFF0C\u6BCF\u4E2A\u884C\u661F\u7CFB\u7EDF\u90FD\u53EA\u662F\u94F6\u6CB3\u7684\u4E00\u5C0F\u90E8\u5206\u3002\u5F15\u529B\u4F7F\u94F6\u6CB3\u4E2D\u7684\u7269\u8D28\u76F8\u4E92\u8054\u7CFB\uFF0C\u6052\u661F\u4E5F\u5728\u5176\u4E2D\u8FD0\u52A8\u3002","\u6C14\u4F53\u548C\u5C18\u57C3\u80FD\u5728\u5F15\u529B\u4F5C\u7528\u4E0B\u805A\u96C6\uFF0C\u5F62\u6210\u65B0\u6052\u661F\u3002\u660E\u4EAE\u7684\u661F\u4E0E\u6697\u6DE1\u7684\u5C18\u57C3\u4E91\uFF0C\u5171\u540C\u6784\u6210\u6211\u4EEC\u770B\u5230\u7684\u94F6\u6CB3\u5916\u89C2\u3002"],source:Cm},arms:{label:"\u65CB\u81C2\u4E0E\u65B0\u6052\u661F",title:"\u65CB\u81C2\u4E2D\u7684\u6C14\u4F53\uFF0C\u5B55\u80B2\u7740\u5E74\u8F7B\u6052\u661F",copy:["\u94F6\u6CB3\u7684\u65CB\u81C2\u805A\u96C6\u7740\u6C14\u4F53\u3001\u5C18\u57C3\u548C\u8BB8\u591A\u5E74\u8F7B\u6052\u661F\u3002\u5927\u8D28\u91CF\u7684\u5E74\u8F7B\u6052\u661F\u5F88\u660E\u4EAE\uFF0C\u4F7F\u65CB\u81C2\u5728\u56FE\u50CF\u4E2D\u5BB9\u6613\u8FA8\u8BA4\u3002","\u628A\u89C6\u89D2\u8F6C\u5230\u4FA7\u9762\uFF0C\u65CB\u81C2\u7684\u5E73\u9762\u7ED3\u6784\u4F1A\u663E\u51FA\u76D8\u72B6\u8F6E\u5ED3\uFF1B\u518D\u4ECE\u4E0A\u65B9\u770B\uFF0C\u5C31\u80FD\u5206\u8FA8\u5B83\u4EEC\u5728\u76D8\u91CC\u7684\u5206\u5E03\u3002"],source:nc},disk:{label:"\u661F\u76D8\u4E0E\u94F6\u6CB3\u5E26",title:"\u6211\u4EEC\u8EAB\u5904\u661F\u76D8\u5185\u90E8\uFF0C\u5411\u5916\u770B\u89C1\u94F6\u6CB3\u5E26",copy:["\u94F6\u6CB3\u4E2D\u8BB8\u591A\u6052\u661F\u5206\u5E03\u5728\u76D8\u72B6\u7ED3\u6784\u91CC\u3002\u4ECE\u5185\u90E8\u6CBF\u7740\u661F\u76D8\u65B9\u5411\u671B\u53BB\uFF0C\u4F1A\u770B\u89C1\u8BB8\u591A\u6052\u661F\u53E0\u5728\u540C\u4E00\u7247\u5929\u7A7A\u4E2D\uFF0C\u7EC4\u6210\u94F6\u6CB3\u5E26\u3002","\u661F\u76D8\u5916\u8FD8\u6709\u66F4\u5F25\u6563\u7684\u6655\uFF0C\u4E2D\u592E\u6709\u8F83\u539A\u7684\u7ED3\u6784\u3002\u591C\u7A7A\u4E2D\u7684\u6697\u8272\u6591\u5757\uFF0C\u5E38\u4E0E\u906E\u6321\u540E\u65B9\u661F\u5149\u7684\u5C18\u57C3\u6709\u5173\u3002"],source:nc},system:{label:"\u592A\u9633\u7CFB\u7684\u7EC4\u6210",title:"\u4E00\u9897\u6052\u661F\uFF0C\u516B\u5927\u884C\u661F\uFF0C\u8FD8\u6709\u536B\u661F\u4E0E\u5C0F\u5929\u4F53",copy:["\u592A\u9633\u662F\u592A\u9633\u7CFB\u7684\u6052\u661F\uFF0C\u6838\u5FC3\u7684\u6838\u805A\u53D8\u6301\u7EED\u4F9B\u80FD\u3002\u516B\u5927\u884C\u661F\u6CBF\u5404\u81EA\u8F68\u9053\u7ED5\u592A\u9633\u8FD0\u884C\uFF0C\u6708\u7403\u5219\u7ED5\u5730\u7403\u8FD0\u884C\u3002","\u6C34\u661F\u3001\u91D1\u661F\u3001\u5730\u7403\u3001\u706B\u661F\u5177\u6709\u5CA9\u77F3\u5730\u8868\uFF1B\u6728\u661F\u3001\u571F\u661F\u662F\u6C14\u6001\u5DE8\u884C\u661F\uFF1B\u5929\u738B\u661F\u3001\u6D77\u738B\u661F\u662F\u51B0\u5DE8\u884C\u661F\u3002\u7EC4\u6210\u4E0E\u73AF\u5883\u7684\u5DEE\u5F02\uFF0C\u51B3\u5B9A\u4E86\u5404\u81EA\u503C\u5F97\u89C2\u5BDF\u7684\u73B0\u8C61\u3002"],source:ar},home:{label:"\u592A\u9633\u7CFB\u7684\u4F4D\u7F6E",title:"\u592A\u9633\u7CFB\u4F4D\u4E8E\u730E\u6237\u652F\u81C2\u9644\u8FD1",copy:["\u592A\u9633\u7CFB\u5C5E\u4E8E\u94F6\u6CB3\uFF0C\u4F4D\u4E8E\u730E\u6237\u652F\u81C2\u9644\u8FD1\u3002\u5730\u7403\u56F4\u7ED5\u592A\u9633\u8FD0\u884C\uFF0C\u592A\u9633\u4E5F\u5E26\u7740\u592A\u9633\u7CFB\u5728\u94F6\u6CB3\u4E2D\u8FD0\u52A8\u3002","\u4ECE\u5730\u7403\u770B\u94F6\u6CB3\uFF0C\u6211\u4EEC\u4F4D\u4E8E\u5B83\u7684\u5185\u90E8\u3002\u773C\u524D\u7684\u4FEF\u89C6\u6A21\u578B\u5219\u63D0\u4F9B\u5916\u90E8\u89C6\u89D2\uFF0C\u5E2E\u52A9\u8BA4\u8BC6\u592A\u9633\u7CFB\u3001\u661F\u76D8\u548C\u65CB\u81C2\u7684\u5173\u7CFB\u3002"],source:ar},orbit:{label:"\u516C\u8F6C\u5FEB\u6162",title:"\u8F68\u9053\u8D8A\u8FDC\uFF0C\u7ED5\u592A\u9633\u4E00\u5708\u901A\u5E38\u8D8A\u4E45",copy:["\u6C34\u661F\u7ED5\u592A\u9633\u4E00\u5708\u7EA688\u65E5\uFF0C\u5730\u7403\u7EA6365\u65E5\uFF0C\u6D77\u738B\u661F\u7EA6165\u4E2A\u5730\u7403\u5E74\u3002\u5916\u4FA7\u884C\u661F\u7684\u8F68\u9053\u66F4\u957F\uFF0C\u8F68\u9053\u8FD0\u52A8\u901F\u5EA6\u4E5F\u901A\u5E38\u66F4\u4F4E\u3002","\u5728\u540C\u4E00\u6BB5\u6A21\u62DF\u65F6\u95F4\u91CC\uFF0C\u89C2\u5BDF\u5185\u4FA7\u884C\u661F\u8F6C\u8FC7\u591A\u5C11\u89D2\u5EA6\uFF0C\u518D\u548C\u5916\u4FA7\u6BD4\u8F83\u3002\u901F\u5EA6\u548C\u8F68\u9053\u957F\u5EA6\u4E00\u8D77\u51B3\u5B9A\u516C\u8F6C\u7528\u65F6\u3002"],source:ar},light:{label:"\u7528\u5149\u6D4B\u8DDD\u79BB",title:"\u4E00\u5149\u5E74\uFF0C\u662F\u5149\u8D70\u4E00\u5E74\u7684\u8DDD\u79BB",copy:["\u5149\u5728\u771F\u7A7A\u4E2D\u6BCF\u79D2\u4F20\u64AD\u7EA630\u4E07\u5343\u7C73\u3002\u4E00\u5149\u5E74\u7EA6\u7B49\u4E8E9.46\u4E07\u4EBF\u5343\u7C73\uFF0C\u9002\u5408\u63CF\u8FF0\u6052\u661F\u4E4B\u95F4\u7684\u5DE8\u5927\u8DDD\u79BB\u3002","\u5149\u4ECE\u592A\u9633\u5230\u5730\u7403\u7EA6\u97008\u5206\u949F\u3002\u8DDD\u79BB\u66F4\u9065\u8FDC\u7684\u6052\u661F\uFF0C\u5B83\u4EEC\u53D1\u51FA\u7684\u5149\u9700\u8981\u66F4\u4E45\u624D\u80FD\u5230\u8FBE\u6211\u4EEC\uFF0C\u89C2\u6D4B\u4E5F\u8BA9\u6211\u4EEC\u770B\u89C1\u8FC7\u53BB\u7684\u4FE1\u606F\u3002"],source:"https://spaceplace.nasa.gov/light-year/en/"},gravity:{label:"\u5F15\u529B\u4E0E\u8F68\u9053",title:"\u5F15\u529B\u5411\u5185\u62C9\uFF0C\u8FD0\u52A8\u8BA9\u5929\u4F53\u6CBF\u8F68\u9053\u7ED5\u884C",copy:["\u592A\u9633\u7684\u5F15\u529B\u5438\u5F15\u884C\u661F\uFF0C\u884C\u661F\u540C\u65F6\u6CBF\u8F68\u9053\u8FD0\u52A8\u3002\u5F15\u529B\u6301\u7EED\u6539\u53D8\u8FD0\u52A8\u65B9\u5411\uFF0C\u4F7F\u5B83\u4EEC\u7ED5\u592A\u9633\u8FD0\u884C\u3002","\u6708\u7403\u4E5F\u6709\u540C\u6837\u7684\u5173\u7CFB\uFF1A\u5730\u7403\u5F15\u529B\u5F71\u54CD\u5B83\u7684\u8FD0\u52A8\uFF0C\u5B83\u6CBF\u8F68\u9053\u7ED5\u5730\u7403\u8FD0\u884C\u3002\u7406\u89E3\u8C01\u7ED5\u8C01\uFF0C\u80FD\u628A\u6052\u661F\u3001\u884C\u661F\u548C\u536B\u661F\u8054\u7CFB\u8D77\u6765\u3002"],source:ar}},or=class{constructor({onAngle:t,onPlanet:e,onSystem:n,onGalaxy:s}){Object.assign(this,{onAngle:t,onPlanet:e,onSystem:n,onGalaxy:s}),this.key="",this.selected="",this.userSelected=!1,this.root=document.createElement("aside"),this.root.id="scale-guide",this.root.innerHTML='<div class="sg-head"><h3 id="sg-title"></h3><button id="sg-close" aria-label="\u6536\u8D77\u9996\u9875\u77E5\u8BC6">\u6536\u8D77 \xD7</button></div><nav id="sg-topics" aria-label="\u5B87\u5B99\u77E5\u8BC6\u4E3B\u9898"></nav><div id="sg-text"></div><div class="sg-foot"><small id="sg-model">\u94F6\u6CB3\u7ED3\u6784\u4E0E\u8F68\u9053\u4E3A\u793A\u610F\uFF1B\u5929\u4F53\u5927\u5C0F\u548C\u95F4\u8DDD\u7ECF\u8C03\u6574\u3002</small><a id="sg-source" target="_blank" rel="noopener">\u79D1\u5B66\u8D44\u6599 \u2197</a></div>',document.body.append(this.root),new ResizeObserver(()=>document.body.style.setProperty("--guide-height",this.root.getBoundingClientRect().height+"px")).observe(this.root),this.$("sg-close").onclick=()=>document.body.classList.remove("show-guide")}$(t){return this.root.querySelector("#"+t)}show(t,{auto:e=!1}={}){e||(this.userSelected=!0),this.selected=t;let n=ic[t];this.$("sg-title").textContent=n.title,this.$("sg-text").replaceChildren(...n.copy.map(s=>{let r=document.createElement("p");return r.textContent=s,r})),this.$("sg-source").href=n.source,this.$("sg-topics").querySelectorAll("button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.topic===t)))}update({mode:t,radius:e,phi:n}){if(this.root.hidden=t!=="overview",this.root.hidden)return;let s=Math.abs(n-Math.PI/2)<.28,r=e>90?"galaxy":e>65?s?"disk":"arms":"system";if(this.key===r)return;this.key=r;let o=r==="system"?["system","orbit","gravity","home","light","galaxy"]:["galaxy","arms","disk","home","light","gravity"];this.userSelected&&!o.includes(this.selected)&&o.push(this.selected),this.$("sg-topics").replaceChildren(...o.map(l=>{let c=document.createElement("button");return c.textContent=ic[l].label,c.dataset.topic=l,c.onclick=()=>this.show(l),c}));let a=this.userSelected&&o.includes(this.selected);a||(this.userSelected=!1),this.show(a?this.selected:r,{auto:!0})}};var es={mercury:[2.1,87.969,1407.6,.5],venus:[3.5,224.701,-5832.5,2.6],earth:[5,365.256,23.9345,4.1],mars:[7,686.98,24.623,5.5],jupiter:[10,4332.59,9.925,1.1],saturn:[13,10759.22,10.656,3.7],uranus:[16,30685.4,-17.24,5],neptune:[19,60189.018,16.11,2.1]},lr=class{constructor({scene:t,sun:e,earth:n,earthPos:s,models:r,targets:o,narrow:a}){Object.assign(this,{sun:e,earth:n,earthPos:s,models:r,targets:o}),this.days=0,this.rate=10,this.paused=matchMedia("(prefers-reduced-motion: reduce)").matches,this.factor=a?.55:1,this.radius=l=>es[l][0]*this.factor+(a?1.35:.6),this.lines=new ce,t.add(this.lines);for(let[l,[c]]of Object.entries(es)){let h=Array.from({length:181},(u,f)=>{let p=f/180*Math.PI*2;return new P(Math.cos(p)*this.radius(l),0,Math.sin(p)*this.radius(l)).add(e.star.position)});this.lines.add(new wn(new oe().setFromPoints(h),new dn({color:l==="earth"?5537692:3163224,transparent:!0,opacity:l==="earth"?.6:.38})))}this.root=document.createElement("aside"),this.root.id="solar-clock",this.root.innerHTML='<div class="sc-heading"><strong>\u592A\u9633\u7CFB</strong><span>\u516C\u8F6C\u6A21\u62DF \xB7 \u8F68\u9053\u4E0E\u5927\u5C0F\u793A\u610F</span></div><div class="sc-controls"><select id="sc-speed" aria-label="\u6A21\u62DF\u65F6\u95F4\u901F\u5EA6"><option value="1">1 \u79D2 / 1 \u5929</option><option value="10" selected>1 \u79D2 / 10 \u5929</option><option value="100">1 \u79D2 / 100 \u5929</option></select><output id="sc-time"></output><div class="sc-buttons"><button id="sc-reset" aria-label="\u91CD\u7F6E\u6A21\u62DF\u65F6\u95F4">\u91CD\u7F6E</button><button id="sc-pause" aria-label="\u6682\u505C\u592A\u9633\u7CFB\u8FD0\u52A8">\u6682\u505C</button></div></div><div class="sc-views"><button id="sc-galaxy">\u62C9\u8FDC\u770B\u94F6\u6CB3</button><button id="sc-knowledge">\u8BA4\u8BC6\u592A\u9633\u7CFB</button></div>',document.body.append(this.root),this.$("sc-pause").onclick=()=>{this.paused=!this.paused,this.refresh()},this.$("sc-speed").onchange=()=>{this.rate=+this.$("sc-speed").value,this.refresh()},this.$("sc-reset").onclick=()=>{this.days=0,this.updatePositions(),this.refresh()},this.$("sc-knowledge").onclick=()=>document.body.classList.toggle("show-guide"),this.updatePositions(),this.refresh()}$(t){return this.root.querySelector("#"+t)}refresh(){this.$("sc-pause").textContent=this.paused?"\u7EE7\u7EED":"\u6682\u505C",this.$("sc-pause").setAttribute("aria-label",this.paused?"\u7EE7\u7EED\u592A\u9633\u7CFB\u8FD0\u52A8":"\u6682\u505C\u592A\u9633\u7CFB\u8FD0\u52A8"),this.$("sc-time").textContent="\u7B2C "+Math.floor(this.days)+" \u5929"}updatePositions(){for(let[e,[n,s,r,o]]of Object.entries(es)){let a=o+this.days/s*Math.PI*2,l=new P(Math.cos(a)*this.radius(e),0,Math.sin(a)*this.radius(e)).add(this.sun.star.position),c=e==="earth"?this.earth:this.models[e];c.position.copy(l),e==="earth"&&this.earthPos.copy(l),c.children[0].rotation.y=this.days*24/r*Math.PI*2%(Math.PI*2),this.targets[e].position.copy(l)}let t=this.models.moon;if(t){let e=this.days/27.322*Math.PI*2;t.position.copy(this.earth.position).add(new P(Math.cos(e)*.85,0,Math.sin(e)*.85)),t.children[0].rotation.y=e}}layoutLabels(){let t=innerWidth<750,e=[],n=[...document.querySelectorAll("#markers [data-target]")];for(let s of n){if(s.hidden)continue;let r=s.querySelector(".marker-text"),o=parseFloat(s.style.left),a=parseFloat(s.style.top),l=s.getAttribute("aria-label").replace("\u9760\u8FD1","").length*(t?11:14)+18,c=t?25:30,h;for(let[u,f]of[[18,-c/2],[-l-18,-c/2],[-l/2,23],[-l/2,-c-23]]){let p={x:o+u,y:a+f,w:l,h:c};if(!(p.x<8||p.x+l>(window.HOME_VIEW?.width||innerWidth)-8||p.y<56||p.y+c>Math.min(innerHeight-108,(window.HOME_VIEW?.top||0)+(window.HOME_VIEW?.height||innerHeight)-8))&&!e.some(g=>p.x<g.x+g.w+5&&p.x+l+5>g.x&&p.y<g.y+g.h+5&&p.y+c+5>g.y)){h={dx:u,dy:f,box:p};break}}r.style.visibility=h?"visible":"hidden",h&&(r.style.left=22+h.dx+"px",r.style.top=22+h.dy+"px",e.push(h.box))}}tick(t,e,n){let s=e==="overview";this.root.hidden=!s,this.lines.visible=s&&n<=65,this.$("sc-galaxy").textContent=n>65?"\u9760\u8FD1\u592A\u9633\u7CFB":"\u62C9\u8FDC\u770B\u94F6\u6CB3",this.root.querySelector(".sc-heading strong").textContent=n>65?"\u94F6\u6CB3 \xB7 \u592A\u9633\u7CFB":"\u592A\u9633\u7CFB",this.$("sc-knowledge").textContent=n>65?"\u8BA4\u8BC6\u94F6\u6CB3":"\u8BA4\u8BC6\u592A\u9633\u7CFB",document.body.classList.toggle("system-view",s&&n<=65),s?(this.sun.star.scale.setScalar(1.9),this.paused||(this.days+=t*this.rate,this.updatePositions()),this.refresh()):this.sun.star.scale.setScalar(1.9),window.SOLAR_STATE={days:this.days,rate:this.rate,paused:this.paused,running:s&&!this.paused,positions:Object.fromEntries(Object.keys(es).map(r=>[r,this.targets[r].position.toArray()])),angles:Object.fromEntries(Object.entries(es).map(([r,o])=>[r,this.days/o[1]*Math.PI*2])),model:"circular-orbits; schematic spacing; illustrative initial phases"}}};var $a=[{place:"\u592A\u9633\u8868\u9762",title:"\u592A\u9633\u7684\u4EAE\u9762\uFF0C\u5C31\u662F\u4F9B\u80FD\u7684\u5730\u65B9\u5417\uFF1F",text:"\u706F\u6CE1\u7684\u4EAE\u9762\u4E0D\u7B49\u4E8E\u7535\u6E90\u3002\u592A\u9633\u4E5F\u4E00\u6837\uFF1A\u6211\u4EEC\u770B\u89C1\u7684\u8868\u9762\u5728\u91CA\u653E\u5149\u548C\u70ED\uFF0C\u4E3B\u8981\u4F9B\u80FD\u7684\u5730\u65B9\u5374\u5728\u6DF1\u5904\u3002\u6253\u5F00\u5256\u9762\uFF0C\u627E\u627E\u80FD\u91CF\u5728\u54EA\u91CC\u4EA7\u751F\uFF0C\u518D\u6CBF\u5B83\u7684\u8DEF\u5411\u5916\u8D70\u3002",prompt:"\u62D6\u52A8\u5256\u9762\uFF0C\u5411\u592A\u9633\u91CC\u9762\u770B\u3002",next:"\u6CBF\u7740\u7EBF\u7D22\uFF0C\u8D70\u8FDB\u6838\u5FC3",audio:"surface"},{place:"\u4ECE\u8868\u9762\u5411\u5185\u90E8",title:"\u6709\u6C22\uFF0C\u5C31\u80FD\u50CF\u592A\u9633\u4E00\u6837\u53D1\u5149\u5417\uFF1F",text:"\u6838\u5FC3\u7EA6 1,500\u4E07\u2103\uFF0C\u8868\u9762\u7EA6 5,500\u2103\u3002\u592A\u9633\u5F62\u6210\u65F6\uFF0C\u5F15\u529B\u8BA9\u6C14\u4F53\u805A\u96C6\u3001\u6536\u7F29\uFF0C\u5185\u90E8\u53D8\u70ED\uFF1B\u6838\u5FC3\u7684\u6E29\u5EA6\u548C\u5BC6\u5EA6\u8BA9\u6838\u805A\u53D8\u80FD\u591F\u6301\u7EED\u3002\u5173\u952E\u4E0D\u53EA\u662F\u6709\u6C22\uFF0C\u8FD8\u5305\u62EC\u5B83\u6240\u5904\u7684\u6761\u4EF6\u3002",prompt:"\u7EE7\u7EED\u6253\u5F00\u5256\u9762\uFF0C\u627E\u5230\u6838\u5FC3\u3002",next:"\u8FDB\u5165\u6838\u5FC3\uFF0C\u770B\u80FD\u91CF\u600E\u6837\u4EA7\u751F",audio:"inside"},{place:"\u592A\u9633\u6838\u5FC3 \xB7 \u5FAE\u89C2\u793A\u610F",title:"\u4E0D\u662F\u706B\u7130\uFF0C\u662F\u539F\u5B50\u6838\u7684\u53D8\u5316\u3002",text:"\u666E\u901A\u71C3\u70E7\u4E3B\u8981\u6539\u53D8\u539F\u5B50\u4E4B\u95F4\u7684\u5316\u5B66\u5173\u7CFB\uFF1B\u6838\u805A\u53D8\u6539\u53D8\u539F\u5B50\u6838\u3002\u6C22\u6838\u7ECF\u8FC7\u591A\u4E2A\u6B65\u9AA4\u5F62\u6210\u6C26\u6838\uFF0C\u53CD\u5E94\u524D\u540E\u7684\u5C11\u91CF\u8D28\u91CF\u5DEE\u522B\u5BF9\u5E94\u91CA\u653E\u7684\u80FD\u91CF\u3002",prompt:"\u70B9\u51FB\u53D1\u5149\u7684\u539F\u5B50\u6838\uFF0C\u89C2\u5BDF\u4E00\u6B21\u53CD\u5E94\u3002",next:"\u8DDF\u7740\u80FD\u91CF\uFF0C\u5411\u5916\u8D70",audio:"fusion"},{place:"\u6838\u5FC3 \u2192 \u8F90\u5C04\u533A \u2192 \u5BF9\u6D41\u533A",title:"\u80FD\u91CF\u7684\u8DEF\uFF0C\u5E76\u4E0D\u7B14\u76F4\u3002",text:"\u5728\u8F90\u5C04\u533A\uFF0C\u80FD\u91CF\u968F\u5149\u5B50\u53CD\u590D\u88AB\u5438\u6536\u3001\u91CD\u65B0\u53D1\u5C04\u800C\u5411\u5916\u4F20\u9012\uFF1B\u66F4\u5916\u4FA7\u7684\u5BF9\u6D41\u533A\uFF0C\u70ED\u7684\u7269\u8D28\u4E0A\u5347\u3001\u8F83\u51B7\u7684\u7269\u8D28\u4E0B\u6C89\u3002",prompt:"\u63A8\u52A8\u80FD\u91CF\u8FDB\u5EA6\uFF0C\u89C2\u5BDF\u4E24\u79CD\u4F20\u9012\u65B9\u5F0F\u3002",next:"\u592A\u9633\u4E3A\u4EC0\u4E48\u6CA1\u6709\u88AB\u538B\u57AE\uFF1F",audio:"transport"},{place:"\u62C9\u8FDC\u89C2\u5BDF \xB7 \u6052\u661F\u7ED3\u6784",title:"\u5411\u5185\u62C9\uFF0C\u4E5F\u6709\u5411\u5916\u7684\u652F\u6301\u3002",text:"\u5F15\u529B\u5411\u5185\u62C9\uFF1B\u9AD8\u6E29\u6C14\u4F53\u4E2D\u7C92\u5B50\u7684\u8FD0\u52A8\u4E0E\u76F8\u4E92\u4F5C\u7528\u5F62\u6210\u538B\u529B\u3002\u5185\u90E8\u538B\u529B\u968F\u4F4D\u7F6E\u53D8\u5316\uFF0C\u63D0\u4F9B\u5411\u5916\u7684\u652F\u6301\u3002\u805A\u53D8\u901A\u8FC7\u4F9B\u80FD\u7EF4\u6301\u9AD8\u6E29\uFF0C\u95F4\u63A5\u5E2E\u52A9\u7EF4\u6301\u8FD9\u79CD\u652F\u6301\u3002",prompt:"\u53E0\u52A0\u538B\u529B\u652F\u6301\uFF0C\u770B\u770B\u4E24\u79CD\u4F5C\u7528\u3002",next:"\u628A\u65F6\u95F4\u62C9\u8FDC\uFF0C\u770B\u770B\u4EE5\u540E",audio:"balance"},{place:"\u592A\u9633\u7684\u4E00\u751F \xB7 \u65F6\u95F4\u5927\u5E45\u538B\u7F29",title:"\u7A33\u5B9A\uFF0C\u4E0D\u4EE3\u8868\u6C38\u8FDC\u4E0D\u53D8\u3002",text:"\u6838\u5FC3\u53EF\u7528\u7684\u6C22\u9010\u6E10\u8017\u5C3D\uFF0C\u5E76\u4E0D\u8868\u793A\u6574\u4E2A\u592A\u9633\u6CA1\u6709\u6C22\u3002\u6838\u5FC3\u6536\u7F29\u3001\u5468\u56F4\u533A\u57DF\u7684\u53CD\u5E94\u4E0E\u5916\u5C42\u81A8\u80C0\u540C\u65F6\u53D1\u751F\uFF1B\u540E\u7EED\u624D\u4F1A\u6563\u53BB\u5916\u5C42\u3001\u7559\u4E0B\u767D\u77EE\u661F\u3002",prompt:"\u7F13\u6162\u62D6\u52A8\u65F6\u95F4\uFF0C\u89C2\u5BDF\u53D8\u5316\u53CA\u5176\u539F\u56E0\u3002",next:"\u7528\u521A\u624D\u7684\u53D1\u73B0\uFF0C\u89E3\u91CA\u4E00\u4E2A\u95EE\u9898",audio:"future"},{place:"\u628A\u53D1\u73B0\u8FDE\u8D77\u6765",title:"\u5982\u679C\u53EA\u8BB0\u4F4F\u201C\u592A\u9633\u5728\u53D1\u5149\u201D\uFF0C\u8FD8\u4E0D\u591F\u3002",text:"\u5149\u4ECE\u54EA\u91CC\u6765\u3001\u80FD\u91CF\u600E\u6837\u51FA\u53BB\u3001\u592A\u9633\u4E3A\u4F55\u7A33\u5B9A\uFF1A\u628A\u8FD9\u4E09\u4E2A\u95EE\u9898\u8FDE\u8D77\u6765\u3002\u4F60\u53EF\u4EE5\u968F\u65F6\u56DE\u770B\u4E0A\u65B9\u4EFB\u4F55\u95EE\u9898\uFF0C\u4E0D\u5FC5\u6309\u987A\u5E8F\u5B8C\u6210\u3002",prompt:"\u9009\u51FA\u80FD\u89E3\u91CA\u73B0\u8C61\u7684\u539F\u56E0\u3002",next:"\u5E26\u7740\u53D1\u73B0\uFF0C\u56DE\u5230\u661F\u6D77",audio:"recap"}],cr=class{constructor({scene:t,sun:e,position:n,camera:s}){this.sun=e,this.position=n,this.camera=s,this.active=!1,this.index=0,this.cut=0,this.progress=0,this.future=0,this.support=!1,this.phase=-1,this.audio=null,this.autoVoice=!1,this.visited=new Set,this.look=n.clone(),this.desiredLook=n.clone(),this.$=o=>document.getElementById(o);let r=document.createElement("section");r.id="solar-journey",r.hidden=!0,r.dataset.expanded="false",r.innerHTML='<aside id="sun-entry"><div class="planet-card-heading"><h3>\u592A\u9633</h3><button id="sun-explain">\u4E86\u89E3\u66F4\u591A</button></div><p>\u62D6\u52A8\u548C\u7F29\u653E\u89C2\u5BDF\u5916\u89C2\uFF0C\u518D\u6253\u5F00\u5256\u9762\uFF0C\u770B\u770B\u5185\u90E8\u600E\u6837\u63D0\u4F9B\u80FD\u91CF\u3002</p><button id="sun-cut">\u6253\u5F00\u5185\u90E8\u7ED3\u6784 \u2192</button><small>\u5916\u89C2\u4E0E\u5185\u90E8\u8FC7\u7A0B\u4E3A\u6559\u5B66\u793A\u610F</small></aside><div class="journey-top"><button id="journey-return">\u2190 \u8FD4\u56DE\u661F\u6D77</button><span id="journey-location"></span><button id="sun-fold">\u56DE\u5230\u5168\u8C8C</button><button id="journey-audio">\u25B7 \u542C\u8BB2\u89E3</button></div><div class="journey-intro"><div class="eyebrow" id="journey-place"></div><h2 id="journey-title"></h2><p id="journey-text"></p><button id="journey-more">\u6DF1\u5165\u4E86\u89E3 \uFF0B</button><div id="journey-deeper" hidden></div></div><button id="nucleus" class="nucleus" hidden><span>\u89C2\u5BDF\u6838\u805A\u53D8</span><b>\uFF0B</b></button><nav id="journey-dots" aria-label="\u81EA\u7531\u9009\u62E9\u592A\u9633\u95EE\u9898"></nav><div class="journey-caption" id="journey-caption"></div><div class="journey-bottom"><div id="journey-prompt"></div><div id="journey-controls"></div><div class="journey-nav"><button id="journey-back">\u2190 \u56DE\u770B</button><button id="journey-next"></button></div><div class="journey-boundary">\u63A2\u7D22\u6A21\u578B \xB7 \u5C3A\u5EA6\u4E0E\u65F6\u95F4\u7ECF\u8FC7\u8C03\u6574\uFF0C\u53CD\u5E94\u4E3A\u591A\u6B65\u603B\u7ED3\u679C\u793A\u610F \xB7 <a href="https://science.nasa.gov/sun/facts/" target="_blank" rel="noopener">NASA \u79D1\u5B66\u4F9D\u636E</a></div></div>',document.body.append(r),this.panel=r,this.$("sun-explain").onclick=()=>this.expand(!0),this.$("sun-cut").onclick=()=>{this.expand(!0),this.select(1)},this.$("sun-fold").onclick=()=>this.expand(!1),this.$("journey-return").onclick=()=>this.$("return").click(),this.$("journey-back").onclick=()=>this.select(this.index-1),this.$("journey-next").onclick=()=>this.index===6?this.$("return").click():this.select(this.index+1),this.$("journey-audio").onclick=()=>this.playAudio(),this.$("nucleus").onclick=()=>this.index===1?this.select(2):this.react(),this.$("journey-more").onclick=()=>{let o=this.$("journey-deeper");o.hidden=!o.hidden,this.$("journey-more").textContent=o.hidden?"\u6DF1\u5165\u4E86\u89E3 \uFF0B":"\u6536\u8D77\u89E3\u91CA \u2212"},this.model=new ce,this.model.position.copy(n),t.add(this.model),this.interior=new ce,this.model.add(this.interior),[.55,.42,.29,.15].forEach((o,a)=>{let l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d"),h=c.createRadialGradient(64,64,0,64,64,70);h.addColorStop(0,["#c17844","#f6b15d","#ffd486","#fff0bc"][a]),h.addColorStop(1,["#653223","#b36d35","#e7a850","#f5ce86"][a]),c.fillStyle=h,c.fillRect(0,0,128,128);let u=new Qt(new tr(o,70,-Math.PI/2,Math.PI),new pe({map:new Qs(l),side:Le}));u.position.z=.008+a*.008,this.interior.add(u)}),this.clip=new Ze(new P(-1,0,0),n.x),this.fusion=new ce,this.model.add(this.fusion),this.h=[];for(let o=0;o<4;o++){let a=new Qt(new Ie(.044,24,20),new pe({color:11523839}));this.h.push(a),this.fusion.add(a)}this.he=new ce;for(let o=0;o<4;o++){let a=new Qt(new Ie(.042,24,20),new pe({color:o%2?11852031:16304770}));a.position.set((o%2-.5)*.06,(Math.floor(o/2)-.5)*.06,0),this.he.add(a)}this.fusion.add(this.he),this.wave=new Qt(new Wn(.97,1,80),new pe({color:16767904,transparent:!0,side:Le})),this.fusion.add(this.wave),this.inward=new ce,this.outward=new ce;for(let o=0;o<8;o++){let a=o*Math.PI/4,l=new P(Math.cos(a),Math.sin(a),0);this.inward.add(new Qi(l.clone().negate(),l.clone().multiplyScalar(.85),.23,15775346,.06,.035)),this.outward.add(new Qi(l,l.clone().multiplyScalar(.33),.2,9752319,.06,.035))}this.model.add(this.inward,this.outward),this.light=new ce,this.model.add(this.light),this.paths=[],this.photons=[];for(let o=0;o<12;o++){let a=[];for(let u=0;u<25;u++){let f=u*.95+o*.51,p=.16+u*.014;a.push(new P(Math.cos(f)*p,Math.sin(f)*p,.06))}let l=new Ji(a);this.paths.push(l);let c=new wn(new oe().setFromPoints(l.getPoints(100)),new dn({color:16107917,transparent:!0,opacity:.2}));this.light.add(c);let h=new Qt(new Ie(.008,12,8),new pe({color:16770999}));this.photons.push(h),this.light.add(h)}this.convection=new ce,this.convectionPaths=[],this.convectionDots=[];for(let o=0;o<10;o++){let a=o*Math.PI/5,l=[];for(let f=0;f<=50;f++){let p=f/50*Math.PI*2,g=.44+Math.cos(p)*.06;l.push(new P(Math.cos(a+Math.sin(p)*.12)*g,Math.sin(a+Math.sin(p)*.12)*g,.035))}let c=new wn(new oe().setFromPoints(l),new dn({color:9356781,transparent:!0,opacity:.7}));this.convection.add(c);let h=new Ji(l);this.convectionPaths.push(h);let u=new Qt(new Ie(.012,12,8),new pe({color:16103800}));this.convectionDots.push(u),this.convection.add(u)}this.model.add(this.convection),this.shell=new ce;for(let o=0;o<5;o++){let a=new Qt(new Wn(.7+o*.1,.72+o*.1,96),new pe({color:8238299,transparent:!0,opacity:.26-o*.035,side:Le}));a.rotation.y=o*.32,this.shell.add(a)}this.model.add(this.shell),this.model.visible=!1}open(t){this.active=t==="sun",this.panel.hidden=!this.active,this.active?(document.body.classList.add("solar-active"),this.$("detail").hidden=!0,this.$("object-caption").hidden=!0,this.look.copy(this.position),this.select(0),this.expand(!1)):document.body.classList.remove("solar-active")}expand(t){this.panel.dataset.expanded=String(t),t||(this.stopAudio(),this.index!==0&&this.select(0)),this.$("journey-location").textContent=t?"\u592A\u9633 \xB7 \u5185\u90E8\u89C2\u5BDF":"\u592A\u9633 \xB7 \u6052\u661F"}stopAudio(){this.audio&&this.audio.pause(),this.audio=null,this.$("journey-audio").textContent="\u25B7 \u542C\u8BB2\u89E3"}async narrate(t){this.stopAudio(),this.audio=new Audio("audio-depth/"+t+".mp3");let e=this.audio;this.audio.onended=()=>{this.audio===e&&(this.audio=null,this.$("journey-audio").textContent="\u21BB \u91CD\u542C\u8BB2\u89E3")};try{await e.play(),this.audio===e&&(this.$("journey-audio").textContent="\u2161 \u6682\u505C\u8BB2\u89E3")}catch{this.audio===e&&this.stopAudio()}}playAudio(){this.audio&&!this.audio.paused?(this.audio.pause(),this.$("journey-audio").textContent="\u25B7 \u7EE7\u7EED\u8BB2\u89E3"):this.audio?(this.audio.play().catch(()=>this.stopAudio()),this.$("journey-audio").textContent="\u2161 \u6682\u505C\u8BB2\u89E3"):this.narrate($a[this.index].audio)}close(){this.active=!1,this.stopAudio(),this.panel.hidden=!0,document.body.classList.remove("solar-active"),this.model.visible=!1,this.sun.star.visible=!0,this.sun.star.scale.setScalar(1),this.sun.mat.clippingPlanes=[],this.sun.mat.uniforms.uColor.value.set("#ffaf54"),this.sun.halo.visible=!0}getLookTarget(){return this.look.clone()}drag(t,e){this.yaw=(this.yaw||0)-t*.006,this.pitch=Ue.clamp((this.pitch||0)+e*.006,-1.2,1.2)}zoom(t){this.zoomScale=Ue.clamp((this.zoomScale||1)*t,.22,6)}select(t){this.index=t,this.yaw=0,this.pitch=0,this.visited.add(t),this.cut=t===0?0:1,this.progress=0,this.future=0,this.support=!1,this.phase=-1,this.reacting=!1,this.zoomScale=1,this.$("journey-deeper").hidden=!0,this.$("journey-more").textContent="\u6DF1\u5165\u4E86\u89E3 \uFF0B";let e=$a[t];this.$("journey-title").textContent=e.title,this.$("journey-text").textContent=e.text,this.$("journey-place").textContent=e.place,this.$("journey-location").textContent="\u592A\u9633 \xB7 \u9009\u62E9\u4F60\u60F3\u8FFD\u95EE\u7684\u95EE\u9898",this.$("journey-prompt").textContent=e.prompt,this.$("journey-next").textContent=e.next+" \u2192",this.$("journey-next").disabled=!1,this.$("journey-back").disabled=t===0,this.$("nucleus").hidden=t!==1&&t!==2,this.$("nucleus").querySelector("span").textContent=t===1?"\u6838\u5FC3 \xB7 \u8FDB\u5165\u5FAE\u89C2":"\u89C2\u5BDF\u6838\u805A\u53D8",this.$("journey-caption").textContent="",this.$("journey-deeper").textContent=["\u592A\u9633\u662F\u70BD\u70ED\u7684\u7B49\u79BB\u5B50\u4F53\uFF0C\u4E0D\u662F\u4E00\u5806\u71C3\u70E7\u7684\u6728\u5934\u3002\u5B83\u8DDD\u79BB\u5730\u7403\u7EA6 1.5 \u4EBF\u5343\u7C73\uFF1B\u5730\u7403\u63A5\u6536\u5230\u7684\u9633\u5149\uFF0C\u4E3A\u6C14\u5019\u548C\u751F\u547D\u63D0\u4F9B\u80FD\u91CF\u3002","\u4ECE\u5185\u5411\u5916\uFF0C\u53EF\u4EE5\u533A\u5206\u6838\u5FC3\u3001\u8F90\u5C04\u533A\u3001\u5BF9\u6D41\u533A\u53CA\u6211\u4EEC\u770B\u89C1\u7684\u5149\u7403\u3002\u8FD9\u91CC\u7528\u5256\u9762\u5E2E\u52A9\u8BC6\u522B\u7ED3\u6784\uFF0C\u989C\u8272\u4E0E\u5C42\u539A\u5E76\u4E0D\u4EE3\u8868\u89C2\u6D4B\u6570\u636E\u3002","\u6838\u805A\u53D8\u6539\u53D8\u7684\u662F\u539F\u5B50\u6838\uFF1B\u666E\u901A\u71C3\u70E7\u4E3B\u8981\u6D89\u53CA\u7535\u5B50\u4E0E\u5316\u5B66\u952E\u7684\u53D8\u5316\u3002\u56FE\u4E2D\u538B\u7F29\u4E86\u591A\u6B65\u53CD\u5E94\uFF0C\u7701\u7565\u4E86\u4E2D\u95F4\u4EA7\u7269\uFF0C\u4E0D\u80FD\u7406\u89E3\u6210\u56DB\u4E2A\u6C22\u6838\u76F4\u63A5\u4E00\u6B21\u78B0\u649E\u5F62\u6210\u6C26\u3002","\u80FD\u91CF\u4F20\u9012\u7684\u8DEF\u5F84\u548C\u5B9E\u9645\u65F6\u95F4\u5F88\u590D\u6742\u3002\u8F90\u5C04\u533A\u91CC\u7684\u8DEF\u7EBF\u5C55\u793A\u5438\u6536\u3001\u91CD\u65B0\u53D1\u5C04\u7684\u53CD\u590D\u8FC7\u7A0B\uFF1B\u5BF9\u6D41\u533A\u9760\u7269\u8D28\u8FD0\u52A8\u4F20\u70ED\u3002\u8FD9\u91CC\u7684\u5149\u70B9\u4E0D\u4EE3\u8868\u540C\u4E00\u9897\u5149\u5B50\u4E00\u8DEF\u76F4\u8FBE\u8868\u9762\u3002","\u66F4\u7CBE\u786E\u5730\u8BF4\uFF0C\u662F\u5185\u90E8\u7684\u538B\u529B\u968F\u4F4D\u7F6E\u53D8\u5316\uFF0C\u63D0\u4F9B\u5BF9\u6297\u5F15\u529B\u7684\u652F\u6301\u3002\u7BAD\u5934\u53EA\u6807\u793A\u65B9\u5411\uFF1B\u7A33\u5B9A\u5E76\u4E0D\u8868\u793A\u5185\u90E8\u7269\u8D28\u5B8C\u5168\u9759\u6B62\u3002","\u592A\u9633\u7684\u6F14\u5316\u8FC7\u7A0B\u8FDC\u6BD4\u4E09\u4E2A\u753B\u9762\u590D\u6742\u3002\u6210\u4E3A\u7EA2\u5DE8\u661F\u540E\uFF0C\u8FD8\u4F1A\u7ECF\u5386\u540E\u7EED\u5185\u90E8\u53CD\u5E94\u4E0E\u7ED3\u6784\u53D8\u5316\uFF0C\u6700\u7EC8\u5931\u53BB\u5916\u5C42\u3002\u767D\u77EE\u661F\u4FDD\u7559\u4F59\u70ED\uFF0C\u9010\u6E10\u51B7\u5374\uFF0C\u4E0D\u518D\u9760\u6838\u5FC3\u805A\u53D8\u4F9B\u80FD\u3002","\u53EF\u4EE5\u56DE\u770B\u524D\u9762\u7684\u53D1\u73B0\u3002\u8BB0\u4F4F\u73B0\u8C61\u3001\u89E3\u91CA\u539F\u56E0\uFF0C\u5E76\u77E5\u9053\u54EA\u4E9B\u753B\u9762\u7ECF\u8FC7\u7B80\u5316\uFF0C\u6BD4\u53EA\u80CC\u672F\u8BED\u66F4\u91CD\u8981\u3002"][t],this.$("journey-dots").replaceChildren(...$a.map((s,r)=>{let o=document.createElement("button");return o.className=r===t?"current":"",o.textContent=["\u8868\u9762\u4E0E\u5185\u90E8","\u8D70\u8FD1\u6838\u5FC3","\u6838\u805A\u53D8","\u80FD\u91CF\u4F20\u9012","\u7EF4\u6301\u5E73\u8861","\u592A\u9633\u7684\u4E00\u751F","\u89E3\u91CA\u4E0E\u56DE\u987E"][r],o.setAttribute("aria-label","\u63A2\u7D22\uFF1A"+o.textContent),o.disabled=!1,o.onclick=()=>this.select(r),o})),this.$("journey-controls").replaceChildren(),t===1&&(this.$("journey-next").disabled=!1,this.$("journey-caption").textContent="\u6838\u5FC3\u7EA6 1,500\u4E07\u2103 \xB7 \u4F9B\u80FD\u7684\u6E90\u5934",this.$("journey-prompt").textContent="\u70B9\u51FB\u4EAE\u8272\u6838\u5FC3\uFF0C\u7EE7\u7EED\u6DF1\u5165\u5230\u539F\u5B50\u6838\u7684\u5C3A\u5EA6\u3002"),t===0&&this.slider("\u6253\u5F00\u5256\u9762","journey-slice",0,100,t===0?0:20,s=>{this.cut=s/100,this.$("journey-caption").textContent=s<55?"\u8868\u9762\u6B63\u5728\u8BA9\u5F00\uFF0C\u5185\u90E8\u7ED3\u6784\u9010\u6E10\u663E\u73B0":"\u6838\u5FC3 \xB7 \u4E2D\u5FC3\u8F83\u4EAE\u533A\u57DF\u662F\u6838\u805A\u53D8\u4F9B\u80FD\u7684\u5730\u65B9",s>=70&&(this.$("journey-prompt").textContent=t===0?"\u8868\u9762\u4E0B\u9762\u8FD8\u6709\u7ED3\u6784\u3002\u73B0\u5728\u6CBF\u7740\u8FD9\u6761\u7EBF\u7D22\u5F80\u91CC\u8D70\u3002":"\u4F60\u627E\u5230\u4E86\u6838\u5FC3\u3002\u63A5\u4E0B\u6765\u628A\u955C\u5934\u7F29\u5C0F\u5230\u539F\u5B50\u6838\u7684\u5C3A\u5EA6\u3002")}),t===2&&(this.action("\u89C2\u5BDF\u4E00\u6B21\u53CD\u5E94",()=>this.react()),this.$("journey-caption").textContent="\u84DD\u8272\u5C0F\u7403\uFF1A\u6C22\u539F\u5B50\u6838 \xB7 \u70B9\u51FB\u5F00\u59CB\u53CD\u5E94\u793A\u610F"),t===3&&this.slider("\u8DDF\u968F\u80FD\u91CF\u5411\u5916\u8D70","journey-energy",0,100,0,s=>{this.progress=s/100,this.$("journey-caption").textContent=s<60?"\u8F90\u5C04\u533A \xB7 \u80FD\u91CF\u53CD\u590D\u5438\u6536\u3001\u91CD\u65B0\u53D1\u5C04":"\u5BF9\u6D41\u533A \xB7 \u70ED\u7684\u7269\u8D28\u4E0A\u5347\uFF0C\u8F83\u51B7\u7684\u7269\u8D28\u4E0B\u6C89",s>=95&&(this.$("journey-prompt").textContent="\u80FD\u91CF\u5230\u8FBE\u5916\u5C42\uFF0C\u6700\u7EC8\u4ECE\u8868\u9762\u91CA\u653E\u3002\u4E3A\u4EC0\u4E48\u6574\u4E2A\u592A\u9633\u8FD8\u80FD\u4FDD\u6301\u7A33\u5B9A\uFF1F")}),t===4&&this.action("\u53E0\u52A0\u538B\u529B\u652F\u6301",()=>{this.support=!this.support,this.$("journey-action").textContent=this.support?"\u6682\u65F6\u53EA\u770B\u5F15\u529B":"\u53E0\u52A0\u538B\u529B\u652F\u6301",this.$("journey-caption").textContent=this.support?"\u91D1\u8272\u5411\u5185\uFF1A\u5F15\u529B \xB7 \u84DD\u8272\u5411\u5916\uFF1A\u538B\u529B\u652F\u6301":"\u91D1\u8272\u7BAD\u5934\uFF1A\u5F15\u529B\u4E00\u76F4\u5411\u4E2D\u5FC3\u62C9",this.support&&(this.$("journey-prompt").textContent="\u805A\u53D8\u4F9B\u80FD\u3001\u5185\u90E8\u9AD8\u6E29\u3001\u538B\u529B\u652F\u6301\uFF0C\u5F62\u6210\u4E00\u6761\u56E0\u679C\u5173\u7CFB\u3002")}),t===5&&this.slider("\u628A\u65F6\u95F4\u5411\u672A\u6765\u63A8\u8FDB","journey-time",0,100,0,s=>{this.future=s/100;let r=s<25?["\u73B0\u5728 \xB7 \u7A33\u5B9A\u53D1\u5149","\u592A\u9633\u73B0\u5728\u5904\u5728\u4E3B\u5E8F\u9636\u6BB5\uFF0C\u6838\u5FC3\u7684\u6C22\u805A\u53D8\u4F9B\u80FD\u3002"]:s<60?["\u7EA2\u5DE8\u661F \xB7 \u5916\u5C42\u81A8\u80C0","\u6838\u5FC3\u53EF\u7528\u7684\u6C22\u9010\u6E10\u8017\u5C3D\uFF0C\u5185\u90E8\u7ED3\u6784\u6539\u53D8\uFF0C\u592A\u9633\u7684\u5916\u5C42\u81A8\u80C0\u3002"]:s<85?["\u540E\u7EED\u6F14\u5316 \xB7 \u5916\u5C42\u6563\u53BB","\u7ECF\u8FC7\u540E\u7EED\u6F14\u5316\uFF0C\u592A\u9633\u5931\u53BB\u5916\u5C42\u7269\u8D28\uFF0C\u6C14\u4F53\u5305\u56F4\u6B8B\u7559\u6838\u5FC3\u3002"]:["\u767D\u77EE\u661F \xB7 \u4F59\u70ED\u9010\u6E10\u91CA\u653E","\u6B8B\u7559\u6838\u5FC3\u4E0D\u518D\u9760\u6838\u5FC3\u805A\u53D8\u4F9B\u80FD\uFF0C\u9010\u6E10\u51B7\u5374\u3002\u592A\u9633\u4E0D\u4F1A\u6210\u4E3A\u9ED1\u6D1E\u3002"];this.$("journey-caption").textContent=r[0],this.$("journey-prompt").textContent=r[1],this.$("journey-next").disabled=!1}),t===6&&this.quiz(0),this.autoVoice&&this.narrate(e.audio),window.SOLAR_JOURNEY={index:t}}slider(t,e,n,s,r,o){let a=this.$("journey-controls"),l=document.createElement("label"),c=document.createElement("input");l.htmlFor=e,l.textContent=t,c.type="range",c.id=e,c.min=n,c.max=s,c.value=r,c.oninput=()=>o(+c.value),a.append(l,c),c.oninput()}action(t,e){let n=document.createElement("button");n.id="journey-action",n.className="journey-action",n.textContent=t,n.onclick=e,this.$("journey-controls").append(n)}react(){this.reacting||(this.phase=0,this.reacting=!0,this.reactionStart=performance.now(),this.$("journey-prompt").textContent="\u89C2\u5BDF\u539F\u5B50\u6838\u7684\u53D8\u5316\uFF0C\u4EE5\u53CA\u5411\u5916\u91CA\u653E\u7684\u80FD\u91CF\u3002",this.$("nucleus").hidden=!0,this.$("journey-action").disabled=!0,this.narrate("fusion-discovery"))}quiz(t){let e=[["\u8FD9\u675F\u5149\u7684\u80FD\u91CF\uFF0C\u4E3B\u8981\u4ECE\u54EA\u91CC\u6765\uFF1F",["\u6838\u5FC3\u7684\u6838\u805A\u53D8","\u592A\u9633\u8868\u9762\u71C3\u70E7\u6C27\u6C14"],0,"\u8868\u9762\u91CA\u653E\u80FD\u91CF\uFF0C\u6838\u5FC3\u6838\u805A\u53D8\u662F\u4E3B\u8981\u4F9B\u80FD\u6765\u6E90\u3002"],["\u80FD\u91CF\u600E\u6837\u4ECE\u6838\u5FC3\u5230\u8FBE\u8868\u9762\uFF1F",["\u4E00\u9897\u5149\u5B50\u4E00\u8DEF\u76F4\u7EBF\u7A7F\u8FC7","\u8F90\u5C04\u4F20\u9012\u4E0E\u7269\u8D28\u5BF9\u6D41\u5171\u540C\u53C2\u4E0E"],1,"\u80FD\u91CF\u5728\u4E0D\u540C\u533A\u57DF\u4EE5\u4E0D\u540C\u65B9\u5F0F\u4F20\u9012\uFF0C\u5E76\u975E\u4E00\u9897\u5149\u5B50\u76F4\u63A5\u7A7F\u8FC7\u3002"],["\u4E3A\u4EC0\u4E48\u592A\u9633\u80FD\u5728\u5F88\u957F\u65F6\u95F4\u91CC\u4FDD\u6301\u7A33\u5B9A\uFF1F",["\u805A\u53D8\u4F9B\u80FD\u5E2E\u52A9\u7EF4\u6301\u9AD8\u6E29\uFF0C\u538B\u529B\u652F\u6301\u62B5\u6297\u5F15\u529B","\u592A\u9633\u6709\u4E00\u5C42\u4E0D\u4F1A\u7834\u7684\u786C\u58F3"],0,"\u4F9B\u80FD\u3001\u6E29\u5EA6\u3001\u538B\u529B\u4E0E\u5F15\u529B\u5171\u540C\u5173\u8054\u3002\u767D\u77EE\u661F\u9636\u6BB5\u5219\u4E0D\u518D\u9760\u6838\u5FC3\u805A\u53D8\u4F9B\u80FD\u3002"]],n=e[t],s=this.$("journey-controls");s.innerHTML=`<div class="journey-question">${t+1} / 3 \xB7 ${n[0]}</div><div class="journey-answers"></div><div id="journey-feedback" role="status"></div>`,n[1].forEach((r,o)=>{let a=document.createElement("button");a.textContent=r,a.onclick=()=>{if(this.$("journey-feedback").textContent=(o===n[2]?"\u8FD9\u6761\u89E3\u91CA\u6210\u7ACB\uFF1A":"\u518D\u770B\u4E00\u6761\u7EBF\u7D22\uFF1A")+n[3],s.querySelectorAll(".journey-answers button").forEach(l=>l.classList.toggle("chosen",l===a)),o===n[2]&&!s.querySelector("#question-next")){let l=document.createElement("button");l.id="question-next",l.textContent=t<2?"\u7EE7\u7EED\u89E3\u91CA \u2192":"\u770B\u770B\u8FD9\u6B21\u7684\u53D1\u73B0",l.className="journey-action",l.onclick=()=>{t<2?this.quiz(t+1):(s.innerHTML='<div class="journey-discoveries">\u6838\u5FC3\u6838\u805A\u53D8\u4F9B\u80FD \u2192 \u8F90\u5C04\u4E0E\u5BF9\u6D41\u5411\u5916\u4F20\u9012 \u2192 \u8868\u9762\u91CA\u653E\u5149\u4E0E\u70ED<br>\u805A\u53D8\u4F9B\u80FD \u2192 \u9AD8\u6E29 \u2192 \u538B\u529B\u652F\u6301\uFF0C\u4E0E\u5F15\u529B\u7EF4\u6301\u5E73\u8861<br>\u71C3\u6599\u4E0E\u7ED3\u6784\u6539\u53D8 \u2192 \u7EA2\u5DE8\u661F \u2192 \u5916\u5C42\u6563\u53BB \u2192 \u767D\u77EE\u661F</div>',this.$("journey-next").disabled=!1,this.$("journey-prompt").textContent="\u628A\u8FD9\u4E09\u6761\u5173\u7CFB\u5E26\u8D70\u3002\u4F60\u4E5F\u53EF\u4EE5\u56DE\u770B\u4EFB\u4F55\u5DF2\u7ECF\u63A2\u7D22\u7684\u5730\u65B9\u3002")},s.append(l)}},s.querySelector(".journey-answers").append(a)})}tick(t){if(!this.active)return;let e=this.index;this.model.visible=!0,this.interior.visible=e===0?this.cut>.1:[1,3,4].includes(e),this.fusion.visible=e===2,this.light.visible=e===3&&this.progress<.65,this.convection.visible=e===3&&this.progress>=.55,this.inward.visible=e===4,this.outward.visible=e===4&&this.support,this.shell.visible=e===5&&this.future>.6,this.sun.star.visible=e!==2,this.sun.halo.visible=e!==2,this.clip.constant=this.position.x+(1-this.cut)*.55,this.sun.mat.clippingPlanes=this.interior.visible?[this.clip]:[];let n=e===5?this.future<.25?1:this.future<.6?1+(this.future-.25)*3.2:this.future<.85?.5:.3:1;this.sun.star.scale.lerp(new P(n,n,n),.06),this.sun.mat.uniforms.uColor.value.set(e===5&&this.future>.6?"#b6d8ff":"#ffaf54");let s=innerWidth<750,r=Ue.clamp([3.2,2.1,.95,2,3,5,3.4][e]*(s?1.9:1)*(this.zoomScale||1),e===2?.3:.7,30);this.desiredLook.copy(this.position).add(new P(s?0:-r*.23,s?-r*.14:0,0)),this.look.lerp(this.desiredLook,.055),window.SOLAR_JOURNEY={index:e,zoomScale:this.zoomScale||1,depth:r};let o=this.desiredLook.clone().add(new P(0,s?r*.2:.08,r).applyAxisAngle(new P(1,0,0),this.pitch||0).applyAxisAngle(new P(0,1,0),this.yaw||0));if(this.camera.position.lerp(o,.055),this.camera.lookAt(this.look),this.camera.updateMatrixWorld(),e===2){let a=this.reacting?(t-this.reactionStart)/1e3:0;this.reacting&&(this.phase=Math.min(4.8,a),a>=4.8&&(this.reacting=!1,this.$("journey-next").disabled=!1,this.$("journey-action").disabled=!1,this.$("journey-action").textContent="\u518D\u89C2\u5BDF\u4E00\u6B21",this.$("journey-prompt").textContent="\u6838\u805A\u53D8\u91CA\u653E\u4E86\u80FD\u91CF\u3002\u4F46\u80FD\u91CF\u8FD8\u8981\u7ECF\u8FC7\u5F88\u957F\u7684\u4F20\u9012\u8FC7\u7A0B\uFF0C\u624D\u80FD\u79BB\u5F00\u592A\u9633\u3002"));let l=Math.max(0,this.phase),c=Math.min(1,l/2.5);this.h.forEach((h,u)=>{h.position.set((u%2-.5)*.38*(1-c),(Math.floor(u/2)-.5)*.38*(1-c),0),h.visible=l<2.5}),this.he.visible=l>=2.5,this.wave.visible=l>=2.5,this.wave.scale.setScalar(.08+Math.max(0,l-2.5)*.14),this.wave.material.opacity=Math.max(0,.8-(l-2.5)*.25)}e===3&&(this.photons.forEach((a,l)=>a.position.copy(this.paths[l].getPoint((t/6e3+l/12)%1))),this.convectionDots.forEach((a,l)=>{let c=(t/4500+l/10)%1;a.position.copy(this.convectionPaths[l].getPoint(c)),a.material.color.set(c>.5?16103800:9356781)})),e===5&&(this.shell.rotation.z=t*2e-5)}};var Ya=[{id:"mercury",name:"\u6C34\u661F",kind:"\u5CA9\u77F3\u884C\u661F",color:"#b9afa4",texture:"mercury",position:[-15,1,10],radius:.55,tag:"\u79BB\u592A\u9633\u6700\u8FD1\uFF0C\u5374\u4E0D\u662F\u6700\u70ED",source:"https://science.nasa.gov/mercury/facts/",scenes:[{title:"\u79BB\u592A\u9633\u6700\u8FD1\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u662F\u6700\u70ED\uFF1F",text:"\u6C34\u661F\u767D\u5929\u7684\u8868\u9762\u53EF\u8FBE\u5230\u7EA6 430\u2103\uFF0C\u591C\u665A\u5374\u53EF\u964D\u5230\u7EA6 \u2212180\u2103\u3002\u5B83\u51E0\u4E4E\u6CA1\u6709\u80FD\u4FDD\u6E29\u7684\u5927\u6C14\uFF0C\u53EA\u6709\u6781\u7A00\u8584\u7684\u5916\u9038\u5C42\u3002\u592A\u9633\u7167\u5230\u65F6\u5347\u6E29\uFF0C\u80CC\u5411\u592A\u9633\u540E\u53C8\u5BB9\u6613\u6563\u70ED\u3002\u6BD4\u8F83\u884C\u661F\u6E29\u5EA6\uFF0C\u9664\u4E86\u79BB\u592A\u9633\u591A\u8FDC\uFF0C\u8FD8\u8981\u770B\u5927\u6C14\u3002",control:"\u8F6C\u52A8\u661F\u7403\uFF0C\u5BF9\u7167\u671D\u5411\u5149\u6E90\u4E0E\u80CC\u5411\u5149\u6E90\u7684\u4E24\u4FA7",experiment:"daynight",observation:"\u4EAE\u7684\u4E00\u4FA7\u8868\u793A\u53D7\u5230\u7167\u660E\uFF0C\u6697\u7684\u4E00\u4FA7\u8868\u793A\u80CC\u5411\u5149\u6E90\uFF1B\u8FD9\u662F\u65B9\u5411\u793A\u610F\uFF0C\u4E0D\u662F\u6E29\u5EA6\u6D4B\u91CF\u56FE\u3002"},{title:"\u4E00\u201C\u5929\u201D\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u6BD4\u4E00\u5E74\u8FD8\u957F\uFF1F",text:"\u6C34\u661F\u7ED5\u592A\u9633\u4E00\u5468\u7EA6 88 \u4E2A\u5730\u7403\u65E5\uFF0C\u4F46\u4ECE\u4E00\u6B21\u65E5\u51FA\u5230\u4E0B\u4E00\u6B21\u65E5\u51FA\uFF0C\u7EA6\u9700 176 \u4E2A\u5730\u7403\u65E5\u3002\u81EA\u8F6C\u548C\u516C\u8F6C\u662F\u4E24\u79CD\u8FD0\u52A8\uFF1B\u201C\u8F6C\u4E00\u5708\u201D\u4E5F\u4E0D\u7B49\u4E8E\u201C\u592A\u9633\u56DE\u5230\u5929\u7A7A\u540C\u4E00\u4F4D\u7F6E\u201D\u3002\u8C08\u4E00\u5929\u591A\u957F\uFF0C\u5148\u8BF4\u6E05\u7528\u7684\u662F\u54EA\u79CD\u5B9A\u4E49\u3002",control:"\u6BD4\u8F83\u4E24\u628A\u65F6\u949F",experiment:"clocks",observation:"\u516C\u8F6C\u4E00\u5468\uFF1A\u7EA6 88 \u4E2A\u5730\u7403\u65E5\uFF1B\u65E5\u51FA\u5230\u4E0B\u4E00\u6B21\u65E5\u51FA\uFF1A\u7EA6 176 \u4E2A\u5730\u7403\u65E5\u3002"},{title:"\u90A3\u4E48\u70ED\u7684\u5730\u65B9\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u6709\u51B0\uFF1F",text:"\u6C34\u661F\u6781\u533A\u67D0\u4E9B\u9668\u77F3\u5751\u7684\u5751\u5E95\u957F\u671F\u7167\u4E0D\u5230\u9633\u5149\uFF0C\u73AF\u5883\u53EF\u4EE5\u975E\u5E38\u51B7\u3002\u4E00\u4E2A\u661F\u7403\u7684\u5E73\u5747\u5370\u8C61\uFF0C\u4E0D\u80FD\u4EE3\u8868\u5B83\u6BCF\u4E2A\u89D2\u843D\u7684\u6761\u4EF6\u3002\u5224\u65AD\u51B0\u80FD\u5426\u4FDD\u5B58\uFF0C\u9700\u8981\u770B\u5177\u4F53\u4F4D\u7F6E\u662F\u5426\u63A5\u53D7\u9633\u5149\u3002",control:"\u628A\u89C6\u7EBF\u79FB\u5411\u6781\u533A\uFF0C\u5BFB\u627E\u201C\u5149\u7167\u6761\u4EF6\u201D\u8FD9\u6761\u7EBF\u7D22",experiment:"rotate",observation:"\u666E\u901A\u8D34\u56FE\u4E0D\u80FD\u9A8C\u8BC1\u5751\u5E95\u662F\u5426\u6C38\u4E45\u9634\u5F71\uFF1B\u8FD9\u9700\u8981\u5730\u5F62\u3001\u592A\u9633\u89D2\u5EA6\u548C\u63A2\u6D4B\u6570\u636E\u3002"}],question:"\u89E3\u91CA\u91D1\u661F\u6BD4\u6C34\u661F\u66F4\u70ED\uFF0C\u5E94\u8BE5\u4F18\u5148\u8865\u67E5\u4EC0\u4E48\uFF1F",answers:["\u4E24\u8005\u7684\u5927\u6C14\u7EC4\u6210\u4E0E\u4FDD\u6E29\u4F5C\u7528","\u53EA\u628A\u5230\u592A\u9633\u7684\u8DDD\u79BB\u518D\u6392\u4E00\u6B21"],answer:0,why:"\u8DDD\u79BB\u5F71\u54CD\u63A5\u53D7\u7684\u9633\u5149\uFF0C\u5927\u6C14\u53C8\u5F71\u54CD\u80FD\u91CF\u600E\u6837\u79BB\u5F00\uFF1B\u53EA\u6BD4\u8F83\u8DDD\u79BB\u4E0D\u80FD\u5B8C\u6574\u89E3\u91CA\u6E29\u5EA6\u3002",related:"venus"},{id:"venus",name:"\u91D1\u661F",kind:"\u5CA9\u77F3\u884C\u661F",color:"#dfba82",texture:"venus_atmosphere",position:[-7,1,15],radius:.72,tag:"\u539A\u539A\u7684\u4E91\u5C42\uFF0C\u85CF\u7740\u4EC0\u4E48\uFF1F",source:"https://science.nasa.gov/venus/venus-facts/",scenes:[{title:"\u770B\u8D77\u6765\u660E\u4EAE\uFF0C\u4E0D\u4EE3\u8868\u9002\u5408\u751F\u6D3B\u3002",text:"\u91D1\u661F\u548C\u5730\u7403\u5927\u5C0F\u63A5\u8FD1\uFF0C\u5374\u6709\u975E\u5E38\u4E0D\u540C\u7684\u73AF\u5883\u3002\u5B83\u7684\u5927\u6C14\u4E3B\u8981\u662F\u4E8C\u6C27\u5316\u78B3\uFF0C\u539A\u539A\u7684\u4E91\u5C42\u906E\u4F4F\u5730\u8868\u3002\u4E91\u5C42\u53CD\u5C04\u9633\u5149\uFF0C\u8BA9\u91D1\u661F\u4ECE\u5730\u7403\u4E0A\u770B\u5F88\u660E\u4EAE\uFF1B\u660E\u4EAE\u5E76\u4E0D\u7B49\u4E8E\u8868\u9762\u51C9\u723D\u3002",control:"\u8C03\u8282\u4E91\u5C42\u7684\u793A\u610F\u8986\u76D6\uFF0C\u533A\u5206\u201C\u770B\u5230\u4E91\u201D\u4E0E\u201C\u770B\u5230\u5730\u9762\u201D",experiment:"atmosphere",observation:"\u8FD9\u91CC\u7528\u4E91\u5C42\u8D34\u56FE\u5C55\u793A\u91D1\u661F\u5916\u89C2\uFF1B\u8C03\u8282\u900F\u660E\u5EA6\u53EA\u662F\u5E2E\u52A9\u7406\u89E3\u906E\u6321\uFF0C\u5E76\u6CA1\u6709\u8FD8\u539F\u771F\u5B9E\u5730\u8868\u3002"},{title:"\u4E3A\u4EC0\u4E48\u5B83\u6BD4\u66F4\u8FD1\u7684\u6C34\u661F\u8FD8\u70ED\uFF1F",text:"\u91D1\u661F\u8868\u9762\u7EA6 465\u2103\u3002\u9633\u5149\u5E26\u6765\u80FD\u91CF\uFF0C\u5730\u8868\u548C\u5927\u6C14\u53C8\u5411\u5916\u91CA\u653E\u80FD\u91CF\uFF1B\u6D53\u539A\u7684\u4E8C\u6C27\u5316\u78B3\u5927\u6C14\u5F3A\u70C8\u5F71\u54CD\u7EA2\u5916\u8F90\u5C04\u5411\u5916\u4F20\u9012\uFF0C\u5F62\u6210\u6781\u5F3A\u7684\u6E29\u5BA4\u6548\u5E94\u3002\u4E0D\u662F\u5927\u6C14\u91CC\u201C\u7740\u706B\u201D\uFF0C\u4E5F\u4E0D\u80FD\u53EA\u7528\u8DDD\u79BB\u89E3\u91CA\u3002",control:"\u6BD4\u8F83\u5165\u5C04\u9633\u5149\u4E0E\u5411\u5916\u6563\u70ED\u4E24\u6761\u8DEF\u5F84",experiment:"heat",observation:"\u8FD9\u5F20\u80FD\u91CF\u5173\u7CFB\u56FE\u4E0D\u8BA1\u7B97\u5B9E\u9645\u6E29\u5EA6\uFF1B\u5B83\u5F3A\u8C03\u63A5\u53D7\u591A\u5C11\u80FD\u91CF\u3001\u80FD\u91CF\u600E\u6837\u79BB\u5F00\uFF0C\u9700\u8981\u4E00\u8D77\u8003\u8651\u3002"},{title:"\u5982\u679C\u7AD9\u5230\u5730\u9762\uFF0C\u4F1A\u9047\u5230\u4EC0\u4E48\uFF1F",text:"\u9664\u4E86\u9AD8\u6E29\uFF0C\u91D1\u661F\u8868\u9762\u5927\u6C14\u538B\u529B\u8FD8\u7EA6\u4E3A\u5730\u7403\u6D77\u5E73\u9762\u7684 92 \u500D\u3002\u5B83\u6CA1\u6709\u5730\u7403\u8FD9\u6837\u7684\u6D77\u6D0B\uFF0C\u4E91\u5C42\u4E2D\u8FD8\u6709\u786B\u9178\u6DB2\u6EF4\u3002\u5BFB\u627E\u5B9C\u5C45\u73AF\u5883\uFF0C\u8981\u540C\u65F6\u68C0\u67E5\u6E29\u5EA6\u3001\u538B\u529B\u3001\u6C34\u548C\u5927\u6C14\uFF0C\u800C\u4E0D\u662F\u53EA\u627E\u4E00\u9897\u4E0E\u5730\u7403\u5DEE\u4E0D\u591A\u5927\u7684\u7403\u3002",control:"\u6BD4\u8F83\u5730\u7403\u4E0E\u91D1\u661F\u7684\u8868\u9762\u6761\u4EF6",experiment:"conditions",observation:"\u5927\u5C0F\u76F8\u8FD1\u53EA\u662F\u4E00\u4E2A\u6761\u4EF6\uFF0C\u4E0D\u80FD\u5355\u72EC\u63A8\u51FA\u201C\u9002\u5408\u4EBA\u7C7B\u5C45\u4F4F\u201D\u3002"}],question:"\u91D1\u661F\u5F88\u4EAE\uFF0C\u6700\u5408\u7406\u7684\u89E3\u91CA\u662F\u54EA\u4E00\u9879\uFF1F",answers:["\u5B83\u50CF\u592A\u9633\u4E00\u6837\u5728\u6838\u5FC3\u6838\u805A\u53D8\u53D1\u5149","\u5B83\u7684\u4E91\u5C42\u53CD\u5C04\u4E86\u5927\u91CF\u9633\u5149"],answer:1,why:"\u91D1\u661F\u662F\u884C\u661F\uFF0C\u660E\u4EAE\u7684\u5916\u89C2\u4E3B\u8981\u6765\u81EA\u53CD\u5C04\u9633\u5149\uFF1B\u201C\u4EAE\u201D\u548C\u201C\u81EA\u5DF1\u4F9B\u80FD\u53D1\u5149\u201D\u8981\u5206\u6E05\u3002",related:"mercury"},{id:"moon",name:"\u6708\u7403",kind:"\u5730\u7403\u7684\u5929\u7136\u536B\u661F",color:"#c4c5c7",texture:"moon",position:[6,1,11],radius:.5,tag:"\u6708\u4EAE\u4E3A\u4EC0\u4E48\u6BCF\u5929\u4E0D\u4E00\u6837\uFF1F",source:"https://science.nasa.gov/moon/facts/",scenes:[{title:"\u6708\u4EAE\u7684\u5F62\u72B6\uFF0C\u771F\u7684\u5728\u53D8\u5316\u5417\uFF1F",text:"\u6708\u7403\u672C\u8EAB\u8FD8\u662F\u4E00\u4E2A\u7403\u3002\u592A\u9633\u59CB\u7EC8\u7167\u4EAE\u5B83\u5927\u81F4\u4E00\u534A\u7684\u8868\u9762\uFF1B\u968F\u7740\u6708\u7403\u7ED5\u5730\u7403\u8FD0\u884C\uFF0C\u6211\u4EEC\u770B\u5230\u7684\u88AB\u7167\u4EAE\u90E8\u5206\u6BD4\u4F8B\u6539\u53D8\uFF0C\u4E8E\u662F\u51FA\u73B0\u6708\u7259\u3001\u534A\u6708\u548C\u6EE1\u6708\u3002\u666E\u901A\u6708\u76F8\u4E0D\u662F\u5730\u7403\u9634\u5F71\u906E\u4F4F\u6708\u7403\u3002",control:"\u62D6\u52A8\u89C2\u5BDF\u89D2\u5EA6\uFF0C\u770B\u770B\u7403\u9762\u53D7\u5149\u90E8\u5206\u600E\u6837\u53D8\u5316",experiment:"phase",observation:"\u6A21\u578B\u56FA\u5B9A\u5149\u6E90\u3001\u6539\u53D8\u89C2\u5BDF\u65B9\u5411\uFF0C\u5E2E\u52A9\u7406\u89E3\u53EF\u89C1\u4EAE\u9762\u6BD4\u4F8B\uFF1B\u6CA1\u6709\u6309\u771F\u5B9E\u6708\u7403\u8F68\u9053\u8FD0\u884C\u3002"},{title:"\u4E3A\u4EC0\u4E48\u603B\u662F\u770B\u89C1\u540C\u4E00\u9762\uFF1F",text:"\u6708\u7403\u81EA\u8F6C\u4E00\u5468\u548C\u7ED5\u5730\u7403\u516C\u8F6C\u4E00\u5468\u6240\u9700\u65F6\u95F4\u76F8\u540C\uFF0C\u7EA6 27.3 \u5929\uFF0C\u6240\u4EE5\u5B83\u5927\u81F4\u603B\u7528\u540C\u4E00\u9762\u671D\u5411\u5730\u7403\u3002\u5B83\u786E\u5B9E\u5728\u81EA\u8F6C\u3002\u80CC\u9762\u4E5F\u4F1A\u88AB\u592A\u9633\u7167\u4EAE\uFF0C\u201C\u80CC\u9762\u201D\u4E0D\u662F\u6C38\u8FDC\u9ED1\u6697\u7684\u4E00\u9762\u3002",control:"\u8F6C\u52A8\u6A21\u578B\uFF0C\u533A\u5206\u201C\u80CC\u9762\u201D\u4E0E\u201C\u80CC\u5411\u592A\u9633\u201D",experiment:"rotate",observation:"\u8FD9\u6B21\u662F\u81EA\u7531\u67E5\u770B\u8D34\u56FE\uFF0C\u4E0D\u662F\u5730\u6708\u540C\u6B65\u8FD0\u52A8\u6A21\u62DF\u3002"},{title:"\u4E3A\u4EC0\u4E48\u90A3\u4E9B\u5751\u80FD\u4FDD\u5B58\u90A3\u4E48\u4E45\uFF1F",text:"\u6708\u7403\u53EA\u6709\u6781\u7A00\u8584\u7684\u5916\u9038\u5C42\uFF0C\u6CA1\u6709\u5730\u7403\u4E0A\u666E\u904D\u7684\u98CE\u96E8\u548C\u6D41\u6C34\u4FB5\u8680\u3002\u649E\u51FB\u7559\u4E0B\u7684\u9668\u77F3\u5751\u56E0\u6B64\u80FD\u4FDD\u5B58\u5F88\u4E45\uFF0C\u4F46\u65B0\u7684\u649E\u51FB\u4ECD\u4F1A\u6539\u53D8\u8868\u9762\u3002\u6BD4\u8F83\u6708\u7403\u4E0E\u5730\u7403\uFF0C\u5C31\u662F\u5728\u6BD4\u8F83\u6539\u53D8\u5730\u8868\u7684\u4E0D\u540C\u8FC7\u7A0B\u3002",control:"\u9760\u8FD1\u89C2\u5BDF\u9668\u77F3\u5751\uFF0C\u518D\u60F3\u60F3\u5730\u7403\u4E0A\u7684\u96E8\u6C34\u4E0E\u6CB3\u6D41",experiment:"rotate",observation:"\u4ECE\u5706\u5F62\u5751\u7684\u5206\u5E03\u5BFB\u627E\u649E\u51FB\u7EBF\u7D22\uFF1B\u5355\u51ED\u4E00\u4E2A\u5706\u5F62\uFF0C\u4ECD\u4E0D\u80FD\u786E\u5B9A\u6240\u6709\u5730\u8C8C\u7684\u6210\u56E0\u3002"}],question:"\u4E3A\u4EC0\u4E48\u6708\u7403\u80CC\u9762\u4E5F\u80FD\u88AB\u7167\u4EAE\uFF1F",answers:["\u80CC\u9762\u53EA\u662F\u80CC\u5411\u5730\u7403\uFF0C\u4E0D\u7B49\u4E8E\u59CB\u7EC8\u80CC\u5411\u592A\u9633","\u6708\u7403\u80CC\u9762\u80FD\u81EA\u5DF1\u53D1\u5149"],answer:0,why:"\u671D\u5411\u5730\u7403\u548C\u671D\u5411\u592A\u9633\u662F\u4E24\u79CD\u5173\u7CFB\u3002\u6708\u76F8\u3001\u80CC\u9762\u3001\u6708\u98DF\u4E5F\u4E0D\u662F\u540C\u4E00\u4E2A\u6982\u5FF5\u3002",related:"earth"},{id:"mars",name:"\u706B\u661F",kind:"\u5CA9\u77F3\u884C\u661F",color:"#cf7251",texture:"mars",position:[15,1,10],radius:.65,tag:"\u7EA2\u8272\u7684\u661F\u7403\uFF0C\u66FE\u7ECF\u6709\u6C34\u5417\uFF1F",source:"https://science.nasa.gov/mars/facts/",scenes:[{title:"\u5B83\u4E3A\u4EC0\u4E48\u662F\u7EA2\u8272\u7684\uFF1F",text:"\u706B\u661F\u7684\u5CA9\u77F3\u548C\u5C18\u571F\u4E2D\u542B\u6709\u94C1\uFF1B\u94C1\u4E0E\u6C27\u53D1\u751F\u53CD\u5E94\uFF0C\u5F62\u6210\u6C27\u5316\u94C1\uFF0C\u8BA9\u5F88\u591A\u533A\u57DF\u5448\u73B0\u7EA2\u8910\u8272\u3002\u50CF\u94C1\u751F\u9508\u7684\u989C\u8272\uFF0C\u4F46\u706B\u661F\u5E76\u4E0D\u662F\u4E00\u6574\u9897\u94C1\u7403\u3002\u8868\u9762\u989C\u8272\u662F\u4E00\u6761\u6750\u6599\u7EBF\u7D22\uFF0C\u4E0D\u4EE3\u8868\u5185\u90E8\u5168\u7531\u540C\u4E00\u79CD\u4E1C\u897F\u7EC4\u6210\u3002",control:"\u8F6C\u52A8\u706B\u661F\uFF0C\u6BD4\u8F83\u660E\u6697\u4E0E\u8868\u9762\u989C\u8272",experiment:"rotate",observation:"\u8868\u9762\u8D34\u56FE\u7ECF\u8FC7\u5904\u7406\uFF0C\u989C\u8272\u5E2E\u52A9\u8FA8\u8BA4\u5730\u8C8C\uFF0C\u4E0D\u80FD\u66FF\u4EE3\u5CA9\u77F3\u6210\u5206\u7684\u5B9E\u9645\u6D4B\u91CF\u3002"},{title:"\u6CA1\u6709\u5927\u6D77\uFF0C\u4E3A\u4EC0\u4E48\u7814\u7A76\u8005\u8FD8\u5BFB\u627E\u6C34\uFF1F",text:"\u706B\u661F\u4E0A\u6709\u53E4\u4EE3\u6CB3\u6D41\u548C\u6E56\u6CCA\u7559\u4E0B\u7684\u5730\u5F62\u7EBF\u7D22\uFF0C\u4E5F\u6709\u4ECA\u5929\u7684\u6C34\u51B0\u3002\u6DB2\u6001\u6C34\u3001\u51B0\u3001\u8FC7\u53BB\u7684\u6C34\u548C\u73B0\u5728\u7684\u6C34\uFF0C\u9700\u8981\u5206\u5F00\u8BA8\u8BBA\u3002\u5BFB\u627E\u65E7\u6CB3\u9053\uFF0C\u662F\u4E3A\u4E86\u8FFD\u95EE\u706B\u661F\u4EE5\u524D\u7684\u73AF\u5883\uFF0C\u5E76\u4E0D\u8868\u793A\u753B\u9762\u91CC\u7684\u6BCF\u6761\u6C9F\u4ECA\u5929\u90FD\u5728\u6D41\u6C34\u3002",control:"\u628A\u955C\u5934\u9760\u8FD1\uFF0C\u6BD4\u8F83\u6C9F\u8C37\u4E0E\u5468\u8FB9\u9AD8\u5730",experiment:"rotate",observation:"\u6A21\u578B\u80FD\u5E2E\u4F60\u89C2\u5BDF\u5916\u5F62\uFF1B\u786E\u5B9A\u67D0\u6761\u6C9F\u662F\u5426\u7531\u6C34\u5F62\u6210\uFF0C\u8FD8\u9700\u8981\u5730\u5F62\u3001\u77FF\u7269\u4E0E\u63A2\u6D4B\u8BC1\u636E\u3002"},{title:"\u4EBA\u80FD\u76F4\u63A5\u8D70\u51FA\u53BB\u547C\u5438\u5417\uFF1F",text:"\u706B\u661F\u5927\u6C14\u975E\u5E38\u7A00\u8584\uFF0C\u4E3B\u8981\u7531\u4E8C\u6C27\u5316\u78B3\u7EC4\u6210\uFF0C\u5E73\u5747\u8868\u9762\u6E29\u5EA6\u7EA6 \u221265\u2103\u3002\u63A2\u6D4B\u8F66\u53EF\u4EE5\u5728\u90A3\u91CC\u5DE5\u4F5C\uFF0C\u4EBA\u7C7B\u5374\u9700\u8981\u4F9B\u6C27\u3001\u4FDD\u6E29\u548C\u62B5\u5FA1\u73AF\u5883\u98CE\u9669\u7684\u8BBE\u5907\u3002\u6709\u9646\u5730\uFF0C\u4E0D\u7B49\u4E8E\u73AF\u5883\u5C31\u50CF\u5730\u7403\u3002",control:"\u5BF9\u7167\u201C\u6709\u5730\u9762\u201D\u548C\u201C\u80FD\u751F\u6D3B\u201D\u4E24\u4E2A\u6761\u4EF6",experiment:"conditions",observation:"\u5B9C\u5C45\u6027\u4E0D\u662F\u4E00\u9053\u53EA\u770B\u989C\u8272\u6216\u5927\u5C0F\u7684\u5224\u65AD\u9898\u3002"}],question:"\u53D1\u73B0\u53E4\u6CB3\u9053\u540E\uFF0C\u54EA\u53E5\u8BDD\u6700\u7B26\u5408\u8BC1\u636E\uFF1F",answers:["\u4ECA\u5929\u6240\u6709\u6C9F\u8C37\u91CC\u90FD\u4E00\u5B9A\u6709\u6DB2\u6001\u6C34","\u8FD9\u662F\u7814\u7A76\u8FC7\u53BB\u6D41\u6C34\u6D3B\u52A8\u7684\u4E00\u6761\u7EBF\u7D22"],answer:1,why:"\u8FC7\u53BB\u7559\u4E0B\u7684\u5730\u5F62\u8BC1\u636E\uFF0C\u9700\u8981\u4E0E\u4ECA\u5929\u7684\u73AF\u5883\u533A\u5206\uFF1B\u4E00\u6761\u7EBF\u7D22\u8FD8\u9700\u8981\u5176\u4ED6\u89C2\u6D4B\u652F\u6301\u3002",related:"earth"},{id:"jupiter",name:"\u6728\u661F",kind:"\u6C14\u6001\u5DE8\u884C\u661F",color:"#d5b79a",texture:"jupiter",position:[16,1,-1],radius:1.2,tag:"\u90A3\u5757\u7EA2\u6591\uFF0C\u662F\u9646\u5730\u8FD8\u662F\u98CE\u66B4\uFF1F",source:"https://science.nasa.gov/jupiter/jupiter-facts/",scenes:[{title:"\u6761\u7EB9\u4E0B\u9762\uFF0C\u6709\u80FD\u7AD9\u7ACB\u7684\u5730\u9762\u5417\uFF1F",text:"\u6728\u661F\u4E3B\u8981\u7531\u6C22\u548C\u6C26\u6784\u6210\u3002\u6211\u4EEC\u770B\u5230\u7684\u6761\u5E26\u662F\u5927\u6C14\u548C\u4E91\u5C42\uFF0C\u4E0D\u662F\u5F69\u8272\u5927\u9646\u3002\u5411\u91CC\u9762\u6DF1\u5165\uFF0C\u538B\u529B\u4E0E\u6E29\u5EA6\u9010\u6E10\u5347\u9AD8\uFF0C\u7269\u8D28\u72B6\u6001\u6539\u53D8\uFF1B\u5B83\u6CA1\u6709\u5730\u7403\u90A3\u6837\u660E\u786E\u7684\u56FA\u4F53\u8868\u9762\u3002",control:"\u8F6C\u52A8\u6728\u661F\uFF0C\u6CBF\u4E91\u5E26\u89C2\u5BDF\u4E0D\u540C\u533A\u57DF",experiment:"rotate",observation:"\u8D34\u56FE\u5C55\u793A\u5916\u89C2\uFF1B\u4E0D\u80FD\u628A\u4E00\u5F20\u4E91\u5C42\u7167\u7247\u5F53\u4F5C\u5185\u90E8\u5256\u9762\u3002"},{title:"\u5927\u7EA2\u6591\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E00\u5757\u7EA2\u8272\u9646\u5730\uFF1F",text:"\u5927\u7EA2\u6591\u662F\u6728\u661F\u5927\u6C14\u4E2D\u7684\u5DE8\u5927\u98CE\u66B4\u3002\u8981\u8BA4\u51FA\u98CE\u66B4\uFF0C\u9664\u4E86\u989C\u8272\uFF0C\u8FD8\u9700\u8981\u770B\u8FDE\u7EED\u56FE\u50CF\u4E2D\u7684\u65CB\u8F6C\u548C\u53D8\u5316\u3002\u9759\u6001\u7EA2\u6591\u53EA\u80FD\u544A\u8BC9\u4F60\u5916\u89C2\uFF0C\u4E0D\u80FD\u72EC\u81EA\u89E3\u91CA\u5B83\u600E\u6837\u8FD0\u52A8\u3002",control:"\u653E\u6162\u6216\u52A0\u5FEB\u6A21\u578B\u81EA\u8F6C\uFF0C\u533A\u5206\u661F\u7403\u8F6C\u52A8\u4E0E\u98CE\u66B4\u8FD0\u52A8",experiment:"spin",observation:"\u8FD9\u91CC\u63A7\u5236\u7684\u662F\u6574\u4E2A\u6A21\u578B\u7684\u8F6C\u901F\uFF0C\u6CA1\u6709\u6A21\u62DF\u5927\u7EA2\u6591\u5185\u90E8\u7684\u771F\u5B9E\u6D41\u573A\u3002"},{title:"\u4E3A\u4EC0\u4E48\u5B83\u6709\u8FD9\u4E48\u591A\u4E0D\u540C\u7684\u536B\u661F\uFF1F",text:"\u536B\u661F\u4E5F\u4E0D\u90FD\u662F\u4E00\u6837\u7684\u5CA9\u77F3\u7403\uFF1A\u6728\u536B\u4E00\u6709\u5F3A\u70C8\u706B\u5C71\u6D3B\u52A8\uFF0C\u6728\u536B\u4E8C\u7684\u51B0\u58F3\u4E0B\u9762\u88AB\u8BA4\u4E3A\u5B58\u5728\u6D77\u6D0B\u3002\u7814\u7A76\u5B83\u4EEC\uFF0C\u8981\u628A\u6240\u5728\u73AF\u5883\u3001\u5185\u90E8\u80FD\u91CF\u548C\u6C34\u8054\u7CFB\u8D77\u6765\u3002\u8FDC\u79BB\u592A\u9633\u7684\u5730\u65B9\uFF0C\u4E5F\u53EF\u80FD\u6709\u503C\u5F97\u5BFB\u627E\u7684\u6DB2\u6001\u6C34\u73AF\u5883\u3002",control:"\u4ECE\u5927\u6C14\u89C6\u89D2\u9000\u4E00\u6B65\uFF0C\u8BA4\u8BC6\u884C\u661F\u4E0E\u536B\u661F\u7684\u533A\u522B",experiment:"rotate",observation:"\u4E0B\u4E00\u6B65\u7814\u7A76\u536B\u661F\u65F6\uFF0C\u5E94\u5355\u72EC\u770B\u5B83\u4EEC\u7684\u8D44\u6599\uFF0C\u4E0D\u80FD\u628A\u6728\u661F\u7684\u6027\u8D28\u5957\u7ED9\u536B\u661F\u3002"}],question:"\u4E3A\u4EC0\u4E48\u6728\u661F\u4E0A\u7684\u4E00\u9053\u6761\u7EB9\u4E0D\u80FD\u76F4\u63A5\u53EB\u201C\u5927\u9646\u201D\uFF1F",answers:["\u6211\u4EEC\u770B\u5230\u7684\u4E3B\u8981\u662F\u5927\u6C14\u4E0E\u4E91\u5C42","\u6240\u6709\u884C\u661F\u7684\u6761\u7EB9\u90FD\u662F\u6D77\u5CB8\u7EBF"],answer:0,why:"\u5148\u786E\u8BA4\u89C2\u6D4B\u5230\u7684\u662F\u54EA\u4E00\u5C42\uFF0C\u518D\u7ED9\u56FE\u50CF\u547D\u540D\u3002\u5730\u7403\u9646\u5730\u7684\u7ECF\u9A8C\u4E0D\u80FD\u76F4\u63A5\u5957\u5230\u6C14\u6001\u5DE8\u884C\u661F\u3002",related:"saturn"},{id:"saturn",name:"\u571F\u661F",kind:"\u6C14\u6001\u5DE8\u884C\u661F",color:"#e6cc9f",texture:"saturn",position:[8,1,-12],radius:1,tag:"\u90A3\u4E00\u5708\uFF0C\u771F\u7684\u50CF\u5149\u76D8\u5417\uFF1F",source:"https://science.nasa.gov/saturn/facts/",scenes:[{title:"\u571F\u661F\u73AF\u662F\u4E00\u6574\u5F20\u786C\u76D8\u5417\uFF1F",text:"\u4ECE\u8FDC\u5904\u770B\uFF0C\u73AF\u50CF\u8FDE\u7EED\u7684\u4E00\u5708\uFF1B\u5B9E\u9645\u4E0A\uFF0C\u5B83\u7531\u5927\u91CF\u51B0\u548C\u5CA9\u77F3\u788E\u7247\u6784\u6210\uFF0C\u6BCF\u5757\u788E\u7247\u90FD\u5728\u7ED5\u571F\u661F\u8FD0\u884C\u3002\u6570\u91CF\u591A\u3001\u8DDD\u79BB\u8FDC\uFF0C\u8BA9\u5B83\u4EEC\u5728\u773C\u91CC\u8FDE\u6210\u4E00\u7247\u3002\u5B8C\u6574\u5916\u5F62\uFF0C\u4E0D\u7B49\u4E8E\u5B8C\u6574\u7684\u4E00\u5757\u6750\u6599\u3002",control:"\u503E\u659C\u73AF\u7684\u89D2\u5EA6\uFF0C\u770B\u770B\u4E3A\u4EC0\u4E48\u8584\u7247\u4F1A\u663E\u5F97\u5BBD\u6216\u7A84",experiment:"rings",observation:"\u6A21\u578B\u628A\u9897\u7C92\u7B80\u5316\u4E3A\u534A\u900F\u660E\u73AF\u9762\uFF0C\u6CA1\u6709\u753B\u51FA\u6BCF\u4E00\u5757\u788E\u7247\uFF1B\u522B\u628A\u6A21\u578B\u7684\u8FDE\u7EED\u9762\u5F53\u6210\u771F\u5B9E\u7ED3\u6784\u3002"},{title:"\u4E3A\u4EC0\u4E48\u73AF\u91CC\u8FD8\u6709\u7A7A\u9699\uFF1F",text:"\u571F\u661F\u73AF\u6709\u4E0D\u540C\u533A\u57DF\u548C\u95F4\u9699\u3002\u536B\u661F\u7684\u5F15\u529B\u4F1A\u5F71\u54CD\u73AF\u4E2D\u9897\u7C92\u7684\u8F68\u9053\uFF1B\u7814\u7A76\u73AF\uFF0C\u4E0D\u53EA\u662F\u8BB0\u4E00\u4E2A\u6F02\u4EAE\u5916\u5F62\uFF0C\u8FD8\u8981\u95EE\u5468\u56F4\u5929\u4F53\u600E\u6837\u76F8\u4E92\u4F5C\u7528\u3002\u4E0D\u540C\u95F4\u9699\u7684\u5F62\u6210\u4E0D\u80FD\u7B80\u5355\u5F52\u4E3A\u540C\u4E00\u4E2A\u539F\u56E0\u3002",control:"\u9760\u8FD1\u67E5\u770B\u73AF\u7684\u5206\u533A\uFF0C\u6BD4\u8F83\u9897\u7C92\u5E26\u4E0E\u95F4\u9694",experiment:"rings",observation:"\u56FE\u4E2D\u7684\u73AF\u7EB9\u662F\u7ED3\u6784\u793A\u610F\uFF0C\u4E0D\u662F\u5361\u897F\u5C3C\u63A2\u6D4B\u5668\u7684\u6D4B\u91CF\u6570\u636E\u3002"},{title:"\u5B83\u7684\u536B\u661F\uFF0C\u4E5F\u53EA\u6709\u51B0\u548C\u77F3\u5934\u5417\uFF1F",text:"\u571F\u536B\u516D\u6709\u6D53\u539A\u7684\u5927\u6C14\uFF0C\u5730\u8868\u5B58\u5728\u6DB2\u6001\u7532\u70F7\u548C\u4E59\u70F7\u7684\u6E56\u6CCA\u3001\u6CB3\u6D41\uFF1B\u571F\u536B\u4E8C\u4F1A\u55B7\u51FA\u542B\u6C34\u7269\u8D28\uFF0C\u51B0\u58F3\u4E0B\u9762\u5B58\u5728\u5168\u7403\u6027\u6D77\u6D0B\u3002\u770B\u5230\u201C\u6E56\u201D\uFF0C\u5148\u95EE\u662F\u54EA\u79CD\u6DB2\u4F53\uFF0C\u4E0D\u80FD\u4E00\u5F8B\u7406\u89E3\u6210\u5730\u7403\u7684\u6C34\u3002",control:"\u6BD4\u8F83\u201C\u770B\u8D77\u6765\u50CF\u6E56\u201D\u4E0E\u201C\u7531\u4EC0\u4E48\u7EC4\u6210\u201D",experiment:"conditions",observation:"\u5916\u5F62\u76F8\u4F3C\u80FD\u63D0\u51FA\u95EE\u9898\uFF0C\u6210\u5206\u5224\u65AD\u9700\u8981\u5149\u8C31\u3001\u63A2\u6D4B\u7B49\u8BC1\u636E\u3002"}],question:"\u571F\u661F\u73AF\u770B\u8D77\u6765\u8FDE\u7EED\uFF0C\u5C31\u80FD\u8BC1\u660E\u5B83\u662F\u4E00\u5757\u5B8C\u6574\u56FA\u4F53\u5417\uFF1F",answers:["\u80FD\uFF0C\u773C\u775B\u770B\u89C1\u4E00\u6574\u5708\u5C31\u8DB3\u591F","\u4E0D\u80FD\uFF0C\u8FDC\u5904\u7684\u5927\u91CF\u9897\u7C92\u4E5F\u80FD\u5F62\u6210\u8FDE\u7EED\u5916\u89C2"],answer:1,why:"\u8DDD\u79BB\u548C\u6570\u91CF\u4F1A\u6539\u53D8\u5916\u89C2\u3002\u89E3\u91CA\u7ED3\u6784\u65F6\uFF0C\u8981\u628A\u201C\u770B\u8D77\u6765\u600E\u6837\u201D\u548C\u201C\u5B9E\u9645\u4E0A\u7531\u4EC0\u4E48\u7EC4\u6210\u201D\u5206\u5F00\u3002",related:"jupiter"},{id:"uranus",name:"\u5929\u738B\u661F",kind:"\u51B0\u5DE8\u884C\u661F",color:"#a7d8dd",texture:"uranus",position:[-4,1,-16],radius:.85,tag:"\u4E00\u9897\u51E0\u4E4E\u8EBA\u7740\u8F6C\u7684\u884C\u661F",source:"https://science.nasa.gov/uranus/facts/",scenes:[{title:"\u201C\u8EBA\u7740\u8F6C\u201D\uFF0C\u5230\u5E95\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",text:"\u5929\u738B\u661F\u81EA\u8F6C\u8F74\u503E\u89D2\u7EA6 98\xB0\u3002\u548C\u5927\u591A\u6570\u884C\u661F\u76F8\u6BD4\uFF0C\u5B83\u7684\u8F74\u51E0\u4E4E\u6A2A\u8EBA\uFF0C\u56E0\u6B64\u5728\u7ED5\u592A\u9633\u8FD0\u884C\u65F6\uFF0C\u4F1A\u51FA\u73B0\u5F88\u4E0D\u4E00\u6837\u7684\u5B63\u8282\u5149\u7167\u3002\u201C\u8EBA\u7740\u201D\u662F\u76F8\u5BF9\u8F68\u9053\u5E73\u9762\u7684\u8BF4\u6CD5\uFF0C\u4E0D\u662F\u5B87\u5B99\u91CC\u6709\u4E00\u5F20\u5730\u677F\u3002",control:"\u8C03\u8282\u8F74\u7684\u503E\u659C\u89D2\u5EA6\uFF0C\u6BD4\u8F83\u76F4\u7ACB\u4E0E\u8FD1\u4E4E\u6A2A\u8EBA",experiment:"tilt",observation:"\u6A21\u578B\u5C55\u793A\u8F74\u5411\u5DEE\u522B\uFF0C\u4E0D\u6A21\u62DF\u5B8C\u6574\u516C\u8F6C\u6216\u771F\u5B9E\u5B63\u8282\u6E29\u5EA6\u3002"},{title:"\u84DD\u7EFF\u8272\uFF0C\u4ECE\u54EA\u91CC\u6765\uFF1F",text:"\u5929\u738B\u661F\u5927\u6C14\u542B\u6709\u7532\u70F7\uFF0C\u7532\u70F7\u5438\u6536\u4E00\u90E8\u5206\u7EA2\u5149\uFF0C\u4F7F\u53CD\u5C04\u5230\u6211\u4EEC\u773C\u91CC\u7684\u5149\u504F\u84DD\u7EFF\u8272\u3002\u989C\u8272\u8981\u7ED3\u5408\u5149\u4E0E\u5927\u6C14\u7684\u76F8\u4E92\u4F5C\u7528\u7406\u89E3\uFF0C\u4E0D\u80FD\u770B\u5230\u84DD\u8272\u5C31\u8BA4\u5B9A\u8868\u9762\u6709\u6D77\u6D0B\u3002",control:"\u8F6C\u52A8\u6A21\u578B\uFF0C\u5148\u533A\u5206\u5927\u6C14\u989C\u8272\u4E0E\u5730\u8868\u6750\u6599",experiment:"rotate",observation:"\u989C\u8272\u662F\u89E3\u91CA\u5165\u53E3\uFF1B\u8FD9\u91CC\u7684\u8D34\u56FE\u4E0D\u4EE3\u8868\u53EF\u4F9B\u7740\u9646\u7684\u84DD\u8272\u5730\u9762\u3002"},{title:"\u201C\u51B0\u5DE8\u661F\u201D\uFF0C\u662F\u4E00\u9897\u5DE8\u5927\u51B0\u7403\u5417\uFF1F",text:"\u5929\u738B\u661F\u5185\u90E8\u542B\u6709\u5927\u91CF\u4E0E\u6C34\u3001\u6C28\u3001\u7532\u70F7\u76F8\u5173\u7684\u7269\u8D28\uFF0C\u5904\u4E8E\u9AD8\u6E29\u9AD8\u538B\u73AF\u5883\u3002\u201C\u51B0\u5DE8\u661F\u201D\u662F\u884C\u661F\u5206\u7C7B\u540D\u79F0\uFF0C\u4E0D\u80FD\u6309\u5BB6\u91CC\u51B0\u7BB1\u91CC\u7684\u51B0\u6765\u60F3\u8C61\u6574\u4E2A\u5185\u90E8\u3002\u5206\u7C7B\u8BCD\u662F\u8D77\u70B9\uFF0C\u5177\u4F53\u72B6\u6001\u8FD8\u8981\u7EE7\u7EED\u7814\u7A76\u3002",control:"\u6BD4\u8F83\u5206\u7C7B\u540D\u79F0\u548C\u5B9E\u9645\u5185\u90E8\u6761\u4EF6",experiment:"conditions",observation:"\u8FD9\u91CC\u53EA\u5C55\u793A\u5916\u89C2\u3002\u5185\u90E8\u6784\u6210\u6765\u81EA\u89C2\u6D4B\u4E0E\u6A21\u578B\u7814\u7A76\uFF0C\u65E0\u6CD5\u4ECE\u8868\u9762\u989C\u8272\u76F4\u63A5\u8BFB\u51FA\u3002"}],question:"\u770B\u5230\u5929\u738B\u661F\u504F\u84DD\u7EFF\uFF0C\u80FD\u76F4\u63A5\u63A8\u65AD\u90A3\u91CC\u6709\u5730\u7403\u5F0F\u6D77\u6D0B\u5417\uFF1F",answers:["\u4E0D\u80FD\uFF0C\u8FD8\u8981\u89E3\u91CA\u5927\u6C14\u5982\u4F55\u5438\u6536\u4E0E\u53CD\u5C04\u5149","\u80FD\uFF0C\u84DD\u8272\u53EA\u80FD\u6765\u81EA\u6D77\u6C34"],answer:0,why:"\u5927\u6C14\u4E5F\u80FD\u6539\u53D8\u884C\u661F\u989C\u8272\u3002\u540C\u4E00\u79CD\u989C\u8272\uFF0C\u53EF\u80FD\u5BF9\u5E94\u4E0D\u540C\u6750\u6599\u4E0E\u8FC7\u7A0B\u3002",related:"neptune"},{id:"neptune",name:"\u6D77\u738B\u661F",kind:"\u51B0\u5DE8\u884C\u661F",color:"#568bc9",texture:"neptune",position:[-16,1,-7],radius:.85,tag:"\u8FDC\u79BB\u592A\u9633\uFF0C\u4E3A\u4EC0\u4E48\u4ECD\u6709\u98CE\u66B4\uFF1F",source:"https://science.nasa.gov/neptune/neptune-facts/",scenes:[{title:"\u90A3\u4E48\u8FDC\uFF0C\u9633\u5149\u53D8\u5F97\u600E\u6837\uFF1F",text:"\u6D77\u738B\u661F\u5230\u592A\u9633\u7684\u8DDD\u79BB\u7EA6\u4E3A\u5730\u7403\u7684 30 \u500D\u3002\u9633\u5149\u5411\u56DB\u5468\u4F20\u64AD\uFF0C\u8DDD\u79BB\u589E\u52A0\u65F6\uFF0C\u540C\u6837\u5927\u5C0F\u7684\u533A\u57DF\u63A5\u5230\u7684\u80FD\u91CF\u51CF\u5C11\u3002\u7528\u5230\u8FBE\u5927\u6C14\u9876\u7AEF\u7684\u540C\u7B49\u9762\u79EF\u6765\u6BD4\u8F83\uFF0C\u592A\u9633\u8F90\u7167\u7EA6\u4E3A\u5730\u7403\u7684 1/900\uFF1B\u8FD9\u8FD8\u4E0D\u662F\u5B9E\u9645\u8868\u9762\u6E29\u5EA6\u3002",control:"\u6539\u53D8\u8DDD\u79BB\uFF0C\u6BD4\u8F83\u540C\u7B49\u9762\u79EF\u63A5\u6536\u5230\u7684\u9633\u5149",experiment:"distance",observation:"\u500D\u6570\u5173\u7CFB\u6309\u5E73\u65B9\u53CD\u6BD4\u505A\u8BA1\u7B97\uFF1B\u6CA1\u6709\u52A0\u5165\u53CD\u5C04\u3001\u5927\u6C14\u4E0E\u5185\u90E8\u80FD\u91CF\u3002"},{title:"\u9633\u5149\u5F88\u5F31\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u6709\u5F3A\u98CE\uFF1F",text:"\u6D77\u738B\u661F\u6709\u731B\u70C8\u7684\u98CE\u548C\u53D8\u5316\u7684\u98CE\u66B4\uFF0C\u5E76\u4E14\u5411\u5916\u91CA\u653E\u7684\u80FD\u91CF\u591A\u4E8E\u4ECE\u592A\u9633\u63A5\u6536\u7684\u80FD\u91CF\u3002\u5185\u90E8\u80FD\u91CF\u4E5F\u662F\u7406\u89E3\u5B83\u7684\u5927\u6C14\u6D3B\u52A8\u7684\u7EBF\u7D22\uFF0C\u4F46\u590D\u6742\u5929\u6C14\u4E0D\u80FD\u53EA\u7528\u4E00\u4E2A\u56E0\u7D20\u89E3\u91CA\u3002",control:"\u628A\u5916\u90E8\u9633\u5149\u4E0E\u5185\u90E8\u80FD\u91CF\u5206\u5F00\u770B",experiment:"heat",observation:"\u8FD9\u5F20\u5173\u7CFB\u56FE\u4E0D\u8BA1\u7B97\u98CE\u901F\uFF0C\u4E5F\u4E0D\u6A21\u62DF\u771F\u5B9E\u6C14\u8C61\u3002"},{title:"\u4E00\u5E74\u90A3\u4E48\u957F\uFF0C\u4F1A\u5F71\u54CD\u4EC0\u4E48\uFF1F",text:"\u6D77\u738B\u661F\u7ED5\u592A\u9633\u4E00\u5468\u7EA6 165 \u4E2A\u5730\u7403\u5E74\u3002\u516C\u8F6C\u5468\u671F\u5F88\u957F\uFF0C\u89C2\u6D4B\u5B8C\u6574\u5B63\u8282\u53D8\u5316\u5C31\u9700\u8981\u957F\u671F\u79EF\u7D2F\u8D44\u6599\u3002\u884C\u661F\u7814\u7A76\u4E0D\u53EA\u662F\u4E00\u6B21\u62CD\u7167\uFF0C\u8FD8\u8981\u628A\u4E0D\u540C\u65F6\u95F4\u7684\u8BC1\u636E\u653E\u5728\u4E00\u8D77\u6BD4\u8F83\u3002",control:"\u6BD4\u8F83\u4E00\u5F20\u56FE\u4E0E\u957F\u671F\u89C2\u5BDF",experiment:"clocks",observation:"\u5355\u6B21\u56FE\u50CF\u63D0\u4F9B\u4E00\u4E2A\u65F6\u523B\u7684\u5916\u89C2\uFF0C\u4E0D\u80FD\u5B8C\u6574\u4EE3\u8868\u957F\u671F\u5929\u6C14\u548C\u5B63\u8282\u3002"}],question:"\u6D77\u738B\u661F\u5F88\u8FDC\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u53EA\u7528\u9633\u5149\u89E3\u91CA\u5B83\u7684\u73AF\u5883\uFF1F",answers:["\u56E0\u4E3A\u8DDD\u79BB\u5B8C\u5168\u4E0D\u5F71\u54CD\u80FD\u91CF","\u56E0\u4E3A\u8FD8\u9700\u8981\u8003\u8651\u5185\u90E8\u80FD\u91CF\u3001\u5927\u6C14\u7B49\u6761\u4EF6"],answer:1,why:"\u8DDD\u79BB\u4ECD\u7136\u91CD\u8981\uFF0C\u4F46\u4E0D\u662F\u552F\u4E00\u56E0\u7D20\u3002\u628A\u80FD\u91CF\u6765\u6E90\u4E0E\u80FD\u91CF\u4F20\u9012\u8054\u7CFB\u8D77\u6765\uFF0C\u624D\u80FD\u63D0\u51FA\u66F4\u5B8C\u6574\u7684\u95EE\u9898\u3002",related:"uranus"}],hr={sun:"\u592A\u9633",mercury:"\u6C34\u661F",venus:"\u91D1\u661F",earth:"\u5730\u7403",moon:"\u6708\u7403",mars:"\u706B\u661F",jupiter:"\u6728\u661F",saturn:"\u571F\u661F",uranus:"\u5929\u738B\u661F",neptune:"\u6D77\u738B\u661F"};var ns=class{constructor({models:t,camera:e,onReturn:n}){Object.assign(this,{models:t,camera:e,onReturn:n}),this.active=!1,this.panel=document.createElement("section"),this.panel.id="spatial-explorer",this.panel.hidden=!0,this.panel.innerHTML='<iframe title="\u5929\u4F53\u8FDE\u7EED\u63A2\u7D22" allow="autoplay"></iframe>',this.frame=this.panel.firstChild,document.body.append(this.panel),addEventListener("message",s=>{s.origin!==location.origin||s.source!==this.frame.contentWindow||(s.data?.type==="cosmos-ready"&&(this.pose=s.data.pose,clearTimeout(this.readyTimer),this.resolveReady?.(this.pose),this.resolveReady=null),s.data?.type==="cosmos-return"&&this.onReturn(s.data.pose))})}prepare(t){clearTimeout(this.closeTimer),this.data={id:t},this.look=this.models?.[t]?.position.clone()||new P,this.panel.classList.remove("revealed"),this.panel.hidden=!1,this.pose=null;let e=this.models?.[t]?.children[0]?.rotation.y||0,n=new Promise((s,r)=>{this.resolveReady=s,this.readyTimer=setTimeout(()=>r(new Error("\u8FD1\u666F\u52A0\u8F7D\u8D85\u65F6")),12e3)});return this.frame.src=(t==="saturn"?"../saturn-layout-preview/?embedded=1":"../planet-spatial/?body="+encodeURIComponent(t))+"&v=continuous-23&spin="+e,n}open(t){this.active=!0,this.data={id:t},this.frame.contentWindow.postMessage({type:"cosmos-reveal"},location.origin),this.panel.classList.add("revealed"),document.body.classList.add("spatial-active")}close(){this.active=!1,this.panel.classList.remove("revealed"),document.body.classList.remove("spatial-active"),this.closeTimer=setTimeout(()=>{this.active||(this.panel.hidden=!0,this.frame.src="about:blank")},480)}getLookTarget(){return this.look?.clone()||new P}tick(){}drag(){}zoom(){}};var Yn=i=>i*Math.PI/180,sc=i=>i*180/Math.PI,ur=(i,t)=>(i-t+540)%360-180,An=[{id:"jezero",name:"\u8036\u6CFD\u7F57\u9668\u77F3\u5751",lat:18.4446,lon:77.4509,detail:!0,text:"\u8FD9\u91CC\u662F\u6BC5\u529B\u53F7\u63A2\u6D4B\u8F66\u7684\u7740\u9646\u533A\u57DF\u3002\u7EE7\u7EED\u9760\u8FD1\uFF0C\u80FD\u4ECE\u63A2\u6D4B\u5668\u7684\u771F\u5B9E\u5F71\u50CF\u4E2D\u770B\u901A\u9053\u3001\u5C55\u5F00\u5730\u5F62\u548C\u5CA9\u5C42\u3002"},{id:"olympus",name:"\u5965\u6797\u5339\u65AF\u5C71",lat:18.65,lon:-133.8,text:"\u4F60\u6B63\u770B\u5411\u4E00\u5EA7\u5DE8\u5927\u7684\u706B\u5C71\u3002\u5148\u89C2\u5BDF\u5B83\u5468\u56F4\u7684\u533A\u57DF\uFF0C\u518D\u6BD4\u8F83\u5C71\u9876\u548C\u5468\u56F4\u5730\u9762\u7684\u5F62\u72B6\u3002\u672C\u6837\u4F8B\u8FD9\u91CC\u4ECD\u4F7F\u7528\u5168\u8C8C\u8D34\u56FE\uFF0C\u5C1A\u672A\u63A5\u5165\u8FD1\u666F\u5F71\u50CF\u3002"},{id:"valles",name:"\u6C34\u624B\u5CE1\u8C37",lat:-13.9,lon:-59.2,text:"\u8FD9\u662F\u4E00\u5927\u7247\u5CE1\u8C37\u7CFB\u7EDF\u3002\u6CBF\u7740\u6DF1\u8272\u7684\u957F\u6761\u5F62\u533A\u57DF\u79FB\u52A8\uFF0C\u6BD4\u8F83\u5B83\u4E0E\u65C1\u8FB9\u7684\u5706\u5F62\u5730\u8C8C\u3002\u672C\u6837\u4F8B\u8FD9\u91CC\u4ECD\u4F7F\u7528\u5168\u8C8C\u8D34\u56FE\uFF0C\u5C1A\u672A\u63A5\u5165\u8FD1\u666F\u5F71\u50CF\u3002"},{id:"north",name:"\u5317\u6781\u51B0\u76D6",lat:85,lon:0,text:"\u4F60\u6B63\u770B\u5411\u706B\u661F\u7684\u5317\u6781\u533A\u57DF\u3002\u51B0\u76D6\u4E0D\u662F\u767D\u8272\u6D77\u6D0B\uFF1B\u5B83\u7684\u5F62\u72B6\u548C\u8303\u56F4\u4F1A\u968F\u5B63\u8282\u53D8\u5316\u3002\u672C\u6837\u4F8B\u8FD9\u91CC\u4ECD\u4F7F\u7528\u5168\u8C8C\u8D34\u56FE\uFF0C\u5C1A\u672A\u63A5\u5165\u8FD1\u666F\u5F71\u50CF\u3002"}];function rc(i,t){return new P(Math.cos(Yn(i))*Math.cos(Yn(t)),Math.sin(Yn(i)),-Math.cos(Yn(i))*Math.sin(Yn(t)))}var dr=class{constructor({root:t,onPlace:e,onRegion:n,onView:s}){this.root=t,this.onPlace=e,this.onRegion=n,this.onView=s,this.cameraState={lat:18.4446,lon:77.4509,distance:4.6},this.desired={...this.cameraState},this.selected=null,this.transition=!1,this.raycaster=new Ci,this.labels=new Map,this.scene=new Ei,this.camera=new Me(45,1,.01,80),this.renderer=new Gn({antialias:!0,alpha:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),t.append(this.renderer.domElement),this.ball=new Qt(new Ie(1,80,56),new er({color:13932919,roughness:1})),this.scene.add(this.ball),new Tn().load("textures/mars.jpg",l=>{l.colorSpace=ae,l.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.ball.material.map=l,this.ball.material.color.set(16777215),this.ball.material.needsUpdate=!0}),this.scene.add(new Ri(15324616,1.25)),this.light=new Ai(16772833,2.5),this.scene.add(this.light);let r=new Float32Array(900*3);for(let l=0;l<r.length;l+=3){let c=Math.random()*Math.PI*2,h=Math.random()*2-1,u=Math.sqrt(1-h*h)*23;r[l]=u*Math.cos(c),r[l+1]=h*23,r[l+2]=u*Math.sin(c)}let o=new oe;o.setAttribute("position",new Ne(r,3)),this.scene.add(new wi(o,new Zi({color:10795723,size:.035,transparent:!0,opacity:.55})));let a=new Qt(new Ie(1.025,64,40),new Ae({transparent:!0,side:Te,depthWrite:!1,uniforms:{},vertexShader:"varying vec3 n; varying vec3 v; void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 n;varying vec3 v;void main(){float a=pow(1.-abs(dot(n,v)),3.)*.20;gl_FragColor=vec4(.7,.36,.2,a);}"}));this.scene.add(a),this.markerLayer=document.createElement("div"),this.markerLayer.className="mf-globe-markers",t.append(this.markerLayer);for(let l of An){let c=document.createElement("button");c.dataset.marsPlace=l.id,c.innerHTML=`<i></i><span>${l.name}${l.detail?"<small>\u63A2\u6D4B\u8F66\u6240\u5728\u533A\u57DF</small>":""}</span>`,c.onclick=()=>this.focus(l),this.labels.set(l.id,c),this.markerLayer.append(c)}this.controls(),this.resize()}resize(){let t=this.root.getBoundingClientRect();this.width=t.width,this.height=t.height,this.camera.aspect=Math.max(.1,t.width/t.height),this.camera.updateProjectionMatrix(),this.renderer.setSize(t.width,t.height,!1),this.homeDistance=Math.max(3.7,2.9/this.camera.aspect)}home({fromRegion:t=!1}={}){this.selected=null,this.transition=!1,this.desired={lat:18.4446,lon:77.4509,distance:this.homeDistance},t?this.cameraState={lat:18.4446,lon:77.4509,distance:1.75}:this.cameraState={...this.desired},this.onView?.("home")}pick(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.raycaster.setFromCamera(new Wt((t-n.left)/n.width*2-1,1-(e-n.top)/n.height*2),this.camera);let s=this.raycaster.intersectObject(this.ball)[0];if(!s)return null;let r=s.point.normalize();return{lat:sc(Math.asin(r.y)),lon:sc(Math.atan2(-r.z,r.x))}}focus(t){this.selected=t,this.desired.lat=t.lat,this.desired.lon=t.lon,this.desired.distance=t.detail?1.5:2,this.onPlace(t)}zoom(t,e,n){if(t<1&&Number.isFinite(e)){let s=this.pick(e,n);s&&(this.desired.lat+=(s.lat-this.desired.lat)*.22,this.desired.lon+=ur(s.lon,this.desired.lon)*.22)}this.desired.distance=Ue.clamp(1+(this.desired.distance-1)*t,0+1.08,12),this.onView?.("zoom")}controls(){let t=this.renderer.domElement,e=new Map,n=null,s=0;t.style.touchAction="none",t.addEventListener("pointerdown",r=>{if(t.setPointerCapture(r.pointerId),e.set(r.pointerId,{x:r.clientX,y:r.clientY}),n={x:r.clientX,y:r.clientY,moved:!1},e.size===2){n.moved=!0;let[o,a]=[...e.values()];s=Math.hypot(o.x-a.x,o.y-a.y)}}),t.addEventListener("pointermove",r=>{let o=e.get(r.pointerId);if(!o)return;let a=r.clientX-o.x,l=r.clientY-o.y;if(e.set(r.pointerId,{x:r.clientX,y:r.clientY}),n&&Math.hypot(r.clientX-n.x,r.clientY-n.y)>5&&(n.moved=!0),e.size===2){let[c,h]=[...e.values()],u=Math.hypot(c.x-h.x,c.y-h.y);s>0&&u>0&&this.zoom(s/u),s=u}else this.desired.lon-=a*.24,this.desired.lat=Ue.clamp(this.desired.lat+l*.2,-88,88),this.selected=null,this.onView?.("rotate")}),t.addEventListener("pointerup",r=>{if(n&&!n.moved&&e.size===1){let o=this.pick(r.clientX,r.clientY);if(o){let a=An.find(l=>Math.hypot(ur(l.lon,o.lon)*Math.cos(Yn(o.lat)),l.lat-o.lat)<9);a?this.focus(a):this.onView?.("point",o)}}e.delete(r.pointerId),e.size||(n=null),e.size<2&&(s=0)}),t.addEventListener("pointercancel",r=>{e.delete(r.pointerId),n=null,s=0}),t.addEventListener("wheel",r=>{r.preventDefault(),Math.abs(r.deltaX)>Math.abs(r.deltaY)?(this.desired.lon-=r.deltaX*.15,this.onView?.("rotate")):this.zoom(Math.exp(Ue.clamp(r.deltaY,-300,300)*.002),r.clientX,r.clientY)},{passive:!1})}tick(t){let e=this.cameraState,n=this.desired,s=1-Math.exp(-t*5);e.lat+=(n.lat-e.lat)*s,e.lon+=ur(n.lon,e.lon)*s,e.distance+=(n.distance-e.distance)*s,this.camera.position.copy(rc(e.lat,e.lon).multiplyScalar(e.distance)),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.light.position.copy(this.camera.position).add(new P(-2,2,1));for(let a of An){let l=rc(a.lat,a.lon),c=l.dot(this.camera.position.clone().sub(l))>0,h=l.project(this.camera),u=(h.x*.5+.5)*this.width,f=(-h.y*.5+.5)*this.height,p=this.labels.get(a.id);p.hidden=!c||h.z>1||u<25||u>this.width-25||f<195||f>this.height-80,p.style.left=u+"px",p.style.top=f+"px",p.setAttribute("aria-pressed",String(this.selected?.id===a.id))}this.renderer.render(this.scene,this.camera);let r=An[0],o=Math.hypot(ur(e.lon,r.lon)*Math.cos(Yn(r.lat)),e.lat-r.lat)<7;!this.transition&&o&&e.distance<1.7&&(this.transition=!0,this.onRegion(r)),this.state={latitude:e.lat,longitude:e.lon,distance:e.distance,selected:this.selected?.id||null}}};var ac={orbit:"https://science.nasa.gov/resource/jezero-crater-mars-2020s-landing-site/",rock:"https://science.nasa.gov/photojournal/perseverance-captures-image-of-kodiak/"},fr=[{id:"channel",x:.34,y:.53,name:"\u5F2F\u66F2\u7684\u901A\u9053",heading:"\u901A\u9053\u628A\u4E24\u7247\u5730\u5F62\u8FDE\u8D77\u6765",text:"\u753B\u9762\u91CC\u72ED\u7A84\u3001\u5F2F\u66F2\u7684\u901A\u9053\u8FDE\u63A5\u7740\u4E0B\u6E38\u5C55\u5F00\u7684\u5730\u5F62\u3002\u53E4\u4EE3\u6D41\u6C34\u80FD\u591F\u4FB5\u8680\u901A\u9053\uFF0C\u4E5F\u80FD\u642C\u8FD0\u6750\u6599\u3002\u6CBF\u901A\u9053\u5411\u51FA\u53E3\u62D6\u52A8\uFF0C\u770B\u770B\u6750\u6599\u53EF\u80FD\u5728\u54EA\u91CC\u7559\u4E0B\uFF1B\u4E0B\u4E00\u5904\u5730\u5F62\u80FD\u5E2E\u52A9\u89E3\u91CA\u8FD9\u6761\u8054\u7CFB\u3002"},{id:"fan",x:.57,y:.66,name:"\u5C55\u5F00\u7684\u5730\u5F62",heading:"\u901A\u9053\u51FA\u53E3\uFF0C\u6750\u6599\u5411\u5916\u5C55\u5F00",text:"\u8FD9\u91CC\u662F\u8036\u6CFD\u7F57\u53E4\u4E09\u89D2\u6D32\u533A\u57DF\u7684\u8F68\u9053\u5F71\u50CF\u3002\u6CB3\u6C34\u8FDB\u5165\u6E56\u6CCA\u65F6\uFF0C\u642C\u8FD0\u7684\u6750\u6599\u53EF\u4EE5\u9010\u6E10\u6C89\u79EF\uFF0C\u5F62\u6210\u5C55\u5F00\u7684\u5730\u5F62\u3002\u73B0\u5728\u6CA1\u6709\u4E00\u6761\u6B63\u5728\u6D41\u7684\u6CB3\uFF1A\u6211\u4EEC\u662F\u5728\u8BFB\u8FC7\u53BB\u7559\u4E0B\u7684\u7EBF\u7D22\u3002\u60F3\u770B\u770B\u6750\u6599\u600E\u6837\u505C\u4E0B\u6765\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u8BD5\u6C34\u6D41\u3002"},{id:"crater",x:.52,y:.575,name:"\u4E00\u4E2A\u5706\u5F62\u5751",heading:"\u4F60\u9760\u8FD1\u4E86\u4E00\u5904\u5706\u5F62\u5751",text:"\u5148\u770B\u770B\u5751\u7684\u8FB9\u7F18\uFF0C\u518D\u6BD4\u8F83\u65C1\u8FB9\u76F8\u8FDE\u7684\u901A\u9053\u4E0E\u5C55\u5F00\u5730\u5F62\u3002\u5F62\u72B6\u76F8\u4F3C\u7684\u5730\u65B9\uFF0C\u5F62\u6210\u8FC7\u7A0B\u53EF\u80FD\u4E0D\u540C\uFF1B\u53EF\u4EE5\u628A\u5B83\u4EEC\u653E\u5728\u4E00\u8D77\u89C2\u5BDF\u3002"}],pr=class{constructor({onReturn:t}){this.onReturn=t,this.active=!1,this.mode="orbit",this.camera={x:.5,y:.53,scale:1},this.desired={...this.camera},this.flow=0,this.coarse=!1,this.particles=[],this.deposits=[],this.evidence=new Set,this.visited=new Set,this.learningPhase="ready",this.prediction=null,this.inspected=!1,this.time=0,this.root=document.createElement("section"),this.root.id="mars-fieldwork",this.root.hidden=!0,this.root.innerHTML='<div class="mf-top"><button id="mf-return">\u2190 \u661F\u6D77</button><span id="mf-location">\u706B\u661F / \u8F68\u9053\u89C2\u5BDF</span><button id="mf-reset-view">\u706B\u661F\u5168\u8C8C</button></div><div class="mf-heading"><small id="mf-eyebrow">MARS \xB7 FIELD NOTES</small><h2 id="mf-title">\u4ECE\u592A\u7A7A\uFF0C\u9760\u8FD1\u706B\u661F\u5730\u9762</h2></div><div id="mf-stage"><div id="mf-globe" hidden></div><img id="mf-orbit" alt="NASA \u8F68\u9053\u5F71\u50CF\uFF1A\u8036\u6CFD\u7F57\u9668\u77F3\u5751\u53E4\u4E09\u89D2\u6D32" draggable="false"><img id="mf-rock" alt="\u6BC5\u529B\u53F7\u62CD\u6444\u7684 Kodiak \u5CA9\u5C42\uFF0C\u589E\u5F3A\u8272\u5F71\u50CF" draggable="false" hidden><canvas id="mf-water" hidden></canvas><div id="mf-spots"></div><div id="mf-sediment-spots" hidden><button id="mf-near-sediment">\u70B9\u8FD9\u7247\u9897\u7C92</button><button id="mf-far-sediment">\u70B9\u8FD9\u7247\u9897\u7C92</button></div><div id="mf-crosshair" role="button" tabindex="0" aria-label="\u9760\u8FD1\u89C2\u5BDF\u5CA9\u5C42" hidden><span>\u5CA9\u5C42\u89C2\u5BDF\u533A\u57DF</span></div><span id="mf-image-loading" role="status"></span></div><div class="mf-navigation"><button id="mf-up">\u2191 \u8FD4\u56DE\u4E0A\u4E00\u5C42</button><button id="mf-zoom-out" aria-label="\u7F29\u5C0F">\u2212</button><button id="mf-zoom-in" aria-label="\u653E\u5927">\uFF0B</button></div><div class="mf-readout"><span id="mf-type">\u771F\u5B9E\u8F68\u9053\u5F71\u50CF \xB7 \u7EC4\u5408\u8272\uFF0C\u975E\u8089\u773C\u989C\u8272</span><button id="mf-notebook">\u6211\u7684\u53D1\u73B0 <span id="mf-count">0</span></button></div><div id="mf-console"><p id="mf-message">\u70B9\u4E00\u5904\u5730\u5F62\uFF0C\u9760\u8FD1\u627E\u7EBF\u7D22\u3002\u62D6\u52A8\u753B\u9762\uFF0C\u6EDA\u8F6E\u6216\u53CC\u6307\u653E\u5927\u3002</p><div id="mf-prediction" hidden><span>\u6362\u6210\u5927\u9897\u7C92\uFF0C\u4F60\u731C\u5B83\u4EEC\u4F1A\u505C\u5728\u54EA\u91CC\uFF1F</span><div><button data-mf-predict="near">\u66F4\u9760\u8FD1\u5165\u53E3</button><button data-mf-predict="same">\u5DEE\u4E0D\u591A\u7684\u4F4D\u7F6E</button><button data-mf-predict="far">\u66F4\u8FDC\u7684\u5730\u65B9</button></div></div><div id="mf-scale-visual" hidden></div><div id="mf-actions"></div><p id="mf-experiment-note" hidden>\u5B9A\u6027\u6C89\u79EF\u793A\u610F \xB7 \u6D41\u901F\u3001\u9897\u7C92\u3001\u65F6\u95F4\u672A\u6309\u771F\u5B9E\u6BD4\u4F8B\uFF1B\u4E0D\u91CD\u5EFA\u706B\u661F\u53E4\u6C34\u6587\u3002</p></div><aside id="mf-notes" hidden><button id="mf-notes-close" aria-label="\u5173\u95ED\u7EBF\u7D22\u888B">\xD7</button><h3>\u628A\u521A\u624D\u7684\u53D1\u73B0\u5E26\u56DE\u7167\u7247</h3><div id="mf-notes-content"></div><button id="mf-transfer">\u56DE\u5230\u5730\u9762\uFF0C\u6BD4\u8F83\u53E6\u4E00\u5904\u5F62\u72B6</button></aside><a id="mf-source" target="_blank" rel="noopener">\u5F71\u50CF\u4E0E\u8D44\u6599\uFF1ANASA / JPL-Caltech</a>',document.body.append(this.root),this.$("mf-return").onclick=t,this.$("mf-near-sediment").onclick=()=>this.inspectSediment(!0),this.$("mf-far-sediment").onclick=()=>this.inspectSediment(!1),this.root.querySelectorAll("[data-mf-predict]").forEach(e=>e.onclick=()=>this.predict(e.dataset.mfPredict)),this.$("mf-reset-view").onclick=()=>this.globeView(),this.$("mf-up").onclick=()=>this.up(),this.$("mf-zoom-in").onclick=()=>this.zoom(.7),this.$("mf-zoom-out").onclick=()=>this.zoom(1.45),this.$("mf-notebook").onclick=()=>this.notes(),this.$("mf-notes-close").onclick=()=>this.$("mf-notes").hidden=!0,this.$("mf-transfer").onclick=()=>{this.$("mf-notes").hidden=!0,this.orbit(),this.select("crater")},this.$("mf-orbit").onload=()=>{this.$("mf-image-loading").textContent="",this.resize()},this.$("mf-orbit").onerror=()=>{this.$("mf-image-loading").textContent="\u8F68\u9053\u5F71\u50CF\u672A\u52A0\u8F7D\uFF0C\u70B9\u6B64\u91CD\u8BD5",this.$("mf-image-loading").onclick=()=>this.$("mf-orbit").src="mars-assets/jezero-orbit.jpg?retry="+Date.now()},this.$("mf-rock").onerror=()=>{this.$("mf-image-loading").textContent="\u5CA9\u5C42\u5F71\u50CF\u672A\u52A0\u8F7D\uFF0C\u53EF\u8FD4\u56DE\u8F68\u9053\u91CD\u8BD5"},this.$("mf-rock").onload=()=>this.$("mf-image-loading").textContent="",this.gestures(),addEventListener("resize",()=>{this.active&&this.resize()}),this.keyup=e=>{e.code==="Space"&&this.active&&(this.stopFlow(),e.preventDefault())},addEventListener("keyup",this.keyup),addEventListener("blur",()=>this.stopFlow())}$(t){return this.root.querySelector("#"+t)}button(t,e,n){let s=document.createElement("button");return s.textContent=t,n&&(s.id=n),s.onclick=e,this.$("mf-actions").append(s),s}open(){this.active=!0,this.root.hidden=!1,document.body.classList.add("mars-fieldwork-active"),this.$("mf-image-loading").textContent="\u6B63\u5728\u63A5\u6536\u8F68\u9053\u5F71\u50CF\u2026",this.$("mf-orbit").src="mars-assets/jezero-orbit.jpg",this.globeView(),this.resize(),this.last=performance.now(),requestAnimationFrame(t=>this.tick(t))}close(){this.active=!1,this.holding=!1,this.root.hidden=!0,document.body.classList.remove("mars-fieldwork-active")}message(t){this.$("mf-message").textContent=t,requestAnimationFrame(()=>{this.active&&this.resize()})}globeView({fromRegion:t=!1}={}){this.mode="globe",this.$("mf-zoom-in").hidden=this.$("mf-zoom-out").hidden=!1,this.holding=!1,this.$("mf-notes").hidden=!0,this.root.classList.add("mf-mode-globe"),this.root.classList.remove("mf-rock-close");for(let e of["mf-orbit","mf-rock","mf-water","mf-spots","mf-crosshair","mf-experiment-note","mf-prediction","mf-sediment-spots","mf-up"])this.$(e).hidden=!0;this.$("mf-globe").hidden=!1,this.$("mf-image-loading").textContent="",this.$("mf-location").textContent="\u706B\u661F / \u5168\u8C8C",this.$("mf-title").textContent="\u706B\u661F",this.$("mf-eyebrow").textContent="MARS \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u653E\u5927\u9760\u8FD1",this.$("mf-type").textContent="\u5168\u8C8C\u8D34\u56FE \xB7 \u5730\u70B9\u6807\u8BB0\u4E3A\u533A\u57DF\u53C2\u8003\u4F4D\u7F6E",this.$("mf-source").href="https://science.nasa.gov/mars/facts/",this.$("mf-source").textContent="\u8D44\u6599\uFF1ANASA \xB7 \u5168\u8C8C\u8D34\u56FE\uFF1ASolar System Scope",this.scaleKey=null,this.topic=null,this.$("mf-scale-visual").hidden=!0,this.$("mf-actions").replaceChildren(),this.message("\u8FD9\u5C31\u662F\u706B\u661F\u3002\u62D6\u52A8\u8F6C\u5230\u53E6\u4E00\u9762\uFF0C\u6EDA\u8F6E\u6216\u53CC\u6307\u9760\u8FD1\u4F60\u60F3\u770B\u7684\u5730\u65B9\u3002\u8036\u6CFD\u7F57\u6807\u8BB0\u8FDE\u63A5\u7740\u771F\u5B9E\u8F68\u9053\u5F71\u50CF\u548C\u63A2\u6D4B\u8F66\u7167\u7247\u3002"),this.resize(),this.globe||(this.globe=new dr({root:this.$("mf-globe"),onPlace:e=>{this.scaleKey=null,this.topic=null,this.$("mf-title").textContent=e.name,this.$("mf-location").textContent="\u706B\u661F / "+e.name,this.message(e.text)},onRegion:()=>this.orbit(),onView:(e,n)=>{e==="point"&&this.message("\u4F60\u70B9\u5230\u706B\u661F\u8868\u9762\u7684\u4E00\u5904\u4F4D\u7F6E\u3002\u7EE7\u7EED\u9760\u8FD1\uFF0C\u533A\u57DF\u4ECB\u7ECD\u4F1A\u968F\u7740\u5F53\u524D\u89C6\u89D2\u53D8\u5316\u3002\u5168\u8C8C\u8D34\u56FE\u80FD\u770B\u533A\u57DF\u5916\u89C2\uFF0C\u8036\u6CFD\u7F57\u8FD8\u63A5\u5165\u4E86\u771F\u5B9E\u8FD1\u666F\u3002")}})),this.globe.resize(),this.globe.home({fromRegion:t})}scaleContent(){if(this.mode==="globe"){let t=this.globe.cameraState,e=An.map(r=>({p:r,d:Math.hypot(((r.lon-t.lon+540)%360-180)*Math.cos(t.lat*Math.PI/180),r.lat-t.lat)})).sort((r,o)=>r.d-o.d)[0],n=t.distance>3.1?"global":e.d<32?e.p.id:"terrain";if(n===this.scaleKey)return;this.scaleKey=n,this.topic=null,this.$("mf-scale-visual").hidden=!0,this.$("mf-actions").replaceChildren();let s={global:["\u4E00\u9897\u6BD4\u5730\u7403\u5C0F\u7684\u5CA9\u77F3\u884C\u661F","\u706B\u661F\u76F4\u5F84\u7EA6\u4E3A\u5730\u7403\u7684\u4E00\u534A\uFF0C\u8868\u9762\u6709\u5CA9\u77F3\u3001\u5C18\u571F\u3001\u649E\u51FB\u5751\u548C\u5DE8\u5927\u7684\u706B\u5C71\u3002\u7EA2\u8910\u8272\u4E0E\u542B\u94C1\u6750\u6599\u7684\u6C27\u5316\u6709\u5173\uFF0C\u4E0D\u662F\u4E00\u6574\u9897\u94C1\u7403\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u653E\u5927\uFF1B\u4ECB\u7ECD\u4F1A\u968F\u9760\u8FD1\u7684\u533A\u57DF\u53D8\u5316\u3002"],olympus:["\u4F60\u6B63\u9760\u8FD1\u5965\u6797\u5339\u65AF\u5C71\u533A\u57DF","\u5965\u6797\u5339\u65AF\u5C71\u662F\u4E00\u5EA7\u5DE8\u5927\u7684\u76FE\u72B6\u706B\u5C71\u3002\u7194\u5CA9\u957F\u671F\u5806\u79EF\u80FD\u5F62\u6210\u5BBD\u9614\u7684\u706B\u5C71\u4F53\uFF1B\u201C\u76FE\u72B6\u201D\u63CF\u8FF0\u5B83\u6BD4\u8F83\u5BBD\u7F13\u7684\u5916\u5F62\u3002\u6CBF\u5C71\u5468\u56F4\u79FB\u52A8\uFF0C\u5BF9\u7167\u5B83\u4E0E\u65C1\u8FB9\u5C0F\u5706\u5751\u7684\u5C3A\u5EA6\u3002\u8FD9\u91CC\u662F\u5168\u8C8C\u8D34\u56FE\uFF0C\u4E0D\u80FD\u770B\u5230\u771F\u5B9E\u9AD8\u5EA6\u8D77\u4F0F\u3002"],valles:["\u957F\u6761\u72B6\u7684\u6C34\u624B\u5CE1\u8C37\u533A\u57DF","\u6C34\u624B\u5CE1\u8C37\u662F\u4E00\u5927\u7247\u5CE1\u8C37\u7CFB\u7EDF\uFF0C\u4E0D\u662F\u4E00\u6761\u666E\u901A\u6CB3\u6C9F\u3002\u706B\u661F\u5730\u58F3\u62C9\u4F38\u3001\u65AD\u88C2\u7B49\u8FC7\u7A0B\u53C2\u4E0E\u4E86\u5B83\u7684\u5F62\u6210\u3002\u5BF9\u7167\u957F\u6761\u88C2\u8C37\u548C\u5468\u8FB9\u5706\u5751\uFF0C\u6CE8\u610F\uFF1A\u5730\u5F62\u540D\u79F0\u4E0E\u5F62\u6210\u8FC7\u7A0B\u8981\u4E00\u8D77\u7406\u89E3\u3002\u8FD9\u91CC\u53EA\u5C55\u793A\u5168\u8C8C\u8D34\u56FE\u3002"],north:["\u4F60\u6B63\u9760\u8FD1\u5317\u6781\u533A\u57DF","\u767D\u8272\u6781\u533A\u5305\u542B\u51B0\u3002\u706B\u661F\u5B58\u5728\u6C34\u51B0\uFF0C\u4E5F\u6709\u4E0E\u5B63\u8282\u6709\u5173\u7684\u4E8C\u6C27\u5316\u78B3\u51B0\u3002\u767D\u8272\u4E0D\u662F\u6D77\u6D0B\uFF1B\u8BA4\u8BC6\u6781\u533A\uFF0C\u8981\u5206\u6E05\u6750\u6599\u662F\u4EC0\u4E48\u3001\u5904\u4E8E\u54EA\u79CD\u72B6\u6001\u4EE5\u53CA\u4F55\u65F6\u89C2\u5BDF\u3002\u8FD9\u91CC\u53EA\u5C55\u793A\u5168\u8C8C\u8D34\u56FE\u3002"],jezero:["\u8036\u6CFD\u7F57\uFF1A\u628A\u5927\u5730\u5F62\u4E0E\u8FD1\u666F\u8FDE\u8D77\u6765","\u6BC5\u529B\u53F7\u5728\u8FD9\u91CC\u7740\u9646\u3002\u8F68\u9053\u5F71\u50CF\u8BA9\u6211\u4EEC\u770B\u901A\u9053\u4E0E\u53E4\u4E09\u89D2\u6D32\u7684\u6574\u4F53\u4F4D\u7F6E\uFF0C\u63A2\u6D4B\u8F66\u7167\u7247\u8BA9\u6211\u4EEC\u770B\u5CA9\u77F3\u4E0A\u7684\u5C42\u3002\u7EE7\u7EED\u9760\u8FD1\uFF0C\u753B\u9762\u4F1A\u8FDB\u5165\u5DF2\u7ECF\u63A5\u901A\u7684\u771F\u5B9E\u5C40\u90E8\u5F71\u50CF\u3002"],terrain:["\u4ECE\u5168\u8C8C\u9760\u8FD1\u533A\u57DF\u5730\u5F62","\u4F60\u73B0\u5728\u66F4\u63A5\u8FD1\u706B\u661F\u8868\u9762\u3002\u5706\u5F62\u5730\u8C8C\u53EF\u80FD\u5305\u542B\u649E\u51FB\u5751\uFF0C\u660E\u6697\u4E5F\u4E0E\u6750\u6599\u548C\u5904\u7406\u6709\u5173\uFF0C\u4E0D\u80FD\u53EA\u51ED\u8D34\u56FE\u5224\u65AD\u9AD8\u5EA6\u3002\u8F6C\u5230\u706B\u5C71\u3001\u5CE1\u8C37\u6216\u6781\u533A\u65B9\u5411\uFF0C\u4ECB\u7ECD\u4F1A\u968F\u533A\u57DF\u53D8\u5316\uFF1B\u8036\u6CFD\u7F57\u8FD8\u8FDE\u63A5\u771F\u5B9E\u8FD1\u666F\u3002"]}[n];this.$("mf-location").textContent="\u706B\u661F / "+(n==="global"?"\u5168\u8C8C":n==="terrain"?"\u533A\u57DF\u89C2\u5BDF":e.p.name),this.$("mf-title").textContent=s[0],this.message(s[1]),n==="global"?(this.button("\u4E0E\u5730\u7403\u6BD4\u5927\u5C0F",()=>this.globalTopic("size"),"mf-size"),this.button("\u4E00\u5929\u4E0E\u4E00\u5E74",()=>this.globalTopic("time"),"mf-time"),this.button("\u5730\u9762\u4E0E\u5927\u6C14",()=>this.globalTopic("air"),"mf-air")):n==="jezero"?this.button("\u7EE7\u7EED\u9760\u8FD1\u8FD9\u7247\u5730\u9762",()=>this.globe.focus(An[0]),"mf-near-jezero"):(this.button("\u8F6C\u5230\u53E6\u4E00\u9762",()=>{this.globe.desired.lon+=70,this.scaleKey=null},"mf-turn"),this.button("\u770B\u63A2\u6D4B\u8F66\u6240\u5728\u533A\u57DF",()=>this.globe.focus(An[0]),"mf-jezero"))}else if(this.mode==="orbit"&&this.manualOrbit&&this.camera.scale>1.35){let t=this.camera,e=fr.map(n=>({t:n,d:Math.hypot((n.x-t.x)*this.baseW,(n.y-t.y)*this.baseH)})).sort((n,s)=>n.d-s.d)[0];e.d<Math.min(this.w,this.h)/t.scale*.3&&this.selected!==e.t.id&&this.select(e.t.id,{focus:!1})}}globalTopic(t){this.topic=t;let e={size:"\u628A\u5730\u7403\u4E0E\u706B\u661F\u653E\u5728\u540C\u4E00\u6BD4\u4F8B\u4E0B",time:"\u4E00\u5929\u548C\u4E00\u5E74\uFF0C\u662F\u4E24\u79CD\u4E0D\u540C\u7684\u8FD0\u52A8",air:"\u6709\u5730\u9762\uFF0C\u4E0D\u7B49\u4E8E\u80FD\u76F4\u63A5\u751F\u6D3B"};this.$("mf-title").textContent=e[t],this.$("mf-scale-visual").hidden=t!=="size",t==="size"&&(this.$("mf-scale-visual").innerHTML='<span class="mf-size-earth">\u5730\u7403</span><span class="mf-size-mars">\u706B\u661F</span><small>\u76F4\u5F84\u6BD4\u4F8B\u793A\u610F \xB7 \u706B\u661F\u7EA6\u4E3A\u5730\u7403\u7684 0.53 \u500D</small>',this.message("\u4E24\u9897\u5706\u5F62\u6309\u76F4\u5F84\u6BD4\u4F8B\u753B\u51FA\u3002\u706B\u661F\u76F4\u5F84\u7EA6 6,779 \u5343\u7C73\uFF0C\u5730\u7403\u7EA6 12,742 \u5343\u7C73\u3002\u76F4\u5F84\u7EA6\u4E00\u534A\uFF0C\u4E0D\u80FD\u76F4\u63A5\u63A8\u65AD\u8D28\u91CF\u4E5F\u662F\u4E00\u534A\uFF1A\u8FD8\u8981\u8003\u8651\u4F53\u79EF\u4E0E\u6750\u6599\u5BC6\u5EA6\u3002")),t==="time"&&this.message("\u81EA\u8F6C\u4E00\u5708\u4E0E\u7ED5\u592A\u9633\u516C\u8F6C\u4E00\u5708\u4E0D\u540C\u3002\u706B\u661F\u4E00\u5929\u7EA6 24 \u5C0F\u65F6 39 \u5206\u949F\uFF0C\u4E00\u5E74\u7EA6 687 \u4E2A\u5730\u7403\u65E5\u3002\u4E00\u5929\u4E0E\u5730\u7403\u5F88\u63A5\u8FD1\uFF0C\u4E00\u5E74\u5374\u957F\u5F97\u591A\uFF1B\u79BB\u592A\u9633\u7684\u8DDD\u79BB\u548C\u8F68\u9053\u8FD0\u52A8\u4E5F\u53C2\u4E0E\u51B3\u5B9A\u516C\u8F6C\u5468\u671F\u3002"),t==="air"&&this.message("\u706B\u661F\u5927\u6C14\u7A00\u8584\uFF0C\u4E3B\u8981\u662F\u4E8C\u6C27\u5316\u78B3\u3002\u6709\u5CA9\u77F3\u5730\u9762\u5E76\u4E0D\u610F\u5473\u7740\u4EBA\u80FD\u76F4\u63A5\u547C\u5438\u3002\u6C27\u6C14\u3001\u6C14\u538B\u3001\u6E29\u5EA6\u662F\u4E0D\u540C\u6761\u4EF6\uFF1B\u63A2\u6D4B\u8F66\u80FD\u5DE5\u4F5C\uFF0C\u4E5F\u4E0D\u80FD\u8BF4\u660E\u4EBA\u5728\u540C\u6837\u6761\u4EF6\u4E0B\u5C31\u80FD\u751F\u5B58\u3002")}up(){if(this.mode==="globe")return;if(this.mode==="orbit"){this.globeView({fromRegion:!0});return}let t={...this.desired};this.orbit(),this.desired=t}zoom(t){if(this.mode==="globe"){this.globe.zoom(t);return}if(this.mode==="orbit"){this.manualOrbit=!0;let e=this.desired.scale/t;if(e<.85){this.globeView({fromRegion:!0});return}this.desired.scale=Math.min(4,e)}else if(this.mode==="rock"){let e=(this.rockScale||1)/t;if(e<.9){this.up();return}this.rockScale=Math.min(3,e),this.paintRock()}}orbit(){this.scaleKey=null,this.$("mf-scale-visual").hidden=!0,this.mode="orbit",this.$("mf-zoom-in").hidden=this.$("mf-zoom-out").hidden=!1,this.selected=null,this.root.classList.remove("mf-mode-globe"),this.$("mf-globe").hidden=!0,this.$("mf-up").hidden=!1,this.$("mf-source").textContent="\u5F71\u50CF\u4E0E\u8D44\u6599\uFF1ANASA / JPL-Caltech",this.holding=!1,this.$("mf-location").textContent="\u706B\u661F / \u8036\u6CFD\u7F57 / \u8F68\u9053\u5F71\u50CF",this.$("mf-prediction").hidden=!0,this.$("mf-sediment-spots").hidden=!0,this.$("mf-orbit").hidden=!1,this.$("mf-rock").hidden=!0,this.root.classList.remove("mf-rock-close","mf-layer-lines"),this.$("mf-water").hidden=!0,this.$("mf-crosshair").hidden=!0,this.$("mf-experiment-note").hidden=!0,this.$("mf-spots").hidden=!1,this.$("mf-title").textContent="\u8036\u6CFD\u7F57\u9668\u77F3\u5751\u7684\u5730\u9762",this.$("mf-eyebrow").textContent="MARS \xB7 FIELD NOTES",this.$("mf-type").textContent="\u771F\u5B9E\u8F68\u9053\u5F71\u50CF \xB7 \u7EC4\u5408\u8272\uFF0C\u975E\u8089\u773C\u989C\u8272",this.$("mf-source").href=ac.orbit,this.desired={x:.5,y:.53,scale:1},this.$("mf-actions").replaceChildren(),this.message("\u4F60\u5DF2\u7ECF\u4ECE\u5B8C\u6574\u706B\u661F\uFF0C\u9760\u8FD1\u4E86\u8036\u6CFD\u7F57\u9668\u77F3\u5751\u3002\u8FD9\u662F\u63A2\u6D4B\u5668\u62CD\u4E0B\u7684\u5C40\u90E8\u5730\u9762\uFF1A\u6CBF\u7740\u5F2F\u66F2\u901A\u9053\u627E\u51FA\u53E3\uFF0C\u6216\u70B9\u4E00\u5904\u5730\u5F62\u770B\u770B\u3002\u7F29\u5C0F\u53EF\u4EE5\u56DE\u5230\u5B8C\u6574\u706B\u661F\u3002"),this.$("mf-spots").replaceChildren(...fr.map(t=>{let e=document.createElement("button");return e.dataset.mfSpot=t.id,e.innerHTML=`<i></i><span>${t.name}</span>`,e.onclick=()=>this.select(t.id),e})),this.resize()}select(t,{focus:e=!0}={}){e&&(this.manualOrbit=!1);let n=fr.find(s=>s.id===t);n&&(this.selected=t,this.visited.add(t),this.$("mf-title").textContent=n.heading,e&&(this.desired={x:n.x,y:n.y,scale:1.75}),this.message(t==="crater"&&this.evidence.has("deposit")?"\u4F60\u521A\u624D\u770B\u8FC7\u6C34\u6D41\u7559\u4E0B\u6750\u6599\uFF0C\u73B0\u5728\u518D\u770B\u8FD9\u4E2A\u5706\u5751\u3002\u649E\u51FB\u4E5F\u4F1A\u7559\u4E0B\u5706\u5F62\u5751\uFF1B\u4E0D\u80FD\u53EA\u56E0\u4E3A\u5B83\u50CF\u76C6\uFF0C\u5C31\u5224\u65AD\u8FD9\u91CC\u66FE\u7ECF\u6709\u6E56\u3002\u518D\u6BD4\u8F83\u65C1\u8FB9\u76F8\u8FDE\u7684\u901A\u9053\u548C\u5C55\u5F00\u5730\u5F62\u3002":n.text),this.$("mf-actions").replaceChildren(),t==="channel"?(this.button("\u6CBF\u901A\u9053\u8D70\u5230\u51FA\u53E3",()=>this.select("fan"),"mf-follow-channel"),this.button("\u8BD5\u8BD5\u6C34\u5E26\u7740\u6C99\u6D41\u52A8",()=>this.experiment(),"mf-open-experiment")):t==="fan"?(this.button("\u8BD5\u8BD5\u6C34\u5E26\u7740\u6C99\u6D41\u52A8",()=>this.experiment(),"mf-open-experiment"),this.button("\u770B\u63A2\u6D4B\u8F66\u62CD\u7684\u5CA9\u77F3",()=>this.rock(),"mf-open-rock")):(this.button("\u6BD4\u8F83\u65C1\u8FB9\u7684\u5C55\u5F00\u5730\u5F62",()=>this.select("fan"),"mf-compare-landforms"),this.button("\u770B\u63A2\u6D4B\u8F66\u62CD\u7684\u5CA9\u77F3",()=>this.rock(),"mf-open-rock")),window.MARS_FIELDWORK={mode:this.mode,selected:t,evidence:[...this.evidence]})}experiment(){this.$("mf-scale-visual").hidden=!0,this.mode="experiment",this.$("mf-zoom-in").hidden=this.$("mf-zoom-out").hidden=!0,this.holding=!1,this.learningPhase=this.particles.length||this.deposits.length?"settling":"ready",this.$("mf-location").textContent="\u706B\u661F / \u8036\u6CFD\u7F57 / \u6C34\u6C99\u5B9E\u9A8C",this.$("mf-orbit").hidden=!0,this.$("mf-rock").hidden=!0,this.$("mf-water").hidden=!1,this.$("mf-spots").hidden=!0,this.$("mf-crosshair").hidden=!0,this.$("mf-sediment-spots").hidden=!0,this.$("mf-prediction").hidden=!0,this.$("mf-experiment-note").hidden=!1,this.$("mf-eyebrow").textContent="WATER & SEDIMENT \xB7 TRY IT",this.$("mf-title").textContent="\u8BA9\u6C34\u5E26\u7740\u6C99\uFF0C\u6D41\u8FC7\u8FD9\u91CC",this.$("mf-type").textContent="\u7B80\u5316\u5B9E\u9A8C \xB7 \u7528\u6765\u7406\u89E3\u6750\u6599\u600E\u6837\u79FB\u52A8",this.message(this.deposits.length?"\u521A\u624D\u7559\u4E0B\u7684\u6750\u6599\u8FD8\u5728\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u653E\u6C34\u3001\u6362\u6750\u6599\uFF0C\u6216\u6E05\u7A7A\u753B\u9762\u91CD\u65B0\u8BD5\u4E00\u6B21\u3002":"\u4E3A\u4E86\u7406\u89E3\u521A\u624D\u7684\u5C55\u5F00\u5730\u5F62\uFF0C\u6211\u4EEC\u5148\u8BD5\u4E00\u6BB5\u6C34\u6D41\u3002\u6309\u4F4F\u300C\u653E\u6C34\u300D\uFF0C\u8BA9\u7EC6\u6C99\u968F\u6C34\u8D70\uFF1B\u677E\u5F00\u6309\u94AE\uFF0C\u505C\u6B62\u4F9B\u6C34\u3002"),this.$("mf-actions").replaceChildren();let t=this.button("\u6309\u4F4F\u653E\u6C34",()=>{},"mf-flow");t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),this.startFlow(),e.preventDefault()},t.onpointerup=t.onpointercancel=()=>this.stopFlow(),t.onkeydown=e=>{(e.code==="Space"||e.code==="Enter")&&(this.startFlow(),e.preventDefault())},t.onkeyup=()=>this.stopFlow(),this.button(this.coarse?"\u6362\u6210\u7EC6\u6C99":"\u6362\u6210\u5927\u9897\u7C92",()=>this.changeGrain(),"mf-grain"),this.$("mf-grain").hidden=!this.evidence.has("deposit"),this.button("\u91CD\u65B0\u8BD5\u4E00\u6B21",()=>{this.holding=!1,this.particles=[],this.deposits=[],this.flow=0,this.time=0,this.coarse=!1,this.learningPhase="ready",this.prediction=null,this.inspected=!1,this.$("mf-title").textContent="\u8BA9\u6C34\u5E26\u7740\u6C99\uFF0C\u6D41\u8FC7\u8FD9\u91CC",this.$("mf-grain").textContent="\u6362\u6210\u5927\u9897\u7C92",this.$("mf-grain").hidden=!0,this.$("mf-prediction").hidden=!0,this.$("mf-sediment-spots").hidden=!0,this.message("\u753B\u9762\u5DF2\u7ECF\u6E05\u7A7A\u3002\u5148\u8BA9\u7EC6\u6C99\u6D41\u8FC7\u53BB\uFF0C\u505C\u6B62\u4F9B\u6C34\u540E\uFF0C\u518D\u6BD4\u8F83\u5927\u9897\u7C92\u3002")},"mf-clear"),this.button("\u56DE\u5230\u63A2\u6D4B\u8F66\u7684\u7167\u7247",()=>this.rock(),"mf-show-rock"),this.resize()}startFlow(){this.holding||(this.holding=!0,this.learningPhase="pouring",this.$("mf-prediction").hidden=!0,this.$("mf-sediment-spots").hidden=!0,this.$("mf-title").textContent=this.coarse?"\u8BA9\u5927\u9897\u7C92\u4E5F\u8D70\u4E00\u904D":"\u6C34\u6B63\u5E26\u7740\u7EC6\u6C99\u79FB\u52A8",this.$("mf-flow").textContent="\u677E\u5F00\u505C\u6B62\u4F9B\u6C34",this.message(this.coarse?"\u4F60\u6362\u4E0A\u4E86\u5927\u9897\u7C92\u3002\u7528\u540C\u4E00\u6BB5\u793A\u610F\u6C34\u6D41\uFF0C\u770B\u770B\u5B83\u4EEC\u505C\u7559\u7684\u4F4D\u7F6E\uFF1B\u677E\u5F00\u6309\u94AE\u540E\u518D\u89C2\u5BDF\u3002":"\u4F60\u6B63\u5728\u628A\u7EC6\u6C99\u9001\u8FDB\u6C34\u6D41\u3002\u6CBF\u7740\u79FB\u52A8\u7684\u9897\u7C92\u770B\u5411\u5F00\u9614\u6C34\u9762\uFF0C\u677E\u5F00\u6309\u94AE\u540E\u518D\u770B\u770B\u3002"))}stopFlow(){this.holding&&(this.holding=!1,this.learningPhase="settling",this.$("mf-flow").textContent="\u6309\u4F4F\u653E\u6C34",this.$("mf-title").textContent="\u505C\u6B62\u4F9B\u6C34\uFF0C\u770B\u770B\u7559\u4E0B\u7684\u6750\u6599",this.message("\u4F60\u677E\u5F00\u4E86\u6309\u94AE\uFF0C\u5165\u53E3\u4E0D\u518D\u4F9B\u6C34\u3002\u5DF2\u7ECF\u8FDB\u5165\u6C34\u9762\u7684\u6C99\u7C92\u8FD8\u5728\u79FB\u52A8\u548C\u6C89\u964D\uFF0C\u7559\u4E0B\u7684\u4F4D\u7F6E\u4F1A\u8D8A\u6765\u8D8A\u6E05\u695A\u3002"))}changeGrain(){this.coarse=!this.coarse,this.$("mf-grain").textContent=this.coarse?"\u6362\u6210\u7EC6\u6C99":"\u6362\u6210\u5927\u9897\u7C92",this.$("mf-prediction").hidden=!0,this.learningPhase="ready",this.message(this.coarse?"\u73B0\u5728\u6362\u6210\u5927\u9897\u7C92\u3002\u518D\u6309\u4F4F\u653E\u6C34\uFF0C\u770B\u770B\u5B83\u4EEC\u4F1A\u4E0D\u4F1A\u548C\u521A\u624D\u7684\u7EC6\u6C99\u505C\u5728\u540C\u4E00\u7247\u5730\u65B9\u3002":"\u73B0\u5728\u6362\u56DE\u7EC6\u6C99\u3002\u518D\u653E\u4E00\u6B21\u6C34\uFF0C\u5BF9\u7167\u5DF2\u7ECF\u7559\u4E0B\u7684\u5927\u9897\u7C92\u3002")}predict(t){this.prediction=t,this.coarse=!0,this.$("mf-grain").textContent="\u6362\u6210\u7EC6\u6C99",this.$("mf-prediction").hidden=!0,this.learningPhase="ready";let e={near:"\u66F4\u9760\u8FD1\u5165\u53E3",same:"\u5DEE\u4E0D\u591A\u7684\u4F4D\u7F6E",far:"\u66F4\u8FDC\u7684\u5730\u65B9"}[t];this.$("mf-title").textContent="\u5E26\u7740\u4F60\u7684\u731C\u60F3\uFF0C\u518D\u8BD5\u4E00\u6B21",this.message("\u4F60\u731C\u5927\u9897\u7C92\u4F1A\u505C\u5728"+e+"\u3002\u5DF2\u7ECF\u6362\u597D\u6750\u6599\uFF0C\u518D\u6309\u4F4F\u653E\u6C34\uFF0C\u7528\u753B\u9762\u68C0\u67E5\u8FD9\u4E2A\u731C\u60F3\u3002")}collect(t){this.evidence.has(t)||(this.evidence.add(t),this.$("mf-count").textContent=this.evidence.size)}guideExperiment(){if(this.holding||this.learningPhase!=="settling")return;let t=this.deposits.filter(n=>!n.coarse),e=this.deposits.filter(n=>n.coarse);t.length>8&&e.length>8?(this.learningPhase="compare",this.$("mf-title").textContent="\u4E24\u6B21\u7559\u4E0B\u7684\u6750\u6599\uFF0C\u5DF2\u7ECF\u80FD\u6BD4\u8F83\u4E86",this.$("mf-grain").hidden=!1,this.$("mf-prediction").hidden=!0,this.$("mf-sediment-spots").hidden=!1,this.message("\u4F60\u5DF2\u7ECF\u653E\u8FC7\u4E24\u79CD\u9897\u7C92\u3002\u70B9\u4E00\u7247\u7559\u4E0B\u7684\u6750\u6599\uFF0C\u770B\u770B\u5B83\u662F\u54EA\u4E00\u7C7B\u3001\u505C\u5728\u4EC0\u4E48\u4F4D\u7F6E\u3002")):t.length>8&&(this.learningPhase="predict",this.collect("deposit"),this.$("mf-title").textContent="\u7EC6\u6C99\u5DF2\u7ECF\u7559\u4E0B\u6765\u4E86",this.$("mf-grain").hidden=!1,this.$("mf-prediction").hidden=!1,this.message("\u4F60\u505C\u6B62\u4F9B\u6C34\u540E\uFF0C\u7EC6\u6C99\u4ECD\u7559\u5728\u6C34\u9762\u4E0B\u3002\u73B0\u5728\u6362\u4E00\u79CD\u5927\u5C0F\u518D\u8BD5\uFF1A\u53EF\u4EE5\u5148\u731C\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6362\u6750\u6599\u64CD\u4F5C\u3002"))}inspectSediment(t){this.inspected=t?"coarse":"fine",this.collect("comparison"),this.learningPhase="explained",this.$("mf-title").textContent=t?"\u4F60\u70B9\u5230\u7684\u662F\u5927\u9897\u7C92":"\u4F60\u70B9\u5230\u7684\u662F\u7EC6\u6C99";let e=this.prediction?this.prediction==="near"?"\u8FD9\u4E0E\u4F60\u521A\u624D\u7684\u731C\u60F3\u4E00\u81F4\u3002":"\u8FD9\u4E0E\u4F60\u521A\u624D\u7684\u731C\u60F3\u4E0D\u540C\u3002":"";this.message((t?"\u8FD9\u6B21\u5927\u9897\u7C92\u5806\u5728\u5165\u53E3\u8F83\u8FD1\u7684\u4F4D\u7F6E\u3002":"\u8FD9\u6B21\u7EC6\u6C99\u88AB\u5E26\u5230\u4E86\u8F83\u8FDC\u7684\u5730\u65B9\u3002")+e+"\u5728\u540C\u6837\u7684\u793A\u610F\u6C34\u6D41\u91CC\uFF0C\u5927\u9897\u7C92\u4E0B\u6C89\u8F83\u5FEB\uFF0C\u7EC6\u6C99\u80FD\u88AB\u5E26\u5F97\u66F4\u8FDC\u3002\u6750\u6599\u8FD9\u6837\u7559\u4E0B\u6765\uFF0C\u53EB\u6C89\u79EF\u3002"),this.$("mf-show-rock").textContent="\u5E26\u7740\u53D1\u73B0\uFF0C\u56DE\u5230\u7167\u7247"}rock(){this.$("mf-scale-visual").hidden=!0,this.mode="rock",this.$("mf-zoom-in").hidden=this.$("mf-zoom-out").hidden=!1,this.rockPan={x:0,y:0},this.rockScale=1,this.$("mf-rock").style.transform="scale(1)",this.holding=!1,this.root.classList.remove("mf-rock-close","mf-layer-lines"),this.$("mf-location").textContent="\u706B\u661F / \u8036\u6CFD\u7F57 / Kodiak \u5CA9\u77F3",this.$("mf-prediction").hidden=!0,this.$("mf-sediment-spots").hidden=!0,this.$("mf-orbit").hidden=!0,this.$("mf-water").hidden=!0,this.$("mf-spots").hidden=!0,this.$("mf-rock").hidden=!1,this.$("mf-crosshair").hidden=!1,this.$("mf-experiment-note").hidden=!0,this.$("mf-rock").src="mars-assets/kodiak.jpg",this.$("mf-eyebrow").textContent="PERSEVERANCE \xB7 MASTCAM-Z",this.$("mf-title").textContent="\u9760\u8FD1\u63A2\u6D4B\u8F66\u62CD\u4E0B\u7684\u8FD9\u5757\u5CA9\u77F3",this.$("mf-type").textContent="\u771F\u5B9E\u6BC5\u529B\u53F7\u7167\u7247 \xB7 \u589E\u5F3A\u8272",this.$("mf-source").href=ac.rock,this.message(this.evidence.has("deposit")?"\u521A\u624D\uFF0C\u4F60\u770B\u5230\u6C34\u628A\u6750\u6599\u5E26\u8D70\u3001\u53C8\u7559\u4E0B\u6750\u6599\u3002\u73B0\u5728\u56DE\u5230\u771F\u5B9E\u706B\u661F\u7167\u7247\uFF1A\u8FD9\u5757\u53EB Kodiak \u7684\u5CA9\u77F3\u4E0A\uFF0C\u6709\u53E0\u5728\u4E00\u8D77\u7684\u5C42\u3002\u70B9\u89C2\u5BDF\u6846\uFF0C\u9760\u8FD1\u8FD9\u4E9B\u5C42\u3002":"\u8FD9\u662F\u6BC5\u529B\u53F7\u63A2\u6D4B\u8F66\u62CD\u5230\u7684 Kodiak \u5CA9\u77F3\u3002\u5148\u770B\u770B\u5CA9\u77F3\u4E0A\u53E0\u5728\u4E00\u8D77\u7684\u5C42\uFF1B\u70B9\u89C2\u5BDF\u6846\uFF0C\u628A\u8FD9\u7247\u533A\u57DF\u770B\u6E05\u695A\u3002"),this.$("mf-actions").replaceChildren(),this.button("\u9760\u8FD1\u770B\u5CA9\u5C42",()=>this.inspectRock(),"mf-trace"),this.$("mf-crosshair").onclick=()=>this.inspectRock(),this.$("mf-crosshair").onkeydown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.inspectRock())},this.button(this.evidence.has("deposit")?"\u518D\u5BF9\u7167\u6C34\u548C\u6C99\u7684\u5B9E\u9A8C":"\u8BD5\u8BD5\u6C34\u600E\u6837\u7559\u4E0B\u6750\u6599",()=>this.experiment(),"mf-compare"),this.button("\u6574\u7406\u6211\u7684\u89E3\u91CA",()=>this.notes(),"mf-explain")}inspectRock(){this.rockScale=1.75,this.paintRock(),this.root.classList.add("mf-rock-close"),this.root.classList.remove("mf-layer-lines"),this.collect("layers"),this.$("mf-title").textContent="\u4F60\u9760\u8FD1\u4E86\u5CA9\u77F3\u4E0A\u7684\u5C42",this.message(this.evidence.has("comparison")?"\u4F60\u5728\u5B9E\u9A8C\u91CC\u770B\u5230\u9897\u7C92\u53EF\u4EE5\u6C89\u79EF\u3002\u5CA9\u77F3\u4E0A\u7684\u5C42\uFF0C\u4E5F\u80FD\u5E2E\u52A9\u7814\u7A76\u6750\u6599\u600E\u6837\u9010\u6E10\u7559\u4E0B\u3001\u73AF\u5883\u600E\u6837\u53D8\u5316\uFF1B\u79D1\u5B66\u5BB6\u8FD8\u7ED3\u5408\u77FF\u7269\u7B49\u8BC1\u636E\u6765\u5224\u65AD\u3002\u76F8\u4F3C\u7684\u5916\u89C2\uFF0C\u4E0D\u80FD\u76F4\u63A5\u8BC1\u660E\u6210\u56E0\u76F8\u540C\u3002":"\u4F60\u770B\u5230\u5CA9\u77F3\u4E0A\u6709\u53E0\u5728\u4E00\u8D77\u7684\u5C42\u3002\u8FD9\u662F\u7814\u7A76\u53E4\u4EE3\u73AF\u5883\u7684\u7EBF\u7D22\u3002\u53EF\u4EE5\u518D\u8BD5\u4E00\u6B21\u6C34\u548C\u6C99\u7684\u5B9E\u9A8C\uFF0C\u7406\u89E3\u6750\u6599\u600E\u6837\u7559\u4E0B\uFF1B\u7167\u7247\u7684\u771F\u5B9E\u6210\u56E0\u4ECD\u9700\u8981\u5176\u4ED6\u8BC1\u636E\u3002")}notes(){this.$("mf-notes").hidden=!1;let t={deposit:"\u4F60\u505C\u6B62\u4F9B\u6C34\u540E\uFF0C\u7EC6\u6C99\u4ECD\u7136\u7559\u4E0B\uFF1A\u6750\u6599\u53EF\u4EE5\u5F62\u6210\u6C89\u79EF\u3002",comparison:"\u540C\u4E00\u6BB5\u793A\u610F\u6C34\u6D41\u91CC\uFF0C\u5927\u9897\u7C92\u6C89\u964D\u8F83\u5FEB\uFF0C\u505C\u5F97\u8F83\u8FD1\uFF1B\u7EC6\u6C99\u88AB\u5E26\u5F97\u66F4\u8FDC\u3002",layers:"\u771F\u5B9E\u7167\u7247\u91CC\u6709\u5C42\u72B6\u5CA9\u77F3\uFF1A\u79D1\u5B66\u5BB6\u7528\u5B83\u7814\u7A76\u53E4\u4EE3\u6C89\u79EF\u548C\u73AF\u5883\u53D8\u5316\u3002"};this.$("mf-notes-content").replaceChildren();for(let n of this.evidence){let s=document.createElement("p");s.textContent=t[n],this.$("mf-notes-content").append(s)}let e=document.createElement("p");e.className="mf-conclusion",e.textContent=this.evidence.size?"\u8FD9\u662F\u4F60\u521A\u624D\u64CD\u4F5C\u548C\u89C2\u5BDF\u5F97\u5230\u7684\u8054\u7CFB\u3002\u5B9E\u9A8C\u5E2E\u52A9\u7406\u89E3\u6C89\u79EF\u673A\u5236\uFF0C\u771F\u5B9E\u706B\u661F\u8FD8\u9700\u8981\u5730\u5F62\u3001\u77FF\u7269\u7B49\u8BC1\u636E\u5171\u540C\u5224\u65AD\u3002\u8FC7\u53BB\u6709\u6C34\uFF0C\u4E5F\u4E0D\u76F4\u63A5\u8BC1\u660E\u6709\u751F\u547D\u3002":"\u4F60\u5DF2\u7ECF\u53EF\u4EE5\u81EA\u7531\u9760\u8FD1\u5730\u5F62\u3002\u8BD5\u7740\u653E\u4E00\u6B21\u6C34\uFF0C\u6216\u89C2\u5BDF\u7167\u7247\u91CC\u7684\u5CA9\u5C42\uFF0C\u518D\u628A\u4EB2\u773C\u770B\u5230\u7684\u53D1\u73B0\u8BB0\u5728\u8FD9\u91CC\u3002",this.$("mf-notes-content").append(e)}resize(){this.root.style.setProperty("--mf-console-height",Math.max(110,this.$("mf-console").offsetHeight+48)+"px");let t=this.$("mf-stage").getBoundingClientRect();this.w=t.width,this.h=t.height,this.baseW=Math.max(this.w,this.h*1865/1495),this.baseH=this.baseW*1495/1865;let e=this.$("mf-water"),n=Math.min(devicePixelRatio,2);e.width=Math.round(this.w*n),e.height=Math.round(this.h*n),this.ctx=e.getContext("2d"),this.ctx.setTransform(n,0,0,n,0,0),this.paintOrbit(),this.mode==="globe"&&this.globe&&this.globe.resize()}paintOrbit(){let t=this.camera,e=this.baseW*t.scale,n=this.baseH*t.scale,s=this.w/2-t.x*e,r=this.h/2-t.y*n,o=this.$("mf-orbit");Object.assign(o.style,{width:e+"px",height:n+"px",left:s+"px",top:r+"px"}),this.root.querySelectorAll("[data-mf-spot]").forEach(a=>{let l=fr.find(c=>c.id===a.dataset.mfSpot);a.style.left=s+l.x*e+"px",a.style.top=r+l.y*n+"px"})}paintRock(){let t=this.rockPan||{x:0,y:0};this.$("mf-rock").style.transform="translate("+t.x+"px,"+t.y+"px) scale("+this.rockScale+")"}gestures(){let t=this.$("mf-stage"),e=new Map,n=0;t.addEventListener("pointerdown",r=>{if(!(r.target.closest("button,[role=button]")||!["orbit","rock"].includes(this.mode))&&(t.setPointerCapture(r.pointerId),e.set(r.pointerId,{x:r.clientX,y:r.clientY}),e.size===2)){let[o,a]=[...e.values()];n=Math.hypot(o.x-a.x,o.y-a.y)}}),t.addEventListener("pointermove",r=>{let o=e.get(r.pointerId);if(!o||!["orbit","rock"].includes(this.mode))return;let a=r.clientX-o.x,l=r.clientY-o.y;if(e.set(r.pointerId,{x:r.clientX,y:r.clientY}),e.size===2){let[c,h]=[...e.values()],u=Math.hypot(c.x-h.x,c.y-h.y);n>0&&this.zoom(n/u),n=u}else if(this.mode==="orbit")this.manualOrbit=!0,this.desired.x=Math.max(.05,Math.min(.95,this.desired.x-a/(this.baseW*this.camera.scale))),this.desired.y=Math.max(.05,Math.min(.95,this.desired.y-l/(this.baseH*this.camera.scale)));else if(this.mode==="rock"){let c=this.w*(this.rockScale-1)/2,h=this.h*(this.rockScale-1)/2;this.rockPan.x=Math.max(-c,Math.min(c,this.rockPan.x+a)),this.rockPan.y=Math.max(-h,Math.min(h,this.rockPan.y+l)),this.paintRock()}});let s=r=>{e.delete(r.pointerId),n=0};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("wheel",r=>{["orbit","rock"].includes(this.mode)&&(r.preventDefault(),this.zoom(Math.exp(r.deltaY*.0015)))},{passive:!1})}paintWater(t){let e=this.ctx,n=this.w,s=this.h;e.clearRect(0,0,n,s);let r=e.createLinearGradient(0,0,n,s);r.addColorStop(0,"#111e29"),r.addColorStop(1,"#07141f"),e.fillStyle=r,e.fillRect(0,0,n,s),e.save(),e.scale(n,s);let o=e.createLinearGradient(0,0,1,0);o.addColorStop(0,"#66554b"),o.addColorStop(.5,"#322c2a"),e.fillStyle=o,e.beginPath(),e.moveTo(0,0),e.lineTo(.34,0),e.lineTo(.45,.35),e.lineTo(.45,.65),e.lineTo(.34,1),e.lineTo(0,1),e.fill(),e.fillStyle="#245065",e.beginPath(),e.moveTo(0,.46),e.bezierCurveTo(.14,.3,.3,.65,.45,.5),e.lineTo(.45,.59),e.bezierCurveTo(.3,.75,.14,.44,0,.55),e.fill(),e.strokeStyle="#7bc3d93a",e.lineWidth=.002;for(let a=0;a<7;a++)e.beginPath(),e.ellipse(.45,.55,.15+a*.06,.1+a*.05,0,-1.4,1.4),e.stroke();if(e.restore(),this.holding){this.time+=t;let a=Math.max(1,Math.round(t*70));for(let l=0;l<a;l++)this.particles.push({t:0,coarse:this.coarse,spread:Math.random()*2-1,travel:.12+Math.random()*.65})}this.flow+=(Number(this.holding)-this.flow)*Math.min(1,t*4);for(let a of this.particles){a.t+=t*(this.holding?1.35:.85);let l=a.t;if(l<1)a.x=l*.45,a.y=.51+Math.sin(l*Math.PI*2)*.045;else{let c=l-1;a.x=.45+c*.21,a.y=.55+a.spread*c*.14,c>(a.coarse?a.travel:a.travel+.85)&&(this.deposits.push({x:a.x,y:a.y,coarse:a.coarse}),a.done=!0)}e.fillStyle=a.coarse?"#d7a96e":"#c5d5bc",e.beginPath(),e.arc(a.x*n,a.y*s,a.coarse?3.5:1.8,0,Math.PI*2),e.fill()}this.particles=this.particles.filter(a=>!a.done).slice(-900),this.deposits=this.deposits.slice(-1800);for(let a of this.deposits)e.fillStyle=a.coarse?"#e0ac64b0":"#c0d7bb8f",e.beginPath(),e.arc(a.x*n,a.y*s,a.coarse?3.5:2,0,Math.PI*2),e.fill();if(e.fillStyle="#adcfde",e.font="13px -apple-system, sans-serif",e.fillText("\u6C34\u548C\u6750\u6599\u4ECE\u8FD9\u91CC\u8FDB\u5165",n*.06,s*.35),e.fillText("\u5F00\u9614\u6C34\u9762",n*.66,s*.25),e.font="12px -apple-system, sans-serif",e.fillStyle="#c1ac8e",e.fillText(this.evidence.has("comparison")?"\u5927\u9897\u7C92 \xB7 \u8FD9\u6B21\u505C\u5F97\u8F83\u8FD1":"\u6A59\u8272\uFF1A\u5927\u9897\u7C92",n*.46,s*.77),e.fillStyle="#b4cbbb",e.fillText(this.evidence.has("comparison")?"\u7EC6\u6C99 \xB7 \u8FD9\u6B21\u88AB\u5E26\u5F97\u66F4\u8FDC":"\u6D45\u8272\uFF1A\u7EC6\u6C99",n*.58,s*.88),!this.$("mf-sediment-spots").hidden)for(let[a,l]of[["mf-near-sediment",!0],["mf-far-sediment",!1]]){let c=this.deposits.filter(p=>p.coarse===l);if(!c.length)continue;let h=c.reduce((p,g)=>p+g.x,0)/c.length,u=c.reduce((p,g)=>p+g.y,0)/c.length,f=this.$(a);f.style.left=h*n+"px",f.style.top=u*s+(this.w<750?l?48:100:55)+"px"}}tick(t){if(!this.active)return;let e=Math.min((t-this.last)/1e3,.05);if(this.last=t,this.mode==="globe"&&(this.globe.tick(e),this.scaleContent()),this.mode==="orbit"){let n=1-Math.exp(-e*6);for(let s of["x","y","scale"])this.camera[s]+=(this.desired[s]-this.camera[s])*n;this.paintOrbit(),this.scaleContent()}this.mode==="experiment"&&(this.paintWater(e),this.guideExperiment()),window.MARS_FIELDWORK={mode:this.mode,globe:this.globe?.state,scaleContext:this.scaleKey,topic:this.topic,selected:this.selected,evidence:[...this.evidence],learningPhase:this.learningPhase,prediction:this.prediction,inspected:this.inspected,holding:!!this.holding,particles:this.particles.length,deposits:this.deposits.length,coarse:this.coarse,scale:this.camera.scale,settling:{coarse:this.deposits.filter(n=>n.coarse).map(n=>n.x),fine:this.deposits.filter(n=>!n.coarse).map(n=>n.x)}},requestAnimationFrame(n=>this.tick(n))}};var Vt=i=>document.getElementById(i),Rn=Vt("universe"),ke=()=>innerWidth<750,is=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,De;try{De=new Gn({antialias:!0,powerPreference:"high-performance"})}catch{Vt("error").hidden=!1}if(De){let r=function(w,H,j,tt=1,pt=!1){let mt=new oe;mt.setAttribute("position",new te(w,3)),mt.setAttribute("aColor",new te(H,3)),mt.setAttribute("aSize",new te(j,1));let Ft=new Ae({uniforms:{uOpacity:{value:tt},uPixels:{value:innerHeight*De.getPixelRatio()},uSoft:{value:pt?1:0}},vertexShader:"attribute vec3 aColor;attribute float aSize;uniform float uPixels;varying vec3 vColor;void main(){vColor=aColor;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPixels/(-mv.z),1.,220.);}",fragmentShader:"uniform float uOpacity;uniform float uSoft;varying vec3 vColor;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=uSoft>.5?pow(1.-r,3.):pow(1.-r,2.);gl_FragColor=vec4(vColor,a*uOpacity);}",transparent:!0,blending:Ds,depthWrite:!1}),ie=new wi(mt,Ft);return i.add(ie),ie},A=function(w,H){let j=new Ae({uniforms:{uTime:{value:0},uColor:{value:new zt(H)}},vertexShader:v,fragmentShader:T,clipping:!0}),tt=new ce;tt.position.copy(w);let pt=new Qt(I,j);tt.add(pt);let mt=r([w.x,w.y,w.z],new zt(H).toArray(),[1.6],.5,!0);return i.add(tt),{star:tt,mat:j,halo:mt}},Mt=function(){return St??=import("./lazy-7PDSDV7A.js").then(({EarthExplorer:w})=>dt=new w(K)).catch(w=>{throw St=null,w})},x=function(w){return new P().setFromSphericalCoords(w.radius,w.phi,w.theta).add(w.target)},Q=function(){let w=Rn.getBoundingClientRect();U={width:Math.max(1,w.width),height:Math.max(1,w.height),left:w.left,top:w.top},window.HOME_VIEW=U,De.setSize(U.width,U.height,!1),t.aspect=U.width/U.height,t.updateProjectionMatrix(),i.traverse(H=>{H.material?.uniforms?.uPixels&&(H.material.uniforms.uPixels.value=U.height*De.getPixelRatio())})},J=function(){It&&It.pause(),It=null,Vt("voice").textContent="\u25B7 \u542C\u8BB2\u89E3"},nt=function(w,H){let j=w==="sun"?W.star:$[w],tt=j.children[0].geometry.parameters.radius*j.scale.x,pt=j.position.clone(),mt=Math.tan(t.fov*Math.PI/360),Ft=Math.sqrt(tt*tt+Math.pow(tt*innerHeight/(2*mt*H.radiusPx),2)),ie=new P((.5-H.cx)*2*Ft*mt*t.aspect,(H.cy-.5)*2*Ft*mt,0),fe=pt.clone().add(ie);return{position:fe.clone().add(new P(0,0,Ft)),target:fe,quaternion:new Xe().fromArray(H.quaternion),spin:H.spin}},lt=function(w=!1,H){if(Ct.active){Ct.close();return}if(rt)return;if(J(),F.active&&Rt.copy(F.getLookTarget()),V.active&&Rt.copy(V.getLookTarget()),it.close(),V.close(),F.close(),W.star.scale.setScalar(1.9),H&&Pt!=="earth"){let tt=nt(Pt,H);t.position.copy(tt.position),Rt.copy(tt.target);let pt=Pt==="sun"?W.star:$[Pt];pt.quaternion.copy(tt.quaternion),pt.children[0].rotation.y=tt.spin}W.star.visible=!0,S.visible=!0;for(let tt of Object.values($))tt.visible=!0;let j=w?{...wt,target:wt.target.clone()}:Tt;j&&(rt={start:performance.now(),duration:is()?250:1800,fromPos:t.position.clone(),fromTarget:Rt.clone(),toPos:x(j),toTarget:j.target.clone(),enter:!1,orbit:j},document.body.classList.remove("in-focus"),document.body.classList.add("in-flight"),ot="flight",Vt("detail").hidden=!0,Vt("object-caption").hidden=!0,Vt("travel").hidden=!1,Vt("travel").firstChild.textContent="\u8FD4\u56DE\u661F\u6D77 ")},vt=function(){rt||ot==="preparing"||(ot==="focus"||(Tt={...wt,target:wt.target.clone()}),lt(!0))},Et=function(w){if(X[w]){if(rt||ot==="preparing"){b=w;return}if(ot==="overview"){bt(w);return}Pt!==w&&(b=w,lt())}},Ot=function(w){if(!(rt||ot==="preparing")){if(F.active){F.zoom(w);return}if(V.active){V.zoom(w);return}if(ot==="overview")D.radius=Ue.clamp(D.radius*w,5,180);else{let H=t.position.clone().sub(Rt);if(H.multiplyScalar(w),H.length()<2.4||H.length()>9)return;t.position.copy(Rt.clone().add(H))}}},kt=function(){let w=Vt("tap-hint");w.hidden=!1,clearTimeout(xt),xt=setTimeout(()=>w.hidden=!0,3200)},Jt=function(w){if(!Y.has(w.pointerId))return;let H=Xt&&!Xt.moved&&!Ut&&Y.size===1&&window.SCENE_TAP_ALLOWED();if(Y.delete(w.pointerId),Y.size||(Rn.classList.remove("dragging"),Bt=0),H&&ot==="focus"&&F.active&&(yt.setFromCamera(new Wt((w.clientX-U.left)/U.width*2-1,1-(w.clientY-U.top)/U.height*2),t),yt.intersectObject(W.star,!0).length&&F.expand(!0)),H&&ot==="focus"&&V.active&&Pt!=="neptune"&&(yt.setFromCamera(new Wt((w.clientX-U.left)/U.width*2-1,1-(w.clientY-U.top)/U.height*2),t),yt.intersectObject(V.object,!0).length&&V.inspect()),H&&ot==="overview"){yt.setFromCamera(new Wt((w.clientX-U.left)/U.width*2-1,1-(w.clientY-U.top)/U.height*2),t);let j=[W.star,S,...Object.values($)],tt=yt.intersectObjects(j,!0),pt;if(tt.length){let mt=tt[0].object;for(;mt.parent&&!j.includes(mt);)mt=mt.parent;pt=mt===S?"earth":mt===W.star?"sun":Object.keys($).find(Ft=>$[Ft]===mt)}else{let mt=ke()?52:36;for(let[Ft,ie]of Object.entries(X)){let fe=ie.position.clone().project(t);if(fe.z<0||fe.z>1)continue;let Ii=Math.hypot((fe.x*.5+.5)*U.width+U.left-w.clientX,(-fe.y*.5+.5)*U.height+U.top-w.clientY);Ii<mt&&(mt=Ii,pt=Ft)}}pt?Et(pt):kt()}Xt=null},ht=function(w){if(requestAnimationFrame(ht),ne.update({mode:Ct.present||it.active?"focus":ot,radius:_t.radius,phi:_t.phi}),V.active){C=w,window.GALAXY_STATE={mode:"focus",active:Pt,planet:Pt,ready:!0,entryPose:V.pose,transitionRevision:23};return}if(document.hidden||Ct.present||it.active){C=w;return}let H=Math.min((w-C)/1e3,.05);if(C=w,W.mat.uniforms.uTime.value=is()?0:w/1e3,Dt.tick(H,ot,_t.radius),O.rotation.copy(q.rotation),ot==="overview"){let j=Ue.smoothstep(_t.radius,65,100);f.material.uniforms.uOpacity.value=.06+1.49*j,p.material.uniforms.uOpacity.value=.005+.175*j,g.material.uniforms.uOpacity.value=.02+.3*j,is()||(f.rotation.y+=H*.012*j,p.rotation.y=f.rotation.y);let tt=1+j*(ke()?1.1:1.5);f.scale.setScalar(tt),p.scale.setScalar(tt),g.scale.setScalar(tt),Vt("location-name").textContent=_t.radius>65?"\u94F6\u6CB3\u5168\u666F":"\u592A\u9633\u7CFB\u5168\u666F"}if(rt){!window.ENTRY_TIMING.firstMotion&&rt.enter&&(window.ENTRY_TIMING.firstMotion=w);let j=Math.min(1,(w-rt.start)/rt.duration),tt=j*j*j*(j*(j*6-15)+10);if(t.position.lerpVectors(rt.fromPos,rt.toPos,tt),Rt.lerpVectors(rt.fromTarget,rt.toTarget,tt),rt.model&&rt.toQuaternion&&(rt.model.quaternion.slerpQuaternions(rt.fromQuaternion,rt.toQuaternion,tt),rt.model.children[0].rotation.y=rt.spin),g.material.uniforms.uOpacity.value=rt.enter?rt.fromBulge*(1-tt):.32*tt,f.material.uniforms.uOpacity.value=rt.enter?rt.fromGalaxy*(1-tt):1.55*tt,p.material.uniforms.uOpacity.value=rt.enter?rt.fromMist*(1-tt):.18*tt,j===1&&(!rt.enter||rt.ready)){let pt=rt.enter;if(!pt)_t={...rt.orbit,target:rt.orbit.target.clone()},D={theta:_t.theta,phi:_t.phi,radius:_t.radius},ot="overview",Vt("location-name").textContent="\u592A\u9633\u7CFB\u5168\u666F",Vt("scale-label").textContent="\u5168\u666F",document.body.classList.remove("in-focus");else{ot="focus",document.body.classList.add("in-focus");let mt=X[Pt];Vt("detail-kicker").textContent=mt.kicker,Vt("detail-title").innerHTML=mt.heading,Vt("detail-copy").textContent=mt.copy,Vt("detail").hidden=!0,Vt("voice").hidden=!mt.audio,Vt("object-caption").textContent=mt.caption,Vt("object-caption").hidden=!1,Vt("location-name").textContent=mt.title,Vt("scale-label").textContent="\u8FD1\u666F",Pt==="earth"&&F.open(Pt),W.star.visible=Pt==="sun",W.halo.visible=Pt==="sun",($[Pt]||Pt==="sun")&&(V.look.copy(Rt),V.open(Pt),window.ENTRY_TIMING.visible=performance.now()),Pt==="earth"&&Ct.open()}if(rt=null,document.body.classList.remove("in-flight"),(Pt!=="earth"||!pt)&&(Vt("travel").hidden=!0),b){let mt=b;b=null,(mt!==Pt||!pt)&&queueMicrotask(()=>Et(mt))}}}else if(ot==="overview"){!Y.size&&!is()&&(D.theta+=jt.x*H*60,D.phi=Ue.clamp(D.phi+jt.y*H*60,.12,3.02),jt.x*=Math.exp(-H*6),jt.y*=Math.exp(-H*6));let j=1-Math.exp(-H*7);_t.theta+=(D.theta-_t.theta)*j,_t.phi+=(D.phi-_t.phi)*j,_t.radius+=(D.radius-_t.radius)*j,_t.target.lerpVectors(new P,R,1-Ue.smoothstep(_t.radius,65,100)),t.position.copy(x(_t)),Rt.copy(_t.target)}if(t.lookAt(Rt),t.updateMatrixWorld(),ot==="overview"&&(document.querySelectorAll("#markers [data-target]").forEach(j=>{at.copy(X[j.dataset.target].position).project(t);let tt=(at.x*.5+.5)*U.width+U.left,pt=(-at.y*.5+.5)*U.height+U.top,mt=j.dataset.target==="moon"&&_t.radius>30||at.z>1||at.z<0||tt<20||tt>U.left+U.width-20||pt<Math.max(56,U.top+12)||pt>Math.min(innerHeight-108,U.top+U.height-12);j.hidden=mt,j.classList.toggle("edge",tt>innerWidth-180),j.style.left=tt+"px",j.style.top=pt+"px"}),Dt.layoutLabels()),F.tick(w),V.tick(H),De.render(i,t),document.body.classList.contains("scene-ready")||(document.body.classList.add("scene-ready"),window.HOME_FIRST_FRAME=performance.now()),V.active){let j=Pt==="sun"?W.star:$[Pt],tt=j.position.clone().project(t),pt=j.children[0].geometry.parameters.radius*j.scale.x,mt=t.position.distanceTo(j.position);window.ENTRY_EVIDENCE={id:Pt,parentPose:{cx:tt.x*.5+.5,cy:-tt.y*.5+.5,radiusPx:innerHeight/(2*Math.tan(t.fov*Math.PI/360))*pt/Math.sqrt(mt*mt-pt*pt)},childPose:V.pose}}window.GALAXY_STATE={lesson:F.active?F.index:null,mode:ot,active:Pt,radius:_t.radius,theta:_t.theta,ready:!0,transitionRevision:23,flightProgress:rt?Math.min(1,(w-rt.start)/rt.duration):null,targets:ft,planet:V.active?V.data.id:null}};De.setPixelRatio(Math.min(devicePixelRatio,ke()?1.25:1.5)),De.setClearColor(198160),De.outputColorSpace=ae,De.localClippingEnabled=!0,Rn.appendChild(De.domElement);let i=new Ei,t=new Me(48,1,.05,400),e=204,n=()=>(e=e*16807%2147483647,(e-1)/2147483646),s=()=>Math.sqrt(-2*Math.log(Math.max(1e-4,n())))*Math.cos(2*Math.PI*n()),o=[],a=[],l=[],c=[],h=[],u=[];for(let w=0;w<(ke()?18e3:38e3);w++){let H,j,tt,pt,mt;w<(ke()?3200:7e3)?(H=Math.pow(n(),1.7)*5.3,j=n()*Math.PI*2,tt=Math.cos(j)*H,mt=Math.sin(j)*H,pt=s()*.72*(1-H/7)):(H=2+Math.pow(n(),.75)*23,j=w%4*Math.PI/2+H*.31+s()*(.12+.13*H/25),tt=Math.cos(j)*H+s()*.25,mt=Math.sin(j)*H+s()*.25,pt=s()*(.12+H*.012)),o.push(tt,pt,mt);let Ft=new zt;H<4.5?Ft.setRGB(.92,.7,.45):n()>.84?Ft.setRGB(.7,.42,.88):Ft.setRGB(.48+n()*.35,.62+n()*.25,.85+n()*.15);let ie=.45+n()*.85;Ft.multiplyScalar(ie),a.push(Ft.r,Ft.g,Ft.b),l.push(.025+n()*.065+(n()>.998?.09:0))}let f=r(o,a,l,1.15);for(let w=0;w<(ke()?420:700);w++){let H=3+n()*21,j=w%4*Math.PI/2+H*.31+s()*.09;c.push(Math.cos(j)*H,s()*.1,Math.sin(j)*H);let tt=new zt(w%5===0?"#8b5ac8":"#4c7faf");h.push(tt.r,tt.g,tt.b),u.push(.8+n()*2.6)}let p=r(c,h,u,.1,!0),g=r([0,0,0],[1,.72,.42],[9],.22,!0),_=[],m=[],d=[];for(let w=0;w<2e3;w++){let H=new P(s(),s(),s()).normalize().multiplyScalar(90+n()*80);_.push(H.x,H.y,H.z),m.push(.5,.6,.8),d.push(.03+n()*.05)}r(_,m,d,.5);let E="float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}float fbm(vec3 p){return .55*noise(p)+.28*noise(p*2.1)+.14*noise(p*4.3)+.07*noise(p*8.1);}",v=`varying vec3 vP;varying vec3 vN;varying vec3 vV;
 #include <clipping_planes_pars_vertex>
 void main(){vP=position;vN=normalize(normalMatrix*normal);vec4 mvPosition=modelViewMatrix*vec4(position,1.);vV=normalize(-mvPosition.xyz);gl_Position=projectionMatrix*mvPosition;
 #include <clipping_planes_vertex>
 }`,T=`uniform float uTime;uniform vec3 uColor;varying vec3 vP;varying vec3 vN;varying vec3 vV;
 #include <clipping_planes_pars_fragment>
 ${E}void main(){
 #include <clipping_planes_fragment>
 float n=fbm(vP*6.+vec3(uTime*.08,0.,uTime*.03));float limb=pow(max(0.,dot(normalize(vN),normalize(vV))),.48);vec3 c=mix(uColor*.24,uColor*1.8,smoothstep(.22,.77,n));c+=vec3(1.,.7,.3)*pow(n,8.)*2.;gl_FragColor=vec4(c*(.4+.6*limb),1.);}`,I=new Ie(.55,72,48),R=new P(-3,.5,4),W=A(R,"#eef4ff");W.mat=ec(),W.star.children[0].material=W.mat;let y=new P(3,.5,15),S=new ce;S.position.copy(y);let k=new Tn().load("previews/earth-natural.jpg");k.colorSpace=ae,k.anisotropy=Math.min(8,De.capabilities.getMaxAnisotropy());let q=new Qt(new Ie(.55,ke()?40:64,ke()?28:48),new pe({map:k}));q.rotation.y=-1.1,S.add(q);let st=new Tn().load("previews/earth-clouds.jpg");st.anisotropy=Math.min(8,De.capabilities.getMaxAnisotropy());let L=new pe({color:16251647,alphaMap:st,transparent:!0,opacity:.78,depthWrite:!1});L.onBeforeCompile=w=>{w.fragmentShader=w.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
 diffuseColor.a=smoothstep(0.10,0.85,diffuseColor.a/0.78)*0.78;`)};let O=new Qt(new Ie(.55086,80,64),L);S.add(O),i.add(S),window.EARTH_VISUAL={surface:"earth-natural.jpg",clouds:"earth-clouds.jpg"};let X={earth:{position:y,title:"\u5730\u7403",kicker:"\u6211\u4EEC\u751F\u6D3B\u7684\u661F\u7403",heading:"\u4ECE\u592A\u7A7A\uFF0C\u8D70\u5411\u5C71\u5DDD\u4E0E\u57CE\u5E02\u3002",copy:"\u7EE7\u7EED\u9760\u8FD1\uFF0C\u8BA4\u8BC6\u773C\u524D\u7684\u5730\u533A\u4E0E\u666F\u89C2\u3002",caption:"\u5730\u7403",audio:null},sun:{position:R,title:"\u592A\u9633",kicker:"\u592A\u9633 \xB7 \u6052\u661F",heading:"\u6BCF\u5929\u7167\u5230\u6211\u4EEC\u7684\u9633\u5149\uFF0C\u662F\u600E\u6837\u4EA7\u751F\u7684\uFF1F",copy:"\u4ECE\u8868\u9762\u5411\u6838\u5FC3\u770B\uFF0C\u628A\u4F9B\u80FD\u3001\u4F20\u9012\u548C\u6052\u661F\u53D8\u5316\u8054\u7CFB\u8D77\u6765\u3002",caption:"\u592A\u9633 \xB7 \u52A8\u6001\u6A21\u578B\u793A\u610F",audio:null}},$={};i.add(new Ri(7439786,.65));let Z=new Ai(16773340,2.4);Z.position.set(-20,8,20),i.add(Z);for(let w of Ya){let H=new ce;H.position.set(...w.position);let j=tc(null,w.id),tt=new Qt(new Ie(w.radius,ke()?40:64,ke()?28:48),j);if(H.add(tt),new Tn().load("previews/"+w.texture+".jpg",pt=>{pt.colorSpace=ae,pt.anisotropy=Math.min(4,De.capabilities.getMaxAnisotropy()),j.map=pt,j.needsUpdate=!0},void 0,()=>{j.color.set(w.color)}),w.id==="saturn")for(let pt=0;pt<9;pt++){let mt=new Qt(new Wn(w.radius*(1.4+pt*.105),w.radius*(1.48+pt*.105),96),new pe({color:pt%3?13351835:8420465,side:Le,transparent:!0,opacity:.65}));mt.rotation.x=Math.PI/2.6,H.add(mt)}i.add(H),$[w.id]=H,X[w.id]={position:H.position,title:w.name,kicker:w.kind,heading:w.scenes[0].title,copy:w.scenes[0].text,caption:w.name+" \xB7 \u5916\u89C2\u793A\u610F",audio:null}}let V=new ns({models:{...$,sun:W.star},camera:t,onReturn:w=>lt(!1,w),onVisit:w=>Et(w)}),et=new URLSearchParams(location.search).get("preview")==="mars",it=new pr({onReturn:()=>lt()}),ft=["sun","mercury","venus","earth","moon","mars","jupiter","saturn","uranus","neptune"];Vt("markers").replaceChildren(...ft.map(w=>{let H=document.createElement("button");H.className="marker "+w,H.dataset.target=w,H.setAttribute("aria-label","\u9760\u8FD1"+hr[w]);let j=document.createElement("span");j.className="reticle";let tt=document.createElement("span");tt.className="marker-text";let pt=document.createElement("b");return pt.textContent=hr[w],tt.append(pt),H.append(j,tt),H})),Vt("planet-nav").replaceChildren(...ft.map(w=>{let H=document.createElement("button");return H.dataset.target=w,H.textContent=hr[w],H.onclick=()=>Et(w),H}));let F=new cr({scene:i,sun:W,position:R,camera:t}),K={onReveal:({distance:w})=>{t.position.copy(y).add(new P(0,0,w)),Rt.copy(y),t.lookAt(Rt)},onExit:()=>lt(),onLoading:w=>{Vt("earth-retry").hidden=!w?.includes("\u5931\u8D25"),w?(Vt("travel").hidden=!1,Vt("travel").firstChild.textContent=w):Vt("travel").hidden=!0}},dt,St,Ct={get active(){return!!dt?.active},get present(){return!!dt?.present},preload(){return Mt().then(w=>w.preload()).catch(()=>null)},async open(){try{await(await Mt()).open()}catch{K.onLoading("\u5730\u7403\u52A0\u8F7D\u5931\u8D25\uFF0C\u53EF\u8FD4\u56DE\u661F\u6D77\u540E\u91CD\u8BD5\u3002")}},close(){dt?.close()}};Vt("markers").querySelector("[data-target=earth]").addEventListener("pointerdown",()=>Ct.preload()),Vt("planet-nav").querySelector("[data-target=earth]").addEventListener("pointerdown",()=>Ct.preload());let Dt=new lr({scene:i,sun:W,earth:S,earthPos:y,models:$,targets:X,narrow:ke()}),wt={theta:.12,phi:.55,radius:100,target:new P(0,0,0)},_t={theta:wt.theta,phi:wt.phi,radius:wt.radius,target:wt.target.clone()},D={theta:_t.theta,phi:_t.phi,radius:_t.radius},jt={x:0,y:0},Tt=null,rt=null,ot="overview",Pt=null,It=null,b=null;t.position.copy(x(_t)),t.lookAt(_t.target);let U={width:innerWidth,height:innerHeight,left:0,top:0};addEventListener("resize",Q),new ResizeObserver(Q).observe(Rn),Q();async function bt(w){if(!X[w])return;if(rt||ot==="preparing"){b=w;return}if(ot!=="overview"){Et(w);return}Pt=w;let H=X[w];Tt={..._t,target:_t.target.clone()},jt.x=jt.y=0,document.body.classList.remove("show-guide"),Q(),window.ENTRY_TIMING={id:w,click:performance.now()},Vt("travel").hidden=!1,Vt("travel").firstChild.textContent="\u6B63\u5728\u9760\u8FD1"+H.title+" ",Vt("detail").hidden=!0,J();let j=w==="sun"?W.star:$[w],tt;if(w==="earth"){Ct.preload();let mt=H.position.clone();tt={target:mt,position:mt.clone().add(new P(0,0,1.9))}}else tt=nt(w,ts(w,j.children[0].rotation.y));let pt=rt={start:performance.now(),duration:is()?250:1100,fromPos:t.position.clone(),fromTarget:Rt.clone(),toPos:tt.position,toTarget:tt.target,enter:!0,model:j,fromQuaternion:j?.quaternion.clone(),toQuaternion:tt.quaternion,spin:tt.spin,ready:w==="earth",fromGalaxy:f.material.uniforms.uOpacity.value,fromMist:p.material.uniforms.uOpacity.value,fromBulge:g.material.uniforms.uOpacity.value};if(ot="flight",document.body.classList.add("in-flight"),Dt.lines.visible=!1,Vt("location-name").textContent="\u9760\u8FD1 / "+H.title,w!=="earth")try{let mt=await V.prepare(w);if(rt!==pt)return;pt.ready=!0,window.ENTRY_TIMING.ready=performance.now(),window.ENTRY_TIMING.expectedPoseError={cx:mt.cx-ts(w).cx,cy:mt.cy-ts(w).cy,radius:mt.radiusPx-ts(w).radiusPx}}catch{if(rt!==pt)return;rt=null,V.close(),document.body.classList.remove("in-flight"),ot="overview",t.position.copy(x(Tt)),Rt.copy(Tt.target),Pt=null,Vt("travel").firstChild.textContent="\u8FD1\u666F\u6682\u672A\u52A0\u8F7D\uFF0C\u518D\u70B9\u4E00\u6B21\u5929\u4F53\u91CD\u8BD5 "}}document.querySelectorAll("#markers [data-target]").forEach(w=>w.onclick=()=>Et(w.dataset.target)),Vt("return").onclick=()=>lt(),Vt("home").onclick=vt,Vt("earth-retry").onclick=()=>Ct.open(),Vt("voice").onclick=async()=>{if(F.active){F.playAudio();return}if(It){J();return}let w=X[Pt]?.audio;if(w){It=new Audio("../solar-film/audio/"+w+".mp3"),It.onended=J;try{await It.play(),Vt("voice").textContent="\u2161 \u6682\u505C\u8BB2\u89E3"}catch{J(),Vt("voice").textContent="\u70B9\u51FB\u91CD\u8BD5"}}},Vt("zoom-in").onclick=()=>Ot(.85),Vt("zoom-out").onclick=()=>Ot(1.18),Rn.addEventListener("wheel",w=>{if(w.preventDefault(),Math.abs(w.deltaX)>Math.abs(w.deltaY)){F.active?F.drag(w.deltaX,0):V.active?V.drag(w.deltaX,0):D.theta-=w.deltaX*.003;return}Ot(Math.exp(Ue.clamp(w.deltaY,-180,180)*.0015))},{passive:!1});let Y=new Map,Xt=null,Bt=0,Ut=!1;document.addEventListener("pointerdown",w=>{if(!(rt||!w.target.closest("#universe,#markers"))&&(Rn.setPointerCapture(w.pointerId),Y.set(w.pointerId,{x:w.clientX,y:w.clientY}),Y.size===1?(Ut=!1,Xt={x:w.clientX,y:w.clientY,moved:!1}):(Ut=!0,Xt&&(Xt.moved=!0)),Rn.classList.add("dragging"),Y.size===2)){let H=[...Y.values()];Bt=Math.hypot(H[0].x-H[1].x,H[0].y-H[1].y)}}),document.addEventListener("pointermove",w=>{if(!Y.has(w.pointerId)||rt)return;let H=Y.get(w.pointerId),j=w.clientX-H.x,tt=w.clientY-H.y;if(Y.set(w.pointerId,{x:w.clientX,y:w.clientY}),Xt&&Math.hypot(w.clientX-Xt.x,w.clientY-Xt.y)>5&&(Xt.moved=!0),Y.size===2){let pt=[...Y.values()],mt=Math.hypot(pt[0].x-pt[1].x,pt[0].y-pt[1].y);Bt>0&&Ot(Bt/mt),Bt=mt}else F.active?F.drag(j,tt):V.active?V.drag(j,tt):ot==="overview"&&(D.theta-=j*.004,D.phi=Ue.clamp(D.phi-tt*.003,.12,3.02),jt.x=-j*18e-5,jt.y=-tt*14e-5)});let yt=new Ci,xt;document.addEventListener("pointerup",Jt),document.addEventListener("pointercancel",w=>{Y.delete(w.pointerId),Xt=null,Rn.classList.remove("dragging")}),addEventListener("keydown",w=>{w.key==="Escape"&&ot==="focus"&&lt()});let ne=new or({onGalaxy:()=>{D.radius=100,jt.x=jt.y=0},onSystem:()=>{D.radius=ke()?40:54,D.phi=.55,jt.x=jt.y=0},onAngle:w=>{D.phi=w},onPlanet:w=>Et(w)});Dt.$("sc-galaxy").onclick=()=>{let w=_t.radius>65;D.radius=w?ke()?40:54:100,D.phi=w?.55:.89,document.body.classList.remove("show-guide")};let Rt=_t.target.clone(),at=new P,C=performance.now();requestAnimationFrame(ht);let ut=new URLSearchParams(location.search).get("preview");X[ut]&&setTimeout(()=>Et(ut),400)}if(!De){document.body.classList.add("text-mode"),document.getElementById("error").hidden=!1;let i=new ns({models:null,camera:null,onReturn:()=>{i.close(),document.body.classList.remove("in-focus")},onVisit:t=>i.open(t)});document.getElementById("planet-nav").replaceChildren(...Ya.map(t=>{let e=document.createElement("button");return e.textContent=t.name,e.onclick=async()=>{await i.prepare(t.id),i.open(t.id),document.body.classList.add("in-focus")},e})),document.getElementById("error").textContent="\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u663E\u793A\u4E09\u7EF4\u753B\u9762\uFF0C\u4ECD\u53EF\u4EE5\u70B9\u4E0B\u65B9\u5929\u4F53\u9605\u8BFB\u4E0E\u542C\u8BB2\u89E3\u3002"}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
