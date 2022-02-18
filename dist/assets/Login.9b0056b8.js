import{H as r,u as c,p as u,q as p,y as b,v as e,J as x,K as l,L as a,x as m,w as h,B as _}from"./vendor.0d112d64.js";const f=e("h1",null,"LOGIN",-1),w={class:"flex justify-center items-center mt-20"},g={class:"w-full max-w-xs"},v=["onSubmit"],y={class:"identity-input mb-4"},k=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"}," Email",-1),H=e("span",{class:"text-xs text-red-700",id:"emailHelp"},null,-1),N={class:"password-input mb-6"},V=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"},"Password",-1),j=e("span",{class:"text-xs text-red-700",id:"passwordHelp"},null,-1),B=e("div",{class:"flex items-center justify-between"},[e("a",{class:"inline-block align-baseline py-4 font-bold text-sm text-gray-500 hover:text-black",href:"#"}," Forgot Password? "),e("button",{class:"bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-black rounded focus:shadow-outline"}," Sign In ")],-1),S={class:"flex items-center justify-between"},E=_("Register A New Account"),L={setup(A){const t=r({}),n=c(),i=()=>{console.log(t.value),n.dispatch("login",t.value)};return(C,s)=>{const d=u("router-link");return p(),b("div",null,[f,e("div",w,[e("div",g,[e("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:x(i,["prevent"])},[e("div",y,[k,l(e("input",{id:"identity",class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Email","aria-describedby":"emailHelp","onUpdate:modelValue":s[0]||(s[0]=o=>t.value.email=o)},null,512),[[a,t.value.email]]),H]),e("div",N,[V,l(e("input",{"aria-describedby":"passwordHelp","onUpdate:modelValue":s[1]||(s[1]=o=>t.value.password=o),class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"*******"},null,512),[[a,t.value.password]]),j]),B,e("div",S,[m(d,{to:"/register",class:"inline-block align-baseline py-3 pb-0 font-bold text-sm text-gray-500 hover:text-black"},{default:h(()=>[E]),_:1})])],40,v)])])])}}};export{L as default};
