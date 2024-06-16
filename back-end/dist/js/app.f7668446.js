(function(){"use strict";var t={8276:function(t,r,e){var n=e(5130),o=e(6768);const a={class:"page-wrap"};function s(t,r,e,n,s,u){const c=(0,o.g2)("NavBar"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,{user:s.user},null,8,["user"]),(0,o.Lk)("div",a,[(0,o.bF)(i,{user:s.user},null,8,["user"])])],64)}var u=e(5955);const c={class:"nav-bar"},i={class:"logo-wrap"},d=["src"],l={class:"cart-link"},p=(0,o.Lk)("button",null,"Carrito",-1);function m(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(u,{to:"/products",class:"products-link"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,[(0,o.Lk)("img",{src:a.logo,style:{height:"120px","border-radius":"40%"}},null,8,d)])])),_:1}),(0,o.Lk)("div",l,[e.user?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign out")):(0,o.Q3)("",!0),(0,o.bF)(u,{to:"/cart"},{default:(0,o.k6)((()=>[p])),_:1})])])}var g=e.p+"img/logosil.b92dd846.jpg",f={name:"NavBar",props:["user"],data(){return{logo:g}},methods:{signOut(){const t=(0,u.xI)();(0,u.CI)(t)}}},v=e(1241);const h=(0,v.A)(f,[["render",m]]);var k=h,b={name:"App",components:{NavBar:k},data(){return{user:null}},created(){const t=(0,u.xI)();(0,u.hg)(t,(t=>{this.user=t}))}};const C=(0,v.A)(b,[["render",s]]);var I=C,y=e(1387);const w=(0,o.Lk)("h1",null," Shopping cart",-1),L={key:0},F=(0,o.Lk)("button",{class:"checkout-button"},"Checkout",-1),A={key:1};function E(t,r,e,n,a,s){const u=(0,o.g2)("ShoppingCartList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[w,a.cartItems.length>0?((0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(u,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),F])):(0,o.Q3)("",!0),0===a.cartItems.length?((0,o.uX)(),(0,o.CE)("div",A," You have no items in your cart ")):(0,o.Q3)("",!0)],64)}var S=e(4373),P=e(4232);const X=["src"],O={class:"details-wrap"},_=["onClick"];function j(t,r,e,n,a,s){return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.products,(r=>((0,o.uX)(),(0,o.CE)("div",{class:"product-container",key:r.id},[(0,o.Lk)("img",{src:r.imageUrl,class:"product-image"},null,8,X),(0,o.Lk)("div",O,[(0,o.Lk)("h3",null,(0,P.v_)(r.name),1),(0,o.Lk)("p",null,(0,P.v_)(r.price),1)]),(0,o.Lk)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Quitar",8,_)])))),128)}var $={name:"ShoppingCartList",props:["products"]};const x=(0,v.A)($,[["render",j]]);var Q=x,K={name:"ShoppingCartPage",prop:["user"],components:{ShoppingCartList:Q},data(){return{cartItems:[]}},watch:{async user(t){if(t){const r=await S.A.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async removeFromCart(t){const r=await S.A.delete(`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await S.A.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const N=(0,v.A)(K,[["render",E]]);var T=N;const M=(0,o.Lk)("h1",null," Productos disponibles",-1);function B(t,r,e,n,a,s){const u=(0,o.g2)("ProductsList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[M,(0,o.bF)(u,{products:a.products},null,8,["products"])],64)}const D={class:"grid-wrap"},U=["src"],V={class:"product-name"},W={class:"product-price"},Y=(0,o.Lk)("button",null," Ver detalles ",-1);function Z(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",D,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.products,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"product-item",key:t.id},[(0,o.Lk)("img",{src:t.imageUrl},null,8,U),(0,o.Lk)("h3",V,(0,P.v_)(t.name),1),(0,o.Lk)("p",W,(0,P.v_)(t.price),1),(0,o.bF)(u,{to:"/products/"+t.id},{default:(0,o.k6)((()=>[Y])),_:2},1032,["to"])])))),128))])}var z={name:"ProductsList",props:["products"]};const R=(0,v.A)(z,[["render",Z]]);var q=R,G={name:"ProductsPage",components:{ProductsList:q},data(){return{products:[]}},async created(){const t=await S.A.get("/api/products"),r=t.data;this.products=r}};const H=(0,v.A)(G,[["render",B]]);var J=H;const tt={key:0},rt={class:"img-wrap"},et=["src"],nt={class:"product-details"},ot={key:1,class:"grey-button"},at={key:1};function st(t,r,e,n,a,s){const u=(0,o.g2)("NotFoundPage");return(0,o.uX)(),(0,o.CE)(o.FK,null,[a.product?((0,o.uX)(),(0,o.CE)("div",tt,[(0,o.Lk)("div",rt,[(0,o.Lk)("img",{src:a.product.imageUrl},null,8,et)]),(0,o.Lk)("div",nt,[(0,o.Lk)("h1",null,(0,P.v_)(a.product.name),1),(0,o.Lk)("h3",null,(0,P.v_)(a.product.price),1),t.user&&!s.itemsIsInCart?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"}," Add to cart")):(0,o.Q3)("",!0),t.user&&s.itemsIsInCart?((0,o.uX)(),(0,o.CE)("button",ot,"Ya presente en el carrito")):(0,o.Q3)("",!0),t.user?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Loguearse para añadir al carrito"))])])):(0,o.Q3)("",!0),a.product?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",at,[(0,o.bF)(u)]))],64)}function ut(t,r,e,n,a,s){return(0,o.uX)(),(0,o.CE)("h1",null,"404: Page Not Found")}var ct={name:"NotFoundPage"};const it=(0,v.A)(ct,[["render",ut]]);var dt=it,lt={name:"ProductDetailsPage",prop:["user"],data(){return{product:{},cartItems:[]}},components:{NotFoundPage:dt},computed:{itemsIsInCart(){return this.cartItems.some((t=>t.id==this.$route.params.productId))}},watch:{async user(t){if(t){const r=await S.A.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async addToCart(){await S.A.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Agregado al carrito")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,u.xI)(),e={url:`https://taller-de-sil.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,u.MN)(r,t,e),alert("Fue enviado un link para loguearse al email provisto"),window.localStorage.setItem("emailForSignIn",t)}},async created(){const t=(0,u.xI)();if((0,u.Pj)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,u.hK)(t,r,window.location.href),alert("Succesfully signed in"),window.localStorage.removeItem("emailForSignIn")}const r=await S.A.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await S.A.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const pt=(0,v.A)(lt,[["render",st]]);var mt=pt,gt=e(6400);const ft={apiKey:"AIzaSyCiZtVDW5jwXeSZimPlTpbvV_ottWyM1w0",authDomain:"vue-project-3be05.firebaseapp.com",projectId:"vue-project-3be05",storageBucket:"vue-project-3be05.appspot.com",messagingSenderId:"831257046333",appId:"1:831257046333:web:3b1c37ebf02a73fae82954"};(0,gt.Wp)(ft),(0,n.Ef)(I).use(y.aE({history:y.LA("/"),routes:[{path:"/cart",component:T},{path:"/products",component:J},{path:"/products/:productId",component:mt},{path:"/:pathMatch(.*)*",component:dt},{path:"/",redirect:"/products"}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(u=!1,a<s&&(s=a));if(u){t.splice(d--,1);var i=o();void 0!==i&&(r=i)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],u=n[1],c=n[2],i=0;if(s.some((function(r){return 0!==t[r]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var d=c(e)}for(r&&r(n);i<s.length;i++)a=s[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(8276)}));n=e.O(n)})();
//# sourceMappingURL=app.f7668446.js.map