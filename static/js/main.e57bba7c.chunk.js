(this.webpackJsonplister=this.webpackJsonplister||[]).push([[0],{158:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(64),t(65),{});function l(e){return"object"!==typeof e?u:(e.name="string"===typeof e.name?e.name:u.name,e)}function i(e){return e.name?"".concat(e.name).concat(100*Math.random()):Math.random()}function s(e){return"string"!==typeof e||"http"===e.slice(0,4)}var m=function(e){var n=e.item,t=Object.keys(n);return t.forEach((function(e){})),r.a.createElement("li",{className:"item"},t.map((function(e){if(!s(n[e]))return r.a.createElement("span",{key:i(e),className:"".concat(e)},function(e){var t="".concat(e.substring(0,1).toUpperCase()).concat(e.substring(1)).replace("_"," "),a="".concat(n[e].substring(0,1).toUpperCase()).concat(n[e].substring(1)).replace("_"," ");return s(n[e])?null:"".concat(t,":  ").concat(a)}(e))})))},p=t(3);var f=function(){var e=Object(p.c)((function(e){return e.currentGroup})),n=Object(p.c)((function(e){return e.data})),t=Object(p.c)((function(e){return e.loading}));return r.a.createElement("ul",{className:"item-list"},null===e?r.a.createElement("div",{className:"items-loading-screen"},"Please select group"):null!==n[e]?n[e].map((function(e){return r.a.createElement(m,{key:i(e),item:l(e)})})):!0===t?r.a.createElement("div",{className:"items-loading-screen"},"LOADING"):void 0)};var d=function(e){var n=e.onGroupClick,t=e.groupName;return r.a.createElement("div",{className:"group",onClick:function(){return n(t)}},t)},g=t(57),v=t.n(g),h=t(58),E=t.n(h),N=t(26);function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"CHANGE_GROUP_TO",group:e}}var y={currentGroup:null,data:{people:null,planets:null,films:null,species:null,vehicles:null,starships:null},loading:!1};var G=N.createStore((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0,t=E()(e);switch(n.type){case"CHANGE_GROUP_TO":return t.currentGroup=n.group,t;case"ADD_GROUP_FROM_API":return t.data[n.groupName]=n.group,t;case"CHANGE_LOADING":return t.loading=n.payload,t;default:return e}}));G.dispatch(O("people"));var b=G;var A=function(){console.log("--------------------GL---------------------");var e=Object(p.c)((function(e){return e.data})),n=Object(p.b)(),t=function(e){return n(O(e))},a=function(e){return n(function(e){return{type:"CHANGE_LOADING",payload:e}}(e))};function c(e){function r(e,r){!function(e,t){n(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:"ADD_GROUP_FROM_API",group:e,groupName:n}}(e,t))}(r,e),t(e),a(!1),console.log("new data from API is : ",r)}a(!0);v.a.get("".concat("https://swapi.py4e.com/api/").concat(e)).then((function(n){return r(e,n.data.results)})).catch((function(e){return console.log("err loading from API",e)}))}function o(n){e[n]?t(n):c(n)}return r.a.createElement("div",{className:"group-list"},Object.keys(e).map((function(e){return r.a.createElement(d,{key:e,onGroupClick:o,groupName:e})})))};var _=function(){return r.a.createElement("div",{className:"interface"},r.a.createElement(A,null),r.a.createElement(f,null))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app-header"},"MAY THE 4TH BE WITH YOU"),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:b},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,n,t){e.exports=t(158)},64:function(e,n,t){},65:function(e,n,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.e57bba7c.chunk.js.map