<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Logistic][logistic-distribution] distribution [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_pdf" align="center" raw="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" alt="Probability density function (PDF) for a logistic distribution."> -->

<div class="equation" align="center" data-raw-text="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" data-equation="eq:logistic_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/logistic/pdf/docs/img/equation_logistic_pdf.svg" alt="Probability density function (PDF) for a logistic distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `s` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-pdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-pdf@esm/index.mjs';
```

#### pdf( x, mu, s )

Evaluates the [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns ~0.105

y = pdf( -1.0, 4.0, 4.0 );
// returns ~0.043
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pdf( 2.0, 8.0, 0.0 );
// returns 0.0

y = pdf( 8.0, 8.0, 0.0 );
// returns Infinity
```

#### pdf.factory( mu, s )

Returns a function for evaluating the [probability density function][pdf] (PDF) of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mypdf = pdf.factory( 10.0, 2.0 );

var y = mypdf( 10.0 );
// returns 0.125

y = mypdf( 5.0 );
// returns ~0.035
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-pdf@esm/index.mjs';

var mu;
var s;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = pdf( x, mu, s );
    console.log( 'x: %d, µ: %d, s: %d, f(x;µ,s): %d', x, mu, s, y );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-logistic-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-logistic-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-logistic-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-logistic-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-logistic-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-logistic-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-logistic-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-logistic-pdf/main/LICENSE

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
