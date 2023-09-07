"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[1234],{81234:function(e,t,l){l.r(t);var a=l(69307),n=l(24538),r=l(65736),u=l(48399),o=l(37839),c=l(23361),d=l(99196),i=l(56293),m=l(41629);t.default=(0,d.memo)((e=>{let{id:t,value:l,options:d,defaultValue:s,disabled:p}=e;const[g,_]=(0,a.useState)(!1),[f,v]=(0,a.useState)(""),[E,h]=(0,a.useState)([]),[y,b]=(0,a.useState)(!1),[z,C]=(0,a.useState)(!1),[A,k]=(0,a.useState)(null),F=(0,a.useRef)(l),{updateField:N,setChangedField:S}=(0,i.default)(),T=e=>{let a=F.current!==l||e;if("custom"!==l||y||(F.current=l,a&&w(!1)),"url"===l&&!z){let e={};F.current=l,e.type=t,u.doAction("get_custom_legal_document_url",e).then((e=>{v(e.pageUrl),C(!0)}))}};(0,a.useEffect)((()=>{d.map((e=>e.value)).includes(l)||N(t,s),T(!0)}),[]),(0,o.Z)((()=>{T(!1)}));const w=e=>{let l={};return l.type=t,l.search=e,u.doAction("get_pages_list",l).then((e=>{let t=e.pages.filter((function(t){return t.value===e.pageId}));return _(t),b(!0),h(e.pages),e.pages}))},L={};for(const e in d){const t=d[e];L[t.value]=t.label}return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(m.default,{id:t,options:L,value:l,onChange:e=>{N(t,e),S(t,e)},disabled:p}),"custom"===l&&!y&&(0,a.createElement)("div",{className:"cmplz-documents-loader"},(0,a.createElement)("div",null,(0,a.createElement)(c.default,{name:"loading",color:"grey"})),(0,a.createElement)("div",null,(0,r.__)("Loading...","complianz-gdpr"))),"custom"===l&&y&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.Z,{label:(0,r.__)("Link to custom page","complianz-gdpr"),defaultOptions:E,loadOptions:e=>new Promise((t=>{setTimeout((()=>{t(w(e))}),1e3)})),menuPortalTarget:document.body,menuPosition:"fixed",placeholder:(0,r.__)("Type at least two characters"),onChange:e=>(e=>{let l={};l.pageId=e.value,l.type=t,_(e),u.doAction("update_custom_legal_document_id",l).then((e=>{}))})(e),value:g})),"url"===l&&!z&&(0,a.createElement)("div",{className:"cmplz-documents-loader"},(0,a.createElement)("div",null,(0,a.createElement)(c.default,{name:"loading",color:"grey"})),(0,a.createElement)("div",null,(0,r.__)("Loading...","complianz-gdpr"))),"url"===l&&z&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("input",{type:"text",value:f,onChange:e=>{let l={},a=e.target.value;l.pageUrl=a,l.type=t,v(a),clearTimeout(A);const n=setTimeout((()=>{u.doAction("update_custom_legal_document_url",l).then((e=>{}))}),500);k(n)},placeholder:"https://domain.com/your-policy"})))}))},41629:function(e,t,l){l.r(t);var a=l(69307),n=l(872),r=l(99196);t.default=(0,r.memo)((e=>{let{label:t,id:l,value:r,onChange:u,required:o,defaultValue:c,disabled:d,options:i={}}=e;return(0,a.createElement)(n.fC,{disabled:d&&!Array.isArray(d),className:"cmplz-input-group cmplz-radio-group",value:r,"aria-label":t,onValueChange:u,required:o,default:c},Object.entries(i).map((e=>{let[t,r]=e;return(0,a.createElement)("div",{key:t,className:"cmplz-radio-group__item"},(0,a.createElement)(n.ck,{disabled:Array.isArray(d)&&d.includes(t),value:t,id:l+"_"+t},(0,a.createElement)(n.z$,{className:"cmplz-radio-group__indicator"})),(0,a.createElement)("label",{className:"cmplz-radio-label",htmlFor:l+"_"+t},r))})))}))}}]);