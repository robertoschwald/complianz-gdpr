"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[924],{924:(t,o,e)=>{e.r(o),e.d(o,{default:()=>l});var a=e(30270),s=e(48399);const l=(0,a.Ue)(((t,o)=>({progress:0,total:0,start:0,next:0,active:!1,copySites:async o=>{let e={restart:o};t({active:!0});const{start:a,next:l,total:c}=await s.doAction("copy_multisite",e).then((t=>(console.log(t),t)));let n=Math.round(l/c*100);t({progress:n,start:a,next:l,total:c}),console.log(n),n>=100&&(console.log("done"),t({active:!1}))}})))}}]);