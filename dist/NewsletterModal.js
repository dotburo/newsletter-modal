/*! @dotburo/newsletter-modal 1.2.0 | dotburo <code@dotburo.org> (https://dotburo.org) !*/
var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,n=t||e||Function("return this")(),r=n.Symbol,s=Object.prototype,o=s.hasOwnProperty,i=s.toString,a=r?r.toStringTag:void 0;var l=Object.prototype.toString;var c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var s=i.call(t);return r&&(e?t[a]=n:delete t[a]),s}(t):function(t){return l.call(t)}(t)}function d(t){return null!=t&&"object"==typeof t}var p=Array.isArray;function h(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function f(t){return t}function v(t){if(!h(t))return!1;var e=u(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}var b,g=n["__core-js_shared__"],_=(b=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"";var y=Function.prototype.toString;var m=/^\[object .+?Constructor\]$/,j=Function.prototype,w=Object.prototype,O=j.toString,x=w.hasOwnProperty,E=RegExp("^"+O.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $(t){return!(!h(t)||(e=t,_&&_ in e))&&(v(t)?E:m).test(function(t){if(null!=t){try{return y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function k(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return $(n)?n:void 0}var S=Object.create,A=function(){function t(){}return function(e){if(!h(e))return{};if(S)return S(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function T(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var z=Date.now;var C,L,P,N=function(){try{var t=k(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),M=N,D=M?function(t,e){return M(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:f,F=(C=D,L=0,P=0,function(){var t=z(),e=16-(t-P);if(P=t,e>0){if(++L>=800)return arguments[0]}else L=0;return C.apply(void 0,arguments)}),q=/^(?:0|[1-9]\d*)$/;function B(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&q.test(t))&&t>-1&&t%1==0&&t<e}function U(t,e,n){"__proto__"==e&&M?M(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function G(t,e){return t===e||t!=t&&e!=e}var H=Object.prototype.hasOwnProperty;function I(t,e,n){var r=t[e];H.call(t,e)&&G(r,n)&&(void 0!==n||e in t)||U(t,e,n)}var R=Math.max;function V(t,e){return F(function(t,e,n){return e=R(void 0===e?t.length-1:e,0),function(){for(var r=arguments,s=-1,o=R(r.length-e,0),i=Array(o);++s<o;)i[s]=r[e+s];s=-1;for(var a=Array(e+1);++s<e;)a[s]=r[s];return a[e]=n(i),T(t,this,a)}}(t,e,f),t+"")}function W(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function J(t){return null!=t&&W(t.length)&&!v(t)}var K=Object.prototype;function Q(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function X(t){return d(t)&&"[object Arguments]"==u(t)}var Y=Object.prototype,Z=Y.hasOwnProperty,tt=Y.propertyIsEnumerable,et=X(function(){return arguments}())?X:function(t){return d(t)&&Z.call(t,"callee")&&!tt.call(t,"callee")};var nt="object"==typeof exports&&exports&&!exports.nodeType&&exports,rt=nt&&"object"==typeof module&&module&&!module.nodeType&&module,st=rt&&rt.exports===nt?n.Buffer:void 0,ot=(st?st.isBuffer:void 0)||function(){return!1},it={};it["[object Float32Array]"]=it["[object Float64Array]"]=it["[object Int8Array]"]=it["[object Int16Array]"]=it["[object Int32Array]"]=it["[object Uint8Array]"]=it["[object Uint8ClampedArray]"]=it["[object Uint16Array]"]=it["[object Uint32Array]"]=!0,it["[object Arguments]"]=it["[object Array]"]=it["[object ArrayBuffer]"]=it["[object Boolean]"]=it["[object DataView]"]=it["[object Date]"]=it["[object Error]"]=it["[object Function]"]=it["[object Map]"]=it["[object Number]"]=it["[object Object]"]=it["[object RegExp]"]=it["[object Set]"]=it["[object String]"]=it["[object WeakMap]"]=!1;var at="object"==typeof exports&&exports&&!exports.nodeType&&exports,lt=at&&"object"==typeof module&&module&&!module.nodeType&&module,ct=lt&&lt.exports===at&&t.process,ut=function(){try{var t=lt&&lt.require&&lt.require("util").types;return t||ct&&ct.binding&&ct.binding("util")}catch(t){}}(),dt=ut&&ut.isTypedArray,pt=dt?function(t){return function(e){return t(e)}}(dt):function(t){return d(t)&&W(t.length)&&!!it[u(t)]},ht=pt,ft=Object.prototype.hasOwnProperty;function vt(t,e){var n=p(t),r=!n&&et(t),s=!n&&!r&&ot(t),o=!n&&!r&&!s&&ht(t),i=n||r||s||o,a=i?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],l=a.length;for(var c in t)!e&&!ft.call(t,c)||i&&("length"==c||s&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||B(c,l))||a.push(c);return a}var bt=Object.prototype.hasOwnProperty;function gt(t){if(!h(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Q(t),n=[];for(var r in t)("constructor"!=r||!e&&bt.call(t,r))&&n.push(r);return n}function _t(t){return J(t)?vt(t,!0):gt(t)}var yt=k(Object,"create");var mt=Object.prototype.hasOwnProperty;var jt=Object.prototype.hasOwnProperty;function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t,e){for(var n=t.length;n--;)if(G(t[n][0],e))return n;return-1}wt.prototype.clear=function(){this.__data__=yt?yt(null):{},this.size=0},wt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return mt.call(e,t)?e[t]:void 0},wt.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:jt.call(e,t)},wt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=yt&&void 0===e?"__lodash_hash_undefined__":e,this};var xt=Array.prototype.splice;function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Et.prototype.clear=function(){this.__data__=[],this.size=0},Et.prototype.delete=function(t){var e=this.__data__,n=Ot(e,t);return!(n<0)&&(n==e.length-1?e.pop():xt.call(e,n,1),--this.size,!0)},Et.prototype.get=function(t){var e=this.__data__,n=Ot(e,t);return n<0?void 0:e[n][1]},Et.prototype.has=function(t){return Ot(this.__data__,t)>-1},Et.prototype.set=function(t,e){var n=this.__data__,r=Ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var $t=k(n,"Map");function kt(t,e){var n,r,s=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?s["string"==typeof e?"string":"hash"]:s.map}function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=function(){this.size=0,this.__data__={hash:new wt,map:new($t||Et),string:new wt}},St.prototype.delete=function(t){var e=kt(this,t).delete(t);return this.size-=e?1:0,e},St.prototype.get=function(t){return kt(this,t).get(t)},St.prototype.has=function(t){return kt(this,t).has(t)},St.prototype.set=function(t,e){var n=kt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var At=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object),Tt=At,zt=Function.prototype,Ct=Object.prototype,Lt=zt.toString,Pt=Ct.hasOwnProperty,Nt=Lt.call(Object);function Mt(t){var e=this.__data__=new Et(t);this.size=e.size}Mt.prototype.clear=function(){this.__data__=new Et,this.size=0},Mt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Mt.prototype.get=function(t){return this.__data__.get(t)},Mt.prototype.has=function(t){return this.__data__.has(t)},Mt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var r=n.__data__;if(!$t||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new St(r)}return n.set(t,e),this.size=n.size,this};var Dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ft=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,qt=Ft&&Ft.exports===Dt?n.Buffer:void 0,Bt=qt?qt.allocUnsafe:void 0;var Ut=n.Uint8Array;function Gt(t,e){var n,r,s=e?(n=t.buffer,r=new n.constructor(n.byteLength),new Ut(r).set(new Ut(n)),r):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}var Ht,It=function(t,e,n){for(var r=-1,s=Object(t),o=n(t),i=o.length;i--;){var a=o[Ht?i:++r];if(!1===e(s[a],a,s))break}return t};function Rt(t,e,n){(void 0!==n&&!G(t[e],n)||void 0===n&&!(e in t))&&U(t,e,n)}function Vt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}function Wt(t){return function(t,e,n,r){var s=!n;n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],l=r?r(n[a],t[a],a,n,t):void 0;void 0===l&&(l=t[a]),s?U(n,a,l):I(n,a,l)}return n}(t,_t(t))}function Jt(t,e,n,r,s,o,i){var a=Vt(t,n),l=Vt(e,n),c=i.get(l);if(c)Rt(t,n,c);else{var f,b=o?o(a,l,n+"",t,e,i):void 0,g=void 0===b;if(g){var _=p(l),y=!_&&ot(l),m=!_&&!y&&ht(l);b=l,_||y||m?p(a)?b=a:d(f=a)&&J(f)?b=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(a):y?(g=!1,b=function(t,e){if(e)return t.slice();var n=t.length,r=Bt?Bt(n):new t.constructor(n);return t.copy(r),r}(l,!0)):m?(g=!1,b=Gt(l,!0)):b=[]:function(t){if(!d(t)||"[object Object]"!=u(t))return!1;var e=Tt(t);if(null===e)return!0;var n=Pt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Lt.call(n)==Nt}(l)||et(l)?(b=a,et(a)?b=Wt(a):h(a)&&!v(a)||(b=function(t){return"function"!=typeof t.constructor||Q(t)?{}:A(Tt(t))}(l))):g=!1}g&&(i.set(l,b),s(b,l,r,o,i),i.delete(l)),Rt(t,n,b)}}function Kt(t,e,n,r,s){t!==e&&It(e,(function(o,i){if(s||(s=new Mt),h(o))Jt(t,e,i,n,Kt,r,s);else{var a=r?r(Vt(t,i),o,i+"",t,e,s):void 0;void 0===a&&(a=o),Rt(t,i,a)}}),_t)}var Qt,Xt=(Qt=function(t,e,n){Kt(t,e,n)},V((function(t,e){var n=-1,r=e.length,s=r>1?e[r-1]:void 0,o=r>2?e[2]:void 0;for(s=Qt.length>3&&"function"==typeof s?(r--,s):void 0,o&&function(t,e,n){if(!h(n))return!1;var r=typeof e;return!!("number"==r?J(n)&&B(e,n.length):"string"==r&&e in n)&&G(n[e],t)}(e[0],e[1],o)&&(s=r<3?void 0:s,r=1),t=Object(t);++n<r;){var i=e[n];i&&Qt(t,i,n,s)}return t})));var Yt={url:null,headers:{},title:"Subscribe to our newsletter",fields:{firstname:!1,lastname:!1,email:!0,gdprCheckbox:!1,gdprNotice:!1},buttons:{open:{label:"Subscribe",classes:"btn btn-primary"},submit:{label:"Submit",classes:"btn btn-primary"}},messages:{subscribed:"Thank you for subscribing!",parse:()=>null}};const Zt=t=>`\n<div class="nws-gdpr-check">\n    <input type="checkbox" id="nws-gdpr-check" name="nws_gdpr" required>\n    <label for="nws-gdpr-check">${t.label}</label>\n    <span class="invalid-feedback">${t.invalid||"This is required."}</span>\n</div>\n`,te=t=>t.url||t.text?`<a href="${t.url||"#"}"\n               target="_blank"\n               rel="noreferrer"\n               class="${t.text?"nws-gdpr-btn":""}">${t.label} <span>🛈</span></a>`:"",ee=t=>`\n<div class="nws-flex-break"></div>\n<div class="nws-gdpr-txt">\n    <div class="nws-gdpr-txt-inner">${t.text}</div>\n</div>\n`,ne=(t={})=>`\n<label class="${t.label?"":"sr-only"}">${t.label||"Email"}</label>\n<div class="input-group">\n    ${t.icon?oe(t.icon):""}\n    <input type="email" name="nws_email" placeholder="Email" required autocomplete="email" class="form-control">\n    <div class="invalid-feedback">${t.invalid||"Please provide a valid email address."}</div>\n</div>\n`,re=(t={})=>`\n<label class="${t.label?"":"sr-only"}">${t.label||"First name"}</label>\n<div class="input-group">\n    ${t.icon?oe(t.icon):""}\n    <input type="text" name="nws_first" placeholder="${t.placeholder||"First name"}" required class="form-control">\n    <div class="invalid-feedback">${t.invalid||"Please provide a valid first name."}</div>\n</div>\n`,se=(t={})=>`\n<label class="${t.label?"":"sr-only"}">${t.label||"Last name"}</label>\n<div class="input-group">\n    ${t.icon?oe(t.icon):""}\n    <input type="text" name="nws_last" placeholder="${t.placeholder||"Last name"}" required class="form-control">\n    <div class="invalid-feedback">${t.invalid||"Please provide a valid last name."}</div>\n</div>\n`,oe=t=>`\n<div class="input-group-prepend">\n    <div class="input-group-text ${t}"></div>\n</div>\n`,ie=document,ae={toggled:!1,classes:{toggled:"toggled"}};class le{constructor(t,e={}){this._options=e=Xt({},ae,e),this._toggled=!1,this._events=[],this._el=this._setElement(t),e.toggled&&this.toggle(!0)}toggle(t){let e=this.getOptions("classes").toggled;return this._toggled=void 0!==t?t:!this._toggled,this._el.classList[this._toggled?"add":"remove"](e),this}on(t,e,n=null){return(n||this._el).addEventListener(t,e=e.bind(this),!0),this._events.push({name:t,fn:e,el:n}),this}getElement(t=""){return t?this._el.querySelector(t):this._el}hasElement(t){return!!this._el.querySelector(t)}getOptions(t=null){return t?this._options[t]:this._options}remove(t=this._el){this._events=this._events.filter((e=>e.el!==t||(t.removeEventListener(e.name,e.fn,!0),!1))),t.parentNode.removeChild(t),t===this._el&&(this._el=null,this._options=ae)}_setElement(t){if(!t||!t.nodeType&&"string"!=typeof t)throw new Error("Wrong element type provided!");return t.nodeType?t:(this._options.parent||ie).querySelector(t)}_trigger(t,e=null){let n;"function"==typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0}):(n=ie.createEvent("CustomEvent"),n.initCustomEvent(t,!0,!0,e)),this._el.dispatchEvent(n)}}class ce extends le{constructor(t,e={},n){super(t,e),this.validator=n,this._render()}static createElement(){const t=document.createElement("div");return t.className="nws-modal modal",t}_render(){var t;this.getElement().innerHTML=`\n<div class="modal-dialog modal-dialog-centered">\n    <form class="modal-content" action="/" method="POST">\n        <div class="modal-header">\n            <h5 class="modal-title">${(t=this.getOptions()).title}</h5>\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true" style="pointer-events: none">&times;</span>\n            </button>\n        </div>\n        <div class="modal-body">\n            <div class="nws-msg"></div>\n${(t.fields.firstname?re(t.fields.firstname):"")+(t.fields.lastname?se(t.fields.lastname):"")+ne(t.fields.email)+(t.fields.gdprCheckbox?Zt(t.fields.gdprCheckbox):"")}\n        </div>\n        <div class="modal-footer justify-content-between flex-wrap">\n            ${t.fields.gdprNotice?te(t.fields.gdprNotice):"<span></span>"}\n            <button type="submit" class="${t.buttons.submit.classes} nws-btn-submit">${t.buttons.submit.label}</button>\n            ${t.fields.gdprNotice?ee(t.fields.gdprNotice):""}\n        </div>\n    </form>\n</div>\n`,document.body.appendChild(this.getElement()),this.toggle(!0),this.on("submit",this._handleSubmit).on("click",this._handleClose).on("keyup",this._handleClose,document.body),this.hasElement(".nws-gdpr-btn")&&this.on("click",this._toggleGdpr,this.getElement(".nws-gdpr-btn"))}_handleClose(t){const e=this.getOptions("classes").toggled,n=t.target.classList.contains(e),r=t.target.classList.contains("close"),s="Escape"===t.key;(n||s||r)&&(t.preventDefault(),this.toggle(!1))}_handleSubmit(t){t.preventDefault(),this._setLoading(!0)._clearMessage();const e=this.getElement("form");this.validator.validate(e)?this._submit(this.validator.getData()).then((t=>this._message(t.json,t.response.ok,t.response)._setLoading(!1).remove(this.getElement(".nws-btn-submit")))).catch((t=>{this._message(t,!1)._setLoading(!1)})):this._setLoading(!1)}_submit(t){let e;return window.fetch(this.getOptions("url"),{method:"POST",headers:Object.assign(this.getOptions("headers"),{Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(t)}).then((t=>(e=t,t.json()))).then((t=>({json:t,response:e})))}_setLoading(t){const e=this.getElement(".nws-btn-submit");return e.innerHTML=t?"sending...":this.getOptions("buttons").submit.label,this}_message(t,e,n){let r=this.getOptions("messages"),s=r.parse(t);if("string"!=typeof s&&(s=e?r.subscribed:n.statusText),e)return this.getElement(".modal-body").innerHTML=(t=>`\n<div class="nws-msg-success py-3">\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round">\n        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>\n    </svg>\n    <h5 class="mt-3">${t}</h5>\n</div>\n`)(s),this;const o=this.getElement(".nws-msg");return o.className+=" text-danger",o.textContent=s,o.style.display="block",this}_clearMessage(){return this.getElement(".nws-msg").style.display="none",this}_toggleGdpr(t){t.preventDefault();const e=this.getElement(".nws-gdpr-txt");e.classList.toggle("toggled")?e.style.height=e.firstElementChild.clientHeight+"px":e.style.height="0"}}class ue{constructor(){this.validationMap={nws_email:this._validateEmail.bind(this),nws_gdpr:this._validateGdprCheck.bind(this),nws_first:this._validateName.bind(this),nws_last:this._validateName.bind(this)},this._data={}}validate(t){const e=t.elements;let n=!0;for(let t,r=0,s=e.length;r<s;r++)t=e.item(r),t.name&&(n=this.validationMap[t.name](t));return n}_validateEmail(t){const e=/^.*@.*..*/.test(t.value);return e&&this._setData(t.name,t.value),this._setElement(t,e),e}_validateName(t){const e=!t.value.match(/\d/g);return e&&this._setData(t.name,t.value),this._setElement(t,e),e}_validateGdprCheck(t){const e=t.checked;return e&&this._setData(t.name,!0),this._setElement(t,e),e}_setElement(t,e){t.classList[e?"remove":"add"]("is-invalid")}_setData(t,e){this._data[t]=e}getData(){return this._data}}let de=null;class pe extends le{constructor(t,e={}){(e=Xt({},Yt,e)).fields=e.fields||{},e.classes=e.classes||{},e.classes.toggled="nws-toggled",super(t,e),this._render()}_render(){this.getElement().innerHTML=((t={})=>`<button type="button" class="${t.classes}">${t.label}</button>`)(this.getOptions("buttons").open),this.on("click",this._handleSubscribeButton)}_handleSubscribeButton(){de?de.toggle(!0):de=new ce(ce.createElement(),this.getOptions(),new ue)}}export{pe as default};
//# sourceMappingURL=NewsletterModal.js.map
