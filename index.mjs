// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function r(r){var i;if(!e(r))throw new TypeError(t("null2V",r));return 0===r?"0ms":(i="",r>=864e5&&(i+=s(r/864e5)+"d",r%=864e5),r>=36e5&&(i+=s(r/36e5)+"h",r%=36e5),r>=6e4&&(i+=s(r/6e4)+"m",r%=6e4),r>=1e3&&(i+=s(r/1e3)+"s",r%=1e3),r>0&&(i+=r+"ms"),i)}export{r as default};
//# sourceMappingURL=index.mjs.map
