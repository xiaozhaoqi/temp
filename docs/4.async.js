(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{QMrq:function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var r=n(a("VXEj"));a("IzEo");var o=n(a("bx4M")),d=l(a("mrSG")),i=n(a("q1tI")),u=a("MuoO"),c=n(a("SaUt")),s=a("iRFk"),p=function(e){function t(t){var a=e.call(this,t)||this;return a.handleRemoveCard=function(e){a.props.dispatch({type:"global/removeArticle",payload:e.target.getAttribute("data-time")})},a.changeCard=function(e){try{"block"===e.target.parentNode.parentNode.nextSibling.style.display?e.target.parentNode.parentNode.nextSibling.style.display="none":e.target.parentNode.parentNode.nextSibling.style.display="block"}catch(e){}},a.props.dispatch({type:"global/getCurrentArticleList"}),a}return d.__extends(t,e),t.getDerivedStateFromProps=function(e){var t=e.articleList;e.loading;return{articleList:t}},t.prototype.render=function(){var e=this,t=[];return i.default.createElement(i.default.Fragment,null,i.default.createElement(r.default,{grid:{column:1},dataSource:this.props.loading?new Array(5):this.props.articleList,renderItem:function(a){if(a){var l=new Date(a.time),n=l.toLocaleString(),d=l.getFullYear()+"/"+(l.getMonth()+1)+"/"+l.getDate();return t.push(d),i.default.createElement(i.default.Fragment,null,t.indexOf(d)===t.length-1?i.default.createElement("p",null,d):null,i.default.createElement(r.default.Item,null,i.default.createElement(o.default,{hoverable:!0,title:a.title,bodyStyle:{display:"none"},extra:"?delete"===document.location.search?i.default.createElement("span",{onClick:e.handleRemoveCard,"data-time":a.time},"\xd7"):null,onClick:e.changeCard},i.default.createElement(s,{source:a.content,className:c.default.markDownCard,escapeHtml:!1}),i.default.createElement("span",null,n))))}return i.default.createElement(r.default.Item,null,i.default.createElement("div",{className:c.default.skeleton},i.default.createElement("div",{className:c.default.skeletonTitle}),i.default.createElement("div",{className:c.default.skeletonContent}),i.default.createElement("div",{className:c.default.skeletonTime})))}}))},t}(i.default.Component),f=(0,u.connect)(function(e){return{loading:e.loading.global,articleList:e.global.articleList,photoFiles:e.global.photoFiles}})(p);t.default=f}}]);