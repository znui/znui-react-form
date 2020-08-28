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

var icon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon");

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
    }, this.props.icon && /*#__PURE__*/React.createElement(icon.SVGIcon, {
      icon: this.props.icon
    }), this.props.label && /*#__PURE__*/React.createElement("div", {
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

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVBhbmVsLmpzIiwid2VicGFjazovLy8uL0Zvcm1UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9OYXRpdmVGb3JtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRm9ybUl0ZW0iLCJGb3JtR3JvdXAiLCJGb3JtQnV0dG9ucyIsInBvcHVwIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJzdWJtaXR0aW5nIiwiaGlkZGVucyIsImRhdGEiLCJyZWZzIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbCIsInByb3BzIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJfcmVmIiwia2V5IiwiX19vblJlc2V0Iiwib25SZXNldCIsImdldFZhbHVlIiwiY2FsbGJhY2siLCJfdmFsdWUiLCJ2YWxpZGF0ZSIsInpuIiwiZXh0ZW5kIiwic3RhdGUiLCJtZXJnZSIsIl90ZW1wIiwiZXh0cyIsIl9faXNBcGlWYWx1ZSIsIl9fYXBpX18iLCJzZXRWYWx1ZSIsImNhbGwiLCJpcyIsIl90ZXh0Iiwic3VibWl0IiwicHJvY2VzcyIsImRlYnVnIiwiX3JldHVybiIsIm9uU3VibWl0QmVmb3JlIiwiX3N1Ym1pdEFwaSIsInVybCIsInN1Ym1pdEFwaSIsIl9tZXRob2QiLCJfa2V5IiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlcnJvciIsImNyZWF0ZSIsImJlZm9yZSIsInNlbmRlciIsIl9faXNNb3VudGVkIiwib25TdWJtaXRpbmciLCJiaW5kIiwiYWZ0ZXIiLCJvblN1Ym1pdGVkIiwic3VjY2VzcyIsIm9uU3VibWl0U3VjY2VzcyIsInhociIsIm9uU3VibWl0RXJyb3IiLCJjb250ZXh0IiwiX19vblN1Ym1pdCIsIm9uU3VibWl0IiwiX2RhdGEiLCJyZXF1aXJlZCIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImV2ZW50IiwiaW5wdXQiLCJmb3JtaXRlbSIsInZhbGlkYXRlVmFsdWUiLCJvbkl0ZW1JbnB1dENoYW5nZSIsIl9faXRlbVJlbmRlciIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJfbmFtZSIsInJlZiIsInRleHQiLCJvbklucHV0Q2hhbmdlIiwib25JbnB1dEVudGVyIiwiX19yZW5kZXJJdGVtcyIsInJlc3BvbnNlSGFuZGxlciIsIl9fcmVuZGVyR3JvdXBzIiwiZ3JvdXBzIiwibWFwIiwiZ3JvdXAiLCJfX3JlbmRlckJ1dHRvbnMiLCJfX29uVmFsdWVMb2FkaW5nIiwib25WYWx1ZUxvYWRpbmciLCJfX29uVmFsdWVMb2FkZWQiLCJvblZhbHVlTG9hZGVkIiwiX19vblZhbHVlTG9hZEVycm9yIiwib25WYWx1ZUxvYWRFcnJvciIsIm5vdGlmaWVyIiwibWVzc2FnZSIsIl9fcmVuZGVyIiwicmVhY3QiLCJzdHlsZSIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsIl9fbG9hZGluZ1JlbmRlciIsInJlbmRlciIsIkFqYXhGb3JtIiwiTmF0aXZlRm9ybSIsImJ1dHRvbiIsIl9fYnV0dG9uQ2xpY2siLCJvbkNsaWNrIiwibG9hZGVyIiwibG9hZGluZyIsIml0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsIl9fb25FcnJvciIsImRpc2FibGVkIiwic3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwiX3RpbWVvdXQiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJfY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiX19vbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJfX29uSW5wdXRFbnRlciIsIm9uRW50ZXIiLCJfX3JlbmRlckhlYWRlciIsImxhYmVsIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dENsYXNzTmFtZSIsIl9pbnB1dCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50Iiwic3VmZml4IiwibGF5b3V0Iiwic2l6ZSIsIl9fcmVuZGVyVGl0bGUiLCJfdGl0bGUiLCJ0aXRsZVJlbmRlciIsInRpdGxlIiwiUmVhY3RET00iLCJhdXRvQ29tcGxldGUiLCJub1ZhbGlkYXRlIiwidGFyZ2V0IiwiX19pbml0VmFsdWUiLCJfX2luaXRBcGlWYWx1ZSIsIl9faW5pdE9iamVjdFZhbHVlIiwiX2V2ZW50cyIsImV2ZW50cyIsIl9iZWZvcmUiLCJfYWZ0ZXIiLCJvblZhbHVlRmluaXNoZWQiLCJmaW5kRE9NTm9kZSIsImJ0biIsIl9fb25JdGVtQ2hhbmdlIiwib25JdGVtQ2hhbmdlIiwiX2dyb3VwcyIsImxlbmd0aCIsIl9oaWRkZW5zIiwiT2JqZWN0Iiwia2V5cyIsImhpZGRlbiIsIkZvcm0iLCJGb3JtVGl0bGUiLCJGb3JtUGFuZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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ekgsbUJBQU8sQ0FBQyxxQ0FBRDtBQVJOLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWpheEZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICfmj5DkuqQnLCB0eXBlOiAnc3VibWl0JywgaWNvbjogJ2ZhSGFuZFBvaW50VXAnIH1cblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0ZGF0YTogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHRcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMpO1xuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHt9XG5cdFx0fSk7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGw7XG5cblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRfcmVmLnJlc2V0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy52YWxpZGF0ZShjYWxsYmFjayk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5zdGF0ZS5oaWRkZW5zKTtcblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmhpZGRlbnMpO1xuXHRcdGlmKHRoaXMucHJvcHMubWVyZ2Upe1xuXHRcdFx0dmFyIF90ZW1wID0ge307XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLm1lcmdlXSA9IF92YWx1ZTtcblx0XHRcdF92YWx1ZSA9IF90ZW1wO1xuXHRcdH1cblxuXHRcdHJldHVybiB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmV4dHMpLCBfdmFsdWU7XG5cdH0sXG5cdF9faXNBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHRpZighdmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHZhbHVlKSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdHpuLmRlYnVnKCdBamF4Rm9ybSBzdWJtaXQgRGF0YTogJywgX3ZhbHVlKTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3JlZi52YWxpZGF0ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihfcmVmLmdldFZhbHVlKXtcblx0XHRcdFx0X3ZhbHVlID0gX3JlZi5nZXRWYWx1ZShjYWxsYmFjayk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF9yZWYucHJvcHMucmVxdWlyZWQgJiYgX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdF9kYXRhW19yZWYucHJvcHMudmFsdWVLZXkgfHwga2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHRldmVudC52YWxpZGF0ZVZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fTtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmfSBcblx0XHRcdFx0XHR2YWx1ZT17IGl0ZW0udmFsdWUgIT0gbnVsbCA/IGl0ZW0udmFsdWUgOiBfdmFsdWVbX25hbWVdIH1cblx0XHRcdFx0XHR0ZXh0PXsgaXRlbS50ZXh0ICE9IG51bGwgPyBpdGVtLnRleHQgOiBfdmFsdWVbX25hbWUgKyAnX2NvbnZlcnQnXX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXsgaXRlbS5vbklucHV0Q2hhbmdlIHx8IHRoaXMuX19vbkl0ZW1JbnB1dENoYW5nZSB9IFxuXHRcdFx0XHRcdG9uSW5wdXRFbnRlcj17IGl0ZW0ub25JbnB1dEVudGVyIHx8IHRoaXMuc3VibWl0IH0gLz47XG5cdH0sXG5cdF9fcmVuZGVySXRlbXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdF9kYXRhID0gX2RhdGEuY2FsbChudWxsLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17X2RhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0X19vblZhbHVlTG9hZGluZzogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBkYXRhLCBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yKHhocik7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi4gPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uIDwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMuc3RhdGUuaGlkZGVucyA9IHt9O1xuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHRoaXMucHJvcHMudmFsdWUpKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9e3RoaXMuX19sb2FkaW5nUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uVmFsdWVMb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vblZhbHVlTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vblZhbHVlTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9eyhkYXRhKT0+dGhpcy5zdGF0ZS5kYXRhID0gZGF0YX1cblx0XHRcdFx0XHRkYXRhUmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICYmIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09ICdvYmplY3QnKXtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlcigpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25FcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uRXJyb3J9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKTtcblxudmFyIEZvcm1JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonRm9ybUl0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzOiAnZGVmYXVsdCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0sICgpPT50aGlzLnZhbGlkYXRlKCkpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yIHx8IFwiVGhlIGZpZWxkIGlzIHJlcXVpcmVkLlwiXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgX2NhbGxiYWNrID0gY2FsbGJhY2sgJiYgY2FsbGJhY2soX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfY2FsbGJhY2sgPT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lcnJvclxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0XHR0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRpZih0aGlzLl9faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnZGVmYXVsdCcgfSk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpLCAxMDAwKTtcblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25JbnB1dEVudGVyICYmIHRoaXMucHJvcHMub25JbnB1dEVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVySGVhZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhlYWRlclwiPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5pY29uICYmIDxpY29uLlNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29ufSAvPn1cblx0XHRcdFx0e3RoaXMucHJvcHMubGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9pbnB1dFByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdib2R5LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX2lucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblx0XHRpZihfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PSAnZnVuY3Rpb24nICYmICFfaW5wdXQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LmNhbGwobnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienJmaS1ib2R5XCIgZGF0YS16ci1wb3B1cC10b29sdGlwPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG5cdFx0XHRcdHsgX2lucHV0RWxlbWVudCB9XG5cdFx0XHRcdHt0aGlzLnByb3BzLnN1ZmZpeCAmJiA8c3BhbiBjbGFzc05hbWU9XCJzdWZmaXhcIj57dGhpcy5wcm9wcy5zdWZmaXh9PC9zcGFuPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1pdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1yZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0ZGF0YS1sYXlvdXQ9e3RoaXMucHJvcHMubGF5b3V0fVxuXHRcdFx0XHRkYXRhLXNpemU9e3RoaXMucHJvcHMuc2l6ZX1cblx0XHRcdFx0ZGF0YS1zdGF0dXM9e3RoaXMuc3RhdGUuc3RhdHVzfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySGVhZGVyKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQm9keSgpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUl0ZW07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1QYW5lbCcsXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyVGl0bGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlUmVuZGVyICYmIHRoaXMucHJvcHMudGl0bGVSZW5kZXIoKTtcblx0XHRyZXR1cm4gX3RpdGxlIHx8IHRoaXMucHJvcHMudGl0bGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5fX3JlbmRlclRpdGxlKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS1wYW5lbCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCEhX3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPnt0aGlzLl9fcmVuZGVyKCl9PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1UaXRsZScsXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tdGl0bGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInpmLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5hdGl2ZUZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRhdXRvQ29tcGxldGU6ICdvZmYnLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXsgXG5cdFx0dGhpcy5fX2luaXRWYWx1ZSgpO1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoX3ZhbHVlKXtcblx0XHRcdGlmKF92YWx1ZS5fX2FwaV9fKXtcblx0XHRcdFx0dGhpcy5fX2luaXRBcGlWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX19pbml0T2JqZWN0VmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9faW5pdEFwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHMgfHwge30sXG5cdFx0XHRfYmVmb3JlID0gX2V2ZW50cy5iZWZvcmUsXG5cdFx0XHRfYWZ0ZXIgPSBfZXZlbnRzLmFmdGVyO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IHpuLmRhdGEuY3JlYXRlKHZhbHVlLCB6bi5leHRlbmQoX2V2ZW50cywge1xuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYmVmb3JlICYmIF9iZWZvcmUoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYWZ0ZXIgJiYgX2FmdGVyKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0fSxcblx0X19pbml0T2JqZWN0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9KTtcblx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZXNldCgpO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoZXZlbnQsIGJ0bil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uSXRlbUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UoKTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKCk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWVdfSBcblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZSArIFwiX2NvbnZlcnRcIl19IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25JdGVtQ2hhbmdlfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0vPlxuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZ3JvdXBzID0gdGhpcy5wcm9wcy5ncm91cHMgfHwgW107XG5cdFx0aWYoIV9ncm91cHMubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKSB7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9oaWRkZW5zID0gdGhpcy5wcm9wcy5oaWRkZW5zIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1uYXRpdmUtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259XG5cdFx0XHRcdGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG5cdFx0XHRcdG1ldGhvZD17dGhpcy5wcm9wcy5tZXRob2R9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0bm9WYWxpZGF0ZT17dGhpcy5wcm9wcy5ub1ZhbGlkYXRlfVxuXHRcdFx0XHR0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuXHRcdFx0XHRlbmNUeXBlPXt0aGlzLnByb3BzLmVuY1R5cGV9XG5cdFx0XHRcdG9uUmVzZXQ9e3RoaXMuX19vblJlc2V0fVxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5fX29uU3VibWl0fT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9oaWRkZW5zKS5tYXAoZnVuY3Rpb24gKGhpZGRlbiwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCBrZXk9eydoaWRkZW5fJyArIGhpZGRlbn0gdHlwZT1cImhpZGRlblwiIG5hbWU9e2hpZGRlbn0gdmFsdWU9e19oaWRkZW5zW2hpZGRlbl19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9mb3JtPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQWpheEZvcm06IHJlcXVpcmUoJy4vQWpheEZvcm0nKSxcbiAgICBGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcbiAgICBGb3JtQnV0dG9uczogcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpLFxuICAgIEZvcm1Hcm91cDogcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKSxcbiAgICBGb3JtSXRlbTogcmVxdWlyZSgnLi9Gb3JtSXRlbScpLFxuICAgIEZvcm1UaXRsZTogcmVxdWlyZSgnLi9Gb3JtVGl0bGUnKSxcbiAgICBGb3JtUGFuZWw6IHJlcXVpcmUoJy4vRm9ybVBhbmVsJyksXG4gICAgTmF0aXZlRm9ybTogcmVxdWlyZSgnLi9OYXRpdmVGb3JtJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=