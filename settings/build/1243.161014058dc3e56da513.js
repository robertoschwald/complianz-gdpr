"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[1243,4573,8111],{34573:function(e,t,a){a.r(t);var l=a(69307),n=a(23361);t.default=e=>(0,l.createElement)("div",{className:"cmplz-panel__list__item",key:e.id,style:e.style?e.style:{}},(0,l.createElement)("details",null,(0,l.createElement)("summary",null,e.icon&&(0,l.createElement)(n.default,{name:e.icon}),(0,l.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,l.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,l.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,l.createElement)(n.default,{name:"chevron-down",size:18})),(0,l.createElement)("div",{className:"cmplz-panel__list__item__details"},e.details)))},61243:function(e,t,a){a.r(t);var l=a(69307),n=a(65736),r=a(56293),i=a(99196),m=a(68111);t.default=(0,i.memo)((e=>{const{updateField:t,setChangedField:a}=(0,r.default)();let i=e.field,c=i.value;return Array.isArray(c)||(c=[]),(0,l.createElement)("div",{className:"components-base-control cmplz-thirdparty"},(0,l.createElement)("div",null,(0,l.createElement)("button",{onClick:()=>(()=>{let l=e.field.value;Array.isArray(l)||(l=[]);let r={},m=[...l];r.name=(0,n.__)("New Third Party","complianz-gdpr"),m.push(r),t(i.id,m),a(i.id,m)})(),className:"button button-default"},(0,n.__)("Add new Third Party","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-panel__list"},c.map(((t,a)=>(0,l.createElement)(m.default,{field:e.field,updateField:e.updateField,index:a,key:a,thirdParty:t})))))}))},68111:function(e,t,a){a.r(t);var l=a(69307),n=a(34573),r=a(56293),i=a(99196),m=a(65736),c=a(82485);t.default=(0,i.memo)((e=>{const{updateField:t,setChangedField:a}=(0,r.default)(),{selectedMainMenuItem:d}=(0,c.default)(),[s,u]=wp.element.useState(e.thirdParty.name?e.thirdParty.name:""),[p,o]=wp.element.useState(e.thirdParty.purpose?e.thirdParty.purpose:""),[_,y]=wp.element.useState(e.thirdParty.country?e.thirdParty.country:""),[f,E]=wp.element.useState(e.thirdParty.data?e.thirdParty.data:""),h=(l,n)=>{let r=[...e.field.value];Array.isArray(r)||(r=[]);let i={...r[e.index]};i[n]=l,r[e.index]=i,t(e.field.id,r),a(e.field.id,r)};return(0,i.useEffect)((()=>{const e=setTimeout((()=>{h(s,"name")}),500);return()=>{clearTimeout(e)}}),[s]),(0,i.useEffect)((()=>{const e=setTimeout((()=>{h(f,"data")}),500);return()=>{clearTimeout(e)}}),[f]),(0,i.useEffect)((()=>{const e=setTimeout((()=>{h(_,"country")}),500);return()=>{clearTimeout(e)}}),[_]),(0,i.useEffect)((()=>{const e=setTimeout((()=>{h(p,"purpose")}),500);return()=>{clearTimeout(e)}}),[p]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.default,{summary:s,details:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,m.__)("Name","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>u(e.target.value),type:"text",placeholder:(0,m.__)("Name","complianz-gdpr"),value:s})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,m.__)("Country","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>y(e.target.value),type:"text",placeholder:(0,m.__)("Country","complianz-gdpr"),value:_})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,m.__)("Purpose","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>o(e.target.value),type:"text",placeholder:(0,m.__)("Purpose","complianz-gdpr"),value:p})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,m.__)("Data","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>E(e.target.value),type:"text",placeholder:(0,m.__)("Data","complianz-gdpr"),value:f})),(0,l.createElement)("div",{className:"cmplz-details-row__buttons"},(0,l.createElement)("button",{className:"button button-default cmplz-reset-button",onClick:l=>(async l=>{let n=e.field.value;Array.isArray(n)||(n=[]);let r=[...n];r.hasOwnProperty(e.index)&&r.splice(e.index,1),t(e.field.id,r),a(e.field.id,r),await saveFields(d,!1,!1)})()},(0,m.__)("Delete","complianz-gdpr"))))}))}))}}]);