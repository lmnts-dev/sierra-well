(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{191:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(24),r=t(222),l=t(223),c=t(229),d=t(232),s=t(257),u=function(){return i.a.createElement(c.a,null,i.a.createElement(d.a,{className:s.a.SlideGroup.Name,SlidesData:s.a.SlideGroup.Slides}))},g=function(){return i.a.createElement(l.a,null)};n.default=function(e){e.data;return i.a.createElement(r.a,{BgColor:s.a.PageTheme.Color.Background,PrimaryColor:s.a.PageTheme.Color.Primary,SecondaryColor:s.a.PageTheme.Color.Secondary,TertiaryColor:s.a.PageTheme.Color.Tertiary},i.a.createElement(a.a,{Query:"Desktop"},i.a.createElement(u,null)),i.a.createElement(a.a,{Query:"Mobile"},i.a.createElement(g,null)))}},213:function(e,n,t){"use strict";var o=t(5),i=t.n(o),a=(t(38),t(0)),r=t.n(a),l=t(212),c=t.n(l),d=t(211),s=(t(9),t(216)),u=t(76),g=t(37),b=t(1),m=t(2),h=t(4),C=t.n(h),S=t(3),p=t.n(S),f=t(208);function y(){var e=C()(["\n  display: flex;\n\n  .btn {\n    background-color: rgba(0, 0, 0, 0);\n    color: ",";\n\n    svg {\n      fill: ",";\n      border: ",";\n    }\n\n    i {\n      color: ",";\n    }\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  }\n"]);return y=function(){return e},e}function v(){var e=C()(["\n  display: flex;\n  font-weight: 800;\n  font-size: 1.5rem;\n  color: ","\n  transition: all ","\n    ",";\n  i {\n    margin-right: ",";\n    transition: all ","\n      ",";\n  }\n"]);return v=function(){return e},e}function T(){var e=C()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: calc("," / 6);\n"]);return T=function(){return e},e}function I(){var e=C()(["\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-direction: column;\n\n  .widget {\n    padding: calc("," / 6);\n    height: ",";\n\n    @media (max-width: ",") {\n      padding: calc(",") calc("," / 4);\n      height: ",";\n    }\n  }\n"]);return I=function(){return e},e}function x(){var e=C()(["\n  width: 100%;\n  padding-bottom: 0;\n\n  /* Array-based gutters utilizing root variable multiple. */\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return x=function(){return e},e}function k(){var e=C()(["\n  width: 100%;\n  overflow: hidden;\n\n  /* Slick styles */\n  .slick-slider {\n    padding-bottom: ",";\n    margin-bottom: ",";\n\n    .slick-slide {\n      &:first-child {\n        .widget {\n          padding-left: 0;\n        }\n      }\n    }\n    .slick-list {\n      overflow: visible;\n    }\n\n    /* Arrows */\n    .slick-arrow {\n      top: calc((",") * -1);\n      transform: none;\n      right: 0;\n      left: unset;\n      width: calc("," * 0.75);\n      height: calc("," * 0.75);\n      border-radius: 50%;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      z-index: 400;\n      background: rgba(0, 0, 0, 0);\n\n      &.slick-prev {\n        transform: rotate(180deg);\n        right: calc(("," * 0.75) + ("," * 0.25));\n      }\n\n      &.slick-next {\n        right: 0;\n      }\n\n      &.slick-disabled {\n        opacity: 0.4;\n        .ico {\n          opacity: 0.5;\n        }\n        &:hover {\n          background: rgba(0, 0, 0, 0);\n          border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      &:hover {\n        background: rgba(0, 0, 0, 0.03);\n        border: 1px solid rgba(0, 0, 0, 0.03);\n      }\n\n      .ico {\n        position: absolute;\n        left: 54%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n      }\n\n      &:before {\n        content: '';\n      }\n    }\n\n    .slick-dots {\n      bottom: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      width: auto;\n      padding: 0;\n      margin: 0;\n\n      li {\n        margin: 0;\n        padding: 0;\n        width: 10px;\n        height: 10px;\n        margin-right: 5px;\n\n        button {\n          margin: 0;\n          padding: 0;\n          position: relative;\n          width: 10px;\n          height: 10px;\n          margin-right: 5px;\n\n          &:before {\n            content: '';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            width: 7px;\n            height: 7px;\n            border: 1px solid ",";\n            border-radius: 50%;\n          }\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var B=p.a.div(k(),b.b.Base.Size.Sm,b.b.Base.Size.Sm,b.a.Size,b.a.Size,b.a.Size,b.a.Size,b.a.Size,b.b.Color.Black);B.Inner=p()(f.b)(x(),function(e){return e.Gutter?"padding-top: calc("+b.a.Size+" * "+e.Gutter[0]+")":"padding-top: "+b.a.Size},function(e){return e.Gutter?"padding-right: calc("+b.a.Size+" * "+e.Gutter[1]+")":"padding-right: "+b.a.Size},function(e){return e.Gutter?"padding-bottom: calc("+b.a.Size+" * "+e.Gutter[2]+")":"padding-bottom: 0"},function(e){return e.Gutter?"padding-left: calc("+b.a.Grid.Gutter.Left+" + ("+b.a.Size+" * "+e.Gutter[3]+"))":"padding-left: calc("+b.a.Grid.Gutter.Left+" + "+b.a.Size+")"}),B.Content=p()(f.a)(I(),b.a.Size,function(e){return e.SectionSize?"calc("+b.a.Size+"*"+e.SectionSize+")":"calc("+b.a.Size+"* 3)"},m.a.Media.Width.Md+"px",b.a.Size,b.a.Size,function(e){return e.SectionSize?"calc(("+b.a.Size+"* 3) * "+e.SectionSize+")":"calc(("+b.a.Size+"* 3) * 3)"}),B.SectionHeader=p.a.div(T(),b.a.Size),B.Headline=p.a.div(v(),function(e){return e.TextColor?e.TextColor:null},b.b.Base.Transition.Duration,b.b.Base.Transition.CssEase,b.b.Base.Size.Sm,b.b.Base.Transition.Duration,b.b.Base.Transition.CssEase),B.CallToAction=p.a.div(y(),b.b.Color.Black,b.b.Color.Black,b.b.Color.Black,b.b.Color.Black);var w=B;function W(e){var n=e.className,t=e.style,o=e.onClick;return r.a.createElement("div",{className:n,style:Object.assign({},t),onClick:o,onKeyPress:o,role:"button",tabIndex:"0"},r.a.createElement(g.a,{className:"svg-carat",Name:"carat"}))}function z(e){var n=e.className,t=e.style,o=e.onClick;return r.a.createElement("div",{className:n,style:Object.assign({},t),onClick:o,onKeyPress:o,role:"button",tabIndex:"0"},r.a.createElement(g.a,{className:"svg-carat",Name:"carat"}))}var G=function(e){function n(n){return e.call(this,n)||this}return i()(n,e),n.prototype.render=function(){var e,n=this,t=(this.props.ArrowColor,this.props.SliderSettings.slidesToShow?this.props.SliderSettings.slidesToShow:1),o=this.props.SliderSettings.slidesToScroll?this.props.SliderSettings.slidesToScroll:1,i=!!this.props.SliderSettings.autoplay&&this.props.SliderSettings.autoplay,a=!!this.props.SliderSettings.arrows&&this.props.SliderSettings.arrows,l=((e={dots:!0,speed:550,arrows:!1,autoplaySpeed:4e3,slidesToShow:t,slidesToScroll:o,autoplay:i,infinite:!1,draggable:!0}).arrows=a,e.nextArrow=r.a.createElement(W,null),e.prevArrow=r.a.createElement(z,null),e.responsive=[{breakpoint:m.a.Media.Width.Md+"px",settings:{slidesToShow:1,slidesToScroll:1}}],e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Helmet,null,r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick.min.css"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick-theme.min.css"})),r.a.createElement(c.a,Object.assign({ref:function(e){return n.slider=e}},l),this.props.children))},n}(r.a.Component);n.a=function(e){var n=e.Widgets,t=e.SectionSize,o=e.SliderSettings,i=e.Header,a=e.Icon,l=e.ViewAll,c=e.Theme,d=e.Gutter;return r.a.createElement(w,null,r.a.createElement(w.Inner,{Gutter:d},r.a.createElement(w.Content,{SectionSize:t},r.a.createElement(w.SectionHeader,null,r.a.createElement(w.Headline,{TextColor:c.TextColor},a?r.a.createElement("i",{className:"fas fa-"+a}):null,r.a.createElement("h2",null,i)),l?r.a.createElement(w.CallToAction,null,r.a.createElement(u.a,{Destination:l[0],BgColor:"inherit",Label:l[1],IconclassName:"carat"})):null),r.a.createElement(G,{SliderSettings:o,ArrowColor:c.TextColr},n.map(function(e,n){return r.a.createElement(s.a,{key:n,WidgetContent:e.WidgetContent,Flex:e.Flex?e.Flex:null})})))))}},214:function(e,n,t){"use strict";var o=t(4),i=t.n(o),a=t(3),r=t.n(a),l=t(1),c=t(2),d=t(14);function s(){var e=i()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  .widget {\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n\n  ","\n"]);return s=function(){return e},e}function u(){var e=i()(["\n  padding: "," "," "," 0;\n  height: calc(100vh - ("," * 2 + ","));\n  display: flex;\n  flex-direction: column;\n  flex: ",";\n  width: ",";\n\n  .col-inner {\n    min-width: 250px;\n  }\n"]);return u=function(){return e},e}function g(){var e=i()(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: visible;\n  padding-bottom: ",";\n  height: calc(100vh - ("," * 2 + ","));\n"]);return g=function(){return e},e}function b(){var e=i()(["\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n  height: calc(100vh - ("," * 2 + ","));\n"]);return b=function(){return e},e}function m(){var e=i()(["\n  width: 100%;\n  padding: calc("," * 2) 0 0 0;\n\n  /* Padding on first slide */\n  .slick-slide {\n    padding: 0;\n    overflow: visible;\n    div {\n      outline: 0;\n      &:focus {\n        outline: 0;\n      }\n      .col {\n        &:first-child {\n          padding-left: ",";\n        }\n      }\n    }\n    &:first-child {\n      padding: 0 0 0 ",";\n      .col {\n        &:first-child {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n\n  .widget {\n    ",";\n  }\n"]);return m=function(){return e},e}function h(){var e=i()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: ",";\n  overflow: visible;\n\n  .slick-slider {\n    .slick-list {\n      overflow: visible;\n    }\n\n    .slick-track {\n      display: flex;\n    }\n\n    /* Arrows */\n    .slick-arrow {\n      top: calc((",") * -1);\n      transform: none;\n      right: 0;\n      left: unset;\n      width: calc("," * 0.75);\n      height: calc("," * 0.75);\n      border-radius: 50%;\n      border: 1px solid rgba(0, 0, 0, 0.1);\n      background: rgba(0, 0, 0, 0);\n      z-index: 1500;\n\n      &.slick-prev {\n        transform: rotate(180deg);\n        right: calc(\n          (("," * 0.75) + ("," * 0.25)) +\n            ","\n        );\n      }\n\n      &.slick-next {\n        right: calc(",");\n      }\n\n      &.slick-disabled {\n        opacity: 0.4;\n        .ico {\n          opacity: 0.5;\n        }\n        &:hover {\n          background: rgba(0, 0, 0, 0);\n          border: 1px solid rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      &:hover {\n        background: rgba(0, 0, 0, 0.03);\n        border: 1px solid rgba(0, 0, 0, 0.03);\n      }\n\n      .ico {\n        position: absolute;\n        left: 54%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n      }\n\n      &:before {\n        content: '';\n      }\n    }\n  }\n"]);return h=function(){return e},e}var C=r.a.div(h(),l.a.Footer.Size,l.a.Size,l.a.Size,l.a.Size,l.a.Size,l.a.Size,l.a.Grid.Gutter.Right,l.a.Grid.Gutter.Right);C.Inner=r.a.div(m(),l.a.Nav.Size,l.b.Base.Size.Sm,l.b.Base.Size.Sm,d.a),C.SlideColumnContainer=r.a.div(b(),l.a.Nav.Size,l.a.Footer.Size),C.SlideColumnContainer.Inner=r.a.div(g(),l.b.Base.Size.Sm,l.a.Nav.Size,l.a.Footer.Size),C.Column=r.a.div(u(),l.b.Base.Size.Sm,l.b.Base.Size.Sm,l.b.Base.Size.Sm,l.a.Nav.Size,l.a.Footer.Size,function(e){return e.Divider?"unset":"1"},function(e){return e.ColWidth?e.ColWidth:e.Divider?l.b.Base.Size.Md:"auto"}),C.Column.Inner=r.a.div(s(),function(e){if(e.Divider)return"\n        width: "+l.b.Base.Size.Md+";\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          // left: calc(50% - "+c.a.Size.Sm/2+"px);\n          left: 50%;\n          width: 1px;\n          opacity: .05;\n          background-color: { Theme.Color.Indigo };\n        }\n    "}),n.a=C},215:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return u});var o=t(4),i=t.n(o),a=(t(0),t(2)),r=t(3);function l(){var e=i()(["\n  .wrapper {\n    @media (min-width: ",") {\n      justify-content: flex-start;\n    }\n    @media (max-width: ",") {\n      justify-content: space-between;\n    }\n  }\n"]);return l=function(){return e},e}function c(){var e=i()(["\n  html, body {\n      overflow: auto;\n  }\n\n  .wrapper {\n    @media (min-width: ",") {\n      overflow-y: visible;\n      height: auto;\n      position: absolute;\n    }\n    @media (max-width: ",") {\n      overflow-y: hidden;\n      position: absolute;\n    }\n  }\n"]);return c=function(){return e},e}function d(){var e=i()(["\n  html, body {\n    overflow: hidden;\n\n    @media (max-width: ",") {\n      overflow-y: visible !important; \n      overflow: visible;\n      \n      .wrapper {\n        overflow-y: hidden;\n      }\n    }\n  }\n\n  .wrapper {\n    @media (min-width: ",") {\n      overflow: hidden;\n    }\n    @media (max-width: ",") {\n      overflow: hidden; \n      overflow-y: hidden;\n    }\n  }\n\n  .slick-slider {\n    touch-action: none !important;\n  }\n"]);return d=function(){return e},e}var s=Object(r.createGlobalStyle)(d(),a.a.Media.Width.Md+"px",a.a.Media.Width.Md+1+"px",a.a.Media.Width.Md+"px"),u=Object(r.createGlobalStyle)(c(),a.a.Media.Width.Md+1+"px",a.a.Media.Width.Md+"px");Object(r.createGlobalStyle)(l(),a.a.Media.Width.Md+1+"px",a.a.Media.Width.Md+"px")},219:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var o=t(5),i=t.n(o),a=t(0),r=t.n(a),l=(t(9),t(216)),c=t(214),d=t(224),s=t(241),u=function(e){function n(n){return e.call(this,n)||this}return i()(n,e),n.prototype.render=function(){var e=this.props.Divider,n=this.props.Widgets;return 1==e?r.a.createElement(c.a.Column,{Divider:!0,className:"divider"},r.a.createElement(c.a.Column.Inner,{Divider:!0})):r.a.createElement(c.a.Column,{className:"col"},r.a.createElement(c.a.Column.Inner,{className:"col-inner"},n.map(function(e,n){return r.a.createElement(l.a,{key:n,WidgetContent:e.WidgetContent,Flex:e.Flex,Width:e.Width})})))},n}(r.a.Component);n.b=u;var g=function(e){return e?e.map(function(e,n){switch(e.slice_type){case"title_column":return{Type:e.slice_type,Widgets:Object(s.b)(e.primary)};case"column":case"divider":return{Type:e.slice_type,Widgets:Object(d.b)(e.items)}}}):"null"}},223:function(e,n,t){"use strict";var o=t(0),i=t.n(o),a=(t(212),t(211),t(53),t(1)),r=(t(2),t(213)),l=t(4),c=t.n(l),d=t(3),s=t.n(d),u=t(14);function g(){var e=c()(["\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n\n  .widget {\n    ",";\n  }\n"]);return g=function(){return e},e}function b(){var e=c()(["\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: calc("," + ",");\n  padding-bottom: calc("," + ",");\n  overflow: visible;\n"]);return b=function(){return e},e}var m=s.a.div(b(),a.a.Nav.Size,a.b.Base.Size.Sm,a.a.Nav.Size,a.b.Base.Size.Sm);m.Inner=s.a.div(g(),u.a);var h=m,C=(t(106),[{Flex:1,WidgetContent:[{Destination:"/learn/all/",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Nightsky,BgImage:"",Subhead:"",Headline:"All Questions",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]},{Flex:1,WidgetContent:[{Destination:"/learn/recreational/",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Mint,BgImage:"",Subhead:"",Headline:"Recreational",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]},{Flex:1,WidgetContent:[{Destination:"/learn/medical/",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Tahoe,BgImage:"",Subhead:"",Headline:"Medical",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"leaf",TintColor:"",TintOpacity:"",IconSize:""}}}]}]);n.a=function(e){var n=e.children;return n?i.a.createElement(h,null,i.a.createElement(h.Inner,null,n)):i.a.createElement(h,null,i.a.createElement(h.Inner,null,i.a.createElement(r.a,{Widgets:C,SectionSize:7,Header:"Learn",Theme:{TextColor:a.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),i.a.createElement(r.a,{Widgets:C,SectionSize:7,Header:"Medical",Theme:{TextColor:a.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),i.a.createElement(r.a,{Widgets:C,SectionSize:7,Header:"Recreational",Theme:{TextColor:a.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}),i.a.createElement(r.a,{Widgets:C,SectionSize:7,Header:"Industry",Theme:{TextColor:a.b.Color.Black,BgColor:"none"},SliderSettings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}})))}},229:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(0),i=t.n(o),a=t(214),r=function(e){var n=e.children;return i.a.createElement(a.a,null,i.a.createElement(a.a.Inner,null,n))};n.b=r},232:function(e,n,t){"use strict";var o=t(17),i=t.n(o),a=t(5),r=t.n(a),l=(t(38),t(0)),c=t.n(l),d=t(212),s=t.n(d),u=t(211),g=(t(2),t(214),t(219)),b=t(215),m=t(37);function h(e){var n=e.className,t=e.style,o=e.onClick;return c.a.createElement("div",{className:n,style:Object.assign({},t),onClick:o,onKeyPress:o,role:"button",tabIndex:"0"},c.a.createElement(m.a,{className:"svg-carat",Name:"carat"}))}function C(e){var n=e.className,t=e.style,o=e.onClick;return c.a.createElement("div",{className:n,style:Object.assign({},t),onClick:o,onKeyPress:o,role:"button",tabIndex:"0"},c.a.createElement(m.a,{className:"svg-carat",Name:"carat"}))}var S=function(e){function n(n){var t;return(t=e.call(this,n)||this).handleWheel=t.handleWheel.bind(i()(t)),t}r()(n,e);var t=n.prototype;return t.handleWheel=function(e){e.deltaY<0||e.deltaX<0||e.deltaX>0?this.slider.slickPrev():this.slider.slickNext()},t.render=function(){var e=this,n={dots:!1,speed:1200,arrows:!0,slidesToShow:3,slidesToScroll:2,variableWidth:!0,infinite:!1,nextArrow:c.a.createElement(h,null),prevArrow:c.a.createElement(C,null)},t=this.props.SlidesData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null),c.a.createElement(u.Helmet,null,c.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick.min.css"}),c.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/vendor/slick-theme.min.css"})),c.a.createElement("div",{onWheel:function(n){return e.handleWheel(n)}},c.a.createElement(s.a,Object.assign({ref:function(n){return e.slider=n}},n),t[0].Columns.map(function(e,n){return"divider"!=e.Type?c.a.createElement(g.b,{key:n,Widgets:e.Widgets}):c.a.createElement(g.b,{key:n,Divider:!0})}))))},n}(c.a.Component);n.a=S},257:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(106),i=t.n(o),a=t(1),r={PageTheme:{Color:{Background:a.b.Color.Background,Primary:a.b.Color.Nightsky,Secondary:a.b.Color.Nightsky,Tertiary:a.b.Color.Background}},SlideGroup:{Name:"home-slider",Slides:[{Name:"home-slide-1",Columns:[{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:null,Style:"SideHeader",Meta:{SideHeader:{Header:"Company",IntroCopy:"Sierra Well is dedicated to making medical and recreational marijuana approachable.",BodyCopy:"quality medicinal and recreational cannabis, wellness services, and educational resources to our patients and community.",TextColor:a.b.Color.Nightsky}}}]}]},{Type:"divider"},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"SideWidget",Meta:{SideWidget:{BgColor:a.b.Color.Mint,BgImage:"",Header:"Vision",Subhead:"Try it out.",TextColor:a.b.Color.Nightsky,IconColor:a.b.Color.Nightsky,IconName:"rocket",IconSize:"",TintColor:"",TintOpacity:""}}}]}]},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"SideWidget",Meta:{SideWidget:{BgColor:a.b.Color.Primary,BgImage:"",Header:"Mission",Subhead:"Try it out.",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",IconSize:"",TintColor:"",TintOpacity:""}}}]}]},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"SideWidget",Meta:{SideWidget:{BgColor:a.b.Color.Nightsky,BgImage:"",Header:"Values",Subhead:"Try it out.",TextColor:a.b.Color.White,IconColor:a.b.Color.Primary,IconName:"rocket",IconSize:"",TintColor:"",TintOpacity:""}}}]}]}]},{Name:"home-slide-2",Columns:[{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]}]},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]}]},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]},{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]}]}]},{Name:"home-slide-2",Columns:[{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]}]},{Type:"default",Widgets:[{Flex:1,WidgetContent:[{Destination:"/subpage",Style:"Article",Meta:{Generic:{BgColor:"blue",BgImage:"",Subhead:"Subhead",Headline:"Article",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"robot",TintColor:"#000000",TintOpacity:".4",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Dank,BgImage:"",Subhead:"Subhead",Headline:"Generic 1",TextColor:a.b.Color.Black,IconColor:a.b.Color.Black,IconName:"tree",TintColor:"",TintOpacity:"",IconSize:""}}},{Destination:"/subpage",Style:"Generic",Meta:{Generic:{BgColor:a.b.Color.Black,BgImage:i.a,Subhead:"Subhead",Headline:"Generic 2",TextColor:a.b.Color.White,IconColor:a.b.Color.White,IconName:"rocket",TintColor:"#000000",TintOpacity:".4",IconSize:""}}}]}]}]}]}}}}]);
//# sourceMappingURL=component---src-pages-culture-js-3cc8d4e1a9e07bb1c57c.js.map