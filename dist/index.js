"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=a(function(d,t){
var u=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,i=require('@stdlib/math-base-special-floor/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r){var e;if(!u(r))throw new TypeError(o('1hB2K',r));return r===0?"0ms":(e="",r>=864e5&&(e+=i(r/864e5)+"d",r%=864e5),r>=36e5&&(e+=i(r/36e5)+"h",r%=36e5),r>=6e4&&(e+=i(r/6e4)+"m",r%=6e4),r>=1e3&&(e+=i(r/1e3)+"s",r%=1e3),r>0&&(e+=r+"ms"),e)}t.exports=f
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
