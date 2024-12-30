// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,v,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=t.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}function C(r){return Math.abs(r)}var L=Math.floor,P=Math.ceil;function R(r){return r<0?P(r):L(r)}var M=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,X=1023,Y=1023,q=-1023,z=-1074;function B(r){return r===Z||r===M}var D,J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return rr.call(r);n=r[tr],a=tr,e=null!=(i=r)&&er.call(i,a);try{r[tr]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return rr.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===ir(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,fr=D,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ir(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr=cr,dr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ir(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,br=yr,mr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===ir(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Nr={uint16:wr,uint8:br};(Er=new Nr.uint16(1))[0]=4660;var Ur,Sr,Ir=52===new Nr.uint8(Er.buffer)[0];!0===Ir?(Ur=1,Sr=0):(Ur=0,Sr=1);var xr={HIGH:Ur,LOW:Sr},kr=new gr(1),Fr=new fr(kr.buffer),jr=xr.HIGH,Tr=xr.LOW;function Or(r,e,n,t){return kr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Tr],e}function Vr(r){return Or(r,[0,0],1,0)}H(Vr,"assign",Or);var $r,Gr,Hr=!0===Ir?1:0,Wr=new gr(1),Cr=new fr(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===Ir?($r=1,Gr=0):($r=0,Gr=1);var Pr={HIGH:$r,LOW:Gr},Rr=new gr(1),Mr=new fr(Rr.buffer),Zr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Mr[Zr]=r,Mr[Xr]=e,Rr[0]}var qr=[0,0];function zr(r,e){var n,t;return Vr.assign(r,qr,1,0),n=qr[0],n&=K,t=Lr(e),Yr(n|=t&=J,qr[1])}var Br=22250738585072014e-324,Dr=4503599627370496;function Jr(r,e,n,t){return W(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&C(r)<Br?(e[t]=r*Dr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=2146435072,Qr=2220446049250313e-31,re=2148532223,ee=[0,0],ne=[0,0];function te(r,e){var n,t;return 0===e||0===r||W(r)||B(r)?r:(Jr(r,ee,1,0),r=ee[0],e+=ee[1],e+=function(r){var e=Lr(r);return(e=(e&Kr)>>>20)-X|0}(r),e<z?zr(0,r):e>Y?r<0?M:Z:(e<=q?(e+=52,t=Qr):t=1,Vr.assign(r,ne,1,0),n=ne[0],n&=re,t*Yr(n|=e+X<<20,ne[1])))}var ie=.6931471803691238,ae=1.9082149292705877e-10,oe=1.4426950408889634,ue=709.782712893384,ce=-745.1332191019411,fe=1/(1<<28),se=-fe;function le(r){var e;return W(r)||r===Z?r:r===M?0:r>ue?Z:r<ce?0:r>se&&r<fe?1+r:function(r,e,n){var t,i,a,o;return te(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=R(r<0?oe*r-.5:oe*r+.5))*ie,e*ae,e)}function pe(r){return L(r)===r}function ye(r){return pe(r/2)}function ge(r){return ye(r>0?r-1:r+1)}var de=Math.sqrt,he=!0===Ir?0:1,ve=new gr(1),we=new fr(ve.buffer);function be(r,e){return ve[0]=r,we[he]=e>>>0,ve[0]}function me(r){return 0|r}var Ae=1072693247,_e=1e300,Ee=1e-300,Ne=!0===Ir?1:0,Ue=new gr(1),Se=new fr(Ue.buffer);function Ie(r,e){return Ue[0]=r,Se[Ne]=e>>>0,Ue[0]}var xe=1048575,ke=1048576,Fe=1072693248,je=536870912,Te=524288,Oe=20,Ve=9007199254740992,$e=.9617966939259756,Ge=.9617967009544373,He=-7.028461650952758e-9,We=[1,1.5],Ce=[0,.5849624872207642],Le=[0,1.350039202129749e-8],Pe=1.4426950408889634,Re=1.4426950216293335,Me=1.9259629911266175e-8,Ze=.6931471805599453,Xe=1048575,Ye=1048576,qe=1071644672,ze=20,Be=.6931471824645996,De=-1.904654299957768e-9,Je=1072693247,Ke=1105199104,Qe=1139802112,rn=1083179008,en=1072693248,nn=1083231232,tn=3230714880,an=31,on=1e300,un=1e-300,cn=8008566259537294e-32,fn=[0,0],sn=[0,0];function ln(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,d;if(W(r)||W(e))return NaN;if(Vr.assign(e,fn,1,0),o=fn[0],0===fn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return de(r);if(-.5===e)return 1/de(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(B(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:C(r)<1==(e===Z)?0:Z}(r,e)}if(Vr.assign(r,fn,1,0),a=fn[0],0===fn[1]){if(0===a)return function(r,e){return e===M?Z:e===Z?0:e>0?ge(e)?r:0:ge(e)?zr(Z,r):Z}(r,e);if(1===r)return 1;if(-1===r&&ge(e))return-1;if(B(r))return r===M?ln(-0,-e):e<0?0:Z}if(r<0&&!1===pe(e))return(r-r)/(r-r);if(i=C(r),n=a&K|0,t=o&K|0,c=o>>>an|0,u=(u=a>>>an|0)&&ge(e)?-1:1,t>Ke){if(t>Qe)return function(r,e){return(Lr(r)&K)<=Ae?e<0?_e*_e:Ee*Ee:e>0?_e*_e:Ee*Ee}(r,e);if(n<Je)return 1===c?u*on*on:u*un*un;if(n>en)return 0===c?u*on*on:u*un*un;p=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Me-a*Pe)-((t=be(t=(o=Re*i)+u,0))-o),r[0]=t,r[1]=n,r}(sn,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<ke&&(m-=53,n=Lr(e*=Ve)),m+=(n>>Oe)-X|0,n=(A=n&xe|0)|Fe|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ke),o=be(i=(w=(e=Ie(e,n))-(f=We[_]))*(b=1/(e+f)),0),t=(n>>1|je)+Te,c=Ie(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=be(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=be(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=Ge*l,d=(y=He*l+(b-(l-w))*$e+Le[_])-((g=be(g=p+y+(s=Ce[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(sn,i,n);if(y=(l=(e-(f=be(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Vr.assign(y,fn,1,0),g=me(fn[0]),d=me(fn[1]),g>=rn){if(0!=(g-rn|d))return u*on*on;if(l+cn>y-s)return u*on*on}else if((g&K)>=nn){if(0!=(g-tn|d))return u*un*un;if(l<=y-s)return u*un*un}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&K|0)>>ze)-X|0,f=0,s>qe&&(i=Ie(0,((f=r+(Ye>>l+1)>>>0)&~(Xe>>(l=((f&K)>>ze)-X|0)))>>>0),f=(f&Xe|Ye)>>ze-l>>>0,r<0&&(f=-f),e-=i),r=me(r=Lr(c=1-((c=(a=(i=be(i=n+e,0))*Be)+(o=(n-(i-e))*Ze+i*De))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<ze>>>0)>>ze<=0?te(c,f):Ie(c,r)}(g,s,l),u*y}function pn(r,e,n){var t;return W(r)||W(e)||W(n)||n<0?NaN:r===M?0:0===n?r===e?Z:0:(t=le(-C((r-e)/n)))/(n*ln(1+t,2))}function yn(r){return function(){return r}}function gn(r){return W(r)?yn(NaN):function(e){return W(e)?NaN:e===r?Z:0}}return H((function(r,e){return W(r)||W(e)?NaN:r===e?Z:0}),"factory",gn),H(pn,"factory",(function(r,e){return W(r)||W(e)||e<0?yn(NaN):0===e?gn(r):function(n){var t,i;return W(n)?NaN:n===M?0:(i=C((n-r)/e),(t=le(-i))/(e*ln(1+t,2)))}})),pn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=index.js.map