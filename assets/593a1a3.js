(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{558:function(t,n,e){"use strict";e.r(n);var c=e(520),o=e(226),l=e(537),r=e(531),_=e(148),d=e(228),v=e(147),y=e(229),m=e(16),f=e(230),w=e(232),C=e(539),h=e(532),x=e(609),k=e(633),T=e(632),A=e(605),R=e(572),D=e(65),B=e(153),N={props:{account:{type:Object,default:null}},data:function(){return{details:!0,tab:null,items:["Transactions","Charges","QR Code"]}}},O=e(52),component=Object(O.a)(N,(function(){var t=this,n=t._self._c;return n(l.a,{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n(l.a,{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n(o.a,{attrs:{tile:""}},[n(d.a,{attrs:{dense:""}},[n(v.a,{staticClass:"py-0 my-0",attrs:{"two-lin":"",dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Account Balance")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v(t._s(t.account.currency.code)+"\n              "+t._s(t._f("currency")(t.account.summary.accountBalance)))])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-lin":""}},[n(m.b,[n(m.d,[t._v("Account Status")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[n(_.a,{attrs:{"x-small":"",color:t.account.status.active?"yellow darken-2":"gray"}},[t._v("mdi-circle")]),t._v("  "+t._s(t.account.status.value)+"\n            ")],1)],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Account Number")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n              "+t._s(t.account.accountNo)+"\n            ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Nominal Interest Rate")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n              "+t._s(t._f("percentage")(t.account.nominalAnnualInterestRate))+"\n            ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Total deposits")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n              "+t._s(t.account.currency.code)+"\n              "+t._s(t._f("currency")(t.account.summary.totalDeposits))+"\n            ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Total Withdrawals")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n              "+t._s(t.account.summary.totalWithdrawals?t.account.currency.code:"")+"\n              "+t._s(t._f("currency")(t.account.summary.totalWithdrawals?t.account.summary.totalWithdrawals:"No withdrawals"))+"\n            ")])],1)],1),t._v(" "),n(v.a,[n(m.b),t._v(" "),n(y.a,[n(c.a,{staticClass:"text-capitalize",attrs:{color:"primary"}},[t._v("Deposit")])],1)],1)],1)],1),t._v(" "),t.details?n(l.a,{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("p",{staticClass:"pa-3"},[t._v("Last Transaction Details")]),t._v(" "),n(o.a,[n(d.a,[n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Last Transaction")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n                "+t._s(t.account.lastActiveTransactionDate)+"\n              ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Made On")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n                "+t._s(t._f("dateformat")(t.account.lastActiveTransactionDate))+"\n              ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(m.b,[n(m.d,[t._v("Min. Required Balance")]),t._v(" "),n(m.c,{staticClass:"text-body-2 font-weight-normal mt-1"},[t._v("\n                "+t._s(t.account.currency.code)+"\n                "+t._s(t._f("currency")(t.account.minRequiredOpeningBalance))+"\n              ")])],1)],1)],1)],1),t._v(" "),n("p",{staticClass:"pa-3"},[t._v("Monitor")]),t._v(" "),n(o.a,[n(d.a,[n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""},on:{click:function(n){t.details=!t.details}}},[n(f.a,{attrs:{color:"grey lighten-3"}},[n(_.a,{attrs:{color:"primary",dark:""}},[t._v(" mdi-swap-horizontal ")])],1),t._v(" "),n(m.b,[n(m.d,[t._v("Transactions")]),t._v(" "),n(m.c,{staticClass:"mt-1"},[t._v("\n                View Transactions\n              ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""},on:{click:function(n){t.details=!t.details,t.tab=1}}},[n(f.a,{attrs:{color:"grey lighten-3"}},[n(_.a,{attrs:{color:"primary",dark:""}},[t._v("mdi-currency-rub ")])],1),t._v(" "),n(m.b,[n(m.d,[t._v("Savings Charges")]),t._v(" "),n(m.c,{staticClass:"mt-1"},[t._v("\n                View Charges\n              ")])],1)],1),t._v(" "),n(v.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""},on:{click:function(n){t.details=!t.details,t.tab=2}}},[n(f.a,{attrs:{color:"grey lighten-3"}},[n(_.a,{attrs:{color:"primary",dark:""}},[t._v(" mdi-qrcode ")])],1),t._v(" "),n(m.b,[n(m.d,[t._v("QR Code")]),t._v(" "),n(m.c,{staticClass:"mt-1"},[t._v("\n                View QR Code for this account\n              ")])],1)],1)],1)],1)],1):n(o.a,{attrs:{tile:"",flat:""}},[n(D.a,{attrs:{color:"primary",dark:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n(T.a,{attrs:{grow:"","align-with-title":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[n(R.a,{attrs:{color:"blue"}}),t._v(" "),t._l(t.items,(function(e){return n(x.a,{key:e},[t._v("\n              "+t._s(e)+"\n            ")])}))],2)]},proxy:!0}])},[n(B.a,[t._v("Account Details")]),t._v(" "),n(h.a),t._v(" "),n(c.a,{attrs:{icon:""},on:{click:function(n){t.details=!t.details}}},[n(_.a,[t._v("mdi-eye-off")])],1)],1),t._v(" "),n(A.a,{model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[n(k.a,[n(o.a,{attrs:{flat:""}},[n(d.a,{staticClass:"py-0 my-0",attrs:{dense:"","two-line":""}},[n(w.a,{attrs:{"active-class":"pink--text",multiple:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},t._l(t.account.transactions,(function(e,c){return n("div",{key:c},[n(v.a,{key:e.id},[n(f.a,[n(_.a,{attrs:{color:"red"}},[t._v(t._s(e.transactionType.interestPosting||e.transactionType.deposit?"mdi-chevron-double-up":"mdi-chevron-double-down"))])],1),t._v(" "),n(m.b,[n(m.d,[t._v(t._s(t._f("dateformat")(e.date)))]),t._v(" "),n(m.c,{domProps:{textContent:t._s(e.transactionType.value)}})],1),t._v(" "),n(y.a,[n(m.a,{staticClass:"text-body-2 black--text"},[t._v("\n                        "+t._s(e.currency.code)+"\n                        "+t._s(t._f("currency")(e.amount)))]),t._v(" "),n(m.a,{staticClass:"text-body-1"},[t._v("\n                        "+t._s(e.currency.code)+"\n                        "+t._s(t._f("currency")(e.runningBalance))+"\n                      ")])],1)],1),t._v(" "),n(r.a,{key:c})],1)})),0)],1)],1)],1),t._v(" "),n(k.a),t._v(" "),n(k.a,[n(o.a,[n(l.a,{staticClass:"fill-height"},[n(C.a,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n(_.a,{attrs:{size:"200"}},[t._v("mdi-qrcode")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);