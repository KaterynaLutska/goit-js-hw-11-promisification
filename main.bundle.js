!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4)},function(e,t,n){},function(e,t,n){"use strict";var r=function(e){return new Promise((function(t){setTimeout((function(){t(e)}),e)}))},o=function(e){return console.log("Resolved after ".concat(e,"ms"))};r(2e3).then(o),r(1e3).then(o),r(1500).then(o)},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],u=function(e,t){return new Promise((function(n){n(e.map((function(e){return e.name===t?o(o({},e),{},{active:!e.active}):e})))}))},a=function(e){return console.table(e)};u(i,"Mango").then(a),u(i,"Lux").then(a)},function(e,t,n){"use strict";var r=function(e){var t,n,r=(t=200,n=500,Math.floor(Math.random()*(n-t+1)+t)),o={id:e.id,time:r};return new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e(o):t(o)}),r)}))},o=function(e){var t=e.id,n=e.time;console.log("Transaction ".concat(t," processed in ").concat(n,"ms"))},c=function(e){var t=e.id;console.warn("Error processing transaction ".concat(t,". Please try again later."))};r({id:70,amount:150}).then(o).catch(c),r({id:71,amount:230}).then(o).catch(c),r({id:72,amount:75}).then(o).catch(c),r({id:73,amount:100}).then(o).catch(c)}]);
//# sourceMappingURL=main.bundle.js.map