/*!
 * @project        SEOmatic
 * @name           vendors~seomatic-tokens.js
 * @author         Andrew Welch
 * @build          Sat, Feb 22, 2020 4:37 AM ET
 * @release        29c2e1df7c9cc89ae1ce45a76718bf736b977dd1 [develop]
 * @copyright      Copyright (c) 2020 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{20:function(e,t,s){"use strict";var i,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)};i=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function l(){l.init.call(this)}e.exports=l,l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var h=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function a(e){return void 0===e._maxListeners?l.defaultMaxListeners:e._maxListeners}function m(e,t,s,i){var n,r,o,l;if(u(s),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,s.listener?s.listener:s),r=e._events),o=r[t]),void 0===o)o=r[t]=s,++e._eventsCount;else if("function"==typeof o?o=r[t]=i?[s,o]:[o,s]:i?o.unshift(s):o.push(s),(n=a(e))>0&&o.length>n&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,l=h,console&&console.warn&&console.warn(l)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(e,t,s){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:s},n=d.bind(i);return n.listener=s,i.wrapFn=n,n}function g(e,t,s){var i=e._events;if(void 0===i)return[];var n=i[t];return void 0===n?[]:"function"==typeof n?s?[n.listener||n]:[n]:s?function(e){for(var t=new Array(e.length),s=0;s<t.length;++s)t[s]=e[s].listener||e[s];return t}(n):p(n,n.length)}function f(e){var t=this._events;if(void 0!==t){var s=t[e];if("function"==typeof s)return 1;if(void 0!==s)return s.length}return 0}function p(e,t){for(var s=new Array(t),i=0;i<t;++i)s[i]=e[i];return s}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");h=e}}),l.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},l.prototype.getMaxListeners=function(){return a(this)},l.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var i="error"===e,n=this._events;if(void 0!==n)i=i&&void 0===n.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var l=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw l.context=o,l}var h=n[e];if(void 0===h)return!1;if("function"==typeof h)r(h,this,t);else{var u=h.length,a=p(h,u);for(s=0;s<u;++s)r(a[s],this,t)}return!0},l.prototype.addListener=function(e,t){return m(this,e,t,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,t){return m(this,e,t,!0)},l.prototype.once=function(e,t){return u(t),this.on(e,c(this,e,t)),this},l.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,c(this,e,t)),this},l.prototype.removeListener=function(e,t){var s,i,n,r,o;if(u(t),void 0===(i=this._events))return this;if(void 0===(s=i[e]))return this;if(s===t||s.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,s.listener||t));else if("function"!=typeof s){for(n=-1,r=s.length-1;r>=0;r--)if(s[r]===t||s[r].listener===t){o=s[r].listener,n=r;break}if(n<0)return this;0===n?s.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(s,n),1===s.length&&(i[e]=s[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var t,s,i;if(void 0===(s=this._events))return this;if(void 0===s.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==s[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete s[e]),this;if(0===arguments.length){var n,r=Object.keys(s);for(i=0;i<r.length;++i)"removeListener"!==(n=r[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=s[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},l.prototype.listeners=function(e){return g(this,e,!0)},l.prototype.rawListeners=function(e){return g(this,e,!1)},l.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},l.prototype.listenerCount=f,l.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},22:function(e,t,s){"use strict";var i=s(20),n=s.n(i);let r={};const o=/[\\^$.*+?()[\]{}|]/g,l=RegExp(o.source),h=document.createElement("div"),u={containerTokenfield:'<div class="tokenfield tokenfield-mode-tokens">\n      <input class="tokenfield-copy-helper"\n        style="display:none;position:fixed;top:-1000px;right:1000px;"\n        tabindex="-1"\n        type="text"\n      />\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n    </div>',containerList:'<div class="tokenfield tokenfield-mode-list">\n      <input class="tokenfield-input" />\n      <div class="tokenfield-suggest">\n        <ul class="tokenfield-suggest-list"></ul>\n      </div>\n      <div class="tokenfield-set">\n        <ul></ul>\n      </div>\n    </div>',suggestItem:'<li class="tokenfield-suggest-item"></li>',setItem:'<li class="tokenfield-set-item">\n      <span class="item-label"></span>\n      <a href="#" class="item-remove" tabindex="-1">×</a>\n      <input class="item-input" type="hidden" />\n    </li>'};function a(){return(65536*(1+Math.random())|0).toString(16)+(65536*(1+Math.random())|0).toString(16)}function m(e,t){return e.indexOf(t)>=0}function d(e){return e.nodeName?e:"string"==typeof e?document.querySelector(e):null}function c(e,t){return e.nodeName?e:(e=e.replace(/(\t|\n$)/g,""),h.innerHTML="",h.innerHTML=e,!0===t?h.childNodes:h.childNodes[0])}function g(e){return e.key||e.keyIdentifier?e.key||String.fromCharCode(parseInt(e.keyIdentifier.substr(2),16)):null}class f extends n.a{constructor(e={}){super();let{_defaults:t,_options:s}={_defaults:{focusedItem:null,cache:{},timer:null,xhr:null,suggested:!1,suggestedItems:[],setItems:[],events:{},delimiters:{}},_options:{el:null,form:!0,mode:"tokenfield",addItemOnBlur:!1,addItemsOnPaste:!1,keepItemsOrder:!0,setItems:[],items:[],newItems:!0,multiple:!0,maxItems:0,minLength:0,keys:{17:"ctrl",16:"shift",91:"meta",8:"delete",27:"esc",37:"left",38:"up",39:"right",40:"down",46:"delete",65:"select",67:"copy",88:"cut",9:"delimiter",13:"delimiter",108:"delimiter"},matchRegex:"{value}",matchFlags:"i",matchStart:!1,matchEnd:!1,delimiters:[],copyProperty:"name",copyDelimiter:", ",remote:{type:"GET",url:null,queryParam:"q",delay:300,timestampParam:"t",params:{},headers:{}},placeholder:null,inputType:"text",minChars:2,maxSuggest:10,maxSuggestWindow:10,filterSetItems:!0,filterMatchCase:!1,singleInput:!1,singleInputValue:"id",singleInputDelimiter:", ",itemLabel:"name",itemName:"items",newItemName:"items_new",itemValue:"id",newItemValue:"name",itemData:"name"}};this.id=a(),this.key=`key_${this.id}`,this._vars=Object.assign({},t),this._options=Object.assign({},s,e),this._options.keys=Object.assign({},s.keys,e.keys),this._options.remote=Object.assign({},s.remote,e.remote),this._templates=Object.assign({},u,e.templates),this._vars.setItems=this._prepareData(this.remapData(this._options.setItems||[])),this._focused=!1,this._input=null,this._form=!1,this._html={};let i=this._options;i.delimiters.forEach(e=>{this._vars.delimiters[e]=!0});let n=d(i.el);if(!n)throw new Error(`Selector: DOM Element ${i.el} not found.`);if(this.el=n,i.singleInput){let e=d(i.singleInput);this._input=e||this.el}if(this.el.tokenfield=this,null===i.placeholder&&(i.placeholder=i.el.placeholder||""),!i.form)throw new Error("Cannot create tokenfield without DOM Element.");{let e=!1;if(i.form.nodeName)e=i.form;else if(!0===i.form){let t=this.el;for(;t.parentNode;){if("FORM"===t.nodeName){e=t;break}t=t.parentNode}}else if("string"==typeof e&&(e=document.querySelector(e),!e))throw new Error(`Selector: DOM Element ${i.form} not found.`);this._form=e}r[this.id]=this,this._render()}_render(){let e=this._options,t=this._html;return"tokenfield"===e.mode?t.container=c(this._templates.containerTokenfield):t.container=c(this._templates.containerList),t.suggest=t.container.querySelector(".tokenfield-suggest"),t.suggestList=t.container.querySelector(".tokenfield-suggest-list"),t.items=t.container.querySelector(".tokenfield-set > ul"),t.input=t.container.querySelector(".tokenfield-input"),t.input.setAttribute("type",e.inputType),t.input.placeholder=this._vars.setItems.length?"":e.placeholder,t.copyHelper=t.container.querySelector(".tokenfield-copy-helper"),e.el.style.display="none",t.suggest.style.display="none",this._renderSizer(),t.container.tokenfield=this,e.el.parentElement.insertBefore(t.container,e.el),t.container.insertBefore(e.el,t.container.firstChild),this._setEvents(),this._renderItems(),"tokenfield"===e.mode&&this._resizeInput(),this}_renderSizer(){let e=this._html,t=this._getBounds(),s=window.getComputedStyle(e.container),i=parseInt(s.paddingLeft,10)+parseInt(s.paddingRight,10),n={width:"auto",height:"auto",overflow:"hidden",whiteSpace:"pre",maxWidth:t.width-i+"px",position:"fixed",top:-1e4+"px",left:1e4+"px",fontSize:s.fontSize,paddingLeft:s.paddingLeft,paddingRight:s.paddingRight};e.sizer=document.createElement("div"),e.sizer.id="tokenfield-sizer-"+this.id;for(let t in n)e.sizer.style[t]=n[t];e.container.appendChild(e.sizer)}_refreshInput(e=!0){let t=this._vars,s=this._html;if(e&&(s.input.value=""),"tokenfield"===this._options.mode){this._resizeInput();let e=t.setItems.length?"":this._options.placeholder;s.input.setAttribute("placeholder",e)}return this}_resizeInput(e=""){let t=this._html,s=this._getBounds(),i=window.getComputedStyle(t.container),n=parseInt(i.paddingRight,10)+parseInt(i.borderRightWidth,10),r=n+parseInt(i.paddingLeft,10)+parseInt(i.borderLeftWidth,10);if(t.sizer.innerHTML=e,t.sizer.style.maxWidth=s.width-n+"px",0===s.width)return void(t.input.style.width="100%");t.input.style.width="20px";let o=t.sizer.getBoundingClientRect(),l=t.input.getBoundingClientRect(),h=s.width-(l.left-s.left)-n;o.width>h?t.input.style.width=s.width-r+"px":t.input.style.width=h+"px"}_fetchData(e){let t=this._vars,s=this._options,i=s.remote,n=Object.assign({},s.params);for(let e in i.params)n[e]=i.params[e];i.limit&&(n[i.limit]=s.remote.limit),n[i.queryParam]=e,n[i.timestampParam]=Math.round((new Date).getTime()/1e3),t.xhr=function(e,t={},s=null){let i=new XMLHttpRequest,n=t.url,r=[];for(let t in e)r.push(`${t}=${encodeURIComponent(e[t])}`);let o=r.join("&");"get"===t.type.toLowerCase()&&(n+="?"+o),i.open(t.type,n,!0);for(let s in t.headers){let n=t.headers[s];"function"==typeof n&&(n=n(e,t)),i.setRequestHeader(s,n)}return s&&(i.onreadystatechange=s),i.send(e),i}(n,s.remote,()=>{if(t.xhr&&4==t.xhr.readyState){if(200==t.xhr.status){let i=JSON.parse(t.xhr.responseText);t.cache[e]=i;let n=this._prepareData(this.remapData(i)),r=this._filterData(e,n);t.suggestedItems=s.filterSetItems?this._filterSetItems(r):r,this.showSuggestions()}else if(t.xhr.status>0)throw new Error("Error while loading remote data.");this._abortXhr()}})}remapData(e){return e}_prepareData(e){return e.map(e=>Object.assign({},e,{[this.key]:a()}))}_filterData(e,t){let s=this._options,i=s.matchRegex.replace("{value}",(n=function(e){if("string"==typeof e)return e;if(null===e)return"";let t=e+"";return"0"===t&&1/e==-1/0?"-0":t}(n=e))&&l.test(n)?n.replace(o,"\\$&"):n);var n;s.matchStart?i="^"+i:s.matchEnd&&(i+="$");let r=new RegExp(i,s.matchFlags);return t.filter(e=>r.test(e[s.itemData]))}_abortXhr(){let e=this._vars;null!==e.xhr&&(e.xhr.abort(),e.xhr=null)}_filterSetItems(e){const t=this._options.itemValue;let s=this._vars;if(!s.setItems.length)return e;let i=s.setItems.map(e=>e[t]);return e.filter(e=>-1===i.indexOf(e[t]))}_setEvents(){let e=this._vars,t=this._html;e.events.onClick=this._onClick.bind(this),e.events.onMouseDown=this._onMouseDown.bind(this),e.events.onMouseOver=this._onMouseOver.bind(this),e.events.onFocus=this._onFocus.bind(this),e.events.onResize=this._onResize.bind(this),e.events.onReset=this._onReset.bind(this),e.events.onKeyDown=this._onKeyDown.bind(this),e.events.onFocusOut=this._onFocusOut.bind(this),t.container.addEventListener("click",e.events.onClick),1===Object.keys(r).length&&(document.addEventListener("mousedown",e.events.onMouseDown),window.addEventListener("resize",e.events.onResize)),this._form&&this._form.nodeName&&this._form.addEventListener("reset",e.events.onReset),t.suggestList.addEventListener("mouseover",e.events.onMouseOver),t.input.addEventListener("focus",e.events.onFocus)}_onMouseOver(e){let t=e.target;if(t.classList.contains("tokenfield-suggest-item")){[].slice.call(this._html.suggestList.querySelectorAll(".selected")).forEach(e=>{e!==t&&e.classList.remove("selected")}),t.classList.add("selected"),this._selectItem(t.key,!1),this._refreshItemsSelection()}}_onReset(){this.setItems(this._options.setItems)}_onFocus(e){let t=this._vars,s=this._html,i=this._options;s.input.removeEventListener("keydown",t.events.onKeyDown),s.input.addEventListener("keydown",t.events.onKeyDown),s.input.addEventListener("focusout",t.events.onFocusOut),i.addItemsOnPaste&&(t.events.onPaste=this._onPaste.bind(this),s.input.addEventListener("paste",t.events.onPaste)),this._focused=!0,this._html.container.classList.add("focused"),this._resizeInput(),s.input.value.trim().length>=i.minChars&&this.showSuggestions()}_onFocusOut(e){let t=this._vars,s=this._options,i=this._html;if(i.input.removeEventListener("keydown",t.events.onKeyDown),i.input.removeEventListener("focusout",t.events.onFocusOut),void 0!==t.events.onPaste&&i.input.removeEventListener("paste",t.events.onPaste),e.relatedTarget&&e.relatedTarget===i.copyHelper)return;let n=s.multiple&&!s.maxItems||!s.multiple&&!t.setItems.length||s.multiple&&s.maxItems&&t.setItems.length<s.maxItems;this._focused&&s.addItemOnBlur&&n&&this._newItem(i.input.value)?this._renderItems()._refreshInput():this._defocusItems()._renderItems(),this._focused=!1,this._html.container.classList.remove("focused")}_onMouseDown(e){let t=null;for(let s in r)if(r[s]._html.container.contains(e.target)){t=r[s];break}if(t){for(let e in r)e!==t.id&&(r[e].hideSuggestions(),r[e].blur());e.target!==t._html.input&&e.preventDefault()}else for(let e in r)r[e].hideSuggestions(),r[e].blur()}_onResize(){for(let e in r)r[e]._resizeInput(r[e]._html.input.value)}_onPaste(e){let t=this._vars,s=this._options,i=e.clipboardData.getData("text"),n=[i];if(s.delimiters.length){let e=s.delimiters.join("|"),t=new RegExp(`(${e})`,"ig");n=i.split(t)}n.map(e=>e.trim()).filter(e=>e.length>0&&e.length>=s.minLength&&void 0===t.delimiters[e]).map(e=>this._newItem(e)).length&&(setTimeout(()=>{this._renderItems()._refreshInput()._deselectItems().hideSuggestions()},1),e.preventDefault())}_onKeyDown(e){let t=this._vars,s=this._options,i=this._html;s.maxItems&&t.setItems.length>=s.maxItems&&e.preventDefault(),"tokenfield"===s.mode&&setTimeout(()=>{this._resizeInput(i.input.value)},1);let n=g(e);if(void 0!==s.keys[e.keyCode]||m(s.delimiters,n)){if(this._keyAction(e))return!0}else this._defocusItems()._refreshItems();clearTimeout(t.timer),this._abortXhr(),(!s.maxItems||t.setItems.length<s.maxItems)&&setTimeout(()=>{this._keyInput(e)},1)}_keyAction(e){let t=null,s=this._vars;this.key;let i=this._options,n=this._html,r=i.keys[e.keyCode],o=n.input.value.trim(),l=g(e);m(i.delimiters,l)&&void 0===r&&(r="delimiter");let h=this._getSelectedItems();switch(h.length&&(t=h[0]),r){case"esc":this._deselectItems()._defocusItems()._renderItems().hideSuggestions();break;case"up":this._vars.suggested&&(this._selectPrevItem()._refreshItemsSelection(),e.preventDefault()),this._defocusItems()._renderItems();break;case"down":this._vars.suggested&&(this._selectNextItem()._refreshItemsSelection(),e.preventDefault()),this._defocusItems()._renderItems();break;case"left":(this.getFocusedItems().length||!n.input.selectionStart&&!n.input.selectionEnd)&&(this._focusPrevItem(e.shiftKey),e.preventDefault());break;case"right":(this.getFocusedItems().length||n.input.selectionStart===o.length)&&(this._focusNextItem(e.shiftKey),e.preventDefault());break;case"delimiter":if(this._abortXhr(),this._defocusItems(),!i.multiple&&s.setItems.length>=1)return!1;o=this.onInput(o),t?this._addItem(t):o.length&&(t=this._newItem(o)),t&&this._renderItems().focus()._refreshInput()._refreshSuggestions()._deselectItems(),e.preventDefault();break;case"select":if(o.length||!e.ctrlKey&&!e.metaKey)return!1;this._vars.setItems.forEach(e=>{e.focused=!0}),this._refreshItems();break;case"cut":if(!this.getFocusedItems().length||!e.ctrlKey&&!e.metaKey)return!1;this._copy()._delete(e);break;case"copy":if(!this.getFocusedItems().length||!e.ctrlKey&&!e.metaKey)return!1;this._copy();break;case"delete":{this._abortXhr();let t=this.getFocusedItems();!n.input.selectionEnd&&8===e.keyCode||n.input.selectionStart===o.length&&46===e.keyCode||t.length?this._delete(e):s.timer=setTimeout(()=>{this._keyInput(e)},i.delay);break}}return!0}_copy(){let e=this._options,t=this._html,s=this.getFocusedItems().map(t=>t[e.copyProperty]).join(e.copyDelimiter);return t.copyHelper.style.display="block",t.copyHelper.value=s,t.copyHelper.focus(),t.copyHelper.select(),document.execCommand("copy"),t.copyHelper.style.display="none",t.copyHelper.value="",t.input.focus(),this}_delete(e){let t=this._vars,s=this._options;const i=this.key;let n=this._html,r=this.getFocusedItems();return"tokenfield"===s.mode&&t.setItems.length?r.length?(r.forEach(e=>{this._removeItem(e[i])}),this._refreshSuggestions()._keyInput(e)):n.input.selectionStart||this._focusItem(t.setItems[t.setItems.length-1][i]):r.length&&(r.forEach(e=>{this._removeItem(e[i])}),this._refreshSuggestions()._keyInput(e)),this._renderItems()._refreshInput(!1),this}_keyInput(e){let t=this._vars,s=this._options,i=this._html;this._defocusItems()._refreshItems();const n=this.onInput(i.input.value.trim(),e);if("keydown"===e.type&&this.emit("input",this,n,e),n.length<s.minChars)return this.hideSuggestions(),!1;if(!s.multiple&&t.setItems.length>=1)return!1;if(void 0===t.cache[n]){if(s.remote.url)t.timer=setTimeout(()=>{this._fetchData(n)},s.delay);else if(!s.remote.url&&s.items.length){let e=this._prepareData(s.items),i=this._filterData(n,e);t.suggestedItems=s.filterSetItems?this._filterSetItems(i):i,this.showSuggestions()}}else{let e=this._prepareData(this.remapData(t.cache[n])),i=this._filterData(n,e);t.suggestedItems=s.filterSetItems?this._filterSetItems(i):i,this.showSuggestions()}return this}_onClick(e){let t=e.target;if(t.classList.contains("item-remove"))e.preventDefault(),this._removeItem(t.key)._defocusItems()._renderItems()._refreshInput(!1)._keyInput(e),this.focus();else if(t.classList.contains("tokenfield-suggest-item")){let e=this._getSuggestedItem(t.key);this._addItem(e)._renderItems()._refreshInput()._refreshSuggestions().focus()}else{let s=function(e){let t=[e];for(;e.parentNode;)e=e.parentNode,t.push(e);return t}(t).filter(e=>e.classList&&e.classList.contains("tokenfield-set-item"))[0];s?(this._focusItem(s.key,e.shiftKey,e.ctrlKey||e.metaKey,!0),this._refreshItems()):this._keyInput(e),this.focus()}}_selectPrevItem(){const e=this.key,t=this._options;let s=this._vars.suggestedItems,i=this._getSelectedItemIndex();return s.length?(null!==i?0===i?t.newItems?this._deselectItems():this._selectItem(s[s.length-1][e]):this._selectItem(s[i-1][e]):this._selectItem(s[s.length-1][e]),this):this}_selectNextItem(){const e=this.key,t=this._options;let s=this._vars.suggestedItems,i=this._getSelectedItemIndex();return s.length?(null!==i?i===s.length-1?t.newItems?this._deselectItems():this._selectItem(s[0][e]):this._selectItem(s[i+1][e]):this._selectItem(s[0][e]),this):this}_focusPrevItem(e=!1){const t=this.key;let s=this._vars.setItems,i=this._getFocusedItemIndex();if(!s.length)return this;if(null!==i)if(0!==i||e)if(0===i&&e){let e=this._getFocusedItemIndex(!0);this._defocusItem(s[e][t])}else this._focusItem(s[i-1][t],e,!1,!0);else this._defocusItems();else this._focusItem(s[s.length-1][t],!1,!1,!0);return this._refreshItems(),this}_focusNextItem(e=!1){const t=this.key;let s=this._vars.setItems,i=this._getFocusedItemIndex(!0);return s.length?(null!==i?i!==s.length-1||e?i===s.length-1&&e?this._focusItem(s[0][t],e):this._focusItem(s[i+1][t],e):this._defocusItems():this._focusItem(s[0][t],!1),this._refreshItems(),this):this}_getSelectedItems(){const e=this.key;let t=this._vars.setItems.map(t=>t[e]);return this._vars.suggestedItems.filter(s=>s.selected&&t.indexOf(s[e])<0)}_selectItem(e,t=!1){this._vars.suggestedItems.forEach(s=>{if(s.selected=s[this.key]===e,s.selected&&t){let e=parseInt(this._html.suggest.style.maxHeight,10);if(e){let t=this._html.suggestList.getBoundingClientRect(),i=s.el.getBoundingClientRect(),n=i.top-t.top,r=n+i.height;r>=e+this._html.suggest.scrollTop?this._html.suggest.scrollTop=r-e:n<this._html.suggest.scrollTop&&(this._html.suggest.scrollTop=n)}}})}_deselectItem(e){return this._vars.suggestedItems.every(t=>t[this.key]!==e||(t.selected=!1,!1)),this}_deselectItems(){return this._vars.suggestedItems.forEach(e=>{e.selected=!1}),this}_refreshItemsSelection(){this._vars.suggestedItems.forEach(e=>{e.selected&&e.el?e.el.classList.add("selected"):e.el&&e.el.classList.remove("selected")})}_getSelectedItemIndex(){let e=null;return this._vars.suggestedItems.every((t,s)=>!t.selected||(e=s,!1)),e}_getFocusedItemIndex(e=!1){let t=null;return this._vars.setItems.every((s,i)=>!(s.focused&&(t=i,!e))),t}_getItem(e,t=null){null===t&&(t=this.key);let s=this._filterItems(this._vars.setItems,e,t);return s.length?s[0]:null}_getSuggestedItem(e,t=null){null===t&&(t=this.key);let s=this._filterItems(this._vars.suggestedItems,e,t);return s.length?s[0]:null}_getAvailableItem(e,t=null){null===t&&(t=this.key);let s=this._filterItems(this._options.items,e,t);return s.length?s[0]:null}_filterItems(e,t,s){const i=this._options.filterMatchCase;return e.filter(e=>"string"==typeof e[s]&&"string"==typeof t?i?e[s]===t:e[s].toLowerCase()==t.toLowerCase():e[s]==t)}_removeItem(e){return this._vars.setItems.every((t,s)=>t[this.key]!==e||(this.emit("removeToken",this,t),this._vars.setItems.splice(s,1),this.emit("removedToken",this,t),this.emit("change",this),!1)),this}_addItem(e){e.focused=!1;let t=this._options;if((e.isNew&&!this._getItem(e[t.itemData],t.itemData)||!this._getItem(e[t.itemValue],t.itemValue))&&(this.emit("addToken",this,e),!this._options.maxItems||this._options.maxItems&&this._vars.setItems.length<this._options.maxItems)){e.selected=!1;let t=Object.assign({},e);this._vars.setItems.push(t),this.emit("addedToken",this,t),this.emit("change",this)}return this}getFocusedItem(){let e=this._vars.setItems.filter(e=>e.focused)[0];return e.length?e[0]:null}getFocusedItems(){return this._vars.setItems.filter(e=>e.focused)}_focusItem(e,t=!1,s=!1,i=!1){if(t){let t=null,s=null,n=null,r=this._vars.setItems.length;if(this._vars.setItems.forEach((i,r)=>{i[this.key]===e&&(n=r),null===t&&i.focused&&(t=r),i.focused&&(s=r)}),(0===n||n===r-1)&&null===t&&null===s)return;null===t&&null===s?this._vars.setItems[n].focused=!0:0!==n||s!==r-1||i?(t=Math.min(n,t),s=Math.max(n,s),this._vars.setItems.forEach((e,i)=>{e.focused=n===i||i>=t&&i<=s})):this._vars.setItems[t].focused=!1}else this._vars.setItems.forEach(t=>{t.focused=s?t[this.key]===e?!t.focused:t.focused:t[this.key]===e});return this}_defocusItem(e){return this._vars.setItems.filter(t=>{t[this.key]===e&&(t.focused=!1)})}_defocusItems(){return this._vars.setItems.forEach(e=>{e.focused=!1}),this}_newItem(e){let t=this._options;if("string"==typeof e&&(!e.length||e.length<t.minLength))return null;let s=this._getItem(e,t.itemData)||this._getSuggestedItem(e,t.itemData)||this._getAvailableItem(e,t.itemData);return!s&&t.newItems&&(s={isNew:!0,[this.key]:a(),[t.itemData]:e},this.emit("newToken",this,s)),s?(this._addItem(s),s):null}_buildEl(e){return c(e)}_getBounds(){return this._html.container.getBoundingClientRect()}_renderItems(){let e=this._vars,t=this._options,s=this._html;return s.items.innerHTML="",e.setItems.forEach((e,t)=>{let i=this._renderItem(e,t);s.items.appendChild(i),e.el=i,e.focused?e.el.classList.add("focused"):e.el.classList.remove("focused")}),e.setItems.length>1&&"tokenfield"===t.mode&&s.input.setAttribute("placeholder",""),this._input&&(this._input.value=e.setItems.map(e=>e[t.singleInputValue]).join(t.singleInputDelimiter)),this}_refreshItems(){this._vars.setItems.forEach(e=>{e.el&&(e.focused?e.el.classList.add("focused"):e.el.classList.remove("focused"))})}_renderItem(e,t){let s=this._options,i=this.renderSetItemHtml(e),n=i.querySelector(".item-label"),r=i.querySelector(".item-input"),o=i.querySelector(".item-remove"),l=s.keepItemsOrder?`[${t}]`:"[]";return i.key=e[this.key],o.key=e[this.key],r.setAttribute("name",(e.isNew?s.newItemName:s.itemName)+l),r.value=e[e.isNew?s.newItemValue:s.itemValue]||null,n.textContent=this.renderSetItemLabel(e),e.focused&&i.classList.add("focused"),i}onInput(e,t){return e}renderSetItemHtml(){return this._buildEl(this._templates.setItem)}renderSetItemLabel(e){return e[this._options.itemLabel]}renderSuggestions(e){let t=this._vars,s=this._options,i=this._html,n=this._getSelectedItemIndex();if(!e.length)return this;if(0===s.maxSuggestWindow&&(i.suggest.style.maxHeight=null),!t.suggestedItems.length)return this;s.newItems||null!==n||(e[0].selected=!0);let r=0;e.every((e,t)=>{if(t>=s.maxSuggest)return!1;let n=i.suggestList.childNodes[t],o=e.el=this.renderSuggestedItem(e);return n?n.itemValue===e[s.itemValue]?(n.key=e[this.key],e.el=n):i.suggestList.replaceChild(o,n):n||i.suggestList.appendChild(o),s.maxSuggestWindow>0&&t<s.maxSuggestWindow&&(r+=i.suggestList.childNodes[t].getBoundingClientRect().height),s.maxSuggestWindow>0&&t===s.maxSuggestWindow&&(i.suggest.style.maxHeight=r+"px"),!0});let o=i.suggestList.childElementCount-e.length;if(o>0)for(let t=o-1;t>=0;t--)i.suggestList.removeChild(i.suggestList.childNodes[e.length+t]);return this}renderSuggestedItem(e){let t=this._options,s=this._buildEl(this._templates.suggestItem);if(s.key=e[this.key],s.itemValue=e[t.itemValue],s.innerHTML=this.renderSuggestedItemContent(e),s.setAttribute("title",e[t.itemData]),e.selected&&s.classList.add("selected"),!t.filterSetItems){(this._getItem(e[t.itemValue],t.itemValue)||this._getItem(e[t.itemData],t.itemData))&&s.classList.add("set")}return s}renderSuggestedItemContent(e){return e[this._options.itemData]}showSuggestions(){return this._vars.suggestedItems.length?(this.emit("showSuggestions",this),(!this._options.maxItems||this._options.maxItems&&this._vars.setItems.length<this._options.maxItems)&&(this._html.suggest.style.display="block",this._vars.suggested=!0,this.renderSuggestions(this._vars.suggestedItems)),this.emit("shownSuggestions",this)):this.hideSuggestions(),this}_refreshSuggestions(){let e=this._vars,t=this._options;if(this._html.input.value.length<t.minChars)return this.hideSuggestions(),this;let s=this._prepareData(t.items),i=this._filterData(this._html.input.value,s);return e.suggestedItems=t.filterSetItems?this._filterSetItems(i):i,e.suggestedItems.length&&(!t.maxItems||t.maxItems&&e.setItems.length<t.maxItems)?this.renderSuggestions(e.suggestedItems):this.hideSuggestions(),this}hideSuggestions(){return this.emit("hideSuggestions",this),this._vars.suggested=!1,this._html.suggest.style.display="none",this._html.suggestList.innerHTML="",this.emit("hiddenSuggestions",this),this}getItems(){return this._vars.setItems.map(e=>Object.assign({},e))}setItems(e=[]){return this._vars.setItems=[],this.addItems(e),this}addItems(e=[]){const t=this._options.itemValue;return Array.isArray(e)||(e=[e]),this._prepareData(e).forEach(e=>{(e.isNew||void 0!==e[t])&&this._addItem(e)}),this._renderItems()._refreshInput().hideSuggestions(),this}sortItems(){let e=[];[...this._html.items.childNodes].forEach(t=>{let s=this._getItem(t.key);s&&e.push(s)}),this.setItems(e)}removeItem(e){const t=this._options;"object"==typeof e&&(e[t.itemValue]||e[t.newItemValue])&&(e=e[t.itemValue]||e[t.newItemValue]);let s=this._getItem(e,t.itemValue)||this._getItem(e,t.newItemValue);return s?(this._removeItem(s[this.key])._renderItems(),this):this}emptyItems(){return this._vars.setItems=[],this._renderItems()._refreshInput().hideSuggestions(),this.emit("change",this),this}getSuggestedItems(){return this._vars.suggestedItems.map(e=>Object.assign({},e))}focus(){return this._html.container.classList.add("focused"),this._focused||this._html.input.focus(),this}blur(){return this._html.container.classList.remove("focused"),this._focused&&this._html.input.blur(),this}remove(){let e=this._html;e.container.parentElement.insertBefore(this.el,e.container),e.container.remove(),this.el.style.display="block",1===Object.keys(r).length&&(document.removeEventListener("mousedown",this._vars.events.onMouseDown),window.removeEventListener("resize",this._vars.events.onResize)),this._form&&this._form.nodeName&&this._form.removeEventListener("reset",this._vars.events.onReset),delete r[this.id],delete this.el.tokenfield}}t.a=f}}]);
//# sourceMappingURL=vendors~seomatic-tokens.js.map