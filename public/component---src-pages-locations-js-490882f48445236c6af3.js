(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(35),i=t.n(a),l=t(203),c=t(201),u=t(202),d=t(1),s=t(2),f={Color:{Background:"LightSkyBlue",Primary:d.b.Color.Nightsky,Secondary:d.b.Color.White,Tertiary:"LightSkyBlue"}},m=function(){return o.a.createElement(c.a,null)},h=function(){return o.a.createElement(u.a,null)};e.default=function(n){n.data;return o.a.createElement(l.a,{BgColor:f.Color.Background,PrimaryColor:f.Color.Primary,SecondaryColor:f.Color.Secondary,TertiaryColor:f.Color.Tertiary},o.a.createElement(i.a,{query:{minWidth:s.a.Media.Width.Md},render:function(){return o.a.createElement(m,null)}}),o.a.createElement(i.a,{query:{maxWidth:s.a.Media.Width.Md},render:function(){return o.a.createElement(h,null)}}))}},199:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(4),i=t.n(a),l=t(3),c=t.n(l),u=t(1);function d(){var n=i()(["\n  font-size: ",";\n  line-height: 0;\n  height: ",";\n  width: ",";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"]);return d=function(){return n},n}var s=c.a.span(d(),u.a.IconSize,u.a.IconSize,u.a.IconSize,function(n){return n.Color?n.Color:u.b.Color.Black},function(n){return n.Color?n.Color:u.b.Color.Black}),f=function(){return o.a.createElement("svg",{width:"13px",height:"22px",viewBox:"0 0 13 22"},o.a.createElement("g",{fillRule:"evenodd"},o.a.createElement("g",{transform:"translate(-488.000000, -591.000000)",fillRule:"nonzero"},o.a.createElement("polygon",{points:"488.428658 592.571342 489.571342 591.428658 500.142685 602 489.571342 612.571342 488.428658 611.428658 497.857315 602"}))))},m=function(){o.a.createElement("i",{className:"fas fa-exclamation-circle"})};e.a=function(n){switch(n.Name){case"Carat":return o.a.createElement(s,{Color:n.Color},o.a.createElement(f,null));default:return o.a.createElement(s,{Color:n.Color},o.a.createElement(m,null))}}},201:function(n,e,t){"use strict";t(34);var r=t(52),o=t.n(r),a=t(6),i=t.n(a),l=t(4),c=t.n(l),u=t(0),d=t.n(u),s=t(200),f=t.n(s),m=t(198),h=(t(51),t(1)),g=t(3),C=t.n(g),b=t(2),p=t(12);function v(){var n=c()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  .widget {\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n\n  ","\n"]);return v=function(){return n},n}function S(){var n=c()(["\n  padding: "," "," "," 0;\n  height: calc(100vh - ("," * 2 + ","));\n  display: flex;\n  flex-direction: column;\n  flex: ",";\n  width: ",";\n"]);return S=function(){return n},n}function B(){var n=c()(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  padding-bottom: ",";\n  height: calc(100vh - ("," * 2 + ","));\n"]);return B=function(){return n},n}function T(){var n=c()(["\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n  height: calc(100vh - ("," * 2 + ","));\n"]);return T=function(){return n},n}function y(){var n=c()(["\n  width: 100%;\n  padding: 0;\n\n  /* Padding on first slide */\n  .slick-slide {\n    padding: 0;\n    overflow: visible;\n    div {\n      outline: 0;\n      &:focus {\n        outline: 0;\n      }\n      .col {\n        &:first-child {\n          padding-left: ",";\n        }\n      }\n    }\n    &:first-child {\n      padding: 0 0 0 ",";\n      .col {\n        &:first-child {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n\n  .widget {\n    ",";\n  }\n"]);return y=function(){return n},n}function w(){var n=c()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: ",";\n  overflow: visible;\n\n  .slick-list {\n    overflow: visible;\n  }\n"]);return w=function(){return n},n}var x=C.a.div(w(),h.a.Footer.Size);x.Inner=C.a.div(y(),h.b.Base.Size.Sm,h.b.Base.Size.Sm,p.a),x.Slide=C.a.div(T(),h.a.Nav.Size,h.a.Footer.Size),x.Slide.Inner=C.a.div(B(),h.b.Base.Size.Sm,h.a.Nav.Size,h.a.Footer.Size),x.Column=C.a.div(S(),h.b.Base.Size.Sm,h.b.Base.Size.Sm,h.b.Base.Size.Sm,h.a.Nav.Size,h.a.Footer.Size,function(n){return n.Divider?"unset":"1"},function(n){return n.ColWidth?n.ColWidth:n.Divider?h.b.Base.Size.Md:"auto"}),x.Column.Inner=C.a.div(v(),function(n){if(n.Divider)return"\n        width: "+h.b.Base.Size.Md+";\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: calc(50% - "+b.a.Size.Sm/2+"px);\n          width: 1px;\n          opacity: .05;\n          background-color: { Theme.Color.Indigo };\n        }\n    "});var E=x,I=t(9);function k(){var n=c()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  border-radius: ",";\n  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);\n  position: relative;\n  overflow: hidden;\n  transition: all ","\n    ",";\n  cursor: pointer;\n"]);return k=function(){return n},n}function W(){var n=c()(["\n  padding-top: ",";\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return W=function(){return n},n}var z=C.a.div(W(),h.b.Base.Size.Sm);z.Inner=C.a.div(k(),h.a.Radius,h.b.Base.Transition.Duration,h.b.Base.Transition.CssEase);var N=z;function D(){var n=c()(["\n  position: absolute;\n  right: ",";\n  bottom: ",";\n  font-size: ",";\n  transform: scale(1.000000001);\n  transition: all ","\n    ",";\n  color: ",";\n"]);return D=function(){return n},n}function H(){var n=c()(["\n  font-size: ",";\n  line-height: 1.2;\n  font-weight: bold;\n"]);return H=function(){return n},n}function O(){var n=c()(["\n  font-size: ",";\n  line-height: 1.2;\n"]);return O=function(){return n},n}function P(){var n=c()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  position: relative;\n  overflow: hidden;\n  transition: all ","\n    ",";\n  cursor: pointer;\n  color: ",";\n\n  /* Background Images */\n\n  ",";\n\n  /* Tint */\n\n  ",";\n\n  /* Links */\n  a {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n    color: white;\n    transform: scale(1.000000001);\n    position: relative;\n    padding: ",";\n    color: ",";\n    text-decoration: none;\n    transition: all ","\n      ",";\n  }\n\n  /* The Carat Icon */\n  svg {\n    position: absolute;\n    right: ",";\n    top: ",";\n    transform: translateX(0%);\n    transition: all ","\n      ",";\n  }\n\n  /* Hover Styles */\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0 20px 30px 0 rgba(6, 10, 92, 0.21);\n\n    a {\n      text-decoration: none;\n      color: ",";\n    }\n\n    /* The Carat Icon */\n    svg {\n      transform: translateX(50%);\n      fill: ",";\n    }\n\n    /* The Widget Icon */\n    .fas {\n      color: ",";\n      transform: scale(1.3);\n    }\n\n    /* Tint */\n    ",";\n  }\n"]);return P=function(){return n},n}var F=C.a.div(P(),function(n){return n.BgColor?n.BgColor:h.b.Color.White},h.b.Base.Transition.Duration,h.b.Base.Transition.CssEase,function(n){return n.TextColor?n.TextColor:h.b.Color.Black},function(n){if(n.BgImage)return"\n        background-image: url("+n.BgImage+");\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        "},function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          content: '';\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          background-color:"+n.TintColor+";\n          opacity:"+n.TintOpacity+";\n          transition: all "+h.b.Base.Transition.Duration+"\n      "+h.b.Base.Transition.CssEase+";\n        }\n    "},h.a.ViewWidthPadding,function(n){return n.TextColor?n.TextColor:h.b.Color.Black},h.b.Base.Transition.Duration,h.b.Base.Transition.CssEase,h.a.ViewWidthPadding,h.a.ViewWidthPadding,h.b.Base.Transition.Duration,h.b.Base.Transition.CssEase,h.b.Color.Black,h.b.Color.White,h.b.Color.White,h.b.Color.White,h.b.Color.White,function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          opacity: 1\n        }\n    "});F.Subhead=C.a.div(O(),h.a.ViewWidthFontSize),F.Headline=C.a.div(H(),h.a.ViewWidthFontSize),F.Icon=C.a.i(D(),h.a.ViewWidthPadding,h.a.ViewWidthPadding,h.a.IconSize,h.b.Base.Transition.Duration,h.b.Base.Transition.CssEase,function(n){return n.Color?n.Color:h.b.Color.Black});var V=F,j=t(199),M=function(n){var e=n.BgColor,t=n.BgImage,r=n.TextColor,o=n.TintColor,a=n.TintOpacity,i=n.Destination,l=n.Subhead,c=n.Headline,u=n.IconColor,s=n.IconName;return d.a.createElement(V,{BgColor:e,BgImage:t,TextColor:r,TintColor:o,TintOpacity:a},d.a.createElement(I.Link,{to:i},d.a.createElement(V.Subhead,null,l),d.a.createElement(V.Headline,null,c),d.a.createElement(j.a,{className:"svg-carat",Name:"Carat",Color:u}),d.a.createElement(V.Icon,{className:"fas fa-"+s,Color:u})))},L=function(n){var e=n.WidgetContent;return d.a.createElement(N,{className:"widget"},d.a.createElement(N.Inner,null,e.map(function(n,e){return d.a.createElement(M,{BgColor:n.BgColor,BgImage:n.BgImage,TextColor:n.TextColor,TintColor:n.TintColor,TintOpacity:n.TintOpacity,Destination:n.Destination,Subhead:n.Subhead,Headline:n.Headline,IconName:n.IconName,IconColor:n.IconColor,key:e})})))};function R(){var n=c()(["\n  .wrapper {\n    overflow: hidden;\n  }\n"]);return R=function(){return n},n}var q=[{BgColor:h.b.Color.Tahoe,BgImage:"https://source.unsplash.com/1600x1200/?cannabis",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.White,IconColor:h.b.Color.White,IconName:"rocket",Destination:"/subpage",TintColor:"#000000",TintOpacity:".4",WidgetStyle:"default"},{BgColor:h.b.Color.Dank,BgImage:"none",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.Black,IconColor:h.b.Color.Black,IconName:"rocket",Destination:"/subpage",TintColor:"",TintOpacity:"",WidgetStyle:"default"},{BgColor:h.b.Color.Nightsky,BgImage:"none",Subhead:"Subhead",Headline:"Headline",TextColor:h.b.Color.White,IconColor:h.b.Color.White,IconName:"rocket",Destination:"/subpage",TintColor:"",TintOpacity:"",WidgetStyle:"default"}],G=Object(g.createGlobalStyle)(R()),J=function(n){function e(e){var t;return(t=n.call(this,e)||this).handleWheel=t.handleWheel.bind(o()(t)),t}i()(e,n);var t=e.prototype;return t.handleWheel=function(n){n.preventDefault(),n.deltaY<0?this.slider.slickPrev():this.slider.slickNext()},t.render=function(){var n=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(G,null),d.a.createElement(m.Helmet,null,d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick.min.css"}),d.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick-theme.min.css"})),d.a.createElement("div",{onWheel:function(e){return n.handleWheel(e)}},d.a.createElement(f.a,Object.assign({ref:function(e){return n.slider=e}},{dots:!1,speed:1500,arrows:!1,slidesToShow:1.05,infinite:!1}),this.props.children)))},e}(d.a.Component),X=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.Column,{className:"col"},d.a.createElement(E.Column.Inner,{className:"col-inner"},d.a.createElement(L,{WidgetContent:q}))),d.a.createElement(E.Column,{Divider:!0,className:"divider"},d.a.createElement(E.Column.Inner,{Divider:!0})))};e.a=function(n){n.children;return d.a.createElement(E,null,d.a.createElement(E.Inner,null,d.a.createElement(J,null,d.a.createElement(E.Slide,null,d.a.createElement(E.Slide.Inner,null,d.a.createElement(X,null))))))}},202:function(n,e,t){"use strict";var r=t(4),o=t.n(r),a=t(0),i=t.n(a),l=(t(200),t(198),t(51),t(1)),c=t(3),u=t.n(c),d=(t(2),t(12));function s(){var n=o()(["\n  width: 100%;\n  padding: 0;\n\n  .widget {\n    ",";\n  }\n"]);return s=function(){return n},n}function f(){var n=o()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: calc("," + ",");\n  padding-bottom: calc("," + ",");\n"]);return f=function(){return n},n}var m=u.a.div(f(),l.a.Nav.Size,l.b.Base.Size.Sm,l.a.Nav.Size,l.b.Base.Size.Sm);m.Inner=u.a.div(s(),d.a);var h=m;function g(){var n=o()(["\n  .wrapper {\n    overflow-y: auto;\n  }\n"]);return g=function(){return n},n}Object(c.createGlobalStyle)(g()),e.a=function(n){n.children;return i.a.createElement(h,null,i.a.createElement(h.Inner,null,"Vertical Content"))}}}]);
//# sourceMappingURL=component---src-pages-locations-js-490882f48445236c6af3.js.map