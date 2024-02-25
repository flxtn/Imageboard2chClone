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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostThreadForm: function() { return /* binding */ PostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/ui-button */ \"./src/shared/ui/ui-button.tsx\");\n/* harmony import */ var _shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/ui-text-field */ \"./src/shared/ui/ui-text-field.tsx\");\n/* harmony import */ var _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-post-thread-form */ \"./src/features/post-thread-form/model/use-post-thread-form.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _entities_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/post/query */ \"./src/entities/post/query.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostThreadForm(param) {\n    let { isThread } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const { register, handleSubmit, convertToHTML, handleDragEnter, handleDrop, handleDragLeave, handleFileInputChange, dragging, files, setFiles, filesUrl } = (0,_model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm)(desk);\n    const threadMutation = isThread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_5__.PostThreadMutation)(desk) : (0,_entities_post_query__WEBPACK_IMPORTED_MODULE_6__.PostMutation)(desk, thread);\n    console.log(files);\n    const onSubmit = (data)=>{\n        const bbcode = data.content;\n        const formData = new FormData();\n        formData.append(\"content\", data.content);\n        for (const file of files){\n            console.log(\"Adding file:\", file.name);\n            formData.append(\"pictures[]\", file);\n        }\n        threadMutation.mutate(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__.UiButton, {\n                        children: \"Отправить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.UiTextField, {\n                        inputProps: {\n                            placeholder: \"Комментарий. Макс. длина 1500\",\n                            ...register(\"content\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative cursor-pointer\", dragging && \"border-red-500\"),\n                        onDragEnter: handleDragEnter,\n                        onDragOver: (e)=>e.preventDefault(),\n                        onDragLeave: handleDragLeave,\n                        onDrop: handleDrop,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-2xl text-gray-300\",\n                                children: \"ДОБАВИТЬ ФАЙЛ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                multiple: true,\n                                className: \"absolute inset-0 opacity-0 cursor-pointer\",\n                                onChange: handleFileInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mb-2\",\n                children: filesUrl.length ? filesUrl.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-solid mr-2 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[100px] w-[100px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.url,\n                                    alt: \"\",\n                                    className: \"max-w-[100px] max-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-opacity-45 bg-gray-300 flex w-[100px] h-[25px] justify-between items-center px-1 absolute left-0 bottom-0\",\n                                    children: [\n                                        \"\".concat(parseFloat((item.file.size / (1024 * 1024)).toFixed(1)), \"МБ\"),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setFiles((prev)=>prev.filter((_, i)=>i != index)),\n                                            children: \"Х\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, this)) : \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(PostThreadForm, \"mH6hXJgJOa4j+uhRur4hdYwwL7g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm\n    ];\n});\n_c = PostThreadForm;\nvar _c;\n$RefreshReg$(_c, \"PostThreadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTztBQUNVO0FBQzFCO0FBQ2tDO0FBQ3JCO0FBQzdCO0FBRWpCLFNBQVNPLGVBQWUsS0FBbUM7UUFBbkMsRUFBRUMsUUFBUSxFQUF5QixHQUFuQzs7SUFDN0IsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsR0FBRztJQUM3QixNQUFNQyxTQUFTSixPQUFPRSxLQUFLLENBQUNFLE1BQU07SUFFbEMsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsYUFBYSxFQUNiQyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsZUFBZSxFQUNmQyxxQkFBcUIsRUFDckJDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFFBQVEsRUFDVCxHQUFHdEIsOEVBQWlCQSxDQUFDUTtJQUV0QixNQUFNZSxpQkFBaUJqQixXQUNuQkosMkVBQWtCQSxDQUFDTSxRQUNuQkwsa0VBQVlBLENBQUNLLE1BQU1HO0lBRXZCYSxRQUFRQyxHQUFHLENBQUNMO0lBRVosTUFBTU0sV0FBVyxDQUFDQztRQUNoQixNQUFNQyxTQUFTRCxLQUFLRSxPQUFPO1FBQzNCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxXQUFXTCxLQUFLRSxPQUFPO1FBQ3ZDLEtBQUssTUFBTUksUUFBUWIsTUFBTztZQUN4QkksUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlEsS0FBS0MsSUFBSTtZQUNyQ0osU0FBU0UsTUFBTSxDQUFDLGNBQWNDO1FBQ2hDO1FBQ0FWLGVBQWVZLE1BQU0sQ0FBQ0w7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQztnQkFBS1gsVUFBVWIsYUFBYWE7O2tDQUMzQiw4REFBQzVCLDBEQUFRQTtrQ0FBQzs7Ozs7O2tDQUNWLDhEQUFDQyxpRUFBV0E7d0JBQ1Z1QyxZQUFZOzRCQUNWQyxhQUFhOzRCQUNiLEdBQUczQixTQUFTLFVBQVU7d0JBQ3hCOzs7Ozs7a0NBRUYsOERBQUN3Qjt3QkFDQ0ksV0FBV3BDLGdEQUFJQSxDQUNiLDZHQUNBZSxZQUFZO3dCQUVkc0IsYUFBYTFCO3dCQUNiMkIsWUFBWSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO3dCQUNuQ0MsYUFBYTVCO3dCQUNiNkIsUUFBUTlCOzswQ0FFUiw4REFBQytCO2dDQUFLUCxXQUFVOzBDQUF5Qjs7Ozs7OzBDQUN6Qyw4REFBQ1E7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JYLFdBQVU7Z0NBQ1ZZLFVBQVVsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ2tCO2dCQUFJSSxXQUFVOzBCQUNabEIsU0FBUytCLE1BQU0sR0FDWi9CLFNBQVNnQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDcEI7d0JBQUlJLFdBQVU7a0NBQ2IsNEVBQUNKOzRCQUFJSSxXQUFVOzs4Q0FDYiw4REFBQ2lCO29DQUNDQyxLQUFLSCxLQUFLSSxHQUFHO29DQUNiQyxLQUFJO29DQUNKcEIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDSjtvQ0FBSUksV0FBVTs7d0NBQ1gsR0FFQSxPQUZFcUIsV0FDRixDQUFDTixLQUFLdEIsSUFBSSxDQUFDNkIsSUFBSSxHQUFJLFFBQU8sSUFBRyxDQUFDLEVBQUdDLE9BQU8sQ0FBQyxLQUN6QztzREFDRiw4REFBQ0M7NENBQ0NDLFNBQVMsSUFDUDVDLFNBQVMsQ0FBQzZDLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxLQUFLYjtzREFFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBT1Q7Ozs7Ozs7Ozs7OztBQUlaO0dBL0ZnQm5EOztRQUNDSixrREFBU0E7UUFnQnBCRCwwRUFBaUJBOzs7S0FqQlBLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9wb3N0LXRocmVhZC1mb3JtL3VpL3Bvc3QtdGhyZWFkLWZvcm0udHN4P2YwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktYnV0dG9uXCI7XHJcbmltcG9ydCB7IFVpVGV4dEZpZWxkIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLXRleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgdXNlUG9zdFRocmVhZEZvcm0gfSBmcm9tIFwiLi4vbW9kZWwvdXNlLXBvc3QtdGhyZWFkLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBvc3RUaHJlYWQsIFBvc3RUaHJlYWRNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3RocmVhZHMvcXVlcnlcIjtcclxuaW1wb3J0IHsgUG9zdE11dGF0aW9uIH0gZnJvbSBcIkAvZW50aXRpZXMvcG9zdC9xdWVyeVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RUaHJlYWRGb3JtKHsgaXNUaHJlYWQgfTogeyBpc1RocmVhZDogYm9vbGVhbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGVzayA9IHJvdXRlci5xdWVyeS50YWcgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRocmVhZCA9IHJvdXRlci5xdWVyeS50aHJlYWQgYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGNvbnZlcnRUb0hUTUwsXHJcbiAgICBoYW5kbGVEcmFnRW50ZXIsXHJcbiAgICBoYW5kbGVEcm9wLFxyXG4gICAgaGFuZGxlRHJhZ0xlYXZlLFxyXG4gICAgaGFuZGxlRmlsZUlucHV0Q2hhbmdlLFxyXG4gICAgZHJhZ2dpbmcsXHJcbiAgICBmaWxlcyxcclxuICAgIHNldEZpbGVzLFxyXG4gICAgZmlsZXNVcmwsXHJcbiAgfSA9IHVzZVBvc3RUaHJlYWRGb3JtKGRlc2spO1xyXG5cclxuICBjb25zdCB0aHJlYWRNdXRhdGlvbiA9IGlzVGhyZWFkXHJcbiAgICA/IFBvc3RUaHJlYWRNdXRhdGlvbihkZXNrKVxyXG4gICAgOiBQb3N0TXV0YXRpb24oZGVzaywgdGhyZWFkKTtcclxuXHJcbiAgY29uc29sZS5sb2coZmlsZXMpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBQb3N0VGhyZWFkKSA9PiB7XHJcbiAgICBjb25zdCBiYmNvZGUgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCBkYXRhLmNvbnRlbnQpO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGZpbGU6XCIsIGZpbGUubmFtZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBpY3R1cmVzW11cIiwgZmlsZSk7XHJcbiAgICB9XHJcbiAgICB0aHJlYWRNdXRhdGlvbi5tdXRhdGUoZm9ybURhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgPFVpQnV0dG9uPtCe0YLQv9GA0LDQstC40YLRjDwvVWlCdXR0b24+XHJcbiAgICAgICAgPFVpVGV4dEZpZWxkXHJcbiAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCa0L7QvNC80LXQvdGC0LDRgNC40LkuINCc0LDQutGBLiDQtNC70LjQvdCwIDE1MDBcIixcclxuICAgICAgICAgICAgLi4ucmVnaXN0ZXIoXCJjb250ZW50XCIpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJoLTE0IGJvcmRlci00IGJvcmRlci1kb3R0ZWQgbWItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXJcIixcclxuICAgICAgICAgICAgZHJhZ2dpbmcgJiYgXCJib3JkZXItcmVkLTUwMFwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0zMDBcIj7QlNCe0JHQkNCS0JjQotCsINCk0JDQmdCbPC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0wIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTJcIj5cclxuICAgICAgICB7ZmlsZXNVcmwubGVuZ3RoXHJcbiAgICAgICAgICA/IGZpbGVzVXJsLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgbXItMiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDBweF0gdy1bMTAwcHhdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVsxMDBweF0gbWF4LWgtWzEwMHB4XVwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1vcGFjaXR5LTQ1IGJnLWdyYXktMzAwIGZsZXggdy1bMTAwcHhdIGgtWzI1cHhdIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtMSBhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmZpbGUuc2l6ZSAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSlcclxuICAgICAgICAgICAgICAgICAgICApfdCc0JFgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoXywgaSkgPT4gaSAhPSBpbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0KVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogXCIgXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVWlCdXR0b24iLCJVaVRleHRGaWVsZCIsInVzZVBvc3RUaHJlYWRGb3JtIiwidXNlUm91dGVyIiwiUG9zdFRocmVhZE11dGF0aW9uIiwiUG9zdE11dGF0aW9uIiwiY2xzeCIsIlBvc3RUaHJlYWRGb3JtIiwiaXNUaHJlYWQiLCJyb3V0ZXIiLCJkZXNrIiwicXVlcnkiLCJ0YWciLCJ0aHJlYWQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnZlcnRUb0hUTUwiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcm9wIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRmlsZUlucHV0Q2hhbmdlIiwiZHJhZ2dpbmciLCJmaWxlcyIsInNldEZpbGVzIiwiZmlsZXNVcmwiLCJ0aHJlYWRNdXRhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiLCJiYmNvZGUiLCJjb250ZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGUiLCJuYW1lIiwibXV0YXRlIiwiZGl2IiwiZm9ybSIsImlucHV0UHJvcHMiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnT3ZlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRHJhZ0xlYXZlIiwib25Ecm9wIiwic3BhbiIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm11bHRpcGxlIiwib25DaGFuZ2UiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJwYXJzZUZsb2F0Iiwic2l6ZSIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldiIsImZpbHRlciIsIl8iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/ui/post-thread-form.tsx\n"));

/***/ })

});