import{d as U,cN as H,cO as P,Z as V,o as v,a as x,v as t,w as l,e,F as T,x as w,P as c,t as i,f as u,$ as A,g as N,y as z,z as L,A as O}from"./index.4bf84d35.js";import{E as R,a as Z}from"./el-col.56ba0c63.js";import{E as j}from"./el-color-picker.aead50b4.js";import"./el-input.46da08c2.js";import{E as q}from"./el-card.af4c5345.js";import"./position.f549de9f.js";import"./debounce.632c06d2.js";import"./index.37e9b6e1.js";const f=h=>(z("data-v-cef9d3ba"),h=h(),L(),h),G=f(()=>e("div",{class:"content-title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),J={class:"theme-list mgb20"},K=["onClick"],M={class:"flex-center"},Q=f(()=>e("div",{class:"content-title"},"Element-Plus\u4E3B\u9898",-1)),W={class:"theme-list mgb20"},X={class:"theme-item"},Y={class:"theme-color"},ee={class:"flex-center"},oe=f(()=>e("div",{class:"content-title"},"\u5934\u90E8\u4E3B\u9898",-1)),te={class:"theme-list mgb20"},le={class:"theme-item"},se={class:"theme-color"},re={class:"theme-item"},ae={class:"theme-color"},ne={class:"flex-center"},de=f(()=>e("div",{class:"content-title"},"\u83DC\u5355\u4E3B\u9898",-1)),ce={class:"theme-list mgb20"},ue={class:"theme-item"},me={class:"theme-color"},ie={class:"theme-item"},_e={class:"theme-color"},Ce={class:"flex-center"},he=U({__name:"theme",setup(h){const a=H(),n=P(),s=V({primary:localStorage.getItem("theme-primary")||"#409eff",success:localStorage.getItem("theme-success")||"#67c23a",warning:localStorage.getItem("theme-warning")||"#e6a23c",danger:localStorage.getItem("theme-danger")||"#f56c6c",info:localStorage.getItem("theme-info")||"#909399",headerBgColor:a.headerBgColor,headerTextColor:a.headerTextColor}),_=V({bgColor:n.bgColor,textColor:n.textColor}),I=[{name:"primary",color:a.primary||s.primary},{name:"success",color:a.success||s.success},{name:"warning",color:a.warning||s.warning},{name:"danger",color:a.danger||s.danger},{name:"info",color:a.info||s.info}],k=m=>{a.setPropertyColor(s[m],m)},B=()=>{a.resetTheme()},b=()=>{localStorage.removeItem("header-bg-color"),localStorage.removeItem("header-text-color"),location.reload()},E=()=>{localStorage.removeItem("sidebar-bg-color"),localStorage.removeItem("sidebar-text-color"),location.reload()},F=[{name:"\u9ED8\u8BA4",color:"#242f42"},{name:"\u5065\u5EB7",color:"#1ABC9C"},{name:"\u4F18\u96C5",color:"#722ed1"},{name:"\u70ED\u60C5",color:"#f44336"},{name:"\u5B81\u9759",color:"#00bcd4"}],D=m=>{m.name==="\u9ED8\u8BA4"?S():(a.setHeaderBgColor(m.color),a.setHeaderTextColor("#fff"),n.setBgColor("#fff"),n.setTextColor("#5b6e88"),a.setPropertyColor(m.color,"primary"))},S=()=>{B(),b(),E()};return(m,r)=>{const d=A,g=q,C=j,y=R,$=Z;return v(),x("div",null,[t(g,{class:"mgb20",shadow:"hover"},{header:l(()=>[G]),default:l(()=>[e("div",J,[(v(),x(T,null,w(F,o=>e("div",{class:"theme-item",onClick:p=>D(o),style:N({backgroundColor:o.color,color:"#fff"})},i(o.name),13,K)),64))]),e("div",M,[t(d,{onClick:S},{default:l(()=>[c("\u91CD\u7F6E\u4E3B\u9898")]),_:1})])]),_:1}),t(g,{class:"mgb20",shadow:"hover"},{header:l(()=>[Q]),default:l(()=>[e("div",W,[(v(),x(T,null,w(I,o=>e("div",X,[t(d,{type:o.name},{default:l(()=>[c(i(o.name),1)]),_:2},1032,["type"]),e("div",Y,i(o.color),1),t(C,{modelValue:s[o.name],"onUpdate:modelValue":p=>s[o.name]=p,onChange:p=>k(o.name)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),64))]),e("div",ee,[t(d,{onClick:B},{default:l(()=>[c("\u91CD\u7F6E\u4E3B\u9898")]),_:1})])]),_:1}),t($,{gutter:50},{default:l(()=>[t(y,{span:12},{default:l(()=>[t(g,{class:"mgb20",shadow:"hover"},{header:l(()=>[oe]),default:l(()=>[e("div",te,[e("div",le,[t(d,{color:s.headerBgColor},{default:l(()=>[c("\u80CC\u666F\u989C\u8272")]),_:1},8,["color"]),e("div",se,i(s.headerBgColor),1),t(C,{modelValue:s.headerBgColor,"onUpdate:modelValue":r[0]||(r[0]=o=>s.headerBgColor=o),onChange:r[1]||(r[1]=o=>u(a).setHeaderBgColor(s.headerBgColor))},null,8,["modelValue"])]),e("div",re,[t(d,{color:s.headerTextColor},{default:l(()=>[c("\u6587\u5B57\u989C\u8272")]),_:1},8,["color"]),e("div",ae,i(s.headerTextColor),1),t(C,{modelValue:s.headerTextColor,"onUpdate:modelValue":r[2]||(r[2]=o=>s.headerTextColor=o),onChange:r[3]||(r[3]=o=>u(a).setHeaderTextColor(s.headerTextColor))},null,8,["modelValue"])])]),e("div",ne,[t(d,{onClick:b},{default:l(()=>[c("\u91CD\u7F6E\u4E3B\u9898")]),_:1})])]),_:1})]),_:1}),t(y,{span:12},{default:l(()=>[t(g,{class:"mgb20",shadow:"hover"},{header:l(()=>[de]),default:l(()=>[e("div",ce,[e("div",ue,[t(d,{color:u(n).bgColor},{default:l(()=>[c("\u80CC\u666F\u989C\u8272")]),_:1},8,["color"]),e("div",me,i(u(n).bgColor),1),t(C,{modelValue:_.bgColor,"onUpdate:modelValue":r[4]||(r[4]=o=>_.bgColor=o),onChange:r[5]||(r[5]=o=>u(n).setBgColor(_.bgColor))},null,8,["modelValue"])]),e("div",ie,[t(d,{color:u(n).textColor},{default:l(()=>[c("\u6587\u5B57\u989C\u8272")]),_:1},8,["color"]),e("div",_e,i(u(n).textColor),1),t(C,{modelValue:_.textColor,"onUpdate:modelValue":r[6]||(r[6]=o=>_.textColor=o),onChange:r[7]||(r[7]=o=>u(n).setTextColor(_.textColor))},null,8,["modelValue"])])]),e("div",Ce,[t(d,{onClick:E},{default:l(()=>[c("\u91CD\u7F6E\u4E3B\u9898")]),_:1})])]),_:1})]),_:1})]),_:1})])}}});const Se=O(he,[["__scopeId","data-v-cef9d3ba"]]);export{Se as default};