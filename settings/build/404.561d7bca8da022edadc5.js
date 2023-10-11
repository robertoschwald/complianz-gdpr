"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[404,2175,881,382,7853],{32175:function(e,t,n){n.r(t),n.d(t,{UseCookieScanData:function(){return r}});var a=n(30270),o=n(48399);const r=(0,a.Ue)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),o.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},80881:function(e,t,n){n.r(t);var a=n(69307),o=n(48399),r=n(56293),i=n(82485),c=n(55609),s=n(32175),l=n(82387);t.default=(0,a.memo)((e=>{let{type:t="action",style:n="tertiary",label:d,onClick:u,href:m="",target:p="",disabled:f,action:g,field:h,children:b}=e;if(!d&&!b)return null;const _=(h&&h.button_text?h.button_text:d)||b,{fetchFieldsData:v,showSavedSettingsNotice:E}=(0,r.default)(),{setInitialLoadCompleted:y,setProgress:k}=(0,s.UseCookieScanData)(),{setProgressLoaded:C}=(0,l.default)(),{selectedSubMenuItem:N}=(0,i.default)(),[w,L]=(0,a.useState)(!1),z=`button cmplz-button button--${n} button-${t}`,D=async e=>{await o.doAction(h.action,{}).then((e=>{e.success&&(v(N),"reset_settings"===e.id&&(y(!1),k(0),C(!1)),E(e.message))}))},S=h&&h.warn?h.warn:"";return"action"===t?(0,a.createElement)(a.Fragment,null,c.__experimentalConfirmDialog&&(0,a.createElement)(c.__experimentalConfirmDialog,{isOpen:w,onConfirm:async()=>{L(!1),await D()},onCancel:()=>{L(!1)}},S),(0,a.createElement)("button",{className:z,onClick:async e=>{if("action"!==t||!u)return"action"===t&&g?c.__experimentalConfirmDialog?void(h&&h.warn?L(!0):await D()):void await D():void(window.location.href=h.url);u(e)},disabled:f},_)):"link"===t?(0,a.createElement)("a",{className:z,href:m,target:p},_):void 0}))},382:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(69307),o=n(87462),r=n(99196),i=n(28771),c=n(25360),s=n(36206),l=n(77342),d=n(57898),u=n(7546),m=n(29115),p=n(75320);const f="Checkbox",[g,h]=(0,c.b)(f),[b,_]=g(f),v=(0,r.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,name:a,checked:c,defaultChecked:d,required:u,disabled:m,value:f="on",onCheckedChange:g,...h}=e,[_,v]=(0,r.useState)(null),C=(0,i.e)(t,(e=>v(e))),N=(0,r.useRef)(!1),w=!_||Boolean(_.closest("form")),[L=!1,z]=(0,l.T)({prop:c,defaultProp:d,onChange:g}),D=(0,r.useRef)(L);return(0,r.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>z(D.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,z]),(0,r.createElement)(b,{scope:n,state:L,disabled:m},(0,r.createElement)(p.WV.button,(0,o.Z)({type:"button",role:"checkbox","aria-checked":y(L)?"mixed":L,"aria-required":u,"data-state":k(L),"data-disabled":m?"":void 0,disabled:m,value:f},h,{ref:C,onKeyDown:(0,s.M)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,s.M)(e.onClick,(e=>{z((e=>!!y(e)||!e)),w&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())}))})),w&&(0,r.createElement)(E,{control:_,bubbles:!N.current,name:a,value:f,checked:L,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:n,bubbles:a=!0,...i}=e,c=(0,r.useRef)(null),s=(0,d.D)(n),l=(0,u.t)(t);return(0,r.useEffect)((()=>{const e=c.current,t=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==n&&o){const t=new Event("click",{bubbles:a});e.indeterminate=y(n),o.call(e,!y(n)&&n),e.dispatchEvent(t)}}),[s,n,a]),(0,r.createElement)("input",(0,o.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!y(n)&&n},i,{tabIndex:-1,ref:c,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return"indeterminate"===e}function k(e){return y(e)?"indeterminate":e?"checked":"unchecked"}const C=v,N=(0,r.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,forceMount:a,...i}=e,c=_("CheckboxIndicator",n);return(0,r.createElement)(m.z,{present:a||y(c.state)||!0===c.state},(0,r.createElement)(p.WV.span,(0,o.Z)({"data-state":k(c.state),"data-disabled":c.disabled?"":void 0},i,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var w=n(65736),L=n(23361),z=n(80881),D=(0,a.memo)((e=>{let{indeterminate:t,label:n,value:o,id:r,onChange:i,required:c,disabled:s,options:l={}}=e;const[d,u]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1);let f=o;Array.isArray(f)||(f=""===f?[]:[f]),(0,a.useEffect)((()=>{let e=1===Object.keys(l).length&&"true"===Object.keys(l)[0];u(e)}),[]),t&&(o=!0);const g=f;let h=!1;Object.keys(l).length>10&&(h=!0);const b=e=>d?o:g.includes(""+e)||g.includes(parseInt(e)),_=()=>{p(!m)};let v=s&&!Array.isArray(s);return 0===Object.keys(l).length?(0,a.createElement)(a.Fragment,null,(0,w.__)("No options found","complianz-gdpr")):(0,a.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(l).map(((e,l)=>{let[u,p]=e;return(0,a.createElement)("div",{key:u,className:"cmplz-checkbox-group__item"+(!m&&l>9?" cmplz-hidden":"")},(0,a.createElement)(C,{className:"cmplz-checkbox-group__checkbox",id:r+"_"+u,checked:b(u),"aria-label":n,disabled:v||Array.isArray(s)&&s.includes(u),required:c,onCheckedChange:e=>((e,t)=>{if(d)i(!o);else{const e=g.includes(""+t)||g.includes(parseInt(t))?g.filter((e=>e!==""+t&&e!==parseInt(t))):[...g,t];i(e)}})(0,u)},(0,a.createElement)(N,{className:"cmplz-checkbox-group__indicator"},(0,a.createElement)(L.default,{name:t?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,a.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:r+"_"+u},p))})),!m&&h&&(0,a.createElement)(z.default,{onClick:()=>_()},(0,w.__)("Show more","complianz-gdpr")),m&&h&&(0,a.createElement)(z.default,{onClick:()=>_()},(0,w.__)("Show less","complianz-gdpr")))}))},80404:function(e,t,n){n.r(t);var a=n(69307),o=n(17853),r=n(65736),i=n(23361),c=n(382);t.default=(0,a.memo)((()=>{const{documents:e,documentsLoaded:t,fetchData:s,deleteDocuments:l,editDocument:d}=(0,o.default)(),[u,m]=(0,a.useState)(""),[p,f]=(0,a.useState)({}),[g,h]=(0,a.useState)(!1),[b,_]=(0,a.useState)(!1),[v,E]=(0,a.useState)(""),[y,k]=(0,a.useState)([]),[C,N]=(0,a.useState)(!1),[w,L]=(0,a.useState)(null);(0,a.useEffect)((()=>{n.e(44).then(n.bind(n,90044)).then((e=>{let{default:t}=e;L((()=>t))}))}),[]),cmplz_settings.is_premium,(0,a.useEffect)((()=>{t||s()}),[t]);const z=async()=>{let t=e.filter((e=>y.includes(e.id)));N(!0);const n=async()=>{if(t.length>0){const e=t.shift(),a=e.download_url;E(!0);try{let o=new XMLHttpRequest;o.responseType="blob",o.open("get",a,!0),o.send(),o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let n=window.URL.createObjectURL(this.response),a=window.document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",e.title),window.document.body.appendChild(a),a.click(),k(t),N(!1),setTimeout((function(){window.URL.revokeObjectURL(n)}),6e4)}},await n()}catch(e){console.error(e),E(!1)}}};await n(),E(!1)},D=e=>((e=e.filter((e=>e.title.toLowerCase().includes(u.toLowerCase())||e.service.toLowerCase().includes(u.toLowerCase())))).sort(((e,t)=>e.title<t.title?-1:e.title>t.title?1:0)),e),S=[{name:(0,a.createElement)(c.default,{options:{true:""},indeterminate:g,value:b,onChange:t=>(t=>{if(t){_(!0);let t=p.currentPage?p.currentPage:1,n=D(e).slice(5*(t-1),5*t);k(n.map((e=>e.id)))}else _(!1),k([]);h(!1)})(t)}),selector:e=>e.selectControl,grow:1,minWidth:"50px"},{name:(0,r.__)("Document","complianz-gdpr"),selector:e=>e.title,sortable:!0,grow:6},{name:(0,r.__)("Region","complianz-gdpr"),selector:e=>(0,a.createElement)("img",{alt:"region",width:"20px",height:"20px",src:cmplz_settings.plugin_url+"assets/images/"+e.region+".svg"}),sortable:!0,grow:2,right:!0},{name:(0,r.__)("Date","complianz-gdpr"),selector:e=>e.date,sortable:!0,grow:4,minWidth:"200px",right:!0}];let I=D(e),x=[];return I.forEach((t=>{let n={...t};n.selectControl=(0,a.createElement)(c.default,{value:y.includes(n.id),options:{true:""},onChange:t=>((t,n)=>{let a=t,o=[...y];a?o.includes(n)||(o.push(n),k(o)):(o=[...y.filter((e=>e!==n))],k(o));let r=p.currentPage?p.currentPage:1,i=D(e).slice(5*(r-1),5*r),c=!0,s=!1;i.forEach((e=>{o.includes(e.id)?s=!0:c=!1})),c?(_(!0),h(!1)):s?(_(!1),h(!0)):h(!1)})(t,n.id)}),x.push(n)})),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-table-header"},(0,a.createElement)("div",{className:"cmplz-table-header-controls"},(0,a.createElement)("input",{className:"cmplz-datatable-search",type:"text",placeholder:(0,r.__)("Search","complianz-gdpr"),value:u,onChange:e=>m(e.target.value)}))),y.length>0&&(0,a.createElement)("div",{className:"cmplz-selected-document"},y.length>1&&(0,r.__)("%s items selected","complianz-gdpr").replace("%s",y.length),1===y.length&&(0,r.__)("1 item selected","complianz-gdpr"),(0,a.createElement)("div",{className:"cmplz-selected-document-controls"},(0,a.createElement)("button",{disabled:v||y.length>1,className:"button button-default",onClick:e=>d(y[0])},(0,r.__)("Edit","complianz-gdpr")),(0,a.createElement)("button",{disabled:v,className:"button button-default cmplz-btn-reset",onClick:()=>z()},(0,r.__)("Download Processing Agreement","complianz-gdpr"),C&&(0,a.createElement)(i.default,{name:"loading",color:"grey"})),(0,a.createElement)("button",{className:"button button-default cmplz-reset-button",onClick:()=>(async e=>{k([]),await l(e)})(y)},(0,r.__)("Delete","complianz-gdpr")))),w&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(w,{columns:S,data:x,dense:!0,pagination:!0,noDataComponent:(0,a.createElement)("div",{className:"cmplz-no-documents"},(0,r.__)("No documents","complianz-gdpr")),persistTableHead:!0,theme:"really-simple-plugins",customStyles:{headCells:{style:{paddingLeft:"0",paddingRight:"0"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}},paginationPerPage:5,onChangePage:e=>{f({...p,currentPage:e})},paginationState:p})))}))},17853:function(e,t,n){n.r(t);var a=n(30270),o=n(12902),r=n(48399),i=n(75169);const c=(0,a.Ue)(((e,t)=>({documentsLoaded:!1,region:"",fileName:"",serviceName:"",fetching:!1,updating:!1,loadingFields:!1,documents:[],regions:[],fields:[],editDocumentId:!1,resetEditDocumentId:t=>{e({editDocumentId:!1,region:"",serviceName:""})},editDocument:async t=>{e({updating:!0}),await r.doAction("load_processing_agreement",{id:t}).then((t=>{e({fields:t.fields,region:t.region,serviceName:t.serviceName,updating:!1,fileName:t.file_name})})).catch((e=>{console.error(e)})),e({editDocumentId:t})},setRegion:t=>{e({region:t})},setServiceName:t=>{e({serviceName:t})},updateField:(n,a)=>{let r=!1,c=!1;e((0,o.ZP)((e=>{e.fields.forEach((function(e,t){e.id===n&&(c=t,r=!0)})),!1!==c&&(e.fields[c].value=a)})));let s=(0,i.updateFieldsListWithConditions)(t().fields);e({fields:s})},save:async(n,a)=>{e({updating:!0});let o=t().editDocumentId;await r.doAction("save_processing_agreement",{fields:t().fields,region:n,serviceName:a,post_id:o}).then((t=>(e({updating:!1}),t))).catch((e=>{console.error(e)})),t().fetchData()},deleteDocuments:async n=>{let a=t().documents.filter((e=>n.includes(e.id)));e((e=>({documents:e.documents.filter((e=>!n.includes(e.id)))})));let o={};o.documents=a,await r.doAction("delete_processing_agreement",o).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});const{documents:n,regions:a}=await r.doAction("get_processing_agreements",{}).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({documentsLoaded:!0,documents:n,regions:a,fetching:!1})))},fetchFields:async t=>{let n={region:t};e({loadingFields:!0});const{fields:a}=await r.doAction("get_processing_agreement_fields",n).then((e=>e)).catch((e=>{console.error(e)}));let o=(0,i.updateFieldsListWithConditions)(a);e((e=>({fields:o,loadingFields:!1})))}})));t.default=c},29115:function(e,t,n){n.d(t,{z:function(){return c}});var a=n(99196),o=n(91850),r=n(28771),i=n(9981);const c=e=>{const{present:t,children:n}=e,c=function(e){const[t,n]=(0,a.useState)(),r=(0,a.useRef)({}),c=(0,a.useRef)(e),l=(0,a.useRef)("none"),d=e?"mounted":"unmounted",[u,m]=function(e,t){return(0,a.useReducer)(((e,n)=>{const a=t[e][n];return null!=a?a:e}),e)}(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)((()=>{const e=s(r.current);l.current="mounted"===u?e:"none"}),[u]),(0,i.b)((()=>{const t=r.current,n=c.current;if(n!==e){const a=l.current,o=s(t);e?m("MOUNT"):"none"===o||"none"===(null==t?void 0:t.display)?m("UNMOUNT"):m(n&&a!==o?"ANIMATION_OUT":"UNMOUNT"),c.current=e}}),[e,m]),(0,i.b)((()=>{if(t){const e=e=>{const n=s(r.current).includes(e.animationName);e.target===t&&n&&(0,o.flushSync)((()=>m("ANIMATION_END")))},n=e=>{e.target===t&&(l.current=s(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}m("ANIMATION_END")}),[t,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:(0,a.useCallback)((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),l="function"==typeof n?n({present:c.isPresent}):a.Children.only(n),d=(0,r.e)(c.ref,l.ref);return"function"==typeof n||c.isPresent?(0,a.cloneElement)(l,{ref:d}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}c.displayName="Presence"},57898:function(e,t,n){n.d(t,{D:function(){return o}});var a=n(99196);function o(e){const t=(0,a.useRef)({value:e,previous:e});return(0,a.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);