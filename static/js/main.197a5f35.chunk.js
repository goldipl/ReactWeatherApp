(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(3),a=n.n(r),s=(n(12),n(4)),o=n(5),u=n(7),h=n(6),l=(n(13),n(0)),j=function(t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Weather App"}),Object(l.jsxs)("form",{onSubmit:t.citySubmit,children:[Object(l.jsx)("input",{type:"text",value:t.value,onChange:t.cityChange,placeholder:"Type City..."}),Object(l.jsx)("button",{children:"Search city"})]})]})},d=function(t){var e=t.weather,n=e.cityErr,c=e.cityName,i=e.cityTemp,r=e.cityPressure,a=e.cityWind,s=null;return c&&!n&&(s=Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"resultContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"City: "}),String(c)]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Temp: "}),"".concat(String(i))," \xb0C"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Pressure: "}),"".concat(String(r)," hPa")]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Wind: "}),"".concat(String(a)," m/s")]})]})})),Object(l.jsx)("div",{className:"resultContainer",children:n?"We haven't ".concat(c," in database."):s})},b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={value:"",cityDate:"",cityName:"",cityTemp:"",cityPressure:"",cityWind:"",cityErr:!1},t.handleInputCity=function(e){t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),console.log("event confirmation");var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t.state.value,"&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric");fetch(n).then((function(t){if(t.ok)return t;throw Error("Something goes wrong")})).then((function(t){return t.json()})).then((function(e){var n=(new Date).toLocaleString();t.setState({cityErr:!1,cityDate:n,cityName:t.state.value,cityTemp:e.main.temp,cityPressure:e.main.pressure,cityWind:e.wind.speed})})).catch((function(e){console.log(e),t.setState({cityErr:!0,cityName:t.state.value})}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{value:this.state.value,cityChange:this.handleInputCity,citySubmit:this.handleSubmit})," ",Object(l.jsx)(d,{weather:this.state})," "]})}}]),n}(c.Component),y=b,p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.197a5f35.chunk.js.map