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

/***/ "./src/features/post-thread-form/model/use-post-thread-form.tsx":
/*!**********************************************************************!*\
  !*** ./src/features/post-thread-form/model/use-post-thread-form.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePostThreadForm: function() { return /* binding */ usePostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction usePostThreadForm(desk) {\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const filesUrl = files.map((file)=>({\n            file: file,\n            url: URL.createObjectURL(file) // Создаем URL для каждого файла\n        }));\n    const convertToHTML = (bbcode)=>{\n        bbcode = bbcode.replace(/\\[b\\](.*?)\\[\\/b\\]/g, \"\".concat(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\model\\\\use-post-thread-form.tsx\",\n            lineNumber: 17,\n            columnNumber: 58\n        }, this)));\n        bbcode = bbcode.replace(/\\[i\\](.*?)\\[\\/i\\]/g, \"\".concat(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\model\\\\use-post-thread-form.tsx\",\n            lineNumber: 18,\n            columnNumber: 58\n        }, this)));\n        bbcode = bbcode.replace(/\\[u\\](.*?)\\[\\/u\\]/g, \"\".concat(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n            children: \"$1\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\features\\\\post-thread-form\\\\model\\\\use-post-thread-form.tsx\",\n            lineNumber: 19,\n            columnNumber: 58\n        }, this)));\n        bbcode = bbcode.replace(/\\[s\\](.*?)\\[\\/s\\]/g, \"<strike>$1</strike>\");\n        return bbcode;\n    };\n    const handleDragEnter = (e)=>{\n        e.preventDefault();\n        setDragging(true);\n    };\n    const handleDrop = (e)=>{\n        e.preventDefault();\n        setDragging(false);\n        const fileList = Array.from(e.dataTransfer.files);\n        setFiles((prev)=>[\n                ...prev,\n                ...fileList\n            ]);\n    };\n    const handleDragLeave = ()=>{\n        setDragging(false);\n    };\n    const handleFileInputChange = (e)=>{\n        const file = e.target.files;\n        console.log(file);\n        if (file) {\n            const fileList = Array.from(file);\n            setFiles((prev)=>[\n                    ...prev,\n                    ...fileList\n                ]);\n        }\n    };\n    return {\n        register,\n        handleSubmit,\n        convertToHTML,\n        handleDragEnter,\n        handleDrop,\n        handleDragLeave,\n        handleFileInputChange,\n        dragging,\n        files,\n        setFiles,\n        filesUrl\n    };\n}\n_s(usePostThreadForm, \"591Ox3FkI8x2bubZcldSSX/SY8w=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS9tb2RlbC91c2UtcG9zdC10aHJlYWQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUVSO0FBRzFCLFNBQVNFLGtCQUFrQkMsSUFBVzs7SUFDekMsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFlBQVksRUFBQyxHQUFHTCx3REFBT0E7SUFDeEMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU1TLFdBQVlGLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztZQUNuQ0EsTUFBTUE7WUFDTkMsS0FBS0MsSUFBSUMsZUFBZSxDQUFDSCxNQUFNLGdDQUFnQztRQUNqRTtJQUVBLE1BQU1JLGdCQUFnQixDQUFDQztRQUNuQkEsU0FBU0EsT0FBT0MsT0FBTyxDQUFDLHNCQUFzQixHQUFxQixxQkFBbEIsOERBQUNDOzs7OztRQUNsREYsU0FBU0EsT0FBT0MsT0FBTyxDQUFDLHNCQUFzQixHQUFhLHFCQUFWLDhEQUFDRTs7Ozs7UUFDbERILFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxzQkFBc0IsR0FBYSxxQkFBViw4REFBQ0c7c0JBQUU7Ozs7OztRQUNwREosU0FBU0EsT0FBT0MsT0FBTyxDQUFDLHNCQUFzQjtRQUU5QyxPQUFPRDtJQUNUO0lBRUEsTUFBTUssa0JBQWtCLENBQUNDO1FBQ3ZCQSxFQUFFQyxjQUFjO1FBQ2hCakIsWUFBWTtJQUNkO0lBRUEsTUFBTWtCLGFBQWEsQ0FBQ0Y7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJqQixZQUFZO1FBQ1osTUFBTW1CLFdBQVdDLE1BQU1DLElBQUksQ0FBQ0wsRUFBRU0sWUFBWSxDQUFDckIsS0FBSztRQUNoREMsU0FBU3FCLENBQUFBLE9BQVE7bUJBQUlBO21CQUFTSjthQUFTO0lBQ3pDO0lBRUEsTUFBTUssa0JBQWtCO1FBQ3RCeEIsWUFBWTtJQUNkO0lBRUQsTUFBTXlCLHdCQUF3QixDQUFDVDtRQUM1QixNQUFNWCxPQUFPVyxFQUFFVSxNQUFNLENBQUN6QixLQUFLO1FBQzNCMEIsUUFBUUMsR0FBRyxDQUFDdkI7UUFDWixJQUFJQSxNQUFNO1lBQ1IsTUFBTWMsV0FBbUJDLE1BQU1DLElBQUksQ0FBQ2hCO1lBQ3BDSCxTQUFTcUIsQ0FBQUEsT0FBUTt1QkFBSUE7dUJBQVNKO2lCQUFTO1FBQ3pDO0lBRUY7SUFLQSxPQUFPO1FBQ0x0QjtRQUNBQztRQUNBVztRQUNBTTtRQUNBRztRQUNBTTtRQUNBQztRQUNBMUI7UUFDQUU7UUFDQUM7UUFDQUM7SUFFRjtBQUVOO0dBOURnQlI7O1FBQ3FCRixvREFBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3Bvc3QtdGhyZWFkLWZvcm0vbW9kZWwvdXNlLXBvc3QtdGhyZWFkLWZvcm0udHN4PzZlZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcclxuaW1wb3J0IHsgUG9zdFRocmVhZCwgUG9zdFRocmVhZE11dGF0aW9uIH0gZnJvbSBcIkAvZW50aXRpZXMvdGhyZWFkcy9xdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0VGhyZWFkRm9ybShkZXNrOnN0cmluZyl7XHJcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtPFBvc3RUaHJlYWQ+KClcclxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcclxuICAgIGNvbnN0IGZpbGVzVXJsID0gIGZpbGVzLm1hcChmaWxlID0+ICh7XHJcbiAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSAvLyDQodC+0LfQtNCw0LXQvCBVUkwg0LTQu9GPINC60LDQttC00L7Qs9C+INGE0LDQudC70LBcclxuICAgIH0pKVxyXG5cclxuICAgIGNvbnN0IGNvbnZlcnRUb0hUTUwgPSAoYmJjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbYlxcXSguKj8pXFxbXFwvYlxcXS9nLCBgJHs8c3Ryb25nPjwvc3Ryb25nPn1gKTtcclxuICAgICAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbaVxcXSguKj8pXFxbXFwvaVxcXS9nLCBgJHs8ZW0+PC9lbT59YCk7XHJcbiAgICAgICAgYmJjb2RlID0gYmJjb2RlLnJlcGxhY2UoL1xcW3VcXF0oLio/KVxcW1xcL3VcXF0vZywgYCR7PHU+JDE8L3U+fWApO1xyXG4gICAgICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFtzXFxdKC4qPylcXFtcXC9zXFxdL2csICc8c3RyaWtlPiQxPC9zdHJpa2U+Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYmNvZGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVEcm9wID0gKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0ID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgc2V0RmlsZXMocHJldiA9PiBbLi4ucHJldiwgLi4uZmlsZUxpc3RdKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgY29uc3QgaGFuZGxlRmlsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVMaXN0OiBGaWxlW10gPSBBcnJheS5mcm9tKGZpbGUpO1xyXG4gICAgICAgICAgc2V0RmlsZXMocHJldiA9PiBbLi4ucHJldiwgLi4uZmlsZUxpc3RdKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlciwgXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIGNvbnZlcnRUb0hUTUwsXHJcbiAgICAgICAgaGFuZGxlRHJhZ0VudGVyLFxyXG4gICAgICAgIGhhbmRsZURyb3AsXHJcbiAgICAgICAgaGFuZGxlRHJhZ0xlYXZlLFxyXG4gICAgICAgIGhhbmRsZUZpbGVJbnB1dENoYW5nZSxcclxuICAgICAgICBkcmFnZ2luZyxcclxuICAgICAgICBmaWxlcyxcclxuICAgICAgICBzZXRGaWxlcyxcclxuICAgICAgICBmaWxlc1VybCxcclxuXHJcbiAgICAgIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJ1c2VTdGF0ZSIsInVzZVBvc3RUaHJlYWRGb3JtIiwiZGVzayIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImZpbGVzIiwic2V0RmlsZXMiLCJmaWxlc1VybCIsIm1hcCIsImZpbGUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb252ZXJ0VG9IVE1MIiwiYmJjb2RlIiwicmVwbGFjZSIsInN0cm9uZyIsImVtIiwidSIsImhhbmRsZURyYWdFbnRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJmaWxlTGlzdCIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsInByZXYiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/model/use-post-thread-form.tsx\n"));

/***/ })

});