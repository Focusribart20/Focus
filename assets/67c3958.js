(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{639:function(t,e,n){"use strict";n.r(e);var o=n(523),r=n(543),c=n(540),l=(n(248),n(315)),d=Object(l.a)("flex"),h=n(147),f=n(542),m={meta:{auth:{requiresAuth:!1}},layout:"home",data:function(){return{valid:!1,show1:!1,show2:!0,show3:!1,show4:!1,payload:{password:"password",username:"demo"},image:"https://images.squarespace-cdn.com/content/v1/5608c2dae4b0ffbc0ff092a2/1462484735802-94M1A977HJJEL2THCD2Q/ke17ZwdGBToddI8pDm48kLl6r9ydDU0pEbLAVM93WoUUqsxRUqqbr1mOJYKfIPR7IxQp-SzSi0mUVxNxPLQ2a8ST-OHudl8xFkQoit3yJpm7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtBAdYz4rrMKLrjAsWFNRtjSprFKWBuEhUbdsZxltHXcCjLISwBs8eEdxAxTptZAUg/Medical-physician-doctor-hands.png?format=2500w",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}}}},computed:{},methods:{login:function(){this.$store.dispatch("_authenticate_then_login",this.payload)},nativateToHere:function(t){this.$router.push("/"+t)}},beforeMount:function(){console.log(this.$store.getters.isLoggedIn),this.$store.getters.isLoggedIn&&this.$router.push("/")}},w=n(53),component=Object(w.a)(m,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"transparent fill-height",attrs:{fluid:""}},[e(f.a,{staticClass:"justify-center",attrs:{align:"center",justify:"center","no-gutters":""}},[e(r.a,{staticClass:"d-flex justify-space-around",attrs:{cols:"12"}},[e(d,{staticClass:"d-flex align-center justify-end flex-column",attrs:{xs6:""}},[e("div",{staticClass:"font-weight-black"},[t._v("\n          Made by\n          "),e("a",{attrs:{href:"https://github.com/ospic",target:"_blank"}},[t._v("Singo Africa ")]),t._v("\n          as a web application for\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://amala.co.tz/products/amala-yangu/",target:"_blank"}},[t._v("Amala yangu")]),t._v("\n          self service application Copyright ©\n          "+t._s((new Date).getFullYear())+" The Apache Software Foundation,\n          Licensed under the\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[t._v("\n            Apache License, Version 2.0.")]),t._v(". Documentation can be found\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://docs.ospicx.com/welcome",target:"_blank"}},[t._v("here")]),t._v("\n          and you can get to this app repository\n\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://github.com/ospic/webapp",target:"_blank"}},[t._v("here")])]),t._v(" "),e(o.a,{staticClass:"mt-4 px-4",attrs:{color:"primary",rounded:"",small:""},on:{click:function(e){return e.stopPropagation(),t.$router.go(-1)}}},[e(h.a,{attrs:{small:"",dense:"",left:"",color:"white"}},[t._v("mdi-keyboard-backspace")]),t._v("\n          Click to go Back")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);