(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){e.exports={forecast:"ForecastList_forecast__39bfI",forecast__header:"ForecastList_forecast__header__3Haar",forecast__title:"ForecastList_forecast__title__1yMDN",forecast__buttonGroup:"ForecastList_forecast__buttonGroup__34Xt0",forecast__button:"ForecastList_forecast__button__3HTUd",forecast__buttonPrev:"ForecastList_forecast__buttonPrev__3Fcos",forecast__buttonNext:"ForecastList_forecast__buttonNext__2M3-k",forecast__cards:"ForecastList_forecast__cards__2zSn7"}},15:function(e,t,a){e.exports={card:"ForecastCard_card__8Dqgd",active:"ForecastCard_active__121jB",card__field:"ForecastCard_card__field__2z3hU",card__field__label:"ForecastCard_card__field__label__N4Y52",card__field__value:"ForecastCard_card__field__value__rPDvy"}},152:function(e,t,a){e.exports={card:"Card_card__2mtgf"}},161:function(e,t,a){e.exports={content:"Weather_content__mP902"}},193:function(e,t,a){e.exports=a(395)},198:function(e,t,a){},199:function(e,t,a){},22:function(e,t,a){e.exports={header:"Header_header__3dVUz",header__title:"Header_header__title__28fUQ",header__switch:"Header_header__switch__35KSY",header__switch__label:"Header_header__switch__label__2rqiA",container:"Header_container__1hKOs"}},395:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(28),s=a.n(n),o=(a(198),a(199),a(19)),i=a(60),_=a.n(i),l=function(){return c.a.createElement("div",{className:_.a.loader},c.a.createElement("div",{className:_.a.loader__spinner}),c.a.createElement("span",{className:_.a.loader__text},"Loading..."))};l.defaultProps={};var u=l,d=a(22),f=a.n(d),m=a(61),h=a.n(m),p=function(e){var t=e.onChange,a=e.checked,r=e.customStyles;return c.a.createElement("label",{className:"\n            ".concat(h.a.switch,"\n            ").concat(r.switch,"\n        ")},c.a.createElement("input",{type:"checkbox",className:"\n                ".concat(h.a.switch__input,"\n                ").concat(r.switch__input,"\n            "),onChange:t,checked:a}),c.a.createElement("span",{className:"".concat(h.a.switch__circle," ").concat(r.switch__circle)}))};p.defaultProps={onChange:function(){},checked:!1,customStyles:{switch:"",switch__circle:"",switch__input:""}};var v=p,b=function(e){var t=e.title,a=e.isCelsius,r=e.setIsCelsius;return c.a.createElement("header",{className:f.a.header},c.a.createElement("div",{className:f.a.container},c.a.createElement("h1",{className:f.a.header__title},t),c.a.createElement("label",{className:f.a.header__switch},c.a.createElement("span",{className:f.a.header__switch__label},"\xbaF"),c.a.createElement(v,{checked:a,onChange:r}),c.a.createElement("span",{className:f.a.header__switch__label},"\xbaC"))))};b.defaultProps={title:"",isCelsius:!1,setIsCelsius:function(){}};var E=b,w=a(89),C=a.n(w),y={invert:"invert",danger:"danger"},N=function(e){var t=e.children,a=e.onClick,r=e.variant,n=e.customStyles,s=void 0===n?{}:n,o=e.type,i=e.disabled;return c.a.createElement("button",{className:"\n            ".concat(C.a.button,"\n            ").concat(s.button,"\n            ").concat(y[r]?[C.a[y[r]]]:"","\n        "),type:o,onClick:a,disabled:i},t)};N.defaultProps={children:"",onClick:function(){},variantTypes:"",customStyles:{},type:"button",disabled:!1};var g=N,S=a(55),O=a.n(S),x=a(152),D=a.n(x),F=function(e){var t=e.children,a=e.customStyles,r=e.onClick;return c.a.createElement("div",{className:"".concat(D.a.card," ").concat(a.card),onClick:r},t)};F.defaultProps={children:"",customStyles:{card:""},onClick:function(){}};var k=F,j=a(15),P=a.n(j),L=function(e,t){return t?Math.round(e):Math.round(1.8*e+32)},M=function(e){var t=e.data,a=e.isActive,r=e.onCardClick,n=e.isCelsius;return c.a.createElement(k,{customStyles:{card:"".concat(P.a.card," ").concat(a?P.a.active:"")},onClick:r},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:P.a.card__field},c.a.createElement("span",{className:P.a.card__field__label},"Date: "),c.a.createElement("span",{className:P.a.card__field__value},O()(t.date).format("Do MMM YY"))),c.a.createElement("div",{className:P.a.card__field},c.a.createElement("span",{className:P.a.card__field__label},"Temp: "),c.a.createElement("span",{className:P.a.card__field__value},L(t.avg_temp,n),n?" \xbaC":" \xbaF"))))};M.defaultProps={data:{},isActive:!1,onCardClick:function(){},isCelsius:!0};var T=M,W=a(11),A=a.n(W),B=function(e){var t=e.list,a=e.activeForecastDate,n=e.setActiveForecastDate,s=e.isCelsius,i=Object(r.useState)([]),_=Object(o.a)(i,2),l=_[0],u=_[1],d=Object(r.useState)(1),f=Object(o.a)(d,2),m=f[0],h=f[1],p=Object(r.useState)(3),v=Object(o.a)(p,1)[0],b=Object(r.useState)(0),E=Object(o.a)(b,2),w=E[0],C=E[1];Object(r.useEffect)((function(){u(t),C(Math.ceil(t.length/v)),n(t[0].date)}),[t,v,n]);return c.a.createElement("div",{className:A.a.forecast},c.a.createElement("div",{className:A.a.forecast__header},c.a.createElement("h2",{className:A.a.forecast__title},"Weather"),c.a.createElement("div",{className:A.a.forecast__buttonGroup},c.a.createElement(g,{onClick:function(){m>1&&h(m-1)},disabled:!(m>1),customStyles:{button:"".concat(A.a.forecast__button,"\n                            ").concat(A.a.forecast__buttonPrev)}}),c.a.createElement(g,{onClick:function(){w>m&&h(m+1)},disabled:!(w>m),customStyles:{button:"".concat(A.a.forecast__button,"\n                            ").concat(A.a.forecast__buttonNext)}}))),c.a.createElement("div",{className:A.a.forecast__cards},function(){var e=m*v,t=e-v;return l.slice(t,e)}().map((function(e){return c.a.createElement(T,{key:e.date,data:e,isCelsius:s,isActive:e.date===a,onCardClick:function(){return n(e.date)}})}))))};B.defaultProps={list:[],activeForecastDate:"",setActiveForecastDate:function(){},isCelsius:!0};var I=B,H=a(36),K=a(63),U=a.n(K),Y=function(){return c.a.createElement("g",{style:{transform:"translate(50%, 100%)"}},c.a.createElement("text",null,"Time"))},R=function(e){var t=e.data,a=e.forecastDate;return c.a.createElement("div",{className:U.a.wrapper},c.a.createElement("h2",{className:U.a.title},O()(a).format("Do MMMM")),c.a.createElement("div",{className:U.a.chartContainer},c.a.createElement(H.b,{width:function(){var e=window.innerWidth-48;return 600>e?e:600}(),height:220,data:t,margin:{top:0,right:0,left:-18,bottom:0}},c.a.createElement(H.d,{dataKey:"time",label:c.a.createElement(Y,null)}),c.a.createElement(H.e,{label:{value:"Temperature",angle:-90}}),c.a.createElement(H.c,null),c.a.createElement(H.a,{dataKey:"temp",fill:"#688696"}))))};R.defaultProps={data:[],forecastDate:""};var G=R,q=function(e,t){return e.map((function(e){return{time:e.dt_txt.substr(e.dt_txt.indexOf(" ")+1,5),temp:L(e.main.temp,t)}}))},J=a(161),Q=a.n(J),z=a(35),V=a.n(z),X=a(58),Z=a(59),$=a(162),ee=a.n($),te=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY,ae={getWeather:function(){var e=Object(X.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Munich,de","40",e.prev=2,e.next=5,ee.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:"Munich,de",APPID:te,cnt:"40",units:"metric"}});case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}()},re=function(e){return{cityInfo:e.weather.cityInfo,forecastList:e.weather.forecastList,forecastByDate:e.weather.forecastByDate}},ce=Object(Z.b)({name:"weather",initialState:{cityInfo:{},forecastList:[],forecastByDate:{}},reducers:{fetchWeatherDataSuccess:function(e,t){var a=t.payload.list.reduce((function(e,t){var a=t.dt_txt.split(" ",1);return e[a]?e[a].push(t):e[a]=[t],e}),{}),r=function(e){var t=[],a=function(e){return e.reduce((function(e,t){return e+=t.main.temp}),0)/e.length};for(var r in e){var c={date:r,avg_temp:a(e[r])};t.push(c)}return t}(a);e.cityInfo=t.payload.city,e.forecastList=r,e.forecastByDate=a}}}),ne=ce.actions.fetchWeatherDataSuccess,se=ce,oe=a(41),ie=function(){var e=Object(oe.c)(re),t=Object(oe.b)(),a=Object(r.useState)(!0),n=Object(o.a)(a,2),s=n[0],i=n[1],_=Object(r.useState)(null),l=Object(o.a)(_,2),d=l[0],f=l[1];return Object(r.useEffect)((function(){t(function(){var e=Object(X.a)(V.a.mark((function e(t){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.getWeather();case 3:a=e.sent,t(ne(a.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),e.forecastList.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{title:e.cityInfo.name,setIsCelsius:function(){return i(!s)},isCelsius:s}),c.a.createElement("div",{className:Q.a.content},c.a.createElement(I,{list:e.forecastList,isCelsius:s,activeForecastDate:d,setActiveForecastDate:function(e){return f(e)}}),d&&c.a.createElement(G,{forecastDate:d,data:q(e.forecastByDate[d],s)}))):c.a.createElement(u,null)};ie.defaultProps={};var _e=ie,le=function(){return c.a.createElement(_e,null)},ue=Object(Z.a)({reducer:{weather:se.reducer}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(oe.a,{store:ue},c.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports={loader:"Loader_loader__3Ku7_",loader__spinner:"Loader_loader__spinner__2TUQn",loading:"Loader_loading__2TJ_o",loader__text:"Loader_loader__text__1uZ15"}},61:function(e,t,a){e.exports={switch:"Switch_switch__3fe8q",switch__input:"Switch_switch__input__291o-",switch__circle:"Switch_switch__circle__80GYp"}},63:function(e,t,a){e.exports={wrapper:"ForecastChart_wrapper__UxHGX",title:"ForecastChart_title__jWRBQ",chartContainer:"ForecastChart_chartContainer__178UJ"}},89:function(e,t,a){e.exports={button:"Button_button__3ORSg",invert:"Button_invert__18Yym",danger:"Button_danger__2CiQ2"}}},[[193,1,2]]]);
//# sourceMappingURL=main.a15c0ca6.chunk.js.map