(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{nmdT:function(n,t,i){"use strict";i.r(t),i.d(t,"BillingPageModule",(function(){return f}));var e=i("Valr"),o=i("QJY3"),l=i("sPEm"),_=i("DUip"),c=i("wd/R"),g=i("TYT/"),r=i("ri4K");function s(n,t){1&n&&(g.Mb(0,"div",6),g.Kb(1,"ion-spinner",7),g.Lb())}function b(n,t){1&n&&(g.Mb(0,"div",8),g.Kb(1,"ion-icon",9),g.Mb(2,"h2"),g.lc(3,"No Bills/Payments"),g.Lb(),g.Lb())}var a=function(n,t){return{"billing__list__item--add":n,"billing__list__item--subtract":t}},u=function(n){return[n]};function p(n,t){if(1&n&&(g.Mb(0,"ion-item",12),g.Mb(1,"ion-label",13),g.Mb(2,"h2"),g.lc(3),g.Lb(),g.Mb(4,"h3"),g.lc(5),g.Xb(6,"number"),g.Lb(),g.Mb(7,"p"),g.lc(8),g.Lb(),g.Lb(),g.Lb()),2&n){var i=t.$implicit,e=g.Wb(2);g.bc("ngClass",g.ec(8,a,i.recipient_user_id===e.user.id,i.user_id===e.user.id))("routerLink",g.dc(11,u,"/gigs/"+i.gig_id)),g.zb(3),g.mc(e.formatDate(i.payment_date)),g.zb(2),g.nc(" $",g.Yb(6,5,e.getPayment(i),"1.2-2")," "),g.zb(3),g.mc(e.getStatus(i))}}function d(n,t){if(1&n&&(g.Mb(0,"ion-list",10),g.kc(1,p,9,13,"ion-item",11),g.Lb()),2&n){var i=g.Wb();g.zb(1),g.bc("ngForOf",i.payments)}}var m=[{path:"",component:function(){function n(n){var t=this;this.authenticationService=n,this.loading=!0,this.payments=[],this.user={},this.authenticationService.getUserData().subscribe((function(n){t.user=n})),this.authenticationService.getPayments().then((function(n){console.log(n),t.payments=n,t.loading=!1})).catch((function(){t.loading=!1}))}return n.prototype.ngOnInit=function(){},n.prototype.getPayment=function(n){return n.user_id===this.user.id?n.payment:n.recipient_user_id===this.user.id?n.payment/1.1:void 0},n.prototype.getStatus=function(n){return n.user_id===this.user.id?"stripepaid"===n.status?"Payment Received":"Musician Paid":n.recipient_user_id===this.user.id?"stripepaid"===n.status?"Pending Payment":"Payment Sent":void 0},n.prototype.formatDate=function(n){return c(n).format("Do MMM YYYY")},n.\u0275fac=function(t){return new(t||n)(g.Jb(r.a))},n.\u0275cmp=g.Db({type:n,selectors:[["app-billing"]],decls:11,vars:3,consts:[["slot","start"],["defaultHref","/settings"],[1,"billing"],["class","billing__loading",4,"ngIf"],["class","billing__empty",4,"ngIf"],["class","billing__list",4,"ngIf"],[1,"billing__loading"],["color","primary"],[1,"billing__empty"],["name","card"],[1,"billing__list"],["class","billing__list__item","routerDirection","forward",3,"ngClass","routerLink",4,"ngFor","ngForOf"],["routerDirection","forward",1,"billing__list__item",3,"ngClass","routerLink"],[1,"ion-text-wrap"]],template:function(n,t){1&n&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar"),g.Mb(2,"ion-buttons",0),g.Mb(3,"ion-button"),g.Kb(4,"ion-back-button",1),g.Lb(),g.Lb(),g.Mb(5,"ion-title"),g.lc(6,"Billing & Payments"),g.Lb(),g.Lb(),g.Lb(),g.Mb(7,"ion-content",2),g.kc(8,s,2,0,"div",3),g.kc(9,b,4,0,"div",4),g.kc(10,d,2,1,"ion-list",5),g.Lb()),2&n&&(g.zb(8),g.bc("ngIf",t.loading),g.zb(1),g.bc("ngIf",t.payments.length<1&&!t.loading),g.zb(1),g.bc("ngIf",t.payments.length>0))},directives:[l.q,l.O,l.i,l.h,l.e,l.f,l.N,l.n,e.k,l.H,l.r,l.x,e.j,l.v,e.i,l.X,_.h,l.w],pipes:[e.d],styles:['.billing[_ngcontent-%COMP%]   .billing__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.billing[_ngcontent-%COMP%]   .billing__empty[_ngcontent-%COMP%]{text-align:center;opacity:.2;padding-top:60px;padding-bottom:60px}.billing[_ngcontent-%COMP%]   .billing__empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:60px}.billing[_ngcontent-%COMP%]   .billing__empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px 0 0;font-size:22px}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item[_ngcontent-%COMP%]{position:relative}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{position:absolute;right:15px;top:15px}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item.billing__list__item--add[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:green}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item.billing__list__item--add[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"+ "}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item.billing__list__item--subtract[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:red}.billing[_ngcontent-%COMP%]   .billing__list[_ngcontent-%COMP%]   .billing__list__item.billing__list__item--subtract[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"- "}']}),n}()}],M=function(){function n(){}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(t){return new(t||n)},imports:[[_.j.forChild(m)],_.j]}),n}(),f=function(){function n(){}return n.\u0275mod=g.Hb({type:n}),n.\u0275inj=g.Gb({factory:function(t){return new(t||n)},imports:[[e.b,o.a,l.P,M]]}),n}()}}]);