(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Yj9t:function(e,t,o){"use strict";o.r(t);var r=o("Valr"),n=o("QJY3"),i=o("oW1M"),s=o("R/Hu"),a=o("DUip"),c=o("imvL"),b=o("dICO"),g=o("TYT/");function u(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",24),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function l(e,t){if(1&e&&(g.Rb(0),g.Dc(1,u,4,1,"div",23),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.resetForm.get("email").hasError(o.type)&&(r.resetForm.get("email").dirty||r.resetForm.get("email").touched))}}var m=function(e){return{focused:e}};function p(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",31),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function d(e,t){if(1&e&&(g.Rb(0),g.Dc(1,p,4,1,"div",30),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.loginForm.get("username").hasError(o.type)&&(r.loginForm.get("username").dirty||r.loginForm.get("username").touched))}}function f(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",31),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function h(e,t){if(1&e&&(g.Rb(0),g.Dc(1,f,4,1,"div",30),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.loginForm.get("password").hasError(o.type)&&(r.loginForm.get("password").dirty||r.loginForm.get("password").touched))}}var v=function(e){return{focused:e}};function S(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",36),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function T(e,t){if(1&e&&(g.Rb(0),g.Dc(1,S,4,1,"div",35),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.registerForm.get("username").hasError(o.type)&&(r.registerForm.get("username").dirty||r.registerForm.get("username").touched))}}function y(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",36),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function w(e,t){if(1&e&&(g.Rb(0),g.Dc(1,y,4,1,"div",35),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.registerForm.get("password1").hasError(o.type)&&(r.registerForm.get("password1").dirty||r.registerForm.get("password1").touched))}}function P(e,t){if(1&e&&(g.Tb(0,"div"),g.Tb(1,"p",36),g.Tb(2,"span"),g.Fc(3),g.Sb(),g.Sb(),g.Sb()),2&e){var o=g.fc().$implicit;g.Bb(3),g.Gc(o.message)}}function F(e,t){if(1&e&&(g.Rb(0),g.Dc(1,P,4,1,"div",35),g.Qb()),2&e){var o=t.$implicit,r=g.fc();g.Bb(1),g.lc("ngIf",r.registerForm.get("password2").hasError(o.type)&&(r.registerForm.get("password2").dirty||r.registerForm.get("password2").touched))}}var x=function(e){return{focused:e}},O=[{path:"",children:[{path:"forgot",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/sirim.jpeg",this.resetFormMessages={email:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}]}}return e.prototype.ngOnInit=function(){this.resetForm=this.formBuilder.group({email:new n.d("",n.t.compose([n.t.required,n.t.email]))})},e.prototype.reset=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","A reset link has been sent to your email")},e.\u0275fac=function(t){return new(t||e)(g.Ob(c.a),g.Ob(b.a),g.Ob(n.c),g.Ob(s.c),g.Ob(a.d))},e.\u0275cmp=g.Ib({type:e,selectors:[["app-forgot"]],decls:27,vars:6,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[1,"h2","text-default","mt-3","mb-0"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","email",1,"form-control","text-dark",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-block","my-4",3,"click"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Pb(0,"ngx-loading-bar"),g.Tb(1,"div",0),g.Tb(2,"div",1),g.Tb(3,"div",2),g.Tb(4,"div",3),g.Tb(5,"div",4),g.Tb(6,"div",5),g.Tb(7,"div",6),g.Pb(8,"img",7),g.Tb(9,"h6",8),g.Fc(10,"Reset password"),g.Sb(),g.Sb(),g.Tb(11,"form",9),g.Tb(12,"div",10),g.Tb(13,"div",11),g.Tb(14,"div",12),g.Tb(15,"span",13),g.Pb(16,"i",14),g.Sb(),g.Sb(),g.Tb(17,"input",15),g.bc("focus",(function(e){return t.focusEmail=!0}))("blur",(function(e){return t.focusEmail=!1})),g.Sb(),g.Sb(),g.Dc(18,l,2,1,"ng-container",16),g.Sb(),g.Tb(19,"div",17),g.Tb(20,"button",18),g.bc("click",(function(e){return t.reset()})),g.Fc(21," Reset Password "),g.Sb(),g.Tb(22,"button",19),g.bc("click",(function(e){return t.navigatePage("login")})),g.Tb(23,"span",20),g.Pb(24,"i",21),g.Sb(),g.Tb(25,"span",22),g.Fc(26,"Login"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&e&&(g.Bb(8),g.lc("src",t.imgLogo,g.yc),g.Bb(3),g.lc("formGroup",t.resetForm),g.Bb(1),g.lc("ngClass",g.oc(4,m,!0===t.focusEmail)),g.Bb(6),g.lc("ngForOf",t.resetFormMessages.email))},directives:[s.a,n.v,n.n,n.g,r.j,n.b,n.m,n.e,r.k,r.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"login",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/sirim.jpeg",this.loginFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:new n.d("",n.t.compose([n.t.required,n.t.email])),password:new n.d("",n.t.compose([n.t.required,n.t.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage(),"admin"==this.loginForm.value.username?(this.authService.userRole=1,this.navigatePage("dashboard-admin")):"user"==this.loginForm.value.username&&(this.authService.userRole=2,this.navigatePage("dashboard-user"))},e.prototype.navigatePage=function(e){return"login"==e?this.router.navigate(["/auth/login"]):"forgot"==e?this.router.navigate(["/auth/forgot"]):"register"==e?this.router.navigate(["/auth/register"]):"dashboard-admin"==e?this.router.navigate(["/admin/dashboard"]):"dashboard-user"==e?this.router.navigate(["/user/dashboard"]):void 0},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Logging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Ob(c.a),g.Ob(b.a),g.Ob(n.c),g.Ob(s.c),g.Ob(a.d))},e.\u0275cmp=g.Ib({type:e,selectors:[["app-login"]],decls:42,vars:10,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"form-group",3,"ngClass"],[1,"fas","fa-lock","text-white"],["placeholder","Password","type","password","formControlName","password",1,"form-control",3,"focus","blur"],[1,"validation-errors"],[1,"row"],[1,"col-6"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckLogin","type","checkbox",1,"custom-control-input"],["for","customCheckLogin",1,"custom-control-label"],[1,"col-6","text-right"],[1,"forget-label",3,"click"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4","btn-block",3,"click"],["type","button",1,"btn","btn-outline-primary","btn-block","my-2",3,"click"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Pb(0,"ngx-loading-bar"),g.Tb(1,"div",0),g.Tb(2,"div",1),g.Tb(3,"div",2),g.Tb(4,"div",3),g.Tb(5,"div",4),g.Tb(6,"div",5),g.Tb(7,"div",6),g.Pb(8,"img",7),g.Sb(),g.Tb(9,"form",8),g.Tb(10,"div",9),g.Tb(11,"div",10),g.Tb(12,"div",11),g.Tb(13,"span",12),g.Pb(14,"i",13),g.Sb(),g.Sb(),g.Tb(15,"input",14),g.bc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Sb(),g.Sb(),g.Dc(16,d,2,1,"ng-container",15),g.Sb(),g.Tb(17,"div",16),g.Tb(18,"div",10),g.Tb(19,"div",11),g.Tb(20,"span",12),g.Pb(21,"i",17),g.Sb(),g.Sb(),g.Tb(22,"input",18),g.bc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Sb(),g.Sb(),g.Tb(23,"div",19),g.Dc(24,h,2,1,"ng-container",15),g.Sb(),g.Sb(),g.Tb(25,"div",20),g.Tb(26,"div",21),g.Tb(27,"div",22),g.Pb(28,"input",23),g.Tb(29,"label",24),g.Tb(30,"span"),g.Fc(31,"Remember me?"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(32,"div",25),g.Tb(33,"label",26),g.bc("click",(function(e){return t.navigatePage("forgot")})),g.Tb(34,"span"),g.Fc(35,"Forgot password"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(36,"div",27),g.Tb(37,"button",28),g.bc("click",(function(e){return t.login()})),g.Fc(38," Sign in "),g.Sb(),g.Sb(),g.Tb(39,"div"),g.Tb(40,"button",29),g.bc("click",(function(e){return t.navigatePage("register")})),g.Fc(41," Register "),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&e&&(g.Bb(8),g.lc("src",t.imgLogo,g.yc),g.Bb(1),g.lc("formGroup",t.loginForm),g.Bb(1),g.lc("ngClass",g.oc(6,v,!0===t.focusUsername)),g.Bb(6),g.lc("ngForOf",t.loginFormMessages.username),g.Bb(1),g.lc("ngClass",g.oc(8,v,!0===t.focusPassword)),g.Bb(7),g.lc("ngForOf",t.loginFormMessages.password))},directives:[s.a,n.v,n.n,n.g,r.j,n.b,n.m,n.e,r.k,r.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"register",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/sirim.jpeg",this.registerFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password1:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}],password2:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({username:new n.d("",n.t.compose([n.t.required,n.t.email])),password1:new n.d("",n.t.compose([n.t.required,n.t.minLength(8)])),password2:new n.d("",n.t.compose([n.t.required,n.t.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Loging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Ob(c.a),g.Ob(b.a),g.Ob(n.c),g.Ob(s.c),g.Ob(a.d))},e.\u0275cmp=g.Ib({type:e,selectors:[["app-register"]],decls:55,vars:14,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",3,"src"],[1,"h2","text-default","mt-3","mb-0"],[3,"formGroup"],[1,"form-group",3,"ngClass"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"fas","fa-lock","text-white"],["placeholder","Password","type","password","formControlName","password1",1,"form-control",3,"focus","blur"],[1,"input-group","input-group-alternative"],["placeholder","Confirm password","type","password","formControlName","password2",1,"form-control",3,"focus","blur"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],["href","javascript:void(0)"],[1,"text-center"],["type","button",1,"btn","btn-primary","mt-4","btn-block"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Pb(0,"ngx-loading-bar"),g.Tb(1,"div",0),g.Tb(2,"div",1),g.Tb(3,"div",2),g.Tb(4,"div",3),g.Tb(5,"div",4),g.Tb(6,"div",5),g.Tb(7,"div",6),g.Pb(8,"img",7),g.Tb(9,"h6",8),g.Fc(10,"Register account"),g.Sb(),g.Sb(),g.Tb(11,"form",9),g.Tb(12,"div",10),g.Tb(13,"div",11),g.Tb(14,"div",12),g.Tb(15,"span",13),g.Pb(16,"i",14),g.Sb(),g.Sb(),g.Tb(17,"input",15),g.bc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Sb(),g.Sb(),g.Dc(18,T,2,1,"ng-container",16),g.Sb(),g.Tb(19,"div",10),g.Tb(20,"div",11),g.Tb(21,"div",12),g.Tb(22,"span",13),g.Pb(23,"i",17),g.Sb(),g.Sb(),g.Tb(24,"input",18),g.bc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Sb(),g.Sb(),g.Dc(25,w,2,1,"ng-container",16),g.Sb(),g.Tb(26,"div",10),g.Tb(27,"div",19),g.Tb(28,"div",12),g.Tb(29,"span",13),g.Pb(30,"i",17),g.Sb(),g.Sb(),g.Tb(31,"input",20),g.bc("focus",(function(e){return t.focusConfirmPassword=!0}))("blur",(function(e){return t.focusConfirmPassword=!1})),g.Sb(),g.Sb(),g.Dc(32,F,2,1,"ng-container",16),g.Sb(),g.Tb(33,"div",21),g.Tb(34,"small"),g.Fc(35,"password strength: "),g.Tb(36,"span",22),g.Fc(37,"strong"),g.Sb(),g.Sb(),g.Sb(),g.Tb(38,"div",23),g.Tb(39,"div",24),g.Tb(40,"div",25),g.Pb(41,"input",26),g.Tb(42,"label",27),g.Tb(43,"span"),g.Fc(44,"I agree with the "),g.Tb(45,"a",28),g.Fc(46,"Privacy Policy"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Tb(47,"div",29),g.Tb(48,"button",30),g.Fc(49," Create account "),g.Sb(),g.Tb(50,"button",31),g.bc("click",(function(e){return t.navigatePage("login")})),g.Tb(51,"span",32),g.Pb(52,"i",33),g.Sb(),g.Tb(53,"span",34),g.Fc(54,"Login"),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&e&&(g.Bb(8),g.lc("src",t.imgLogo,g.yc),g.Bb(3),g.lc("formGroup",t.registerForm),g.Bb(1),g.lc("ngClass",g.oc(8,x,!0===t.focusUsername)),g.Bb(6),g.lc("ngForOf",t.registerFormMessages.username),g.Bb(1),g.lc("ngClass",g.oc(10,x,!0===t.focusPassword)),g.Bb(6),g.lc("ngForOf",t.registerFormMessages.password1),g.Bb(1),g.lc("ngClass",g.oc(12,x,!0===t.focusConfirmPassword)),g.Bb(6),g.lc("ngForOf",t.registerFormMessages.password2))},directives:[s.a,n.v,n.n,n.g,r.j,n.b,n.m,n.e,r.k,r.l],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}.strength-bar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}"]}),e}()}]}];o.d(t,"AuthModule",(function(){return C}));var C=function(){function e(){}return e.\u0275mod=g.Mb({type:e}),e.\u0275inj=g.Lb({factory:function(t){return new(t||e)},imports:[[r.c,n.h,n.s,i.d.forRoot(),i.i.forRoot(),i.k.forRoot(),s.b,a.g.forChild(O)]]}),e}()}}]);