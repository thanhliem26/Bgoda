import{r as y,L as E,l as R,a1 as d,a2 as n,bw as T,a3 as e,bx as U,bu as q,a5 as o,a6 as x,a4 as h,a7 as p,a8 as B,by as u,a9 as L}from"./index-B7rx6zHY.js";import{M,R as H,m as K,n as g,o as l,v as N,w as z,C as f,K as j}from"./useCreateResource-BJg7261S.js";import{H as F}from"./index-B9XqFcbC.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"},P=function(t,i){return y.createElement(E,R({},t,{ref:i,icon:O}))},V=y.forwardRef(P);const D=d(n)`
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 0;
  min-height: 660px;
`,I=d(n)`
  width: 1100px;
  padding: 0;
  margin: 0 auto;
`,A=d(n)`
  width: 500px;
  line-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  & .form_container {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 2px;
    background-color: rgb(255, 255, 255);
    padding: 16px 24px 24px;
    position: relative;
    opacity: 1;
    transition: opacity 500ms;
    border-radius: 4px;

    & .form_title {
      margin-top: 16px;
      margin-bottom: 16px;
      & h3 {
        font-weight: 500;
        font-size: 24px;
        margin: 8px 0px;
        line-height: 30px;
      }

      & h5 {
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        margin: 8px 0px;
      }
    }

    & .form_link {
      justify-content: space-between;
      margin: 25px 0 10px;

      & .form_link_item {
        & a {
          background-color: transparent;
          text-decoration: none;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: rgb(83, 146, 249);
        }
      }
    }
  }
`,$=()=>({queryKey:M.LOGIN_USER,loginUser:()=>H.buildRequest({endpoint:"/api/admin/accounts/login-via-form",method:"POST"})}),G=K({email:g().email().required(l.MC1("email")).max(255,l.MC4("email",255)),password:g().required(l.MC1("password")).max(255,l.MC4("password",255))});function Q(a={}){const{saveToken:t}=T(),{loginUser:i,queryKey:r}=$(),{useCreateReturn:s,useFormReturn:v}=N({mutationKey:[r],queryString:i,defaultValues:{email:"",password:""},resolver:z(G),onSuccess:c=>{t({accessToken:c.toString()}),window.location.reload()}}),{handleSubmit:b,control:k,formState:m}=v,w=!m.isValid,{isPending:C,mutate:_}=s;function S(){b(c=>{_(c)})()}return{onSubmit:S,control:k,isValid:w,isPending:C,formState:m}}function W(){const{onSubmit:a,control:t,isPending:i}=Q();return e.jsx(D,{children:e.jsx(I,{children:e.jsx(A,{children:e.jsxs(n,{className:"form_container",children:[e.jsxs(n,{className:"form_title",children:[e.jsx(U,{children:"Đăng nhập"}),e.jsx(n,{children:e.jsx(q,{children:"Để đảm bảo an toàn, xin vui lòng đăng nhập để truy cập vào thông tin"})})]}),e.jsxs(n,{className:"form_field",children:[e.jsxs(o,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(o,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(x,{children:e.jsx(f,{control:t,name:"email",render:({field:r,fieldState:s})=>e.jsxs(o,{style:{flexDirection:"column"},children:[e.jsx(h,{style:{marginBottom:"8px",display:"block"},children:"Email"}),e.jsx(j,{placeholder:"Email",required:!0,value:r.value,onChange:r.onChange}),e.jsx(p,{children:s.error?.message})]})})})}),e.jsx(o,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(x,{children:e.jsx(f,{control:t,name:"password",render:({field:r,fieldState:s})=>e.jsxs(o,{style:{flexDirection:"column"},children:[e.jsx(h,{style:{marginBottom:"8px",display:"block"},children:"Password"}),e.jsx(j,{placeholder:"Password",required:!0,value:r.value,onChange:r.onChange,type:"password"}),e.jsx(p,{children:s.error?.message})]})})})})]}),e.jsx(o,{style:{marginTop:"16px"},children:e.jsx(B,{onClick:a,loading:i,style:{width:"100%"},children:"Đăng nhập"})}),e.jsxs(o,{className:"form_link",children:[e.jsx(n,{className:"form_link_item",children:e.jsx(u,{to:"/register",children:"Tạo tài khoản"})}),e.jsx(n,{className:"form_link_item",children:e.jsxs(u,{to:"/",children:[" ",e.jsx(V,{})," Quên mật khẩu?"]})})]}),e.jsx(o,{children:e.jsx(L,{children:"Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Bgoda."})})]})]})})})})}function ee(){return e.jsx(F,{title:"Bgoda login",children:e.jsx(W,{})})}export{ee as default};
