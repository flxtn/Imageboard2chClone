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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostThreadForm: function() { return /* binding */ PostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/ui-button */ \"./src/shared/ui/ui-button.tsx\");\n/* harmony import */ var _shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/ui-text-field */ \"./src/shared/ui/ui-text-field.tsx\");\n/* harmony import */ var _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-post-thread-form */ \"./src/features/post-thread-form/model/use-post-thread-form.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _entities_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/post/query */ \"./src/entities/post/query.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostThreadForm(param) {\n    let { isThread } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const { register, handleSubmit, convertToHTML, handleDragEnter, handleDrop, handleDragLeave, handleFileInputChange, dragging, files, setFiles, filesUrl } = (0,_model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm)(desk);\n    const threadMutation = isThread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_5__.PostThreadMutation)(desk) : (0,_entities_post_query__WEBPACK_IMPORTED_MODULE_6__.PostMutation)(desk, thread);\n    console.log(files);\n    const onSubmit = (data)=>{\n        const bbcode = data.content;\n        const htmlContent = convertToHTML(bbcode);\n        const formData = new FormData();\n        formData.append(\"content\", htmlContent);\n        for (const file of files){\n            console.log(\"Adding file:\", file.name);\n            formData.append(\"pictures[]\", file);\n        }\n        threadMutation.mutate(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.UiTextField, {\n                inputProps: {\n                    placeholder: \"Комментарий. Макс. длина 1500\",\n                    ...register(\"content\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative\", dragging && \"border-red-500\"),\n                onDragEnter: handleDragEnter,\n                onDragOver: (e)=>e.preventDefault(),\n                onDragLeave: handleDragLeave,\n                onDrop: handleDrop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl text-gray-300\",\n                        children: \"ДОБАВИТЬ ФАЙЛ\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"image/*\",\n                        multiple: true,\n                        className: \"absolute inset-0 opacity-0\",\n                        onChange: handleFileInputChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mb-2\",\n                children: filesUrl.length ? filesUrl.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-gray-200 h-[100px] w-[100px] inline-block relative mr-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.url,\n                                alt: \"\",\n                                className: \"max-w-[99px] max-h-[100px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-opacity-45 bg-gray-300 flex w-full justify-between items-center px-1 absolute left-0 bottom-0\",\n                                children: [\n                                    \"\".concat(parseFloat((item.file.size / (1024 * 1024)).toFixed(1)), \"МБ\"),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setFiles((prev)=>prev.filter((_, i)=>i != index)),\n                                        children: \"Х\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, this)) : \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__.UiButton, {\n                children: \"Отправить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(PostThreadForm, \"mH6hXJgJOa4j+uhRur4hdYwwL7g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm\n    ];\n});\n_c = PostThreadForm;\nvar _c;\n$RefreshReg$(_c, \"PostThreadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTztBQUNVO0FBQzFCO0FBQ2tDO0FBRXJCO0FBRTdCO0FBRWpCLFNBQVNPLGVBQWUsS0FBbUM7UUFBbkMsRUFBRUMsUUFBUSxFQUF5QixHQUFuQzs7SUFDN0IsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsR0FBRztJQUM3QixNQUFNQyxTQUFTSixPQUFPRSxLQUFLLENBQUNFLE1BQU07SUFDbEMsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsYUFBYSxFQUNiQyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsZUFBZSxFQUNmQyxxQkFBcUIsRUFDckJDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFFBQVEsRUFDVCxHQUFHdEIsOEVBQWlCQSxDQUFDUTtJQUV0QixNQUFNZSxpQkFBaUJqQixXQUNuQkosMkVBQWtCQSxDQUFDTSxRQUNuQkwsa0VBQVlBLENBQUNLLE1BQU1HO0lBRXZCYSxRQUFRQyxHQUFHLENBQUNMO0lBRVosTUFBTU0sV0FBVyxDQUFDQztRQUNoQixNQUFNQyxTQUFTRCxLQUFLRSxPQUFPO1FBQzNCLE1BQU1DLGNBQWNoQixjQUFjYztRQUNsQyxNQUFNRyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsV0FBV0g7UUFDM0IsS0FBSyxNQUFNSSxRQUFRZCxNQUFPO1lBQ3hCSSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUyxLQUFLQyxJQUFJO1lBQ3JDSixTQUFTRSxNQUFNLENBQUMsY0FBY0M7UUFDaEM7UUFDQVgsZUFBZWEsTUFBTSxDQUFDTDtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFLWCxVQUFVYixhQUFhYTs7MEJBQzNCLDhEQUFDM0IsaUVBQVdBO2dCQUNWdUMsWUFBWTtvQkFDVkMsYUFBYTtvQkFDYixHQUFHM0IsU0FBUyxVQUFVO2dCQUN4Qjs7Ozs7OzBCQUVGLDhEQUFDNEI7Z0JBQ0NDLFdBQVdyQyxnREFBSUEsQ0FDYiw4RkFDQWUsWUFBWTtnQkFFZHVCLGFBQWEzQjtnQkFDYjRCLFlBQVksQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNDLGFBQWE3QjtnQkFDYjhCLFFBQVEvQjs7a0NBRVIsOERBQUNnQzt3QkFBS1AsV0FBVTtrQ0FBeUI7Ozs7OztrQ0FDekMsOERBQUNRO3dCQUNDQyxNQUFLO3dCQUNMQyxRQUFPO3dCQUNQQyxRQUFRO3dCQUNSWCxXQUFVO3dCQUNWWSxVQUFVbkM7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNabkIsU0FBU2dDLE1BQU0sR0FDWmhDLFNBQVNpQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDakI7d0JBQ0NDLFdBQVU7OzBDQUdWLDhEQUFDaUI7Z0NBQUlDLEtBQUtILEtBQUtJLEdBQUc7Z0NBQUVDLEtBQUk7Z0NBQUdwQixXQUFVOzs7Ozs7MENBQ3JDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQ1gsR0FFQSxPQUZFcUIsV0FDRixDQUFDTixLQUFLdEIsSUFBSSxDQUFDNkIsSUFBSSxHQUFJLFFBQU8sSUFBRyxDQUFDLEVBQUdDLE9BQU8sQ0FBQyxLQUN6QztrREFDRiw4REFBQ0M7d0NBQ0NDLFNBQVMsSUFDUDdDLFNBQVMsQ0FBQzhDLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxLQUFLYjtrREFFakQ7Ozs7Ozs7Ozs7Ozs7dUJBWEVBOzs7O2dDQWlCVDs7Ozs7OzBCQUVOLDhEQUFDM0QsMERBQVFBOzBCQUFDOzs7Ozs7Ozs7Ozs7QUFHaEI7R0ExRmdCTzs7UUFDQ0osa0RBQVNBO1FBZXBCRCwwRUFBaUJBOzs7S0FoQlBLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9wb3N0LXRocmVhZC1mb3JtL3VpL3Bvc3QtdGhyZWFkLWZvcm0udHN4P2YwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktYnV0dG9uXCI7XHJcbmltcG9ydCB7IFVpVGV4dEZpZWxkIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLXRleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgdXNlUG9zdFRocmVhZEZvcm0gfSBmcm9tIFwiLi4vbW9kZWwvdXNlLXBvc3QtdGhyZWFkLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBvc3RUaHJlYWQsIFBvc3RUaHJlYWRNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3RocmVhZHMvcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9zdE11dGF0aW9uIH0gZnJvbSBcIkAvZW50aXRpZXMvcG9zdC9xdWVyeVwiO1xyXG5pbXBvcnQgeyBVaVNwaW5uZXIgfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktc3Bpbm5lclwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RUaHJlYWRGb3JtKHsgaXNUaHJlYWQgfTogeyBpc1RocmVhZDogYm9vbGVhbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGVzayA9IHJvdXRlci5xdWVyeS50YWcgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHRocmVhZCA9IHJvdXRlci5xdWVyeS50aHJlYWQgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgY29udmVydFRvSFRNTCxcclxuICAgIGhhbmRsZURyYWdFbnRlcixcclxuICAgIGhhbmRsZURyb3AsXHJcbiAgICBoYW5kbGVEcmFnTGVhdmUsXHJcbiAgICBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UsXHJcbiAgICBkcmFnZ2luZyxcclxuICAgIGZpbGVzLFxyXG4gICAgc2V0RmlsZXMsXHJcbiAgICBmaWxlc1VybCxcclxuICB9ID0gdXNlUG9zdFRocmVhZEZvcm0oZGVzayk7XHJcblxyXG4gIGNvbnN0IHRocmVhZE11dGF0aW9uID0gaXNUaHJlYWRcclxuICAgID8gUG9zdFRocmVhZE11dGF0aW9uKGRlc2spXHJcbiAgICA6IFBvc3RNdXRhdGlvbihkZXNrLCB0aHJlYWQpO1xyXG5cclxuICBjb25zb2xlLmxvZyhmaWxlcyk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IFBvc3RUaHJlYWQpID0+IHtcclxuICAgIGNvbnN0IGJiY29kZSA9IGRhdGEuY29udGVudDtcclxuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gY29udmVydFRvSFRNTChiYmNvZGUpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgaHRtbENvbnRlbnQpO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGZpbGU6XCIsIGZpbGUubmFtZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBpY3R1cmVzW11cIiwgZmlsZSk7XHJcbiAgICB9XHJcbiAgICB0aHJlYWRNdXRhdGlvbi5tdXRhdGUoZm9ybURhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgIDxVaVRleHRGaWVsZFxyXG4gICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCa0L7QvNC80LXQvdGC0LDRgNC40LkuINCc0LDQutGBLiDQtNC70LjQvdCwIDE1MDBcIixcclxuICAgICAgICAgIC4uLnJlZ2lzdGVyKFwiY29udGVudFwiKSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgXCJoLTE0IGJvcmRlci00IGJvcmRlci1kb3R0ZWQgbWItMiBib3JkZXItZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIixcclxuICAgICAgICAgIGRyYWdnaW5nICYmIFwiYm9yZGVyLXJlZC01MDBcIlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XHJcbiAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTMwMFwiPtCU0J7QkdCQ0JLQmNCi0Kwg0KTQkNCZ0Js8L3NwYW4+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbWItMlwiPlxyXG4gICAgICAgIHtmaWxlc1VybC5sZW5ndGhcclxuICAgICAgICAgID8gZmlsZXNVcmwubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgaC1bMTAwcHhdIHctWzEwMHB4XSBpbmxpbmUtYmxvY2sgcmVsYXRpdmUgbXItMlwiXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwibWF4LXctWzk5cHhdIG1heC1oLVsxMDBweF1cIj48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctb3BhY2l0eS00NSBiZy1ncmF5LTMwMCBmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTEgYWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmZpbGUuc2l6ZSAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSlcclxuICAgICAgICAgICAgICAgICAgKX3QnNCRYH1cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlcygocHJldikgPT4gcHJldi5maWx0ZXIoKF8sIGkpID0+IGkgIT0gaW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINClXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IFwiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVpQnV0dG9uPtCe0YLQv9GA0LDQstC40YLRjDwvVWlCdXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVWlCdXR0b24iLCJVaVRleHRGaWVsZCIsInVzZVBvc3RUaHJlYWRGb3JtIiwidXNlUm91dGVyIiwiUG9zdFRocmVhZE11dGF0aW9uIiwiUG9zdE11dGF0aW9uIiwiY2xzeCIsIlBvc3RUaHJlYWRGb3JtIiwiaXNUaHJlYWQiLCJyb3V0ZXIiLCJkZXNrIiwicXVlcnkiLCJ0YWciLCJ0aHJlYWQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnZlcnRUb0hUTUwiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcm9wIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRmlsZUlucHV0Q2hhbmdlIiwiZHJhZ2dpbmciLCJmaWxlcyIsInNldEZpbGVzIiwiZmlsZXNVcmwiLCJ0aHJlYWRNdXRhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiLCJiYmNvZGUiLCJjb250ZW50IiwiaHRtbENvbnRlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmlsZSIsIm5hbWUiLCJtdXRhdGUiLCJmb3JtIiwiaW5wdXRQcm9wcyIsInBsYWNlaG9sZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25EcmFnRW50ZXIiLCJvbkRyYWdPdmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZyIsInNyYyIsInVybCIsImFsdCIsInBhcnNlRmxvYXQiLCJzaXplIiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2IiwiZmlsdGVyIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/ui/post-thread-form.tsx\n"));

/***/ })

});