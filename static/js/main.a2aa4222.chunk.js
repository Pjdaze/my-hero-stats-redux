(window["webpackJsonpranking-heroes"]=window["webpackJsonpranking-heroes"]||[]).push([[0],{35:function(e,n,t){e.exports=t.p+"static/media/space.701270fd.jpg"},44:function(e,n,t){e.exports=t(56)},55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=t(10),l=t(18),s=t(30),u=t(31),p=t(17),d=t(11),f=t(32),m=t(33),h=t(40),g=t(34),E=t(41),b=t(14),v=t(15),y=t(35),O=t.n(y);function w(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  text-align: center;\n  margin: 0 auto;\n\n  background-image: url(",');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n\n  header {\n    h1 {\n      font-family: "Monoton", sans-serif;\n      color: #fff;\n    }\n  }\n']);return w=function(){return e},e}var x=v.b.div(w(),O.a),S=t(16),H={padding:"10px"},j={fontSize:"1em",padding:"8px",textAlign:"center",fontFamily:"Titillium Web"},C=function(e){e.searchfield;var n,t=e.searchChange;return a.a.createElement("div",{style:H},a.a.createElement("input",(n={"aria-label":"search robots",id:"search-box",style:j},Object(S.a)(n,"aria-label","search heroes"),Object(S.a)(n,"type","search"),Object(S.a)(n,"placeholder","Search Heroes"),Object(S.a)(n,"onChange",t),n)))};function k(){var e=Object(b.a)(["\n\n\n\npadding: 10px;\n\n\n\n\n\n background-repeat: no-repeat;\n        background-size: cover;\n\n\n\n\nwidth: 95%;\nmax-width: 350px;\nmargin: 200px auto;\n\nheight: 450px;\noverflow-Y: scroll;\n\n    color: #f5f5f5;\n        text-shadow: 0px 1px 5px #003F7F;\n.flipped-card {\n\n\n\n  *{\n\n  border 1px solid #fff;\n}\n\n\ndisplay: grid; \ngrid-template-columns: 1fr 1fr;\n\n\ntext-align: left\np {\n  padding: 15px;\n\n  margin-bottom: 8px;\n}\n\n\n}\n\n\n\n    .img-wrap {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n    }\n \n  }\n\n.power-stats {\n  *{\n    box-sizing: border-box;\n  border 1px solid #fff;\n  text-align: left;\n\n}\n  display: grid; \n\ngrid-template-columns: 1fr 1fr;\n\n}\n    \nimg {\n    border-radius: 50%;\n    height: 150px;\n    width: 150px;\n \n  }\n  li {\n  padding: 15px;\n}\n\n\n&:hover {\nbackground-color: #222;\n    .flip-button {\n      color: #222;\n      display: block;\n      margin-bottom: 0;\n      \n    }\n\n\n    img {\n      opacity: 1;\n    }\n\n    "]);return k=function(){return e},e}function R(){var e=Object(b.a)(['\n  border-radius: 7px;\n  background-color: #1d66bb;\n  transition: ALl 500ms ease-in-out;\n  &:hover {\n    background-color: #222;\n    .flip-button {\n      display: block;\n      margin-bottom: 60%;\n    }\n\n    img {\n      opacity: 0;\n    }\n  }\n  width: 150px;\n  position: relative;\n\n  img {\n    width: 150px;\n    border-radius: 5px;\n  }\n\n  .info {\n    h2 {\n      color: #f5f5f5;\n\n      font-family: "Teko", sans-serif;\n\n      font-size: calc(18px + 0.5vw);\n      margin: 1% auto;\n    }\n  }\n  .flip-button {\n    margin: 1% auto;\n    background-color: transparent;\n    border: 2px solid #f5f5f5 !important;\n    font-weight: bold;\n    transition: linear 0.3s ease-in-out;\n    color: #f5f5f5;\n    display: none;\n  }\n\n  box-shadow: 0 0 5px 0px #f5f5f5;\n\n  /* primary starts here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/\n\n  ',"\n\n  button {\n    padding: 10px;\n    border-radius: 8px;\n    background-color: #f5f5f5;\n  }\n"]);return R=function(){return e},e}var T=v.b.div(R(),(function(e){return e.primary&&Object(v.a)(k())})),_=function(e){var n=e.images,t=e.name,r=e.onFlip;return a.a.createElement(T,null,a.a.createElement("img",{src:n,alt:"heroes"}),a.a.createElement("div",{className:"info"},a.a.createElement("h2",null,t),a.a.createElement("button",{className:"flip-button",onClick:r,id:t},"FLIP CARD")))};function F(){var e=Object(b.a)(["\n  max-width: 2000px;\n\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n\n  grid-gap: 10px 10px;\n  position: relative;\n  margin: 60px auto;\n  @media only screen and (max-width: 965px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media only screen and (max-width: 675px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return F=function(){return e},e}var N=v.b.div(F()),D=t(39),A=function(e){return a.a.createElement(D.a,{url:"https://pjdaze.github.io/my-hero-stats-redux/",options:{text:"So This Are The Stats On My Favorite Super Hero!"}})},P={closeHeroCard:function(){return{type:"CLOSE_HERO_CARD"}}},L=Object(c.b)((function(e){return{selectedHero:e.selectedHero}}),P)((function(e){e.onFlip,e.closeHeroCard;var n=e.selectedHero,t=e.history;if(!n.details||!n.details.id)return t.push("/"),null;var r=n.details,o=r.appearance,i=r.powerstats,c=r.name,l=r.biography,s=r.images,u=Object.entries(i).map((function(e,n){return a.a.createElement("li",{key:n},"".concat(e[0],": ").concat(e[1]))})),d=s.lg;return console.log("imagex",d),a.a.createElement(T,{primary:!0},a.a.createElement("div",{className:"img-wrap"},a.a.createElement("img",{className:"mama",src:d,alt:"heroes"})),a.a.createElement(p.b,{className:"flip-button",to:"/"}," ",a.a.createElement("button",{className:"flip-button"},"FLIPP CARD")," "),a.a.createElement("div",{className:"flipped-card"}," ",a.a.createElement("p",{className:"card-titles"},"Name:"),a.a.createElement("p",null,c),a.a.createElement("p",{className:"card-titles"},"Nicknames: "),a.a.createElement("p",null,l.aliases.join(", ")),a.a.createElement("p",{className:"card-titles"},"Place Of Birth:"),a.a.createElement("p",null,l.placeOfBirth),a.a.createElement("p",{className:"card-titles"},"First Appearance:"),a.a.createElement("p",null,l.firstAppearance),a.a.createElement("span",{className:"card-titles"},"Publisher:"),a.a.createElement("p",null,l.firstAppearance),a.a.createElement("p",{className:"card-titles"},"Appearance:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Gender: ",o.gender),a.a.createElement("li",null,"Race: ",o.race),a.a.createElement("li",null,"Hair Color: ",o.hairColor),a.a.createElement("li",null,"Height: ",o.height[0]),a.a.createElement("li",null,"Weight: ",o.weight[0]))),a.a.createElement("div",{className:"power-stats"},a.a.createElement("p",{className:"card-titles"},"Powers Stats"),a.a.createElement("ul",null,u)),a.a.createElement(A,null))})),U={selectHero:function(e){return{type:"SELECTED_HERO_DETAILS",payload:e}}},I=Object(d.f)(Object(c.b)((function(e){return{}}),U)((function(e){var n=e.heroes,t=(e.images,e.history),r=e.selectHero;return a.a.createElement(N,null,n.map((function(e,o){return a.a.createElement(_,{key:Math.random()+n[o],name:n[o].name,images:n[o].images.lg,onFlip:function(){!function(e){r(e),t.push("/heroDetail")}(e)}})})))}))),W=(t(55),function(e){function n(){return Object(f.a)(this,n),Object(h.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestHeroes()}},{key:"render",value:function(){var e=this.props,n=e.heroes,t=e.onSearchChange,r=e.searchField,o=e.cardToFlip,i=e.handleClick,c=e.flipped,l=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement(x,{className:"home"},a.a.createElement("header",{style:{height:"100px"}}," ",a.a.createElement("h1",null,"Find Your Hero")),a.a.createElement(C,{searchChange:t}),a.a.createElement(I,{heroes:l.slice(0,12),onFlip:i,isFlipped:c,cardToFlip:o}))}}]),n}(a.a.Component)),q=Object(c.b)((function(e){return{searchField:e.searchHeroes.searchField,heroes:e.requestHeroes.heroes,isPending:e.requestHeroes.isPending,err:e.requestHeroes.err,flipped:e.setOnClick.flipped,cardToFlip:e.setOnClick.cardToFlip}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestHeroes:function(){return e((function(e){e({type:"REQUEST_HEROES_PENDING"}),fetch("https://akabab.github.io/superhero-api/api/all.json").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_HEROES_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_HEROES_FAILED",payload:n})}))}))},handleClick:function(n){return e(function(e){return{type:"SET_CURRENT_HERO",payload:e}}(n.target.id))}}}))(W),z=function(e){return a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:"/",component:q}),a.a.createElement(d.a,{path:"/heroDetail",component:L}))};function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(t,!0).forEach((function(n){Object(S.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B={searchField:""},M={isPending:!1,heroes:[],err:""},J={cardToFlip:""},Y={flipped:!1,cardToFlip:"",selectedHeroDetails:null},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=Object(s.createLogger)(),X=Object(l.c)({searchHeroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return G({},e,{searchField:n.payload});default:return e}},requestHeroes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_HEROES_PENDING":return G({},e,{isPending:!0});case"REQUEST_HEROES_SUCCESS":return G({},e,{heroes:n.payload,isPending:!1});case"REQUEST_HEROES_FAILED":return G({},e,{err:n.payload,isPending:!1});default:return e}},setHeroID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"SET_CURRENT_HERO":return G({},e,{cardToFlip:n.payload});default:return e}},setOnClick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"SELECTED_HERO_DETAILS":return G({},e,{selectedHeroDetails:n.payload});case"SET_CURRENT_HERO":return G({},e,{flipped:!0,cardToFlip:n.payload});case"CLOSE_HERO_CARD":return G({},e,{flipped:!1,cardToFlip:null});default:return e}},selectedHero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"SELECTED_HERO_DETAILS":return G({},e,{details:n.payload});default:return e}}}),Z=Object(l.d)(X,Object(l.a)(u.a,V));i.a.render(a.a.createElement(c.a,{store:Z},a.a.createElement(p.a,{basename:"/"},a.a.createElement(z,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-hero-stats-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/my-hero-stats-redux","/service-worker.js");$?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(n,e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.a2aa4222.chunk.js.map