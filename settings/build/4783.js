"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[4783,2588,5294,5671,849],{32588:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var c=l(69307),a=l(99196),r=l(61592),n=l(43684),s=l(65736);const i=(0,a.memo)((e=>{let{value:t=!1,onChange:l,required:a,defaultValue:i,disabled:o,options:d={},innerRef:p}=e;return(0,c.createElement)("div",{className:"cmplz-input-group cmplz-select-group"},(0,c.createElement)(r.fC,{value:t,defaultValue:i,onValueChange:l,required:a,disabled:o&&!Array.isArray(o)},(0,c.createElement)(r.xz,{className:"cmplz-select-group__trigger"},(0,c.createElement)(r.B4,null),(0,c.createElement)(n.default,{name:"chevron-down"})),(0,c.createElement)(r.VY,{className:"cmplz-select-group__content",position:"popper"},(0,c.createElement)(r.u_,{className:"cmplz-select-group__scroll-button"},(0,c.createElement)(n.default,{name:"chevron-up"})),(0,c.createElement)(r.l_,{className:"cmplz-select-group__viewport"},(0,c.createElement)(r.ZA,null,(0,c.createElement)(r.ck,{className:"cmplz-select-group__item",key:0,value:""},(0,c.createElement)(r.eT,null,(0,s.__)("Select an option","complianz-gdpr"))),Object.entries(d).map((e=>{let[t,l]=e;return(0,c.createElement)(r.ck,{disabled:Array.isArray(o)&&o.includes(t),className:"cmplz-select-group__item",key:t,value:t},(0,c.createElement)(r.eT,null,l))})))),(0,c.createElement)(r.$G,{className:"cmplz-select-group__scroll-button"},(0,c.createElement)(n.default,{name:"chevron-down"})))))}))},64884:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var c=l(69307),a=l(99196),r=l(87462),n=l(76652),s=l(17255),i=l(32707),o=l(39920),d=l(67571),p=l(42935),u=l(40192);const m="Switch",[h,f]=(0,i.b)(m),[g,b]=h(m),_=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:l,name:c,checked:i,defaultChecked:d,required:p,disabled:m,value:h="on",onCheckedChange:f,...b}=e,[_,k]=(0,a.useState)(null),z=(0,s.e)(t,(e=>k(e))),w=(0,a.useRef)(!1),C=!_||Boolean(_.closest("form")),[S=!1,y]=(0,o.T)({prop:i,defaultProp:d,onChange:f});return(0,a.createElement)(g,{scope:l,checked:S,disabled:m},(0,a.createElement)(u.WV.button,(0,r.Z)({type:"button",role:"switch","aria-checked":S,"aria-required":p,"data-state":v(S),"data-disabled":m?"":void 0,disabled:m,value:h},b,{ref:z,onClick:(0,n.M)(e.onClick,(e=>{y((e=>!e)),C&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())}))})),C&&(0,a.createElement)(E,{control:_,bubbles:!w.current,name:c,value:h,checked:S,required:p,disabled:m,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:l,bubbles:c=!0,...n}=e,s=(0,a.useRef)(null),i=(0,d.D)(l),o=(0,p.t)(t);return(0,a.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(i!==l&&a){const t=new Event("click",{bubbles:c});a.call(e,l),e.dispatchEvent(t)}}),[i,l,c]),(0,a.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:l},n,{tabIndex:-1,ref:s,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}const k=_,z=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:l,...c}=e,n=b("SwitchThumb",l);return(0,a.createElement)(u.WV.span,(0,r.Z)({"data-state":v(n.checked),"data-disabled":n.disabled?"":void 0},c,{ref:t}))})),w=(0,a.memo)((e=>{let{value:t,onChange:l,required:a,disabled:r}=e,n=t;return"0"!==t&&"1"!==t||(n="1"===t),(0,c.createElement)(k,{className:"cmplz-switch-root",checked:n,onCheckedChange:l,disabled:r,required:a},(0,c.createElement)(z,{className:"cmplz-switch-thumb"}))}))},65294:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var c=l(69307),a=l(99196);const r=(0,a.memo)((e=>{let{value:t,onChange:l,required:r,defaultValue:n,disabled:s,id:i,name:o,placeholder:d}=e;const p=i||o,[u,m]=(0,a.useState)("");return(0,a.useEffect)((()=>{m(t||"")}),[t]),(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(u)}),500);return()=>{clearTimeout(e)}}),[u]),(0,c.createElement)("div",{className:"cmplz-input-group cmplz-text-input-group"},(0,c.createElement)("input",{type:"text",id:p,name:o,value:u,onChange:e=>(e=>{m(e)})(e.target.value),required:r,disabled:s,className:"cmplz-text-input-group__input",placeholder:d}))}))},85671:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var c=l(30270),a=l(12902),r=l(48399);const n=(0,c.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,l)=>{e((0,a.ZP)((e=>{if("block_script"===l){let l=e.blockedScripts;if(t.urls){for(const[e,c]of Object.entries(t.urls)){if(!c||0===c.length)continue;let e=!1;for(const[t,a]of Object.entries(l))c===t&&(e=!0);e||(l[c]=c)}e.blockedScripts=l}}const c=e.scripts[l].findIndex((e=>e.id===t.id));-1!==c&&(e.scripts[l][c]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:l,plugins:c,scripts:a,placeholders:r,blocked_scripts:n}=await s();let i=a;i.block_script.forEach(((e,t)=>{e.id=t})),i.add_script.forEach(((e,t)=>{e.id=t})),i.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:l,plugins:c,scripts:i,fetching:!1,placeholders:r,blockedScripts:n})))},addScript:l=>{e({fetching:!0}),e((0,a.ZP)((e=>{e.scripts[l].push({name:"general",id:e.scripts[l].length,enable:!0})})));let c=t().scripts;return r.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(l,c)=>{e({fetching:!0}),e((0,a.ZP)((e=>{const t=e.scripts[c].findIndex((e=>e.id===l.id));-1!==t&&(e.scripts[c][t]=l)})));let n=t().scripts;return r.doAction("update_scripts",{scripts:n}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(l,c)=>{e({fetching:!0}),e((0,a.ZP)((e=>{const t=e.scripts[c].findIndex((e=>e.id===l.id));-1!==t&&e.scripts[c].splice(t,1)})));let n=t().scripts;return r.doAction("update_scripts",{scripts:n}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,l)=>(e((0,a.ZP)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].enabled=l)}))),r.doAction("update_plugin_status",{plugin:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)}))),updatePlaceholderStatus:async(t,l,c)=>(c&&e((0,a.ZP)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].placeholder=l?"enabled":"disabled")}))),r.doAction("update_placeholder_status",{id:t,enabled:l}).then((e=>e)).catch((e=>{console.error(e)})))}))),s=()=>r.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},44783:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var c=l(69307),a=l(64884),r=l(60849),n=l(65294),s=l(32588),i=l(65736),o=l(85671);const d=e=>{const{setScript:t,fetching:l,placeholders:d}=(0,o.default)(),p=e.script,u=e.type,m=(l,c)=>{let a={...p};a[c]=l,t(a,e.type)};return(0,c.createElement)(c.Fragment,null,(0,c.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,c.createElement)(a.default,{disabled:l,value:p.enable_placeholder,onChange:e=>m(e,"enable_placeholder")}),(0,c.createElement)("label",null,(0,i.__)("Placeholder","complianz-gdpr"))),!!p.enable_placeholder&&(0,c.createElement)(c.Fragment,null,"block_script"===u&&(0,c.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,c.createElement)(a.default,{disabled:l,value:p.iframe||"",onChange:e=>m(e||"","iframe")}),(0,c.createElement)("label",null,(0,i.__)("The blocked content is an iframe","complianz-gdpr"))),!p.iframe&&(0,c.createElement)("div",{className:"cmplz-details-row cmplz-details-row"},(0,c.createElement)(c.Fragment,null,(0,i.__)("Enter the div class or ID that should be targeted.","complianz-gdpr"),(0,r.default)("https://complianz.io/integrating-plugins/#placeholder/")),(0,c.createElement)(n.default,{disabled:l,value:p.placeholder_class||"",onChange:e=>m(e||"","placeholder_class"),name:"placeholder_class",placeholder:(0,i.__)("Your CSS class","complianz-gdpr")})),(0,c.createElement)("div",{className:"cmplz-details-row cmplz-details-row__checkbox"},(0,c.createElement)(s.default,{disabled:l,value:p.placeholder?p.placeholder:"default",options:d,onChange:e=>m(e||"default","placeholder")}))))}},60849:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var c=l(69307),a=l(65736),r=l(99950);const n=e=>(0,c.createElement)(c.Fragment,null," ",(0,c.createElement)(r.default,{url:e,text:(0,a.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")}}]);