(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{583:function(t,e,n){var content=n(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("01907af4",content,!0,{sourceMap:!1})},584:function(t,e,n){var r=n(16)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},585:function(t,e,n){"use strict";var r=n(111);e.a=r.a},589:function(t,e,n){"use strict";var r=n(0),o=(n(34),n(56),n(267),n(11),n(3),n(8),n(47),n(106),n(9),n(7),n(12),n(13),n(4)),l=n(102),c=n(125);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},590:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("83ff91dc",content,!0,{sourceMap:!1})},591:function(t,e,n){var r=n(16)(!1);r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=r},595:function(t,e,n){"use strict";n(9),n(7),n(11),n(3),n(12),n(8),n(13);var r=n(0),o=(n(583),n(186)),l=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}}),c=n(20),d=n(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h(h({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},598:function(t,e,n){"use strict";n.r(e);var r=n(257),o=n(595),l=n(247),c=n(82),d=n(254),f=n(579),h=n(575),v=n(567),m=n(249),_=(n(9),n(7),n(11),n(12),n(13),n(69)),y=n(0),w=n(23),x=(n(22),n(34),n(3),n(62),n(32),n(31),n(164),n(8),n(42),n(590),n(585)),O=n(1),k=n(6),j=n(46);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=x.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(O.z)(t).every((function(t){return null!=t&&"object"===Object(w.a)(t)}))}}},computed:{classes:function(){return C(C({},x.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(O.r)(e,1024===this.base))},internalArrayValue:function(){return Object(O.z)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,o=e.size,l=void 0===o?0:o,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(O.r)(l,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(k.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(O.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=x.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(j.b)(t.data.style,{display:"none"})),t},genInput:function(){var input=x.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=x.a.options.methods.genTextFieldSlot.call(this);return e.data.on=C(C({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(_.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),S=n(589),V=n(154),z=n(199),B=n(250),D=n(155),E=n(252),I=n(21),T=n(246),F=n(258),U=n(578),N=n(569),A=n(111),L=n(71),M=n(266),R=n(15),J=(n(57),n(47),{data:function(){return{readonly:!0,dialog:!1,valid:!1,show1:!1,show2:!1,show3:!1,show4:!1,edit:!1,progress:!1,uploaddialog:!1,confirmPassword:"",currentFile:void 0,rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},form_data:{oldPassword:"",newPassword:""}}},beforeCreate:function(){this.$store.dispatch("retrieve_profile")},methods:{selectFile:function(t){this.progress=0,this.currentFile=t,console.log("File chnaged")},updatepasssword:function(){this.$store.dispatch("_update_user_password",this.form_data)},updateprofile:function(){var t=this;this.progress=!0,delete this.user.staff.user,delete this.user.staff.department,this.$store.dispatch("updatestaff",this.user.staff).then((function(e){setTimeout((function(){return t.closeprofileupdate()}),t.delay_seconds)}))},uploadProfileImage:function(){var t=this;return Object(R.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t.currentFile),r=t.$store.getters.userInfos.id,e.next=5,t.$api.$patch("/auth/".concat(r,"/images/"),n).then((function(e){null!==e&&(t.uploaddialog=!1,setTimeout((function(){return t.$store.dispatch("retrieve_profile")}),t.delay_seconds))})).catch((function(t){console.log(t)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},closeprofileupdate:function(){this.$store.dispatch("retrieve_profile"),this.edit=!1,this.progress=!1},close:function(){this.$refs.form.reset(),this.dialog=!1,this.$store.dispatch("_clear_local_storage_and_sign_out")},getColor:function(t){return"user"===t?"yellow":"admin"===t?"blue darken-3 white--text":"moderator"===t?"green":"cyan"}},created:function(){this.$route.query.edit&&(this.edit=!0)},computed:{user:function(){var t=this.$store.getters.profile;return t.staff&&null!=t.staff.fullName&&(this.edit=!0),t},entityThumbNail:function(){if(this.user.staff)return this.$api.defaults.baseURL+"auth/"+this.user.id+"/images"},passwordConfirmationRule:function(){var t=this;return function(){return t.form_data.newPassword===t.confirmPassword||"Password must match"}}}}),K=n(83),component=Object(K.a)(J,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"breadcrumb"},[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),e("router-link",{staticClass:"active",attrs:{to:"/me"}},[t._v(t._s(t.$t("label.breadcrumb.profile")))])],1),t._v(" "),e(h.a,{attrs:{fluid:""}},[t.edit?e(l.a,{staticClass:"mb-4",attrs:{flat:""}},[e(L.a,{attrs:{dark:"",color:"primary",flat:""}},[e(M.a,[t._v(" Edit staff profile")]),t._v(" "),e(N.a),t._v(" "),t.progress?e("div",[e("a",{staticClass:"light-blue--text"},[t._v("Please wait...")]),t._v(" "),e(F.a,{attrs:{indeterminate:""}})],1):t._e()],1),t._v(" "),e(c.b,[e(S.a,{staticClass:"mt-3",attrs:{id:"check-update-profile-form"},on:{submit:function(e){return e.preventDefault(),t.updateprofile.apply(null,arguments)}}},[e(h.a,[e(U.a,[e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Username",readonly:t.readonly},model:{value:t.user.staff.username,callback:function(e){t.$set(t.user.staff,"username",e)},expression:"user.staff.username"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Full name"},model:{value:t.user.staff.fullName,callback:function(e){t.$set(t.user.staff,"fullName",e)},expression:"user.staff.fullName"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Phone"},model:{value:t.user.staff.contacts,callback:function(e){t.$set(t.user.staff,"contacts",e)},expression:"user.staff.contacts"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Level"},model:{value:t.user.staff.level,callback:function(e){t.$set(t.user.staff,"level",e)},expression:"user.staff.level"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Email "},model:{value:t.user.staff.email,callback:function(e){t.$set(t.user.staff,"email",e)},expression:"user.staff.email"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[e(A.a,{attrs:{label:"Thumbnail link",readonly:""},model:{value:t.user.staff.imageUrl,callback:function(e){t.$set(t.user.staff,"imageUrl",e)},expression:"user.staff.imageUrl"}})],1)],1)],1)],1)],1),t._v(" "),e(c.a,[e(N.a),t._v(" "),e(r.a,{staticClass:"button cancel",attrs:{dark:""},on:{click:function(e){t.edit=!t.edit}}},[t._v("\n          cancel\n        ")]),t._v(" "),e(r.a,{staticClass:"button",attrs:{type:"submit",form:"check-update-profile-form"}},[t._v("\n          save Updates\n        ")])],1)],1):t._e(),t._v(" "),t.edit?t._e():e(l.a,{staticClass:"mx-auto default",attrs:{flat:""}},[e(L.a,{attrs:{color:"primary",flat:"",dark:""}},[e(M.a,[t._v(" User Profile")]),t._v(" "),e(N.a),t._v(" "),e(T.a,{attrs:{dark:"",absolute:!0,value:t.uploaddialog}},[e(v.a,{attrs:{persistent:"","max-width":"600"},model:{value:t.uploaddialog,callback:function(e){t.uploaddialog=e},expression:"uploaddialog"}},[e(l.a,[e(L.a,{attrs:{color:"primary",dark:"",flat:""}},[e(M.a,[e("span",{staticClass:"headline"},[t._v("\n                    Upload profile image")])])],1),t._v(" "),e(c.b,{staticClass:"pt-4"},[e($,{attrs:{label:"Profile picture",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera","show-size":""},on:{change:t.selectFile},scopedSlots:t._u([{key:"selection",fn:function(n){var text=n.text;return[e(d.a,{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                      "+t._s(text)+"\n                    ")])]}}],null,!1,3037805120)})],1),t._v(" "),e(c.a,[e(N.a),t._v(" "),e(r.a,{attrs:{color:"primary"},on:{click:function(e){e.stopPropagation(),t.uploaddialog=!1}}},[t._v("\n                  Cancel\n                ")]),t._v(" "),e(r.a,{attrs:{shaped:""},on:{click:function(e){return t.uploadProfileImage()}}},[t._v(" Save ")])],1)],1)],1)],1),t._v(" "),e(v.a,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[e(o.a,{attrs:{borderless:"",rounded:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[t.user.isStaff?e(r.a,{staticClass:"button cancel",attrs:{medium:"",elevation:"2"},on:{click:function(e){t.edit=!t.edit}}},[e(V.a,[t._v("mdi-pencil")]),t._v("edit")],1):t._e(),t._v(" "),t.user.isStaff?e(r.a,{staticClass:"button upload",attrs:{medium:"",color:"green",elevation:"2"},on:{click:function(e){t.uploaddialog=!t.uploaddialog}}},[e(V.a,[t._v("mdi-cloud-upload")]),t._v(" Update image")],1):t._e(),t._v(" "),null!=t.user?e(r.a,t._g(t._b({staticClass:"button",attrs:{medium:"",elevation:"2"}},"v-btn",c,!1),l),[e(V.a,{attrs:{small:""}},[t._v("mdi-lock")]),t._v("\n                  Change Password")],1):t._e()],1)]}}],null,!1,454404544),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,{attrs:{flat:""}},[e(L.a,{staticClass:"primary",attrs:{dark:"",flat:""}},[e(M.a,[e("h3",[t._v("Update password")])])],1),t._v(" "),e(c.b,{staticClass:"pa-4"},[e(S.a,{ref:"form",staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(e){return e.preventDefault(),t.updatepasssword.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(A.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock","append-icon":t.show1?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password","error-count":"8",label:"Old password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.form_data.oldPassword,callback:function(e){t.$set(t.form_data,"oldPassword",e)},expression:"form_data.oldPassword"}}),t._v(" "),e(A.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show2?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min],type:t.show2?"text":"password","error-count":"8",label:"New password",placeholder:"********",name:"input-10-1",hint:"At least 8 characters",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.form_data.newPassword,callback:function(e){t.$set(t.form_data,"newPassword",e)},expression:"form_data.newPassword"}}),t._v(" "),e(A.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show3?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min,t.passwordConfirmationRule],type:t.show3?"text":"password","error-count":"8",label:"Confirm password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show3=!t.show3}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),e(m.a),t._v(" "),e(c.a,[e(N.a),t._v(" "),e(r.a,{staticClass:"button cancel",attrs:{small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),e(r.a,{staticClass:"button",attrs:{small:"",type:"submit",disabled:!t.valid,form:"check-login-form"}},[t._v("\n                Update\n              ")])],1)],1)],1)],1),t._v(" "),null!=t.user?e(c.b,[e(h.a,[e(B.a,{staticClass:"default",attrs:{"three-line":"",flat:"",width:"100%"}},[e(D.a,[e(E.a,{attrs:{size:"120"}},[e(z.a,{attrs:{src:t.entityThumbNail,alt:t.user.username,"lazy-src":"https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png"}})],1),t._v(" "),e(I.a,[e(I.c,[e("strong",[e("h3",[t._v("Username: "+t._s(t.user.username))])])]),t._v(" "),e(I.b,[e("strong",[t._v("Email: "+t._s(t.user.email))])])],1)],1)],1)],1)],1):e(c.b,[e(F.a,{attrs:{width:2,color:"primary",size:"20",indeterminate:""}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);