webpackJsonp([1,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(18),o=i(a);n(11);var r=n(10),s=i(r),c=n(12),p=i(c),l=n(13),u=i(l);o.default.use(s.default),new o.default({el:"#app",framework7:{root:"#app",animateNavBackIcon:!0,routes:[{path:"/contact/:name/",component:u.default}]},components:{App:p.default},template:"<App/>"})},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{groupedContacts:{},contacts:[],splitView:!1,linkView:"",options:{propertyToIndex:"login"}}},methods:{checkSplitView:function(){this.$$(window).width()<767?(this.splitView=!1,this.linkView=""):(this.splitView=!0,this.linkView=".view-detail")},openPrompt:function(){var t=this;t.$f7.prompt("Your name please!","New contact",function(e){t.contacts.push({login:e})})},groupList:function(t,e,n){var i={};return n=n||function(t){return t.charAt(0).toUpperCase()},t.forEach(function(t){i[n(t[e])]=i[n(t[e])]||[],i[n(t[e])].push(t)}),i}},created:function(){var t=this;this.checkSplitView(),this.$$(window).resize(this.checkSplitView),this.$$.get("https://api.github.com/repos/nolimits4web/framework7/contributors",function(e){t.contacts=JSON.parse(e),t.contacts.length>1&&t.contacts.sort(function(e,n){return e=e[t.options.propertyToIndex].toLowerCase(),n=n[t.options.propertyToIndex].toLowerCase(),(e>n)-(n>e)})})},watch:{contacts:function(){var t=this;t.groupedContacts=t.groupList(t.contacts,t.options.propertyToIndex)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{contact:this.$route.params.name}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".view-detail{display:none}@media (min-width:769px){.view-main{float:left;width:320px;border-right:1px solid #b2b2b2}.view-detail{display:block;width:calc(100% - 320px)}.view-detail .navbar .navbar-inner .back{display:none}.item-link .item-content .item-inner{background-image:none}}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".contact-header{height:175px;z-index:10;box-shadow:0 2px 3px rgba(0,0,0,.1);box-sizing:border-box;padding:20px 15px;background:#fff;text-align:center;font-size:2em}.contact-header img{display:block;margin:0 auto;border-radius:90px}",""])},function(t,e){},function(t,e){},,,function(t,e,n){n(9),n(8),n(16);var i=n(2)(n(4),n(14),null,null);t.exports=i.exports},function(t,e,n){n(17);var i=n(2)(n(5),n(15),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("f7-statusbar"),n("f7-panel",{attrs:{right:"right",reveal:"reveal"}},[n("f7-block",[n("p",[t._v("Right panel content goes here")])])],1),n("f7-panel",{attrs:{left:"left",reveal:"reveal"}},[n("f7-block",[n("p",[t._v("Left panel content goes here")])])],1),n("f7-views",[n("f7-view",{attrs:{main:"main","navbar-through":"navbar-through","dynamic-navbar":!0}},[n("f7-navbar",[n("f7-nav-center",{attrs:{sliding:"sliding"}},[t._v("Contacts")]),n("f7-nav-right",[n("f7-link",{on:{click:t.openPrompt}},[n("f7-icon",{attrs:{icon:"icon-plus"}},[t._v("+")])],1)],1)],1),n("f7-pages",[n("f7-page",{attrs:{name:"index"}},[n("f7-list",{attrs:{contacts:"contacts"}},t._l(t.groupedContacts,function(e,i){return n("f7-list-group",[n("f7-list-item",{attrs:{title:i,"group-title":"group-title"}}),t._l(e,function(e){return n("f7-list-item",{attrs:{title:e.login,link:"/contact/"+e.login+"/","link-view":t.linkView}})})],2)}))],1)],1)],1),n("f7-view",{staticClass:"view-detail",attrs:{"navbar-through":"navbar-through",animatePages:!t.splitView}},[n("f7-pages",[n("f7-page",{attrs:{name:"main"}})],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{attrs:{name:"about"}},[n("f7-navbar",{attrs:{"back-link":"Back"}}),n("div",{staticClass:"contact-header"},[n("img",{attrs:{src:"http://placehold.it/90"}}),t._v(t._s(t.contact))])],1)},staticRenderFns:[]}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)}]);
//# sourceMappingURL=app.17607ce13b6396c48950.js.map