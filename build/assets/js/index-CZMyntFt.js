import{r as j,a3 as e,a5 as c,a6 as C,a7 as R,a8 as x,a9 as P,a1 as v,a2 as f,a4 as $,ac as G,ab as N}from"./index-B7rx6zHY.js";import{e as L,s as Y,A as H,M as D,f as I,h as S,j as Q,k as z,l as W,m as J,n as X,d as Z,o as ee,p as ne,I as te,q as se,r as re,C as oe}from"./ActionGroupButton-aEdq2rKF.js";import{M as B,R as y,m as K,n as T,o as g,y as O,v as le,w as V,z as ie,A as ae,C as b,x as ce}from"./useCreateResource-BJg7261S.js";import{H as ue}from"./index-B9XqFcbC.js";const q=()=>({queryKey:B.ROLE_TEMPLATE,getAllRoleTemplate:()=>y.buildRequest({endpoint:"/api/admin/roles",method:"GET"}),createRoleTemplate:()=>y.buildRequest({endpoint:"/api/admin/roles",method:"POST"}),updateRoleTemplate:()=>y.buildRequest({endpoint:"/api/admin/roles",method:"PUT"}),getRoleTemplate:()=>y.buildRequest({endpoint:"/v1/api/product",method:"GET",slash_id:!0}),deleteRoleTemplate:()=>y.buildRequest({endpoint:"/api/admin/roles",method:"DELETE"})}),de=t=>{const{getAllRoleTemplate:n,queryKey:s}=q(),{search:o,filters:r,variables:a={}}=t;return{useTableReturn:L({buildQuery:n,queryKey:s,filters:r,search:o,variables:a})}},me=()=>{const t=j.useRef(""),[n,s]=j.useState(!1),[o,r]=j.useState(!1),[a,l]=j.useState(!1),[i,u]=j.useState(!1);function d(m){t.current=m,r(!0)}function h(m){t.current=m,u(!0)}function p(m){t.current=m,l(!0)}return{openCreate:n,openEdit:o,openDelete:a,setOpenCreate:s,setOpenEdit:r,setOpenDelete:l,handleOpenEdit:d,handleOpenDelete:p,openDetail:i,setOpenDetail:u,handleOpenDetail:h,rowId:t}},pe=K({name:T().required(g.MC1("name")),permission:O().of(T().required()).min(1,g.MC1("permission")).required(g.MC1("permission"))}),xe=K({name:T().required(g.MC1("name")),permission:O().of(T().required()).min(1,g.MC1("permission")).required(g.MC1("permission"))});function he(t={}){const{onSuccess:n}=t,{createRoleTemplate:s,queryKey:o}=q(),{useCreateReturn:r,useFormReturn:a}=le({mutationKey:[o],queryString:s,defaultValues:{name:"",permission:[]},resolver:V(pe),onSuccess:n}),{handleSubmit:l,control:i,formState:u,setValue:d}=a,h=!u.isValid,{isPending:p,mutate:m}=r;function E(){l(A=>{m(A)})()}return{onSubmit:E,control:i,isValid:h,isPending:p,formState:u,setValue:d}}const je=()=>({queryKey:B.PERMISSION,getAllPermission:()=>y.buildRequest({endpoint:"/api/admin/roles/permission",method:"GET"})}),ye=()=>{const{getAllPermission:t,queryKey:n}=je(),{data:s,...o}=Y({queryKey:[n],queryFn:async()=>y.fetchREST(t())}),r=j.useMemo(()=>s&&ie(s)?ae(s):[],[s]),a=j.useMemo(()=>r.map(l=>({label:l,value:l})),[r]);return{...o,options:a}},_=t=>{const{options:n}=ye();return e.jsx(H,{options:n,mode:"tags",...t})};function fe({open:t,setOpen:n}){const{onSubmit:s,control:o,isPending:r,isValid:a}=he({onSuccess:()=>{n(!1)}});return e.jsxs(D,{title:"Add a new role template",open:t,setOpen:n,children:[e.jsxs(c,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(C,{children:e.jsx(b,{control:o,name:"name",render:({field:l,fieldState:i})=>e.jsxs(c,{style:{flexDirection:"column"},children:[e.jsx(I,{label:"Name",required:!0,value:l.value,onChange:l.onChange}),e.jsx(R,{children:i.error?.message})]})})})}),e.jsx(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8,gap:16},children:e.jsx(C,{children:e.jsx(b,{control:o,name:"permission",render:({field:l,fieldState:i})=>e.jsxs(c,{style:{flexDirection:"column"},children:[e.jsx(_,{label:"Permission",required:!0,value:l.value,onChange:l.onChange}),e.jsx(R,{children:i.error?.message})]})})})})]}),e.jsxs(S,{children:[e.jsx(x,{primary_shallow:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(x,{disabled:a,onClick:s,loading:r,children:"Submit"})]})]})}function ge(t){const{id:n,onSuccess:s}=t,{updateRoleTemplate:o,getRoleTemplate:r,queryKey:a}=q(),{useEditReturn:l,useFormReturn:i,isGetting:u}=Q({resolver:V(xe),editBuildQuery:o,oneBuildQuery:r,queryKey:[a],id:n,onSuccess:s,formatDefaultValues(){return{id:n,name:"",permission:[]}}}),{handleSubmit:d,control:h,formState:p,setValue:m}=i,E=!p.isValid||!p.isDirty,{mutate:A,isPending:F}=l;function U(){d(w=>{console.log("🚀 ~ value:",w),A(w)})()}return{control:h,isValid:E,isPending:F,onSubmit:U,formState:p,setValue:m,isGetting:u}}function Ce({open:t,setOpen:n,id:s}){const{onSubmit:o,control:r,isPending:a,isValid:l}=ge({onSuccess:()=>{n(!1)},id:s});return e.jsxs(D,{title:"Edit role template",open:t,setOpen:n,children:[e.jsxs(c,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8},children:e.jsx(C,{children:e.jsx(b,{control:r,name:"name",render:({field:i,fieldState:u})=>e.jsxs(c,{style:{flexDirection:"column"},children:[e.jsx(I,{label:"Name",required:!0,value:i.value,onChange:i.onChange}),e.jsx(R,{children:u.error?.message})]})})})}),e.jsx(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8,gap:16},children:e.jsx(C,{children:e.jsx(b,{control:r,name:"permission",render:({field:i,fieldState:u})=>e.jsxs(c,{style:{flexDirection:"column"},children:[e.jsx(_,{label:"Permission",required:!0,value:i.value,onChange:i.onChange}),e.jsx(R,{children:u.error?.message})]})})})})]}),e.jsxs(S,{children:[e.jsx(x,{primary_shallow:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(x,{disabled:l,onClick:o,loading:a,children:"Submit"})]})]})}function Re(t){const{id:n,onSuccess:s,onError:o}=t,{queryKey:r,deleteRoleTemplate:a}=q(),{useDeleteReturn:l}=z({mutationKey:[r],onSuccess:s,onError:o,queryString:a}),{mutate:i,isPending:u}=l;function d(){i({id:n})}return{isPending:u,onDelete:d}}function Te({open:t,setOpen:n,id:s}){const{onDelete:o,isPending:r}=Re({onSuccess:()=>{n(!1)},id:s});return e.jsx(D,{title:"Do you want to delete role template?",open:t,setOpen:n,children:e.jsxs(S,{children:[e.jsx(x,{primary_shallow:!0,onClick:()=>n(!1),children:"Cancel"}),e.jsx(x,{onClick:o,loading:r,children:"Submit"})]})})}function be({handleOpenEdit:t,handleOpenDelete:n,handleOpenDetail:s}){return W({actions:{detail:{key:"detail",onClick:r=>{s(r)},label:"Detail",icon:e.jsx(ce,{})},edit:{key:"edit",onClick:r=>{t(r)},label:"Edit",icon:e.jsx(J,{})},delete:{key:"delete",onClick:r=>{n(r)},label:"Delete",icon:e.jsx(X,{})}}})}const De=t=>[{title:"No",dataIndex:"id",key:"id",width:100},{title:"Name",dataIndex:"name",key:"name",render:n=>e.jsx("b",{children:n}),width:300},{title:"Permission",dataIndex:"permission",key:"permission",width:200},{title:"Created date",dataIndex:"createdDate",key:"createdDate",width:300,render:n=>e.jsx(P,{children:Z(n).format("HH:mm DD-MM-YYYY")})},{title:"Action",key:"action",width:100,render:(n,s)=>e.jsx(ee,{actions:t,rowId:s?.id,rowData:s})}],k=v($)`
      font-size: 12px;
    font-weight: 500;
    line-height: 14.63px;
    white-space: break-spaces;
    color: rgb(77, 96, 122);
`,M=v(P)`
  
  font-size: 13px;
    font-weight: 600;
    line-height: 15.85px;
    white-space: break-spaces;
    color: rgb(11, 14, 30);
`;function Se({open:t,setOpen:n}){return e.jsxs(D,{title:"Detail role template",open:t,setOpen:n,children:[e.jsxs(c,{style:{flexDirection:"column",gap:"16px"},children:[e.jsx(c,{children:e.jsxs(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8,flexDirection:"column",flex:1},children:[e.jsx(k,{children:"Name"}),e.jsx(f,{children:e.jsx(M,{children:"Name ok nhe"})})]})}),e.jsx(c,{children:e.jsxs(c,{style:{justifyContent:"center",alignContent:"center",marginTop:8,flexDirection:"column",flex:1},children:[e.jsx(k,{children:"Permission"}),e.jsx(f,{children:e.jsx(M,{children:"permission nhe"})})]})})]}),e.jsx(S,{children:e.jsx(x,{primary_shallow:!0,onClick:()=>n(!1),children:"Cancel"})})]})}const qe=()=>{const t=me(),{openCreate:n,setOpenCreate:s,openEdit:o,setOpenEdit:r,openDelete:a,setOpenDelete:l,openDetail:i,setOpenDetail:u,rowId:d}=t,{actions:h}=be(t),{useTableReturn:p}=de({variables:{indexPage:1}}),{columnTable:m}=ne({columns:De,actions:h});return e.jsxs(f,{style:{paddingTop:16,paddingBottom:32},children:[e.jsx(f,{children:e.jsx(te,{textLabel:"Role template",Icon:e.jsx(G,{})})}),e.jsxs(N,{style:{marginTop:"20px"},children:[e.jsxs(c,{style:{justifyContent:"space-between",padding:"12px",marginTop:"16px"},children:[e.jsx(f,{style:{width:"400px",maxWidth:"100%"},children:e.jsx(se,{placeholder:"Search by name, email"})}),e.jsx(f,{children:e.jsx(x,{icon:e.jsx(re,{}),onClick:()=>s(!0),children:"Add a new role template"})})]}),e.jsx(c,{children:e.jsx(oe,{columns:m,useTableReturn:p})})]}),n&&e.jsx(fe,{open:n,setOpen:s}),o&&e.jsx(Ce,{open:o,setOpen:r,id:d.current}),a&&e.jsx(Te,{open:a,setOpen:l,id:d.current}),i&&e.jsx(Se,{open:i,setOpen:u,id:d.current})]})};function Me(){return e.jsx(ue,{title:"Bgoda Role template",children:e.jsx(qe,{})})}export{Me as default};
