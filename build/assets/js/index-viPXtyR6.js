import{a1 as g,a2 as i,a3 as e,bx as _,a5 as r,a6 as l,a4 as c,a7 as d,a8 as S,by as q,a9 as M}from"./index-B7rx6zHY.js";import{M as R,R as B,m as E,n as m,o as a,r as T,v as U,w as D,C as x,K as p}from"./useCreateResource-BJg7261S.js";import{H as K}from"./index-B9XqFcbC.js";const F=g(i)`
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 0;
  min-height: 660px;
`,H=g(i)`
  width: 1100px;
  padding: 0;
  margin: 0 auto;
`,N=g(i)`
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
`,P=()=>({queryKey:R.ADMIN_USER,createUser:()=>B.buildRequest({endpoint:"/v1/api/access/signup",method:"POST"})}),V=E({name:m().required(a.MC1("name")).max(64,a.MC4("name",64)),email:m().email().required(a.MC1("email")).max(255,a.MC4("email",255)),password:m().required(a.MC1("password")),re_password:m().oneOf([T("password")],a.MC7("password")).required(a.MC1("password"))});function z(o={}){const{onSuccess:s}=o,{createUser:h,queryKey:u}=P(),{useCreateReturn:n,useFormReturn:t}=U({mutationKey:[u],queryString:h,defaultValues:{email:"",password:"",name:"",re_password:""},resolver:D(V),onSuccess:s}),{handleSubmit:f,control:y,formState:j}=t,C=!j.isValid,{isPending:b,mutate:k}=n;function w(){f(v=>{k(v)})()}return{onSubmit:w,control:y,isValid:C,isPending:b,formState:j}}function A(){const{onSubmit:o,control:s,isPending:h,isValid:u}=z({onSuccess:()=>{}});return e.jsx(F,{children:e.jsx(H,{children:e.jsx(N,{children:e.jsxs(i,{className:"form_container",children:[e.jsx(i,{className:"form_title",children:e.jsx(_,{children:"Đăng kí"})}),e.jsxs(i,{className:"form_field",children:[e.jsxs(r,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:s,name:"name",render:({field:n,fieldState:t})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Họ và tên"}),e.jsx(p,{placeholder:"Họ và tên",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:t.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:s,name:"email",render:({field:n,fieldState:t})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Email"}),e.jsx(p,{placeholder:"Email",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:t.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:s,name:"password",render:({field:n,fieldState:t})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Mật khẩu"}),e.jsx(p,{placeholder:"Mật khẩu",required:!0,value:n.value,onChange:n.onChange,type:"password"}),e.jsx(d,{children:t.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:s,name:"re_password",render:({field:n,fieldState:t})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Xác nhận mật khẩu"}),e.jsx(p,{placeholder:"Xác nhận mật khẩu",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:t.error?.message})]})})})})]}),e.jsx(r,{style:{marginTop:"16px"},children:e.jsx(S,{onClick:o,disabled:u,loading:h,style:{width:"100%"},children:"Đăng kí"})}),e.jsx(r,{className:"form_link",children:e.jsx(i,{className:"form_link_item",children:e.jsx(q,{to:"/login",children:"Bạn đã có tài khoản?"})})}),e.jsx(r,{children:e.jsx(M,{children:"Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Bgoda."})})]})]})})})})}function I(){return e.jsx(K,{title:"Bgoda register",children:e.jsx(A,{})})}export{I as default};
