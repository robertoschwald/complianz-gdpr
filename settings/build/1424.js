"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[1424,5070],{91424:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var a=l(69307),n=l(65736),i=l(14531),r=l(5070);const u=()=>{const{dataLoaded:e,pluginData:t,pluginActions:l,fetchOtherPluginsData:u,error:o}=(0,r.default)();return(0,a.useEffect)((()=>{e||u()}),[]),!e||o?(0,a.createElement)(i.default,{lines:"3",error:o}):(0,a.createElement)("div",{className:"cmplz-other-plugins-container"},t.map(((e,t)=>((e,t)=>(0,a.createElement)("div",{key:t,className:"cmplz-other-plugins-element cmplz-"+e.slug},(0,a.createElement)("a",{href:e.wordpress_url,target:"_blank",title:e.title},(0,a.createElement)("div",{className:"cmplz-bullet"}),(0,a.createElement)("div",{className:"cmplz-other-plugins-content"},e.title)),(0,a.createElement)("div",{className:"cmplz-other-plugin-status"},"upgrade-to-premium"===e.pluginAction&&(0,a.createElement)("a",{target:"_blank",href:e.upgrade_url},(0,n.__)("Upgrade","complianz-gdpr")),"upgrade-to-premium"!==e.pluginAction&&"installed"!==e.pluginAction&&(0,a.createElement)("a",{href:"#",onClick:t=>l(e.slug,e.pluginAction,t)},e.pluginActionNice),"installed"===e.pluginAction&&(0,n.__)("Installed","complianz-gdpr"))))(e,t))))}},5070:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(30270),n=l(48399),i=l(65736);const r=(0,a.Ue)(((e,t)=>({error:!1,dataLoaded:!1,pluginData:[],updatePluginData:(l,a)=>{let n=t().pluginData;n.forEach((function(e,t){e.slug===l&&(n[t]=a)})),e((e=>({dataLoaded:!0,pluginData:n})))},getPluginData:e=>t().pluginData.filter((t=>t.slug===e))[0],fetchOtherPluginsData:async()=>{const{pluginData:t,error:l}=await n.doAction("otherpluginsdata").then((e=>{let t=[];t=e.plugins;let l=e.error;return l||t.forEach((function(e,l){t[l].pluginActionNice=u(e.pluginAction)})),{pluginData:t,error:l}}));e((e=>({dataLoaded:!0,pluginData:t,error:l})))},pluginActions:(e,l,a)=>{a&&a.preventDefault();let i={};i.slug=e,i.pluginAction=l;let r=t().getPluginData(e);"download"===l?r.pluginAction="downloading":"activate"===l&&(r.pluginAction="activating"),r.pluginActionNice=u(r.pluginAction),t().updatePluginData(e,r),"installed"!==l&&"upgrade-to-premium"!==l&&n.doAction("plugin_actions",i).then((l=>{r=l,t().updatePluginData(e,r),t().pluginActions(e,r.pluginAction)}))}}))),u=e=>({download:(0,i.__)("Install","really-simple-ssl"),activate:(0,i.__)("Activate","really-simple-ssl"),activating:(0,i.__)("Activating...","really-simple-ssl"),downloading:(0,i.__)("Downloading...","really-simple-ssl"),"upgrade-to-premium":(0,i.__)("Downloading...","really-simple-ssl")}[e])}}]);