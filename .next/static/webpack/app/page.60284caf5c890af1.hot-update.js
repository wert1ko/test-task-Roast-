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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants_common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/common.constants */ \"(app-pages-browser)/./src/constants/common.constants.ts\");\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers */ \"(app-pages-browser)/./src/app/providers/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { data, handleUpdateData } = (0,_providers__WEBPACK_IMPORTED_MODULE_2__.useData)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleFileUpload = async (event)=>{\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        reader.onload = (e)=>{\n            const data = JSON.parse(e.target.result);\n            handleUpdateData(data);\n        };\n        reader.readAsText(file);\n    };\n    const handleButton = ()=>{\n        router.push(_constants_common_constants__WEBPACK_IMPORTED_MODULE_1__.Route.LOADING);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col h-[70vh] items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/Home-bg.png\",\n                    alt: \"home bg\",\n                    layout: \"fill\",\n                    objectFit: \"cover\",\n                    className: \"z-0\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"opacity-10 rotate-[15%]\",\n                style: {\n                    top: \"-220px\",\n                    left: \"-40px\"\n                },\n                src: \"/Rectangle.png\",\n                layout: \"fill\",\n                objectFit: \"contain\",\n                alt: \"bg image\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-[40px] pt-[45px] text-white\",\n                        children: \"Upload your data\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center text-center rounded-[42px] bg-gradient_bg w-full h-[80%] mt-[110px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-white max-w-[250px] font-medium text-20px mt-8\",\n                                children: [\n                                    \"Drag and Drop your\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-custom_blue rounded-xl px-1\",\n                                        children: \"data.json\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" or\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-custom_blue rounded-xl px-1\",\n                                        children: \"myData.zip\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    \"file here\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"flex justify-center items-center max-w-[300px] w-full h-[229px] bg-upload_place_bg mt-7 rounded-[46px] shadow-2xl cursor-pointer\",\n                                htmlFor: \"file-input\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: \"/Vector.png\",\n                                        width: 75,\n                                        height: 100,\n                                        alt: \"drop down image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"file-input\",\n                                        type: \"file\",\n                                        className: \"hidden\",\n                                        onChange: handleFileUpload\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-[300px] h-[71px] mt-6 rounded-[30px] bg-gradient-to-r from-[#03FFD1] to-[#706DFB] text-white font-medium text-[18px]\",\n                                children: \"Upload myData.json\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white font-medium mt-5\",\n                                onClick: handleButton,\n                                children: \"I don’t have it\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/test-task/src/app/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mWocOm+XsLMbq451vKdJ3tH4F1o=\", false, function() {\n    return [\n        _providers__WEBPACK_IMPORTED_MODULE_2__.useData,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDcUQ7QUFDZjtBQUNQO0FBRWE7QUFHNUMsU0FBU0k7O0lBQ1AsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdMLG1EQUFPQTtJQUUxQyxNQUFNTSxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTUssbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1DLE9BQU9ELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDbEMsTUFBTUMsU0FBUyxJQUFJQztRQUVuQkQsT0FBT0UsTUFBTSxHQUFHLENBQUNDO1lBQ2YsTUFBTVgsT0FBT1ksS0FBS0MsS0FBSyxDQUFDRixFQUFFTCxNQUFNLENBQUNRLE1BQU07WUFDdkNiLGlCQUFpQkQ7UUFDbkI7UUFFQVEsT0FBT08sVUFBVSxDQUFDVjtJQUNwQjtJQUVBLE1BQU1XLGVBQWU7UUFDbkJkLE9BQU9lLElBQUksQ0FBQ3RCLDhEQUFLQSxDQUFDdUIsT0FBTztJQUMzQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUN2QixrREFBS0E7b0JBQ0p5QixLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxRQUFPO29CQUNQQyxXQUFVO29CQUNWTCxXQUFVOzs7Ozs7Ozs7OzswQkFHZCw4REFBQ3ZCLGtEQUFLQTtnQkFDSnVCLFdBQVU7Z0JBQ1ZNLE9BQU87b0JBQ0xDLEtBQUs7b0JBQ0xDLE1BQU07Z0JBQ1I7Z0JBQ0FOLEtBQUk7Z0JBQ0pFLFFBQU87Z0JBQ1BDLFdBQVU7Z0JBQ1ZGLEtBQUk7Ozs7OzswQkFHTiw4REFBQ0Y7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBaUQ7Ozs7OztrQ0FHL0QsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1U7Z0NBQUdWLFdBQVU7O29DQUFzRDtvQ0FDL0M7a0RBQ25CLDhEQUFDVzt3Q0FBS1gsV0FBVTtrREFBaUM7Ozs7OztvQ0FBZ0I7b0NBQUk7a0RBQ3JFLDhEQUFDVzt3Q0FBS1gsV0FBVTtrREFBaUM7Ozs7OztvQ0FBa0I7b0NBQUk7Ozs7Ozs7MENBR3pFLDhEQUFDWTtnQ0FDQ1osV0FBVTtnQ0FDVmEsU0FBUTs7a0RBRVIsOERBQUNwQyxrREFBS0E7d0NBQ0p5QixLQUFJO3dDQUNKWSxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSWixLQUFJOzs7Ozs7a0RBRU4sOERBQUNhO3dDQUNDQyxJQUFHO3dDQUNIQyxNQUFLO3dDQUNMbEIsV0FBVTt3Q0FDVm1CLFVBQVVwQzs7Ozs7Ozs7Ozs7OzBDQUlkLDhEQUFDcUM7Z0NBQU9wQixXQUFVOzBDQUF5SDs7Ozs7OzBDQUkzSSw4REFBQ29CO2dDQUNDcEIsV0FBVTtnQ0FDVnFCLFNBQVN6QjswQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0F2RlNqQjs7UUFDNEJILCtDQUFPQTtRQUUzQkUsc0RBQVNBOzs7S0FIakJDO0FBeUZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSBcIkAvY29uc3RhbnRzL2NvbW1vbi5jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tIFwiLi9wcm92aWRlcnNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBoYW5kbGVVcGRhdGVEYXRhIH0gPSB1c2VEYXRhKCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IGFzeW5jIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICBoYW5kbGVVcGRhdGVEYXRhKGRhdGEpO1xuICAgIH07XG5cbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCdXR0b24gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goUm91dGUuTE9BRElORyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtWzcwdmhdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9Ib21lLWJnLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiaG9tZSBiZ1wiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInotMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTEwIHJvdGF0ZS1bMTUlXVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdG9wOiBcIi0yMjBweFwiLFxuICAgICAgICAgIGxlZnQ6IFwiLTQwcHhcIixcbiAgICAgICAgfX1cbiAgICAgICAgc3JjPVwiL1JlY3RhbmdsZS5wbmdcIlxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgIGFsdD1cImJnIGltYWdlXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCByZWxhdGl2ZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LVs0MHB4XSBwdC1bNDVweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFVwbG9hZCB5b3VyIGRhdGFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkLVs0MnB4XSBiZy1ncmFkaWVudF9iZyB3LWZ1bGwgaC1bODAlXSBtdC1bMTEwcHhdXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWF4LXctWzI1MHB4XSBmb250LW1lZGl1bSB0ZXh0LTIwcHggbXQtOFwiPlxuICAgICAgICAgICAgRHJhZyBhbmQgRHJvcCB5b3Vye1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctY3VzdG9tX2JsdWUgcm91bmRlZC14bCBweC0xXCI+ZGF0YS5qc29uPC9zcGFuPiBvcntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWN1c3RvbV9ibHVlIHJvdW5kZWQteGwgcHgtMVwiPm15RGF0YS56aXA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgZmlsZSBoZXJlXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1heC13LVszMDBweF0gdy1mdWxsIGgtWzIyOXB4XSBiZy11cGxvYWRfcGxhY2VfYmcgbXQtNyByb3VuZGVkLVs0NnB4XSBzaGFkb3ctMnhsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJmaWxlLWlucHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL1ZlY3Rvci5wbmdcIlxuICAgICAgICAgICAgICB3aWR0aD17NzV9XG4gICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICBhbHQ9XCJkcm9wIGRvd24gaW1hZ2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LVszMDBweF0gaC1bNzFweF0gbXQtNiByb3VuZGVkLVszMHB4XSBiZy1ncmFkaWVudC10by1yIGZyb20tWyMwM0ZGRDFdIHRvLVsjNzA2REZCXSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQtWzE4cHhdXCI+XG4gICAgICAgICAgICBVcGxvYWQgbXlEYXRhLmpzb25cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1tZWRpdW0gbXQtNVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b259XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSSBkb27igJl0IGhhdmUgaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUm91dGUiLCJ1c2VEYXRhIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJIb21lIiwiZGF0YSIsImhhbmRsZVVwZGF0ZURhdGEiLCJyb3V0ZXIiLCJoYW5kbGVGaWxlVXBsb2FkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJoYW5kbGVCdXR0b24iLCJwdXNoIiwiTE9BRElORyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJoMSIsImgzIiwic3BhbiIsImxhYmVsIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJpZCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/constants/common.constants.ts":
/*!*******************************************!*\
  !*** ./src/constants/common.constants.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Route: function() { return /* binding */ Route; }\n/* harmony export */ });\nvar Route;\n(function(Route) {\n    Route[\"LOADING\"] = \"/loading\";\n    Route[\"TABLE\"] = \"/table\";\n})(Route || (Route = {}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25zdGFudHMvY29tbW9uLmNvbnN0YW50cy50cyIsIm1hcHBpbmdzIjoiOzs7OztVQUFZQTs7O0dBQUFBLFVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvY29tbW9uLmNvbnN0YW50cy50cz81YjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFJvdXRlIHtcbiAgTE9BRElORyA9IFwiL2xvYWRpbmdcIixcbiAgVEFCTEUgPSBcIi90YWJsZVwiLFxufVxuIl0sIm5hbWVzIjpbIlJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/constants/common.constants.ts\n"));

/***/ })

});