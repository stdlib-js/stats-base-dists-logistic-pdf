"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(x,q){
var u=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-abs/dist'),y=require('@stdlib/math-base-special-exp/dist'),d=require('@stdlib/math-base-special-pow/dist'),z=require('@stdlib/constants-float64-ninf/dist'),F=require('@stdlib/constants-float64-pinf/dist');function I(e,r,a){var i,t;return u(e)||u(r)||u(a)||a<0?NaN:e===z?0:a===0?e===r?F:0:(t=s((e-r)/a),i=y(-t),i/(a*d(1+i,2)))}q.exports=I
});var N=f(function(A,c){
var b=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,n=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-exp/dist'),O=require('@stdlib/math-base-special-pow/dist'),P=require('@stdlib/constants-float64-ninf/dist');function R(e,r){if(n(e)||n(r)||r<0)return b(NaN);if(r===0)return w(e);return a;function a(i){var t,v;return n(i)?NaN:i===P?0:(v=g((i-e)/r),t=l(-v),t/(r*O(1+t,2)))}}c.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),j=N();h(p,"factory",j);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
