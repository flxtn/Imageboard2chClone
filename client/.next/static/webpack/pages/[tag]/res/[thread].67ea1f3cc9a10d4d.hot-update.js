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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thread: function() { return /* binding */ Thread; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-modal-thread */ \"./src/features/thread/model/use-modal-thread.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Thread(param) {\n    let { date, number, content, pictures, desk, isFirst, postsCount, picturesCount, thread, index } = param;\n    _s();\n    const { onMouseDown, onMouseUp, scale, setModalImage, modalImage, onMouseMove, onWheel, handleClick, modalPosition } = (0,_model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread)();\n    const picPostCount = pictures === null || pictures === void 0 ? void 0 : pictures.length;\n    const convertToHTML = (bbcode)=>{\n        bbcode = bbcode.replace(/\\[b\\](.*?)\\[\\/b\\]/g, \"<strong>$1</strong>\");\n        bbcode = bbcode.replace(/\\[i\\](.*?)\\[\\/i\\]/g, \"<em>$1</em>\");\n        bbcode = bbcode.replace(/\\[u\\](.*?)\\[\\/u\\]/g, \"<u>$1</u>\");\n        return bbcode;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mb-[6px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex flex-col min-h-[80px] w-auto rounded-sm pr-7\", !isFirst && \"bg-post-color\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row pl-2 pt-1   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-zinc-800\",\n                                children: [\n                                    \"Аноним \",\n                                    \" \",\n                                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500 \",\n                                        children: \"#OP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    date,\n                                    \" №\",\n                                    number,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-700\",\n                                        children: index != undefined ? index + 1 : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"\".concat(desk, \"/res/\").concat(thread),\n                                className: \"ml-1 text-orange-600 hover:text-orange-700\",\n                                children: \"Ответ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        /*КАРТИНКА + ТЕКСТ*/ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex pb-1 \", picPostCount > 1 ? \"flex flex-col\" : \"flex flex-row\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(picPostCount > 1 && picPostCount < 4 && \"flex-row\", picPostCount === 1 && \"flex-col\", picPostCount > 3 && \"flex-wrap\", \"flex \"),\n                                children: pictures === null || pictures === undefined ? \"\" : pictures.map((picture, index, array)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index != array.length - 1 ? \"max-w-content mb-1\" : \"w-full mb-2\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"http://127.0.0.1:8000/thumbnails/\".concat(picture),\n                                            alt: \"\",\n                                            className: \"cursor-pointer pl-3 pt-2\",\n                                            onClick: ()=>setModalImage(picture)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base pl-4 py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    children: convertToHTML(content)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    isFirst && /* КОНЕЦ КАРТИНКА + ТЕКСТ*/ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                postsCount,\n                                \" постов, \",\n                                picturesCount,\n                                \" медиа\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            modalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center\",\n                onMouseDown: onMouseDown,\n                onWheel: onWheel,\n                onMouseMove: onMouseMove,\n                onMouseUp: onMouseUp,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://127.0.0.1:8000/\".concat(modalImage),\n                    alt: \"\",\n                    className: \"max-w-full max-h-full border-8 border-modal-color\",\n                    onClick: handleClick,\n                    style: {\n                        transform: \"translate(\".concat(modalPosition.x, \"px, \").concat(modalPosition.y, \"px) scale(\").concat(scale, \")\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Thread, \"ogILnGtB58Ohla01WTPKGaod6Uk=\", false, function() {\n    return [\n        _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread\n    ];\n});\n_c = Thread;\nvar _c;\n$RefreshReg$(_c, \"Thread\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFDLFFBQWtDM0IsT0FBNUJNLGNBQWNzQixDQUFDLEVBQUMsY0FBa0IsT0FBTjVCLE9BQU07b0JBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBN0hnQmI7O1FBc0JWRCxtRUFBY0E7OztLQXRCSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3RocmVhZC91aS90aHJlYWQudHN4PzgxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbFRocmVhZCB9IGZyb20gXCIuLi9tb2RlbC91c2UtbW9kYWwtdGhyZWFkXCI7XHJcblxyXG5cclxudHlwZSBUaHJlYWRQcm9wcyA9IHtcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHBpY3R1cmVzOiBzdHJpbmdbXTtcclxuICBkZXNrOiBzdHJpbmc7XHJcbiAgaXNGaXJzdD86IGJvb2xlYW47XHJcbiAgcG9zdHNDb3VudD86IG51bWJlcjtcclxuICBwaWN0dXJlc0NvdW50PzogbnVtYmVyO1xyXG4gIHRocmVhZD86IG51bWJlcjtcclxuICBpbmRleD86IG51bWJlcjtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIFRocmVhZCh7XHJcbiAgZGF0ZSxcclxuICBudW1iZXIsXHJcbiAgY29udGVudCxcclxuICBwaWN0dXJlcyxcclxuICBkZXNrLFxyXG4gIGlzRmlyc3QsXHJcbiAgcG9zdHNDb3VudCxcclxuICBwaWN0dXJlc0NvdW50LFxyXG4gIHRocmVhZCxcclxuICBpbmRleCxcclxufTogVGhyZWFkUHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBvbk1vdXNlRG93bixcclxuICAgIG9uTW91c2VVcCxcclxuICAgIHNjYWxlLFxyXG4gICAgc2V0TW9kYWxJbWFnZSxcclxuICAgIG1vZGFsSW1hZ2UsXHJcbiAgICBvbk1vdXNlTW92ZSxcclxuICAgIG9uV2hlZWwsXHJcbiAgICBoYW5kbGVDbGljayxcclxuICAgIG1vZGFsUG9zaXRpb24sXHJcbiAgfSA9IHVzZU1vZGFsVGhyZWFkKCk7XHJcblxyXG4gIGNvbnN0IHBpY1Bvc3RDb3VudCA9IHBpY3R1cmVzPy5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGNvbnZlcnRUb0hUTUwgPSAoYmJjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFtiXFxdKC4qPylcXFtcXC9iXFxdL2csICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XHJcbiAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbaVxcXSguKj8pXFxbXFwvaVxcXS9nLCAnPGVtPiQxPC9lbT4nKTtcclxuICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFt1XFxdKC4qPylcXFtcXC91XFxdL2csICc8dT4kMTwvdT4nKTtcclxuXHJcbiAgICByZXR1cm4gYmJjb2RlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItWzZweF1cIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCBtaW4taC1bODBweF0gdy1hdXRvIHJvdW5kZWQtc20gcHItN1wiLFxyXG4gICAgICAgICAgIWlzRmlyc3QgJiYgXCJiZy1wb3N0LWNvbG9yXCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHBsLTIgcHQtMSAgIFwiPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTgwMFwiPiAgICAgICBcclxuICAgICAgICAgICAge2DQkNC90L7QvdC40LwgYH17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpc0ZpcnN0ICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIFwiPiNPUDwvc3Bhbj59IHtkYXRlfSDihJZcclxuICAgICAgICAgICAge251bWJlcn17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNzAwXCI+XHJcbiAgICAgICAgICAgICAge2luZGV4ICE9IHVuZGVmaW5lZCA/IGluZGV4ICsgMSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtpc0ZpcnN0ICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgJHtkZXNrfS9yZXMvJHt0aHJlYWR9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg0J7RgtCy0LXRglxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgICAgICAgICAgICAgICAgICAgICAgLyrQmtCQ0KDQotCY0J3QmtCQICsg0KLQldCa0KHQoiovXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgIFwiZmxleCBwYi0xIFwiLFxyXG4gICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAxID8gXCJmbGV4IGZsZXgtY29sXCIgOiBcImZsZXggZmxleC1yb3dcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAxICYmIHBpY1Bvc3RDb3VudCA8IDQgJiYgXCJmbGV4LXJvd1wiLFxyXG4gICAgICAgICAgICAgIHBpY1Bvc3RDb3VudCA9PT0gMSAmJiBcImZsZXgtY29sXCIsXHJcbiAgICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMyAmJiBcImZsZXgtd3JhcFwiLFxyXG4gICAgICAgICAgICAgIFwiZmxleCBcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cGljdHVyZXMgPT09IG51bGwgfHwgcGljdHVyZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgIDogcGljdHVyZXMubWFwKChwaWN0dXJlLCBpbmRleCwgYXJyYXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICE9IGFycmF5Lmxlbmd0aCAtIDEgPyBcIm1heC13LWNvbnRlbnQgbWItMVwiIDogXCJ3LWZ1bGwgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC90aHVtYm5haWxzLyR7cGljdHVyZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcGwtMyBwdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbEltYWdlKHBpY3R1cmUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwbC00IHB5LTNcIj5cclxuICAgICAgICAgICAgPHByZT57Y29udmVydFRvSFRNTChjb250ZW50KX08L3ByZT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAge2lzRmlyc3QgJiYgKCAgICAgLyog0JrQntCd0JXQpiDQmtCQ0KDQotCY0J3QmtCQICsg0KLQldCa0KHQoiovXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7cG9zdHNDb3VudH0g0L/QvtGB0YLQvtCyLCB7cGljdHVyZXNDb3VudH0g0LzQtdC00LjQsFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge21vZGFsSW1hZ2UgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cclxuICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZT17b25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8ke21vZGFsSW1hZ2V9YH1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsIGJvcmRlci04IGJvcmRlci1tb2RhbC1jb2xvclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke21vZGFsUG9zaXRpb24ueH1weCwgJHttb2RhbFBvc2l0aW9uLnl9cHgpIHNjYWxlKCR7c2NhbGV9KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIkxpbmsiLCJ1c2VNb2RhbFRocmVhZCIsIlRocmVhZCIsImRhdGUiLCJudW1iZXIiLCJjb250ZW50IiwicGljdHVyZXMiLCJkZXNrIiwiaXNGaXJzdCIsInBvc3RzQ291bnQiLCJwaWN0dXJlc0NvdW50IiwidGhyZWFkIiwiaW5kZXgiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsInNjYWxlIiwic2V0TW9kYWxJbWFnZSIsIm1vZGFsSW1hZ2UiLCJvbk1vdXNlTW92ZSIsIm9uV2hlZWwiLCJoYW5kbGVDbGljayIsIm1vZGFsUG9zaXRpb24iLCJwaWNQb3N0Q291bnQiLCJsZW5ndGgiLCJjb252ZXJ0VG9IVE1MIiwiYmJjb2RlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bmRlZmluZWQiLCJocmVmIiwibWFwIiwicGljdHVyZSIsImFycmF5IiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsInByZSIsInN0eWxlIiwidHJhbnNmb3JtIiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/thread/ui/thread.tsx\n"));

/***/ })

});