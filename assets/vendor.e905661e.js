function ai(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cc=ai(lc);function Us(t){return!!t||t===""}function li(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=be(r)?dc(r):li(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(be(t))return t;if(he(t))return t}}const uc=/;(?![^(]*\))/g,fc=/:(.+)/;function dc(t){const e={};return t.split(uc).forEach(n=>{if(n){const r=n.split(fc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ci(t){let e="";if(be(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=ci(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hg=t=>t==null?"":U(t)||he(t)&&(t.toString===Bs||!B(t.toString))?JSON.stringify(t,$s,2):String(t),$s=(t,e)=>e&&e.__v_isRef?$s(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!U(e)&&!Hs(e)?String(e):e,Z={},Qt=[],He=()=>{},hc=()=>!1,pc=/^on[^a-z]/,fr=t=>pc.test(t),ui=t=>t.startsWith("onUpdate:"),ye=Object.assign,fi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mc=Object.prototype.hasOwnProperty,q=(t,e)=>mc.call(t,e),U=Array.isArray,Xt=t=>dr(t)==="[object Map]",Fs=t=>dr(t)==="[object Set]",B=t=>typeof t=="function",be=t=>typeof t=="string",di=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",js=t=>he(t)&&B(t.then)&&B(t.catch),Bs=Object.prototype.toString,dr=t=>Bs.call(t),gc=t=>dr(t).slice(8,-1),Hs=t=>dr(t)==="[object Object]",hi=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vc=/-(\w)/g,ze=pr(t=>t.replace(vc,(e,n)=>n?n.toUpperCase():"")),_c=/\B([A-Z])/g,Zt=pr(t=>t.replace(_c,"-$1").toLowerCase()),mr=pr(t=>t.charAt(0).toUpperCase()+t.slice(1)),pi=pr(t=>t?`on${mr(t)}`:""),An=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_r=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vs;const yc=()=>Vs||(Vs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;const yr=[];class bc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(yr.push(this),Ot=this)}off(){this.active&&(yr.pop(),Ot=yr[yr.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ic(t,e){e=e||Ot,e&&e.active&&e.effects.push(t)}const mi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ws=t=>(t.w&ft)>0,Ks=t=>(t.n&ft)>0,Ec=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ft},wc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Ws(i)&&!Ks(i)?i.delete(t):e[n++]=i,i.w&=~ft,i.n&=~ft}e.length=n}},gi=new WeakMap;let Rn=0,ft=1;const vi=30,en=[];let At;const Rt=Symbol(""),_i=Symbol("");class yi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Ic(this,r)}run(){if(!this.active)return this.fn();if(!en.length||!en.includes(this))try{return en.push(At=this),Tc(),ft=1<<++Rn,Rn<=vi?Ec(this):zs(this),this.fn()}finally{Rn<=vi&&wc(this),ft=1<<--Rn,kt(),en.pop();const e=en.length;At=e>0?en[e-1]:void 0}}stop(){this.active&&(zs(this),this.onStop&&this.onStop(),this.active=!1)}}function zs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tn=!0;const bi=[];function nn(){bi.push(tn),tn=!1}function Tc(){bi.push(tn),tn=!0}function kt(){const t=bi.pop();tn=t===void 0?!0:t}function Ne(t,e,n){if(!qs())return;let r=gi.get(t);r||gi.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=mi()),Gs(i)}function qs(){return tn&&At!==void 0}function Gs(t,e){let n=!1;Rn<=vi?Ks(t)||(t.n|=ft,n=!Ws(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function tt(t,e,n,r,i,s){const o=gi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?hi(n)&&a.push(o.get("length")):(a.push(o.get(Rt)),Xt(t)&&a.push(o.get(_i)));break;case"delete":U(t)||(a.push(o.get(Rt)),Xt(t)&&a.push(o.get(_i)));break;case"set":Xt(t)&&a.push(o.get(Rt));break}if(a.length===1)a[0]&&Ii(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ii(mi(l))}}function Ii(t,e){for(const n of U(t)?t:[...t])(n!==At||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Cc=ai("__proto__,__v_isRef,__isVue"),Js=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(di)),Sc=Ei(),Oc=Ei(!1,!0),Ac=Ei(!0),Ys=Rc();function Rc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let s=0,o=this.length;s<o;s++)Ne(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nn();const r=G(this)[e].apply(this,n);return kt(),r}}),t}function Ei(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Kc:so:e?io:ro).get(r))return r;const o=U(r);if(!t&&o&&q(Ys,i))return Reflect.get(Ys,i,s);const a=Reflect.get(r,i,s);return(di(i)?Js.has(i):Cc(i))||(t||Ne(r,"get",i),e)?a:Ie(a)?!o||!hi(i)?a.value:a:he(a)?t?oo(a):rn(a):a}}const kc=Qs(),Pc=Qs(!0);function Qs(t=!1){return function(n,r,i,s){let o=n[r];if(kn(o)&&Ie(o)&&!Ie(i))return!1;if(!t&&!kn(i)&&(ao(i)||(i=G(i),o=G(o)),!U(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const a=U(n)&&hi(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,i,s);return n===G(s)&&(a?An(i,o)&&tt(n,"set",r,i):tt(n,"add",r,i)),l}}function Nc(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tt(t,"delete",e,void 0),r}function Mc(t,e){const n=Reflect.has(t,e);return(!di(e)||!Js.has(e))&&Ne(t,"has",e),n}function xc(t){return Ne(t,"iterate",U(t)?"length":Rt),Reflect.ownKeys(t)}const Xs={get:Sc,set:kc,deleteProperty:Nc,has:Mc,ownKeys:xc},Dc={get:Ac,set(t,e){return!0},deleteProperty(t,e){return!0}},Lc=ye({},Xs,{get:Oc,set:Pc}),wi=t=>t,br=t=>Reflect.getPrototypeOf(t);function Ir(t,e,n=!1,r=!1){t=t.__v_raw;const i=G(t),s=G(e);e!==s&&!n&&Ne(i,"get",e),!n&&Ne(i,"get",s);const{has:o}=br(i),a=r?wi:n?Si:Pn;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Er(t,e=!1){const n=this.__v_raw,r=G(n),i=G(t);return t!==i&&!e&&Ne(r,"has",t),!e&&Ne(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function wr(t,e=!1){return t=t.__v_raw,!e&&Ne(G(t),"iterate",Rt),Reflect.get(t,"size",t)}function Zs(t){t=G(t);const e=G(this);return br(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function eo(t,e){e=G(e);const n=G(this),{has:r,get:i}=br(n);let s=r.call(n,t);s||(t=G(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?An(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function to(t){const e=G(this),{has:n,get:r}=br(e);let i=n.call(e,t);i||(t=G(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&tt(e,"delete",t,void 0),s}function no(){const t=G(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function Tr(t,e){return function(r,i){const s=this,o=s.__v_raw,a=G(o),l=e?wi:t?Si:Pn;return!t&&Ne(a,"iterate",Rt),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Cr(t,e,n){return function(...r){const i=this.__v_raw,s=G(i),o=Xt(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?wi:e?Si:Pn;return!e&&Ne(s,"iterate",l?_i:Rt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function dt(t){return function(...e){return t==="delete"?!1:this}}function Uc(){const t={get(s){return Ir(this,s)},get size(){return wr(this)},has:Er,add:Zs,set:eo,delete:to,clear:no,forEach:Tr(!1,!1)},e={get(s){return Ir(this,s,!1,!0)},get size(){return wr(this)},has:Er,add:Zs,set:eo,delete:to,clear:no,forEach:Tr(!1,!0)},n={get(s){return Ir(this,s,!0)},get size(){return wr(this,!0)},has(s){return Er.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Tr(!0,!1)},r={get(s){return Ir(this,s,!0,!0)},get size(){return wr(this,!0)},has(s){return Er.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Cr(s,!1,!1),n[s]=Cr(s,!0,!1),e[s]=Cr(s,!1,!0),r[s]=Cr(s,!0,!0)}),[t,n,e,r]}const[$c,Fc,jc,Bc]=Uc();function Ti(t,e){const n=e?t?Bc:jc:t?Fc:$c;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(q(n,i)&&i in r?n:r,i,s)}const Hc={get:Ti(!1,!1)},Vc={get:Ti(!1,!0)},Wc={get:Ti(!0,!1)},ro=new WeakMap,io=new WeakMap,so=new WeakMap,Kc=new WeakMap;function zc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(t){return t.__v_skip||!Object.isExtensible(t)?0:zc(gc(t))}function rn(t){return kn(t)?t:Ci(t,!1,Xs,Hc,ro)}function Gc(t){return Ci(t,!1,Lc,Vc,io)}function oo(t){return Ci(t,!0,Dc,Wc,so)}function Ci(t,e,n,r,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=qc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function sn(t){return kn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function ao(t){return!!(t&&t.__v_isShallow)}function lo(t){return sn(t)||kn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function co(t){return vr(t,"__v_skip",!0),t}const Pn=t=>he(t)?rn(t):t,Si=t=>he(t)?oo(t):t;function uo(t){qs()&&(t=G(t),t.dep||(t.dep=mi()),Gs(t.dep))}function fo(t,e){t=G(t),t.dep&&Ii(t.dep)}function Ie(t){return Boolean(t&&t.__v_isRef===!0)}function Ae(t){return ho(t,!1)}function Jc(t){return ho(t,!0)}function ho(t,e){return Ie(t)?t:new Yc(t,e)}class Yc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Pn(e)}get value(){return uo(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),An(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pn(e),fo(this))}}function Nn(t){return Ie(t)?t.value:t}const Qc={get:(t,e,n)=>Nn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function po(t){return sn(t)?t:new Proxy(t,Qc)}class Xc{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new yi(e,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=G(this);return uo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zc(t,e,n=!1){let r,i;const s=B(t);return s?(r=t,i=He):(r=t.get,i=t.set),new Xc(r,i,s||!i,n)}Promise.resolve();function ht(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Sr(s,e,n)}return i}function Ue(t,e,n,r){if(B(t)){const s=ht(t,e,n,r);return s&&js(s)&&s.catch(o=>{Sr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ue(t[s],e,n,r));return i}function Sr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ht(l,null,10,[t,o,a]);return}}eu(t,n,i,r)}function eu(t,e,n,r=!0){console.error(t)}let Or=!1,Oi=!1;const Me=[];let nt=0;const Mn=[];let xn=null,on=0;const Dn=[];let pt=null,an=0;const mo=Promise.resolve();let Ai=null,Ri=null;function rt(t){const e=Ai||mo;return t?e.then(this?t.bind(this):t):e}function tu(t){let e=nt+1,n=Me.length;for(;e<n;){const r=e+n>>>1;Ln(Me[r])<t?e=r+1:n=r}return e}function go(t){(!Me.length||!Me.includes(t,Or&&t.allowRecurse?nt+1:nt))&&t!==Ri&&(t.id==null?Me.push(t):Me.splice(tu(t.id),0,t),vo())}function vo(){!Or&&!Oi&&(Oi=!0,Ai=mo.then(bo))}function nu(t){const e=Me.indexOf(t);e>nt&&Me.splice(e,1)}function _o(t,e,n,r){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),vo()}function ru(t){_o(t,xn,Mn,on)}function iu(t){_o(t,pt,Dn,an)}function ki(t,e=null){if(Mn.length){for(Ri=e,xn=[...new Set(Mn)],Mn.length=0,on=0;on<xn.length;on++)xn[on]();xn=null,on=0,Ri=null,ki(t,e)}}function yo(t){if(Dn.length){const e=[...new Set(Dn)];if(Dn.length=0,pt){pt.push(...e);return}for(pt=e,pt.sort((n,r)=>Ln(n)-Ln(r)),an=0;an<pt.length;an++)pt[an]();pt=null,an=0}}const Ln=t=>t.id==null?1/0:t.id;function bo(t){Oi=!1,Or=!0,ki(t),Me.sort((n,r)=>Ln(n)-Ln(r));const e=He;try{for(nt=0;nt<Me.length;nt++){const n=Me[nt];n&&n.active!==!1&&ht(n,null,14)}}finally{nt=0,Me.length=0,yo(),Or=!1,Ai=null,(Me.length||Mn.length||Dn.length)&&bo(t)}}function su(t,e,...n){const r=t.vnode.props||Z;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||Z;h?i=n.map(m=>m.trim()):d&&(i=n.map(_r))}let a,l=r[a=pi(e)]||r[a=pi(ze(e))];!l&&s&&(l=r[a=pi(Zt(e))]),l&&Ue(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(c,t,6,i)}}function Io(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=Io(c,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(U(s)?s.forEach(l=>o[l]=null):ye(o,s),r.set(t,o),o)}function Pi(t,e){return!t||!fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Zt(e))||q(t,e))}let $e=null,Eo=null;function Ar(t){const e=$e;return $e=t,Eo=t&&t.type.__scopeId||null,e}function ou(t,e=$e,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Jo(-1);const s=Ar(e),o=t(...i);return Ar(s),r._d&&Jo(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ni(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:v,inheritAttrs:A}=t;let C,O;const L=Ar(t);try{if(n.shapeFlag&4){const V=i||r;C=Je(u.call(V,V,d,s,m,h,v)),O=l}else{const V=e;C=Je(V.length>1?V(s,{attrs:l,slots:a,emit:c}):V(s,null)),O=e.props?l:au(l)}}catch(V){Fn.length=0,Sr(V,t,1),C=we(Ge)}let H=C;if(O&&A!==!1){const V=Object.keys(O),{shapeFlag:te}=H;V.length&&te&(1|6)&&(o&&V.some(ui)&&(O=lu(O,o)),H=Ut(H,O))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,Ar(L),C}const au=t=>{let e;for(const n in t)(n==="class"||n==="style"||fr(n))&&((e||(e={}))[n]=t[n]);return e},lu=(t,e)=>{const n={};for(const r in t)(!ui(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cu(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Pi(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wo(r,o,c):!0:!!o;return!1}function wo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Pi(n,s))return!0}return!1}function uu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fu=t=>t.__isSuspense;function du(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):iu(t)}function mt(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function xe(t,e,n=!1){const r=_e||$e;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}function Un(t,e){return Mi(t,null,e)}const To={};function ln(t,e,n){return Mi(t,e,n)}function Mi(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Z){const a=_e;let l,c=!1,u=!1;if(Ie(t)?(l=()=>t.value,c=ao(t)):sn(t)?(l=()=>t,r=!0):U(t)?(u=!0,c=t.some(sn),l=()=>t.map(O=>{if(Ie(O))return O.value;if(sn(O))return Pt(O);if(B(O))return ht(O,a,2)})):B(t)?e?l=()=>ht(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ue(t,a,3,[h])}:l=He,e&&r){const O=l;l=()=>Pt(O())}let d,h=O=>{d=C.onStop=()=>{ht(O,a,4)}};if(jn)return h=He,e?n&&Ue(e,a,3,[l(),u?[]:void 0,h]):l(),He;let m=u?[]:To;const v=()=>{if(!!C.active)if(e){const O=C.run();(r||c||(u?O.some((L,H)=>An(L,m[H])):An(O,m)))&&(d&&d(),Ue(e,a,3,[O,m===To?void 0:m,h]),m=O)}else C.run()};v.allowRecurse=!!e;let A;i==="sync"?A=v:i==="post"?A=()=>Re(v,a&&a.suspense):A=()=>{!a||a.isMounted?ru(v):v()};const C=new yi(l,A);return e?n?v():m=C.run():i==="post"?Re(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&fi(a.scope.effects,C)}}function hu(t,e,n){const r=this.proxy,i=be(t)?t.includes(".")?Co(r,t):()=>r[t]:t.bind(r,r);let s;B(e)?s=e:(s=e.handler,n=e);const o=_e;cn(this);const a=Mi(i,s.bind(r),n);return o?cn(o):$t(),a}function Co(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Pt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))Pt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Fs(t)||Xt(t))t.forEach(n=>{Pt(n,e)});else if(Hs(t))for(const n in t)Pt(t[n],e);return t}function pu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $n(()=>{t.isMounted=!0}),Po(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],mu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=Zu(),r=pu();let i;return()=>{const s=e.default&&Ro(e.default(),!0);if(!s||!s.length)return;const o=G(t),{mode:a}=o,l=s[0];if(r.isLeaving)return Di(l);const c=Ao(l);if(!c)return Di(l);const u=xi(c,o,r,n);Li(c,u);const d=n.subTree,h=d&&Ao(d);let m=!1;const{getTransitionKey:v}=c.type;if(v){const A=v();i===void 0?i=A:A!==i&&(i=A,m=!0)}if(h&&h.type!==Ge&&(!Lt(c,h)||m)){const A=xi(h,o,r,n);if(Li(h,A),a==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update()},Di(l);a==="in-out"&&c.type!==Ge&&(A.delayLeave=(C,O,L)=>{const H=Oo(r,h);H[String(h.key)]=h,C._leaveCb=()=>{O(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return l}}},So=mu;function Oo(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function xi(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:A,onAppear:C,onAfterAppear:O,onAppearCancelled:L}=e,H=String(t.key),V=Oo(n,t),te=(W,le)=>{W&&Ue(W,r,9,le)},ae={mode:s,persisted:o,beforeEnter(W){let le=a;if(!n.isMounted)if(i)le=A||a;else return;W._leaveCb&&W._leaveCb(!0);const J=V[H];J&&Lt(t,J)&&J.el._leaveCb&&J.el._leaveCb(),te(le,[W])},enter(W){let le=l,J=c,me=u;if(!n.isMounted)if(i)le=C||l,J=O||c,me=L||u;else return;let ge=!1;const N=W._enterCb=ue=>{ge||(ge=!0,ue?te(me,[W]):te(J,[W]),ae.delayedLeave&&ae.delayedLeave(),W._enterCb=void 0)};le?(le(W,N),le.length<=1&&N()):N()},leave(W,le){const J=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return le();te(d,[W]);let me=!1;const ge=W._leaveCb=N=>{me||(me=!0,le(),N?te(v,[W]):te(m,[W]),W._leaveCb=void 0,V[J]===t&&delete V[J])};V[J]=t,h?(h(W,ge),h.length<=1&&ge()):ge()},clone(W){return xi(W,e,n,r)}};return ae}function Di(t){if(Rr(t))return t=Ut(t),t.children=null,t}function Ao(t){return Rr(t)?t.children?t.children[0]:void 0:t}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ro(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===qe?(s.patchFlag&128&&r++,n=n.concat(Ro(s.children,e))):(e||s.type!==Ge)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function it(t){return B(t)?{setup:t,name:t.name}:t}const Ui=t=>!!t.type.__asyncLoader,Rr=t=>t.type.__isKeepAlive;function gu(t,e){ko(t,"a",e)}function vu(t,e){ko(t,"da",e)}function ko(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(kr(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Rr(i.parent.vnode)&&_u(r,e,n,i),i=i.parent}}function _u(t,e,n,r){const i=kr(e,t,r,!0);$i(()=>{fi(r[e],i)},n)}function kr(t,e,n=_e,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nn(),cn(n);const a=Ue(e,n,t,o);return $t(),kt(),a});return r?i.unshift(s):i.push(s),s}}const st=t=>(e,n=_e)=>(!jn||t==="sp")&&kr(t,e,n),yu=st("bm"),$n=st("m"),bu=st("bu"),Iu=st("u"),Po=st("bum"),$i=st("um"),Eu=st("sp"),wu=st("rtg"),Tu=st("rtc");function Cu(t,e=_e){kr("ec",t,e)}let Fi=!0;function Su(t){const e=xo(t),n=t.proxy,r=t.ctx;Fi=!1,e.beforeCreate&&No(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:v,activated:A,deactivated:C,beforeDestroy:O,beforeUnmount:L,destroyed:H,unmounted:V,render:te,renderTracked:ae,renderTriggered:W,errorCaptured:le,serverPrefetch:J,expose:me,inheritAttrs:ge,components:N,directives:ue,filters:Oe}=e;if(c&&Ou(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];B(Y)&&(r[ne]=Y.bind(n))}if(i){const ne=i.call(n,n);he(ne)&&(t.data=rn(ne))}if(Fi=!0,s)for(const ne in s){const Y=s[ne],De=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):He,Jt=!B(Y)&&B(Y.set)?Y.set.bind(n):He,et=ve({get:De,set:Jt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>et.value,set:We=>et.value=We})}if(a)for(const ne in a)Mo(a[ne],r,n,ne);if(l){const ne=B(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(Y=>{mt(Y,ne[Y])})}u&&No(u,t,"c");function fe(ne,Y){U(Y)?Y.forEach(De=>ne(De.bind(n))):Y&&ne(Y.bind(n))}if(fe(yu,d),fe($n,h),fe(bu,m),fe(Iu,v),fe(gu,A),fe(vu,C),fe(Cu,le),fe(Tu,ae),fe(wu,W),fe(Po,L),fe($i,V),fe(Eu,J),U(me))if(me.length){const ne=t.exposed||(t.exposed={});me.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:De=>n[Y]=De})})}else t.exposed||(t.exposed={});te&&t.render===He&&(t.render=te),ge!=null&&(t.inheritAttrs=ge),N&&(t.components=N),ue&&(t.directives=ue)}function Ou(t,e,n=He,r=!1){U(t)&&(t=ji(t));for(const i in t){const s=t[i];let o;he(s)?"default"in s?o=xe(s.from||i,s.default,!0):o=xe(s.from||i):o=xe(s),Ie(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function No(t,e,n){Ue(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mo(t,e,n,r){const i=r.includes(".")?Co(n,r):()=>n[r];if(be(t)){const s=e[t];B(s)&&ln(i,s)}else if(B(t))ln(i,t.bind(n));else if(he(t))if(U(t))t.forEach(s=>Mo(s,e,n,r));else{const s=B(t.handler)?t.handler.bind(n):e[t.handler];B(s)&&ln(i,s,t)}}function xo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Pr(l,c,o,!0)),Pr(l,e,o)),s.set(e,l),l}function Pr(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Pr(t,s,n,!0),i&&i.forEach(o=>Pr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Au[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Au={data:Do,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Nt,directives:Nt,watch:ku,provide:Do,inject:Ru};function Do(t,e){return e?t?function(){return ye(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Ru(t,e){return Nt(ji(t),ji(e))}function ji(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?ye(ye(Object.create(null),t),e):e}function ku(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function Pu(t,e,n,r=!1){const i={},s={};vr(s,Dr,1),t.propsDefaults=Object.create(null),Lo(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Gc(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Nu(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=G(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const m=e[h];if(l)if(q(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=ze(h);i[v]=Bi(l,a,v,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Lo(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!q(e,d)&&((u=Zt(d))===d||!q(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Bi(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!q(e,d)&&!0)&&(delete s[d],c=!0)}c&&tt(t,"set","$attrs")}function Lo(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;i&&q(i,u=ze(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pi(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=G(n),c=a||Z;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Bi(i,l,d,c[d],t,!q(c,d))}}return o}function Bi(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(cn(i),r=c[n]=l.call(null,e),$t())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function Uo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!B(t)){const u=d=>{l=!0;const[h,m]=Uo(d,e,!0);ye(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Qt),Qt;if(U(s))for(let u=0;u<s.length;u++){const d=ze(s[u]);$o(d)&&(o[d]=Z)}else if(s)for(const u in s){const d=ze(u);if($o(d)){const h=s[u],m=o[d]=U(h)||B(h)?{type:h}:h;if(m){const v=Bo(Boolean,m.type),A=Bo(String,m.type);m[0]=v>-1,m[1]=A<0||v<A,(v>-1||q(m,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function $o(t){return t[0]!=="$"}function Fo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function jo(t,e){return Fo(t)===Fo(e)}function Bo(t,e){return U(e)?e.findIndex(n=>jo(n,t)):B(e)&&jo(e,t)?0:-1}const Ho=t=>t[0]==="_"||t==="$stable",Hi=t=>U(t)?t.map(Je):[Je(t)],Mu=(t,e,n)=>{const r=ou((...i)=>Hi(e(...i)),n);return r._c=!1,r},Vo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ho(i))continue;const s=t[i];if(B(s))e[i]=Mu(i,s,r);else if(s!=null){const o=Hi(s);e[i]=()=>o}}},Wo=(t,e)=>{const n=Hi(e);t.slots.default=()=>n},xu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),vr(e,"_",n)):Vo(e,t.slots={})}else t.slots={},e&&Wo(t,e);vr(t.slots,Dr,1)},Du=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ye(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Vo(e,i)),o=e}else e&&(Wo(t,e),o={default:1});if(s)for(const a in i)!Ho(a)&&!(a in o)&&delete i[a]};function pg(t,e){const n=$e;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Z]=e[s];B(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Mt(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(nn(),Ue(l,n,8,[t.el,a,t,e]),kt())}}function Ko(){return{app:null,config:{isNativeTag:hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lu=0;function Uu(t,e){return function(r,i=null){i!=null&&!he(i)&&(i=null);const s=Ko(),o=new Set;let a=!1;const l=s.app={_uid:Lu++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:af,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...u)):B(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=we(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Ji(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Vi(t,e,n,r,i=!1){if(U(t)){t.forEach((h,m)=>Vi(h,e&&(U(e)?e[m]:e),n,r,i));return}if(Ui(r)&&!i)return;const s=r.shapeFlag&4?Ji(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,q(d,c)&&(d[c]=null)):Ie(c)&&(c.value=null)),B(l))ht(l,a,12,[o,u]);else{const h=be(l),m=Ie(l);if(h||m){const v=()=>{if(t.f){const A=h?u[l]:l.value;i?U(A)&&fi(A,s):U(A)?A.includes(s)||A.push(s):h?u[l]=[s]:(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,q(d,l)&&(d[l]=o)):Ie(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Re(v,n)):v()}}}const Re=du;function $u(t){return Fu(t)}function Fu(t,e){const n=yc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=He,cloneNode:v,insertStaticContent:A}=t,C=(f,p,g,b=null,y=null,w=null,R=!1,E=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Lt(f,p)&&(b=M(f),Le(f,y,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:x,shapeFlag:k}=p;switch(I){case Wi:O(f,p,g,b);break;case Ge:L(f,p,g,b);break;case Ki:f==null&&H(p,g,b,R);break;case qe:ue(f,p,g,b,y,w,R,E,T);break;default:k&1?ae(f,p,g,b,y,w,R,E,T):k&6?Oe(f,p,g,b,y,w,R,E,T):(k&64||k&128)&&I.process(f,p,g,b,y,w,R,E,T,re)}x!=null&&y&&Vi(x,f&&f.ref,w,p||f,!p)},O=(f,p,g,b)=>{if(f==null)r(p.el=a(p.children),g,b);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},L=(f,p,g,b)=>{f==null?r(p.el=l(p.children||""),g,b):p.el=f.el},H=(f,p,g,b)=>{[f.el,f.anchor]=A(f.children,p,g,b,f.el,f.anchor)},V=({el:f,anchor:p},g,b)=>{let y;for(;f&&f!==p;)y=h(f),r(f,g,b),f=y;r(p,g,b)},te=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},ae=(f,p,g,b,y,w,R,E,T)=>{R=R||p.type==="svg",f==null?W(p,g,b,y,w,R,E,T):me(f,p,y,w,R,E,T)},W=(f,p,g,b,y,w,R,E)=>{let T,I;const{type:x,props:k,shapeFlag:D,transition:F,patchFlag:z,dirs:oe}=f;if(f.el&&v!==void 0&&z===-1)T=f.el=v(f.el);else{if(T=f.el=o(f.type,w,k&&k.is,k),D&8?u(T,f.children):D&16&&J(f.children,T,null,b,y,w&&x!=="foreignObject",R,E),oe&&Mt(f,null,b,"created"),k){for(const se in k)se!=="value"&&!hr(se)&&s(T,se,null,k[se],w,f.children,b,y,S);"value"in k&&s(T,"value",null,k.value),(I=k.onVnodeBeforeMount)&&Ye(I,b,f)}le(T,f,f.scopeId,R,b)}oe&&Mt(f,null,b,"beforeMount");const X=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;X&&F.beforeEnter(T),r(T,p,g),((I=k&&k.onVnodeMounted)||X||oe)&&Re(()=>{I&&Ye(I,b,f),X&&F.enter(T),oe&&Mt(f,null,b,"mounted")},y)},le=(f,p,g,b,y)=>{if(g&&m(f,g),b)for(let w=0;w<b.length;w++)m(f,b[w]);if(y){let w=y.subTree;if(p===w){const R=y.vnode;le(f,R,R.scopeId,R.slotScopeIds,y.parent)}}},J=(f,p,g,b,y,w,R,E,T=0)=>{for(let I=T;I<f.length;I++){const x=f[I]=E?gt(f[I]):Je(f[I]);C(null,x,p,g,b,y,w,R,E)}},me=(f,p,g,b,y,w,R)=>{const E=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:x}=p;T|=f.patchFlag&16;const k=f.props||Z,D=p.props||Z;let F;g&&xt(g,!1),(F=D.onVnodeBeforeUpdate)&&Ye(F,g,p,f),x&&Mt(p,f,g,"beforeUpdate"),g&&xt(g,!0);const z=y&&p.type!=="foreignObject";if(I?ge(f.dynamicChildren,I,E,g,b,z,w):R||De(f,p,E,null,g,b,z,w,!1),T>0){if(T&16)N(E,p,k,D,g,b,y);else if(T&2&&k.class!==D.class&&s(E,"class",null,D.class,y),T&4&&s(E,"style",k.style,D.style,y),T&8){const oe=p.dynamicProps;for(let X=0;X<oe.length;X++){const se=oe[X],Be=k[se],Yt=D[se];(Yt!==Be||se==="value")&&s(E,se,Be,Yt,y,f.children,g,b,S)}}T&1&&f.children!==p.children&&u(E,p.children)}else!R&&I==null&&N(E,p,k,D,g,b,y);((F=D.onVnodeUpdated)||x)&&Re(()=>{F&&Ye(F,g,p,f),x&&Mt(p,f,g,"updated")},b)},ge=(f,p,g,b,y,w,R)=>{for(let E=0;E<p.length;E++){const T=f[E],I=p[E],x=T.el&&(T.type===qe||!Lt(T,I)||T.shapeFlag&(6|64))?d(T.el):g;C(T,I,x,null,b,y,w,R,!0)}},N=(f,p,g,b,y,w,R)=>{if(g!==b){for(const E in b){if(hr(E))continue;const T=b[E],I=g[E];T!==I&&E!=="value"&&s(f,E,I,T,R,p.children,y,w,S)}if(g!==Z)for(const E in g)!hr(E)&&!(E in b)&&s(f,E,g[E],null,R,p.children,y,w,S);"value"in b&&s(f,"value",g.value,b.value)}},ue=(f,p,g,b,y,w,R,E,T)=>{const I=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:F}=p;F&&(E=E?E.concat(F):F),f==null?(r(I,g,b),r(x,g,b),J(p.children,g,x,y,w,R,E,T)):k>0&&k&64&&D&&f.dynamicChildren?(ge(f.dynamicChildren,D,g,y,w,R,E),(p.key!=null||y&&p===y.subTree)&&zo(f,p,!0)):De(f,p,g,x,y,w,R,E,T)},Oe=(f,p,g,b,y,w,R,E,T)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?y.ctx.activate(p,g,b,R,T):Ze(p,g,b,y,w,R,T):fe(f,p,T)},Ze=(f,p,g,b,y,w,R)=>{const E=f.component=Xu(f,b,y);if(Rr(f)&&(E.ctx.renderer=re),ef(E),E.asyncDep){if(y&&y.registerDep(E,ne),!f.el){const T=E.subTree=we(Ge);L(null,T,p,g)}return}ne(E,f,p,g,y,w,R)},fe=(f,p,g)=>{const b=p.component=f.component;if(cu(f,p,g))if(b.asyncDep&&!b.asyncResolved){Y(b,p,g);return}else b.next=p,nu(b.update),b.update();else p.component=f.component,p.el=f.el,b.vnode=p},ne=(f,p,g,b,y,w,R)=>{const E=()=>{if(f.isMounted){let{next:x,bu:k,u:D,parent:F,vnode:z}=f,oe=x,X;xt(f,!1),x?(x.el=z.el,Y(f,x,R)):x=z,k&&gr(k),(X=x.props&&x.props.onVnodeBeforeUpdate)&&Ye(X,F,x,z),xt(f,!0);const se=Ni(f),Be=f.subTree;f.subTree=se,C(Be,se,d(Be.el),M(Be),f,y,w),x.el=se.el,oe===null&&uu(f,se.el),D&&Re(D,y),(X=x.props&&x.props.onVnodeUpdated)&&Re(()=>Ye(X,F,x,z),y)}else{let x;const{el:k,props:D}=p,{bm:F,m:z,parent:oe}=f,X=Ui(p);if(xt(f,!1),F&&gr(F),!X&&(x=D&&D.onVnodeBeforeMount)&&Ye(x,oe,p),xt(f,!0),k&&j){const se=()=>{f.subTree=Ni(f),j(k,f.subTree,f,y,null)};X?p.type.__asyncLoader().then(()=>!f.isUnmounted&&se()):se()}else{const se=f.subTree=Ni(f);C(null,se,g,b,f,y,w),p.el=se.el}if(z&&Re(z,y),!X&&(x=D&&D.onVnodeMounted)){const se=p;Re(()=>Ye(x,oe,se),y)}p.shapeFlag&256&&f.a&&Re(f.a,y),f.isMounted=!0,p=g=b=null}},T=f.effect=new yi(E,()=>go(f.update),f.scope),I=f.update=T.run.bind(T);I.id=f.uid,xt(f,!0),I()},Y=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Nu(f,p.props,b,g),Du(f,p.children,g),nn(),ki(void 0,f.update),kt()},De=(f,p,g,b,y,w,R,E,T=!1)=>{const I=f&&f.children,x=f?f.shapeFlag:0,k=p.children,{patchFlag:D,shapeFlag:F}=p;if(D>0){if(D&128){et(I,k,g,b,y,w,R,E,T);return}else if(D&256){Jt(I,k,g,b,y,w,R,E,T);return}}F&8?(x&16&&S(I,y,w),k!==I&&u(g,k)):x&16?F&16?et(I,k,g,b,y,w,R,E,T):S(I,y,w,!0):(x&8&&u(g,""),F&16&&J(k,g,b,y,w,R,E,T))},Jt=(f,p,g,b,y,w,R,E,T)=>{f=f||Qt,p=p||Qt;const I=f.length,x=p.length,k=Math.min(I,x);let D;for(D=0;D<k;D++){const F=p[D]=T?gt(p[D]):Je(p[D]);C(f[D],F,g,null,y,w,R,E,T)}I>x?S(f,y,w,!0,!1,k):J(p,g,b,y,w,R,E,T,k)},et=(f,p,g,b,y,w,R,E,T)=>{let I=0;const x=p.length;let k=f.length-1,D=x-1;for(;I<=k&&I<=D;){const F=f[I],z=p[I]=T?gt(p[I]):Je(p[I]);if(Lt(F,z))C(F,z,g,null,y,w,R,E,T);else break;I++}for(;I<=k&&I<=D;){const F=f[k],z=p[D]=T?gt(p[D]):Je(p[D]);if(Lt(F,z))C(F,z,g,null,y,w,R,E,T);else break;k--,D--}if(I>k){if(I<=D){const F=D+1,z=F<x?p[F].el:b;for(;I<=D;)C(null,p[I]=T?gt(p[I]):Je(p[I]),g,z,y,w,R,E,T),I++}}else if(I>D)for(;I<=k;)Le(f[I],y,w,!0),I++;else{const F=I,z=I,oe=new Map;for(I=z;I<=D;I++){const Pe=p[I]=T?gt(p[I]):Je(p[I]);Pe.key!=null&&oe.set(Pe.key,I)}let X,se=0;const Be=D-z+1;let Yt=!1,xs=0;const On=new Array(Be);for(I=0;I<Be;I++)On[I]=0;for(I=F;I<=k;I++){const Pe=f[I];if(se>=Be){Le(Pe,y,w,!0);continue}let Ke;if(Pe.key!=null)Ke=oe.get(Pe.key);else for(X=z;X<=D;X++)if(On[X-z]===0&&Lt(Pe,p[X])){Ke=X;break}Ke===void 0?Le(Pe,y,w,!0):(On[Ke-z]=I+1,Ke>=xs?xs=Ke:Yt=!0,C(Pe,p[Ke],g,null,y,w,R,E,T),se++)}const Ds=Yt?ju(On):Qt;for(X=Ds.length-1,I=Be-1;I>=0;I--){const Pe=z+I,Ke=p[Pe],Ls=Pe+1<x?p[Pe+1].el:b;On[I]===0?C(null,Ke,g,Ls,y,w,R,E,T):Yt&&(X<0||I!==Ds[X]?We(Ke,g,Ls,2):X--)}}},We=(f,p,g,b,y=null)=>{const{el:w,type:R,transition:E,children:T,shapeFlag:I}=f;if(I&6){We(f.component.subTree,p,g,b);return}if(I&128){f.suspense.move(p,g,b);return}if(I&64){R.move(f,p,g,re);return}if(R===qe){r(w,p,g);for(let k=0;k<T.length;k++)We(T[k],p,g,b);r(f.anchor,p,g);return}if(R===Ki){V(f,p,g);return}if(b!==2&&I&1&&E)if(b===0)E.beforeEnter(w),r(w,p,g),Re(()=>E.enter(w),y);else{const{leave:k,delayLeave:D,afterLeave:F}=E,z=()=>r(w,p,g),oe=()=>{k(w,()=>{z(),F&&F()})};D?D(w,z,oe):oe()}else r(w,p,g)},Le=(f,p,g,b=!1,y=!1)=>{const{type:w,props:R,ref:E,children:T,dynamicChildren:I,shapeFlag:x,patchFlag:k,dirs:D}=f;if(E!=null&&Vi(E,null,g,f,!0),x&256){p.ctx.deactivate(f);return}const F=x&1&&D,z=!Ui(f);let oe;if(z&&(oe=R&&R.onVnodeBeforeUnmount)&&Ye(oe,p,f),x&6)P(f.component,g,b);else{if(x&128){f.suspense.unmount(g,b);return}F&&Mt(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,g,y,re,b):I&&(w!==qe||k>0&&k&64)?S(I,p,g,!1,!0):(w===qe&&k&(128|256)||!y&&x&16)&&S(T,p,g),b&&oi(f)}(z&&(oe=R&&R.onVnodeUnmounted)||F)&&Re(()=>{oe&&Ye(oe,p,f),F&&Mt(f,null,p,"unmounted")},g)},oi=f=>{const{type:p,el:g,anchor:b,transition:y}=f;if(p===qe){_(g,b);return}if(p===Ki){te(f);return}const w=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:E}=y,T=()=>R(g,w);E?E(f.el,w,T):T()}else w()},_=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},P=(f,p,g)=>{const{bum:b,scope:y,update:w,subTree:R,um:E}=f;b&&gr(b),y.stop(),w&&(w.active=!1,Le(R,f,p,g)),E&&Re(E,p),Re(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(f,p,g,b=!1,y=!1,w=0)=>{for(let R=w;R<f.length;R++)Le(f[R],p,g,b,y)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Q=(f,p,g)=>{f==null?p._vnode&&Le(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,g),yo(),p._vnode=f},re={p:C,um:Le,m:We,r:oi,mt:Ze,mc:J,pc:De,pbc:ge,n:M,o:t};let K,j;return e&&([K,j]=e(re)),{render:Q,hydrate:K,createApp:Uu(Q,K)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zo(t,e,n=!1){const r=t.children,i=e.children;if(U(r)&&U(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=gt(i[s]),a.el=o.el),n||zo(o,a))}}function ju(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Bu=t=>t.__isTeleport,qo="components";function mg(t,e){return Vu(qo,t,!0,e)||t}const Hu=Symbol();function Vu(t,e,n=!0,r=!1){const i=$e||_e;if(i){const s=i.type;if(t===qo){const a=sf(s);if(a&&(a===e||a===ze(e)||a===mr(ze(e))))return s}const o=Go(i[t]||s[t],e)||Go(i.appContext[t],e);return!o&&r?s:o}}function Go(t,e){return t&&(t[e]||t[ze(e)]||t[mr(ze(e))])}const qe=Symbol(void 0),Wi=Symbol(void 0),Ge=Symbol(void 0),Ki=Symbol(void 0),Fn=[];let Dt=null;function Nr(t=!1){Fn.push(Dt=t?null:[])}function Wu(){Fn.pop(),Dt=Fn[Fn.length-1]||null}let Mr=1;function Jo(t){Mr+=t}function Yo(t){return t.dynamicChildren=Mr>0?Dt||Qt:null,Wu(),Mr>0&&Dt&&Dt.push(t),t}function gg(t,e,n,r,i,s){return Yo(Xo(t,e,n,r,i,s,!0))}function xr(t,e,n,r,i){return Yo(we(t,e,n,r,i,!0))}function zi(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Qo=({key:t})=>t!=null?t:null,Lr=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Ie(t)||B(t)?{i:$e,r:t,k:e,f:!!n}:t:null;function Xo(t,e=null,n=null,r=0,i=null,s=t===qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qo(e),ref:e&&Lr(e),scopeId:Eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(qi(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),Mr>0&&!o&&Dt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Dt.push(l),l}const we=Ku;function Ku(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Hu)&&(t=Ge),zi(t)){const a=Ut(t,e,!0);return n&&qi(a,n),a}if(of(t)&&(t=t.__vccOpts),e){e=zu(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=ci(a)),he(l)&&(lo(l)&&!U(l)&&(l=ye({},l)),e.style=li(l))}const o=be(t)?1:fu(t)?128:Bu(t)?64:he(t)?4:B(t)?2:0;return Xo(t,e,n,r,i,o,s,!0)}function zu(t){return t?lo(t)||Dr in t?ye({},t):t:null}function Ut(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Gu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qo(a),ref:e&&e.ref?n&&i?U(i)?i.concat(Lr(e)):[i,Lr(e)]:Lr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor}}function qu(t=" ",e=0){return we(Wi,null,t,e)}function vg(t="",e=!1){return e?(Nr(),xr(Ge,null,t)):we(Ge,null,t)}function Je(t){return t==null||typeof t=="boolean"?we(Ge):U(t)?we(qe,null,t.slice()):typeof t=="object"?gt(t):we(Wi,null,String(t))}function gt(t){return t.el===null||t.memo?t:Ut(t)}function qi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),qi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Dr in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[qu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ci([e.class,r.class]));else if(i==="style")e.style=li([e.style,r.style]);else if(fr(i)){const s=e[i],o=r[i];o&&s!==o&&!(U(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ye(t,e,n,r=null){Ue(t,e,7,[n,r])}function _g(t,e,n,r){let i;const s=n&&n[r];if(U(t)||be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Gi=t=>t?Zo(t)?Ji(t)||t.proxy:Gi(t.parent):null,Ur=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gi(t.parent),$root:t=>Gi(t.root),$emit:t=>t.emit,$options:t=>xo(t),$forceUpdate:t=>()=>go(t.update),$nextTick:t=>rt.bind(t.proxy),$watch:t=>hu.bind(t)}),Ju={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==Z&&q(r,e))return o[e]=1,r[e];if(i!==Z&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,s[e];if(n!==Z&&q(n,e))return o[e]=4,n[e];Fi&&(o[e]=0)}}const u=Ur[e];let d,h;if(u)return e==="$attrs"&&Ne(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Z&&q(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==Z&&q(i,e))i[e]=n;else if(r!==Z&&q(r,e))r[e]=n;else if(q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Z&&q(t,o)||e!==Z&&q(e,o)||(a=s[0])&&q(a,o)||q(r,o)||q(Ur,o)||q(i.config.globalProperties,o)}},Yu=Ko();let Qu=0;function Xu(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Yu,s={uid:Qu++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,i),emitsOptions:Io(r,i),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=su.bind(null,s),t.ce&&t.ce(s),s}let _e=null;const Zu=()=>_e||$e,cn=t=>{_e=t,t.scope.on()},$t=()=>{_e&&_e.scope.off(),_e=null};function Zo(t){return t.vnode.shapeFlag&4}let jn=!1;function ef(t,e=!1){jn=e;const{props:n,children:r}=t.vnode,i=Zo(t);Pu(t,n,i,e),xu(t,r);const s=i?tf(t,e):void 0;return jn=!1,s}function tf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=co(new Proxy(t.ctx,Ju));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?rf(t):null;cn(t),nn();const s=ht(r,t,0,[t.props,i]);if(kt(),$t(),js(s)){if(s.then($t,$t),e)return s.then(o=>{ea(t,o,e)}).catch(o=>{Sr(o,t,0)});t.asyncDep=s}else ea(t,s,e)}else na(t,e)}function ea(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=po(e)),na(t,n)}let ta;function na(t,e,n){const r=t.type;if(!t.render){if(!e&&ta&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ye(ye({isCustomElement:s,delimiters:a},o),l);r.render=ta(i,c)}}t.render=r.render||He}cn(t),nn(),Su(t),kt(),$t()}function nf(t){return new Proxy(t.attrs,{get(e,n){return Ne(t,"get","$attrs"),e[n]}})}function rf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=nf(t))},slots:t.slots,emit:t.emit,expose:e}}function Ji(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(po(co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ur)return Ur[n](t)}}))}function sf(t){return B(t)&&t.displayName||t.name}function of(t){return B(t)&&"__vccOpts"in t}const ve=(t,e)=>Zc(t,e,jn);function $r(t,e,n){const r=arguments.length;return r===2?he(e)&&!U(e)?zi(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zi(n)&&(n=[n]),we(t,e,n))}const af="3.2.29",lf="http://www.w3.org/2000/svg",Ft=typeof document!="undefined"?document:null,ra=Ft&&Ft.createElement("template"),cf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ft.createElementNS(lf,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ra.innerHTML=r?`<svg>${t}</svg>`:t;const a=ra.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ff(t,e,n){const r=t.style,i=be(n);if(n&&!i){for(const s in n)Yi(r,s,n[s]);if(e&&!be(e))for(const s in e)n[s]==null&&Yi(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ia=/\s*!important$/;function Yi(t,e,n){if(U(n))n.forEach(r=>Yi(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=df(t,e);ia.test(n)?t.setProperty(Zt(r),n.replace(ia,""),"important"):t[r]=n}}const sa=["Webkit","Moz","ms"],Qi={};function df(t,e){const n=Qi[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return Qi[e]=r;r=mr(r);for(let i=0;i<sa.length;i++){const s=sa[i]+r;if(s in t)return Qi[e]=s}return e}const oa="http://www.w3.org/1999/xlink";function hf(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oa,e.slice(6,e.length)):t.setAttributeNS(oa,e,n);else{const s=cc(e);n==null||s&&!Us(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function pf(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Us(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Fr=Date.now,aa=!1;if(typeof window!="undefined"){Fr()>document.createEvent("Event").timeStamp&&(Fr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);aa=!!(t&&Number(t[1])<=53)}let Xi=0;const mf=Promise.resolve(),gf=()=>{Xi=0},vf=()=>Xi||(mf.then(gf),Xi=Fr());function un(t,e,n,r){t.addEventListener(e,n,r)}function _f(t,e,n,r){t.removeEventListener(e,n,r)}function yf(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=bf(e);if(r){const c=s[e]=If(r,i);un(t,a,c,l)}else o&&(_f(t,a,o,l),s[e]=void 0)}}const la=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(la.test(t)){e={};let n;for(;n=t.match(la);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Zt(t.slice(2)),e]}function If(t,e){const n=r=>{const i=r.timeStamp||Fr();(aa||i>=n.attached-1)&&Ue(Ef(r,n.value),e,5,[r])};return n.value=t,n.attached=vf(),n}function Ef(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ca=/^on[a-z]/,wf=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?uf(t,r,i):e==="style"?ff(t,n,r):fr(e)?ui(e)||yf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tf(t,e,r,i))?pf(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hf(t,e,r,i))};function Tf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ca.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ca.test(e)&&be(n)?!1:e in t}const vt="transition",Bn="animation",ua=(t,{slots:e})=>$r(So,Cf(t),e);ua.displayName="Transition";const fa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ua.props=ye({},So.props,fa);const jt=(t,e=[])=>{U(t)?t.forEach(n=>n(...e)):t&&t(...e)},da=t=>t?U(t)?t.some(e=>e.length>1):t.length>1:!1;function Cf(t){const e={};for(const N in t)N in fa||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,v=Sf(i),A=v&&v[0],C=v&&v[1],{onBeforeEnter:O,onEnter:L,onEnterCancelled:H,onLeave:V,onLeaveCancelled:te,onBeforeAppear:ae=O,onAppear:W=L,onAppearCancelled:le=H}=e,J=(N,ue,Oe)=>{fn(N,ue?u:a),fn(N,ue?c:o),Oe&&Oe()},me=(N,ue)=>{fn(N,m),fn(N,h),ue&&ue()},ge=N=>(ue,Oe)=>{const Ze=N?W:L,fe=()=>J(ue,N,Oe);jt(Ze,[ue,fe]),ha(()=>{fn(ue,N?l:s),_t(ue,N?u:a),da(Ze)||pa(ue,r,A,fe)})};return ye(e,{onBeforeEnter(N){jt(O,[N]),_t(N,s),_t(N,o)},onBeforeAppear(N){jt(ae,[N]),_t(N,l),_t(N,c)},onEnter:ge(!1),onAppear:ge(!0),onLeave(N,ue){const Oe=()=>me(N,ue);_t(N,d),Rf(),_t(N,h),ha(()=>{fn(N,d),_t(N,m),da(V)||pa(N,r,C,Oe)}),jt(V,[N,Oe])},onEnterCancelled(N){J(N,!1),jt(H,[N])},onAppearCancelled(N){J(N,!0),jt(le,[N])},onLeaveCancelled(N){me(N),jt(te,[N])}})}function Sf(t){if(t==null)return null;if(he(t))return[Zi(t.enter),Zi(t.leave)];{const e=Zi(t);return[e,e]}}function Zi(t){return _r(t)}function _t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ha(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Of=0;function pa(t,e,n,r){const i=t._endId=++Of,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Af(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Af(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),i=r(vt+"Delay"),s=r(vt+"Duration"),o=ma(i,s),a=r(Bn+"Delay"),l=r(Bn+"Duration"),c=ma(a,l);let u=null,d=0,h=0;e===vt?o>0&&(u=vt,d=o,h=s.length):e===Bn?c>0&&(u=Bn,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?vt:Bn:null,h=u?u===vt?s.length:l.length:0);const m=u===vt&&/\b(transform|all)(,|$)/.test(n[vt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:m}}function ma(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ga(n)+ga(t[r])))}function ga(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Rf(){return document.body.offsetHeight}const va=t=>{const e=t.props["onUpdate:modelValue"];return U(e)?n=>gr(e,n):e};function kf(t){t.target.composing=!0}function _a(t){const e=t.target;e.composing&&(e.composing=!1,Pf(e,"input"))}function Pf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const yg={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=va(i);const s=r||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=_r(a)),t._assign(a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",kf),un(t,"compositionend",_a),un(t,"change",_a))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=va(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&_r(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Nf=["ctrl","shift","alt","meta"],Mf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nf.some(n=>t[`${n}Key`]&&!e.includes(n))},bg=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Mf[e[i]];if(s&&s(n,e))return}return t(n,...r)},xf=ye({patchProp:wf},cf);let ya;function Df(){return ya||(ya=$u(xf))}const Ig=(...t)=>{const e=Df().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Lf(r);if(!i)return;const s=e._component;!B(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Lf(t){return be(t)?document.querySelector(t):t}function Uf(){return ba().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ba(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const $f=typeof Proxy=="function",Ff="devtools-plugin:setup",jf="plugin:settings:set";class Bf{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o}},n&&n.on(jf,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Hf(t,e){const n=ba(),r=Uf(),i=$f&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(Ff,t,e);else{const s=i?new Bf(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Ia=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",dn=t=>Ia?Symbol(t):"_vr_"+t,Vf=dn("rvlm"),Ea=dn("rvd"),es=dn("r"),wa=dn("rl"),ts=dn("rvl"),hn=typeof window!="undefined";function Wf(t){return t.__esModule||Ia&&t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function ns(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const Hn=()=>{},Kf=/\/$/,zf=t=>t.replace(Kf,"");function rs(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Yf(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function qf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gf(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&pn(e.matched[r],n.matched[i])&&Ca(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ca(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jf(t[n],e[n]))return!1;return!0}function Jf(t,e){return Array.isArray(t)?Sa(t,e):Array.isArray(e)?Sa(e,t):t===e}function Sa(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Yf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wn||(Wn={}));function Qf(t){if(!t)if(hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zf(t)}const Xf=/^[^#]+#/;function Zf(t,e){return t.replace(Xf,"#")+e}function ed(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jr=()=>({left:window.pageXOffset,top:window.pageYOffset});function td(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=ed(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Oa(t,e){return(history.state?history.state.position-e:-1)+t}const is=new Map;function nd(t,e){is.set(t,e)}function rd(t){const e=is.get(t);return is.delete(t),e}let id=()=>location.protocol+"//"+location.host;function Aa(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Ta(l,"")}return Ta(n,t)+r+i}function sd(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const m=Aa(t,location),v=n.value,A=e.value;let C=0;if(h){if(n.value=m,e.value=h,o&&o===v){o=null;return}C=A?h.position-A.position:0}else r(m);i.forEach(O=>{O(n.value,v,{delta:C,type:Vn.pop,direction:C?C>0?Wn.forward:Wn.back:Wn.unknown})})};function l(){o=n.value}function c(h){i.push(h);const m=()=>{const v=i.indexOf(h);v>-1&&i.splice(v,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(ee({},h.state,{scroll:jr()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Ra(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jr():null}}function od(t){const{history:e,location:n}=window,r={value:Aa(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:id()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=ee({},e.state,Ra(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=ee({},i.value,e.state,{forward:l,scroll:jr()});s(u.current,u,!0);const d=ee({},Ra(r.value,l,null),{position:u.position+1},c);s(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Eg(t){t=Qf(t);const e=od(t),n=sd(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ee({location:"",base:t,go:r,createHref:Zf.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ad(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pa=dn("nf");var Na;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Na||(Na={}));function mn(t,e){return ee(new Error,{type:t,[Pa]:!0},e)}function Bt(t,e){return t instanceof Error&&Pa in t&&(e==null||!!(t.type&e))}const Ma="[^/]+?",ld={sensitive:!1,strict:!1,start:!0,end:!0},cd=/[.+*?^${}()[\]/\\]/g;function ud(t,e){const n=ee({},ld,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(cd,"\\$&"),m+=40;else if(h.type===1){const{value:v,repeatable:A,optional:C,regexp:O}=h;s.push({name:v,repeatable:A,optional:C});const L=O||Ma;if(L!==Ma){m+=10;try{new RegExp(`(${L})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+V.message)}}let H=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(H=C&&c.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),i+=H,m+=20,C&&(m+=-8),A&&(m+=-20),L===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",v=s[h-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:A,optional:C}=m,O=v in c?c[v]:"";if(Array.isArray(O)&&!A)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(O)?O.join("/"):O;if(!L)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=L}}return u}return{re:o,score:r,keys:s,parse:a,stringify:l}}function fd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dd(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=fd(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const hd={type:0,value:""},pd=/[a-zA-Z0-9_]/;function md(t){if(!t)return[[]];if(t==="/")return[[hd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:pd.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function gd(t,e,n){const r=ud(md(t.path),n),i=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vd(t,e){const n=[],r=new Map;e=Da({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,d,h){const m=!h,v=yd(u);v.aliasOf=h&&h.record;const A=Da(e,u),C=[v];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of H)C.push(ee({},v,{components:h?h.record.components:v.components,path:V,aliasOf:h?h.record:v}))}let O,L;for(const H of C){const{path:V}=H;if(d&&V[0]!=="/"){const te=d.record.path,ae=te[te.length-1]==="/"?"":"/";H.path=d.record.path+(V&&ae+V)}if(O=gd(H,d,A),h?h.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),m&&u.name&&!xa(O)&&o(u.name)),"children"in v){const te=v.children;for(let ae=0;ae<te.length;ae++)s(te[ae],O,h&&h.children[ae])}h=h||O,l(O)}return L?()=>{o(L)}:Hn}function o(u){if(ka(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&dd(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!xa(u)&&r.set(u.record.name,u)}function c(u,d){let h,m={},v,A;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw mn(1,{location:u});A=h.record.name,m=ee(_d(d.params,h.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),v=h.stringify(m)}else if("path"in u)v=u.path,h=n.find(L=>L.re.test(v)),h&&(m=h.parse(v),A=h.record.name);else{if(h=d.name?r.get(d.name):n.find(L=>L.re.test(d.path)),!h)throw mn(1,{location:u,currentLocation:d});A=h.record.name,m=ee({},d.params,u.params),v=h.stringify(m)}const C=[];let O=h;for(;O;)C.unshift(O.record),O=O.parent;return{name:A,path:v,params:m,matched:C,meta:Id(C)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _d(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function bd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function xa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Id(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Da(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const La=/#/g,Ed=/&/g,wd=/\//g,Td=/=/g,Cd=/\?/g,Ua=/\+/g,Sd=/%5B/g,Od=/%5D/g,$a=/%5E/g,Ad=/%60/g,Fa=/%7B/g,Rd=/%7C/g,ja=/%7D/g,kd=/%20/g;function ss(t){return encodeURI(""+t).replace(Rd,"|").replace(Sd,"[").replace(Od,"]")}function Pd(t){return ss(t).replace(Fa,"{").replace(ja,"}").replace($a,"^")}function os(t){return ss(t).replace(Ua,"%2B").replace(kd,"+").replace(La,"%23").replace(Ed,"%26").replace(Ad,"`").replace(Fa,"{").replace(ja,"}").replace($a,"^")}function Nd(t){return os(t).replace(Td,"%3D")}function Md(t){return ss(t).replace(La,"%23").replace(Cd,"%3F")}function xd(t){return t==null?"":Md(t).replace(wd,"%2F")}function Br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ua," "),o=s.indexOf("="),a=Br(o<0?s:s.slice(0,o)),l=o<0?null:Br(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ba(t){let e="";for(let n in t){const r=t[n];if(n=Nd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&os(s)):[r&&os(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ld(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Kn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function bt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(mn(4,{from:n,to:e})):d instanceof Error?a(d):ad(d)?a(mn(2,{from:e,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function as(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Ud(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bt(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Wf(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&bt(h,n,r,s,o)()}))}}return i}function Ud(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ha(t){const e=xe(es),n=xe(wa),r=ve(()=>e.resolve(Nn(t.to))),i=ve(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(pn.bind(null,u));if(h>-1)return h;const m=Va(l[c-2]);return c>1&&Va(u)===m&&d[d.length-1].path!==m?d.findIndex(pn.bind(null,l[c-2])):h}),s=ve(()=>i.value>-1&&Bd(n.params,r.value.params)),o=ve(()=>i.value>-1&&i.value===n.matched.length-1&&Ca(n.params,r.value.params));function a(l={}){return jd(l)?e[Nn(t.replace)?"replace":"push"](Nn(t.to)).catch(Hn):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const $d=it({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(t,{slots:e}){const n=rn(Ha(t)),{options:r}=xe(es),i=ve(()=>({[Wa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:$r("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Fd=$d;function jd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bd(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Va(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wa=(t,e,n)=>t!=null?t:e!=null?e:n,Hd=it({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=xe(ts),i=ve(()=>t.route||r.value),s=xe(Ea,0),o=ve(()=>i.value.matched[s]);mt(Ea,s+1),mt(Vf,o),mt(ts,i);const a=Ae();return ln(()=>[a.value,o.value,t.name],([l,c,u],[d,h,m])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!pn(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Ka(n.default,{Component:u,route:l});const h=c.props[t.name],m=h?h===!0?l.params:typeof h=="function"?h(l):h:null,A=$r(u,ee({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Ka(n.default,{Component:A,route:l})||A}}});function Ka(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vd=Hd;function wg(t){const e=vd(t.routes,t),n=t.parseQuery||Dd,r=t.stringifyQuery||Ba,i=t.history,s=Kn(),o=Kn(),a=Kn(),l=Jc(yt);let c=yt;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ns.bind(null,_=>""+_),d=ns.bind(null,xd),h=ns.bind(null,Br);function m(_,P){let S,M;return ka(_)?(S=e.getRecordMatcher(_),M=P):M=_,e.addRoute(M,S)}function v(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function A(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function O(_,P){if(P=ee({},P||l.value),typeof _=="string"){const j=rs(n,_,P.path),f=e.resolve({path:j.path},P),p=i.createHref(j.fullPath);return ee(j,f,{params:h(f.params),hash:Br(j.hash),redirectedFrom:void 0,href:p})}let S;if("path"in _)S=ee({},_,{path:rs(n,_.path,P.path).path});else{const j=ee({},_.params);for(const f in j)j[f]==null&&delete j[f];S=ee({},_,{params:d(_.params)}),P.params=d(P.params)}const M=e.resolve(S,P),Q=_.hash||"";M.params=u(h(M.params));const re=qf(r,ee({},_,{hash:Pd(Q),path:M.path})),K=i.createHref(re);return ee({fullPath:re,hash:Q,query:r===Ba?Ld(_.query):_.query||{}},M,{redirectedFrom:void 0,href:K})}function L(_){return typeof _=="string"?rs(n,_,l.value.path):ee({},_)}function H(_,P){if(c!==_)return mn(8,{from:P,to:_})}function V(_){return W(_)}function te(_){return V(ee(L(_),{replace:!0}))}function ae(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let M=typeof S=="function"?S(_):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=L(M):{path:M},M.params={}),ee({query:_.query,hash:_.hash,params:_.params},M)}}function W(_,P){const S=c=O(_),M=l.value,Q=_.state,re=_.force,K=_.replace===!0,j=ae(S);if(j)return W(ee(L(j),{state:Q,force:re,replace:K}),P||S);const f=S;f.redirectedFrom=P;let p;return!re&&Gf(r,M,S)&&(p=mn(16,{to:f,from:M}),Jt(M,M,!0,!1)),(p?Promise.resolve(p):J(f,M)).catch(g=>Bt(g)?g:ne(g,f,M)).then(g=>{if(g){if(Bt(g,2))return W(ee(L(g.to),{state:Q,force:re,replace:K}),P||f)}else g=ge(f,M,!0,K,Q);return me(f,M,g),g})}function le(_,P){const S=H(_,P);return S?Promise.reject(S):Promise.resolve()}function J(_,P){let S;const[M,Q,re]=Wd(_,P);S=as(M.reverse(),"beforeRouteLeave",_,P);for(const j of M)j.leaveGuards.forEach(f=>{S.push(bt(f,_,P))});const K=le.bind(null,_,P);return S.push(K),gn(S).then(()=>{S=[];for(const j of s.list())S.push(bt(j,_,P));return S.push(K),gn(S)}).then(()=>{S=as(Q,"beforeRouteUpdate",_,P);for(const j of Q)j.updateGuards.forEach(f=>{S.push(bt(f,_,P))});return S.push(K),gn(S)}).then(()=>{S=[];for(const j of _.matched)if(j.beforeEnter&&!P.matched.includes(j))if(Array.isArray(j.beforeEnter))for(const f of j.beforeEnter)S.push(bt(f,_,P));else S.push(bt(j.beforeEnter,_,P));return S.push(K),gn(S)}).then(()=>(_.matched.forEach(j=>j.enterCallbacks={}),S=as(re,"beforeRouteEnter",_,P),S.push(K),gn(S))).then(()=>{S=[];for(const j of o.list())S.push(bt(j,_,P));return S.push(K),gn(S)}).catch(j=>Bt(j,8)?j:Promise.reject(j))}function me(_,P,S){for(const M of a.list())M(_,P,S)}function ge(_,P,S,M,Q){const re=H(_,P);if(re)return re;const K=P===yt,j=hn?history.state:{};S&&(M||K?i.replace(_.fullPath,ee({scroll:K&&j&&j.scroll},Q)):i.push(_.fullPath,Q)),l.value=_,Jt(_,P,S,K),De()}let N;function ue(){N=i.listen((_,P,S)=>{const M=O(_),Q=ae(M);if(Q){W(ee(Q,{replace:!0}),M).catch(Hn);return}c=M;const re=l.value;hn&&nd(Oa(re.fullPath,S.delta),jr()),J(M,re).catch(K=>Bt(K,4|8)?K:Bt(K,2)?(W(K.to,M).then(j=>{Bt(j,4|16)&&!S.delta&&S.type===Vn.pop&&i.go(-1,!1)}).catch(Hn),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ne(K,M,re))).then(K=>{K=K||ge(M,re,!1),K&&(S.delta?i.go(-S.delta,!1):S.type===Vn.pop&&Bt(K,4|16)&&i.go(-1,!1)),me(M,re,K)}).catch(Hn)})}let Oe=Kn(),Ze=Kn(),fe;function ne(_,P,S){De(_);const M=Ze.list();return M.length?M.forEach(Q=>Q(_,P,S)):console.error(_),Promise.reject(_)}function Y(){return fe&&l.value!==yt?Promise.resolve():new Promise((_,P)=>{Oe.add([_,P])})}function De(_){fe||(fe=!0,ue(),Oe.list().forEach(([P,S])=>_?S(_):P()),Oe.reset())}function Jt(_,P,S,M){const{scrollBehavior:Q}=t;if(!hn||!Q)return Promise.resolve();const re=!S&&rd(Oa(_.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return rt().then(()=>Q(_,P,re)).then(K=>K&&td(K)).catch(K=>ne(K,_,P))}const et=_=>i.go(_);let We;const Le=new Set;return{currentRoute:l,addRoute:m,removeRoute:v,hasRoute:C,getRoutes:A,resolve:O,options:t,push:V,replace:te,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ze.add,isReady:Y,install(_){const P=this;_.component("RouterLink",Fd),_.component("RouterView",Vd),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Nn(l)}),hn&&!We&&l.value===yt&&(We=!0,V(i.location).catch(Q=>{}));const S={};for(const Q in yt)S[Q]=ve(()=>l.value[Q]);_.provide(es,P),_.provide(wa,rn(S)),_.provide(ts,l);const M=_.unmount;Le.add(_),_.unmount=function(){Le.delete(_),Le.size<1&&(c=yt,N&&N(),l.value=yt,We=!1,fe=!1),M()}}}}function gn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Wd(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>pn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pn(c,l))||i.push(l))}return[n,r,i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gd=function(t){try{return qd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Qd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="FirebaseError";class vn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=eh,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?th(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function th(t,e){return t.replace(nh,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nh=/\{\$([^}]+)}/g;function rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(za(s)&&za(o)){if(!Hr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ih(t,e){const n=new sh(t,e);return n.subscribe.bind(n)}class sh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ch(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lh(t){return t===Ht?void 0:t}function ch(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ah(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const fh={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},dh=ie.INFO,hh={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},ph=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qa{constructor(e){this.name=e,this._logLevel=dh,this._logHandler=ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cs="@firebase/app",Ga="0.7.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new qa("@firebase/app"),vh="@firebase/app-compat",_h="@firebase/analytics-compat",yh="@firebase/analytics",bh="@firebase/app-check-compat",Ih="@firebase/app-check",Eh="@firebase/auth",wh="@firebase/auth-compat",Th="@firebase/database",Ch="@firebase/database-compat",Sh="@firebase/functions",Oh="@firebase/functions-compat",Ah="@firebase/installations",Rh="@firebase/installations-compat",kh="@firebase/messaging",Ph="@firebase/messaging-compat",Nh="@firebase/performance",Mh="@firebase/performance-compat",xh="@firebase/remote-config",Dh="@firebase/remote-config-compat",Lh="@firebase/storage",Uh="@firebase/storage-compat",$h="@firebase/firestore",Fh="@firebase/firestore-compat",jh="firebase",Bh="9.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",Hh={[cs]:"fire-core",[vh]:"fire-core-compat",[yh]:"fire-analytics",[_h]:"fire-analytics-compat",[Ih]:"fire-app-check",[bh]:"fire-app-check-compat",[Eh]:"fire-auth",[wh]:"fire-auth-compat",[Th]:"fire-rtdb",[Ch]:"fire-rtdb-compat",[Sh]:"fire-fn",[Oh]:"fire-fn-compat",[Ah]:"fire-iid",[Rh]:"fire-iid-compat",[kh]:"fire-fcm",[Ph]:"fire-fcm-compat",[Nh]:"fire-perf",[Mh]:"fire-perf-compat",[xh]:"fire-rc",[Dh]:"fire-rc-compat",[Lh]:"fire-gcs",[Uh]:"fire-gcs-compat",[$h]:"fire-fst",[Fh]:"fire-fst-compat","fire-js":"fire-js",[jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Map,fs=new Map;function Vh(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(fs.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;fs.set(e,t);for(const n of Vr.values())Vh(n,t);return!0}function Ya(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Kr=new zn("app","Firebase",Wh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=Bh;function Tg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Kr.create("bad-app-name",{appName:String(r)});const i=Vr.get(r);if(i){if(Hr(t,i.options)&&Hr(n,i.config))return i;throw Kr.create("duplicate-app",{appName:r})}const s=new uh(r);for(const a of fs.values())s.addComponent(a);const o=new Kh(t,n,s);return Vr.set(r,o),o}function zh(t=Ja){const e=Vr.get(t);if(!e)throw Kr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=Hh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}Wr(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){Wr(new Yn("platform-logger",e=>new mh(e),"PRIVATE")),yn(cs,Ga,t),yn(cs,Ga,"esm2017"),yn("fire-js","")}qh("");var Gh="firebase",Jh="9.6.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(Gh,Jh,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ds(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Qa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yh=Qa,Xa=new zn("auth","Firebase",Qa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new qa("@firebase/auth");function qr(t,...e){Za.logLevel<=ie.ERROR&&Za.error(`Auth (${zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw hs(t,...e)}function Qe(t,...e){return hs(t,...e)}function el(t,e,n){const r=Object.assign(Object.assign({},Yh()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function Qh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(t,"argument-error"),el(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xa.create(t,...e)}function $(t,e,...n){if(!t)throw hs(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qr(e),new Error(e)}function at(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Map;function lt(t){at(t instanceof Function,"Expected a class definition");let e=tl.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){const n=Ya(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hr(s,e!=null?e:{}))return i;je(i,"already-initialized")}return n.initialize({options:e})}function Zh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ep(){return nl()==="http:"||nl()==="https:"}function nl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ep()||Qd()||"connection"in navigator)?navigator.onLine:!0}function np(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Xd()}get(){return tp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Qn(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return il(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rl.fetch()(sl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function il(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rp),e);try{const i=new sp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gs(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw el(t,u,c);je(t,u)}}catch(i){if(i instanceof vn)throw i;je(t,"network-request-failed")}}async function er(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&je(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sl(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ms(t.config,i):`${t.config.apiScheme}://${i}`}class sp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),ip.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function ap(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lp(t,e=!1){const n=_n(t),r=await n.getIdToken(e),i=_s(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tr(vs(i.auth_time)),issuedAtTime:tr(vs(i.iat)),expirationTime:tr(vs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vs(t){return Number(t)*1e3}function _s(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gd(n);return i?JSON.parse(i):(qr("Failed to decode base64 JWT payload"),null)}catch(i){return qr("Caught error parsing JWT payload as JSON",i),null}}function cp(t){const e=_s(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&up(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function up({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tr(this.lastLoginAt),this.creationTime=tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nr(t,ap(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?pp(s.providerUserInfo):[],a=hp(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function dp(t){const e=_n(t);await Gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hp(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pp(t){return t.map(e=>{var{providerId:n}=e,r=ds(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e){const n=await il(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sl(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mp(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new rr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ds(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ol(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lp(this,e)}reload(){return dp(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,op(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:V,isAnonymous:te,providerData:ae,stsTokenManager:W}=n;$(H&&W,e,"internal-error");const le=rr.fromJSON(this.name,W);$(typeof H=="string",e,"internal-error"),It(d,e.name),It(h,e.name),$(typeof V=="boolean",e,"internal-error"),$(typeof te=="boolean",e,"internal-error"),It(m,e.name),It(v,e.name),It(A,e.name),It(C,e.name),It(O,e.name),It(L,e.name);const J=new Vt({uid:H,auth:e,email:h,emailVerified:V,displayName:d,isAnonymous:te,photoURL:v,phoneNumber:m,tenantId:A,stsTokenManager:le,createdAt:O,lastLoginAt:L});return ae&&Array.isArray(ae)&&(J.providerData=ae.map(me=>Object.assign({},me))),C&&(J._redirectEventId=C),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new rr;i.updateFromServerResponse(n);const s=new Vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gr(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}al.type="NONE";const ll=al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e,n){return`firebase:${t}:${e}:${n}`}class bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bn(lt(ll),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||lt(ll);const o=Jr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Vt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new bn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pl(e))return"Blackberry";if(ml(e))return"Webos";if(ys(e))return"Safari";if((e.includes("chrome/")||fl(e))&&!e.includes("edge/"))return"Chrome";if(hl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ul(t=Te()){return/firefox\//i.test(t)}function ys(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fl(t=Te()){return/crios\//i.test(t)}function dl(t=Te()){return/iemobile/i.test(t)}function hl(t=Te()){return/android/i.test(t)}function pl(t=Te()){return/blackberry/i.test(t)}function ml(t=Te()){return/webos/i.test(t)}function Yr(t=Te()){return/iphone|ipad|ipod/i.test(t)}function gp(t=Te()){var e;return Yr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function vp(){return Zd()&&document.documentMode===10}function gl(t=Te()){return Yr(t)||hl(t)||ml(t)||pl(t)||/windows phone/i.test(t)||dl(t)}function _p(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e=[]){let n;switch(t){case"Browser":n=cl(Te());break;case"Worker":n=`${cl(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _l(this),this.idTokenSubscription=new _l(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_n(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function ir(t){return _n(t)}class _l{constructor(e){this.auth=e,this.observer=null,this.addObserver=ih(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function bp(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function wp(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends bs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ip(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ep(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wp(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="http://localhost";class Wt extends bs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ds(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:Tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sp(t){const e=Gn(Jn(t)).link,n=e?Gn(Jn(e)).deep_link_id:null,r=Gn(Jn(t)).deep_link_id;return(r?Gn(Jn(r)).link:null)||r||n||e||t}class Is{constructor(e){var n,r,i,s,o,a;const l=Gn(Jn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Cp((i=l.mode)!==null&&i!==void 0?i:null);$(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sp(e);try{return new Is(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.providerId=En.PROVIDER_ID}static credential(e,n){return sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Is.parseLink(n);return $(r,"argument-error"),sr._fromEmailAndCode(e,r.code,r.tenantId)}}En.PROVIDER_ID="password";En.EMAIL_PASSWORD_SIGN_IN_METHOD="password";En.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Es{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends or{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends or{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends or{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends or{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t,e){return er(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vt._fromIdTokenResponse(e,r,i),o=yl(r);return new Kt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yl(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends vn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qr(e,n,r,i)}}function bl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,s,e,r):s})}async function Ap(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await nr(t,bl(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=_s(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Kt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&je(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t,e,n=!1){const r="signIn",i=await bl(t,r,e),s=await Kt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kp(t,e){return Il(ir(t),e)}async function Cg(t,e,n){const r=ir(t),i=await Op(r,{returnSecureToken:!0,email:e,password:n}),s=await Kt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Sg(t,e,n){return kp(_n(t),En.credential(e,n))}function Og(t){return _n(t).signOut()}const Xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){const t=Te();return ys(t)||Yr(t)}const Np=1e3,Mp=10;class wl extends El{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pp()&&_p(),this.fallbackToPolling=gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mp):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Np)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wl.type="LOCAL";const xp=wl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends El{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tl.type="SESSION";const Cl=Tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Dp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ws("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function Up(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return typeof Xe().WorkerGlobalScope!="undefined"&&typeof Xe().importScripts=="function"}async function $p(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jp(){return Sl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firebaseLocalStorageDb",Bp=1,ei="firebaseLocalStorage",Al="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ti(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function Hp(){const t=indexedDB.deleteDatabase(Ol);return new ar(t).toPromise()}function Ts(){const t=indexedDB.open(Ol,Bp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ei,{keyPath:Al})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await Hp(),e(await Ts()))})})}async function Rl(t,e,n){const r=ti(t,!0).put({[Al]:e,value:n});return new ar(r).toPromise()}async function Vp(t,e){const n=ti(t,!1).get(e),r=await new ar(n).toPromise();return r===void 0?null:r.value}function kl(t,e){const n=ti(t,!0).delete(e);return new ar(n).toPromise()}const Wp=800,Kp=3;class Pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ts(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(jp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Lp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ts();return await Rl(e,Xr,"1"),await kl(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ti(i,!1).getAll();return new ar(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pl.type="LOCAL";const zp=Pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qp().appendChild(r)})}function Jp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){return e?lt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends bs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yp(t){return Il(t.auth,new Cs(t),t.bypassAuthState)}function Qp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Rp(n,new Cs(t),t.bypassAuthState)}async function Xp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ap(n,new Cs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yp;case"linkViaPopup":case"linkViaRedirect":return Xp;case"reauthViaPopup":case"reauthViaRedirect":return Qp;default:je(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Qn(2e3,1e4);async function Ag(t,e,n){const r=ir(t);Qh(t,e,Es);const i=Nl(r,n);return new zt(r,"signInViaPopup",e,i).executeNotNull()}class zt extends Ml{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zp.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="pendingRedirect",Ss=new Map;class tm extends Ml{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ss.get(this.auth._key());if(!e){try{const r=await nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ss.set(this.auth._key(),e)}return this.bypassAuthState||Ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nm(t,e){const n=im(e),r=rm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rm(t){return lt(t._redirectPersistence)}function im(t){return Jr(em,t.config.apiKey,t.name)}async function sm(t,e,n=!1){const r=ir(t),i=Nl(r,e),o=await new tm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=10*60*1e3;class am{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=om&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fm=/^https?/;async function dm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cm(t);for(const n of e)try{if(hm(n))return}catch{}je(t,"unauthorized-domain")}function hm(t){const e=ps(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fm.test(n))return!1;if(um.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new Qn(3e4,6e4);function Ll(){const t=Xe().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mm(t){return new Promise((e,n)=>{var r,i,s;function o(){Ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ll(),n(Qe(t,"network-request-failed"))},timeout:pm.get()})}if((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Xe().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Jp("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ni=null,e})}let ni=null;function gm(t){return ni=ni||mm(t),ni}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Qn(5e3,15e3),_m="__/auth/iframe",ym="emulator/auth/iframe",bm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Em(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ms(e,ym):`https://${t.config.authDomain}/${_m}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=Im.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qn(r).slice(1)}`}async function wm(t){const e=await gm(t),n=Xe().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Em(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},vm.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cm=500,Sm=600,Om="_blank",Am="http://localhost";class Ul{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rm(t,e,n,r=Cm,i=Sm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tm),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Te().toLowerCase();n&&(a=fl(c)?Om:n),ul(c)&&(e=e||Am,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(gp(c)&&a!=="_self")return km(e||"",a),new Ul(null);const d=window.open(e||"",a,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Ul(d)}function km(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="__/auth/handler",Nm="emulator/auth/handler";function $l(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof Es){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof or){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Mm(t)}?${qn(a).slice(1)}`}function Mm({config:t}){return t.emulator?ms(t,Nm):`https://${t.authDomain}/${Pm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cl,this._completeRedirectFn=sm}async _openPopup(e,n,r,i){var s;at((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$l(e,n,r,ps(),i);return Rm(e,o,ws())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Up($l(e,n,r,ps(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(at(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wm(e),r=new am(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Os,{type:Os},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Os];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gl()||ys()||Yr()}}const Dm=xm;var Fl="@firebase/auth",jl="0.19.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $m(t){Wr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),$(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vl(t)},l=new yp(o,a);return Zh(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new Yn("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new Lm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Fl,jl,Um(t)),yn(Fl,jl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t=zh()){const e=Ya(t,"auth");return e.isInitialized()?e.getImmediate():Xh(t,{popupRedirectResolver:Dm,persistence:[zp,xp,Cl]})}$m("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Bl="store";function kg(t){return t===void 0&&(t=null),xe(t!==null?t:Bl)}function wn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Fm(t){return t!==null&&typeof t=="object"}function jm(t){return t&&typeof t.then=="function"}function Bm(t,e){return function(){return t(e)}}function Hl(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Vl(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ri(t,n,[],t._modules.root,!0),As(t,n,e)}function As(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};wn(i,function(o,a){s[a]=Bm(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=rn({data:e}),t.strict&&zm(t),r&&n&&t._withCommit(function(){r.data=null})}function ri(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=Rs(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=Hm(t,o,n);r.forEachMutation(function(u,d){var h=o+d;Vm(t,h,u,c)}),r.forEachAction(function(u,d){var h=u.root?d:o+d,m=u.handler||u;Wm(t,h,m,c)}),r.forEachGetter(function(u,d){var h=o+d;Km(t,h,u,c)}),r.forEachChild(function(u,d){ri(t,e,n.concat(d),u,i)})}function Hm(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var l=ii(s,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:r?t.commit:function(s,o,a){var l=ii(s,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return Wl(t,e)}},state:{get:function(){return Rs(t.state,n)}}}),i}function Wl(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Vm(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function Wm(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return jm(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Km(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function zm(t){ln(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Rs(t,e){return e.reduce(function(n,r){return n[r]},t)}function ii(t,e,n){return Fm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var qm="vuex bindings",Kl="vuex:mutations",ks="vuex:actions",Tn="vuex",Gm=0;function Jm(t,e){Hf({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[qm]},function(n){n.addTimelineLayer({id:Kl,label:"Vuex Mutations",color:zl}),n.addTimelineLayer({id:ks,label:"Vuex Actions",color:zl}),n.addInspector({id:Tn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Tn)if(r.filter){var i=[];Yl(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Jl(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Tn){var i=r.nodeId;Wl(e,i),r.state=Xm(eg(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Tn){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Tn),n.sendInspectorState(Tn),n.addTimelineEvent({layerId:Kl,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=Gm++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:ks,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:ks,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var zl=8702998,Ym=6710886,Qm=16777215,ql={label:"namespaced",textColor:Qm,backgroundColor:Ym};function Gl(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Jl(t,e){return{id:e||"root",label:Gl(e),tags:t.namespaced?[ql]:[],children:Object.keys(t._children).map(function(n){return Jl(t._children[n],e+n+"/")})}}function Yl(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[ql]:[]}),Object.keys(e._children).forEach(function(i){Yl(t,e._children[i],n,r+i+"/")})}function Xm(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=Zm(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Gl(o):o,editable:!1,value:Ps(function(){return s[o]})}})}return i}function Zm(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=Ps(function(){return t[n]})}else e[n]=Ps(function(){return t[n]})}),e}function eg(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ps(t){try{return t()}catch(e){return e}}var Ve=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Ql={namespaced:{configurable:!0}};Ql.namespaced.get=function(){return!!this._rawModule.namespaced};Ve.prototype.addChild=function(e,n){this._children[e]=n};Ve.prototype.removeChild=function(e){delete this._children[e]};Ve.prototype.getChild=function(e){return this._children[e]};Ve.prototype.hasChild=function(e){return e in this._children};Ve.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ve.prototype.forEachChild=function(e){wn(this._children,e)};Ve.prototype.forEachGetter=function(e){this._rawModule.getters&&wn(this._rawModule.getters,e)};Ve.prototype.forEachAction=function(e){this._rawModule.actions&&wn(this._rawModule.actions,e)};Ve.prototype.forEachMutation=function(e){this._rawModule.mutations&&wn(this._rawModule.mutations,e)};Object.defineProperties(Ve.prototype,Ql);var qt=function(e){this.register([],e,!1)};qt.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};qt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};qt.prototype.update=function(e){Xl([],this.root,e)};qt.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new Ve(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&wn(n.modules,function(a,l){i.register(e.concat(l),a,r)})};qt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};qt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Xl(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Xl(t.concat(r),e.getChild(r),n.modules[r])}}function Pg(t){return new ke(t)}var ke=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new qt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,m){return l.call(o,h,m)},this.commit=function(h,m,v){return c.call(o,h,m,v)},this.strict=i;var u=this._modules.root.state;ri(this,u,[],this._modules.root),As(this,u),r.forEach(function(d){return d(n)})},Ns={state:{configurable:!0}};ke.prototype.install=function(e,n){e.provide(n||Bl,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Jm(e,this)};Ns.state.get=function(){return this._state.data};Ns.state.set=function(t){};ke.prototype.commit=function(e,n,r){var i=this,s=ii(e,n,r),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};ke.prototype.dispatch=function(e,n){var r=this,i=ii(e,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,h)})}catch{}d(h)})})}};ke.prototype.subscribe=function(e,n){return Hl(e,this._subscribers,n)};ke.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Hl(r,this._actionSubscribers,n)};ke.prototype.watch=function(e,n,r){var i=this;return ln(function(){return e(i.state,i.getters)},n,Object.assign({},r))};ke.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ke.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ri(this,this.state,e,this._modules.get(e),r.preserveState),As(this,this.state)};ke.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Rs(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Vl(this)};ke.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ke.prototype.hotUpdate=function(e){this._modules.update(e),Vl(this,!0)};ke.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ke.prototype,Ns);function ct(){return ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ct.apply(this,arguments)}function Ms(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tg(t,e){if(!!t){if(typeof t=="string")return Zl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zl(t,e)}}function Zl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ng(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=tg(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=t[Symbol.iterator](),n.next.bind(n)}function lr(t,e){if(t in e){for(var n=e[t],r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return typeof n=="function"?n.apply(void 0,i):n}var o=new Error('Tried to handle "'+t+'" but there is no handler defined. Only defined handlers are: '+Object.keys(e).map(function(a){return'"'+a+'"'}).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(o,lr),o}var ut;(function(t){t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static"})(ut||(ut={}));var Cn;(function(t){t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden"})(Cn||(Cn={}));function Gt(t){var e=t.visible,n=e===void 0?!0:e,r=t.features,i=r===void 0?ut.None:r,s=Ms(t,["visible","features"]);if(n||i&ut.Static&&s.props.static)return si(s);if(i&ut.RenderStrategy){var o,a,l=((o=s.props.unmount)!=null?o:!0)?Cn.Unmount:Cn.Hidden;return lr(l,(a={},a[Cn.Unmount]=function(){return null},a[Cn.Hidden]=function(){return si(ct({},s,{props:ct({},s.props,{hidden:!0,style:{display:"none"}})}))},a))}return si(s)}function si(t){var e=t.props,n=t.attrs,r=t.slots,i=t.slot,s=t.name,o=rg(e,["unmount","static"]),a=o.as,l=Ms(o,["as"]),c=r.default==null?void 0:r.default(i);if(a==="template"){if(Object.keys(l).length>0||Object.keys(n).length>0){var u=c!=null?c:[],d=u[0],h=u.slice(1);if(!ig(d)||h.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+s+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(n)).map(function(m){return"  - "+m}).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(function(m){return"  - "+m}).join(`
`)].join(`
`));return Ut(d,l)}return Array.isArray(c)&&c.length===1?c[0]:c}return $r(a,l,c)}function rg(t,e){e===void 0&&(e=[]);for(var n=Object.assign({},t),r=ng(e),i;!(i=r()).done;){var s=i.value;s in n&&delete n[s]}return n}function ig(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var ce;(function(t){t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab"})(ce||(ce={}));var sg=0;function og(){return++sg}function cr(){return og()}function ag(t,e,n){typeof window!="undefined"&&Un(function(r){window.addEventListener(t,e,n),r(function(){window.removeEventListener(t,e,n)})})}function de(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}var ec=Symbol("Context"),St;(function(t){t[t.Open=0]="Open",t[t.Closed=1]="Closed"})(St||(St={}));function tc(){return xe(ec,null)}function nc(t){mt(ec,t)}function rc(t,e){if(t)return t;var n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ic(t,e){var n=Ae(rc(t.value.type,t.value.as));return $n(function(){n.value=rc(t.value.type,t.value.as)}),Un(function(){var r;n.value||!de(e)||de(e)instanceof HTMLButtonElement&&!((r=de(e))==null?void 0:r.hasAttribute("type"))&&(n.value="button")}),n}var Ee;(function(t){t[t.Open=0]="Open",t[t.Closed=1]="Closed"})(Ee||(Ee={}));var sc=Symbol("DisclosureContext");function ur(t){var e=xe(sc,null);if(e===null){var n=new Error("<"+t+" /> is missing a parent <Disclosure /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,ur),n}return e}var oc=Symbol("DisclosurePanelContext");function lg(){return xe(oc,null)}var Ng=it({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup:function(e,n){var r=n.slots,i=n.attrs,s="headlessui-disclosure-button-"+cr(),o="headlessui-disclosure-panel-"+cr(),a=Ae(e.defaultOpen?Ee.Open:Ee.Closed),l=Ae(null),c=Ae(null),u={buttonId:s,panelId:o,disclosureState:a,panel:l,button:c,toggleDisclosure:function(){var h;a.value=lr(a.value,(h={},h[Ee.Open]=Ee.Closed,h[Ee.Closed]=Ee.Open,h))},closeDisclosure:function(){a.value!==Ee.Closed&&(a.value=Ee.Closed)},close:function(h){u.closeDisclosure();var m=function(){return h?h instanceof HTMLElement?h:h.value instanceof HTMLElement?de(h):de(u.button):de(u.button)}();m==null||m.focus()}};return mt(sc,u),nc(ve(function(){var d;return lr(a.value,(d={},d[Ee.Open]=St.Open,d[Ee.Closed]=St.Closed,d))})),function(){var d=Ms(e,["defaultOpen"]),h={open:a.value===Ee.Open,close:u.close};return Gt({props:d,slot:h,slots:r,attrs:i,name:"Disclosure"})}}}),Mg=it({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},render:function(){var e=ur("DisclosureButton"),n={open:e.disclosureState.value===Ee.Open},r=this.isWithinPanel?{ref:"el",type:this.type,onClick:this.handleClick,onKeydown:this.handleKeyDown}:{id:this.id,ref:"el",type:this.type,"aria-expanded":this.$props.disabled?void 0:e.disclosureState.value===Ee.Open,"aria-controls":de(e.panel)?e.panelId:void 0,disabled:this.$props.disabled?!0:void 0,onClick:this.handleClick,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp};return Gt({props:ct({},this.$props,r),slot:n,attrs:this.$attrs,slots:this.$slots,name:"DisclosureButton"})},setup:function(e,n){var r=n.attrs,i=ur("DisclosureButton"),s=lg(),o=s===null?!1:s===i.panelId,a=Ae(null);return o||Un(function(){i.button.value=a.value}),{isWithinPanel:o,id:i.buttonId,el:a,type:ic(ve(function(){return{as:e.as,type:r.type}}),a),handleClick:function(){if(!e.disabled)if(o){var c;i.toggleDisclosure(),(c=de(i.button))==null||c.focus()}else i.toggleDisclosure()},handleKeyDown:function(c){var u;if(!e.disabled)if(o)switch(c.key){case ce.Space:case ce.Enter:c.preventDefault(),c.stopPropagation(),i.toggleDisclosure(),(u=de(i.button))==null||u.focus();break}else switch(c.key){case ce.Space:case ce.Enter:c.preventDefault(),c.stopPropagation(),i.toggleDisclosure();break}},handleKeyUp:function(c){switch(c.key){case ce.Space:c.preventDefault();break}}}}}),xg=it({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e=ur("DisclosurePanel"),n={open:e.disclosureState.value===Ee.Open,close:e.close},r={id:this.id,ref:"el"};return Gt({props:ct({},this.$props,r),slot:n,attrs:this.$attrs,slots:this.$slots,features:ut.RenderStrategy|ut.Static,visible:this.visible,name:"DisclosurePanel"})},setup:function(){var e=ur("DisclosurePanel");mt(oc,e.panelId);var n=tc(),r=ve(function(){return n!==null?n.value===St.Open:e.disclosureState.value===Ee.Open});return{id:e.panelId,el:e.panel,visible:r}}});function cg(t){throw new Error("Unexpected object: "+t)}var pe;(function(t){t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing"})(pe||(pe={}));function ug(t,e){var n=e.resolveItems();if(n.length<=0)return null;var r=e.resolveActiveIndex(),i=r!=null?r:-1,s=function(){switch(t.focus){case pe.First:return n.findIndex(function(l){return!e.resolveDisabled(l)});case pe.Previous:{var o=n.slice().reverse().findIndex(function(l,c,u){return i!==-1&&u.length-c-1>=i?!1:!e.resolveDisabled(l)});return o===-1?o:n.length-1-o}case pe.Next:return n.findIndex(function(l,c){return c<=i?!1:!e.resolveDisabled(l)});case pe.Last:{var a=n.slice().reverse().findIndex(function(l){return!e.resolveDisabled(l)});return a===-1?a:n.length-1-a}case pe.Specific:return n.findIndex(function(l){return e.resolveId(l)===t.id});case pe.Nothing:return null;default:cg(t)}}();return s===-1?r:s}function fg(t){var e=t.container,n=t.accept,r=t.walk,i=t.enabled;Un(function(){var s=e.value;if(!!s&&!(i!==void 0&&!i.value))for(var o=Object.assign(function(l){return n(l)},{acceptNode:n}),a=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,o,!1);a.nextNode();)r(a.currentNode)})}var Ce;(function(t){t[t.Open=0]="Open",t[t.Closed=1]="Closed"})(Ce||(Ce={}));function dg(t){requestAnimationFrame(function(){return requestAnimationFrame(t)})}var ac=Symbol("MenuContext");function Sn(t){var e=xe(ac,null);if(e===null){var n=new Error("<"+t+" /> is missing a parent <Menu /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Sn),n}return e}var Dg=it({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup:function(e,n){var r=n.slots,i=n.attrs,s=Ae(Ce.Closed),o=Ae(null),a=Ae(null),l=Ae([]),c=Ae(""),u=Ae(null),d={menuState:s,buttonRef:o,itemsRef:a,items:l,searchQuery:c,activeItemIndex:u,closeMenu:function(){s.value=Ce.Closed,u.value=null},openMenu:function(){return s.value=Ce.Open},goToItem:function(m,v){var A=ug(m===pe.Specific?{focus:pe.Specific,id:v}:{focus:m},{resolveItems:function(){return l.value},resolveActiveIndex:function(){return u.value},resolveId:function(O){return O.id},resolveDisabled:function(O){return O.dataRef.disabled}});c.value===""&&u.value===A||(c.value="",u.value=A)},search:function(m){c.value+=m.toLowerCase();var v=l.value.findIndex(function(A){return A.dataRef.textValue.startsWith(c.value)&&!A.dataRef.disabled});v===-1||v===u.value||(u.value=v)},clearSearch:function(){c.value=""},registerItem:function(m,v){l.value.push({id:m,dataRef:v})},unregisterItem:function(m){var v=l.value.slice(),A=u.value!==null?v[u.value]:null,C=v.findIndex(function(O){return O.id===m});C!==-1&&v.splice(C,1),l.value=v,u.value=function(){return C===u.value||A===null?null:v.indexOf(A)}()}};return ag("mousedown",function(h){var m,v,A,C=h.target,O=document.activeElement;s.value===Ce.Open&&(((m=de(o))==null?void 0:m.contains(C))||(((v=de(a))==null?void 0:v.contains(C))||d.closeMenu(),!(O!==document.body&&(O==null?void 0:O.contains(C)))&&(h.defaultPrevented||(A=de(o))==null||A.focus({preventScroll:!0}))))}),mt(ac,d),nc(ve(function(){var h;return lr(s.value,(h={},h[Ce.Open]=St.Open,h[Ce.Closed]=St.Closed,h))})),function(){var h={open:s.value===Ce.Open};return Gt({props:e,slot:h,slots:r,attrs:i,name:"Menu"})}}}),Lg=it({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},render:function(){var e,n=Sn("MenuButton"),r={open:n.menuState.value===Ce.Open},i={ref:"el",id:this.id,type:this.type,"aria-haspopup":!0,"aria-controls":(e=de(n.itemsRef))==null?void 0:e.id,"aria-expanded":this.$props.disabled?void 0:n.menuState.value===Ce.Open,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,onClick:this.handleClick};return Gt({props:ct({},this.$props,i),slot:r,attrs:this.$attrs,slots:this.$slots,name:"MenuButton"})},setup:function(e,n){var r=n.attrs,i=Sn("MenuButton"),s="headlessui-menu-button-"+cr();function o(c){switch(c.key){case ce.Space:case ce.Enter:case ce.ArrowDown:c.preventDefault(),c.stopPropagation(),i.openMenu(),rt(function(){var u;(u=de(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(pe.First)});break;case ce.ArrowUp:c.preventDefault(),c.stopPropagation(),i.openMenu(),rt(function(){var u;(u=de(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(pe.Last)});break}}function a(c){switch(c.key){case ce.Space:c.preventDefault();break}}function l(c){e.disabled||(i.menuState.value===Ce.Open?(i.closeMenu(),rt(function(){var u;return(u=de(i.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),c.stopPropagation(),i.openMenu(),dg(function(){var u;return(u=de(i.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}return{id:s,el:i.buttonRef,type:ic(ve(function(){return{as:e.as,type:r.type}}),i.buttonRef),handleKeyDown:o,handleKeyUp:a,handleClick:l}}}),Ug=it({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e,n,r=Sn("MenuItems"),i={open:r.menuState.value===Ce.Open},s={"aria-activedescendant":r.activeItemIndex.value===null||(e=r.items.value[r.activeItemIndex.value])==null?void 0:e.id,"aria-labelledby":(n=de(r.buttonRef))==null?void 0:n.id,id:this.id,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,role:"menu",tabIndex:0,ref:"el"},o=this.$props;return Gt({props:ct({},o,s),slot:i,attrs:this.$attrs,slots:this.$slots,features:ut.RenderStrategy|ut.Static,visible:this.visible,name:"MenuItems"})},setup:function(){var e=Sn("MenuItems"),n="headlessui-menu-items-"+cr(),r=Ae(null);fg({container:ve(function(){return de(e.itemsRef)}),enabled:ve(function(){return e.menuState.value===Ce.Open}),accept:function(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(c){c.setAttribute("role","none")}});function i(l){switch(r.value&&clearTimeout(r.value),l.key){case ce.Space:if(e.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),e.search(l.key);case ce.Enter:if(l.preventDefault(),l.stopPropagation(),e.activeItemIndex.value!==null){var c,u=e.items.value[e.activeItemIndex.value].id;(c=document.getElementById(u))==null||c.click()}e.closeMenu(),rt(function(){var d;return(d=de(e.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case ce.ArrowDown:return l.preventDefault(),l.stopPropagation(),e.goToItem(pe.Next);case ce.ArrowUp:return l.preventDefault(),l.stopPropagation(),e.goToItem(pe.Previous);case ce.Home:case ce.PageUp:return l.preventDefault(),l.stopPropagation(),e.goToItem(pe.First);case ce.End:case ce.PageDown:return l.preventDefault(),l.stopPropagation(),e.goToItem(pe.Last);case ce.Escape:l.preventDefault(),l.stopPropagation(),e.closeMenu(),rt(function(){var d;return(d=de(e.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case ce.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(e.search(l.key),r.value=setTimeout(function(){return e.clearSearch()},350));break}}function s(l){switch(l.key){case ce.Space:l.preventDefault();break}}var o=tc(),a=ve(function(){return o!==null?o.value===St.Open:e.menuState.value===Ce.Open});return{id:n,el:e.itemsRef,handleKeyDown:i,handleKeyUp:s,visible:a}}}),$g=it({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=n.attrs,s=Sn("MenuItem"),o="headlessui-menu-item-"+cr(),a=ve(function(){return s.activeItemIndex.value!==null?s.items.value[s.activeItemIndex.value].id===o:!1}),l=Ae({disabled:e.disabled,textValue:""});$n(function(){var m,v,A=(m=document.getElementById(o))==null||(v=m.textContent)==null?void 0:v.toLowerCase().trim();A!==void 0&&(l.value.textValue=A)}),$n(function(){return s.registerItem(o,l)}),$i(function(){return s.unregisterItem(o)}),Un(function(){s.menuState.value===Ce.Open&&(!a.value||rt(function(){var m;return(m=document.getElementById(o))==null||m.scrollIntoView==null?void 0:m.scrollIntoView({block:"nearest"})}))});function c(m){if(e.disabled)return m.preventDefault();s.closeMenu(),rt(function(){var v;return(v=de(s.buttonRef))==null?void 0:v.focus({preventScroll:!0})})}function u(){if(e.disabled)return s.goToItem(pe.Nothing);s.goToItem(pe.Specific,o)}function d(){e.disabled||a.value||s.goToItem(pe.Specific,o)}function h(){e.disabled||!a.value||s.goToItem(pe.Nothing)}return function(){var m=e.disabled,v={active:a.value,disabled:m},A={id:o,role:"menuitem",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,onClick:c,onFocus:u,onPointermove:d,onMousemove:d,onPointerleave:h,onMouseleave:h};return Gt({props:ct({},e,A),slot:v,attrs:i,slots:r,name:"MenuItem"})}}});function Fg(t,e){return Nr(),xr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[we("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])}function jg(t,e){return Nr(),xr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[we("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])}function Bg(t,e){return Nr(),xr("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[we("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}export{ci as A,qu as B,hg as C,Ng as D,vg as E,qe as F,Ig as G,Ae as H,Nn as I,li as J,wt as K,Ag as L,Dg as M,bg as N,pg as O,yg as P,ua as T,Eg as a,Pg as b,wg as c,Cg as d,Og as e,Mg as f,Rg as g,xg as h,Tg as i,Lg as j,$g as k,Ug as l,jg as m,Bg as n,yu as o,mg as p,Nr as q,Fg as r,Sg as s,xr as t,kg as u,Xo as v,ou as w,we as x,gg as y,_g as z};
