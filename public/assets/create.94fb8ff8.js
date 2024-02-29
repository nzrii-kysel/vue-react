import{d as q,r as c,u as B,E,a as d,b as s,o as i,c as h,e as r,f as n,w as m,g as e,h as V,I as F,F as R,j as S,k as T,C as j}from"./index.78778fd6.js";import{u as I}from"./useToast.02967165.js";const L={class:"buttons"},M={class:"row"},O={class:"flex xs12"},P=r("h1",{class:"va-h1"},"Create new user",-1),A={class:"mb-3"},D=r("div",null,"User role:",-1),G=j("save"),Q=q({__name:"create",setup(H){function b(){d.get("https://cpe-panel.surfi.ch:3000/api/../sanctum/csrf-cookie").then(l=>{let o="https://cpe-panel.surfi.ch:3000/api/admin/users";d.post(o,a).then(u=>{_.push("/admin/users").then(v=>{g.init({color:"success",message:"User updated."})})})})}let p=c();const g=I(),_=B();E();let a=c({name:"",password:"",email:"",role:"",organizations:[]}),f=c();d.get("https://cpe-panel.surfi.ch:3000/api/user").then(l=>{l.data.role=="admin"?p.value=["admin","org","end-user"]:p.value=["org","end-user"]});let w="https://cpe-panel.surfi.ch:3000/api/organizations";return d.get(w).then(function(l){f.value=l.data}).catch(l=>{_.push({name:"login"})}),(l,o)=>{const u=s("va-input"),v=s("va-select"),x=s("va-radio"),y=s("va-button"),k=s("va-form"),U=s("va-card-content"),C=s("va-card");return i(),h("div",L,[r("div",M,[r("div",O,[n(C,{class:"larger-padding"},{default:m(()=>[e(a)?(i(),V(U,{key:0},{default:m(()=>[P,n(k,{style:{width:"100%"},tag:"form",autocomplete:"off",onSubmit:F(b,["prevent"])},{default:m(()=>[n(u,{modelValue:e(a).name,"onUpdate:modelValue":o[0]||(o[0]=t=>e(a).name=t),required:"",label:"Name",class:"mb-3"},null,8,["modelValue"]),n(u,{modelValue:e(a).email,"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).email=t),required:"",label:"e-mail",class:"mb-3",type:"email"},null,8,["modelValue"]),n(v,{modelValue:e(a).organizations,"onUpdate:modelValue":o[2]||(o[2]=t=>e(a).organizations=t),class:"mb-3",label:"Organizations",options:e(f),"text-by":"name","value-by":"id",multiple:""},null,8,["modelValue","options"]),n(u,{modelValue:e(a).password,"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).password=t),label:"Password",type:"password",class:"mb-3",required:""},null,8,["modelValue"]),r("div",A,[D,(i(!0),h(R,null,S(e(p),(t,z)=>(i(),V(x,{key:z,modelValue:e(a).role,"onUpdate:modelValue":o[4]||(o[4]=N=>e(a).role=N),option:t,required:""},null,8,["modelValue","option"]))),128))]),n(y,{type:"submit"},{default:m(()=>[G]),_:1})]),_:1},8,["onSubmit"])]),_:1})):T("",!0)]),_:1})])])])}}});export{Q as default};