// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@v0.1.0-esm/index.mjs";function o(s,m,a){var o,l;return t(s)||t(m)||t(a)||a<0?NaN:s===r?0:0===a?s===m?d:0:(l=e((s-m)/a),(o=n(-l))/(a*i(1+o,2)))}function l(s,d){return t(s)||t(d)||d<0?m(NaN):0===d?a(s):function(m){var a,o;if(t(m))return NaN;if(m===r)return 0;return o=e((m-s)/d),(a=n(-o))/(d*i(1+a,2))}}s(o,"factory",l);export{o as default,l as factory};
//# sourceMappingURL=index.mjs.map