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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thread: function() { return /* binding */ Thread; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-modal-thread */ \"./src/features/thread/model/use-modal-thread.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Thread(param) {\n    let { date, number, content, pictures, desk, isFirst, postsCount, picturesCount, thread, index } = param;\n    _s();\n    const { onMouseDown, onMouseUp, scale, setModalImage, modalImage, onMouseMove, onWheel, handleClick, modalPosition } = (0,_model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread)();\n    const picPostCount = pictures === null || pictures === void 0 ? void 0 : pictures.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex flex-col mt-1 min-h-[80px] w-auto pr-7\", !isFirst && \"bg-post-color\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row pt-1 pl-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-zinc-800 ml-1\",\n                                children: [\n                                    \"Аноним \",\n                                    \" \",\n                                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500 \",\n                                        children: \"#OP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    date,\n                                    \" №\",\n                                    number,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-700\",\n                                        children: index != undefined ? index + 1 : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 22\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"\".concat(desk, \"/res/\").concat(thread),\n                                className: \"ml-1 text-orange-600 hover:text-orange-700\",\n                                children: \"Ответ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex mt-3 pb-1\", !isFirst && \"mb-1\", picPostCount > 1 ? \"flex flex-col\" : \"flex flex-row\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(picPostCount > 1 && picPostCount < 4 && \"flex-row\", picPostCount === 1 && \"flex flex-col\", picPostCount > 3 && \"flex flex-wrap\"),\n                                children: pictures === null || pictures === undefined ? \"\" : pictures.map((picture, index, array)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index != array.length - 1 ? \"max-w-content\" : \"w-full\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"http://127.0.0.1:8000/thumbnails/\".concat(picture),\n                                            alt: \"\",\n                                            className: \"cursor-pointer pl-3 mb-3\",\n                                            onClick: ()=>setModalImage(picture)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base ml-4\",\n                                children: content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                postsCount,\n                                \" постов, \",\n                                picturesCount,\n                                \" медиа\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            modalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center\",\n                onMouseDown: onMouseDown,\n                onWheel: onWheel,\n                onMouseMove: onMouseMove,\n                onMouseUp: onMouseUp,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://127.0.0.1:8000/\".concat(modalImage),\n                    alt: \"\",\n                    className: \"max-w-full max-h-full border-8 border-modal-color\",\n                    onClick: handleClick,\n                    style: {\n                        transform: \"translate(\".concat(modalPosition.x, \"px, \").concat(modalPosition.y, \"px) scale(\").concat(scale, \")\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Thread, \"ogILnGtB58Ohla01WTPKGaod6Uk=\", false, function() {\n    return [\n        _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread\n    ];\n});\n_c = Thread;\nvar _c;\n$RefreshReg$(_c, \"Thread\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdGhyZWFkL3VpL3RocmVhZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDSztBQUM4QjtBQWNwRCxTQUFTRyxPQUFPLEtBV1Q7UUFYUyxFQUNyQkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLE1BQU0sRUFDTkMsS0FBSyxFQUNPLEdBWFM7O0lBWXJCLE1BQU0sRUFDSkMsV0FBVyxFQUNYQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWEMsT0FBTyxFQUNQQyxXQUFXLEVBQ1hDLGFBQWEsRUFDZCxHQUFHcEIsdUVBQWNBO0lBRWxCLE1BQU1xQixlQUFlaEIscUJBQUFBLCtCQUFBQSxTQUFVaUIsTUFBTTtJQUVyQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2IsK0NBQ0EsQ0FBQ1MsV0FBVzs7a0NBR2QsOERBQUNnQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFLRCxXQUFVOztvQ0FDWjtvQ0FBVTtvQ0FDWGpCLHlCQUFXLDhEQUFDa0I7d0NBQUtELFdBQVU7a0RBQWtCOzs7Ozs7b0NBQVc7b0NBQUV0QjtvQ0FBSztvQ0FDL0RDO29DQUFPO2tEQUFDLDhEQUFDc0I7d0NBQUtELFdBQVU7a0RBQWtCYixTQUFTZSxZQUFZZixRQUFRLElBQUc7Ozs7Ozs7Ozs7Ozs0QkFFNUVKLHlCQUNDLDhEQUFDUixrREFBSUE7Z0NBQ0g0QixNQUFNLEdBQWVqQixPQUFaSixNQUFLLFNBQWMsT0FBUEk7Z0NBQ3JCYyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBS0wsOERBQUNEO3dCQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2Isa0JBQ0EsQ0FBQ1MsV0FBVyxRQUNaYyxlQUFlLElBQUksa0JBQWtCOzswQ0FHdkMsOERBQUNFO2dDQUNDQyxXQUFXMUIsZ0RBQUlBLENBQ2J1QixlQUFlLEtBQUtBLGVBQWUsS0FBSyxZQUN4Q0EsaUJBQWlCLEtBQUssaUJBQ3RCQSxlQUFlLEtBQUs7MENBR3JCaEIsYUFBYSxRQUFRQSxhQUFhcUIsWUFDL0IsS0FDQXJCLFNBQVN1QixHQUFHLENBQUMsQ0FBQ0MsU0FBU2xCLE9BQU9tQixzQkFDNUIsOERBQUNQO3dDQUFJQyxXQUFXMUIsZ0RBQUlBLENBQUNhLFNBQVNtQixNQUFNUixNQUFNLEdBQUcsSUFBSSxrQkFBa0I7a0RBQ2pFLDRFQUFDUzs0Q0FDQ0MsS0FBSyxvQ0FBNEMsT0FBUkg7NENBQ3pDSSxLQUFLOzRDQUNMVCxXQUFVOzRDQUVWVSxTQUFTLElBQU1uQixjQUFjYzsyQ0FEeEJsQjs7Ozs7Ozs7Ozs7Ozs7OzBDQU1qQiw4REFBQ2M7Z0NBQUtELFdBQVU7MENBQWtCcEI7Ozs7Ozs7Ozs7OztvQkFFbkNHLHlCQUNDLDhEQUFDZ0I7a0NBQ0MsNEVBQUNFOztnQ0FDRWpCO2dDQUFXO2dDQUFVQztnQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSzNDTyw0QkFDQyw4REFBQ087Z0JBQ0NDLFdBQVU7Z0JBQ1ZaLGFBQWFBO2dCQUNiTSxTQUFTQTtnQkFDVEQsYUFBYUE7Z0JBQ2JKLFdBQVdBOzBCQUVYLDRFQUFDa0I7b0JBQ0NDLEtBQUsseUJBQW9DLE9BQVhoQjtvQkFDOUJpQixLQUFJO29CQUNKVCxXQUFVO29CQUNWVSxTQUFTZjtvQkFDVGdCLE9BQU87d0JBQ0xDLFdBQVcsYUFBbUNoQixPQUF0QkEsY0FBY2lCLENBQUMsRUFBQyxRQUFrQ3ZCLE9BQTVCTSxjQUFja0IsQ0FBQyxFQUFDLGNBQWtCLE9BQU54QixPQUFNO29CQUNsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTVHZ0JiOztRQXNCVkQsbUVBQWNBOzs7S0F0QkpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy90aHJlYWQvdWkvdGhyZWFkLnRzeD84MTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWxUaHJlYWQgfSBmcm9tIFwiLi4vbW9kZWwvdXNlLW1vZGFsLXRocmVhZFwiO1xyXG5cclxudHlwZSBUaHJlYWRQcm9wcyA9IHtcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHBpY3R1cmVzOiBzdHJpbmdbXTtcclxuICBkZXNrOiBzdHJpbmc7XHJcbiAgaXNGaXJzdD86IGJvb2xlYW47XHJcbiAgcG9zdHNDb3VudD86IG51bWJlcjtcclxuICBwaWN0dXJlc0NvdW50PzogbnVtYmVyO1xyXG4gIHRocmVhZD86IG51bWJlcjtcclxuICBpbmRleD86IG51bWJlcjtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIFRocmVhZCh7XHJcbiAgZGF0ZSxcclxuICBudW1iZXIsXHJcbiAgY29udGVudCxcclxuICBwaWN0dXJlcyxcclxuICBkZXNrLFxyXG4gIGlzRmlyc3QsXHJcbiAgcG9zdHNDb3VudCxcclxuICBwaWN0dXJlc0NvdW50LFxyXG4gIHRocmVhZCxcclxuICBpbmRleCxcclxufTogVGhyZWFkUHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBvbk1vdXNlRG93bixcclxuICAgIG9uTW91c2VVcCxcclxuICAgIHNjYWxlLFxyXG4gICAgc2V0TW9kYWxJbWFnZSxcclxuICAgIG1vZGFsSW1hZ2UsXHJcbiAgICBvbk1vdXNlTW92ZSxcclxuICAgIG9uV2hlZWwsXHJcbiAgICBoYW5kbGVDbGljayxcclxuICAgIG1vZGFsUG9zaXRpb24sXHJcbiAgfSA9IHVzZU1vZGFsVGhyZWFkKCk7XHJcblxyXG4gIGNvbnN0IHBpY1Bvc3RDb3VudCA9IHBpY3R1cmVzPy5sZW5ndGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBtdC0xIG1pbi1oLVs4MHB4XSB3LWF1dG8gcHItN1wiLFxyXG4gICAgICAgICAgIWlzRmlyc3QgJiYgXCJiZy1wb3N0LWNvbG9yXCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTEgcGwtMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTgwMCBtbC0xXCI+XHJcbiAgICAgICAgICAgIHtg0JDQvdC+0L3QuNC8IGB9e1wiIFwifVxyXG4gICAgICAgICAgICB7aXNGaXJzdCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBcIj4jT1A8L3NwYW4+fSB7ZGF0ZX0g4oSWXHJcbiAgICAgICAgICAgIHtudW1iZXJ9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwXCI+e2luZGV4ICE9IHVuZGVmaW5lZCA/IGluZGV4ICsgMTogJycgfTwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtpc0ZpcnN0ICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgJHtkZXNrfS9yZXMvJHt0aHJlYWR9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg0J7RgtCy0LXRglxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJmbGV4IG10LTMgcGItMVwiLFxyXG4gICAgICAgICAgICAhaXNGaXJzdCAmJiBcIm1iLTFcIixcclxuICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMSA/IFwiZmxleCBmbGV4LWNvbFwiIDogXCJmbGV4IGZsZXgtcm93XCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMSAmJiBwaWNQb3N0Q291bnQgPCA0ICYmIFwiZmxleC1yb3dcIixcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPT09IDEgJiYgXCJmbGV4IGZsZXgtY29sXCIsXHJcbiAgICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMyAmJiBcImZsZXggZmxleC13cmFwXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3BpY3R1cmVzID09PSBudWxsIHx8IHBpY3R1cmVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICA6IHBpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgsIGFycmF5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGluZGV4ICE9IGFycmF5Lmxlbmd0aCAtIDEgPyAnbWF4LXctY29udGVudCcgOiAndy1mdWxsJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC90aHVtYm5haWxzLyR7cGljdHVyZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcGwtMyBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbEltYWdlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtbC00XCI+e2NvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0ZpcnN0ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHtwb3N0c0NvdW50fSDQv9C+0YHRgtC+0LIsIHtwaWN0dXJlc0NvdW50fSDQvNC10LTQuNCwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bW9kYWxJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxyXG4gICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cclxuICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgIG9uTW91c2VVcD17b25Nb3VzZVVwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDAwLyR7bW9kYWxJbWFnZX1gfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIG1heC1oLWZ1bGwgYm9yZGVyLTggYm9yZGVyLW1vZGFsLWNvbG9yXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bW9kYWxQb3NpdGlvbi54fXB4LCAke21vZGFsUG9zaXRpb24ueX1weCkgc2NhbGUoJHtzY2FsZX0pYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiTGluayIsInVzZU1vZGFsVGhyZWFkIiwiVGhyZWFkIiwiZGF0ZSIsIm51bWJlciIsImNvbnRlbnQiLCJwaWN0dXJlcyIsImRlc2siLCJpc0ZpcnN0IiwicG9zdHNDb3VudCIsInBpY3R1cmVzQ291bnQiLCJ0aHJlYWQiLCJpbmRleCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwic2NhbGUiLCJzZXRNb2RhbEltYWdlIiwibW9kYWxJbWFnZSIsIm9uTW91c2VNb3ZlIiwib25XaGVlbCIsImhhbmRsZUNsaWNrIiwibW9kYWxQb3NpdGlvbiIsInBpY1Bvc3RDb3VudCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bmRlZmluZWQiLCJocmVmIiwibWFwIiwicGljdHVyZSIsImFycmF5IiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsInN0eWxlIiwidHJhbnNmb3JtIiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/thread/ui/thread.tsx\n"));

/***/ })

});