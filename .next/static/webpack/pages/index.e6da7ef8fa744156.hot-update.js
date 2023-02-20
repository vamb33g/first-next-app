"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductItem.js":
/*!***********************************!*\
  !*** ./components/ProductItem.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n/* eslint-disable @next/next/no-img-element */ \n\nfunction ProductItem(param) {\n    var product = param.product, addToCartHandler = param.addToCartHandler;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/product/\".concat(product.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: product.image,\n                        alt: product.name,\n                        className: \"rounded shadow object-cover h-64 w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/product/\".concat(product.slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: product.brand\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"primary-button\",\n                        type: \"button\",\n                        onClick: function() {\n                            return addToCartHandler(product);\n                        },\n                        children: \"Ajouter au panier\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\components\\\\ProductItem.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = ProductItem;\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQURBLDhDQUE4QyxDQUNqQjtBQUNIO0FBRVgsU0FBU0UsV0FBVyxDQUFDLEtBQTZCLEVBQUU7UUFBN0JDLE9BQU8sR0FBVCxLQUE2QixDQUEzQkEsT0FBTyxFQUFFQyxnQkFBZ0IsR0FBM0IsS0FBNkIsQ0FBbEJBLGdCQUFnQjtJQUM3RCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBQ25CLDhEQUFDTixrREFBSTtnQkFBQ08sSUFBSSxFQUFFLFdBQVUsQ0FBZSxPQUFiSixPQUFPLENBQUNLLElBQUksQ0FBRTswQkFDcEMsNEVBQUNDLEdBQUM7OEJBQ0EsNEVBQUNDLEtBQUc7d0JBQ0ZDLEdBQUcsRUFBRVIsT0FBTyxDQUFDUyxLQUFLO3dCQUNsQkMsR0FBRyxFQUFFVixPQUFPLENBQUNXLElBQUk7d0JBQ2pCUixTQUFTLEVBQUMseUNBQXlDOzs7Ozs0QkFDbkQ7Ozs7O3dCQUNBOzs7OztvQkFDQzswQkFDUCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLCtDQUErQzs7a0NBQzVELDhEQUFDTixrREFBSTt3QkFBQ08sSUFBSSxFQUFFLFdBQVUsQ0FBZSxPQUFiSixPQUFPLENBQUNLLElBQUksQ0FBRTtrQ0FDcEMsNEVBQUNDLEdBQUM7c0NBQ0EsNEVBQUNNLElBQUU7Z0NBQUNULFNBQVMsRUFBQyxTQUFTOzBDQUFFSCxPQUFPLENBQUNXLElBQUk7Ozs7O29DQUFNOzs7OztnQ0FDekM7Ozs7OzRCQUNDO2tDQUNQLDhEQUFDRSxHQUFDO3dCQUFDVixTQUFTLEVBQUMsTUFBTTtrQ0FBRUgsT0FBTyxDQUFDYyxLQUFLOzs7Ozs0QkFBSztrQ0FDdkMsOERBQUNELEdBQUM7OzRCQUFDLEdBQUM7NEJBQUNiLE9BQU8sQ0FBQ2UsS0FBSzs7Ozs7OzRCQUFLO2tDQUN2Qiw4REFBQ0MsUUFBTTt3QkFDTGIsU0FBUyxFQUFDLGdCQUFnQjt3QkFDMUJjLElBQUksRUFBQyxRQUFRO3dCQUNiQyxPQUFPLEVBQUU7bUNBQU1qQixnQkFBZ0IsQ0FBQ0QsT0FBTyxDQUFDO3lCQUFBO2tDQUN6QyxtQkFFRDs7Ozs7NEJBQVM7Ozs7OztvQkFDTDs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBOUJ1QkQsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtLmpzPzA3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEl0ZW0oeyBwcm9kdWN0LCBhZGRUb0NhcnRIYW5kbGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Z31gfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3cgb2JqZWN0LWNvdmVyIGgtNjQgdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC01XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3Byb2R1Y3QuYnJhbmR9PC9wPlxyXG4gICAgICAgIDxwPiR7cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnRIYW5kbGVyKHByb2R1Y3QpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFqb3V0ZXIgYXUgcGFuaWVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiYWRkVG9DYXJ0SGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzbHVnIiwiYSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImgyIiwicCIsImJyYW5kIiwicHJpY2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductItem.js\n");

/***/ })

});