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

var React = znui.React || __webpack_require__(/*! react */ "react");

var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");

var FormGroup = __webpack_require__(/*! ./FormGroup */ "./FormGroup.js");

var FormButtons = __webpack_require__(/*! ./FormButtons */ "./FormButtons.js");

module.exports = React.createClass({
  displayName: 'ZRAjaxForm',
  getDefaultProps: function getDefaultProps() {
    return {
      action: null,
      method: "post",
      noValidate: null,
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
      refs: {}
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
          submitting: false
        });
        this.setValue(data);
        this.props.onValueFinished && this.props.onValueFinished(data, this);
        _after && _after(sender, data);
      }.bind(this)
    }), this.props.context);
  },
  __initObjectValue: function __initObjectValue(value) {
    this.props.onValueLoading && this.props.onValueLoading(value, this);
    this.setValue(value);
    this.props.onValueFinished && this.props.onValueFinished(value, this);
  },
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
    var _value = this.validate();

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
  setValue: function setValue(value, callback) {
    if (!value) {
      return this;
    }

    if (value.__api__) {
      return this.state.data.call(value), this;
    }

    if (zn.is(value, 'object')) {
      for (var key in this.state.hiddens) {
        this.state.hiddens[key] = value[key] || this.state.hiddens[key];
      }

      var _refs = this.refs;
      setTimeout(function () {
        var _ref = null,
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
      }, 0);
    }
  },
  submit: function submit(callback) {
    var _value = this.getValue();

    if (!_value) {
      return false;
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
      this.state.submit.call(_submitApi);
    } else {
      this.state.submit = zn.data.create(_submitApi, {
        before: function (sender, data) {
          this.setState({
            submitting: true
          });
          this.props.onSubmiting && this.props.onSubmiting(data, this);
        }.bind(this),
        after: function (sender, data) {
          this.setState({
            submitting: false
          });
          this.props.onSubmited && this.props.onSubmited(data, this);
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
        _noValidate = this.props.noValidate,
        _value = null;

    for (var key in _refs) {
      _ref = _refs[key];

      if (!_ref) {
        continue;
      }

      if (!_noValidate && _ref.validate && !_ref.validate(callback)) {
        return false;
      }

      if (_ref.getValue) {
        _value = _ref.getValue(callback);
      }

      if (_value === false) {
        return false;
      }

      if (_value === null) {
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
    var _value = formitem.validate();

    this.props.onItemInputChange && this.props.onItemInputChange(event, input, formitem);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    if (item.type == 'ZRHidden') {
      return this.state.hiddens[item.name] = item.value != null ? this.__parseItemValue(item.value) : null, null;
    }

    return /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
      key: index,
      ref: function ref(_ref2) {
        return _this.state.refs[item.name] = _ref2;
      },
      onInputChange: this.__onItemInputChange,
      onInputEnter: this.submit
    }));
  },
  __renderItems: function __renderItems() {
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: this.props.data,
      itemRender: this.__itemRender
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
    this.state.hiddens = {};
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, this.__renderItems(), this.__renderGroups(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Submitting ...")));
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
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-form-group", this.props.className),
      style: znui.react.style(this.props.style)
    }, /*#__PURE__*/React.createElement(znui.react.DataView, _extends({}, this.props, {
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
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
      required: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      status: 'default',
      value: this.props.value,
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
    this.state.value = event.value;

    var _return = this.props.onEnter && this.props.onEnter(event, input, this);

    if (_return === false) {
      return false;
    }

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

    var _inputElement = znui.react.createReactElement(this.props.input, _inputProps);

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

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVRpdGxlLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRm9ybUl0ZW0iLCJGb3JtR3JvdXAiLCJGb3JtQnV0dG9ucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiYWN0aW9uIiwibWV0aG9kIiwibm9WYWxpZGF0ZSIsImVuY1R5cGUiLCJidXR0b25zIiwidmFsdWUiLCJ0eXBlIiwiaWNvbiIsImdldEluaXRpYWxTdGF0ZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiZGF0YSIsInJlZnMiLCJjb21wb25lbnREaWRNb3VudCIsIl9faW5pdFZhbHVlIiwiX3ZhbHVlIiwicHJvcHMiLCJfX2FwaV9fIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiYmVmb3JlIiwiX2FmdGVyIiwiYWZ0ZXIiLCJzdGF0ZSIsInpuIiwiY3JlYXRlIiwiZXh0ZW5kIiwic2VuZGVyIiwic2V0U3RhdGUiLCJvblZhbHVlTG9hZGluZyIsImJpbmQiLCJzZXRWYWx1ZSIsIm9uVmFsdWVGaW5pc2hlZCIsImNvbnRleHQiLCJjYW5jZWwiLCJvbkNhbmNlbCIsInJlc2V0IiwiX3JlZnMiLCJfcmVmIiwia2V5IiwiX19vblJlc2V0Iiwib25SZXNldCIsImdldFZhbHVlIiwiY2FsbGJhY2siLCJ2YWxpZGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiY2FsbCIsImlzIiwic2V0VGltZW91dCIsIl90ZXh0Iiwic3VibWl0IiwiX3JldHVybiIsIm9uU3VibWl0QmVmb3JlIiwiX3N1Ym1pdEFwaSIsInVybCIsInN1Ym1pdEFwaSIsIl9tZXRob2QiLCJfa2V5IiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwcm9jZXNzIiwiZXJyb3IiLCJvblN1Ym1pdGluZyIsIm9uU3VibWl0ZWQiLCJ4aHIiLCJvblN1Ym1pdEVycm9yIiwiX19vblN1Ym1pdCIsIm9uU3VibWl0IiwiX2RhdGEiLCJfbm9WYWxpZGF0ZSIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImV2ZW50IiwiaW5wdXQiLCJmb3JtaXRlbSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19pdGVtUmVuZGVyIiwiaXRlbSIsImluZGV4IiwibmFtZSIsInJlZiIsIl9fcmVuZGVySXRlbXMiLCJfX3JlbmRlckdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwiX19yZW5kZXJCdXR0b25zIiwicmVuZGVyIiwicmVhY3QiLCJzdHlsZSIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsIkFqYXhGb3JtIiwiTmF0aXZlRm9ybSIsImJ1dHRvbiIsIl9fYnV0dG9uQ2xpY2siLCJvbkNsaWNrIiwibG9hZGVyIiwibG9hZGluZyIsIml0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl90aW1lb3V0Iiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwidGV4dCIsIl9jYWxsYmFjayIsIl9faXNNb3VudGVkIiwiX19vbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJvbklucHV0Q2hhbmdlIiwiX19vbklucHV0RW50ZXIiLCJvbkVudGVyIiwib25JbnB1dEVudGVyIiwiX19yZW5kZXJIZWFkZXIiLCJsYWJlbCIsIl9fcmVuZGVyQm9keSIsIl9pbnB1dFByb3BzIiwiaW5wdXRDbGFzc05hbWUiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50Iiwic3VmZml4IiwibGF5b3V0Iiwic2l6ZSIsInRpdGxlIiwiUmVhY3RET00iLCJhdXRvQ29tcGxldGUiLCJ0YXJnZXQiLCJmaW5kRE9NTm9kZSIsImJ0biIsIl9fb25JdGVtQ2hhbmdlIiwib25JdGVtQ2hhbmdlIiwiX2dyb3VwcyIsImxlbmd0aCIsIl9oaWRkZW5zIiwiT2JqZWN0Iiwia2V5cyIsImhpZGRlbiIsIkZvcm0iLCJGb3JtVGl0bGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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Ozs7QUNQQWQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J1RyxVQUFRLEVBQUU1RyxtQkFBTyxDQUFDLGlDQUFELENBREo7QUFFYitKLE1BQUksRUFBRS9KLG1CQUFPLENBQUMseUJBQUQsQ0FGQTtBQUdiRyxhQUFXLEVBQUVILG1CQUFPLENBQUMsdUNBQUQsQ0FIUDtBQUliRSxXQUFTLEVBQUVGLG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtiQyxVQUFRLEVBQUVELG1CQUFPLENBQUMsaUNBQUQsQ0FMSjtBQU1iZ0ssV0FBUyxFQUFFaEssbUJBQU8sQ0FBQyxtQ0FBRCxDQU5MO0FBT2I2RyxZQUFVLEVBQUU3RyxtQkFBTyxDQUFDLHFDQUFEO0FBUE4sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWpheEZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0bm9WYWxpZGF0ZTogbnVsbCxcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAn5Y+W5raIJywgdHlwZTogJ2NhbmNlbCcsIGljb246ICdmYVRpbWVzJyB9LFxuXHRcdFx0XHR7IHZhbHVlOiAn5o+Q5LqkJywgdHlwZTogJ3N1Ym1pdCcsIGljb246ICdmYUhhbmRQb2ludFVwJyB9LFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRoaWRkZW5zOiB7IH0sXG5cdFx0XHRkYXRhOiB7IH0sXG5cdFx0XHRyZWZzOiB7IH1cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpeyBcblx0XHR0aGlzLl9faW5pdFZhbHVlKCk7XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHRpZihfdmFsdWUpe1xuXHRcdFx0aWYoX3ZhbHVlLl9fYXBpX18pe1xuXHRcdFx0XHR0aGlzLl9faW5pdEFwaVZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5fX2luaXRPYmplY3RWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19pbml0QXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dmFyIF9ldmVudHMgPSB0aGlzLnByb3BzLmV2ZW50cyB8fCB7fSxcblx0XHRcdF9iZWZvcmUgPSBfZXZlbnRzLmJlZm9yZSxcblx0XHRcdF9hZnRlciA9IF9ldmVudHMuYWZ0ZXI7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhID0gem4uZGF0YS5jcmVhdGUodmFsdWUsIHpuLmV4dGVuZChfZXZlbnRzLCB7XG5cdFx0XHRiZWZvcmU6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9iZWZvcmUgJiYgX2JlZm9yZShzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZShkYXRhKTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9hZnRlciAmJiBfYWZ0ZXIoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdH0pLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHR9LFxuXHRfX2luaXRPYmplY3RWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcodmFsdWUsIHRoaXMpO1xuXHRcdHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcyk7XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczoge31cblx0XHR9KTtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbDtcblxuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdF9yZWYucmVzZXQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnZhbGlkYXRlKCk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5zdGF0ZS5oaWRkZW5zKTtcblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmhpZGRlbnMpO1xuXHRcdGlmKHRoaXMucHJvcHMubWVyZ2Upe1xuXHRcdFx0dmFyIF90ZW1wID0ge307XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLm1lcmdlXSA9IF92YWx1ZTtcblx0XHRcdF92YWx1ZSA9IF90ZW1wO1xuXHRcdH1cblxuXHRcdHJldHVybiB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmV4dHMpLCBfdmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHRpZighdmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHZhbHVlLl9fYXBpX18pe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5jYWxsKHZhbHVlKSwgdGhpcztcblx0XHR9XG5cdFx0aWYoem4uaXModmFsdWUsICdvYmplY3QnKSl7XG5cdFx0XHRmb3IodmFyIGtleSBpbiB0aGlzLnN0YXRlLmhpZGRlbnMpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLmhpZGRlbnNba2V5XSA9IHZhbHVlW2tleV0gfHwgdGhpcy5zdGF0ZS5oaWRkZW5zW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBfcmVmcyA9IHRoaXMucmVmcztcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHZhciBfcmVmID0gbnVsbCxcblx0XHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRcdF90ZXh0ID0gbnVsbDtcblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRcdFx0X3ZhbHVlID0gdmFsdWVba2V5XTtcblx0XHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0XHRpZihfdmFsdWUgIT09IG51bGwpe1xuXHRcdFx0XHRcdFx0X3JlZi5zZXRWYWx1ZShfdmFsdWUsIF90ZXh0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHRcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0QmVmb3JlICYmIHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUoX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gX3JldHVybiB8fCBfdmFsdWU7XG5cdFx0dmFyIF9zdWJtaXRBcGkgPSB6bi5leHRlbmQoeyB1cmw6IHRoaXMucHJvcHMuYWN0aW9uLCBtZXRob2Q6IHRoaXMucHJvcHMubWV0aG9kIH0sIHRoaXMucHJvcHMuc3VibWl0QXBpKSxcblx0XHRcdF9tZXRob2QgPSB0aGlzLnByb3BzLm1ldGhvZCB8fCBfc3VibWl0QXBpLm1ldGhvZCB8fCAncG9zdCcsXG5cdFx0XHRfa2V5ID0gX21ldGhvZC50b0xvY2FsZUxvd2VyQ2FzZSgpID09ICdnZXQnID8gJ3BhcmFtcyc6ICdkYXRhJztcblxuXHRcdGlmKCFfc3VibWl0QXBpW19rZXldKSB7XG5cdFx0XHRfc3VibWl0QXBpW19rZXldID0ge307XG5cdFx0fVxuXHRcdHpuLmV4dGVuZChfc3VibWl0QXBpW19rZXldLCBfdmFsdWUpO1xuXHRcdGlmKCFfc3VibWl0QXBpLnVybCB8fCAhX3N1Ym1pdEFwaVtfa2V5XSl7XG5cdFx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdFx0em4uZXJyb3IoJ1RoZSBmb3JtIGFjdGlvbiBpcyBudWxsLCBkYXRhOiAnLCBfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuc3RhdGUuc3VibWl0KXtcblx0XHRcdHRoaXMuc3RhdGUuc3VibWl0LmNhbGwoX3N1Ym1pdEFwaSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogdHJ1ZSB9KTtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfbm9WYWxpZGF0ZSA9IHRoaXMucHJvcHMubm9WYWxpZGF0ZSxcblx0XHRcdF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0aWYoIV9ub1ZhbGlkYXRlICYmIF9yZWYudmFsaWRhdGUgJiYgIV9yZWYudmFsaWRhdGUoY2FsbGJhY2spKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoX3JlZi5nZXRWYWx1ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYuZ2V0VmFsdWUoY2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT09IGZhbHNlKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT09IG51bGwpe1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0X2RhdGFbX3JlZi5wcm9wcy52YWx1ZUtleSB8fCBrZXldID0gX3ZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBfZGF0YTtcblx0fSxcblx0X19wYXJzZUl0ZW1WYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZS5pbmRleE9mKFwiamF2YXNjcmlwdDpcIik9PTApe1xuXHRcdFx0cmV0dXJuIGV2YWwodmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCwgZm9ybWl0ZW0pe1xuXHRcdHZhciBfdmFsdWUgPSBmb3JtaXRlbS52YWxpZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIGZvcm1pdGVtKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKGl0ZW0udHlwZT09J1pSSGlkZGVuJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5oaWRkZW5zW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlIT1udWxsID8gdGhpcy5fX3BhcnNlSXRlbVZhbHVlKGl0ZW0udmFsdWUpOiBudWxsLCBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gPEZvcm1JdGVtIHsuLi5pdGVtfSBrZXk9e2luZGV4fSByZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbaXRlbS5uYW1lXSA9IHJlZn0gb25JbnB1dENoYW5nZT17dGhpcy5fX29uSXRlbUlucHV0Q2hhbmdlfSBvbklucHV0RW50ZXI9e3RoaXMuc3VibWl0fS8+O1xuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKXsgcmV0dXJuIG51bGw7IH1cblx0XHRyZXR1cm4gPEZvcm1CdXR0b25zIGRhdGE9e3RoaXMucHJvcHMuYnV0dG9uc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvblJlc2V0PXt0aGlzLnJlc2V0fSBvbkNhbmNlbD17dGhpcy5jYW5jZWx9IC8+O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLnN0YXRlLmhpZGRlbnMgPSB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1mb3JtLWdyb3VwXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgey4uLnRoaXMucHJvcHN9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJyk7XG5cbnZhciBGb3JtSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0Zvcm1JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzOiAnZGVmYXVsdCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yIHx8IFwiVGhlIGZpZWxkIGlzIHJlcXVpcmVkLlwiXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgX2NhbGxiYWNrID0gY2FsbGJhY2sgJiYgY2FsbGJhY2soX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfY2FsbGJhY2sgPT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lcnJvclxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0XHR0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRpZih0aGlzLl9faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnZGVmYXVsdCcgfSk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpLCAxMDAwKTtcblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25JbnB1dEVudGVyJiYgdGhpcy5wcm9wcy5vbklucHV0RW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19yZW5kZXJIZWFkZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktaGVhZGVyXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmljb24gJiYgPGljb24uU1ZHSWNvbiBpY29uPXt0aGlzLnByb3BzLmljb259IC8+fVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5sYWJlbCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMubGFiZWx9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2lucHV0UHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2JvZHktaW5wdXQnLCB0aGlzLnByb3BzLmlucHV0Q2xhc3NOYW1lKSxcblx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0dGV4dDogdGhpcy5zdGF0ZS50ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19vbklucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX29uSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5pbnB1dCwgX2lucHV0UHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktYm9keVwiIGRhdGEtenItcG9wdXAtdG9vbHRpcD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuXHRcdFx0XHR7IF9pbnB1dEVsZW1lbnQgfVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5zdWZmaXggJiYgPHNwYW4gY2xhc3NOYW1lPVwic3VmZml4XCI+e3RoaXMucHJvcHMuc3VmZml4fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdGRhdGEtbGF5b3V0PXt0aGlzLnByb3BzLmxheW91dH1cblx0XHRcdFx0ZGF0YS1zaXplPXt0aGlzLnByb3BzLnNpemV9XG5cdFx0XHRcdGRhdGEtc3RhdHVzPXt0aGlzLnN0YXRlLnN0YXR1c30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckhlYWRlcigpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJvZHkoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1JdGVtOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1UaXRsZScsXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tdGl0bGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInpmLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUk5hdGl2ZUZvcm0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRhdXRvQ29tcGxldGU6ICdvZmYnLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXsgXG5cdFx0dGhpcy5fX2luaXRWYWx1ZSgpO1xuXHR9LFxuXHRfX2luaXRWYWx1ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoX3ZhbHVlKXtcblx0XHRcdGlmKF92YWx1ZS5fX2FwaV9fKXtcblx0XHRcdFx0dGhpcy5fX2luaXRBcGlWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX19pbml0T2JqZWN0VmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9faW5pdEFwaVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudHMgfHwge30sXG5cdFx0XHRfYmVmb3JlID0gX2V2ZW50cy5iZWZvcmUsXG5cdFx0XHRfYWZ0ZXIgPSBfZXZlbnRzLmFmdGVyO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IHpuLmRhdGEuY3JlYXRlKHZhbHVlLCB6bi5leHRlbmQoX2V2ZW50cywge1xuXHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYmVmb3JlICYmIF9iZWZvcmUoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHRfYWZ0ZXIgJiYgX2FmdGVyKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHR9KSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0fSxcblx0X19pbml0T2JqZWN0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyAmJiB0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nKHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUZpbmlzaGVkKHZhbHVlLCB0aGlzKTtcblx0fSxcblx0Y2FuY2VsOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9KTtcblx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZXNldCgpO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoZXZlbnQsIGJ0bil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uSXRlbUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2UoKTtcblx0fSxcblx0X19vbkl0ZW1JbnB1dENoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKCk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSBcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWVdfSBcblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZSArIFwiX2NvbnZlcnRcIl19IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25JdGVtQ2hhbmdlfVxuXHRcdFx0XHRcdG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0vPlxuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZ3JvdXBzID0gdGhpcy5wcm9wcy5ncm91cHMgfHwgW107XG5cdFx0aWYoIV9ncm91cHMubGVuZ3RoKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCdXR0b25zOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5idXR0b25zKSB7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9oaWRkZW5zID0gdGhpcy5wcm9wcy5oaWRkZW5zIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1uYXRpdmUtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGFjdGlvbj17dGhpcy5wcm9wcy5hY3Rpb259XG5cdFx0XHRcdGF1dG9Db21wbGV0ZT17dGhpcy5wcm9wcy5hdXRvQ29tcGxldGV9XG5cdFx0XHRcdG1ldGhvZD17dGhpcy5wcm9wcy5tZXRob2R9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0bm9WYWxpZGF0ZT17dGhpcy5wcm9wcy5ub1ZhbGlkYXRlfVxuXHRcdFx0XHR0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuXHRcdFx0XHRlbmNUeXBlPXt0aGlzLnByb3BzLmVuY1R5cGV9XG5cdFx0XHRcdG9uUmVzZXQ9e3RoaXMuX19vblJlc2V0fVxuXHRcdFx0XHRvblN1Ym1pdD17dGhpcy5fX29uU3VibWl0fT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9oaWRkZW5zKS5tYXAoZnVuY3Rpb24gKGhpZGRlbiwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCBrZXk9eydoaWRkZW5fJyArIGhpZGRlbn0gdHlwZT1cImhpZGRlblwiIG5hbWU9e2hpZGRlbn0gdmFsdWU9e19oaWRkZW5zW2hpZGRlbl19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0PC9mb3JtPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQWpheEZvcm06IHJlcXVpcmUoJy4vQWpheEZvcm0nKSxcbiAgICBGb3JtOiByZXF1aXJlKCcuL0Zvcm0nKSxcbiAgICBGb3JtQnV0dG9uczogcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpLFxuICAgIEZvcm1Hcm91cDogcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKSxcbiAgICBGb3JtSXRlbTogcmVxdWlyZSgnLi9Gb3JtSXRlbScpLFxuICAgIEZvcm1UaXRsZTogcmVxdWlyZSgnLi9Gb3JtVGl0bGUnKSxcbiAgICBOYXRpdmVGb3JtOiByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJidXR0b25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=