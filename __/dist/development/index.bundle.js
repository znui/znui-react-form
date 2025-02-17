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

/***/ "./AjaxForm.js":
/*!*********************!*\
  !*** ./AjaxForm.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");
var FormGroup = __webpack_require__(/*! ./FormGroup */ "./FormGroup.js");
var FormButtons = __webpack_require__(/*! ./FormButtons */ "./FormButtons.js");
var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");
module.exports = React.createClass({
  displayName: 'ZRAjaxForm',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      action: null,
      method: "post",
      encType: "multipart/form-data",
      buttons: [{
        value: '取消',
        type: 'cancel',
        icon: 'fa-times'
      }, {
        value: '提交',
        type: 'submit',
        icon: 'fa-edit'
      }]
    };
  },
  getInitialState: function getInitialState() {
    return _defineProperty(_defineProperty(_defineProperty({
      validateErrorMessage: null,
      submitting: false,
      hiddens: {},
      value: {}
    }, "value", zn.extend({}, this.props.value)), "data", []), "refs", {});
  },
  componentDidMount: function componentDidMount() {
    this.props.onDidMount && this.props.onDidMount(this);
  },
  componentWillUnmount: function componentWillUnmount() {},
  cancel: function cancel() {
    this.props.onCancel && this.props.onCancel(this);
  },
  reset: function reset() {
    this.setState({
      submitting: false,
      hiddens: {}
    });
    var _refs = this.refs,
      _ref = null;
    for (var key in _refs) {
      _ref = _refs[key];
      if (!_ref) {
        continue;
      }
      _ref.reset();
    }
    return this;
  },
  __onReset: function __onReset() {
    this.props.onReset && this.props.onReset();
  },
  getValue: function getValue(callback) {
    var _value = this.validate(callback);
    if (!_value) {
      return false;
    }
    _value = zn.extend(_value, this.state.hiddens);
    _value = zn.extend(_value, this.props.hiddens);
    if (this.props.merge) {
      var _temp = {};
      _temp[this.props.merge] = _value;
      _value = _temp;
    }
    return zn.extend(_value, this.props.exts), _value;
  },
  __isApiValue: function __isApiValue(value) {
    if (value && _typeof(value) == 'object' && value.__api__) {
      return true;
    }
    return false;
  },
  setValue: function setValue(value, callback) {
    if (!value) {
      return this;
    }
    if (this.__isApiValue(value) && this.state.value) {
      return this.state.value.call(value, callback), this;
    }
    if (zn.is(value, 'object')) {
      for (var key in this.state.hiddens) {
        this.state.hiddens[key] = value[key] || this.state.hiddens[key];
      }
      var _refs = this.refs,
        _ref = null,
        _value = null,
        _text = null;
      for (var key in _refs) {
        _ref = _refs[key];
        if (!_ref) {
          continue;
        }
        _value = value[key];
        _text = value[key + '_convert'];
        if (_value !== null) {
          _ref.setValue(_value, _text);
        }
      }
    }
    return this;
  },
  submit: function submit(callback, event) {
    var _value = this.getValue();
    if (!_value) {
      return false;
    }
    if (true) {
      zn.debug('AjaxForm submit Data: ', _value);
    }
    var _return = this.props.onSubmitBefore && this.props.onSubmitBefore(_value, this, event);
    if (_return === false) {
      return false;
    }
    _value = _return || _value;
    var _submitApi = zn.extend({
        url: this.props.action,
        method: this.props.method
      }, this.props.submitApi),
      _method = this.props.method || _submitApi.method || 'post',
      _key = _method.toLocaleLowerCase() == 'get' ? 'params' : 'data';
    if (!_submitApi[_key]) {
      _submitApi[_key] = {};
    }
    zn.extend(_submitApi[_key], _value);
    if (!_submitApi.url || !_submitApi[_key]) {
      if (true) {
        zn.error('The form action is null, data: ', _value);
      }
      return false;
    }
    if (this.state.submit) {
      this.state.submit.call(_submitApi, callback);
    } else {
      this.state.submit = zn.data.create(_submitApi, {
        before: function (sender, data) {
          if (this.__isMounted) {
            this.setState({
              submitting: true
            });
          }
          this.props.onSubmiting && this.props.onSubmiting(data, this);
        }.bind(this),
        after: function (sender, data) {
          if (this.__isMounted) {
            this.setState({
              submitting: false
            });
          }
          this.props.onSubmited && this.props.onSubmited(data, this);
        }.bind(this),
        success: function (sender, data) {
          if (data.code == 200) {
            this.props.onSubmitSuccess && this.props.onSubmitSuccess(data.result, this);
          } else {
            this.props.onSubmitError && this.props.onSubmitError(data, this);
          }
        }.bind(this),
        error: function (sender, xhr) {
          this.props.onSubmitError && this.props.onSubmitError(xhr, this);
        }.bind(this)
      }, this.props.context);
    }
  },
  __submit__: function __submit__(event, buttons) {
    this.submit(null, event);
  },
  __onSubmit: function __onSubmit() {
    var _return = this.props.onSubmit && this.props.onSubmit();
    if (_return === false) {
      return false;
    }
  },
  validate: function validate(callback) {
    var _refs = this.state.refs,
      _ref = null,
      _data = {},
      _value = null,
      _key = null;
    for (var key in _refs) {
      _ref = _refs[key];
      _key = _ref.props.valueKey || key;
      if (!_ref || !_key || !_ref.props.name) {
        continue;
      }
      if (!_ref.props.submitted || _ref.props.editable === false) {
        continue;
      }
      if (_ref.props.required && _ref.validate) {
        _value = _ref.validate(callback);
        if (_value == null) {
          return false;
        }
      }
      if (_ref.getValue) {
        _value = _ref.getValue(callback);
      }
      if (_ref.props.required && _value == null) {
        return false;
      }
      if (_value == null) {
        continue;
      }
      _data[_key] = _value;
    }
    return _data;
  },
  __parseItemValue: function __parseItemValue(value) {
    if (value.indexOf("javascript:") == 0) {
      return eval(value);
    }
    return value;
  },
  __onItemInputChange: function __onItemInputChange(event, input, formitem) {
    event.validateValue = formitem.validate();
    return this.props.onInputChange && this.props.onInputChange(event, input, formitem, this);
  },
  __onValidateError: function __onValidateError(errMessage, formItem) {
    this.setState({
      validateErrorMessage: '输入框 “' + formItem.props.label + '” ' + errMessage
    });
  },
  __onValidateSuccess: function __onValidateSuccess() {
    this.setState({
      validateErrorMessage: null
    });
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;
    if (item.type == 'ZRHidden') {
      return this.state.hiddens[item.name] = item.value != null ? this.__parseItemValue(item.value) : null, null;
    }
    if (item.input && (item.input == 'zr.form.FormTitle' || item.input.displayName == 'ZRFormTitle')) {
      if (typeof item.input == 'string') {
        item.input = zn.path(window, item.input);
      }
      return /*#__PURE__*/React.createElement(item.input, _extends({
        key: index
      }, item));
    }
    var _name = item.name,
      _value = this.state.value || {},
      _value_ = _value[_name],
      _text_ = _value[_name + '_convert'];
    if (_value_ == null && item.value != null) {
      _value_ = item.value;
    }
    if (_text_ == null && item.text != null) {
      _text_ = item.text;
    }
    return /*#__PURE__*/React.createElement(FormItem, _extends({
      context: this.props.context
    }, item, {
      key: index,
      ref: function ref(_ref3) {
        if (_name) {
          _this.state.refs[_name] = _ref3;
        }
      },
      value: _value_,
      text: _text_,
      index: index,
      form: this,
      onValidateError: this.__onValidateError,
      onValidateSuccess: this.__onValidateSuccess,
      onInputChange: item.onInputChange || this.__onItemInputChange,
      onInputEnter: item.onInputEnter || this.submit
    }));
  },
  __renderPropsData: function __renderPropsData() {
    var _data = this.props.data;
    if (zn.is(_data, 'function')) {
      _data = _data.call(null, this);
    }
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: _data,
      itemRender: this.__itemRender,
      responseHandler: this.props.responseHandler
    });
  },
  __renderStateData: function __renderStateData() {
    var _data = this.state.data;
    if (zn.is(_data, 'function')) {
      _data = _data.call(null, this);
    }
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: _data,
      itemRender: this.__itemRender,
      responseHandler: this.props.responseHandler
    });
  },
  __renderGroups: function __renderGroups() {
    var _this2 = this;
    if (!this.props.groups) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "groups"
    }, this.props.groups.map(function (group) {
      return /*#__PURE__*/React.createElement(FormGroup, _extends({}, group, {
        itemRender: _this2.__itemRender,
        responseHandler: _this2.props.responseHandler
      }));
    }));
  },
  __renderButtons: function __renderButtons() {
    if (!this.props.buttons) {
      return null;
    }
    return /*#__PURE__*/React.createElement(FormButtons, {
      data: this.props.buttons,
      onSubmit: this.__submit__,
      onReset: this.reset,
      onCancel: this.cancel
    });
  },
  __onValueLoading: function __onValueLoading(data) {
    this.setState({
      submitting: true
    });
    this.props.onValueLoading && this.props.onValueLoading(data, this);
  },
  __onValueLoaded: function __onValueLoaded(data) {
    this.setState({
      value: data,
      submitting: false
    });
    this.props.onValueLoaded && this.props.onValueLoaded(data, this);
  },
  __onValueLoadError: function __onValueLoadError(xhr) {
    this.setState({
      submitting: false
    });
    this.props.onValueLoadError && this.props.onValueLoadError(xhr);
    popup.notifier.error("Error: " + xhr.message);
  },
  __renderValidateError: function __renderValidateError() {
    if (this.state.validateErrorMessage) {
      return /*#__PURE__*/React.createElement("div", {
        className: "zr-form-validate-error"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "times",
        className: "svg-inline--fa fa-times fa-w-11 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      })), /*#__PURE__*/React.createElement("span", null, this.state.validateErrorMessage));
    }
  },
  __render: function __render() {
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, this.__renderPropsData(), this.__renderStateData(), this.__renderGroups(), this.__renderValidateError(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "\u63D0\u4EA4\u4E2D ... ")), this.props.disabled && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-disabled"
    }));
  },
  __loadingRender: function __loadingRender() {
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Loading ... ")));
  },
  render: function render() {
    var _this3 = this;
    this.state.hiddens = {};
    if (this.__isApiValue(this.props.value)) {
      return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
        data: this.props.value,
        loadingRender: this.__loadingRender,
        onLoading: this.__onValueLoading,
        onFinished: this.__onValueLoaded,
        onError: this.__onValueLoadError,
        onDataCreated: function onDataCreated(value) {
          return _this3.state.value = value;
        },
        dataRender: this.__render
      });
    }
    if (this.props.value && _typeof(this.props.value) == 'object') {
      this.state.value = this.props.value;
    }
    return this.__render();
  }
});

/***/ }),

/***/ "./Form.js":
/*!*****************!*\
  !*** ./Form.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var AjaxForm = __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js");
var NativeForm = __webpack_require__(/*! ./NativeForm */ "./NativeForm.js");
module.exports = React.createClass({
  displayName: 'ZRForm',
  render: function render() {
    if (this.props.type == 'Native') {
      return /*#__PURE__*/React.createElement(NativeForm, this.props);
    } else {
      return /*#__PURE__*/React.createElement(AjaxForm, this.props);
    }
  }
});

/***/ }),

/***/ "./FormButtons.js":
/*!************************!*\
  !*** ./FormButtons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var button = __webpack_require__(/*! znui-react-button */ "znui-react-button");
module.exports = React.createClass({
  displayName: 'ZRFormButtons',
  __buttonClick: function __buttonClick(event, buttons) {
    var _data = event.data;
    switch (_data.type) {
      case 'reset':
        this.props.onReset && this.props.onReset(event, buttons);
        break;
      case 'submit':
        this.props.onSubmit && this.props.onSubmit(event, buttons);
        break;
      case 'cancel':
        this.props.onCancel && this.props.onCancel(event, buttons);
        break;
      default:
        this.props.onClick && this.props.onClick(event, buttons);
        break;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(button.Buttons, _extends({}, this.props, {
      className: znui.react.classname('zr-form-buttons', this.props.className),
      style: this.props.style,
      onClick: this.__buttonClick
    }));
  }
});

/***/ }),

/***/ "./FormGroup.js":
/*!**********************!*\
  !*** ./FormGroup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");
var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");
var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");
module.exports = React.createClass({
  displayName: 'ZRFormGroup',
  getInitialState: function getInitialState() {
    return {
      loading: true
    };
  },
  __itemRender: function __itemRender(item, index) {
    var _return = this.props.itemRender && this.props.itemRender(item, index);
    if (_return === null) {
      _return = /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
        key: index
      }));
    }
    return _return;
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
  __onError: function __onError(xhr) {
    this.setState({
      loading: false
    });
    popup.notifier.error("Error: " + xhr.message);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-form-group", this.props.className),
      style: znui.react.style(this.props.style)
    }, /*#__PURE__*/React.createElement(znui.react.DataView, _extends({}, this.props, {
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished,
      onError: this.__onError
    })), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./FormItem.js":
/*!*********************!*\
  !*** ./FormItem.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var FormItem = React.createClass({
  displayName: 'FormItem',
  getDefaultProps: function getDefaultProps() {
    return {
      submitted: true,
      disabled: false,
      required: false,
      hint: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      status: 'default',
      value: this.props.value,
      text: this.props.text,
      errorMessage: null
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text
    });
  },
  getValue: function getValue(callback) {
    return this.state.value;
  },
  validate: function validate(callback) {
    var _value = this.state.value,
      _error = this.props.error || "数据验证错误";
    if (this.props.required && (_value === '' || _value == null)) {
      this.setState({
        status: 'error',
        errorMessage: _error
      });
      this.props.onValidateError && this.props.onValidateError(_error, this);
      return;
    }
    var _callback = callback && callback(_value, this);
    if (_callback === false) {
      this.setState({
        status: 'error',
        errorMessage: _error
      });
      this.props.onValidateError && this.props.onValidateError(_error, this);
      return;
    }
    this.setState({
      status: 'success',
      errorMessage: null
    });
    this.props.onValidateSuccess && this.props.onValidateSuccess(this);
    this._timeout = window.setTimeout(function () {
      if (this.__isMounted && this.setState) {
        this.setState({
          status: 'default'
        });
      }
    }.bind(this), 1000);
    return _value;
  },
  __onInputChange: function __onInputChange(event, input) {
    if (event.validate === false) {
      return this.state.value = null, false;
    }
    event.formitem = this;
    this.state.value = event.value;
    var _return = this.props.onChange && this.props.onChange(event, input, this);
    if (_return === false) {
      return false;
    }
    return this.props.onInputChange && this.props.onInputChange(event, input, this);
  },
  __onInputEnter: function __onInputEnter(event, input) {
    if (event.validate === false) {
      return this.state.value = null, false;
    }
    event.formitem = this;
    var _return = this.props.onEnter && this.props.onEnter(event, input, this);
    if (_return === false) {
      return false;
    }
    this.state.value = event.value;
    this.props.onInputEnter && this.props.onInputEnter(event, input, this);
  },
  __renderHeader: function __renderHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zrfi-header"
    }, this.props.icon && /*#__PURE__*/React.createElement("span", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + this.props.icon
    })), this.props.label && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.label));
  },
  __valueRender: function __valueRender(props) {
    switch (props.type) {
      default:
        return /*#__PURE__*/React.createElement("span", {
          className: "item-value"
        }, props.text || props.value);
    }
  },
  __renderBody: function __renderBody() {
    var _inputProps = zn.extend({}, this.props, this.props.inputProps, {
      className: znui.react.classname('body-input', this.props.inputClassName),
      value: this.state.value,
      text: this.state.text,
      onChange: this.__onInputChange,
      onEnter: this.__onInputEnter
    });
    var _input = this.props.input;
    if (_input && typeof _input == 'function' && !_input.prototype.isReactComponent) {
      _input = _input.call(this.props.context || null, this, _inputProps);
    }
    var _inputElement = znui.react.createReactElement(_input, _inputProps, this.props.context);
    /*
    if(_inputProps.editable == false && _inputProps.value != null) {
    	_inputElement = this.__valueRender(_inputProps);
    }*/
    return /*#__PURE__*/React.createElement("div", {
      className: "zrfi-body",
      "data-zr-popup-tooltip": this.state.errorMessage
    }, _inputElement, this.props.suffix && /*#__PURE__*/React.createElement("span", {
      className: "suffix"
    }, this.props.suffix));
  },
  __renderContent: function __renderContent() {
    var _renderProps = zn.extend({}, this.props, {
      className: znui.react.classname('render', this.props.renderClassName),
      value: this.state.value,
      text: this.state.text,
      onChange: this.__onInputChange,
      onEnter: this.__onInputEnter
    });
    var _render = this.props.render;
    if (_render && typeof _render == 'function' && !_render.prototype.isReactComponent) {
      _render = _render.call(null, this, _renderProps);
    }
    var _renderElement = znui.react.createReactElement(_render, _renderProps);
    if (_renderElement) {
      return _renderElement;
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.__renderHeader(), this.__renderBody(), !!this.props.hint && /*#__PURE__*/React.createElement("div", {
        className: "zrfi-hint"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "info-circle",
        className: "info-icon svg-inline--fa fa-info-circle fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
      })), this.props.hint));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname('zr-form-item', this.props.className),
      "data-disabled": this.props.disabled,
      "data-required": this.props.required,
      "data-layout": this.props.layout,
      "data-size": this.props.size,
      "data-status": this.state.status
    }, this.__renderContent());
  }
});
module.exports = FormItem;

/***/ }),

/***/ "./FormItemValue.js":
/*!**************************!*\
  !*** ./FormItemValue.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRFormItemValue',
  __render: function __render() {
    switch (this.props.type) {}
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-value', this.props.className),
      style: this.props.style
    }, this.__render());
  }
});

/***/ }),

/***/ "./FormItems.js":
/*!**********************!*\
  !*** ./FormItems.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRFormItems',
  __render: function __render() {},
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-value', this.props.className),
      style: this.props.style
    }, this.props.data.map(function () {}));
  }
});

/***/ }),

/***/ "./FormPanel.js":
/*!**********************!*\
  !*** ./FormPanel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var AjaxForm = __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js");
var NativeForm = __webpack_require__(/*! ./NativeForm */ "./NativeForm.js");
module.exports = React.createClass({
  displayName: 'ZRFormPanel',
  __render: function __render() {
    if (this.props.type == 'Native') {
      return /*#__PURE__*/React.createElement(NativeForm, this.props);
    } else {
      return /*#__PURE__*/React.createElement(AjaxForm, this.props);
    }
  },
  __renderTitle: function __renderTitle() {
    var _title = this.props.titleRender && this.props.titleRender();
    return _title || this.props.title;
  },
  render: function render() {
    var _title = this.__renderTitle();
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-panel', this.props.className),
      style: this.props.style
    }, !!_title && /*#__PURE__*/React.createElement("div", {
      className: "panel-title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "panel-content"
    }, this.__render()));
  }
});

/***/ }),

/***/ "./FormTitle.js":
/*!**********************!*\
  !*** ./FormTitle.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRFormTitle',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-title', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("span", {
      className: "zf-title"
    }, this.props.label));
  }
});

/***/ }),

/***/ "./Hint.js":
/*!*****************!*\
  !*** ./Hint.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRHint',
  render: function render() {
    var _value = this.props.value || this.props.text;
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-hint', this.props.className),
      style: this.props.style
    }, !!this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "hint-title"
    }, this.props.title), !!_value && /*#__PURE__*/React.createElement("div", {
      className: "hint-value",
      dangerouslySetInnerHTML: {
        __html: _value
      }
    }));
  }
});

/***/ }),

/***/ "./Label.js":
/*!******************!*\
  !*** ./Label.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRLabel',
  render: function render() {
    var _label = this.props.text || this.props.value;
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-label', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "label",
      dangerouslySetInnerHTML: {
        __html: _label
      }
    }));
  }
});

/***/ }),

/***/ "./NativeForm.js":
/*!***********************!*\
  !*** ./NativeForm.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");
var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");
var FormGroup = __webpack_require__(/*! ./FormGroup */ "./FormGroup.js");
var FormButtons = __webpack_require__(/*! ./FormButtons */ "./FormButtons.js");
module.exports = React.createClass({
  displayName: 'ZRNativeForm',
  getDefaultProps: function getDefaultProps() {
    return {
      action: null,
      autoComplete: 'off',
      method: "post",
      name: null,
      noValidate: null,
      target: '_self',
      encType: "multipart/form-data"
    };
  },
  getInitialState: function getInitialState() {
    return {
      submitting: false,
      value: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.__initValue();
  },
  __initValue: function __initValue() {
    var _value = this.props.value;
    if (_value) {
      if (_value.__api__) {
        this.__initApiValue(_value);
      } else {
        this.__initObjectValue(_value);
      }
    }
  },
  __initApiValue: function __initApiValue(value) {
    var _events = this.props.events || {},
      _before = _events.before,
      _after = _events.after;
    this.state.data = zn.data.create(value, zn.extend(_events, {
      before: function (sender, data) {
        this.setState({
          submitting: true
        });
        this.props.onValueLoading && this.props.onValueLoading(data, this);
        _before && _before(sender, data);
      }.bind(this),
      after: function (sender, data) {
        this.setState({
          submitting: false,
          value: data
        });
        this.props.onValueFinished && this.props.onValueFinished(data, this);
        _after && _after(sender, data);
      }.bind(this)
    }), this.props.context);
  },
  __initObjectValue: function __initObjectValue(value) {
    this.props.onValueLoading && this.props.onValueLoading(value, this);
    this.setState({
      value: value
    });
    this.props.onValueFinished && this.props.onValueFinished(value, this);
  },
  cancel: function cancel() {},
  reset: function reset() {
    this.setState({
      submitting: false,
      value: {}
    });
    ReactDOM.findDOMNode(this).reset();
  },
  __onReset: function __onReset() {
    this.props.onReset && this.props.onReset();
  },
  submit: function submit(event, btn) {
    this.setState({
      submitting: true
    });
  },
  __onSubmit: function __onSubmit(event) {
    var _return = this.props.onSubmit && this.props.onSubmit(event, this);
    if (_return === false) {
      return false;
    }
  },
  validate: function validate() {},
  __onItemChange: function __onItemChange() {
    this.props.onItemChange && this.props.onItemChange();
  },
  __onItemInputChange: function __onItemInputChange() {
    this.props.onItemInputChange && this.props.onItemInputChange();
  },
  __itemRender: function __itemRender(item, index) {
    return /*#__PURE__*/React.createElement(FormItem, _extends({
      key: index
    }, item, {
      value: this.state.value[item.name],
      text: this.state.value[item.name + "_convert"],
      onChange: this.__onItemChange,
      onInputChange: this.__onItemInputChange
    }));
  },
  __renderItems: function __renderItems() {
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: this.props.data,
      itemRender: this.__itemRender
    });
  },
  __renderGroups: function __renderGroups() {
    var _groups = this.props.groups || [];
    if (!_groups.length) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "groups"
    }, _groups.map(function (group) {
      return /*#__PURE__*/React.createElement(FormGroup, _extends({}, group, {
        itemRender: this.__itemRender
      }));
    }.bind(this)));
  },
  __renderButtons: function __renderButtons() {
    if (!this.props.buttons) {
      return null;
    }
    return /*#__PURE__*/React.createElement(FormButtons, {
      data: this.props.buttons,
      onSubmit: this.submit,
      onReset: this.reset,
      onCancel: this.cancel
    });
  },
  render: function render() {
    var _hiddens = this.props.hiddens || {};
    return /*#__PURE__*/React.createElement("form", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-native-form', this.props.className),
      action: this.props.action,
      autoComplete: this.props.autoComplete,
      method: this.props.method,
      name: this.props.name,
      noValidate: this.props.noValidate,
      target: this.props.target,
      encType: this.props.encType,
      onReset: this.__onReset,
      onSubmit: this.__onSubmit
    }, Object.keys(_hiddens).map(function (hidden, index) {
      return /*#__PURE__*/React.createElement("input", {
        key: 'hidden_' + hidden,
        type: "hidden",
        name: hidden,
        value: _hiddens[hidden]
      });
    }), this.__renderItems(), this.__renderGroups(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Submitting ...")));
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
  AjaxForm: __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js"),
  Form: __webpack_require__(/*! ./Form */ "./Form.js"),
  FormButtons: __webpack_require__(/*! ./FormButtons */ "./FormButtons.js"),
  FormGroup: __webpack_require__(/*! ./FormGroup */ "./FormGroup.js"),
  FormItem: __webpack_require__(/*! ./FormItem */ "./FormItem.js"),
  FormItems: __webpack_require__(/*! ./FormItems */ "./FormItems.js"),
  FormItemValue: __webpack_require__(/*! ./FormItemValue */ "./FormItemValue.js"),
  FormTitle: __webpack_require__(/*! ./FormTitle */ "./FormTitle.js"),
  FormPanel: __webpack_require__(/*! ./FormPanel */ "./FormPanel.js"),
  NativeForm: __webpack_require__(/*! ./NativeForm */ "./NativeForm.js"),
  Label: __webpack_require__(/*! ./Label */ "./Label.js"),
  Hint: __webpack_require__(/*! ./Hint */ "./Hint.js")
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ "znui-react-button":
/*!*************************!*\
  !*** external "button" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["button"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ }),

/***/ "znui-react-popup":
/*!************************!*\
  !*** external "popup" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["popup"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9IaW50LmpzIiwid2VicGFjazovLy8uL0xhYmVsLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkZvcm1JdGVtIiwiRm9ybUdyb3VwIiwiRm9ybUJ1dHRvbnMiLCJwb3B1cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJfZGVmaW5lUHJvcGVydHkiLCJ2YWxpZGF0ZUVycm9yTWVzc2FnZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiem4iLCJleHRlbmQiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25EaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJyZWZzIiwiX3JlZiIsImtleSIsIl9fb25SZXNldCIsIm9uUmVzZXQiLCJnZXRWYWx1ZSIsImNhbGxiYWNrIiwiX3ZhbHVlIiwidmFsaWRhdGUiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX3R5cGVvZiIsIl9fYXBpX18iLCJzZXRWYWx1ZSIsImNhbGwiLCJpcyIsIl90ZXh0Iiwic3VibWl0IiwiZXZlbnQiLCJwcm9jZXNzIiwiZGVidWciLCJfcmV0dXJuIiwib25TdWJtaXRCZWZvcmUiLCJfc3VibWl0QXBpIiwidXJsIiwic3VibWl0QXBpIiwiX21ldGhvZCIsIl9rZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVycm9yIiwiZGF0YSIsImNyZWF0ZSIsImJlZm9yZSIsInNlbmRlciIsIl9faXNNb3VudGVkIiwib25TdWJtaXRpbmciLCJiaW5kIiwiYWZ0ZXIiLCJvblN1Ym1pdGVkIiwic3VjY2VzcyIsImNvZGUiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJyZXN1bHQiLCJvblN1Ym1pdEVycm9yIiwieGhyIiwiY29udGV4dCIsIl9fc3VibWl0X18iLCJfX29uU3VibWl0Iiwib25TdWJtaXQiLCJfZGF0YSIsInZhbHVlS2V5IiwibmFtZSIsInN1Ym1pdHRlZCIsImVkaXRhYmxlIiwicmVxdWlyZWQiLCJfX3BhcnNlSXRlbVZhbHVlIiwiaW5kZXhPZiIsImV2YWwiLCJfX29uSXRlbUlucHV0Q2hhbmdlIiwiaW5wdXQiLCJmb3JtaXRlbSIsInZhbGlkYXRlVmFsdWUiLCJvbklucHV0Q2hhbmdlIiwiX19vblZhbGlkYXRlRXJyb3IiLCJlcnJNZXNzYWdlIiwiZm9ybUl0ZW0iLCJsYWJlbCIsIl9fb25WYWxpZGF0ZVN1Y2Nlc3MiLCJfX2l0ZW1SZW5kZXIiLCJpdGVtIiwiaW5kZXgiLCJfdGhpcyIsInBhdGgiLCJ3aW5kb3ciLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJfbmFtZSIsIl92YWx1ZV8iLCJfdGV4dF8iLCJ0ZXh0IiwicmVmIiwiZm9ybSIsIm9uVmFsaWRhdGVFcnJvciIsIm9uVmFsaWRhdGVTdWNjZXNzIiwib25JbnB1dEVudGVyIiwiX19yZW5kZXJQcm9wc0RhdGEiLCJpdGVtUmVuZGVyIiwicmVzcG9uc2VIYW5kbGVyIiwiX19yZW5kZXJTdGF0ZURhdGEiLCJfX3JlbmRlckdyb3VwcyIsIl90aGlzMiIsImdyb3VwcyIsImNsYXNzTmFtZSIsIm1hcCIsImdyb3VwIiwiX19yZW5kZXJCdXR0b25zIiwiX19vblZhbHVlTG9hZGluZyIsIm9uVmFsdWVMb2FkaW5nIiwiX19vblZhbHVlTG9hZGVkIiwib25WYWx1ZUxvYWRlZCIsIl9fb25WYWx1ZUxvYWRFcnJvciIsIm9uVmFsdWVMb2FkRXJyb3IiLCJub3RpZmllciIsIm1lc3NhZ2UiLCJfX3JlbmRlclZhbGlkYXRlRXJyb3IiLCJmb2N1c2FibGUiLCJyb2xlIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJfX3JlbmRlciIsInN0eWxlIiwicmVhY3QiLCJjbGFzc25hbWUiLCJfX2xvYWRpbmdSZW5kZXIiLCJyZW5kZXIiLCJfdGhpczMiLCJEYXRhTGlmZWN5Y2xlIiwibG9hZGluZ1JlbmRlciIsIm9uTG9hZGluZyIsIm9uRmluaXNoZWQiLCJvbkVycm9yIiwib25EYXRhQ3JlYXRlZCIsImRhdGFSZW5kZXIiLCJBamF4Rm9ybSIsIk5hdGl2ZUZvcm0iLCJidXR0b24iLCJfX2J1dHRvbkNsaWNrIiwib25DbGljayIsIkJ1dHRvbnMiLCJsb2FkZXIiLCJsb2FkaW5nIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJfX29uRXJyb3IiLCJEYXRhVmlldyIsIkxvYWRlciIsImNvbnRlbnQiLCJzaXplIiwibGF5b3V0IiwiaGludCIsInN0YXR1cyIsImVycm9yTWVzc2FnZSIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Vycm9yIiwiX2NhbGxiYWNrIiwic2V0VGltZW91dCIsIl9fb25JbnB1dENoYW5nZSIsIm9uQ2hhbmdlIiwiX19vbklucHV0RW50ZXIiLCJvbkVudGVyIiwiX19yZW5kZXJIZWFkZXIiLCJfX3ZhbHVlUmVuZGVyIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dFByb3BzIiwiaW5wdXRDbGFzc05hbWUiLCJfaW5wdXQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX2lucHV0RWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInN1ZmZpeCIsIl9fcmVuZGVyQ29udGVudCIsIl9yZW5kZXJQcm9wcyIsInJlbmRlckNsYXNzTmFtZSIsIl9yZW5kZXIiLCJfcmVuZGVyRWxlbWVudCIsIkZyYWdtZW50IiwiX19yZW5kZXJUaXRsZSIsIl90aXRsZSIsInRpdGxlUmVuZGVyIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9sYWJlbCIsIlJlYWN0RE9NIiwiYXV0b0NvbXBsZXRlIiwibm9WYWxpZGF0ZSIsInRhcmdldCIsIl9faW5pdFZhbHVlIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiX2FmdGVyIiwib25WYWx1ZUZpbmlzaGVkIiwiZmluZERPTU5vZGUiLCJidG4iLCJfX29uSXRlbUNoYW5nZSIsIm9uSXRlbUNoYW5nZSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19yZW5kZXJJdGVtcyIsIl9ncm91cHMiLCJsZW5ndGgiLCJfaGlkZGVucyIsIk9iamVjdCIsImtleXMiLCJoaWRkZW4iLCJGb3JtIiwiRm9ybUl0ZW1zIiwiRm9ybUl0ZW1WYWx1ZSIsIkZvcm1UaXRsZSIsIkZvcm1QYW5lbCIsIkxhYmVsIiwiSGludCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QmdQLFNBQVMsRUFBRWhQLG1CQUFPLENBQUMsbUNBQWEsQ0FBQztFQUNqQ2lQLGFBQWEsRUFBRWpQLG1CQUFPLENBQUMsMkNBQWlCLENBQUM7RUFDekNrUCxTQUFTLEVBQUVsUCxtQkFBTyxDQUFDLG1DQUFhLENBQUM7RUFDakNtUCxTQUFTLEVBQUVuUCxtQkFBTyxDQUFDLG1DQUFhLENBQUM7RUFDakNtSyxVQUFVLEVBQUVuSyxtQkFBTyxDQUFDLHFDQUFjLENBQUM7RUFDbkNvUCxLQUFLLEVBQUVwUCxtQkFBTyxDQUFDLDJCQUFTLENBQUM7RUFDekJxUCxJQUFJLEVBQUVyUCxtQkFBTyxDQUFDLHlCQUFRO0FBQzFCLENBQUMsQzs7Ozs7Ozs7Ozs7QUNiRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWpheEZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhLXRpbWVzJyB9LFxuXHRcdFx0XHR7IHZhbHVlOiAn5o+Q5LqkJywgdHlwZTogJ3N1Ym1pdCcsIGljb246ICdmYS1lZGl0JyB9XG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWxpZGF0ZUVycm9yTWVzc2FnZTogbnVsbCxcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHZhbHVlOiB6bi5leHRlbmQoeyB9LCB0aGlzLnByb3BzLnZhbHVlKSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0cmVmczogeyB9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMucHJvcHMub25EaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uRGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzKTtcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRoaWRkZW5zOiB7fVxuXHRcdH0pO1xuXHRcdHZhciBfcmVmcyA9IHRoaXMucmVmcyxcblx0XHRcdF9yZWYgPSBudWxsO1xuXG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0X3JlZi5yZXNldCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMuc3RhdGUuaGlkZGVucyk7XG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5oaWRkZW5zKTtcblx0XHRpZih0aGlzLnByb3BzLm1lcmdlKXtcblx0XHRcdHZhciBfdGVtcCA9IHt9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy5tZXJnZV0gPSBfdmFsdWU7XG5cdFx0XHRfdmFsdWUgPSBfdGVtcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5leHRzKSwgX3ZhbHVlO1xuXHR9LFxuXHRfX2lzQXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHZhbHVlLl9fYXBpX18pe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFjayl7XG5cdFx0aWYoIXZhbHVlKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZih0aGlzLl9faXNBcGlWYWx1ZSh2YWx1ZSkgJiYgdGhpcy5zdGF0ZS52YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jyl7XG5cdFx0XHR6bi5kZWJ1ZygnQWpheEZvcm0gc3VibWl0IERhdGE6ICcsIF92YWx1ZSk7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0QmVmb3JlICYmIHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUoX3ZhbHVlLCB0aGlzLCBldmVudCk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdF92YWx1ZSA9IF9yZXR1cm4gfHwgX3ZhbHVlO1xuXHRcdHZhciBfc3VibWl0QXBpID0gem4uZXh0ZW5kKHsgdXJsOiB0aGlzLnByb3BzLmFjdGlvbiwgbWV0aG9kOiB0aGlzLnByb3BzLm1ldGhvZCB9LCB0aGlzLnByb3BzLnN1Ym1pdEFwaSksXG5cdFx0XHRfbWV0aG9kID0gdGhpcy5wcm9wcy5tZXRob2QgfHwgX3N1Ym1pdEFwaS5tZXRob2QgfHwgJ3Bvc3QnLFxuXHRcdFx0X2tleSA9IF9tZXRob2QudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnZ2V0JyA/ICdwYXJhbXMnOiAnZGF0YSc7XG5cblx0XHRpZighX3N1Ym1pdEFwaVtfa2V5XSkge1xuXHRcdFx0X3N1Ym1pdEFwaVtfa2V5XSA9IHt9O1xuXHRcdH1cblx0XHR6bi5leHRlbmQoX3N1Ym1pdEFwaVtfa2V5XSwgX3ZhbHVlKTtcblx0XHRpZighX3N1Ym1pdEFwaS51cmwgfHwgIV9zdWJtaXRBcGlbX2tleV0pe1xuXHRcdFx0aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jyl7XG5cdFx0XHRcdHpuLmVycm9yKCdUaGUgZm9ybSBhY3Rpb24gaXMgbnVsbCwgZGF0YTogJywgX3ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnN0YXRlLnN1Ym1pdCl7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdC5jYWxsKF9zdWJtaXRBcGksIGNhbGxiYWNrKTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc3RhdGUuc3VibWl0ID0gem4uZGF0YS5jcmVhdGUoX3N1Ym1pdEFwaSwge1xuXHRcdFx0XHRiZWZvcmU6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IHRydWUgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRpbmcgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRlZCAmJiB0aGlzLnByb3BzLm9uU3VibWl0ZWQoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdFx0aWYoZGF0YS5jb2RlID09IDIwMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdFN1Y2Nlc3MoZGF0YS5yZXN1bHQsIHRoaXMpO1xuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdEVycm9yICYmIHRoaXMucHJvcHMub25TdWJtaXRFcnJvcihkYXRhLCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChzZW5kZXIsIHhocil7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdEVycm9yICYmIHRoaXMucHJvcHMub25TdWJtaXRFcnJvcih4aHIsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0fVxuXHR9LFxuXHRfX3N1Ym1pdF9fOiBmdW5jdGlvbiAoZXZlbnQsIGJ1dHRvbnMpe1xuXHRcdHRoaXMuc3VibWl0KG51bGwsIGV2ZW50KVxuXHR9LFxuXHRfX29uU3VibWl0OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfcmVmcyA9IHRoaXMuc3RhdGUucmVmcyxcblx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0X2RhdGEgPSB7fSxcblx0XHRcdF92YWx1ZSA9IG51bGwsXG5cdFx0XHRfa2V5ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdF9rZXkgPSBfcmVmLnByb3BzLnZhbHVlS2V5IHx8IGtleTtcblx0XHRcdGlmKCFfcmVmIHx8ICFfa2V5IHx8ICFfcmVmLnByb3BzLm5hbWUpIHsgY29udGludWU7IH1cblx0XHRcdGlmKCFfcmVmLnByb3BzLnN1Ym1pdHRlZCB8fCBfcmVmLnByb3BzLmVkaXRhYmxlID09PSBmYWxzZSl7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF9yZWYudmFsaWRhdGUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRcdFx0aWYoX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoX3JlZi5nZXRWYWx1ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYuZ2V0VmFsdWUoY2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfZGF0YVtfa2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHRldmVudC52YWxpZGF0ZVZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIGZvcm1pdGVtLCB0aGlzKTtcblx0fSxcblx0X19vblZhbGlkYXRlRXJyb3I6IGZ1bmN0aW9uIChlcnJNZXNzYWdlLCBmb3JtSXRlbSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWxpZGF0ZUVycm9yTWVzc2FnZTogJ+i+k+WFpeahhiDigJwnICsgZm9ybUl0ZW0ucHJvcHMubGFiZWwgKyAn4oCdICcgKyBlcnJNZXNzYWdlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25WYWxpZGF0ZVN1Y2Nlc3M6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKGl0ZW0udHlwZT09J1pSSGlkZGVuJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oaWRkZW5zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlIT1udWxsID8gdGhpcy5fX3BhcnNlSXRlbVZhbHVlKGl0ZW0udmFsdWUpOiBudWxsLCBudWxsO1xuXHRcdH1cblx0XHRpZihpdGVtLmlucHV0ICYmIChpdGVtLmlucHV0ID09ICd6ci5mb3JtLkZvcm1UaXRsZScgfHwgaXRlbS5pbnB1dC5kaXNwbGF5TmFtZSA9PSAnWlJGb3JtVGl0bGUnKSkge1xuXHRcdFx0aWYodHlwZW9mIGl0ZW0uaW5wdXQgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRpdGVtLmlucHV0ID0gem4ucGF0aCh3aW5kb3csIGl0ZW0uaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDxpdGVtLmlucHV0IGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPjtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fSxcblx0XHRcdF92YWx1ZV8gPSBfdmFsdWVbX25hbWVdLFxuXHRcdFx0X3RleHRfID0gX3ZhbHVlW19uYW1lICsgJ19jb252ZXJ0J107XG5cdFx0aWYoX3ZhbHVlXyA9PSBudWxsICYmIGl0ZW0udmFsdWUgIT0gbnVsbCl7XG5cdFx0XHRfdmFsdWVfID0gaXRlbS52YWx1ZTtcblx0XHR9XG5cblx0XHRpZihfdGV4dF8gPT0gbnVsbCAmJiBpdGVtLnRleHQgIT0gbnVsbCl7XG5cdFx0XHRfdGV4dF8gPSBpdGVtLnRleHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGb3JtSXRlbSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT57XG5cdFx0XHRcdFx0XHRpZihfbmFtZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19IFxuXHRcdFx0XHRcdHZhbHVlPXtfdmFsdWVffVxuXHRcdFx0XHRcdHRleHQ9e190ZXh0X31cblx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0Zm9ybT17dGhpc31cblx0XHRcdFx0XHRvblZhbGlkYXRlRXJyb3I9e3RoaXMuX19vblZhbGlkYXRlRXJyb3J9XG5cdFx0XHRcdFx0b25WYWxpZGF0ZVN1Y2Nlc3M9e3RoaXMuX19vblZhbGlkYXRlU3VjY2Vzc31cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXsgaXRlbS5vbklucHV0Q2hhbmdlIHx8IHRoaXMuX19vbkl0ZW1JbnB1dENoYW5nZSB9IFxuXHRcdFx0XHRcdG9uSW5wdXRFbnRlcj17IGl0ZW0ub25JbnB1dEVudGVyIHx8IHRoaXMuc3VibWl0IH0gLz5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlclByb3BzRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGlmKHpuLmlzKF9kYXRhLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0X2RhdGEgPSBfZGF0YS5jYWxsKG51bGwsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXtfZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlclN0YXRlRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdGlmKHpuLmlzKF9kYXRhLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0X2RhdGEgPSBfZGF0YS5jYWxsKG51bGwsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXtfZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckdyb3VwczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuZ3JvdXBzKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdyb3Vwcy5tYXAoKGdyb3VwKT0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKXsgcmV0dXJuIG51bGw7IH1cblx0XHRyZXR1cm4gPEZvcm1CdXR0b25zIGRhdGE9e3RoaXMucHJvcHMuYnV0dG9uc30gb25TdWJtaXQ9e3RoaXMuX19zdWJtaXRfX30gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0X19vblZhbHVlTG9hZGluZzogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBkYXRhLCBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yKHhocik7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdF9fcmVuZGVyVmFsaWRhdGVFcnJvcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yTWVzc2FnZSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tdmFsaWRhdGUtZXJyb3JcIj5cblx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM1MiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0PHNwYW4+e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvck1lc3NhZ2V9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUHJvcHNEYXRhKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyU3RhdGVEYXRhKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyR3JvdXBzKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyVmFsaWRhdGVFcnJvcigpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+5o+Q5Lqk5LitIC4uLiA8L3NwYW4+PC9kaXY+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5kaXNhYmxlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tZGlzYWJsZWRcIj48L2Rpdj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX2xvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtIHpyLWFqYXgtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Mb2FkaW5nIC4uLiA8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5zdGF0ZS5oaWRkZW5zID0ge307XG5cdFx0aWYodGhpcy5fX2lzQXBpVmFsdWUodGhpcy5wcm9wcy52YWx1ZSkpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17dGhpcy5fX2xvYWRpbmdSZW5kZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25WYWx1ZUxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uVmFsdWVMb2FkZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uVmFsdWVMb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17KHZhbHVlKT0+dGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlfVxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9e3RoaXMuX19yZW5kZXJ9IC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgJiYgdHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT0gJ29iamVjdCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLl9fcmVuZGVyKCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBamF4Rm9ybSA9IHJlcXVpcmUoJy4vQWpheEZvcm0nKTtcbnZhciBOYXRpdmVGb3JtID0gcmVxdWlyZSgnLi9OYXRpdmVGb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J05hdGl2ZScpe1xuXHRcdFx0cmV0dXJuIDxOYXRpdmVGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8QWpheEZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnem51aS1yZWFjdC1idXR0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1CdXR0b25zJyxcblx0X19idXR0b25DbGljazogZnVuY3Rpb24gKGV2ZW50LCBidXR0b25zKXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHN3aXRjaChfZGF0YS50eXBlKSB7XG5cdFx0XHRjYXNlICdyZXNldCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2FuY2VsJzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24uQnV0dG9ucyB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1idXR0b25zJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gb25DbGljaz17dGhpcy5fX2J1dHRvbkNsaWNrfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtR3JvdXAnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoX3JldHVybiA9PT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gPEZvcm1JdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fSAvPjtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3JldHVybjtcblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0X19vbkVycm9yOiBmdW5jdGlvbiAoeGhyKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1mb3JtLWdyb3VwXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLl9fb25FcnJvcn0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb3JtSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0Zvcm1JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3VibWl0dGVkOiB0cnVlLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0aGludDogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXM6ICdkZWZhdWx0Jyxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5fdGltZW91dCl7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdF9lcnJvciA9IHRoaXMucHJvcHMuZXJyb3IgfHwgXCLmlbDmja7pqozor4HplJnor69cIjtcblx0XHRpZih0aGlzLnByb3BzLnJlcXVpcmVkICYmIChfdmFsdWUgPT09ICcnIHx8IF92YWx1ZSA9PSBudWxsKSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3RhdHVzOiAnZXJyb3InLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2U6IF9lcnJvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMucHJvcHMub25WYWxpZGF0ZUVycm9yICYmIHRoaXMucHJvcHMub25WYWxpZGF0ZUVycm9yKF9lcnJvciwgdGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIF9jYWxsYmFjayA9IGNhbGxiYWNrICYmIGNhbGxiYWNrKF92YWx1ZSwgdGhpcyk7XG5cdFx0aWYoX2NhbGxiYWNrID09PSBmYWxzZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3RhdHVzOiAnZXJyb3InLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2U6IF9lcnJvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMucHJvcHMub25WYWxpZGF0ZUVycm9yICYmIHRoaXMucHJvcHMub25WYWxpZGF0ZUVycm9yKF9lcnJvciwgdGhpcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0XHRcblx0XHR0aGlzLnByb3BzLm9uVmFsaWRhdGVTdWNjZXNzICYmIHRoaXMucHJvcHMub25WYWxpZGF0ZVN1Y2Nlc3ModGhpcyk7XG5cdFx0dGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuXHRcdFx0aWYodGhpcy5fX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ2RlZmF1bHQnIH0pO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSwgMTAwMCk7XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRfX29uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGlmKGV2ZW50LnZhbGlkYXRlID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSA9IG51bGwsIGZhbHNlO1xuXHRcdH1cblxuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fb25JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRpZihldmVudC52YWxpZGF0ZSA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPSBudWxsLCBmYWxzZTtcblx0XHR9XG5cblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0RW50ZXIgJiYgdGhpcy5wcm9wcy5vbklucHV0RW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJIZWFkZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGVhZGVyXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxpIGNsYXNzTmFtZT17XCJmYSBcIiArIHRoaXMucHJvcHMuaWNvbn0gLz48L3NwYW4+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5sYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X192YWx1ZVJlbmRlcjogZnVuY3Rpb24gKHByb3BzKXtcblx0XHRzd2l0Y2gocHJvcHMudHlwZSl7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tdmFsdWVcIj57cHJvcHMudGV4dCB8fCBwcm9wcy52YWx1ZX08L3NwYW4+KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9pbnB1dFByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB0aGlzLnByb3BzLmlucHV0UHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2JvZHktaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXHRcdGlmKF9pbnB1dCAmJiB0eXBlb2YgX2lucHV0ID09ICdmdW5jdGlvbicgJiYgIV9pbnB1dC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuY2FsbCh0aGlzLnByb3BzLmNvbnRleHQgfHwgbnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHQvKlxuXHRcdGlmKF9pbnB1dFByb3BzLmVkaXRhYmxlID09IGZhbHNlICYmIF9pbnB1dFByb3BzLnZhbHVlICE9IG51bGwpIHtcblx0XHRcdF9pbnB1dEVsZW1lbnQgPSB0aGlzLl9fdmFsdWVSZW5kZXIoX2lucHV0UHJvcHMpO1xuXHRcdH0qL1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktYm9keVwiIGRhdGEtenItcG9wdXAtdG9vbHRpcD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuXHRcdFx0XHR7IF9pbnB1dEVsZW1lbnQgfVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5zdWZmaXggJiYgPHNwYW4gY2xhc3NOYW1lPVwic3VmZml4XCI+e3RoaXMucHJvcHMuc3VmZml4fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmVuZGVyUHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3JlbmRlcicsIHRoaXMucHJvcHMucmVuZGVyQ2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfcmVuZGVyID0gdGhpcy5wcm9wcy5yZW5kZXI7XG5cdFx0aWYoX3JlbmRlciAmJiB0eXBlb2YgX3JlbmRlciA9PSAnZnVuY3Rpb24nICYmICFfcmVuZGVyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9yZW5kZXIgPSBfcmVuZGVyLmNhbGwobnVsbCwgdGhpcywgX3JlbmRlclByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX3JlbmRlckVsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfcmVuZGVyLCBfcmVuZGVyUHJvcHMpO1xuXHRcdGlmKF9yZW5kZXJFbGVtZW50KXtcblx0XHRcdHJldHVybiBfcmVuZGVyRWxlbWVudDtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e3RoaXMuX19yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5fX3JlbmRlckJvZHkoKX1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0ISF0aGlzLnByb3BzLmhpbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhpbnRcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiaW5mby1jaXJjbGVcIiBjbGFzc05hbWU9XCJpbmZvLWljb24gc3ZnLWlubGluZS0tZmEgZmEtaW5mby1jaXJjbGUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oaW50fVxuXHRcdFx0XHRcdFx0PC9kaXY+IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLXJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkYXRhLWxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG5cdFx0XHRcdGRhdGEtc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuXHRcdFx0XHRkYXRhLXN0YXR1cz17dGhpcy5zdGF0ZS5zdGF0dXN9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSXRlbTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtSXRlbVZhbHVlJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnByb3BzLnR5cGUpIHtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS12YWx1ZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXIoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUl0ZW1zJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtLXZhbHVlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoKXtcblxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1QYW5lbCcsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyVGl0bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlUmVuZGVyICYmIHRoaXMucHJvcHMudGl0bGVSZW5kZXIoKTtcblx0XHRyZXR1cm4gX3RpdGxlIHx8IHRoaXMucHJvcHMudGl0bGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5fX3JlbmRlclRpdGxlKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1wYW5lbCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPnt0aGlzLl9fcmVuZGVyKCl9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1UaXRsZScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXRpdGxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ6Zi10aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkhpbnQnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy50ZXh0O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS1oaW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISF0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiaGludC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3ZhbHVlICYmIDxkaXYgY2xhc3NOYW1lPVwiaGludC12YWx1ZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX3ZhbHVlIH19PjwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkxhYmVsJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfbGFiZWwgPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy52YWx1ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0tbGFiZWwnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IF9sYWJlbCB9fT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5hdGl2ZUZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRhdXRvQ29tcGxldGU6ICdvZmYnLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXsgXG5cdFx0dGhpcy5fX2luaXRWYWx1ZSgpO1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoX3ZhbHVlKXtcblx0XHRcdGlmKF92YWx1ZS5fX2FwaV9fKXtcblx0XHRcdFx0dGhpcy5fX2luaXRBcGlWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX19pbml0T2JqZWN0VmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9faW5pdEFwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHMgfHwge30sXG5cdFx0XHRfYmVmb3JlID0gX2V2ZW50cy5iZWZvcmUsXG5cdFx0XHRfYWZ0ZXIgPSBfZXZlbnRzLmFmdGVyO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IHpuLmRhdGEuY3JlYXRlKHZhbHVlLCB6bi5leHRlbmQoX2V2ZW50cywge1xuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYmVmb3JlICYmIF9iZWZvcmUoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYWZ0ZXIgJiYgX2FmdGVyKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0fSxcblx0X19pbml0T2JqZWN0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9KTtcblx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZXNldCgpO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoZXZlbnQsIGJ0bil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uSXRlbUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UoKTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKCk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWVdfSBcblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZSArIFwiX2NvbnZlcnRcIl19IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25JdGVtQ2hhbmdlfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0vPlxuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZ3JvdXBzID0gdGhpcy5wcm9wcy5ncm91cHMgfHwgW107XG5cdFx0aWYoIV9ncm91cHMubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKSB7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9oaWRkZW5zID0gdGhpcy5wcm9wcy5oaWRkZW5zIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1uYXRpdmUtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259XG5cdFx0XHRcdGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG5cdFx0XHRcdG1ldGhvZD17dGhpcy5wcm9wcy5tZXRob2R9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0bm9WYWxpZGF0ZT17dGhpcy5wcm9wcy5ub1ZhbGlkYXRlfVxuXHRcdFx0XHR0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuXHRcdFx0XHRlbmNUeXBlPXt0aGlzLnByb3BzLmVuY1R5cGV9XG5cdFx0XHRcdG9uUmVzZXQ9e3RoaXMuX19vblJlc2V0fVxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5fX29uU3VibWl0fT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9oaWRkZW5zKS5tYXAoZnVuY3Rpb24gKGhpZGRlbiwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCBrZXk9eydoaWRkZW5fJyArIGhpZGRlbn0gdHlwZT1cImhpZGRlblwiIG5hbWU9e2hpZGRlbn0gdmFsdWU9e19oaWRkZW5zW2hpZGRlbl19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9mb3JtPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQWpheEZvcm06IHJlcXVpcmUoJy4vQWpheEZvcm0nKSxcbiAgICBGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcbiAgICBGb3JtQnV0dG9uczogcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpLFxuICAgIEZvcm1Hcm91cDogcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKSxcbiAgICBGb3JtSXRlbTogcmVxdWlyZSgnLi9Gb3JtSXRlbScpLFxuICAgIEZvcm1JdGVtczogcmVxdWlyZSgnLi9Gb3JtSXRlbXMnKSxcbiAgICBGb3JtSXRlbVZhbHVlOiByZXF1aXJlKCcuL0Zvcm1JdGVtVmFsdWUnKSxcbiAgICBGb3JtVGl0bGU6IHJlcXVpcmUoJy4vRm9ybVRpdGxlJyksXG4gICAgRm9ybVBhbmVsOiByZXF1aXJlKCcuL0Zvcm1QYW5lbCcpLFxuICAgIE5hdGl2ZUZvcm06IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpLFxuICAgIExhYmVsOiByZXF1aXJlKCcuL0xhYmVsJyksXG4gICAgSGludDogcmVxdWlyZSgnLi9IaW50Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==