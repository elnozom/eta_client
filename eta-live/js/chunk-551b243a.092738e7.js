(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-551b243a"],{"000f":function(t,e,a){"use strict";a("e802")},"12b2":function(t,e,a){"use strict";a.r(e);var s=a("a523"),r=function(){var t=this,e=t._self._c;return e("div",[e(s["a"],{on:{click:function(e){return e.preventDefault(),t.getData()}}},[e("invoice",{attrs:{invoice:t.$route.query,items:t.data}})],1)],1)},c=[];let i={0:"صفر",1:"واحد",2:"اثنان",3:"ثلاثة",4:"أربعة",5:"خمسة",6:"ستة",7:"سبعة",8:"ثمانية",9:"تسعة",10:"عشرة",11:"أحد عشر",12:"اثنى عشر"},n={1:"عشر",2:"عشرون",3:"ثلاثون",4:"أربعون",5:"خمسون",6:"ستون",7:"سبعون",8:"ثمانون",9:"تسعون"},l={0:"صفر",1:"مائة",2:"مئتان",3:"ثلاثمائة",4:"أربعمائة",5:"خمسمائة",6:"ستمائة",7:"سبعمائة",8:"ثمانمائة",9:"تسعمائة"},o={1:"ألف",2:"ألفان",39:"آلاف",1199:"ألفًا"},u={1:"مليون",2:"مليونان",39:"ملايين",1199:"مليونًا"},h={1:"مليار",2:"ملياران",39:"مليارات",1199:"مليارًا"},b={1:"تريليون",2:"تريليونان",39:"تريليونات",1199:"تريليونًا"};function d(t){let e="";if(t=parseInt(t),null!=t.toString().match(/^[0-9]+$/)&&t.toString().length<=14)switch(t.toString().length){case 1:case 2:e=v(t);break;case 3:e=p(t);break;case 4:case 5:case 6:e=g(t);break;case 7:case 8:case 9:e=f(t);break;case 10:case 11:case 12:e=_(t);break;case 13:case 14:case 15:e=k(t);break}return e.replace(/وصفر/g,"").replace(/وundefined/g,"").replace(/ +(?= )/g,"").replace(/صفر و/g,"").replace(/صفر/g,"").replace(/مئتان أ/,"مائتا أ").replace(/مئتان م/,"مائتا م")}function v(t){let e="صفر";if(t<=12)switch(parseInt(t)){case 0:e=i["0"];break;case 1:e=i["1"];break;case 2:e=i["2"];break;case 3:e=i["3"];break;case 4:e=i["4"];break;case 5:e=i["5"];break;case 6:e=i["6"];break;case 7:e=i["7"];break;case 8:e=i["8"];break;case 9:e=i["9"];break;case 10:e=i["10"];break;case 11:e=i["11"];break;case 12:e=i["12"];break}else{let a=m(t,0,0),s=m(t,1,1);e="عشر"==n[a]?i[s]+" "+n[a]:i[s]+" و"+n[a]}return e}function p(t){let e="";while(3!=t.toString().length)t="0"+t;let a=m(t,0,0);switch(parseInt(a)){case 0:e=l["0"];break;case 1:e=l["1"];break;case 2:e=l["2"];break;case 3:e=l["3"];break;case 4:e=l["4"];break;case 5:e=l["5"];break;case 6:e=l["6"];break;case 7:e=l["7"];break;case 8:e=l["8"];break;case 9:e=l["9"];break}return e=e+" و"+v(parseInt(m(t,1,2))),e}function g(t){return x(o["1"],o["2"],o["39"],o["1199"],0,parseInt(t),C(t,4))}function f(t){return x(u["1"],u["2"],u["39"],u["1199"],3,parseInt(t),C(t,7))}function _(t){return x(h["1"],h["2"],h["39"],h["1199"],6,parseInt(t),C(t,10))}function k(t){return x(b["1"],b["2"],b["39"],b["1199"],9,parseInt(t),C(t,13))}function x(t,e,a,s,r,c,i){i=parseInt(i),i=d(i),""==i&&(i="صفر");let n="";switch(c=parseInt(c),c.toString().length){case 4+r:let e=parseInt(m(c,0,0));switch(e){case 1:n=t+" و"+i;break;case 2:n=u+" و"+i;break;default:n=v(e)+" "+a+" و"+i;break}break;case 5+r:let l=parseInt(m(c,0,1));switch(l){case 10:n=v(l)+" "+a+" و"+i;break;default:n=v(l)+" "+s+" و"+i;break}break;case 6+r:let o=parseInt(m(c,0,2)),u=parseInt(m(c,1,2)),h="";switch(u){case 0:h=t;break;default:h=s;break}switch(l){case 100<=l<=199:n=p(o)+" "+h+" و"+i;break;case 200<=l<=299:n=p(o)+" "+h+" و"+i;break;default:n=p(o)+" "+h+" و"+i;break}break}return n}function m(t,e,a){let s="";for(let r=e;r<=a;r++)s+=String(t).charAt(r);return s}function C(t,e){let a="",s=1;while(s!=e)a=String(t).charAt(t.toString().length-s)+a,s++;return a}var w=a("a3d3"),I=a("b0af"),y=a("99d9"),T=a("1f4f"),S=function(){var t=this,e=t._self._c;return e("div",{ref:"invoice",staticClass:"invoice",attrs:{id:"print"}},[e(I["a"],{attrs:{flat:""}},[e("div",[e(y["b"],[e(T["a"],{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"8"}},[e("h2",{staticClass:"mb-4"},[t._v("فاتورة رقم : "+t._s(t.invoice.InternalId))])])]),e("tr",[e("th",{attrs:{colspan:"3"}},[e("p",{staticClass:"block"},[t._v("تاريخ الاصدار : "+t._s(t.convertDate(t.invoice.DateTimeIssued)))]),e("p",{staticClass:"block"},[t._v("تاريخ الاستلام : "+t._s(t.convertDate(t.invoice.DateTimeReceived)))])]),e("th",{attrs:{colspan:"5"}},[e("p",{staticClass:"block"},[t._v(" المورد :"+t._s(t.invoice.IssuerName)+" ")]),e("p",{staticClass:"block"},[t._v("بطاقة ضريبية :"+t._s(t.invoice.IssuerRin))])])]),e("tr",[e("th",{staticClass:"text-right"},[t._v("المسلسل")]),e("th",{staticClass:"text-right"},[t._v("كود الصنف")]),e("th",{staticClass:"text-right",staticStyle:{"min-width":"250px"}},[t._v("اسم الصنف")]),e("th",{staticClass:"text-right"},[t._v("السعر")]),e("th",{staticClass:"text-right"},[t._v("الكمية")]),e("th",{staticClass:"text-right"},[t._v("الاجمالي")]),e("th",{staticClass:"text-right"},[t._v("الضريبة")]),e("th",{staticClass:"text-right"},[t._v("الاجمالي الكلي")])])]),e("tbody",[t._l(t.items,(function(a,s){return e("tr",{key:a.Name},[e("td",{staticClass:"text-right"},[t._v(t._s(s+1))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.ItemType)+" : "+t._s(a.ItemCode))]),e("td",{staticClass:"text-right",staticStyle:{"min-width":"300px"}},[a.ItemName?e("span",[t._v(t._s(a.ItemName))]):t._e()]),e("td",{staticClass:"text-right"},[t._v(t._s(t.currency(a.ItemPrice)))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.Quantity))]),e("td",{staticClass:"text-right"},[t._v(t._s(t.currency(a.SubTotal)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t.currency(a.TotalTax)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t.currency(a.TotalAmount)))])])})),e("tr",[e("td",{staticClass:"totlas w-full",staticStyle:{border:"1px solid",width:"100%"},attrs:{colspan:"8"}},[e("div",{staticClass:"d-flex w-full justify-space-between"},[e("span",{staticClass:"text-right"},[t._v("الاجمالي: ")]),e("span",{staticClass:"text-left"},[t._v(t._s(t.currency(t.invoice.TotalAmount)))])]),e("div",{staticClass:"d-flex w-full justify-space-between"},[e("span",{staticClass:"text-right"},[t._v("ضريبة القيمة المضافة(14%) :")]),e("span",{staticClass:"text-left"},[t._v(" "+t._s(t.currency(t.invoice.TotalTax)))])]),e("div",{staticClass:"d-flex w-full justify-space-between"},[e("span",{staticClass:"text-right"},[t._v("الاجمالي الكلي: ")]),e("span",{staticClass:"text-left"},[t._v(t._s(t.currency(t.invoice.TotalAmount+t.invoice.TotalTax)))])])])])],2)]},proxy:!0}])})],1)],1)])],1)},D=[],$=a("28f3"),A={methods:{tafqeet:d},methods:{currency:$["d"],convertDate:$["c"]},props:["invoice","items"]},j=A,N=(a("000f"),a("2877")),O=Object(N["a"])(j,S,D,!1,null,"73cd60ca",null),P=O.exports,q={data(){return{page:1,data:{},itemsPerPage:15,pageCount:0,table:{loading:!1,data:[],headers:[{text:this.$t("internal_id"),align:"center",sortable:!0,value:"internalId"},{text:this.$t("total_amount"),align:"center",sortable:!0,value:"total"},{text:this.$t("tax"),align:"center",sortable:!0,value:"totalTax"},{text:this.$t("netAmount"),align:"center",sortable:!0,value:"netAmount"},{text:this.$t("issuerName"),align:"center",sortable:!0,value:"issuerName"},{text:this.$t("date_time_issued"),align:"center",sortable:!0,value:"dateTimeIssued"},{text:this.$t("actions"),align:"center",sortable:!1,value:"actions"}]}}},components:{invoice:P},methods:{currency:$["d"],convertDate:$["c"],getData(){this.table.loading=!0,Object(w["f"])(this.$route.params.id).then(t=>{this.data=t,console.log(t),console.log(t.invoiceLines),this.table.loading=!1})},reset(){this.table.loading=!1}},created(){this.getData()}},J=q,R=Object(N["a"])(J,r,c,!1,null,null,null);e["default"]=R.exports},e802:function(t,e,a){}}]);
//# sourceMappingURL=chunk-551b243a.092738e7.js.map