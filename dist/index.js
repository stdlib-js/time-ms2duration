"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var n=u(function(p,t){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,i=require('@stdlib/math-base-special-floor/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r){var e;if(!o(r))throw new TypeError(f('1hB2K',r));return r===0?"0ms":(e="",r>=864e5&&(e+=i(r/864e5)+"d",r%=864e5),r>=36e5&&(e+=i(r/36e5)+"h",r%=36e5),r>=6e4&&(e+=i(r/6e4)+"m",r%=6e4),r>=1e3&&(e+=i(r/1e3)+"s",r%=1e3),r>0&&(e+=r+"ms"),e)}t.exports=v
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
