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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePostThreadForm: function() { return /* binding */ usePostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction usePostThreadForm(desk) {\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const filesWithUrl = files.length ? files.map((file)=>({\n            file: file,\n            url: URL.createObjectURL(file) // Создаем URL для каждого файла\n        })) : \"\";\n    const convertToHTML = (bbcode)=>{\n        bbcode = bbcode.replace(/\\[b\\](.*?)\\[\\/b\\]/g, \"<strong>$1</strong>\");\n        bbcode = bbcode.replace(/\\[i\\](.*?)\\[\\/i\\]/g, \"<em>$1</em>\");\n        bbcode = bbcode.replace(/\\[u\\](.*?)\\[\\/u\\]/g, \"<u>$1</u>\");\n        bbcode = bbcode.replace(/\\[s\\](.*?)\\[\\/s\\]/g, \"<strike>$1</strike>\");\n        return bbcode;\n    };\n    const handleDragEnter = (e)=>{\n        e.preventDefault();\n        setDragging(true);\n    };\n    const handleDrop = (e)=>{\n        e.preventDefault();\n        setDragging(false);\n        const fileList = Array.from(e.dataTransfer.files);\n        setFiles((prev)=>[\n                ...prev,\n                ...fileList\n            ]);\n    };\n    const handleDragLeave = ()=>{\n        setDragging(false);\n    };\n    const handleFileInputChange = (e)=>{\n        const file = e.target.files;\n        console.log(file);\n        if (file) {\n            const fileList = Array.from(file);\n            setFiles((prev)=>[\n                    ...prev,\n                    ...fileList\n                ]);\n        }\n    };\n    return {\n        register,\n        handleSubmit,\n        convertToHTML,\n        handleDragEnter,\n        handleDrop,\n        handleDragLeave,\n        handleFileInputChange,\n        dragging,\n        files,\n        setFiles,\n        filesUrl\n    };\n}\n_s(usePostThreadForm, \"591Ox3FkI8x2bubZcldSSX/SY8w=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS9tb2RlbC91c2UtcG9zdC10aHJlYWQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUM7QUFFUjtBQUcxQixTQUFTRSxrQkFBa0JDLElBQVc7O0lBQ3pDLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxZQUFZLEVBQUMsR0FBR0wsd0RBQU9BO0lBQ3hDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNUyxlQUFlRixNQUFNRyxNQUFNLEdBQUdILE1BQU1JLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztZQUNyREEsTUFBTUE7WUFDTkMsS0FBS0MsSUFBSUMsZUFBZSxDQUFDSCxNQUFNLGdDQUFnQztRQUNqRSxNQUFLO0lBRUwsTUFBTUksZ0JBQWdCLENBQUNDO1FBQ25CQSxTQUFTQSxPQUFPQyxPQUFPLENBQUMsc0JBQXNCO1FBQzlDRCxTQUFTQSxPQUFPQyxPQUFPLENBQUMsc0JBQXNCO1FBQzlDRCxTQUFTQSxPQUFPQyxPQUFPLENBQUMsc0JBQXNCO1FBQzlDRCxTQUFTQSxPQUFPQyxPQUFPLENBQUMsc0JBQXNCO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNRSxrQkFBa0IsQ0FBQ0M7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJmLFlBQVk7SUFDZDtJQUVBLE1BQU1nQixhQUFhLENBQUNGO1FBQ2xCQSxFQUFFQyxjQUFjO1FBQ2hCZixZQUFZO1FBQ1osTUFBTWlCLFdBQVdDLE1BQU1DLElBQUksQ0FBQ0wsRUFBRU0sWUFBWSxDQUFDbkIsS0FBSztRQUNoREMsU0FBU21CLENBQUFBLE9BQVE7bUJBQUlBO21CQUFTSjthQUFTO0lBQ3pDO0lBRUEsTUFBTUssa0JBQWtCO1FBQ3RCdEIsWUFBWTtJQUNkO0lBRUQsTUFBTXVCLHdCQUF3QixDQUFDVDtRQUM1QixNQUFNUixPQUFPUSxFQUFFVSxNQUFNLENBQUN2QixLQUFLO1FBQzNCd0IsUUFBUUMsR0FBRyxDQUFDcEI7UUFDWixJQUFJQSxNQUFNO1lBQ1IsTUFBTVcsV0FBbUJDLE1BQU1DLElBQUksQ0FBQ2I7WUFDcENKLFNBQVNtQixDQUFBQSxPQUFRO3VCQUFJQTt1QkFBU0o7aUJBQVM7UUFDekM7SUFFRjtJQUtBLE9BQU87UUFDTHBCO1FBQ0FDO1FBQ0FZO1FBQ0FHO1FBQ0FHO1FBQ0FNO1FBQ0FDO1FBQ0F4QjtRQUNBRTtRQUNBQztRQUNBeUI7SUFFRjtBQUVOO0dBOURnQmhDOztRQUNxQkYsb0RBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9wb3N0LXRocmVhZC1mb3JtL21vZGVsL3VzZS1wb3N0LXRocmVhZC1mb3JtLnRzeD82ZWY5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiXHJcbmltcG9ydCB7IFBvc3RUaHJlYWQsIFBvc3RUaHJlYWRNdXRhdGlvbiB9IGZyb20gXCJAL2VudGl0aWVzL3RocmVhZHMvcXVlcnlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlUG9zdFRocmVhZEZvcm0oZGVzazpzdHJpbmcpe1xyXG4gICAgY29uc3Qge3JlZ2lzdGVyLCBoYW5kbGVTdWJtaXR9ID0gdXNlRm9ybTxQb3N0VGhyZWFkPigpXHJcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGU8RmlsZVtdPihbXSk7XHJcbiAgICBjb25zdCBmaWxlc1dpdGhVcmwgPSBmaWxlcy5sZW5ndGggPyBmaWxlcy5tYXAoZmlsZSA9PiAoe1xyXG4gICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgLy8g0KHQvtC30LTQsNC10LwgVVJMINC00LvRjyDQutCw0LbQtNC+0LPQviDRhNCw0LnQu9CwXHJcbiAgICB9KSk6ICcnXHJcblxyXG4gICAgY29uc3QgY29udmVydFRvSFRNTCA9IChiYmNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFtiXFxdKC4qPylcXFtcXC9iXFxdL2csICc8c3Ryb25nPiQxPC9zdHJvbmc+Jyk7XHJcbiAgICAgICAgYmJjb2RlID0gYmJjb2RlLnJlcGxhY2UoL1xcW2lcXF0oLio/KVxcW1xcL2lcXF0vZywgJzxlbT4kMTwvZW0+Jyk7XHJcbiAgICAgICAgYmJjb2RlID0gYmJjb2RlLnJlcGxhY2UoL1xcW3VcXF0oLio/KVxcW1xcL3VcXF0vZywgJzx1PiQxPC91PicpO1xyXG4gICAgICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFtzXFxdKC4qPylcXFtcXC9zXFxdL2csICc8c3RyaWtlPiQxPC9zdHJpa2U+Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYmNvZGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZTogUmVhY3QuRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVEcm9wID0gKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0ID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgc2V0RmlsZXMocHJldiA9PiBbLi4ucHJldiwgLi4uZmlsZUxpc3RdKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgY29uc3QgaGFuZGxlRmlsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpXHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVMaXN0OiBGaWxlW10gPSBBcnJheS5mcm9tKGZpbGUpO1xyXG4gICAgICAgICAgc2V0RmlsZXMocHJldiA9PiBbLi4ucHJldiwgLi4uZmlsZUxpc3RdKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlciwgXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIGNvbnZlcnRUb0hUTUwsXHJcbiAgICAgICAgaGFuZGxlRHJhZ0VudGVyLFxyXG4gICAgICAgIGhhbmRsZURyb3AsXHJcbiAgICAgICAgaGFuZGxlRHJhZ0xlYXZlLFxyXG4gICAgICAgIGhhbmRsZUZpbGVJbnB1dENoYW5nZSxcclxuICAgICAgICBkcmFnZ2luZyxcclxuICAgICAgICBmaWxlcyxcclxuICAgICAgICBzZXRGaWxlcyxcclxuICAgICAgICBmaWxlc1VybCxcclxuXHJcbiAgICAgIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJ1c2VTdGF0ZSIsInVzZVBvc3RUaHJlYWRGb3JtIiwiZGVzayIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImZpbGVzIiwic2V0RmlsZXMiLCJmaWxlc1dpdGhVcmwiLCJsZW5ndGgiLCJtYXAiLCJmaWxlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29udmVydFRvSFRNTCIsImJiY29kZSIsInJlcGxhY2UiLCJoYW5kbGVEcmFnRW50ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcm9wIiwiZmlsZUxpc3QiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJwcmV2IiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRmlsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImZpbGVzVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/model/use-post-thread-form.tsx\n"));

/***/ })

});