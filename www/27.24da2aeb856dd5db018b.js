(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{b5pT:function(n,i,t){"use strict";t.r(i),t.d(i,"ReviewsPageModule",(function(){return M}));var e=t("Valr"),o=t("QJY3"),c=t("sPEm"),r=t("DUip"),b=t("TYT/"),a=t("S2Ew");function s(n,i){1&n&&(b.Mb(0,"div",7),b.Kb(1,"ion-spinner",0),b.Lb())}function g(n,i){1&n&&(b.Mb(0,"div",8),b.Kb(1,"ion-icon",9),b.Mb(2,"h2"),b.lc(3,"No Reviews"),b.Lb(),b.Lb())}function f(n,i){if(1&n&&(b.Mb(0,"ion-avatar",1),b.Kb(1,"img",14),b.Lb()),2&n){var t=b.Wb().$implicit;b.zb(1),b.bc("src",t.profile.avatar,b.ic)}}function p(n,i){1&n&&b.Kb(0,"ion-icon",9)}function v(n,i){1&n&&b.Kb(0,"ion-icon",9)}function u(n,i){1&n&&b.Kb(0,"ion-icon",9)}function w(n,i){1&n&&b.Kb(0,"ion-icon",9)}function l(n,i){1&n&&b.Kb(0,"ion-icon",9)}function _(n,i){if(1&n&&(b.Mb(0,"ion-item"),b.kc(1,f,2,1,"ion-avatar",10),b.Mb(2,"ion-label",11),b.Mb(3,"h2",12),b.kc(4,p,1,0,"ion-icon",13),b.kc(5,v,1,0,"ion-icon",13),b.kc(6,u,1,0,"ion-icon",13),b.kc(7,w,1,0,"ion-icon",13),b.kc(8,l,1,0,"ion-icon",13),b.Lb(),b.Mb(9,"p"),b.lc(10),b.Lb(),b.Lb(),b.Lb()),2&n){var t=i.$implicit;b.zb(1),b.bc("ngIf",t.profile.avatar),b.zb(3),b.bc("ngIf",t.rating>0),b.zb(1),b.bc("ngIf",t.rating>1),b.zb(1),b.bc("ngIf",t.rating>2),b.zb(1),b.bc("ngIf",t.rating>3),b.zb(1),b.bc("ngIf",t.rating>4),b.zb(2),b.mc(t.comments)}}var d=[{path:"",component:function(){function n(n,i){var t=this;this.route=n,this.reviewService=i;var e=this.route.snapshot.params.id;this.reviews=[],this.loading=!0,this.reviewService.getReviews(e).then((function(n){t.loading=!1,t.reviews=n})).catch((function(){t.loading=!1}))}return n.prototype.ngOnInit=function(){},n.\u0275fac=function(i){return new(i||n)(b.Jb(r.a),b.Jb(a.a))},n.\u0275cmp=b.Db({type:n,selectors:[["app-reviews"]],decls:11,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","/tabs/jobs"],[1,"reviews"],["class","reviews__loading",4,"ngIf"],["class","reviews__empty",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"reviews__loading"],[1,"reviews__empty"],["name","star"],["slot","start",4,"ngIf"],[1,"ion-text-wrap"],[1,"reviews__rating"],["name","star",4,"ngIf"],[3,"src"]],template:function(n,i){1&n&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-buttons",1),b.Mb(3,"ion-button"),b.Kb(4,"ion-back-button",2),b.Lb(),b.Lb(),b.Mb(5,"ion-title"),b.lc(6,"Reviews"),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content",3),b.kc(8,s,2,0,"div",4),b.kc(9,g,4,0,"div",5),b.kc(10,_,11,7,"ion-item",6),b.Lb()),2&n&&(b.zb(8),b.bc("ngIf",i.loading),b.zb(1),b.bc("ngIf",i.reviews.length<1&&!i.loading),b.zb(1),b.bc("ngForOf",i.reviews))},directives:[c.q,c.O,c.i,c.h,c.e,c.f,c.N,c.n,e.k,e.j,c.H,c.r,c.v,c.w,c.d],styles:[".reviews[_ngcontent-%COMP%]   .reviews__loading[_ngcontent-%COMP%]{text-align:center;margin-top:60px}.reviews[_ngcontent-%COMP%]   .reviews__empty[_ngcontent-%COMP%]{text-align:center;opacity:.2;padding-top:60px;padding-bottom:60px}.reviews[_ngcontent-%COMP%]   .reviews__empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:60px}.reviews[_ngcontent-%COMP%]   .reviews__empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:5px 0 0;font-size:22px}.reviews[_ngcontent-%COMP%]   .reviews__rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#f3cd00}"]}),n}()}],m=function(){function n(){}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(i){return new(i||n)},imports:[[r.j.forChild(d)],r.j]}),n}(),M=function(){function n(){}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(i){return new(i||n)},imports:[[e.b,o.a,c.P,m]]}),n}()}}]);