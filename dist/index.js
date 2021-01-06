"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var STRIPE_JS_SDK_URL="https://js.stripe.com",SUPPORTED_LANGS=["auto","da","de","en","es","es-419","fi","fr","it","ja","nb","nl","pl","pt","sv","zh"],SUPPORTED_SUBMIT_TYPES=["auto","book","donate","pay"],BILLING_ADDRESS_COLLECTION_TYPES=["required","auto"],DEFAULT_ELEMENT_STYLE={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},loadStripeSdk=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"v3",t=arguments.length>1?arguments[1]:void 0;if(window.Stripe)t();else{var n=document.createElement("script");n.src="".concat(STRIPE_JS_SDK_URL,"/").concat(e),n.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(n),n.addEventListener("load",t)}},props={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return SUPPORTED_SUBMIT_TYPES.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return BILLING_ADDRESS_COLLECTION_TYPES.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},locale:{type:String,default:"auto",validator:function(e){return SUPPORTED_LANGS.includes(e)}},shippingAddressCollection:{type:Object,validator:function(e){return e.hasOwnProperty("allowedCountries")}}},index={props:props,template:"<div></div>",methods:{redirectToCheckout:function(){var e=this;this.$emit("loading",!0),loadStripeSdk("v3",(function(){try{var t,n=window.Stripe(e.pk);if(e.sessionId)return void n.redirectToCheckout({sessionId:e.sessionId});if((null===(t=e.lineItems)||void 0===t?void 0:t.length)&&!e.mode)return void console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode");var r={billingAddressCollection:e.billingAddressCollection,cancelUrl:e.cancelUrl,clientReferenceId:e.clientReferenceId,customerEmail:e.customerEmail,items:e.items,lineItems:e.lineItems,locale:e.locale,mode:e.mode,shippingAddressCollection:e.shippingAddressCollection,submitType:e.submitType,successUrl:e.successUrl};n.redirectToCheckout(r)}catch(t){console.error(t),e.$emit("error",t)}finally{e.$emit("loading",!1)}}))}}};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var runtime_1=createCommonjsModule((function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new L(r||[]);return i._invoke=function(e,t,n){var r=u;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=w(s,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",h={};function m(){}function y(){}function v(){}var _={};_[i]=function(){return this};var g=Object.getPrototypeOf,E=g&&g(g(T([])));E&&E!==n&&r.call(E,i)&&(_=E);var A=v.prototype=m.prototype=Object.create(_);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){var t;this._invoke=function(n,o){function i(){return new Promise((function(t,i){!function t(n,o,i,s){var a=l(e[n],e,o);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,i,s)}),(function(e){t("throw",e,i,s)})):Promise.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return t("throw",e,i,s)}))}s(a.arg)}(n,o,t,i)}))}return t=t?t.then(i,i):i()}}function w(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,w(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:k}}function k(){return{value:t,done:!0}}return y.prototype=A.constructor=v,v.constructor=y,v[a]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(A),e},e.awrap=function(e){return{__await:e}},b(S.prototype),S.prototype[s]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o){var i=new S(c(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(A),A[a]="Generator",A[i]=function(){return this},A.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}})),regenerator=runtime_1;function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var defineProperty=_defineProperty;function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ELEMENT_TYPE="card",script={props:{pk:{type:String,required:!0},stripeAccount:{type:String},apiVersion:{type:String},locale:{type:String,default:"auto"},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return DEFAULT_ELEMENT_STYLE}},value:{type:String},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},methods:{submit:function(){this.$refs.submitButtonRef.click()}},mounted:function(){var e=this;loadStripeSdk(this.apiVersion,(function(){var t={stripeAccount:e.stripeAccount,apiVersion:e.apiVersion,locale:e.locale},n={classes:e.classes,style:e.elementStyle,value:e.value,hidePostalCode:e.hidePostalCode,iconStyle:e.iconStyle,hideIcon:e.hideIcon,disabled:e.disabled};e.stripe=window.Stripe(e.pk,t),e.element=e.stripe.elements().create(ELEMENT_TYPE,n),e.element.mount("#stripe-element-mount-point"),e.element.on("change",(function(e){var t=document.getElementById("stripe-element-errors");e.error?t.textContent=e.error.message:t.textContent=""})),e.form.addEventListener("submit",(function(t){var n,r,o,i;return regenerator.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e.$emit("loading",!0),t.preventDefault(),n=_objectSpread({},e.element),e.amount&&(n.amount=e.amount),s.next=7,regenerator.awrap(e.stripe.createToken(n));case 7:if(r=s.sent,o=r.token,!(i=r.error)){s.next=15;break}return document.getElementById("stripe-element-errors").textContent=i.message,e.$emit("error",i),s.abrupt("return");case 15:e.$emit("token",o),s.next=22;break;case 18:s.prev=18,s.t0=s.catch(0),console.error(s.t0),e.$emit("error",s.t0);case 22:return s.prev=22,e.$emit("loading",!1),s.finish(22);case 25:case"end":return s.stop()}}),null,null,[[0,18,22,25]])}))}))}};function normalizeComponent(e,t,n,r,o,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}const isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return(e,t)=>addStyle(e,t)}let HEAD;const styles={};function addStyle(e,t){const n=isOldIE?t.media||"default":e,r=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}const __vue_script__=script;var __vue_render__=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"stripe-element-form"}},[t("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[t("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=function(e){e&&e("data-v-39e29cc6_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement[data-v-39e29cc6] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-39e29cc6] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-39e29cc6] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-39e29cc6] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-39e29cc6] {\n  visibility: hidden;\n}\n",map:{version:3,sources:["/home/centipede/Documents/workspace/personal/vue-stripe/vue-stripe-checkout/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoIA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Card.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"stripe-element-form\">\n      <div id=\"stripe-element-mount-point\"></div>\n      <slot name=\"stripe-element-errors\">\n        <div id=\"stripe-element-errors\" role=\"alert\"></div>\n      </slot>\n      <button ref=\"submitButtonRef\" type=\"submit\" class=\"hide\"></button>\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripeSdk } from '../load-stripe-sdk';\nimport { SUPPORTED_ELEMENT_TYPE, DEFAULT_ELEMENT_STYLE } from '../constants';\nconst ELEMENT_TYPE = 'card';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    stripeAccount: {\n      type: String,\n    },\n    apiVersion: {\n      type: String,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    // element specific options\n    classes: {\n      type: Object,\n      default: () => ({}),\n    },\n    elementStyle: {\n      type: Object,\n      default: () => (DEFAULT_ELEMENT_STYLE),\n    },\n    value: {\n      type: String,\n    },\n    hidePostalCode: Boolean,\n    iconStyle: {\n      type: String,\n      default: 'default',\n      validator: value => ['solid', 'default'].includes(value),\n    },\n    hideIcon: Boolean,\n    disabled: Boolean,\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      card: null,\n    };\n  },\n  computed: {\n    form () {\n      return document.getElementById('stripe-element-form');\n    },\n  },\n  methods: {\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n  },\n  mounted () {\n    loadStripeSdk(this.apiVersion, () => {\n      const stripeOptions = {\n        stripeAccount: this.stripeAccount,\n        apiVersion: this.apiVersion,\n        locale: this.locale,\n      };\n      const elementOptions = {\n        classes: this.classes,\n        style: this.elementStyle,\n        value: this.value,\n        hidePostalCode: this.hidePostalCode,\n        iconStyle: this.iconStyle,\n        hideIcon: this.hideIcon,\n        disabled: this.disabled,\n      };\n\n      this.stripe = window.Stripe(this.pk, stripeOptions);\n      this.element = this.stripe\n        .elements()\n        .create(ELEMENT_TYPE, elementOptions)\n      this.element.mount('#stripe-element-mount-point');\n\n      this.element.on('change', (event) => {\n        var displayError = document.getElementById('stripe-element-errors');\n        if (event.error) {\n          displayError.textContent = event.error.message;\n        } else {\n          displayError.textContent = '';\n        }\n      });\n\n      this.form.addEventListener('submit', async (event) => {\n        try {\n          this.$emit('loading', true);\n          event.preventDefault();\n          const data = {\n            ...this.element\n          };\n          if (this.amount) data.amount = this.amount;\n          const { token, error } = await this.stripe.createToken(data);\n          if (error) {\n            const errorElement = document.getElementById('stripe-element-errors');\n            errorElement.textContent = error.message;\n            this.$emit('error', error);\n            return;\n          }\n          this.$emit('token', token);\n        } catch (error) {\n          console.error(error);\n          this.$emit('error', error);\n        } finally {\n          this.$emit('loading', false);\n        }\n      });\n    });\n  }\n}\n<\/script>\n\n<style scoped>\n/**\n * The CSS shown here will not be introduced in the Quickstart guide, but shows\n * how you can use CSS to style your Element's container.\n */\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  visibility: hidden;\n}\n</style>\n"]},media:void 0})},__vue_scope_id__="data-v-39e29cc6",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,!1,void 0,!1,createInjector,void 0,void 0);var index$1={install:function(e,t){var n=t.pk,r=t.stripeAccount,o=t.apiVersion,i=t.locale,s=t.elementsOptions,a=window.Stripe(n,{stripeAccount:r,apiVersion:o,locale:i}),c=a.elements(s);e.prototype.$stripe=a,e.prototype.$stripeElements=c}};exports.StripeCheckout=index,exports.StripeElementCard=__vue_component__,exports.StripeElementsPlugin=index$1;
