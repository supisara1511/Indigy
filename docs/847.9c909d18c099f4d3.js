"use strict";(self.webpackChunkIndigy=self.webpackChunkIndigy||[]).push([[847],{847:(ee,g,l)=>{l.r(g),l.d(g,{EmployeeModule:()=>W});var p=l(6814),a=l(95),F=l(1567),A=l(9336),w=l(1830),e=l(5879),d=function(n){return n.Programmer="\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e40\u0e21\u0e2d\u0e23\u0e4c",n.Designer="\u0e14\u0e35\u0e44\u0e0b\u0e40\u0e19\u0e2d\u0e23\u0e4c",n.ProjectManager="\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23",n}(d||{});function J(){const n=/^0\d{9}$/;return o=>n.test(o.value)?null:{invalidPhoneNumber:!0}}var z=l(5842),_=l(2920),c=l(3599),U=l(824),b=l(2840),h=l(855),C=l(1958),v=l(8070);function V(n,o){if(1&n&&e._UZ(0,"nz-option",11),2&n){const t=o.$implicit;e.s9C("nzLabel",t.value),e.s9C("nzValue",t.value)}}function D(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submitForm())}),e.TgZ(2,"nz-form-item")(3,"nz-form-label",4),e._uU(4),e.qZA(),e.TgZ(5,"nz-form-control",5),e._UZ(6,"input",6),e.qZA()(),e.TgZ(7,"nz-form-item")(8,"nz-form-label",4),e._uU(9),e.qZA(),e.TgZ(10,"nz-form-control",5),e._UZ(11,"input",7),e.qZA()(),e.TgZ(12,"nz-form-item")(13,"nz-form-label",4),e._uU(14),e.qZA(),e.TgZ(15,"nz-form-control",8)(16,"nz-select",9),e.YNc(17,V,1,2,"nz-option",10),e.qZA()()()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(2),e.s9C("nzFor",t.labels.name.name),e.Q6J("nzSpan",6),e.xp6(1),e.hij(" ",t.labels.name.label," "),e.xp6(1),e.s9C("nzErrorTip",t.labels.name.errors.require),e.Q6J("nzSpan",14),e.xp6(1),e.s9C("formControlName",t.labels.name.name),e.xp6(2),e.s9C("nzFor",t.labels.mobileNumber.name),e.Q6J("nzSpan",6),e.xp6(1),e.hij(" ",t.labels.mobileNumber.label," "),e.xp6(1),e.s9C("nzErrorTip",t.labels.mobileNumber.errors.require),e.Q6J("nzSpan",14),e.xp6(1),e.s9C("formControlName",t.labels.mobileNumber.name),e.xp6(2),e.s9C("nzFor",t.labels.position.name),e.Q6J("nzSpan",6),e.xp6(1),e.hij(" ",t.labels.position.label," "),e.xp6(1),e.s9C("nzErrorTip",t.labels.position.errors.require),e.Q6J("nzSpan",14),e.xp6(1),e.s9C("formControlName",t.labels.position.name),e.xp6(1),e.Q6J("ngForOf",t.labels.position.options)}}function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submitForm())}),e._uU(1," \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 "),e.qZA(),e.TgZ(2,"button",13),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.handleCancel())}),e._uU(3," \u0e1b\u0e34\u0e14 "),e.qZA()}}let T=(()=>{class n{constructor(){this.formSubmit=new e.vpe,this.title="Create Employee",this.isVisible=!1,this.labels={name:{label:"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",name:"name",errors:{require:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 \u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"}},position:{label:"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07",name:"position",errors:{require:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 \u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07"},options:Object.values(d).map(t=>({value:t}))},mobileNumber:{label:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23",name:"mobileNumber",errors:{require:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"}}},this.form=this.initializeForm()}initializeForm(){return new a.cw({name:new a.NI(null,a.kI.required),position:new a.NI(null,a.kI.required),mobileNumber:new a.NI(null,[a.kI.required,J()])})}toggle(t){this.isVisible=!this.isVisible,this.isVisible&&this.initializeFormData(t)}initializeFormData(t){this.data={...t},t?.id?(this.title="\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",this.form.patchValue({name:t.name,position:t.position,mobileNumber:t.mobileNumber})):(this.title="\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",this.form.reset())}submitForm(){if(this.form.valid){const t={...this.form.value,id:this.data.id};this.formSubmit.emit(t),this.isVisible=!1}else Object.values(this.form.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}resetForm(t){t.preventDefault(),this.form.reset()}handleCancel(){this.isVisible=!1}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-edit-employee"]],outputs:{formSubmit:"formSubmit"},decls:4,vars:3,consts:[[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["modalFooter",""],["nz-form","",3,"formGroup","ngSubmit"],["nzRequired","",3,"nzSpan","nzFor"],[3,"nzSpan","nzErrorTip"],["nz-input","","type","text",3,"formControlName"],["nz-input","","type","tel",3,"formControlName"],["nzRequired","",3,"nzSpan","nzErrorTip"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a person",3,"formControlName"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["nz-button","","nzType","primary",3,"click"],["nz-button","",3,"click"]],template:function(i,r){if(1&i&&(e.TgZ(0,"nz-modal",0),e.NdJ("nzVisibleChange",function(f){return r.isVisible=f})("nzOnCancel",function(){return r.handleCancel()}),e.YNc(1,D,18,20,"ng-container",1),e.qZA(),e.YNc(2,Q,4,0,"ng-template",null,2,e.W1O)),2&i){const u=e.MAs(3);e.Q6J("nzVisible",r.isVisible)("nzTitle",r.title)("nzFooter",u)}},dependencies:[p.sg,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,z.du,z.Hf,_.t3,_.SK,c.Lr,c.Nx,c.iK,c.Fd,U.Zp,b.ix,h.w,C.dQ,v.Ip,v.Vq]})}return n})();const x={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var E,O=new Uint8Array(16);function $(){if(!E&&!(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(O)}for(var m=[],y=0;y<256;++y)m.push((y+256).toString(16).slice(1));const Z=function q(n,o,t){if(x.randomUUID&&!o&&!n)return x.randomUUID();var i=(n=n||{}).random||(n.rng||$)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,o){t=t||0;for(var r=0;r<16;++r)o[t+r]=i[r];return o}return function S(n,o=0){return(m[n[o+0]]+m[n[o+1]]+m[n[o+2]]+m[n[o+3]]+"-"+m[n[o+4]]+m[n[o+5]]+"-"+m[n[o+6]]+m[n[o+7]]+"-"+m[n[o+8]]+m[n[o+9]]+"-"+m[n[o+10]]+m[n[o+11]]+m[n[o+12]]+m[n[o+13]]+m[n[o+14]]+m[n[o+15]]).toLowerCase()}(i)};let Y=(()=>{class n{constructor(){this.employees=[{id:Z(),name:"\u0e2a\u0e21\u0e0a\u0e32\u0e22 \u0e43\u0e08\u0e14\u0e35",position:d.Programmer,mobileNumber:"0923333333"}]}getEmployees(){return this.employees}addEmployee(t){t.id=Z(),this.employees.push(t)}editEmployee(t){const i=this.employees.findIndex(r=>r.id===t.id);-1!==i?this.employees[i]=t:console.error(`Employee with ID ${t.id} not found.`)}deleteEmployee(t){this.employees=this.employees.filter(i=>i.id!==t)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var s=l(3229),M=l(9035),N=l(2574);let j=(()=>{class n{transform(t){return t?.trim()?.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275pipe=e.Yjl({name:"mobile",type:n,pure:!0})}return n})();function k(n,o){if(1&n&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.title)}}function G(n,o){if(1&n&&(e._uU(0),e.ALo(1,"mobile")),2&n){const t=e.oxw().$implicit,i=e.oxw().$implicit;e.hij(" ",e.lcZ(1,1,i[t.key])," ")}}function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",3),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3).$implicit,u=e.oxw();return e.KtG(u.onEdit(r))}),e._uU(1," \u0e41\u0e01\u0e49\u0e44\u0e02 "),e.qZA()}}function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",14),e.NdJ("nzOnConfirm",function(){e.CHM(t);const r=e.oxw(3).$implicit,u=e.oxw();return e.KtG(u.onDelete(r))}),e._uU(1," \u0e25\u0e1a "),e.qZA()}}function R(n,o){1&n&&(e.TgZ(0,"nz-space",11),e.YNc(1,H,2,0,"button",12),e.YNc(2,K,2,0,"button",13),e.qZA()),2&n&&e.Q6J("nzSize",8)}function B(n,o){if(1&n&&e._uU(0),2&n){const t=e.oxw().$implicit,i=e.oxw().$implicit;e.hij(" ",i[t.key]," ")}}function L(n,o){if(1&n&&(e.TgZ(0,"td"),e.ynx(1,8),e.YNc(2,G,2,3,"ng-template",9),e.YNc(3,R,3,1,"ng-template",9),e.YNc(4,B,1,1,"ng-template",10),e.BQk(),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngSwitch",t.type),e.xp6(1),e.Q6J("ngSwitchCase","mobile"),e.xp6(1),e.Q6J("ngSwitchCase","action")}}function P(n,o){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,L,5,3,"td",6),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.columns)}}const X=[{path:"",component:(()=>{class n{constructor(t){this.employeeService=t,this.employees=[],this.columns=[{key:"id",title:"\u0e23\u0e2b\u0e31\u0e2a\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",type:"string"},{key:"name",title:"\u0e0a\u0e37\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",type:"string"},{key:"position",title:"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07",type:"string"},{key:"mobileNumber",title:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",type:"mobile"},{key:"id",title:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",type:"action"}],this.loadEmployees()}loadEmployees(){this.employees=this.employeeService.getEmployees()}onCreate(){this.toggleCreateEditEmployee()}onEdit(t){this.toggleCreateEditEmployee(t)}onDelete(t){this.employeeService.deleteEmployee(t.id),this.updateEmployees()}updateEmployees(){this.employees=[...this.employeeService.getEmployees()]}handleSubmitForm(t){t.id?this.employeeService.editEmployee(t):this.employeeService.addEmployee(t),this.updateEmployees()}toggleCreateEditEmployee(t){this.createEditEmployeeComponent&&this.createEditEmployeeComponent.toggle(t)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(Y))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-employee"]],viewQuery:function(i,r){if(1&i&&e.Gf(T,5),2&i){let u;e.iGM(u=e.CRH())&&(r.createEditEmployeeComponent=u.first)}},decls:16,vars:3,consts:[[1,"employee-page"],["nz-row","","nzJustify","space-between","nzAlign","top"],["nz-typography",""],["nz-button","","nzType","primary",3,"click"],[3,"nzData"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"formSubmit"],[3,"ngSwitch"],[3,"ngSwitchCase"],["ngSwitchDefault",""],[3,"nzSize"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-button","","nzType","primary","nzDanger","","nz-popconfirm","","nzPopconfirmTitle","\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",3,"nzOnConfirm",4,"nzSpaceItem"],["nz-button","","nzType","primary","nzDanger","","nz-popconfirm","","nzPopconfirmTitle","\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",3,"nzOnConfirm"]],template:function(i,r){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return r.onCreate()}),e._uU(6,"\u0e40\u0e1e\u0e34\u0e48\u0e21"),e.qZA()()(),e.TgZ(7,"div")(8,"nz-table",4,5)(10,"thead")(11,"tr"),e.YNc(12,k,2,1,"th",6),e.qZA()(),e.TgZ(13,"tbody"),e.YNc(14,P,2,1,"tr",6),e.qZA()()(),e.TgZ(15,"app-create-edit-employee",7),e.NdJ("formSubmit",function(f){return r.handleSubmitForm(f)}),e.qZA()()),2&i){const u=e.MAs(9);e.xp6(8),e.Q6J("nzData",r.employees),e.xp6(4),e.Q6J("ngForOf",r.columns),e.xp6(2),e.Q6J("ngForOf",u.data)}},dependencies:[p.sg,p.RF,p.n9,p.ED,s.N8,s.Uo,s._C,s.Om,s.p0,s.$Z,_.SK,b.ix,h.w,C.dQ,M.JW,N.NU,N.$1,T,j]})}return n})()}];let W=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.ez,a.u5,a.UX,F.Bz.forChild(X),A.V,w.d]})}return n})()}}]);