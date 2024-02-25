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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostThreadForm: function() { return /* binding */ PostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/ui-button */ \"./src/shared/ui/ui-button.tsx\");\n/* harmony import */ var _shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/ui-text-field */ \"./src/shared/ui/ui-text-field.tsx\");\n/* harmony import */ var _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/use-post-thread-form */ \"./src/features/post-thread-form/model/use-post-thread-form.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _entities_post_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/post/query */ \"./src/entities/post/query.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostThreadForm(param) {\n    let { isThread } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const { register, handleSubmit, convertToHTML, handleDragEnter, handleDrop, handleDragLeave, handleFileInputChange, dragging, files, setFiles, filesUrl } = (0,_model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm)(desk);\n    const threadMutation = isThread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_5__.PostThreadMutation)(desk) : (0,_entities_post_query__WEBPACK_IMPORTED_MODULE_6__.PostMutation)(desk, thread);\n    console.log(files);\n    const onSubmit = (data)=>{\n        const bbcode = data.content;\n        const htmlContent = convertToHTML(bbcode);\n        const formData = new FormData();\n        formData.append(\"content\", htmlContent);\n        for (const file of files){\n            console.log(\"Adding file:\", file.name);\n            formData.append(\"pictures[]\", file);\n        }\n        threadMutation.mutate(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_text_field__WEBPACK_IMPORTED_MODULE_2__.UiTextField, {\n                inputProps: {\n                    placeholder: \"Комментарий. Макс. длина 1500\",\n                    ...register(\"content\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"h-14 border-4 border-dotted mb-2 border-gray-300 flex items-center justify-center relative\", dragging && \"border-red-500\"),\n                onDragEnter: handleDragEnter,\n                onDragOver: (e)=>e.preventDefault(),\n                onDragLeave: handleDragLeave,\n                onDrop: handleDrop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl text-gray-300\",\n                        children: \"ДОБАВИТЬ ФАЙЛ\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"image/*\",\n                        multiple: true,\n                        className: \"absolute inset-0 opacity-0\",\n                        onChange: handleFileInputChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mb-2\",\n                children: filesUrl.length ? filesUrl.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-solid mr-2 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[100px] w-[100px] inline-block\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.url,\n                                    alt: \"\",\n                                    className: \"max-w-[100px] max-h-[100px]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-opacity-45 bg-gray-300 flex w-[100px] h-[25px] justify-between items-center px-1 absolute left-0 bottom-0\",\n                                    children: [\n                                        \"\".concat(parseFloat((item.file.size / (1024 * 1024)).toFixed(1)), \"МБ\"),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setFiles((prev)=>prev.filter((_, i)=>i != index)),\n                                            children: \"Х\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, this)) : \" \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_button__WEBPACK_IMPORTED_MODULE_1__.UiButton, {\n                children: \"Отправить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\ui\\\\post-thread-form.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(PostThreadForm, \"mH6hXJgJOa4j+uhRur4hdYwwL7g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _model_use_post_thread_form__WEBPACK_IMPORTED_MODULE_3__.usePostThreadForm\n    ];\n});\n_c = PostThreadForm;\nvar _c;\n$RefreshReg$(_c, \"PostThreadForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTztBQUNVO0FBQzFCO0FBQ2tDO0FBQ3JCO0FBQzdCO0FBRWpCLFNBQVNPLGVBQWUsS0FBbUM7UUFBbkMsRUFBRUMsUUFBUSxFQUF5QixHQUFuQzs7SUFDN0IsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsR0FBRztJQUM3QixNQUFNQyxTQUFTSixPQUFPRSxLQUFLLENBQUNFLE1BQU07SUFDbEMsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsYUFBYSxFQUNiQyxlQUFlLEVBQ2ZDLFVBQVUsRUFDVkMsZUFBZSxFQUNmQyxxQkFBcUIsRUFDckJDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFFBQVEsRUFDVCxHQUFHdEIsOEVBQWlCQSxDQUFDUTtJQUV0QixNQUFNZSxpQkFBaUJqQixXQUNuQkosMkVBQWtCQSxDQUFDTSxRQUNuQkwsa0VBQVlBLENBQUNLLE1BQU1HO0lBRXZCYSxRQUFRQyxHQUFHLENBQUNMO0lBRVosTUFBTU0sV0FBVyxDQUFDQztRQUNoQixNQUFNQyxTQUFTRCxLQUFLRSxPQUFPO1FBQzNCLE1BQU1DLGNBQWNoQixjQUFjYztRQUNsQyxNQUFNRyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsV0FBV0g7UUFDM0IsS0FBSyxNQUFNSSxRQUFRZCxNQUFPO1lBQ3hCSSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCUyxLQUFLQyxJQUFJO1lBQ3JDSixTQUFTRSxNQUFNLENBQUMsY0FBY0M7UUFDaEM7UUFDQVgsZUFBZWEsTUFBTSxDQUFDTDtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFLWCxVQUFVYixhQUFhYTs7MEJBQzNCLDhEQUFDM0IsaUVBQVdBO2dCQUNWdUMsWUFBWTtvQkFDVkMsYUFBYTtvQkFDYixHQUFHM0IsU0FBUyxVQUFVO2dCQUN4Qjs7Ozs7OzBCQUVGLDhEQUFDNEI7Z0JBQ0NDLFdBQVdyQyxnREFBSUEsQ0FDYiw4RkFDQWUsWUFBWTtnQkFFZHVCLGFBQWEzQjtnQkFDYjRCLFlBQVksQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNDLGFBQWE3QjtnQkFDYjhCLFFBQVEvQjs7a0NBRVIsOERBQUNnQzt3QkFBS1AsV0FBVTtrQ0FBeUI7Ozs7OztrQ0FDekMsOERBQUNRO3dCQUNDQyxNQUFLO3dCQUNMQyxRQUFPO3dCQUNQQyxRQUFRO3dCQUNSWCxXQUFVO3dCQUNWWSxVQUFVbkM7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNabkIsU0FBU2dDLE1BQU0sR0FDWmhDLFNBQVNpQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDakI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2lCO29DQUNDQyxLQUFLSCxLQUFLSSxHQUFHO29DQUNiQyxLQUFJO29DQUNKcEIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDRDtvQ0FBSUMsV0FBVTs7d0NBQ1gsR0FFQSxPQUZFcUIsV0FDRixDQUFDTixLQUFLdEIsSUFBSSxDQUFDNkIsSUFBSSxHQUFJLFFBQU8sSUFBRyxDQUFDLEVBQUdDLE9BQU8sQ0FBQyxLQUN6QztzREFDRiw4REFBQ0M7NENBQ0NDLFNBQVMsSUFDUDdDLFNBQVMsQ0FBQzhDLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxLQUFLYjtzREFFakQ7Ozs7Ozs7Ozs7Ozs7MkJBZGtEQTs7Ozs7Ozs7O2dDQXFCM0Q7Ozs7OzswQkFFTiw4REFBQzNELDBEQUFRQTswQkFBQzs7Ozs7Ozs7Ozs7O0FBR2hCO0dBN0ZnQk87O1FBQ0NKLGtEQUFTQTtRQWVwQkQsMEVBQWlCQTs7O0tBaEJQSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS91aS9wb3N0LXRocmVhZC1mb3JtLnRzeD9mMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyBVaVRleHRGaWVsZCB9IGZyb20gXCJAL3NoYXJlZC91aS91aS10ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IHVzZVBvc3RUaHJlYWRGb3JtIH0gZnJvbSBcIi4uL21vZGVsL3VzZS1wb3N0LXRocmVhZC1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQb3N0VGhyZWFkLCBQb3N0VGhyZWFkTXV0YXRpb24gfSBmcm9tIFwiQC9lbnRpdGllcy90aHJlYWRzL3F1ZXJ5XCI7XHJcbmltcG9ydCB7IFBvc3RNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3Bvc3QvcXVlcnlcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3N0VGhyZWFkRm9ybSh7IGlzVGhyZWFkIH06IHsgaXNUaHJlYWQ6IGJvb2xlYW4gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRlc2sgPSByb3V0ZXIucXVlcnkudGFnIGFzIHN0cmluZztcclxuICBjb25zdCB0aHJlYWQgPSByb3V0ZXIucXVlcnkudGhyZWFkIGFzIHN0cmluZztcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGNvbnZlcnRUb0hUTUwsXHJcbiAgICBoYW5kbGVEcmFnRW50ZXIsXHJcbiAgICBoYW5kbGVEcm9wLFxyXG4gICAgaGFuZGxlRHJhZ0xlYXZlLFxyXG4gICAgaGFuZGxlRmlsZUlucHV0Q2hhbmdlLFxyXG4gICAgZHJhZ2dpbmcsXHJcbiAgICBmaWxlcyxcclxuICAgIHNldEZpbGVzLFxyXG4gICAgZmlsZXNVcmwsXHJcbiAgfSA9IHVzZVBvc3RUaHJlYWRGb3JtKGRlc2spO1xyXG5cclxuICBjb25zdCB0aHJlYWRNdXRhdGlvbiA9IGlzVGhyZWFkXHJcbiAgICA/IFBvc3RUaHJlYWRNdXRhdGlvbihkZXNrKVxyXG4gICAgOiBQb3N0TXV0YXRpb24oZGVzaywgdGhyZWFkKTtcclxuXHJcbiAgY29uc29sZS5sb2coZmlsZXMpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBQb3N0VGhyZWFkKSA9PiB7XHJcbiAgICBjb25zdCBiYmNvZGUgPSBkYXRhLmNvbnRlbnQ7XHJcbiAgICBjb25zdCBodG1sQ29udGVudCA9IGNvbnZlcnRUb0hUTUwoYmJjb2RlKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIGh0bWxDb250ZW50KTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBmaWxlOlwiLCBmaWxlLm5hbWUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaWN0dXJlc1tdXCIsIGZpbGUpO1xyXG4gICAgfVxyXG4gICAgdGhyZWFkTXV0YXRpb24ubXV0YXRlKGZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICA8VWlUZXh0RmllbGRcclxuICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCLQmtC+0LzQvNC10L3RgtCw0YDQuNC5LiDQnNCw0LrRgS4g0LTQu9C40L3QsCAxNTAwXCIsXHJcbiAgICAgICAgICAuLi5yZWdpc3RlcihcImNvbnRlbnRcIiksXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIFwiaC0xNCBib3JkZXItNCBib3JkZXItZG90dGVkIG1iLTIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCIsXHJcbiAgICAgICAgICBkcmFnZ2luZyAmJiBcImJvcmRlci1yZWQtNTAwXCJcclxuICAgICAgICApfVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxyXG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS0zMDBcIj7QlNCe0JHQkNCS0JjQotCsINCk0JDQmdCbPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG1iLTJcIj5cclxuICAgICAgICB7ZmlsZXNVcmwubGVuZ3RoXHJcbiAgICAgICAgICA/IGZpbGVzVXJsLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29saWQgbXItMiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDBweF0gdy1bMTAwcHhdIGlubGluZS1ibG9ja1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVsxMDBweF0gbWF4LWgtWzEwMHB4XVwiXHJcbiAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1vcGFjaXR5LTQ1IGJnLWdyYXktMzAwIGZsZXggdy1bMTAwcHhdIGgtWzI1cHhdIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtMSBhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmZpbGUuc2l6ZSAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSlcclxuICAgICAgICAgICAgICAgICAgICApfdCc0JFgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoXywgaSkgPT4gaSAhPSBpbmRleCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0KVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogXCIgXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VWlCdXR0b24+0J7RgtC/0YDQsNCy0LjRgtGMPC9VaUJ1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVaUJ1dHRvbiIsIlVpVGV4dEZpZWxkIiwidXNlUG9zdFRocmVhZEZvcm0iLCJ1c2VSb3V0ZXIiLCJQb3N0VGhyZWFkTXV0YXRpb24iLCJQb3N0TXV0YXRpb24iLCJjbHN4IiwiUG9zdFRocmVhZEZvcm0iLCJpc1RocmVhZCIsInJvdXRlciIsImRlc2siLCJxdWVyeSIsInRhZyIsInRocmVhZCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY29udmVydFRvSFRNTCIsImhhbmRsZURyYWdFbnRlciIsImhhbmRsZURyb3AiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UiLCJkcmFnZ2luZyIsImZpbGVzIiwic2V0RmlsZXMiLCJmaWxlc1VybCIsInRocmVhZE11dGF0aW9uIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZGF0YSIsImJiY29kZSIsImNvbnRlbnQiLCJodG1sQ29udGVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwibmFtZSIsIm11dGF0ZSIsImZvcm0iLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ092ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJtdWx0aXBsZSIsIm9uQ2hhbmdlIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1nIiwic3JjIiwidXJsIiwiYWx0IiwicGFyc2VGbG9hdCIsInNpemUiLCJ0b0ZpeGVkIiwiYnV0dG9uIiwib25DbGljayIsInByZXYiLCJmaWx0ZXIiLCJfIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/ui/post-thread-form.tsx\n"));

/***/ })

});