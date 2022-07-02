// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(n){return n!=n},d=function(n){return Math.abs(n)},w=Math.floor,A=Math.ceil,s=w,_=A,m=function(n){return n<0?_(n):s(n)},h=Number.NEGATIVE_INFINITY,N=Number.POSITIVE_INFINITY,U=N,g=h,j=function(n){return n===U||n===g},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),O=Object.prototype.toString,S=O,E=function(n){return S.call(n)},F=Object.prototype.hasOwnProperty,T=function(n,r){return null!=n&&F.call(n,r)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=T,P=H,L=O,M=E,V=function(n){var r,t,e;if(null==n)return L.call(n);t=n[P],r=G(n,P);try{n[P]=void 0}catch(r){return L.call(n)}return e=L.call(n),r?n[P]=t:delete n[P],e},W=I&&"symbol"==typeof Symbol.toStringTag?V:M,x=W,k="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,q=function(n){return k&&n instanceof Uint32Array||"[object Uint32Array]"===x(n)},C=Y,z=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,4294967296,4294967297]),n=q(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=W,Q="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,X=function(n){return Q&&n instanceof Float64Array||"[object Float64Array]"===K(n)},Z=R,$=function(){var n,r;if("function"!=typeof Z)return!1;try{r=new Z([1,3.14,-3.14,NaN]),n=X(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},nn="function"==typeof Float64Array?Float64Array:void 0,rn=function(){throw new Error("not implemented")},tn=$()?nn:rn,en=W,on="function"==typeof Uint8Array,un="function"==typeof Uint8Array?Uint8Array:null,fn=function(n){return on&&n instanceof Uint8Array||"[object Uint8Array]"===en(n)},cn=un,an=function(){var n,r;if("function"!=typeof cn)return!1;try{r=new cn(r=[1,3.14,-3.14,256,257]),n=fn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},ln="function"==typeof Uint8Array?Uint8Array:void 0,yn=function(){throw new Error("not implemented")},pn=an()?ln:yn,bn=W,vn="function"==typeof Uint16Array,dn="function"==typeof Uint16Array?Uint16Array:null,wn=function(n){return vn&&n instanceof Uint16Array||"[object Uint16Array]"===bn(n)},An=dn,sn=function(){var n,r;if("function"!=typeof An)return!1;try{r=new An(r=[1,3.14,-3.14,65536,65537]),n=wn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},_n="function"==typeof Uint16Array?Uint16Array:void 0,mn=function(){throw new Error("not implemented")},hn={uint16:sn()?_n:mn,uint8:pn};(n=new hn.uint16(1))[0]=4660;var Nn,Un,gn=52===new hn.uint8(n.buffer)[0];!0===gn?(Nn=1,Un=0):(Nn=0,Un=1);var jn,In,On=J,Sn={HIGH:Nn,LOW:Un},En=new tn(1),Fn=new On(En.buffer),Tn=Sn.HIGH,Hn=Sn.LOW,Gn=function(n,r){return En[0]=r,n[0]=Fn[Tn],n[1]=Fn[Hn],n},Pn=function(n,r){return 1===arguments.length?Gn([0,0],n):Gn(n,r)},Ln=Pn,Mn=J,Vn=!0===gn?1:0,Wn=new tn(1),xn=new Mn(Wn.buffer),kn=function(n){return Wn[0]=n,xn[Vn]};!0===gn?(jn=1,In=0):(jn=0,In=1);var Yn=J,qn={HIGH:jn,LOW:In},Cn=new tn(1),zn=new Yn(Cn.buffer),Bn=qn.HIGH,Dn=qn.LOW,Jn=function(n,r){return zn[Bn]=n,zn[Dn]=r,Cn[0]},Kn=Ln,Qn=kn,Rn=Jn,Xn=[0,0],Zn=function(n,r){var t,e;return Kn(Xn,n),t=Xn[0],t&=2147483647,e=Qn(r),Rn(t|=e&=2147483648,Xn[1])},$n=j,nr=v,rr=d,tr=function(n,r){return nr(r)||$n(r)?(n[0]=r,n[1]=0,n):0!==r&&rr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},er=function(n,r){return 1===arguments.length?tr([0,0],n):tr(n,r)},or=kn,ur=function(n){var r=or(n);return(r=(2146435072&r)>>>20)-1023|0},ir=N,fr=h,cr=v,ar=j,lr=Zn,yr=er,pr=ur,br=Ln,vr=Jn,dr=[0,0],wr=[0,0],Ar=function(n,r){var t,e;return 0===r||0===n||cr(n)||ar(n)?n:(yr(dr,n),r+=dr[1],(r+=pr(n=dr[0]))<-1074?lr(0,n):r>1023?n<0?fr:ir:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,br(wr,n),t=wr[0],t&=2148532223,e*vr(t|=r+1023<<20,wr[1])))},sr=Ar,_r=sr,mr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},hr=v,Nr=m,Ur=h,gr=N,jr=function(n,r,t){var e,o,u;return u=(e=n-r)-(o=e*e)*mr(o),_r(1-(r-e*u/(2-u)-n),t)},Ir=1.4426950408889634,Or=1/(1<<28),Sr=function(n){var r;return hr(n)||n===gr?n:n===Ur?0:n>709.782712893384?gr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Or?1+n:(r=Nr(n<0?Ir*n-.5:Ir*n+.5),jr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Er=w,Fr=function(n){return Er(n)===n},Tr=Fr,Hr=function(n){return Tr(n/2)},Gr=function(n){return Hr(n>0?n-1:n+1)},Pr=Math.sqrt,Lr=J,Mr=!0===gn?0:1,Vr=new tn(1),Wr=new Lr(Vr.buffer),xr=function(n,r){return Vr[0]=n,Wr[Mr]=r>>>0,Vr[0]},kr=xr,Yr=function(n){return 0|n},qr=Gr,Cr=Zn,zr=h,Br=N,Dr=function(n,r){return r===zr?Br:r===Br?0:r>0?qr(r)?n:0:qr(r)?Cr(Br,n):Br},Jr=kn,Kr=function(n,r){return(2147483647&Jr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Qr=d,Rr=N,Xr=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Qr(n)<1==(r===Rr)?0:Rr},Zr=J,$r=!0===gn?1:0,nt=new tn(1),rt=new Zr(nt.buffer),tt=function(n,r){return nt[0]=n,rt[$r]=r>>>0,nt[0]},et=kn,ot=kr,ut=tt,it=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},ft=1048576,ct=[1,1.5],at=[0,.5849624872207642],lt=[0,1.350039202129749e-8],yt=kr,pt=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},bt=kn,vt=tt,dt=kr,wt=Yr,At=sr,st=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},_t=2147483647,mt=1048575,ht=1048576,Nt=v,Ut=Gr,gt=j,jt=Fr,It=Pr,Ot=d,St=Ln,Et=kr,Ft=Yr,Tt=h,Ht=N,Gt=Dr,Pt=Kr,Lt=Xr,Mt=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w,A,s,_,m,h,N;return m=0,t<ft&&(m-=53,t=et(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=ft),e=524288+(t>>1|536870912),f=(_=1/((r=ut(r,t))+(a=ct[N])))*((s=r-a)-(i=ot(o=s*_,0))*(c=ut(0,e+=N<<18))-i*(r-(c-a))),A=(u=o*o)*u*it(u),c=ot(c=3+(u=i*i)+(A+=f*(i+o)),0),d=(b=-7.028461650952758e-9*(y=ot(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+lt[N])-((v=ot(v=(p=.9617967009544373*y)+b+(l=at[N])+(w=m),0))-w-l-p),n[0]=v,n[1]=d,n},Vt=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*pt(o)*1.4426950408889634)-((e=yt(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},Wt=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&_t|0)>>20)-1023|0,a=0,l>1071644672&&(o=vt(0,((a=n+(ht>>y+1)>>>0)&~(mt>>(y=((a&_t)>>20)-1023|0)))>>>0),a=(a&mt|ht)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=dt(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*st(o),n=bt(c=1-(c*e/(e-2)-(f+c*f)-c)),n=wt(n),c=(n+=a<<20>>>0)>>20<=0?At(c,a):vt(c,n)},xt=2147483647,kt=1083179008,Yt=1e300,qt=1e-300,Ct=[0,0],zt=[0,0],Bt=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w;if(Nt(r)||Nt(t))return NaN;if(St(Ct,t),f=Ct[0],0===Ct[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return It(r);if(-.5===t)return 1/It(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(gt(t))return Lt(r,t)}if(St(Ct,r),i=Ct[0],0===Ct[1]){if(0===i)return Gt(r,t);if(1===r)return 1;if(-1===r&&Ut(t))return-1;if(gt(r))return r===Tt?n(-0,-t):t<0?0:Ht}if(r<0&&!1===jt(t))return(r-r)/(r-r);if(u=Ot(r),e=i&xt|0,o=f&xt|0,a=f>>>31|0,c=(c=i>>>31|0)&&Ut(t)?-1:1,o>1105199104){if(o>1139802112)return Pt(r,t);if(e<1072693247)return 1===a?c*Yt*Yt:c*qt*qt;if(e>1072693248)return 0===a?c*Yt*Yt:c*qt*qt;b=Vt(zt,u)}else b=Mt(zt,u,e);if(p=(t-(l=Et(t,0)))*b[0]+t*b[1],y=l*b[0],St(Ct,v=p+y),d=Ft(Ct[0]),w=Ft(Ct[1]),d>=kt){if(0!=(d-kt|w))return c*Yt*Yt;if(p+8008566259537294e-32>v-y)return c*Yt*Yt}else if((d&xt)>=1083231232){if(0!=(d-3230714880|w))return c*qt*qt;if(p<=v-y)return c*qt*qt}return c*(v=Wt(d,y,p))},Dt=Bt;function Jt(n,r,t){var e,o;return v(n)||v(r)||v(t)||t<0?NaN:n===h?0:0===t?n===r?N:0:(o=d((n-r)/t),(e=Sr(-o))/(t*Dt(1+e,2)))}var Kt=function(n){return function(){return n}},Qt=N,Rt=v,Xt=Kt,Zt=N,$t=v,ne=function(n,r){return Rt(n)||Rt(r)?NaN:n===r?Qt:0};b(ne,"factory",(function(n){return $t(n)?Xt(NaN):function(r){return $t(r)?NaN:r===n?Zt:0}}));var re=ne;return b(Jt,"factory",(function(n,r){return v(n)||v(r)||r<0?Kt(NaN):0===r?re.factory(n):function(t){var e,o;return v(t)?NaN:t===h?0:(o=d((t-n)/r),(e=Sr(-o))/(r*Dt(1+e,2)))}})),Jt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).pdf=r();
//# sourceMappingURL=index.js.map
