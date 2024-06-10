import{b as J}from"./chunk-IGXYSP7F.js";import{$ as l,Da as f,Ea as k,Fa as w,Hb as G,I as y,N as u,O as h,Oa as _,P as d,Pa as e,Q as p,Ua as C,Va as L,Wa as T,Wb as M,Xb as D,Ya as V,Za as s,ac as B,bc as F,cc as z,dc as H,dd as P,ec as W,ed as q,la as E,na as o,ta as A,tc as I,uc as R,xa as t,xc as O,ya as i,za as n}from"./chunk-76GNVGDD.js";import"./chunk-ZG7TN3SX.js";var x=()=>[];function j(r,m){if(r&1){let g=f();t(0,"c-alert",52),T("visibleChange",function(a){u(g);let c=w();return L(c.visible[0],a)||(c.visible[0]=a),h(a)}),t(1,"strong"),e(2,"Go right ahead"),i(),e(3," and click that dismiss over there on the right. "),i()}if(r&2){let g=w();C("visible",g.visible[0])}}function K(r,m){if(r&1){let g=f();t(0,"button",53),k("click",function(){u(g);let a=w(2);return h(a.visible[1]=!1)}),i()}}function N(r,m){r&1&&E(0,K,1,0,"ng-template",49)}var ie=(()=>{let m=class m{constructor(){this.visible=[!0,!0],this.dismissible=!0}ngOnInit(){}onAlertVisibleChange(S=this.visible){this.visible[1]=S}onResetDismiss(){this.visible=[!0,!0]}onToggleDismiss(){this.dismissible=!this.dismissible}};m.\u0275fac=function(a){return new(a||m)},m.\u0275cmp=y({type:m,selectors:[["app-alerts"]],standalone:!0,features:[V],decls:223,vars:20,consts:[["alertWithButtonCloseTemplate","cAlert"],["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","https://coreui.io/angular/docs/4.0/components/alert#dismissing"],["href","components/alert"],["color","primary"],["color","secondary"],["color","success"],["color","danger"],["color","warning"],["color","info"],["color","light"],["color","dark"],["color","primary","variant","solid"],["color","secondary","variant","solid"],["color","success","variant","solid"],["color","danger","variant","solid"],["color","warning","variant","solid"],["color","info","variant","solid"],["color","light","variant","solid"],["color","dark","variant","solid"],["href","components/alert#link-color"],["cAlertLink","",3,"routerLink"],["href","components/alert#additional-content"],["cAlertHeading",""],[1,"mb-0"],["color","dark",1,"d-flex","align-items-center"],["cIcon","","name","cilCheck","size","xl",1,"flex-shrink-0","me-2"],["color","secondary",1,"d-flex","align-items-center"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","currentColor","viewBox","0 0 16 16","role","img","aria-label","Warning:",1,"bi","bi-exclamation-triangle-fill","flex-shrink-0","me-2"],["d","M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"],["xmlns","http://www.w3.org/2000/svg",1,"d-none"],["id","check-circle-fill","fill","currentColor","viewBox","0 0 16 16"],["d","M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"],["id","info-fill","fill","currentColor","viewBox","0 0 16 16"],["d","M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"],["id","exclamation-triangle-fill","fill","currentColor","viewBox","0 0 16 16"],["color","primary",1,"d-flex","align-items-center"],["width","24","height","24","role","img","aria-label","Info:",1,"bi","flex-shrink-0","me-2"],[0,"xlink","href","#info-fill"],["color","success",1,"d-flex","align-items-center"],[0,"xlink","href","#check-circle-fill"],["color","warning",1,"d-flex","align-items-center"],[0,"xlink","href","#exclamation-triangle-fill"],["color","danger",1,"d-flex","align-items-center"],["href","components/alert#dismissing"],["dismissible","","color","warning","fade","",3,"visible"],["color","dark","fade","","variant","solid",3,"visibleChange","dismissible","visible"],["cTemplateId","alertButtonCloseTemplate"],["cButton","","color","primary",1,"'me-1'",3,"click"],["cButton","","color","secondary",3,"click"],["dismissible","","color","warning","fade","",3,"visibleChange","visible"],["cButtonClose","","white","",3,"click"]],template:function(a,c){if(a&1){let v=f();t(0,"c-row")(1,"c-col",1)(2,"c-card",2)(3,"c-card-header")(4,"strong"),e(5,"Angular Alert"),i()(),t(6,"c-card-body")(7,"p",3),e(8," Angular Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the "),t(9,"strong"),e(10,"required"),i(),e(11," contextual "),t(12,"code"),e(13,"color"),i(),e(14," props (e.g., "),t(15,"code"),e(16,"primary"),i(),e(17,"). For inline dismissal, use the "),t(18,"a",4),e(19," dismissing prop "),i(),e(20," . "),i(),t(21,"app-docs-example",5)(22,"c-alert",6),e(23,"A simple primary alert\u2014check it out!"),i(),t(24,"c-alert",7),e(25,"A simple secondary alert\u2014check it out!"),i(),t(26,"c-alert",8),e(27,"A simple success alert\u2014check it out!"),i(),t(28,"c-alert",9),e(29,"A simple danger alert\u2014check it out!"),i(),t(30,"c-alert",10),e(31,"A simple warning alert\u2014check it out!"),i(),t(32,"c-alert",11),e(33,"A simple info alert\u2014check it out!"),i(),t(34,"c-alert",12),e(35,"A simple light alert\u2014check it out!"),i(),t(36,"c-alert",13),e(37,"A simple dark alert\u2014check it out!"),i()()()()(),t(38,"c-col",1)(39,"c-card",2)(40,"c-card-header"),e(41,`
        `),t(42,"strong"),e(43,"Angular Alert"),i(),e(44," "),t(45,"small"),e(46,"solid variant"),i(),e(47,`
      `),i(),t(48,"c-card-body")(49,"app-docs-example",5)(50,"c-alert",14),e(51,"A solid primary alert\u2014check it out!"),i(),t(52,"c-alert",15),e(53,"A solid secondary alert\u2014check it out!"),i(),t(54,"c-alert",16),e(55,"A solid success alert\u2014check it out!"),i(),t(56,"c-alert",17),e(57,"A solid danger alert\u2014check it out!"),i(),t(58,"c-alert",18),e(59,"A solid warning alert\u2014check it out!"),i(),t(60,"c-alert",19),e(61,"A solid info alert\u2014check it out!"),i(),t(62,"c-alert",20),e(63,"A solid light alert\u2014check it out!"),i(),t(64,"c-alert",21),e(65,"A solid dark alert\u2014check it out!"),i()()()()(),t(66,"c-col",1)(67,"c-card",2)(68,"c-card-header"),e(69,`
        `),t(70,"strong"),e(71,"Angular Alert"),i(),e(72," "),t(73,"small"),e(74,"Link color"),i(),e(75,`
      `),i(),t(76,"c-card-body")(77,"p",3),e(78," Use the "),t(79,"code"),e(80,"cAlertLink"),i(),e(81," directive to immediately give matching colored links inside any alert. "),i(),t(82,"app-docs-example",22)(83,"c-alert",6),e(84," A simple primary alert with "),t(85,"a",23),e(86,"an example link"),i(),e(87,". Give it a click if you like. "),i(),t(88,"c-alert",7),e(89," A simple secondary alert with "),t(90,"a",23),e(91,"an example link"),i(),e(92,". Give it a click if you like. "),i(),t(93,"c-alert",8),e(94," A simple success alert with "),t(95,"a",23),e(96,"an example link"),i(),e(97,". Give it a click if you like. "),i(),t(98,"c-alert",9),e(99," A simple danger alert with "),t(100,"a",23),e(101,"an example link"),i(),e(102,". Give it a click if you like. "),i(),t(103,"c-alert",10),e(104," A simple warning alert with "),t(105,"a",23),e(106,"an example link"),i(),e(107,". Give it a click if you like. "),i(),t(108,"c-alert",11),e(109," A simple info alert with "),t(110,"a",23),e(111,"an example link"),i(),e(112,". Give it a click if you like. "),i(),t(113,"c-alert",12),e(114," A simple light alert with "),t(115,"a",23),e(116,"an example link"),i(),e(117,". Give it a click if you like. "),i(),t(118,"c-alert",13),e(119," A simple dark alert with "),t(120,"a",23),e(121,"an example link"),i(),e(122,". Give it a click if you like. "),i()()()()(),t(123,"c-col",1)(124,"c-card",2)(125,"c-card-header"),e(126,`
        `),t(127,"strong"),e(128,"Angular Alert"),i(),e(129," "),t(130,"small"),e(131,"Additional content"),i(),e(132,`
      `),i(),t(133,"c-card-body")(134,"p",3),e(135," Alert can also incorporate supplementary components & elements like heading, paragraph, and divider. "),i(),t(136,"app-docs-example",24)(137,"c-alert",8)(138,"h4",25),e(139,"Well done!"),i(),t(140,"p"),e(141," Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. "),i(),n(142,"hr"),t(143,"p",26),e(144," Whenever you need to, be sure to use margin utilities to keep things nice and tidy. "),i()()()()()(),t(145,"c-col",1)(146,"c-card",2)(147,"c-card-header"),e(148,`
        `),t(149,"strong"),e(150,"Angular Alert"),i(),e(151," "),t(152,"small"),e(153,"Icons"),i(),e(154,`
      `),i(),t(155,"c-card-body")(156,"app-docs-example",5)(157,"c-alert",27),d(),n(158,"svg",28),p(),t(159,"div"),e(160,"An example alert with an icon"),i()(),t(161,"c-alert",29),d(),t(162,"svg",30),n(163,"path",31),i(),p(),t(164,"div"),e(165,"An example alert with an icon"),i()(),n(166,"hr"),d(),t(167,"svg",32)(168,"symbol",33),n(169,"path",34),i(),t(170,"symbol",35),n(171,"path",36),i(),t(172,"symbol",37),n(173,"path",31),i()(),p(),t(174,"c-alert",38),d(),t(175,"svg",39),n(176,"use",40),i(),p(),t(177,"div"),e(178,"An example primary alert with an icon"),i()(),t(179,"c-alert",41),d(),t(180,"svg",39),n(181,"use",42),i(),p(),t(182,"div"),e(183,"An example success alert with an icon"),i()(),t(184,"c-alert",43),d(),t(185,"svg",39),n(186,"use",44),i(),p(),t(187,"div"),e(188,"An example warning alert with an icon"),i()(),t(189,"c-alert",45),d(),t(190,"svg",39),n(191,"use",44),i(),p(),t(192,"div"),e(193,"An example danger alert with an icon"),i()()()()()(),t(194,"c-col",1)(195,"c-card",2)(196,"c-card-header"),e(197,`
        `),t(198,"strong"),e(199,"Angular Alert"),i(),e(200," "),t(201,"small"),e(202,"Dismissing"),i(),e(203,`
      `),i(),t(204,"c-card-body")(205,"p",3),e(206," Alerts can also be easily dismissed. Just add the "),t(207,"code"),e(208,"dismissible"),i(),e(209," prop. "),i(),t(210,"app-docs-example",46),E(211,j,4,1,"c-alert",47),t(212,"c-alert",48,0),k("visibleChange",function(U){return u(v),h(c.onAlertVisibleChange(U))}),E(214,N,1,0,null,49),t(215,"strong"),e(216,"Go right ahead"),i(),e(217," and click that dismiss over there on the right. "),i(),n(218,"hr"),t(219,"button",50),k("click",function(){return u(v),h(c.onToggleDismiss())}),e(220,"Toggle"),i(),t(221,"button",51),k("click",function(){return u(v),h(c.onResetDismiss())}),e(222,"Reset"),i()()()()()()}if(a&2){let v=_(213);l(85),o("routerLink",s(12,x)),l(5),o("routerLink",s(13,x)),l(5),o("routerLink",s(14,x)),l(5),o("routerLink",s(15,x)),l(5),o("routerLink",s(16,x)),l(5),o("routerLink",s(17,x)),l(5),o("routerLink",s(18,x)),l(5),o("routerLink",s(19,x)),l(91),A(211,c.visible[0]?211:-1),l(),o("dismissible",c.dismissible)("visible",c.visible[1]),l(2),A(214,v.dismissible?214:-1)}},dependencies:[q,P,I,O,R,J,W,F,G,B,M,D,H,z],styles:[`.dark-theme[_nghost-%COMP%]     .btn-close, .dark-theme   [_nghost-%COMP%]     .btn-close{--cui-btn-close-bg: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba(44, 56, 74, 0.95)'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>") !important}`]});let r=m;return r})();export{ie as AlertsComponent};
