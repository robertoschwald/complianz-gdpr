"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[1871,1789],{71789:function(e,t,i){i.r(t);var l=i(30270),s=i(48399);const n=(0,l.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:i}=await s.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:i,licenseStatus:t})))},activateLicense:async t=>{let i={};i.license=t,e({processing:!0});const{licenseStatus:l,notices:n}=await s.doAction("activate_license",i);e((e=>({processing:!1,licenseNotices:n,licenseStatus:l})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:i}=await s.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:i,licenseStatus:t})))}})));t.default=n},1871:function(e,t,i){i.r(t);var l=i(69307),s=i(99950),n=i(65736),c=i(82485),a=i(71789),m=i(56293),r=i(5830);t.default=e=>{const{highLightField:t,getFieldValue:o}=(0,m.default)(),{licenseStatus:d}=(0,a.default)(),{bannerDataLoaded:p}=(0,r.default)();let u="https://complianz.io/pricing/";const{subMenu:g,getMenuRegions:_,selectedSubMenuItem:z}=(0,c.default)();let f=_(),h=o("regions");Array.isArray(h)||(h=[h]),f=f.filter((e=>h.includes(e)));const[v,k]=(0,l.useState)(null);(0,l.useEffect)((()=>{Promise.resolve().then(i.bind(i,93019)).then((e=>{let{default:t}=e;k((()=>t))}))}),[]);let E,N=[];for(const t of e.fields)t.group_id===e.group&&N.push(t);for(const e of g.menu_items)if(e.id===z?E=e:e.menu_items&&(E=e.menu_items.filter((e=>e.id===z))[0]),E)break;for(const t of g.menu_items)if(t.id===z&&t.hasOwnProperty("groups")){let i=t.groups.filter((t=>t.id===e.group));i.length>0&&(E=i[0])}if(!E)return null;let b=E.premium_text?E.premium_text:(0,n.__)("Learn more about %sPremium%s","complianz-gdpr");cmplz_settings.is_premium&&(b="empty"===d||"deactivated"===d?cmplz_settings.messageInactive:cmplz_settings.messageInvalid);let y="valid"!==d&&E.premium;y=cmplz_settings.is_premium&&"valid"!==d&&"license"!==E.id,u=E.upgrade?E.upgrade:u;let L=E.helpLink_text?E.helpLink_text:(0,n.__)("Instructions","complianz-gdpr"),S=y?"cmplz-disabled":"";return N.filter((e=>e.conditionallyDisabled&&!0===e.conditionallyDisabled||e.visible&&!1===e.visible)).length===N.length?null:(0,l.createElement)("div",{className:"cmplz-grid-item cmplz-"+E.id+" "+S,key:E.id},E.title&&(0,l.createElement)("div",{className:"cmplz-grid-item-header"},(0,l.createElement)("h3",{className:"cmplz-h4"},E.title),f.length>0&&(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},f.map(((e,t)=>(0,l.createElement)("div",{key:t},(0,l.createElement)("img",{className:"cmplz-settings-region",src:cmplz_settings.plugin_url+"/assets/images/"+e+".svg"}))))),0===f.length&&E.helpLink&&(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},(0,l.createElement)(s.default,{target:"_blank",className:"cmplz-helplink",text:L,url:E.helpLink}))),(0,l.createElement)("div",{className:"cmplz-grid-item-content"},E.intro&&(0,l.createElement)("div",{className:"cmplz-settings-block-intro",dangerouslySetInnerHTML:{__html:E.intro}}),v&&N.map(((e,i)=>(0,l.createElement)(v,{key:e.id,field:e,highLightField:t})))),y&&(0,l.createElement)("div",{className:"cmplz-locked"},(0,l.createElement)("div",{className:"cmplz-locked-overlay"},(0,l.createElement)("span",{className:"cmplz-task-status cmplz-premium"},(0,n.__)("Upgrade","complianz-gdpr")),(0,l.createElement)("span",null,cmplz_settings.is_premium&&(0,l.createElement)("span",null,b," ",(0,l.createElement)("a",{className:"cmplz-locked-link",href:"#settings/license"},(0,n.__)("Check license","complianz-gdpr"))),!cmplz_settings.is_premium&&(0,l.createElement)(s.default,{target:"_blank",text:b,url:u})))),"banner"===g.id&&!p&&(0,l.createElement)("div",{className:"cmplz-locked"},(0,l.createElement)("div",{className:"cmplz-locked-overlay"})))}}}]);