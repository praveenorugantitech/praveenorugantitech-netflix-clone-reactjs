(this["webpackJsonppraveenorugantitech-netflix-clone"]=this["webpackJsonppraveenorugantitech-netflix-clone"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),o=n.n(a),i=n(17),r=n.n(i),s=(n(29),n(30),n(5)),l=n.n(s),d=n(6),h=n(4),u=n(18),f=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(49),n(19)),j=n(20),b=n(23),m=n.n(b);var p=function(e){var t=e.title,n=e.fetchUrl,o=e.isLargeRow,i=Object(a.useState)([]),r=Object(h.a)(i,2),s=r[0],u=r[1],b=Object(a.useState)(""),p=Object(h.a)(b,2),g=p[0],O=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:t=e.sent,u(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)(v.a,{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return t=e.name||e.title||e.orginal_name,console.log(t),void(""!==g?O(""):m()(t).then((function(e){var t=new URLSearchParams(new URL(e).search);O(t.get("v"))})).catch((function(e){return console.log(e)})));var t},className:"row__poster ".concat(o&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),""!==g&&Object(c.jsx)(j.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="04ae7689fc21853d7db93ebc5e887fa0",O={fetchTrending:"trending/all/day?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(65);var _=function(){var e=Object(a.useState)({}),t=Object(h.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(O.fetchNetflixOriginals);case 2:t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url('".concat("https://image.tmdb.org/t/p/original/").concat(null===n||void 0===n?void 0:n.backdrop_path,"')"),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.orginal_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"More Info"})]}),Object(c.jsx)("p",{className:"banner__description",children:null===n||void 0===n?void 0:n.overview})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"})]})};n(66);var x=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){o(!0)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsx)("nav",{className:"".concat(n&&"nav__black"),children:Object(c.jsx)("div",{className:"nav__contents",children:Object(c.jsx)("img",{alt:"",className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"})})})};var w=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(x,{}),Object(c.jsx)(_,{}),Object(c.jsx)(p,{isLargeRow:!0,title:"Netflix Originals",fetchUrl:O.fetchNetflixOriginals}),Object(c.jsx)(p,{title:"Trending now",fetchUrl:O.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:O.fetchTrending}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:O.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:O.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:O.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romance Movies",fetchUrl:O.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentaries",fetchUrl:O.fetchDocumentaries})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);