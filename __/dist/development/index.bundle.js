(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

module.exports = React.createClass({
  displayName: 'ZRButton',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      type: 'button' //button, reset, submit

    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  __click: function __click(event) {
    if (this.props.disabled) {
      event.preventDefault();
    }

    event.owner = this;
    this.props.onClick && this.props.onClick(event, this);
  },
  loading: function loading(value) {
    this.setState({
      loading: value
    });
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    return /*#__PURE__*/React.createElement("button", _extends({}, this.props, {
      onClick: this.__click,
      className: znui.react.classname("zr-button", this.props.className, this.props.status, this.props.isActive ? "active" : ""),
      disabled: this.props.disabled || this.state.loading,
      "data-loading": this.state.loading
    }), this.props.icon && /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icon
    }), this.props.value && /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, this.props.value), this.props.children);
  }
});

/***/ }),

/***/ "./Buttons.js":
/*!********************!*\
  !*** ./Buttons.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Button = __webpack_require__(/*! ./Button */ "./Button.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRButtons',
  getInitialState: function getInitialState() {
    return {
      loading: true
    };
  },
  __itemClick: function __itemClick(event, item, index) {
    event.data = item;
    event.index = index;
    event.sender = this;
    this.props.onClick && this.props.onClick(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement(Button, _extends({}, item, {
      key: index,
      onClick: function onClick(event) {
        return _this.__itemClick(event, item, index);
      }
    }));
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished() {
    this.setState({
      loading: false
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-buttons", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Button': __webpack_require__(/*! ./Button */ "./Button.js"),
  'Buttons': __webpack_require__(/*! ./Buttons */ "./Buttons.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIlNWR0ljb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInR5cGUiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiX19jbGljayIsImV2ZW50IiwicHJvcHMiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0Iiwib3duZXIiLCJvbkNsaWNrIiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsImlzSGlkZGVuIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0dXMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiaWNvbiIsImNoaWxkcmVuIiwiQnV0dG9uIiwibG9hZGVyIiwiX19pdGVtQ2xpY2siLCJpdGVtIiwiaW5kZXgiLCJkYXRhIiwic2VuZGVyIiwiX19pdGVtUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFB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QUksQ0FBQ3VCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixZQUFyQixFQUFtQyxLQUFLVixLQUFMLENBQVdOLFNBQTlDLENBQWhCO0FBQTBFLFdBQUssRUFBRSxLQUFLTSxLQUFMLENBQVcwQjtBQUE1RixvQkFDQyxvQkFBQyxJQUFELENBQU0sS0FBTixDQUFZLFFBQVo7QUFBcUIsVUFBSSxFQUFFLEtBQUsxQixLQUFMLENBQVdxQixJQUF0QztBQUE0QyxnQkFBVSxFQUFFLEtBQUtFLFlBQTdEO0FBQTJFLGVBQVMsRUFBRSxLQUFLQyxXQUEzRjtBQUF3RyxnQkFBVSxFQUFFLEtBQUtDO0FBQXpILE1BREQsRUFFRSxLQUFLWixLQUFMLENBQVdoQixPQUFYLGlCQUFzQixvQkFBQyxNQUFELENBQVEsTUFBUjtBQUFlLGFBQU8sRUFBQyxLQUF2QjtBQUE2QixZQUFNLEVBQUMsUUFBcEM7QUFBNkMsVUFBSSxFQUFDLFlBQWxEO0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUFqQ2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFlBQVVILG1CQUFPLENBQUMsNkJBQUQsQ0FESjtBQUViLGFBQVdBLG1CQUFPLENBQUMsK0JBQUQ7QUFGTCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSQnV0dG9uJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHR5cGU6ICdidXR0b24nICAvL2J1dHRvbiwgcmVzZXQsIHN1Ym1pdFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRldmVudC5vd25lciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB2YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIHsuLi50aGlzLnByb3BzfSBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuc3RhdHVzLCAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR8fHRoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1sb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5pY29uICYmIDxTVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbn0gLz59XG5cdFx0XHRcdHt0aGlzLnByb3BzLnZhbHVlICYmIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPn1cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkJ1dHRvbnMnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8QnV0dG9uIHsuLi5pdGVtfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25zXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQnV0dG9uJzogcmVxdWlyZSgnLi9CdXR0b24nKSxcbiAgICAnQnV0dG9ucyc6IHJlcXVpcmUoJy4vQnV0dG9ucycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=