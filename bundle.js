// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r};var b=function(r){return Math.abs(r)},d=Math.floor,w=Math.ceil,A=d,s=w;var _=function(r){return r<0?s(r):A(r)},m=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,N=h,U=m;var g=function(r){return r===N||r===U};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return j&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty;var T=function(r,n){return null!=r&&F.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=T,P=H,L=O;var M=E,V=function(r){var n,t,e;if(null==r)return L.call(r);t=r[P],n=G(r,P);try{r[P]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[P]=t:delete r[P],e},W=I()?V:M,x=W,k="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null,q=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===x(r)},C=Y;var z=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=q(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=W,Q="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),r=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var rr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){throw new Error("not implemented")},tr=$()?rr:nr,er=W,ur="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ir=function(r){return ur&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},ar=or;var fr=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=ir(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var cr="function"==typeof Uint8Array?Uint8Array:void 0,vr=function(){throw new Error("not implemented")},lr=fr()?cr:vr,yr=W,pr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,dr=function(r){return pr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},wr=br;var Ar=function(){var r,n;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),r=dr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var sr,_r="function"==typeof Uint16Array?Uint16Array:void 0,mr=function(){throw new Error("not implemented")},hr={uint16:Ar()?_r:mr,uint8:lr};(sr=new hr.uint16(1))[0]=4660;var Nr,Ur,gr=52===new hr.uint8(sr.buffer)[0];!0===gr?(Nr=1,Ur=0):(Nr=0,Ur=1);var jr=J,Ir={HIGH:Nr,LOW:Ur},Or=new tr(1),Sr=new jr(Or.buffer),Er=Ir.HIGH,Fr=Ir.LOW;var Tr=function(r,n){return Or[0]=n,r[0]=Sr[Er],r[1]=Sr[Fr],r};var Hr=function(r,n){return 1===arguments.length?Tr([0,0],r):Tr(r,n)},Gr=Hr,Pr=J,Lr=!0===gr?1:0,Mr=new tr(1),Vr=new Pr(Mr.buffer);var Wr,xr,kr=function(r){return Mr[0]=r,Vr[Lr]};!0===gr?(Wr=1,xr=0):(Wr=0,xr=1);var Yr=J,qr={HIGH:Wr,LOW:xr},Cr=new tr(1),zr=new Yr(Cr.buffer),Br=qr.HIGH,Dr=qr.LOW;var Jr=function(r,n){return zr[Br]=r,zr[Dr]=n,Cr[0]},Kr=Gr,Qr=kr,Rr=Jr,Xr=[0,0];var Zr=function(r,n){var t,e;return Kr(Xr,r),t=Xr[0],t&=2147483647,e=Qr(n),Rr(t|=e&=2147483648,Xr[1])},$r=g,rn=p,nn=b;var tn=function(r,n){return rn(n)||$r(n)?(r[0]=n,r[1]=0,r):0!==n&&nn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var en=function(r,n){return 1===arguments.length?tn([0,0],r):tn(r,n)},un=kr;var on=function(r){var n=un(r);return(n=(2146435072&n)>>>20)-1023|0},an=h,fn=m,cn=p,vn=g,ln=Zr,yn=en,pn=on,bn=Gr,dn=Jr,wn=[0,0],An=[0,0];var sn=function(r,n){var t,e;return 0===n||0===r||cn(r)||vn(r)?r:(yn(wn,r),n+=wn[1],(n+=pn(r=wn[0]))<-1074?ln(0,r):n>1023?r<0?fn:an:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,bn(An,r),t=An[0],t&=2148532223,e*dn(t|=n+1023<<20,An[1])))},_n=sn;var mn=_n,hn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Nn=p,Un=_,gn=m,jn=h,In=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*hn(u),mn(1-(n-e*o/(2-o)-r),t)},On=1.4426950408889634,Sn=1/(1<<28);var En=function(r){var n;return Nn(r)||r===jn?r:r===gn?0:r>709.782712893384?jn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Sn?1+r:(n=Un(r<0?On*r-.5:On*r+.5),In(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Fn=d;var Tn=function(r){return Fn(r)===r},Hn=Tn;var Gn=function(r){return Hn(r/2)};var Pn=function(r){return Gn(r>0?r-1:r+1)},Ln=Math.sqrt,Mn=J,Vn=!0===gr?0:1,Wn=new tr(1),xn=new Mn(Wn.buffer);var kn=function(r,n){return Wn[0]=r,xn[Vn]=n>>>0,Wn[0]},Yn=kn;var qn=function(r){return 0|r},Cn=Pn,zn=Zr,Bn=m,Dn=h;var Jn=function(r,n){return n===Bn?Dn:n===Dn?0:n>0?Cn(n)?r:0:Cn(n)?zn(Dn,r):Dn},Kn=kr;var Qn=function(r,n){return(2147483647&Kn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Rn=b,Xn=h;var Zn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Rn(r)<1==(n===Xn)?0:Xn},$n=J,rt=!0===gr?1:0,nt=new tr(1),tt=new $n(nt.buffer);var et=function(r,n){return nt[0]=r,tt[rt]=n>>>0,nt[0]};var ut=kr,ot=Yn,it=et,at=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ft=1048576,ct=[1,1.5],vt=[0,.5849624872207642],lt=[0,1.350039202129749e-8];var yt=Yn,pt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var bt=kr,dt=et,wt=Yn,At=qn,st=_n,_t=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},mt=2147483647,ht=1048575,Nt=1048576;var Ut=p,gt=Pn,jt=g,It=Tn,Ot=Ln,St=b,Et=Gr,Ft=Yn,Tt=qn,Ht=m,Gt=h,Pt=Jn,Lt=Qn,Mt=Zn,Vt=function(r,n,t){var e,u,o,i,a,f,c,v,l,y,p,b,d,w,A,s,_,m,h,N;return m=0,t<ft&&(m-=53,t=ut(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=ft),e=524288+(t>>1|536870912),a=(_=1/((n=it(n,t))+(c=ct[N])))*((s=n-c)-(i=ot(u=s*_,0))*(f=it(0,e+=N<<18))-i*(n-(f-c))),A=(o=u*u)*o*at(o),f=ot(f=3+(o=i*i)+(A+=a*(i+u)),0),d=(p=-7.028461650952758e-9*(l=ot(l=(s=i*f)+(_=a*f+(A-(f-3-o))*u),0))+.9617966939259756*(_-(l-s))+lt[N])-((b=ot(b=(y=.9617967009544373*l)+p+(v=vt[N])+(w=m),0))-w-v-y),r[0]=b,r[1]=d,r},Wt=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*pt(u)))-((e=yt(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},xt=function(r,n,t){var e,u,o,i,a,f,c,v,l;return l=((v=r&mt|0)>>20)-1023|0,c=0,v>1071644672&&(u=dt(0,((c=r+(Nt>>l+1)>>>0)&~(ht>>(l=((c&mt)>>20)-1023|0)))>>>0),c=(c&ht|Nt)>>20-l>>>0,r<0&&(c=-c),n-=u),a=(i=.6931471805599453*(t-((u=wt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((f=(o=.6931471824645996*u)+i)-o),e=f-(u=f*f)*_t(u),r=bt(f=1-(f*e/(e-2)-(a+f*a)-f)),r=At(r),f=(r+=c<<20>>>0)>>20<=0?st(f,c):dt(f,r)},kt=2147483647,Yt=1083179008,qt=1e300,Ct=1e-300,zt=[0,0],Bt=[0,0];var Dt=function r(n,t){var e,u,o,i,a,f,c,v,l,y,p,b,d,w;if(Ut(n)||Ut(t))return NaN;if(Et(zt,t),a=zt[0],0===zt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Ot(n);if(-.5===t)return 1/Ot(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(jt(t))return Mt(n,t)}if(Et(zt,n),i=zt[0],0===zt[1]){if(0===i)return Pt(n,t);if(1===n)return 1;if(-1===n&&gt(t))return-1;if(jt(n))return n===Ht?r(-0,-t):t<0?0:Gt}if(n<0&&!1===It(t))return(n-n)/(n-n);if(o=St(n),e=i&kt|0,u=a&kt|0,c=a>>>31|0,f=(f=i>>>31|0)&&gt(t)?-1:1,u>1105199104){if(u>1139802112)return Lt(n,t);if(e<1072693247)return 1===c?f*qt*qt:f*Ct*Ct;if(e>1072693248)return 0===c?f*qt*qt:f*Ct*Ct;p=Wt(Bt,o)}else p=Vt(Bt,o,e);if(y=(t-(v=Ft(t,0)))*p[0]+t*p[1],l=v*p[0],Et(zt,b=y+l),d=Tt(zt[0]),w=Tt(zt[1]),d>=Yt){if(0!=(d-Yt|w))return f*qt*qt;if(y+8008566259537294e-32>b-l)return f*qt*qt}else if((d&kt)>=1083231232){if(0!=(d-3230714880|w))return f*Ct*Ct;if(y<=b-l)return f*Ct*Ct}return f*(b=xt(d,l,y))},Jt=Dt,Kt=p,Qt=b,Rt=En,Xt=Jt,Zt=m,$t=h;var re=function(r,n,t){var e,u;return Kt(r)||Kt(n)||Kt(t)||t<0?NaN:r===Zt?0:0===t?r===n?$t:0:(u=Qt((r-n)/t),(e=Rt(-u))/(t*Xt(1+e,2)))};var ne=function(r){return function(){return r}},te=h,ee=p;var ue=ne,oe=h,ie=p;var ae=function(r,n){return ee(r)||ee(n)?NaN:r===n?te:0};y(ae,"factory",(function(r){return ie(r)?ue(NaN):function(n){if(ie(n))return NaN;return n===r?oe:0}}));var fe=ne,ce=ae.factory,ve=p,le=b,ye=En,pe=Jt,be=m;var de=re;return y(de,"factory",(function(r,n){return ve(r)||ve(n)||n<0?fe(NaN):0===n?ce(r):function(t){var e,u;if(ve(t))return NaN;if(t===be)return 0;return u=le((t-r)/n),(e=ye(-u))/(n*pe(1+e,2))}})),de}));
//# sourceMappingURL=bundle.js.map
