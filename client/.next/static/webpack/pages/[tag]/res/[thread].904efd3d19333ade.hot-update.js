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

/***/ "./src/pages/threadpage.tsx":
/*!**********************************!*\
  !*** ./src/pages/threadpage.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThreadPage: function() { return /* binding */ ThreadPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _entities_desks_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/desks/query */ \"./src/entities/desks/query.ts\");\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _features_aside_ui_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/aside/ui/navigation */ \"./src/features/aside/ui/navigation.tsx\");\n/* harmony import */ var _features_thread_ui_thread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/thread/ui/thread */ \"./src/features/thread/ui/thread.tsx\");\n/* harmony import */ var _shared_layouts_main_content_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/layouts/main-content-layout */ \"./src/shared/layouts/main-content-layout.tsx\");\n/* harmony import */ var _shared_ui_ui_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/ui-header */ \"./src/shared/ui/ui-header.tsx\");\n/* harmony import */ var _shared_ui_ui_header_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shared/ui/ui-header-block */ \"./src/shared/ui/ui-header-block.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shared_ui_ui_toggle_post_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/shared/ui/ui-toggle-post-form */ \"./src/shared/ui/ui-toggle-post-form.tsx\");\n/* harmony import */ var _shared_ui_ui_footer_block__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/shared/ui/ui-footer-block */ \"./src/shared/ui/ui-footer-block.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ThreadPage() {\n    var _currentDeskQuery_data_data, _currentDeskQuery_data, _currentThreadQuery_data_data, _currentThreadQuery_data, _threadItem_posts;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    const desk = router.query.tag;\n    const thread = router.query.thread;\n    const currentDeskQuery = desk ? (0,_entities_desks_query__WEBPACK_IMPORTED_MODULE_1__.getCurrentDeskQuery)(desk) : undefined;\n    const deskItem = (currentDeskQuery === null || currentDeskQuery === void 0 ? void 0 : (_currentDeskQuery_data = currentDeskQuery.data) === null || _currentDeskQuery_data === void 0 ? void 0 : (_currentDeskQuery_data_data = _currentDeskQuery_data.data) === null || _currentDeskQuery_data_data === void 0 ? void 0 : _currentDeskQuery_data_data.desk) || {};\n    const currentThreadQuery = thread ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_2__.getCurrentThread)(thread) : undefined;\n    const threadItem = (currentThreadQuery === null || currentThreadQuery === void 0 ? void 0 : (_currentThreadQuery_data = currentThreadQuery.data) === null || _currentThreadQuery_data === void 0 ? void 0 : (_currentThreadQuery_data_data = _currentThreadQuery_data.data) === null || _currentThreadQuery_data_data === void 0 ? void 0 : _currentThreadQuery_data_data.thread) || {};\n    console.log(desk, thread);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_layouts_main_content_layout__WEBPACK_IMPORTED_MODULE_5__.MainContentLayout, {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_header__WEBPACK_IMPORTED_MODULE_6__.UiHeader, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n            lineNumber: 30,\n            columnNumber: 15\n        }, void 0),\n        asideBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_aside_ui_navigation__WEBPACK_IMPORTED_MODULE_3__.Navigation, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n            lineNumber: 31,\n            columnNumber: 19\n        }, void 0),\n        headerBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_header_block__WEBPACK_IMPORTED_MODULE_7__.UiHeaderBlock, {\n            isThread: false,\n            buttonName: \"Ответить в тред\",\n            img: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                src: \"/1.PNG\",\n                width: \"300\",\n                height: \"100\",\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n                lineNumber: 36,\n                columnNumber: 16\n            }, void 0),\n            title: deskItem ? deskItem.name : \"\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, void 0),\n        threadBlock: threadItem === null || threadItem === void 0 ? void 0 : (_threadItem_posts = threadItem.posts) === null || _threadItem_posts === void 0 ? void 0 : _threadItem_posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_thread_ui_thread__WEBPACK_IMPORTED_MODULE_4__.Thread, {\n                desk: desk,\n                date: post.created_at,\n                number: post.id,\n                content: post.content,\n                pictures: post.pictures,\n                isFirst: index === 0,\n                index: index,\n                postsCount: threadItem.posts_count,\n                picturesCount: threadItem.pictures_count\n            }, post.id, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n                lineNumber: 42,\n                columnNumber: 15\n            }, void 0)),\n        postBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_toggle_post_form__WEBPACK_IMPORTED_MODULE_10__.UITogglePostForm, {\n            buttonName: \"Ответить в тред\",\n            isThread: false\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n            lineNumber: 55,\n            columnNumber: 20\n        }, void 0),\n        footerBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_footer_block__WEBPACK_IMPORTED_MODULE_11__.UiFooterBlock, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n            lineNumber: 56,\n            columnNumber: 22\n        }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\threadpage.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ThreadPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ThreadPage;\nvar _c;\n$RefreshReg$(_c, \"ThreadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGhyZWFkcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDRDtBQUNBO0FBQ1A7QUFDb0I7QUFDeEI7QUFDVztBQUM3QjtBQUNTO0FBRTJCO0FBQ1A7QUFHckQsU0FBU1c7UUFNR0MsNkJBQUFBLHdCQUdFQywrQkFBQUEsMEJBaUJiQzs7SUF6Qk4sTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsR0FBRztJQUM3QixNQUFNQyxTQUFTSixPQUFPRSxLQUFLLENBQUNFLE1BQU07SUFFbEMsTUFBTVAsbUJBQW1CSSxPQUFPaEIsMEVBQW1CQSxDQUFDZ0IsUUFBUUk7SUFDNUQsTUFBTUMsV0FBV1QsQ0FBQUEsNkJBQUFBLHdDQUFBQSx5QkFBQUEsaUJBQWtCVSxJQUFJLGNBQXRCViw4Q0FBQUEsOEJBQUFBLHVCQUF3QlUsSUFBSSxjQUE1QlYsa0RBQUFBLDRCQUE4QkksSUFBSSxLQUFJLENBQUM7SUFFeEQsTUFBTUgscUJBQXFCTSxTQUFTbEIseUVBQWdCQSxDQUFDa0IsVUFBVUM7SUFDL0QsTUFBTU4sYUFBYUQsQ0FBQUEsK0JBQUFBLDBDQUFBQSwyQkFBQUEsbUJBQW9CUyxJQUFJLGNBQXhCVCxnREFBQUEsZ0NBQUFBLHlCQUEwQlMsSUFBSSxjQUE5QlQsb0RBQUFBLDhCQUFnQ00sTUFBTSxLQUFJLENBQUM7SUFFOURJLFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTUc7SUFFbEIscUJBQ0UsOERBQUNmLGtGQUFpQkE7UUFDaEJxQixzQkFBUSw4REFBQ3BCLDBEQUFRQTs7Ozs7UUFDakJxQiwwQkFBWSw4REFBQ3hCLHFFQUFVQTs7Ozs7UUFDdkJ5QiwyQkFDRSw4REFBQ3JCLHFFQUFhQTtZQUNkc0IsVUFBVTtZQUNSQyxZQUFXO1lBQ1hDLG1CQUFLLDhEQUFDdkIsbURBQUtBO2dCQUFDd0IsS0FBSTtnQkFBU0MsT0FBTTtnQkFBTUMsUUFBTztnQkFBTUMsS0FBSTs7Ozs7O1lBQ3REQyxPQUFPZCxXQUFXQSxTQUFTZSxJQUFJLEdBQUc7Ozs7OztRQUd0Q0MsV0FBVyxFQUNUdkIsdUJBQUFBLGtDQUFBQSxvQkFBQUEsV0FBWXdCLEtBQUssY0FBakJ4Qix3Q0FBQUEsa0JBQW1CeUIsR0FBRyxDQUFDLENBQUNDLE1BQWlCQyxzQkFDbkMsOERBQUN0Qyw4REFBTUE7Z0JBQ0xhLE1BQU1BO2dCQUVOMEIsTUFBTUYsS0FBS0csVUFBVTtnQkFDckJDLFFBQVFKLEtBQUtLLEVBQUU7Z0JBQ2ZDLFNBQVNOLEtBQUtNLE9BQU87Z0JBQ3JCQyxVQUFVUCxLQUFLTyxRQUFRO2dCQUN2QkMsU0FBU1AsVUFBVTtnQkFDbkJBLE9BQVNBO2dCQUNUUSxZQUFZbkMsV0FBV29DLFdBQVc7Z0JBQ2xDQyxlQUFlckMsV0FBV3NDLGNBQWM7ZUFSbkNaLEtBQUtLLEVBQUU7Ozs7O1FBV3BCUSx5QkFBVyw4REFBQzVDLDZFQUFnQkE7WUFBQ29CLFlBQVc7WUFBa0JELFVBQVU7Ozs7OztRQUNwRTBCLDJCQUFhLDhEQUFDNUMsc0VBQWFBOzs7Ozs7Ozs7O0FBR25DO0dBNUNnQkM7O1FBQ0NILGtEQUFTQTs7O0tBRFZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90aHJlYWRwYWdlLnRzeD8yZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1cnJlbnREZXNrUXVlcnkgfSBmcm9tIFwiQC9lbnRpdGllcy9kZXNrcy9xdWVyeVwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VGhyZWFkIH0gZnJvbSBcIkAvZW50aXRpZXMvdGhyZWFkcy9xdWVyeVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkAvZmVhdHVyZXMvYXNpZGUvdWkvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBUaHJlYWQgfSBmcm9tIFwiQC9mZWF0dXJlcy90aHJlYWQvdWkvdGhyZWFkXCI7XHJcbmltcG9ydCB7IE1haW5Db250ZW50TGF5b3V0IH0gZnJvbSBcIkAvc2hhcmVkL2xheW91dHMvbWFpbi1jb250ZW50LWxheW91dFwiO1xyXG5pbXBvcnQgeyBVaUhlYWRlciB9IGZyb20gXCJAL3NoYXJlZC91aS91aS1oZWFkZXJcIjtcclxuaW1wb3J0IHsgVWlIZWFkZXJCbG9jayB9IGZyb20gXCJAL3NoYXJlZC91aS91aS1oZWFkZXItYmxvY2tcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQb3N0c0l0ZW0sIFRocmVhZEl0ZW0gfSBmcm9tIFwiLi9kZXNrcGFnZVwiO1xyXG5pbXBvcnQgeyBVSVRvZ2dsZVBvc3RGb3JtIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLXRvZ2dsZS1wb3N0LWZvcm1cIjtcclxuaW1wb3J0IHsgVWlGb290ZXJCbG9jayB9IGZyb20gXCJAL3NoYXJlZC91aS91aS1mb290ZXItYmxvY2tcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhyZWFkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkZXNrID0gcm91dGVyLnF1ZXJ5LnRhZyBhcyBzdHJpbmc7XHJcbiAgY29uc3QgdGhyZWFkID0gcm91dGVyLnF1ZXJ5LnRocmVhZCBhcyBzdHJpbmc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREZXNrUXVlcnkgPSBkZXNrID8gZ2V0Q3VycmVudERlc2tRdWVyeShkZXNrKSA6IHVuZGVmaW5lZDtcclxuICBjb25zdCBkZXNrSXRlbSA9IGN1cnJlbnREZXNrUXVlcnk/LmRhdGE/LmRhdGE/LmRlc2sgfHwge307XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUaHJlYWRRdWVyeSA9IHRocmVhZCA/IGdldEN1cnJlbnRUaHJlYWQodGhyZWFkKSA6IHVuZGVmaW5lZDtcclxuICBjb25zdCB0aHJlYWRJdGVtID0gY3VycmVudFRocmVhZFF1ZXJ5Py5kYXRhPy5kYXRhPy50aHJlYWQgfHwge307XHJcblxyXG4gIGNvbnNvbGUubG9nKGRlc2ssIHRocmVhZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRlbnRMYXlvdXRcclxuICAgICAgaGVhZGVyPXs8VWlIZWFkZXIgLz59XHJcbiAgICAgIGFzaWRlQmxvY2s9ezxOYXZpZ2F0aW9uIC8+fVxyXG4gICAgICBoZWFkZXJCbG9jaz17XHJcbiAgICAgICAgPFVpSGVhZGVyQmxvY2tcclxuICAgICAgICBpc1RocmVhZD17ZmFsc2V9XHJcbiAgICAgICAgICBidXR0b25OYW1lPVwi0J7RgtCy0LXRgtC40YLRjCDQsiDRgtGA0LXQtFwiXHJcbiAgICAgICAgICBpbWc9ezxJbWFnZSBzcmM9XCIvMS5QTkdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjEwMFwiIGFsdD1cImxvZ29cIiAvPn1cclxuICAgICAgICAgIHRpdGxlPXtkZXNrSXRlbSA/IGRlc2tJdGVtLm5hbWUgOiBcIlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgdGhyZWFkQmxvY2s9e1xyXG4gICAgICAgIHRocmVhZEl0ZW0/LnBvc3RzPy5tYXAoKHBvc3Q6IFBvc3RzSXRlbSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUaHJlYWRcclxuICAgICAgICAgICAgICAgIGRlc2s9e2Rlc2t9XHJcbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtwb3N0LmNyZWF0ZWRfYXR9XHJcbiAgICAgICAgICAgICAgICBudW1iZXI9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlcz17cG9zdC5waWN0dXJlc31cclxuICAgICAgICAgICAgICAgIGlzRmlyc3Q9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB7aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBwb3N0c0NvdW50PXt0aHJlYWRJdGVtLnBvc3RzX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgcGljdHVyZXNDb3VudD17dGhyZWFkSXRlbS5waWN0dXJlc19jb3VudH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHBvc3RCbG9jaz17PFVJVG9nZ2xlUG9zdEZvcm0gYnV0dG9uTmFtZT1cItCe0YLQstC10YLQuNGC0Ywg0LIg0YLRgNC10LRcIiBpc1RocmVhZD17ZmFsc2V9IC8+fVxyXG4gICAgICAgIGZvb3RlckJsb2NrPXs8VWlGb290ZXJCbG9jayAvPn1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0Q3VycmVudERlc2tRdWVyeSIsImdldEN1cnJlbnRUaHJlYWQiLCJOYXZpZ2F0aW9uIiwiVGhyZWFkIiwiTWFpbkNvbnRlbnRMYXlvdXQiLCJVaUhlYWRlciIsIlVpSGVhZGVyQmxvY2siLCJJbWFnZSIsInVzZVJvdXRlciIsIlVJVG9nZ2xlUG9zdEZvcm0iLCJVaUZvb3RlckJsb2NrIiwiVGhyZWFkUGFnZSIsImN1cnJlbnREZXNrUXVlcnkiLCJjdXJyZW50VGhyZWFkUXVlcnkiLCJ0aHJlYWRJdGVtIiwicm91dGVyIiwiZGVzayIsInF1ZXJ5IiwidGFnIiwidGhyZWFkIiwidW5kZWZpbmVkIiwiZGVza0l0ZW0iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhlYWRlciIsImFzaWRlQmxvY2siLCJoZWFkZXJCbG9jayIsImlzVGhyZWFkIiwiYnV0dG9uTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidGl0bGUiLCJuYW1lIiwidGhyZWFkQmxvY2siLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpbmRleCIsImRhdGUiLCJjcmVhdGVkX2F0IiwibnVtYmVyIiwiaWQiLCJjb250ZW50IiwicGljdHVyZXMiLCJpc0ZpcnN0IiwicG9zdHNDb3VudCIsInBvc3RzX2NvdW50IiwicGljdHVyZXNDb3VudCIsInBpY3R1cmVzX2NvdW50IiwicG9zdEJsb2NrIiwiZm9vdGVyQmxvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/threadpage.tsx\n"));

/***/ })

});