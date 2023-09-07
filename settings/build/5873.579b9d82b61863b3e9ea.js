"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[5873,3275,3128,6139,8088],{75873:function(e,n,t){t.r(n);var a=t(69307),u=t(65736),c=t(56293),r=t(63275),o=t(93128),i=t(96139),m=t(14531),d=t(28088),s=t(99196);n.default=(0,s.memo)((e=>{const{pageTypes:n,menuDataLoaded:t,fetchMenuData:l,menu:p,emptyMenuLink:g,genericDocuments:_,createdDocuments:f,documentsNotInMenu:h,regions:y}=(0,r.UseMenuData)(),{getFieldValue:D,addHelpNotice:v,documentSettingsChanged:E,setDocumentSettingsChanged:k}=(0,c.default)(),[z,M]=(0,s.useState)(!1);if((0,a.useEffect)((()=>{t&&!E||(k(!1),l())}),[E]),(0,a.useEffect)((()=>{M("yes"===D("region_redirect"))}),[D("region_redirect")]),(0,a.useEffect)((()=>{if(!t)return;let e="",n="",a=z?"add_pages_to_menu_region_redirected":"add_pages_to_menu";if(0===p.length)n=(0,u.__)("No menus found.","complianz-gdpr"),e=(0,u.__)("No menus were found. Skip this step, or create a menu first.","complianz-gdpr"),v(a,"warning",e,n,g);else if(h.length>0){if(n=(0,u.__)("Pages not included in a menu","complianz-gdpr"),1===h.length){let n=h[0];e=(0,u.__)("The generated document %s has not been assigned to a menu yet, you can do this now, or skip this step and do it later.","complianz-gdpr").replace("%s",n)}else e=(0,u.__)("Not all generated documents have been assigned to a menu yet, you can do this now, or skip this step and do it later.","complianz-gdpr");v(a,"warning",e,n,!1)}else 0===h.length&&(n=(0,u.__)("All pages generated!","complianz-gdpr"),e=(0,u.__)("Great! All your generated documents have been assigned to a menu, so you can skip this step.","complianz-gdpr"),v(a,"warning",e,n,!1))}),[t,h,p]),!t)return(0,a.createElement)(m.default,{lines:"3"});if(z){let e=_.filter((e=>!e.can_region_redirect)),t=[];return e.forEach((function(e,n){let a=f.filter((n=>e.type===n.type));a.length>0&&t.push(a[0])})),(0,a.createElement)(a.Fragment,null,n.map(((e,n)=>(0,a.createElement)(i.default,{key:n,pageType:e}))),t.map(((e,n)=>(0,a.createElement)(d.default,{key:n,document:e}))))}return(0,a.createElement)(a.Fragment,null,y.map(((e,n)=>(0,a.createElement)(o.default,{key:n,region:e}))))}))},63275:function(e,n,t){t.r(n),t.d(n,{UseMenuData:function(){return i}});var a=t(30270),u=t(48399),c=t(12902),r=t(1277),o=t(65736);const i=(0,a.Ue)(((e,n)=>({menuDataLoaded:!1,saving:!1,menu:[],menuChanged:!1,changedMenuType:"per_document",emptyMenuLink:"#",requiredDocuments:[],createdDocuments:[],genericDocuments:[],documentsNotInMenu:[],pageTypes:[],regions:[],fetchMenuData:async()=>{const n=await m(!1);let t=n.required_documents.filter((e=>e.page_id));e({menuDataLoaded:!0,emptyMenuLink:n.empty_menu_link,menu:n.menu,requiredDocuments:n.required_documents,genericDocuments:n.generic_documents_list,createdDocuments:t,pageTypes:n.page_types,documentsNotInMenu:n.documents_not_in_menu,regions:n.regions})},updateMenu:(n,t)=>{let a=isNaN(n)?"per_type":"per_document";e({menuType:a}),e("per_type"===a?(0,c.ZP)((e=>{let a=e.genericDocuments.findIndex((function(e,t){return e.page_id===n||e.type===n})),u=e.createdDocuments.findIndex((function(e,t){return e.page_id===n||e.type===n}));-1!==a&&(e.genericDocuments[a].menu_id=t,-1!==u&&(e.createdDocuments[u].menu_id=-1),e.menuChanged=!0)})):(0,c.ZP)((e=>{let a=e.genericDocuments.findIndex((function(e,t){return e.page_id===n||e.type===n})),u=e.createdDocuments.findIndex((function(e,t){return e.page_id===n||e.type===n}));-1!==u&&(e.createdDocuments[u].menu_id=t,-1!==a&&(e.genericDocuments[a].menu_id=-1),e.menuChanged=!0)})))},saveDocumentsMenu:async(t,a)=>{if(e({saving:!0}),n().menuChanged||t){let t={};t.genericDocuments=n().genericDocuments.filter((e=>e.can_region_redirect)),t.createdDocuments=n().createdDocuments;const c=u.doAction("save_documents_menu_data",t).then((n=>(e({saving:!1}),n))).catch((e=>{console.error(e)}));a&&r.toast.promise(c,{pending:(0,o.__)("Saving menu...","complianz-gdpr"),success:(0,o.__)("Menu saved","complianz-gdpr"),error:(0,o.__)("Something went wrong","complianz-gdpr")})}else a&&r.toast.info((0,o.__)("Settings have not been changed","complianz-gdpr"))}}))),m=()=>u.doAction("documents_menu_data",{generate:!1}).then((e=>e)).catch((e=>{console.error(e)}))},93128:function(e,n,t){t.r(n);var a=t(69307),u=t(63275),c=t(28088),r=t(99196);n.default=(0,r.memo)((e=>{const{createdDocuments:n}=(0,u.UseMenuData)();let t=n.filter((n=>n.region===e.region.id));return 0===t.length?null:(0,a.createElement)("div",null,(0,a.createElement)("h3",{className:"cmplz-h4"},e.region.label),t.map(((e,n)=>(0,a.createElement)(c.default,{key:n,document:e}))))}))},96139:function(e,n,t){t.r(n);var a=t(69307),u=t(63275),c=t(28088),r=t(99196);n.default=(0,r.memo)((e=>{const{genericDocuments:n}=(0,u.UseMenuData)();let t=n.filter((n=>n.type===e.pageType.type));return 0===t.length?null:(0,a.createElement)("div",null,(0,a.createElement)("h3",{className:"cmplz-h4"},e.type),t.map(((e,n)=>(0,a.createElement)(c.default,{key:n,document:e}))))}))},28088:function(e,n,t){t.r(n);var a=t(69307),u=t(63275),c=t(65736),r=t(99196);n.default=(0,r.memo)((e=>{const{menu:n,updateMenu:t}=(0,u.UseMenuData)();return(0,a.createElement)("div",{className:"cmplz-single-document-menu"},(0,a.createElement)("div",{className:"cmplz-document-menu-title"},e.document.title),(0,a.createElement)("select",{value:e.document.menu_id,onChange:n=>(n=>{t(e.document.page_id,n.target.value)})(n)},(0,a.createElement)("option",{value:-1,key:-1},(0,c.__)("Select a menu","complianz-gdpr")),n.map(((e,n)=>(0,a.createElement)("option",{key:n,value:e.id},e.label)))))}))}}]);