(this.webpackJsonpmvcapp=this.webpackJsonpmvcapp||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),c=a(24),s=a.n(c),o=a(7),i=a(10),l=a(15),d=a(12),u=a(8),j=a.n(u),b=a(14),m=a(41);a(120),a(74);m.a.initializeApp({apiKey:"AIzaSyDUGKdITlmFd_OsNHsf_vRa1_9i5Y_m0NQ",authDomain:"morevalue-f6170.firebaseapp.com",projectId:"morevalue-f6170",storageBucket:"morevalue-f6170.appspot.com",messagingSenderId:"738327980225",appId:"1:738327980225:web:f0e12eae6aca8b8f4fcc40"});var p=m.a.firestore(),h={login:"[Auth] Login",logout:"[Auth] Logout",loadUserData:"[User] Load Logged User Data",userLogout:"[User] Logout",getTrabajadoresIdEmpresa:"[Emp] Get Trabajadores ID Empresa",trabajadoresLogout:"[Emp] Limpiar Trabajadores",crearTrabajadorEmpresa:"[Emp] Trabajador Creado",trabajadorExist:"[Emp] Trabajador ya est\xe1 en DB",getExamenesPorVencerPorIdEmpresa:"[Exam] Get Examenes por Vencer ID Empresa",getExamenesPorVencer:"[Exam] Get Examenes por Vencer",crearNuevoExamen:"[Exam] Crear Nuevo Examen ID Trabajador",getExamenUrl:"[Exam] Get Examen URL",examenesLogout:"[Exam] Limpiar Examenes",uiOpenModal:"[UI] Open Modal",uiCloseModal:"[UI] Close Modal",crearNuevaEmpresa:"[EMP] Crear Nueva Empresa",getTodasLasEmpresas:"[EMP] Get Todas Las Empresa"},x=function(e,t){return{type:h.login,payload:{uid:e,displayName:t}}},O=function(){return{type:h.logout}},f=a(28),v=a(5),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(i.a)(t,2),n=a[0],c=a[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},o=function(e){var t=e.target;c(Object(v.a)(Object(v.a)({},n),{},Object(f.a)({},t.name,t.value)))};return[n,o,s]},E=(a(76),function(){var e=Object(o.b)(),t=g({email:"jenny@morevaluecompany.com",password:"12341234"}),a=Object(i.a)(t,2),r=a[0],c=a[1],s=r.email,l=r.password;return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("main",{className:"form-signin",children:Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(x(t.uid,""))})).catch((function(e){console.log(e)}))}}(s,l))},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Ingreso Empresas"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Correo Electr\xf3nico",required:!0,autoFocus:!0,onChange:c,value:s}),Object(n.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a",required:!0,onChange:c,value:l}),Object(n.jsx)("div",{className:"checkbox mb-3"}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Ingresar"})]})})})}),y=function(){return Object(n.jsx)("div",{className:"auth__main",children:Object(n.jsx)("div",{className:"auth__box-container",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/auth/login",component:E}),Object(n.jsx)(d.a,{to:"/auth/login"})]})})})},N=a(29),w=function(e){var t=e.isAuthenticated,a=e.component,r=Object(N.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(d.b,Object(v.a)(Object(v.a)({},r),{},{component:function(e){return t?Object(n.jsx)(a,Object(v.a)({},e)):Object(n.jsx)(d.a,{to:"/auth/login"})}}))},T=function(e){var t=e.isAuthenticated,a=e.component,r=Object(N.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(d.b,Object(v.a)(Object(v.a)({},r),{},{component:function(e){return t?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(a,Object(v.a)({},e))}}))},C=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],p.collection("trabajadores").where("idEmpresa","==",e).get().then((function(e){e.forEach((function(e){n.push(Object(v.a)({id:e.id},e.data()))})),a(k(n))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return{type:h.getTrabajadoresIdEmpresa,payload:e}},D=function(){return{type:h.crearTrabajadorEmpresa,payload:!0}},S=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dgoxdpdrc/upload",(a=new FormData).append("upload_preset","morevalue"),a.append("folder","pdf"),a.append("file",t),e.prev=5,e.next=8,fetch("https://api.cloudinary.com/v1_1/dgoxdpdrc/upload",{method:"POST",body:a});case 8:if(!(n=e.sent).ok){e.next=16;break}return e.next=12,n.json();case 12:return r=e.sent,e.abrupt("return",r.secure_url);case 16:return e.next=18,n.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=new Date;t.setDate(t.getDate()+60);var a=t.getTime(),n=[];return function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("examenes").where("idEmpresa","==",e).where("fechaCaducidad","<=",a).get().then((function(e){e.forEach((function(e){return n.push(Object(v.a)({id:e.id},e.data()))}))}));case 2:r(L(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return{type:h.getExamenesPorVencerPorIdEmpresa,payload:e}},A=function(e){return{type:h.getExamenUrl,payload:e}},U=function(e){return{type:h.crearNuevoExamen,payload:e}},_=function(e){return{type:h.loadUserData,payload:e}},q=function(){var e=Object(o.c)((function(e){return e.user})).nombre,t=Object(o.b)();return Object(n.jsx)("div",{children:Object(n.jsxs)("header",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow",children:[Object(n.jsx)("div",{className:"navbar-brand col-md-3 col-lg-2 me-0 px-3 nav-link",children:e}),Object(n.jsx)("button",{className:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("ul",{className:"navbar-nav px-3",children:Object(n.jsx)("li",{className:"nav-item text-nowrap",children:Object(n.jsx)("button",{className:"btn nav-link",onClick:function(){t(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(O());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t({type:h.userLogout}),t({type:h.trabajadoresLogout}),t({type:h.examenesLogout})},children:"Salir"})})})]})})},M=(a(78),function(e){e.id;var t=Object(N.a)(e,["id"]),a=Object(o.b)(),r=t.idEmpresa,c=t.idTrabajador,s=t.fechaCaducidad,i=t.url,l=t.nombreExamen,d=Object(o.c)((function(e){return e.user})),u=d.nombre,m=d.idUsuario;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:r}),Object(n.jsx)("td",{onClick:function(){console.log("buscar employee")},children:c}),Object(n.jsx)("td",{children:new Date(s).toLocaleDateString()}),Object(n.jsx)("td",{children:l}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{className:"data",href:i,target:"_blank",rel:"noreferrer",onClick:function(){console.log("archivo descargado: "+l+"descargado por: "+u),a(function(e,t,a,n,r){return Object(b.a)(j.a.mark((function c(){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,p.collection("registro/".concat(e,"/log")).add({fechaDescarga:(new Date).toLocaleDateString(),id:e,idEmpresa:t,idTrabajador:a,archivoDescargado:n,url:r},{merge:!0}).then((function(e){console.log("Registro Ingresado: ",e)})).catch((function(e){console.log("Algo sali\xf3 mal: ",e)}));case 2:case"end":return c.stop()}}),c)})))}(m,r,c,l,i))},children:"descargar"})})]})}),R=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user})).idEmpresa,a=Object(o.c)((function(e){return e.exam})).examenes;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Resumen:"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h2",{children:["Examenes por Vencer"," ",Object(n.jsx)("i",{className:"fas fa-sync fa-xs",style:{cursor:"pointer",color:"green"},onClick:function(){e(I(t))}})]}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Rut Empresa"}),Object(n.jsx)("th",{scope:"col",children:"Rut Trabajador"}),Object(n.jsx)("th",{scope:"col",children:"Fecha Caducidad"}),Object(n.jsx)("th",{scope:"col",children:"Nombre Examen"}),Object(n.jsx)("th",{scope:"col",children:"Examen"})]})}),Object(n.jsx)("tbody",{children:a?a.map((function(e){return Object(n.jsx)(M,Object(v.a)({},e),e.id)})):Object(n.jsx)(n.Fragment,{children:"Loading..."})})]})]})},F=a(18),P=a.n(F),V=a(60),B=a.n(V),G=a(61),Y=a.n(G),z=a(52),J=a.n(z),K=(a(116),function(){return{type:h.uiCloseModal,payload:!1}}),X={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},H=B()().minutes(0).seconds(0);J.a.setAppElement("#root");var Q=function(e){var t=e.idTrabajador,a=e.idEmpresa,c=Object(o.b)(),s=Object(o.c)((function(e){return e.ui})).modalOpen,l=Object(o.c)((function(e){return e.exam})).url,d=Object(r.useState)(H.toDate()),u=Object(i.a)(d,2),m=u[0],h=u[1],x=Object(r.useState)(!0),O=Object(i.a)(x,2),g=O[0],E=O[1],y=Object(r.useState)({nombreExamen:"",fechaCaducidad:H.toDate()}),N=Object(i.a)(y,2),w=N[0],T=N[1],C=w.nombreExamen;return Object(n.jsxs)(J.a,{isOpen:s,onRequestClose:function(){c(K())},style:X,contentLabel:"Example Modal",className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:500,children:[Object(n.jsx)("h1",{children:" Nuevo examen "}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"container",onSubmit:function(e){if(e.preventDefault(),C.trim().length<2)return E(!1);E(!0)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Nombre"}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"Nombre del examen",name:"nombreExamen",autoComplete:"off",value:C,onChange:function(e){var t=e.target;T(Object(v.a)(Object(v.a)({},w),{},Object(f.a)({},t.name,t.value)))},required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha Vencimiento"}),Object(n.jsx)(Y.a,{name:"vencimiento",className:"form-control",value:m,onChange:function(e){h(e),T(Object(v.a)(Object(v.a)({},w),{},{fechaCaducidad:e}))},required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Adjuntar Archivo"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(e){var t,a=e.target.files[0];a&&c((t=a,function(){var e=Object(b.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,a(A(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},required:!0}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){document.querySelector("#fileSelector").click()},children:"Archivo Examen"})]}),Object(n.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",style:{marginTop:"10px",display:"".concat(l?"":"none")},onClick:function(){var e;c((e={idTrabajador:t,idEmpresa:a,nombreExamen:C,fechaCaducidad:new Date(w.fechaCaducidad).getTime(),fechaCreacion:(new Date).getTime(),url:l},function(){var t=Object(b.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.collection("examenes").add(e).then((function(e){console.log("Agregado: ",e.id)})).catch((function(e){console.log("Error: ",e)})),a(U(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),P.a.fire("Examen Creado con \xc9xito","","success"),c(K())},children:[Object(n.jsx)("i",{className:"far fa-save",style:{cursor:"pointer"}}),Object(n.jsx)("span",{children:" Guardar"})]})]})]})},W=function(){var e=Object(o.b)(),t=g({idTrabajador:""}),a=Object(i.a)(t,3),c=a[0],s=a[1],l=a[2],d=c.idTrabajador,u=Object(r.useState)(!1),j=Object(i.a)(u,2),b=j[0],m=j[1],p=Object(r.useState)([]),x=Object(i.a)(p,2),O=x[0],f=x[1],E=Object(r.useState)([]),y=Object(i.a)(E,2),N=y[0],w=y[1],T=Object(o.c)((function(e){return e.trab})).trabajadores,C=Object(o.c)((function(e){return e.exam})).examenes,k=Object(o.c)((function(e){return e.user})).idEmpresa,D=function(e){var t=T.filter((function(t){return t.id===e}));f(t);var a=C.filter((function(t){return t.idTrabajador===e}));w(a),t.length>0?m(!0):(P.a.fire("Trabajador No Encontrado","","warning"),l())};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D(d)},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Buscar Trabajador"}),Object(n.jsx)("hr",{}),Object(n.jsx)("input",{type:"text",id:"idTrabajador",name:"idTrabajador",className:"form-control",placeholder:"Ingrese rut, ej: 123456789",required:!0,autoFocus:!0,onChange:s,value:d}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px",marginBottom:"10px"},type:"submit",children:"Buscar"})]}),b?Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Datos del Trabajador"}),Object(n.jsx)("div",{className:"datosTrabajador",children:O?Object(n.jsxs)("div",{children:["Nombre: ",O[0].nombre]}):Object(n.jsx)("div",{})}),Object(n.jsx)("div",{children:Object(n.jsxs)("h3",{children:["Examenes"," ",Object(n.jsx)("span",{style:{color:"green",cursor:"pointer"},children:Object(n.jsx)("i",{className:"fas fa-plus-circle",onClick:function(){e({type:h.uiOpenModal,payload:!0})},children:" "})})]})}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Rut Empresa"}),Object(n.jsx)("th",{scope:"col",children:"Rut Trabajador"}),Object(n.jsx)("th",{scope:"col",children:"Fecha Caducidad"}),Object(n.jsx)("th",{scope:"col",children:"Nombre Examen"}),Object(n.jsx)("th",{scope:"col",children:"Examen"})]})}),Object(n.jsx)("tbody",{children:N?N.map((function(e){return Object(n.jsx)(M,Object(v.a)({},e),e.id)})):Object(n.jsx)(n.Fragment,{children:"Loading..."})})]}),Object(n.jsx)(Q,{idTrabajador:d,idEmpresa:k})]}):Object(n.jsx)("div",{})]})},Z=function(){var e=Object(o.c)((function(e){return e.user})).idEmpresa,t=Object(o.c)((function(e){return e.trab})).trabajadores,a=Object(o.b)(),r=g({idEmpleado:"",nombre:"",idEmpresa:e}),c=Object(i.a)(r,3),s=c[0],l=c[1],d=c[2],u=s.idEmpleado,m=s.nombre;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.filter((function(e){return e.id===u})).length>0?(P.a.fire("Ya existe este trabajador","","error"),d()):(a(function(e,t,a){return function(){var n=Object(b.a)(j.a.mark((function n(r){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p.collection("trabajadores").doc(t).set({idEmpresa:e,nombre:a}),r(D()),r(C(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,u,m)),P.a.fire("Trabajador Creado con \xe9xito","","success"),d())},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Nuevo Trabajador"}),Object(n.jsx)("hr",{}),Object(n.jsx)("input",{type:"text",id:"idEmpleado",name:"idEmpleado",className:"form-control",placeholder:"Ingrese Rut sin puntos, ni gui\xf3n",required:!0,autoFocus:!0,onChange:l,value:u}),Object(n.jsx)("input",{type:"text",id:"nombre",name:"nombre",className:"form-control",placeholder:"Nombre",required:!0,autoFocus:!0,onChange:l,value:m}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px"},type:"submit",children:"Crear Trabajador"})]})})},$=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],p.collection("empresas").get().then((function(e){e.forEach((function(e){a.push(Object(v.a)({idEmpresa:e.id},e.data()))})),t(ee(a))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(e){return{type:h.getTodasLasEmpresas,payload:e}},te=function(){var e=Object(o.b)(),t=g({idEmpresa:"",nombre:""}),a=Object(i.a)(t,3),r=a[0],c=a[1],s=a[2],l=Object(o.c)((function(e){return e.empr})).empresas,d=r.idEmpresa,u=r.nombre;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Crear Empresa"}),Object(n.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),l.filter((function(e){return e.idEmpresa===d})).length>0?(P.a.fire("Ya existe esta Empresa","","error"),s()):(e(function(e,t){return function(){var a=Object(b.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.collection("empresas").doc(e).set(t);case 2:n($());case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(d,{idEmpresa:d,nombre:u})),P.a.fire("Empresa Creada con \xe9xito","","success"),s())},children:[Object(n.jsx)("input",{id:"idEmpresa",name:"idEmpresa",type:"text",value:d,onChange:c,className:"form-control",placeholder:"Rut Empresa sin puntos ni gui\xf3n",required:!0}),Object(n.jsx)("input",{id:"nombre",name:"nombre",type:"text",value:u,onChange:c,className:"form-control",placeholder:"Nombre Empresa",required:!0}),Object(n.jsx)("button",{type:"Submit",className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px",marginBottom:"10px"},children:"crear"})]})]})},ae=function(){var e=Object(o.c)((function(e){return e.empr})).empresas,t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],l=Object(r.useState)(!1),d=Object(i.a)(l,2),u=d[0],j=d[1],b=Object(r.useState)(!1),m=Object(i.a)(b,2),p=m[0],h=m[1],x=g({idEmpresa:""}),O=Object(i.a)(x,3),f=O[0],v=O[1],E=O[2],y=f.idEmpresa,N=f.nombre,w=function(t){var a=e.filter((function(e){return e.idEmpresa===t}));a.length>0?(s(a),j(!0),h(!1)):(P.a.fire("Empresa No Encontrada","","warning"),j(!1),E())};return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{name:"idEmpresa",id:"idEmpresa",value:y,onChange:v,className:"form-control",required:!0,placeholder:"Ingrese Rut sin puntos ni gui\xf3n"}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px"},type:"submit",onClick:function(){w(y)},children:"Buscar"}),u?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{marginTop:"20px"},children:Object(n.jsx)("h3",{children:Object(n.jsxs)("span",{children:["Datos de la Empresa"," ",Object(n.jsx)("i",{className:"fas fa-edit",style:{color:"green",cursor:"pointer"},onClick:function(){h(!0)}})]})})}),Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.length<=1?P.a.fire("El nombre es muy corto","","info"):console.log("hola")},children:[Object(n.jsx)("label",{children:"Nombre"}),Object(n.jsx)("input",{name:"nombre",id:"nombre",value:N,onChange:v,className:"form-control",readOnly:!p,required:!0,placeholder:"".concat(c[0].nombre," ")}),p&&Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px"},type:"submit",children:"Guardar Cambios"})]})})]}):Object(n.jsx)("div",{})]})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user})),a=t.isAdmin,c=t.idEmpresa;return Object(r.useEffect)((function(){c&&(e(I(c)),e(C(c)),e($()))}),[e,c]),Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(q,{}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",children:Object(n.jsx)("div",{className:"position-sticky pt-3",children:Object(n.jsxs)("ul",{className:"nav flex-column",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/",children:"Escritorio"})}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Empresa"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newempresa",children:"Nueva Empresa"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editempresa",children:"Editar Empresa"})}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Usuario"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newuser",children:"Nuevo Usuario"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/edituser",children:"Editar Usuario"})}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Trabajadores"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/createemployee",children:"Nuevo Trabajador"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editemployee",children:"Editar Trabajador"})}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Equipos"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newequipment",children:"Nuevo Equipo"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editequipment",children:"Editar Equipo"})})]}):Object(n.jsx)("div",{})]})})})}),Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:"col-md-9 ms-sm-auto col-lg-10 px-md-4",children:Object(n.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,component:R,path:"/"}),Object(n.jsx)(d.b,{exact:!0,component:W,path:"/admin/editemployee"}),Object(n.jsx)(d.b,{exact:!0,component:Z,path:"/admin/createemployee"}),Object(n.jsx)(d.b,{exact:!0,component:te,path:"/admin/newempresa"}),Object(n.jsx)(d.b,{exact:!0,component:ae,path:"/admin/editempresa"}),Object(n.jsx)(d.b,{exact:!0,component:te,path:"/admin/newempresa"})]})})})})]})]})})},re=function(){var e=Object(o.b)(),t=Object(r.useState)(!0),a=Object(i.a)(t,2),c=a[0],s=a[1],u=Object(r.useState)(!1),h=Object(i.a)(u,2),O=h[0],f=h[1];return Object(r.useEffect)((function(){m.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(x(t.uid)),e((a=t.uid,function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.collection("usuarios").doc(a),e.next=3,n.get().then((function(e){if(e.exists){var a=Object(v.a)({},e.data());t(_(a))}else console.log("no existe")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f(!0)):f(!1),s(!1)}))}),[e,s,f]),c?Object(n.jsx)("h1",{children:"Cargando..."}):Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(T,{path:"/auth",component:y,isAuthenticated:O}),Object(n.jsx)(w,{exact:!0,isAuthenticated:O,path:"/",component:ne}),Object(n.jsx)(d.a,{to:"/"})]})})})},ce=a(26),se=a(62),oe=a(35),ie={modalOpen:!1},le="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,de=Object(ce.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.login:return{uid:t.payload.uid};case h.logout:return{};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.loadUserData:return{nombre:t.payload.nombre,idEmpresa:t.payload.idEmpresa,isAdmin:t.payload.isAdmin,idUsuario:t.payload.idUsuario};case h.userLogout:return{};default:return e}},exam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.getExamenesPorVencerPorIdEmpresa:case h.getExamsIdTrabajador:return Object(v.a)(Object(v.a)({},e),{},{examenes:Object(oe.a)(t.payload)});case h.crearNuevoExamen:return Object(v.a)(Object(v.a)({},e),{},{examen:t.payload});case h.getExamenUrl:return Object(v.a)(Object(v.a)({},e),{},{url:t.payload});case h.examenesLogout:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.uiOpenModal:return Object(v.a)(Object(v.a)({},e),{},{modalOpen:!0});case h.uiCloseModal:return Object(v.a)(Object(v.a)({},e),{},{modalOpen:!1});default:return e}},trab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.getTrabajadoresIdEmpresa:return Object(v.a)(Object(v.a)({},e),{},{trabajadores:Object(oe.a)(t.payload)});case h.crearTrabajadorEmpresa:return Object(v.a)(Object(v.a)({},e),{},{creado:t.payload});default:return e}},empr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.getTodasLasEmpresas:return Object(v.a)(Object(v.a)({},e),{},{empresas:t.payload});default:return e}}}),ue=Object(ce.e)(de,le(Object(ce.a)(se.a))),je=function(){return Object(n.jsx)(o.a,{store:ue,children:Object(n.jsx)(re,{})})};s.a.render(Object(n.jsx)(je,{}),document.getElementById("root"))},76:function(e,t,a){},78:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.3b67edac.chunk.js.map