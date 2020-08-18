/*!
 * @project        SEOmatic
 * @name           seomatic-meta.js
 * @author         Andrew Welch
 * @build          Tue, Aug 18, 2020 3:25 PM ET
 * @release        eedfee1988501c79e5a4b7d59c6eb5a7bbee0295 [develop]
 * @copyright      Copyright (c) 2020 nystudio107
 *
 */!function(e){function t(t){for(var i,c,a=t[0],m=t[1],l=t[2],h=0,u=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(i in m)Object.prototype.hasOwnProperty.call(m,i)&&(e[i]=m[i]);for(n&&n(t);u.length;)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,a=1;a<s.length;a++){var m=s[a];0!==r[m]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=s[0]))}return e}var i={},r={6:0},o=[];function c(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=i,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(s,i,function(t){return e[t]}.bind(null,i));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],m=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var n=m;o.push([123,0,12]),s()}({123:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("div",{staticClass:"py-3"},[s("treeselect",{ref:"treeselect",attrs:{multiple:!1,flat:!1,"default-expand-level":0,options:e.options},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),null!==e.schemaName?s("div",{staticClass:"heading"},[s("div",{staticClass:"instructions"},[s("p",[s("a",{attrs:{href:"http://schema.org/"+e.schemaName,rel:"noopener",target:"_blank"}},[e._v(e._s(e.schemaName)+" info: ")]),e._v("\n                "+e._s(e.schemaDescription)+"\n            ")])])]):e._e()])};i._withStripped=!0;var r=s(32),o=s.n(r),c=s(33),a=s.n(c),m=s(34),l=s.n(m);s(113);Vue.use(a.a,o.a);var n={components:{Treeselect:l.a},props:{entity:{type:String,default:null}},watch:{schemaName:function(e){var t=this,s=Craft.getActionUrl("seomatic/json-ld/get-type?schemaType="+this.schemaName);this.axios.get(s).then((function(e){e.data&&e.data&&(t.schemaDescription=e.data.schemaTypeDescription)}))}},mounted:function(){var e=this,t=Craft.getActionUrl("seomatic/json-ld/get-type-tree");this.value=this.entity,this.axios.get(t).then((function(t){t.data&&(e.options=t.data)})),this.$refs.treeselect.$on("input",(function(t,s){if(void 0===t)e.schemaName=null;else{var i=t.split(".");e.schemaName=i[i.length-1]}$(document).trigger("schema-value-changed",t)}))},data:function(){return{schemaName:null,schemaDescription:null,value:null,options:[]}}},h=s(0),u=Object(h.a)(n,i,[],!1,null,null,null);u.options.__file="src/assetbundles/seomatic/src/vue/SchemaTypeList.vue";var p=u.exports;if(void 0!==window.schemaSelectId)new Vue({el:"#"+window.schemaSelectId,components:{"schema-type-list":p},data:{},methods:{},mounted:function(){}});window.seomaticTabChangeHandler=function(){$(".seomatic-tab-links").on("click",(function(e){e.preventDefault(),$(".seomatic-tab-links").removeClass("sel"),$(this).addClass("sel"),$(".seomatic-tab-content").addClass("hidden");var t=$(this).attr("href");$(t).removeClass("hidden")}))},window.seomaticTabChangeHandler(),$((function(){var e=$(".seomatic-script-lightswitch").find(".lightswitch");$(e).each((function(e,t){$(this).find("input").first().val()?$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").show():$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").hide()})),$(e).on("click",(function(e){$(this).find("input").first().val()?$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").slideDown():$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").slideUp()})),$(".seomatic-imageSourceSelect > select").each((function(e,t){switch($(this).val()){case"sameAsSeo":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").show(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").hide();break;case"fromField":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").show(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").show(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").hide();break;case"fromAsset":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").show(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").show(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").hide();break;case"fromUrl":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").hide(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").show()}})),$(".seomatic-imageSourceSelect > select").on("change",(function(e){switch(this.value){case"sameAsSeo":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").slideUp();break;case"fromField":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").slideDown(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").slideUp();break;case"fromAsset":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").slideDown(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").slideUp();break;case"fromUrl":$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceNotFromUrl").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromField").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromAsset").slideUp(),$(this).closest(".seomatic-imageSourceWrapper").children(".seomatic-imageSourceFromUrl").slideDown()}})),$(".seomatic-textSourceSelect > select").each((function(e,t){switch($(this).val()){case"sameAsSeo":case"sameAsGlobal":case"sameAsSiteTwitter":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromField":case"summaryFromField":case"keywordsFromField":case"fromUserField":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").show(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromCustom":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").show()}})),$(".seomatic-textSourceSelect > select").on("change",(function(e){switch(this.value){case"sameAsSeo":case"sameAsGlobal":case"sameAsSiteTwitter":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromField":case"summaryFromField":case"keywordsFromField":case"fromUserField":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").show(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromCustom":$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".seomatic-textSourceWrapper").children(".seomatic-textSourceFromUrl").show()}}))}))}});
//# sourceMappingURL=seomatic-meta.js.map