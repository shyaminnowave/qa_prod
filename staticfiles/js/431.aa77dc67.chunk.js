"use strict";(self.webpackChunkqa_portal=self.webpackChunkqa_portal||[]).push([[431],{1431:(l,e,s)=>{s.r(e),s.d(e,{default:()=>v});var n=s(5043),i=s(6720),d=s(3216),o=s(3003),a=s(8526),r=s(9120),c=s(49),t=s(3982),u=s(579);const v=function(){var l,e,s,v,h;const m=localStorage.getItem("username"),x=(0,o.d4)((l=>l.ProfileReducer.profile));console.log(x);const j=(0,o.wA)(),p=(0,o.d4)((l=>l.UserList.list)),f=(0,o.d4)((l=>l.RoleAndPermissionReducer.roles)),g=(0,d.Zp)(),N=null===p||void 0===p?void 0:p.filter((l=>l.username!==m));(0,n.useEffect)((()=>{j((0,a.a)()),j((0,r.HS)()),j((0,t.E)(m))}),[]);const[_,b]=(0,n.useState)(null),[k,R]=(0,n.useState)([]),C=l=>{R([l.target.value])};async function w(l){l.preventDefault();try{var e;const l=await c.A.patch(`/user-update/${null===_||void 0===_||null===(e=_.item)||void 0===e?void 0:e.username}/`,{groups:k});console.log(l)}catch(s){console.log(s)}finally{j((0,a.a)()),j((0,t.E)(m)),R([]),b("")}}return(0,u.jsx)("div",{className:"profile",children:(0,u.jsxs)("div",{className:"inner_profile",children:[(0,u.jsxs)("div",{className:"profile_info",children:[(0,u.jsxs)("div",{className:"name",children:[(0,u.jsx)("h4",{children:"Name :"}),(0,u.jsxs)("h4",{className:"value",children:[" ",null===x||void 0===x||null===(l=x.data)||void 0===l?void 0:l.fullname]})]}),(0,u.jsxs)("div",{className:"role",children:[(0,u.jsx)("h4",{children:"Role :"}),(0,u.jsx)("h4",{className:"value",children:null===x||void 0===x||null===(e=x.data)||void 0===e?void 0:e.groups})]}),"Superusers"===(null===x||void 0===x||null===(s=x.data)||void 0===s?void 0:s.groups)&&(0,u.jsx)("div",{className:"role_button",children:(0,u.jsx)("button",{className:"role_management_button",onClick:()=>g("/role-management"),children:"Role management"})})]}),"Admin"===(null===x||void 0===x||null===(v=x.data)||void 0===v?void 0:v.groups)&&(0,u.jsx)("div",{className:"user_heading",children:(0,u.jsx)("h4",{children:"Users and Roles"})}),"Admin"===(null===x||void 0===x||null===(h=x.data)||void 0===h?void 0:h.groups)&&(0,u.jsx)("div",{className:"list_of_user_and_role",children:(0,u.jsx)("table",{border:1,children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{className:"column_name",children:[(0,u.jsx)("th",{children:"Id"}),(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Role"})]}),null===N||void 0===N?void 0:N.map(((l,e)=>(0,u.jsxs)("tr",{className:"column_value",children:[(0,u.jsx)("th",{children:e+1}),(0,u.jsx)("th",{children:null===l||void 0===l?void 0:l.fullname}),(0,u.jsxs)("th",{children:[null===l||void 0===l?void 0:l.groups," ",(0,u.jsx)(i.Yvo,{onClick:()=>b({item:l,index:e}),className:"edit"})]}),(null===_||void 0===_?void 0:_.index)===e&&(0,u.jsx)("th",{children:(0,u.jsxs)("div",{className:"dropdown",children:[(0,u.jsx)("select",{value:k,onChange:C,children:null===f||void 0===f?void 0:f.map((l=>(0,u.jsx)("option",{value:null===l||void 0===l?void 0:l.id,children:null===l||void 0===l?void 0:l.name},null===l||void 0===l?void 0:l.id)))}),(0,u.jsx)("button",{onClick:w,children:"Update"})]})})]},e)))]})})})]})})}}}]);
//# sourceMappingURL=431.aa77dc67.chunk.js.map