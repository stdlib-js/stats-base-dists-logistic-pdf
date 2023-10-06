// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}function R(r){return Math.abs(r)}var M=Math.floor,Z=Math.ceil;function X(r){return r<0?Z(r):M(r)}var Y=Number.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY;function z(r){return r===q||r===Y}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var tr,ir="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=tr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var cr,fr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var yr,gr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr=yr,dr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,br="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar={uint16:wr,uint8:vr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Nr=52===new Ar.uint8(mr.buffer)[0];!0===Nr?(_r=1,Er=0):(_r=0,Er=1);var Ur={HIGH:_r,LOW:Er},Ir=new sr(1),Sr=new ar(Ir.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Fr(r,e,n,t){return Ir[0]=r,e[t]=Sr[kr],e[t+n]=Sr[xr],e}function jr(r){return Fr(r,[0,0],1,0)}L(jr,"assign",Fr);var Tr,Or,Vr=!0===Nr?1:0,$r=new sr(1),Gr=new ar($r.buffer);function Hr(r){return $r[0]=r,Gr[Vr]}!0===Nr?(Tr=1,Or=0):(Tr=0,Or=1);var Wr={HIGH:Tr,LOW:Or},Cr=new sr(1),Lr=new ar(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Mr(r,e){return Lr[Pr]=r,Lr[Rr]=e,Cr[0]}var Zr=[0,0];function Xr(r,e){var n,t;return jr.assign(r,Zr,1,0),n=Zr[0],n&=2147483647,t=Hr(e),Mr(n|=t&=2147483648,Zr[1])}function Yr(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Yr(r,[0,0],1,0)}),"assign",Yr);var qr=[0,0],zr=[0,0];function Br(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(Yr(r,qr,1,0),e+=qr[1],e+=function(r){var e=Hr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=qr[0]),e<-1074?Xr(0,r):e>1023?r<0?Y:q:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,jr.assign(r,zr,1,0),n=zr[0],n&=2148532223,t*Mr(n|=e+1023<<20,zr[1])))}function Dr(r){var e;return P(r)||r===q?r:r===Y?0:r>709.782712893384?q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return Br(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=X(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function Jr(r){return M(r)===r}function Kr(r){return Jr(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var re=Math.sqrt,ee=!0===Nr?0:1,ne=new sr(1),te=new ar(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}function ae(r){return 0|r}var oe=!0===Nr?1:0,ue=new sr(1),ce=new ar(ue.buffer);function fe(r,e){return ue[0]=r,ce[oe]=e>>>0,ue[0]}var se=[1,1.5],le=[0,.5849624872207642],pe=[0,1.350039202129749e-8];var ye=1e300,ge=1e-300,ve=[0,0],de=[0,0];function he(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,v;if(P(r)||P(e))return NaN;if(jr.assign(e,ve,1,0),o=ve[0],0===ve[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return re(r);if(-.5===e)return 1/re(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:R(r)<1==(e===q)?0:q}(r,e)}if(jr.assign(r,ve,1,0),a=ve[0],0===ve[1]){if(0===a)return function(r,e){return e===Y?q:e===q?0:e>0?Qr(e)?r:0:Qr(e)?Xr(q,r):q}(r,e);if(1===r)return 1;if(-1===r&&Qr(e))return-1;if(z(r))return r===Y?he(-0,-e):e<0?0:q}if(r<0&&!1===Jr(e))return(r-r)/(r-r);if(i=R(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&Qr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Hr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*ye*ye:u*ge*ge;if(n>1072693248)return 0===c?u*ye*ye:u*ge*ge;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ie(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(de,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=Hr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=ie(i=(w=(e=fe(e,n))-(f=se[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=fe(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=ie(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=ie(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+pe[_])-((g=ie(g=(p=.9617967009544373*l)+y+(s=le[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(de,i,n);if(y=(l=(e-(f=ie(e,0)))*p[0]+e*p[1])+(s=f*p[0]),jr.assign(y,ve,1,0),g=ae(ve[0]),v=ae(ve[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*ye*ye;if(l+8008566259537294e-32>y-s)return u*ye*ye}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*ge*ge;if(l<=y-s)return u*ge*ge}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=fe(0,t)),r=ae(r=Hr(f=1-((f=(o=.6931471824645996*(a=ie(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?Br(f,s):fe(f,r)}(g,s,l),u*y}function we(r,e,n){var t;return P(r)||P(e)||P(n)||n<0?NaN:r===Y?0:0===n?r===e?q:0:(t=Dr(-R((r-e)/n)))/(n*he(1+t,2))}function be(r){return function(){return r}}function me(r){return P(r)?be(NaN):function(e){if(P(e))return NaN;return e===r?q:0}}function Ae(r,e){return P(r)||P(e)||e<0?be(NaN):0===e?me(r):function(n){var t,i;if(P(n))return NaN;if(n===Y)return 0;return i=R((n-r)/e),(t=Dr(-i))/(e*he(1+t,2))}}L((function(r,e){return P(r)||P(e)?NaN:r===e?q:0}),"factory",me),L(we,"factory",Ae);export{we as default,Ae as factory};
//# sourceMappingURL=mod.js.map
