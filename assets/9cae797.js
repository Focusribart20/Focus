(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{649:function(e,t,r){"use strict";r.r(t);var o=r(525),l=r(632),n=r(229),c=r(59),d=r(553),f=r(545),m=r(542),v=r(535),_=r(527),h=r(637),w=r(560),k=r(148),y=r(192),C=r(230),x=r(147),P=r(232),$=r(16),U=r(227),F=r(236),N=r(544),R=r(538),T=r(565),S=r(66),z=r(153),j=r(17),D=(r(54),r(50),{data:function(){return{readonly:!0,dialog:!1,valid:!1,show1:!1,show2:!1,show3:!1,show4:!1,edit:!1,progress:!1,uploaddialog:!1,confirmPassword:"",currentFile:void 0,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},form_data:{oldPassword:"",newPassword:""}}},beforeCreate:function(){this.$store.dispatch("retrieve_profile")},methods:{selectFile:function(e){this.progress=0,this.currentFile=e,console.log("File chnaged")},updatepasssword:function(){this.$store.dispatch("_update_user_password",this.form_data)},updateprofile:function(){var e=this;this.progress=!0,delete this.user.staff.user,delete this.user.staff.department,this.$store.dispatch("updatestaff",this.user.staff).then((function(t){setTimeout((function(){return e.closeprofileupdate()}),e.delay_seconds)}))},uploadProfileImage:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("file",e.currentFile),o=e.$store.getters.userInfos.id,t.next=5,e.$api.$patch("/auth/".concat(o,"/images/"),r).then((function(t){null!==t&&(e.uploaddialog=!1,setTimeout((function(){return e.$store.dispatch("retrieve_profile")}),e.delay_seconds))})).catch((function(e){console.log(e)}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},closeprofileupdate:function(){this.$store.dispatch("retrieve_profile"),this.edit=!1,this.progress=!1},close:function(){this.$refs.form.reset(),this.dialog=!1,this.$store.dispatch("_clear_local_storage_and_sign_out")},getColor:function(e){return"user"===e?"yellow":"admin"===e?"blue darken-3 white--text":"moderator"===e?"green":"cyan"}},created:function(){this.$route.query.edit&&(this.edit=!0)},computed:{user:function(){var e=this.$store.getters.profile;return e.staff&&null!=e.staff.fullName&&(this.edit=!0),e},entityThumbNail:function(){if(this.user.staff)return this.$api.defaults.baseURL+"auth/"+this.user.id+"/images"},passwordConfirmationRule:function(){var e=this;return function(){return e.form_data.newPassword===e.confirmPassword||"Password must match"}}}}),E=r(44),component=Object(E.a)(D,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"breadcrumb"},[t("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("label.breadcrumb.dashboard")))]),e._v(" "),t("router-link",{staticClass:"active",attrs:{to:"/me"}},[e._v(e._s(e.$t("label.breadcrumb.profile")))])],1),e._v(" "),t(m.a,{attrs:{fluid:""}},[e.edit?t(n.a,{staticClass:"mb-4",attrs:{flat:""}},[t(S.a,{attrs:{dark:"",color:"primary",flat:""}},[t(z.a,[e._v(" Edit staff profile")]),e._v(" "),t(R.a),e._v(" "),e.progress?t("div",[t("a",{staticClass:"light-blue--text"},[e._v("Please wait...")]),e._v(" "),t(F.a,{attrs:{indeterminate:""}})],1):e._e()],1),e._v(" "),t(c.b,[t(w.a,{staticClass:"mt-3",attrs:{id:"check-update-profile-form"},on:{submit:function(t){return t.preventDefault(),e.updateprofile.apply(null,arguments)}}},[t(m.a,[t(N.a,[t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Username",readonly:e.readonly},model:{value:e.user.staff.username,callback:function(t){e.$set(e.user.staff,"username",t)},expression:"user.staff.username"}})],1),e._v(" "),t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Full name"},model:{value:e.user.staff.fullName,callback:function(t){e.$set(e.user.staff,"fullName",t)},expression:"user.staff.fullName"}})],1),e._v(" "),t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Phone"},model:{value:e.user.staff.contacts,callback:function(t){e.$set(e.user.staff,"contacts",t)},expression:"user.staff.contacts"}})],1),e._v(" "),t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Level"},model:{value:e.user.staff.level,callback:function(t){e.$set(e.user.staff,"level",t)},expression:"user.staff.level"}})],1),e._v(" "),t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Email "},model:{value:e.user.staff.email,callback:function(t){e.$set(e.user.staff,"email",t)},expression:"user.staff.email"}})],1),e._v(" "),t(f.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(T.a,{attrs:{label:"Thumbnail link",readonly:""},model:{value:e.user.staff.imageUrl,callback:function(t){e.$set(e.user.staff,"imageUrl",t)},expression:"user.staff.imageUrl"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t(R.a),e._v(" "),t(o.a,{staticClass:"button cancel",attrs:{dark:""},on:{click:function(t){e.edit=!e.edit}}},[e._v("\n          cancel\n        ")]),e._v(" "),t(o.a,{staticClass:"button",attrs:{type:"submit",form:"check-update-profile-form"}},[e._v("\n          save Updates\n        ")])],1)],1):e._e(),e._v(" "),e.edit?e._e():t(n.a,{staticClass:"mx-auto default",attrs:{flat:""}},[t(S.a,{attrs:{color:"primary",flat:"",dark:""}},[t(z.a,[e._v(" User Profile")]),e._v(" "),t(R.a),e._v(" "),t(U.a,{attrs:{dark:"",absolute:!0,value:e.uploaddialog}},[t(v.a,{attrs:{persistent:"","max-width":"600"},model:{value:e.uploaddialog,callback:function(t){e.uploaddialog=t},expression:"uploaddialog"}},[t(n.a,[t(S.a,{attrs:{color:"primary",dark:"",flat:""}},[t(z.a,[t("span",{staticClass:"headline"},[e._v("\n                    Upload profile image")])])],1),e._v(" "),t(c.b,{staticClass:"pt-4"},[t(h.a,{attrs:{label:"Profile picture",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera","show-size":""},on:{change:e.selectFile},scopedSlots:e._u([{key:"selection",fn:function(r){var text=r.text;return[t(d.a,{attrs:{small:"",label:"",color:"primary"}},[e._v("\n                      "+e._s(text)+"\n                    ")])]}}],null,!1,3037805120)})],1),e._v(" "),t(c.a,[t(R.a),e._v(" "),t(o.a,{attrs:{color:"primary"},on:{click:function(t){t.stopPropagation(),e.uploaddialog=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),t(o.a,{attrs:{shaped:""},on:{click:function(t){return e.uploadProfileImage()}}},[e._v(" Save ")])],1)],1)],1)],1),e._v(" "),t(v.a,{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,c=r.attrs;return[t(l.a,{attrs:{borderless:"",rounded:""},model:{value:e.toggle_exclusive,callback:function(t){e.toggle_exclusive=t},expression:"toggle_exclusive"}},[e.user.isStaff?t(o.a,{staticClass:"button cancel",attrs:{medium:"",elevation:"2"},on:{click:function(t){e.edit=!e.edit}}},[t(k.a,[e._v("mdi-pencil")]),e._v("edit")],1):e._e(),e._v(" "),e.user.isStaff?t(o.a,{staticClass:"button upload",attrs:{medium:"",color:"green",elevation:"2"},on:{click:function(t){e.uploaddialog=!e.uploaddialog}}},[t(k.a,[e._v("mdi-cloud-upload")]),e._v(" Update image")],1):e._e(),e._v(" "),null!=e.user?t(o.a,e._g(e._b({staticClass:"button",attrs:{medium:"",elevation:"2"}},"v-btn",c,!1),n),[t(k.a,{attrs:{small:""}},[e._v("mdi-lock")]),e._v("\n                  Change Password")],1):e._e()],1)]}}],null,!1,454404544),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(n.a,{attrs:{flat:""}},[t(S.a,{staticClass:"primary",attrs:{dark:"",flat:""}},[t(z.a,[t("h3",[e._v("Update password")])])],1),e._v(" "),t(c.b,{staticClass:"pa-4"},[t(w.a,{ref:"form",staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(t){return t.preventDefault(),e.updatepasssword.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(T.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock","append-icon":e.show1?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password","error-count":"8",label:"Old password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.form_data.oldPassword,callback:function(t){e.$set(e.form_data,"oldPassword",t)},expression:"form_data.oldPassword"}}),e._v(" "),t(T.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show2?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min],type:e.show2?"text":"password","error-count":"8",label:"New password",placeholder:"********",name:"input-10-1",hint:"At least 8 characters",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show2=!e.show2}},model:{value:e.form_data.newPassword,callback:function(t){e.$set(e.form_data,"newPassword",t)},expression:"form_data.newPassword"}}),e._v(" "),t(T.a,{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show3?"visibility":"visibility_off",rules:[e.rules.required,e.rules.min,e.passwordConfirmationRule],type:e.show3?"text":"password","error-count":"8",label:"Confirm password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(t){e.show3=!e.show3}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1),e._v(" "),t(_.a),e._v(" "),t(c.a,[t(R.a),e._v(" "),t(o.a,{staticClass:"button cancel",attrs:{small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n                Cancel\n              ")]),e._v(" "),t(o.a,{staticClass:"button",attrs:{small:"",type:"submit",disabled:!e.valid,form:"check-login-form"}},[e._v("\n                Update\n              ")])],1)],1)],1)],1),e._v(" "),null!=e.user?t(c.b,[t(m.a,[t(C.a,{staticClass:"default",attrs:{"three-line":"",flat:"",width:"100%"}},[t(x.a,[t(P.a,{attrs:{size:"120"}},[t(y.a,{attrs:{src:e.entityThumbNail,alt:e.user.username,"lazy-src":"https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png"}})],1),e._v(" "),t($.b,[t($.d,[t("strong",[t("h3",[e._v("Username: "+e._s(e.user.username))])])]),e._v(" "),t($.c,[t("strong",[e._v("Email: "+e._s(e.user.email))])])],1)],1)],1)],1)],1):t(c.b,[t(F.a,{attrs:{width:2,color:"primary",size:"20",indeterminate:""}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);