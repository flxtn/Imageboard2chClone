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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Thread: function() { return /* binding */ Thread; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-modal-thread */ \"./src/features/thread/model/use-modal-thread.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Thread(param) {\n    let { date, number, content, pictures, desk, isFirst, postsCount, picturesCount, thread, index } = param;\n    _s();\n    const { onMouseDown, onMouseUp, scale, setModalImage, modalImage, onMouseMove, onWheel, handleClick, modalPosition } = (0,_model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread)();\n    const picPostCount = pictures === null || pictures === void 0 ? void 0 : pictures.length;\n    const convertToHTML = (bbcode)=>{\n        bbcode = bbcode.replace(/\\[b\\](.*?)\\[\\/b\\]/g, \"<strong>$1</strong>\");\n        bbcode = bbcode.replace(/\\[i\\](.*?)\\[\\/i\\]/g, \"<em>$1</em>\");\n        bbcode = bbcode.replace(/\\[u\\](.*?)\\[\\/u\\]/g, \"<u>$1</u>\");\n        return bbcode;\n    };\n    const htmltext = convertToHTML(content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mb-[6px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex flex-col min-h-[80px] w-auto rounded-sm pr-7\", !isFirst && \"bg-post-color\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row pl-2 pt-1   \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-zinc-800\",\n                                children: [\n                                    \"Аноним \",\n                                    \" \",\n                                    isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-500 \",\n                                        children: \"#OP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    date,\n                                    \" №\",\n                                    number,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-700\",\n                                        children: index != undefined ? index + 1 : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            isFirst && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"\".concat(desk, \"/res/\").concat(thread),\n                                className: \"ml-1 text-orange-600 hover:text-orange-700\",\n                                children: \"Ответ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        /*КАРТИНКА + ТЕКСТ*/ className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex pb-1 \", picPostCount > 1 ? \"flex flex-col\" : \"flex flex-row\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(picPostCount > 1 && picPostCount < 4 && \"flex-row\", picPostCount === 1 && \"flex-col\", picPostCount > 3 && \"flex-wrap\", \"flex \"),\n                                children: pictures === null || pictures === undefined ? \"\" : pictures.map((picture, index, array)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index != array.length - 1 ? \"max-w-content mb-1\" : \"w-full mb-2\"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"http://127.0.0.1:8000/thumbnails/\".concat(picture),\n                                            alt: \"\",\n                                            className: \"cursor-pointer pl-3 pt-2\",\n                                            onClick: ()=>setModalImage(picture)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base pl-4 py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    children: convertToHTML(content)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    isFirst && /* КОНЕЦ КАРТИНКА + ТЕКСТ*/ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                postsCount,\n                                \" постов, \",\n                                picturesCount,\n                                \" медиа\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            modalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center\",\n                onMouseDown: onMouseDown,\n                onWheel: onWheel,\n                onMouseMove: onMouseMove,\n                onMouseUp: onMouseUp,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://127.0.0.1:8000/\".concat(modalImage),\n                    alt: \"\",\n                    className: \"max-w-full max-h-full border-8 border-modal-color\",\n                    onClick: handleClick,\n                    style: {\n                        transform: \"translate(\".concat(modalPosition.x, \"px, \").concat(modalPosition.y, \"px) scale(\").concat(scale, \")\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\thread\\\\ui\\\\thread.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Thread, \"ogILnGtB58Ohla01WTPKGaod6Uk=\", false, function() {\n    return [\n        _model_use_modal_thread__WEBPACK_IMPORTED_MODULE_3__.useModalThread\n    ];\n});\n_c = Thread;\nvar _c;\n$RefreshReg$(_c, \"Thread\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsYUFBbUNyQixPQUF0QkEsY0FBY3NCLENBQUMsRUFBQyxRQUFrQzVCLE9BQTVCTSxjQUFjdUIsQ0FBQyxFQUFDLGNBQWtCLE9BQU43QixPQUFNO29CQUNsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQS9IZ0JiOztRQXNCVkQsbUVBQWNBOzs7S0F0QkpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy90aHJlYWQvdWkvdGhyZWFkLnRzeD84MTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlTW9kYWxUaHJlYWQgfSBmcm9tIFwiLi4vbW9kZWwvdXNlLW1vZGFsLXRocmVhZFwiO1xyXG5cclxuXHJcbnR5cGUgVGhyZWFkUHJvcHMgPSB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwaWN0dXJlczogc3RyaW5nW107XHJcbiAgZGVzazogc3RyaW5nO1xyXG4gIGlzRmlyc3Q/OiBib29sZWFuO1xyXG4gIHBvc3RzQ291bnQ/OiBudW1iZXI7XHJcbiAgcGljdHVyZXNDb3VudD86IG51bWJlcjtcclxuICB0aHJlYWQ/OiBudW1iZXI7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBUaHJlYWQoe1xyXG4gIGRhdGUsXHJcbiAgbnVtYmVyLFxyXG4gIGNvbnRlbnQsXHJcbiAgcGljdHVyZXMsXHJcbiAgZGVzayxcclxuICBpc0ZpcnN0LFxyXG4gIHBvc3RzQ291bnQsXHJcbiAgcGljdHVyZXNDb3VudCxcclxuICB0aHJlYWQsXHJcbiAgaW5kZXgsXHJcbn06IFRocmVhZFByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgb25Nb3VzZURvd24sXHJcbiAgICBvbk1vdXNlVXAsXHJcbiAgICBzY2FsZSxcclxuICAgIHNldE1vZGFsSW1hZ2UsXHJcbiAgICBtb2RhbEltYWdlLFxyXG4gICAgb25Nb3VzZU1vdmUsXHJcbiAgICBvbldoZWVsLFxyXG4gICAgaGFuZGxlQ2xpY2ssXHJcbiAgICBtb2RhbFBvc2l0aW9uLFxyXG4gIH0gPSB1c2VNb2RhbFRocmVhZCgpO1xyXG5cclxuICBjb25zdCBwaWNQb3N0Q291bnQgPSBwaWN0dXJlcz8ubGVuZ3RoO1xyXG5cclxuICBjb25zdCBjb252ZXJ0VG9IVE1MID0gKGJiY29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbYlxcXSguKj8pXFxbXFwvYlxcXS9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xyXG4gICAgYmJjb2RlID0gYmJjb2RlLnJlcGxhY2UoL1xcW2lcXF0oLio/KVxcW1xcL2lcXF0vZywgJzxlbT4kMTwvZW0+Jyk7XHJcbiAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbdVxcXSguKj8pXFxbXFwvdVxcXS9nLCAnPHU+JDE8L3U+Jyk7XHJcblxyXG4gICAgcmV0dXJuIGJiY29kZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBodG1sdGV4dCA9IGNvbnZlcnRUb0hUTUwoY29udGVudClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi1bNnB4XVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgXCJmbGV4IGZsZXgtY29sIG1pbi1oLVs4MHB4XSB3LWF1dG8gcm91bmRlZC1zbSBwci03XCIsXHJcbiAgICAgICAgICAhaXNGaXJzdCAmJiBcImJnLXBvc3QtY29sb3JcIlxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcGwtMiBwdC0xICAgXCI+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtODAwXCI+ICAgICAgIFxyXG4gICAgICAgICAgICB7YNCQ0L3QvtC90LjQvCBgfXtcIiBcIn1cclxuICAgICAgICAgICAge2lzRmlyc3QgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgXCI+I09QPC9zcGFuPn0ge2RhdGV9IOKEllxyXG4gICAgICAgICAgICB7bnVtYmVyfXtcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi03MDBcIj5cclxuICAgICAgICAgICAgICB7aW5kZXggIT0gdW5kZWZpbmVkID8gaW5kZXggKyAxIDogXCJcIn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge2lzRmlyc3QgJiYgKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Rlc2t9L3Jlcy8ke3RocmVhZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQntGC0LLQtdGCXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgICAgICAgICAgICAgICAgICAgICAvKtCa0JDQoNCi0JjQndCa0JAgKyDQotCV0JrQodCiKi9cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJmbGV4IHBiLTEgXCIsXHJcbiAgICAgICAgICAgIHBpY1Bvc3RDb3VudCA+IDEgPyBcImZsZXggZmxleC1jb2xcIiA6IFwiZmxleCBmbGV4LXJvd1wiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgIHBpY1Bvc3RDb3VudCA+IDEgJiYgcGljUG9zdENvdW50IDwgNCAmJiBcImZsZXgtcm93XCIsXHJcbiAgICAgICAgICAgICAgcGljUG9zdENvdW50ID09PSAxICYmIFwiZmxleC1jb2xcIixcclxuICAgICAgICAgICAgICBwaWNQb3N0Q291bnQgPiAzICYmIFwiZmxleC13cmFwXCIsXHJcbiAgICAgICAgICAgICAgXCJmbGV4IFwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwaWN0dXJlcyA9PT0gbnVsbCB8fCBwaWN0dXJlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgOiBwaWN0dXJlcy5tYXAoKHBpY3R1cmUsIGluZGV4LCBhcnJheSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwibWF4LXctY29udGVudCBtYi0xXCIgOiBcInctZnVsbCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3RodW1ibmFpbHMvJHtwaWN0dXJlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBwbC0zIHB0LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsSW1hZ2UocGljdHVyZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBsLTQgcHktM1wiPlxyXG4gICAgICAgICAgICA8cHJlPntjb252ZXJ0VG9IVE1MKGNvbnRlbnQpfTwvcHJlPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB7aXNGaXJzdCAmJiAoICAgICAvKiDQmtCe0J3QldCmINCa0JDQoNCi0JjQndCa0JAgKyDQotCV0JrQodCiKi9cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHtwb3N0c0NvdW50fSDQv9C+0YHRgtC+0LIsIHtwaWN0dXJlc0NvdW50fSDQvNC10LTQuNCwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bW9kYWxJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxyXG4gICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cclxuICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgIG9uTW91c2VVcD17b25Nb3VzZVVwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTo4MDAwLyR7bW9kYWxJbWFnZX1gfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1mdWxsIG1heC1oLWZ1bGwgYm9yZGVyLTggYm9yZGVyLW1vZGFsLWNvbG9yXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bW9kYWxQb3NpdGlvbi54fXB4LCAke21vZGFsUG9zaXRpb24ueX1weCkgc2NhbGUoJHtzY2FsZX0pYCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiTGluayIsInVzZU1vZGFsVGhyZWFkIiwiVGhyZWFkIiwiZGF0ZSIsIm51bWJlciIsImNvbnRlbnQiLCJwaWN0dXJlcyIsImRlc2siLCJpc0ZpcnN0IiwicG9zdHNDb3VudCIsInBpY3R1cmVzQ291bnQiLCJ0aHJlYWQiLCJpbmRleCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwic2NhbGUiLCJzZXRNb2RhbEltYWdlIiwibW9kYWxJbWFnZSIsIm9uTW91c2VNb3ZlIiwib25XaGVlbCIsImhhbmRsZUNsaWNrIiwibW9kYWxQb3NpdGlvbiIsInBpY1Bvc3RDb3VudCIsImxlbmd0aCIsImNvbnZlcnRUb0hUTUwiLCJiYmNvZGUiLCJyZXBsYWNlIiwiaHRtbHRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwidW5kZWZpbmVkIiwiaHJlZiIsIm1hcCIsInBpY3R1cmUiLCJhcnJheSIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJwcmUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/thread/ui/thread.tsx\n"));

/***/ })

});