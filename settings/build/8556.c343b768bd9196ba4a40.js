"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[8556,8603],{58556:function(e,l,t){t.r(l);var a=t(69307),n=t(88603),c=t(19853),r=t(56293);const i=e=>{const{updateField:l,setChangedField:t}=(0,r.default)(),[i,o]=(0,a.useState)(),m=e.field.value.hasOwnProperty(e.item.fieldname)?e.field.value[e.item.fieldname]:e.field.default[e.item.fieldname],d=e.item.fieldname;return(0,a.createElement)(c.fC,null,(0,a.createElement)(c.xz,null,(0,a.createElement)("div",{className:"cmplz-color-picker-control-item",onClick:e=>{o(e.currentTarget)}},(0,a.createElement)("div",{className:"cmplz-color-picker-color",style:{backgroundColor:m}}),d)),(0,a.createElement)(c.h_,null,(0,a.createElement)(c.VY,null,(0,a.createElement)(n.default,{colorValue:m,onChangeComplete:(a,n)=>{let c={...e.field.value};c[e.item.fieldname]=a.hex,l(e.field.id,c),t(e.field.id,c)}}))))};l.default=(0,a.memo)((e=>(0,a.createElement)("div",{className:"cmplz-color-picker-control"},e.field.fields.map(((l,t)=>(0,a.createElement)(i,{key:t,item:l,field:e.field}))))))},88603:function(e,l,t){t.r(l);var a=t(69307),n=t(58686);l.default=(0,a.memo)((e=>{let{colorValue:l,onChangeComplete:t}=e;const[c,r]=(0,a.useState)(l);return(0,a.createElement)(n.AI,{color:c,onChange:e=>{r(e.hex)},onChangeComplete:t,disableAlpha:!0})}))}}]);