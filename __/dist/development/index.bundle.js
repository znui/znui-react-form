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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9IaW50LmpzIiwid2VicGFjazovLy8uL0xhYmVsLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkZvcm1JdGVtIiwiRm9ybUdyb3VwIiwiRm9ybUJ1dHRvbnMiLCJwb3B1cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWxpZGF0ZUVycm9yTWVzc2FnZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiem4iLCJleHRlbmQiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25EaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJyZWZzIiwiX3JlZiIsImtleSIsIl9fb25SZXNldCIsIm9uUmVzZXQiLCJnZXRWYWx1ZSIsImNhbGxiYWNrIiwiX3ZhbHVlIiwidmFsaWRhdGUiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX19hcGlfXyIsInNldFZhbHVlIiwiY2FsbCIsImlzIiwiX3RleHQiLCJzdWJtaXQiLCJldmVudCIsInByb2Nlc3MiLCJkZWJ1ZyIsIl9yZXR1cm4iLCJvblN1Ym1pdEJlZm9yZSIsIl9zdWJtaXRBcGkiLCJ1cmwiLCJzdWJtaXRBcGkiLCJfbWV0aG9kIiwiX2tleSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZXJyb3IiLCJkYXRhIiwiY3JlYXRlIiwiYmVmb3JlIiwic2VuZGVyIiwiX19pc01vdW50ZWQiLCJvblN1Ym1pdGluZyIsImJpbmQiLCJhZnRlciIsIm9uU3VibWl0ZWQiLCJzdWNjZXNzIiwiY29kZSIsIm9uU3VibWl0U3VjY2VzcyIsInJlc3VsdCIsIm9uU3VibWl0RXJyb3IiLCJ4aHIiLCJjb250ZXh0IiwiX19zdWJtaXRfXyIsIl9fb25TdWJtaXQiLCJvblN1Ym1pdCIsIl9kYXRhIiwidmFsdWVLZXkiLCJuYW1lIiwic3VibWl0dGVkIiwiZWRpdGFibGUiLCJyZXF1aXJlZCIsIl9fcGFyc2VJdGVtVmFsdWUiLCJpbmRleE9mIiwiZXZhbCIsIl9fb25JdGVtSW5wdXRDaGFuZ2UiLCJpbnB1dCIsImZvcm1pdGVtIiwidmFsaWRhdGVWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJfX29uVmFsaWRhdGVFcnJvciIsImVyck1lc3NhZ2UiLCJmb3JtSXRlbSIsImxhYmVsIiwiX19vblZhbGlkYXRlU3VjY2VzcyIsIl9faXRlbVJlbmRlciIsIml0ZW0iLCJpbmRleCIsInBhdGgiLCJ3aW5kb3ciLCJfbmFtZSIsIl92YWx1ZV8iLCJfdGV4dF8iLCJ0ZXh0IiwicmVmIiwib25JbnB1dEVudGVyIiwiX19yZW5kZXJQcm9wc0RhdGEiLCJyZXNwb25zZUhhbmRsZXIiLCJfX3JlbmRlclN0YXRlRGF0YSIsIl9fcmVuZGVyR3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJfX3JlbmRlckJ1dHRvbnMiLCJfX29uVmFsdWVMb2FkaW5nIiwib25WYWx1ZUxvYWRpbmciLCJfX29uVmFsdWVMb2FkZWQiLCJvblZhbHVlTG9hZGVkIiwiX19vblZhbHVlTG9hZEVycm9yIiwib25WYWx1ZUxvYWRFcnJvciIsIm5vdGlmaWVyIiwibWVzc2FnZSIsIl9fcmVuZGVyVmFsaWRhdGVFcnJvciIsIl9fcmVuZGVyIiwicmVhY3QiLCJzdHlsZSIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsIl9fbG9hZGluZ1JlbmRlciIsInJlbmRlciIsIkFqYXhGb3JtIiwiTmF0aXZlRm9ybSIsImJ1dHRvbiIsIl9fYnV0dG9uQ2xpY2siLCJvbkNsaWNrIiwibG9hZGVyIiwibG9hZGluZyIsIml0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsIl9fb25FcnJvciIsImhpbnQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJfdGltZW91dCIsImNsZWFyVGltZW91dCIsIl9lcnJvciIsIm9uVmFsaWRhdGVFcnJvciIsIl9jYWxsYmFjayIsIm9uVmFsaWRhdGVTdWNjZXNzIiwic2V0VGltZW91dCIsIl9fb25JbnB1dENoYW5nZSIsIm9uQ2hhbmdlIiwiX19vbklucHV0RW50ZXIiLCJvbkVudGVyIiwiX19yZW5kZXJIZWFkZXIiLCJfX3ZhbHVlUmVuZGVyIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dFByb3BzIiwiaW5wdXRDbGFzc05hbWUiLCJfaW5wdXQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX2lucHV0RWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInN1ZmZpeCIsIl9fcmVuZGVyQ29udGVudCIsIl9yZW5kZXJQcm9wcyIsInJlbmRlckNsYXNzTmFtZSIsIl9yZW5kZXIiLCJfcmVuZGVyRWxlbWVudCIsImxheW91dCIsInNpemUiLCJfX3JlbmRlclRpdGxlIiwiX3RpdGxlIiwidGl0bGVSZW5kZXIiLCJ0aXRsZSIsIl9faHRtbCIsIl9sYWJlbCIsIlJlYWN0RE9NIiwiYXV0b0NvbXBsZXRlIiwibm9WYWxpZGF0ZSIsInRhcmdldCIsIl9faW5pdFZhbHVlIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiX2FmdGVyIiwib25WYWx1ZUZpbmlzaGVkIiwiZmluZERPTU5vZGUiLCJidG4iLCJfX29uSXRlbUNoYW5nZSIsIm9uSXRlbUNoYW5nZSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19yZW5kZXJJdGVtcyIsIl9ncm91cHMiLCJsZW5ndGgiLCJfaGlkZGVucyIsIk9iamVjdCIsImtleXMiLCJoaWRkZW4iLCJGb3JtIiwiRm9ybUl0ZW1zIiwiRm9ybUl0ZW1WYWx1ZSIsIkZvcm1UaXRsZSIsIkZvcm1QYW5lbCIsIkxhYmVsIiwiSGludCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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QUssZUFBUyxFQUFDO0FBQWYsb0JBQWdDO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE1BQWhDLGVBQTJEO0FBQU0sZUFBUyxFQUFDO0FBQWhCLHdCQUEzRCxDQW5CM0IsQ0FERDtBQXVCQTtBQWxKaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNOQWYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JvSSxVQUFRLEVBQUUxSSxtQkFBTyxDQUFDLGlDQUFELENBREo7QUFFYm9OLE1BQUksRUFBRXBOLG1CQUFPLENBQUMseUJBQUQsQ0FGQTtBQUdiRyxhQUFXLEVBQUVILG1CQUFPLENBQUMsdUNBQUQsQ0FIUDtBQUliRSxXQUFTLEVBQUVGLG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtiQyxVQUFRLEVBQUVELG1CQUFPLENBQUMsaUNBQUQsQ0FMSjtBQU1icU4sV0FBUyxFQUFFck4sbUJBQU8sQ0FBQyxtQ0FBRCxDQU5MO0FBT2JzTixlQUFhLEVBQUV0TixtQkFBTyxDQUFDLDJDQUFELENBUFQ7QUFRYnVOLFdBQVMsRUFBRXZOLG1CQUFPLENBQUMsbUNBQUQsQ0FSTDtBQVNid04sV0FBUyxFQUFFeE4sbUJBQU8sQ0FBQyxtQ0FBRCxDQVRMO0FBVWIySSxZQUFVLEVBQUUzSSxtQkFBTyxDQUFDLHFDQUFELENBVk47QUFXYnlOLE9BQUssRUFBRXpOLG1CQUFPLENBQUMsMkJBQUQsQ0FYRDtBQVliME4sTUFBSSxFQUFFMU4sbUJBQU8sQ0FBQyx5QkFBRDtBQVpBLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFqYXhGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAn5Y+W5raIJywgdHlwZTogJ2NhbmNlbCcsIGljb246ICdmYS10aW1lcycgfSxcblx0XHRcdFx0eyB2YWx1ZTogJ+aPkOS6pCcsIHR5cGU6ICdzdWJtaXQnLCBpY29uOiAnZmEtZWRpdCcgfVxuXHRcdFx0XVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6IG51bGwsXG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHsgfSxcblx0XHRcdHZhbHVlOiB7IH0sXG5cdFx0XHR2YWx1ZTogem4uZXh0ZW5kKHsgfSwgdGhpcy5wcm9wcy52YWx1ZSksXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHR0aGlzLnByb3BzLm9uRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkRpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcyk7XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczoge31cblx0XHR9KTtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbDtcblxuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdF9yZWYucmVzZXQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnN0YXRlLmhpZGRlbnMpO1xuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuaGlkZGVucyk7XG5cdFx0aWYodGhpcy5wcm9wcy5tZXJnZSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7fTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMubWVyZ2VdID0gX3ZhbHVlO1xuXHRcdFx0X3ZhbHVlID0gX3RlbXA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuZXh0cyksIF92YWx1ZTtcblx0fSxcblx0X19pc0FwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2FwaV9fKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYodGhpcy5fX2lzQXBpVmFsdWUodmFsdWUpICYmIHRoaXMuc3RhdGUudmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUuY2FsbCh2YWx1ZSwgY2FsbGJhY2spLCB0aGlzO1xuXHRcdH1cblx0XHRpZih6bi5pcyh2YWx1ZSwgJ29iamVjdCcpKXtcblx0XHRcdGZvcih2YXIga2V5IGluIHRoaXMuc3RhdGUuaGlkZGVucyl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaGlkZGVuc1trZXldID0gdmFsdWVba2V5XSB8fCB0aGlzLnN0YXRlLmhpZGRlbnNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdFx0X3ZhbHVlID0gbnVsbCxcblx0XHRcdFx0X3RleHQgPSBudWxsO1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdFx0X3ZhbHVlID0gdmFsdWVba2V5XTtcblx0XHRcdFx0X3RleHQgPSB2YWx1ZVtrZXkrJ19jb252ZXJ0J107XG5cdFx0XHRcdGlmKF92YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0X3JlZi5zZXRWYWx1ZShfdmFsdWUsIF90ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGV2ZW50KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0em4uZGVidWcoJ0FqYXhGb3JtIHN1Ym1pdCBEYXRhOiAnLCBfdmFsdWUpO1xuXHRcdH1cblxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZSAmJiB0aGlzLnByb3BzLm9uU3VibWl0QmVmb3JlKF92YWx1ZSwgdGhpcywgZXZlbnQpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEucmVzdWx0LCB0aGlzKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19zdWJtaXRfXzogZnVuY3Rpb24gKGV2ZW50LCBidXR0b25zKXtcblx0XHR0aGlzLnN1Ym1pdChudWxsLCBldmVudClcblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0X2tleSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRfa2V5ID0gX3JlZi5wcm9wcy52YWx1ZUtleSB8fCBrZXk7XG5cdFx0XHRpZighX3JlZiB8fCAhX2tleSB8fCAhX3JlZi5wcm9wcy5uYW1lKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZighX3JlZi5wcm9wcy5zdWJtaXR0ZWQgfHwgX3JlZi5wcm9wcy5lZGl0YWJsZSA9PT0gZmFsc2UpeyBjb250aW51ZTsgfVxuXHRcdFx0aWYoX3JlZi5wcm9wcy5yZXF1aXJlZCAmJiBfcmVmLnZhbGlkYXRlKXtcblx0XHRcdFx0X3ZhbHVlID0gX3JlZi52YWxpZGF0ZShjYWxsYmFjayk7XG5cdFx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKF9yZWYuZ2V0VmFsdWUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLmdldFZhbHVlKGNhbGxiYWNrKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3JlZi5wcm9wcy5yZXF1aXJlZCAmJiBfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0X2RhdGFbX2tleV0gPSBfdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9kYXRhO1xuXHR9LFxuXHRfX3BhcnNlSXRlbVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlLmluZGV4T2YoXCJqYXZhc2NyaXB0OlwiKT09MCl7XG5cdFx0XHRyZXR1cm4gZXZhbCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSl7XG5cdFx0ZXZlbnQudmFsaWRhdGVWYWx1ZSA9IGZvcm1pdGVtLnZhbGlkYXRlKCk7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWxpZGF0ZUVycm9yOiBmdW5jdGlvbiAoZXJyTWVzc2FnZSwgZm9ybUl0ZW0pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6ICfovpPlhaXmoYYg4oCcJyArIGZvcm1JdGVtLnByb3BzLmxhYmVsICsgJ+KAnSAnICsgZXJyTWVzc2FnZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uVmFsaWRhdGVTdWNjZXNzOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbGlkYXRlRXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0aWYoaXRlbS5pbnB1dCAmJiAoaXRlbS5pbnB1dCA9PSAnenIuZm9ybS5Gb3JtVGl0bGUnIHx8IGl0ZW0uaW5wdXQuZGlzcGxheU5hbWUgPT0gJ1pSRm9ybVRpdGxlJykpIHtcblx0XHRcdGlmKHR5cGVvZiBpdGVtLmlucHV0ID09ICdzdHJpbmcnKXtcblx0XHRcdFx0aXRlbS5pbnB1dCA9IHpuLnBhdGgod2luZG93LCBpdGVtLmlucHV0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiA8aXRlbS5pbnB1dCBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG5cdFx0fVxuXHRcdHZhciBfbmFtZSA9IGl0ZW0ubmFtZSxcblx0XHRcdF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUgfHwge30sXG5cdFx0XHRfdmFsdWVfID0gX3ZhbHVlW19uYW1lXSxcblx0XHRcdF90ZXh0XyA9IF92YWx1ZVtfbmFtZSArICdfY29udmVydCddO1xuXHRcdGlmKF92YWx1ZV8gPT0gbnVsbCAmJiBpdGVtLnZhbHVlICE9IG51bGwpe1xuXHRcdFx0X3ZhbHVlXyA9IGl0ZW0udmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYoX3RleHRfID09IG51bGwgJiYgaXRlbS50ZXh0ICE9IG51bGwpe1xuXHRcdFx0X3RleHRfID0gaXRlbS50ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Rm9ybUl0ZW0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0a2V5PXtpbmRleH0gXG5cdFx0XHRcdFx0cmVmPXsocmVmKT0+e1xuXHRcdFx0XHRcdFx0aWYoX25hbWUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5yZWZzW19uYW1lXSA9IHJlZjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fSBcblx0XHRcdFx0XHR2YWx1ZT17X3ZhbHVlX31cblx0XHRcdFx0XHR0ZXh0PXtfdGV4dF99XG5cdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxuXHRcdFx0XHRcdGZvcm09e3RoaXN9XG5cdFx0XHRcdFx0b25WYWxpZGF0ZUVycm9yPXt0aGlzLl9fb25WYWxpZGF0ZUVycm9yfVxuXHRcdFx0XHRcdG9uVmFsaWRhdGVTdWNjZXNzPXt0aGlzLl9fb25WYWxpZGF0ZVN1Y2Nlc3N9XG5cdFx0XHRcdFx0b25JbnB1dENoYW5nZT17IGl0ZW0ub25JbnB1dENoYW5nZSB8fCB0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2UgfSBcblx0XHRcdFx0XHRvbklucHV0RW50ZXI9eyBpdGVtLm9uSW5wdXRFbnRlciB8fCB0aGlzLnN1Ym1pdCB9IC8+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJQcm9wc0RhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdF9kYXRhID0gX2RhdGEuY2FsbChudWxsLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17X2RhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJTdGF0ZURhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdF9kYXRhID0gX2RhdGEuY2FsbChudWxsLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17X2RhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKChncm91cCk9Pntcblx0XHRcdFx0XHRcdHJldHVybiA8Rm9ybUdyb3VwIHsuLi5ncm91cH0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLl9fc3VibWl0X199IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRpbmc6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZGF0YSwgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRlZChkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZEVycm9yOiBmdW5jdGlvbiAoeGhyKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRFcnJvcih4aHIpO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRfX3JlbmRlclZhbGlkYXRlRXJyb3I6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUudmFsaWRhdGVFcnJvck1lc3NhZ2Upe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLXZhbGlkYXRlLWVycm9yXCI+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS10aW1lcyBmYS13LTExIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdDxzcGFuPnt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JNZXNzYWdlfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtIHpyLWFqYXgtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclByb3BzRGF0YSgpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclN0YXRlRGF0YSgpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclZhbGlkYXRlRXJyb3IoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPuaPkOS6pOS4rSAuLi4gPC9zcGFuPjwvZGl2Pn1cblx0XHRcdFx0e3RoaXMucHJvcHMuZGlzYWJsZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWRpc2FibGVkXCI+PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19sb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TG9hZGluZyAuLi4gPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMuc3RhdGUuaGlkZGVucyA9IHt9O1xuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHRoaXMucHJvcHMudmFsdWUpKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9e3RoaXMuX19sb2FkaW5nUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uVmFsdWVMb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vblZhbHVlTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vblZhbHVlTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9eyh2YWx1ZSk9PnRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZX1cblx0XHRcdFx0XHRkYXRhUmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICYmIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09ICdvYmplY3QnKXtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlcigpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25FcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uRXJyb3J9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9ybUl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidGb3JtSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRlZDogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdGhpbnQ6IG51bGxcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzOiAnZGVmYXVsdCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRfZXJyb3IgPSB0aGlzLnByb3BzLmVycm9yIHx8IFwi5pWw5o2u6aqM6K+B6ZSZ6K+vXCI7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiBfZXJyb3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvcihfZXJyb3IsIHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBfY2FsbGJhY2sgPSBjYWxsYmFjayAmJiBjYWxsYmFjayhfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9jYWxsYmFjayA9PT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiBfZXJyb3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvcihfZXJyb3IsIHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN0YXR1czogJ3N1Y2Nlc3MnLFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fSk7XG5cdFx0XG5cdFx0dGhpcy5wcm9wcy5vblZhbGlkYXRlU3VjY2VzcyAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVTdWNjZXNzKHRoaXMpO1xuXHRcdHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdkZWZhdWx0JyB9KTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcyksIDEwMDApO1xuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRpZihldmVudC52YWxpZGF0ZSA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPSBudWxsLCBmYWxzZTtcblx0XHR9XG5cblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0aWYoZXZlbnQudmFsaWRhdGUgPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlID0gbnVsbCwgZmFsc2U7XG5cdFx0fVxuXG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25JbnB1dEVudGVyICYmIHRoaXMucHJvcHMub25JbnB1dEVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVySGVhZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhlYWRlclwiPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5pY29uICYmIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj48aSBjbGFzc05hbWU9e1wiZmEgXCIgKyB0aGlzLnByb3BzLmljb259IC8+PC9zcGFuPn1cblx0XHRcdFx0e3RoaXMucHJvcHMubGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fdmFsdWVSZW5kZXI6IGZ1bmN0aW9uIChwcm9wcyl7XG5cdFx0c3dpdGNoKHByb3BzLnR5cGUpe1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJpdGVtLXZhbHVlXCI+e3Byb3BzLnRleHQgfHwgcHJvcHMudmFsdWV9PC9zcGFuPik7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckJvZHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywgdGhpcy5wcm9wcy5pbnB1dFByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdib2R5LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX2lucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblx0XHRpZihfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PSAnZnVuY3Rpb24nICYmICFfaW5wdXQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LmNhbGwodGhpcy5wcm9wcy5jb250ZXh0IHx8IG51bGwsIHRoaXMsIF9pbnB1dFByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9pbnB1dCwgX2lucHV0UHJvcHMsIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0Lypcblx0XHRpZihfaW5wdXRQcm9wcy5lZGl0YWJsZSA9PSBmYWxzZSAmJiBfaW5wdXRQcm9wcy52YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRfaW5wdXRFbGVtZW50ID0gdGhpcy5fX3ZhbHVlUmVuZGVyKF9pbnB1dFByb3BzKTtcblx0XHR9Ki9cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWJvZHlcIiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3VmZml4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInN1ZmZpeFwiPnt0aGlzLnByb3BzLnN1ZmZpeH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JlbmRlclByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdyZW5kZXInLCB0aGlzLnByb3BzLnJlbmRlckNsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX3JlbmRlciA9IHRoaXMucHJvcHMucmVuZGVyO1xuXHRcdGlmKF9yZW5kZXIgJiYgdHlwZW9mIF9yZW5kZXIgPT0gJ2Z1bmN0aW9uJyAmJiAhX3JlbmRlci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfcmVuZGVyID0gX3JlbmRlci5jYWxsKG51bGwsIHRoaXMsIF9yZW5kZXJQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXJFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX3JlbmRlciwgX3JlbmRlclByb3BzKTtcblx0XHRpZihfcmVuZGVyRWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX3JlbmRlckVsZW1lbnQ7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHt0aGlzLl9fcmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdFx0e3RoaXMuX19yZW5kZXJCb2R5KCl9XG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdCEhdGhpcy5wcm9wcy5oaW50ICYmIDxkaXYgY2xhc3NOYW1lPVwienJmaS1oaW50XCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImluZm8tY2lyY2xlXCIgY2xhc3NOYW1lPVwiaW5mby1pY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWluZm8tY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGludH1cblx0XHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1yZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0ZGF0YS1sYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxuXHRcdFx0XHRkYXRhLXNpemU9e3RoaXMucHJvcHMuc2l6ZX1cblx0XHRcdFx0ZGF0YS1zdGF0dXM9e3RoaXMuc3RhdGUuc3RhdHVzfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUl0ZW07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUl0ZW1WYWx1ZScsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRzd2l0Y2godGhpcy5wcm9wcy50eXBlKSB7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0tdmFsdWUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1JdGVtcycsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS12YWx1ZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKCl7XG5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBamF4Rm9ybSA9IHJlcXVpcmUoJy4vQWpheEZvcm0nKTtcbnZhciBOYXRpdmVGb3JtID0gcmVxdWlyZSgnLi9OYXRpdmVGb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtUGFuZWwnLFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nTmF0aXZlJyl7XG5cdFx0XHRyZXR1cm4gPE5hdGl2ZUZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxBamF4Rm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclRpdGxlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5wcm9wcy50aXRsZVJlbmRlciAmJiB0aGlzLnByb3BzLnRpdGxlUmVuZGVyKCk7XG5cdFx0cmV0dXJuIF90aXRsZSB8fCB0aGlzLnByb3BzLnRpdGxlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF90aXRsZSA9IHRoaXMuX19yZW5kZXJUaXRsZSgpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tcGFuZWwnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQhIV90aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnRcIj57dGhpcy5fX3JlbmRlcigpfTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtVGl0bGUnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS10aXRsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiemYtdGl0bGVcIj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJIaW50Jyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudGV4dDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0taGludCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhdGhpcy5wcm9wcy50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImhpbnQtdGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQhIV92YWx1ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImhpbnQtdmFsdWVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IF92YWx1ZSB9fT48L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMYWJlbCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2xhYmVsID0gdGhpcy5wcm9wcy50ZXh0IHx8IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtLWxhYmVsJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfbGFiZWwgfX0+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJOYXRpdmVGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0YXV0b0NvbXBsZXRlOiAnb2ZmJyxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0bm9WYWxpZGF0ZTogbnVsbCxcblx0XHRcdHRhcmdldDogJ19zZWxmJyxcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMuX19pbml0VmFsdWUoKTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRpZihfdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRcdHRoaXMuX19pbml0QXBpVmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLl9faW5pdE9iamVjdFZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX2V2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRzIHx8IHt9LFxuXHRcdFx0X2JlZm9yZSA9IF9ldmVudHMuYmVmb3JlLFxuXHRcdFx0X2FmdGVyID0gX2V2ZW50cy5hZnRlcjtcblx0XHR0aGlzLnN0YXRlLmRhdGEgPSB6bi5kYXRhLmNyZWF0ZSh2YWx1ZSwgem4uZXh0ZW5kKF9ldmVudHMsIHtcblx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2JlZm9yZSAmJiBfYmVmb3JlKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2FmdGVyICYmIF9hZnRlcihzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0fSksIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdH0sXG5cdF9faW5pdE9iamVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyh2YWx1ZSwgdGhpcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fSk7XG5cdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVzZXQoKTtcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdHN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50LCBidG4pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19vbkl0ZW1DaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtQ2hhbmdlKCk7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lXX0gXG5cdFx0XHRcdFx0dGV4dD17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWUgKyBcIl9jb252ZXJ0XCJdfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uSXRlbUNoYW5nZX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXt0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2V9Lz5cblx0fSxcblx0X19yZW5kZXJJdGVtczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2dyb3VwcyA9IHRoaXMucHJvcHMuZ3JvdXBzIHx8IFtdO1xuXHRcdGlmKCFfZ3JvdXBzLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfaGlkZGVucyA9IHRoaXMucHJvcHMuaGlkZGVucyB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItbmF0aXZlLWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRhY3Rpb249e3RoaXMucHJvcHMuYWN0aW9ufVxuXHRcdFx0XHRhdXRvQ29tcGxldGU9e3RoaXMucHJvcHMuYXV0b0NvbXBsZXRlfVxuXHRcdFx0XHRtZXRob2Q9e3RoaXMucHJvcHMubWV0aG9kfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdG5vVmFsaWRhdGU9e3RoaXMucHJvcHMubm9WYWxpZGF0ZX1cblx0XHRcdFx0dGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH1cblx0XHRcdFx0ZW5jVHlwZT17dGhpcy5wcm9wcy5lbmNUeXBlfVxuXHRcdFx0XHRvblJlc2V0PXt0aGlzLl9fb25SZXNldH1cblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuX19vblN1Ym1pdH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfaGlkZGVucykubWFwKGZ1bmN0aW9uIChoaWRkZW4sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQga2V5PXsnaGlkZGVuXycgKyBoaWRkZW59IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtoaWRkZW59IHZhbHVlPXtfaGlkZGVuc1toaWRkZW5dfSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFqYXhGb3JtOiByZXF1aXJlKCcuL0FqYXhGb3JtJyksXG4gICAgRm9ybTogcmVxdWlyZSgnLi9Gb3JtJyksXG4gICAgRm9ybUJ1dHRvbnM6IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKSxcbiAgICBGb3JtR3JvdXA6IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyksXG4gICAgRm9ybUl0ZW06IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKSxcbiAgICBGb3JtSXRlbXM6IHJlcXVpcmUoJy4vRm9ybUl0ZW1zJyksXG4gICAgRm9ybUl0ZW1WYWx1ZTogcmVxdWlyZSgnLi9Gb3JtSXRlbVZhbHVlJyksXG4gICAgRm9ybVRpdGxlOiByZXF1aXJlKCcuL0Zvcm1UaXRsZScpLFxuICAgIEZvcm1QYW5lbDogcmVxdWlyZSgnLi9Gb3JtUGFuZWwnKSxcbiAgICBOYXRpdmVGb3JtOiByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKSxcbiAgICBMYWJlbDogcmVxdWlyZSgnLi9MYWJlbCcpLFxuICAgIEhpbnQ6IHJlcXVpcmUoJy4vSGludCcpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImJ1dHRvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=