(this.webpackJsonpBiometric=this.webpackJsonpBiometric||[]).push([[0],{471:function(e,t,a){},472:function(e,t,a){},563:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),i=a(17),n=a.n(i),o=a(35),l=a(102),s=(a(371),a(471),a(472),a(423)),d=a(13),b=a(18),u=a(294),j=a.n(u),O=a(181),f=a.n(O),h=a(295),m=a.n(h),v=a(397),x=a(152),p=a.n(x),g=a(153),y=a.n(g),w=a(398),S=a(445),N=a(125),B=a(6),_=function(e){var t=e.motherMenu,a=e.activeMenu,r=(e.pageContent,window.location.pathname.split("/"));return Object(B.jsx)("div",{className:"row page-titles mx-0",children:Object(B.jsxs)("ol",{className:"breadcrumb",children:[Object(B.jsx)("li",{className:"breadcrumb-item active",children:Object(B.jsx)(N.b,{to:"/".concat(r[r.length-1]),children:t})}),Object(B.jsx)("li",{className:"breadcrumb-item  ",children:Object(B.jsx)(N.b,{to:"/".concat(r[r.length-1]),children:a})})]})})},A=a(608),C=a(609),P=a(12),L=a(615),T=a(610),R=a(613),k=new URLSearchParams(window.location.search).get("jwt"),z="/api/v1/",D=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},error:{color:"#f85032",fontSize:"12.8px"}}})),F=function(e){var t=D(),a=Object(r.useState)(!1),c=Object(d.a)(a,2),i=c[0],n=(c[1],e.datasample&&e.datasample,Object(r.useState)({})),o=Object(d.a)(n,2),s=o[0],u=o[1],j=Object(r.useState)({active:"",name:"",url:""}),O=Object(d.a)(j,2),h=O[0],m=O[1],v=function(e){m(Object(b.a)(Object(b.a)({},h),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(B.jsx)("div",{children:Object(B.jsxs)(T.a,{show:e.modalstatus,toggle:e.togglestatus,className:e.className,size:"md",children:[Object(B.jsxs)(T.a.Header,{toggle:e.togglestatus,children:[Object(B.jsx)(T.a.Title,{children:"Add Biometric Device"}),Object(B.jsx)(R.a,{variant:"",className:"btn-close",onClick:e.togglestatus})]}),Object(B.jsx)(T.a.Body,{children:Object(B.jsx)("div",{className:"col-md-12 col-md-12",children:Object(B.jsx)("div",{className:"card",children:Object(B.jsx)("div",{className:"card-body",children:Object(B.jsx)("div",{className:"basic-form",children:Object(B.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(B.jsxs)("div",{className:"row",children:[Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:" Name"}),Object(B.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",value:h.name,onChange:v}),""!==s.name?Object(B.jsx)("span",{className:t.error,children:s.name}):""]}),Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:"Url"}),Object(B.jsx)("input",{type:"text",name:"url",id:"url",className:"form-control",value:h.url,onChange:v,required:!0}),""!==s.url?Object(B.jsx)("span",{className:t.error,children:s.url}):""]}),Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:"Status"}),Object(B.jsxs)("select",{name:"active",id:"active",className:"form-control wide",onChange:v,children:[Object(B.jsx)("option",{value:"",children:" Select"}),Object(B.jsx)("option",{value:"true",children:" Active"}),Object(B.jsx)("option",{value:"false",children:"Not Active "})]}),""!==s.active?Object(B.jsx)("span",{className:t.error,children:s.active}):""]})]}),Object(B.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",className:t.button,startIcon:Object(B.jsx)(p.a,{}),disabled:i,onClick:function(t){t.preventDefault(),function(){var e=Object(b.a)({},s);return e.url=h.url?"":"This field is required",e.name=h.name?"":"This field is required",e.active=h.active?"":"This field is required",u(Object(b.a)({},e)),Object.values(e).every((function(e){return""==e}))}()&&f.a.post("".concat(z,"biometrics/device"),h,{headers:{Authorization:"Bearer ".concat(k)}}).then((function(t){e.loadBiometricDevices(),l.b.success("Biometric Device Added Successfully!"),e.togglestatus()})).catch((function(e){l.b.error("Something went wrong. Please try again...")}))},children:Object(B.jsxs)("span",{style:{textTransform:"capitalize"},children:["Save  ",i?Object(B.jsx)(L.a,{}):""]})}),Object(B.jsx)(w.a,{variant:"contained",color:"default",onClick:function(){e.togglestatus()},startIcon:Object(B.jsx)(y.a,{}),children:Object(B.jsx)("span",{style:{textTransform:"capitalize"},children:"Cancel"})})]})})})})})})]})})},H=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},error:{color:"#f85032",fontSize:"12.8px"}}})),I=function(e){var t=H(),a=Object(r.useState)(!1),c=Object(d.a)(a,2),i=c[0],n=c[1],o=e.datasample?e.datasample:{},l=Object(r.useState)({}),s=Object(d.a)(l,2),u=s[0],j=s[1],O=Object(r.useState)({type:"",name:"",url:""}),f=Object(d.a)(O,2),h=f[0],m=f[1],v=function(e){m(Object(b.a)(Object(b.a)({},h),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(B.jsx)("div",{children:Object(B.jsxs)(T.a,{show:e.modalstatus,toggle:e.togglestatus,className:e.className,size:"md",children:[Object(B.jsxs)(T.a.Header,{toggle:e.togglestatus,children:[Object(B.jsx)(T.a.Title,{children:"Edit Biometric Device"}),Object(B.jsx)(R.a,{variant:"",className:"btn-close",onClick:e.togglestatus})]}),Object(B.jsx)(T.a.Body,{children:Object(B.jsx)("div",{className:"col-md-12 col-md-12",children:Object(B.jsx)("div",{className:"card",children:Object(B.jsx)("div",{className:"card-body",children:Object(B.jsx)("div",{className:"basic-form",children:Object(B.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(B.jsxs)("div",{className:"row",children:[Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:" Name"}),Object(B.jsx)("input",{type:"text",name:"name",id:"name",className:"form-control",value:h.name,onChange:v}),""!==u.name?Object(B.jsx)("span",{className:t.error,children:u.name}):""]}),Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:"Url"}),Object(B.jsx)("input",{type:"text",name:"url",id:"url",className:"form-control",value:h.url,onChange:v,required:!0}),""!==u.url?Object(B.jsx)("span",{className:t.error,children:u.url}):""]}),Object(B.jsxs)("div",{className:"form-group col-md-12",children:[Object(B.jsx)("label",{children:"Device type"}),Object(B.jsx)("input",{type:"text",name:"type",id:"type",className:"form-control",value:h.type,onChange:v}),""!==u.type?Object(B.jsx)("span",{className:t.error,children:u.type}):""]})]}),Object(B.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",className:t.button,startIcon:Object(B.jsx)(p.a,{}),disabled:i,onClick:function(t){if(t.preventDefault(),function(){var e=Object(b.a)({},u);return e.url=h.url?"":"This field is required",e.name=h.name?"":"This field is required",e.type=h.type?"":"This field is required",j(Object(b.a)({},e)),Object.values(e).every((function(e){return""==e}))}()){h.moduleId=o.id,n(!0);e.addMenu(h,(function(){e.loadModuleMenus(),e.togglestatus(),n(!1)}),(function(){n(!1)}))}else;},children:Object(B.jsxs)("span",{style:{textTransform:"capitalize"},children:["Update  ",i?Object(B.jsx)(L.a,{}):""]})}),Object(B.jsx)(w.a,{variant:"contained",color:"default",onClick:function(){e.togglestatus()},startIcon:Object(B.jsx)(y.a,{}),children:Object(B.jsx)("span",{style:{textTransform:"capitalize"},children:"Cancel"})})]})})})})})})]})})},M=(a(557),a(558),a(559),a(611)),q=a(306),E=(a(560),a(430)),W=a.n(E),U=a(440),V=a.n(U),J=a(431),Y=a.n(J),G=a(438),K=a.n(G),Q=a(303),X=a.n(Q),Z=a(302),$=a.n(Z),ee=a(432),te=a.n(ee),ae=a(433),re=a.n(ae),ce=a(435),ie=a.n(ce),ne=a(436),oe=a.n(ne),le=a(437),se=a.n(le),de=a(441),be=a.n(de),ue=a(434),je=a.n(ue),Oe=a(439),fe=a.n(Oe),he=a(442),me=a.n(he),ve={Add:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(W.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(Y.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(B.jsx)($.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(te.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(X.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(re.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(je.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(ie.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(oe.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(se.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(X.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(K.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(B.jsx)($.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(fe.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(V.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(be.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(B.jsx)(me.a,Object(b.a)(Object(b.a)({},e),{},{ref:t}))}))},xe=Object(v.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"}}})),pe=function(e){Object(o.f)();var t=Object(r.useState)([]),a=Object(d.a)(t,2),c=a[0],i=a[1],n=Object(r.useState)([]),u=Object(d.a)(n,2),O=u[0],h=u[1],v=xe(),x=Object(r.useState)(!1),g=Object(d.a)(x,2),N=g[0],P=g[1],L=Object(r.useState)(!1),D=Object(d.a)(L,2),H=D[0],E=D[1],W=Object(r.useState)(!0),U=Object(d.a)(W,2),V=U[0],J=U[1],Y=Object(r.useState)(!1),G=Object(d.a)(Y,2),K=G[0],Q=G[1];function X(){return Z.apply(this,arguments)}function Z(){return(Z=Object(s.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("".concat(z,"biometrics/devices"),{headers:{Authorization:"Bearer ".concat(k)}}).then((function(e){J(!1),h(e.data)})).catch((function(e){J(!1)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){X()}),[]);return Object(B.jsxs)("div",{children:[Object(B.jsx)(l.a,{autoClose:3e3,hideProgressBar:!0}),Object(B.jsx)(_,{activeMenu:"Biometric List",motherMenu:"Biometric Setup "}),Object(B.jsx)(A.a,{className:v.cardBottom,children:Object(B.jsxs)(C.a,{children:[Object(B.jsxs)(w.a,{variant:"contained",color:"primary",className:" float-end ms-2",startIcon:Object(B.jsx)(S.a,{size:"10"}),onClick:function(){P(!N)},children:[Object(B.jsx)("span",{style:{textTransform:"capitalize"},children:"New "}),"\xa0\xa0",Object(B.jsx)("span",{style:{textTransform:"lowercase"},children:" Device"})]}),Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),Object(B.jsx)(m.a,{icons:ve,title:"Biometric List",columns:[{title:"Name",field:"name"},{title:"URL",field:"url",filtering:!1},{title:"Status",field:"status",filtering:!1},{title:"Actions",field:"actions",filtering:!1}],isLoading:V,data:O.map((function(e){return{name:e.name,url:e.url,type:e.type,status:!0===e.active?"Active":"Not Active",actions:Object(B.jsxs)("div",{children:[Object(B.jsxs)(M.a,{as:"a",color:"blue",className:"ms-1",size:"mini",onClick:function(){return function(e){i(Object(b.a)(Object(b.a)({},c),e)),E(!H)}(e)},children:[Object(B.jsx)(q.a,{name:"pencil"})," Edit"]}),Object(B.jsxs)(M.a,{as:"a",color:"red",onClick:function(){return e.id,e.name,void Q(!K)},size:"mini",children:[Object(B.jsx)(q.a,{name:"trash"})," Delete"]})]})}})),options:{headerStyle:{color:"#000"},searchFieldStyle:{width:"150%",margingLeft:"150px"},filtering:!1,exportButton:!1,searchFieldAlignment:"left"}})]})}),Object(B.jsxs)(T.a,{show:K,children:[Object(B.jsxs)(T.a.Header,{children:[Object(B.jsx)(T.a.Title,{children:"Delete Menu"}),Object(B.jsx)(R.a,{variant:"",className:"btn-close",onClick:function(){return Q(!1)}})]}),Object(B.jsxs)(T.a.Body,{children:[Object(B.jsxs)("p",{children:["Are you sure you want to delete Device   ",Object(B.jsx)("b",{children:""})]}),Object(B.jsx)("br",{}),Object(B.jsx)(w.a,{type:"submit",variant:"contained",color:"primary",className:"ms-2",startIcon:Object(B.jsx)(p.a,{}),onClick:function(){},children:"Yes"}),Object(B.jsx)(w.a,{variant:"contained",className:v.button,startIcon:Object(B.jsx)(y.a,{}),onClick:function(){return Q(!1)},children:Object(B.jsx)("span",{style:{textTransform:"capitalize"},children:"Cancel"})})]})]}),Object(B.jsx)(F,{modalstatus:N,togglestatus:function(){return P(!N)},loadBiometricDevices:X}),Object(B.jsx)(I,{modalstatus:H,togglestatus:function(){return E(!H)},datasample:c})]})};function ge(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(l.a,{}),Object(B.jsx)(o.c,{children:Object(B.jsx)(o.a,{path:"/",children:Object(B.jsx)(pe,{})})})]})}var ye=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,769)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),r(e),c(e),i(e),n(e)}))},we=a(444),Se="ltr",Ne=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:Se},{typography:"poppins",version:"light",layout:"vertical",primary:"color_5",headerBg:"color_5",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:Se},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_11",headerBg:"color_1",sidebarBg:"color_11",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_11",direction:Se},{typography:"poppins",version:"dark",layout:"vertical",headerBg:"color_3",navheaderBg:"color_3",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Se},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_15",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:Se},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarBg:"color_9",sidebarStyle:"modern",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_9",direction:Se}],Be=Object(r.createContext)(),_e=function(e){var t=Object(r.useState)({value:"full",label:"Full"}),a=Object(d.a)(t,2),c=a[0],i=a[1],n=Object(r.useState)({value:"fixed",label:"Fixed"}),o=Object(d.a)(n,2),l=o[0],s=o[1],b=Object(r.useState)({value:"fixed",label:"Fixed"}),u=Object(d.a)(b,2),j=u[0],O=u[1],f=Object(r.useState)({value:"vertical",label:"Vertical"}),h=Object(d.a)(f,2),m=h[0],v=h[1],x=Object(r.useState)({value:"ltr",label:"LTR"}),p=Object(d.a)(x,2),g=p[0],y=p[1],w=Object(r.useState)("color_1"),S=Object(d.a)(w,2),N=S[0],_=S[1],A=Object(r.useState)("color_1"),C=Object(d.a)(A,2),P=C[0],L=C[1],T=Object(r.useState)("color_1"),R=Object(d.a)(T,2),k=R[0],z=R[1],D=Object(r.useState)("color_1"),F=Object(d.a)(D,2),H=F[0],I=F[1],M=Object(r.useState)(!1),q=Object(d.a)(M,2),E=q[0],W=q[1],U=Object(r.useState)(!1),V=Object(d.a)(U,2),J=V[0],Y=V[1],G=Object(r.useState)({value:"light",label:"Light"}),K=Object(d.a)(G,2),Q=K[0],X=K[1],Z=Object(r.useState)({value:"wide-boxed",label:"Wide Boxed"}),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=document.querySelector("body"),re=Object(r.useState)(0),ce=Object(d.a)(re,2),ie=ce[0],ne=ce[1],oe=Object(r.useState)(0),le=Object(d.a)(oe,2),se=le[0],de=le[1],be=function(e){_(e),ae.setAttribute("data-primary",e)},ue=function(e){L(e),ae.setAttribute("data-nav-headerbg",e)},je=function(e){z(e),ae.setAttribute("data-headerbg",e)},Oe=function(e){I(e),ae.setAttribute("data-sibebarbg",e)},fe=function(e){s(e),ae.setAttribute("data-sidebar-position",e.value)},he=function(e){y(e),ae.setAttribute("direction",e.value);var t=document.querySelector("html");t.setAttribute("dir",e.value),t.className=e.value},me=function(e){"horizontal"===e.value&&"overlay"===c.value?(v(e),ae.setAttribute("data-layout",e.value),i({value:"full",label:"Full"}),ae.setAttribute("data-sidebar-style","full")):(v(e),ae.setAttribute("data-layout",e.value))},ve=function(e){"horizontal"===m.value&&"overlay"===e.value?alert("Sorry! Overlay is not possible in Horizontal layout."):(i(e),W("icon-hover"===e.value?"_i-hover":""),ae.setAttribute("data-sidebar-style",e.value))},xe=function(e){O(e),ae.setAttribute("data-header-position",e.value)},pe=function(e){ae.setAttribute("data-theme-version",e.value),X(e)},ge=function(e){te(e),ae.setAttribute("data-container",e.value),"boxed"===e.value&&ve({value:"overlay",label:"Overlay"})};return Object(r.useEffect)((function(){var e=document.querySelector("body");e.setAttribute("data-typography","poppins"),e.setAttribute("data-theme-version","light"),e.setAttribute("data-layout","vertical"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-nav-headerbg","color_1"),e.setAttribute("data-headerbg","color_1"),e.setAttribute("data-sidebar-style","overlay"),e.setAttribute("data-sibebarbg","color_1"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-sidebar-position","fixed"),e.setAttribute("data-header-position","fixed"),e.setAttribute("data-container","wide"),e.setAttribute("direction","ltr");var t=function(){ne(window.innerWidth),de(window.innerHeight),window.innerWidth>=768&&window.innerWidth<1024?e.setAttribute("data-sidebar-style","mini"):window.innerWidth<=768?e.setAttribute("data-sidebar-style","overlay"):e.setAttribute("data-sidebar-style","full")};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(B.jsx)(Be.Provider,{value:{body:ae,sideBarOption:[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],layoutOption:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],backgroundOption:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],sidebarposition:l,headerPositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],containerPosition:[{value:"wide-boxed",label:"Wide Boxed"},{value:"boxed",label:"Boxed"},{value:"wide",label:"Wide"}],directionPosition:[{value:"ltr",label:"LTR"},{value:"rtl",label:"RTL"}],fontFamily:[{value:"poppins",label:"Poppins"},{value:"roboto",label:"Roboto"},{value:"cairo",label:"Cairo"},{value:"opensans",label:"Open Sans"},{value:"HelveticaNeue",label:"HelveticaNeue"}],primaryColor:N,navigationHader:P,windowWidth:ie,windowHeight:se,changePrimaryColor:be,changeNavigationHader:ue,changeSideBarStyle:ve,sideBarStyle:c,changeSideBarPostion:fe,sidebarpositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],changeHeaderPostion:xe,headerposition:j,changeSideBarLayout:me,sidebarLayout:m,changeDirectionLayout:he,changeContainerPosition:ge,direction:g,colors:["color_1","color_2","color_3","color_4","color_5","color_6","color_7","color_8","color_9","color_10","color_11","color_12","color_13","color_14","color_15"],haderColor:k,chnageHaderColor:je,chnageSidebarColor:Oe,sidebarColor:H,iconHover:E,menuToggle:J,openMenuToggle:function(){"overly"===c.value?Y(!0):Y(!1)},changeBackground:pe,background:Q,containerPosition_:ee,setDemoTheme:function(e,t){var a={},r=Ne[e];ae.setAttribute("data-typography",r.typography),a.value=r.version,pe(a),a.value=r.layout,me(a),be(r.primary),ue(r.navheaderBg),je(r.headerBg),a.value=r.sidebarStyle,ve(a),Oe(r.sidebarBg),a.value=r.sidebarPosition,fe(a),a.value=r.headerPosition,xe(a),a.value=r.containerLayout,ge(a),a.value=t,he(a)}},children:e.children})};n.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(we.a,{children:Object(B.jsx)(N.a,{basename:"/",children:Object(B.jsx)(_e,{children:Object(B.jsx)(ge,{})})})})}),document.getElementById("root")),ye()}},[[563,1,2]]]);
//# sourceMappingURL=main.68823a20.chunk.js.map