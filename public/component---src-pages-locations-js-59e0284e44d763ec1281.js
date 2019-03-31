(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(35),i=t.n(o),l=t(203),c=t(201),u=t(202),d=t(2),s=t(1),m={Color:{Background:"LightSkyBlue",Primary:d.b.Color.Nightsky,Secondary:d.b.Color.White,Tertiary:"LightSkyBlue"}},f=function(){return r.a.createElement(c.a,null)},C=function(){return r.a.createElement(u.a,null)};e.default=function(n){n.data;return r.a.createElement(l.a,{BgColor:m.Color.Background,PrimaryColor:m.Color.Primary,SecondaryColor:m.Color.Secondary,TertiaryColor:m.Color.Tertiary},r.a.createElement(i.a,{query:{minWidth:s.a.Media.Width.Md},render:function(){return r.a.createElement(f,null)}}),r.a.createElement(i.a,{query:{maxWidth:s.a.Media.Width.Md},render:function(){return r.a.createElement(C,null)}}))}},196:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(10),i=t(4),l=t.n(i),c=t(3),u=t.n(c),d=t(2);function s(){var n=l()(["\n  position: absolute;\n  right: ",";\n  bottom: ",";\n  font-size: ",";\n  transform: scale(1.000000001);\n  transition: all ","\n    ",";\n  color: ",";\n"]);return s=function(){return n},n}function m(){var n=l()(["\n  font-size: ",";\n  line-height: 1.2;\n  font-weight: bold;\n"]);return m=function(){return n},n}function f(){var n=l()(["\n  font-size: ",";\n  line-height: 1.2;\n"]);return f=function(){return n},n}function C(){var n=l()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);\n  position: relative;\n  overflow: hidden;\n  transition: all ","\n    ",";\n  cursor: pointer;\n  color: ",";\n\n  /* Background Images */\n\n  ",";\n\n  /* Tint */\n\n  ",";\n\n  /* Links */\n  a {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n    color: white;\n    transform: scale(1.000000001);\n    position: relative;\n    padding: ",";\n    color: ",";\n    text-decoration: none;\n    transition: all ","\n      ",";\n  }\n\n  /* The Carat Icon */\n  svg {\n    position: absolute;\n    right: ",";\n    top: ",";\n    transform: translateX(0%);\n    transition: all ","\n      ",";\n  }\n\n  /* Hover Styles */\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0 20px 30px 0 rgba(6, 10, 92, 0.21);\n\n    a {\n      text-decoration: none;\n      color: ",";\n    }\n\n    /* The Carat Icon */\n    svg {\n      transform: translateX(50%);\n      fill: ",";\n    }\n\n    /* The Widget Icon */\n    .fas {\n      color: ",";\n      transform: scale(1.3);\n    }\n\n    /* Tint */\n    ",";\n  }\n"]);return C=function(){return n},n}function g(){var n=l()(["\n  padding-top: ",";\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return g=function(){return n},n}var h=u.a.div(g(),d.b.Base.Size.Sm);h.Inner=u.a.div(C(),function(n){return n.BgColor?n.BgColor:d.b.Color.White},d.a.Radius,d.b.Base.Transition.Duration,d.b.Base.Transition.CssEase,function(n){return n.TextColor?n.TextColor:d.b.Color.Black},function(n){if(n.BgImage)return"\n        background-image: url("+n.BgImage+");\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        "},function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          content: '';\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          background-color:"+n.TintColor+";\n          opacity:"+n.TintOpacity+";\n          transition: all "+d.b.Base.Transition.Duration+"\n      "+d.b.Base.Transition.CssEase+";\n        }\n    "},d.a.ViewWidthPadding,function(n){return n.TextColor?n.TextColor:d.b.Color.Black},d.b.Base.Transition.Duration,d.b.Base.Transition.CssEase,d.a.ViewWidthPadding,d.a.ViewWidthPadding,d.b.Base.Transition.Duration,d.b.Base.Transition.CssEase,d.b.Color.Black,d.b.Color.White,d.b.Color.White,d.b.Color.White,d.b.Color.White,function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          opacity: 1\n        }\n    "}),h.Subhead=u.a.div(f(),d.a.ViewWidthFontSize),h.Headline=u.a.div(m(),d.a.ViewWidthFontSize),h.Icon=u.a.i(s(),d.a.ViewWidthPadding,d.a.ViewWidthPadding,d.a.IconSize,d.b.Base.Transition.Duration,d.b.Base.Transition.CssEase,function(n){return n.Color?n.Color:d.b.Color.Black});var b=h,v=t(198),p=function(n){var e=n.BgColor,t=n.BgImage,a=n.TextColor,i=n.TintColor,l=n.TintOpacity,c=n.Destination,u=n.Subhead,d=n.Headline,s=n.IconColor,m=n.IconName;return r.a.createElement(b.Inner,{BgColor:e,BgImage:t,TextColor:a,TintColor:i,TintOpacity:l},r.a.createElement(o.Link,{to:c},r.a.createElement(b.Subhead,null,u),r.a.createElement(b.Headline,null,d),r.a.createElement(v.a,{className:"svg-carat",Name:"Carat",Color:s}),r.a.createElement(b.Icon,{className:"fas fa-"+m,Color:s})))};e.a=function(n){var e=n.WidgetContent;return r.a.createElement(b,{className:"widget"},r.a.createElement(p,{BgColor:e[1].BgColor,BgImage:e[1].BgImage,TextColor:e[1].TextColor,TintColor:e[1].TintColor,TintOpacity:e[1].TintOpacity,Destination:e[1].Destination,Subhead:e[1].Subhead,Headline:e[1].Headline,IconName:e[1].IconName,IconColor:e[1].IconColor}))}},198:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(4),i=t.n(o),l=t(3),c=t.n(l),u=t(2);function d(){var n=i()(["\n  font-size: ",";\n  line-height: 0;\n  height: ",";\n  width: ",";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"]);return d=function(){return n},n}var s=c.a.span(d(),u.a.IconSize,u.a.IconSize,u.a.IconSize,function(n){return n.Color?n.Color:u.b.Color.Black},function(n){return n.Color?n.Color:u.b.Color.Black}),m=function(){return r.a.createElement("svg",{width:"13px",height:"22px",viewBox:"0 0 13 22"},r.a.createElement("g",{fillRule:"evenodd"},r.a.createElement("g",{transform:"translate(-488.000000, -591.000000)",fillRule:"nonzero"},r.a.createElement("polygon",{points:"488.428658 592.571342 489.571342 591.428658 500.142685 602 489.571342 612.571342 488.428658 611.428658 497.857315 602"}))))},f=function(){r.a.createElement("i",{className:"fas fa-exclamation-circle"})};e.a=function(n){switch(n.Name){case"Carat":return r.a.createElement(s,{Color:n.Color},r.a.createElement(m,null));default:return r.a.createElement(s,{Color:n.Color},r.a.createElement(f,null))}}},201:function(n,e,t){"use strict";t(34);var a=t(50),r=t.n(a),o=t(6),i=t.n(o),l=t(4),c=t.n(l),u=t(0),d=t.n(u),s=t(199),m=t.n(s),f=t(197),C=t(49),g=t.n(C),h=t(2),b=t(3),v=t.n(b),p=t(1),E=t(14);function S(){var n=c()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  .widget {\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n\n  ","\n"]);return S=function(){return n},n}function I(){var n=c()(["\n  padding: "," "," "," 0;\n  height: calc(100vh - ("," * 2 + ","));\n  display: flex;\n  flex-direction: column;\n  flex: ",";\n  width: ",";\n"]);return I=function(){return n},n}function B(){var n=c()(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  padding-bottom: ",";\n  height: calc(100vh - ("," * 2 + ","));\n"]);return B=function(){return n},n}function T(){var n=c()(["\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n  height: calc(100vh - ("," * 2 + ","));\n"]);return T=function(){return n},n}function w(){var n=c()(["\n  width: 100%;\n  padding: 0;\n\n  /* Padding on first slide */\n  .slick-slide {\n    padding: 0;\n    overflow: visible;\n    div {\n      outline: 0;\n      &:focus {\n        outline: 0;\n      }\n      .col {\n        &:first-child {\n          padding-left: ",";\n        }\n      }\n    }\n    &:first-child {\n      padding: 0 0 0 ",";\n      .col {\n        &:first-child {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n\n  .widget {\n    ",";\n  }\n"]);return w=function(){return n},n}function x(){var n=c()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: ",";\n  overflow: visible;\n\n  .slick-list {\n    overflow: visible;\n  }\n"]);return x=function(){return n},n}var y=v.a.div(x(),h.a.Footer.Size);y.Inner=v.a.div(w(),h.b.Base.Size.Sm,h.b.Base.Size.Sm,E.a),y.Slide=v.a.div(T(),h.a.Nav.Size,h.a.Footer.Size),y.Slide.Inner=v.a.div(B(),h.b.Base.Size.Sm,h.a.Nav.Size,h.a.Footer.Size),y.Column=v.a.div(I(),h.b.Base.Size.Sm,h.b.Base.Size.Sm,h.b.Base.Size.Sm,h.a.Nav.Size,h.a.Footer.Size,function(n){return n.Divider?"unset":"1"},function(n){return n.ColWidth?n.ColWidth:n.Divider?h.b.Base.Size.Md:"auto"}),y.Column.Inner=v.a.div(S(),function(n){if(n.Divider)return"\n        width: "+h.b.Base.Size.Md+";\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: calc(50% - "+p.a.Size.Sm/2+"px);\n          width: 1px;\n          opacity: .05;\n          background-color: { Theme.Color.Indigo };\n        }\n    "});var W=y,k=(t(200),t(196));function z(){var n=c()(["\n  .wrapper {\n    overflow: hidden;\n  }\n"]);return z=function(){return n},n}var N=[{BgColor:h.b.Color.Tahoe,BgImage:"https://source.unsplash.com/1600x1200/?cannabis",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.White,IconColor:h.b.Color.White,IconName:"rocket",Destination:"/subpage",TintColor:"#000000",TintOpacity:".4"},{BgColor:h.b.Color.Dank,BgImage:"none",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.Black,IconColor:h.b.Color.Black,IconName:"rocket",Destination:"/subpage",TintColor:"",TintOpacity:""},{BgColor:h.b.Color.Nightsky,BgImage:"none",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.White,IconColor:h.b.Color.White,IconName:"rocket",Destination:"/subpage",TintColor:"",TintOpacity:""}],D=Object(b.createGlobalStyle)(z()),H=(g()(k.a)({enter:{opacity:1},exit:{opacity:0}}),function(n){function e(e){var t;return(t=n.call(this,e)||this).handleWheel=t.handleWheel.bind(r()(t)),t}i()(e,n);var t=e.prototype;return t.handleWheel=function(n){n.preventDefault(),n.deltaY<0?this.slider.slickPrev():this.slider.slickNext()},t.render=function(){var n=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(D,null),d.a.createElement(f.Helmet,null,d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick.min.css"}),d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick-theme.min.css"})),d.a.createElement("div",{onWheel:function(e){return n.handleWheel(e)}},d.a.createElement(m.a,Object.assign({ref:function(e){return n.slider=e}},{dots:!1,speed:1500,arrows:!1,slidesToShow:1.05,infinite:!1}),this.props.children)))},e}(d.a.Component)),O=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(W.Column,{className:"col"},d.a.createElement(W.Column.Inner,{className:"col-inner"},d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}))),d.a.createElement(W.Column,{className:"col"},d.a.createElement(W.Column.Inner,null,d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}))),d.a.createElement(W.Column,{Divider:!0,className:"divider"},d.a.createElement(W.Column.Inner,{Divider:!0})),d.a.createElement(W.Column,{className:"col"},d.a.createElement(W.Column.Inner,null,d.a.createElement(k.a,{WidgetContent:N}))),d.a.createElement(W.Column,{className:"col"},d.a.createElement(W.Column.Inner,null,d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}))),d.a.createElement(W.Column,{Divider:!0,className:"divider"},d.a.createElement(W.Column.Inner,{Divider:!0})),d.a.createElement(W.Column,{className:"col"},d.a.createElement(W.Column.Inner,null,d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}),d.a.createElement(k.a,{WidgetContent:N}))))};e.a=function(n){n.children;return d.a.createElement(W,null,d.a.createElement(W.Inner,null,d.a.createElement(H,null,d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))),d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))),d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))),d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))),d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))),d.a.createElement(W.Slide,null,d.a.createElement(W.Slide.Inner,null,d.a.createElement(O,null))))))}},202:function(n,e,t){"use strict";var a=t(4),r=t.n(a),o=t(0),i=t.n(o),l=(t(199),t(197),t(49),t(2),t(3)),c=t.n(l),u=(t(1),t(14));function d(){var n=r()(["\n  width: 100%;\n  padding: 0;\n\n  .widget {\n    ",";\n  }\n"]);return d=function(){return n},n}function s(){var n=r()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n"]);return s=function(){return n},n}var m=c.a.div(s());m.Inner=c.a.div(d(),u.a);var f=m;t(200),t(196);function C(){var n=r()(["\n  .wrapper {\n    overflow-y: auto;\n  }\n"]);return C=function(){return n},n}Object(l.createGlobalStyle)(C()),e.a=function(n){n.children;return i.a.createElement(f,null,i.a.createElement(f.Inner,null,"Vertical Content"))}}}]);
//# sourceMappingURL=component---src-pages-locations-js-59e0284e44d763ec1281.js.map