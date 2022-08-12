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

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ts-webpack/./scss/main.scss?");

/***/ }),

/***/ "./src/addDataToStorage.ts":
/*!*********************************!*\
  !*** ./src/addDataToStorage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDataToStorage)\n/* harmony export */ });\nfunction addDataToStorage(key, element) {\n    const storage = localStorage.getItem(key);\n    if (storage) {\n        const data = JSON.parse(storage);\n        const modified = [element, ...data];\n        localStorage.setItem(key, JSON.stringify(modified));\n    }\n    else {\n        localStorage.setItem(key, JSON.stringify([element]));\n    }\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/addDataToStorage.ts?");

/***/ }),

/***/ "./src/deleteCharacter.ts":
/*!********************************!*\
  !*** ./src/deleteCharacter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteCharacter)\n/* harmony export */ });\n/* harmony import */ var _getDataFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromStorage */ \"./src/getDataFromStorage.ts\");\n/* harmony import */ var _renderCharacters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCharacters */ \"./src/renderCharacters.ts\");\n\n\nfunction deleteCharacter(btns, container, noCharsText) {\n    btns.forEach(btn => {\n        btn.addEventListener('click', () => {\n            const id = Number(btn.getAttribute('id'));\n            const idsFromStorage = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ids');\n            const idx = idsFromStorage.findIndex(el => el === id);\n            const updatedIDs = [...idsFromStorage.slice(0, idx), ...idsFromStorage.slice(idx + 1)];\n            const charsFromStorage = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('characters');\n            const charIdx = charsFromStorage.findIndex(char => char.id === id);\n            const updatedChars = [...charsFromStorage.slice(0, charIdx), ...charsFromStorage.slice(charIdx + 1)];\n            if (updatedChars.length <= 5 && document.querySelector('.more').classList.contains('active')) {\n                document.querySelector('.more').classList.remove('active');\n            }\n            localStorage.setItem('ids', JSON.stringify(updatedIDs));\n            localStorage.setItem('characters', JSON.stringify(updatedChars));\n            if (updatedChars.length === 0) {\n                container.innerHTML = noCharsText;\n                return;\n            }\n            (0,_renderCharacters__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.querySelector('.characters-container'), (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('characters'), \"You don't have any characters\");\n        });\n    });\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/deleteCharacter.ts?");

/***/ }),

/***/ "./src/fetchCharacter.ts":
/*!*******************************!*\
  !*** ./src/fetchCharacter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCharacter)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction fetchCharacter(id, request = {}) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const url = 'https://rickandmortyapi.com/api/character/' + id;\n        const response = yield fetch(url, request);\n        const character = yield response.json();\n        return yield character;\n    });\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/fetchCharacter.ts?");

/***/ }),

/***/ "./src/getDataFromStorage.ts":
/*!***********************************!*\
  !*** ./src/getDataFromStorage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDataFromStorage)\n/* harmony export */ });\nfunction getDataFromStorage(key) {\n    const data = localStorage.getItem(key);\n    if (data) {\n        const parsed = JSON.parse(data);\n        return parsed;\n    }\n    return null;\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/getDataFromStorage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataFromStorage */ \"./src/getDataFromStorage.ts\");\n/* harmony import */ var _renderCharacters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCharacters */ \"./src/renderCharacters.ts\");\n/* harmony import */ var _fetchCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchCharacter */ \"./src/fetchCharacter.ts\");\n/* harmony import */ var _addDataToStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addDataToStorage */ \"./src/addDataToStorage.ts\");\n\n\n\n\n\nconst container = document.querySelector('.characters-container');\nconst input = document.querySelector('.input-id');\nconst getCharacterButton = document.querySelector('.load');\nconst clearStorageButton = document.querySelector('.clear');\nconst loadMoreCharactersButton = document.querySelector('.more');\nconst noCharsText = `You don't have any characters...`;\nlet sliceTo = 5;\nwindow.addEventListener('load', () => {\n    const characters = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('characters');\n    if (characters.length === 0) {\n        container.innerHTML = noCharsText;\n        return;\n    }\n    if (characters.length > 5) {\n        loadMoreCharactersButton.classList.add('active');\n    }\n    const showCharacters = characters.slice(0, 5);\n    (0,_renderCharacters__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container, showCharacters, noCharsText);\n});\nclearStorageButton.addEventListener('click', () => {\n    if (loadMoreCharactersButton.classList.contains('active')) {\n        loadMoreCharactersButton.classList.remove('active');\n    }\n    if ((0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('characters').length > 0) {\n        localStorage.setItem('ids', JSON.stringify([]));\n        localStorage.setItem('characters', JSON.stringify([]));\n        container.innerHTML = noCharsText;\n    }\n    else {\n        alert(\"You don't have any characters\");\n    }\n});\ngetCharacterButton.addEventListener('click', () => {\n    const value = parseInt(input.value);\n    const id = parseInt(value.toFixed(0));\n    let ids = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('ids');\n    if (ids && ids.includes(id)) {\n        alert(`You already added character with id ${id}`);\n        return;\n    }\n    if (!ids) {\n        ids = [];\n    }\n    // @ts-ignore\n    if (id >= 1 && id <= 826 && !ids.includes(id)) {\n        (0,_fetchCharacter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id)\n            .then(character => {\n            (0,_addDataToStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('characters', character);\n            (0,_addDataToStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('ids', character.id);\n        })\n            .then(() => {\n            const characters = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('characters');\n            if (characters.length > 5) {\n                const showCharacters = characters.slice(0, 5);\n                (0,_renderCharacters__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container, showCharacters, noCharsText);\n                loadMoreCharactersButton.classList.add('active');\n            }\n            else {\n                (0,_renderCharacters__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container, characters, noCharsText);\n            }\n        })\n            .catch(error => console.log(error));\n    }\n    else {\n        alert(\"Please enter ID from 1 to 826\");\n    }\n});\nloadMoreCharactersButton.addEventListener('click', () => {\n    const characters = (0,_getDataFromStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('characters');\n    characters.length >= sliceTo + 5 ? sliceTo += 5 : sliceTo = characters.length;\n    console.log(container.childElementCount);\n    console.log(characters.length);\n    if (container.childElementCount === characters.length) {\n        loadMoreCharactersButton.classList.remove('active');\n    }\n    if (characters.length >= 5) {\n        (0,_renderCharacters__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(container, characters.slice(0, sliceTo), noCharsText);\n    }\n});\n\n\n//# sourceURL=webpack://ts-webpack/./src/index.ts?");

/***/ }),

/***/ "./src/renderCharacters.ts":
/*!*********************************!*\
  !*** ./src/renderCharacters.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCharacters)\n/* harmony export */ });\n/* harmony import */ var _deleteCharacter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCharacter */ \"./src/deleteCharacter.ts\");\n\nfunction renderCharacters(container, characters, noCharsText) {\n    container.innerHTML = '';\n    if (container && characters) {\n        characters.forEach(character => {\n            const { id, name, status, image, species, gender, location, created } = character;\n            const createdData = new Date(created).toLocaleDateString();\n            container.innerHTML += `\n                <div class=\"character\" id=\"${id}\">\n                    <div class=\"img-container\">\n                        <img src=\"${image}\" alt=\"${name}\">\n                    </div>\n                    <div class=\"character__description\">\n                        <h4>${name}</h4>\n                        <p class=\"status\"><span class=\"info\">Status:</span> ${status}</p>\n                        <p class=\"species\"><span class=\"info\">Species:</span> ${species}</p>\n                        <p class=\"gender\"><span class=\"info\">Gender:</span> ${gender}</p>\n                        <p class=\"location\"><span class=\"info\">Location:</span> ${location.name}</p>\n                        <p class=\"created\"><span class=\"info\">Created:</span> ${createdData}</p>\n                    </div>\n                    <button type=\"button\" class=\"delete\" id=\"${id}\">Delete</button>\n                </div>\n           `;\n        });\n        const deleteCharacterButtons = document.querySelectorAll('.delete');\n        (0,_deleteCharacter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deleteCharacterButtons, container, noCharsText);\n    }\n    else {\n        container.innerHTML = noCharsText;\n    }\n}\n\n\n//# sourceURL=webpack://ts-webpack/./src/renderCharacters.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;