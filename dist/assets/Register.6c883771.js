import{H as c,u,K as p,L as m,p as f,q as b,y as x,v as e,N as h,O as n,P as i,x as g,w as _,B as y}from"./vendor.e905661e.js";import{_ as w,a as v}from"./index.f0943217.js";const k={setup(){const r=c({}),t=u();return{register_form:r,register:()=>{t.dispatch("register",r.value)}}},methods:{async loginWithGoogle(){const r=new p;m(v,r).then(t=>{console.log(t.user),router.push("/feed")}).catch(t=>{alert("Authentication with Google didn't work! Too bad :(",t)})}}},N=e("h1",null,"REGISTER",-1),G={class:"flex justify-center items-center mt-20"},S={class:"w-full max-w-xs"},V={class:"identity-input mb-4"},j=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"}," First Name",-1),H=e("span",{class:"text-xs text-red-700",id:"firstName"},null,-1),A={class:"identity-input mb-4"},E=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"}," Surname",-1),P=e("span",{class:"text-xs text-red-700",id:"surname"},null,-1),W={class:"identity-input mb-4"},B=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"}," Email",-1),I=e("span",{class:"text-xs text-red-700",id:"emailHelp"},null,-1),T={class:"password-input mb-6"},U=e("label",{for:"identity",class:"flex text-gray-700 text-sm font-bold mb-2"},"Password",-1),C=e("span",{class:"text-xs text-red-700",id:"passwordHelp"},null,-1),F=e("div",{class:"flex items-center justify-between"},[e("a",{class:"inline-block align-baseline py-4 font-bold text-sm text-gray-500 hover:text-black",href:"#"}," Forgot Password? "),e("button",{class:"bg-black hover:bg-white hover:text-black text-white font-bold py-2 my-2 px-4 border border-black rounded focus:shadow-outline",type:"submit"}," Sign In ")],-1),R={class:"flex items-center justify-between"},M={class:"flex items-center justify-between"},q=y("Already Have An Account?");function D(r,t,a,s,K,l){const d=f("router-link");return b(),x("div",null,[N,e("div",G,[e("div",S,[e("form",{class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:t[5]||(t[5]=h((...o)=>s.register&&s.register(...o),["prevent"]))},[e("div",V,[j,n(e("input",{id:"identity",class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"First Name","onUpdate:modelValue":t[0]||(t[0]=o=>s.register_form.firstName=o)},null,512),[[i,s.register_form.firstName]]),H]),e("div",A,[E,n(e("input",{id:"identity",class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Surname","onUpdate:modelValue":t[1]||(t[1]=o=>s.register_form.surname=o)},null,512),[[i,s.register_form.surname]]),P]),e("div",W,[B,n(e("input",{id:"identity",class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Email","aria-describedby":"emailHelp","onUpdate:modelValue":t[2]||(t[2]=o=>s.register_form.email=o)},null,512),[[i,s.register_form.email]]),I]),e("div",T,[U,n(e("input",{"aria-describedby":"passwordHelp","onUpdate:modelValue":t[3]||(t[3]=o=>s.register_form.password=o),class:"shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"*******"},null,512),[[i,s.register_form.password]]),C]),F,e("div",R,[e("button",{class:"w-full bg-transparent hover:bg-red-400 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded",onClick:t[4]||(t[4]=(...o)=>l.loginWithGoogle&&l.loginWithGoogle(...o))}," Sign In With Google ")]),e("div",M,[g(d,{to:"/login",class:"inline-block align-baseline py-3 pb-0 font-bold text-sm text-gray-500 hover:text-black"},{default:_(()=>[q]),_:1})])],32)])])])}var z=w(k,[["render",D]]);export{z as default};
