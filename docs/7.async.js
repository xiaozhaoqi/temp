(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+IzV":function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("VIk5");var r=n(a("X+Ft"));a("0NfI");var o=n(a("ZHzj"));a("QKdE");var u=n(a("2Vcd")),d=l(a("rOct")),i=n(a("FQm9")),f=a("Nyzl"),c=function(e){function t(t){var a=e.call(this,t)||this;return a.state={focusBtn:"1"},a.props.dispatch({type:"global/getInfoFromAPI",pathname:"journalismApi",search:""}),a.props.dispatch({type:"global/getInfoFromAPI",pathname:"weatherApi",search:"city=\u5317\u4eac"}),a.props.dispatch({type:"global/getHotInfo"}),a.props.dispatch({type:"global/getHotDetail",payload:1}),a}return d.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.infoFromAPI,l=t.hotDetail,n=t.hotInfo,d=a.journalismApi_||null,f=a.weatherApi_city_\u5317\u4eac||null;return i.default.createElement("div",{style:{display:"flex"}},i.default.createElement("div",{style:{overflow:"hidden",flex:"1",marginRight:"22px"}},f?i.default.createElement(i.default.Fragment,null,i.default.createElement("h2",null,"weather"),i.default.createElement(u.default,{size:"small",bordered:!0,dataSource:["\u4eca\u65e5\u6c14\u6e29"+f.data.wendu+"\u2103\uff0c"+f.data.ganmao].concat(f.data.forecast.map(function(e,t){return i.default.createElement("div",{key:t},i.default.createElement("span",{style:{flex:1}},e.date),i.default.createElement("span",{style:{flex:1}},e.type),i.default.createElement("span",{style:{flex:1}},e.fengxiang),i.default.createElement("span",{style:{flex:1}},e.high),i.default.createElement("span",{style:{flex:1}},e.low))})),renderItem:function(e){return i.default.createElement(u.default.Item,null,e)}})):null,d?Object.keys(d.data).map(function(e,t){return i.default.createElement("div",{style:{margin:"10px 0"},key:t},i.default.createElement("h2",null,e),i.default.createElement(u.default,{size:"small",bordered:!0,dataSource:d.data[e].filter(function(e){return e.title}).map(function(e,t){return i.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.open(e.link)},key:t},i.default.createElement("a",{style:{display:"inline-block",marginRight:"20px"}},e.title.slice(0,26)),i.default.createElement("span",{style:{position:"absolute",right:"10px"}},e.source))}),renderItem:function(e){return i.default.createElement(u.default.Item,{key:e},e)}}))}):null),i.default.createElement("div",{style:{overflow:"hidden",flex:"1"}},i.default.createElement(o.default,{title:"\u6570\u636e\u6e90\u6765\u81eav2ex\u7f51\u53cbprintf520.com\u63d0\u4f9b\u7684\u722c\u866b\u63a5\u53e3",placement:"left"},i.default.createElement("h2",null,"\u805a\u5408\u70ed\u699c")),n&&n.Data&&n.Data.length?n.Data.map(function(t){return i.default.createElement(r.default,{size:"small",key:t.id,type:t.id===e.state.focusBtn?"primary":"dashed",style:{margin:"0 10px 10px 0"},onClick:function(){e.setState({focusBtn:t.id}),e.props.dispatch({type:"global/getHotDetail",payload:t.id})}},t.title)}):null,l&&l.Data&&l.Data.length?i.default.createElement(u.default,{size:"small",bordered:!0,dataSource:l.Data.map(function(e){return i.default.createElement("a",{href:e.url,target:"_blank",key:e.url},e.title)}),renderItem:function(e){return i.default.createElement(u.default.Item,{key:e},e)}}):null))},t}(i.default.Component),s=(0,f.connect)(function(e){return{loading:e.loading.global,infoFromAPI:e.global.infoFromAPI,hotInfo:e.global.hotInfo,hotDetail:e.global.hotDetail}})(c);t.default=s}}]);