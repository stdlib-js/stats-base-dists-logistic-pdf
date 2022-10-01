// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}function p(r){return Math.abs(r)}var v=Math.floor,b=Math.ceil;function d(r){return r<0?b(r):v(r)}var w=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,_=1023;function A(r){return r===s||r===w}var m,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),N=Object.prototype.toString,U=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",g=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return N.call(r);t=r[j],u=j,n=null!=(o=r)&&U.call(o,u);try{r[j]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[j]=t:delete r[j],e}:function(r){return N.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,M=E,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:W,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new M(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,or=!0===K?1:0,ur=new M(1),ir=new F(ur.buffer);function fr(r){return ur[0]=r,ir[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new M(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return lr[yr]=r,lr[pr]=n,cr[0]}var br=[0,0];function dr(r,n){var t,e;return nr(br,r),t=br[0],t&=2147483647,e=fr(n),vr(t|=e&=2147483648,br[1])}function wr(r,n){return y(n)||A(n)?(r[0]=n,r[1]=0,r):0!==n&&p(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var sr=[0,0],_r=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||y(r)||A(r)?r:(function(r,n){1===arguments.length?wr([0,0],r):wr(r,n)}(sr,r),n+=sr[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-_|0}(r=sr[0]),n<-1074?dr(0,r):n>1023?r<0?w:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(_r,r),t=_r[0],t&=2148532223,e*vr(t|=n+_<<20,_r[1])))}var mr=1.4426950408889634,hr=1/(1<<28);function Nr(r){var n;return y(r)||r===s?r:r===w?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<hr?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=d(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}function Ur(r){return v(r)===r}function jr(r){return Ur(r/2)}function gr(r){return jr(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===K?0:1,Sr=new M(1),Er=new F(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===K?1:0,Gr=new M(1),Pr=new F(Gr.buffer);function Mr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var xr=1048576,Lr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],kr=2147483647,Yr=1048575,qr=1048576,Cr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,o,u,i,f,a,c,l,v,b,d,m,h;if(y(r)||y(n))return NaN;if(nr(Jr,n),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:p(r)<1==(n===s)?0:s}(r,n)}if(nr(Jr,r),u=Jr[0],0===Jr[1]){if(0===u)return function(r,n){return n===w?s:n===s?0:n>0?gr(n)?r:0:gr(n)?dr(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&gr(n))return-1;if(A(r))return r===w?Qr(-0,-n):n<0?0:s}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(o=p(r),t=u&Cr|0,e=i&Cr|0,a=i>>>31|0,f=(f=u>>>31|0)&&gr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Kr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,A,m,h,N,U,j;return h=0,t<xr&&(h-=53,t=fr(n*=9007199254740992)),h+=(t>>20)-_|0,t=1072693248|(N=1048575&t|0),N<=235662?U=0:N<767610?U=1:(U=0,h+=1,t-=xr),i=Fr(o=(A=(n=Mr(n,t))-(c=Lr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=U<<18),s=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Fr(a=3+(u=i*i)+(s+=(f=m*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Fr(y=(A=i*a)+(m=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+Wr[U])-((b=Fr(b=(p=.9617967009544373*y)+v+(l=Vr[U])+(w=h),0))-w-l-p),r[0]=b,r[1]=d,r}(Kr,o,t);if(v=(n-(c=Fr(n,0)))*b[0]+n*b[1],l=c*b[0],nr(Jr,d=v+l),m=Tr(Jr[0]),h=Tr(Jr[1]),m>=zr){if(0!=(m-zr|h))return f*Br*Br;if(v+8008566259537294e-32>d-l)return f*Br*Br}else if((m&Cr)>=1083231232){if(0!=(m-3230714880|h))return f*Dr*Dr;if(v<=d-l)return f*Dr*Dr}return d=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&kr|0)>>20)-_|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&kr)>>20)-_|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=fr(a=1-((a=(u=.6931471824645996*(o=Fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ar(a,c):Mr(a,r)}(m,l,v),f*d}function Rr(r,n,t){var e;return y(r)||y(n)||y(t)||t<0?NaN:r===w?0:0===t?r===n?s:0:(e=Nr(-p((r-n)/t)))/(t*Qr(1+e,2))}function Xr(r){return function(){return r}}function Zr(r){return y(r)?Xr(NaN):function(n){return y(n)?NaN:n===r?s:0}}function $r(r,n){return y(r)||y(n)||n<0?Xr(NaN):0===n?Zr(r):function(t){var e,o;return y(t)?NaN:t===w?0:(o=p((t-r)/n),(e=Nr(-o))/(n*Qr(1+e,2)))}}l((function(r,n){return y(r)||y(n)?NaN:r===n?s:0}),"factory",Zr),l(Rr,"factory",$r),r.default=Rr,r.factory=$r,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=index.js.map
