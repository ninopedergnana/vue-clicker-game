import{D as N,a as T,b as j,M as V,c as F,d as W,e as q,r as z,f as H,g as G,u as L,o as R,h as d,i,j as g,w as l,k as u,l as m,m as p,F as x,n as w,p as h,q as b,t as k,s as E,T as K,v as X,x as Y,y as J,z as Q,A as Z,B as ee,C as te,E as se,G as re}from"./vendor.dfd78a61.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};ne();var M=(e,n)=>{const a=e.__vccOpts||e;for(const[r,s]of n)a[r]=s;return a};const ae=[{name:"Home",to:"/",current:!1},{name:"Feed",to:"/feed",current:!1}],oe=[{name:"Register",to:"/register",current:!1},{name:"Login",to:"/login",current:!1}],ce={components:{Disclosure:N,DisclosureButton:T,DisclosurePanel:j,Menu:V,MenuButton:F,MenuItem:W,MenuItems:q,BellIcon:z,MenuIcon:H,XIcon:G},setup(){const e=L();return R(()=>{e.dispatch("fetchUser")}),{navigation:ae,navigationLoggedOut:oe}}},ie={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},le={class:"relative flex items-center justify-between h-16"},ue={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},de=u("span",{class:"sr-only"},"Open main menu",-1),me={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},pe={class:"flex-shrink-0 flex items-center"},fe=b("App Name"),_e={class:"hidden sm:block sm:ml-6"},ge={key:0,class:"flex space-x-4"},he={key:1,class:"flex space-x-4"},ye={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},ve=u("span",{class:"sr-only"},"Open user menu",-1),be=u("div",{class:"h-8 w-8 bg-black rounded-full"},null,-1),xe={key:0,class:"px-2 pt-2 pb-3 space-y-1"},we={key:1,class:"px-2 pt-2 pb-3 space-y-1"};function ke(e,n,a,r,s,o){const c=d("MenuIcon"),y=d("XIcon"),S=d("DisclosureButton"),v=d("router-link"),O=d("MenuButton"),A=d("MenuItem"),P=d("MenuItems"),D=d("Menu"),U=d("DisclosurePanel"),C=d("Disclosure");return i(),g(C,{as:"nav",class:"bg-transparent"},{default:l(({open:B})=>[u("div",ie,[u("div",le,[u("div",ue,[m(S,{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:l(()=>[de,B?(i(),g(y,{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(i(),g(c,{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),u("div",me,[u("div",pe,[m(v,{class:"font-bold text-xl",to:"/"},{default:l(()=>[fe]),_:1})]),u("div",_e,[e.$store.state.user?(i(),p("div",ge,[(i(!0),p(x,null,w(r.navigation,t=>(i(),g(v,{key:t.name,class:h([t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-md font-medium"]),"aria-current":t.current?"page":void 0,to:t.to},{default:l(()=>[b(k(t.name),1)]),_:2},1032,["class","aria-current","to"]))),128))])):E("",!0),e.$store.state.user?E("",!0):(i(),p("div",he,[(i(!0),p(x,null,w(r.navigationLoggedOut,t=>(i(),g(v,{key:t.name,class:h([t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-md font-medium"]),"aria-current":t.current?"page":void 0,to:t.to},{default:l(()=>[b(k(t.name),1)]),_:2},1032,["class","aria-current","to"]))),128))]))])]),u("div",ye,[m(D,{as:"div",class:"ml-3 relative"},{default:l(()=>[u("div",null,[m(O,{class:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},{default:l(()=>[ve,be]),_:1})]),m(K,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:l(()=>[m(P,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:l(()=>[m(A,null,{default:l(({active:t})=>[u("a",{href:"/",class:h([t?"bg-gray-200":"","block px-4 py-2 text-sm text-gray-700"])},"Your Profile",2)]),_:1}),m(A,null,{default:l(({active:t})=>[u("a",{href:"#",class:h([t?"bg-gray-200":"","block px-4 py-2 text-sm text-gray-700"])},"Settings",2)]),_:1}),m(A,null,{default:l(({active:t})=>[u("a",{href:"#",onClick:n[0]||(n[0]=Pe=>e.$store.dispatch("logout")),class:h([t?"bg-gray-200":"","block px-4 py-2 text-sm text-gray-700"])},"Sign out",2)]),_:1})]),_:1})]),_:1})]),_:1})])])]),m(U,{class:"sm:hidden"},{default:l(()=>[e.$store.state.user?(i(),p("div",xe,[(i(!0),p(x,null,w(r.navigation,t=>(i(),g(v,{key:t.name,class:h([t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":t.current?"page":void 0,to:t.to},{default:l(()=>[b(k(t.name),1)]),_:2},1032,["class","aria-current","to"]))),128))])):E("",!0),e.$store.state.user?E("",!0):(i(),p("div",we,[(i(!0),p(x,null,w(r.navigationLoggedOut,t=>(i(),g(v,{key:t.name,class:h([t.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"]),"aria-current":t.current?"page":void 0,to:t.to},{default:l(()=>[b(k(t.name),1)]),_:2},1032,["class","aria-current","to"]))),128))]))]),_:1})]),_:1})}var Ee=M(ce,[["render",ke]]);const Ie={setup(){const e=L();R(()=>{e.dispatch("fetchUser")})},components:{Navbar:Ee}};function Se(e,n,a,r,s,o){const c=d("Navbar"),y=d("router-view");return i(),p("div",null,[m(c),m(y)])}var Ae=M(Ie,[["render",Se]]);const Le="modulepreload",$={},Re="/",I=function(n,a){return!a||a.length===0?n():Promise.all(a.map(r=>{if(r=`${Re}${r}`,r in $)return;$[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Le,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((y,S)=>{c.addEventListener("load",y),c.addEventListener("error",S)})})).then(()=>n())},Me={apiKey:"AIzaSyCvFCykMGN4-oKerb2E1u7lGVm_ehmgT60",authDomain:"vue-clicker.firebaseapp.com",projectId:"vue-clicker",storageBucket:"vue-clicker.appspot.com",messagingSenderId:"402672298776",appId:"1:402672298776:web:59d4dbc215054de0a30c6d"},$e=X(Me),f=Y($e),_=J({history:Q(),routes:[{path:"/",name:"Home",component:()=>I(()=>import("./Home.25017e90.js"),["assets/Home.25017e90.js","assets/vendor.dfd78a61.js"])},{path:"/register",name:"Register",component:()=>I(()=>import("./Register.b51adbea.js"),["assets/Register.b51adbea.js","assets/vendor.dfd78a61.js"])},{path:"/feed",name:"Feed",component:()=>I(()=>import("./Feed.c711cddf.js"),["assets/Feed.c711cddf.js","assets/vendor.dfd78a61.js"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>I(()=>import("./Login.26304ff2.js"),["assets/Login.26304ff2.js","assets/vendor.dfd78a61.js"])}]});_.beforeEach((e,n,a)=>{if(e.path==="/login"&&f.currentUser){a("/feed");return}if(e.matched.some(r=>r.meta.requiresAuth)&&!f.currentUser){a("/login");return}a()});var Oe=Z({state:{user:null},mutations:{SET_USER(e,n){e.user=n},CLEAR_USER(e){e.user=null}},actions:{async register({commit:e},n){const{firstName:a,surname:r,email:s,password:o}=n;try{await ee(f,s,o)}catch(c){switch(c.code){case"auth/email-already-in-use":alert("Email already in use!");break;case"auth/invalid-email":alert("Invalid Email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password, must be at least 6 symbols long!");default:alert("Provide a valid email and password")}return}e("SET_USER",f.currentUser),_.push("/")},async login({commit:e},n){const{email:a,password:r}=n;try{await te(f,a,r)}catch(s){switch(s.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;default:alert("Provide a valid email and password")}return}e("SET_USER",f.currentUser),_.push("/")},async logout({commit:e}){await se(f),e("CLEAR_USER"),_.push("/login")},fetchUser({commit:e}){f.onAuthStateChanged(async n=>{n===null?e("CLEAR_USER"):(e("SET_USER",n),_.isReady()&&_.currentRoute.value.path==="/login"&&_.push("/"))})}}});re(Ae).use(Oe).use(_).mount("#app");export{M as _,f as a};