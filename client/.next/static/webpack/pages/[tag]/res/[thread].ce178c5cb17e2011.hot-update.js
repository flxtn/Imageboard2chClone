"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[tag]/res/[thread]",{

/***/ "./src/features/thread/ui/thread.tsx":
/*!*******************************************!*\
  !*** ./src/features/thread/ui/thread.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thread: function() { return /* binding */ Thread; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-modal-thread */ \"./src/features/thread/model/use-modal-thread.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Thread(param) {\n    let { date, number, content, pictures, desk, isFirst, postsCount, picturesCount, thread, index } = param;\n    _s();\n    const { onMouseDown, onMouseUp, scale, setModalImage, modalImage, onMouseMove, onWheel, handleClick, modalPosition } = (0,_model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread)();\n    const picPostCount = pictures === null || pictures === void 0 ? void 0 : pictures.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex flex-col mt-1 min-h-[80px] w-auto pr-7\", !isFirst && \"bg-post-color\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row pt-1 pl-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-zinc-800 ml-1\",\n                                children: [\n                                    \"Аноним \",\n                                    \" \",\n                                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500 \",\n                                        children: \"#OP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    date,\n                                    \" №\",\n                                    number,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-700\",\n                                        children: index ? index + 1 : \"0\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"\".concat(desk, \"/res/\").concat(thread),\n                                className: \"ml-1 text-orange-600 hover:text-orange-700\",\n                                children: \"Ответ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex mt-3 pb-1\", !isFirst && \"mb-1\", picPostCount > 1 ? \"flex flex-col\" : \"flex flex-row\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(picPostCount > 1 && picPostCount < 4 && \"flex flex-row mb-3\", picPostCount === 1 && \"flex flex-col mb-3\", picPostCount > 3 && \"flex flex-wrap mb-3\"),\n                                children: pictures === null || pictures === undefined ? \"\" : pictures.map((picture, index, array)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index != array.length - 1 ? \"max-w-content\" : \"w-full\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"http://127.0.0.1:8000/thumbnails/\".concat(picture),\n                                            alt: \"\",\n                                            className: \"cursor-pointer pl-3 mb-3\",\n                                            onClick: ()=>setModalImage(picture)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base ml-4\",\n                                children: content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                postsCount,\n                                \" постов, \",\n                                picturesCount,\n                                \" медиа\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            modalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center\",\n                onMouseDown: onMouseDown,\n                onWheel: onWheel,\n                onMouseMove: onMouseMove,\n                onMouseUp: onMouseUp,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://127.0.0.1:8000/\".concat(modalImage),\n                    alt: \"\",\n                    className: \"max-w-full max-h-full border-8 border-modal-color\",\n                    onClick: handleClick,\n                    style: {\n                        transform: \"translate(\".concat(modalPosition.x, \"px, \").concat(modalPosition.y, \"px) scale(\").concat(scale, \")\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Thread, \"ogILnGtB58Ohla01WTPKGaod6Uk=\", false, function() {\n    return [\n        _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread\n    ];\n});\n_c = Thread;\nvar _c;\n$RefreshReg$(_c, \"Thread\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdGhyZWFkL3VpL3RocmVhZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDSztBQUM4QjtBQWNwRCxTQUFTRyxPQUFPLEtBV1Q7UUFYUyxFQUNyQkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLE1BQU0sRUFDTkMsS0FBSyxFQUNPLEdBWFM7O0lBWXJCLE1BQU0sRUFDSkMsV0FBVyxFQUNYQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWEMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLGFBQWEsRUFDZCxHQUFHcEIsdUVBQWNBO0lBRWxCLE1BQU1xQixlQUFlaEIscUJBQUFBLCtCQUFBQSxTQUFVaUIsTUFBTTtJQUVyQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2IsK0NBQ0EsQ0FBQ1MsV0FBVzs7a0NBR2QsOERBQUNnQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFLRCxXQUFVOztvQ0FDWjtvQ0FBVTtvQ0FDWGpCLHlCQUFXLDhEQUFDa0I7d0NBQUtELFdBQVU7a0RBQWtCOzs7Ozs7b0NBQVc7b0NBQUV0QjtvQ0FBSztvQ0FDL0RDO29DQUFPO2tEQUFDLDhEQUFDc0I7d0NBQUtELFdBQVU7a0RBQWtCYixRQUFPQSxRQUFRLElBQUc7Ozs7Ozs7Ozs7Ozs0QkFFOURKLHlCQUNDLDhEQUFDUixrREFBSUE7Z0NBQ0gyQixNQUFNLEdBQWVoQixPQUFaSixNQUFLLFNBQWMsT0FBUEk7Z0NBQ3JCYyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNEO3dCQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2Isa0JBQ0EsQ0FBQ1MsV0FBVyxRQUNaYyxlQUFlLElBQUksa0JBQWtCOzswQ0FHdkMsOERBQUNFO2dDQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2J1QixlQUFlLEtBQUtBLGVBQWUsS0FBSyxzQkFDeENBLGlCQUFpQixLQUFLLHNCQUN0QkEsZUFBZSxLQUFLOzBDQUdyQmhCLGFBQWEsUUFBUUEsYUFBYXNCLFlBQy9CLEtBQ0F0QixTQUFTdUIsR0FBRyxDQUFDLENBQUNDLFNBQVNsQixPQUFPbUIsc0JBQzVCLDhEQUFDUDt3Q0FBSUMsV0FBVzFCLGdEQUFJQSxDQUFDYSxTQUFTbUIsTUFBTVIsTUFBTSxHQUFHLElBQUksa0JBQWtCO2tEQUNqRSw0RUFBQ1M7NENBQ0NDLEtBQUssb0NBQTRDLE9BQVJIOzRDQUN6Q0ksS0FBSzs0Q0FDTFQsV0FBVTs0Q0FFVlUsU0FBUyxJQUFNbkIsY0FBY2M7MkNBRHhCbEI7Ozs7Ozs7Ozs7Ozs7OzswQ0FNakIsOERBQUNjO2dDQUFLRCxXQUFVOzBDQUFrQnBCOzs7Ozs7Ozs7Ozs7b0JBRW5DRyx5QkFDQyw4REFBQ2dCO2tDQUNDLDRFQUFDRTs7Z0NBQ0VqQjtnQ0FBVztnQ0FBVUM7Z0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUszQ08sNEJBQ0MsOERBQUNPO2dCQUNDQyxXQUFVO2dCQUNWWixhQUFhQTtnQkFDYk0sU0FBU0E7Z0JBQ1RELGFBQWFBO2dCQUNiSixXQUFXQTswQkFFWCw0RUFBQ2tCO29CQUNDQyxLQUFLLHlCQUFvQyxPQUFYaEI7b0JBQzlCaUIsS0FBSTtvQkFDSlQsV0FBVTtvQkFDVlUsU0FBU2Y7b0JBQ1RnQixPQUFPO3dCQUNMQyxXQUFXLGFBQW1DaEIsT0FBdEJBLGNBQWNpQixDQUFDLEVBQUMsUUFBa0N2QixPQUE1Qk0sY0FBY2tCLENBQUMsRUFBQyxjQUFrQixPQUFOeEIsT0FBTTtvQkFDbEY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0E1R2dCYjs7UUFzQlZELG1FQUFjQTs7O0tBdEJKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvdGhyZWFkL3VpL3RocmVhZC50c3g/ODEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZU1vZGFsVGhyZWFkIH0gZnJvbSBcIi4uL21vZGVsL3VzZS1tb2RhbC10aHJlYWRcIjtcclxuXHJcbnR5cGUgVGhyZWFkUHJvcHMgPSB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwaWN0dXJlczogc3RyaW5nW107XHJcbiAgZGVzazogc3RyaW5nO1xyXG4gIGlzRmlyc3Q/OiBib29sZWFuO1xyXG4gIHBvc3RzQ291bnQ/OiBudW1iZXI7XHJcbiAgcGljdHVyZXNDb3VudD86IG51bWJlcjtcclxuICB0aHJlYWQ/OiBudW1iZXI7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBUaHJlYWQoe1xyXG4gIGRhdGUsXHJcbiAgbnVtYmVyLFxyXG4gIGNvbnRlbnQsXHJcbiAgcGljdHVyZXMsXHJcbiAgZGVzayxcclxuICBpc0ZpcnN0LFxyXG4gIHBvc3RzQ291bnQsXHJcbiAgcGljdHVyZXNDb3VudCxcclxuICB0aHJlYWQsXHJcbiAgaW5kZXgsXHJcbn06IFRocmVhZFByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgb25Nb3VzZURvd24sXHJcbiAgICBvbk1vdXNlVXAsXHJcbiAgICBzY2FsZSxcclxuICAgIHNldE1vZGFsSW1hZ2UsXHJcbiAgICBtb2RhbEltYWdlLFxyXG4gICAgb25Nb3VzZU1vdmUsXHJcbiAgICBvbldoZWVsLFxyXG4gICAgaGFuZGxlQ2xpY2ssXHJcbiAgICBtb2RhbFBvc2l0aW9uLFxyXG4gIH0gPSB1c2VNb2RhbFRocmVhZCgpO1xyXG5cclxuICBjb25zdCBwaWNQb3N0Q291bnQgPSBwaWN0dXJlcz8ubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBcImZsZXggZmxleC1jb2wgbXQtMSBtaW4taC1bODBweF0gdy1hdXRvIHByLTdcIixcclxuICAgICAgICAgICFpc0ZpcnN0ICYmIFwiYmctcG9zdC1jb2xvclwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC0xIHBsLTFcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtemluYy04MDAgbWwtMVwiPlxyXG4gICAgICAgICAgICB7YNCQ0L3QvtC90LjQvCBgfXtcIiBcIn1cclxuICAgICAgICAgICAge2lzRmlyc3QgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgXCI+I09QPC9zcGFuPn0ge2RhdGV9IOKEllxyXG4gICAgICAgICAgICB7bnVtYmVyfSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMFwiPntpbmRleD8gaW5kZXggKyAxOiAnMCd9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzRmlyc3QgJiYgKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Rlc2t9L3Jlcy8ke3RocmVhZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQntGC0LLQtdGCXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcImZsZXggbXQtMyBwYi0xXCIsXHJcbiAgICAgICAgICAgICFpc0ZpcnN0ICYmIFwibWItMVwiLFxyXG4gICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAxID8gXCJmbGV4IGZsZXgtY29sXCIgOiBcImZsZXggZmxleC1yb3dcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAxICYmIHBpY1Bvc3RDb3VudCA8IDQgJiYgXCJmbGV4IGZsZXgtcm93IG1iLTNcIixcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPT09IDEgJiYgXCJmbGV4IGZsZXgtY29sIG1iLTNcIixcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAzICYmIFwiZmxleCBmbGV4LXdyYXAgbWItM1wiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwaWN0dXJlcyA9PT0gbnVsbCB8fCBwaWN0dXJlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgOiBwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4LCBhcnJheSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChpbmRleCAhPSBhcnJheS5sZW5ndGggLSAxID8gJ21heC13LWNvbnRlbnQnIDogJ3ctZnVsbCcpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vMTI3LjAuMC4xOjgwMDAvdGh1bWJuYWlscy8ke3BpY3R1cmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHBsLTMgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxJbWFnZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWwtNFwiPntjb250ZW50fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNGaXJzdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7cG9zdHNDb3VudH0g0L/QvtGB0YLQvtCyLCB7cGljdHVyZXNDb3VudH0g0LzQtdC00LjQsFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge21vZGFsSW1hZ2UgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cclxuICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZT17b25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8ke21vZGFsSW1hZ2V9YH1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsIGJvcmRlci04IGJvcmRlci1tb2RhbC1jb2xvclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke21vZGFsUG9zaXRpb24ueH1weCwgJHttb2RhbFBvc2l0aW9uLnl9cHgpIHNjYWxlKCR7c2NhbGV9KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIkxpbmsiLCJ1c2VNb2RhbFRocmVhZCIsIlRocmVhZCIsImRhdGUiLCJudW1iZXIiLCJjb250ZW50IiwicGljdHVyZXMiLCJkZXNrIiwiaXNGaXJzdCIsInBvc3RzQ291bnQiLCJwaWN0dXJlc0NvdW50IiwidGhyZWFkIiwiaW5kZXgiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsInNjYWxlIiwic2V0TW9kYWxJbWFnZSIsIm1vZGFsSW1hZ2UiLCJvbk1vdXNlTW92ZSIsIm9uV2hlZWwiLCJoYW5kbGVDbGljayIsIm1vZGFsUG9zaXRpb24iLCJwaWNQb3N0Q291bnQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaHJlZiIsInVuZGVmaW5lZCIsIm1hcCIsInBpY3R1cmUiLCJhcnJheSIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJzdHlsZSIsInRyYW5zZm9ybSIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/thread/ui/thread.tsx\n"));

/***/ })

});