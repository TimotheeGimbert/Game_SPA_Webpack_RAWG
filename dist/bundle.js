/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _sharedHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedHTML */ \"./src/js/sharedHTML.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageDetailDOM */ \"./src/js/pageDetailDOM.js\");\n\n\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var displayGame = function displayGame(gameData) {\n      (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.presentation)(gameData);\n      var resultsContainer = document.querySelector(\".page-detail\");\n      resultsContainer.innerHTML = (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.hero)(gameData) + (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.presentation)(gameData) + (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.buy)(gameData) + '<section id=\"trailer\"></section>' + '<section id=\"screenshots\"></section>';\n      (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.trailer)(gameData.id);\n      (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_2__.screenshots)(gameData.id);\n      (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.globalListeners)();\n      (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.pageDetailListeners)(gameData);\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"d5a3052008ad4d41b5931a1fd0522c13\")).then(function (response) {\n        return response.json();\n      }).then(function (responseObject) {\n        return displayGame(responseObject);\n      });\n    };\n\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = (0,_sharedHTML__WEBPACK_IMPORTED_MODULE_0__.header)() + \"<main class=\\\"page-detail\\\">... loading ...</main>\" + (0,_sharedHTML__WEBPACK_IMPORTED_MODULE_0__.footer)();\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _sharedHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedHTML */ \"./src/js/sharedHTML.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _pageListDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageListDOM */ \"./src/js/pageListDOM.js\");\n\n\n\n\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var preparePage = function preparePage() {\n    var fullResults = [];\n    var totalDisplayed = 0;\n    var nbToDisplay = 9;\n    var maxToDisplay = 27;\n    var resultsContainer = document.querySelector(\".page-list .grid\");\n    var moreButton = document.getElementById('moreButton');\n    resultsContainer.innerHTML = '';\n    (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.globalListeners)();\n\n    var displayResults = function displayResults(results) {\n      var resultsContent = results.map(function (result) {\n        return (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_2__.cardGame)(result);\n      });\n      resultsContainer.innerHTML += resultsContent;\n      totalDisplayed += nbToDisplay;\n      (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.pageListListeners)(fullResults, totalDisplayed);\n    };\n\n    moreButton.addEventListener('click', function () {\n      displayResults(fullResults.slice(totalDisplayed, totalDisplayed + nbToDisplay));\n      if (totalDisplayed >= maxToDisplay) moreButton.style.display = 'none';\n    });\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&page_size=27&search=\").concat(argument) : url + '&page_size=27';\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseObject) {\n        fullResults = responseObject.results;\n        displayResults(fullResults.slice(0, nbToDisplay));\n      });\n    };\n\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"d5a3052008ad4d41b5931a1fd0522c13\"), cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = (0,_sharedHTML__WEBPACK_IMPORTED_MODULE_0__.header)() + (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_2__.intro)() + \"<main class=\\\"page-list\\\">\\n        <div class=\\\"grid\\\">... loading ...</div>\\n        <button id=\\\"moreButton\\\">Show more</button>\\n      </main>\" + (0,_sharedHTML__WEBPACK_IMPORTED_MODULE_0__.footer)();\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split('/');\n  pageArgument = path[1] || '';\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener('hashchange', function () {\n  return setRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalListeners\": () => (/* binding */ globalListeners),\n/* harmony export */   \"pageListListeners\": () => (/* binding */ pageListListeners),\n/* harmony export */   \"pageDetailListeners\": () => (/* binding */ pageDetailListeners)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nvar globalListeners = function globalListeners() {\n  var homeTitle = document.getElementById('websiteHeading');\n  homeTitle.addEventListener('click', function () {\n    window.location.hash = '#pagelist';\n  });\n  document.addEventListener('keypress', function (e) {\n    var searchBar = document.getElementById('search');\n\n    if (e.key === \"Enter\" && e.target === searchBar) {\n      e.preventDefault();\n      window.location.hash = \"#pagelist/\".concat(searchBar.value);\n    }\n  });\n  var searchInput = document.getElementById('search');\n  searchInput.addEventListener('click', function () {\n    return searchInput.value = '';\n  });\n};\n\nvar cardGameHover = function cardGameHover(game) {\n  var released = game.released,\n      genres = game.genres,\n      rating = game.rating,\n      rating_top = game.rating_top,\n      ratings_count = game.ratings_count,\n      tags = game.tags;\n  return \"\\n        <p>\".concat(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(released).format('MMM DD, YYYY'), \"</p>\\n        <p>\").concat(genres.map(function (g) {\n    return g.name;\n  }).join(', '), \"</p>\\n        <p>\").concat(rating, \"/\").concat(rating_top, \" - \").concat(ratings_count, \" votes</p>\\n        <p class=\\\"tags\\\">\").concat(tags.filter(function (tag) {\n    return tag.language === 'eng';\n  }).map(function (tag) {\n    return tag.name;\n  }).join(', '), \"</p>\\n  \");\n};\n\nvar pageListListeners = function pageListListeners(results, nbDisplays) {\n  console.log(results);\n  var resultsUsed = results.slice(0, nbDisplays);\n  resultsUsed.forEach(function (game) {\n    var id = game.id,\n        slug = game.slug,\n        background_image = game.background_image;\n    var gameCard = document.getElementById(id);\n    var gameCardMain = gameCard.querySelector('main');\n    gameCard.addEventListener('click', function () {\n      return window.location.replace(\"#pagedetail/\".concat(slug));\n    });\n    gameCard.addEventListener('mouseenter', function () {\n      return gameCardMain.innerHTML = cardGameHover(game);\n    });\n    gameCard.addEventListener('mouseleave', function () {\n      return gameCardMain.innerHTML = \"<img src=\\\"\".concat(background_image, \"\\\">\");\n    });\n  });\n};\n\nvar pageDetailListeners = function pageDetailListeners(gameData) {\n  var website = gameData.website;\n  var websiteButton = document.querySelector('.hero button');\n  websiteButton.addEventListener('click', function () {\n    return window.open(website);\n  });\n  var homeTitle = document.getElementById('websiteHeading');\n  homeTitle.addEventListener('click', function () {\n    return window.location.hash = '#pagelist';\n  });\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/listeners.js?");

/***/ }),

/***/ "./src/js/pageDetailDOM.js":
/*!*********************************!*\
  !*** ./src/js/pageDetailDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hero\": () => (/* binding */ hero),\n/* harmony export */   \"presentation\": () => (/* binding */ presentation),\n/* harmony export */   \"buy\": () => (/* binding */ buy),\n/* harmony export */   \"trailer\": () => (/* binding */ trailer),\n/* harmony export */   \"screenshots\": () => (/* binding */ screenshots)\n/* harmony export */ });\n\n\nvar hero = function hero(gameData) {\n  var background_image = gameData.background_image;\n  console.log(gameData);\n  var bg_css = \"background-image: url(\".concat(background_image, \")\");\n  return \"\\n    <section class=\\\"hero\\\" style=\\\"\".concat(bg_css, \"\\\">\\n      <button>Visit Official Website</button>\\n    </section>\\n  \");\n};\n\nvar presentation = function presentation(gameData) {\n  var name = gameData.name,\n      rating = gameData.rating,\n      rating_top = gameData.rating_top,\n      ratings_count = gameData.ratings_count,\n      description = gameData.description,\n      released = gameData.released,\n      developers = gameData.developers,\n      platforms = gameData.platforms,\n      publishers = gameData.publishers,\n      tags = gameData.tags,\n      genres = gameData.genres;\n  return \"\\n    <section class=\\\"presentation\\\">\\n      <div class=\\\"heading\\\">\\n        <div class=\\\"title\\\">\\n          <h1>\".concat(name, \"</h1>\\n        </div>\\n        <div class=\\\"rating\\\">\").concat(rating, \"/\").concat(rating_top, \" - \").concat(ratings_count, \" votes</div>\\n      </div>\\n      <div class=\\\"description\\\">\\n        <h4>Description</h4>\\n        <p>\").concat(description, \"</p>\\n      </div>\\n      <div class=\\\"details\\\">\\n        <div>\\n          <h4>Release Date</h4>\\n          <p>\").concat(released, \"</p>\\n        </div>\\n        <div>\\n          <h4>Developers</h4>\\n          <p>\").concat(developers.map(function (dev) {\n    return \"<a href=\\\"#pagelist/&developers=\".concat(dev.slug, \"\\\">\").concat(dev.name, \"</a>\");\n  }).join(', '), \"</p>\\n        </div>\\n        <div>\\n          <h4>Platforms</h4>\\n          <p>\").concat(platforms.map(function (p) {\n    return \"<a href=\\\"#pagelist/&platforms=\".concat(p.platform.id, \"\\\">\").concat(p.platform.name, \"</a>\");\n  }).join(', '), \"</p>\\n        </div>\\n        <div>\\n          <h4>Publishers</h4>\\n          <p>\").concat(publishers.map(function (pub) {\n    return \"<a href=\\\"#pagelist/&publishers=\".concat(pub.slug, \"\\\">\").concat(pub.name, \"</a>\");\n  }).join(', '), \"</p>\\n        </div>\\n        <div>\\n          <h4>Genres</h4>\\n          <p>\").concat(genres.map(function (genre) {\n    return \"<a href=\\\"#pagelist/&genres=\".concat(genre.slug, \"\\\">\").concat(genre.name, \"</a>\");\n  }).join(', '), \"</p>\\n        </div>\\n        <div>\\n          <h4>Tags</h4>\\n          <p>\").concat(tags.map(function (tag) {\n    return \"<a href=\\\"#pagelist/&tags=\".concat(tag.slug, \"\\\">\").concat(tag.name, \"</a>\");\n  }).join(', '), \"</p>\\n        </div>\\n      </div>\\n    </section>\\n  \");\n};\n\nvar buy = function buy(gameData) {\n  var stores = gameData.stores;\n  var resultHTML = \"<section class=\\\"buy\\\"> <h2>BUY</h2>\";\n  stores.map(function (store) {\n    resultHTML += \"<a href=\\\"https://\".concat(store.store.domain, \"\\\" target=\\\"_blank\\\">\").concat(store.store.name, \"</a><br>\");\n  });\n  resultHTML += \"</section>\";\n  return resultHTML;\n};\n\nvar displayTrailer = function displayTrailer(jsonObj) {\n  var trailerURL = jsonObj.results[0].data.max;\n  document.getElementById('trailer').innerHTML = \"\\n    <h2>TRAILER</h2>\\n    <video controls>\\n      <source src=\\\"\".concat(trailerURL, \"\\\">\\n    </video>\\n  \");\n};\n\nvar fetchTrailer = function fetchTrailer(url, argument) {\n  fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"d5a3052008ad4d41b5931a1fd0522c13\")).then(function (response) {\n    return response.json();\n  }).then(function (responseObject) {\n    return displayTrailer(responseObject);\n  });\n};\n\nvar trailer = function trailer(gameID) {\n  fetchTrailer('https://api.rawg.io/api/games', \"\".concat(gameID, \"/movies\"));\n};\n\nvar displayScreenshots = function displayScreenshots(jsonObj) {\n  console.log(jsonObj);\n  var screenshotsURLs = jsonObj.results.slice(0, 4);\n  var screenshots = document.getElementById('screenshots');\n  screenshots.innerHTML = \"<h2>Screenshots</h2>\";\n  screenshotsURLs.forEach(function (screenshot) {\n    screenshots.innerHTML += \"<img src=\\\"\".concat(screenshot.image, \"\\\">\");\n  });\n};\n\nvar fetchScreenshots = function fetchScreenshots(url, argument) {\n  fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"d5a3052008ad4d41b5931a1fd0522c13\")).then(function (response) {\n    return response.json();\n  }).then(function (responseObject) {\n    return displayScreenshots(responseObject);\n  });\n};\n\nvar screenshots = function screenshots(gameID) {\n  fetchScreenshots('https://api.rawg.io/api/games', \"\".concat(gameID, \"/screenshots\"));\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/pageDetailDOM.js?");

/***/ }),

/***/ "./src/js/pageListDOM.js":
/*!*******************************!*\
  !*** ./src/js/pageListDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intro\": () => (/* binding */ intro),\n/* harmony export */   \"cardGame\": () => (/* binding */ cardGame)\n/* harmony export */ });\n\n\nvar intro = function intro() {\n  return \"\\n    <aside class=\\\"intro\\\">\\n      <h1>Welcome,</h1>\\n      <p>\\n        The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame,\\n        the video game industry's top talents pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n        brightest, and most innovative int the interactive entertainment industry. For three exciting days, leading-edge companies,\\n        groundbreaking new technologies, and never-before-seen products will be showcased? The Hyper Progame connects you\\n        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.\\n      </p>\\n      <p> <br> This fictionnal demo project has been coded in pure JavaScript and SCSS (Vanilla JS + Sass) over 3 days of alone-work.</p>\\n    </aside>\\n  \";\n};\n\nvar cardGame = function cardGame(game) {\n  var id = game.id,\n      background_image = game.background_image,\n      name = game.name,\n      platforms = game.platforms;\n\n  var getPlatformLogo = function getPlatformLogo(platform) {\n    if (platform.platform.name.includes('Xbox')) return '<img src=\"./src/assets/images/logos/xbox.svg\">';\n    if (platform.platform.name.includes('PlayStation')) return '<img src=\"./src/assets/images/logos/ps4.svg\">';\n    if (platform.platform.name.includes('Switch')) return '<img src=\"./src/assets/images/logos/switch.svg\">';\n    if (platform.platform.name.includes('PC')) return '<img src=\"./src/assets/images/logos/windows.svg\">';\n    if (platform.platform.name.includes('Linux')) return '<img src=\"./src/assets/images/logos/linux.svg\">';\n    if (platform.platform.name.includes('Android')) return '<img src=\"./src/assets/images/logos/mobile.svg\">';\n  };\n\n  return \"\\n  <article id=\\\"\".concat(id, \"\\\" class=\\\"cardGame\\\">\\n    <main>\\n      <img src=\\\"\").concat(background_image, \"\\\">\\n    </main>\\n    <h1>\").concat(name, \"</h1>\\n    <div>\").concat(platforms.map(function (p) {\n    return getPlatformLogo(p);\n  }).join(' '), \"</div>\\n  </article>\\n  \");\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/pageListDOM.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/routes.js?");

/***/ }),

/***/ "./src/js/sharedHTML.js":
/*!******************************!*\
  !*** ./src/js/sharedHTML.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n\n\nvar header = function header() {\n  return \"\\n    <header>\\n      <h1 id=\\\"websiteHeading\\\">The Hyper ProGame</h1>\\n      <form>\\n        <img src=\\\"./src/assets/images/icons/search.svg\\\">\\n        <input id=\\\"search\\\" type=\\\"text\\\" name=\\\"search\\\" VALUE=\\\"Find a game ...\\\">\\n      </form>\\n    </header>\\n  \";\n};\n\nvar footer = function footer() {\n  return \"\\n    <footer>\\n      <hr>\\n      <p>Timoth\\xE9e @ 2022 - Fictional website for exercice</p>\\n    </footer>\\n  \";\n};\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/js/sharedHTML.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",$=\"Invalid Date\",l=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},D=\"en\",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if(\"string\"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+\"Hours\",0);case u:return l(g+\"Minutes\",1);case s:return l(g+\"Seconds\",2);case i:return l(g+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),$=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://TheHyperProGame_SPA_Webpack/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;