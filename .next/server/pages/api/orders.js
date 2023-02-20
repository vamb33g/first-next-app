"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\",\n        required: true\n    },\n    orderItems: [\n        {\n            name: {\n                type: String,\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true\n            },\n            image: {\n                type: String,\n                required: true\n            },\n            price: {\n                type: Number,\n                required: true\n            }\n        }, \n    ],\n    shippingAddress: {\n        fullName: {\n            type: String,\n            required: true\n        },\n        address: {\n            type: String,\n            required: true\n        },\n        city: {\n            type: String,\n            required: true\n        },\n        postalCode: {\n            type: String,\n            required: true\n        },\n        country: {\n            type: String,\n            required: true\n        }\n    },\n    paymentMethod: {\n        type: String,\n        required: true\n    },\n    paymentResult: {\n        id: String,\n        status: String,\n        email_address: String\n    },\n    itemsPrice: {\n        type: Number,\n        required: true\n    },\n    shippingPrice: {\n        type: Number,\n        required: true\n    },\n    taxPrice: {\n        type: Number,\n        required: true\n    },\n    totalPrice: {\n        type: Number,\n        required: true\n    },\n    isPaid: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    isDelivered: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    paidAt: {\n        type: Date\n    },\n    deliveredAt: {\n        type: Date\n    }\n}, {\n    timestamps: true\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUNyQztJQUNFRyxJQUFJLEVBQUU7UUFBRUMsSUFBSSxFQUFFSix1RUFBOEI7UUFBRU8sR0FBRyxFQUFFLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUMzRUMsVUFBVSxFQUFFO1FBQ1Y7WUFDRUMsSUFBSSxFQUFFO2dCQUFFTixJQUFJLEVBQUVPLE1BQU07Z0JBQUVILFFBQVEsRUFBRSxJQUFJO2FBQUU7WUFDdENJLFFBQVEsRUFBRTtnQkFBRVIsSUFBSSxFQUFFUyxNQUFNO2dCQUFFTCxRQUFRLEVBQUUsSUFBSTthQUFFO1lBQzFDTSxLQUFLLEVBQUU7Z0JBQUVWLElBQUksRUFBRU8sTUFBTTtnQkFBRUgsUUFBUSxFQUFFLElBQUk7YUFBRTtZQUN2Q08sS0FBSyxFQUFFO2dCQUFFWCxJQUFJLEVBQUVTLE1BQU07Z0JBQUVMLFFBQVEsRUFBRSxJQUFJO2FBQUU7U0FDeEM7S0FDRjtJQUNEUSxlQUFlLEVBQUU7UUFDZkMsUUFBUSxFQUFFO1lBQUViLElBQUksRUFBRU8sTUFBTTtZQUFFSCxRQUFRLEVBQUUsSUFBSTtTQUFFO1FBQzFDVSxPQUFPLEVBQUU7WUFBRWQsSUFBSSxFQUFFTyxNQUFNO1lBQUVILFFBQVEsRUFBRSxJQUFJO1NBQUU7UUFDekNXLElBQUksRUFBRTtZQUFFZixJQUFJLEVBQUVPLE1BQU07WUFBRUgsUUFBUSxFQUFFLElBQUk7U0FBRTtRQUN0Q1ksVUFBVSxFQUFFO1lBQUVoQixJQUFJLEVBQUVPLE1BQU07WUFBRUgsUUFBUSxFQUFFLElBQUk7U0FBRTtRQUM1Q2EsT0FBTyxFQUFFO1lBQUVqQixJQUFJLEVBQUVPLE1BQU07WUFBRUgsUUFBUSxFQUFFLElBQUk7U0FBRTtLQUMxQztJQUNEYyxhQUFhLEVBQUU7UUFBRWxCLElBQUksRUFBRU8sTUFBTTtRQUFFSCxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQy9DZSxhQUFhLEVBQUU7UUFBRUMsRUFBRSxFQUFFYixNQUFNO1FBQUVjLE1BQU0sRUFBRWQsTUFBTTtRQUFFZSxhQUFhLEVBQUVmLE1BQU07S0FBRTtJQUNwRWdCLFVBQVUsRUFBRTtRQUFFdkIsSUFBSSxFQUFFUyxNQUFNO1FBQUVMLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDNUNvQixhQUFhLEVBQUU7UUFBRXhCLElBQUksRUFBRVMsTUFBTTtRQUFFTCxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQy9DcUIsUUFBUSxFQUFFO1FBQUV6QixJQUFJLEVBQUVTLE1BQU07UUFBRUwsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUMxQ3NCLFVBQVUsRUFBRTtRQUFFMUIsSUFBSSxFQUFFUyxNQUFNO1FBQUVMLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDNUN1QixNQUFNLEVBQUU7UUFBRTNCLElBQUksRUFBRTRCLE9BQU87UUFBRXhCLFFBQVEsRUFBRSxJQUFJO1FBQUV5QixPQUFPLEVBQUUsS0FBSztLQUFFO0lBQ3pEQyxXQUFXLEVBQUU7UUFBRTlCLElBQUksRUFBRTRCLE9BQU87UUFBRXhCLFFBQVEsRUFBRSxJQUFJO1FBQUV5QixPQUFPLEVBQUUsS0FBSztLQUFFO0lBQzlERSxNQUFNLEVBQUU7UUFBRS9CLElBQUksRUFBRWdDLElBQUk7S0FBRTtJQUN0QkMsV0FBVyxFQUFFO1FBQUVqQyxJQUFJLEVBQUVnQyxJQUFJO0tBQUU7Q0FDNUIsRUFDRDtJQUNFRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGO0FBRUQsTUFBTUMsS0FBSyxHQUFHdkMsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsT0FBTyxFQUFFQyxXQUFXLENBQUM7QUFDM0UsaUVBQWVzQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9tb2RlbHMvT3JkZXIuanM/ZWIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG9yZGVySXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHF1YW50aXR5OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNoaXBwaW5nQWRkcmVzczoge1xyXG4gICAgICBmdWxsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIGFkZHJlc3M6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBjaXR5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIGNvdW50cnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgfSxcclxuICAgIHBheW1lbnRNZXRob2Q6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcGF5bWVudFJlc3VsdDogeyBpZDogU3RyaW5nLCBzdGF0dXM6IFN0cmluZywgZW1haWxfYWRkcmVzczogU3RyaW5nIH0sXHJcbiAgICBpdGVtc1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHNoaXBwaW5nUHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdGF4UHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdG90YWxQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc1BhaWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICBpc0RlbGl2ZXJlZDogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcclxuICAgIHBhaWRBdDogeyB0eXBlOiBEYXRlIH0sXHJcbiAgICBkZWxpdmVyZWRBdDogeyB0eXBlOiBEYXRlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IE9yZGVyID0gbW9uZ29vc2UubW9kZWxzLk9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdPcmRlcicsIG9yZGVyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJvcmRlckl0ZW1zIiwibmFtZSIsIlN0cmluZyIsInF1YW50aXR5IiwiTnVtYmVyIiwiaW1hZ2UiLCJwcmljZSIsInNoaXBwaW5nQWRkcmVzcyIsImZ1bGxOYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJwb3N0YWxDb2RlIiwiY291bnRyeSIsInBheW1lbnRNZXRob2QiLCJwYXltZW50UmVzdWx0IiwiaWQiLCJzdGF0dXMiLCJlbWFpbF9hZGRyZXNzIiwiaXRlbXNQcmljZSIsInNoaXBwaW5nUHJpY2UiLCJ0YXhQcmljZSIsInRvdGFsUHJpY2UiLCJpc1BhaWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzRGVsaXZlcmVkIiwicGFpZEF0IiwiRGF0ZSIsImRlbGl2ZXJlZEF0IiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order */ \"(api)/./models/Order.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session) {\n        return res.status(401).send(\"signin required\");\n    }\n    const { user  } = session;\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        ...req.body,\n        user: user._id\n    });\n    const order = await newOrder.save();\n    res.status(201).send(order);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0g7QUFDUDtBQUVuQyxNQUFNRyxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsTUFBTUMsT0FBTyxHQUFHLE1BQU1OLDJEQUFVLENBQUM7UUFBRUksR0FBRztLQUFFLENBQUM7SUFDekMsSUFBSSxDQUFDRSxPQUFPLEVBQUU7UUFDWixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDaEQ7SUFFRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHSCxPQUFPO0lBQ3hCLE1BQU1KLHlEQUFVLEVBQUUsQ0FBQztJQUNuQixNQUFNUyxRQUFRLEdBQUcsSUFBSVYscURBQUssQ0FBQztRQUN6QixHQUFHRyxHQUFHLENBQUNRLElBQUk7UUFDWEgsSUFBSSxFQUFFQSxJQUFJLENBQUNJLEdBQUc7S0FDZixDQUFDO0lBRUYsTUFBTUMsS0FBSyxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQ25DVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTSxLQUFLLENBQUMsQ0FBQztDQUM3QjtBQUNELGlFQUFlWCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzP2M1OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBPcmRlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvT3JkZXInO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdzaWduaW4gcmVxdWlyZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gc2Vzc2lvbjtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgbmV3T3JkZXIgPSBuZXcgT3JkZXIoe1xyXG4gICAgLi4ucmVxLmJvZHksXHJcbiAgICB1c2VyOiB1c2VyLl9pZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3JkZXIgPSBhd2FpdCBuZXdPcmRlci5zYXZlKCk7XHJcbiAgcmVzLnN0YXR1cygyMDEpLnNlbmQob3JkZXIpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIk9yZGVyIiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInN0YXR1cyIsInNlbmQiLCJ1c2VyIiwiY29ubmVjdCIsIm5ld09yZGVyIiwiYm9keSIsIl9pZCIsIm9yZGVyIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"already connected\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db1 = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection\");\n    connection.isConnected = db1.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected\");\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLEVBQUU7QUFFckIsZUFBZUMsT0FBTyxHQUFHO0lBQ3ZCLElBQUlELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE9BQU87S0FDUjtJQUNELElBQUlMLG9FQUEyQixHQUFHLENBQUMsRUFBRTtRQUNuQ0MsVUFBVSxDQUFDRSxXQUFXLEdBQUdILDJFQUFrQyxDQUFDO1FBQzVELElBQUlDLFVBQVUsQ0FBQ0UsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFDRCxNQUFNTCwwREFBbUIsRUFBRSxDQUFDO0tBQzdCO0lBQ0QsTUFBTVUsR0FBRSxHQUFHLE1BQU1WLHVEQUFnQixDQUFDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDO0lBQzFEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCSixVQUFVLENBQUNFLFdBQVcsR0FBR08sR0FBRSxDQUFDSixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNFLFVBQVUsQ0FBQztDQUN2RDtBQUVELGVBQWVDLFVBQVUsR0FBRztJQUMxQixJQUFJUixVQUFVLENBQUNFLFdBQVcsRUFBRTtRQUMxQixJQUFJUSxLQUFxQyxFQUFFLEVBRzFDLE1BQU07WUFDTFAsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNqQztLQUNGO0NBQ0Y7QUFDRCxTQUFTUyxlQUFlLENBQUNDLEdBQUcsRUFBRTtJQUM1QkEsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUUsQ0FBQztJQUM3QkYsR0FBRyxDQUFDRyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0csU0FBUyxDQUFDRCxRQUFRLEVBQUUsQ0FBQztJQUN6Q0YsR0FBRyxDQUFDSSxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDRixRQUFRLEVBQUUsQ0FBQztJQUN6QyxPQUFPRixHQUFHLENBQUM7Q0FDWjtBQUVELE1BQU1MLEVBQUUsR0FBRztJQUFFUixPQUFPO0lBQUVPLFVBQVU7SUFBRUssZUFBZTtDQUFFO0FBQ25ELGlFQUFlSixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJfaWQiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();