import{d,O as p,r as o,b as r,o as _,c as f,f as n,g as l,e as v,w as b,I as h,u as g,C as V,B as w}from"./index.78778fd6.js";const x=["onSubmit"],y={class:"d-flex justify-center mt-3"},N=d({__name:"RecoverPassword",setup(B){const{t}=p(),e=o(""),s=o([]);function u(){e.value?g().push("/"):s.value=["Email is required"]}return(C,a)=>{const i=r("va-input"),m=r("va-button");return _(),f("form",{class:"login",onSubmit:h(u,["prevent"])},[n(i,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),class:"mb-3",type:"email",label:l(t)("auth.email"),error:!!s.value.length,"error-messages":s.value},null,8,["modelValue","label","error","error-messages"]),v("div",y,[n(m,{type:"submit",class:"my-0"},{default:b(()=>[V(w(l(t)("auth.reset_password")),1)]),_:1})])],40,x)}}});export{N as default};
