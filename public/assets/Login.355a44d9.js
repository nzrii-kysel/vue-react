import{d as B,a as d,O as E,r as t,u as U,y as I,b as c,o as L,c as N,f as l,g as r,e as _,w as f,I as R,C as g,B as b}from"./index.78778fd6.js";import{u as S}from"./useToast.02967165.js";const j=["onSubmit"],q={class:"auth-layout__options d-flex align-center justify-space-between"},T={class:"d-flex justify-center mt-3"},P=B({__name:"Login",setup(D){d.defaults.withCredentials=!0,d.defaults.baseURL="https://cpe-panel.surfi.ch:3000/api/";const{t:a}=E(),h=S(),n=t(""),u=t(""),p=t(!1),i=t([]),m=t([]),w=U(),V=I(()=>!i.value.length&&!m.value.length);function v(){if(!V.value)return!1;i.value=n.value?[]:["Email is required"],m.value=u.value?[]:["Password is required"],d.get("../sanctum/csrf-cookie").then(k=>{let e={email:n.value,password:u.value,remember:p.value};d.post("login",e).then(s=>{w.push({name:"dashboard"})}).catch(s=>{h.init({color:"danger",message:s.response.data.message})})})}return(k,e)=>{const s=c("va-input"),x=c("va-checkbox"),y=c("router-link"),C=c("va-button");return L(),N("form",{onSubmit:R(v,["prevent"])},[l(s,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),class:"mb-3",type:"email",label:r(a)("auth.email"),error:!!i.value.length,"error-messages":i.value},null,8,["modelValue","label","error","error-messages"]),l(s,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value=o),class:"mb-3",type:"password",label:r(a)("auth.password"),error:!!m.value.length,"error-messages":m.value},null,8,["modelValue","label","error","error-messages"]),_("div",q,[l(x,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o),class:"mb-0",label:r(a)("auth.keep_logged_in")},null,8,["modelValue","label"]),l(y,{class:"ml-1 va-link",to:{name:"recover-password"}},{default:f(()=>[g(b(r(a)("auth.recover_password")),1)]),_:1})]),_("div",T,[l(C,{class:"my-0",onClick:v},{default:f(()=>[g(b(r(a)("auth.login")),1)]),_:1})])],40,j)}}});export{P as default};