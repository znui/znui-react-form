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
      action: null,
      method: "post",
      encType: "multipart/form-data",
      buttons: [{
        value: '取消',
        type: 'cancel',
        icon: 'faTimes'
      }, {
        value: '提交',
        type: 'submit',
        icon: 'faHandPointUp'
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
    }, "Submitting ... ")));
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
      required: false
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
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname('zr-form-item', this.props.className),
      "data-disabled": this.props.disabled,
      "data-required": this.props.required,
      "data-layout": this.props.layout,
      "data-size": this.props.size,
      "data-status": this.state.status
    }, this.__renderHeader(), this.__renderBody());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9OYXRpdmVGb3JtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGb3JtSXRlbSIsIkZvcm1Hcm91cCIsIkZvcm1CdXR0b25zIiwicG9wdXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImFjdGlvbiIsIm1ldGhvZCIsImVuY1R5cGUiLCJidXR0b25zIiwidmFsdWUiLCJ0eXBlIiwiaWNvbiIsImdldEluaXRpYWxTdGF0ZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiZGF0YSIsInJlZnMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwicHJvcHMiLCJvbkNhbmNlbCIsInJlc2V0Iiwic2V0U3RhdGUiLCJfcmVmcyIsIl9yZWYiLCJrZXkiLCJfX29uUmVzZXQiLCJvblJlc2V0IiwiZ2V0VmFsdWUiLCJjYWxsYmFjayIsIl92YWx1ZSIsInZhbGlkYXRlIiwiem4iLCJleHRlbmQiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX19hcGlfXyIsInNldFZhbHVlIiwiY2FsbCIsImlzIiwiX3RleHQiLCJzdWJtaXQiLCJwcm9jZXNzIiwiZGVidWciLCJfcmV0dXJuIiwib25TdWJtaXRCZWZvcmUiLCJfc3VibWl0QXBpIiwidXJsIiwic3VibWl0QXBpIiwiX21ldGhvZCIsIl9rZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVycm9yIiwiY3JlYXRlIiwiYmVmb3JlIiwic2VuZGVyIiwiX19pc01vdW50ZWQiLCJvblN1Ym1pdGluZyIsImJpbmQiLCJhZnRlciIsIm9uU3VibWl0ZWQiLCJzdWNjZXNzIiwib25TdWJtaXRTdWNjZXNzIiwieGhyIiwib25TdWJtaXRFcnJvciIsImNvbnRleHQiLCJfX29uU3VibWl0Iiwib25TdWJtaXQiLCJfZGF0YSIsInJlcXVpcmVkIiwidmFsdWVLZXkiLCJfX3BhcnNlSXRlbVZhbHVlIiwiaW5kZXhPZiIsImV2YWwiLCJfX29uSXRlbUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJpbnB1dCIsImZvcm1pdGVtIiwidmFsaWRhdGVWYWx1ZSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19pdGVtUmVuZGVyIiwiaXRlbSIsImluZGV4IiwibmFtZSIsIl9uYW1lIiwicmVmIiwidGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJvbklucHV0RW50ZXIiLCJfX3JlbmRlckl0ZW1zIiwicmVzcG9uc2VIYW5kbGVyIiwiX19yZW5kZXJHcm91cHMiLCJncm91cHMiLCJtYXAiLCJncm91cCIsIl9fcmVuZGVyQnV0dG9ucyIsIl9fb25WYWx1ZUxvYWRpbmciLCJvblZhbHVlTG9hZGluZyIsIl9fb25WYWx1ZUxvYWRlZCIsIm9uVmFsdWVMb2FkZWQiLCJfX29uVmFsdWVMb2FkRXJyb3IiLCJvblZhbHVlTG9hZEVycm9yIiwibm90aWZpZXIiLCJtZXNzYWdlIiwiX19yZW5kZXIiLCJyZWFjdCIsInN0eWxlIiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwiX19sb2FkaW5nUmVuZGVyIiwicmVuZGVyIiwiQWpheEZvcm0iLCJOYXRpdmVGb3JtIiwiYnV0dG9uIiwiX19idXR0b25DbGljayIsIm9uQ2xpY2siLCJsb2FkZXIiLCJsb2FkaW5nIiwiaXRlbVJlbmRlciIsIl9fb25Mb2FkaW5nIiwiX19vbkZpbmlzaGVkIiwiX19vbkVycm9yIiwiZGlzYWJsZWQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJfdGltZW91dCIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsIl9jYWxsYmFjayIsInNldFRpbWVvdXQiLCJfX29uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIl9fb25JbnB1dEVudGVyIiwib25FbnRlciIsIl9fcmVuZGVySGVhZGVyIiwibGFiZWwiLCJfX3JlbmRlckJvZHkiLCJfaW5wdXRQcm9wcyIsImlucHV0Q2xhc3NOYW1lIiwiX2lucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsIl9pbnB1dEVsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJzdWZmaXgiLCJsYXlvdXQiLCJzaXplIiwiX19yZW5kZXJUaXRsZSIsIl90aXRsZSIsInRpdGxlUmVuZGVyIiwidGl0bGUiLCJSZWFjdERPTSIsImF1dG9Db21wbGV0ZSIsIm5vVmFsaWRhdGUiLCJ0YXJnZXQiLCJfX2luaXRWYWx1ZSIsIl9faW5pdEFwaVZhbHVlIiwiX19pbml0T2JqZWN0VmFsdWUiLCJfZXZlbnRzIiwiZXZlbnRzIiwiX2JlZm9yZSIsIl9hZnRlciIsIm9uVmFsdWVGaW5pc2hlZCIsImZpbmRET01Ob2RlIiwiYnRuIiwiX19vbkl0ZW1DaGFuZ2UiLCJvbkl0ZW1DaGFuZ2UiLCJfZ3JvdXBzIiwibGVuZ3RoIiwiX2hpZGRlbnMiLCJPYmplY3QiLCJrZXlzIiwiaGlkZGVuIiwiRm9ybSIsIkZvcm1UaXRsZSIsIkZvcm1QYW5lbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWpheEZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICfmj5DkuqQnLCB0eXBlOiAnc3VibWl0JywgaWNvbjogJ2ZhSGFuZFBvaW50VXAnIH1cblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0ZGF0YTogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHRcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMpO1xuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHt9XG5cdFx0fSk7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGw7XG5cblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRfcmVmLnJlc2V0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy52YWxpZGF0ZShjYWxsYmFjayk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5zdGF0ZS5oaWRkZW5zKTtcblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmhpZGRlbnMpO1xuXHRcdGlmKHRoaXMucHJvcHMubWVyZ2Upe1xuXHRcdFx0dmFyIF90ZW1wID0ge307XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLm1lcmdlXSA9IF92YWx1ZTtcblx0XHRcdF92YWx1ZSA9IF90ZW1wO1xuXHRcdH1cblxuXHRcdHJldHVybiB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmV4dHMpLCBfdmFsdWU7XG5cdH0sXG5cdF9faXNBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHRpZighdmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHZhbHVlKSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdHpuLmRlYnVnKCdBamF4Rm9ybSBzdWJtaXQgRGF0YTogJywgX3ZhbHVlKTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3JlZi52YWxpZGF0ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihfcmVmLmdldFZhbHVlKXtcblx0XHRcdFx0X3ZhbHVlID0gX3JlZi5nZXRWYWx1ZShjYWxsYmFjayk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdF9kYXRhW19yZWYucHJvcHMudmFsdWVLZXkgfHwga2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHRldmVudC52YWxpZGF0ZVZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fTtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmfSBcblx0XHRcdFx0XHR2YWx1ZT17IGl0ZW0udmFsdWUgIT0gbnVsbCA/IGl0ZW0udmFsdWUgOiBfdmFsdWVbX25hbWVdIH1cblx0XHRcdFx0XHR0ZXh0PXsgaXRlbS50ZXh0ICE9IG51bGwgPyBpdGVtLnRleHQgOiBfdmFsdWVbX25hbWUgKyAnX2NvbnZlcnQnXX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXsgaXRlbS5vbklucHV0Q2hhbmdlIHx8IHRoaXMuX19vbkl0ZW1JbnB1dENoYW5nZSB9IFxuXHRcdFx0XHRcdG9uSW5wdXRFbnRlcj17IGl0ZW0ub25JbnB1dEVudGVyIHx8IHRoaXMuc3VibWl0IH0gLz47XG5cdH0sXG5cdF9fcmVuZGVySXRlbXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdF9kYXRhID0gX2RhdGEuY2FsbChudWxsLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17X2RhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0X19vblZhbHVlTG9hZGluZzogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBkYXRhLCBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yKHhocik7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi4gPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uIDwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMuc3RhdGUuaGlkZGVucyA9IHt9O1xuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHRoaXMucHJvcHMudmFsdWUpKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9e3RoaXMuX19sb2FkaW5nUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uVmFsdWVMb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vblZhbHVlTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vblZhbHVlTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9eyhkYXRhKT0+dGhpcy5zdGF0ZS5kYXRhID0gZGF0YX1cblx0XHRcdFx0XHRkYXRhUmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICYmIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09ICdvYmplY3QnKXtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlcigpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25FcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uRXJyb3J9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9ybUl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidGb3JtSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXM6ICdkZWZhdWx0Jyxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5fdGltZW91dCl7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0fSwgKCk9PnRoaXMudmFsaWRhdGUoKSk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHRpZih0aGlzLnByb3BzLnJlcXVpcmVkICYmIChfdmFsdWUgPT09ICcnIHx8IF92YWx1ZSA9PSBudWxsKSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3RhdHVzOiAnZXJyb3InLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2U6IHRoaXMucHJvcHMuZXJyb3IgfHwgXCJUaGUgZmllbGQgaXMgcmVxdWlyZWQuXCJcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBfY2FsbGJhY2sgPSBjYWxsYmFjayAmJiBjYWxsYmFjayhfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9jYWxsYmFjayA9PT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdGF0dXM6ICdzdWNjZXNzJyxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH0pO1xuXHRcdHRoaXMuX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6ICdkZWZhdWx0JyB9KTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcyksIDEwMDApO1xuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fb25JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5mb3JtaXRlbSA9IHRoaXM7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0RW50ZXIgJiYgdGhpcy5wcm9wcy5vbklucHV0RW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJIZWFkZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGVhZGVyXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPjxpIGNsYXNzTmFtZT17XCJmYSBcIiArIHRoaXMucHJvcHMuaWNvbn0gLz48L3NwYW4+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5sYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2lucHV0UHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2JvZHktaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXHRcdGlmKF9pbnB1dCAmJiB0eXBlb2YgX2lucHV0ID09ICdmdW5jdGlvbicgJiYgIV9pbnB1dC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCl7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuY2FsbChudWxsLCB0aGlzLCBfaW5wdXRQcm9wcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9pbnB1dEVsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfaW5wdXQsIF9pbnB1dFByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWJvZHlcIiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3VmZml4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInN1ZmZpeFwiPnt0aGlzLnByb3BzLnN1ZmZpeH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLXJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkYXRhLWxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG5cdFx0XHRcdGRhdGEtc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuXHRcdFx0XHRkYXRhLXN0YXR1cz17dGhpcy5zdGF0ZS5zdGF0dXN9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCb2R5KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSXRlbTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVBhbmVsJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J05hdGl2ZScpe1xuXHRcdFx0cmV0dXJuIDxOYXRpdmVGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8QWpheEZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJUaXRsZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF90aXRsZSA9IHRoaXMucHJvcHMudGl0bGVSZW5kZXIgJiYgdGhpcy5wcm9wcy50aXRsZVJlbmRlcigpO1xuXHRcdHJldHVybiBfdGl0bGUgfHwgdGhpcy5wcm9wcy50aXRsZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLl9fcmVuZGVyVGl0bGUoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXBhbmVsJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISFfdGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50XCI+e3RoaXMuX19yZW5kZXIoKX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVRpdGxlJyxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS10aXRsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiemYtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5hdGl2ZUZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRhdXRvQ29tcGxldGU6ICdvZmYnLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXsgXG5cdFx0dGhpcy5fX2luaXRWYWx1ZSgpO1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoX3ZhbHVlKXtcblx0XHRcdGlmKF92YWx1ZS5fX2FwaV9fKXtcblx0XHRcdFx0dGhpcy5fX2luaXRBcGlWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX19pbml0T2JqZWN0VmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9faW5pdEFwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHMgfHwge30sXG5cdFx0XHRfYmVmb3JlID0gX2V2ZW50cy5iZWZvcmUsXG5cdFx0XHRfYWZ0ZXIgPSBfZXZlbnRzLmFmdGVyO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IHpuLmRhdGEuY3JlYXRlKHZhbHVlLCB6bi5leHRlbmQoX2V2ZW50cywge1xuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYmVmb3JlICYmIF9iZWZvcmUoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYWZ0ZXIgJiYgX2FmdGVyKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0fSxcblx0X19pbml0T2JqZWN0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9KTtcblx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZXNldCgpO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoZXZlbnQsIGJ0bil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uSXRlbUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UoKTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKCk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWVdfSBcblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZSArIFwiX2NvbnZlcnRcIl19IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25JdGVtQ2hhbmdlfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0vPlxuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZ3JvdXBzID0gdGhpcy5wcm9wcy5ncm91cHMgfHwgW107XG5cdFx0aWYoIV9ncm91cHMubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKSB7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9oaWRkZW5zID0gdGhpcy5wcm9wcy5oaWRkZW5zIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1uYXRpdmUtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259XG5cdFx0XHRcdGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG5cdFx0XHRcdG1ldGhvZD17dGhpcy5wcm9wcy5tZXRob2R9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0bm9WYWxpZGF0ZT17dGhpcy5wcm9wcy5ub1ZhbGlkYXRlfVxuXHRcdFx0XHR0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuXHRcdFx0XHRlbmNUeXBlPXt0aGlzLnByb3BzLmVuY1R5cGV9XG5cdFx0XHRcdG9uUmVzZXQ9e3RoaXMuX19vblJlc2V0fVxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5fX29uU3VibWl0fT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9oaWRkZW5zKS5tYXAoZnVuY3Rpb24gKGhpZGRlbiwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCBrZXk9eydoaWRkZW5fJyArIGhpZGRlbn0gdHlwZT1cImhpZGRlblwiIG5hbWU9e2hpZGRlbn0gdmFsdWU9e19oaWRkZW5zW2hpZGRlbl19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9mb3JtPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQWpheEZvcm06IHJlcXVpcmUoJy4vQWpheEZvcm0nKSxcbiAgICBGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcbiAgICBGb3JtQnV0dG9uczogcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpLFxuICAgIEZvcm1Hcm91cDogcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKSxcbiAgICBGb3JtSXRlbTogcmVxdWlyZSgnLi9Gb3JtSXRlbScpLFxuICAgIEZvcm1UaXRsZTogcmVxdWlyZSgnLi9Gb3JtVGl0bGUnKSxcbiAgICBGb3JtUGFuZWw6IHJlcXVpcmUoJy4vRm9ybVBhbmVsJyksXG4gICAgTmF0aXZlRm9ybTogcmVxdWlyZSgnLi9OYXRpdmVGb3JtJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==