(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{193:function(n,o,e){"use strict";e.r(o);var r=e(0),t=e.n(r),a=e(209),i=e(218),l=e(1),c={Color:{Background:l.b.Color.Flower,Primary:l.b.Color.Dank,Secondary:l.b.Color.White,Tertiary:l.b.Color.Black}};o.default=function(n){n.data;return t.a.createElement(a.a,{BgColor:c.Color.Background,PrimaryColor:c.Color.Primary,SecondaryColor:c.Color.Secondary,TertiaryColor:c.Color.Tertiary},t.a.createElement(i.a,{BgColor:c.Color.Background,PrimaryColor:c.Color.Primary,SecondaryColor:c.Color.Secondary,TertiaryColor:c.Color.Tertiary},t.a.createElement("div",{className:"content-stretch"},t.a.createElement("h1",null,"Reno’s first Cannabis dispensary — located in the heart of downtown."))))}},207:function(n,o,e){"use strict";e.d(o,"a",function(){return s}),e.d(o,"b",function(){return u});var r=e(4),t=e.n(r),a=(e(0),e(2)),i=e(3);function l(){var n=t()(["\n  .wrapper {\n    @media (min-width: ",") {\n      overflow-y: scroll;\n    }\n    @media (max-width: ",") {\n      overflow-y: scroll; /* has to be scroll, not auto */\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n"]);return l=function(){return n},n}function c(){var n=t()(["\n  .wrapper {\n    @media (min-width: ",") {\n      overflow: hidden;\n    }\n    @media (max-width: ",") {\n      overflow-y: scroll; /* has to be scroll, not auto */\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  .slick-slider {\n    touch-action: none !important;\n  }\n"]);return c=function(){return n},n}var s=Object(i.createGlobalStyle)(c(),a.a.Media.Width.Md+1+"px",a.a.Media.Width.Md+"px"),u=Object(i.createGlobalStyle)(l(),a.a.Media.Width.Md+1+"px",a.a.Media.Width.Md+"px")},218:function(n,o,e){"use strict";var r=e(0),t=e.n(r),a=e(1),i=e(9),l=e(4),c=e.n(l),s=e(3),u=e.n(s),d=e(14);function m(){var n=c()(["\n  position: absolute;\n  right: ",";\n  bottom: ",";\n  font-size: 1.2rem;\n  transform: scale(1.000000001);\n  transition: all ","\n    ",";\n  color: ",";\n"]);return m=function(){return n},n}function f(){var n=c()(["\n  font-size: 1rem;\n  line-height: 1.2;\n  font-weight: bold;\n"]);return f=function(){return n},n}function C(){var n=c()(["\n  font-size: 1rem;\n  line-height: 1.2;\n"]);return C=function(){return n},n}function b(){var n=c()(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);\n  overflow: hidden;\n  transition: all ","\n    ",";\n  cursor: pointer;\n  color: ",";\n\n  /* Background Images */\n\n  ",";\n\n  /* Tint */\n\n  ",";\n\n  /* Links */\n  a {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n    color: white;\n    transform: scale(1.000000001);\n    position: relative;\n    padding: ",";\n    color: ",";\n    text-decoration: none;\n    transition: all ","\n      ",";\n  }\n\n  /* The Carat Icon */\n  svg {\n    position: absolute;\n    right: ",";\n    top: ",";\n    transform: translateX(0%);\n    transition: all ","\n      ",";\n  }\n\n  /* Hover Styles */\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: 0 20px 30px 0 rgba(6, 10, 92, 0.21);\n\n    a {\n      text-decoration: none;\n      color: ",";\n    }\n\n    /* The Carat Icon */\n    svg {\n      transform: translateX(50%);\n      fill: ",";\n      height: 1.2rem;\n      width: 1.2rem;\n    }\n\n    /* The Widget Icon */\n    .fas {\n      color: ",";\n      transform: scale(1.3);\n    }\n\n    /* Tint */\n    ",";\n  }\n"]);return b=function(){return n},n}function g(){var n=c()(["\n  width: 100%;\n  padding-bottom: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  opacity: 0;\n  margin-top: ",";\n  animation-fill-mode: forwards;\n  ",";\n"]);return g=function(){return n},n}var h=u.a.div(g(),a.b.Base.Size.Sm,d.a);h.Inner=u.a.div(b(),function(n){return n.BgColor?n.BgColor:a.b.Color.White},a.a.Radius,a.b.Base.Transition.Duration,a.b.Base.Transition.CssEase,function(n){return n.TextColor?n.TextColor:a.b.Color.Black},function(n){if(n.BgImage)return"\n        background-image: url("+n.BgImage+");\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n        "},function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          content: '';\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          background-color:"+n.TintColor+";\n          opacity:"+n.TintOpacity+";\n          transition: all "+a.b.Base.Transition.Duration+"\n      "+a.b.Base.Transition.CssEase+";\n        }\n    "},a.b.Base.Size.Sm,function(n){return n.TextColor?n.TextColor:a.b.Color.Black},a.b.Base.Transition.Duration,a.b.Base.Transition.CssEase,a.b.Base.Size.Sm,a.b.Base.Size.Sm,a.b.Base.Transition.Duration,a.b.Base.Transition.CssEase,a.b.Color.Black,a.b.Color.White,a.b.Color.White,a.b.Color.White,a.b.Color.White,function(n){if(n.TintColor||n.TintOpacity)return"\n        &:before {\n          opacity: 1\n        }\n    "}),h.Subhead=u.a.div(C()),h.Headline=u.a.div(f()),h.Icon=u.a.i(m(),a.b.Base.Size.Sm,a.b.Base.Size.Sm,a.b.Base.Transition.Duration,a.b.Base.Transition.CssEase,function(n){return n.Color?n.Color:a.b.Color.Black});var p=h,v=e(76),y=function(n){var o=n.BgColor,e=n.BgImage,r=n.Headline,a=n.TextColor,l=n.IconName,c=n.IconColor,s=n.Destination,u=n.TintColor,d=n.TintOpacity;return t.a.createElement(p,{className:"widget"},t.a.createElement(p.Inner,{BgColor:o,BgImage:e,TextColor:a,TintColor:u,TintOpacity:d},t.a.createElement(i.Link,{to:s},t.a.createElement(p.Headline,null,r),t.a.createElement(v.a,{className:"svg-carat",Name:"Carat",Color:c}),t.a.createElement(p.Icon,{className:"fas fa-"+l,Color:c}))))};e(2);function B(){var n=c()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: ",";\n  width: ",";\n"]);return B=function(){return n},n}function T(){var n=c()(["\n  position: fixed;\n  top: ",";\n  bottom: 0;\n  height: calc(100vh - ",");\n  display: flex;\n  z-index: 555;\n"]);return T=function(){return n},n}var x=u.a.div(T(),a.a.Nav.Size,a.a.Nav.Size);x.Inner=u.a.div(B(),a.b.Base.Size.Sm,a.a.Grid.Gutter.Left);var w=x,I=function(n){n.children,n.BgColor,n.PrimaryColor;var o=n.SecondaryColor,e=n.TertiaryColor;return t.a.createElement(w,null,t.a.createElement(w.Inner,null,t.a.createElement(y,{BgColor:a.b.Color.Primary,BgImage:"none",Headline:"Delivery",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"car",Destination:"/"}),t.a.createElement(y,{BgColor:o,BgImage:"none",Headline:"Visit",TextColor:e,IconColor:e,IconName:"map-marker-alt",Destination:"/"}),t.a.createElement(y,{BgColor:o,BgImage:"none",Headline:"Chat",TextColor:e,IconColor:e,IconName:"comment-alt",Destination:"/culture"}),t.a.createElement(y,{BgColor:o,BgImage:"none",Headline:"Phone",TextColor:e,IconColor:e,IconName:"phone",Destination:"/contact"})))},S=e(207);function k(){var n=c()(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return k=function(){return n},n}function E(){var n=c()(["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  color: ",";\n  transition: all ","\n    ",";\n"]);return E=function(){return n},n}var z=u.a.div(E(),a.b.Color.Background,a.b.Base.Transition.Duration,a.b.Base.Transition.CssEase);z.Inner=u.a.div(k());var N=z;o.a=function(n){var o=n.children,e=n.BgColor,r=n.PrimaryColor,a=n.SecondaryColor,i=n.TertiaryColor;return t.a.createElement(N,{className:"sub"},t.a.createElement(S.b,null),t.a.createElement(I,{BgColor:e,PrimaryColor:r,SecondaryColor:a,TertiaryColor:i}),t.a.createElement(N.Inner,{className:"sublevel-inner"},o))}}}]);
//# sourceMappingURL=component---src-pages-subpage-js-6bd11ae5ed8fdb86ca55.js.map