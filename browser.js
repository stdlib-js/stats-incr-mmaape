// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,j=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,a,o,s,l,f,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(u(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){return"string"==typeof e}function V(e){var r,t,n;if(!N(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var O=Object.prototype,P=O.toString,$=O.__defineGetter__,C=O.__defineSetter__,R=O.__lookupGetter__,G=O.__lookupSetter__,M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",B=U()?function(e){var r,t,n,i,a;if(null==e)return X.call(e);t=e[q],a=q,r=null!=(i=e)&&Y.call(i,a);try{e[q]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[q]=t:delete e[q],n}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return W(e)||K(e)}Z(Q,"isPrimitive",W),Z(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ne(e){return e<ee&&e>re&&te(r=e)===r;var r}function ie(e){return W(e)&&ne(e)}function ae(e){return K(e)&&ne(e.valueOf())}function oe(e){return ie(e)||ae(e)}function ce(e){return ie(e)&&e>0}function ue(e){return ae(e)&&e.valueOf()>0}function se(e){return ce(e)||ue(e)}function le(e){return e!=e}Z(oe,"isPrimitive",ie),Z(oe,"isObject",ae),Z(se,"isPrimitive",ce),Z(se,"isObject",ue);var fe="function"==typeof Float64Array,pe="function"==typeof Float64Array?Float64Array:null,ge="function"==typeof Float64Array?Float64Array:void 0,de=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,NaN]),t=r,e=(fe&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")};function he(e){return Math.abs(e)}var ye=1.5707963267948966,be=6123233995736766e-32;function ve(e){var r,t,n,i;return le(e)||0===e?e:e===ee?ye:e===re?-ye:(e<0&&(t=!0,e=-e),r=0,e>2.414213562373095?(n=ye,r=1,e=-1/e):e<=.66?n=0:(n=.7853981633974483,r=2,e=(e-1)/(e+1)),i=(i=e*e)*function(e){return 0===e?-64.85021904942025:e*(e*(e*(-.8750608600031904*e-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(e){return 0===e?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+1*e))))}(i),i=e*i+e,2===r?i+=.5*be:1===r&&(i+=be),n+=i,t?-n:n)}return function(e){var r;if(!ce(e))throw new TypeError(V("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=function(e){var r,t,n,i,a;if(!ce(e))throw new TypeError(V("invalid argument. Must provide a positive integer. Value: `%s`.",e));return t=new de(e),n=0,a=-1,i=0,function(o){var c;if(0===arguments.length)return 0===i?null:n;if(a=(a+1)%e,le(o))i=e,n=NaN;else if(i<e)n+=(r=o-n)/(i+=1);else if(le(t[a])){for(i=1,n=o,c=0;c<e;c++)if(c!==a){if(le(t[c])){i=e,n=NaN;break}i+=1,r=t[c]-n,n+=r/i}}else!1===le(n)&&(r=o-t[a],n+=r/e);return t[a]=o,n}}(e),function(e,t){return 0===arguments.length?r():r(ve(he((t-e)/t)))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmmaape=r();
//# sourceMappingURL=browser.js.map
