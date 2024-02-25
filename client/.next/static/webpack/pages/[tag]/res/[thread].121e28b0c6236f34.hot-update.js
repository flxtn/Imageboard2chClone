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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thread: function() { return /* binding */ Thread; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-modal-thread */ \"./src/features/thread/model/use-modal-thread.tsx\");\n/* harmony import */ var _bbob_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbob/parser */ \"./node_modules/@bbob/parser/dist/index.js\");\n/* harmony import */ var _bbob_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bbob_parser__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Thread(param) {\n    let { date, number, content, pictures, desk, isFirst, postsCount, picturesCount, thread, index } = param;\n    _s();\n    const { onMouseDown, onMouseUp, scale, setModalImage, modalImage, onMouseMove, onWheel, handleClick, modalPosition } = (0,_model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread)();\n    const picPostCount = pictures === null || pictures === void 0 ? void 0 : pictures.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mb-[6px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex flex-col min-h-[80px] w-auto rounded-sm pr-7\", !isFirst && \"bg-post-color\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row pl-2 pt-1   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-zinc-800\",\n                                children: [\n                                    \"Аноним \",\n                                    \" \",\n                                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500 \",\n                                        children: \"#OP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    date,\n                                    \" №\",\n                                    number,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-700\",\n                                        children: index != undefined ? index + 1 : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"\".concat(desk, \"/res/\").concat(thread),\n                                className: \"ml-1 text-orange-600 hover:text-orange-700\",\n                                children: \"Ответ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        /*КАРТИНКА + ТЕКСТ*/ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex pb-1 \", picPostCount > 1 ? \"flex flex-col\" : \"flex flex-row\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(picPostCount > 1 && picPostCount < 4 && \"flex-row\", picPostCount === 1 && \"flex-col\", picPostCount > 3 && \"flex-wrap\", \"flex \"),\n                                children: pictures === null || pictures === undefined ? \"\" : pictures.map((picture, index, array)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index != array.length - 1 ? \"max-w-content mb-1\" : \"w-full mb-2\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"http://127.0.0.1:8000/thumbnails/\".concat(picture),\n                                            alt: \"\",\n                                            className: \"cursor-pointer pl-3 pt-2\",\n                                            onClick: ()=>setModalImage(picture)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base pl-4 py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    children: typeof content === \"string\" ? (0,_bbob_parser__WEBPACK_IMPORTED_MODULE_4__.parse)(content) : \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    isFirst && /* КОНЕЦ КАРТИНКА + ТЕКСТ*/ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                postsCount,\n                                \" постов, \",\n                                picturesCount,\n                                \" медиа\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            modalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center\",\n                onMouseDown: onMouseDown,\n                onWheel: onWheel,\n                onMouseMove: onMouseMove,\n                onMouseUp: onMouseUp,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://127.0.0.1:8000/\".concat(modalImage),\n                    alt: \"\",\n                    className: \"max-w-full max-h-full border-8 border-modal-color\",\n                    onClick: handleClick,\n                    style: {\n                        transform: \"translate(\".concat(modalPosition.x, \"px, \").concat(modalPosition.y, \"px) scale(\").concat(scale, \")\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Thread, \"ogILnGtB58Ohla01WTPKGaod6Uk=\", false, function() {\n    return [\n        _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread\n    ];\n});\n_c = Thread;\nvar _c;\n$RefreshReg$(_c, \"Thread\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3RocmVhZC91aS90aHJlYWQudHN4PzgxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VNb2RhbFRocmVhZCB9IGZyb20gXCIuLi9tb2RlbC91c2UtbW9kYWwtdGhyZWFkXCI7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcIkBiYm9iL3BhcnNlclwiO1xyXG5cclxuXHJcbnR5cGUgVGhyZWFkUHJvcHMgPSB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwaWN0dXJlczogc3RyaW5nW107XHJcbiAgZGVzazogc3RyaW5nO1xyXG4gIGlzRmlyc3Q/OiBib29sZWFuO1xyXG4gIHBvc3RzQ291bnQ/OiBudW1iZXI7XHJcbiAgcGljdHVyZXNDb3VudD86IG51bWJlcjtcclxuICB0aHJlYWQ/OiBudW1iZXI7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBUaHJlYWQoe1xyXG4gIGRhdGUsXHJcbiAgbnVtYmVyLFxyXG4gIGNvbnRlbnQsXHJcbiAgcGljdHVyZXMsXHJcbiAgZGVzayxcclxuICBpc0ZpcnN0LFxyXG4gIHBvc3RzQ291bnQsXHJcbiAgcGljdHVyZXNDb3VudCxcclxuICB0aHJlYWQsXHJcbiAgaW5kZXgsXHJcbn06IFRocmVhZFByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgb25Nb3VzZURvd24sXHJcbiAgICBvbk1vdXNlVXAsXHJcbiAgICBzY2FsZSxcclxuICAgIHNldE1vZGFsSW1hZ2UsXHJcbiAgICBtb2RhbEltYWdlLFxyXG4gICAgb25Nb3VzZU1vdmUsXHJcbiAgICBvbldoZWVsLFxyXG4gICAgaGFuZGxlQ2xpY2ssXHJcbiAgICBtb2RhbFBvc2l0aW9uLFxyXG4gIH0gPSB1c2VNb2RhbFRocmVhZCgpO1xyXG5cclxuICBjb25zdCBwaWNQb3N0Q291bnQgPSBwaWN0dXJlcz8ubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLVs2cHhdXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBcImZsZXggZmxleC1jb2wgbWluLWgtWzgwcHhdIHctYXV0byByb3VuZGVkLXNtIHByLTdcIixcclxuICAgICAgICAgICFpc0ZpcnN0ICYmIFwiYmctcG9zdC1jb2xvclwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwbC0yIHB0LTEgICBcIj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtemluYy04MDBcIj4gICAgICAgXHJcbiAgICAgICAgICAgIHtg0JDQvdC+0L3QuNC8IGB9e1wiIFwifVxyXG4gICAgICAgICAgICB7aXNGaXJzdCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBcIj4jT1A8L3NwYW4+fSB7ZGF0ZX0g4oSWXHJcbiAgICAgICAgICAgIHtudW1iZXJ9e1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMFwiPlxyXG4gICAgICAgICAgICAgIHtpbmRleCAhPSB1bmRlZmluZWQgPyBpbmRleCArIDEgOiBcIlwifVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7aXNGaXJzdCAmJiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7ZGVza30vcmVzLyR7dGhyZWFkfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0ZXh0LW9yYW5nZS02MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINCe0YLQstC10YJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICAgICAgICAgICAgICAgICAgICAgIC8q0JrQkNCg0KLQmNCd0JrQkCArINCi0JXQmtCh0KIqL1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcImZsZXggcGItMSBcIixcclxuICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMSA/IFwiZmxleCBmbGV4LWNvbFwiIDogXCJmbGV4IGZsZXgtcm93XCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgcGljUG9zdENvdW50ID4gMSAmJiBwaWNQb3N0Q291bnQgPCA0ICYmIFwiZmxleC1yb3dcIixcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPT09IDEgJiYgXCJmbGV4LWNvbFwiLFxyXG4gICAgICAgICAgICAgIHBpY1Bvc3RDb3VudCA+IDMgJiYgXCJmbGV4LXdyYXBcIixcclxuICAgICAgICAgICAgICBcImZsZXggXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3BpY3R1cmVzID09PSBudWxsIHx8IHBpY3R1cmVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICA6IHBpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgsIGFycmF5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCAhPSBhcnJheS5sZW5ndGggLSAxID8gXCJtYXgtdy1jb250ZW50IG1iLTFcIiA6IFwidy1mdWxsIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vMTI3LjAuMC4xOjgwMDAvdGh1bWJuYWlscy8ke3BpY3R1cmV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHBsLTMgcHQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxJbWFnZShwaWN0dXJlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgcGwtNCBweS0zXCI+XHJcbiAgICAgICAgICAgIDxwcmU+e3R5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyA/IHBhcnNlKGNvbnRlbnQpOiAnJ308L3ByZT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAge2lzRmlyc3QgJiYgKCAgICAgLyog0JrQntCd0JXQpiDQmtCQ0KDQotCY0J3QmtCQICsg0KLQldCa0KHQoiovXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7cG9zdHNDb3VudH0g0L/QvtGB0YLQvtCyLCB7cGljdHVyZXNDb3VudH0g0LzQtdC00LjQsFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge21vZGFsSW1hZ2UgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cclxuICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XHJcbiAgICAgICAgICBvbk1vdXNlTW92ZT17b25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8ke21vZGFsSW1hZ2V9YH1cclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsIGJvcmRlci04IGJvcmRlci1tb2RhbC1jb2xvclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke21vZGFsUG9zaXRpb24ueH1weCwgJHttb2RhbFBvc2l0aW9uLnl9cHgpIHNjYWxlKCR7c2NhbGV9KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIkxpbmsiLCJ1c2VNb2RhbFRocmVhZCIsInBhcnNlIiwiVGhyZWFkIiwiZGF0ZSIsIm51bWJlciIsImNvbnRlbnQiLCJwaWN0dXJlcyIsImRlc2siLCJpc0ZpcnN0IiwicG9zdHNDb3VudCIsInBpY3R1cmVzQ291bnQiLCJ0aHJlYWQiLCJpbmRleCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwic2NhbGUiLCJzZXRNb2RhbEltYWdlIiwibW9kYWxJbWFnZSIsIm9uTW91c2VNb3ZlIiwib25XaGVlbCIsImhhbmRsZUNsaWNrIiwibW9kYWxQb3NpdGlvbiIsInBpY1Bvc3RDb3VudCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bmRlZmluZWQiLCJocmVmIiwibWFwIiwicGljdHVyZSIsImFycmF5IiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsInByZSIsInN0eWxlIiwidHJhbnNmb3JtIiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/thread/ui/thread.tsx\n"));

/***/ })

});