// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}function R(r){return Math.abs(r)}var M=Math.floor,Z=Math.ceil;function X(r){return r<0?Z(r):M(r)}var Y=Number.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,z=1023;function B(r){return r===q||r===Y}var D,J=2147483647,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,cr=D,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:vr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Nr,Ur,Ir=52===new Er.uint8(_r.buffer)[0];!0===Ir?(Nr=1,Ur=0):(Nr=0,Ur=1);var Sr={HIGH:Nr,LOW:Ur},xr=new yr(1),kr=new cr(xr.buffer),Fr=Sr.HIGH,jr=Sr.LOW;function Tr(r,e,n,t){return xr[0]=r,e[t]=kr[Fr],e[t+n]=kr[jr],e}function Or(r){return Tr(r,[0,0],1,0)}L(Or,"assign",Tr);var Vr,$r,Gr=!0===Ir?1:0,Hr=new yr(1),Wr=new cr(Hr.buffer);function Cr(r){return Hr[0]=r,Wr[Gr]}!0===Ir?(Vr=1,$r=0):(Vr=0,$r=1);var Lr={HIGH:Vr,LOW:$r},Pr=new yr(1),Rr=new cr(Pr.buffer),Mr=Lr.HIGH,Zr=Lr.LOW;function Xr(r,e){return Rr[Mr]=r,Rr[Zr]=e,Pr[0]}var Yr=[0,0];function qr(r,e){var n,t;return Or.assign(r,Yr,1,0),n=Yr[0],n&=J,t=Cr(e),Xr(n|=t&=2147483648,Yr[1])}function zr(r,e,n,t){return P(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var Br=[0,0],Dr=[0,0];function Jr(r,e){var n,t;return 0===e||0===r||P(r)||B(r)?r:(zr(r,Br,1,0),e+=Br[1],e+=function(r){var e=Cr(r);return(e=(2146435072&e)>>>20)-z|0}(r=Br[0]),e<-1074?qr(0,r):e>1023?r<0?Y:q:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Or.assign(r,Dr,1,0),n=Dr[0],n&=2148532223,t*Xr(n|=e+z<<20,Dr[1])))}var Kr=1.4426950408889634,Qr=1/(1<<28);function re(r){var e;return P(r)||r===q?r:r===Y?0:r>709.782712893384?q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Qr?1+r:function(r,e,n){var t,i,a,o;return Jr(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=X(r<0?Kr*r-.5:Kr*r+.5)),1.9082149292705877e-10*e,e)}function ee(r){return M(r)===r}function ne(r){return ee(r/2)}function te(r){return ne(r>0?r-1:r+1)}var ie=Math.sqrt,ae=!0===Ir?0:1,oe=new yr(1),ue=new cr(oe.buffer);function ce(r,e){return oe[0]=r,ue[ae]=e>>>0,oe[0]}function fe(r){return 0|r}var se=!0===Ir?1:0,le=new yr(1),pe=new cr(le.buffer);function ye(r,e){return le[0]=r,pe[se]=e>>>0,le[0]}var ge=1048576,de=[1,1.5],he=[0,.5849624872207642],ve=[0,1.350039202129749e-8],we=1048575,be=1048576,me=1083179008,Ae=1e300,_e=1e-300,Ee=[0,0],Ne=[0,0];function Ue(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Or.assign(e,Ee,1,0),o=Ee[0],0===Ee[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return ie(r);if(-.5===e)return 1/ie(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(B(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:R(r)<1==(e===q)?0:q}(r,e)}if(Or.assign(r,Ee,1,0),a=Ee[0],0===Ee[1]){if(0===a)return function(r,e){return e===Y?q:e===q?0:e>0?te(e)?r:0:te(e)?qr(q,r):q}(r,e);if(1===r)return 1;if(-1===r&&te(e))return-1;if(B(r))return r===Y?Ue(-0,-e):e<0?0:q}if(r<0&&!1===ee(e))return(r-r)/(r-r);if(i=R(r),n=a&J|0,t=o&J|0,c=o>>>31|0,u=(u=a>>>31|0)&&te(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Cr(r)&J)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*Ae*Ae:u*_e*_e;if(n>1072693248)return 0===c?u*Ae*Ae:u*_e*_e;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ce(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ne,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<ge&&(m-=53,n=Cr(e*=9007199254740992)),m+=(n>>20)-z|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ge),o=ce(i=(w=(e=ye(e,n))-(f=de[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ye(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=ce(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=ce(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ve[_])-((g=ce(g=(p=.9617967009544373*l)+y+(s=he[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ne,i,n);if(y=(l=(e-(f=ce(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Or.assign(y,Ee,1,0),g=fe(Ee[0]),d=fe(Ee[1]),g>=me){if(0!=(g-me|d))return u*Ae*Ae;if(l+8008566259537294e-32>y-s)return u*Ae*Ae}else if((g&J)>=1083231232){if(0!=(g-3230714880|d))return u*_e*_e;if(l<=y-s)return u*_e*_e}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&J|0)>>20)-z|0,f=0,s>1071644672&&(i=ye(0,((f=r+(be>>l+1)>>>0)&~(we>>(l=((f&J)>>20)-z|0)))>>>0),f=(f&we|be)>>20-l>>>0,r<0&&(f=-f),e-=i),r=fe(r=Cr(c=1-((c=(a=.6931471824645996*(i=ce(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Jr(c,f):ye(c,r)}(g,s,l),u*y}function Ie(r,e,n){var t;return P(r)||P(e)||P(n)||n<0?NaN:r===Y?0:0===n?r===e?q:0:(t=re(-R((r-e)/n)))/(n*Ue(1+t,2))}function Se(r){return function(){return r}}function xe(r){return P(r)?Se(NaN):function(e){return P(e)?NaN:e===r?q:0}}return L((function(r,e){return P(r)||P(e)?NaN:r===e?q:0}),"factory",xe),L(Ie,"factory",(function(r,e){return P(r)||P(e)||e<0?Se(NaN):0===e?xe(r):function(n){var t,i;return P(n)?NaN:n===Y?0:(i=R((n-r)/e),(t=re(-i))/(e*Ue(1+t,2)))}})),Ie},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=browser.js.map
