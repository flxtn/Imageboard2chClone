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

/***/ "./src/pages/deskpage.tsx":
/*!********************************!*\
  !*** ./src/pages/deskpage.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeskPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _entities_desks_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/desks/query */ \"./src/entities/desks/query.ts\");\n/* harmony import */ var _entities_threads_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/threads/query */ \"./src/entities/threads/query.ts\");\n/* harmony import */ var _features_aside_ui_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/aside/ui/navigation */ \"./src/features/aside/ui/navigation.tsx\");\n/* harmony import */ var _features_thread_ui_thread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/thread/ui/thread */ \"./src/features/thread/ui/thread.tsx\");\n/* harmony import */ var _shared_layouts_main_content_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/layouts/main-content-layout */ \"./src/shared/layouts/main-content-layout.tsx\");\n/* harmony import */ var _shared_ui_ui_footer_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/ui-footer-block */ \"./src/shared/ui/ui-footer-block.tsx\");\n/* harmony import */ var _shared_ui_ui_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shared/ui/ui-header */ \"./src/shared/ui/ui-header.tsx\");\n/* harmony import */ var _shared_ui_ui_header_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/ui/ui-header-block */ \"./src/shared/ui/ui-header-block.tsx\");\n/* harmony import */ var _shared_ui_ui_toggle_post_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/ui/ui-toggle-post-form */ \"./src/shared/ui/ui-toggle-post-form.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction DeskPage() {\n    var _currentDeskQuery_data_data, _currentDeskQuery_data, _threadsQuery_data_data, _threadsQuery_data;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    const desk = router.query.tag;\n    const currentDeskQuery = desk ? (0,_entities_desks_query__WEBPACK_IMPORTED_MODULE_1__.getCurrentDeskQuery)(desk) : undefined;\n    const deskItem = (currentDeskQuery === null || currentDeskQuery === void 0 ? void 0 : (_currentDeskQuery_data = currentDeskQuery.data) === null || _currentDeskQuery_data === void 0 ? void 0 : (_currentDeskQuery_data_data = _currentDeskQuery_data.data) === null || _currentDeskQuery_data_data === void 0 ? void 0 : _currentDeskQuery_data_data.desk) || {};\n    const threadsQuery = desk ? (0,_entities_threads_query__WEBPACK_IMPORTED_MODULE_2__.getThreadsQuery)(desk) : undefined;\n    const threadItem = (threadsQuery === null || threadsQuery === void 0 ? void 0 : (_threadsQuery_data = threadsQuery.data) === null || _threadsQuery_data === void 0 ? void 0 : (_threadsQuery_data_data = _threadsQuery_data.data) === null || _threadsQuery_data_data === void 0 ? void 0 : _threadsQuery_data_data.threads) || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_layouts_main_content_layout__WEBPACK_IMPORTED_MODULE_5__.MainContentLayout, {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_header__WEBPACK_IMPORTED_MODULE_7__.UiHeader, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n            lineNumber: 40,\n            columnNumber: 15\n        }, void 0),\n        headerBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_header_block__WEBPACK_IMPORTED_MODULE_8__.UiHeaderBlock, {\n            isThread: true,\n            buttonName: \"Создать тред\",\n            img: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {\n                src: \"/1.PNG\",\n                width: \"300\",\n                height: \"100\",\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n                lineNumber: 45,\n                columnNumber: 16\n            }, void 0),\n            title: deskItem ? deskItem.name : \"\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, void 0),\n        asideBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_aside_ui_navigation__WEBPACK_IMPORTED_MODULE_3__.Navigation, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n            lineNumber: 49,\n            columnNumber: 19\n        }, void 0),\n        threadBlock: threadItem === null || threadItem === void 0 ? void 0 : threadItem.map((item)=>{\n            var _item_posts;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: item === null || item === void 0 ? void 0 : (_item_posts = item.posts) === null || _item_posts === void 0 ? void 0 : _item_posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_thread_ui_thread__WEBPACK_IMPORTED_MODULE_4__.Thread, {\n                        desk: desk,\n                        date: post.created_at,\n                        number: post.id,\n                        thread: item.id,\n                        content: post.content,\n                        pictures: post.pictures,\n                        isFirst: index === 0,\n                        postsCount: item.posts_count,\n                        picturesCount: item.pictures_count\n                    }, post.id, false, {\n                        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, void 0);\n        }),\n        postBlock: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_ui_toggle_post_form__WEBPACK_IMPORTED_MODULE_9__.UITogglePostForm, {\n            isThread: true,\n            buttonName: \"Создать тред\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n            lineNumber: 68,\n            columnNumber: 18\n        }, void 0),\n        footerBlock: _shared_ui_ui_footer_block__WEBPACK_IMPORTED_MODULE_6__.UiFooterBlock\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\pages\\\\deskpage.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(DeskPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = DeskPage;\nvar _c;\n$RefreshReg$(_c, \"DeskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGVza3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ0Y7QUFDQztBQUNQO0FBQ29CO0FBQ2I7QUFDWDtBQUNXO0FBQ087QUFDcEM7QUFDUztBQWtCekIsU0FBU1c7UUFLTEMsNkJBQUFBLHdCQUVFQyx5QkFBQUE7O0lBTm5CLE1BQU1DLFNBQVNKLHVEQUFTQTtJQUN4QixNQUFNSyxPQUFPRCxPQUFPRSxLQUFLLENBQUNDLEdBQUc7SUFFN0IsTUFBTUwsbUJBQW1CRyxPQUFPZiwwRUFBbUJBLENBQUNlLFFBQVFHO0lBQzVELE1BQU1DLFdBQVdQLENBQUFBLDZCQUFBQSx3Q0FBQUEseUJBQUFBLGlCQUFrQlEsSUFBSSxjQUF0QlIsOENBQUFBLDhCQUFBQSx1QkFBd0JRLElBQUksY0FBNUJSLGtEQUFBQSw0QkFBOEJHLElBQUksS0FBSSxDQUFDO0lBQ3hELE1BQU1GLGVBQWVFLE9BQU9kLHdFQUFlQSxDQUFDYyxRQUFRRztJQUNwRCxNQUFNRyxhQUFhUixDQUFBQSx5QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFjTyxJQUFJLGNBQWxCUCwwQ0FBQUEsMEJBQUFBLG1CQUFvQk8sSUFBSSxjQUF4QlAsOENBQUFBLHdCQUEwQlMsT0FBTyxLQUFJLEVBQUU7SUFFMUQscUJBQ0UsOERBQUNsQixrRkFBaUJBO1FBQ2hCbUIsc0JBQVEsOERBQUNqQiwwREFBUUE7Ozs7O1FBQ2pCa0IsMkJBQ0UsOERBQUNqQixxRUFBYUE7WUFDZGtCLFVBQVU7WUFDUkMsWUFBVztZQUNYQyxtQkFBSyw4REFBQ2xCLG9EQUFLQTtnQkFBQ21CLEtBQUk7Z0JBQVNDLE9BQU07Z0JBQU1DLFFBQU87Z0JBQU1DLEtBQUk7Ozs7OztZQUN0REMsT0FBT2IsV0FBV0EsU0FBU2MsSUFBSSxHQUFHOzs7Ozs7UUFHdENDLDBCQUFZLDhEQUFDaEMscUVBQVVBOzs7OztRQUN2QmlDLFdBQVcsRUFBRWQsdUJBQUFBLGlDQUFBQSxXQUFZZSxHQUFHLENBQUMsQ0FBQ0M7Z0JBRXpCQTtpQ0FESCw4REFBQ0M7MEJBQ0VELGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTUUsS0FBSyxjQUFYRixrQ0FBQUEsWUFBYUQsR0FBRyxDQUFDLENBQUNJLE1BQU1DLHNCQUN2Qiw4REFBQ3RDLDhEQUFNQTt3QkFDTFksTUFBTUE7d0JBRU4yQixNQUFNRixLQUFLRyxVQUFVO3dCQUNyQkMsUUFBUUosS0FBS0ssRUFBRTt3QkFDZkMsUUFBUVQsS0FBS1EsRUFBRTt3QkFDZkUsU0FBU1AsS0FBS08sT0FBTzt3QkFDckJDLFVBQVVSLEtBQUtRLFFBQVE7d0JBQ3ZCQyxTQUFTUixVQUFVO3dCQUNuQlMsWUFBWWIsS0FBS2MsV0FBVzt3QkFDNUJDLGVBQWVmLEtBQUtnQixjQUFjO3VCQVI3QmIsS0FBS0ssRUFBRTs7Ozs7Ozs7Ozs7UUFhcEJTLHlCQUFXLDhEQUFDOUMsNEVBQWdCQTtZQUFDaUIsVUFBVTtZQUFNQyxZQUFXOzs7Ozs7UUFDeEQ2QixhQUFhbEQscUVBQWFBOzs7Ozs7QUFHaEM7R0EzQ3dCTTs7UUFDUEQsbURBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rlc2twYWdlLnRzeD8wMWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1cnJlbnREZXNrUXVlcnkgfSBmcm9tIFwiQC9lbnRpdGllcy9kZXNrcy9xdWVyeVwiO1xyXG5pbXBvcnQgeyBnZXRUaHJlYWRzUXVlcnkgfSBmcm9tIFwiQC9lbnRpdGllcy90aHJlYWRzL3F1ZXJ5XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiQC9mZWF0dXJlcy9hc2lkZS91aS9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IFRocmVhZCB9IGZyb20gXCJAL2ZlYXR1cmVzL3RocmVhZC91aS90aHJlYWRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRlbnRMYXlvdXQgfSBmcm9tIFwiQC9zaGFyZWQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFVpRm9vdGVyQmxvY2sgfSBmcm9tIFwiQC9zaGFyZWQvdWkvdWktZm9vdGVyLWJsb2NrXCI7XHJcbmltcG9ydCB7IFVpSGVhZGVyIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLWhlYWRlclwiO1xyXG5pbXBvcnQgeyBVaUhlYWRlckJsb2NrIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLWhlYWRlci1ibG9ja1wiO1xyXG5pbXBvcnQgeyBVSVRvZ2dsZVBvc3RGb3JtIH0gZnJvbSBcIkAvc2hhcmVkL3VpL3VpLXRvZ2dsZS1wb3N0LWZvcm1cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zdHNJdGVtID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHBpY3R1cmVzOiBzdHJpbmdbXTtcclxuICBjcmVhdGVkX2F0OiBzdHJpbmc7XHJcbiAgdGhyZWFkX2lkOiBudW1iZXJcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRocmVhZEl0ZW0gPSB7XHJcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgcG9zdHM6IFBvc3RzSXRlbVtdO1xyXG4gIHBvc3RzX2NvdW50OiBudW1iZXI7XHJcbiAgcGljdHVyZXNfY291bnQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2tQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRlc2sgPSByb3V0ZXIucXVlcnkudGFnIGFzIHN0cmluZztcclxuXHJcbiAgY29uc3QgY3VycmVudERlc2tRdWVyeSA9IGRlc2sgPyBnZXRDdXJyZW50RGVza1F1ZXJ5KGRlc2spIDogdW5kZWZpbmVkO1xyXG4gIGNvbnN0IGRlc2tJdGVtID0gY3VycmVudERlc2tRdWVyeT8uZGF0YT8uZGF0YT8uZGVzayB8fCB7fTtcclxuICBjb25zdCB0aHJlYWRzUXVlcnkgPSBkZXNrID8gZ2V0VGhyZWFkc1F1ZXJ5KGRlc2spIDogdW5kZWZpbmVkO1xyXG4gIGNvbnN0IHRocmVhZEl0ZW0gPSB0aHJlYWRzUXVlcnk/LmRhdGE/LmRhdGE/LnRocmVhZHMgfHwgW107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRlbnRMYXlvdXRcclxuICAgICAgaGVhZGVyPXs8VWlIZWFkZXIgLz59XHJcbiAgICAgIGhlYWRlckJsb2NrPXtcclxuICAgICAgICA8VWlIZWFkZXJCbG9ja1xyXG4gICAgICAgIGlzVGhyZWFkPXt0cnVlfVxyXG4gICAgICAgICAgYnV0dG9uTmFtZT1cItCh0L7Qt9C00LDRgtGMINGC0YDQtdC0XCJcclxuICAgICAgICAgIGltZz17PEltYWdlIHNyYz1cIi8xLlBOR1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTAwXCIgYWx0PVwibG9nb1wiIC8+fVxyXG4gICAgICAgICAgdGl0bGU9e2Rlc2tJdGVtID8gZGVza0l0ZW0ubmFtZSA6IFwiXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgICBhc2lkZUJsb2NrPXs8TmF2aWdhdGlvbiAvPn1cclxuICAgICAgdGhyZWFkQmxvY2s9e3RocmVhZEl0ZW0/Lm1hcCgoaXRlbTogVGhyZWFkSXRlbSkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7aXRlbT8ucG9zdHM/Lm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFRocmVhZFxyXG4gICAgICAgICAgICAgIGRlc2s9e2Rlc2t9XHJcbiAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgIGRhdGU9e3Bvc3QuY3JlYXRlZF9hdH1cclxuICAgICAgICAgICAgICBudW1iZXI9e3Bvc3QuaWR9XHJcbiAgICAgICAgICAgICAgdGhyZWFkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuY29udGVudH1cclxuICAgICAgICAgICAgICBwaWN0dXJlcz17cG9zdC5waWN0dXJlc31cclxuICAgICAgICAgICAgICBpc0ZpcnN0PXtpbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICBwb3N0c0NvdW50PXtpdGVtLnBvc3RzX2NvdW50fVxyXG4gICAgICAgICAgICAgIHBpY3R1cmVzQ291bnQ9e2l0ZW0ucGljdHVyZXNfY291bnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHBvc3RCbG9jaz17PFVJVG9nZ2xlUG9zdEZvcm0gaXNUaHJlYWQ9e3RydWV9IGJ1dHRvbk5hbWU9XCLQodC+0LfQtNCw0YLRjCDRgtGA0LXQtFwiIC8+fVxyXG4gICAgICBmb290ZXJCbG9jaz17VWlGb290ZXJCbG9ja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0Q3VycmVudERlc2tRdWVyeSIsImdldFRocmVhZHNRdWVyeSIsIk5hdmlnYXRpb24iLCJUaHJlYWQiLCJNYWluQ29udGVudExheW91dCIsIlVpRm9vdGVyQmxvY2siLCJVaUhlYWRlciIsIlVpSGVhZGVyQmxvY2siLCJVSVRvZ2dsZVBvc3RGb3JtIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJEZXNrUGFnZSIsImN1cnJlbnREZXNrUXVlcnkiLCJ0aHJlYWRzUXVlcnkiLCJyb3V0ZXIiLCJkZXNrIiwicXVlcnkiLCJ0YWciLCJ1bmRlZmluZWQiLCJkZXNrSXRlbSIsImRhdGEiLCJ0aHJlYWRJdGVtIiwidGhyZWFkcyIsImhlYWRlciIsImhlYWRlckJsb2NrIiwiaXNUaHJlYWQiLCJidXR0b25OYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0aXRsZSIsIm5hbWUiLCJhc2lkZUJsb2NrIiwidGhyZWFkQmxvY2siLCJtYXAiLCJpdGVtIiwiZGl2IiwicG9zdHMiLCJwb3N0IiwiaW5kZXgiLCJkYXRlIiwiY3JlYXRlZF9hdCIsIm51bWJlciIsImlkIiwidGhyZWFkIiwiY29udGVudCIsInBpY3R1cmVzIiwiaXNGaXJzdCIsInBvc3RzQ291bnQiLCJwb3N0c19jb3VudCIsInBpY3R1cmVzQ291bnQiLCJwaWN0dXJlc19jb3VudCIsInBvc3RCbG9jayIsImZvb3RlckJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/deskpage.tsx\n"));

/***/ }),

/***/ "./src/shared/ui/ui-footer-block.tsx":
/*!*******************************************!*\
  !*** ./src/shared/ui/ui-footer-block.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiFooterBlock: function() { return /* binding */ UiFooterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nfunction UiFooterBlock() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Все права и копирайты на этой странице принадлежат правообладателям. За любую размещенную информацию несет личную ответственность постер (лицо, загрузившее эту информацию). Все комментарии принадлежат лицам, отправившим их. Если вы обнаружили информацию, размещённую против правил, пожалуйста, сообщите нам об этом.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\shared\\\\ui\\\\ui-footer-block.tsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jkmuf_000\\\\Desktop\\\\laravel_study\\\\client\\\\src\\\\shared\\\\ui\\\\ui-footer-block.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = UiFooterBlock;\nvar _c;\n$RefreshReg$(_c, \"UiFooterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL3VpL3VpLWZvb3Rlci1ibG9jay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0E7SUFDZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7c0JBQUs7Ozs7Ozs7Ozs7O0FBU1o7S0FaZ0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zaGFyZWQvdWkvdWktZm9vdGVyLWJsb2NrLnRzeD9iYjFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBVaUZvb3RlckJsb2NrKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAg0JLRgdC1INC/0YDQsNCy0LAg0Lgg0LrQvtC/0LjRgNCw0LnRgtGLINC90LAg0Y3RgtC+0Lkg0YHRgtGA0LDQvdC40YbQtSDQv9GA0LjQvdCw0LTQu9C10LbQsNGCINC/0YDQsNCy0L7QvtCx0LvQsNC00LDRgtC10LvRj9C8LiDQl9CwXHJcbiAgICAgICAg0LvRjtCx0YPRjiDRgNCw0LfQvNC10YnQtdC90L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC90LXRgdC10YIg0LvQuNGH0L3Rg9GOINC+0YLQstC10YLRgdGC0LLQtdC90L3QvtGB0YLRjCDQv9C+0YHRgtC10YAgKNC70LjRhtC+LFxyXG4gICAgICAgINC30LDQs9GA0YPQt9C40LLRiNC10LUg0Y3RgtGDINC40L3RhNC+0YDQvNCw0YbQuNGOKS4g0JLRgdC1INC60L7QvNC80LXQvdGC0LDRgNC40Lgg0L/RgNC40L3QsNC00LvQtdC20LDRgiDQu9C40YbQsNC8LFxyXG4gICAgICAgINC+0YLQv9GA0LDQstC40LLRiNC40Lwg0LjRhS4g0JXRgdC70Lgg0LLRiyDQvtCx0L3QsNGA0YPQttC40LvQuCDQuNC90YTQvtGA0LzQsNGG0LjRjiwg0YDQsNC30LzQtdGJ0ZHQvdC90YPRjiDQv9GA0L7RgtC40LJcclxuICAgICAgICDQv9GA0LDQstC40LssINC/0L7QttCw0LvRg9C50YHRgtCwLCDRgdC+0L7QsdGJ0LjRgtC1INC90LDQvCDQvtCxINGN0YLQvtC8LlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJVaUZvb3RlckJsb2NrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shared/ui/ui-footer-block.tsx\n"));

/***/ })

});