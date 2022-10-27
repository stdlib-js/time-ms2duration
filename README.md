<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# ms2duration

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a number of milliseconds to a string duration.



<section class="usage">

## Usage

To use in Observable,

```javascript
ms2duration = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/time-ms2duration@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ms2duration = require( 'path/to/vendor/umd/time-ms2duration/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-ms2duration@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ms2duration;
})();
</script>
```

#### ms2duration( str )

Converts a number of milliseconds to a string duration.

```javascript
var duration = ms2duration( 1030 );
// returns '1s30ms'

duration = ms2duration( 3600000 );
// returns '1h'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A duration string is a string containing a sequence of time units. A time unit is a non-negative integer followed by a unit identifier. The following unit identifiers are supported:

    -   `d`: days
    -   `h`: hours
    -   `m`: minutes
    -   `s`: seconds
    -   `ms`: milliseconds
    
    For example, the string `1m3s10ms` is a duration string containing three time units: `1m` (1 minute), `3s` (3 seconds), and `10ms` (10 milliseconds). The string `60m` is a duration string containing a single time unit: `60m` (60 minutes).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/time-ms2duration@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var duration = ms2duration( 1030 );
// returns '1s30ms'

duration = ms2duration( 3600000 );
// returns '1h'

duration = ms2duration( 0 );
// returns '0ms'

duration = ms2duration( 86400000 );
// returns '1d'

duration = ms2duration( 86400000+3600000+60000+1000+100 );
// returns '1d1h1m1s100ms'

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-ms2duration.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-ms2duration

[test-image]: https://github.com/stdlib-js/time-ms2duration/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/time-ms2duration/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-ms2duration/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-ms2duration?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-ms2duration.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-ms2duration/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-ms2duration/tree/deno
[umd-url]: https://github.com/stdlib-js/time-ms2duration/tree/umd
[esm-url]: https://github.com/stdlib-js/time-ms2duration/tree/esm
[branches-url]: https://github.com/stdlib-js/time-ms2duration/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-ms2duration/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
