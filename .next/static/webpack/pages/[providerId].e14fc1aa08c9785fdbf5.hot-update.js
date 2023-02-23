webpackHotUpdate_N_E("pages/[providerId]",{

/***/ "./components/transports/TransportProviderDetail.js":
/*!**********************************************************!*\
  !*** ./components/transports/TransportProviderDetail.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransportProviderDetail.module.css */ "./components/transports/TransportProviderDetail.module.css");
/* harmony import */ var _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Priya\\doc_Priya\\Projects\\NextJs\\transport_provider\\components\\transports\\TransportProviderDetail.js";


function TransportProviderDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " Owner Name: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.owner_name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.vehicle_no
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.driver_name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.phone_no
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.licence_no
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.service_type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.data.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: props.data.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = TransportProviderDetail;
/* harmony default export */ __webpack_exports__["default"] = (TransportProviderDetail);

var _c;

$RefreshReg$(_c, "TransportProviderDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmFuc3BvcnRzL1RyYW5zcG9ydFByb3ZpZGVyRGV0YWlsLmpzIl0sIm5hbWVzIjpbIlRyYW5zcG9ydFByb3ZpZGVyRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiZGF0YSIsIm93bmVyX25hbWUiLCJ2ZWhpY2xlX25vIiwiZHJpdmVyX25hbWUiLCJwaG9uZV9ubyIsImxpY2VuY2Vfbm8iLCJzZXJ2aWNlX3R5cGUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsdUJBQVQsQ0FBaUNDLEtBQWpDLEVBQXdDO0FBQ3RDLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywwRUFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFAsZUFFTTtBQUFBLGdCQUFNRixLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZOLGVBR007QUFBQSxnQkFBTUosS0FBSyxDQUFDRyxJQUFOLENBQVdFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFITixlQUlNO0FBQUEsZ0JBQU1MLEtBQUssQ0FBQ0csSUFBTixDQUFXRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSk4sZUFLTTtBQUFBLGdCQUFNTixLQUFLLENBQUNHLElBQU4sQ0FBV0k7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxOLGVBTU07QUFBQSxnQkFBTVAsS0FBSyxDQUFDRyxJQUFOLENBQVdLO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTixlQU9NO0FBQUEsZ0JBQU1SLEtBQUssQ0FBQ0csSUFBTixDQUFXTTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUE4sZUFRTTtBQUFBLGdCQUFNVCxLQUFLLENBQUNHLElBQU4sQ0FBV087QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJOLGVBU0U7QUFBQSxnQkFBVVYsS0FBSyxDQUFDRyxJQUFOLENBQVdRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztLQWZRWix1QjtBQWtCTUEsc0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3Byb3ZpZGVySWRdLmUxNGZjMWFhMDhjOTc4NWZkYmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL1RyYW5zcG9ydFByb3ZpZGVyRGV0YWlsLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBUcmFuc3BvcnRQcm92aWRlckRldGFpbChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgICA8ZGl2PiBPd25lciBOYW1lOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kYXRhLm93bmVyX25hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS52ZWhpY2xlX25vfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRhdGEuZHJpdmVyX25hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5waG9uZV9ub308L2Rpdj5cbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kYXRhLmxpY2VuY2Vfbm99PC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5zZXJ2aWNlX3R5cGV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxhZGRyZXNzPntwcm9wcy5kYXRhLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICBcbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNwb3J0UHJvdmlkZXJEZXRhaWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==