"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[6057,5671,1789],{26057:function(e,t,i){i.r(t);var c=i(69307),s=i(56293),n=i(85671),l=i(23361),a=i(65736),r=i(71789);t.default=e=>{const{fields:t,getFieldValue:i}=(0,s.default)(),[o,d]=(0,c.useState)(!1),{integrationsLoaded:p,plugins:u,fetchIntegrationsData:f}=(0,n.default)(),{licenseStatus:h}=(0,r.default)();(0,c.useEffect)((()=>{let t=e.item;if(t.field){let e=i(t.field.name)==t.field.value;d(e)}}),[t]),(0,c.useEffect)((()=>{p||f()}),[]);let g=e.item;if(g.plugin)return u.filter((e=>e.id===g.plugin)).length>0?(0,c.createElement)("div",{className:"cmplz-tool"},(0,c.createElement)("div",{className:"cmplz-tool-title"},g.title),(0,c.createElement)("div",{className:"cmplz-tool-link"},(0,c.createElement)("a",{href:g.link,target:"_blank"},(0,c.createElement)(l.default,{name:"circle-chevron-right",color:"black",size:14})))):null;let m=cmplz_settings.is_premium&&"valid"===h,_=((0,a.__)("Read more","complianz-gdpr"),g.link);m&&(!o&&g.enableLink&&(_=g.enableLink),g.field&&!o||!g.viewLink||(_=g.viewLink));let k=-1!==_.indexOf("https://"),b=k?"_blank":"_self",v=k?"external-link":"circle-chevron-right";return(0,c.createElement)("div",{className:"cmplz-tool"},(0,c.createElement)("div",{className:"cmplz-tool-title"},g.title,g.plusone&&g.plusone),(0,c.createElement)("div",{className:"cmplz-tool-link"},(0,c.createElement)("a",{href:_,target:b},(0,c.createElement)(l.default,{name:v,color:"black",size:14}))))}},85671:function(e,t,i){i.r(t);var c=i(30270),s=i(12902),n=i(48399);const l=(0,c.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,i)=>{e((0,s.ZP)((e=>{if("block_script"===i){let i=e.blockedScripts;if(t.urls){for(const[e,c]of Object.entries(t.urls)){if(!c||0===c.length)continue;let e=!1;for(const[t,s]of Object.entries(i))c===t&&(e=!0);e||(i[c]=c)}e.blockedScripts=i}}const c=e.scripts[i].findIndex((e=>e.id===t.id));-1!==c&&(e.scripts[i][c]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:i,plugins:c,scripts:s,placeholders:n,blocked_scripts:l}=await a();let r=s;r.block_script&&r.block_script.length>0&&r.block_script.forEach(((e,t)=>{e.id=t})),r.add_script&&r.add_script.length>0&&r.add_script.forEach(((e,t)=>{e.id=t})),r.whitelist_script&&r.whitelist_script.length>0&&r.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:i,plugins:c,scripts:r,fetching:!1,placeholders:n,blockedScripts:l})))},addScript:i=>{e({fetching:!0}),e((0,s.ZP)((e=>{e.scripts[i].push({name:"general",id:e.scripts[i].length,enable:!0})})));let c=t().scripts;return n.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(i,c)=>{e({fetching:!0}),e((0,s.ZP)((e=>{const t=e.scripts[c].findIndex((e=>e.id===i.id));-1!==t&&(e.scripts[c][t]=i)})));let l=t().scripts;return n.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(i,c)=>{e({fetching:!0}),e((0,s.ZP)((e=>{const t=e.scripts[c].findIndex((e=>e.id===i.id));-1!==t&&e.scripts[c].splice(t,1)})));let l=t().scripts;return n.doAction("update_scripts",{scripts:l}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,i)=>{e({fetching:!0}),e((0,s.ZP)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].enabled=i)})));const c=await n.doAction("update_plugin_status",{plugin:t,enabled:i}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),c},updatePlaceholderStatus:async(t,i,c)=>{e({fetching:!0}),c&&e((0,s.ZP)((e=>{const c=e.plugins.findIndex((e=>e.id===t));-1!==c&&(e.plugins[c].placeholder=i?"enabled":"disabled")})));const l=await n.doAction("update_placeholder_status",{id:t,enabled:i}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),l}})));t.default=l;const a=()=>n.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},71789:function(e,t,i){i.r(t);var c=i(30270),s=i(48399);const n=(0,c.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:i}=await s.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:i,licenseStatus:t})))},activateLicense:async t=>{let i={};i.license=t,e({processing:!0});const{licenseStatus:c,notices:n}=await s.doAction("activate_license",i);e((e=>({processing:!1,licenseNotices:n,licenseStatus:c})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:i}=await s.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:i,licenseStatus:t})))}})));t.default=n}}]);