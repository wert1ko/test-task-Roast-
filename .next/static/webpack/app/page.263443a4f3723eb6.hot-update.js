"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants_common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/common.constants */ \"(app-pages-browser)/./src/constants/common.constants.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleButton = ()=>{\n        router.push(_constants_common_constants__WEBPACK_IMPORTED_MODULE_1__.Route.LOADING);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col h-screen items-center bg-primary_bg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-semibold text-[40px] pt-[45px] text-white\",\n                children: \"Upload your data\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-center rounded-[42px] bg-gradient_bg w-full h-full mt-[75px]\",\n                style: {\n                    backgroundImage: \"linear-gradient(262.32deg, #03FFD1 -15.05%, #706DFB 68.26%)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-white max-w-[250px] font-medium text-20px mt-8\",\n                        children: [\n                            \"Drag and Drop your\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-designation rounded-[10px] px-1\",\n                                children: \"data.json\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"or\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-designation rounded-[10px] px-1\",\n                                children: \"myData.zip\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            \"file here\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex justify-center items-center w-[346px] h-[229px] bg-upload_place_bg mt-7 rounded-[46px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/Vector.png\",\n                            width: 75,\n                            height: 100,\n                            alt: \"drop down image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-[346px] h-[71px] mt-6 rounded-[30px] bg-upload_button_bg text-white font-medium text-[18px]\",\n                        style: {\n                            backgroundImage: \"linear-gradient(262.32deg, #03FFD1 -15.05%, #706DFB 68.26%)\"\n                        },\n                        onClick: handleButton,\n                        children: \"Upload myData.json\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white font-medium mt-5\",\n                        children: \"I don’t have it\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNxRDtBQUN0QjtBQUNhO0FBRTdCLFNBQVNHOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFFeEIsTUFBTUcsZUFBZTtRQUNuQkQsT0FBT0UsSUFBSSxDQUFDTiw4REFBS0EsQ0FBQ08sT0FBTztJQUMzQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWlEOzs7Ozs7MEJBSS9ELDhEQUFDRTtnQkFDQ0YsV0FBVTtnQkFDVkcsT0FBTztvQkFDTEMsaUJBQ0U7Z0JBQ0o7O2tDQUVBLDhEQUFDQzt3QkFBR0wsV0FBVTs7NEJBQXNEOzRCQUMvQzswQ0FDbkIsOERBQUNNO2dDQUFLTixXQUFVOzBDQUFxQzs7Ozs7OzRCQUFpQjs0QkFBSTs0QkFDdkU7MENBQ0gsOERBQUNNO2dDQUFLTixXQUFVOzBDQUFxQzs7Ozs7OzRCQUFrQjs0QkFBSTs7Ozs7OztrQ0FJN0UsOERBQUNNO3dCQUFLTixXQUFVO2tDQUNkLDRFQUFDUixrREFBS0E7NEJBQ0plLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDQzt3QkFDQ1gsV0FBVTt3QkFDVkcsT0FBTzs0QkFDTEMsaUJBQ0U7d0JBQ0o7d0JBQ0FRLFNBQVNoQjtrQ0FDVjs7Ozs7O2tDQUlELDhEQUFDZTt3QkFBT1gsV0FBVTtrQ0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4RDtHQXBEd0JOOztRQUNQRCxzREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCJAL2NvbnN0YW50cy9jb21tb24uY29uc3RhbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFJvdXRlLkxPQURJTkcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIgYmctcHJpbWFyeV9iZ1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bNDBweF0gcHQtWzQ1cHhdIHRleHQtd2hpdGVcIj5cbiAgICAgICAgVXBsb2FkIHlvdXIgZGF0YVxuICAgICAgPC9oMT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLVs0MnB4XSBiZy1ncmFkaWVudF9iZyB3LWZ1bGwgaC1mdWxsIG10LVs3NXB4XVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMjYyLjMyZGVnLCAjMDNGRkQxIC0xNS4wNSUsICM3MDZERkIgNjguMjYlKVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYXgtdy1bMjUwcHhdIGZvbnQtbWVkaXVtIHRleHQtMjBweCBtdC04XCI+XG4gICAgICAgICAgRHJhZyBhbmQgRHJvcCB5b3Vye1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWRlc2lnbmF0aW9uIHJvdW5kZWQtWzEwcHhdIHB4LTFcIj5kYXRhLmpzb248L3NwYW4+e1wiIFwifVxuICAgICAgICAgIG9ye1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWRlc2lnbmF0aW9uIHJvdW5kZWQtWzEwcHhdIHB4LTFcIj5teURhdGEuemlwPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICBmaWxlIGhlcmVcbiAgICAgICAgPC9oMz5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LVszNDZweF0gaC1bMjI5cHhdIGJnLXVwbG9hZF9wbGFjZV9iZyBtdC03IHJvdW5kZWQtWzQ2cHhdXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvVmVjdG9yLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NzV9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgIGFsdD1cImRyb3AgZG93biBpbWFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszNDZweF0gaC1bNzFweF0gbXQtNiByb3VuZGVkLVszMHB4XSBiZy11cGxvYWRfYnV0dG9uX2JnIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1bMThweF1cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDI2Mi4zMmRlZywgIzAzRkZEMSAtMTUuMDUlLCAjNzA2REZCIDY4LjI2JSlcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIFVwbG9hZCBteURhdGEuanNvblxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1tZWRpdW0gbXQtNVwiPkkgZG9u4oCZdCBoYXZlIGl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUm91dGUiLCJJbWFnZSIsInVzZVJvdXRlciIsIkhvbWUiLCJyb3V0ZXIiLCJoYW5kbGVCdXR0b24iLCJwdXNoIiwiTE9BRElORyIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});