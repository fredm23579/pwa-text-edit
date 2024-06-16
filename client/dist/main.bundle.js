/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={16:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=a},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var h=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var d=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;try{self["workbox:window:6.5.4"]&&_()}catch(r){}function r(t,n){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(t){e(t.data)},t.postMessage(n,[r.port2])}))}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.4"]&&_()}catch(r){}var a=function(){var t=this;this.promise=new Promise((function(n,e){t.resolve=n,t.reject=e}))};function c(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var s=function(t,n){this.type=t,Object.assign(this,n)};function u(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function l(){}var f={type:"SKIP_WAITING"};function h(t,n){if(!n)return t&&t.then?t.then(l):Promise.resolve()}var p=function(t){var n,e;function o(n,e){var r,o;return void 0===e&&(e={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new a,r.en=new a,r.on=new a,r.un=0,r.an=new Set,r.cn=function(){var t=r.fn,n=t.installing;r.tn>0||!c(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,t.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(t){var n=r.fn,e=t.target,o=e.state,i=e===r.vn,a={sw:e,isExternal:i,originalEvent:t};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new s(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===e&&r.dispatchEvent(new s("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(e))},r.dn=function(t){var n=r.hn,e=n!==navigator.serviceWorker.controller;r.dispatchEvent(new s("controlling",{isExternal:e,originalEvent:t,sw:n,isUpdate:r.mn})),e||r.on.resolve(n)},r.gn=(o=function(t){var n=t.data,e=t.ports,o=t.source;return u(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new s("message",{data:n,originalEvent:t,ports:e,sw:o}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(o.apply(this,t))}catch(t){return Promise.reject(t)}}),r.sn=n,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var i,l=o.prototype;return l.register=function(t){var n=(void 0===t?{}:t).immediate,e=void 0!==n&&n;try{var r=this;return function(t,n){var e=t();return e&&e.then?e.then(n):n()}((function(){if(!e&&"complete"!==document.readyState)return h(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),u(r.bn(),(function(t){r.fn=t,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var n=r.fn.waiting;return n&&c(n.scriptURL,r.sn.toString())&&(r.hn=n,Promise.resolve().then((function(){r.dispatchEvent(new s("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(t){return Promise.reject(t)}},l.update=function(){try{return this.fn?h(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},l.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},l.messageSW=function(t){try{return u(this.getSW(),(function(n){return r(n,t)}))}catch(t){return Promise.reject(t)}},l.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,f)},l.pn=function(){var t=navigator.serviceWorker.controller;return t&&c(t.scriptURL,this.sn.toString())?t:void 0},l.bn=function(){try{var t=this;return function(t,n){try{var e=t()}catch(t){return n(t)}return e&&e.then?e.then(void 0,n):e}((function(){return u(navigator.serviceWorker.register(t.sn,t.nn),(function(n){return t.un=performance.now(),n}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(o.prototype,i),o}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(t,n){this.Sn(t).add(n)},n.removeEventListener=function(t,n){this.Sn(t).delete(n)},n.dispatchEvent=function(t){t.target=this;for(var n,e=i(this.Sn(t.type));!(n=e()).done;)(0,n.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());const d=(t,n)=>n.some((n=>t instanceof n));let v,y;const g=new WeakMap,m=new WeakMap,b=new WeakMap,w=new WeakMap,x=new WeakMap;let E={get(t,n,e){if(t instanceof IDBTransaction){if("done"===n)return m.get(t);if("objectStoreNames"===n)return t.objectStoreNames||b.get(t);if("store"===n)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return k(t[n])},set:(t,n,e)=>(t[n]=e,!0),has:(t,n)=>t instanceof IDBTransaction&&("done"===n||"store"===n)||n in t};function L(t){return"function"==typeof t?(n=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(y||(y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...t){return n.apply(S(this),t),k(g.get(this))}:function(...t){return k(n.apply(S(this),t))}:function(t,...e){const r=n.call(S(this),t,...e);return b.set(r,t.sort?t.sort():[t]),k(r)}:(t instanceof IDBTransaction&&function(t){if(m.has(t))return;const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{e(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));m.set(t,n)}(t),d(t,v||(v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,E):t);var n}function k(t){if(t instanceof IDBRequest)return function(t){const n=new Promise(((n,e)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(k(t.result)),r()},i=()=>{e(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return n.then((n=>{n instanceof IDBCursor&&g.set(n,t)})).catch((()=>{})),x.set(n,t),n}(t);if(w.has(t))return w.get(t);const n=L(t);return n!==t&&(w.set(t,n),x.set(n,t)),n}const S=t=>x.get(t);function j(t,n,{blocked:e,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(t,n),c=k(a);return r&&a.addEventListener("upgradeneeded",(t=>{r(k(a.result),t.oldVersion,t.newVersion,k(a.transaction))})),e&&a.addEventListener("blocked",(()=>e())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const P=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],O=new Map;function T(t,n){if(!(t instanceof IDBDatabase)||n in t||"string"!=typeof n)return;if(O.get(n))return O.get(n);const e=n.replace(/FromIndex$/,""),r=n!==e,o=I.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!P.includes(e))return;const i=async function(t,...n){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(n.shift())),(await Promise.all([a[e](...n),o&&i.done]))[0]};return O.set(n,i),i}function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function N(){N=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function g(){}function m(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(T([])));E&&E!==e&&r.call(E,a)&&(w=E);var L=b.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==D(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=j(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=f(n,e,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function j(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,j(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(D(n)+" is not iterable")}return m.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},k(S.prototype),u(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function A(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function B(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){A(i,r,o,a,c,"next",t)}function c(t){A(i,r,o,a,c,"throw",t)}a(void 0)}))}}var M;M=E,E={...M,get:(t,n,e)=>T(t,n)||M.get(t,n,e),has:(t,n)=>!!T(t,n)||M.has(t,n)};var C=function(){var t=B(N().mark((function t(){return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=B(N().mark((function t(n){var e,r,o,i,a;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("PUT to the database"),t.next=3,j("jate",1);case 3:return e=t.sent,r=e.transaction("jate","readwrite"),o=r.objectStore("jate"),i=o.put({id:1,value:n}),t.next=9,i;case 9:a=t.sent,console.log("🚀 - data saved to the database",a);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),G=function(){var t=B(N().mark((function t(){var n,e,r,o,i;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GET all from the database"),t.next=3,j("jate",1);case 3:return n=t.sent,e=n.transaction("jate","readonly"),r=e.objectStore("jate"),o=r.getAll(),t.next=9,o;case 9:return i=t.sent,console.log("result.value",i),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();C();var F="\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n";function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function R(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,V(r.key),r)}}function z(t,n,e){return n&&R(t.prototype,n),e&&R(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t){var n=function(t,n){if("object"!=U(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==U(n)?n:n+""}var q=z((function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),G().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),console.log("Data from IndexedDB:",t);var r=F;t&&t.length>0&&t[0].value?r=t[0].value:e&&(r=e),console.log("Setting editor content:",r),n.editor.setValue("string"==typeof r?r:F)})).catch((function(t){console.error("Error loading data from IndexedDB:",t),n.editor.setValue(F)})),this.editor.on("change",(function(){localStorage.setItem("content",n.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),W(localStorage.getItem("content")).catch((function(t){console.error("Error saving data to IndexedDB:",t)}))}))})),H=e(72),K=e.n(H),Y=e(825),$=e.n(Y),J=e(659),Q=e.n(J),X=e(56),Z=e.n(X),tt=e(540),nt=e.n(tt),et=e(113),rt=e.n(et),ot=e(16),it={};function at(t){return at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(t)}function ct(){ct=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function g(){}function m(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(T([])));E&&E!==e&&r.call(E,a)&&(w=E);var L=b.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==at(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=h;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=j(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=f(n,e,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function j(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,j(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(at(n)+" is not iterable")}return m.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},k(S.prototype),u(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function st(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}it.styleTagTransform=rt(),it.setAttributes=Z(),it.insert=Q().bind(null,"head"),it.domAPI=$(),it.insertStyleElement=nt(),K()(ot.A,it),ot.A&&ot.A.locals&&ot.A.locals;var ut=document.querySelector("#main");ut.innerHTML="";var lt=function(){var t=document.createElement("div");t.classList.add("spinner"),t.innerHTML='\n    <div class="loading-container">\n      <div class="loading-spinner"></div>\n    </div>\n  ',ut.appendChild(t)},ft=function(){var t=function(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){st(i,r,o,a,c,"next",t)}function c(t){st(i,r,o,a,c,"throw",t)}a(void 0)}))}}(ct().mark((function t(){var n,e,r;return ct().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,void 0!==(n=new q)){t.next=6;break}lt(),t.next=15;break;case 6:return t.next=8,G();case 8:e=t.sent,console.log("Data from getDb:",e),r=e&&e.length>0?e[0].value:"",console.log("Setting editor content:",r),n.setValue("string"==typeof r?r:""),n.on("blur",(function(){console.log("The editor has lost focus"),W(n.getValue())})),o=void 0,(o=ut.querySelector(".spinner"))&&o.remove();case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error initializing editor:",t.t0),lt();case 21:case"end":return t.stop()}var o}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();ft(),"serviceWorker"in navigator?new p("/service-worker.js").register():console.error("Service workers are not supported in this browser.")})();