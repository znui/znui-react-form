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
    return {
      submitting: false,
      hiddens: {},
      data: {},
      value: {},
      refs: {}
    };
  },
  componentDidMount: function componentDidMount() {},
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

    if (this.__isApiValue(value) && this.state.data) {
      return this.state.data.call(value, callback), this;
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
          this.props.onSubmitSuccess && this.props.onSubmitSuccess(data, this);
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
    this.props.onItemInputChange && this.props.onItemInputChange(event, input, formitem);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    if (item.type == 'ZRHidden') {
      return this.state.hiddens[item.name] = item.value != null ? this.__parseItemValue(item.value) : null, null;
    }

    var _name = item.name,
        _value = this.state.value || {};

    return /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
      key: index,
      ref: function ref(_ref2) {
        return _this.state.refs[_name] = _ref2;
      },
      value: item.value != null ? item.value : _value[_name],
      text: item.text != null ? item.text : _value[_name + '_convert'],
      onInputChange: item.onInputChange || this.__onItemInputChange,
      onInputEnter: item.onInputEnter || this.submit
    }));
  },
  __renderItems: function __renderItems() {
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
  __render: function __render() {
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, this.__renderItems(), this.__renderGroups(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Submitting ... ")), this.props.disabled && /*#__PURE__*/React.createElement("div", {
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
        onDataCreated: function onDataCreated(data) {
          return _this2.state.data = data;
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
    var _this = this;

    this.setState({
      value: value,
      text: text
    }, function () {
      return _this.validate();
    });
  },
  getValue: function getValue(callback) {
    return this.state.value;
  },
  validate: function validate(callback) {
    var _value = this.state.value;

    if (this.props.required && (_value === '' || _value == null)) {
      this.setState({
        status: 'error',
        errorMessage: this.props.error || "The field is required."
      });
      return;
    }

    var _callback = callback && callback(_value, this);

    if (_callback === false) {
      this.setState({
        status: 'error',
        errorMessage: this.props.error
      });
      return;
    }

    this.setState({
      status: 'success',
      errorMessage: null
    });
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
    event.formitem = this;
    this.state.value = event.value;

    var _return = this.props.onChange && this.props.onChange(event, input, this);

    if (_return === false) {
      return false;
    }

    this.props.onInputChange && this.props.onInputChange(event, input, this);
  },
  __onInputEnter: function __onInputEnter(event, input) {
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
  __renderBody: function __renderBody() {
    var _inputProps = zn.extend({}, this.props, {
      className: znui.react.classname('body-input', this.props.inputClassName),
      value: this.state.value,
      text: this.state.text,
      onChange: this.__onInputChange,
      onEnter: this.__onInputEnter
    });

    var _input = this.props.input;

    if (_input && typeof _input == 'function' && !_input.prototype.isReactComponent) {
      _input = _input.call(null, this, _inputProps);
    }

    var _inputElement = znui.react.createReactElement(_input, _inputProps);

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
  getValue: function getValue() {
    return null;
  },
  setValue: function setValue(value) {
    return this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-title', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("span", {
      className: "zf-title"
    }, this.props.title));
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
  FormTitle: __webpack_require__(/*! ./FormTitle */ "./FormTitle.js"),
  FormPanel: __webpack_require__(/*! ./FormPanel */ "./FormPanel.js"),
  NativeForm: __webpack_require__(/*! ./NativeForm */ "./NativeForm.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9OYXRpdmVGb3JtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGb3JtSXRlbSIsIkZvcm1Hcm91cCIsIkZvcm1CdXR0b25zIiwicG9wdXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwiYWN0aW9uIiwibWV0aG9kIiwiZW5jVHlwZSIsImJ1dHRvbnMiLCJ2YWx1ZSIsInR5cGUiLCJpY29uIiwiZ2V0SW5pdGlhbFN0YXRlIiwic3VibWl0dGluZyIsImhpZGRlbnMiLCJkYXRhIiwicmVmcyIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjYW5jZWwiLCJwcm9wcyIsIm9uQ2FuY2VsIiwicmVzZXQiLCJzZXRTdGF0ZSIsIl9yZWZzIiwiX3JlZiIsImtleSIsIl9fb25SZXNldCIsIm9uUmVzZXQiLCJnZXRWYWx1ZSIsImNhbGxiYWNrIiwiX3ZhbHVlIiwidmFsaWRhdGUiLCJ6biIsImV4dGVuZCIsInN0YXRlIiwibWVyZ2UiLCJfdGVtcCIsImV4dHMiLCJfX2lzQXBpVmFsdWUiLCJfX2FwaV9fIiwic2V0VmFsdWUiLCJjYWxsIiwiaXMiLCJfdGV4dCIsInN1Ym1pdCIsInByb2Nlc3MiLCJkZWJ1ZyIsIl9yZXR1cm4iLCJvblN1Ym1pdEJlZm9yZSIsIl9zdWJtaXRBcGkiLCJ1cmwiLCJzdWJtaXRBcGkiLCJfbWV0aG9kIiwiX2tleSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZXJyb3IiLCJjcmVhdGUiLCJiZWZvcmUiLCJzZW5kZXIiLCJfX2lzTW91bnRlZCIsIm9uU3VibWl0aW5nIiwiYmluZCIsImFmdGVyIiwib25TdWJtaXRlZCIsInN1Y2Nlc3MiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJ4aHIiLCJvblN1Ym1pdEVycm9yIiwiY29udGV4dCIsIl9fb25TdWJtaXQiLCJvblN1Ym1pdCIsIl9kYXRhIiwicmVxdWlyZWQiLCJ2YWx1ZUtleSIsIl9fcGFyc2VJdGVtVmFsdWUiLCJpbmRleE9mIiwiZXZhbCIsIl9fb25JdGVtSW5wdXRDaGFuZ2UiLCJldmVudCIsImlucHV0IiwiZm9ybWl0ZW0iLCJ2YWxpZGF0ZVZhbHVlIiwib25JdGVtSW5wdXRDaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiX25hbWUiLCJyZWYiLCJ0ZXh0Iiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRFbnRlciIsIl9fcmVuZGVySXRlbXMiLCJyZXNwb25zZUhhbmRsZXIiLCJfX3JlbmRlckdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwiX19yZW5kZXJCdXR0b25zIiwiX19vblZhbHVlTG9hZGluZyIsIm9uVmFsdWVMb2FkaW5nIiwiX19vblZhbHVlTG9hZGVkIiwib25WYWx1ZUxvYWRlZCIsIl9fb25WYWx1ZUxvYWRFcnJvciIsIm9uVmFsdWVMb2FkRXJyb3IiLCJub3RpZmllciIsIm1lc3NhZ2UiLCJfX3JlbmRlciIsInJlYWN0Iiwic3R5bGUiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJfX2xvYWRpbmdSZW5kZXIiLCJyZW5kZXIiLCJBamF4Rm9ybSIsIk5hdGl2ZUZvcm0iLCJidXR0b24iLCJfX2J1dHRvbkNsaWNrIiwib25DbGljayIsImxvYWRlciIsImxvYWRpbmciLCJpdGVtUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJfX29uRXJyb3IiLCJoaW50Iiwic3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwiX3RpbWVvdXQiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJfY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiX19vbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJfX29uSW5wdXRFbnRlciIsIm9uRW50ZXIiLCJfX3JlbmRlckhlYWRlciIsImxhYmVsIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dENsYXNzTmFtZSIsIl9pbnB1dCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50Iiwic3VmZml4IiwiX19yZW5kZXJDb250ZW50IiwiX3JlbmRlclByb3BzIiwicmVuZGVyQ2xhc3NOYW1lIiwiX3JlbmRlciIsIl9yZW5kZXJFbGVtZW50IiwibGF5b3V0Iiwic2l6ZSIsIl9fcmVuZGVyVGl0bGUiLCJfdGl0bGUiLCJ0aXRsZVJlbmRlciIsInRpdGxlIiwiUmVhY3RET00iLCJhdXRvQ29tcGxldGUiLCJub1ZhbGlkYXRlIiwidGFyZ2V0IiwiX19pbml0VmFsdWUiLCJfX2luaXRBcGlWYWx1ZSIsIl9faW5pdE9iamVjdFZhbHVlIiwiX2V2ZW50cyIsImV2ZW50cyIsIl9iZWZvcmUiLCJfYWZ0ZXIiLCJvblZhbHVlRmluaXNoZWQiLCJmaW5kRE9NTm9kZSIsImJ0biIsIl9fb25JdGVtQ2hhbmdlIiwib25JdGVtQ2hhbmdlIiwiX2dyb3VwcyIsImxlbmd0aCIsIl9oaWRkZW5zIiwiT2JqZWN0Iiwia2V5cyIsImhpZGRlbiIsIkZvcm0iLCJGb3Jt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QUFRLEVBQUV6SCxtQkFBTyxDQUFDLGlDQUFELENBREo7QUFFYjRMLE1BQUksRUFBRTVMLG1CQUFPLENBQUMseUJBQUQsQ0FGQTtBQUdiRyxhQUFXLEVBQUVILG1CQUFPLENBQUMsdUNBQUQsQ0FIUDtBQUliRSxXQUFTLEVBQUVGLG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtiQyxVQUFRLEVBQUVELG1CQUFPLENBQUMsaUNBQUQsQ0FMSjtBQU1iNkwsV0FBUyxFQUFFN0wsbUJBQU8sQ0FBQyxtQ0FBRCxDQU5MO0FBT2I4TCxXQUFTLEVBQUU5TCxtQkFBTyxDQUFDLG1DQUFELENBUEw7QUFRYjBILFlBQVUsRUFBRTFILG1CQUFPLENBQUMscUNBQUQ7QUFSTixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBamF4Rm9ybScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdGFjdGlvbjogbnVsbCxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRlbmNUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdGJ1dHRvbnM6IFtcblx0XHRcdFx0eyB2YWx1ZTogJ+WPlua2iCcsIHR5cGU6ICdjYW5jZWwnLCBpY29uOiAnZmEtdGltZXMnIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICfmj5DkuqQnLCB0eXBlOiAnc3VibWl0JywgaWNvbjogJ2ZhLWVkaXQnIH1cblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0ZGF0YTogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHRcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMpO1xuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHt9XG5cdFx0fSk7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGw7XG5cblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRfcmVmLnJlc2V0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy52YWxpZGF0ZShjYWxsYmFjayk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5zdGF0ZS5oaWRkZW5zKTtcblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmhpZGRlbnMpO1xuXHRcdGlmKHRoaXMucHJvcHMubWVyZ2Upe1xuXHRcdFx0dmFyIF90ZW1wID0ge307XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLm1lcmdlXSA9IF92YWx1ZTtcblx0XHRcdF92YWx1ZSA9IF90ZW1wO1xuXHRcdH1cblxuXHRcdHJldHVybiB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmV4dHMpLCBfdmFsdWU7XG5cdH0sXG5cdF9faXNBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHRpZighdmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHZhbHVlKSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdHpuLmRlYnVnKCdBamF4Rm9ybSBzdWJtaXQgRGF0YTogJywgX3ZhbHVlKTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3JlZi52YWxpZGF0ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihfcmVmLmdldFZhbHVlKXtcblx0XHRcdFx0X3ZhbHVlID0gX3JlZi5nZXRWYWx1ZShjYWxsYmFjayk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdF9kYXRhW19yZWYucHJvcHMudmFsdWVLZXkgfHwga2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHRldmVudC52YWxpZGF0ZVZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fTtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmfSBcblx0XHRcdFx0XHR2YWx1ZT17IGl0ZW0udmFsdWUgIT0gbnVsbCA/IGl0ZW0udmFsdWUgOiBfdmFsdWVbX25hbWVdIH1cblx0XHRcdFx0XHR0ZXh0PXsgaXRlbS50ZXh0ICE9IG51bGwgPyBpdGVtLnRleHQgOiBfdmFsdWVbX25hbWUgKyAnX2NvbnZlcnQnXX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXsgaXRlbS5vbklucHV0Q2hhbmdlIHx8IHRoaXMuX19vbkl0ZW1JbnB1dENoYW5nZSB9IFxuXHRcdFx0XHRcdG9uSW5wdXRFbnRlcj17IGl0ZW0ub25JbnB1dEVudGVyIHx8IHRoaXMuc3VibWl0IH0gLz47XG5cdH0sXG5cdF9fcmVuZGVySXRlbXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdF9kYXRhID0gX2RhdGEuY2FsbChudWxsLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17X2RhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0X19vblZhbHVlTG9hZGluZzogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBkYXRhLCBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yKHhocik7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi4gPC9zcGFuPjwvZGl2Pn1cblx0XHRcdFx0e3RoaXMucHJvcHMuZGlzYWJsZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWRpc2FibGVkXCI+PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19sb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TG9hZGluZyAuLi4gPC9zcGFuPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5zdGF0ZS5oaWRkZW5zID0ge307XG5cdFx0aWYodGhpcy5fX2lzQXBpVmFsdWUodGhpcy5wcm9wcy52YWx1ZSkpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17dGhpcy5fX2xvYWRpbmdSZW5kZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25WYWx1ZUxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uVmFsdWVMb2FkZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uVmFsdWVMb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17KGRhdGEpPT50aGlzLnN0YXRlLmRhdGEgPSBkYXRhfVxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9e3RoaXMuX19yZW5kZXJ9IC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMudmFsdWUgJiYgdHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT0gJ29iamVjdCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLl9fcmVuZGVyKCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBamF4Rm9ybSA9IHJlcXVpcmUoJy4vQWpheEZvcm0nKTtcbnZhciBOYXRpdmVGb3JtID0gcmVxdWlyZSgnLi9OYXRpdmVGb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J05hdGl2ZScpe1xuXHRcdFx0cmV0dXJuIDxOYXRpdmVGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8QWpheEZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnem51aS1yZWFjdC1idXR0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1CdXR0b25zJyxcblx0X19idXR0b25DbGljazogZnVuY3Rpb24gKGV2ZW50LCBidXR0b25zKXtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHN3aXRjaChfZGF0YS50eXBlKSB7XG5cdFx0XHRjYXNlICdyZXNldCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2FuY2VsJzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24uQnV0dG9ucyB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1idXR0b25zJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gb25DbGljaz17dGhpcy5fX2J1dHRvbkNsaWNrfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtR3JvdXAnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5pdGVtUmVuZGVyICYmIHRoaXMucHJvcHMuaXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0aWYoX3JldHVybiA9PT0gbnVsbCl7XG5cdFx0XHRfcmV0dXJuID0gPEZvcm1JdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fSAvPjtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3JldHVybjtcblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0X19vbkVycm9yOiBmdW5jdGlvbiAoeGhyKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1mb3JtLWdyb3VwXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLl9fb25FcnJvcn0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb3JtSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0Zvcm1JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0aGludDogbnVsbFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXM6ICdkZWZhdWx0Jyxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5fdGltZW91dCl7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSwgKCk9PnRoaXMudmFsaWRhdGUoKSk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHRpZih0aGlzLnByb3BzLnJlcXVpcmVkICYmIChfdmFsdWUgPT09ICcnIHx8IF92YWx1ZSA9PSBudWxsKSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3RhdHVzOiAnZXJyb3InLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2U6IHRoaXMucHJvcHMuZXJyb3IgfHwgXCJUaGUgZmllbGQgaXMgcmVxdWlyZWQuXCJcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBfY2FsbGJhY2sgPSBjYWxsYmFjayAmJiBjYWxsYmFjayhfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9jYWxsYmFjayA9PT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdGF0dXM6ICdzdWNjZXNzJyxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH0pO1xuXHRcdHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdkZWZhdWx0JyB9KTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcyksIDEwMDApO1xuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fb25JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0RW50ZXIgJiYgdGhpcy5wcm9wcy5vbklucHV0RW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJIZWFkZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGVhZGVyXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxpIGNsYXNzTmFtZT17XCJmYSBcIiArIHRoaXMucHJvcHMuaWNvbn0gLz48L3NwYW4+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5sYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2lucHV0UHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2JvZHktaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXHRcdGlmKF9pbnB1dCAmJiB0eXBlb2YgX2lucHV0ID09ICdmdW5jdGlvbicgJiYgIV9pbnB1dC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuY2FsbChudWxsLCB0aGlzLCBfaW5wdXRQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9pbnB1dEVsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfaW5wdXQsIF9pbnB1dFByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWJvZHlcIiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3VmZml4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInN1ZmZpeFwiPnt0aGlzLnByb3BzLnN1ZmZpeH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JlbmRlclByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdyZW5kZXInLCB0aGlzLnByb3BzLnJlbmRlckNsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX3JlbmRlciA9IHRoaXMucHJvcHMucmVuZGVyO1xuXHRcdGlmKF9yZW5kZXIgJiYgdHlwZW9mIF9yZW5kZXIgPT0gJ2Z1bmN0aW9uJyAmJiAhX3JlbmRlci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfcmVuZGVyID0gX3JlbmRlci5jYWxsKG51bGwsIHRoaXMsIF9yZW5kZXJQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXJFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX3JlbmRlciwgX3JlbmRlclByb3BzKTtcblx0XHRpZihfcmVuZGVyRWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX3JlbmRlckVsZW1lbnQ7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHt0aGlzLl9fcmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdFx0e3RoaXMuX19yZW5kZXJCb2R5KCl9XG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdCEhdGhpcy5wcm9wcy5oaW50ICYmIDxkaXYgY2xhc3NOYW1lPVwienJmaS1oaW50XCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImluZm8tY2lyY2xlXCIgY2xhc3NOYW1lPVwiaW5mby1pY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWluZm8tY2lyY2xlIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaGludH1cblx0XHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1yZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0ZGF0YS1sYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxuXHRcdFx0XHRkYXRhLXNpemU9e3RoaXMucHJvcHMuc2l6ZX1cblx0XHRcdFx0ZGF0YS1zdGF0dXM9e3RoaXMuc3RhdGUuc3RhdHVzfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ29udGVudCgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUl0ZW07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1QYW5lbCcsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyVGl0bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlUmVuZGVyICYmIHRoaXMucHJvcHMudGl0bGVSZW5kZXIoKTtcblx0XHRyZXR1cm4gX3RpdGxlIHx8IHRoaXMucHJvcHMudGl0bGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5fX3JlbmRlclRpdGxlKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1wYW5lbCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPnt0aGlzLl9fcmVuZGVyKCl9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1UaXRsZScsXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tdGl0bGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInpmLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJOYXRpdmVGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0YXV0b0NvbXBsZXRlOiAnb2ZmJyxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0bm9WYWxpZGF0ZTogbnVsbCxcblx0XHRcdHRhcmdldDogJ19zZWxmJyxcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMuX19pbml0VmFsdWUoKTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRpZihfdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRcdHRoaXMuX19pbml0QXBpVmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLl9faW5pdE9iamVjdFZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX2V2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRzIHx8IHt9LFxuXHRcdFx0X2JlZm9yZSA9IF9ldmVudHMuYmVmb3JlLFxuXHRcdFx0X2FmdGVyID0gX2V2ZW50cy5hZnRlcjtcblx0XHR0aGlzLnN0YXRlLmRhdGEgPSB6bi5kYXRhLmNyZWF0ZSh2YWx1ZSwgem4uZXh0ZW5kKF9ldmVudHMsIHtcblx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2JlZm9yZSAmJiBfYmVmb3JlKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2FmdGVyICYmIF9hZnRlcihzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0fSksIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdH0sXG5cdF9faW5pdE9iamVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyh2YWx1ZSwgdGhpcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fSk7XG5cdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVzZXQoKTtcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdHN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50LCBidG4pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19vbkl0ZW1DaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtQ2hhbmdlKCk7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lXX0gXG5cdFx0XHRcdFx0dGV4dD17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWUgKyBcIl9jb252ZXJ0XCJdfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uSXRlbUNoYW5nZX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXt0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2V9Lz5cblx0fSxcblx0X19yZW5kZXJJdGVtczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2dyb3VwcyA9IHRoaXMucHJvcHMuZ3JvdXBzIHx8IFtdO1xuXHRcdGlmKCFfZ3JvdXBzLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfaGlkZGVucyA9IHRoaXMucHJvcHMuaGlkZGVucyB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItbmF0aXZlLWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRhY3Rpb249e3RoaXMucHJvcHMuYWN0aW9ufVxuXHRcdFx0XHRhdXRvQ29tcGxldGU9e3RoaXMucHJvcHMuYXV0b0NvbXBsZXRlfVxuXHRcdFx0XHRtZXRob2Q9e3RoaXMucHJvcHMubWV0aG9kfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdG5vVmFsaWRhdGU9e3RoaXMucHJvcHMubm9WYWxpZGF0ZX1cblx0XHRcdFx0dGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH1cblx0XHRcdFx0ZW5jVHlwZT17dGhpcy5wcm9wcy5lbmNUeXBlfVxuXHRcdFx0XHRvblJlc2V0PXt0aGlzLl9fb25SZXNldH1cblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuX19vblN1Ym1pdH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfaGlkZGVucykubWFwKGZ1bmN0aW9uIChoaWRkZW4sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQga2V5PXsnaGlkZGVuXycgKyBoaWRkZW59IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtoaWRkZW59IHZhbHVlPXtfaGlkZGVuc1toaWRkZW5dfSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFqYXhGb3JtOiByZXF1aXJlKCcuL0FqYXhGb3JtJyksXG4gICAgRm9ybTogcmVxdWlyZSgnLi9Gb3JtJyksXG4gICAgRm9ybUJ1dHRvbnM6IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKSxcbiAgICBGb3JtR3JvdXA6IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyksXG4gICAgRm9ybUl0ZW06IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKSxcbiAgICBGb3JtVGl0bGU6IHJlcXVpcmUoJy4vRm9ybVRpdGxlJyksXG4gICAgRm9ybVBhbmVsOiByZXF1aXJlKCcuL0Zvcm1QYW5lbCcpLFxuICAgIE5hdGl2ZUZvcm06IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImJ1dHRvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=