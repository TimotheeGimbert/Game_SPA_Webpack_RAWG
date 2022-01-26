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

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  document.querySelector('#pageContent').innerHTML = \"Choisissez un lien\";\n  console.log('Home', argument);\n};\n\n\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  console.log('PageDetail', argument);\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n          released = gameData.released,\n          description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"d5a3052008ad4d41b5931a1fd0522c13\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('PageList', argument);\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var displayResults = function displayResults(results) {\n      console.log(results);\n      var resultsContent = results.map(function (article) {\n        return \"<article id=\\\"\".concat(article.id, \"\\\" class=\\\"cardGame\\\">\\n          <img src=\\\"\").concat(article.background_image, \"\\\">\\n          <h1>\").concat(article.name, \"</h1>\\n          <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n        </article>\");\n      });\n      var resultsContainer = document.querySelector(\".page-list .grid\");\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n      results.forEach(function (article) {\n        document.getElementById(article.id).addEventListener('click', function () {\n          window.location.replace(\"#pagedetail/\".concat(article.id));\n        });\n      });\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"d5a3052008ad4d41b5931a1fd0522c13\"), cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <header>\\n        <h1>The Hyper ProGame</h1>\\n        <form>\\n          <input type=\\\"submit\\\" id=\\\"searchButton\\\" class=\\\"\\\" value=\\\"Go !\\\">\\n          <input id=\\\"search\\\" type=\\\"text\\\" name=\\\"search\\\">\\n        </form>\\n      </header>\\n    \";\n    pageContent.innerHTML += \"\\n      <aside class=\\\"intro\\\">\\n        <h1>Welcome,</h1>\\n        <p>\\n          A video game or computer game is an electronic game that involves \\n          interaction with a user interface or input device \\u2013 such as a joystick, \\n          controller, keyboard, or motion sensing device \\u2013 to generate visual \\n          feedback. This feedback is shown on a video display device, such as a TV \\n          set, monitor, touchscreen, or virtual reality headset. Video games are \\n          often augmented with audio feedback delivered through speakers or headphones,\\n          and sometimes with other types of feedback, including haptic technology.\\n        </p>\\n      </aside>\\n    \";\n    pageContent.innerHTML += \"\\n      <main class=\\\"page-list\\\">\\n        <button class=\\\"filter\\\">Plateform : </button>\\n        <div class=\\\"grid\\\">...loading</div>\\n        <button class=\\\"more\\\">Show more</button>\\n      </main>\\n    \";\n    pageContent.innerHTML += \"\\n      <footer>\\n        <hr>\\n        <p>Timoth\\xE9e @ 2022 - Fictional website for exercice</p>\\n      </footer>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n //import 'bootstrap';\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split('/');\n  pageArgument = path[1] || '';\n  var pageContent = document.getElementById('pageContent');\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener('hashchange', function () {\n  return setRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n\n\n//# sourceURL=webpack://Game_SPA_Webpack_RAWG/./src/js/routes.js?");

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