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
  submit: function submit(callback) {
    var _value = this.getValue();

    if (!_value) {
      return false;
    }

    if (true) {
      zn.debug('AjaxForm submit Data: ', _value);
    }

    var _return = this.props.onSubmitBefore && this.props.onSubmitBefore(_value, this);

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
    this.props.onInputChange && this.props.onInputChange(event, input, formitem);
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
    if (!this.props.groups) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "groups"
    }, this.props.groups.map(function (group) {
      return /*#__PURE__*/React.createElement(FormGroup, _extends({}, group, {
        itemRender: this.__itemRender,
        responseHandler: this.props.responseHandler
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
    var _this2 = this;

    this.state.hiddens = {};

    if (this.__isApiValue(this.props.value)) {
      return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
        data: this.props.value,
        loadingRender: this.__loadingRender,
        onLoading: this.__onValueLoading,
        onFinished: this.__onValueLoaded,
        onError: this.__onValueLoadError,
        onDataCreated: function onDataCreated(value) {
          return _this2.state.value = value;
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

    this.props.onInputChange && this.props.onInputChange(event, input, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9IaW50LmpzIiwid2VicGFjazovLy8uL0xhYmVsLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvcHVwXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkZvcm1JdGVtIiwiRm9ybUdyb3VwIiwiRm9ybUJ1dHRvbnMiLCJwb3B1cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJ2YWxpZGF0ZUVycm9yTWVzc2FnZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiem4iLCJleHRlbmQiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25EaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJyZWZzIiwiX3JlZiIsImtleSIsIl9fb25SZXNldCIsIm9uUmVzZXQiLCJnZXRWYWx1ZSIsImNhbGxiYWNrIiwiX3ZhbHVlIiwidmFsaWRhdGUiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX19hcGlfXyIsInNldFZhbHVlIiwiY2FsbCIsImlzIiwiX3RleHQiLCJzdWJtaXQiLCJwcm9jZXNzIiwiZGVidWciLCJfcmV0dXJuIiwib25TdWJtaXRCZWZvcmUiLCJfc3VibWl0QXBpIiwidXJsIiwic3VibWl0QXBpIiwiX21ldGhvZCIsIl9rZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVycm9yIiwiZGF0YSIsImNyZWF0ZSIsImJlZm9yZSIsInNlbmRlciIsIl9faXNNb3VudGVkIiwib25TdWJtaXRpbmciLCJiaW5kIiwiYWZ0ZXIiLCJvblN1Ym1pdGVkIiwic3VjY2VzcyIsImNvZGUiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJyZXN1bHQiLCJvblN1Ym1pdEVycm9yIiwieGhyIiwiY29udGV4dCIsIl9fb25TdWJtaXQiLCJvblN1Ym1pdCIsIl9kYXRhIiwic3VibWl0dGVkIiwiZWRpdGFibGUiLCJyZXF1aXJlZCIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImV2ZW50IiwiaW5wdXQiLCJmb3JtaXRlbSIsInZhbGlkYXRlVmFsdWUiLCJvbklucHV0Q2hhbmdlIiwiX19vblZhbGlkYXRlRXJyb3IiLCJlcnJNZXNzYWdlIiwiZm9ybUl0ZW0iLCJsYWJlbCIsIl9fb25WYWxpZGF0ZVN1Y2Nlc3MiLCJfX2l0ZW1SZW5kZXIiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwicGF0aCIsIndpbmRvdyIsIl9uYW1lIiwiX3ZhbHVlXyIsIl90ZXh0XyIsInRleHQiLCJyZWYiLCJvbklucHV0RW50ZXIiLCJfX3JlbmRlclByb3BzRGF0YSIsInJlc3BvbnNlSGFuZGxlciIsIl9fcmVuZGVyU3RhdGVEYXRhIiwiX19yZW5kZXJHcm91cHMiLCJncm91cHMiLCJtYXAiLCJncm91cCIsIl9fcmVuZGVyQnV0dG9ucyIsIl9fb25WYWx1ZUxvYWRpbmciLCJvblZhbHVlTG9hZGluZyIsIl9fb25WYWx1ZUxvYWRlZCIsIm9uVmFsdWVMb2FkZWQiLCJfX29uVmFsdWVMb2FkRXJyb3IiLCJvblZhbHVlTG9hZEVycm9yIiwibm90aWZpZXIiLCJtZXNzYWdlIiwiX19yZW5kZXJWYWxpZGF0ZUVycm9yIiwiX19yZW5kZXIiLCJyZWFjdCIsInN0eWxlIiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwiX19sb2FkaW5nUmVuZGVyIiwicmVuZGVyIiwiQWpheEZvcm0iLCJOYXRpdmVGb3JtIiwiYnV0dG9uIiwiX19idXR0b25DbGljayIsIm9uQ2xpY2siLCJsb2FkZXIiLCJsb2FkaW5nIiwiaXRlbVJlbmRlciIsIl9fb25Mb2FkaW5nIiwiX19vbkZpbmlzaGVkIiwiX19vbkVycm9yIiwiaGludCIsInN0YXR1cyIsImVycm9yTWVzc2FnZSIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiX2Vycm9yIiwib25WYWxpZGF0ZUVycm9yIiwiX2NhbGxiYWNrIiwib25WYWxpZGF0ZVN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwiX19vbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJfX29uSW5wdXRFbnRlciIsIm9uRW50ZXIiLCJfX3JlbmRlckhlYWRlciIsIl9fdmFsdWVSZW5kZXIiLCJfX3JlbmRlckJvZHkiLCJfaW5wdXRQcm9wcyIsImlucHV0UHJvcHMiLCJpbnB1dENsYXNzTmFtZSIsIl9pbnB1dCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50Iiwic3VmZml4IiwiX19yZW5kZXJDb250ZW50IiwiX3JlbmRlclByb3BzIiwicmVuZGVyQ2xhc3NOYW1lIiwiX3JlbmRlciIsIl9yZW5kZXJFbGVtZW50IiwibGF5b3V0Iiwic2l6ZSIsIl9fcmVuZGVyVGl0bGUiLCJfdGl0bGUiLCJ0aXRsZVJlbmRlciIsInRpdGxlIiwiX19odG1sIiwiX2xhYmVsIiwiUmVhY3RET00iLCJhdXRvQ29tcGxldGUiLCJub1ZhbGlkYXRlIiwidGFyZ2V0IiwiX19pbml0VmFsdWUiLCJfX2luaXRBcGlWYWx1ZSIsIl9faW5pdE9iamVjdFZhbHVlIiwiX2V2ZW50cyIsImV2ZW50cyIsIl9iZWZvcmUiLCJfYWZ0ZXIiLCJvblZhbHVlRmluaXNoZWQiLCJmaW5kRE9NTm9kZSIsImJ0biIsIl9fb25JdGVtQ2hhbmdlIiwib25JdGVtQ2hhbmdlIiwib25JdGVtSW5wdXRDaGFuZ2UiLCJfX3JlbmRlckl0ZW1zIiwiX2dyb3VwcyIsImxlbmd0aCIsIl9oaWRkZW5zIiwiT2JqZWN0Iiwia2V5cyIsImhpZGRlbiIsIkZvcm0iLCJGb3JtSXRlbXMiLCJGb3JtSXRlbVZhbHVlIiwiRm9ybVRpdGxlIiwiRm9ybVBhbmVsIiwiTGFiZWwiLCJIaW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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QyxtQ0FBRCxDQUpMO0FBS2JDLFVBQVEsRUFBRUQsbUJBQU8sQ0FBQyxpQ0FBRCxDQUxKO0FBTWJvTixXQUFTLEVBQUVwTixtQkFBTyxDQUFDLG1DQUFELENBTkw7QUFPYnFOLGVBQWEsRUFBRXJOLG1CQUFPLENBQUMsMkNBQUQsQ0FQVDtBQVFic04sV0FBUyxFQUFFdE4sbUJBQU8sQ0FBQyxtQ0FBRCxDQVJMO0FBU2J1TixXQUFTLEVBQUV2TixtQkFBTyxDQUFDLG1DQUFELENBVEw7QUFVYjBJLFlBQVUsRUFBRTFJLG1CQUFPLENBQUMscUNBQUQsQ0FWTjtBQVdid04sT0FBSyxFQUFFeE4sbUJBQU8sQ0FBQywyQkFBRCxDQVhEO0FBWWJ5TixNQUFJLEVBQUV6TixtQkFBTyxDQUFDLHlCQUFEO0FBWkEsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWpheEZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhLXRpbWVzJyB9LFxuXHRcdFx0XHR7IHZhbHVlOiAn5o+Q5LqkJywgdHlwZTogJ3N1Ym1pdCcsIGljb246ICdmYS1lZGl0JyB9XG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWxpZGF0ZUVycm9yTWVzc2FnZTogbnVsbCxcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHZhbHVlOiB6bi5leHRlbmQoeyB9LCB0aGlzLnByb3BzLnZhbHVlKSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0cmVmczogeyB9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMucHJvcHMub25EaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uRGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzKTtcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRoaWRkZW5zOiB7fVxuXHRcdH0pO1xuXHRcdHZhciBfcmVmcyA9IHRoaXMucmVmcyxcblx0XHRcdF9yZWYgPSBudWxsO1xuXG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0X3JlZi5yZXNldCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMuc3RhdGUuaGlkZGVucyk7XG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5oaWRkZW5zKTtcblx0XHRpZih0aGlzLnByb3BzLm1lcmdlKXtcblx0XHRcdHZhciBfdGVtcCA9IHt9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy5tZXJnZV0gPSBfdmFsdWU7XG5cdFx0XHRfdmFsdWUgPSBfdGVtcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5leHRzKSwgX3ZhbHVlO1xuXHR9LFxuXHRfX2lzQXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHZhbHVlLl9fYXBpX18pe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFjayl7XG5cdFx0aWYoIXZhbHVlKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZih0aGlzLl9faXNBcGlWYWx1ZSh2YWx1ZSkgJiYgdGhpcy5zdGF0ZS52YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdHpuLmRlYnVnKCdBamF4Rm9ybSBzdWJtaXQgRGF0YTogJywgX3ZhbHVlKTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKGRhdGEuY29kZSA9PSAyMDApIHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEucmVzdWx0LCB0aGlzKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKCFfcmVmLnByb3BzLnN1Ym1pdHRlZCB8fCBfcmVmLnByb3BzLmVkaXRhYmxlID09PSBmYWxzZSl7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF9yZWYudmFsaWRhdGUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRcdFx0aWYoX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoX3JlZi5nZXRWYWx1ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYuZ2V0VmFsdWUoY2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfZGF0YVtfcmVmLnByb3BzLnZhbHVlS2V5IHx8IGtleV0gPSBfdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9kYXRhO1xuXHR9LFxuXHRfX3BhcnNlSXRlbVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlLmluZGV4T2YoXCJqYXZhc2NyaXB0OlwiKT09MCl7XG5cdFx0XHRyZXR1cm4gZXZhbCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSl7XG5cdFx0ZXZlbnQudmFsaWRhdGVWYWx1ZSA9IGZvcm1pdGVtLnZhbGlkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIGZvcm1pdGVtKTtcblx0fSxcblx0X19vblZhbGlkYXRlRXJyb3I6IGZ1bmN0aW9uIChlcnJNZXNzYWdlLCBmb3JtSXRlbSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWxpZGF0ZUVycm9yTWVzc2FnZTogJ+i+k+WFpeahhiDigJwnICsgZm9ybUl0ZW0ucHJvcHMubGFiZWwgKyAn4oCdICcgKyBlcnJNZXNzYWdlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25WYWxpZGF0ZVN1Y2Nlc3M6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsaWRhdGVFcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKGl0ZW0udHlwZT09J1pSSGlkZGVuJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oaWRkZW5zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlIT1udWxsID8gdGhpcy5fX3BhcnNlSXRlbVZhbHVlKGl0ZW0udmFsdWUpOiBudWxsLCBudWxsO1xuXHRcdH1cblx0XHRpZihpdGVtLmlucHV0ICYmIChpdGVtLmlucHV0ID09ICd6ci5mb3JtLkZvcm1UaXRsZScgfHwgaXRlbS5pbnB1dC5kaXNwbGF5TmFtZSA9PSAnWlJGb3JtVGl0bGUnKSkge1xuXHRcdFx0aWYodHlwZW9mIGl0ZW0uaW5wdXQgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRpdGVtLmlucHV0ID0gem4ucGF0aCh3aW5kb3csIGl0ZW0uaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDxpdGVtLmlucHV0IGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPjtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fSxcblx0XHRcdF92YWx1ZV8gPSBfdmFsdWVbX25hbWVdLFxuXHRcdFx0X3RleHRfID0gX3ZhbHVlW19uYW1lICsgJ19jb252ZXJ0J107XG5cdFx0aWYoX3ZhbHVlXyA9PSBudWxsICYmIGl0ZW0udmFsdWUgIT0gbnVsbCl7XG5cdFx0XHRfdmFsdWVfID0gaXRlbS52YWx1ZTtcblx0XHR9XG5cblx0XHRpZihfdGV4dF8gPT0gbnVsbCAmJiBpdGVtLnRleHQgIT0gbnVsbCl7XG5cdFx0XHRfdGV4dF8gPSBpdGVtLnRleHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxGb3JtSXRlbSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmfSBcblx0XHRcdFx0XHR2YWx1ZT17X3ZhbHVlX31cblx0XHRcdFx0XHR0ZXh0PXtfdGV4dF99XG5cdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxuXHRcdFx0XHRcdGZvcm09e3RoaXN9XG5cdFx0XHRcdFx0b25WYWxpZGF0ZUVycm9yPXt0aGlzLl9fb25WYWxpZGF0ZUVycm9yfVxuXHRcdFx0XHRcdG9uVmFsaWRhdGVTdWNjZXNzPXt0aGlzLl9fb25WYWxpZGF0ZVN1Y2Nlc3N9XG5cdFx0XHRcdFx0b25JbnB1dENoYW5nZT17IGl0ZW0ub25JbnB1dENoYW5nZSB8fCB0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2UgfSBcblx0XHRcdFx0XHRvbklucHV0RW50ZXI9eyBpdGVtLm9uSW5wdXRFbnRlciB8fCB0aGlzLnN1Ym1pdCB9IC8+O1xuXHR9LFxuXHRfX3JlbmRlclByb3BzRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGlmKHpuLmlzKF9kYXRhLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0X2RhdGEgPSBfZGF0YS5jYWxsKG51bGwsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXtfZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlclN0YXRlRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdGlmKHpuLmlzKF9kYXRhLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0X2RhdGEgPSBfZGF0YS5jYWxsKG51bGwsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXtfZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckdyb3VwczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuZ3JvdXBzKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmdyb3Vwcy5tYXAoZnVuY3Rpb24gKGdyb3VwKXtcblx0XHRcdFx0XHRcdHJldHVybiA8Rm9ybUdyb3VwIHsuLi5ncm91cH0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9IC8+O1xuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKXsgcmV0dXJuIG51bGw7IH1cblx0XHRyZXR1cm4gPEZvcm1CdXR0b25zIGRhdGE9e3RoaXMucHJvcHMuYnV0dG9uc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvblJlc2V0PXt0aGlzLnJlc2V0fSBvbkNhbmNlbD17dGhpcy5jYW5jZWx9IC8+O1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkaW5nOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGRhdGEsIHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRFcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IoeGhyKTtcblx0XHRwb3B1cC5ub3RpZmllci5lcnJvcihcIkVycm9yOiBcIiArIHhoci5tZXNzYWdlKTtcblx0fSxcblx0X19yZW5kZXJWYWxpZGF0ZUVycm9yOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JNZXNzYWdlKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS12YWxpZGF0ZS1lcnJvclwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInRpbWVzXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzUyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yTWVzc2FnZX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJQcm9wc0RhdGEoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJTdGF0ZURhdGEoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJWYWxpZGF0ZUVycm9yKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQnV0dG9ucygpfVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zdWJtaXR0aW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj7mj5DkuqTkuK0gLi4uIDwvc3Bhbj48L2Rpdj59XG5cdFx0XHRcdHt0aGlzLnByb3BzLmRpc2FibGVkICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1kaXNhYmxlZFwiPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uIDwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMuc3RhdGUuaGlkZGVucyA9IHt9O1xuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHRoaXMucHJvcHMudmFsdWUpKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9e3RoaXMuX19sb2FkaW5nUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uVmFsdWVMb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vblZhbHVlTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vblZhbHVlTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9eyh2YWx1ZSk9PnRoaXMuc3RhdGUudmFsdWUgPSB2YWx1ZX1cblx0XHRcdFx0XHRkYXRhUmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICYmIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09ICdvYmplY3QnKXtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlcigpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25FcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uRXJyb3J9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9ybUl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidGb3JtSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRlZDogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdGhpbnQ6IG51bGxcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzOiAnZGVmYXVsdCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRfZXJyb3IgPSB0aGlzLnByb3BzLmVycm9yIHx8IFwi5pWw5o2u6aqM6K+B6ZSZ6K+vXCI7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiBfZXJyb3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvcihfZXJyb3IsIHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBfY2FsbGJhY2sgPSBjYWxsYmFjayAmJiBjYWxsYmFjayhfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9jYWxsYmFjayA9PT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiBfZXJyb3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvciAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVFcnJvcihfZXJyb3IsIHRoaXMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN0YXR1czogJ3N1Y2Nlc3MnLFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fSk7XG5cdFx0XG5cdFx0dGhpcy5wcm9wcy5vblZhbGlkYXRlU3VjY2VzcyAmJiB0aGlzLnByb3BzLm9uVmFsaWRhdGVTdWNjZXNzKHRoaXMpO1xuXHRcdHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdkZWZhdWx0JyB9KTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcyksIDEwMDApO1xuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRpZihldmVudC52YWxpZGF0ZSA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPSBudWxsLCBmYWxzZTtcblx0XHR9XG5cblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fb25JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRpZihldmVudC52YWxpZGF0ZSA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPSBudWxsLCBmYWxzZTtcblx0XHR9XG5cblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0RW50ZXIgJiYgdGhpcy5wcm9wcy5vbklucHV0RW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJIZWFkZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGVhZGVyXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxpIGNsYXNzTmFtZT17XCJmYSBcIiArIHRoaXMucHJvcHMuaWNvbn0gLz48L3NwYW4+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5sYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X192YWx1ZVJlbmRlcjogZnVuY3Rpb24gKHByb3BzKXtcblx0XHRzd2l0Y2gocHJvcHMudHlwZSl7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tdmFsdWVcIj57cHJvcHMudGV4dCB8fCBwcm9wcy52YWx1ZX08L3NwYW4+KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9pbnB1dFByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB0aGlzLnByb3BzLmlucHV0UHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2JvZHktaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXHRcdGlmKF9pbnB1dCAmJiB0eXBlb2YgX2lucHV0ID09ICdmdW5jdGlvbicgJiYgIV9pbnB1dC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuY2FsbCh0aGlzLnByb3BzLmNvbnRleHQgfHwgbnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHQvKlxuXHRcdGlmKF9pbnB1dFByb3BzLmVkaXRhYmxlID09IGZhbHNlICYmIF9pbnB1dFByb3BzLnZhbHVlICE9IG51bGwpIHtcblx0XHRcdF9pbnB1dEVsZW1lbnQgPSB0aGlzLl9fdmFsdWVSZW5kZXIoX2lucHV0UHJvcHMpO1xuXHRcdH0qL1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktYm9keVwiIGRhdGEtenItcG9wdXAtdG9vbHRpcD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuXHRcdFx0XHR7IF9pbnB1dEVsZW1lbnQgfVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5zdWZmaXggJiYgPHNwYW4gY2xhc3NOYW1lPVwic3VmZml4XCI+e3RoaXMucHJvcHMuc3VmZml4fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmVuZGVyUHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3JlbmRlcicsIHRoaXMucHJvcHMucmVuZGVyQ2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfcmVuZGVyID0gdGhpcy5wcm9wcy5yZW5kZXI7XG5cdFx0aWYoX3JlbmRlciAmJiB0eXBlb2YgX3JlbmRlciA9PSAnZnVuY3Rpb24nICYmICFfcmVuZGVyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9yZW5kZXIgPSBfcmVuZGVyLmNhbGwobnVsbCwgdGhpcywgX3JlbmRlclByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX3JlbmRlckVsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfcmVuZGVyLCBfcmVuZGVyUHJvcHMpO1xuXHRcdGlmKF9yZW5kZXJFbGVtZW50KXtcblx0XHRcdHJldHVybiBfcmVuZGVyRWxlbWVudDtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e3RoaXMuX19yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0XHR7dGhpcy5fX3JlbmRlckJvZHkoKX1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0ISF0aGlzLnByb3BzLmhpbnQgJiYgPGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhpbnRcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiaW5mby1jaXJjbGVcIiBjbGFzc05hbWU9XCJpbmZvLWljb24gc3ZnLWlubGluZS0tZmEgZmEtaW5mby1jaXJjbGUgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5oaW50fVxuXHRcdFx0XHRcdFx0PC9kaXY+IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLXJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkYXRhLWxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG5cdFx0XHRcdGRhdGEtc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuXHRcdFx0XHRkYXRhLXN0YXR1cz17dGhpcy5zdGF0ZS5zdGF0dXN9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDb250ZW50KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSXRlbTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtSXRlbVZhbHVlJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnByb3BzLnR5cGUpIHtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS12YWx1ZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXIoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUl0ZW1zJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtLXZhbHVlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoKXtcblxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1QYW5lbCcsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyVGl0bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlUmVuZGVyICYmIHRoaXMucHJvcHMudGl0bGVSZW5kZXIoKTtcblx0XHRyZXR1cm4gX3RpdGxlIHx8IHRoaXMucHJvcHMudGl0bGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5fX3JlbmRlclRpdGxlKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1wYW5lbCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPnt0aGlzLl9fcmVuZGVyKCl9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1UaXRsZScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXRpdGxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ6Zi10aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkhpbnQnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy50ZXh0O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbS1oaW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISF0aGlzLnByb3BzLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiaGludC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3ZhbHVlICYmIDxkaXYgY2xhc3NOYW1lPVwiaGludC12YWx1ZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX3ZhbHVlIH19PjwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkxhYmVsJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfbGFiZWwgPSB0aGlzLnByb3BzLnRleHQgfHwgdGhpcy5wcm9wcy52YWx1ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0tbGFiZWwnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IF9sYWJlbCB9fT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5hdGl2ZUZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRhdXRvQ29tcGxldGU6ICdvZmYnLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXsgXG5cdFx0dGhpcy5fX2luaXRWYWx1ZSgpO1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoX3ZhbHVlKXtcblx0XHRcdGlmKF92YWx1ZS5fX2FwaV9fKXtcblx0XHRcdFx0dGhpcy5fX2luaXRBcGlWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX19pbml0T2JqZWN0VmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9faW5pdEFwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHMgfHwge30sXG5cdFx0XHRfYmVmb3JlID0gX2V2ZW50cy5iZWZvcmUsXG5cdFx0XHRfYWZ0ZXIgPSBfZXZlbnRzLmFmdGVyO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IHpuLmRhdGEuY3JlYXRlKHZhbHVlLCB6bi5leHRlbmQoX2V2ZW50cywge1xuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYmVmb3JlICYmIF9iZWZvcmUoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYWZ0ZXIgJiYgX2FmdGVyKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0fSxcblx0X19pbml0T2JqZWN0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9KTtcblx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZXNldCgpO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoZXZlbnQsIGJ0bil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uSXRlbUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UoKTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKCk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWVdfSBcblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZSArIFwiX2NvbnZlcnRcIl19IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25JdGVtQ2hhbmdlfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0vPlxuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZ3JvdXBzID0gdGhpcy5wcm9wcy5ncm91cHMgfHwgW107XG5cdFx0aWYoIV9ncm91cHMubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKSB7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9oaWRkZW5zID0gdGhpcy5wcm9wcy5oaWRkZW5zIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1uYXRpdmUtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259XG5cdFx0XHRcdGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG5cdFx0XHRcdG1ldGhvZD17dGhpcy5wcm9wcy5tZXRob2R9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0bm9WYWxpZGF0ZT17dGhpcy5wcm9wcy5ub1ZhbGlkYXRlfVxuXHRcdFx0XHR0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuXHRcdFx0XHRlbmNUeXBlPXt0aGlzLnByb3BzLmVuY1R5cGV9XG5cdFx0XHRcdG9uUmVzZXQ9e3RoaXMuX19vblJlc2V0fVxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5fX29uU3VibWl0fT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9oaWRkZW5zKS5tYXAoZnVuY3Rpb24gKGhpZGRlbiwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCBrZXk9eydoaWRkZW5fJyArIGhpZGRlbn0gdHlwZT1cImhpZGRlblwiIG5hbWU9e2hpZGRlbn0gdmFsdWU9e19oaWRkZW5zW2hpZGRlbl19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9mb3JtPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQWpheEZvcm06IHJlcXVpcmUoJy4vQWpheEZvcm0nKSxcbiAgICBGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcbiAgICBGb3JtQnV0dG9uczogcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpLFxuICAgIEZvcm1Hcm91cDogcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKSxcbiAgICBGb3JtSXRlbTogcmVxdWlyZSgnLi9Gb3JtSXRlbScpLFxuICAgIEZvcm1JdGVtczogcmVxdWlyZSgnLi9Gb3JtSXRlbXMnKSxcbiAgICBGb3JtSXRlbVZhbHVlOiByZXF1aXJlKCcuL0Zvcm1JdGVtVmFsdWUnKSxcbiAgICBGb3JtVGl0bGU6IHJlcXVpcmUoJy4vRm9ybVRpdGxlJyksXG4gICAgRm9ybVBhbmVsOiByZXF1aXJlKCcuL0Zvcm1QYW5lbCcpLFxuICAgIE5hdGl2ZUZvcm06IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpLFxuICAgIExhYmVsOiByZXF1aXJlKCcuL0xhYmVsJyksXG4gICAgSGludDogcmVxdWlyZSgnLi9IaW50Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==