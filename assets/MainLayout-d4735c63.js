import{d as q,r as t,o as y,c as $,w as o,a as e,b as M,e as F,F as R,f as C,t as D,R as U,g as L,h as A,i as m,j as g,k as O,l as Q,u as j,A as z,m as G}from"./index-fccdf61c.js";import{u as N,a as H}from"./useQuery-67dc28bd.js";import{u as E}from"./useStore-9ef4082a.js";const K=q({__name:"TheSidebar",props:{drawerSidebar:{type:Boolean,required:!0,default:!0}},setup(a){const l=a,n=[{text:U.overview.name,path:U.overview.path,icon:"mdi-view-dashboard"},{text:U.product.name,path:U.product.path,icon:"mdi-store"},{text:U.media.name,path:U.media.path,icon:"mdi-folder-multiple-image"}],h=s=>{L.push({path:s.path})};return(s,r)=>{const d=t("VIcon"),i=t("v-list-item-title"),b=t("v-list-item"),w=t("v-list"),v=t("v-navigation-drawer");return y(),$(v,{"model-value":l.drawerSidebar},{default:o(()=>[e(w,{class:"py-0"},{default:o(()=>[(y(),M(R,null,F(n,(_,u)=>e(b,{key:u,value:_,onClick:()=>h(_)},{prepend:o(()=>[e(d,{icon:_.icon},null,8,["icon"])]),default:o(()=>[e(i,null,{default:o(()=>[C(D(_.text),1)]),_:2},1024)]),_:2},1032,["value","onClick"])),64))]),_:1})]),_:1},8,["model-value"])}}}),W=()=>A.get("/user").then(a=>a.data),J=a=>A.put(`/user/${a.id}`,a).then(l=>l.data),X=(a,l)=>A.put(`/update-password/${a}`,{password:l}).then(n=>n.data),Y={class:"pa-4"},Z={class:"flex"},ee={class:"flex-1 ml-2"},te={class:"float-right"},oe=q({__name:"ProfileModal",props:{isOpen:{type:Boolean,default:!1},user:{type:Object,required:!0}},emits:["onClose"],setup(a,{emit:l}){var v,_,u;const n=a,h=N(),s=m(!1),r=m((v=n.user)==null?void 0:v.name),d=m((_=n.user)==null?void 0:_.email),i=m((u=n.user)==null?void 0:u.roleCode),b=async()=>{if(n.user.name!==r.value&&r.value)try{const f={id:n.user.id,name:r.value};s.value=!0,await J(f)&&(h.refetchQueries(["getUser"]),O.success("Update successful"))}catch{O.error("Update failed")}finally{s.value=!1}else O.warning("Please enter the name you want to update")},w=()=>{l("onClose")};return(f,p)=>{const x=t("v-card-title"),c=t("VDivider"),V=t("v-img"),k=t("v-avatar"),P=t("VTextField"),B=t("v-btn"),S=t("v-card"),I=t("v-dialog");return y(),$(I,{"model-value":a.isOpen,width:900,persistent:""},{default:o(()=>[e(S,null,{default:o(()=>[e(x,null,{default:o(()=>[C("Profile")]),_:1}),e(c),g("div",Y,[g("div",Z,[e(k,{size:"100px"},{default:o(()=>[e(V,{alt:"Avatar",src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"})]),_:1}),g("div",ee,[e(P,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=T=>r.value=T),label:"Name",variant:"outlined"},null,8,["modelValue"]),e(P,{modelValue:d.value,"onUpdate:modelValue":p[1]||(p[1]=T=>d.value=T),label:"Email",variant:"outlined",disabled:""},null,8,["modelValue"]),e(P,{modelValue:i.value,"onUpdate:modelValue":p[2]||(p[2]=T=>i.value=T),label:"Role",variant:"outlined",disabled:""},null,8,["modelValue"])])]),g("div",te,[e(B,{class:"mr-2",onClick:w,disabled:s.value},{default:o(()=>[C(" Cancel ")]),_:1},8,["disabled"]),e(B,{color:"blue",onClick:b,loading:s.value},{default:o(()=>[C(" Update ")]),_:1},8,["loading"])])])]),_:1})]),_:1},8,["model-value"])}}}),ne={class:"pa-4"},ae={class:"float-right mb-3"},le=q({__name:"UpdatePasswordModal",props:{isOpen:{type:Boolean,default:!1}},emits:["onClose"],setup(a,{emit:l}){const h=N().getQueryData(["getUser"]),s=m(null),r=m(!1),d=m(""),i=m(""),b=[u=>u?u!==d.value?"Re-enter the password does not match":!0:"Confirm password is required."],w=[u=>u?u.length<8?"Password must contain at least 8 characters":!0:"This field is required."],v=async()=>{try{if(!s.value.isValid)return;r.value=!0,await X(h.id,d.value),O.success("Update successful"),_()}catch{O.error("Update failed")}finally{r.value=!1}},_=()=>{l("onClose")};return(u,f)=>{const p=t("v-card-title"),x=t("VDivider"),c=t("VTextField"),V=t("v-btn"),k=t("v-form"),P=t("v-card"),B=t("v-dialog");return y(),$(B,{"model-value":a.isOpen,width:900,persistent:""},{default:o(()=>[e(P,null,{default:o(()=>[e(p,null,{default:o(()=>[C("Update password")]),_:1}),e(x),g("div",null,[e(k,{onSubmit:Q(v,["prevent"]),ref_key:"formRef",ref:s},{default:o(()=>[g("div",ne,[g("div",null,[e(c,{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=S=>d.value=S),label:"Password",variant:"outlined",type:"password",rules:w,class:"mb-3"},null,8,["modelValue"]),e(c,{modelValue:i.value,"onUpdate:modelValue":f[1]||(f[1]=S=>i.value=S),label:"Confirm password",variant:"outlined",type:"password",rules:b},null,8,["modelValue"])]),g("div",ae,[e(V,{class:"mr-2",onClick:_,disabled:r.value},{default:o(()=>[C(" Cancel ")]),_:1},8,["disabled"]),e(V,{color:"blue",type:"submit",loading:r.value},{default:o(()=>[C(" Update ")]),_:1},8,["loading"])])])]),_:1},8,["onSubmit"])])]),_:1})]),_:1},8,["model-value"])}}}),se=g("span",null," Admin ",-1),re=q({__name:"TheHeader",props:{onToggleSidebar:{type:Function,required:!0}},setup(a){const l=m(!1),n=m(!1),h=E("auth"),{data:s}=H({queryKey:["getUser"],queryFn:async()=>{const{data:d}=await W();return d}}),r=[{title:"Welcome!"},{title:"Profile",onClick:()=>{l.value=!0}},{title:"Update password",onClick:()=>{n.value=!0}},{title:"Logout",onClick:()=>{h.dispatch(z.LOGOUT),L.push("/login")}}];return(d,i)=>{const b=t("VBtn"),w=t("VImg"),v=t("v-avatar"),_=t("v-app-bar"),u=t("v-list-item-title"),f=t("v-list-item"),p=t("v-list"),x=t("v-menu");return y(),M(R,null,[e(_,{elevation:1},{title:o(()=>[g("div",null,[e(b,{icon:"mdi-menu",onClick:a.onToggleSidebar},null,8,["onClick"]),se])]),append:o(()=>[e(v,{color:"surface-variant",size:"35",id:"menu-activator"},{default:o(()=>[e(w,{src:"https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"})]),_:1})]),_:1}),e(x,{activator:"#menu-activator"},{default:o(()=>[e(p,null,{default:o(()=>[(y(),M(R,null,F(r,(c,V)=>e(f,{key:V,value:V},{default:o(()=>[e(u,{onClick:()=>{var k;return(k=c==null?void 0:c.onClick)==null?void 0:k.call(c)}},{default:o(()=>[C(D(c.title),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"])),64))]),_:1})]),_:1}),e(oe,{"is-open":l.value,user:j(s),onOnClose:i[0]||(i[0]=c=>l.value=!1)},null,8,["is-open","user"]),e(le,{"is-open":n.value,onOnClose:i[1]||(i[1]=c=>n.value=!1)},null,8,["is-open"])],64)}}}),ie={key:1,class:"pa-3"},_e=q({__name:"MainLayout",setup(a){const l=E(),n=m(!0),h=G(()=>l.getters("isLoading")),s=()=>{n.value=!n.value};return(r,d)=>{const i=t("v-progress-linear"),b=t("RouterView"),w=t("v-main"),v=t("v-layout");return y(),$(v,null,{default:o(()=>[e(K,{"drawer-sidebar":n.value},null,8,["drawer-sidebar"]),e(re,{"on-toggle-sidebar":s}),e(w,null,{default:o(()=>[h.value?(y(),$(i,{key:0,indeterminate:"",height:5})):(y(),M("div",ie,[e(b)]))]),_:1})]),_:1})}}});export{_e as default};
