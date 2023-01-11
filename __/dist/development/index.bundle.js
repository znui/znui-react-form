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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var _ref2;

    return _ref2 = {
      validateErrorMessage: null,
      submitting: false,
      hiddens: {},
      value: {}
    }, _defineProperty(_ref2, "value", zn.extend({}, this.props.value)), _defineProperty(_ref2, "data", []), _defineProperty(_ref2, "refs", {}), _ref2;
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
        _value = null;

    for (var key in _refs) {
      _ref = _refs[key];

      if (!_ref) {
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

      _data[_ref.props.valueKey || key] = _value;
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
        return _this.state.refs[_name] = _ref3;
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9IaW50LmpzIiwid2VicGFjazovLy8uL0xhYmVsLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkZvcm1JdGVtIiwiRm9ybUdyb3VwIiwiRm9ybUJ1dHRvbnMiLCJwb3B1cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWxpZGF0ZUVycm9yTWVzc2FnZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiem4iLCJleHRlbmQiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25EaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJyZWZzIiwiX3JlZiIsImtleSIsIl9fb25SZXNldCIsIm9uUmVzZXQiLCJnZXRWYWx1ZSIsImNhbGxiYWNrIiwiX3ZhbHVlIiwidmFsaWRhdGUiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX19hcGlfXyIsInNldFZhbHVlIiwiY2FsbCIsImlzIiwiX3RleHQiLCJzdWJtaXQiLCJldmVudCIsInByb2Nlc3MiLCJkZWJ1ZyIsIl9yZXR1cm4iLCJvblN1Ym1pdEJlZm9yZSIsIl9zdWJtaXRBcGkiLCJ1cmwiLCJzdWJtaXRBcGkiLCJfbWV0aG9kIiwiX2tleSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZXJyb3IiLCJkYXRhIiwiY3JlYXRlIiwiYmVmb3JlIiwic2VuZGVyIiwiX19pc01vdW50ZWQiLCJvblN1Ym1pdGluZyIsImJpbmQiLCJhZnRlciIsIm9uU3VibWl0ZWQiLCJzdWNjZXNzIiwiY29kZSIsIm9uU3VibWl0U3VjY2VzcyIsInJlc3VsdCIsIm9uU3VibWl0RXJyb3IiLCJ4aHIiLCJjb250ZXh0IiwiX19zdWJtaXRfXyIsIl9fb25TdWJtaXQiLCJvblN1Ym1pdCIsIl9kYXRhIiwic3VibWl0dGVkIiwiZWRpdGFibGUiLCJyZXF1aXJlZCIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImlucHV0IiwiZm9ybWl0ZW0iLCJ2YWxpZGF0ZVZhbHVlIiwib25JbnB1dENoYW5nZSIsIl9fb25WYWxpZGF0ZUVycm9yIiwiZXJyTWVzc2FnZSIsImZvcm1JdGVtIiwibGFiZWwiLCJfX29uVmFsaWRhdGVTdWNjZXNzIiwiX19pdGVtUmVuZGVyIiwiaXRlbSIsImluZGV4IiwibmFtZSIsInBhdGgiLCJ3aW5kb3ciLCJfbmFtZSIsIl92YWx1ZV8iLCJfdGV4dF8iLCJ0ZXh0IiwicmVmIiwib25JbnB1dEVudGVyIiwiX19yZW5kZXJQcm9wc0RhdGEiLCJyZXNwb25zZUhhbmRsZXIiLCJfX3JlbmRlclN0YXRlRGF0YSIsIl9fcmVuZGVyR3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJfX3JlbmRlckJ1dHRvbnMiLCJfX29uVmFsdWVMb2FkaW5nIiwib25WYWx1ZUxvYWRpbmciLCJfX29uVmFsdWVMb2FkZWQiLCJvblZhbHVlTG9hZGVkIiwiX19vblZhbHVlTG9hZEVycm9yIiwib25WYWx1ZUxvYWRFcnJvciIsIm5vdGlmaWVyIiwibWVzc2FnZSIsIl9fcmVuZGVyVmFsaWRhdGVFcnJvciIsIl9fcmVuZGVyIiwicmVhY3QiLCJzdHlsZSIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsIl9fbG9hZGluZ1JlbmRlciIsInJlbmRlciIsIkFqYXhGb3JtIiwiTmF0aXZlRm9ybSIsImJ1dHRvbiIsIl9fYnV0dG9uQ2xpY2siLCJvbkNsaWNrIiwibG9hZGVyIiwibG9hZGluZyIsIml0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsIl9fb25FcnJvciIsImhpbnQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJfdGltZW91dCIsImNsZWFyVGltZW91dCIsIl9lcnJvciIsIm9uVmFsaWRhdGVFcnJvciIsIl9jYWxsYmFjayIsIm9uVmFsaWRhdGVTdWNjZXNzIiwic2V0VGltZW91dCIsIl9fb25JbnB1dENoYW5nZSIsIm9uQ2hhbmdlIiwiX19vbklucHV0RW50ZXIiLCJvbkVudGVyIiwiX19yZW5kZXJIZWFkZXIiLCJfX3ZhbHVlUmVuZGVyIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dFByb3BzIiwiaW5wdXRDbGFzc05hbWUiLCJfaW5wdXQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX2lucHV0RWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInN1ZmZpeCIsIl9fcmVuZGVyQ29udGVudCIsIl9yZW5kZXJQcm9wcyIsInJlbmRlckNsYXNzTmFtZSIsIl9yZW5kZXIiLCJfcmVuZGVyRWxlbWVudCIsImxheW91dCIsInNpemUiLCJfX3JlbmRlclRpdGxlIiwiX3RpdGxlIiwidGl0bGVSZW5kZXIiLCJ0aXRsZSIsIl9faHRtbCIsIl9sYWJlbCIsIlJlYWN0RE9NIiwiYXV0b0NvbXBsZXRlIiwibm9WYWxpZGF0ZSIsInRhcmdldCIsIl9faW5pdFZhbHVlIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiX2FmdGVyIiwib25WYWx1ZUZpbmlzaGVkIiwiZmluZERPTU5vZGUiLCJidG4iLCJfX29uSXRlbUNoYW5nZSIsIm9uSXRlbUNoYW5nZSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19yZW5kZXJJdGVtcyIsIl9ncm91cHMiLCJsZW5ndGgiLCJfaGlkZGVucyIsIk9iamVjdCIsImtleXMiLCJoaWRkZW4iLCJGb3JtIiwiRm9ybUl0ZW1zIiwiRm9ybUl0ZW1WYWx1ZSIsIkZvcm1UaXRsZSIsIkZvcm1QYW5lbCIsIkxhYmVsIiwiSGludCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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TSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JvSSxVQUFRLEVBQUUxSSxtQkFBTyxDQUFDLGlDQUFELENBREo7QUFFYm9OLE1BQUksRUFBRXBOLG1CQUFPLENBQUMseUJBQUQsQ0FGQTtBQUdiRyxhQUFXLEVBQUVILG1CQUFPLENBQUMsdUNBQUQsQ0FIUDtBQUliRSxXQUFTLEVBQUVGLG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtiQyxVQUFRLEVBQUVELG1CQUFPLENBQUMsaUNBQUQsQ0FMSjtBQU1icU4sV0FBUyxFQUFFck4sbUJBQU8sQ0FBQyxtQ0FBRCxDQU5MO0FBT2JzTixlQUFhLEVBQUV0TixtQkFBTyxDQUFDLDJDQUFELENBUFQ7QUFRYnVOLFdBQVMsRUFBRXZOLG1CQUFPLENBQUMsbUNBQUQsQ0FSTDtBQVNid04sV0FBUyxFQUFFeE4sbUJBQU8sQ0FBQyxtQ0FBRCxDQVRMO0FBVWIySSxZQUFVLEVBQUUzSSxtQkFBTyxDQUFDLHFDQUFELENBVk47QUFXYnlOLE9BQUssRUFBRXpOLG1CQUFPLENBQUMsMkJBQUQsQ0FYRDtBQVliME4sTUFBSSxFQUFFMU4sbUJBQU8sQ0FBQyx5QkFBRDtBQVpBLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFqYXhGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAn5Y+W5raIJywgdHlwZTogJ2NhbmNlbCcsIGljb246ICdmYS10aW1lcycgfSxcblx0XHRcdFx0eyB2YWx1ZTogJ+aPkOS6pCcsIHR5cGU6ICdzdWJtaXQnLCBpY29uOiAnZmEtZWRpdCcgfVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6IG51bGwsXG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHsgfSxcblx0XHRcdHZhbHVlOiB7IH0sXG5cdFx0XHR2YWx1ZTogem4uZXh0ZW5kKHsgfSwgdGhpcy5wcm9wcy52YWx1ZSksXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHR0aGlzLnByb3BzLm9uRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkRpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcyk7XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczoge31cblx0XHR9KTtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbDtcblxuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdF9yZWYucmVzZXQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnN0YXRlLmhpZGRlbnMpO1xuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuaGlkZGVucyk7XG5cdFx0aWYodGhpcy5wcm9wcy5tZXJnZSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7fTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMubWVyZ2VdID0gX3ZhbHVlO1xuXHRcdFx0X3ZhbHVlID0gX3RlbXA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuZXh0cyksIF92YWx1ZTtcblx0fSxcblx0X19pc0FwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2FwaV9fKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYodGhpcy5fX2lzQXBpVmFsdWUodmFsdWUpICYmIHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUuY2FsbCh2YWx1ZSwgY2FsbGJhY2spLCB0aGlzO1xuXHRcdH1cblx0XHRpZih6bi5pcyh2YWx1ZSwgJ29iamVjdCcpKXtcblx0XHRcdGZvcih2YXIga2V5IGluIHRoaXMuc3RhdGUuaGlkZGVucyl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaGlkZGVuc1trZXldID0gdmFsdWVba2V5XSB8fCB0aGlzLnN0YXRlLmhpZGRlbnNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdFx0X3ZhbHVlID0gbnVsbCxcblx0XHRcdFx0X3RleHQgPSBudWxsO1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdFx0X3ZhbHVlID0gdmFsdWVba2V5XTtcblx0XHRcdFx0X3RleHQgPSB2YWx1ZVtrZXkrJ19jb252ZXJ0J107XG5cdFx0XHRcdGlmKF92YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0X3JlZi5zZXRWYWx1ZShfdmFsdWUsIF90ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGV2ZW50KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0em4uZGVidWcoJ0FqYXhGb3JtIHN1Ym1pdCBEYXRhOiAnLCBfdmFsdWUpO1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZSAmJiB0aGlzLnByb3BzLm9uU3VibWl0QmVmb3JlKF92YWx1ZSwgdGhpcywgZXZlbnQpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEucmVzdWx0LCB0aGlzKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19zdWJtaXRfXzogZnVuY3Rpb24gKGV2ZW50LCBidXR0b25zKXtcblx0XHR0aGlzLnN1Ym1pdChudWxsLCBldmVudClcblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKCFfcmVmLnByb3BzLnN1Ym1pdHRlZCB8fCBfcmVmLnByb3BzLmVkaXRhYmxlID09PSBmYWxzZSl7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF9yZWYudmFsaWRhdGUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRcdFx0aWYoX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoX3JlZi5nZXRWYWx1ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYuZ2V0VmFsdWUoY2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfZGF0YVtfcmVmLnByb3BzLnZhbHVlS2V5IHx8IGtleV0gPSBfdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9kYXRhO1xuXHR9LFxuXHRfX3BhcnNlSXRlbVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlLmluZGV4T2YoXCJqYXZhc2NyaXB0OlwiKT09MCl7XG5cdFx0XHRyZXR1cm4gZXZhbCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSl7XG5cdFx0ZXZlbnQudmFsaWRhdGVWYWx1ZSA9IGZvcm1pdGVtLnZhbGlkYXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWxpZGF0ZUVycm9yOiBmdW5jdGlvbiAoZXJyTWVzc2FnZSwgZm9ybUl0ZW0pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6ICfovpPlhaXmoYYg4oCcJyArIGZvcm1JdGVtLnByb3BzLmxhYmVsICsgJ+KAnSAnICsgZXJyTWVzc2FnZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uVmFsaWRhdGVTdWNjZXNzOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbGlkYXRlRXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0aWYoaXRlbS5pbnB1dCAmJiAoaXRlbS5pbnB1dCA9PSAnenIuZm9ybS5Gb3JtVGl0bGUnIHx8IGl0ZW0uaW5wdXQuZGlzcGxheU5hbWUgPT0gJ1pSRm9ybVRpdGxlJykpIHtcblx0XHRcdGlmKHR5cGVvZiBpdGVtLmlucHV0ID09ICdzdHJpbmcnKXtcblx0XHRcdFx0aXRlbS5pbnB1dCA9IHpuLnBhdGgod2luZG93LCBpdGVtLmlucHV0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiA8aXRlbS5pbnB1dCBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG5cdFx0fVxuXHRcdHZhciBfbmFtZSA9IGl0ZW0ubmFtZSxcblx0XHRcdF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUgfHwge30sXG5cdFx0XHRfdmFsdWVfID0gX3ZhbHVlW19uYW1lXSxcblx0XHRcdF90ZXh0XyA9IF92YWx1ZVtfbmFtZSArICdfY29udmVydCddO1xuXHRcdGlmKF92YWx1ZV8gPT0gbnVsbCAmJiBpdGVtLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlXyA9IGl0ZW0udmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYoX3RleHRfID09IG51bGwgJiYgaXRlbS50ZXh0ICE9IG51bGwpe1xuXHRcdFx0X3RleHRfID0gaXRlbS50ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Rm9ybUl0ZW0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0a2V5PXtpbmRleH0gXG5cdFx0XHRcdFx0cmVmPXsocmVmKT0+dGhpcy5zdGF0ZS5yZWZzW19uYW1lXSA9IHJlZn0gXG5cdFx0XHRcdFx0dmFsdWU9e192YWx1ZV99XG5cdFx0XHRcdFx0dGV4dD17X3RleHRffVxuXHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0XHRmb3JtPXt0aGlzfVxuXHRcdFx0XHRcdG9uVmFsaWRhdGVFcnJvcj17dGhpcy5fX29uVmFsaWRhdGVFcnJvcn1cblx0XHRcdFx0XHRvblZhbGlkYXRlU3VjY2Vzcz17dGhpcy5fX29uVmFsaWRhdGVTdWNjZXNzfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9eyBpdGVtLm9uSW5wdXRDaGFuZ2UgfHwgdGhpcy5fX29uSXRlbUlucHV0Q2hhbmdlIH0gXG5cdFx0XHRcdFx0b25JbnB1dEVudGVyPXsgaXRlbS5vbklucHV0RW50ZXIgfHwgdGhpcy5zdWJtaXQgfSAvPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyUHJvcHNEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0aWYoem4uaXMoX2RhdGEsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRfZGF0YSA9IF9kYXRhLmNhbGwobnVsbCwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiA8Rm9ybUdyb3VwIGRhdGE9e19kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyU3RhdGVEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0aWYoem4uaXMoX2RhdGEsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRfZGF0YSA9IF9kYXRhLmNhbGwobnVsbCwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiA8Rm9ybUdyb3VwIGRhdGE9e19kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5ncm91cHMpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ3JvdXBzLm1hcCgoZ3JvdXApPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckJ1dHRvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmJ1dHRvbnMpeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5fX3N1Ym1pdF9ffSBvblJlc2V0PXt0aGlzLnJlc2V0fSBvbkNhbmNlbD17dGhpcy5jYW5jZWx9IC8+O1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkaW5nOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGRhdGEsIHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRFcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IoeGhyKTtcblx0XHRwb3B1cC5ub3RpZmllci5lcnJvcihcIkVycm9yOiBcIiArIHhoci5tZXNzYWdlKTtcblx0fSxcblx0X19yZW5kZXJWYWxpZGF0ZUVycm9yOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JNZXNzYWdlKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS12YWxpZGF0ZS1lcnJvclwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzUyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yTWVzc2FnZX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJQcm9wc0RhdGEoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJTdGF0ZURhdGEoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJWYWxpZGF0ZUVycm9yKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQnV0dG9ucygpfVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zdWJtaXR0aW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj7mj5DkuqTkuK0gLi4uIDwvc3Bhbj48L2Rpdj59XG5cdFx0XHRcdHt0aGlzLnByb3BzLmRpc2FibGVkICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1kaXNhYmxlZFwiPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uIDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLnN0YXRlLmhpZGRlbnMgPSB7fTtcblx0XHRpZih0aGlzLl9faXNBcGlWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXt0aGlzLl9fbG9hZGluZ1JlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vblZhbHVlTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25WYWx1ZUxvYWRlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLl9fb25WYWx1ZUxvYWRFcnJvcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXsodmFsdWUpPT50aGlzLnN0YXRlLnZhbHVlID0gdmFsdWV9XG5cdFx0XHRcdFx0ZGF0YVJlbmRlcj17dGhpcy5fX3JlbmRlcn0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAmJiB0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PSAnb2JqZWN0Jyl7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuX19yZW5kZXIoKTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm0nLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nTmF0aXZlJyl7XG5cdFx0XHRyZXR1cm4gPE5hdGl2ZUZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxBamF4Rm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fVxuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWJ1dHRvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUJ1dHRvbnMnLFxuXHRfX2J1dHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGJ1dHRvbnMpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0c3dpdGNoKF9kYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ3Jlc2V0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYW5jZWwnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbi5CdXR0b25zIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWJ1dHRvbnMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLl9fYnV0dG9uQ2xpY2t9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1Hcm91cCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfcmV0dXJuID09PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSA8Rm9ybUl0ZW0gey4uLml0ZW19IGtleT17aW5kZXh9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0dXJuO1xuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0XHRwb3B1cC5ub3RpZmllci5lcnJvcihcIkVycm9yOiBcIiArIHhoci5tZXNzYWdlKTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZvcm0tZ3JvdXBcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0aXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vbkVycm9yfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEZvcm1JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonRm9ybUl0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0ZWQ6IHRydWUsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRoaW50OiBudWxsXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1czogJ2RlZmF1bHQnLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLl90aW1lb3V0KXtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0fVxuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9KTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0X2Vycm9yID0gdGhpcy5wcm9wcy5lcnJvciB8fCBcIuaVsOaNrumqjOivgemUmeivr1wiO1xuXHRcdGlmKHRoaXMucHJvcHMucmVxdWlyZWQgJiYgKF92YWx1ZSA9PT0gJycgfHwgX3ZhbHVlID09IG51bGwpKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogX2Vycm9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5wcm9wcy5vblZhbGlkYXRlRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbGlkYXRlRXJyb3IoX2Vycm9yLCB0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgX2NhbGxiYWNrID0gY2FsbGJhY2sgJiYgY2FsbGJhY2soX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfY2FsbGJhY2sgPT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogX2Vycm9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5wcm9wcy5vblZhbGlkYXRlRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbGlkYXRlRXJyb3IoX2Vycm9yLCB0aGlzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdGF0dXM6ICdzdWNjZXNzJyxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH0pO1xuXHRcdFxuXHRcdHRoaXMucHJvcHMub25WYWxpZGF0ZVN1Y2Nlc3MgJiYgdGhpcy5wcm9wcy5vblZhbGlkYXRlU3VjY2Vzcyh0aGlzKTtcblx0XHR0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRpZih0aGlzLl9faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnZGVmYXVsdCcgfSk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpLCAxMDAwKTtcblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0aWYoZXZlbnQudmFsaWRhdGUgPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlID0gbnVsbCwgZmFsc2U7XG5cdFx0fVxuXG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19vbklucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGlmKGV2ZW50LnZhbGlkYXRlID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSA9IG51bGwsIGZhbHNlO1xuXHRcdH1cblxuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uSW5wdXRFbnRlciAmJiB0aGlzLnByb3BzLm9uSW5wdXRFbnRlcihldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlckhlYWRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienJmaS1oZWFkZXJcIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PGkgY2xhc3NOYW1lPXtcImZhIFwiICsgdGhpcy5wcm9wcy5pY29ufSAvPjwvc3Bhbj59XG5cdFx0XHRcdHt0aGlzLnByb3BzLmxhYmVsICYmIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5sYWJlbH08L2Rpdj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3ZhbHVlUmVuZGVyOiBmdW5jdGlvbiAocHJvcHMpe1xuXHRcdHN3aXRjaChwcm9wcy50eXBlKXtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS12YWx1ZVwiPntwcm9wcy50ZXh0IHx8IHByb3BzLnZhbHVlfTwvc3Bhbj4pO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2lucHV0UHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHRoaXMucHJvcHMuaW5wdXRQcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnYm9keS1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWUpLFxuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX29uSW5wdXRDaGFuZ2UsXG5cdFx0XHRvbkVudGVyOiB0aGlzLl9fb25JbnB1dEVudGVyXG5cdFx0fSk7XG5cdFx0dmFyIF9pbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cdFx0aWYoX2lucHV0ICYmIHR5cGVvZiBfaW5wdXQgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lucHV0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5jYWxsKHRoaXMucHJvcHMuY29udGV4dCB8fCBudWxsLCB0aGlzLCBfaW5wdXRQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9pbnB1dEVsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfaW5wdXQsIF9pbnB1dFByb3BzLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdC8qXG5cdFx0aWYoX2lucHV0UHJvcHMuZWRpdGFibGUgPT0gZmFsc2UgJiYgX2lucHV0UHJvcHMudmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0X2lucHV0RWxlbWVudCA9IHRoaXMuX192YWx1ZVJlbmRlcihfaW5wdXRQcm9wcyk7XG5cdFx0fSovXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienJmaS1ib2R5XCIgZGF0YS16ci1wb3B1cC10b29sdGlwPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG5cdFx0XHRcdHsgX2lucHV0RWxlbWVudCB9XG5cdFx0XHRcdHt0aGlzLnByb3BzLnN1ZmZpeCAmJiA8c3BhbiBjbGFzc05hbWU9XCJzdWZmaXhcIj57dGhpcy5wcm9wcy5zdWZmaXh9PC9zcGFuPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZW5kZXJQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgncmVuZGVyJywgdGhpcy5wcm9wcy5yZW5kZXJDbGFzc05hbWUpLFxuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX29uSW5wdXRDaGFuZ2UsXG5cdFx0XHRvbkVudGVyOiB0aGlzLl9fb25JbnB1dEVudGVyXG5cdFx0fSk7XG5cdFx0dmFyIF9yZW5kZXIgPSB0aGlzLnByb3BzLnJlbmRlcjtcblx0XHRpZihfcmVuZGVyICYmIHR5cGVvZiBfcmVuZGVyID09ICdmdW5jdGlvbicgJiYgIV9yZW5kZXIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X3JlbmRlciA9IF9yZW5kZXIuY2FsbChudWxsLCB0aGlzLCBfcmVuZGVyUHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyRWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9yZW5kZXIsIF9yZW5kZXJQcm9wcyk7XG5cdFx0aWYoX3JlbmRlckVsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXJFbGVtZW50O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7dGhpcy5fX3JlbmRlckhlYWRlcigpfVxuXHRcdFx0XHRcdHt0aGlzLl9fcmVuZGVyQm9keSgpfVxuXHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHQhIXRoaXMucHJvcHMuaGludCAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGludFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJpbmZvLWNpcmNsZVwiIGNsYXNzTmFtZT1cImluZm8taWNvbiBzdmctaW5saW5lLS1mYSBmYS1pbmZvLWNpcmNsZSBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmhpbnR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdGRhdGEtbGF5b3V0PXt0aGlzLnByb3BzLmxheW91dH1cblx0XHRcdFx0ZGF0YS1zaXplPXt0aGlzLnByb3BzLnNpemV9XG5cdFx0XHRcdGRhdGEtc3RhdHVzPXt0aGlzLnN0YXRlLnN0YXR1c30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNvbnRlbnQoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1JdGVtOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1JdGVtVmFsdWUnLFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0c3dpdGNoKHRoaXMucHJvcHMudHlwZSkge1xuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtLXZhbHVlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlcigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtSXRlbXMnLFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuXG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0tdmFsdWUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uICgpe1xuXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVBhbmVsJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J05hdGl2ZScpe1xuXHRcdFx0cmV0dXJuIDxOYXRpdmVGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8QWpheEZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJUaXRsZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF90aXRsZSA9IHRoaXMucHJvcHMudGl0bGVSZW5kZXIgJiYgdGhpcy5wcm9wcy50aXRsZVJlbmRlcigpO1xuXHRcdHJldHVybiBfdGl0bGUgfHwgdGhpcy5wcm9wcy50aXRsZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLl9fcmVuZGVyVGl0bGUoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXBhbmVsJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISFfdGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50XCI+e3RoaXMuX19yZW5kZXIoKX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVRpdGxlJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tdGl0bGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInpmLXRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSSGludCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnRleHQ7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtLWhpbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQhIXRoaXMucHJvcHMudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJoaW50LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISFfdmFsdWUgJiYgPGRpdiBjbGFzc05hbWU9XCJoaW50LXZhbHVlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfdmFsdWUgfX0+PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTGFiZWwnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9sYWJlbCA9IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS1sYWJlbCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX2xhYmVsIH19PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTmF0aXZlRm9ybScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogbnVsbCxcblx0XHRcdGF1dG9Db21wbGV0ZTogJ29mZicsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0bmFtZTogbnVsbCxcblx0XHRcdG5vVmFsaWRhdGU6IG51bGwsXG5cdFx0XHR0YXJnZXQ6ICdfc2VsZicsXG5cdFx0XHRlbmNUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpeyBcblx0XHR0aGlzLl9faW5pdFZhbHVlKCk7XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHRpZihfdmFsdWUpe1xuXHRcdFx0aWYoX3ZhbHVlLl9fYXBpX18pe1xuXHRcdFx0XHR0aGlzLl9faW5pdEFwaVZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5fX2luaXRPYmplY3RWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19pbml0QXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dmFyIF9ldmVudHMgPSB0aGlzLnByb3BzLmV2ZW50cyB8fCB7fSxcblx0XHRcdF9iZWZvcmUgPSBfZXZlbnRzLmJlZm9yZSxcblx0XHRcdF9hZnRlciA9IF9ldmVudHMuYWZ0ZXI7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhID0gem4uZGF0YS5jcmVhdGUodmFsdWUsIHpuLmV4dGVuZChfZXZlbnRzLCB7XG5cdFx0XHRiZWZvcmU6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9iZWZvcmUgJiYgX2JlZm9yZShzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9hZnRlciAmJiBfYWZ0ZXIoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdH0pLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHR9LFxuXHRfX2luaXRPYmplY3RWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcodmFsdWUsIHRoaXMpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdFxuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH0pO1xuXHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlc2V0KCk7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChldmVudCwgYnRuKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdChldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fb25JdGVtQ2hhbmdlOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUNoYW5nZSgpO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8Rm9ybUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZV19IFxuXHRcdFx0XHRcdHRleHQ9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lICsgXCJfY29udmVydFwiXX0gXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkl0ZW1DaGFuZ2V9XG5cdFx0XHRcdFx0b25JbnB1dENoYW5nZT17dGhpcy5fX29uSXRlbUlucHV0Q2hhbmdlfS8+XG5cdH0sXG5cdF9fcmVuZGVySXRlbXM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8Rm9ybUdyb3VwIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckdyb3VwczogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9ncm91cHMgPSB0aGlzLnByb3BzLmdyb3VwcyB8fCBbXTtcblx0XHRpZighX2dyb3Vwcy5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2dyb3Vwcy5tYXAoZnVuY3Rpb24gKGdyb3VwKXtcblx0XHRcdFx0XHRcdHJldHVybiA8Rm9ybUdyb3VwIHsuLi5ncm91cH0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckJ1dHRvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmJ1dHRvbnMpIHsgcmV0dXJuIG51bGw7IH1cblx0XHRyZXR1cm4gPEZvcm1CdXR0b25zIGRhdGE9e3RoaXMucHJvcHMuYnV0dG9uc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvblJlc2V0PXt0aGlzLnJlc2V0fSBvbkNhbmNlbD17dGhpcy5jYW5jZWx9IC8+O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR2YXIgX2hpZGRlbnMgPSB0aGlzLnByb3BzLmhpZGRlbnMgfHwge307XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtIHpyLW5hdGl2ZS1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0YWN0aW9uPXt0aGlzLnByb3BzLmFjdGlvbn1cblx0XHRcdFx0YXV0b0NvbXBsZXRlPXt0aGlzLnByb3BzLmF1dG9Db21wbGV0ZX1cblx0XHRcdFx0bWV0aG9kPXt0aGlzLnByb3BzLm1ldGhvZH1cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRub1ZhbGlkYXRlPXt0aGlzLnByb3BzLm5vVmFsaWRhdGV9XG5cdFx0XHRcdHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9XG5cdFx0XHRcdGVuY1R5cGU9e3RoaXMucHJvcHMuZW5jVHlwZX1cblx0XHRcdFx0b25SZXNldD17dGhpcy5fX29uUmVzZXR9XG5cdFx0XHRcdG9uU3VibWl0PXt0aGlzLl9fb25TdWJtaXR9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX2hpZGRlbnMpLm1hcChmdW5jdGlvbiAoaGlkZGVuLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGlucHV0IGtleT17J2hpZGRlbl8nICsgaGlkZGVufSB0eXBlPVwiaGlkZGVuXCIgbmFtZT17aGlkZGVufSB2YWx1ZT17X2hpZGRlbnNbaGlkZGVuXX0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckl0ZW1zKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyR3JvdXBzKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQnV0dG9ucygpfVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zdWJtaXR0aW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5TdWJtaXR0aW5nIC4uLjwvc3Bhbj48L2Rpdj59XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBamF4Rm9ybTogcmVxdWlyZSgnLi9BamF4Rm9ybScpLFxuICAgIEZvcm06IHJlcXVpcmUoJy4vRm9ybScpLFxuICAgIEZvcm1CdXR0b25zOiByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyksXG4gICAgRm9ybUdyb3VwOiByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpLFxuICAgIEZvcm1JdGVtOiByZXF1aXJlKCcuL0Zvcm1JdGVtJyksXG4gICAgRm9ybUl0ZW1zOiByZXF1aXJlKCcuL0Zvcm1JdGVtcycpLFxuICAgIEZvcm1JdGVtVmFsdWU6IHJlcXVpcmUoJy4vRm9ybUl0ZW1WYWx1ZScpLFxuICAgIEZvcm1UaXRsZTogcmVxdWlyZSgnLi9Gb3JtVGl0bGUnKSxcbiAgICBGb3JtUGFuZWw6IHJlcXVpcmUoJy4vRm9ybVBhbmVsJyksXG4gICAgTmF0aXZlRm9ybTogcmVxdWlyZSgnLi9OYXRpdmVGb3JtJyksXG4gICAgTGFiZWw6IHJlcXVpcmUoJy4vTGFiZWwnKSxcbiAgICBIaW50OiByZXF1aXJlKCcuL0hpbnQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJidXR0b25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9