(function(t){function a(a){for(var o,i,r=a[0],c=a[1],l=a[2],u=0,p=[];u<r.length;u++)i=r[u],s[i]&&p.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(a);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],o=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(o=!1)}o&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var o={},s={app:0},n=[];function i(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)i.d(e,o,function(a){return t[a]}.bind(null,o));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var f=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"12f7":function(t,a,e){},"15de":function(t,a,e){},"2af8":function(t,a,e){"use strict";var o=e("6773"),s=e.n(o);s.a},"3b93":function(t,a,e){},"547f":function(t,a,e){t.exports=e.p+"img/new.85ac5fba.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e415");var o=e("2b5e"),s=(e("93ac"),e("bb33")),n=(e("19de"),e("234f")),i=(e("f908"),e("b528")),r=(e("be39"),e("efa0")),c=(e("f06a"),e("20fb")),l=(e("9cb7"),e("66fd")),f=(e("5852"),e("d961")),u=(e("4b0a"),e("2bb1")),p=(e("66cf"),e("343b")),d=(e("5246"),e("6b41")),v=(e("e7e5"),e("d399")),h=(e("be7f"),e("565f")),m=(e("2994"),e("2bdd")),g=(e("b76c"),e("ac3c")),_=(e("e324"),e("453b")),b=(e("e17f"),e("2241")),C=(e("537a"),e("ac28")),w=(e("a52c"),e("2ed4")),y=(e("3c32"),e("417e")),k=(e("a909"),e("3acc")),x=(e("afd4"),e("ca19")),I=(e("66b9"),e("b650")),j=(e("4d48"),e("d1e1")),N=(e("81e6"),e("9ffb")),S=(e("c3a6"),e("ad06")),$=(e("7844"),e("5596")),z=(e("77f8"),e("dc0f")),O=(e("1f87"),e("510b")),E=(e("cadf"),e("551c"),e("097d"),e("2b0e")),P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},D=[],G=(e("7c55"),e("2877")),L={},T=Object(G["a"])(L,P,D,!1,null,null,null);T.options.__file="App.vue";var B=T.exports,q=e("8c4f"),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"shoppingMail"},[e("div",{staticClass:"search-bar"},[e("van-row",[e("van-col",{attrs:{span:"3"}},[e("van-icon",{attrs:{name:"location"}})],1),e("van-col",{attrs:{span:"17"}},[e("input",{staticClass:"search-input",attrs:{type:"text"}})]),e("van-col",{attrs:{span:"4"}},[e("van-button",{attrs:{size:"mini",type:"default"}},[t._v("搜索")])],1)],1)],1),e("div",{staticClass:"swiper-area"},[e("van-swipe",{attrs:{autoplay:3e3}},t._l(t.bannerPicArray,function(t,a){return e("van-swipe-item",{key:a},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{width:"100%/"}})])}))],1),e("div",{staticClass:"type-bar"},t._l(t.category,function(a,o){return e("div",{key:o},[e("div",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"item.image"}],attrs:{src:"",alt:"",width:"90%/"}}),e("span",[t._v(t._s(a.mallCategoryName))])])])})),e("div",{staticClass:"ads"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.adBanner.PICTURE_ADDRESS,expression:"adBanner.PICTURE_ADDRESS"}],attrs:{width:"100%",alt:""}})]),e("div",{staticClass:"recommend-area"},[t._m(0),e("div",{staticClass:"recommend-body"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.recommendGoods,function(a,o){return e("swiper-slide",{key:o},[e("div",{staticClass:"goods-rd",on:{click:function(e){t.goGoodsPage(a)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"slide.image"}],attrs:{width:"40%"}}),e("span",[t._v("￥"+t._s(t._f("moneyFilter")(a.price)))]),e("span",[t._v("￥"+t._s(t._f("moneyFilter")(a.mallPrice)))])])])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)]),e("div",{staticClass:"floor-area"},[e("floor",{attrs:{floorData:t.floor1,floorName:t.floorName.floor1,floorNumber:1}}),e("floor",{attrs:{floorData:t.floor2,floorName:t.floorName.floor2,floorNumber:2}}),e("floor",{attrs:{floorData:t.floor3,floorName:t.floorName.floor3,floorNumber:3}})],1),e("div",{staticClass:"hotGoods-area"},[e("div",{staticClass:"hot-title"},[t._v("热卖商品")]),e("div",{staticClass:"hot-goods"},[e("van-list",[e("van-row",t._l(t.hotGoods,function(a,o){return e("van-col",{key:o,attrs:{span:"12"}},[e("div",{staticClass:"goodsInfo",on:{click:function(e){t.goGoodsPage(a)}}},[e("div",{staticClass:"goods-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.image,expression:"item.image"}],attrs:{width:"90%"}})]),e("div",{staticClass:"goods-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"goods-price"},[e("span",[t._v("￥")]),t._v(t._s(t._f("moneyFilter")(a.price)))])])])}))],1)],1)])])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"recommend-title"},[e("span",[t._v("商品推荐")])])}],F=e("bc3a"),J=e.n(F),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"floor-area"},[e("div",{staticClass:"floor-title"},[e("span",[t._v(t._s(t.floorNumber)+"F")]),e("span",[t._v(t._s(t.floorName))])]),e("div",{staticClass:"floor-goods"},[e("div",{staticClass:"floor-anormal"},[e("div",{staticClass:"floor-left"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.floorData0.image,expression:"floorData0.image"}],attrs:{src:"",width:"100%",alt:""}})]),e("div",{staticClass:"floor-right"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.floorData1.image,expression:"floorData1.image"}],attrs:{src:"",width:"100%",alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.floorData2.image,expression:"floorData2.image"}],attrs:{src:"",width:"100%",alt:""}})])]),e("div",{staticClass:"floor-normal"},t._l(t.floorData.slice(3),function(t,a){return e("div",{key:a},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],attrs:{width:"100%"}})])}))])])},H=[],U={nome:"floor",props:["floorData","floorName","floorNumber"],data:function(){return{floorData0:{},floorData1:{},floorData2:{}}},watch:{floorData:function(t){this.floorData0=this.floorData[0],this.floorData1=this.floorData[1],this.floorData2=this.floorData[2]}}},Y=U,V=(e("2af8"),Object(G["a"])(Y,R,H,!1,null,"3c1ef272",null));V.options.__file="Floor.vue";var W=V.exports;function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.toFixed(2)}var Q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goodsInfo"},[e("div",{staticClass:"goods-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsImage,expression:"goodsImage"}],attrs:{width:"90%"}})]),e("span",{staticClass:"goods-name"},[t._v(t._s(t.goodsName))]),e("span",{staticClass:"goods-price"},[t._v(t._s(t._f("moneyFilter")(t.goodsPrice)))])])},X=[],Z={props:["goodsImage, goodsName, goodsPrice"],filters:{moneyFilter:function(t){return K(t)}}},tt=Z,at=(e("e9a3"),Object(G["a"])(tt,Q,X,!1,null,"0aed3264",null));at.options.__file="goodsInfo.vue";var et=at.exports,ot={name:"shoppingMail",components:{floor:W,goodsInfo:et},filters:{moneyFilter:function(t){return K(t)}},data:function(){return{bannerPicArray:"",category:"",adBanner:"",recommendGoods:[],swiperOption:{slidesPerView:"3"},floor1:[],floor2:[],floor3:[],floorName:{},hotGoods:{},loading:!0,finished:!0,list:[]}},created:function(){var t=this;J.a.get("https://www.easy-mock.com/mock/5bc87da6192f8e4aa5df0453/shoppingMail").then(function(a){200===a.status&&(t.category=a.data.data.category,t.adBanner=a.data.data.advertesPicture,t.bannerPicArray=a.data.data.slides,t.recommendGoods=a.data.data.recommend,t.floor1=a.data.data.floor1,t.floor2=a.data.data.floor2,t.floor3=a.data.data.floor3,t.floorName=a.data.data.floorName,t.hotGoods=a.data.data.hotGoods)}).catch(function(t){console.log(t)})},methods:{onLoad:function(){},goGoodsPage:function(t){this.$router.push({name:"Goods",query:{goodsInfo:t}})}}},st=ot,nt=(e("f737"),Object(G["a"])(st,A,M,!1,null,"5a49707d",null));nt.options.__file="ShoppingMail.vue";var it=nt.exports,rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"用户登录","left-text":"返回","left-arrow":""},on:{"click-left":t.goBack}}),e("div",{staticClass:"login-panel"},[e("van-field",{attrs:{icon:"clear",placeholder:"请输入用户名"},on:{"click-icon":function(a){t.username=""}},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("van-field",{attrs:{type:"password",icon:"clear",placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticClass:"login-button"},[e("van-button",{attrs:{type:"primary",size:"large"}},[t._v("登录")])],1),t._m(0)],1)],1)},ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"otherLoginWay"},[e("span",[e("a",{attrs:{href:"/register"}},[t._v("前往注册")])]),e("span",[t._v("使用第三方登录")]),e("i",{staticClass:"iconfont icon-weixin"}),e("i",{staticClass:"iconfont icon-z-alipay"}),e("i",{staticClass:"iconfont icon-qq"})])}],lt={data:function(){return{username:"",password:""}},methods:{goBack:function(){this.$router.go(-1)}}},ft=lt,ut=(e("6908"),Object(G["a"])(ft,rt,ct,!1,null,"201b3350",null));ut.options.__file="Login.vue";var pt=ut.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{title:"用户注册","left-text":"返回","left-arrow":""},on:{"click-left":t.goBack}}),e("div",{staticClass:"register-panel"},[e("van-field",{attrs:{label:"用户名",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(a){t.username=""}},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("van-field",{attrs:{type:"password",label:"密码",icon:"clear",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticClass:"register-button"},[e("van-button",{attrs:{type:"primary",size:"large"}},[t._v("马上注册")])],1)],1)],1)},vt=[],ht={data:function(){return{username:"",password:""}},methods:{goBack:function(){this.$router.go(-1)}}},mt=ht,gt=(e("8048"),Object(G["a"])(mt,dt,vt,!1,null,"4d9fa9dd",null));gt.options.__file="Register.vue";var _t=gt.exports,bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goods"},[e("van-nav-bar",{attrs:{"left-arrow":""},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"header"},[e("div",{staticClass:"topImg"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsInfo.image,expression:"goodsInfo.image"}],attrs:{width:"100%",alt:""}})]),e("div",{staticClass:"goods-price"},[e("span",[t._v("￥")]),t._v(t._s(t.goodsInfo.price))]),e("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsInfo.name))]),t._m(0)]),e("div",{staticClass:"extra-info"},[e("div",[e("span",[t._v("服务")]),e("span",[t._v("7天无理由·24小时发货")]),e("van-icon",{attrs:{name:"arrow"}})],1),e("div",[e("span",[t._v("规格")]),e("span",[t._v("选择颜色分类")]),e("van-icon",{attrs:{name:"arrow"}})],1),e("div",[e("span",[t._v("参数")]),e("span",[t._v("平牌 型号...")]),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("div",[e("van-goods-action",[e("van-goods-action-mini-btn",{attrs:{icon:"chat",text:"客服"}}),e("van-goods-action-mini-btn",{attrs:{icon:"cart",text:"购物车",info:"5"},on:{click:t.toCart}}),e("van-goods-action-big-btn",{attrs:{text:"加入购物车"},on:{click:t.addGoodsToCart}}),e("van-goods-action-big-btn",{attrs:{text:"立即购买",primary:""}})],1)],1)],1)},Ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"store-info"},[e("span",[t._v("快递：免运费")]),e("span",[t._v("月销5")]),e("span",[t._v("上海")])])}],wt=(e("7f7f"),e("7514"),{data:function(){return{goodsId:"",goodsInfo:{}}},created:function(){this.goodsInfo=this.$route.query.goodsInfo.goodsId?this.$route.query.goodsInfo:JSON.parse(localStorage.cartInfo)[JSON.parse(localStorage.cartInfo).length-1]},methods:{toCart:function(){this.$router.push({name:"ShoppingCar"})},addGoodsToCart:function(){var t=this;Object(v["a"])("加购");var a=localStorage.cartInfo?JSON.parse(localStorage.cartInfo):[],e=a.find(function(a){return a.goodsId===t.goodsInfo.goodsId});if(e)v["a"].success("已有此商品");else{var o={goodsId:this.goodsInfo.goodsId,goodsName:this.goodsInfo.name,price:this.goodsInfo.price,image:this.goodsInfo.image,count:1};a.push(o),localStorage.cartInfo=JSON.stringify(a),v["a"].success("添加成功")}},onClickLeft:function(){this.$router.go(-1)}}}),yt=wt,kt=(e("e298"),Object(G["a"])(yt,bt,Ct,!1,null,"017cf62e",null));kt.options.__file="Goods.vue";var xt=kt.exports,It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":""},on:{search:t.onSearch},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._m(0)],1)},jt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ct-container"},[e("div",{staticClass:"ct-left"},[e("ul",[e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("有品推荐")])]),e("li",{staticClass:"active"},[e("a",{attrs:{href:"javascript:;"}},[t._v("家用电器")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("智能家庭")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("餐具厨房")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("服饰装配")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("鞋靴箱包")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("手机数码")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("运动健康")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("出行户外")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("洗护美妆")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("日杂文创")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("母婴亲子")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("饮食酒水")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("数码配件")])]),e("li",{},[e("a",{attrs:{href:"javascript:;"}},[t._v("品牌")])])])]),e("div",{staticClass:"ct-right"},[e("div",{staticClass:"ct-banner"},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_e0fd16ba8675b53dc044d41534a1c22c.jpeg&w=786&h=395&t=webp",width:"100%",alt:"",srcset:""}})]),e("div",{staticClass:"ct-products"},[e("ul",[e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])]),e("li",[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"https://shop.io.mi-img.com/app/shop/img?id=shop_840f9feb5a539092a0401041960056f8.jpeg&w=480&h=480&t=webp",alt:""}}),e("span",[t._v("生活电器")])])])])])])])}],Nt={data:function(){return{value:""}},mounted:function(){var t=document.body.clientHeight,a=document.querySelector(".ct-container");a.style.height=t-44-50+"px";var e=document.querySelector(".ct-left"),o=e.offsetHeight,s=e.querySelector("ul:first-of-type"),n=s.offsetHeight,i=o-n,r=0,c=i-50,l=50,f=0,u=0,p=0,d=0;s.addEventListener("touchstart",function(t){console.log(t),f=t.targetTouches[0].clientY,console.log(f)}),s.addEventListener("touchmove",function(t){u=t.targetTouches[0].clientY,p=u-f,s.style.transition="none",d+p<l&&d+p>c&&(s.style.top=d+p+"px"),console.log(s.style.top)}),s.addEventListener("touchend",function(t){d+p>r?(s.style.transition="top .5s",s.style.top=r+"px",d=r):d+p<i?(s.style.transition="top .5s",s.style.top=i+"px",d=i):d+=p})},methods:{onNavClick:function(t){this.mainActiveIndex=t},onItemClick:function(t){this.activeId=t.id},onSearch:function(){}}},St=Nt,$t=(e("dfd1"),Object(G["a"])(St,It,jt,!1,null,"56b822f8",null));$t.options.__file="GoodsSort.vue";var zt=$t.exports,Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"person"},[e("div",{staticClass:"header"},[e("van-row",[e("van-col",{attrs:{span:"4"}},[e("div",{staticClass:"header-icon"})]),e("van-col",{attrs:{span:"16"}},[e("div",{staticClass:"user-name"},[t._v(t._s(t.userName))]),e("div",{staticClass:"win-steps"},[e("van-steps",{staticClass:"stepsStyle",attrs:{active:t.signNum}},[e("van-step",[t._v("1")]),e("van-step",[t._v("2")]),e("van-step",[t._v("3")]),e("van-step",[e("van-icon",{staticClass:"icon-gift",attrs:{name:"point-gift"}})],1)],1)],1)]),e("van-col",{attrs:{span:"4"}},[e("van-icon",{staticClass:"message",attrs:{name:"chat"}}),e("div",{staticClass:"sign"},[e("van-button",{attrs:{type:"default",size:"small",round:""},on:{click:t.signBtn}},[t._v("签到")])],1)],1)],1)],1),t._m(0),e("div",{staticClass:"ads"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.adBanner,expression:"adBanner"}],attrs:{width:"100%",alt:""}})]),t._m(1)])},Et=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"indent"},[e("div",{staticClass:"my-indent"},[e("span",[t._v("我的订单")]),e("span",[t._v("全部订单>")])]),e("div",{staticClass:"indent-type"},[e("div",[e("i",{staticClass:"iconfont icon-pay"}),e("span",[t._v("待付款")])]),e("div",[e("i",{staticClass:"iconfont icon-deliver"}),e("span",[t._v("待收货")])]),e("div",[e("i",{staticClass:"iconfont icon-comment"}),e("span",[t._v("待评价")])]),e("div",[e("i",{staticClass:"iconfont icon-shouhoutuikuan"}),e("span",[t._v("退款/售后")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"extension"},[e("div",[e("i",{staticClass:"iconfont icon-pintuangou"}),e("span",[t._v("拼团订单")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-shoucang"}),e("span",[t._v("收藏")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-youhuiquan"}),e("span",[t._v("优惠券")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-yaoqing"}),e("span",[t._v("新人邀请")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-zichan"}),e("span",[t._v("我的资产")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-dizhi"}),e("span",[t._v("地址管理")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-fuwuerji"}),e("span",[t._v("服务中心")]),e("span")]),e("div",[e("i",{staticClass:"iconfont icon-bangzhu"}),e("span",[t._v("帮助中心")]),e("span")])])}],Pt={data:function(){return{userName:"未登录",signNum:0,adBanner:e("547f")}},methods:{signBtn:function(){this.signNum<3&&this.signNum++}}},Dt=Pt,Gt=(e("e3a1"),Object(G["a"])(Dt,Ot,Et,!1,null,"6ff4f516",null));Gt.options.__file="PersonCenter.vue";var Lt=Gt.exports,Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cell"},[e("van-nav-bar",{attrs:{title:"优惠券","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),e("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(a){t.showList=!0}}}),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(a){t.showList=a},expression:"showList"}},[e("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1)},Bt=[],qt={available:1,discount:0,denominations:150,originCondition:0,reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3},At={data:function(){return{chosenCoupon:-1,coupons:[qt],disabledCoupons:[qt]}},methods:{onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(t){this.coupons.push(qt)},onClickLeft:function(){this.$router.go(-1)}}},Mt=At,Ft=(e("7bb6"),Object(G["a"])(Mt,Tt,Bt,!1,null,"4920a91a",null));Ft.options.__file="CouponCell.vue";var Jt=Ft.exports,Rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"shoppingCar"},[e("van-nav-bar",{attrs:{title:"购物车","right-text":"编辑","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.editOrder}}),e("div",{staticClass:"goods-order"},t._l(t.cartInfo,function(a,o){return e("van-row",{key:o},[e("van-col",{attrs:{span:"2"}},[e("van-checkbox",{model:{value:a.checked,callback:function(e){t.$set(a,"checked",e)},expression:"item.checked"}})],1),e("van-col",{attrs:{span:"22"}},[e("van-card",{attrs:{num:a.count,tag:"热卖",price:a.price,title:a.goodsName,thumb:a.image,"origin-price":a.price}},[e("div",{attrs:{slot:"footer"},slot:"footer"},[e("van-stepper",{attrs:{min:1},on:{change:function(e){t.changeCount(a.count)}},model:{value:a.count,callback:function(e){t.$set(a,"count",e)},expression:"item.count"}})],1)])],1)],1)})),e("van-submit-bar",{attrs:{price:t.allPrice,"button-text":"提交订单"},on:{submit:t.onSubmit}},[e("van-checkbox",{on:{change:function(a){t.allChecked()}},model:{value:t.isChecked,callback:function(a){t.isChecked=a},expression:"isChecked"}},[t._v("全选")])],1)],1)},Ht=[],Ut={data:function(){return{checked:!0,imageURL:"http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg",cartInfo:[],isEmpty:!1,isChecked:!1}},computed:{allPrice:function(){for(var t=0,a=0,e=this.cartInfo.length;a<e;a++)t+=this.cartInfo[a].price*this.cartInfo[a].count;return t*=100,t}},created:function(){this.getCarTinfo()},methods:{onClickLeft:function(){this.$router.go(-1)},editOrder:function(){var t=this;b["a"].confirm({title:"删除操作",message:"确认删除所选项"}).then(function(){console.log(localStorage.cartInfo);for(var a=t.cartInfo.length-1;a>=0;a--)!0===t.cartInfo[a].checked&&(t.cartInfo.splice(a,1),localStorage.cartInfo=JSON.stringify(t.cartInfo))}).catch(function(){})},onSubmit:function(){},allChecked:function(){console.log(this.isChecked);for(var t=0,a=this.cartInfo.length;t<a;t++)this.cartInfo[t].checked=!this.isChecked,console.log(this.cartInfo[t].checked)},getCarTinfo:function(){localStorage.cartInfo&&(this.cartInfo=JSON.parse(localStorage.cartInfo)),this.isEmpty=this.cartInfo.length>0?"true":"false"},changeCount:function(t){console.log(t)}}},Yt=Ut,Vt=(e("7bf7"),Object(G["a"])(Yt,Rt,Ht,!1,null,"33df71ef",null));Vt.options.__file="ShoppingCar.vue";var Wt=Vt.exports,Kt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"main"},[e("router-view")],1),e("van-tabbar",{on:{change:function(a){t.changeTabbar(t.active)}},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"shop"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{icon:"records"}},[t._v("分类")]),e("van-tabbar-item",{attrs:{icon:"cart"}},[t._v("购物车")]),e("van-tabbar-item",{attrs:{icon:"contact"}},[t._v("我的")])],1)],1)},Qt=[],Xt={data:function(){return{active:0,nowPath:""}},created:function(){this.changeTabbarActive()},methods:{changeTabbar:function(t){switch(t){case 0:this.$router.push({name:"ShoppingMail"});break;case 1:this.$router.push({name:"GoodsSort"});break;case 2:this.$router.push({name:"ShoppingCar"});break;case 3:this.$router.push({name:"PersonCenter"});break}},changeTabbarActive:function(){}}},Zt=Xt,ta=(e("7c10"),Object(G["a"])(Zt,Kt,Qt,!1,null,"21c00c7f",null));ta.options.__file="Main.vue";var aa=ta.exports;E["a"].use(q["a"]);var ea=new q["a"]({mode:"hash",base:"/",routes:[{path:"/login",name:"Login",component:pt},{path:"/register",name:"Register",component:_t},{path:"/main",component:aa,children:[{path:"/",name:"ShoppingMail",component:it},{path:"goodsSort",name:"GoodsSort",component:zt},{path:"personCenter",name:"PersonCenter",component:Lt},{path:"shoppingCar",name:"ShoppingCar",component:Wt}]},{path:"/goods",name:"Goods",component:xt},{path:"/couponCell",name:"CouponCell",component:Jt}]}),oa=e("2f62");E["a"].use(oa["a"]);var sa=new oa["a"].Store({state:{},mutations:{},actions:{}}),na=e("7212"),ia=e.n(na);e("dfa4");E["a"].use(ia.a),E["a"].use(b["a"]).use(C["a"]).use(w["a"]).use(y["a"]).use(k["a"]).use(x["a"]).use(I["a"]).use(j["a"]).use(N["a"]).use(S["a"]).use($["a"]).use(z["a"]).use(O["a"]),E["a"].use(o["a"]).use(s["a"]).use(n["a"]).use(i["a"]).use(r["a"]).use(c["a"]).use(l["a"]).use(f["a"]).use(u["a"]).use(p["a"]).use(d["a"]).use(v["a"]).use(h["a"]).use(m["a"]).use(g["a"]).use(_["a"]),E["a"].config.productionTip=!1,new E["a"]({router:ea,store:sa,render:function(t){return t(B)}}).$mount("#app")},6773:function(t,a,e){},6908:function(t,a,e){"use strict";var o=e("fb1f"),s=e.n(o);s.a},"7bb6":function(t,a,e){"use strict";var o=e("fa97"),s=e.n(o);s.a},"7bf7":function(t,a,e){"use strict";var o=e("3b93"),s=e.n(o);s.a},"7c10":function(t,a,e){"use strict";var o=e("15de"),s=e.n(o);s.a},"7c55":function(t,a,e){"use strict";var o=e("d3dd"),s=e.n(o);s.a},8048:function(t,a,e){"use strict";var o=e("f3df"),s=e.n(o);s.a},c095:function(t,a,e){},c3c9:function(t,a,e){},d3dd:function(t,a,e){},daf1:function(t,a,e){},dfd1:function(t,a,e){"use strict";var o=e("daf1"),s=e.n(o);s.a},e298:function(t,a,e){"use strict";var o=e("c3c9"),s=e.n(o);s.a},e3a1:function(t,a,e){"use strict";var o=e("12f7"),s=e.n(o);s.a},e721:function(t,a,e){},e9a3:function(t,a,e){"use strict";var o=e("e721"),s=e.n(o);s.a},f3df:function(t,a,e){},f737:function(t,a,e){"use strict";var o=e("c095"),s=e.n(o);s.a},fa97:function(t,a,e){},fb1f:function(t,a,e){}});
//# sourceMappingURL=app.6a9c5492.js.map