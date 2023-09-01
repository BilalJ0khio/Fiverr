/*! For license information please see index.8480840d7cbc16d0826c.js.LICENSE */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ua-parser-js"),require("lodash")):"function"==typeof define&&define.amd?define(["ua-parser-js","lodash"],e):"object"==typeof exports?exports.SupportChat=e(require("ua-parser-js"),require("lodash")):t.SupportChat=e(t.uaParser,t._)}("undefined"!=typeof self?self:this,(function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/support_chat/",r(r.s="tjUo")}({"/v4g":function(t,e,r){var n=r("92xy"),o=n.MOBILE_DEVICE,i=n.TABLET_DEVICE,a=n.IOS_OS_NAME,u=n.ANDROID_OS_NAME;t.exports={isMobile:function(t){return t===o},isTouch:function(t){return[o,i].includes(t)},isIos:function(t){return t===a},isAndroid:function(t){return t===u}}},"6BTq":function(t,e,r){"use strict";(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.d(e,"a",(function(){return o}));var o="object"===("undefined"==typeof window?"undefined":n(window))&&window.window===window&&window||"object"===(void 0===t?"undefined":n(t))&&t.global===t&&t||"object"===("undefined"==typeof self?"undefined":n(self))&&self.self===self&&self}).call(this,r("yLpj"))},"8rrE":function(e,r){e.exports=t},"92xy":function(t,e){t.exports={MOBILE_DEVICE:"mobile",TABLET_DEVICE:"tablet",DESKTOP_DEVICE:"desktop",IOS_OS_NAME:"iOS",ANDROID_OS_NAME:"Android"}},VgKM:function(t,e,r){var n=r("pqiq").DEFAULT_LOCALE;e.DEFAULT_CONTEXT={locale:n,computedLocale:n,userId:0,country:"",countryCode:"",pageCtxId:"",isPro:!1,abTests:{},userAgent:"",knownCrawler:!1,csrfToken:"",browserLanguage:"",currency:"",pathParameters:{},queryParameters:{},userGuid:"",url:"",ip:"",referrer:"",organizationId:"",experience:{isBuyer:!1,isSeller:!1,isBusiness:!1,value:""},isMobile:!1,isTouch:!1,isIos:!1}},YLtl:function(t,r){t.exports=e},pqiq:function(t,e){e.DEFAULT_LOCALE="en-US"},tjUo:function(t,e,r){"use strict";r.r(e);var n=r("6BTq");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,a=void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===o(a)?a:String(a)),n)}var i,a}var a=Symbol(),u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this[a]=new Map}var e,r,n;return e=t,(r=[{key:"on",value:function(t,e){var r=this[a].get(t);r||(this[a].set(t,new Set),r=this[a].get(t)),r.add(e)}},{key:"once",value:function(t,e){var r=this,n=function n(){r.off(t,n),e.apply(void 0,arguments)};this.on(t,n)}},{key:"one",value:function(t,e){this.has(t)||this.on(t,e)}},{key:"has",value:function(t){return this[a].has(t)}},{key:"off",value:function(t,e){if(this[a].has(t))if(void 0!==e){var r=this[a].get(t);r.delete(e),0===r.size&&this[a].delete(t)}else this[a].delete(t)}},{key:"emit",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=this[a].get(t);o&&o.forEach((function(t){t.apply(void 0,r)}))}},{key:"deferred",value:function(t){for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Promise.resolve().then((function(){e.emit.apply(e,[t].concat(n))}))}}])&&i(e.prototype,r),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c=Symbol.for("globalEventBus"),s=n.a[c]=n.a[c]||new u,l=["count","time","gauge","set","histogram"];function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=l.reduce((function(t,e){return Object.assign(t,f({},e,(function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.rate,a=o.tags,u=o.enforceRate;Object.entries({prefix:t,metric:r}).forEach((function(t,e){var r=p(t,2),n=r[0],o=r[1];if("string"!=typeof o||!o)throw new TypeError("Expected argument ".concat(e," (").concat(n,") to be a string. Instead got ").concat(d(o)," (").concat(o,")"))}));var c=[t,r].join(".");return s.deferred("OBS::STATS",{type:e,key:c,value:n,rate:i,tags:a,enforceRate:u})})))}),{});Object.defineProperty(h,"prefix",{value:function(t){return l.reduce((function(e,r){return Object.assign(e,f({},r,h[r].bind(h,t)))}),{})}});var b=h,v="CACHED",m="LIVE",g={OPEN:"OPEN",SHOWN:"SHOWN",HIDDEN:"HIDDEN",EMPTY:"EMPTY"},w="supportchat:init",S="SUPPORT.CHAT.STATE",O="succeeded",j="failed",E="ada.chat_script_initiate",_="ada.chat_script_initiated",A="ada.chat_script_failed",x="ada.chat_widget_initiated",P="ada.chat_widget_campaign_triggered",T="ada.chat_widget_campaign_failed",L=r("YLtl"),k=r.n(L),I="OBS::LOGGER",C=["debug","verbose","info","warn","error","critical"];function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===D(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M=C.reduce((function(t,e){return Object.assign(t,N({},e,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.deferred(I,{entity:t,enrichments:r,level:e})})))}),{});Object.defineProperty(M,"force",{value:C.reduce((function(t,e){return Object.assign(t,N({},e,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.deferred(I,{entity:t,enrichments:r,level:e,force:!0})})))}),{})});var B=M,F=r("8rrE"),G=r.n(F),U=r("/v4g");function H(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var z=Symbol(),V=function(t,e,r){Object.defineProperty(t,e,{value:r,writable:!1,enumerable:!1})},q=function(t){if(t[z])return t;if(!function(t){return!!t&&Object(L.isObject)(t)&&!Array.isArray(t)}(t))return B.error("FiverrContext computed mixin target is not valid, please contact platform team."),t;var e=t.userAgent,r=G()(e),n=r.device.type,o=r.os.name,i={isMobile:U.isMobile(n),isTouch:U.isTouch(n),isIos:U.isIos(o),isAndroid:U.isAndroid(o)};return V(t,z,!0),Object.entries(i).forEach((function(e){var r=H(e,2),n=r[0],o=r[1];return V(t,n,o)})),t},Y=r("VgKM"),$=function(){var t=k.a.get(window,"initialData.FiverrContext");return t?q(t):(B.error({message:"Browser context does not exist, please ensure the run time owner sets one on the window scope before using this API"}),Y.DEFAULT_CONTEXT)},K={send:function(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.deferred(t,{events:r})}}("OBS::BIG_QUERY")};function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){Q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Q(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==W(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===W(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="reason_";return t.filter((function(t){return-1!==t.indexOf(e)})).reduce((function(t,r){return r.slice(e.length)}),"")},tt=function(){return{group:"user_actions",platform:"web",user:{id:window.dataLayer&&window.dataLayer.length&&window.dataLayer[0]&&window.dataLayer[0].user_id},feature:{name:"support_chat"},reason:"support_chat_to_vibs",sub_group:"website_actions",action:{type:"click"}}},et=function(t){var e=X(X(X({},tt()),{domain:{name:"buyers"},publisher:{domain:"buyers",sub_domain:"grizzlies"}}),{},{type:"chat_triggered",reason:Z(t)});K.send(e)},rt=function(){return!!$().userId},nt=function(t){window.axios.get("/zendesk/chat_authentication").then((function(t){return t.data})).then((function(e){console.log("Successfully authenticated into Zendesk chat"),t(e.jwt)})).catch((function(t){console.error(t)}))},ot=function(t){return b.count("packages.support_chat_package",t)},it=function(){return"".concat(Math.random()).slice(-8)+"".concat(Date.now()).slice(8)},at=Symbol.for("futile uid");function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ct(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(r),!0).forEach((function(e){bt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ct(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ft(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ft(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function dt(){dt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),u=new _(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function d(){}function p(){}function y(){}var h={};c(h,i,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(A([])));v&&v!==e&&r.call(v,i)&&(h=v);var m=y.prototype=d.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==ut(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=y,n(m,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,u,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function pt(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function yt(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){pt(i,n,o,a,u,"next",t)}function u(t){pt(i,n,o,a,u,"throw",t)}a(void 0)}))}}function ht(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,vt(n.key),n)}}function bt(t,e,r){return(e=vt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function vt(t){var e=function(t,e){if("object"!==ut(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==ut(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===ut(e)?e:String(e)}n.a[at]=n.a[at]||new Set;var mt=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),bt(this,"initChat",function(){var t=yt(dt().mark((function t(e){var n;return dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ot(E),e&&"EMPTY"!==e.state&&e.chat_id){t.next=3;break}return t.abrupt("return");case 3:if(!e||"HIDDEN"!==e.state){t.next=6;break}return r.closeChatIfOpen(e),t.abrupt("return");case 6:if(r.initOnScrollListener(),!r.__initialized){t.next=11;break}r.toggleChat(e),t.next=21;break;case 11:if(!0!==e.enableForGuests){t.next=15;break}t.t0="",t.next=18;break;case 15:return t.next=17,r.getToken();case 17:t.t0=t.sent;case 18:n=t.t0,r.initScript(e,r.initLoadScripBehavior),r.initAdaSettings(e,n);case 21:window.toggleChat=r.toggleChat;case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),bt(this,"initScript",(function(t,e){if(!document.getElementById(r.scriptAttributes.id))try{var n=document.createElement("script");Object.entries(r.scriptAttributes).forEach((function(t){var e=lt(t,2),r=e[0],o=e[1];n.setAttribute(r,o)})),n.onload=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),ot(_)}catch(t){throw ot(A),t}})),bt(this,"initLoadScripBehavior",(function(){r.__initialized=!0,r.initGlobalChatObject()})),bt(this,"toggleChat",(function(t){window.adaEmbed&&r.__initialized&&(window.adaEmbed.toggle(),window.adaEmbed.setMetaFields(st(st({},t),{},{source:"LETS_CHAT_CLICKED"})))})),bt(this,"closeChatIfOpen",function(){var t=yt(dt().mark((function t(e){var n;return dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.adaEmbed&&r.__initialized){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,window.adaEmbed.getInfo();case 4:null!=(n=t.sent)&&n.isChatOpen&&r.toggleChat(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),bt(this,"triggerCampaign",function(){var t=yt((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return dt().mark((function r(){return dt().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,window.adaEmbed.setMetaFields(e);case 3:return r.next=5,window.adaEmbed.triggerCampaign(t);case 5:ot("".concat(P,".").concat(t)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),B.warn(r.t0,{campaignName:t,source:"Chat-triggerCampaign"}),ot("".concat(T,".").concat(t));case 12:case"end":return r.stop()}}),r,null,[[0,8]])}))()}));return function(e){return t.apply(this,arguments)}}()),this.scriptAttributes={id:"__ada",src:"https://static.ada.support/embed2.js","data-handle":t.getChatBotInstanceByChatId(e.chat_id),type:"application/javascript"},this.__initialized=!1,this.initChat(e)}var e,r,o,i,a,u;return e=t,(r=[{key:"initAdaSettings",value:function(t,e){var r,o=this,i=$(),a=function(){for(var t=it();n.a[at].has(t);)t=it();return n.a[at].add(t),t}();this.initTokenRefetch(t.enableForGuests),window.adaSettings={adaReadyCallback:(r=yt(dt().mark((function e(){return dt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Ada Embed is done setting up. Chat support is now available."),"true"===localStorage.getItem("ada-embed_is-drawer-open")&&window.adaEmbed.toggle(),ot(x),e.next=5,o.initCampaign(t);case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),crossWindowPersistence:!0,zdChatterAuthCallback:nt,sensitiveMetaFields:{jwt_token:e},toggleCallback:function(t){var e,r,n,u;t&&(o.initAdaChatStyleSettings(),e={userId:i.userId,uid:a},r=e.userId,n=e.uid,u=X(X({},tt()),{},{group:"ada_chatbot",type:"chatbot_opened",user:{id:r},uid:n,entity:"business"}),K.send(u))},metaFields:st(st({},t),{},{subdomain:location.host,locale:i.locale,context_id:i.pageCtxId})}}},{key:"initCampaign",value:(u=yt(dt().mark((function t(e){return dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.adaEmbed||!e.tags||!e.tags.includes("potential_medium_spender")&&!e.tags.includes("potential_high_spender")){t.next=3;break}return t.next=3,window.adaEmbed.triggerCampaign("Potential_for_migration_2");case 3:case"end":return t.stop()}}),t)}))),function(t){return u.apply(this,arguments)})},{key:"getToken",value:(a=yt(dt().mark((function t(){var e,r,n;return dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.axios.get("/chat/ada/token");case 3:if(n=t.sent,null!==(e=n.data)&&void 0!==e&&null!==(r=e.token)&&void 0!==r&&r.length&&"EMPTY"!==n.data.token){t.next=6;break}throw new Error("Ada token is empty");case 6:return t.abrupt("return",n.data.token);case 9:t.prev=9,t.t0=t.catch(0),B.warn(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),function(){return a.apply(this,arguments)})},{key:"initTokenRefetch",value:function(t){var e=this;!0!==t&&setInterval((function(){return e.applyToken()}),42e4)}},{key:"applyToken",value:(i=yt(dt().mark((function t(){var e;return dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.adaEmbed&&this.__initialized){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.getToken();case 4:e=t.sent,window.adaEmbed.setSensitiveMetaFields({jwt_token:e});case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"initAdaChatStyleSettings",value:function(){var t=!1,e=0,r=Object(L.throttle)((function(){var n=document.getElementById("ada-chat-frame");n?(n.style.zIndex=2000000006,t=!0):e<2&&(e+=1,r())}),1e3);r(),(t||2===e)&&r.cancel()}},{key:"initOnScrollListener",value:function(){var t=this,e=document.getElementById("ada-button-frame");if(!e)return setTimeout((function(){10!==t.initOnScrollListener.retries&&(t.initOnScrollListener.retries=(t.initOnScrollListener.retries||0)+1,t.initOnScrollListener())}),1e3);setTimeout((function(){return t.toggleButtonVisibility(e)}),0),document.onscroll=Object(L.throttle)((function(){return t.toggleButtonVisibility(e)}),50)}},{key:"toggleButtonVisibility",value:function(t){window.innerHeight+window.scrollY>document.body.clientHeight-20?t.classList.add("invisible-element"):t.classList.remove("invisible-element")}},{key:"initGlobalChatObject",value:function(){window.Chat={toggle:this.toggleChat,triggerCampaign:this.triggerCampaign}}}])&&ht(e.prototype,r),o&&ht(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();bt(mt,"CHATBOT_INSTANCE_HANDLES",{BUSINESS:"fiverr",FIVERR:"fiverr-mp",DEV:"demo-sandbox-fiverr"}),bt(mt,"getChatBotInstanceByChatId",(function(t){switch(t){case"vib":case"business":case"potential_business_spender":return mt.CHATBOT_INSTANCE_HANDLES.BUSINESS;case"pure_buyer":default:return mt.CHATBOT_INSTANCE_HANDLES.FIVERR}}));var gt=mt;function wt(t){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function St(t){return function(t){if(Array.isArray(t))return Ot(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ot(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function jt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(r),!0).forEach((function(e){_t(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _t(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==wt(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==wt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===wt(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function At(){var t=window.localStorage.getItem(S);if(t)try{return JSON.parse(t)}catch(t){window.localStorage.removeItem(S)}}function xt(){return window.axios.get("/zendesk/chat/state").then((function(t){return t.data})).then((function(t){if(t){if(void 0!==t.success&&!1===t.success)return;var e=Et(Et({},t),{},{tags:[].concat(St(t.tags||[]),["user_type-".concat(window.dataLayer&&window.dataLayer[0].user_type)])});return function(t){var e=JSON.stringify(Et(Et({},t),{},{createdAt:t.createdAt||new Date}));window.localStorage.setItem(S,e)}(e),ot(O),e}})).catch((function(t){throw ot(j),t}))}function Pt(t){var e=Object.assign({},t);if("true"===new URLSearchParams(window.location.search).get("openSupportChat")){var r=new URLSearchParams(window.location.search).get("utm_source"),n="reason_".concat(r||"url_triggered_chat");Object.assign(e,{state:g.OPEN,tags:[].concat(St(e.tags),[n])});var o=[].concat(St(e.tags),["user_type-".concat(window.dataLayer&&window.dataLayer[0].user_type)]);et(o)}return e}function Tt(){if(!window.axios)return setTimeout((function(){10!==Tt.retries&&(Tt.retries=(Tt.retries||0)+1,Tt())}),500);var t=At(),e=function(t){if(!t)return!0;var e=new Date(t),r=new Date(e.getTime()+864e5);return new Date>r}(t&&t.createdAt),r="2"===$().abTests[3705],n=!(null==t||!t.ada_chatbot_enabled);if(e||n!==r)return xt().then((function(t){if(t){var e=Pt(t);new gt(e)}}));var o=Pt(t);new gt(o)}var Lt=function(t){if(rt())switch(t){case m:return"Live flow TBD";case v:default:return Tt()}else window.localStorage.removeItem(S)};function kt(t){return function(t){if(Array.isArray(t))return It(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return It(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return It(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ct(t){var e=t.detail,r=e.chat_id,n=e.department,o=e.tags,i=e.state,a=e.createdAt,u=e.enableForGuests;if(rt()||u){var c=At();!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw new Error('"detail" payload is not defined for event. Please, fire event like new CustomEvent("supportchat:init", { detail: { ...your properties } })');if(!t.chat_id&&!e.chat_id)throw new Error('Missing param "chat_id" needed to initiate support chat');if(!t.department&&!e.department)throw new Error('Missing param "department" needed to initiate support chat');if(!t.tags)throw new Error('Missing param "tags" needed to initiate support chat');var r=t.state||e.state;if(!r)throw new Error('Missing param "state" needed to initiate support chat');if(r&&!Object.values(g).find((function(t){return t===r})))throw new Error('"state" property has to have one of these values: '.concat(Object.values(g).toString()));if(t.createdAt&&!(t.createdAt instanceof Date))throw new Error('"createdAt" param has to be of type Date')}(t.detail,c);var s=[].concat(kt(o),["user_type-".concat(window.dataLayer&&window.dataLayer[0].user_type)]),l={chat_id:r,department:n,tags:s,state:i,createdAt:a,enableForGuests:u};et(s);var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{chat_id:t.chat_id||e.chat_id,department:t.department||e.department,tags:t.tags?[].concat(kt(e.tags?e.tags:[]),kt(t.tags)):e.tags,state:t.state||e.state,createdAt:t.createdAt||e.createdAt,enableForGuests:t.enableForGuests}}(l,c);new gt(f)}else window.localStorage.removeItem(S)}window.addEventListener(w,Ct),Lt(window.SUPPORT_CHAT_TYPE),b.count("business_support_chat","impression.script")},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}})}));