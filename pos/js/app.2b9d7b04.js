(function(t){function e(e){for(var o,s,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)s=r[u],n[s]&&f.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},i=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"72f7e6cd"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,o){a=n[t]=[e,o]});e.push(a[2]=o);var i,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,a[1](s)}n[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,l.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/pos/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"456a":function(t,e,a){"use strict";var o=a("bac2"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("leftNav"),a("div",{staticClass:"main"},[a("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leftNav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-renwuguanli"}),a("div",[t._v("收银")])]),a("li",[a("i",{staticClass:"icon iconfont icon-jinrudianpu"}),a("div",[t._v("店铺")])]),a("li",[a("i",{staticClass:"icon iconfont icon-liebiao1"}),a("div",[t._v("商品")])]),a("li",[a("i",{staticClass:"icon iconfont icon-31huiyuanqia"}),a("div",[t._v("会员")])]),a("li",[a("i",{staticClass:"icon iconfont icon-quanbudingdan"}),a("div",[t._v("统计")])])])])}],l={name:"leftNav",data:function(){return{}}},c=l,u=(a("456a"),a("2877")),d=Object(u["a"])(c,s,r,!1,null,"d7f43e9c",null);d.options.__file="leftNav.vue";var f=d.exports,p={name:"app",components:{leftNav:f}},m=p,b=(a("7c55"),Object(u["a"])(m,n,i,!1,null,null,null));b.options.__file="App.vue";var h=b.exports,v=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos"},[a("div",[a("el-row",[a("el-col",{staticClass:"pos-order",attrs:{span:6,id:"order-list"}},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"结账",name:"first"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"150"}}),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"80"}}),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"80"}}),a("el-table-column",{attrs:{prop:"options",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){t.add(e.row)}}},[t._v("增加")]),a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){t.reduce(e.row)}}},[t._v("减少")])]}}])})],1),a("div",{staticClass:"checkOut"},[a("span",[t._v("数量："),a("b",[t._v(t._s(t.getCount))])]),a("span",[t._v("总价："),a("b",[t._v("￥"+t._s(t.getAllPrice))])])]),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"success"},on:{click:t.checkOut}},[t._v("结账")]),a("el-button",{attrs:{type:"primary"}},[t._v("挂单")]),a("el-button",{attrs:{type:"danger"},on:{click:t.deleteList}},[t._v("删除")])],1)],1),a("el-tab-pane",{attrs:{label:"挂单",name:"second"}},[t._v("挂单")]),a("el-tab-pane",{attrs:{label:"外卖",name:"third"}},[t._v("外卖")])],1),a("el-dialog",{attrs:{title:"结账（单位：元）",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"应付金额","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.allPrice,callback:function(e){t.allPrice=e},expression:"allPrice"}})],1),a("el-form-item",{attrs:{label:"实际支付","label-width":t.formLabelWidth,prop:"pay"}},[a("el-input",{attrs:{autocomplete:"off",autofocus:"true"},model:{value:t.form.pay,callback:function(e){t.$set(t.form,"pay",e)},expression:"form.pay"}})],1),a("el-form-item",{attrs:{label:"找零","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.getChange,callback:function(e){t.getChange=e},expression:"getChange"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmCheck}},[t._v("确 定")])],1)],1)],1),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"hotSale"},[a("div",{staticClass:"title"},[t._v("热卖商品")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticClass:"hotList"},[a("ul",t._l(t.hotGoods,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",[t._v(t._s(e.goodsName))]),a("span",{staticClass:"’o-price"},[t._v("￥"+t._s(e.price))])])}))])]),a("div",{staticClass:"goodType"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType1,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:"http://p0.meituan.net/210.0/wmproduct/29ab89aeb0d7c19d649dbc55e70e56fd170289.jpg",width:"100%",alt:""}})]),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"小食"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType2,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:"http://p0.meituan.net/210.0/wmproduct/9e1e7bed06c213742038c556087cee3c270995.jpg",width:"100%",alt:""}})]),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"饮料"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType3,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:"http://p0.meituan.net/210.0/wmproduct/ed5409c9bbb9305e9403393751d993d168667.jpg",width:"100%",alt:""}})]),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"套餐"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType4,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:"http://p1.meituan.net/210.0/wmproduct/92b0ac26382f1b42f6bdbb6caa4ed6a8217452.jpg",width:"100%",alt:""}})]),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))])],1)],1)])],1)],1)])},y=[],_=(a("c5f6"),a("7f43")),w=a.n(_),C={name:"Pos",data:function(){var t=function(t,e,a){var o=this;if(!e)return a(new Error("支付金额不能为空！"));setTimeout(function(){Number(e)?e<o.allPrice?a(new Error("支付金额不足")):a():a(new Error("请输入数字"))},1e3)};return{activeName:"first",tableData:[],hotGoods:[],goodsType1:[],goodsType2:[],goodsType3:[],goodsType4:[],dialogFormVisible:!1,allPrice:"",change:"",formLabelWidth:"120px",form:{pay:"",delivery:!1,type:[],resource:"",desc:""},rules:{pay:[{validator:t,trigger:"blur"}]},loading1:!0,loading2:!0}},computed:{getAllPrice:function(){for(var t=0,e=0,a=this.tableData.length;e<a;e++)t+=this.tableData[e].count*this.tableData[e].price;return this.allPrice=t,t},getCount:function(){for(var t=0,e=0,a=this.tableData.length;e<a;e++)t+=this.tableData[e].count;return t},getChange:function(){return this.form.pay&&this.form.pay>=this.allPrice?this.change=this.form.pay-this.allPrice:this.form.pay&&this.form.pay<this.allPrice?this.change="支付金额不足！":this.change="",this.change}},created:function(){var t=this;w.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods").then(function(e){200===e.status&&(t.hotGoods=e.data,t.loading1=!1)}),w.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods").then(function(e){200===e.status&&(t.goodsType1=e.data[0],t.goodsType2=e.data[1],t.goodsType3=e.data[2],t.goodsType4=e.data[3],t.loading2=!1)})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{handleClick:function(t,e){},add:function(t){t.count++},reduce:function(t){if(t.count--,0===t.count)for(var e=0,a=this.tableData.length;e<a;e++)t.goodsId===this.tableData[e].goodsId&&this.tableData.splice(e,1)},addOrderList:function(t){for(var e=!1,a=0,o=this.tableData.length;a<o;a++)this.tableData[a].goodsId==t.goodsId&&(e=!0);if(e){var n=this.tableData.filter(function(e){return e.goodsId==t.goodsId});n[0].count++}else{var i={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(i)}},deleteList:function(){var t=this;this.$confirm("确定删除该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableData=[],t.$message({type:"warning ",message:"已删除!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},checkOut:function(){this.dialogFormVisible=!0},confirmCheck:function(){""!==this.form.pay&&"支付金额不足！"!==this.change&&(this.dialogFormVisible=!1,this.$message({message:"结账成功",type:"success",duration:"1000"}),this.tableData=[],this.form.pay="")}}},k=C,N=(a("7c53"),Object(u["a"])(k,g,y,!1,null,"096b290e",null));N.options.__file="Pos.vue";var P=N.exports;o["default"].use(v["a"]);var T=new v["a"]({mode:"history",base:"/pos/",routes:[{path:"/",name:"pos",component:P},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),x=a("2f62");o["default"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}}),j=a("beff"),L=a.n(j);a("f513");o["default"].config.productionTip=!1,o["default"].use(L.a),new o["default"]({router:T,store:O,render:function(t){return t(h)}}).$mount("#app")},"69ee":function(t,e,a){},"7c53":function(t,e,a){"use strict";var o=a("69ee"),n=a.n(o);n.a},"7c55":function(t,e,a){"use strict";var o=a("d3dd"),n=a.n(o);n.a},bac2:function(t,e,a){},d3dd:function(t,e,a){}});
//# sourceMappingURL=app.2b9d7b04.js.map