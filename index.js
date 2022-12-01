// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}function y(r){return Math.abs(r)}var p=Math.floor,v=Math.ceil;function s(r){return r<0?v(r):p(r)}var b=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,w=1023;function A(r){return r===d||r===b}var _,m=2147483647,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",j=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return g.call(r);t=r[U],u=U,n=null!=(o=r)&&h.call(o,u);try{r[U]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[U]=t:delete r[U],e}:function(r){return g.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=_,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L=E,M="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var x,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:x,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new L(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr,er,or=!0===K?1:0,ur=new L(1),ir=new F(ur.buffer);function fr(r){return ur[0]=r,ir[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new L(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return lr[yr]=r,lr[pr]=n,cr[0]}var sr=[0,0];function br(r,n){var t,e;return nr.assign(r,sr,1,0),t=sr[0],t&=m,e=fr(n),vr(t|=e&=2147483648,sr[1])}function dr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&y(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var wr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(dr(r,wr,1,0),n+=wr[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-w|0}(r=wr[0]),n<-1074?br(0,r):n>1023?r<0?b:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Ar,1,0),t=Ar[0],t&=2148532223,e*vr(t|=n+w<<20,Ar[1])))}var mr=1.4426950408889634,Nr=1/(1<<28);function gr(r){var n;return l(r)||r===d?r:r===b?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nr?1+r:function(r,n,t){var e,o,u,i;return _r(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=s(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}function hr(r){return p(r)===r}function Ur(r){return hr(r/2)}function jr(r){return Ur(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===K?0:1,Sr=new L(1),Er=new F(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===K?1:0,Gr=new L(1),Pr=new F(Gr.buffer);function Lr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var Mr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],xr=[0,1.350039202129749e-8],kr=1048575,Yr=1048576,qr=1083179008,Cr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,n){var t,e,o,u,i,f,a,c,p,v,s,_,N,g;if(l(r)||l(n))return NaN;if(nr.assign(n,Br,1,0),i=Br[0],0===Br[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:y(r)<1==(n===d)?0:d}(r,n)}if(nr.assign(r,Br,1,0),u=Br[0],0===Br[1]){if(0===u)return function(r,n){return n===b?d:n===d?0:n>0?jr(n)?r:0:jr(n)?br(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&jr(n))return-1;if(A(r))return r===b?Jr(-0,-n):n<0?0:d}if(r<0&&!1===hr(n))return(r-r)/(r-r);if(o=y(r),t=u&m|0,e=i&m|0,a=i>>>31|0,f=(f=u>>>31|0)&&jr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(fr(r)&m)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Cr*Cr:f*zr*zr;if(t>1072693248)return 0===a?f*Cr*Cr:f*zr*zr;s=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Dr,o)}else s=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,s,b,d,A,_,m,N,g,h,U;return N=0,t<Mr&&(N-=53,t=fr(n*=9007199254740992)),N+=(t>>20)-w|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,N+=1,t-=Mr),i=Fr(o=(_=(n=Lr(n,t))-(c=Vr[h]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=h<<18),A=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Fr(a=3+(u=i*i)+(A+=(f=m*(_-i*a-i*(n-(a-c))))*(i+o)),0),b=(v=-7.028461650952758e-9*(y=Fr(y=(_=i*a)+(m=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(m-(y-_))+xr[h])-((s=Fr(s=(p=.9617967009544373*y)+v+(l=Wr[h])+(d=N),0))-d-l-p),r[0]=s,r[1]=b,r}(Dr,o,t);if(_=(v=(n-(c=Fr(n,0)))*s[0]+n*s[1])+(p=c*s[0]),nr.assign(_,Br,1,0),N=Tr(Br[0]),g=Tr(Br[1]),N>=qr){if(0!=(N-qr|g))return f*Cr*Cr;if(v+8008566259537294e-32>_-p)return f*Cr*Cr}else if((N&m)>=1083231232){if(0!=(N-3230714880|g))return f*zr*zr;if(v<=_-p)return f*zr*zr}return _=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&m|0)>>20)-w|0,c=0,l>1071644672&&(o=Lr(0,((c=r+(Yr>>y+1)>>>0)&~(kr>>(y=((c&m)>>20)-w|0)))>>>0),c=(c&kr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=fr(a=1-((a=(u=.6931471824645996*(o=Fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?_r(a,c):Lr(a,r)}(N,p,v),f*_}function Kr(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:r===b?0:0===t?r===n?d:0:(e=gr(-y((r-n)/t)))/(t*Jr(1+e,2))}function Qr(r){return function(){return r}}function Rr(r){return l(r)?Qr(NaN):function(n){return l(n)?NaN:n===r?d:0}}return c((function(r,n){return l(r)||l(n)?NaN:r===n?d:0}),"factory",Rr),c(Kr,"factory",(function(r,n){return l(r)||l(n)||n<0?Qr(NaN):0===n?Rr(r):function(t){var e,o;return l(t)?NaN:t===b?0:(o=y((t-r)/n),(e=gr(-o))/(n*Jr(1+e,2)))}})),Kr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
