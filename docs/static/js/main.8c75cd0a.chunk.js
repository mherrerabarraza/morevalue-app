(this.webpackJsonpmvcapp=this.webpackJsonpmvcapp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),r=a(22),o=a.n(r),s=a(7),i=a(13),l=a(14),d=a(10),u=a(8),j=a.n(u),b=a(16),m=a(40);a(126),a(77);m.a.initializeApp({apiKey:"AIzaSyDUGKdITlmFd_OsNHsf_vRa1_9i5Y_m0NQ",authDomain:"morevalue-f6170.firebaseapp.com",projectId:"morevalue-f6170",storageBucket:"morevalue-f6170.appspot.com",messagingSenderId:"738327980225",appId:"1:738327980225:web:f0e12eae6aca8b8f4fcc40"});var p=m.a.firestore(),h={login:"[Auth] Login",logout:"[Auth] Logout",loadUserData:"[User] Load Logged User Data",userLogout:"[User] Logout",getTrabajadoresIdEmpresa:"[Emp] Get Trabajadores ID Empresa",trabajadoresLogout:"[Emp] Limpiar Trabajadores",getExamenesPorVencerPorIdEmpresa:"[Exam] Get Examenes por Vencer ID Empresa",getExamenesPorVencer:"[Exam] Get Examenes por Vencer",crearNuevoExamen:"[Exam] Crear Nuevo Examen ID Trabajador",getExamenUrl:"[Exam] Get Examen URL",examenesLogout:"[Exam] Limpiar Examenes",uiOpenModal:"[UI] Open Modal",uiCloseModal:"[UI] Close Modal"},x=function(e,t){return{type:h.login,payload:{uid:e,displayName:t}}},O=function(){return{type:h.logout}},f=a(27),v=a(6),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(i.a)(t,2),n=a[0],r=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(v.a)(Object(v.a)({},n),{},Object(f.a)({},t.name,t.value)))};return[n,s,o]},y=(a(79),function(){var e=Object(s.b)(),t=g({email:"jenny@morevaluecompany.com",password:"12341234"}),a=Object(i.a)(t,2),c=a[0],r=a[1],o=c.email,l=c.password;return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("main",{className:"form-signin",children:Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(x(t.uid,""))})).catch((function(e){console.log(e)}))}}(o,l))},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Ingreso Empresas"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Correo Electr\xf3nico",required:!0,autoFocus:!0,onChange:r,value:o}),Object(n.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Contrase\xf1a",required:!0,onChange:r,value:l}),Object(n.jsx)("div",{className:"checkbox mb-3"}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Ingresar"})]})})})}),E=function(){return Object(n.jsx)("div",{className:"auth__main",children:Object(n.jsx)("div",{className:"auth__box-container",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/auth/login",component:y}),Object(n.jsx)(d.a,{to:"/auth/login"})]})})})},N=a(29),w=function(e){var t=e.isAuthenticated,a=e.component,c=Object(N.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(d.b,Object(v.a)(Object(v.a)({},c),{},{component:function(e){return t?Object(n.jsx)(a,Object(v.a)({},e)):Object(n.jsx)(d.a,{to:"/auth/login"})}}))},k=function(e){var t=e.isAuthenticated,a=e.component,c=Object(N.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(d.b,Object(v.a)(Object(v.a)({},c),{},{component:function(e){return t?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(a,Object(v.a)({},e))}}))},T=function(e){return{type:h.getTrabajadoresIdEmpresa,payload:e}},C=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dgoxdpdrc/upload",(a=new FormData).append("upload_preset","morevalue"),a.append("folder","pdf"),a.append("file",t),e.prev=5,e.next=8,fetch("https://api.cloudinary.com/v1_1/dgoxdpdrc/upload",{method:"POST",body:a});case 8:if(!(n=e.sent).ok){e.next=16;break}return e.next=12,n.json();case 12:return c=e.sent,e.abrupt("return",c.secure_url);case 16:return e.next=18,n.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return{type:h.getExamenesPorVencerPorIdEmpresa,payload:e}},S=function(e){return{type:h.getExamenUrl,payload:e}},I=function(e){return{type:h.crearNuevoExamen,payload:e}},A=function(e){return{type:h.loadUserData,payload:e}},L=function(){var e=Object(s.c)((function(e){return e.user})).nombre,t=Object(s.b)();return Object(n.jsx)("div",{children:Object(n.jsxs)("header",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow",children:[Object(n.jsx)("div",{className:"navbar-brand col-md-3 col-lg-2 me-0 px-3 nav-link",children:e}),Object(n.jsx)("button",{className:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("ul",{className:"navbar-nav px-3",children:Object(n.jsx)("li",{className:"nav-item text-nowrap",children:Object(n.jsx)("button",{className:"btn nav-link",onClick:function(){t(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(O());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t({type:h.userLogout}),t({type:h.trabajadoresLogout}),t({type:h.examenesLogout})},children:"Salir"})})})]})})},U=(a(84),function(e){e.id;var t=Object(N.a)(e,["id"]),a=Object(s.b)(),c=t.idEmpresa,r=t.idTrabajador,o=t.fechaCaducidad,i=t.url,l=t.nombreExamen,d=Object(s.c)((function(e){return e.user})),u=d.nombre,m=d.idUsuario;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{onClick:function(){console.log("buscar employee")},children:r}),Object(n.jsx)("td",{children:new Date(o).toLocaleDateString()}),Object(n.jsx)("td",{children:l}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{className:"data",href:i,target:"_blank",rel:"noreferrer",onClick:function(){console.log("archivo descargado: "+l+"descargado por: "+u),a(function(e,t,a,n,c){return Object(b.a)(j.a.mark((function r(){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.collection("registro/".concat(e,"/log")).add({fechaDescarga:(new Date).toLocaleDateString(),id:e,idEmpresa:t,idTrabajador:a,archivoDescargado:n,url:c},{merge:!0}).then((function(e){console.log("Registro Ingresado: ",e)})).catch((function(e){console.log("Algo sali\xf3 mal: ",e)}));case 2:case"end":return r.stop()}}),r)})))}(m,c,r,l,i))},children:"descargar"})})]})}),_=function(){Object(s.c)((function(e){return e.user})).idEmpresa;var e=Object(s.c)((function(e){return e.exam})).examenes;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Resumen:"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h2",{children:["Examenes por Vencer"," ",Object(n.jsx)("i",{className:"fas fa-sync fa-xs",style:{cursor:"pointer",color:"green"}})]}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Rut Empresa"}),Object(n.jsx)("th",{scope:"col",children:"Rut Trabajador"}),Object(n.jsx)("th",{scope:"col",children:"Fecha Caducidad"}),Object(n.jsx)("th",{scope:"col",children:"Nombre Examen"}),Object(n.jsx)("th",{scope:"col",children:"Examen"})]})}),Object(n.jsx)("tbody",{children:e?e.map((function(e){return Object(n.jsx)(U,Object(v.a)({},e),e.id)})):Object(n.jsx)(n.Fragment,{children:"Loading..."})})]})]})},q=a(28),M=a.n(q),F=a(63),P=a.n(F),R=a(64),V=a.n(R),G=a(53),B=a.n(G),z=(a(122),function(){return{type:h.uiCloseModal,payload:!1}}),J={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},K=P()().minutes(0).seconds(0);B.a.setAppElement("#root");var X=function(e){var t=e.idTrabajador,a=e.idEmpresa;console.log(t);var r=Object(s.b)(),o=Object(s.c)((function(e){return e.ui})).modalOpen,l=Object(s.c)((function(e){return e.exam})).url,d=Object(c.useState)(K.toDate()),u=Object(i.a)(d,2),m=u[0],h=u[1],x=Object(c.useState)(!0),O=Object(i.a)(x,2),g=O[0],y=O[1],E=Object(c.useState)({nombreExamen:"",fechaCaducidad:K.toDate()}),N=Object(i.a)(E,2),w=N[0],k=N[1],T=w.nombreExamen;return Object(n.jsxs)(B.a,{isOpen:o,onRequestClose:function(){r(z())},style:J,contentLabel:"Example Modal",className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:500,children:[Object(n.jsx)("h1",{children:" Nuevo examen "}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"container",onSubmit:function(e){if(e.preventDefault(),T.trim().length<2)return y(!1);y(!0)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Nombre"}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"Nombre del examen",name:"nombreExamen",autoComplete:"off",value:T,onChange:function(e){var t=e.target;k(Object(v.a)(Object(v.a)({},w),{},Object(f.a)({},t.name,t.value)))},required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha Vencimiento"}),Object(n.jsx)(V.a,{name:"vencimiento",className:"form-control",value:m,onChange:function(e){h(e),k(Object(v.a)(Object(v.a)({},w),{},{fechaCaducidad:e}))},required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Adjuntar Archivo"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(e){var t,a=e.target.files[0];a&&r((t=a,function(){var e=Object(b.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,a(S(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},required:!0}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){document.querySelector("#fileSelector").click()},children:"Archivo Examen"})]}),Object(n.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",style:{marginTop:"10px",display:"".concat(l?"":"none")},onClick:function(){var e;r((e={idTrabajador:t,idEmpresa:a,nombreExamen:T,fechaCaducidad:new Date(w.fechaCaducidad).getTime(),fechaCreacion:(new Date).getTime(),url:l},function(){var t=Object(b.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.collection("examenes").add(e).then((function(e){console.log("Agregado: ",e.id)})).catch((function(e){console.log("Error: ",e)})),a(I(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),M.a.fire("Examen Creado con \xc9xito","","success"),r(z())},children:[Object(n.jsx)("i",{className:"far fa-save",style:{cursor:"pointer"}}),Object(n.jsx)("span",{children:" Guardar"})]})]})]})},H=function(){var e=Object(s.b)(),t=g({idTrabajador:""}),a=Object(i.a)(t,3),r=a[0],o=a[1],l=a[2],d=r.idTrabajador,u=Object(c.useState)(!1),j=Object(i.a)(u,2),b=j[0],m=j[1],p=Object(c.useState)([]),x=Object(i.a)(p,2),O=(x[0],x[1]),f=Object(c.useState)([]),v=Object(i.a)(f,2),y=(v[0],v[1]),E=Object(s.c)((function(e){return e.trab})).trabajadores,N=Object(s.c)((function(e){return e.exam})).examenes,w=Object(s.c)((function(e){return e.user})).idEmpresa,k=function(e){var t=E.filter((function(t){return t.id===e})),a=N.filter((function(t){return t.idTrabajador===e}));console.log(a),t.length>0?(O(t),y(a),m(!0)):(M.a.fire("Trabajador No Encontrado","","warning"),l())};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(d)},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Buscar Trabajador"}),Object(n.jsx)("hr",{}),Object(n.jsx)("input",{type:"text",id:"idTrabajador",name:"idTrabajador",className:"form-control",placeholder:"Ingrese rut, ej: 123456789",required:!0,autoFocus:!0,onChange:o,value:d}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px",marginBottom:"10px"},type:"submit",children:"Buscar"})]}),b?Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Datos del Trabajador"}),Object(n.jsx)("div",{children:Object(n.jsxs)("h3",{children:["Examenes"," ",Object(n.jsx)("span",{style:{color:"green",cursor:"pointer"},children:Object(n.jsx)("i",{className:"fas fa-plus-circle",onClick:function(){e({type:h.uiOpenModal,payload:!0})}})})]})}),Object(n.jsx)(X,{idTrabajador:d,idEmpresa:w})]}):Object(n.jsx)("div",{})]})},Q=function(){var e=Object(s.c)((function(e){return e.user})).idEmpresa,t=Object(s.b)(),a=g({idEmpleado:"",nombre:"",idEmpresa:e}),c=Object(i.a)(a,3),r=c[0],o=c[1],l=c[2],d=r.idEmpleado,u=r.nombre;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(a){a.preventDefault(),t(function(e,t,a){return Object(b.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p.collection("trabajadores").doc(t).set({idEmpresa:e,nombre:a});case 1:case"end":return n.stop()}}),n)})))}(e,d,u)),M.a.fire("Trabajador Creado con \xe9xito","","success"),l()},children:[Object(n.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Nuevo Trabajador"}),Object(n.jsx)("hr",{}),Object(n.jsx)("input",{type:"text",id:"idEmpleado",name:"idEmpleado",className:"form-control",placeholder:"Ingrese Rut sin puntos, ni gui\xf3n",required:!0,autoFocus:!0,onChange:o,value:d}),Object(n.jsx)("input",{type:"text",id:"nombre",name:"nombre",className:"form-control",placeholder:"Nombre",required:!0,autoFocus:!0,onChange:o,value:u}),Object(n.jsx)("button",{className:"w-100 btn btn-lg btn-primary",style:{marginTop:"10px"},type:"submit",children:"Crear Trabajador"})]})})},W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user})),a=t.isAdmin,r=t.idEmpresa;return Object(c.useEffect)((function(){r&&(e(function(e){var t=new Date;t.setDate(t.getDate()+60);var a=t.getTime(),n=[];return function(){var t=Object(b.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.collection("examenes").where("idEmpresa","==",e).where("fechaCaducidad","<=",a).get().then((function(e){e.forEach((function(e){return n.push(Object(v.a)({id:e.id},e.data()))}))}));case 2:c(D(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r)),e(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],p.collection("trabajadores").where("idEmpresa","==",e).get().then((function(e){e.forEach((function(e){n.push(Object(v.a)({id:e.id},e.data()))})),a(T(n))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r)))}),[e,r]),Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(L,{}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",children:Object(n.jsx)("div",{className:"position-sticky pt-3",children:Object(n.jsxs)("ul",{className:"nav flex-column",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/",children:"Escritorio"})}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Empresa"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newempresa",children:"Nueva Empresa"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editempresa",children:"Editar Empresa"})}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Usuario"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newuser",children:"Nuevo Usuario"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/edituser",children:"Editar Usuario"})})]}):Object(n.jsx)("div",{}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Trabajadores"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/createemployee",children:"Nuevo Trabajador"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editemployee",children:"Editar Trabajador"})}),Object(n.jsx)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:Object(n.jsx)("span",{children:"Equipos"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/newequipment",children:"Nuevo Equipo"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/admin/editequipment",children:"Editar Equipo"})})]})})})}),Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:"col-md-9 ms-sm-auto col-lg-10 px-md-4",children:Object(n.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,component:_,path:"/"}),Object(n.jsx)(d.b,{exact:!0,component:H,path:"/admin/editemployee"}),Object(n.jsx)(d.b,{exact:!0,component:Q,path:"/admin/createemployee"})]})})})})]})]})})},Y=function(){var e=Object(s.b)(),t=Object(c.useState)(!0),a=Object(i.a)(t,2),r=a[0],o=a[1],u=Object(c.useState)(!1),h=Object(i.a)(u,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){m.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(x(t.uid)),e((a=t.uid,function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.collection("usuarios").doc(a),e.next=3,n.get().then((function(e){if(e.exists){console.log(e.data());var a=Object(v.a)({},e.data());t(A(a))}else console.log("no existe")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f(!0)):f(!1),o(!1)}))}),[e,o,f]),r?Object(n.jsx)("h1",{children:"Cargando..."}):Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(k,{path:"/auth",component:E,isAuthenticated:O}),Object(n.jsx)(w,{exact:!0,isAuthenticated:O,path:"/",component:W}),Object(n.jsx)(d.a,{to:"/"})]})})})},Z=a(24),$=a(65),ee=a(35),te={modalOpen:!1},ae="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,ne=Object(Z.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.login:return{uid:t.payload.uid};case h.logout:return{};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.loadUserData:return{nombre:t.payload.nombre,idEmpresa:t.payload.idEmpresa,isAdmin:t.payload.isAdmin,idUsuario:t.payload.idUsuario};case h.userLogout:return{};default:return e}},exam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.getExamenesPorVencerPorIdEmpresa:case h.getExamsIdTrabajador:return Object(v.a)(Object(v.a)({},e),{},{examenes:Object(ee.a)(t.payload)});case h.crearNuevoExamen:return Object(v.a)(Object(v.a)({},e),{},{examen:t.payload});case h.getExamenUrl:return Object(v.a)(Object(v.a)({},e),{},{url:t.payload});case h.examenesLogout:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.uiOpenModal:return Object(v.a)(Object(v.a)({},e),{},{modalOpen:!0});case h.uiCloseModal:return Object(v.a)(Object(v.a)({},e),{},{modalOpen:!1});default:return e}},trab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.getTrabajadoresIdEmpresa:return Object(v.a)(Object(v.a)({},e),{},{trabajadores:Object(ee.a)(t.payload)});default:return e}}}),ce=Object(Z.e)(ne,ae(Object(Z.a)($.a))),re=function(){return Object(n.jsx)(s.a,{store:ce,children:Object(n.jsx)(Y,{})})};o.a.render(Object(n.jsx)(re,{}),document.getElementById("root"))},79:function(e,t,a){},84:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.8c75cd0a.chunk.js.map