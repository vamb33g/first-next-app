"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductScreen; }\n/* harmony export */ });\n/* harmony import */ var C_Users_sdtva_Desktop_next_tailwind_ecom_first_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sdtva_Desktop_next_tailwind_ecom_first_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sdtva_Desktop_next_tailwind_ecom_first_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Store */ \"./utils/Store.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction ProductScreen(props) {\n    _s();\n    var product = props.product;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_9__.Store), state = ref.state, dispatch = ref.dispatch;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            title: \"Article introuvable\",\n            children: \"Article introuvable\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    var addToCartHandler = function() {\n        var _ref = _asyncToGenerator(C_Users_sdtva_Desktop_next_tailwind_ecom_first_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var existItem, quantity, data;\n            return C_Users_sdtva_Desktop_next_tailwind_ecom_first_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        existItem = state.cart.cartItems.find(function(x) {\n                            return x.slug === product.slug;\n                        });\n                        quantity = existItem ? existItem.quantity + 1 : 1;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/products/\".concat(product._id));\n                    case 4:\n                        data = _ctx.sent.data;\n                        if (!(data.countInStock < quantity)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Sorry. Product is out of stock\"));\n                    case 7:\n                        dispatch({\n                            type: \"CART_ADD_ITEM\",\n                            payload: _objectSpread({}, product, {\n                                quantity: quantity\n                            })\n                        });\n                        router.push(\"/cart\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addToCartHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        title: product.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: \"Retour \\xe0 notre s\\xe9lection\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-4 md:gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: product.image,\n                            alt: product.name,\n                            width: 640,\n                            height: 500,\n                            layout: \"responsive\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                        className: \"text-lg\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Algo: \",\n                                        product.algori\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: [\n                                        \"Description: \",\n                                        product.description\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card p-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"Price\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"$\",\n                                                product.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-2 flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: product.countInStock > 0 ? \"In stock\" : \"Unavailable\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"primary-button w-full\",\n                                    onClick: addToCartHandler,\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sdtva\\\\Desktop\\\\next-tailwind-ecom\\\\first-next-app\\\\pages\\\\product\\\\[slug].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n};\n_s(ProductScreen, \"HedWEmzADlnhtOEM7d3OXHBnVxs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProductScreen;\nvar _c;\n$RefreshReg$(_c, \"ProductScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNOzs7Ozs7d0NBQU07OENBSy9CLDhEQUFDRixJQUFFOzt3Q0FBQyxlQUFhO3dDQUFDaEMsT0FBTyxDQUFDbUMsV0FBVzs7Ozs7O3dDQUFNOzs7Ozs7Z0NBQ3hDOzs7Ozs0QkFDRDtrQ0FDTiw4REFBQ2IsS0FBRztrQ0FDRiw0RUFBQ0EsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFVBQVU7OzhDQUN2Qiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7c0RBQ3hDLDhEQUFDRCxLQUFHO3NEQUFDLE9BQUs7Ozs7O2dEQUFNO3NEQUNoQiw4REFBQ0EsS0FBRzs7Z0RBQUMsR0FBQztnREFBQ3RCLE9BQU8sQ0FBQ29DLEtBQUs7Ozs7OztnREFBTzs7Ozs7O3dDQUN2Qjs4Q0FDTiw4REFBQ2QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7c0RBQ3hDLDhEQUFDRCxLQUFHO3NEQUFDLFFBQU07Ozs7O2dEQUFNO3NEQUNqQiw4REFBQ0EsS0FBRztzREFBRXRCLE9BQU8sQ0FBQ2dCLFlBQVksR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLGFBQWE7Ozs7O2dEQUFPOzs7Ozs7d0NBQzlEOzhDQUNOLDhEQUFDcUIsUUFBTTtvQ0FDTGQsU0FBUyxFQUFDLHVCQUF1QjtvQ0FDakNlLE9BQU8sRUFBRWpDLGdCQUFnQjs4Q0FDMUIsYUFFRDs7Ozs7d0NBQVM7Ozs7OztnQ0FDTDs7Ozs7NEJBQ0Y7Ozs7OztvQkFDRjs7Ozs7O1lBQ0MsQ0FDVDtDQUNIO0dBdEV1QlAsYUFBYTs7UUFHcEJOLGtEQUFTOzs7QUFIRk0sS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZHVjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi91dGlscy9kYic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vLi4vdXRpbHMvU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFNjcmVlbihwcm9wcykge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGlmICghcHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9XCJBcnRpY2xlIGludHJvdXZhYmxlXCI+QXJ0aWNsZSBpbnRyb3V2YWJsZTwvTGF5b3V0PjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHByb2R1Y3Quc2x1Zyk7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0SXRlbSA/IGV4aXN0SXRlbS5xdWFudGl0eSArIDEgOiAxO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvJHtwcm9kdWN0Ll9pZH1gKTtcclxuXHJcbiAgICBpZiAoZGF0YS5jb3VudEluU3RvY2sgPCBxdWFudGl0eSkge1xyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoJ1NvcnJ5LiBQcm9kdWN0IGlzIG91dCBvZiBzdG9jaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NBUlRfQUREX0lURU0nLCBwYXlsb2FkOiB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH0gfSk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2NhcnQnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17cHJvZHVjdC5uYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SZXRvdXIgw6Agbm90cmUgc8OpbGVjdGlvbjwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBtZDpnYXAtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgIHdpZHRoPXs2NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgID48L0ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntwcm9kdWN0Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPkFsZ286IHtwcm9kdWN0LmFsZ29yaX08L2xpPlxyXG4gICAgICAgICAgICB7LyogPGxpPkJyYW5kOiB7cHJvZHVjdC5icmFuZH08L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QucmF0aW5nfSBvZiB7cHJvZHVjdC5udW1SZXZpZXdzfSByZXZpZXdzXHJcbiAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICA8bGk+RGVzY3JpcHRpb246IHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+UHJpY2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PiR7cHJvZHVjdC5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+U3RhdHVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvZHVjdC5jb3VudEluU3RvY2sgPiAwID8gJ0luIHN0b2NrJyA6ICdVbmF2YWlsYWJsZSd9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b24gdy1mdWxsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUb0NhcnRIYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRPbmUoeyBzbHVnIH0pLmxlYW4oKTtcclxuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3Q6IHByb2R1Y3QgPyBkYi5jb252ZXJ0RG9jVG9PYmoocHJvZHVjdCkgOiBudWxsLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkltYWdlIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInRvYXN0IiwiTGF5b3V0IiwiU3RvcmUiLCJQcm9kdWN0U2NyZWVuIiwicHJvcHMiLCJwcm9kdWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInJvdXRlciIsInRpdGxlIiwiYWRkVG9DYXJ0SGFuZGxlciIsImV4aXN0SXRlbSIsInF1YW50aXR5IiwiZGF0YSIsImNhcnQiLCJjYXJ0SXRlbXMiLCJmaW5kIiwieCIsInNsdWciLCJnZXQiLCJfaWQiLCJjb3VudEluU3RvY2siLCJlcnJvciIsInR5cGUiLCJwYXlsb2FkIiwicHVzaCIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsInVsIiwibGkiLCJoMSIsImFsZ29yaSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});