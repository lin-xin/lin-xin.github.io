import{b as N,d as T,u as A,c as v,h as I,r as C,Q as w,W as L,b0 as d,N as g,B as y,aJ as $,K as O,ax as R,v as h,aw as o,P as V,cS as x,cT as Y,m as _}from"./index.4bf84d35.js";const j=N({prefixCls:{type:String}}),P=T({name:"ElSpaceItem",props:j,setup(e,{slots:u}){const p=A("space"),r=v(()=>`${e.prefixCls||p.b()}__item`);return()=>I("div",{class:r.value},C(u,"default"))}}),z={small:8,default:12,large:16};function k(e){const u=A("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),r=w(0),i=w(0),S=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap"}:{},n={alignItems:e.alignment},l={rowGap:`${i.value}px`,columnGap:`${r.value}px`};return[t,n,l,e.style]}),f=v(()=>e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{});return L(()=>{const{size:t="small",wrap:n,direction:l,fill:a}=e;if(d(t)){const[s=0,c=0]=t;r.value=s,i.value=c}else{let s;g(t)?s=t:s=z[t||"small"]||z.small,(n||a)&&l==="horizontal"?r.value=i.value=s:l==="horizontal"?(r.value=s,i.value=0):(i.value=s,r.value=0)}}),{classes:p,containerStyle:S,itemStyle:f}}const B=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>$(e)||g(e)||O(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:R,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}}),G=T({name:"ElSpace",props:B,setup(e,{slots:u}){const{classes:p,containerStyle:r,itemStyle:i}=k(e);function S(f,t="",n=[]){const{prefixCls:l}=e;return f.forEach((a,s)=>{x(a)?d(a.children)&&a.children.forEach((c,m)=>{x(c)&&d(c.children)?S(c.children,`${t+m}-`,n):n.push(h(P,{style:i.value,prefixCls:l,key:`nested-${t+m}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):Y(a)&&n.push(h(P,{style:i.value,prefixCls:l,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),n}return()=>{var f;const{spacer:t,direction:n}=e,l=C(u,"default",{key:0},()=>[]);if(((f=l.children)!=null?f:[]).length===0)return null;if(d(l.children)){let a=S(l.children);if(t){const s=a.length-1;a=a.reduce((c,m,E)=>{const b=[...c,m];return E!==s&&b.push(h("span",{style:[i.value,n==="vertical"?"width: 100%":null],key:E},[$(t)?t:V(t,o.TEXT)],o.STYLE)),b},[])}return h("div",{class:p.value,style:r.value},a,o.STYLE|o.CLASS)}return l.children}}}),F=_(G);export{F as E};