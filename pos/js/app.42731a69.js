(function(t){function e(e){for(var o,s,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],n[s]&&f.push(n[s][0]),n[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"72f7e6cd"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,o){a=n[t]=[e,o]});e.push(a[2]=o);var i,r=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,a[1](s)}n[t]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,r.appendChild(c)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/pos/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0793":function(t,e,a){"use strict";var o=a("08b2"),n=a.n(o);n.a},"08b2":function(t,e,a){},1928:function(t,e,a){"use strict";var o=a("d0ea"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("leftNav"),a("div",{staticClass:"main"},[a("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leftNav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-renwuguanli"}),a("div",[t._v("收银")])]),a("li",[a("i",{staticClass:"icon iconfont icon-jinrudianpu"}),a("div",[t._v("店铺")])]),a("li",[a("i",{staticClass:"icon iconfont icon-liebiao1"}),a("div",[t._v("商品")])]),a("li",[a("i",{staticClass:"icon iconfont icon-31huiyuanqia"}),a("div",[t._v("会员")])]),a("li",[a("i",{staticClass:"icon iconfont icon-quanbudingdan"}),a("div",[t._v("统计")])])])])}],r={name:"leftNav",data:function(){return{}}},c=r,d=(a("0793"),a("2877")),u=Object(d["a"])(c,s,l,!1,null,"136b42d4",null);u.options.__file="leftNav.vue";var f=u.exports,p={name:"app",components:{leftNav:f}},m=p,b=(a("7c55"),Object(d["a"])(m,n,i,!1,null,null,null));b.options.__file="App.vue";var g=b.exports,h=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos"},[a("div",[a("el-row",[a("el-col",{staticClass:"pos-order",attrs:{span:t.payList,id:"order-list"}},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"结账",name:"first"}},[a("el-table",{staticClass:"ol-tableHeight",attrs:{data:t.tableData,border:"",stripe:"",size:"middle",height:"ol-tableHeight"}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"options",label:"操作",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){t.add(e.row)}}},[t._v("增加")]),a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){t.reduce(e.row)}}},[t._v("减少")])],1)]}}])})],1),a("div",{staticClass:"checkOut"},[a("span",[t._v("数量："),a("b",[t._v(t._s(t.getCount))])]),a("span",[t._v("总价："),a("b",[t._v("￥"+t._s(t.getAllPrice))])])]),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"success"},on:{click:t.checkOut}},[t._v("结账")]),a("el-button",{attrs:{type:"primary"}},[t._v("挂单")]),a("el-button",{attrs:{type:"danger"},on:{click:t.deleteList}},[t._v("删除")])],1)],1),a("el-tab-pane",{attrs:{label:"挂单",name:"second"}},[t._v("挂单")]),a("el-tab-pane",{attrs:{label:"外卖",name:"third"}},[t._v("外卖")])],1),a("el-dialog",{attrs:{title:"结账（单位：元）",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"应付金额","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.allPrice,callback:function(e){t.allPrice=e},expression:"allPrice"}})],1),a("el-form-item",{attrs:{label:"实际支付","label-width":t.formLabelWidth,prop:"pay"}},[a("el-input",{attrs:{autocomplete:"off",autofocus:"true"},model:{value:t.form.pay,callback:function(e){t.$set(t.form,"pay",e)},expression:"form.pay"}})],1),a("el-form-item",{attrs:{label:"找零","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.getChange,callback:function(e){t.getChange=e},expression:"getChange"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmCheck}},[t._v("确 定")])],1)],1)],1),a("el-col",{attrs:{span:t.goodsList}},[a("div",{staticClass:"hotSale"},[a("div",{staticClass:"title"},[t._v("热卖商品")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading1,expression:"loading1"}],staticClass:"hotList"},[a("ul",t._l(t.hotGoods,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("span",[t._v(t._s(e.goodsName))]),a("span",{staticClass:"o-price"},[t._v("￥"+t._s(e.price))])])}))])]),a("div",{staticClass:"goodType"},[a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType1,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("img",{staticClass:"foodImg",attrs:{src:"http://p0.meituan.net/210.0/wmproduct/29ab89aeb0d7c19d649dbc55e70e56fd170289.jpg",alt:""}}),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"小食"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType2,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("img",{staticClass:"foodImg",attrs:{src:"http://p0.meituan.net/210.0/wmproduct/9e1e7bed06c213742038c556087cee3c270995.jpg",alt:""}}),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"饮料"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType3,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("img",{staticClass:"foodImg",attrs:{src:"http://p0.meituan.net/210.0/wmproduct/ed5409c9bbb9305e9403393751d993d168667.jpg",alt:""}}),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))]),a("el-tab-pane",{attrs:{label:"套餐"}},[a("ul",{staticClass:"cookList"},t._l(t.goodsType4,function(e,o){return a("li",{key:o,on:{click:function(a){t.addOrderList(e)}}},[a("img",{staticClass:"foodImg",attrs:{src:"http://p1.meituan.net/210.0/wmproduct/92b0ac26382f1b42f6bdbb6caa4ed6a8217452.jpg",alt:""}}),a("div",[a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price))])])])}))])],1)],1)])],1)],1)])},y=[],_=(a("c5f6"),a("7f43")),C=a.n(_),w={name:"Pos",data:function(){var t=function(t,e,a){var o=this;if(!e)return a(new Error("支付金额不能为空！"));setTimeout(function(){Number(e)?e<o.allPrice?a(new Error("支付金额不足")):a():a(new Error("请输入数字"))},1e3)};return{payList:6,goodsList:18,activeName:"first",tableData:[],tableHeight:"",hotGoods:[],goodsType1:[],goodsType2:[],goodsType3:[],goodsType4:[],dialogFormVisible:!1,allPrice:"",change:"",formLabelWidth:"120px",form:{pay:"",delivery:!1,type:[],resource:"",desc:""},rules:{pay:[{validator:t,trigger:"blur"}]},loading1:!0,loading2:!0}},computed:{getAllPrice:function(){for(var t=0,e=0,a=this.tableData.length;e<a;e++)t+=this.tableData[e].count*this.tableData[e].price;return this.allPrice=t,t},getCount:function(){for(var t=0,e=0,a=this.tableData.length;e<a;e++)t+=this.tableData[e].count;return t},getChange:function(){return this.form.pay&&this.form.pay>=this.allPrice?this.change=this.form.pay-this.allPrice:this.form.pay&&this.form.pay<this.allPrice?this.change="支付金额不足！":this.change="",this.change}},created:function(){var t=this;C.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods").then(function(e){200===e.status&&(t.hotGoods=e.data,t.loading1=!1)}),C.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods").then(function(e){200===e.status&&(t.goodsType1=e.data[0],t.goodsType2=e.data[1],t.goodsType3=e.data[2],t.goodsType4=e.data[3],t.loading2=!1)})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px";var e=document.body.clientWidth;e<760&&(this.payList=12,this.goodsList=12);var a=document.getElementsByClassName("el-tabs__content")[0],o=document.getElementsByClassName("el-tabs__nav-scroll")[0],n=document.getElementsByClassName("ol-tableHeight")[0],i=document.getElementsByClassName("checkOut")[0],s=document.getElementsByClassName("btns")[0];a.style.height=t-o.clientHeight+"px",n.style.height=t-o.clientHeight-i.clientHeight-s.clientHeight-80-40+"px";document.getElementsByClassName("hotSale")[0],document.getElementsByClassName("el-tabs__content")[1]},methods:{handleClick:function(t,e){},add:function(t){t.count++},reduce:function(t){if(t.count--,0===t.count)for(var e=0,a=this.tableData.length;e<a;e++)t.goodsId===this.tableData[e].goodsId&&this.tableData.splice(e,1)},addOrderList:function(t){for(var e=!1,a=0,o=this.tableData.length;a<o;a++)this.tableData[a].goodsId==t.goodsId&&(e=!0);if(e){var n=this.tableData.filter(function(e){return e.goodsId==t.goodsId});n[0].count++}else{var i={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(i)}},deleteList:function(){var t=this;this.$confirm("确定删除该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableData=[],t.$message({type:"warning ",message:"已删除!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},checkOut:function(){this.dialogFormVisible=!0},confirmCheck:function(){""!==this.form.pay&&"支付金额不足！"!==this.change&&(this.dialogFormVisible=!1,this.$message({message:"结账成功",type:"success",duration:"1000"}),this.tableData=[],this.form.pay="")}}},k=w,N=(a("1928"),Object(d["a"])(k,v,y,!1,null,"7a6c5272",null));N.options.__file="Pos.vue";var P=N.exports;o["default"].use(h["a"]);var L=new h["a"]({mode:"history",base:"/pos/",routes:[{path:"/",name:"pos",component:P},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),x=a("2f62");o["default"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}}),T=a("beff"),j=a.n(T);a("f513");o["default"].config.productionTip=!1,o["default"].use(j.a),new o["default"]({router:L,store:O,render:function(t){return t(g)}}).$mount("#app")},"7c55":function(t,e,a){"use strict";var o=a("d3dd"),n=a.n(o);n.a},d0ea:function(t,e,a){},d3dd:function(t,e,a){}});
//# sourceMappingURL=app.42731a69.js.map