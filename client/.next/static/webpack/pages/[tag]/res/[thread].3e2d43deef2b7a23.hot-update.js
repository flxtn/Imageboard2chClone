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

/***/ "./src/features/post-thread-form/model/use-post-thread-form.tsx":
/*!**********************************************************************!*\
  !*** ./src/features/post-thread-form/model/use-post-thread-form.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePostThreadForm: function() { return /* binding */ usePostThreadForm; }\n/* harmony export */ });\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction usePostThreadForm(desk) {\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const filesUrl = files.map((file)=>({\n            file: file,\n            url: URL.createObjectURL(file) // Создаем URL для каждого файла\n        }));\n    const convertToHTML = (bbcode)=>{\n        bbcode = bbcode.replace(/\\[b\\](.*?)\\[\\/b\\]/g, \"<strong>$1</strong>\");\n        bbcode = bbcode.replace(/\\[i\\](.*?)\\[\\/i\\]/g, \"<em>$1</em>\");\n        bbcode = bbcode.replace(/\\[u\\](.*?)\\[\\/u\\]/g, \"<u>$1</u>\");\n        bbcode = bbcode.replace(/\\[s\\](.*?)\\[\\/s\\]/g, \"<strike>$1</strike>\");\n        return bbcode;\n    };\n    const handleDragEnter = (e)=>{\n        e.preventDefault();\n        setDragging(true);\n    };\n    const handleDrop = (e)=>{\n        e.preventDefault();\n        setDragging(false);\n        const fileList = Array.from(e.dataTransfer.files);\n        setFiles((prev)=>[\n                ...prev,\n                ...fileList\n            ]);\n    };\n    const handleDragLeave = ()=>{\n        setDragging(false);\n    };\n    const handleFileInputChange = (e)=>{\n        const file = e.target.files;\n        console.log(file);\n        if (file) {\n            const fileList = Array.from(file);\n            setFiles((prev)=>[\n                    ...prev,\n                    ...fileList\n                ]);\n        }\n    };\n    return {\n        register,\n        handleSubmit,\n        convertToHTML,\n        handleDragEnter,\n        handleDrop,\n        handleDragLeave,\n        handleFileInputChange,\n        dragging,\n        files,\n        setFiles,\n        filesUrl\n    };\n}\n_s(usePostThreadForm, \"591Ox3FkI8x2bubZcldSSX/SY8w=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcG9zdC10aHJlYWQtZm9ybS9tb2RlbC91c2UtcG9zdC10aHJlYWQtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUM7QUFFUjtBQUcxQixTQUFTRSxrQkFBa0JDLElBQVc7O0lBQ3pDLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxZQUFZLEVBQUMsR0FBR0wsd0RBQU9BO0lBQ3hDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNUyxXQUFZRixNQUFNRyxHQUFHLENBQUNDLENBQUFBLE9BQVM7WUFDbkNBLE1BQU1BO1lBQ05DLEtBQUtDLElBQUlDLGVBQWUsQ0FBQ0gsTUFBTSxnQ0FBZ0M7UUFDakU7SUFFQSxNQUFNSSxnQkFBZ0IsQ0FBQ0M7UUFDbkJBLFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxzQkFBc0I7UUFDOUNELFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxzQkFBc0I7UUFDOUNELFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxzQkFBc0I7UUFDOUNELFNBQVNBLE9BQU9DLE9BQU8sQ0FBQyxzQkFBc0I7UUFFOUMsT0FBT0Q7SUFDVDtJQUVBLE1BQU1FLGtCQUFrQixDQUFDQztRQUN2QkEsRUFBRUMsY0FBYztRQUNoQmQsWUFBWTtJQUNkO0lBRUEsTUFBTWUsYUFBYSxDQUFDRjtRQUNsQkEsRUFBRUMsY0FBYztRQUNoQmQsWUFBWTtRQUNaLE1BQU1nQixXQUFXQyxNQUFNQyxJQUFJLENBQUNMLEVBQUVNLFlBQVksQ0FBQ2xCLEtBQUs7UUFDaERDLFNBQVNrQixDQUFBQSxPQUFRO21CQUFJQTttQkFBU0o7YUFBUztJQUN6QztJQUVBLE1BQU1LLGtCQUFrQjtRQUN0QnJCLFlBQVk7SUFDZDtJQUVELE1BQU1zQix3QkFBd0IsQ0FBQ1Q7UUFDNUIsTUFBTVIsT0FBT1EsRUFBRVUsTUFBTSxDQUFDdEIsS0FBSztRQUMzQnVCLFFBQVFDLEdBQUcsQ0FBQ3BCO1FBQ1osSUFBSUEsTUFBTTtZQUNSLE1BQU1XLFdBQW1CQyxNQUFNQyxJQUFJLENBQUNiO1lBQ3BDSCxTQUFTa0IsQ0FBQUEsT0FBUTt1QkFBSUE7dUJBQVNKO2lCQUFTO1FBQ3pDO0lBRUY7SUFLQSxPQUFPO1FBQ0xuQjtRQUNBQztRQUNBVztRQUNBRztRQUNBRztRQUNBTTtRQUNBQztRQUNBdkI7UUFDQUU7UUFDQUM7UUFDQUM7SUFFRjtBQUVOO0dBOURnQlI7O1FBQ3FCRixvREFBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL3Bvc3QtdGhyZWFkLWZvcm0vbW9kZWwvdXNlLXBvc3QtdGhyZWFkLWZvcm0udHN4PzZlZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcclxuaW1wb3J0IHsgUG9zdFRocmVhZCwgUG9zdFRocmVhZE11dGF0aW9uIH0gZnJvbSBcIkAvZW50aXRpZXMvdGhyZWFkcy9xdWVyeVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0VGhyZWFkRm9ybShkZXNrOnN0cmluZyl7XHJcbiAgICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtPFBvc3RUaHJlYWQ+KClcclxuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZTxGaWxlW10+KFtdKTtcclxuICAgIGNvbnN0IGZpbGVzVXJsID0gIGZpbGVzLm1hcChmaWxlID0+ICh7XHJcbiAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSAvLyDQodC+0LfQtNCw0LXQvCBVUkwg0LTQu9GPINC60LDQttC00L7Qs9C+INGE0LDQudC70LBcclxuICAgIH0pKVxyXG5cclxuICAgIGNvbnN0IGNvbnZlcnRUb0hUTUwgPSAoYmJjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbYlxcXSguKj8pXFxbXFwvYlxcXS9nLCAnPHN0cm9uZz4kMTwvc3Ryb25nPicpO1xyXG4gICAgICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFtpXFxdKC4qPylcXFtcXC9pXFxdL2csICc8ZW0+JDE8L2VtPicpO1xyXG4gICAgICAgIGJiY29kZSA9IGJiY29kZS5yZXBsYWNlKC9cXFt1XFxdKC4qPylcXFtcXC91XFxdL2csICc8dT4kMTwvdT4nKTtcclxuICAgICAgICBiYmNvZGUgPSBiYmNvZGUucmVwbGFjZSgvXFxbc1xcXSguKj8pXFxbXFwvc1xcXS9nLCAnPHN0cmlrZT4kMTwvc3RyaWtlPicpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmJjb2RlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGU6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlRHJvcCA9IChlOiBSZWFjdC5EcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBmaWxlTGlzdCA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgIHNldEZpbGVzKHByZXYgPT4gWy4uLnByZXYsIC4uLmZpbGVMaXN0XSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgIGNvbnN0IGhhbmRsZUZpbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKVxyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlTGlzdDogRmlsZVtdID0gQXJyYXkuZnJvbShmaWxlKTtcclxuICAgICAgICAgIHNldEZpbGVzKHByZXYgPT4gWy4uLnByZXYsIC4uLmZpbGVMaXN0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXIsIFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBjb252ZXJ0VG9IVE1MLFxyXG4gICAgICAgIGhhbmRsZURyYWdFbnRlcixcclxuICAgICAgICBoYW5kbGVEcm9wLFxyXG4gICAgICAgIGhhbmRsZURyYWdMZWF2ZSxcclxuICAgICAgICBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgZHJhZ2dpbmcsXHJcbiAgICAgICAgZmlsZXMsXHJcbiAgICAgICAgc2V0RmlsZXMsXHJcbiAgICAgICAgZmlsZXNVcmwsXHJcblxyXG4gICAgICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwidXNlU3RhdGUiLCJ1c2VQb3N0VGhyZWFkRm9ybSIsImRlc2siLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJmaWxlcyIsInNldEZpbGVzIiwiZmlsZXNVcmwiLCJtYXAiLCJmaWxlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29udmVydFRvSFRNTCIsImJiY29kZSIsInJlcGxhY2UiLCJoYW5kbGVEcmFnRW50ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcm9wIiwiZmlsZUxpc3QiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJwcmV2IiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRmlsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/post-thread-form/model/use-post-thread-form.tsx\n"));

/***/ })

});