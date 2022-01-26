/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _componentsDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentsDOM */ \"./src/js/componentsDOM.js\");\n/* harmony import */ var _pageDetailDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageDetailDOM */ \"./src/js/pageDetailDOM.js\");\n\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n          released = gameData.released,\n          description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"d5a3052008ad4d41b5931a1fd0522c13\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = (0,_componentsDOM__WEBPACK_IMPORTED_MODULE_0__.header)() + (0,_pageDetailDOM__WEBPACK_IMPORTED_MODULE_1__.pageDetailLoading)() + (0,_componentsDOM__WEBPACK_IMPORTED_MODULE_0__.footer)();\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _componentsDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentsDOM */ \"./src/js/componentsDOM.js\");\n/* harmony import */ var _pageListDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageListDOM */ \"./src/js/pageListDOM.js\");\n\n\n\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  var preparePage = function preparePage() {\n    var displayResults = function displayResults(results) {\n      console.log(results);\n      var resultsContent = results.map(function (result) {\n        return (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_1__.cardGame)(result);\n      });\n      var resultsContainer = document.querySelector(\".page-list .grid\");\n      resultsContainer.innerHTML = resultsContent;\n      (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_1__.pageListListeners)(results);\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"d5a3052008ad4d41b5931a1fd0522c13\"), cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = (0,_componentsDOM__WEBPACK_IMPORTED_MODULE_0__.header)() + (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_1__.intro)() + (0,_pageListDOM__WEBPACK_IMPORTED_MODULE_1__.pageListLoading)() + (0,_componentsDOM__WEBPACK_IMPORTED_MODULE_0__.footer)();\n    preparePage();\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/componentsDOM.js":
/*!*********************************!*\
  !*** ./src/js/componentsDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n\n\nvar header = function header() {\n  return \"\\n    <header>\\n      <h1>The Hyper ProGame</h1>\\n      <form>\\n        <input id=\\\"search\\\" type=\\\"text\\\" name=\\\"search\\\">\\n      </form>\\n    </header>\\n  \";\n};\n\nvar footer = function footer() {\n  return \"\\n    <footer>\\n      <hr>\\n      <p>Timoth\\xE9e @ 2022 - Fictional website for exercice</p>\\n    </footer>\\n  \";\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/componentsDOM.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n //import 'bootstrap';\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split('/');\n  pageArgument = path[1] || '';\n  var pageContent = document.getElementById('pageContent');\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener('hashchange', function () {\n  return setRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/index.js?");

/***/ }),

/***/ "./src/js/pageDetailDOM.js":
/*!*********************************!*\
  !*** ./src/js/pageDetailDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageDetailLoading\": () => (/* binding */ pageDetailLoading)\n/* harmony export */ });\n\n\nvar pageDetailLoading = function pageDetailLoading() {\n  return \"\\n    <main class=\\\"page-detail\\\">\\n      <section class=\\\"hero\\\">\\n        <button>Check Website |></button> \\n      </section>\\n    </main>\\n  \";\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/pageDetailDOM.js?");

/***/ }),

/***/ "./src/js/pageListDOM.js":
/*!*******************************!*\
  !*** ./src/js/pageListDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intro\": () => (/* binding */ intro),\n/* harmony export */   \"pageListLoading\": () => (/* binding */ pageListLoading),\n/* harmony export */   \"cardGame\": () => (/* binding */ cardGame),\n/* harmony export */   \"pageListListeners\": () => (/* binding */ pageListListeners)\n/* harmony export */ });\n\n\nvar intro = function intro() {\n  return \"\\n    <aside class=\\\"intro\\\">\\n      <h1>Welcome,</h1>\\n      <p>\\n        A video game or computer game is an electronic game that involves \\n        interaction with a user interface or input device \\u2013 such as a joystick, \\n        controller, keyboard, or motion sensing device \\u2013 to generate visual \\n        feedback. This feedback is shown on a video display device, such as a TV \\n        set, monitor, touchscreen, or virtual reality headset. Video games are \\n        often augmented with audio feedback delivered through speakers or headphones,\\n        and sometimes with other types of feedback, including haptic technology.\\n      </p>\\n    </aside>\\n  \";\n};\n\nvar pageListLoading = function pageListLoading() {\n  return \"\\n    <main class=\\\"page-list\\\">\\n      <button class=\\\"filter\\\">Plateform : </button>\\n      <div class=\\\"grid\\\">...loading</div>\\n      <button class=\\\"more\\\">Show more</button>\\n    </main>\\n  \";\n};\n\nvar cardGame = function cardGame(game) {\n  var id = game.id,\n      background_image = game.background_image,\n      name = game.name;\n  return \"\\n  <article id=\\\"\".concat(id, \"\\\" class=\\\"cardGame\\\">\\n    <main>\\n      <img src=\\\"\").concat(background_image, \"\\\">\\n    </main>\\n    <h1>\").concat(name, \"</h1>\\n  </article>\\n  \");\n};\n\nvar cardGameHover = function cardGameHover(game) {\n  var released = game.released,\n      rating = game.rating,\n      rating_top = game.rating_top,\n      ratings_count = game.ratings_count;\n\n  var getGenres = function getGenres() {\n    var genresList = [];\n    game.genres.forEach(function (genre) {\n      return genresList.push(genre.name);\n    });\n    return genresList.join(', ');\n  };\n\n  return \"\\n        <p>\".concat(released, \"</p>\\n        <p>\").concat(getGenres(), \"</p>\\n        <p>\").concat(rating, \"/\").concat(rating_top, \" - \").concat(ratings_count, \" votes</p>\\n  \");\n};\n\nvar pageListListeners = function pageListListeners(games) {\n  games.forEach(function (game) {\n    var id = game.id,\n        background_image = game.background_image;\n    var gameCard = document.getElementById(id);\n    var gameCardMain = gameCard.querySelector('main');\n    gameCard.addEventListener('click', function () {\n      return window.location.replace(\"#pagedetail/\".concat(id));\n    });\n    gameCard.addEventListener('mouseenter', function () {\n      return gameCardMain.innerHTML = cardGameHover(game);\n    });\n    gameCard.addEventListener('mouseleave', function () {\n      return gameCardMain.innerHTML = \"<img src=\\\"\".concat(background_image, \"\\\">\");\n    });\n  });\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/pageListDOM.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/style/index.scss?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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