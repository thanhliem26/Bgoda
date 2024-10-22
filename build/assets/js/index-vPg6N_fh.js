import{bi as g,bm as o,bj as e,bv as _,bk as r,bo as l,bn as c,bp as d,bq as S,bw as q,bs as M}from"./index-BpEXgWCe.js";import{M as E,y as B,z as R,A as m,C as i,E as T,G as U,H as D,J as x,v as p}from"./useCreateResource-BhQvabhQ.js";import{H}from"./index-xAYK9N2k.js";const F=g(o)`
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 0;
  min-height: 660px;
`,K=g(o)`
  width: 1100px;
  padding: 0;
  margin: 0 auto;
`,N=g(o)`
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
`,z=()=>({queryKey:E.ADMIN_USER,createUser:()=>B.buildRequest({endpoint:"/v1/api/access/signup",method:"POST"})}),A=R({name:m().required(i.MC1("name")).max(64,i.MC4("name",64)),email:m().email().required(i.MC1("email")).max(255,i.MC4("email",255)),password:m().required(i.MC1("password")),re_password:m().oneOf([T("password")],i.MC7("password")).required(i.MC1("password"))});function P(a={}){const{onSuccess:t}=a,{createUser:h,queryKey:u}=z(),{useCreateReturn:n,useFormReturn:s}=U({mutationKey:[u],queryString:h,defaultValues:{email:"",password:"",name:"",re_password:""},resolver:D(A),onSuccess:t}),{handleSubmit:f,control:y,formState:j}=s,C=!j.isValid,{isPending:b,mutate:k}=n;function w(){f(v=>{k(v)})()}return{onSubmit:w,control:y,isValid:C,isPending:b,formState:j}}function V(){const{onSubmit:a,control:t,isPending:h,isValid:u}=P({onSuccess:()=>{}});return e.jsx(F,{children:e.jsx(K,{children:e.jsx(N,{children:e.jsxs(o,{className:"form_container",children:[e.jsx(o,{className:"form_title",children:e.jsx(_,{children:"Đăng kí"})}),e.jsxs(o,{className:"form_field",children:[e.jsxs(r,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:t,name:"name",render:({field:n,fieldState:s})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Họ và tên"}),e.jsx(p,{placeholder:"Họ và tên",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:s.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:t,name:"email",render:({field:n,fieldState:s})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Email"}),e.jsx(p,{placeholder:"Email",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:s.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:t,name:"password",render:({field:n,fieldState:s})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Mật khẩu"}),e.jsx(p,{placeholder:"Mật khẩu",required:!0,value:n.value,onChange:n.onChange,type:"password"}),e.jsx(d,{children:s.error?.message})]})})})}),e.jsx(r,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(l,{children:e.jsx(x,{control:t,name:"re_password",render:({field:n,fieldState:s})=>e.jsxs(r,{style:{flexDirection:"column"},children:[e.jsx(c,{style:{marginBottom:"8px",display:"block"},children:"Xác nhận mật khẩu"}),e.jsx(p,{placeholder:"Xác nhận mật khẩu",required:!0,value:n.value,onChange:n.onChange}),e.jsx(d,{children:s.error?.message})]})})})})]}),e.jsx(r,{style:{marginTop:"16px"},children:e.jsx(S,{onClick:a,disabled:u,loading:h,style:{width:"100%"},children:"Đăng kí"})}),e.jsx(r,{className:"form_link",children:e.jsx(o,{className:"form_link_item",children:e.jsx(q,{to:"/login",children:"Bạn đã có tài khoản?"})})}),e.jsx(r,{children:e.jsx(M,{children:"Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Bgoda."})})]})]})})})})}function G(){return e.jsx(H,{title:"Bgoda register",children:e.jsx(V,{})})}export{G as default};
