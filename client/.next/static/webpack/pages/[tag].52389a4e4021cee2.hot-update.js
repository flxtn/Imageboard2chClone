"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[tag]",{

/***/ "./src/features/post-thread-form/ui/post-thread-form.tsx":
/*!***************************************************************!*\
  !*** ./src/features/post-thread-form/ui/post-thread-form.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostThreadForm: function() { return /* binding */ PostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/ui-button */ \"./src/shared/ui/ui-button.tsx\");\n/* harmony import */ var _shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/ui-text-field */ \"./src/shared/ui/ui-text-field.tsx\");\n/* harmony import */ var _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-post-thread-form */ \"./src/features/post-thread-form/model/use-post-thread-form.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _entities_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/post/query */ \"./src/entities/post/query.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostThreadForm(param) {\n    let { isThread } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const { register, handleSubmit, convertToHTML, handleDragEnter, handleDrop, handleDragLeave, handleFileInputChange, dragging, files, setFiles } = (0,_model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm)(desk);\n    const threadMutation = isThread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_5__.PostThreadMutation)(desk) : (0,_entities_post_query__WEBPACK_IMPORTED_MODULE_6__.PostMutation)(desk, thread);\n    const onSubmit = (data)=>{\n        const bbcode = data.content;\n        const htmlContent = convertToHTML(bbcode);\n        const formData = new FormData();\n        formData.append(\"content\", htmlContent);\n        for (const file of files){\n            console.log(\"Adding file:\", file.name);\n            formData.append(\"pictures[]\", file);\n        }\n        threadMutation.mutate(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.UiTextField, {\n                inputProps: {\n                    placeholder: \"Комментарий. Макс. длина 1500\",\n                    ...register(\"content\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative\",\n                onDragEnter: handleDragEnter,\n                onDragOver: (e)=>e.preventDefault(),\n                onDragLeave: handleDragLeave,\n                onDrop: handleDrop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl text-gray-300\",\n                        children: \"ДОБАВИТЬ ФАЙЛ\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"image/*\",\n                        multiple: true,\n                        className: \"absolute inset-0 opacity-0\",\n                        onChange: handleFileInputChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mb-2\",\n                children: files.length ? files.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-gray-200 h-24 w-24 flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-6 bg-opacity-45 bg-gray-300 flex justify-between\",\n                                children: [\n                                    \"\".concat(parseFloat((item.size / (1024 * 1024)).toFixed(1)), \"МБ\"),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setFiles((prev)=>prev.filter((item, i)=>i != index)),\n                                        children: \"Х\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 15\n                    }, this)) : \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__.UiButton, {\n                children: \"Отправить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(PostThreadForm, \"ehY8lNI5n6/300Fa9p3vRBfAz2s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm\n    ];\n});\n_c = PostThreadForm;\nvar _c;\n$RefreshReg$(_c, \"PostThreadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNPO0FBQ1U7QUFDMUI7QUFDa0M7QUFFckI7QUFHOUMsU0FBU00sZUFBZSxLQUFtQztRQUFuQyxFQUFFQyxRQUFRLEVBQXlCLEdBQW5DOztJQUM3QixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0sT0FBT0QsT0FBT0UsS0FBSyxDQUFDQyxHQUFHO0lBQzdCLE1BQU1DLFNBQVNKLE9BQU9FLEtBQUssQ0FBQ0UsTUFBTTtJQUNsQyxNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxhQUFhLEVBQ2JDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxlQUFlLEVBQ2ZDLHFCQUFxQixFQUNyQkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVCxHQUFHcEIsOEVBQWlCQSxDQUFDTztJQUV0QixNQUFNYyxpQkFBaUJoQixXQUNuQkgsMkVBQWtCQSxDQUFDSyxRQUNuQkosa0VBQVlBLENBQUNJLE1BQU1HO0lBRXZCLE1BQU1ZLFdBQVcsQ0FBQ0M7UUFDaEIsTUFBTUMsU0FBU0QsS0FBS0UsT0FBTztRQUMzQixNQUFNQyxjQUFjYixjQUFjVztRQUNsQyxNQUFNRyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsV0FBV0g7UUFDM0IsS0FBSyxNQUFNSSxRQUFRWCxNQUFPO1lBQ3hCWSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRixLQUFLRyxJQUFJO1lBQ3JDTixTQUFTRSxNQUFNLENBQUMsY0FBY0M7UUFDaEM7UUFDQVQsZUFBZWEsTUFBTSxDQUFDUDtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFLYixVQUFVVixhQUFhVTs7MEJBQzNCLDhEQUFDdkIsaUVBQVdBO2dCQUNWcUMsWUFBWTtvQkFDVkMsYUFBYTtvQkFDYixHQUFHMUIsU0FBUyxVQUFVO2dCQUN4Qjs7Ozs7OzBCQUVGLDhEQUFDMkI7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLGFBQWExQjtnQkFDYjJCLFlBQVksQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNDLGFBQWE1QjtnQkFDYjZCLFFBQVE5Qjs7a0NBRVIsOERBQUMrQjt3QkFBS1AsV0FBVTtrQ0FBeUI7Ozs7OztrQ0FDekMsOERBQUNRO3dCQUNDQyxNQUFLO3dCQUNMQyxRQUFPO3dCQUNQQyxRQUFRO3dCQUNSWCxXQUFVO3dCQUNWWSxVQUFVbEM7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNacEIsTUFBTWlDLE1BQU0sR0FDVGpDLE1BQU1rQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNqQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOzs7OzswQ0FDRCw4REFBQ0E7Z0NBQUlDLFdBQVU7O29DQUNYLEdBQXFELE9BQW5EaUIsV0FBVyxDQUFDRixLQUFLRyxJQUFJLEdBQUksUUFBTyxJQUFHLENBQUMsRUFBR0MsT0FBTyxDQUFDLEtBQUk7a0RBQ3ZELDhEQUFDQzt3Q0FDQ0MsU0FBUyxJQUNQeEMsU0FBUyxDQUFDeUMsT0FBU0EsS0FBS0MsTUFBTSxDQUFDLENBQUNSLE1BQU1TLElBQU1BLEtBQUtSO2tEQUVwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBTVA7Ozs7OzswQkFFTiw4REFBQ3pELDBEQUFRQTswQkFBQzs7Ozs7Ozs7Ozs7O0FBR2hCO0dBL0VnQk07O1FBQ0NILGtEQUFTQTtRQWNwQkQsMEVBQWlCQTs7O0tBZlBJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9wb3N0LXRocmVhZC1mb3JtL3VpL3Bvc3QtdGhyZWFkLWZvcm0udHN4P2YwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktYnV0dG9uXCI7XHJcbmltcG9ydCB7IFVpVGV4dEZpZWxkIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLXRleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgdXNlUG9zdFRocmVhZEZvcm0gfSBmcm9tIFwiLi4vbW9kZWwvdXNlLXBvc3QtdGhyZWFkLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBvc3RUaHJlYWQsIFBvc3RUaHJlYWRNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3RocmVhZHMvcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9zdE11dGF0aW9uIH0gZnJvbSBcIkAvZW50aXRpZXMvcG9zdC9xdWVyeVwiO1xyXG5pbXBvcnQgeyBVaVNwaW5uZXIgfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktc3Bpbm5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RUaHJlYWRGb3JtKHsgaXNUaHJlYWQgfTogeyBpc1RocmVhZDogYm9vbGVhbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGVzayA9IHJvdXRlci5xdWVyeS50YWcgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRocmVhZCA9IHJvdXRlci5xdWVyeS50aHJlYWQgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgY29udmVydFRvSFRNTCxcclxuICAgIGhhbmRsZURyYWdFbnRlcixcclxuICAgIGhhbmRsZURyb3AsXHJcbiAgICBoYW5kbGVEcmFnTGVhdmUsXHJcbiAgICBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UsXHJcbiAgICBkcmFnZ2luZyxcclxuICAgIGZpbGVzLFxyXG4gICAgc2V0RmlsZXMsXHJcbiAgfSA9IHVzZVBvc3RUaHJlYWRGb3JtKGRlc2spO1xyXG5cclxuICBjb25zdCB0aHJlYWRNdXRhdGlvbiA9IGlzVGhyZWFkXHJcbiAgICA/IFBvc3RUaHJlYWRNdXRhdGlvbihkZXNrKVxyXG4gICAgOiBQb3N0TXV0YXRpb24oZGVzaywgdGhyZWFkKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogUG9zdFRocmVhZCkgPT4ge1xyXG4gICAgY29uc3QgYmJjb2RlID0gZGF0YS5jb250ZW50O1xyXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBjb252ZXJ0VG9IVE1MKGJiY29kZSk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBodG1sQ29udGVudCk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgZmlsZTpcIiwgZmlsZS5uYW1lKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGljdHVyZXNbXVwiLCBmaWxlKTtcclxuICAgIH1cclxuICAgIHRocmVhZE11dGF0aW9uLm11dGF0ZShmb3JtRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgPFVpVGV4dEZpZWxkXHJcbiAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JrQvtC80LzQtdC90YLQsNGA0LjQuS4g0JzQsNC60YEuINC00LvQuNC90LAgMTUwMFwiLFxyXG4gICAgICAgICAgLi4ucmVnaXN0ZXIoXCJjb250ZW50XCIpLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJoLTE0IGJvcmRlci00IGJvcmRlci1kb3R0ZWQgbWItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIlxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0zMDBcIj7QlNCe0JHQkNCS0JjQotCsINCk0JDQmdCbPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTJcIj5cclxuICAgICAgICB7ZmlsZXMubGVuZ3RoXHJcbiAgICAgICAgICA/IGZpbGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgaC0yNCB3LTI0IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiBiZy1vcGFjaXR5LTQ1IGJnLWdyYXktMzAwIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtwYXJzZUZsb2F0KChpdGVtLnNpemUgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpKX3QnNCRYH1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlcygocHJldikgPT4gcHJldi5maWx0ZXIoKGl0ZW0sIGkpID0+IGkgIT0gaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINClXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IFwiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVpQnV0dG9uPtCe0YLQv9GA0LDQstC40YLRjDwvVWlCdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVWlCdXR0b24iLCJVaVRleHRGaWVsZCIsInVzZVBvc3RUaHJlYWRGb3JtIiwidXNlUm91dGVyIiwiUG9zdFRocmVhZE11dGF0aW9uIiwiUG9zdE11dGF0aW9uIiwiUG9zdFRocmVhZEZvcm0iLCJpc1RocmVhZCIsInJvdXRlciIsImRlc2siLCJxdWVyeSIsInRhZyIsInRocmVhZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY29udmVydFRvSFRNTCIsImhhbmRsZURyYWdFbnRlciIsImhhbmRsZURyb3AiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UiLCJkcmFnZ2luZyIsImZpbGVzIiwic2V0RmlsZXMiLCJ0aHJlYWRNdXRhdGlvbiIsIm9uU3VibWl0IiwiZGF0YSIsImJiY29kZSIsImNvbnRlbnQiLCJodG1sQ29udGVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJtdXRhdGUiLCJmb3JtIiwiaW5wdXRQcm9wcyIsInBsYWNlaG9sZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25EcmFnRW50ZXIiLCJvbkRyYWdPdmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhcnNlRmxvYXQiLCJzaXplIiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2IiwiZmlsdGVyIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/ui/post-thread-form.tsx\n"));

/***/ })

});