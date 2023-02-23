module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[providerId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/transports/TransportProviderDetail.js":
/*!**********************************************************!*\
  !*** ./components/transports/TransportProviderDetail.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransportProviderDetail.module.css */ "./components/transports/TransportProviderDetail.module.css");
/* harmony import */ var _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Priya\\doc_Priya\\Projects\\NextJs\\transport_provider\\components\\transports\\TransportProviderDetail.js";


function TransportProviderDetail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _TransportProviderDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Owner Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.owner_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Vehicle No: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.vehicle_no
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Driver Name: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.driver_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Phone: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.phone_no
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Licence No: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.licence_no
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Service Type: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.service_type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Description: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " Address: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
        children: props.data.address
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TransportProviderDetail);

/***/ }),

/***/ "./components/transports/TransportProviderDetail.module.css":
/*!******************************************************************!*\
  !*** ./components/transports/TransportProviderDetail.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail": "TransportProviderDetail_detail__J-joG",
	"item": "TransportProviderDetail_item__3PAwk",
	"itemsc": "TransportProviderDetail_itemsc__2FNV3"
};


/***/ }),

/***/ "./pages/[providerId]/index.js":
/*!*************************************!*\
  !*** ./pages/[providerId]/index.js ***!
  \*************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_transports_TransportProviderDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/transports/TransportProviderDetail */ "./components/transports/TransportProviderDetail.js");

var _jsxFileName = "C:\\Priya\\doc_Priya\\Projects\\NextJs\\transport_provider\\pages\\[providerId]\\index.js";





function MeetupDetails(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.TransportData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_transports_TransportProviderDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: props.TransportData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect('mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority');
  const db = client.db();
  const transportproviderCollection = db.collection('transportprovider');
  const transports = await transportproviderCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: transports.map(trans => ({
      params: {
        providerId: trans._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const providerId = context.params.providerId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__["MongoClient"].connect('mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority');
  const db = client.db();
  const transportproviderCollection = db.collection('transportprovider');
  const selectedProvider = await transportproviderCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__["ObjectId"])(providerId)
  });
  client.close();
  return {
    props: {
      TransportData: {
        id: selectedProvider._id.toString(),
        owner_name: selectedProvider.owner_name,
        vehicle_no: selectedProvider.vehicle_no,
        driver_name: selectedProvider.driver_name,
        phone_no: selectedProvider.phone_no,
        licence_no: selectedProvider.licence_no,
        service_type: selectedProvider.service_type,
        address: selectedProvider.address,
        description: selectedProvider.description
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90cmFuc3BvcnRzL1RyYW5zcG9ydFByb3ZpZGVyRGV0YWlsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdHJhbnNwb3J0cy9UcmFuc3BvcnRQcm92aWRlckRldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL1twcm92aWRlcklkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUcmFuc3BvcnRQcm92aWRlckRldGFpbCIsInByb3BzIiwiY2xhc3NlcyIsImRldGFpbCIsImRhdGEiLCJvd25lcl9uYW1lIiwidmVoaWNsZV9ubyIsImRyaXZlcl9uYW1lIiwicGhvbmVfbm8iLCJsaWNlbmNlX25vIiwic2VydmljZV90eXBlIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiTWVldHVwRGV0YWlscyIsIlRyYW5zcG9ydERhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwidHJhbnNwb3J0cHJvdmlkZXJDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInRyYW5zcG9ydHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsInRyYW5zIiwicGFyYW1zIiwicHJvdmlkZXJJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRQcm92aWRlciIsImZpbmRPbmUiLCJPYmplY3RJZCIsImlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7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QUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxtQkFBZCxDQUFwQztBQUVBLFFBQU1lLGdCQUFnQixHQUFHLE1BQU1oQiwyQkFBMkIsQ0FBQ2lCLE9BQTVCLENBQW9DO0FBQ2pFYixPQUFHLEVBQUVjLHdEQUFRLENBQUNOLFVBQUQ7QUFEb0QsR0FBcEMsQ0FBL0I7QUFJQWhCLFFBQU0sQ0FBQ1UsS0FBUDtBQUVBLFNBQU87QUFDTHpCLFNBQUssRUFBRTtBQUNMYSxtQkFBYSxFQUFFO0FBQ1h5QixVQUFFLEVBQUVILGdCQUFnQixDQUFDWixHQUFqQixDQUFxQlMsUUFBckIsRUFETztBQUVYNUIsa0JBQVUsRUFBRStCLGdCQUFnQixDQUFDL0IsVUFGbEI7QUFHWEMsa0JBQVUsRUFBRThCLGdCQUFnQixDQUFDOUIsVUFIbEI7QUFJWEMsbUJBQVcsRUFBRTZCLGdCQUFnQixDQUFDN0IsV0FKbkI7QUFLWEMsZ0JBQVEsRUFBRTRCLGdCQUFnQixDQUFDNUIsUUFMaEI7QUFNWEMsa0JBQVUsRUFBRTJCLGdCQUFnQixDQUFDM0IsVUFObEI7QUFPWEMsb0JBQVksRUFBRTBCLGdCQUFnQixDQUFDMUIsWUFQcEI7QUFRWEUsZUFBTyxFQUFFd0IsZ0JBQWdCLENBQUN4QixPQVJmO0FBU1hELG1CQUFXLEVBQUV5QixnQkFBZ0IsQ0FBQ3pCO0FBVG5CO0FBRFY7QUFERixHQUFQO0FBZUQ7QUFFY0UsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUMzRUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW3Byb3ZpZGVySWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bcHJvdmlkZXJJZF0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL1RyYW5zcG9ydFByb3ZpZGVyRGV0YWlsLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBUcmFuc3BvcnRQcm92aWRlckRldGFpbChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdj4gT3duZXIgTmFtZTogPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5vd25lcl9uYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXY+IFZlaGljbGUgTm86IDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRhdGEudmVoaWNsZV9ub308L2Rpdj5cbiAgICAgICAgICA8ZGl2PiBEcml2ZXIgTmFtZTogPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5kcml2ZXJfbmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PiBQaG9uZTogPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5waG9uZV9ub308L2Rpdj5cbiAgICAgICAgICA8ZGl2PiBMaWNlbmNlIE5vOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kYXRhLmxpY2VuY2Vfbm99PC9kaXY+XG4gICAgICAgICAgPGRpdj4gU2VydmljZSBUeXBlOiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kYXRhLnNlcnZpY2VfdHlwZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PiBEZXNjcmlwdGlvbjogPC9kaXY+XG4gICAgICAgICAgPGRpdj57cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8ZGl2PiBBZGRyZXNzOiA8L2Rpdj5cbiAgICAgIDxhZGRyZXNzPntwcm9wcy5kYXRhLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc3BvcnRQcm92aWRlckRldGFpbDtcblxuXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXRhaWxcIjogXCJUcmFuc3BvcnRQcm92aWRlckRldGFpbF9kZXRhaWxfX0otam9HXCIsXG5cdFwiaXRlbVwiOiBcIlRyYW5zcG9ydFByb3ZpZGVyRGV0YWlsX2l0ZW1fXzNQQXdrXCIsXG5cdFwiaXRlbXNjXCI6IFwiVHJhbnNwb3J0UHJvdmlkZXJEZXRhaWxfaXRlbXNjX18yRk5WM1wiXG59O1xuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBUcmFuc3BvcnRQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zcG9ydHMvVHJhbnNwb3J0UHJvdmlkZXJEZXRhaWwnO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT4gKi99XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5UcmFuc3BvcnREYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRyYW5zcG9ydFByb3ZpZGVyRGV0YWlsXG4gICAgICAgZGF0YT17cHJvcHMuVHJhbnNwb3J0RGF0YX1cbiAgICAgIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICdtb25nb2RiK3NydjovL3ByaXlhOjhXa1pQMFVOMlJnV2dHTldAY2x1c3RlcjAuY2d3a2xrOS5tb25nb2RiLm5ldC90cmFuc3BvcnRwcm92aWRlcj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgdHJhbnNwb3J0cHJvdmlkZXJDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbigndHJhbnNwb3J0cHJvdmlkZXInKTtcblxuICBjb25zdCB0cmFuc3BvcnRzID0gYXdhaXQgdHJhbnNwb3J0cHJvdmlkZXJDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuICAgIHBhdGhzOiB0cmFuc3BvcnRzLm1hcCgodHJhbnMpID0+ICh7XG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJJZDogdHJhbnMuX2lkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxuXG4gIGNvbnN0IHByb3ZpZGVySWQgPSBjb250ZXh0LnBhcmFtcy5wcm92aWRlcklkO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8vcHJpeWE6OFdrWlAwVU4yUmdXZ0dOV0BjbHVzdGVyMC5jZ3drbGs5Lm1vbmdvZGIubmV0L3RyYW5zcG9ydHByb3ZpZGVyP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCB0cmFuc3BvcnRwcm92aWRlckNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd0cmFuc3BvcnRwcm92aWRlcicpO1xuXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSBhd2FpdCB0cmFuc3BvcnRwcm92aWRlckNvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBPYmplY3RJZChwcm92aWRlcklkKSxcbiAgfSk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgVHJhbnNwb3J0RGF0YToge1xuICAgICAgICAgIGlkOiBzZWxlY3RlZFByb3ZpZGVyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgIG93bmVyX25hbWU6IHNlbGVjdGVkUHJvdmlkZXIub3duZXJfbmFtZSxcbiAgICAgICAgICB2ZWhpY2xlX25vOiBzZWxlY3RlZFByb3ZpZGVyLnZlaGljbGVfbm8sXG4gICAgICAgICAgZHJpdmVyX25hbWU6IHNlbGVjdGVkUHJvdmlkZXIuZHJpdmVyX25hbWUsXG4gICAgICAgICAgcGhvbmVfbm86IHNlbGVjdGVkUHJvdmlkZXIucGhvbmVfbm8sXG4gICAgICAgICAgbGljZW5jZV9ubzogc2VsZWN0ZWRQcm92aWRlci5saWNlbmNlX25vLFxuICAgICAgICAgIHNlcnZpY2VfdHlwZTogc2VsZWN0ZWRQcm92aWRlci5zZXJ2aWNlX3R5cGUsXG4gICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRQcm92aWRlci5hZGRyZXNzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZFByb3ZpZGVyLmRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=