"use strict";(self.webpackChunkqa_portal=self.webpackChunkqa_portal||[]).push([[612],{2612:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var a=t(5043),i=t(3216),o=t(8144),l=t(3003),d=t(5475),n=t(6720),r=t(1462),c=t(9804),p=t(5051),u=t(6789),x=t(49),h=t(6254),v=t(1126),m=t(579);const j=function(){const[e,s]=(0,a.useState)(!0),[t,j]=(0,a.useState)(""),[b,f]=(0,a.useState)(""),[y,g]=(0,a.useState)(""),[N,w]=(0,a.useState)(""),[C,S]=(0,a.useState)(!1),k=(0,i.g)(),_=(0,l.wA)(),z=(0,i.Zp)(),A=k.id;console.log(k);const R=(0,l.d4)((e=>e.TestDetailReducer.testDetail));return(0,a.useEffect)((()=>{_((0,o.T)(A))}),[]),(0,m.jsxs)("div",{className:"testDetail_page",children:[C&&(0,m.jsx)(v.A,{isOpen:C,title:"Add Reason For Change",onClose:function(){S(!1)},confirm:{text:"Confirm",onConfirm:async function(){var e=null===R||void 0===R?void 0:R.status,a=null===R||void 0===R?void 0:R.automation_status,i=null===R||void 0===R?void 0:R.priority,l=[];""!==t&&(e=t,l.push("Status")),""!==b&&(a=b,l.push("Automation Status")),""!==y&&(i=y,l.push("Priority"));try{const s=await x.A.patch(`/test-case/details/${A}/`,{status:e,automation_status:a,priority:i,history_change_reason:N});console.log(l),console.log(s)}catch(d){console.log(d)}finally{_((0,o.T)(A)),_((0,h.E)(A)),s(!0),f(""),g(""),j(""),w(""),S(!1)}}},children:(0,m.jsx)("div",{className:"textarea",children:(0,m.jsx)("textarea",{spellCheck:!1,autoComplete:"off",type:"text",id:"inputField",name:"inputField",value:N,onChange:e=>w(e.target.value)})})}),(0,m.jsx)("div",{className:"test_detail",children:(0,m.jsxs)("div",{className:"inner_testdetail",children:[(0,m.jsx)("div",{className:"testcase-info-box",children:(0,m.jsxs)("div",{className:"test_case_name-and-info",children:[!1===e&&(0,m.jsx)("div",{className:"save-button",style:{position:"absolute",right:"10px",bottom:"10px",fontSize:"0.8vw",cursor:"pointer"},children:(0,m.jsx)(u.A,{size:"small",type:"primary",onClick:()=>S(!0),iconPosition:"left",children:"Save"})}),(0,m.jsxs)("div",{className:"testcase-name-status",children:[(0,m.jsxs)("div",{className:"navigate-edit",children:[(0,m.jsxs)("p",{onClick:()=>z(`/test-case/${k.type}`),children:[(0,m.jsx)(r.oBS,{style:{fontSize:"1rem"}})," Back"]}),(0,m.jsx)("p",{onClick:()=>s(!e),children:(0,m.jsx)(c.u6n,{style:{fontSize:"1vw"}})})]}),(0,m.jsxs)("div",{className:"name-id",children:[(0,m.jsx)("h2",{children:null===R||void 0===R?void 0:R.id}),(0,m.jsx)("h2",{children:null===R||void 0===R?void 0:R.test_name})]}),(0,m.jsxs)("div",{className:"st",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#5d7290"},children:"Status"}),e?(0,m.jsx)("p",{style:{backgroundColor:"#ebf0f5",fontSize:"0.9vw",padding:"1px 6px",border:"1.5px solid #d7dee7",borderRadius:"4px",color:"#455365"},children:(e=>{switch(e){case"todo":return"To-Do";case"ongoing":return"On-Going";case"completed":return"Completed";default:return e}})(null===R||void 0===R?void 0:R.status)}):(0,m.jsx)("div",{className:"form-group-drop",children:(0,m.jsxs)("select",{id:"status",name:"status",value:t,onChange:e=>{j(e.target.value)},style:{outline:"none",border:"1.5px solid #d7dee7",padding:"1px 5px",borderRadius:"4px",transition:"border-color 0.3s, box-shadow 0.3s",fontSize:"0.9vw",color:"#525b6c",fontWeight:"500",backgroundColor:"#ebf0f5"},onFocus:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="0 0 2px #d7dee7"},onBlur:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="none"},children:[(0,m.jsx)("option",{value:"",disabled:!0,children:"Status"}),(0,m.jsx)("option",{value:"todo",children:"To Do"}),(0,m.jsx)("option",{value:"ongoing",children:"On Going"}),(0,m.jsx)("option",{value:"completed",children:"Completed"})]})})]}),(0,m.jsxs)("div",{className:"st",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#5d7290"},children:"Automation Status"}),e?(0,m.jsx)("p",{style:{backgroundColor:"#ebf0f5",fontSize:"0.9vw",padding:"1px 6px",border:"1.5px solid #d7dee7",borderRadius:"4px",color:"#455365"},children:(e=>{switch(e){case"not-automatable":return"Not-Automatable";case"automatabel":return"Automatable";case"in-development":return"In-Development";case"review":return"Review";case"ready":return"Ready";default:return e}})(null===R||void 0===R?void 0:R.automation_status)}):(0,m.jsx)("div",{className:"form-group-drop",children:(0,m.jsxs)("select",{id:"Automation",name:"Automation",value:b,onChange:e=>{f(e.target.value)},style:{outline:"none",border:"1.5px solid #d7dee7",padding:"1px 5px",borderRadius:"4px",transition:"border-color 0.3s, box-shadow 0.3s",fontSize:"0.9vw",color:"#525b6c",fontWeight:"500",backgroundColor:"#ebf0f5"},onFocus:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="0 0 2px #d7dee7"},onBlur:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="none"},children:[(0,m.jsx)("option",{value:"",disabled:!0,children:"Automation Status"}),(0,m.jsx)("option",{value:"not-automatable",children:"Not-Automatable"}),(0,m.jsx)("option",{value:"automatable",children:"Automatable"}),(0,m.jsx)("option",{value:"in-development",children:"In-Development"}),(0,m.jsx)("option",{value:"review",children:"Review"}),(0,m.jsx)("option",{value:"ready",children:"Ready"})]})})]}),(0,m.jsxs)("div",{className:"st",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#5d7290"},children:"Priority"}),e?(0,m.jsxs)("p",{style:{backgroundColor:"#ebf0f5",fontSize:"0.9vw",padding:"2px 6px",border:"1.5px solid #d7dee7",borderRadius:"4px",color:"#455365"},children:[" ",(0,m.jsx)(n.ekI,{style:{color:"class_1"===(null===R||void 0===R?void 0:R.priority)?"#FF8080":"class_2"===(null===R||void 0===R?void 0:R.priority)?"#FABC3F":"class_3"===(null===R||void 0===R?void 0:R.priority)?"green":"black"}})," ",(e=>{switch(e){case"class_1":return"Class 1";case"class_2":return"Class 2";case"class_3":return"Class 3";default:return e}})(null===R||void 0===R?void 0:R.priority)]}):(0,m.jsx)("div",{className:"form-group-drop",children:(0,m.jsxs)("select",{id:"priority",name:"priority",value:y,onChange:e=>{g(e.target.value)},style:{outline:"none",border:"1.5px solid #d7dee7",padding:"1px 5px",borderRadius:"4px",transition:"border-color 0.3s, box-shadow 0.3s",fontSize:"0.9vw",color:"#525b6c",fontWeight:"500",backgroundColor:"#ebf0f5"},onFocus:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="0 0 2px #d7dee7"},onBlur:e=>{e.target.style.border="1.5px solid #d7dee7",e.target.style.boxShadow="none"},children:[(0,m.jsx)("option",{value:"",disabled:!0,children:"Priority"}),(0,m.jsx)("option",{value:"class_1",children:"Class 1"}),(0,m.jsx)("option",{value:"class_2",children:"Class 2"}),(0,m.jsx)("option",{value:"class_3",children:"Class 3"})]})})]}),(0,m.jsxs)("div",{className:"st",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#5d7290"},children:"TestCase Type"}),(0,m.jsx)("p",{style:{backgroundColor:"#ebf0f5",fontSize:"0.9vw",padding:"1px 6px",border:"1.5px solid #d7dee7",borderRadius:"4px",color:"#455365"},children:(null===R||void 0===R?void 0:R.testcase_type.charAt(0).toUpperCase())+(null===R||void 0===R?void 0:R.testcase_type.slice(1))})]})]}),(0,m.jsxs)("div",{className:"description",children:[(0,m.jsxs)("div",{className:"people",children:[(0,m.jsx)("p",{className:"name",children:"People"}),(0,m.jsxs)("div",{className:"role-section",children:[(0,m.jsxs)("div",{className:"stp",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#6c809b",fontSize:"0.9vw"},children:"Asignee"}),(0,m.jsxs)("p",{style:{width:"60%",color:"#425062",fontSize:"0.9vw"},children:[(0,m.jsx)(p.G3M,{})," Unassigned"]})]}),(0,m.jsxs)("div",{className:"stp",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#6c809b",fontSize:"0.9vw"},children:"Reporter"}),(0,m.jsxs)("p",{style:{width:"60%",color:"#425062",fontSize:"0.9vw"},children:[(0,m.jsx)(p.G3M,{})," Nibha"]})]})]})]}),(0,m.jsxs)("div",{className:"people",children:[(0,m.jsx)("p",{className:"name",children:"Dates"}),(0,m.jsxs)("div",{className:"role-section",children:[(0,m.jsxs)("div",{className:"stp",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#6c809b",fontSize:"0.9vw"},children:"Created"}),(0,m.jsx)("p",{style:{width:"60%",color:"#425062",fontSize:"0.9vw"},children:"Undefined"})]}),(0,m.jsxs)("div",{className:"stp",children:[(0,m.jsx)("p",{style:{width:"40%",color:"#6c809b",fontSize:"0.9vw"},children:"Reporter"}),(0,m.jsx)("p",{style:{width:"60%",color:"#425062",fontSize:"0.9vw"},children:"Undefined"})]})]})]})]})]})}),(0,m.jsxs)("div",{className:"tab-and-outlet",children:[(0,m.jsxs)("div",{className:"tab_for_test_case",children:[(0,m.jsx)("div",{className:"details tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"details",children:"Details"})})}),(0,m.jsx)("div",{className:"description_steps tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"description-step",children:"Test steps"})})}),"not-automatable"!==(null===R||void 0===R?void 0:R.automation_status)&&(0,m.jsx)("div",{className:"automation-script tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"automation-script",children:"Automation Script"})})}),(0,m.jsx)("div",{className:"test_group tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"test-group",children:"Test group"})})}),(0,m.jsx)("div",{className:"Last_50_run tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"last-run",children:"Last 50 run"})})}),(0,m.jsx)("div",{className:"linked_defects tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"defects",children:"Linked defects"})})}),"not-automatable"!==(null===R||void 0===R?void 0:R.automation_status)&&(0,m.jsx)("div",{className:"issue tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"script-issue",children:"Script Issue"})})}),"not-automatable"!==(null===R||void 0===R?void 0:R.automation_status)&&(0,m.jsx)("div",{className:"details tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"natco",children:"Natco"})})}),(0,m.jsx)("div",{className:"activities tab",children:(0,m.jsx)("p",{children:(0,m.jsx)(d.k2,{className:"links",activeClassName:"active",to:"activity",children:"Activity"})})})]}),(0,m.jsx)("div",{className:"display",children:(0,m.jsx)(i.sv,{})})]})]})})]})}}}]);
//# sourceMappingURL=612.414907ba.chunk.js.map