import{b as m,i as y,d as c,u as h,c as b,o as a,a as o,j as r,w as v,k as g,f as l,E,l as i,n as d,r as f,_ as C,m as B}from"./index.4bf84d35.js";const _=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),w={click:t=>t instanceof MouseEvent},L=["href","target"],S=c({name:"ElLink"}),$=c({...S,props:_,emits:w,setup(t,{emit:u}){const s=t,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,I)=>(a(),o("a",{class:d(l(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(a(),r(l(E),{key:0},{default:v(()=>[(a(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(a(),o("span",{key:1,class:d(l(n).e("inner"))},[f(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):i("v-if",!0)],10,L))}});var P=C($,[["__file","link.vue"]]);const j=B(P);export{j as E};