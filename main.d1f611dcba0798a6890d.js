(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(n,t,e){n.exports=e("2v48")},"2v48":function(n,t,e){"use strict";e.r(t);var i=e("ENSU"),r=e("kZht"),c=e("Vhhf"),a=e("6uGs"),u=e("uryd"),o=e("O+XF"),l=e("P0vk"),s=e("aJOL"),f=e("FxgA"),d=e("lizs"),b=e("1VvW"),h=e("8EXQ"),p=function(){function n(){}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Fb({type:n,selectors:[["app-root"]],decls:40,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/favicon.ico","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","samples/guide"],["routerLink","samples/first"],[1,"dashboard__content"]],template:function(n,t){1&n&&(r.Rb(0,"mat-drawer-container",0),r.nc(1,"\n    "),r.Rb(2,"mat-drawer",1),r.nc(3,"\n        "),r.Rb(4,"mat-toolbar",2),r.nc(5,"\n            "),r.Nb(6,"img",3),r.nc(7,"\n            "),r.Rb(8,"a",4),r.nc(9,"@angular-ru/flex-layout"),r.Qb(),r.nc(10,"\n        "),r.Qb(),r.nc(11,"\n\n        "),r.Rb(12,"mat-list",5),r.nc(13,"\n            "),r.Rb(14,"mat-list-item",6),r.nc(15,"\n                "),r.Rb(16,"a",7),r.nc(17,"- "),r.Rb(18,"strong"),r.nc(19,"Guide overview"),r.Qb(),r.Qb(),r.nc(20,"\n            "),r.Qb(),r.nc(21,"\n            "),r.Nb(22,"mat-divider"),r.nc(23,"\n            "),r.Rb(24,"mat-list-item",6),r.nc(25,"\n                "),r.Rb(26,"a",8),r.nc(27,"- Examples"),r.Qb(),r.nc(28,"\n            "),r.Qb(),r.nc(29,"\n            "),r.Nb(30,"mat-divider"),r.nc(31,"\n        "),r.Qb(),r.nc(32,"\n    "),r.Qb(),r.nc(33,"\n\n    "),r.Rb(34,"mat-drawer-content",9),r.nc(35,"\n        "),r.Nb(36,"router-outlet"),r.nc(37,"\n    "),r.Qb(),r.nc(38,"\n"),r.Qb(),r.nc(39,"\n"))},directives:[l.b,l.a,s.a,b.a,u.a,u.b,h.a,l.c,b.c],encapsulation:2,changeDetection:0}),n}(),m=function(){function n(){}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Jb({type:n}),n.\u0275inj=r.Ib({imports:[[b.b.forRoot([{path:"",pathMatch:"full",redirectTo:"samples"},{path:"samples",children:[{path:"",pathMatch:"full",redirectTo:"guide"},{path:"guide",loadChildren:function(){return e.e(6).then(e.bind(null,"G7lC")).then(function(n){return n.GuideModule})}},{path:"first",loadChildren:function(){return e.e(7).then(e.bind(null,"lY0r")).then(function(n){return n.SampleFirstModule})}}]}],{useHash:!0,scrollPositionRestoration:"enabled"})],b.b]}),n}(),v=function(){function n(){}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Jb({type:n,bootstrap:[p]}),n.\u0275inj=r.Ib({imports:[[a.a,i.a,m,o.a,u.c,s.b,l.d,d.d,f.b]]}),n}();Object(c.b)(!0)&&Object(r.T)(),i.b().bootstrapModule(v).catch(function(n){return console.error(n)})},Vhhf:function(n,t,e){"use strict";function i(n){return!0===n}function r(n){return!function(n){return null==n}(n)}e.d(t,"a",function(){return r}),e.d(t,"b",function(){return i})},lizs:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"b",function(){return f}),e.d(t,"c",function(){return d}),e.d(t,"d",function(){return b});var i=e("Qvxn"),r=e("sTvq"),c=e("bI4O"),a=e("jg4I"),u=e("kZht"),o=e("Vhhf"),l=function(){var n=function(){function n(){Object(c.a)(this,n)}return Object(a.a)(n,[{key:"classList",get:function(){return this.el.nativeElement.classList}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=u.Gb({type:n}),n}(),s=function(){var n=function(n){Object(i.a)(e,n);var t=Object(r.a)(e);function e(n){var i;return Object(c.a)(this,e),(i=t.call(this)).el=n,i.flexDirection=null,i}return Object(a.a)(e,[{key:"ngAfterViewInit",value:function(){Object(o.a)(this.flexDirection)&&(this.el.nativeElement.style.flexDirection=this.flexDirection),this.classList.add("flex-column")}}]),e}(l);return n.\u0275fac=function(t){return new(t||n)(u.Lb(u.l))},n.\u0275dir=u.Gb({type:n,selectors:[["","flex-column",""]],inputs:{flexDirection:["flex-direction","flexDirection"]},features:[u.yb]}),n}(),f=function(){var n=function(n){Object(i.a)(e,n);var t=Object(r.a)(e);function e(n){var i;return Object(c.a)(this,e),(i=t.call(this)).el=n,i.center=!1,i.noWrap=!1,i.fullWidth=!1,i}return Object(a.a)(e,[{key:"ngAfterViewInit",value:function(){this.classList.add("flex-container"),!1!==this.center&&this.classList.add("flex-container--center"),!1!==this.noWrap&&this.classList.add("flex-container__nowrap"),!1!==this.fullWidth&&this.classList.add("flex-container__full-width")}}]),e}(l);return n.\u0275fac=function(t){return new(t||n)(u.Lb(u.l))},n.\u0275dir=u.Gb({type:n,selectors:[["","flex-container",""]],inputs:{center:["flex-center","center"],noWrap:["no-wrap","noWrap"],fullWidth:["full-width","fullWidth"]},features:[u.yb]}),n}(),d=function(){var n=function(n){Object(i.a)(e,n);var t=Object(r.a)(e);function e(n){var i;return Object(c.a)(this,e),(i=t.call(this)).el=n,i.wide=!1,i.equalWidth=!1,i}return Object(a.a)(e,[{key:"ngAfterViewInit",value:function(){this.classList.add("flex__item"),!1!==this.wide&&this.classList.add("flex__item--wide"),!1!==this.equalWidth&&this.classList.add("flex__item--equal-width")}}]),e}(l);return n.\u0275fac=function(t){return new(t||n)(u.Lb(u.l))},n.\u0275dir=u.Gb({type:n,selectors:[["","flex-item",""]],inputs:{wide:["flex-wide","wide"],equalWidth:["flex-equal","equalWidth"]},features:[u.yb]}),n}(),b=function(){var n=function n(){Object(c.a)(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=u.Jb({type:n}),n.\u0275inj=u.Ib({}),n}()},zn8P:function(n,t){function e(n){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="zn8P"}},[[0,0,5]]]);