(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{UUSl:function(n,e,t){"use strict";t.r(e),t.d(e,"SignupPageModule",(function(){return z}));var o=t("Valr"),i=t("QJY3"),r=t("sPEm"),a=t("DUip"),s=t("AytR"),c=t("wd/R"),b=t("TYT/"),u=t("ri4K"),g=t("BEPN"),l=t("m/P+"),p=t("B7Rs"),d=t("a/9d");function _(n,e){1&n&&b.Kb(0,"ion-icon",26)}function M(n,e){if(1&n&&(b.Mb(0,"ion-avatar",27),b.Kb(1,"img",28),b.Lb()),2&n){var t=b.Wb(2);b.zb(1),b.bc("src",t.user.avatar,b.ic)}}function f(n,e){if(1&n){var t=b.Nb();b.Mb(0,"div"),b.Mb(1,"ion-item"),b.Mb(2,"ion-label",17),b.lc(3,"Your Hourly Rate"),b.Lb(),b.Mb(4,"ion-input",29),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb(2).user.hourly_rate=n})),b.Lb(),b.Lb(),b.Mb(5,"ion-item"),b.Mb(6,"ion-label",17),b.lc(7,"Your Bank Account Number (to be paid into)"),b.Lb(),b.Mb(8,"ion-input",29),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb(2).user.bank_account=n})),b.Lb(),b.Lb(),b.Lb()}if(2&n){var o=b.Wb(2);b.zb(4),b.bc("ngModel",o.user.hourly_rate),b.zb(4),b.bc("ngModel",o.user.bank_account)}}var h=function(n){return{invalidItem:n}};function m(n,e){if(1&n){var t=b.Nb();b.Mb(0,"ion-list",11),b.Mb(1,"ion-item",12),b.kc(2,_,1,0,"ion-icon",13),b.kc(3,M,2,1,"ion-avatar",14),b.Mb(4,"ion-button",15),b.Ub("click",(function(){return b.hc(t),b.Wb().changeImage()})),b.lc(5,"Select Photo"),b.Lb(),b.Lb(),b.Mb(6,"ion-item",16),b.Mb(7,"ion-label",17),b.lc(8,"First Name *"),b.Lb(),b.Mb(9,"ion-input",18),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.first_name=n})),b.Lb(),b.Lb(),b.Mb(10,"ion-item",16),b.Mb(11,"ion-label",17),b.lc(12,"Last Name *"),b.Lb(),b.Mb(13,"ion-input",18),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.last_name=n})),b.Lb(),b.Lb(),b.Mb(14,"ion-item"),b.Mb(15,"ion-label",17),b.lc(16,"Phone"),b.Lb(),b.Mb(17,"ion-input",18),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.phone=n})),b.Lb(),b.Lb(),b.kc(18,f,9,2,"div",19),b.Mb(19,"ion-item"),b.Mb(20,"ion-label",17),b.lc(21,"Gender"),b.Lb(),b.Mb(22,"ion-select",20),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.gender=n})),b.Mb(23,"ion-select-option",21),b.lc(24,"Male"),b.Lb(),b.Mb(25,"ion-select-option",22),b.lc(26,"Female"),b.Lb(),b.Mb(27,"ion-select-option",23),b.lc(28,"Other"),b.Lb(),b.Lb(),b.Lb(),b.Mb(29,"ion-item"),b.Mb(30,"ion-label",17),b.lc(31,"Location"),b.Lb(),b.Mb(32,"ion-input",18),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.location=n})),b.Lb(),b.Lb(),b.Mb(33,"ion-item"),b.Mb(34,"ion-label",17),b.lc(35,"Date Of Birth"),b.Lb(),b.Mb(36,"ion-datetime",24),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.dob=n})),b.Lb(),b.Lb(),b.Mb(37,"ion-item"),b.Mb(38,"ion-label",17),b.lc(39,"About You"),b.Lb(),b.Mb(40,"ion-textarea",25),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.biography=n})),b.Lb(),b.Lb(),b.Lb()}if(2&n){var o=b.Wb();b.zb(2),b.bc("ngIf",!o.user.avatar),b.zb(1),b.bc("ngIf",o.user.avatar),b.zb(3),b.bc("ngClass",b.dc(12,h,!o.user.first_name&&o.user.error)),b.zb(3),b.bc("ngModel",o.user.first_name),b.zb(1),b.bc("ngClass",b.dc(14,h,!o.user.last_name&&o.user.error)),b.zb(3),b.bc("ngModel",o.user.last_name),b.zb(4),b.bc("ngModel",o.user.phone),b.zb(1),b.bc("ngIf","musician"===o.user.type),b.zb(4),b.bc("ngModel",o.user.gender),b.zb(10),b.bc("ngModel",o.user.location),b.zb(4),b.bc("ngModel",o.user.dob),b.zb(4),b.bc("ngModel",o.user.biography)}}function C(n,e){if(1&n&&(b.Mb(0,"p",36),b.lc(1),b.Lb()),2&n){var t=b.Wb(2);b.zb(1),b.mc(t.user.error)}}function P(n,e){if(1&n){var t=b.Nb();b.Mb(0,"ion-list",11),b.Mb(1,"ion-item",16),b.Mb(2,"ion-label",17),b.lc(3,"Email *"),b.Lb(),b.Mb(4,"ion-input",30),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.email=n})),b.Lb(),b.Lb(),b.Mb(5,"ion-item"),b.Mb(6,"ion-label",17),b.lc(7,"Password"),b.Lb(),b.Mb(8,"ion-input",31),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.password=n})),b.Lb(),b.Lb(),b.Mb(9,"ion-item"),b.Mb(10,"ion-label",17),b.lc(11,"Confirm Password"),b.Lb(),b.Mb(12,"ion-input",31),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.confirm_password=n})),b.Lb(),b.Lb(),b.Mb(13,"ion-item",32),b.Mb(14,"ion-label"),b.lc(15,"I agree to the Music Buddy "),b.Mb(16,"a",33),b.Ub("click",(function(n){return b.hc(t),b.Wb().openTos(n)})),b.lc(17,"Terms and Conditions"),b.Lb(),b.Lb(),b.Mb(18,"ion-checkbox",34),b.Ub("ngModelChange",(function(n){return b.hc(t),b.Wb().user.tos=n})),b.Lb(),b.Lb(),b.kc(19,C,2,1,"p",35),b.Lb()}if(2&n){var o=b.Wb();b.zb(1),b.bc("ngClass",b.dc(6,h,!o.user.email&&o.user.error)),b.zb(3),b.bc("ngModel",o.user.email),b.zb(4),b.bc("ngModel",o.user.password),b.zb(4),b.bc("ngModel",o.user.confirm_password),b.zb(6),b.bc("ngModel",o.user.tos),b.zb(1),b.bc("ngIf",o.user.error)}}function L(n,e){if(1&n){var t=b.Nb();b.Mb(0,"ion-button",37),b.Ub("click",(function(){return b.hc(t),b.Wb().changeStep(2)})),b.lc(1," Continue "),b.Kb(2,"ion-icon",38),b.Lb()}}function v(n,e){1&n&&b.Kb(0,"ion-icon",38)}function O(n,e){1&n&&b.Kb(0,"ion-spinner")}function y(n,e){if(1&n){var t=b.Nb();b.Mb(0,"ion-button",39),b.Ub("click",(function(){return b.hc(t),b.Wb().signup()})),b.lc(1," Get Started\xa0\xa0 "),b.kc(2,v,1,0,"ion-icon",40),b.kc(3,O,1,0,"ion-spinner",19),b.Lb()}if(2&n){var o=b.Wb();b.bc("disabled",o.user.loading),b.zb(2),b.bc("ngIf",!o.user.loading),b.zb(1),b.bc("ngIf",o.user.loading)}}var x=function(n){return{"step--active":n}},k=[{path:"",component:function(){function n(n,e,t,o,i,r,a,s){this.authService=n,this.cityService=e,this.iab=t,this.transfer=o,this.camera=i,this.loadingController=r,this.alertController=a,this.route=s,this.user={permission:"user",email:"",password:"",error:"",location:"",loading:!1,tos:!0},this.step=1,this.user.type=this.route.snapshot.params.type}return n.prototype.ngOnInit=function(){},n.prototype.changeStep=function(n){this.step=n},n.prototype.signup=function(){var n=this;this.user.loading=!0,this.user.error="",this.user.email&&this.user.first_name&&this.user.last_name||(this.user.loading=!1,this.user.error="Required fields not filled in. "),this.user.tos||(this.user.loading=!1,this.user.error="Please accept the Terms and Conditions"),this.user.dob&&(this.user.dob=c(this.user.dob).format("YYYY-MM-DD HH:mm:ss")),this.authService.register(this.user).then((function(){n.user.loading=!1,n.user={permission:"babysitter",email:"",password:"",error:"",city:"",country:"New Zealand",latitude:-36.866667,longitude:174.766667,loading:!1,tos:!0},n.authService.retreiveUserData().then((function(){})).catch((function(){}))})).catch((function(e){if(n.user.loading=!1,e&&e.error)if(e.error.error)for(var t in e.error.error.errors)n.user.error=n.user.error+e.error.error.errors[t]+" ";else n.user.error=e.error.message;else n.user.error=e.message}))},n.prototype.openTos=function(n){n.preventDefault(),n.stopPropagation(),this.iab.create("http://157.245.199.27/terms.html","_system")},n.prototype.changeImage=function(){var n=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,quality:25}).then((function(e){var t;n.loadingController.create({message:"Your image is being uploaded. Please wait...",duration:2e4}).then((function(n){t=n,n.present()}));var o=n.transfer.create(),i={fileKey:"media_file",fileName:Math.random().toString(36).substring(2),params:{},mimeType:"image/jpeg"};o.upload(e,encodeURI(s.a.apiUrl+"/upload"),i).then((function(e){if(e.response){var o=JSON.parse(e.response);n.user.avatar=o.file}t.dismiss()}),(function(e){n.alertController.create({header:"Error",subHeader:"There was a problem uploading your image",message:JSON.stringify(e),buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()})),t.dismiss()}))}),(function(n){}))},n.\u0275fac=function(e){return new(e||n)(b.Jb(u.a),b.Jb(g.a),b.Jb(l.a),b.Jb(p.a),b.Jb(d.a),b.Jb(r.R),b.Jb(r.a),b.Jb(a.a))},n.\u0275cmp=b.Db({type:n,selectors:[["app-signup"]],decls:23,vars:10,consts:[["slot","start"],["defaultHref","/login"],[1,"signup"],[1,"signup__stepper"],[1,"signup__stepper__step","step",3,"ngClass","click"],[1,"step__number"],[1,"step__name"],["class","signup__form",4,"ngIf"],[1,"signup-footer"],["color","primary","expand","full","class","signup-footer__button",3,"click",4,"ngIf"],["color","primary","expand","full","class","signup-footer__button",3,"disabled","click",4,"ngIf"],[1,"signup__form"],[1,"signup__form__avatar"],["name","person",4,"ngIf"],["item-start","",4,"ngIf"],["color","primary",3,"click"],[3,"ngClass"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"ngModel","ngModelChange"],["value","Male"],["value","Female"],["value","Other"],["displayFormat","DD/MM/YYYY",3,"ngModel","ngModelChange"],["clearInput","",3,"ngModel","ngModelChange"],["name","person"],["item-start",""],[3,"src"],["clearInput","","type","number",3,"ngModel","ngModelChange"],["clearInput","","type","email",3,"ngModel","ngModelChange"],["clearInput","","type","password",3,"ngModel","ngModelChange"],["no-lines","","no-padding","",1,"custom-checkbox"],[3,"click"],["name","agree","checked","true","required","",3,"ngModel","ngModelChange"],["class","signup__form__error",4,"ngIf"],[1,"signup__form__error"],["color","primary","expand","full",1,"signup-footer__button",3,"click"],["name","arrow-forward"],["color","primary","expand","full",1,"signup-footer__button",3,"disabled","click"],["name","arrow-forward",4,"ngIf"]],template:function(n,e){1&n&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",0),b.Kb(3,"ion-back-button",1),b.Lb(),b.Mb(4,"ion-title"),b.lc(5,"Sign Up"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"div",3),b.Mb(8,"div",4),b.Ub("click",(function(){return e.changeStep(1)})),b.Mb(9,"div",5),b.lc(10,"1"),b.Lb(),b.Mb(11,"div",6),b.lc(12,"Tell us about you"),b.Lb(),b.Lb(),b.Mb(13,"div",4),b.Ub("click",(function(){return e.changeStep(2)})),b.Mb(14,"div",5),b.lc(15,"2"),b.Lb(),b.Mb(16,"div",6),b.lc(17,"Enter your login details"),b.Lb(),b.Lb(),b.Lb(),b.kc(18,m,41,16,"ion-list",7),b.kc(19,P,20,8,"ion-list",7),b.Lb(),b.Mb(20,"ion-footer",8),b.kc(21,L,3,0,"ion-button",9),b.kc(22,y,4,3,"ion-button",10),b.Lb()),2&n&&(b.zb(8),b.bc("ngClass",b.dc(6,x,1===e.step)),b.zb(5),b.bc("ngClass",b.dc(8,x,2===e.step)),b.zb(5),b.bc("ngIf",1===e.step),b.zb(1),b.bc("ngIf",2===e.step),b.zb(2),b.bc("ngIf",1===e.step),b.zb(1),b.bc("ngIf",2===e.step))},directives:[r.q,r.O,r.i,r.e,r.f,r.N,r.n,o.i,o.k,r.p,r.x,r.v,r.h,r.w,r.u,r.Z,i.c,i.f,r.D,r.Y,r.E,r.o,r.M,r.r,r.d,r.V,r.l,r.b,i.g,r.H],styles:[".invalidItem[_ngcontent-%COMP%]{--full-highlight-height:calc(var(--highlight-height)*var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height)*var(--show-inset-highlight));--border-color:var(--ion-item-border-color,var(--ion-border-color,red))}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{display:inline-block;width:50%;text-align:center;vertical-align:top;padding:0 15px;opacity:.5;transition:opacity .2s linear}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step.step--active[_ngcontent-%COMP%]{opacity:1}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step__number[_ngcontent-%COMP%]{width:30px;height:30px;background-color:#2497e8;border-radius:15px;color:#fff;font-size:10px;text-align:center;line-height:30px;margin:0 auto}.signup[_ngcontent-%COMP%]   .signup__stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step__name[_ngcontent-%COMP%]{font-size:12px}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card[_ngcontent-%COMP%]{text-align:center;padding:50px 20px;opacity:.5;transition:opacity .2s linear}.signup[_ngcontent-%COMP%]   .signup__user-type[_ngcontent-%COMP%]   .signup__user-type__card.signup__user-type__card--active[_ngcontent-%COMP%]{opacity:1}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:5px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:10px;border-radius:20px;background-color:#2497e8;color:#fff;margin-bottom:10px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-bottom:10px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:15px;vertical-align:middle;margin-bottom:15px}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__error[_ngcontent-%COMP%]{color:red;font-size:12px;line-height:16px;text-align:Center}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__login[_ngcontent-%COMP%]{margin-top:40px;text-align:Center}.signup[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{position:relative}.signup[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{white-space:normal}.signup[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{white-space:nowrap}.signup-footer[_ngcontent-%COMP%]:before{display:none}.signup-footer[_ngcontent-%COMP%]   .signup-footer__button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;margin-left:5px}"]}),n}()}],w=function(){function n(){}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(e){return new(e||n)},imports:[[a.j.forChild(k)],a.j]}),n}(),z=function(){function n(){}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(e){return new(e||n)},imports:[[o.b,i.a,r.P,w]]}),n}()}}]);