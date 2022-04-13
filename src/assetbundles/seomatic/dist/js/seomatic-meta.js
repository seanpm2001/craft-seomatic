/*!
 * @project        seomatic
 * @name           seomatic-meta.js
 * @author         Andrew Welch
 * @build          Wed Apr 13 2022 13:51:17 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2022 ©2020 nystudio107.com
 *
 */
"use strict";(self.webpackChunkseomatic=self.webpackChunkseomatic||[]).push([[997],{923:function(e,t,i){i(9826),i(1539),i(7042),i(8309),i(1038),i(8783),i(4916),i(2526),i(1817),i(2165),i(6992),i(3948),i(3123);var s=i(9669),a=i.n(s),r=i(1939),o=i.n(r),c=i(4301),n=i.n(c);Vue.use(o(),a());var m={components:{Treeselect:n()},props:{entity:{type:String,default:null},disabled:{type:Boolean,default:!1}},watch:{schemaName:function(e){var t=this,i=Craft.getActionUrl("seomatic/json-ld/get-type?schemaType="+this.schemaName);this.axios.get(i).then((function(e){e.data&&e.data&&(t.schemaDescription=e.data.schemaTypeDescription)}))}},mounted:function(){var e=this,t=Craft.getActionUrl("seomatic/json-ld/get-type-tree");this.value=this.entity,this.axios.get(t).then((function(t){t.data&&(e.options=t.data)})),this.$refs.treeselect.$on("input",(function(t,i){if(void 0===t)e.schemaName=null;else{var s=t.split(".");e.schemaName=s[s.length-1]}$(document).trigger("schema-value-changed",t)}))},data:function(){return{schemaName:null,schemaDescription:null,value:null,options:[]}}},l=(0,i(1900).Z)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"field"},[i("div",{staticClass:"py-3"},[i("treeselect",{ref:"treeselect",attrs:{multiple:!1,flat:!1,"default-expand-level":0,options:e.options,disabled:e.disabled},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),null!==e.schemaName?i("div",{staticClass:"heading"},[i("div",{staticClass:"instructions"},[i("p",[i("a",{attrs:{href:"http://schema.org/"+e.schemaName,rel:"noopener",target:"_blank"}},[e._v(e._s(e.schemaName)+" info: ")]),e._v("\n                "+e._s(e.schemaDescription)+"\n            ")])])]):e._e()])}),[],!1,null,null,null).exports;function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}if(void 0!==window.schemaSelectClass){var u,p=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){c=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(c)throw r}}}}(document.querySelectorAll("."+window.schemaSelectClass));try{for(p.s();!(u=p.n()).done;){var h=u.value,f="vue-"+Math.round(1e3*Math.random());h.setAttribute("id",f),new Vue({el:"#"+f,components:{"schema-type-list":l},data:{},methods:{},mounted:function(){}})}}catch(e){p.e(e)}finally{p.f()}}function g(){$(".inheritable-field .inherited").find("input, select, button, textarea").prop("disabled",!0),$(".inheritable-field .override .lightswitch:not(.on) input").val(0),$(".inheritable-field .override .lightswitch").on("change",(function(e){$(this).hasClass("on")?($(this).parents(".inheritable-field").addClass("defined-settings").removeClass("inherited-settings"),Craft.initUiElements($(this).parents(".inheritable-field"))):($(this).parents(".inheritable-field").removeClass("defined-settings").addClass("inherited-settings"),$(this).find("input").val(0))}));var e=$(".seomatic-script-lightswitch").find(".lightswitch");$(e).each((function(e,t){$(this).find("input").first().val()?$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").show():$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").hide()})),$(e).on("click",(function(e){$(this).find("input").first().val()?$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").slideDown():$(this).closest(".seomatic-script-wrapper").find(".seomatic-script-container").slideUp()})),$(".seomatic-imageSourceSelect > select").each((function(e,t){switch($(this).val()){case"sameAsSeo":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").show(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").hide();break;case"fromField":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").show(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").show(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").hide();break;case"fromAsset":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").show(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").show(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").hide();break;case"fromUrl":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").hide(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").show()}})),$(".seomatic-imageSourceSelect > select").on("change",(function(e){switch(this.value){case"sameAsSeo":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").slideUp();break;case"fromField":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").slideDown(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").slideUp();break;case"fromAsset":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").slideDown(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").slideDown(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").slideUp();break;case"fromUrl":$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceNotFromUrl").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromField").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromAsset").slideUp(),$(this).parents(".seomatic-imageSourceWrapper").find(".seomatic-imageSourceFromUrl").slideDown()}})),$(".seomatic-textSourceSelect select").each((function(e,t){switch($(this).val()){case"sameAsSeo":case"sameAsGlobal":case"sameAsSiteTwitter":$(this).closest(".value-wrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".value-wrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromField":case"summaryFromField":case"keywordsFromField":case"fromUserField":$(this).closest(".value-wrapper").children(".seomatic-textSourceFromField").show(),$(this).closest(".value-wrapper").children(".seomatic-textSourceFromUrl").hide();break;case"fromCustom":$(this).closest(".value-wrapper").children(".seomatic-textSourceFromField").hide(),$(this).closest(".value-wrapper").children(".seomatic-textSourceFromUrl").show()}})),$(".field-settings .seomatic-textSourceSelect select").on("change",(function(e){switch(this.value){case"sameAsSeo":case"sameAsGlobal":case"sameAsSiteTwitter":$(this).closest(".field-settings").children(".seomatic-textSourceFromField").hide(),$(this).closest(".field-settings").children(".seomatic-textSourceFromUrl").hide();break;case"fromField":case"summaryFromField":case"keywordsFromField":case"fromUserField":$(this).closest(".field-settings").children(".seomatic-textSourceFromField").show(),$(this).closest(".field-settings").children(".seomatic-textSourceFromUrl").hide();break;case"fromCustom":$(this).closest(".field-settings").children(".seomatic-textSourceFromField").hide(),$(this).closest(".field-settings").children(".seomatic-textSourceFromUrl").show()}}))}window.seomaticTabChangeHandler=function(){$(".seomatic-tab-links").on("click",(function(e){e.preventDefault(),$(".seomatic-tab-links").removeClass("sel"),$(this).addClass("sel"),$(".seomatic-tab-content").addClass("hidden");var t=$(this).attr("href");$(t).removeClass("hidden")}))},window.seomaticTabChangeHandler(),void 0!==Craft.EntryTypeSwitcher&&Garnish.on(Craft.EntryTypeSwitcher,"typeChange",(function(){g()})),$((function(){g()}))},311:function(e){e.exports=Vue}},function(e){e.O(0,[216],(function(){return t=923,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=seomatic-meta.js.map