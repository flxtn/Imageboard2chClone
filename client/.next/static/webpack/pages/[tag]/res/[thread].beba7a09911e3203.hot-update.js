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

/***/ "./src/features/post-thread-form/ui/post-thread-form.tsx":
/*!***************************************************************!*\
  !*** ./src/features/post-thread-form/ui/post-thread-form.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostThreadForm: function() { return /* binding */ PostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/ui-button */ \"./src/shared/ui/ui-button.tsx\");\n/* harmony import */ var _shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/ui-text-field */ \"./src/shared/ui/ui-text-field.tsx\");\n/* harmony import */ var _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-post-thread-form */ \"./src/features/post-thread-form/model/use-post-thread-form.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _entities_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/post/query */ \"./src/entities/post/query.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _bbob_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bbob/parser */ \"./node_modules/@bbob/parser/dist/index.js\");\n/* harmony import */ var _bbob_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bbob_parser__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostThreadForm(param) {\n    let { isThread } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const renderBBCode = (bbcode)=>{\n        return (0,_bbob_parser__WEBPACK_IMPORTED_MODULE_8__.parse)(bbcode, {\n            renderer: {\n                ...renderers.React,\n                text: (node, children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: children\n                    }, node.key, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 35\n                    }, this)\n            }\n        });\n    };\n    const { register, handleSubmit, convertToHTML, handleDragEnter, handleDrop, handleDragLeave, handleFileInputChange, dragging, files, setFiles, filesUrl } = (0,_model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm)(desk);\n    const threadMutation = isThread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_5__.PostThreadMutation)(desk) : (0,_entities_post_query__WEBPACK_IMPORTED_MODULE_6__.PostMutation)(desk, thread);\n    console.log(files);\n    const onSubmit = (data)=>{\n        const bbcode = data.content;\n        const formData = new FormData();\n        formData.append(\"content\", data.content);\n        for (const file of files){\n            console.log(\"Adding file:\", file.name);\n            formData.append(\"pictures[]\", file);\n        }\n        threadMutation.mutate(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__.UiButton, {\n                        children: \"Отправить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.UiTextField, {\n                        inputProps: {\n                            placeholder: \"Комментарий. Макс. длина 1500\",\n                            ...register(\"content\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative\", dragging && \"border-red-500\"),\n                        onDragEnter: handleDragEnter,\n                        onDragOver: (e)=>e.preventDefault(),\n                        onDragLeave: handleDragLeave,\n                        onDrop: handleDrop,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-2xl text-gray-300\",\n                                children: \"ДОБАВИТЬ ФАЙЛ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                multiple: true,\n                                className: \"absolute inset-0 opacity-0\",\n                                onChange: handleFileInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mb-2\",\n                children: filesUrl.length ? filesUrl.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-solid mr-2 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[100px] w-[100px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.url,\n                                    alt: \"\",\n                                    className: \"max-w-[100px] max-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-opacity-45 bg-gray-300 flex w-[100px] h-[25px] justify-between items-center px-1 absolute left-0 bottom-0\",\n                                    children: [\n                                        \"\".concat(parseFloat((item.file.size / (1024 * 1024)).toFixed(1)), \"МБ\"),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setFiles((prev)=>prev.filter((_, i)=>i != index)),\n                                            children: \"Х\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 15\n                    }, this)) : \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(PostThreadForm, \"mH6hXJgJOa4j+uhRur4hdYwwL7g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm\n    ];\n});\n_c = PostThreadForm;\nvar _c;\n$RefreshReg$(_c, \"PostThreadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNPO0FBQ1U7QUFDMUI7QUFDa0M7QUFDckI7QUFDN0I7QUFDcUI7QUFFdEMsU0FBU1EsZUFBZSxLQUFtQztRQUFuQyxFQUFFQyxRQUFRLEVBQXlCLEdBQW5DOztJQUM3QixNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTVEsT0FBT0QsT0FBT0UsS0FBSyxDQUFDQyxHQUFHO0lBQzdCLE1BQU1DLFNBQVNKLE9BQU9FLEtBQUssQ0FBQ0UsTUFBTTtJQUNsQyxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE9BQU9ULG1EQUFLQSxDQUFDUyxRQUFRO1lBQ25CQyxVQUFVO2dCQUNSLEdBQUdDLFVBQVVDLEtBQUs7Z0JBQ2xCQyxNQUFNLENBQUNDLE1BQU1DLHlCQUFhLDhEQUFDQztrQ0FBcUJEO3VCQUFYRCxLQUFLRyxHQUFHOzs7OztZQUUvQztRQUNGO0lBQ0Y7SUFFQSxNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxhQUFhLEVBQ2JDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxlQUFlLEVBQ2ZDLHFCQUFxQixFQUNyQkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsUUFBUSxFQUNULEdBQUdqQyw4RUFBaUJBLENBQUNTO0lBRXRCLE1BQU15QixpQkFBaUIzQixXQUNuQkwsMkVBQWtCQSxDQUFDTyxRQUNuQk4sa0VBQVlBLENBQUNNLE1BQU1HO0lBRXZCdUIsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLFdBQVcsQ0FBQ0M7UUFDaEIsTUFBTXhCLFNBQVN3QixLQUFLQyxPQUFPO1FBQzNCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxXQUFXSixLQUFLQyxPQUFPO1FBQ3ZDLEtBQUssTUFBTUksUUFBUVosTUFBTztZQUN4QkksUUFBUUMsR0FBRyxDQUFDLGdCQUFnQk8sS0FBS0MsSUFBSTtZQUNyQ0osU0FBU0UsTUFBTSxDQUFDLGNBQWNDO1FBQ2hDO1FBQ0FULGVBQWVXLE1BQU0sQ0FBQ0w7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQztnQkFBS1YsVUFBVWIsYUFBYWE7O2tDQUM3Qiw4REFBQ3ZDLDBEQUFRQTtrQ0FBQzs7Ozs7O2tDQUNSLDhEQUFDQyxpRUFBV0E7d0JBQ1ZpRCxZQUFZOzRCQUNWQyxhQUFhOzRCQUNiLEdBQUcxQixTQUFTLFVBQVU7d0JBQ3hCOzs7Ozs7a0NBRUYsOERBQUN1Qjt3QkFDQ0ksV0FBVzlDLGdEQUFJQSxDQUNiLDhGQUNBMEIsWUFBWTt3QkFFZHFCLGFBQWF6Qjt3QkFDYjBCLFlBQVksQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYzt3QkFDbkNDLGFBQWEzQjt3QkFDYjRCLFFBQVE3Qjs7MENBRVIsOERBQUNOO2dDQUFLNkIsV0FBVTswQ0FBeUI7Ozs7OzswQ0FDekMsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMQyxRQUFPO2dDQUNQQyxRQUFRO2dDQUNSVixXQUFVO2dDQUNWVyxVQUFVaEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEIsOERBQUNpQjtnQkFBSUksV0FBVTswQkFDWmpCLFNBQVM2QixNQUFNLEdBQ1o3QixTQUFTOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsQiw4REFBQ25CO3dCQUFJSSxXQUFVO2tDQUNiLDRFQUFDSjs0QkFBSUksV0FBVTs7OENBQ2IsOERBQUNnQjtvQ0FDQ0MsS0FBS0gsS0FBS0ksR0FBRztvQ0FDYkMsS0FBSTtvQ0FDSm5CLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ0o7b0NBQUlJLFdBQVU7O3dDQUNYLEdBRUEsT0FGRW9CLFdBQ0YsQ0FBQ04sS0FBS3JCLElBQUksQ0FBQzRCLElBQUksR0FBSSxRQUFPLElBQUcsQ0FBQyxFQUFHQyxPQUFPLENBQUMsS0FDekM7c0RBQ0YsOERBQUNDOzRDQUNDQyxTQUFTLElBQ1AxQyxTQUFTLENBQUMyQyxPQUFTQSxLQUFLQyxNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsS0FBS2I7c0RBRWpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU9UOzs7Ozs7Ozs7Ozs7QUFJWjtHQXhHZ0IzRDs7UUFDQ0wsa0RBQVNBO1FBeUJwQkQsMEVBQWlCQTs7O0tBMUJQTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeD9mMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyBVaVRleHRGaWVsZCB9IGZyb20gXCJAL3NoYXJlZC91aS91aS10ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IHVzZVBvc3RUaHJlYWRGb3JtIH0gZnJvbSBcIi4uL21vZGVsL3VzZS1wb3N0LXRocmVhZC1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQb3N0VGhyZWFkLCBQb3N0VGhyZWFkTXV0YXRpb24gfSBmcm9tIFwiQC9lbnRpdGllcy90aHJlYWRzL3F1ZXJ5XCI7XHJcbmltcG9ydCB7IFBvc3RNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3Bvc3QvcXVlcnlcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHtwYXJzZSwgcmVuZGVyZXIgfSBmcm9tICdAYmJvYi9wYXJzZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9zdFRocmVhZEZvcm0oeyBpc1RocmVhZCB9OiB7IGlzVGhyZWFkOiBib29sZWFuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkZXNrID0gcm91dGVyLnF1ZXJ5LnRhZyBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGhyZWFkID0gcm91dGVyLnF1ZXJ5LnRocmVhZCBhcyBzdHJpbmc7XHJcbiAgY29uc3QgcmVuZGVyQkJDb2RlID0gKGJiY29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gcGFyc2UoYmJjb2RlLCB7XHJcbiAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgLi4ucmVuZGVyZXJzLlJlYWN0LFxyXG4gICAgICAgIHRleHQ6IChub2RlLCBjaGlsZHJlbikgPT4gPHNwYW4ga2V5PXtub2RlLmtleX0+e2NoaWxkcmVufTwvc3Bhbj4sIC8vINCe0L/RgNC10LTQtdC70Y/QtdGCINGA0LXQvdC00LXRgNC40L3QsyDRgtC10LrRgdGC0LBcclxuICAgICAgICAvLyDQlNGA0YPQs9C40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0YDQtdC90LTQtdGA0LXRgNGLLCDQtdGB0LvQuCDQvdC10L7QsdGF0L7QtNC40LzQvlxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBjb252ZXJ0VG9IVE1MLFxyXG4gICAgaGFuZGxlRHJhZ0VudGVyLFxyXG4gICAgaGFuZGxlRHJvcCxcclxuICAgIGhhbmRsZURyYWdMZWF2ZSxcclxuICAgIGhhbmRsZUZpbGVJbnB1dENoYW5nZSxcclxuICAgIGRyYWdnaW5nLFxyXG4gICAgZmlsZXMsXHJcbiAgICBzZXRGaWxlcyxcclxuICAgIGZpbGVzVXJsLFxyXG4gIH0gPSB1c2VQb3N0VGhyZWFkRm9ybShkZXNrKTtcclxuXHJcbiAgY29uc3QgdGhyZWFkTXV0YXRpb24gPSBpc1RocmVhZFxyXG4gICAgPyBQb3N0VGhyZWFkTXV0YXRpb24oZGVzaylcclxuICAgIDogUG9zdE11dGF0aW9uKGRlc2ssIHRocmVhZCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGZpbGVzKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogUG9zdFRocmVhZCkgPT4ge1xyXG4gICAgY29uc3QgYmJjb2RlID0gZGF0YS5jb250ZW50O1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgZGF0YS5jb250ZW50KTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBmaWxlOlwiLCBmaWxlLm5hbWUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaWN0dXJlc1tdXCIsIGZpbGUpO1xyXG4gICAgfVxyXG4gICAgdGhyZWFkTXV0YXRpb24ubXV0YXRlKGZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICA8VWlCdXR0b24+0J7RgtC/0YDQsNCy0LjRgtGMPC9VaUJ1dHRvbj5cclxuICAgICAgICA8VWlUZXh0RmllbGRcclxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0JrQvtC80LzQtdC90YLQsNGA0LjQuS4g0JzQsNC60YEuINC00LvQuNC90LAgMTUwMFwiLFxyXG4gICAgICAgICAgICAuLi5yZWdpc3RlcihcImNvbnRlbnRcIiksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICBcImgtMTQgYm9yZGVyLTQgYm9yZGVyLWRvdHRlZCBtYi0yIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBkcmFnZ2luZyAmJiBcImJvcmRlci1yZWQtNTAwXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBvbkRyYWdFbnRlcj17aGFuZGxlRHJhZ0VudGVyfVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XHJcbiAgICAgICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTMwMFwiPtCU0J7QkdCQ0JLQmNCi0Kwg0KTQkNCZ0Js8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWItMlwiPlxyXG4gICAgICAgIHtmaWxlc1VybC5sZW5ndGhcclxuICAgICAgICAgID8gZmlsZXNVcmwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zb2xpZCBtci0yIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzEwMHB4XSB3LVsxMDBweF0gaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzEwMHB4XSBtYXgtaC1bMTAwcHhdXCJcclxuICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW9wYWNpdHktNDUgYmctZ3JheS0zMDAgZmxleCB3LVsxMDBweF0gaC1bMjVweF0ganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC0xIGFic29sdXRlIGxlZnQtMCBib3R0b20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZmlsZS5zaXplIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKVxyXG4gICAgICAgICAgICAgICAgICAgICl90JzQkWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZXMoKHByZXYpID0+IHByZXYuZmlsdGVyKChfLCBpKSA9PiBpICE9IGluZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQpVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBcIiBcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVaUJ1dHRvbiIsIlVpVGV4dEZpZWxkIiwidXNlUG9zdFRocmVhZEZvcm0iLCJ1c2VSb3V0ZXIiLCJQb3N0VGhyZWFkTXV0YXRpb24iLCJQb3N0TXV0YXRpb24iLCJjbHN4IiwicGFyc2UiLCJQb3N0VGhyZWFkRm9ybSIsImlzVGhyZWFkIiwicm91dGVyIiwiZGVzayIsInF1ZXJ5IiwidGFnIiwidGhyZWFkIiwicmVuZGVyQkJDb2RlIiwiYmJjb2RlIiwicmVuZGVyZXIiLCJyZW5kZXJlcnMiLCJSZWFjdCIsInRleHQiLCJub2RlIiwiY2hpbGRyZW4iLCJzcGFuIiwia2V5IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJjb252ZXJ0VG9IVE1MIiwiaGFuZGxlRHJhZ0VudGVyIiwiaGFuZGxlRHJvcCIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZUZpbGVJbnB1dENoYW5nZSIsImRyYWdnaW5nIiwiZmlsZXMiLCJzZXRGaWxlcyIsImZpbGVzVXJsIiwidGhyZWFkTXV0YXRpb24iLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJkYXRhIiwiY29udGVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwibmFtZSIsIm11dGF0ZSIsImRpdiIsImZvcm0iLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ092ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm11bHRpcGxlIiwib25DaGFuZ2UiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJwYXJzZUZsb2F0Iiwic2l6ZSIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldiIsImZpbHRlciIsIl8iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/ui/post-thread-form.tsx\n"));

/***/ })

});