function Hi(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=Hi(vf);function qa(e){return!!e||e===""}function zi(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ie(r)?wf(r):zi(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Ie(e))return e;if(pe(e))return e}}const yf=/;(?![^(]*\))/g,_f=/:(.+)/;function wf(e){const t={};return e.split(yf).forEach(n=>{if(n){const r=n.split(_f);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wi(e){let t="";if(Ie(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Wi(e[n]);r&&(t+=r+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const v_=e=>e==null?"":z(e)||pe(e)&&(e.toString===Qa||!G(e.toString))?JSON.stringify(e,Ya,2):String(e),Ya=(e,t)=>t&&t.__v_isRef?Ya(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ja(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!z(t)&&!Za(t)?String(t):t,ie={},un=[],He=()=>{},If=()=>!1,Ef=/^on[^a-z]/,Pr=e=>Ef.test(e),Vi=e=>e.startsWith("onUpdate:"),we=Object.assign,Ki=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kf=Object.prototype.hasOwnProperty,Q=(e,t)=>kf.call(e,t),z=Array.isArray,fn=e=>Nr(e)==="[object Map]",Ja=e=>Nr(e)==="[object Set]",G=e=>typeof e=="function",Ie=e=>typeof e=="string",Gi=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Xa=e=>pe(e)&&G(e.then)&&G(e.catch),Qa=Object.prototype.toString,Nr=e=>Qa.call(e),Af=e=>Nr(e).slice(8,-1),Za=e=>Nr(e)==="[object Object]",qi=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mr=Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tf=/-(\w)/g,Ye=Lr(e=>e.replace(Tf,(t,n)=>n?n.toUpperCase():"")),Cf=/\B([A-Z])/g,dn=Lr(e=>e.replace(Cf,"-$1").toLowerCase()),Dr=Lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yi=Lr(e=>e?`on${Dr(e)}`:""),Kn=(e,t)=>!Object.is(e,t),Ur=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$r=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let eo;const Sf=()=>eo||(eo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Lt;const jr=[];class Of{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Lt&&(this.parent=Lt,this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(jr.push(this),Lt=this)}off(){this.active&&(jr.pop(),Lt=jr[jr.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function xf(e,t){t=t||Lt,t&&t.active&&t.effects.push(e)}const Ji=e=>{const t=new Set(e);return t.w=0,t.n=0,t},to=e=>(e.w&bt)>0,no=e=>(e.n&bt)>0,Rf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=bt},Pf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];to(i)&&!no(i)?i.delete(e):t[n++]=i,i.w&=~bt,i.n&=~bt}t.length=n}},Xi=new WeakMap;let Gn=0,bt=1;const Qi=30,hn=[];let Dt;const Ut=Symbol(""),Zi=Symbol("");class es{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],xf(this,r)}run(){if(!this.active)return this.fn();if(!hn.length||!hn.includes(this))try{return hn.push(Dt=this),Nf(),bt=1<<++Gn,Gn<=Qi?Rf(this):ro(this),this.fn()}finally{Gn<=Qi&&Pf(this),bt=1<<--Gn,Ft(),hn.pop();const t=hn.length;Dt=t>0?hn[t-1]:void 0}}stop(){this.active&&(ro(this),this.onStop&&this.onStop(),this.active=!1)}}function ro(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mn=!0;const ts=[];function pn(){ts.push(mn),mn=!1}function Nf(){ts.push(mn),mn=!0}function Ft(){const e=ts.pop();mn=e===void 0?!0:e}function Pe(e,t,n){if(!io())return;let r=Xi.get(e);r||Xi.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ji()),so(i)}function io(){return mn&&Dt!==void 0}function so(e,t){let n=!1;Gn<=Qi?no(e)||(e.n|=bt,n=!to(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function at(e,t,n,r,i,s){const a=Xi.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e))a.forEach((l,c)=>{(c==="length"||c>=r)&&o.push(l)});else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?qi(n)&&o.push(a.get("length")):(o.push(a.get(Ut)),fn(e)&&o.push(a.get(Zi)));break;case"delete":z(e)||(o.push(a.get(Ut)),fn(e)&&o.push(a.get(Zi)));break;case"set":fn(e)&&o.push(a.get(Ut));break}if(o.length===1)o[0]&&ns(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ns(Ji(l))}}function ns(e,t){for(const n of z(e)?e:[...e])(n!==Dt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Mf=Hi("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Gi)),Lf=rs(),Df=rs(!1,!0),Uf=rs(!0),oo=Ff();function Ff(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Z(this);for(let s=0,a=this.length;s<a;s++)Pe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pn();const r=Z(this)[t].apply(this,n);return Ft(),r}}),e}function rs(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?ed:vo:t?go:po).get(r))return r;const a=z(r);if(!e&&a&&Q(oo,i))return Reflect.get(oo,i,s);const o=Reflect.get(r,i,s);return(Gi(i)?ao.has(i):Mf(i))||(e||Pe(r,"get",i),t)?o:Ee(o)?!a||!qi(i)?o.value:o:pe(o)?e?bo(o):gn(o):o}}const $f=lo(),jf=lo(!0);function lo(e=!1){return function(n,r,i,s){let a=n[r];if(qn(a)&&Ee(a)&&!Ee(i))return!1;if(!e&&!qn(i)&&(yo(i)||(i=Z(i),a=Z(a)),!z(n)&&Ee(a)&&!Ee(i)))return a.value=i,!0;const o=z(n)&&qi(r)?Number(r)<n.length:Q(n,r),l=Reflect.set(n,r,i,s);return n===Z(s)&&(o?Kn(i,a)&&at(n,"set",r,i):at(n,"add",r,i)),l}}function Bf(e,t){const n=Q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&at(e,"delete",t,void 0),r}function Hf(e,t){const n=Reflect.has(e,t);return(!Gi(t)||!ao.has(t))&&Pe(e,"has",t),n}function zf(e){return Pe(e,"iterate",z(e)?"length":Ut),Reflect.ownKeys(e)}const co={get:Lf,set:$f,deleteProperty:Bf,has:Hf,ownKeys:zf},Wf={get:Uf,set(e,t){return!0},deleteProperty(e,t){return!0}},Vf=we({},co,{get:Df,set:jf}),is=e=>e,Br=e=>Reflect.getPrototypeOf(e);function Hr(e,t,n=!1,r=!1){e=e.__v_raw;const i=Z(e),s=Z(t);t!==s&&!n&&Pe(i,"get",t),!n&&Pe(i,"get",s);const{has:a}=Br(i),o=r?is:n?os:Yn;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function zr(e,t=!1){const n=this.__v_raw,r=Z(n),i=Z(e);return e!==i&&!t&&Pe(r,"has",e),!t&&Pe(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Wr(e,t=!1){return e=e.__v_raw,!t&&Pe(Z(e),"iterate",Ut),Reflect.get(e,"size",e)}function uo(e){e=Z(e);const t=Z(this);return Br(t).has.call(t,e)||(t.add(e),at(t,"add",e,e)),this}function fo(e,t){t=Z(t);const n=Z(this),{has:r,get:i}=Br(n);let s=r.call(n,e);s||(e=Z(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Kn(t,a)&&at(n,"set",e,t):at(n,"add",e,t),this}function ho(e){const t=Z(this),{has:n,get:r}=Br(t);let i=n.call(t,e);i||(e=Z(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&at(t,"delete",e,void 0),s}function mo(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&at(e,"clear",void 0,void 0),n}function Vr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=Z(a),l=t?is:e?os:Yn;return!e&&Pe(o,"iterate",Ut),a.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Kr(e,t,n){return function(...r){const i=this.__v_raw,s=Z(i),a=fn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?is:t?os:Yn;return!t&&Pe(s,"iterate",l?Zi:Ut),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function yt(e){return function(...t){return e==="delete"?!1:this}}function Kf(){const e={get(s){return Hr(this,s)},get size(){return Wr(this)},has:zr,add:uo,set:fo,delete:ho,clear:mo,forEach:Vr(!1,!1)},t={get(s){return Hr(this,s,!1,!0)},get size(){return Wr(this)},has:zr,add:uo,set:fo,delete:ho,clear:mo,forEach:Vr(!1,!0)},n={get(s){return Hr(this,s,!0)},get size(){return Wr(this,!0)},has(s){return zr.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Vr(!0,!1)},r={get(s){return Hr(this,s,!0,!0)},get size(){return Wr(this,!0)},has(s){return zr.call(this,s,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Kr(s,!1,!1),n[s]=Kr(s,!0,!1),t[s]=Kr(s,!1,!0),r[s]=Kr(s,!0,!0)}),[e,n,t,r]}const[Gf,qf,Yf,Jf]=Kf();function ss(e,t){const n=t?e?Jf:Yf:e?qf:Gf;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const Xf={get:ss(!1,!1)},Qf={get:ss(!1,!0)},Zf={get:ss(!0,!1)},po=new WeakMap,go=new WeakMap,vo=new WeakMap,ed=new WeakMap;function td(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nd(e){return e.__v_skip||!Object.isExtensible(e)?0:td(Af(e))}function gn(e){return qn(e)?e:as(e,!1,co,Xf,po)}function rd(e){return as(e,!1,Vf,Qf,go)}function bo(e){return as(e,!0,Wf,Zf,vo)}function as(e,t,n,r,i){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=nd(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function vn(e){return qn(e)?vn(e.__v_raw):!!(e&&e.__v_isReactive)}function qn(e){return!!(e&&e.__v_isReadonly)}function yo(e){return!!(e&&e.__v_isShallow)}function _o(e){return vn(e)||qn(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function wo(e){return Fr(e,"__v_skip",!0),e}const Yn=e=>pe(e)?gn(e):e,os=e=>pe(e)?bo(e):e;function Io(e){io()&&(e=Z(e),e.dep||(e.dep=Ji()),so(e.dep))}function Eo(e,t){e=Z(e),e.dep&&ns(e.dep)}function Ee(e){return Boolean(e&&e.__v_isRef===!0)}function Je(e){return ko(e,!1)}function id(e){return ko(e,!0)}function ko(e,t){return Ee(e)?e:new sd(e,t)}class sd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:Yn(t)}get value(){return Io(this),this._value}set value(t){t=this.__v_isShallow?t:Z(t),Kn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Yn(t),Eo(this))}}function Jn(e){return Ee(e)?e.value:e}const ad={get:(e,t,n)=>Jn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ao(e){return vn(e)?e:new Proxy(e,ad)}class od{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new es(t,()=>{this._dirty||(this._dirty=!0,Eo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Z(this);return Io(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ld(e,t,n=!1){let r,i;const s=G(e);return s?(r=e,i=He):(r=e.get,i=e.set),new od(r,i,s||!i,n)}Promise.resolve();function _t(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Gr(s,t,n)}return i}function Fe(e,t,n,r){if(G(e)){const s=_t(e,t,n,r);return s&&Xa(s)&&s.catch(a=>{Gr(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Fe(e[s],t,n,r));return i}function Gr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){_t(l,null,10,[e,a,o]);return}}cd(e,n,i,r)}function cd(e,t,n,r=!0){console.error(e)}let qr=!1,ls=!1;const Ne=[];let ot=0;const Xn=[];let Qn=null,bn=0;const Zn=[];let wt=null,yn=0;const To=Promise.resolve();let cs=null,us=null;function lt(e){const t=cs||To;return e?t.then(this?e.bind(this):e):t}function ud(e){let t=ot+1,n=Ne.length;for(;t<n;){const r=t+n>>>1;er(Ne[r])<e?t=r+1:n=r}return t}function Co(e){(!Ne.length||!Ne.includes(e,qr&&e.allowRecurse?ot+1:ot))&&e!==us&&(e.id==null?Ne.push(e):Ne.splice(ud(e.id),0,e),So())}function So(){!qr&&!ls&&(ls=!0,cs=To.then(Ro))}function fd(e){const t=Ne.indexOf(e);t>ot&&Ne.splice(t,1)}function Oo(e,t,n,r){z(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),So()}function dd(e){Oo(e,Qn,Xn,bn)}function hd(e){Oo(e,wt,Zn,yn)}function fs(e,t=null){if(Xn.length){for(us=t,Qn=[...new Set(Xn)],Xn.length=0,bn=0;bn<Qn.length;bn++)Qn[bn]();Qn=null,bn=0,us=null,fs(e,t)}}function xo(e){if(Zn.length){const t=[...new Set(Zn)];if(Zn.length=0,wt){wt.push(...t);return}for(wt=t,wt.sort((n,r)=>er(n)-er(r)),yn=0;yn<wt.length;yn++)wt[yn]();wt=null,yn=0}}const er=e=>e.id==null?1/0:e.id;function Ro(e){ls=!1,qr=!0,fs(e),Ne.sort((n,r)=>er(n)-er(r));const t=He;try{for(ot=0;ot<Ne.length;ot++){const n=Ne[ot];n&&n.active!==!1&&_t(n,null,14)}}finally{ot=0,Ne.length=0,xo(),qr=!1,cs=null,(Ne.length||Xn.length||Zn.length)&&Ro(e)}}function md(e,t,...n){const r=e.vnode.props||ie;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=r[u]||ie;d?i=n.map(p=>p.trim()):f&&(i=n.map($r))}let o,l=r[o=Yi(t)]||r[o=Yi(Ye(t))];!l&&s&&(l=r[o=Yi(dn(t))]),l&&Fe(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Fe(c,e,6,i)}}function Po(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!G(e)){const l=c=>{const u=Po(c,t,!0);u&&(o=!0,we(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(r.set(e,null),null):(z(s)?s.forEach(l=>a[l]=null):we(a,s),r.set(e,a),a)}function ds(e,t){return!e||!Pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,dn(t))||Q(e,t))}let $e=null,No=null;function Yr(e){const t=$e;return $e=e,No=e&&e.type.__scopeId||null,t}function pd(e,t=$e,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&al(-1);const s=Yr(t),a=e(...i);return Yr(s),r._d&&al(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function hs(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:b,inheritAttrs:A}=e;let E,g;const _=Yr(e);try{if(n.shapeFlag&4){const L=i||r;E=Ze(u.call(L,L,f,s,p,d,b)),g=l}else{const L=t;E=Ze(L.length>1?L(s,{attrs:l,slots:o,emit:c}):L(s,null)),g=t.props?l:gd(l)}}catch(L){nr.length=0,Gr(L,e,1),E=Me(Qe)}let R=E;if(g&&A!==!1){const L=Object.keys(g),{shapeFlag:H}=R;L.length&&H&(1|6)&&(a&&L.some(Vi)&&(g=vd(g,a)),R=Kt(R,g))}return n.dirs&&(R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),E=R,Yr(_),E}const gd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pr(n))&&((t||(t={}))[n]=e[n]);return t},vd=(e,t)=>{const n={};for(const r in e)(!Vi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bd(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Mo(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==r[d]&&!ds(c,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Mo(r,a,c):!0:!!a;return!1}function Mo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!ds(n,s))return!0}return!1}function yd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const _d=e=>e.__isSuspense;function wd(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):hd(e)}function _n(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=ye||$e;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&G(t)?t.call(r.proxy):t}}function Jr(e,t){return ms(e,null,t)}const Lo={};function $t(e,t,n){return ms(e,t,n)}function ms(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ie){const o=ye;let l,c=!1,u=!1;if(Ee(e)?(l=()=>e.value,c=yo(e)):vn(e)?(l=()=>e,r=!0):z(e)?(u=!0,c=e.some(vn),l=()=>e.map(g=>{if(Ee(g))return g.value;if(vn(g))return jt(g);if(G(g))return _t(g,o,2)})):G(e)?t?l=()=>_t(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Fe(e,o,3,[d])}:l=He,t&&r){const g=l;l=()=>jt(g())}let f,d=g=>{f=E.onStop=()=>{_t(g,o,4)}};if(rr)return d=He,t?n&&Fe(t,o,3,[l(),u?[]:void 0,d]):l(),He;let p=u?[]:Lo;const b=()=>{if(!!E.active)if(t){const g=E.run();(r||c||(u?g.some((_,R)=>Kn(_,p[R])):Kn(g,p)))&&(f&&f(),Fe(t,o,3,[g,p===Lo?void 0:p,d]),p=g)}else E.run()};b.allowRecurse=!!t;let A;i==="sync"?A=b:i==="post"?A=()=>Oe(b,o&&o.suspense):A=()=>{!o||o.isMounted?dd(b):b()};const E=new es(l,A);return t?n?b():p=E.run():i==="post"?Oe(E.run.bind(E),o&&o.suspense):E.run(),()=>{E.stop(),o&&o.scope&&Ki(o.scope.effects,E)}}function Id(e,t,n){const r=this.proxy,i=Ie(e)?e.includes(".")?Do(r,e):()=>r[e]:e.bind(r,r);let s;G(t)?s=t:(s=t.handler,n=t);const a=ye;wn(this);const o=ms(i,s.bind(r),n);return a?wn(a):Gt(),o}function Do(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function jt(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))jt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)jt(e[n],t);else if(Ja(e)||fn(e))e.forEach(n=>{jt(n,t)});else if(Za(e))for(const n in e)jt(e[n],t);return e}function Ed(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tr(()=>{e.isMounted=!0}),Ho(()=>{e.isUnmounting=!0}),e}const je=[Function,Array],kd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},setup(e,{slots:t}){const n=uh(),r=Ed();let i;return()=>{const s=t.default&&jo(t.default(),!0);if(!s||!s.length)return;const a=Z(e),{mode:o}=a,l=s[0];if(r.isLeaving)return gs(l);const c=$o(l);if(!c)return gs(l);const u=ps(c,a,r,n);vs(c,u);const f=n.subTree,d=f&&$o(f);let p=!1;const{getTransitionKey:b}=c.type;if(b){const A=b();i===void 0?i=A:A!==i&&(i=A,p=!0)}if(d&&d.type!==Qe&&(!Vt(c,d)||p)){const A=ps(d,a,r,n);if(vs(d,A),o==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update()},gs(l);o==="in-out"&&c.type!==Qe&&(A.delayLeave=(E,g,_)=>{const R=Fo(r,d);R[String(d.key)]=d,E._leaveCb=()=>{g(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return l}}},Uo=kd;function Fo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ps(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:b,onBeforeAppear:A,onAppear:E,onAfterAppear:g,onAppearCancelled:_}=t,R=String(e.key),L=Fo(n,e),H=(B,ee)=>{B&&Fe(B,r,9,ee)},J={mode:s,persisted:a,beforeEnter(B){let ee=o;if(!n.isMounted)if(i)ee=A||o;else return;B._leaveCb&&B._leaveCb(!0);const q=L[R];q&&Vt(e,q)&&q.el._leaveCb&&q.el._leaveCb(),H(ee,[B])},enter(B){let ee=l,q=c,ve=u;if(!n.isMounted)if(i)ee=E||l,q=g||c,ve=_||u;else return;let be=!1;const D=B._enterCb=he=>{be||(be=!0,he?H(ve,[B]):H(q,[B]),J.delayedLeave&&J.delayedLeave(),B._enterCb=void 0)};ee?(ee(B,D),ee.length<=1&&D()):D()},leave(B,ee){const q=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return ee();H(f,[B]);let ve=!1;const be=B._leaveCb=D=>{ve||(ve=!0,ee(),D?H(b,[B]):H(p,[B]),B._leaveCb=void 0,L[q]===e&&delete L[q])};L[q]=e,d?(d(B,be),d.length<=1&&be()):be()},clone(B){return ps(B,t,n,r)}};return J}function gs(e){if(Xr(e))return e=Kt(e),e.children=null,e}function $o(e){return Xr(e)?e.children?e.children[0]:void 0:e}function vs(e,t){e.shapeFlag&6&&e.component?vs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jo(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Xe?(s.patchFlag&128&&r++,n=n.concat(jo(s.children,t))):(t||s.type!==Qe)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function ct(e){return G(e)?{setup:e,name:e.name}:e}const bs=e=>!!e.type.__asyncLoader,Xr=e=>e.type.__isKeepAlive;function Ad(e,t){Bo(e,"a",t)}function Td(e,t){Bo(e,"da",t)}function Bo(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Qr(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Xr(i.parent.vnode)&&Cd(r,t,n,i),i=i.parent}}function Cd(e,t,n,r){const i=Qr(t,e,r,!0);ys(()=>{Ki(r[t],i)},n)}function Qr(e,t,n=ye,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;pn(),wn(n);const o=Fe(t,n,e,a);return Gt(),Ft(),o});return r?i.unshift(s):i.push(s),s}}const ut=e=>(t,n=ye)=>(!rr||e==="sp")&&Qr(e,t,n),Sd=ut("bm"),tr=ut("m"),Od=ut("bu"),xd=ut("u"),Ho=ut("bum"),ys=ut("um"),Rd=ut("sp"),Pd=ut("rtg"),Nd=ut("rtc");function Md(e,t=ye){Qr("ec",e,t)}let _s=!0;function Ld(e){const t=Vo(e),n=e.proxy,r=e.ctx;_s=!1,t.beforeCreate&&zo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:b,activated:A,deactivated:E,beforeDestroy:g,beforeUnmount:_,destroyed:R,unmounted:L,render:H,renderTracked:J,renderTriggered:B,errorCaptured:ee,serverPrefetch:q,expose:ve,inheritAttrs:be,components:D,directives:he,filters:Se}=t;if(c&&Dd(c,r,null,e.appContext.config.unwrapInjectedRef),a)for(const oe in a){const te=a[oe];G(te)&&(r[oe]=te.bind(n))}if(i){const oe=i.call(n,n);pe(oe)&&(e.data=gn(oe))}if(_s=!0,s)for(const oe in s){const te=s[oe],De=G(te)?te.bind(n,n):G(te.get)?te.get.bind(n,n):He,ln=!G(te)&&G(te.set)?te.set.bind(n):He,st=se({get:De,set:ln});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ge=>st.value=Ge})}if(o)for(const oe in o)Wo(o[oe],r,n,oe);if(l){const oe=G(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(te=>{_n(te,oe[te])})}u&&zo(u,e,"c");function me(oe,te){z(te)?te.forEach(De=>oe(De.bind(n))):te&&oe(te.bind(n))}if(me(Sd,f),me(tr,d),me(Od,p),me(xd,b),me(Ad,A),me(Td,E),me(Md,ee),me(Nd,J),me(Pd,B),me(Ho,_),me(ys,L),me(Rd,q),z(ve))if(ve.length){const oe=e.exposed||(e.exposed={});ve.forEach(te=>{Object.defineProperty(oe,te,{get:()=>n[te],set:De=>n[te]=De})})}else e.exposed||(e.exposed={});H&&e.render===He&&(e.render=H),be!=null&&(e.inheritAttrs=be),D&&(e.components=D),he&&(e.directives=he)}function Dd(e,t,n=He,r=!1){z(e)&&(e=ws(e));for(const i in e){const s=e[i];let a;pe(s)?"default"in s?a=ze(s.from||i,s.default,!0):a=ze(s.from||i):a=ze(s),Ee(a)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[i]=a}}function zo(e,t,n){Fe(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wo(e,t,n,r){const i=r.includes(".")?Do(n,r):()=>n[r];if(Ie(e)){const s=t[e];G(s)&&$t(i,s)}else if(G(e))$t(i,e.bind(n));else if(pe(e))if(z(e))e.forEach(s=>Wo(s,t,n,r));else{const s=G(e.handler)?e.handler.bind(n):t[e.handler];G(s)&&$t(i,s,e)}}function Vo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Zr(l,c,a,!0)),Zr(l,t,a)),s.set(t,l),l}function Zr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Zr(e,s,n,!0),i&&i.forEach(a=>Zr(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Ud[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Ud={data:Ko,props:Bt,emits:Bt,methods:Bt,computed:Bt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Bt,directives:Bt,watch:$d,provide:Ko,inject:Fd};function Ko(e,t){return t?e?function(){return we(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Fd(e,t){return Bt(ws(e),ws(t))}function ws(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?we(we(Object.create(null),e),t):t}function $d(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function jd(e,t,n,r=!1){const i={},s={};Fr(s,ti,1),e.propsDefaults=Object.create(null),Go(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:rd(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Bd(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Z(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];const p=t[d];if(l)if(Q(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const b=Ye(d);i[b]=Is(l,o,b,p,e,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Go(e,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!Q(t,f)&&((u=dn(f))===f||!Q(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Is(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Q(t,f)&&!0)&&(delete s[f],c=!0)}c&&at(e,"set","$attrs")}function Go(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Mr(l))continue;const c=t[l];let u;i&&Q(i,u=Ye(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:ds(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=Z(n),c=o||ie;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Is(i,l,f,c[f],e,!Q(c,f))}}return a}function Is(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Q(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&G(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(wn(i),r=c[n]=l.call(null,t),Gt())}else r=l}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===dn(n))&&(r=!0))}return r}function qo(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!G(e)){const u=f=>{l=!0;const[d,p]=qo(f,t,!0);we(a,d),p&&o.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return r.set(e,un),un;if(z(s))for(let u=0;u<s.length;u++){const f=Ye(s[u]);Yo(f)&&(a[f]=ie)}else if(s)for(const u in s){const f=Ye(u);if(Yo(f)){const d=s[u],p=a[f]=z(d)||G(d)?{type:d}:d;if(p){const b=Qo(Boolean,p.type),A=Qo(String,p.type);p[0]=b>-1,p[1]=A<0||b<A,(b>-1||Q(p,"default"))&&o.push(f)}}}const c=[a,o];return r.set(e,c),c}function Yo(e){return e[0]!=="$"}function Jo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xo(e,t){return Jo(e)===Jo(t)}function Qo(e,t){return z(t)?t.findIndex(n=>Xo(n,e)):G(t)&&Xo(t,e)?0:-1}const Zo=e=>e[0]==="_"||e==="$stable",Es=e=>z(e)?e.map(Ze):[Ze(e)],Hd=(e,t,n)=>{const r=pd((...i)=>Es(t(...i)),n);return r._c=!1,r},el=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Zo(i))continue;const s=e[i];if(G(s))t[i]=Hd(i,s,r);else if(s!=null){const a=Es(s);t[i]=()=>a}}},tl=(e,t)=>{const n=Es(t);e.slots.default=()=>n},zd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Fr(t,"_",n)):el(t,e.slots={})}else e.slots={},t&&tl(e,t);Fr(e.slots,ti,1)},Wd=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ie;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(we(i,t),!n&&o===1&&delete i._):(s=!t.$stable,el(t,i)),a=t}else t&&(tl(e,t),a={default:1});if(s)for(const o in i)!Zo(o)&&!(o in a)&&delete i[o]};function b_(e,t){const n=$e;if(n===null)return e;const r=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,l,c=ie]=t[s];G(a)&&(a={mounted:a,updated:a}),a.deep&&jt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c})}return e}function Ht(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(pn(),Fe(l,n,8,[e.el,o,e,t]),Ft())}}function nl(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vd=0;function Kd(e,t){return function(r,i=null){i!=null&&!pe(i)&&(i=null);const s=nl(),a=new Set;let o=!1;const l=s.app={_uid:Vd++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:vh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&G(c.install)?(a.add(c),c.install(l,...u)):G(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=Me(r,i);return d.appContext=s,u&&t?t(d,c):e(d,c,f),o=!0,l._container=c,c.__vue_app__=l,xs(d.component)||d.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ks(e,t,n,r,i=!1){if(z(e)){e.forEach((d,p)=>ks(d,t&&(z(t)?t[p]:t),n,r,i));return}if(bs(r)&&!i)return;const s=r.shapeFlag&4?xs(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,u=o.refs===ie?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Ie(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):Ee(c)&&(c.value=null)),G(l))_t(l,o,12,[a,u]);else{const d=Ie(l),p=Ee(l);if(d||p){const b=()=>{if(e.f){const A=d?u[l]:l.value;i?z(A)&&Ki(A,s):z(A)?A.includes(s)||A.push(s):d?u[l]=[s]:(l.value=[s],e.k&&(u[e.k]=l.value))}else d?(u[l]=a,Q(f,l)&&(f[l]=a)):Ee(l)&&(l.value=a,e.k&&(u[e.k]=a))};a?(b.id=-1,Oe(b,n)):b()}}}const Oe=wd;function Gd(e){return qd(e)}function qd(e,t){const n=Sf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=He,cloneNode:b,insertStaticContent:A}=e,E=(h,m,v,I=null,w=null,C=null,x=!1,T=null,S=!!m.dynamicChildren)=>{if(h===m)return;h&&!Vt(h,m)&&(I=U(h),Ue(h,w,C,!0),h=null),m.patchFlag===-2&&(S=!1,m.dynamicChildren=null);const{type:k,ref:F,shapeFlag:N}=m;switch(k){case As:g(h,m,v,I);break;case Qe:_(h,m,v,I);break;case Ts:h==null&&R(m,v,I,x);break;case Xe:he(h,m,v,I,w,C,x,T,S);break;default:N&1?J(h,m,v,I,w,C,x,T,S):N&6?Se(h,m,v,I,w,C,x,T,S):(N&64||N&128)&&k.process(h,m,v,I,w,C,x,T,S,le)}F!=null&&w&&ks(F,h&&h.ref,C,m||h,!m)},g=(h,m,v,I)=>{if(h==null)r(m.el=o(m.children),v,I);else{const w=m.el=h.el;m.children!==h.children&&c(w,m.children)}},_=(h,m,v,I)=>{h==null?r(m.el=l(m.children||""),v,I):m.el=h.el},R=(h,m,v,I)=>{[h.el,h.anchor]=A(h.children,m,v,I,h.el,h.anchor)},L=({el:h,anchor:m},v,I)=>{let w;for(;h&&h!==m;)w=d(h),r(h,v,I),h=w;r(m,v,I)},H=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=d(h),i(h),h=v;i(m)},J=(h,m,v,I,w,C,x,T,S)=>{x=x||m.type==="svg",h==null?B(m,v,I,w,C,x,T,S):ve(h,m,w,C,x,T,S)},B=(h,m,v,I,w,C,x,T)=>{let S,k;const{type:F,props:N,shapeFlag:$,transition:V,patchFlag:X,dirs:de}=h;if(h.el&&b!==void 0&&X===-1)S=h.el=b(h.el);else{if(S=h.el=a(h.type,C,N&&N.is,N),$&8?u(S,h.children):$&16&&q(h.children,S,null,I,w,C&&F!=="foreignObject",x,T),de&&Ht(h,null,I,"created"),N){for(const ue in N)ue!=="value"&&!Mr(ue)&&s(S,ue,null,N[ue],C,h.children,I,w,O);"value"in N&&s(S,"value",null,N.value),(k=N.onVnodeBeforeMount)&&et(k,I,h)}ee(S,h,h.scopeId,x,I)}de&&Ht(h,null,I,"beforeMount");const re=(!w||w&&!w.pendingBranch)&&V&&!V.persisted;re&&V.beforeEnter(S),r(S,m,v),((k=N&&N.onVnodeMounted)||re||de)&&Oe(()=>{k&&et(k,I,h),re&&V.enter(S),de&&Ht(h,null,I,"mounted")},w)},ee=(h,m,v,I,w)=>{if(v&&p(h,v),I)for(let C=0;C<I.length;C++)p(h,I[C]);if(w){let C=w.subTree;if(m===C){const x=w.vnode;ee(h,x,x.scopeId,x.slotScopeIds,w.parent)}}},q=(h,m,v,I,w,C,x,T,S=0)=>{for(let k=S;k<h.length;k++){const F=h[k]=T?It(h[k]):Ze(h[k]);E(null,F,m,v,I,w,C,x,T)}},ve=(h,m,v,I,w,C,x)=>{const T=m.el=h.el;let{patchFlag:S,dynamicChildren:k,dirs:F}=m;S|=h.patchFlag&16;const N=h.props||ie,$=m.props||ie;let V;v&&zt(v,!1),(V=$.onVnodeBeforeUpdate)&&et(V,v,m,h),F&&Ht(m,h,v,"beforeUpdate"),v&&zt(v,!0);const X=w&&m.type!=="foreignObject";if(k?be(h.dynamicChildren,k,T,v,I,X,C):x||De(h,m,T,null,v,I,X,C,!1),S>0){if(S&16)D(T,m,N,$,v,I,w);else if(S&2&&N.class!==$.class&&s(T,"class",null,$.class,w),S&4&&s(T,"style",N.style,$.style,w),S&8){const de=m.dynamicProps;for(let re=0;re<de.length;re++){const ue=de[re],Be=N[ue],cn=$[ue];(cn!==Be||ue==="value")&&s(T,ue,Be,cn,w,h.children,v,I,O)}}S&1&&h.children!==m.children&&u(T,m.children)}else!x&&k==null&&D(T,m,N,$,v,I,w);((V=$.onVnodeUpdated)||F)&&Oe(()=>{V&&et(V,v,m,h),F&&Ht(m,h,v,"updated")},I)},be=(h,m,v,I,w,C,x)=>{for(let T=0;T<m.length;T++){const S=h[T],k=m[T],F=S.el&&(S.type===Xe||!Vt(S,k)||S.shapeFlag&(6|64))?f(S.el):v;E(S,k,F,null,I,w,C,x,!0)}},D=(h,m,v,I,w,C,x)=>{if(v!==I){for(const T in I){if(Mr(T))continue;const S=I[T],k=v[T];S!==k&&T!=="value"&&s(h,T,k,S,x,m.children,w,C,O)}if(v!==ie)for(const T in v)!Mr(T)&&!(T in I)&&s(h,T,v[T],null,x,m.children,w,C,O);"value"in I&&s(h,"value",v.value,I.value)}},he=(h,m,v,I,w,C,x,T,S)=>{const k=m.el=h?h.el:o(""),F=m.anchor=h?h.anchor:o("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:V}=m;V&&(T=T?T.concat(V):V),h==null?(r(k,v,I),r(F,v,I),q(m.children,v,F,w,C,x,T,S)):N>0&&N&64&&$&&h.dynamicChildren?(be(h.dynamicChildren,$,v,w,C,x,T),(m.key!=null||w&&m===w.subTree)&&rl(h,m,!0)):De(h,m,v,F,w,C,x,T,S)},Se=(h,m,v,I,w,C,x,T,S)=>{m.slotScopeIds=T,h==null?m.shapeFlag&512?w.ctx.activate(m,v,I,x,S):it(m,v,I,w,C,x,S):me(h,m,S)},it=(h,m,v,I,w,C,x)=>{const T=h.component=ch(h,I,w);if(Xr(h)&&(T.ctx.renderer=le),fh(T),T.asyncDep){if(w&&w.registerDep(T,oe),!h.el){const S=T.subTree=Me(Qe);_(null,S,m,v)}return}oe(T,h,m,v,w,C,x)},me=(h,m,v)=>{const I=m.component=h.component;if(bd(h,m,v))if(I.asyncDep&&!I.asyncResolved){te(I,m,v);return}else I.next=m,fd(I.update),I.update();else m.component=h.component,m.el=h.el,I.vnode=m},oe=(h,m,v,I,w,C,x)=>{const T=()=>{if(h.isMounted){let{next:F,bu:N,u:$,parent:V,vnode:X}=h,de=F,re;zt(h,!1),F?(F.el=X.el,te(h,F,x)):F=X,N&&Ur(N),(re=F.props&&F.props.onVnodeBeforeUpdate)&&et(re,V,F,X),zt(h,!0);const ue=hs(h),Be=h.subTree;h.subTree=ue,E(Be,ue,f(Be.el),U(Be),h,w,C),F.el=ue.el,de===null&&yd(h,ue.el),$&&Oe($,w),(re=F.props&&F.props.onVnodeUpdated)&&Oe(()=>et(re,V,F,X),w)}else{let F;const{el:N,props:$}=m,{bm:V,m:X,parent:de}=h,re=bs(m);if(zt(h,!1),V&&Ur(V),!re&&(F=$&&$.onVnodeBeforeMount)&&et(F,de,m),zt(h,!0),N&&K){const ue=()=>{h.subTree=hs(h),K(N,h.subTree,h,w,null)};re?m.type.__asyncLoader().then(()=>!h.isUnmounted&&ue()):ue()}else{const ue=h.subTree=hs(h);E(null,ue,v,I,h,w,C),m.el=ue.el}if(X&&Oe(X,w),!re&&(F=$&&$.onVnodeMounted)){const ue=m;Oe(()=>et(F,de,ue),w)}m.shapeFlag&256&&h.a&&Oe(h.a,w),h.isMounted=!0,m=v=I=null}},S=h.effect=new es(T,()=>Co(h.update),h.scope),k=h.update=S.run.bind(S);k.id=h.uid,zt(h,!0),k()},te=(h,m,v)=>{m.component=h;const I=h.vnode.props;h.vnode=m,h.next=null,Bd(h,m.props,I,v),Wd(h,m.children,v),pn(),fs(void 0,h.update),Ft()},De=(h,m,v,I,w,C,x,T,S=!1)=>{const k=h&&h.children,F=h?h.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:V}=m;if($>0){if($&128){st(k,N,v,I,w,C,x,T,S);return}else if($&256){ln(k,N,v,I,w,C,x,T,S);return}}V&8?(F&16&&O(k,w,C),N!==k&&u(v,N)):F&16?V&16?st(k,N,v,I,w,C,x,T,S):O(k,w,C,!0):(F&8&&u(v,""),V&16&&q(N,v,I,w,C,x,T,S))},ln=(h,m,v,I,w,C,x,T,S)=>{h=h||un,m=m||un;const k=h.length,F=m.length,N=Math.min(k,F);let $;for($=0;$<N;$++){const V=m[$]=S?It(m[$]):Ze(m[$]);E(h[$],V,v,null,w,C,x,T,S)}k>F?O(h,w,C,!0,!1,N):q(m,v,I,w,C,x,T,S,N)},st=(h,m,v,I,w,C,x,T,S)=>{let k=0;const F=m.length;let N=h.length-1,$=F-1;for(;k<=N&&k<=$;){const V=h[k],X=m[k]=S?It(m[k]):Ze(m[k]);if(Vt(V,X))E(V,X,v,null,w,C,x,T,S);else break;k++}for(;k<=N&&k<=$;){const V=h[N],X=m[$]=S?It(m[$]):Ze(m[$]);if(Vt(V,X))E(V,X,v,null,w,C,x,T,S);else break;N--,$--}if(k>N){if(k<=$){const V=$+1,X=V<F?m[V].el:I;for(;k<=$;)E(null,m[k]=S?It(m[k]):Ze(m[k]),v,X,w,C,x,T,S),k++}}else if(k>$)for(;k<=N;)Ue(h[k],w,C,!0),k++;else{const V=k,X=k,de=new Map;for(k=X;k<=$;k++){const Re=m[k]=S?It(m[k]):Ze(m[k]);Re.key!=null&&de.set(Re.key,k)}let re,ue=0;const Be=$-X+1;let cn=!1,Va=0;const Vn=new Array(Be);for(k=0;k<Be;k++)Vn[k]=0;for(k=V;k<=N;k++){const Re=h[k];if(ue>=Be){Ue(Re,w,C,!0);continue}let qe;if(Re.key!=null)qe=de.get(Re.key);else for(re=X;re<=$;re++)if(Vn[re-X]===0&&Vt(Re,m[re])){qe=re;break}qe===void 0?Ue(Re,w,C,!0):(Vn[qe-X]=k+1,qe>=Va?Va=qe:cn=!0,E(Re,m[qe],v,null,w,C,x,T,S),ue++)}const Ka=cn?Yd(Vn):un;for(re=Ka.length-1,k=Be-1;k>=0;k--){const Re=X+k,qe=m[Re],Ga=Re+1<F?m[Re+1].el:I;Vn[k]===0?E(null,qe,v,Ga,w,C,x,T,S):cn&&(re<0||k!==Ka[re]?Ge(qe,v,Ga,2):re--)}}},Ge=(h,m,v,I,w=null)=>{const{el:C,type:x,transition:T,children:S,shapeFlag:k}=h;if(k&6){Ge(h.component.subTree,m,v,I);return}if(k&128){h.suspense.move(m,v,I);return}if(k&64){x.move(h,m,v,le);return}if(x===Xe){r(C,m,v);for(let N=0;N<S.length;N++)Ge(S[N],m,v,I);r(h.anchor,m,v);return}if(x===Ts){L(h,m,v);return}if(I!==2&&k&1&&T)if(I===0)T.beforeEnter(C),r(C,m,v),Oe(()=>T.enter(C),w);else{const{leave:N,delayLeave:$,afterLeave:V}=T,X=()=>r(C,m,v),de=()=>{N(C,()=>{X(),V&&V()})};$?$(C,X,de):de()}else r(C,m,v)},Ue=(h,m,v,I=!1,w=!1)=>{const{type:C,props:x,ref:T,children:S,dynamicChildren:k,shapeFlag:F,patchFlag:N,dirs:$}=h;if(T!=null&&ks(T,null,v,h,!0),F&256){m.ctx.deactivate(h);return}const V=F&1&&$,X=!bs(h);let de;if(X&&(de=x&&x.onVnodeBeforeUnmount)&&et(de,m,h),F&6)M(h.component,v,I);else{if(F&128){h.suspense.unmount(v,I);return}V&&Ht(h,null,m,"beforeUnmount"),F&64?h.type.remove(h,m,v,w,le,I):k&&(C!==Xe||N>0&&N&64)?O(k,m,v,!1,!0):(C===Xe&&N&(128|256)||!w&&F&16)&&O(S,m,v),I&&Bi(h)}(X&&(de=x&&x.onVnodeUnmounted)||V)&&Oe(()=>{de&&et(de,m,h),V&&Ht(h,null,m,"unmounted")},v)},Bi=h=>{const{type:m,el:v,anchor:I,transition:w}=h;if(m===Xe){y(v,I);return}if(m===Ts){H(h);return}const C=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:T}=w,S=()=>x(v,C);T?T(h.el,C,S):S()}else C()},y=(h,m)=>{let v;for(;h!==m;)v=d(h),i(h),h=v;i(m)},M=(h,m,v)=>{const{bum:I,scope:w,update:C,subTree:x,um:T}=h;I&&Ur(I),w.stop(),C&&(C.active=!1,Ue(x,h,m,v)),T&&Oe(T,m),Oe(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(h,m,v,I=!1,w=!1,C=0)=>{for(let x=C;x<h.length;x++)Ue(h[x],m,v,I,w)},U=h=>h.shapeFlag&6?U(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),ne=(h,m,v)=>{h==null?m._vnode&&Ue(m._vnode,null,null,!0):E(m._vnode||null,h,m,null,null,null,v),xo(),m._vnode=h},le={p:E,um:Ue,m:Ge,r:Bi,mt:it,mc:q,pc:De,pbc:be,n:U,o:e};let Y,K;return t&&([Y,K]=t(le)),{render:ne,hydrate:Y,createApp:Kd(ne,Y)}}function zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rl(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=It(i[s]),o.el=a.el),n||rl(a,o))}}function Yd(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Jd=e=>e.__isTeleport,il="components";function y_(e,t){return Qd(il,e,!0,t)||e}const Xd=Symbol();function Qd(e,t,n=!0,r=!1){const i=$e||ye;if(i){const s=i.type;if(e===il){const o=ph(s);if(o&&(o===t||o===Ye(t)||o===Dr(Ye(t))))return s}const a=sl(i[e]||s[e],t)||sl(i.appContext[e],t);return!a&&r?s:a}}function sl(e,t){return e&&(e[t]||e[Ye(t)]||e[Dr(Ye(t))])}const Xe=Symbol(void 0),As=Symbol(void 0),Qe=Symbol(void 0),Ts=Symbol(void 0),nr=[];let Wt=null;function Zd(e=!1){nr.push(Wt=e?null:[])}function eh(){nr.pop(),Wt=nr[nr.length-1]||null}let ei=1;function al(e){ei+=e}function ol(e){return e.dynamicChildren=ei>0?Wt||un:null,eh(),ei>0&&Wt&&Wt.push(e),e}function __(e,t,n,r,i,s){return ol(cl(e,t,n,r,i,s,!0))}function th(e,t,n,r,i){return ol(Me(e,t,n,r,i,!0))}function Cs(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const ti="__vInternal",ll=({key:e})=>e!=null?e:null,ni=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||Ee(e)||G(e)?{i:$e,r:e,k:t,f:!!n}:e:null;function cl(e,t=null,n=null,r=0,i=null,s=e===Xe?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ll(t),ref:t&&ni(t),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return o?(Ss(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),ei>0&&!a&&Wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wt.push(l),l}const Me=nh;function nh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Xd)&&(e=Qe),Cs(e)){const o=Kt(e,t,!0);return n&&Ss(o,n),o}if(gh(e)&&(e=e.__vccOpts),t){t=rh(t);let{class:o,style:l}=t;o&&!Ie(o)&&(t.class=Wi(o)),pe(l)&&(_o(l)&&!z(l)&&(l=we({},l)),t.style=zi(l))}const a=Ie(e)?1:_d(e)?128:Jd(e)?64:pe(e)?4:G(e)?2:0;return cl(e,t,n,r,i,a,s,!0)}function rh(e){return e?_o(e)||ti in e?we({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?sh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&ll(o),ref:t&&t.ref?n&&i?z(i)?i.concat(ni(t)):[i,ni(t)]:ni(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor}}function ih(e=" ",t=0){return Me(As,null,e,t)}function w_(e="",t=!1){return t?(Zd(),th(Qe,null,e)):Me(Qe,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Me(Qe):z(e)?Me(Xe,null,e.slice()):typeof e=="object"?It(e):Me(As,null,String(e))}function It(e){return e.el===null||e.memo?e:Kt(e)}function Ss(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&(1|64)){const i=t.default;i&&(i._c&&(i._d=!1),Ss(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(ti in t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[ih(t)]):n=8);e.children=t,e.shapeFlag|=n}function sh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Wi([t.class,r.class]));else if(i==="style")t.style=zi([t.style,r.style]);else if(Pr(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function et(e,t,n,r=null){Fe(e,t,7,[n,r])}function I_(e,t,n,r){let i;const s=n&&n[r];if(z(e)||Ie(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(pe(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];i[o]=t(e[c],c,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const Os=e=>e?ul(e)?xs(e)||e.proxy:Os(e.parent):null,ri=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Os(e.parent),$root:e=>Os(e.root),$emit:e=>e.emit,$options:e=>Vo(e),$forceUpdate:e=>()=>Co(e.update),$nextTick:e=>lt.bind(e.proxy),$watch:e=>Id.bind(e)}),ah={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const p=a[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==ie&&Q(r,t))return a[t]=1,r[t];if(i!==ie&&Q(i,t))return a[t]=2,i[t];if((c=e.propsOptions[0])&&Q(c,t))return a[t]=3,s[t];if(n!==ie&&Q(n,t))return a[t]=4,n[t];_s&&(a[t]=0)}}const u=ri[t];let f,d;if(u)return t==="$attrs"&&Pe(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ie&&Q(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,Q(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==ie&&Q(i,t))i[t]=n;else if(r!==ie&&Q(r,t))r[t]=n;else if(Q(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ie&&Q(e,a)||t!==ie&&Q(t,a)||(o=s[0])&&Q(o,a)||Q(r,a)||Q(ri,a)||Q(i.config.globalProperties,a)}},oh=nl();let lh=0;function ch(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||oh,s={uid:lh++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qo(r,i),emitsOptions:Po(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=md.bind(null,s),e.ce&&e.ce(s),s}let ye=null;const uh=()=>ye||$e,wn=e=>{ye=e,e.scope.on()},Gt=()=>{ye&&ye.scope.off(),ye=null};function ul(e){return e.vnode.shapeFlag&4}let rr=!1;function fh(e,t=!1){rr=t;const{props:n,children:r}=e.vnode,i=ul(e);jd(e,n,i,t),zd(e,r);const s=i?dh(e,t):void 0;return rr=!1,s}function dh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wo(new Proxy(e.ctx,ah));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?mh(e):null;wn(e),pn();const s=_t(r,e,0,[e.props,i]);if(Ft(),Gt(),Xa(s)){if(s.then(Gt,Gt),t)return s.then(a=>{fl(e,a,t)}).catch(a=>{Gr(a,e,0)});e.asyncDep=s}else fl(e,s,t)}else hl(e,t)}function fl(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Ao(t)),hl(e,n)}let dl;function hl(e,t,n){const r=e.type;if(!e.render){if(!t&&dl&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=we(we({isCustomElement:s,delimiters:o},a),l);r.render=dl(i,c)}}e.render=r.render||He}wn(e),pn(),Ld(e),Ft(),Gt()}function hh(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function mh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=hh(e))},slots:e.slots,emit:e.emit,expose:t}}function xs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ao(wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ri)return ri[n](e)}}))}function ph(e){return G(e)&&e.displayName||e.name}function gh(e){return G(e)&&"__vccOpts"in e}const se=(e,t)=>ld(e,t,rr);function In(e,t,n){const r=arguments.length;return r===2?pe(t)&&!z(t)?Cs(t)?Me(e,null,[t]):Me(e,t):Me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cs(n)&&(n=[n]),Me(e,t,n))}const vh="3.2.29",bh="http://www.w3.org/2000/svg",qt=typeof document!="undefined"?document:null,ml=qt&&qt.createElement("template"),yh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?qt.createElementNS(bh,e):qt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>qt.createTextNode(e),createComment:e=>qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ml.innerHTML=r?`<svg>${e}</svg>`:e;const o=ml.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _h(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wh(e,t,n){const r=e.style,i=Ie(n);if(n&&!i){for(const s in n)Rs(r,s,n[s]);if(t&&!Ie(t))for(const s in t)n[s]==null&&Rs(r,s,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const pl=/\s*!important$/;function Rs(e,t,n){if(z(n))n.forEach(r=>Rs(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Ih(e,t);pl.test(n)?e.setProperty(dn(r),n.replace(pl,""),"important"):e[r]=n}}const gl=["Webkit","Moz","ms"],Ps={};function Ih(e,t){const n=Ps[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Ps[t]=r;r=Dr(r);for(let i=0;i<gl.length;i++){const s=gl[i]+r;if(s in e)return Ps[t]=s}return t}const vl="http://www.w3.org/1999/xlink";function Eh(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vl,t.slice(6,t.length)):e.setAttributeNS(vl,t,n);else{const s=bf(t);n==null||s&&!qa(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function kh(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const o=n==null?"":n;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const o=typeof e[t];if(o==="boolean"){e[t]=qa(n);return}else if(n==null&&o==="string"){e[t]="",e.removeAttribute(t);return}else if(o==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let ii=Date.now,bl=!1;if(typeof window!="undefined"){ii()>document.createEvent("Event").timeStamp&&(ii=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);bl=!!(e&&Number(e[1])<=53)}let Ns=0;const Ah=Promise.resolve(),Th=()=>{Ns=0},Ch=()=>Ns||(Ah.then(Th),Ns=ii());function En(e,t,n,r){e.addEventListener(t,n,r)}function Sh(e,t,n,r){e.removeEventListener(t,n,r)}function Oh(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=xh(t);if(r){const c=s[t]=Rh(r,i);En(e,o,c,l)}else a&&(Sh(e,o,a,l),s[t]=void 0)}}const yl=/(?:Once|Passive|Capture)$/;function xh(e){let t;if(yl.test(e)){t={};let n;for(;n=e.match(yl);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[dn(e.slice(2)),t]}function Rh(e,t){const n=r=>{const i=r.timeStamp||ii();(bl||i>=n.attached-1)&&Fe(Ph(r,n.value),t,5,[r])};return n.value=e,n.attached=Ch(),n}function Ph(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const _l=/^on[a-z]/,Nh=(e,t,n,r,i=!1,s,a,o,l)=>{t==="class"?_h(e,r,i):t==="style"?wh(e,n,r):Pr(t)?Vi(t)||Oh(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mh(e,t,r,i))?kh(e,t,r,s,a,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Eh(e,t,r,i))};function Mh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&_l.test(t)&&G(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_l.test(t)&&Ie(n)?!1:t in e}const Et="transition",ir="animation",wl=(e,{slots:t})=>In(Uo,Lh(e),t);wl.displayName="Transition";const Il={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wl.props=we({},Uo.props,Il);const Yt=(e,t=[])=>{z(e)?e.forEach(n=>n(...t)):e&&e(...t)},El=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function Lh(e){const t={};for(const D in e)D in Il||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,b=Dh(i),A=b&&b[0],E=b&&b[1],{onBeforeEnter:g,onEnter:_,onEnterCancelled:R,onLeave:L,onLeaveCancelled:H,onBeforeAppear:J=g,onAppear:B=_,onAppearCancelled:ee=R}=t,q=(D,he,Se)=>{kn(D,he?u:o),kn(D,he?c:a),Se&&Se()},ve=(D,he)=>{kn(D,p),kn(D,d),he&&he()},be=D=>(he,Se)=>{const it=D?B:_,me=()=>q(he,D,Se);Yt(it,[he,me]),kl(()=>{kn(he,D?l:s),kt(he,D?u:o),El(it)||Al(he,r,A,me)})};return we(t,{onBeforeEnter(D){Yt(g,[D]),kt(D,s),kt(D,a)},onBeforeAppear(D){Yt(J,[D]),kt(D,l),kt(D,c)},onEnter:be(!1),onAppear:be(!0),onLeave(D,he){const Se=()=>ve(D,he);kt(D,f),$h(),kt(D,d),kl(()=>{kn(D,f),kt(D,p),El(L)||Al(D,r,E,Se)}),Yt(L,[D,Se])},onEnterCancelled(D){q(D,!1),Yt(R,[D])},onAppearCancelled(D){q(D,!0),Yt(ee,[D])},onLeaveCancelled(D){ve(D),Yt(H,[D])}})}function Dh(e){if(e==null)return null;if(pe(e))return[Ms(e.enter),Ms(e.leave)];{const t=Ms(e);return[t,t]}}function Ms(e){return $r(e)}function kt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function kn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function kl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uh=0;function Al(e,t,n,r){const i=e._endId=++Uh,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Fh(e,t);if(!a)return r();const c=a+"end";let u=0;const f=()=>{e.removeEventListener(c,d),s()},d=p=>{p.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),e.addEventListener(c,d)}function Fh(e,t){const n=window.getComputedStyle(e),r=b=>(n[b]||"").split(", "),i=r(Et+"Delay"),s=r(Et+"Duration"),a=Tl(i,s),o=r(ir+"Delay"),l=r(ir+"Duration"),c=Tl(o,l);let u=null,f=0,d=0;t===Et?a>0&&(u=Et,f=a,d=s.length):t===ir?c>0&&(u=ir,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?Et:ir:null,d=u?u===Et?s.length:l.length:0);const p=u===Et&&/\b(transform|all)(,|$)/.test(n[Et+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:p}}function Tl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Cl(n)+Cl(e[r])))}function Cl(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function $h(){return document.body.offsetHeight}const Sl=e=>{const t=e.props["onUpdate:modelValue"];return z(t)?n=>Ur(t,n):t};function jh(e){e.target.composing=!0}function Ol(e){const t=e.target;t.composing&&(t.composing=!1,Bh(t,"input"))}function Bh(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const E_={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Sl(i);const s=r||i.props&&i.props.type==="number";En(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=$r(o)),e._assign(o)}),n&&En(e,"change",()=>{e.value=e.value.trim()}),t||(En(e,"compositionstart",jh),En(e,"compositionend",Ol),En(e,"change",Ol))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Sl(s),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&$r(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},Hh=["ctrl","shift","alt","meta"],zh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hh.some(n=>e[`${n}Key`]&&!t.includes(n))},k_=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=zh[t[i]];if(s&&s(n,t))return}return e(n,...r)},Wh=we({patchProp:Nh},yh);let xl;function Vh(){return xl||(xl=Gd(Wh))}const A_=(...e)=>{const t=Vh().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Kh(r);if(!i)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Kh(e){return Ie(e)?document.querySelector(e):e}/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Rl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rl(Object(n),!0).forEach(function(r){Yh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function si(e){return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(e)}function Gh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function qh(e,t,n){return t&&Pl(e.prototype,t),n&&Pl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ls(e,t){return Xh(e)||Zh(e,t)||Nl(e,t)||tm()}function ai(e){return Jh(e)||Qh(e)||Nl(e)||em()}function Jh(e){if(Array.isArray(e))return Ds(e)}function Xh(e){if(Array.isArray(e))return e}function Qh(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zh(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Nl(e,t){if(!!e){if(typeof e=="string")return Ds(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ds(e,t)}}function Ds(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function em(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ml=function(){},Us={},Ll={},Dl=null,Ul={mark:Ml,measure:Ml};try{typeof window!="undefined"&&(Us=window),typeof document!="undefined"&&(Ll=document),typeof MutationObserver!="undefined"&&(Dl=MutationObserver),typeof performance!="undefined"&&(Ul=performance)}catch{}var nm=Us.navigator||{},Fl=nm.userAgent,$l=Fl===void 0?"":Fl,At=Us,fe=Ll,jl=Dl,oi=Ul;At.document;var ft=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Bl=~$l.indexOf("MSIE")||~$l.indexOf("Trident/"),dt="___FONT_AWESOME___",Fs=16,Hl="fa",zl="svg-inline--fa",Jt="data-fa-i2svg",$s="data-fa-pseudo-element",rm="data-fa-pseudo-element-pending",js="data-prefix",Bs="data-icon",Wl="fontawesome-i2svg",im="async",sm=["HTML","HEAD","STYLE","SCRIPT"],Vl=function(){try{return!0}catch{return!1}}(),Hs={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},li={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Kl={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},am={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},om=/fa[srltdbk\-\ ]/,Gl="fa-layers-text",lm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,cm={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ql=[1,2,3,4,5,6,7,8,9,10],um=ql.concat([11,12,13,14,15,16,17,18,19,20]),fm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dm=[].concat(ai(Object.keys(li)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xt.GROUP,Xt.SWAP_OPACITY,Xt.PRIMARY,Xt.SECONDARY]).concat(ql.map(function(e){return"".concat(e,"x")})).concat(um.map(function(e){return"w-".concat(e)})),Yl=At.FontAwesomeConfig||{};function hm(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var pm=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pm.forEach(function(e){var t=Ls(e,2),n=t[0],r=t[1],i=mm(hm(n));i!=null&&(Yl[r]=i)})}var gm={familyPrefix:Hl,styleDefault:"solid",replacementClass:zl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},sr=P(P({},gm),Yl);sr.autoReplaceSvg||(sr.observeMutations=!1);var j={};Object.keys(sr).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){sr[e]=n,ci.forEach(function(r){return r(j)})},get:function(){return sr[e]}})});At.FontAwesomeConfig=j;var ci=[];function vm(e){return ci.push(e),function(){ci.splice(ci.indexOf(e),1)}}var Tt=Fs,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bm(e){if(!(!e||!ft)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return fe.head.insertBefore(t,r),e}}var ym="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ar(){for(var e=12,t="";e-- >0;)t+=ym[Math.random()*62|0];return t}function An(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zs(e){return e.classList?An(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Jl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _m(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Jl(e[n]),'" ')},"").trim()}function ui(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ws(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function wm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Im(e){var t=e.transform,n=e.width,r=n===void 0?Fs:n,i=e.height,s=i===void 0?Fs:i,a=e.startCentered,o=a===void 0?!1:a,l="";return o&&Bl?l+="translate(".concat(t.x/Tt-r/2,"em, ").concat(t.y/Tt-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Tt,"em), calc(-50% + ").concat(t.y/Tt,"em)) "):l+="translate(".concat(t.x/Tt,"em, ").concat(t.y/Tt,"em) "),l+="scale(".concat(t.size/Tt*(t.flipX?-1:1),", ").concat(t.size/Tt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Em=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xl(){var e=Hl,t=zl,n=j.familyPrefix,r=j.replacementClass,i=Em;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Ql=!1;function Vs(){j.autoAddCss&&!Ql&&(bm(Xl()),Ql=!0)}var km={mixout:function(){return{dom:{css:Xl,insertCss:Vs}}},hooks:function(){return{beforeDOMElementCreation:function(){Vs()},beforeI2svg:function(){Vs()}}}},ht=At||{};ht[dt]||(ht[dt]={});ht[dt].styles||(ht[dt].styles={});ht[dt].hooks||(ht[dt].hooks={});ht[dt].shims||(ht[dt].shims=[]);var We=ht[dt],Zl=[],Am=function e(){fe.removeEventListener("DOMContentLoaded",e),fi=1,Zl.map(function(t){return t()})},fi=!1;ft&&(fi=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),fi||fe.addEventListener("DOMContentLoaded",Am));function Tm(e){!ft||(fi?setTimeout(e,0):Zl.push(e))}function or(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Jl(e):"<".concat(t," ").concat(_m(r),">").concat(s.map(or).join(""),"</").concat(t,">")}function ec(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cm=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ks=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?Cm(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<a;l++)c=s[l],u=o(u,t[c],c,t);return u};function Sm(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Gs(e){var t=Sm(e);return t.length===1?t[0].toString(16):null}function Om(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function tc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function qs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=tc(t);typeof We.hooks.addPack=="function"&&!i?We.hooks.addPack(e,tc(t)):We.styles[e]=P(P({},We.styles[e]||{}),s),e==="fas"&&qs("fa",t)}var lr=We.styles,xm=We.shims,Rm=Object.values(Kl),Ys=null,nc={},rc={},ic={},sc={},ac={},Pm=Object.keys(Hs);function Nm(e){return~dm.indexOf(e)}function Mm(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Nm(i)?i:null}var oc=function(){var t=function(s){return Ks(lr,function(a,o,l){return a[l]=Ks(o,s,{}),a},{})};nc=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=a})}return i}),rc=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=a})}return i}),ac=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(l){i[l]=a}),i});var n="far"in lr||j.autoFetchSvg,r=Ks(xm,function(i,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});ic=r.names,sc=r.unicodes,Ys=di(j.styleDefault)};vm(function(e){Ys=di(e.styleDefault)});oc();function Js(e,t){return(nc[e]||{})[t]}function Lm(e,t){return(rc[e]||{})[t]}function Tn(e,t){return(ac[e]||{})[t]}function lc(e){return ic[e]||{prefix:null,iconName:null}}function Dm(e){var t=sc[e],n=Js("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ct(){return Ys}var Xs=function(){return{prefix:null,iconName:null,rest:[]}};function di(e){var t=Hs[e],n=li[e]||li[t],r=e in We.styles?e:null;return n||r||null}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,s=e.reduce(function(a,o){var l=Mm(j.familyPrefix,o);if(lr[o]?(o=Rm.includes(o)?am[o]:o,i=o,a.prefix=o):Pm.indexOf(o)>-1?(i=o,a.prefix=di(o)):l?a.iconName=l:o!==j.replacementClass&&a.rest.push(o),!r&&a.prefix&&a.iconName){var c=i==="fa"?lc(a.iconName):{},u=Tn(a.prefix,a.iconName);c.prefix&&(i=null),a.iconName=c.iconName||u||a.iconName,a.prefix=c.prefix||a.prefix,a.prefix==="far"&&!lr.far&&lr.fas&&!j.autoFetchSvg&&(a.prefix="fas")}return a},Xs());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Ct()||"fas"),s}var Um=function(){function e(){Gh(this,e),this.definitions={}}return qh(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=P(P({},n.definitions[o]||{}),a[o]),qs(o,a[o]);var l=Kl[o];l&&qs(l,a[o]),oc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=c)}),n[o][l]=c}),n}}]),e}(),cc=[],Cn={},Sn={},Fm=Object.keys(Sn);function $m(e,t){var n=t.mixoutsTo;return cc=e,Cn={},Object.keys(Sn).forEach(function(r){Fm.indexOf(r)===-1&&delete Sn[r]}),cc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),si(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Cn[a]||(Cn[a]=[]),Cn[a].push(s[a])})}r.provides&&r.provides(Sn)}),n}function Qs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Cn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Qt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Cn[e]||[];i.forEach(function(s){s.apply(null,n)})}function mt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sn[e]?Sn[e].apply(null,t):void 0}function Zs(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ct();if(!!t)return t=Tn(n,t)||t,ec(uc.definitions,n,t)||ec(We.styles,n,t)}var uc=new Um,jm=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Qt("noAuto")},Bm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(Qt("beforeI2svg",t),mt("pseudoElements2svg",t),mt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Tm(function(){zm({autoReplaceSvgRoot:n}),Qt("watch",t)})}},Hm={icon:function(t){if(t===null)return null;if(si(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Tn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=di(t[0]);return{prefix:r,iconName:Tn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.familyPrefix,"-"))>-1||t.match(om))){var i=hi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ct(),iconName:Tn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Ct();return{prefix:s,iconName:Tn(s,t)||t}}}},Le={noAuto:jm,config:j,dom:Bm,parse:Hm,library:uc,findIconDefinition:Zs,toHtml:or},zm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(We.styles).length>0||j.autoFetchSvg)&&ft&&j.autoReplaceSvg&&Le.dom.i2svg({node:r})};function mi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return or(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ft){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Wm(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Ws(a)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};i.style=ui(P(P({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Vm(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(j.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:a}),children:r}]}]}function ea(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,p=d===void 0?!1:d,b=r.found?r:n,A=b.width,E=b.height,g=i==="fak",_=[j.replacementClass,s?"".concat(j.familyPrefix,"-").concat(s):""].filter(function(q){return f.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(f.classes).join(" "),R={children:[],attributes:P(P({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(E)})},L=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/E*16*.0625,"em")}:{};p&&(R.attributes[Jt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||ar())},children:[l]}),delete R.attributes.title);var H=P(P({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:a,symbol:o,styles:P(P({},L),f.styles)}),J=r.found&&n.found?mt("generateAbstractMask",H)||{children:[],attributes:{}}:mt("generateAbstractIcon",H)||{children:[],attributes:{}},B=J.children,ee=J.attributes;return H.children=B,H.attributes=ee,o?Vm(H):Wm(H)}function fc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,l=o===void 0?!1:o,c=P(P(P({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[Jt]="");var u=P({},a.styles);Ws(i)&&(u.transform=Im({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=ui(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Km(e){var t=e.content,n=e.title,r=e.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ui(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ta=We.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),i=Ls(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var Gm={found:!1,width:512,height:512};function qm(e,t){!Vl&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=Ct()),new Promise(function(r,i){if(mt("missingIconAbstract"),n==="fa"){var s=lc(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&ta[t]&&ta[t][e]){var a=ta[t][e];return r(na(a))}qm(e,t),r(P(P({},Gm),{},{icon:j.showMissingIcons&&e?mt("missingIconAbstract")||{}:{}}))})}var dc=function(){},ia=j.measurePerformance&&oi&&oi.mark&&oi.measure?oi:{mark:dc,measure:dc},cr='FA "6.0.0"',Ym=function(t){return ia.mark("".concat(cr," ").concat(t," begins")),function(){return hc(t)}},hc=function(t){ia.mark("".concat(cr," ").concat(t," ends")),ia.measure("".concat(cr," ").concat(t),"".concat(cr," ").concat(t," begins"),"".concat(cr," ").concat(t," ends"))},sa={begin:Ym,end:hc},pi=function(){};function mc(e){var t=e.getAttribute?e.getAttribute(Jt):null;return typeof t=="string"}function Jm(e){var t=e.getAttribute?e.getAttribute(js):null,n=e.getAttribute?e.getAttribute(Bs):null;return t&&n}function Xm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function Qm(){if(j.autoReplaceSvg===!0)return gi.replace;var e=gi[j.autoReplaceSvg];return e||gi.replace}function Zm(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function ep(e){return fe.createElement(e)}function pc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Zm:ep:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(pc(a,{ceFn:r}))}),i}function tp(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var gi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(pc(i),n)}),n.getAttribute(Jt)===null&&j.keepOriginalSource){var r=fe.createComment(tp(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~zs(n).indexOf(j.replacementClass))return gi.replace(t);var i=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,l){return l===j.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return or(o)}).join(`
`);n.setAttribute(Jt,""),n.innerHTML=a}};function gc(e){e()}function vc(e,t){var n=typeof t=="function"?t:pi;if(e.length===0)n();else{var r=gc;j.mutateApproach===im&&(r=At.requestAnimationFrame||gc),r(function(){var i=Qm(),s=sa.begin("mutate");e.map(i),s(),n()})}}var aa=!1;function bc(){aa=!0}function oa(){aa=!1}var vi=null;function yc(e){if(!!jl&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?pi:t,r=e.nodeCallback,i=r===void 0?pi:r,s=e.pseudoElementsCallback,a=s===void 0?pi:s,o=e.observeMutationsRoot,l=o===void 0?fe:o;vi=new jl(function(c){if(!aa){var u=Ct();An(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!mc(f.addedNodes[0])&&(j.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&mc(f.target)&&~fm.indexOf(f.attributeName))if(f.attributeName==="class"&&Jm(f.target)){var d=hi(zs(f.target)),p=d.prefix,b=d.iconName;f.target.setAttribute(js,p||u),b&&f.target.setAttribute(Bs,b)}else Xm(f.target)&&i(f.target)})}}),!!ft&&vi.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function np(){!vi||vi.disconnect()}function rp(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function ip(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=hi(zs(e));return i.prefix||(i.prefix=Ct()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=Lm(i.prefix,e.innerText)||Js(i.prefix,Gs(e.innerText))),i}function sp(e){var t=An(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||ar()):(t["aria-hidden"]="true",t.focusable="false")),t}function ap(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _c(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ip(e),r=n.iconName,i=n.prefix,s=n.rest,a=sp(e),o=Qs("parseNodeAttributes",{},e),l=t.styleParser?rp(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var op=We.styles;function wc(e){var t=j.autoReplaceSvg==="nest"?_c(e,{styleParser:!1}):_c(e);return~t.extra.classes.indexOf(Gl)?mt("generateLayersText",e,t):mt("generateSvgReplacementMutation",e,t)}function Ic(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();var n=fe.documentElement.classList,r=function(f){return n.add("".concat(Wl,"-").concat(f))},i=function(f){return n.remove("".concat(Wl,"-").concat(f))},s=j.autoFetchSvg?Object.keys(Hs):Object.keys(op),a=[".".concat(Gl,":not([").concat(Jt,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Jt,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=An(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=sa.begin("onTree"),c=o.reduce(function(u,f){try{var d=wc(f);d&&u.push(d)}catch(p){Vl||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){vc(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(d){l(),f(d)})})}function lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wc(e).then(function(n){n&&vc([n],t)})}function cp(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Zs(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Zs(i||{})),e(r,P(P({},n),{},{mask:i}))}}var up=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,b=p===void 0?null:p,A=n.classes,E=A===void 0?[]:A,g=n.attributes,_=g===void 0?{}:g,R=n.styles,L=R===void 0?{}:R;if(!!t){var H=t.prefix,J=t.iconName,B=t.icon;return mi(P({type:"icon"},t),function(){return Qt("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(d?_["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(b||ar()):(_["aria-hidden"]="true",_.focusable="false")),ea({icons:{main:na(B),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:P(P({},tt),i),symbol:a,title:d,maskId:u,titleId:b,extra:{attributes:_,styles:L,classes:E}})})}},fp={mixout:function(){return{icon:cp(up)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ic,n.nodeCallback=lp,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,a=s===void 0?function(){}:s;return Ic(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,b){Promise.all([ra(i,o),u.iconName?ra(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var E=Ls(A,2),g=E[0],_=E[1];p([n,ea({icons:{main:g,mask:_},prefix:o,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:d,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,l=ui(o);l.length>0&&(i.style=l);var c;return Ws(a)&&(c=mt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},dp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return mi({type:"layer"},function(){Qt("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(ai(s)).join(" ")},children:a}]})}}}},hp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return mi({type:"counter",content:n},function(){return Qt("beforeDOMElementCreation",{content:n,params:r}),Km({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(ai(o))}})})}}}},mp={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?tt:i,a=r.title,o=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return mi({type:"text",content:n},function(){return Qt("beforeDOMElementCreation",{content:n,params:r}),fc({content:n,transform:P(P({},tt),s),title:o,extra:{attributes:f,styles:p,classes:["".concat(j.familyPrefix,"-layers-text")].concat(ai(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,l=null;if(Bl){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return j.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,fc({content:n.innerHTML,width:o,height:l,transform:s,title:i,extra:a,watchable:!0})])}}},pp=new RegExp('"',"ug"),Ec=[1105920,1112319];function gp(e){var t=e.replace(pp,""),n=Om(t,0),r=n>=Ec[0]&&n<=Ec[1],i=t.length===2?t[0]===t[1]:!1;return{value:Gs(i?t[0]:t),isSecondary:r||i}}function kc(e,t){var n="".concat(rm).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=An(e.children),a=s.filter(function(J){return J.getAttribute($s)===t})[0],o=At.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(lm),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?li[l[2].toLowerCase()]:cm[c],p=gp(f),b=p.value,A=p.isSecondary,E=l[0].startsWith("FontAwesome"),g=Js(d,b),_=g;if(E){var R=Dm(b);R.iconName&&R.prefix&&(g=R.iconName,d=R.prefix)}if(g&&!A&&(!a||a.getAttribute(js)!==d||a.getAttribute(Bs)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var L=ap(),H=L.extra;H.attributes[$s]=t,ra(g,d).then(function(J){var B=ea(P(P({},L),{},{icons:{main:J,mask:Xs()},prefix:d,iconName:_,extra:H,watchable:!0})),ee=fe.createElement("svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=B.map(function(q){return or(q)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vp(e){return Promise.all([kc(e,"::before"),kc(e,"::after")])}function bp(e){return e.parentNode!==document.head&&!~sm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($s)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ac(e){if(!!ft)return new Promise(function(t,n){var r=An(e.querySelectorAll("*")).filter(bp).map(vp),i=sa.begin("searchPseudoElements");bc(),Promise.all(r).then(function(){i(),oa(),t()}).catch(function(){i(),oa(),n()})})}var yp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ac,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;j.searchPseudoElements&&Ac(i)}}},Tc=!1,_p={mixout:function(){return{dom:{unwatch:function(){bc(),Tc=!0}}}},hooks:function(){return{bootstrap:function(){yc(Qs("mutationObserverCallbacks",{}))},noAuto:function(){np()},watch:function(n){var r=n.observeMutationsRoot;Tc?oa():yc(Qs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},wp={mixout:function(){return{parse:{transform:function(n){return Cc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:d};return{tag:"g",attributes:P({},p.outer),children:[{tag:"g",attributes:P({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),p.path)}]}]}}}},la={x:0,y:0,width:"100%",height:"100%"};function Sc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ip(e){return e.tag==="g"?e.children:[e]}var Ep={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?hi(i.split(" ").map(function(a){return a.trim()})):Xs();return s.prefix||(s.prefix=Ct()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,l=n.transform,c=s.width,u=s.icon,f=a.width,d=a.icon,p=wm({transform:l,containerWidth:f,iconWidth:c}),b={tag:"rect",attributes:P(P({},la),{},{fill:"white"})},A=u.children?{children:u.children.map(Sc)}:{},E={tag:"g",attributes:P({},p.inner),children:[Sc(P({tag:u.tag,attributes:P(P({},u.attributes),p.path)},A))]},g={tag:"g",attributes:P({},p.outer),children:[E]},_="mask-".concat(o||ar()),R="clip-".concat(o||ar()),L={tag:"mask",attributes:P(P({},la),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,g]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Ip(d)},L]};return r.push(H,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(_,")")},la)}),{children:r,attributes:i}}}},kp={provides:function(t){var n=!1;At.matchMedia&&(n=At.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=P(P({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ap={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Tp=[km,fp,dp,hp,mp,yp,_p,wp,Ep,kp,Ap];$m(Tp,{mixoutsTo:Le});Le.noAuto;var Oc=Le.config,T_=Le.library;Le.dom;var xc=Le.parse;Le.findIconDefinition;Le.toHtml;var Cp=Le.icon;Le.layer;var Sp=Le.text;Le.counter;var Op=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function xp(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Rp=xp(function(e){(function(t){var n=function(g,_,R){if(!c(_)||f(_)||d(_)||p(_)||l(_))return _;var L,H=0,J=0;if(u(_))for(L=[],J=_.length;H<J;H++)L.push(n(g,_[H],R));else{L={};for(var B in _)Object.prototype.hasOwnProperty.call(_,B)&&(L[g(B,R)]=n(g,_[B],R))}return L},r=function(g,_){_=_||{};var R=_.separator||"_",L=_.split||/(?=[A-Z])/;return g.split(L).join(R)},i=function(g){return b(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(_,R){return R?R.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},s=function(g){var _=i(g);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(g,_){return r(g,_).toLowerCase()},o=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return o.call(g)=="[object Array]"},f=function(g){return o.call(g)=="[object Date]"},d=function(g){return o.call(g)=="[object RegExp]"},p=function(g){return o.call(g)=="[object Boolean]"},b=function(g){return g=g-0,g===g},A=function(g,_){var R=_&&"process"in _?_.process:_;return typeof R!="function"?g:function(L,H){return R(L,g,H)}},E={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(g,_){return n(A(i,_),g)},decamelizeKeys:function(g,_){return n(A(a,_),g,_)},pascalizeKeys:function(g,_){return n(A(s,_),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=E:t.humps=E})(Op)}),Pp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ur=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},bi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Np=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},ca=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Mp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Rp.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function Lp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ua(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Lp(u);break;case"style":l.style=Mp(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=Np(n,["class","style"]);return In(e.tag,bi({},t,{class:i.class,style:bi({},i.style,a)},i.attrs,o),r)}var Rc=!1;try{Rc=!0}catch{}function Dp(){if(!Rc&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ur({},e,t):{}}function Up(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ur(t,"fa-"+e.size,e.size!==null),ur(t,"fa-rotate-"+e.rotation,e.rotation!==null),ur(t,"fa-pull-"+e.pull,e.pull!==null),ur(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Pc(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Pp(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var C_=ct({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=se(function(){return Pc(t.icon)}),s=se(function(){return fr("classes",Up(t))}),a=se(function(){return fr("transform",typeof t.transform=="string"?xc.transform(t.transform):t.transform)}),o=se(function(){return fr("mask",Pc(t.mask))}),l=se(function(){return Cp(i.value,bi({},s.value,a.value,o.value,{symbol:t.symbol,title:t.title}))});$t(l,function(u){if(!u)return Dp("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var c=se(function(){return l.value?ua(l.value.abstract[0],{},r):null});return function(){return c.value}}});ct({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=Oc.familyPrefix,s=se(function(){return[i+"-layers"].concat(ca(t.fixedWidth?[i+"-fw"]:[]))});return function(){return In("div",{class:s.value},r.default?r.default():[])}}});ct({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=Oc.familyPrefix,s=se(function(){return fr("classes",[].concat(ca(t.counter?[i+"-layers-counter"]:[]),ca(t.position?[i+"-layers-"+t.position]:[])))}),a=se(function(){return fr("transform",typeof t.transform=="string"?xc.transform(t.transform):t.transform)}),o=se(function(){var c=Sp(t.value.toString(),bi({},a.value,s.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=se(function(){return ua(o.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var S_={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},O_={prefix:"fas",iconName:"fire-flame-curved",icon:[384,512,["fire-alt"],"f7e4","M384 319.1C384 425.9 297.9 512 192 512s-192-86.13-192-192c0-58.67 27.82-106.8 54.57-134.1C69.54 169.3 96 179.8 96 201.5v85.5c0 35.17 27.97 64.5 63.16 64.94C194.9 352.5 224 323.6 224 288c0-88-175.1-96.12-52.15-277.2c13.5-19.72 44.15-10.77 44.15 13.03C215.1 127 384 149.7 384 319.1z"]},x_={prefix:"fas",iconName:"house",icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]};function Fp(){return Nc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Nc(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const $p=typeof Proxy=="function",jp="devtools-plugin:setup",Bp="plugin:settings:set";class Hp{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const a in t.settings){const o=t.settings[a];r[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}s=a}},n&&n.on(Bp,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function zp(e,t){const n=Nc(),r=Fp(),i=$p&&e.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(jp,e,t);else{const s=i?new Hp(e,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Mc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",On=e=>Mc?Symbol(e):"_vr_"+e,Wp=On("rvlm"),Lc=On("rvd"),fa=On("r"),Dc=On("rl"),da=On("rvl"),xn=typeof window!="undefined";function Vp(e){return e.__esModule||Mc&&e[Symbol.toStringTag]==="Module"}const ae=Object.assign;function ha(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const dr=()=>{},Kp=/\/$/,Gp=e=>e.replace(Kp,"");function ma(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("?"),l=t.indexOf("#",o>-1?o:0);return o>-1&&(r=t.slice(0,o),s=t.slice(o+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Xp(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function qp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Uc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yp(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Rn(t.matched[r],n.matched[i])&&Fc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jp(e[n],t[n]))return!1;return!0}function Jp(e,t){return Array.isArray(e)?$c(e,t):Array.isArray(t)?$c(t,e):e===t}function $c(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],!(i===1||a==="."))if(a==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var hr;(function(e){e.pop="pop",e.push="push"})(hr||(hr={}));var mr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mr||(mr={}));function Qp(e){if(!e)if(xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gp(e)}const Zp=/^[^#]+#/;function eg(e,t){return e.replace(Zp,"#")+t}function tg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const yi=()=>({left:window.pageXOffset,top:window.pageYOffset});function ng(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=tg(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function jc(e,t){return(history.state?history.state.position-t:-1)+e}const pa=new Map;function rg(e,t){pa.set(e,t)}function ig(e){const t=pa.get(e);return pa.delete(e),t}let sg=()=>location.protocol+"//"+location.host;function Bc(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Uc(l,"")}return Uc(n,e)+r+i}function ag(e,t,n,r){let i=[],s=[],a=null;const o=({state:d})=>{const p=Bc(e,location),b=n.value,A=t.value;let E=0;if(d){if(n.value=p,t.value=d,a&&a===b){a=null;return}E=A?d.position-A.position:0}else r(p);i.forEach(g=>{g(n.value,b,{delta:E,type:hr.pop,direction:E?E>0?mr.forward:mr.back:mr.unknown})})};function l(){a=n.value}function c(d){i.push(d);const p=()=>{const b=i.indexOf(d);b>-1&&i.splice(b,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ae({},d.state,{scroll:yi()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Hc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?yi():null}}function og(e){const{history:t,location:n}=window,r={value:Bc(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:sg()+e+l;try{t[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function a(l,c){const u=ae({},t.state,Hc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function o(l,c){const u=ae({},i.value,t.state,{forward:l,scroll:yi()});s(u.current,u,!0);const f=ae({},Hc(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function R_(e){e=Qp(e);const t=og(e),n=ag(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ae({location:"",base:e,go:r,createHref:eg.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function lg(e){return typeof e=="string"||e&&typeof e=="object"}function zc(e){return typeof e=="string"||typeof e=="symbol"}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wc=On("nf");var Vc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vc||(Vc={}));function Pn(e,t){return ae(new Error,{type:e,[Wc]:!0},t)}function Zt(e,t){return e instanceof Error&&Wc in e&&(t==null||!!(e.type&t))}const Kc="[^/]+?",cg={sensitive:!1,strict:!1,start:!0,end:!0},ug=/[.+*?^${}()[\]/\\]/g;function fg(e,t){const n=ae({},cg,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(ug,"\\$&"),p+=40;else if(d.type===1){const{value:b,repeatable:A,optional:E,regexp:g}=d;s.push({name:b,repeatable:A,optional:E});const _=g||Kc;if(_!==Kc){p+=10;try{new RegExp(`(${_})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+L.message)}}let R=A?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(R=E&&c.length<2?`(?:/${R})`:"/"+R),E&&(R+="?"),i+=R,p+=20,E&&(p+=-8),A&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",b=s[d-1];f[b.name]=p&&b.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:b,repeatable:A,optional:E}=p,g=b in c?c[b]:"";if(Array.isArray(g)&&!A)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(g)?g.join("/"):g;if(!_)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=_}}return u}return{re:a,score:r,keys:s,parse:o,stringify:l}}function dg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hg(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=dg(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const mg={type:0,value:""},pg=/[a-zA-Z0-9_]/;function gg(e){if(!e)return[[]];if(e==="/")return[[mg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:pg.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),a(),i}function vg(e,t,n){const r=fg(gg(e.path),n),i=ae(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function bg(e,t){const n=[],r=new Map;t=qc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,d){const p=!d,b=_g(u);b.aliasOf=d&&d.record;const A=qc(t,u),E=[b];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of R)E.push(ae({},b,{components:d?d.record.components:b.components,path:L,aliasOf:d?d.record:b}))}let g,_;for(const R of E){const{path:L}=R;if(f&&L[0]!=="/"){const H=f.record.path,J=H[H.length-1]==="/"?"":"/";R.path=f.record.path+(L&&J+L)}if(g=vg(R,f,A),d?d.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),p&&u.name&&!Gc(g)&&a(u.name)),"children"in b){const H=b.children;for(let J=0;J<H.length;J++)s(H[J],g,d&&d.children[J])}d=d||g,l(g)}return _?()=>{a(_)}:dr}function a(u){if(zc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function l(u){let f=0;for(;f<n.length&&hg(u,n[f])>=0;)f++;n.splice(f,0,u),u.record.name&&!Gc(u)&&r.set(u.record.name,u)}function c(u,f){let d,p={},b,A;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Pn(1,{location:u});A=d.record.name,p=ae(yg(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params),b=d.stringify(p)}else if("path"in u)b=u.path,d=n.find(_=>_.re.test(b)),d&&(p=d.parse(b),A=d.record.name);else{if(d=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw Pn(1,{location:u,currentLocation:f});A=d.record.name,p=ae({},f.params,u.params),b=d.stringify(p)}const E=[];let g=d;for(;g;)E.unshift(g.record),g=g.parent;return{name:A,path:b,params:p,matched:E,meta:Ig(E)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function yg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _g(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function wg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Gc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ig(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function qc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Yc=/#/g,Eg=/&/g,kg=/\//g,Ag=/=/g,Tg=/\?/g,Jc=/\+/g,Cg=/%5B/g,Sg=/%5D/g,Xc=/%5E/g,Og=/%60/g,Qc=/%7B/g,xg=/%7C/g,Zc=/%7D/g,Rg=/%20/g;function ga(e){return encodeURI(""+e).replace(xg,"|").replace(Cg,"[").replace(Sg,"]")}function Pg(e){return ga(e).replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function va(e){return ga(e).replace(Jc,"%2B").replace(Rg,"+").replace(Yc,"%23").replace(Eg,"%26").replace(Og,"`").replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function Ng(e){return va(e).replace(Ag,"%3D")}function Mg(e){return ga(e).replace(Yc,"%23").replace(Tg,"%3F")}function Lg(e){return e==null?"":Mg(e).replace(kg,"%2F")}function _i(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Dg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Jc," "),a=s.indexOf("="),o=_i(a<0?s:s.slice(0,a)),l=a<0?null:_i(s.slice(a+1));if(o in t){let c=t[o];Array.isArray(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function eu(e){let t="";for(let n in e){const r=e[n];if(n=Ng(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&va(s)):[r&&va(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ug(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}function pr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ot(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(Pn(4,{from:n,to:t})):f instanceof Error?o(f):lg(f)?o(Pn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function ba(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(Fg(o)){const c=(o.__vccOpts||o)[t];c&&i.push(Ot(c,n,r,s,a))}else{let l=o();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Vp(c)?c.default:c;s.components[a]=u;const d=(u.__vccOpts||u)[t];return d&&Ot(d,n,r,s,a)()}))}}return i}function Fg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){const t=ze(fa),n=ze(Dc),r=se(()=>t.resolve(Jn(e.to))),i=se(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Rn.bind(null,u));if(d>-1)return d;const p=nu(l[c-2]);return c>1&&nu(u)===p&&f[f.length-1].path!==p?f.findIndex(Rn.bind(null,l[c-2])):d}),s=se(()=>i.value>-1&&Hg(n.params,r.value.params)),a=se(()=>i.value>-1&&i.value===n.matched.length-1&&Fc(n.params,r.value.params));function o(l={}){return Bg(l)?t[Jn(e.replace)?"replace":"push"](Jn(e.to)).catch(dr):Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const $g=ct({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tu,setup(e,{slots:t}){const n=gn(tu(e)),{options:r}=ze(fa),i=se(()=>({[ru(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ru(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:In("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),jg=$g;function Bg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hg(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function nu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ru=(e,t,n)=>e!=null?e:t!=null?t:n,zg=ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=ze(da),i=se(()=>e.route||r.value),s=ze(Lc,0),a=se(()=>i.value.matched[s]);_n(Lc,s+1),_n(Wp,a),_n(da,i);const o=Je();return $t(()=>[o.value,a.value,e.name],([l,c,u],[f,d,p])=>{c&&(c.instances[u]=l,d&&d!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),l&&c&&(!d||!Rn(c,d)||!f)&&(c.enterCallbacks[u]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=i.value,c=a.value,u=c&&c.components[e.name],f=e.name;if(!u)return iu(n.default,{Component:u,route:l});const d=c.props[e.name],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,A=In(u,ae({},p,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(c.instances[f]=null)},ref:o}));return iu(n.default,{Component:A,route:l})||A}}});function iu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wg=zg;function P_(e){const t=bg(e.routes,e),n=e.parseQuery||Dg,r=e.stringifyQuery||eu,i=e.history,s=pr(),a=pr(),o=pr(),l=id(St);let c=St;xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ha.bind(null,y=>""+y),f=ha.bind(null,Lg),d=ha.bind(null,_i);function p(y,M){let O,U;return zc(y)?(O=t.getRecordMatcher(y),U=M):U=y,t.addRoute(U,O)}function b(y){const M=t.getRecordMatcher(y);M&&t.removeRoute(M)}function A(){return t.getRoutes().map(y=>y.record)}function E(y){return!!t.getRecordMatcher(y)}function g(y,M){if(M=ae({},M||l.value),typeof y=="string"){const K=ma(n,y,M.path),h=t.resolve({path:K.path},M),m=i.createHref(K.fullPath);return ae(K,h,{params:d(h.params),hash:_i(K.hash),redirectedFrom:void 0,href:m})}let O;if("path"in y)O=ae({},y,{path:ma(n,y.path,M.path).path});else{const K=ae({},y.params);for(const h in K)K[h]==null&&delete K[h];O=ae({},y,{params:f(y.params)}),M.params=f(M.params)}const U=t.resolve(O,M),ne=y.hash||"";U.params=u(d(U.params));const le=qp(r,ae({},y,{hash:Pg(ne),path:U.path})),Y=i.createHref(le);return ae({fullPath:le,hash:ne,query:r===eu?Ug(y.query):y.query||{}},U,{redirectedFrom:void 0,href:Y})}function _(y){return typeof y=="string"?ma(n,y,l.value.path):ae({},y)}function R(y,M){if(c!==y)return Pn(8,{from:M,to:y})}function L(y){return B(y)}function H(y){return L(ae(_(y),{replace:!0}))}function J(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let U=typeof O=="function"?O(y):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=_(U):{path:U},U.params={}),ae({query:y.query,hash:y.hash,params:y.params},U)}}function B(y,M){const O=c=g(y),U=l.value,ne=y.state,le=y.force,Y=y.replace===!0,K=J(O);if(K)return B(ae(_(K),{state:ne,force:le,replace:Y}),M||O);const h=O;h.redirectedFrom=M;let m;return!le&&Yp(r,U,O)&&(m=Pn(16,{to:h,from:U}),ln(U,U,!0,!1)),(m?Promise.resolve(m):q(h,U)).catch(v=>Zt(v)?v:oe(v,h,U)).then(v=>{if(v){if(Zt(v,2))return B(ae(_(v.to),{state:ne,force:le,replace:Y}),M||h)}else v=be(h,U,!0,Y,ne);return ve(h,U,v),v})}function ee(y,M){const O=R(y,M);return O?Promise.reject(O):Promise.resolve()}function q(y,M){let O;const[U,ne,le]=Vg(y,M);O=ba(U.reverse(),"beforeRouteLeave",y,M);for(const K of U)K.leaveGuards.forEach(h=>{O.push(Ot(h,y,M))});const Y=ee.bind(null,y,M);return O.push(Y),Nn(O).then(()=>{O=[];for(const K of s.list())O.push(Ot(K,y,M));return O.push(Y),Nn(O)}).then(()=>{O=ba(ne,"beforeRouteUpdate",y,M);for(const K of ne)K.updateGuards.forEach(h=>{O.push(Ot(h,y,M))});return O.push(Y),Nn(O)}).then(()=>{O=[];for(const K of y.matched)if(K.beforeEnter&&!M.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const h of K.beforeEnter)O.push(Ot(h,y,M));else O.push(Ot(K.beforeEnter,y,M));return O.push(Y),Nn(O)}).then(()=>(y.matched.forEach(K=>K.enterCallbacks={}),O=ba(le,"beforeRouteEnter",y,M),O.push(Y),Nn(O))).then(()=>{O=[];for(const K of a.list())O.push(Ot(K,y,M));return O.push(Y),Nn(O)}).catch(K=>Zt(K,8)?K:Promise.reject(K))}function ve(y,M,O){for(const U of o.list())U(y,M,O)}function be(y,M,O,U,ne){const le=R(y,M);if(le)return le;const Y=M===St,K=xn?history.state:{};O&&(U||Y?i.replace(y.fullPath,ae({scroll:Y&&K&&K.scroll},ne)):i.push(y.fullPath,ne)),l.value=y,ln(y,M,O,Y),De()}let D;function he(){D=i.listen((y,M,O)=>{const U=g(y),ne=J(U);if(ne){B(ae(ne,{replace:!0}),U).catch(dr);return}c=U;const le=l.value;xn&&rg(jc(le.fullPath,O.delta),yi()),q(U,le).catch(Y=>Zt(Y,4|8)?Y:Zt(Y,2)?(B(Y.to,U).then(K=>{Zt(K,4|16)&&!O.delta&&O.type===hr.pop&&i.go(-1,!1)}).catch(dr),Promise.reject()):(O.delta&&i.go(-O.delta,!1),oe(Y,U,le))).then(Y=>{Y=Y||be(U,le,!1),Y&&(O.delta?i.go(-O.delta,!1):O.type===hr.pop&&Zt(Y,4|16)&&i.go(-1,!1)),ve(U,le,Y)}).catch(dr)})}let Se=pr(),it=pr(),me;function oe(y,M,O){De(y);const U=it.list();return U.length?U.forEach(ne=>ne(y,M,O)):console.error(y),Promise.reject(y)}function te(){return me&&l.value!==St?Promise.resolve():new Promise((y,M)=>{Se.add([y,M])})}function De(y){me||(me=!0,he(),Se.list().forEach(([M,O])=>y?O(y):M()),Se.reset())}function ln(y,M,O,U){const{scrollBehavior:ne}=e;if(!xn||!ne)return Promise.resolve();const le=!O&&ig(jc(y.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return lt().then(()=>ne(y,M,le)).then(Y=>Y&&ng(Y)).catch(Y=>oe(Y,y,M))}const st=y=>i.go(y);let Ge;const Ue=new Set;return{currentRoute:l,addRoute:p,removeRoute:b,hasRoute:E,getRoutes:A,resolve:g,options:e,push:L,replace:H,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:it.add,isReady:te,install(y){const M=this;y.component("RouterLink",jg),y.component("RouterView",Wg),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(l)}),xn&&!Ge&&l.value===St&&(Ge=!0,L(i.location).catch(ne=>{}));const O={};for(const ne in St)O[ne]=se(()=>l.value[ne]);y.provide(fa,M),y.provide(Dc,gn(O)),y.provide(da,l);const U=y.unmount;Ue.add(y),y.unmount=function(){Ue.delete(y),Ue.size<1&&(c=St,D&&D(),l.value=St,Ge=!1,me=!1),U()}}}}function Nn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Vg(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>Rn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>Rn(c,l))||i.push(l))}return[n,r,i]}/**
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
 */const Kg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Gg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,p=c&63;l||(p=64,a||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Kg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw Error();const d=s<<2|o>>4;if(r.push(d),c!==64){const p=o<<4&240|c>>2;if(r.push(p),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Yg=function(e){try{return qg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class Jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Qg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ev(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
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
 */const tv="FirebaseError";class Mn extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=tv,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?nv(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Mn(i,o,r)}}function nv(e,t){return e.replace(rv,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const rv=/\{\$([^}]+)}/g;function iv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function wi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(su(s)&&su(a)){if(!wi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function su(e){return e!==null&&typeof e=="object"}/**
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
 */function vr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function br(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function yr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function sv(e,t){const n=new av(e,t);return n.subscribe.bind(n)}class av{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ov(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ov(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ya(){}/**
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
 */function Ln(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class lv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uv(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cv(e){return e===en?void 0:e}function uv(e){return e.instantiationMode==="EAGER"}/**
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
 */class fv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new lv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const dv={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},hv=ce.INFO,mv={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},pv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class au{constructor(t){this.name=t,this._logLevel=hv,this._logHandler=pv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}/**
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
 */class gv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _a="@firebase/app",ou="0.7.16";/**
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
 */const wa=new au("@firebase/app"),bv="@firebase/app-compat",yv="@firebase/analytics-compat",_v="@firebase/analytics",wv="@firebase/app-check-compat",Iv="@firebase/app-check",Ev="@firebase/auth",kv="@firebase/auth-compat",Av="@firebase/database",Tv="@firebase/database-compat",Cv="@firebase/functions",Sv="@firebase/functions-compat",Ov="@firebase/installations",xv="@firebase/installations-compat",Rv="@firebase/messaging",Pv="@firebase/messaging-compat",Nv="@firebase/performance",Mv="@firebase/performance-compat",Lv="@firebase/remote-config",Dv="@firebase/remote-config-compat",Uv="@firebase/storage",Fv="@firebase/storage-compat",$v="@firebase/firestore",jv="@firebase/firestore-compat",Bv="firebase",Hv="9.6.6";/**
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
 */const lu="[DEFAULT]",zv={[_a]:"fire-core",[bv]:"fire-core-compat",[_v]:"fire-analytics",[yv]:"fire-analytics-compat",[Iv]:"fire-app-check",[wv]:"fire-app-check-compat",[Ev]:"fire-auth",[kv]:"fire-auth-compat",[Av]:"fire-rtdb",[Tv]:"fire-rtdb-compat",[Cv]:"fire-fn",[Sv]:"fire-fn-compat",[Ov]:"fire-iid",[xv]:"fire-iid-compat",[Rv]:"fire-fcm",[Pv]:"fire-fcm-compat",[Nv]:"fire-perf",[Mv]:"fire-perf-compat",[Lv]:"fire-rc",[Dv]:"fire-rc-compat",[Uv]:"fire-gcs",[Fv]:"fire-gcs-compat",[$v]:"fire-fst",[jv]:"fire-fst-compat","fire-js":"fire-js",[Bv]:"fire-js-all"};/**
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
 */const Ii=new Map,Ia=new Map;function Wv(e,t){try{e.container.addComponent(t)}catch(n){wa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ei(e){const t=e.name;if(Ia.has(t))return wa.debug(`There were multiple attempts to register component ${t}.`),!1;Ia.set(t,e);for(const n of Ii.values())Wv(n,e);return!0}function cu(e,t){return e.container.getProvider(t)}/**
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
 */const Vv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ki=new gr("app","Firebase",Vv);/**
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
 */class Kv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=Hv;function N_(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:lu,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw ki.create("bad-app-name",{appName:String(r)});const i=Ii.get(r);if(i){if(wi(e,i.options)&&wi(n,i.config))return i;throw ki.create("duplicate-app",{appName:r})}const s=new fv(r);for(const o of Ia.values())s.addComponent(o);const a=new Kv(e,n,s);return Ii.set(r,a),a}function Gv(e=lu){const t=Ii.get(e);if(!t)throw ki.create("no-app",{appName:e});return t}function Dn(e,t,n){var r;let i=(r=zv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wa.warn(o.join(" "));return}Ei(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */function qv(e){Ei(new _r("platform-logger",t=>new gv(t),"PRIVATE")),Dn(_a,ou,e),Dn(_a,ou,"esm2017"),Dn("fire-js","")}qv("");var Yv="firebase",Jv="9.6.6";/**
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
 */Dn(Yv,Jv,"app");/*! *****************************************************************************
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
***************************************************************************** */function Ea(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function uu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xv=uu,fu=new gr("auth","Firebase",uu());/**
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
 */const du=new au("@firebase/auth");function Ti(e,...t){du.logLevel<=ce.ERROR&&du.error(`Auth (${Ai}): ${e}`,...t)}/**
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
 */function Ve(e,...t){throw ka(e,...t)}function nt(e,...t){return ka(e,...t)}function Qv(e,t,n){const r=Object.assign(Object.assign({},Xv()),{[t]:n});return new gr("auth","Firebase",r).create(t,{appName:e.name})}function ka(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return fu.create(e,...t)}function W(e,t,...n){if(!e)throw ka(t,...n)}function pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ti(t),new Error(t)}function gt(e,t){e||pt(t)}/**
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
 */const hu=new Map;function vt(e){gt(e instanceof Function,"Expected a class definition");let t=hu.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hu.set(e,t),t)}/**
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
 */function Zv(e,t){const n=cu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wi(s,t!=null?t:{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function eb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Aa(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function tb(){return mu()==="http:"||mu()==="https:"}function mu(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function nb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tb()||Qg()||"connection"in navigator)?navigator.onLine:!0}function rb(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=Xg()||Zg()}get(){return nb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ta(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class pu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ib={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sb=new wr(3e4,6e4);function Ir(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Er(e,t,n,r,i={}){return gu(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=vr(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),pu.fetch()(vu(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function gu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ib),t);try{const i=new ab(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ca(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ca(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ca(e,"email-already-in-use",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qv(e,u,c);Ve(e,u)}}catch(i){if(i instanceof Mn)throw i;Ve(e,"network-request-failed")}}async function kr(e,t,n,r,i={}){const s=await Er(e,t,n,r,i);return"mfaPendingCredential"in s&&Ve(e,"multi-factor-auth-required",{_serverResponse:s}),s}function vu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ta(e.config,i):`${e.config.apiScheme}://${i}`}class ab{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),sb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ca(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ob(e,t){return Er(e,"POST","/v1/accounts:delete",t)}async function lb(e,t){return Er(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ar(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function cb(e,t=!1){const n=Ln(e),r=await n.getIdToken(t),i=Oa(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ar(Sa(i.auth_time)),issuedAtTime:Ar(Sa(i.iat)),expirationTime:Ar(Sa(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sa(e){return Number(e)*1e3}function Oa(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yg(n);return i?JSON.parse(i):(Ti("Failed to decode base64 JWT payload"),null)}catch(i){return Ti("Caught error parsing JWT payload as JSON",i),null}}function ub(e){const t=Oa(e);return W(t,"internal-error"),W(typeof t.exp!="undefined","internal-error"),W(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Tr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Mn&&fb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function fb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class db{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ci(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Tr(e,lb(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=((t=s.providerUserInfo)===null||t===void 0?void 0:t.length)?pb(s.providerUserInfo):[],o=mb(e.providerData,a),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(o==null?void 0:o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new bu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function hb(e){const t=Ln(e);await Ci(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mb(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function pb(e){return e.map(t=>{var{providerId:n}=t,r=Ea(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gb(e,t){const n=await gu(e,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=vu(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken!="undefined","internal-error"),W(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):ub(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Cr;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function xt(e,t){W(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ea(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new db(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return cb(this,t)}reload(){return hb(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Tr(this,ob(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,b=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:L,isAnonymous:H,providerData:J,stsTokenManager:B}=n;W(R&&B,t,"internal-error");const ee=Cr.fromJSON(this.name,B);W(typeof R=="string",t,"internal-error"),xt(f,t.name),xt(d,t.name),W(typeof L=="boolean",t,"internal-error"),W(typeof H=="boolean",t,"internal-error"),xt(p,t.name),xt(b,t.name),xt(A,t.name),xt(E,t.name),xt(g,t.name),xt(_,t.name);const q=new tn({uid:R,auth:t,email:d,emailVerified:L,displayName:f,isAnonymous:H,photoURL:b,phoneNumber:p,tenantId:A,stsTokenManager:ee,createdAt:g,lastLoginAt:_});return J&&Array.isArray(J)&&(q.providerData=J.map(ve=>Object.assign({},ve))),E&&(q._redirectEventId=E),q}static async _fromIdTokenResponse(t,n,r=!1){const i=new Cr;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ci(s),s}}/**
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
 */class yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yu.type="NONE";const _u=yu;/**
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
 */function Si(e,t,n){return`firebase:${e}:${t}:${n}`}class Un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Un(vt(_u),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||vt(_u);const a=Si(r,t.config.apiKey,t.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const f=tn._fromJSON(t,u);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Un(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Un(s,t,r))}}/**
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
 */function wu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ku(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Iu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Tu(t))return"Blackberry";if(Cu(t))return"Webos";if(xa(t))return"Safari";if((t.includes("chrome/")||Eu(t))&&!t.includes("edge/"))return"Chrome";if(Au(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iu(e=ke()){return/firefox\//i.test(e)}function xa(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Eu(e=ke()){return/crios\//i.test(e)}function ku(e=ke()){return/iemobile/i.test(e)}function Au(e=ke()){return/android/i.test(e)}function Tu(e=ke()){return/blackberry/i.test(e)}function Cu(e=ke()){return/webos/i.test(e)}function Oi(e=ke()){return/iphone|ipad|ipod/i.test(e)}function vb(e=ke()){var t;return Oi(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function bb(){return ev()&&document.documentMode===10}function Su(e=ke()){return Oi(e)||Au(e)||Cu(e)||Tu(e)||/windows phone/i.test(e)||ku(e)}function yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ou(e,t=[]){let n;switch(e){case"Browser":n=wu(ke());break;case"Worker":n=`${wu(ke())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
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
 */class _b{constructor(t,n){this.app=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===s)&&(a==null?void 0:a.user)&&(r=a.user)}return r?r._redirectEventId?(W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ci(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ln(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return W(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function xi(e){return Ln(e)}class xu{constructor(t){this.auth=t,this.observer=null,this.addObserver=sv(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ra{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(t){return pt("not implemented")}_linkToIdToken(t,n){return pt("not implemented")}_getReauthenticationResolver(t){return pt("not implemented")}}async function wb(e,t){return Er(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Ib(e,t){return kr(e,"POST","/v1/accounts:signInWithPassword",Ir(e,t))}/**
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
 */async function Eb(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",Ir(e,t))}async function kb(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",Ir(e,t))}/**
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
 */class Sr extends Ra{constructor(t,n,r,i=null){super("password",r);this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Sr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Sr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Ib(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Eb(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return wb(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kb(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Fn(e,t){return kr(e,"POST","/v1/accounts:signInWithIdp",Ir(e,t))}/**
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
 */const Ab="http://localhost";class nn extends Ra{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ea(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new nn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fn(t,n)}buildRequest(){const t={requestUri:Ab,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=vr(n)}return t}}/**
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
 */function Tb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cb(e){const t=br(yr(e)).link,n=t?br(yr(t)).deep_link_id:null,r=br(yr(e)).deep_link_id;return(r?br(yr(r)).link:null)||r||n||t||e}class Pa{constructor(t){var n,r,i,s,a,o;const l=br(yr(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Tb((i=l.mode)!==null&&i!==void 0?i:null);W(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=Cb(t);try{return new Pa(n)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(t,n){return Sr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Pa.parseLink(n);return W(r,"argument-error"),Sr._fromEmailAndCode(t,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ru{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Or extends Ru{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Or{constructor(){super("facebook.com")}static credential(t){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends Or{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Nt extends Or{constructor(){super("github.com")}static credential(t){return nn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nt.credential(t.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
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
 */class Mt extends Or{constructor(){super("twitter.com")}static credential(t,n){return nn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function Sb(e,t){return kr(e,"POST","/v1/accounts:signUp",Ir(e,t))}/**
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
 */class rn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),a=Pu(r);return new rn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Pu(r);return new rn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Pu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ri extends Mn{constructor(t,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ri(t,n,r,i)}}function Nu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(e,s,t,r):s})}async function Ob(e,t,n=!1){const r=await Tr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rn._forOperation(e,"link",r)}/**
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
 */async function xb(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Tr(e,Nu(r,i,t,e),n);W(s.idToken,r,"internal-error");const a=Oa(s.idToken);W(a,r,"internal-error");const{sub:o}=a;return W(e.uid===o,r,"user-mismatch"),rn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
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
 */async function Mu(e,t,n=!1){const r="signIn",i=await Nu(e,r,t),s=await rn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Rb(e,t){return Mu(xi(e),t)}async function M_(e,t,n){const r=xi(e),i=await Sb(r,{returnSecureToken:!0,email:t,password:n}),s=await rn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function L_(e,t,n){return Rb(Ln(e),$n.credential(t,n))}function D_(e){return Ln(e).signOut()}const Pi="__sak";/**
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
 */class Lu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pb(){const e=ke();return xa(e)||Oi(e)}const Nb=1e3,Mb=10;class Du extends Lu{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pb()&&yb(),this.fallbackToPolling=Su(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);bb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Mb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Du.type="LOCAL";const Lb=Du;/**
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
 */class Uu extends Lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Uu.type="SESSION";const Fu=Uu;/**
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
 */function Db(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ni{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ni(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a==null?void 0:a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await Db(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
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
 */function Na(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Ub{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Na("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function Fb(e){rt().location.href=e}/**
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
 */function $u(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function $b(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Bb(){return $u()?self:null}/**
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
 */const ju="firebaseLocalStorageDb",Hb=1,Mi="firebaseLocalStorage",Bu="fbase_key";class xr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Li(e,t){return e.transaction([Mi],t?"readwrite":"readonly").objectStore(Mi)}function zb(){const e=indexedDB.deleteDatabase(ju);return new xr(e).toPromise()}function Ma(){const e=indexedDB.open(ju,Hb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Mi,{keyPath:Bu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Mi)?t(r):(r.close(),await zb(),t(await Ma()))})})}async function Hu(e,t,n){const r=Li(e,!0).put({[Bu]:t,value:n});return new xr(r).toPromise()}async function Wb(e,t){const n=Li(e,!1).get(t),r=await new xr(n).toPromise();return r===void 0?null:r.value}function zu(e,t){const n=Li(e,!0).delete(t);return new xr(n).toPromise()}const Vb=800,Kb=3;class Wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ma(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Kb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(Bb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $b(),!this.activeServiceWorker)return;this.sender=new Ub(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ma();return await Hu(t,Pi,"1"),await zu(t,Pi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Wb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zu(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Li(i,!1).getAll();return new xr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wu.type="LOCAL";const Gb=Wu;/**
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
 */function qb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Yb(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qb().appendChild(r)})}function Jb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new wr(3e4,6e4);/**
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
 */function Xb(e,t){return t?vt(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class La extends Ra{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Qb(e){return Mu(e.auth,new La(e),e.bypassAuthState)}function Zb(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),xb(n,new La(e),e.bypassAuthState)}async function ey(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Ob(n,new La(e),e.bypassAuthState)}/**
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
 */class Vu{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qb;case"linkViaPopup":case"linkViaRedirect":return ey;case"reauthViaPopup":case"reauthViaRedirect":return Zb;default:Ve(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ty=new wr(2e3,1e4);class jn extends Vu{constructor(t,n,r,i,s){super(t,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,ty.get())};t()}}jn.currentPopupAction=null;/**
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
 */const ny="pendingRedirect",Da=new Map;class ry extends Vu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=Da.get(this.auth._key());if(!t){try{const r=await iy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Da.set(this.auth._key(),t)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iy(e,t){const n=ay(t),r=sy(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sy(e){return vt(e._redirectPersistence)}function ay(e){return Si(ny,e.config.apiKey,e.name)}async function oy(e,t,n=!1){const r=xi(e),i=Xb(r,t),a=await new ry(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const ly=10*60*1e3;class cy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!uy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ly&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(t))}saveEventToCache(t){this.cachedEventUids.add(Ku(t)),this.lastProcessedEventTime=Date.now()}}function Ku(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function uy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(e);default:return!1}}/**
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
 */async function fy(e,t={}){return Er(e,"GET","/v1/projects",t)}/**
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
 */const dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hy=/^https?/;async function my(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fy(e);for(const n of t)try{if(py(n))return}catch{}Ve(e,"unauthorized-domain")}function py(e){const t=Aa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!hy.test(n))return!1;if(dy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gy=new wr(3e4,6e4);function qu(){const e=rt().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vy(e){return new Promise((t,n)=>{var r,i,s;function a(){qu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qu(),n(nt(e,"network-request-failed"))},timeout:gy.get()})}if((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)t(gapi.iframes.getContext());else if((s=rt().gapi)===null||s===void 0?void 0:s.load)a();else{const o=Jb("iframefcb");return rt()[o]=()=>{gapi.load?a():n(nt(e,"network-request-failed"))},Yb(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Di=null,t})}let Di=null;function by(e){return Di=Di||vy(e),Di}/**
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
 */const yy=new wr(5e3,15e3),_y="__/auth/iframe",wy="emulator/auth/iframe",Iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ky(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ta(t,wy):`https://${e.config.authDomain}/${_y}`,r={apiKey:t.apiKey,appName:e.name,v:Ai},i=Ey.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vr(r).slice(1)}`}async function Ay(e){const t=await by(e),n=rt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:ky(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(e,"network-request-failed"),o=rt().setTimeout(()=>{s(a)},yy.get());function l(){rt().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cy=500,Sy=600,Oy="_blank",xy="http://localhost";class Yu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ry(e,t,n,r=Cy,i=Sy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Ty),{width:r.toString(),height:i.toString(),top:s,left:a}),c=ke().toLowerCase();n&&(o=Eu(c)?Oy:n),Iu(c)&&(t=t||xy,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,b])=>`${d}${p}=${b},`,"");if(vb(c)&&o!=="_self")return Py(t||"",o),new Yu(null);const f=window.open(t||"",o,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new Yu(f)}function Py(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ny="__/auth/handler",My="emulator/auth/handler";function Ju(e,t,n,r,i,s){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(t instanceof Ru){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",iv(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))a[l]=c}if(t instanceof Or){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];return`${Ly(e)}?${vr(o).slice(1)}`}function Ly({config:e}){return e.emulator?Ta(e,My):`https://${e.authDomain}/${Ny}`}/**
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
 */const Ua="webStorageSupport";class Dy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=oy}async _openPopup(t,n,r,i){var s;gt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=Ju(t,n,r,Aa(),i);return Ry(t,a,Na())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Fb(Ju(t,n,r,Aa(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ay(t),r=new cy(t);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ua,{type:Ua},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ua];a!==void 0&&n(!!a),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=my(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Su()||xa()||Oi()}}const Uy=Dy;var Xu="@firebase/auth",Qu="0.19.8";/**
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
 */class Fy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $y(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jy(e){Ei(new _r("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(a=>{W(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),W(!(s==null?void 0:s.includes(":")),"argument-error",{appName:a.name});const o={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(e)},l=new _b(a,o);return eb(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ei(new _r("auth-internal",t=>{const n=xi(t.getProvider("auth").getImmediate());return(r=>new Fy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Xu,Qu,$y(e)),Dn(Xu,Qu,"esm2017")}/**
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
 */function U_(e=Gv()){const t=cu(e,"auth");return t.isInitialized()?t.getImmediate():Zv(e,{popupRedirectResolver:Uy,persistence:[Gb,Lb,Fu]})}jy("Browser");/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Zu="store";function F_(e){return e===void 0&&(e=null),ze(e!==null?e:Zu)}function Bn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function By(e){return e!==null&&typeof e=="object"}function Hy(e){return e&&typeof e.then=="function"}function zy(e,t){return function(){return e(t)}}function ef(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function tf(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Ui(e,n,[],e._modules.root,!0),Fa(e,n,t)}function Fa(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};Bn(i,function(a,o){s[o]=zy(a,e),Object.defineProperty(e.getters,o,{get:function(){return s[o]()},enumerable:!0})}),e._state=gn({data:t}),e.strict&&qy(e),r&&n&&e._withCommit(function(){r.data=null})}function Ui(e,t,n,r,i){var s=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!s&&!i){var o=$a(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit(function(){o[l]=r.state})}var c=r.context=Wy(e,a,n);r.forEachMutation(function(u,f){var d=a+f;Vy(e,d,u,c)}),r.forEachAction(function(u,f){var d=u.root?f:a+f,p=u.handler||u;Ky(e,d,p,c)}),r.forEachGetter(function(u,f){var d=a+f;Gy(e,d,u,c)}),r.forEachChild(function(u,f){Ui(e,t,n.concat(f),u,i)})}function Wy(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(s,a,o){var l=Fi(s,a,o),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,c)},commit:r?e.commit:function(s,a,o){var l=Fi(s,a,o),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=t+f),e.commit(f,c,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return nf(e,t)}},state:{get:function(){return $a(e.state,n)}}}),i}function nf(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Vy(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(a){n.call(e,r.state,a)})}function Ky(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(a){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},a);return Hy(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):o})}function Gy(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function qy(e){$t(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function $a(e,t){return t.reduce(function(n,r){return n[r]},e)}function Fi(e,t,n){return By(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Yy="vuex bindings",rf="vuex:mutations",ja="vuex:actions",Hn="vuex",Jy=0;function Xy(e,t){zp({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Yy]},function(n){n.addTimelineLayer({id:rf,label:"Vuex Mutations",color:sf}),n.addTimelineLayer({id:ja,label:"Vuex Actions",color:sf}),n.addInspector({id:Hn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===Hn)if(r.filter){var i=[];cf(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[lf(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===Hn){var i=r.nodeId;nf(t,i),r.state=e_(n_(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===Hn){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),t._withCommit(function(){r.set(t._state.data,s,r.state.value)})}}),t.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Hn),n.sendInspectorState(Hn),n.addTimelineEvent({layerId:rf,event:{time:Date.now(),title:r.type,data:s}})}),t.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=Jy++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:ja,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},a=Date.now()-r._time;s.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:ja,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var sf=8702998,Qy=6710886,Zy=16777215,af={label:"namespaced",textColor:Zy,backgroundColor:Qy};function of(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function lf(e,t){return{id:t||"root",label:of(t),tags:e.namespaced?[af]:[],children:Object.keys(e._children).map(function(n){return lf(e._children[n],t+n+"/")})}}function cf(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[af]:[]}),Object.keys(t._children).forEach(function(i){cf(e,t._children[i],n,r+i+"/")})}function e_(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(a){return{key:a,editable:!0,value:e.state[a]}})};if(r.length){var s=t_(t);i.getters=Object.keys(s).map(function(a){return{key:a.endsWith("/")?of(a):a,editable:!1,value:Ba(function(){return s[a]})}})}return i}function t_(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach(function(a){i[a]||(i[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),i=i[a]._custom.value}),i[s]=Ba(function(){return e[n]})}else t[n]=Ba(function(){return e[n]})}),t}function n_(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var a=r[i];if(!a)throw new Error('Missing module "'+i+'" for path "'+t+'".');return s===n.length-1?a:a._children},t==="root"?e:e.root._children)}function Ba(e){try{return e()}catch(t){return t}}var Ke=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},uf={namespaced:{configurable:!0}};uf.namespaced.get=function(){return!!this._rawModule.namespaced};Ke.prototype.addChild=function(t,n){this._children[t]=n};Ke.prototype.removeChild=function(t){delete this._children[t]};Ke.prototype.getChild=function(t){return this._children[t]};Ke.prototype.hasChild=function(t){return t in this._children};Ke.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Ke.prototype.forEachChild=function(t){Bn(this._children,t)};Ke.prototype.forEachGetter=function(t){this._rawModule.getters&&Bn(this._rawModule.getters,t)};Ke.prototype.forEachAction=function(t){this._rawModule.actions&&Bn(this._rawModule.actions,t)};Ke.prototype.forEachMutation=function(t){this._rawModule.mutations&&Bn(this._rawModule.mutations,t)};Object.defineProperties(Ke.prototype,uf);var sn=function(t){this.register([],t,!1)};sn.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};sn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};sn.prototype.update=function(t){ff([],this.root,t)};sn.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var s=new Ke(n,r);if(t.length===0)this.root=s;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],s)}n.modules&&Bn(n.modules,function(o,l){i.register(t.concat(l),o,r)})};sn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};sn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function ff(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;ff(e.concat(r),t.getChild(r),n.modules[r])}}function $_(e){return new xe(e)}var xe=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new sn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var a=this,o=this,l=o.dispatch,c=o.commit;this.dispatch=function(d,p){return l.call(a,d,p)},this.commit=function(d,p,b){return c.call(a,d,p,b)},this.strict=i;var u=this._modules.root.state;Ui(this,u,[],this._modules.root),Fa(this,u),r.forEach(function(f){return f(n)})},Ha={state:{configurable:!0}};xe.prototype.install=function(t,n){t.provide(n||Zu,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Xy(t,this)};Ha.state.get=function(){return this._state.data};Ha.state.set=function(e){};xe.prototype.commit=function(t,n,r){var i=this,s=Fi(t,n,r),a=s.type,o=s.payload,l={type:a,payload:o},c=this._mutations[a];!c||(this._withCommit(function(){c.forEach(function(f){f(o)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};xe.prototype.dispatch=function(t,n){var r=this,i=Fi(t,n),s=i.type,a=i.payload,o={type:s,payload:a},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(o,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(a)})):l[0](a);return new Promise(function(u,f){c.then(function(d){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(o,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(o,r.state,d)})}catch{}f(d)})})}};xe.prototype.subscribe=function(t,n){return ef(t,this._subscribers,n)};xe.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return ef(r,this._actionSubscribers,n)};xe.prototype.watch=function(t,n,r){var i=this;return $t(function(){return t(i.state,i.getters)},n,Object.assign({},r))};xe.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};xe.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),Ui(this,this.state,t,this._modules.get(t),r.preserveState),Fa(this,this.state)};xe.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=$a(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),tf(this)};xe.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};xe.prototype.hotUpdate=function(t){this._modules.update(t),tf(this,!0)};xe.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(xe.prototype,Ha);function an(){return an=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},an.apply(this,arguments)}function df(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function r_(e,t){if(!!e){if(typeof e=="string")return hf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hf(e,t)}}function hf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i_(e,t){var n;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=r_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=e[Symbol.iterator](),n.next.bind(n)}function za(e,t){if(e in t){for(var n=t[e],r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return typeof n=="function"?n.apply(void 0,i):n}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map(function(o){return'"'+o+'"'}).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,za),a}var on;(function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"})(on||(on={}));var zn;(function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"})(zn||(zn={}));function $i(e){var t=e.visible,n=t===void 0?!0:t,r=e.features,i=r===void 0?on.None:r,s=df(e,["visible","features"]);if(n||i&on.Static&&s.props.static)return ji(s);if(i&on.RenderStrategy){var a,o,l=((a=s.props.unmount)!=null?a:!0)?zn.Unmount:zn.Hidden;return za(l,(o={},o[zn.Unmount]=function(){return null},o[zn.Hidden]=function(){return ji(an({},s,{props:an({},s.props,{hidden:!0,style:{display:"none"}})}))},o))}return ji(s)}function ji(e){var t=e.props,n=e.attrs,r=e.slots,i=e.slot,s=e.name,a=s_(t,["unmount","static"]),o=a.as,l=df(a,["as"]),c=r.default==null?void 0:r.default(i);if(o==="template"){if(Object.keys(l).length>0||Object.keys(n).length>0){var u=c!=null?c:[],f=u[0],d=u.slice(1);if(!a_(f)||d.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+s+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(n)).map(function(p){return"  - "+p}).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(function(p){return"  - "+p}).join(`
`)].join(`
`));return Kt(f,l)}return Array.isArray(c)&&c.length===1?c[0]:c}return In(o,l,c)}function s_(e,t){t===void 0&&(t=[]);for(var n=Object.assign({},e),r=i_(t),i;!(i=r()).done;){var s=i.value;s in n&&delete n[s]}return n}function a_(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var _e;(function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"})(_e||(_e={}));var o_=0;function l_(){return++o_}function Wa(){return l_()}function c_(e,t,n){typeof window!="undefined"&&Jr(function(r){window.addEventListener(e,t,n),r(function(){window.removeEventListener(e,t,n)})})}function Ae(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var mf=Symbol("Context"),Rr;(function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"})(Rr||(Rr={}));function u_(){return ze(mf,null)}function f_(e){_n(mf,e)}function pf(e,t){if(e)return e;var n=t!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function d_(e,t){var n=Je(pf(e.value.type,e.value.as));return tr(function(){n.value=pf(e.value.type,e.value.as)}),Jr(function(){var r;n.value||!Ae(t)||Ae(t)instanceof HTMLButtonElement&&!((r=Ae(t))==null?void 0:r.hasAttribute("type"))&&(n.value="button")}),n}function h_(e){throw new Error("Unexpected object: "+e)}var ge;(function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"})(ge||(ge={}));function m_(e,t){var n=t.resolveItems();if(n.length<=0)return null;var r=t.resolveActiveIndex(),i=r!=null?r:-1,s=function(){switch(e.focus){case ge.First:return n.findIndex(function(l){return!t.resolveDisabled(l)});case ge.Previous:{var a=n.slice().reverse().findIndex(function(l,c,u){return i!==-1&&u.length-c-1>=i?!1:!t.resolveDisabled(l)});return a===-1?a:n.length-1-a}case ge.Next:return n.findIndex(function(l,c){return c<=i?!1:!t.resolveDisabled(l)});case ge.Last:{var o=n.slice().reverse().findIndex(function(l){return!t.resolveDisabled(l)});return o===-1?o:n.length-1-o}case ge.Specific:return n.findIndex(function(l){return t.resolveId(l)===e.id});case ge.Nothing:return null;default:h_(e)}}();return s===-1?r:s}function p_(e){var t=e.container,n=e.accept,r=e.walk,i=e.enabled;Jr(function(){var s=t.value;if(!!s&&!(i!==void 0&&!i.value))for(var a=Object.assign(function(l){return n(l)},{acceptNode:n}),o=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,a,!1);o.nextNode();)r(o.currentNode)})}var Te;(function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"})(Te||(Te={}));function g_(e){requestAnimationFrame(function(){return requestAnimationFrame(e)})}var gf=Symbol("MenuContext");function Wn(e){var t=ze(gf,null);if(t===null){var n=new Error("<"+e+" /> is missing a parent <Menu /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Wn),n}return t}var j_=ct({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup:function(t,n){var r=n.slots,i=n.attrs,s=Je(Te.Closed),a=Je(null),o=Je(null),l=Je([]),c=Je(""),u=Je(null),f={menuState:s,buttonRef:a,itemsRef:o,items:l,searchQuery:c,activeItemIndex:u,closeMenu:function(){s.value=Te.Closed,u.value=null},openMenu:function(){return s.value=Te.Open},goToItem:function(p,b){var A=m_(p===ge.Specific?{focus:ge.Specific,id:b}:{focus:p},{resolveItems:function(){return l.value},resolveActiveIndex:function(){return u.value},resolveId:function(g){return g.id},resolveDisabled:function(g){return g.dataRef.disabled}});c.value===""&&u.value===A||(c.value="",u.value=A)},search:function(p){c.value+=p.toLowerCase();var b=l.value.findIndex(function(A){return A.dataRef.textValue.startsWith(c.value)&&!A.dataRef.disabled});b===-1||b===u.value||(u.value=b)},clearSearch:function(){c.value=""},registerItem:function(p,b){l.value.push({id:p,dataRef:b})},unregisterItem:function(p){var b=l.value.slice(),A=u.value!==null?b[u.value]:null,E=b.findIndex(function(g){return g.id===p});E!==-1&&b.splice(E,1),l.value=b,u.value=function(){return E===u.value||A===null?null:b.indexOf(A)}()}};return c_("mousedown",function(d){var p,b,A,E=d.target,g=document.activeElement;s.value===Te.Open&&(((p=Ae(a))==null?void 0:p.contains(E))||(((b=Ae(o))==null?void 0:b.contains(E))||f.closeMenu(),!(g!==document.body&&(g==null?void 0:g.contains(E)))&&(d.defaultPrevented||(A=Ae(a))==null||A.focus({preventScroll:!0}))))}),_n(gf,f),f_(se(function(){var d;return za(s.value,(d={},d[Te.Open]=Rr.Open,d[Te.Closed]=Rr.Closed,d))})),function(){var d={open:s.value===Te.Open};return $i({props:t,slot:d,slots:r,attrs:i,name:"Menu"})}}}),B_=ct({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},render:function(){var t,n=Wn("MenuButton"),r={open:n.menuState.value===Te.Open},i={ref:"el",id:this.id,type:this.type,"aria-haspopup":!0,"aria-controls":(t=Ae(n.itemsRef))==null?void 0:t.id,"aria-expanded":this.$props.disabled?void 0:n.menuState.value===Te.Open,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,onClick:this.handleClick};return $i({props:an({},this.$props,i),slot:r,attrs:this.$attrs,slots:this.$slots,name:"MenuButton"})},setup:function(t,n){var r=n.attrs,i=Wn("MenuButton"),s="headlessui-menu-button-"+Wa();function a(c){switch(c.key){case _e.Space:case _e.Enter:case _e.ArrowDown:c.preventDefault(),c.stopPropagation(),i.openMenu(),lt(function(){var u;(u=Ae(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(ge.First)});break;case _e.ArrowUp:c.preventDefault(),c.stopPropagation(),i.openMenu(),lt(function(){var u;(u=Ae(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(ge.Last)});break}}function o(c){switch(c.key){case _e.Space:c.preventDefault();break}}function l(c){t.disabled||(i.menuState.value===Te.Open?(i.closeMenu(),lt(function(){var u;return(u=Ae(i.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),c.stopPropagation(),i.openMenu(),g_(function(){var u;return(u=Ae(i.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}return{id:s,el:i.buttonRef,type:d_(se(function(){return{as:t.as,type:r.type}}),i.buttonRef),handleKeyDown:a,handleKeyUp:o,handleClick:l}}}),H_=ct({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var t,n,r=Wn("MenuItems"),i={open:r.menuState.value===Te.Open},s={"aria-activedescendant":r.activeItemIndex.value===null||(t=r.items.value[r.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(n=Ae(r.buttonRef))==null?void 0:n.id,id:this.id,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,role:"menu",tabIndex:0,ref:"el"},a=this.$props;return $i({props:an({},a,s),slot:i,attrs:this.$attrs,slots:this.$slots,features:on.RenderStrategy|on.Static,visible:this.visible,name:"MenuItems"})},setup:function(){var t=Wn("MenuItems"),n="headlessui-menu-items-"+Wa(),r=Je(null);p_({container:se(function(){return Ae(t.itemsRef)}),enabled:se(function(){return t.menuState.value===Te.Open}),accept:function(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(c){c.setAttribute("role","none")}});function i(l){switch(r.value&&clearTimeout(r.value),l.key){case _e.Space:if(t.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),t.search(l.key);case _e.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeItemIndex.value!==null){var c,u=t.items.value[t.activeItemIndex.value].id;(c=document.getElementById(u))==null||c.click()}t.closeMenu(),lt(function(){var f;return(f=Ae(t.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case _e.ArrowDown:return l.preventDefault(),l.stopPropagation(),t.goToItem(ge.Next);case _e.ArrowUp:return l.preventDefault(),l.stopPropagation(),t.goToItem(ge.Previous);case _e.Home:case _e.PageUp:return l.preventDefault(),l.stopPropagation(),t.goToItem(ge.First);case _e.End:case _e.PageDown:return l.preventDefault(),l.stopPropagation(),t.goToItem(ge.Last);case _e.Escape:l.preventDefault(),l.stopPropagation(),t.closeMenu(),lt(function(){var f;return(f=Ae(t.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case _e.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(t.search(l.key),r.value=setTimeout(function(){return t.clearSearch()},350));break}}function s(l){switch(l.key){case _e.Space:l.preventDefault();break}}var a=u_(),o=se(function(){return a!==null?a.value===Rr.Open:t.menuState.value===Te.Open});return{id:n,el:t.itemsRef,handleKeyDown:i,handleKeyUp:s,visible:o}}}),z_=ct({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=n.attrs,s=Wn("MenuItem"),a="headlessui-menu-item-"+Wa(),o=se(function(){return s.activeItemIndex.value!==null?s.items.value[s.activeItemIndex.value].id===a:!1}),l=Je({disabled:t.disabled,textValue:""});tr(function(){var p,b,A=(p=document.getElementById(a))==null||(b=p.textContent)==null?void 0:b.toLowerCase().trim();A!==void 0&&(l.value.textValue=A)}),tr(function(){return s.registerItem(a,l)}),ys(function(){return s.unregisterItem(a)}),Jr(function(){s.menuState.value===Te.Open&&(!o.value||lt(function(){var p;return(p=document.getElementById(a))==null||p.scrollIntoView==null?void 0:p.scrollIntoView({block:"nearest"})}))});function c(p){if(t.disabled)return p.preventDefault();s.closeMenu(),lt(function(){var b;return(b=Ae(s.buttonRef))==null?void 0:b.focus({preventScroll:!0})})}function u(){if(t.disabled)return s.goToItem(ge.Nothing);s.goToItem(ge.Specific,a)}function f(){t.disabled||o.value||s.goToItem(ge.Specific,a)}function d(){t.disabled||!o.value||s.goToItem(ge.Nothing)}return function(){var p=t.disabled,b={active:o.value,disabled:p},A={id:a,role:"menuitem",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,onClick:c,onFocus:u,onPointermove:f,onMousemove:f,onPointerleave:d,onMouseleave:d};return $i({props:an({},t,A),slot:b,attrs:i,slots:r,name:"MenuItem"})}}});export{H_ as A,z_ as B,Wi as C,j_ as D,A_ as E,C_ as F,Je as G,zi as H,k_ as I,b_ as J,E_ as K,B_ as M,wl as T,O_ as a,S_ as b,P_ as c,R_ as d,$_ as e,x_ as f,U_ as g,M_ as h,N_ as i,D_ as j,Zd as k,T_ as l,__ as m,cl as n,Sd as o,Me as p,Xe as q,y_ as r,L_ as s,I_ as t,F_ as u,ih as v,pd as w,v_ as x,w_ as y,Jn as z};
