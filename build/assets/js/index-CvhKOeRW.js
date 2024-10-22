import{r as b,I as E,_ as R,bi as l,bm as n,bj as e,bv as q,bl as M,bk as r,bo as x,bn as p,bp as h,bq as U,bw as u,bs as B}from"./index-BpEXgWCe.js";import{M as H,y as T,z,A as g,C as c,G as N,H as V,J as f,v as j}from"./useCreateResource-BhQvabhQ.js";import{H as F}from"./index-xAYK9N2k.js";var K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"},L=function(t,i){return b.createElement(E,R({},t,{ref:i,icon:K}))},P=b.forwardRef(L);const D=l(n)`
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 0;
  min-height: 660px;
`,I=l(n)`
  width: 1100px;
  padding: 0;
  margin: 0 auto;
`,O=l(n)`
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
`,A=()=>({queryKey:H.ADMIN_USER,createUser:()=>T.buildRequest({endpoint:"/v1/api/access/signup",method:"POST"})}),$=z({email:g().email().required(c.MC1("email")).max(255,c.MC4("email",255)),password:g().required(c.MC1("password")).max(255,c.MC4("password",255))});function G(o={}){const{onSuccess:t}=o,{createUser:i,queryKey:d}=A(),{useCreateReturn:s,useFormReturn:a}=N({mutationKey:[d],queryString:i,defaultValues:{email:"",password:""},resolver:V($),onSuccess:t}),{handleSubmit:y,control:v,formState:m}=a,C=!m.isValid,{isPending:k,mutate:w}=s;function _(){y(S=>{w(S)})()}return{onSubmit:_,control:v,isValid:C,isPending:k,formState:m}}function Q(){const{onSubmit:o,control:t,isPending:i,isValid:d}=G({onSuccess:()=>{}});return e.jsx(D,{children:e.jsx(I,{children:e.jsx(O,{children:e.jsxs(n,{className:"form_container",children:[e.jsxs(n,{className:"form_title",children:[e.jsx(q,{children:"Đăng nhập"}),e.jsx(n,{children:e.jsx(M,{children:"Để đảm bảo an toàn, xin vui lòng đăng nhập để truy cập vào thông tin"})})]}),e.jsxs(n,{className:"form_field",children:[e.jsxs(r,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(x,{children:e.jsx(f,{control:t,name:"email",render:({field:s,fieldState:a})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(p,{style:{marginBottom:"8px",display:"block"},children:"Email"}),e.jsx(j,{placeholder:"Email",required:!0,value:s.value,onChange:s.onChange}),e.jsx(h,{children:a.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(x,{children:e.jsx(f,{control:t,name:"password",render:({field:s,fieldState:a})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(p,{style:{marginBottom:"8px",display:"block"},children:"Password"}),e.jsx(j,{placeholder:"Password",required:!0,value:s.value,onChange:s.onChange,type:"password"}),e.jsx(h,{children:a.error?.message})]})})})})]}),e.jsx(r,{style:{marginTop:"16px"},children:e.jsx(U,{onClick:o,loading:i,style:{width:"100%"},children:"Đăng nhập"})}),e.jsxs(r,{className:"form_link",children:[e.jsx(n,{className:"form_link_item",children:e.jsx(u,{to:"/register",children:"Tạo tài khoản"})}),e.jsx(n,{className:"form_link_item",children:e.jsxs(u,{to:"/",children:[" ",e.jsx(P,{})," Quên mật khẩu?"]})})]}),e.jsx(r,{children:e.jsx(B,{children:"Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Bgoda."})})]})]})})})})}function X(){return e.jsx(F,{title:"Bgoda login",children:e.jsx(Q,{})})}export{X as default};
