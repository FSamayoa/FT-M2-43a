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

/***/ "./browser/app.js":
/*!************************!*\
  !*** ./browser/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _whiteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whiteboard */ \"./browser/whiteboard.js\");\n\n\n\n\n  \n  var socket = window.io(window.location.origin);\n\n  socket.on(\"connect\", function () {\n    console.log(\"Connected!\");\n  });\n\n  socket.on(\"load\", function (strokes) {\n    strokes.forEach(function (stroke) {\n      var start = stroke.start;\n      var end = stroke.end;\n      var color = stroke.color;\n      _whiteboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(start, end, color, false);\n    });\n  });\n\n  socket.on(\"draw\", function (start, end, color) {\n    _whiteboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(start, end, color, false);\n  });\n\n  _whiteboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"draw\", function (start, end, color) {\n    socket.emit(\"draw\", start, end, color);\n  });\n\n\n\n//# sourceURL=webpack://05-bundlers/./browser/app.js?");

/***/ }),

/***/ "./browser/event-emitter.js":
/*!**********************************!*\
  !*** ./browser/event-emitter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n  \n\n  // our EventEmitter constructor function\n  function EventEmitter() {\n    this.subscribers = {};\n  }\n\n  // To be used like:\n  // instanceOfEE.on('touchdown', cheerFn);\n  EventEmitter.prototype.on = function (eventName, eventListener) {\n    // If this instance's subscribers object does not yet\n    // have the key matching the given event name, create the\n    // key and assign the value of an empty array.\n    if (!this.subscribers[eventName]) {\n      this.subscribers[eventName] = [];\n    }\n\n    // Push the given listener function into the array\n    // located on the instance's subscribers object.\n    this.subscribers[eventName].push(eventListener);\n  };\n\n  // To be used like:\n  // instanceOfEE.emit('codec', 'Hey Snake, Otacon is calling!');\n  EventEmitter.prototype.emit = function (eventName) {\n    // If there are no subscribers to this event name, why even?\n    if (!this.subscribers[eventName]) {\n      return;\n    }\n\n    // Grab the remaining arguments to our emit function.\n    var remainingArgs = [].slice.call(arguments, 1);\n\n    // For each subscriber, call it with our arguments.\n    this.subscribers[eventName].forEach(function (listener) {\n      listener.apply(null, remainingArgs);\n    });\n  };\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventEmitter);\n\n\n\n//# sourceURL=webpack://05-bundlers/./browser/event-emitter.js?");

/***/ }),

/***/ "./browser/whiteboard.js":
/*!*******************************!*\
  !*** ./browser/whiteboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emitter */ \"./browser/event-emitter.js\");\n\n\n\n\n  const whiteboard = new _event_emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  // Ultimately, the color of our stroke;\n  var color;\n\n  // The color selection elements on the DOM.\n  var colorElements = [].slice.call(document.querySelectorAll(\".marker\"));\n\n  colorElements.forEach(function (el) {\n    // Set the background color of this element\n    // to its id (purple, red, blue, etc).\n    el.style.backgroundColor = el.id;\n\n    // Attach a click handler that will set our color variable to\n    // the elements id, remove the selected class from all colors,\n    // and then add the selected class to the clicked color.\n    el.addEventListener(\"click\", function () {\n      color = this.id;\n      document.querySelector(\".selected\").classList.remove(\"selected\");\n      this.classList.add(\"selected\");\n    });\n  });\n\n  var canvas = document.getElementById(\"paint\");\n\n  var ctx = canvas.getContext(\"2d\");\n\n  function resize() {\n    // Unscale the canvas (if it was previously scaled)\n    ctx.setTransform(1, 0, 0, 1, 0, 0);\n\n    // The device pixel ratio is the multiplier between CSS pixels\n    // and device pixels\n    var pixelRatio = window.devicePixelRatio || 1;\n\n    // Allocate backing store large enough to give us a 1:1 device pixel\n    // to canvas pixel ratio.\n    var w = canvas.clientWidth * pixelRatio,\n      h = canvas.clientHeight * pixelRatio;\n    if (w !== canvas.width || h !== canvas.height) {\n      // Resizing the canvas destroys the current content.\n      // So, save it...\n      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n\n      canvas.width = w;\n      canvas.height = h;\n\n      // ...then restore it.\n      ctx.putImageData(imgData, 0, 0);\n    }\n\n    // Scale the canvas' internal coordinate system by the device pixel\n    // ratio to ensure that 1 canvas unit = 1 css pixel, even though our\n    // backing store is larger.\n    ctx.scale(pixelRatio, pixelRatio);\n\n    ctx.lineWidth = 5;\n    ctx.lineJoin = \"round\";\n    ctx.lineCap = \"round\";\n  }\n\n  resize();\n  window.addEventListener(\"resize\", resize);\n\n  var currentMousePosition = { x: 0, y: 0 };\n  var lastMousePosition = { x: 0, y: 0 };\n\n  var drawing = false;\n\n  canvas.addEventListener(\"mousedown\", function (e) {\n    drawing = true;\n    currentMousePosition.x = e.pageX - this.offsetLeft;\n    currentMousePosition.y = e.pageY - this.offsetTop;\n  });\n\n  canvas.addEventListener(\"mouseup\", function () {\n    drawing = false;\n  });\n\n  canvas.addEventListener(\"mousemove\", function (e) {\n    if (!drawing) return;\n\n    lastMousePosition.x = currentMousePosition.x;\n    lastMousePosition.y = currentMousePosition.y;\n\n    currentMousePosition.x = e.pageX - this.offsetLeft;\n    currentMousePosition.y = e.pageY - this.offsetTop;\n\n    whiteboard.draw(lastMousePosition, currentMousePosition, color, true);\n  });\n\n  whiteboard.draw = function (start, end, strokeColor, shouldBroadcast) {\n    // Draw the line between the start and end positions\n    // that is colored with the given color.\n    ctx.beginPath();\n    ctx.strokeStyle = strokeColor || \"black\";\n    ctx.moveTo(start.x, start.y);\n    ctx.lineTo(end.x, end.y);\n    ctx.closePath();\n    ctx.stroke();\n\n    // If shouldBroadcast is truthy, we will emit a draw event to listeners\n    // with the start, end and color data.\n    if (shouldBroadcast) {\n      whiteboard.emit(\"draw\", start, end, strokeColor);\n    }\n  };\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whiteboard);\n\n\n//# sourceURL=webpack://05-bundlers/./browser/whiteboard.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./browser/app.js");
/******/ 	
/******/ })()
;