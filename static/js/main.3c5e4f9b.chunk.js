(window["webpackJsonpranking-heroes"]=window["webpackJsonpranking-heroes"]||[]).push([[0],{34:function(e,n,t){e.exports=t.p+"static/media/space.701270fd.jpg"},44:function(e,n,t){e.exports=t(57)},53:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),c=t(19),l=t(15),s=t(29),p=t(30),u=(t(53),t(17)),d=t(31),m=t(32),h=t(40),f=t(33),g=t(41),E=t(13),b=t(14),y=t(34),v=t.n(y);function x(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0 auto;\n\n  background-image: url(",');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n\n  header {\n    h1 {\n      font-family: "Monoton", sans-serif;\n      color: #fff;\n    }\n  }\n']);return x=function(){return e},e}var w=b.b.div(x(),v.a),O={padding:"10px"},j=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{style:O},r.a.createElement("input",{id:"search-box",style:{padding:"10px"},"aria-label":"search heroes",type:"search",placeholder:"search heroes",onChange:n}))};function F(){var e=Object(E.a)(["\n background: #000046;\n        background: -webkit-linear-gradient(to bottom, #1CB5E0, #000046);\n        background: linear-gradient(to bottom, #1CB5E0, #000046);\n  width: 350px;\nposition: absolute;\nleft: 50%;\nmargin-left: -175px;\n background-repeat: no-repeat;\n        background-size: cover;\n        overflow-Y: scroll;\n        height: 500px;\n        color #fff;\n        text-shadow: 0px 1px 5px #003F7F;\n    \nimg {\n    border-radius: 50%;\n    height: 150px;\n    width: 150px;\n \n  }\n\n\n\n    "]);return F=function(){return e},e}function k(){var e=Object(E.a)(['\n  border-radius: 7px;\n  background-color: #1d66bb;\n\n  width: 150px;\n  position: relative;\n\n  img {\n    width: 150px;\n    border-radius: 5px;\n  }\n\n  .info {\n    h2 {\n      color: #f5f5f5;\n\n      font-family: "Teko", sans-serif;\n\n      font-size: calc(18px + 0.5vw);\n      margin: 1% auto;\n    }\n  }\n  .flip-button {\n    margin: 1% auto;\n    background-color: transparent;\n    border: 2px solid #f5f5f5 !important;\n    font-weight: bold;\n    transition: linear 0.3s ease-in-out;\n    color: #f5f5f5;\n  }\n\n  box-shadow: 0 0 5px 0px #f5f5f5;\n\n  ',"\n\n  button {\n    padding: 10px;\n    border-radius: 8px;\n    background-color: #f5f5f5;\n  }\n"]);return k=function(){return e},e}var S=b.b.div(k(),(function(e){return e.primary&&Object(b.a)(F())})),C=function(e){var n=e.images,t=e.name,a=e.onFlip;return r.a.createElement(S,null,r.a.createElement("img",{src:n,alt:"heroes"}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,t),r.a.createElement("button",{className:"flip-button",onClick:a,id:t},"FLIP CARD")))};function H(){var e=Object(E.a)(["\n  max-width: 2000px;\n\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n\n  grid-gap: 10px 10px;\n  position: relative;\n  margin: 60px auto;\n  @media only screen and (max-width: 965px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media only screen and (max-width: 675px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return H=function(){return e},e}var P=b.b.div(H()),R=t(39),N=function(e){return r.a.createElement(R.a,{url:"https://pjdaze.github.io/my-hero-stats-redux/",options:{text:"So This Are The Stats On My Favorite Super Hero!"}})},_=function(e){var n=e.images,t=e.name,a=e.powers,o=e.appearance,i=e.biography,c=e.onFlip,l=Object.entries(a).map((function(e,n){return r.a.createElement("li",{key:n},"".concat(e[0],": ").concat(e[1]))}));return r.a.createElement(S,{primary:!0},r.a.createElement("div",{className:"img-wrap"},r.a.createElement("img",{src:n,alt:"heroes"})),r.a.createElement("div",{style:{textShadow:"0px 1px 5px #003F7F"}}," ",r.a.createElement("p",{className:"card-titles"},"Name:"),r.a.createElement("p",null,t),r.a.createElement("p",{className:"card-titles"},"Nicknames: "),r.a.createElement("p",null,i.aliases.join(", ")),r.a.createElement("p",{className:"card-titles"},"Place Of Birth:"),r.a.createElement("p",null,i.placeOfBirth),r.a.createElement("p",{className:"card-titles"},"First Appearance:"),r.a.createElement("p",null,i.firstAppearance),r.a.createElement("p",null,"Publisher"),r.a.createElement("p",null,i.firstAppearance),r.a.createElement("p",{className:"card-titles"},"Appearance"),r.a.createElement("ul",null,r.a.createElement("li",null,"Gender: ",o.gender),r.a.createElement("li",null,"Race: ",o.race),r.a.createElement("li",null,"Hair Color: ",o.hairColor),r.a.createElement("li",null,"Height: ",o.height[0]),r.a.createElement("li",null,"Weight: ",o.weight[0])),r.a.createElement("h2",null,"Powers Stats"),r.a.createElement("ul",null,l)),r.a.createElement("button",{className:"flip-button",style:{marginBottom:"10px"},onClick:c},"FlIP CARD"),r.a.createElement(N,null))},T=function(e){var n=e.heroes,t=e.onFlip,a=e.isFlipped,o=e.cardToFlip;return r.a.createElement(P,null,n.map((function(e,i){return a?n[i].name===o?r.a.createElement(_,{key:Math.random()+n[i],appearance:n[i].appearance,name:n[i].name,images:n[i].images.sm,powers:n[i].powerstats,biography:n[i].biography,onFlip:t,cardToFlip:o}):void 0:r.a.createElement(C,{key:Math.random()+n[i],name:n[i].name,images:n[i].images.lg,onFlip:t})})))},A=t(10),D=function(e){return r.a.createElement(A.b,null,r.a.createElement(u.a,{path:"/",exact:!0,component:L}),r.a.createElement(u.a,{path:"/App",component:L}))},I=(t(56),function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).handleClick=function(e){t.setState({flipped:!t.state.flipped,cardToFlip:e.target.id})},t.state={flipped:!1,cardToFlip:""},t}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestHeroes()}},{key:"render",value:function(){var e=this.state,n=e.flipped,t=e.cardToFlip,a=this.props,o=a.heroes,i=a.onSearchChange,c=a.searchField,l=a.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return l?r.a.createElement("h1",null,' "Loading..."'):r.a.createElement(w,{className:"home"},r.a.createElement("header",{style:{height:"100px"}}," ",r.a.createElement("h1",null,"Find Your Hero")),r.a.createElement(j,{searchChange:i}),r.a.createElement(T,{heroes:s.slice(0,12),onFlip:this.handleClick,isFlipped:n,cardToFlip:t}),r.a.createElement(D,null))}}]),n}(r.a.Component)),L=Object(c.b)((function(e){return{searchField:e.searchHeroes.searchField,heroes:e.requestHeroes.heroes,isPending:e.requestHeroes.isPending,err:e.requestHeroes.err}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestHeroes:function(){return e((function(e){e({type:"REQUEST_HEROES_PENDING"}),fetch("https://akabab.github.io/superhero-api/api/all.json").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_HEROES_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_HEROES_FAILED",payload:n})}))}))}}}))(I),U=t(38);function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(t,!0).forEach((function(n){Object(U.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Q={searchField:""},G={isPending:!1,heroes:[],err:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=Object(s.createLogger)(),z=Object(l.c)({searchHeroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return q({},e,{searchField:n.payload});default:return e}},requestHeroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_HEROES_PENDING":return q({},e,{isPending:!0});case"REQUEST_HEROES_SUCCESS":return q({},e,{heroes:n.payload,isPending:!1});case"REQUEST_HEROES_FAILED":return q({},e,{err:n.payload,isPending:!1});default:return e}}}),W=Object(l.d)(z,Object(l.a)(p.a,M));i.a.render(r.a.createElement(c.a,{store:W},r.a.createElement(u.a,null,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.3c5e4f9b.chunk.js.map