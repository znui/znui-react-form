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

    if (!this.props.action) {
      if (true) {
        zn.debug('The form action is null, data: ', _value);
      }

      return false;
    }

    var _key = this.props.method.toLowCase() == 'get' ? 'params' : 'data';

    var _call = {
      url: this.props.action,
      method: this.props.method
    };
    _call[_key] = _value;

    if (this.state.submit) {
      this.state.submit.call(_call);
    } else {
      this.state.submit = zn.data.create(_call, {
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
    var _this = this;

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
    window.setTimeout(function () {
      return _this.setState({
        status: 'default'
      });
    }, 2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWpheEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVRpdGxlLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRm9ybUl0ZW0iLCJGb3JtR3JvdXAiLCJGb3JtQnV0dG9ucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiYWN0aW9uIiwibWV0aG9kIiwibm9WYWxpZGF0ZSIsImVuY1R5cGUiLCJidXR0b25zIiwidmFsdWUiLCJ0eXBlIiwiaWNvbiIsImdldEluaXRpYWxTdGF0ZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiZGF0YSIsInJlZnMiLCJjb21wb25lbnREaWRNb3VudCIsIl9faW5pdFZhbHVlIiwiX3ZhbHVlIiwicHJvcHMiLCJfX2FwaV9fIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiYmVmb3JlIiwiX2FmdGVyIiwiYWZ0ZXIiLCJzdGF0ZSIsInpuIiwiY3JlYXRlIiwiZXh0ZW5kIiwic2VuZGVyIiwic2V0U3RhdGUiLCJvblZhbHVlTG9hZGluZyIsImJpbmQiLCJzZXRWYWx1ZSIsIm9uVmFsdWVGaW5pc2hlZCIsImNvbnRleHQiLCJjYW5jZWwiLCJvbkNhbmNlbCIsInJlc2V0IiwiX3JlZnMiLCJfcmVmIiwia2V5IiwiX19vblJlc2V0Iiwib25SZXNldCIsImdldFZhbHVlIiwiY2FsbGJhY2siLCJ2YWxpZGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiY2FsbCIsImlzIiwic2V0VGltZW91dCIsIl90ZXh0Iiwic3VibWl0IiwiX3JldHVybiIsIm9uU3VibWl0QmVmb3JlIiwicHJvY2VzcyIsImRlYnVnIiwiX2tleSIsInRvTG93Q2FzZSIsIl9jYWxsIiwidXJsIiwib25TdWJtaXRpbmciLCJvblN1Ym1pdGVkIiwiX19vblN1Ym1pdCIsIm9uU3VibWl0IiwiX2RhdGEiLCJfbm9WYWxpZGF0ZSIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImV2ZW50IiwiaW5wdXQiLCJmb3JtaXRlbSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19pdGVtUmVuZGVyIiwiaXRlbSIsImluZGV4IiwibmFtZSIsInJlZiIsIl9fcmVuZGVySXRlbXMiLCJfX3JlbmRlckdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwiX19yZW5kZXJCdXR0b25zIiwicmVuZGVyIiwicmVhY3QiLCJzdHlsZSIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsIkFqYXhGb3JtIiwiTmF0aXZlRm9ybSIsImJ1dHRvbiIsIl9fYnV0dG9uQ2xpY2siLCJvbkNsaWNrIiwibG9hZGVyIiwibG9hZGluZyIsIml0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJ0ZXh0IiwiZXJyb3IiLCJfY2FsbGJhY2siLCJ3aW5kb3ciLCJfX29uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRDaGFuZ2UiLCJfX29uSW5wdXRFbnRlciIsIm9uRW50ZXIiLCJvbklucHV0RW50ZXIiLCJfX3JlbmRlckhlYWRlciIsImxhYmVsIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dENsYXNzTmFtZSIsIl9pbnB1dEVsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJzdWZmaXgiLCJsYXlvdXQiLCJzaXplIiwidGl0bGUiLCJSZWFjdERPTSIsImF1dG9Db21wbGV0ZSIsInRhcmdldCIsImZpbmRET01Ob2RlIiwiYnRuIiwiX19vbkl0ZW1DaGFuZ2UiLCJvbkl0ZW1DaGFuZ2UiLCJfZ3JvdXBzIiwibGVuZ3RoIiwiX2hpZGRlbnMiLCJPYmplY3QiLCJrZXlzIiwiaGlkZGVuIiwiRm9ybSIsIkZvcm1UaXRsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtB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QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFBZ0M7QUFBTSxlQUFTLEVBQUM7QUFBaEIsTUFBaEMsZUFBMkQ7QUFBTSxlQUFTLEVBQUM7QUFBaEIsd0JBQTNELENBbkIzQixDQUREO0FBdUJBO0FBbEppQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ1BBZCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYm1HLFVBQVEsRUFBRXhHLG1CQUFPLENBQUMsaUNBQUQsQ0FESjtBQUVid0osTUFBSSxFQUFFeEosbUJBQU8sQ0FBQyx5QkFBRCxDQUZBO0FBR2JHLGFBQVcsRUFBRUgsbUJBQU8sQ0FBQyx1Q0FBRCxDQUhQO0FBSWJFLFdBQVMsRUFBRUYsbUJBQU8sQ0FBQyxtQ0FBRCxDQUpMO0FBS2JDLFVBQVEsRUFBRUQsbUJBQU8sQ0FBQyxpQ0FBRCxDQUxKO0FBTWJ5SixXQUFTLEVBQUV6SixtQkFBTyxDQUFDLG1DQUFELENBTkw7QUFPYnlHLFlBQVUsRUFBRXpHLG1CQUFPLENBQUMscUNBQUQ7QUFQTixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBamF4Rm9ybScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogbnVsbCxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICfmj5DkuqQnLCB0eXBlOiAnc3VibWl0JywgaWNvbjogJ2ZhSGFuZFBvaW50VXAnIH0sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHsgfSxcblx0XHRcdGRhdGE6IHsgfSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMuX19pbml0VmFsdWUoKTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRpZihfdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRcdHRoaXMuX19pbml0QXBpVmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLl9faW5pdE9iamVjdFZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX2V2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRzIHx8IHt9LFxuXHRcdFx0X2JlZm9yZSA9IF9ldmVudHMuYmVmb3JlLFxuXHRcdFx0X2FmdGVyID0gX2V2ZW50cy5hZnRlcjtcblx0XHR0aGlzLnN0YXRlLmRhdGEgPSB6bi5kYXRhLmNyZWF0ZSh2YWx1ZSwgem4uZXh0ZW5kKF9ldmVudHMsIHtcblx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2JlZm9yZSAmJiBfYmVmb3JlKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKGRhdGEpO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2FmdGVyICYmIF9hZnRlcihzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0fSksIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdH0sXG5cdF9faW5pdE9iamVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyh2YWx1ZSwgdGhpcyk7XG5cdFx0dGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzKTtcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRoaWRkZW5zOiB7fVxuXHRcdH0pO1xuXHRcdHZhciBfcmVmcyA9IHRoaXMucmVmcyxcblx0XHRcdF9yZWYgPSBudWxsO1xuXG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0X3JlZi5yZXNldCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMudmFsaWRhdGUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnN0YXRlLmhpZGRlbnMpO1xuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuaGlkZGVucyk7XG5cdFx0aWYodGhpcy5wcm9wcy5tZXJnZSl7XG5cdFx0XHR2YXIgX3RlbXAgPSB7fTtcblx0XHRcdF90ZW1wW3RoaXMucHJvcHMubWVyZ2VdID0gX3ZhbHVlO1xuXHRcdFx0X3ZhbHVlID0gX3RlbXA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHpuLmV4dGVuZChfdmFsdWUsIHRoaXMucHJvcHMuZXh0cyksIF92YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spe1xuXHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYodmFsdWUuX19hcGlfXyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5kYXRhLmNhbGwodmFsdWUpLCB0aGlzO1xuXHRcdH1cblx0XHRpZih6bi5pcyh2YWx1ZSwgJ29iamVjdCcpKXtcblx0XHRcdGZvcih2YXIga2V5IGluIHRoaXMuc3RhdGUuaGlkZGVucyl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaGlkZGVuc1trZXldID0gdmFsdWVba2V5XSB8fCB0aGlzLnN0YXRlLmhpZGRlbnNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKXtcblx0XHRcdFx0dmFyIF9yZWYgPSBudWxsLFxuXHRcdFx0XHRcdF92YWx1ZSA9IG51bGwsXG5cdFx0XHRcdFx0X3RleHQgPSBudWxsO1xuXHRcdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRcdF90ZXh0ID0gdmFsdWVba2V5KydfY29udmVydCddO1xuXHRcdFx0XHRcdGlmKF92YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHRpZighdGhpcy5wcm9wcy5hY3Rpb24pe1xuXHRcdFx0aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jyl7XG5cdFx0XHRcdHpuLmRlYnVnKCdUaGUgZm9ybSBhY3Rpb24gaXMgbnVsbCwgZGF0YTogJywgX3ZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIF9rZXkgPSB0aGlzLnByb3BzLm1ldGhvZC50b0xvd0Nhc2UoKSA9PSAnZ2V0JyA/ICdwYXJhbXMnOiAnZGF0YSc7XG5cdFx0dmFyIF9jYWxsID0ge1xuXHRcdFx0dXJsOiB0aGlzLnByb3BzLmFjdGlvbixcblx0XHRcdG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2Rcblx0XHR9O1xuXHRcdF9jYWxsW19rZXldID0gX3ZhbHVlO1xuXHRcdGlmKHRoaXMuc3RhdGUuc3VibWl0KXtcblx0XHRcdHRoaXMuc3RhdGUuc3VibWl0LmNhbGwoX2NhbGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQgPSB6bi5kYXRhLmNyZWF0ZShfY2FsbCwge1xuXHRcdFx0XHRiZWZvcmU6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRpbmcgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRlZCAmJiB0aGlzLnByb3BzLm9uU3VibWl0ZWQoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHR9XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5zdGF0ZS5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGwsXG5cdFx0XHRfZGF0YSA9IHt9LFxuXHRcdFx0X25vVmFsaWRhdGUgPSB0aGlzLnByb3BzLm5vVmFsaWRhdGUsXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9yZWZzKXtcblx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdGlmKCFfbm9WYWxpZGF0ZSAmJiBfcmVmLnZhbGlkYXRlICYmICFfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKF9yZWYuZ2V0VmFsdWUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLmdldFZhbHVlKGNhbGxiYWNrKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3ZhbHVlID09PSBmYWxzZSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3ZhbHVlID09PSBudWxsKXtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdF9kYXRhW19yZWYucHJvcHMudmFsdWVLZXkgfHwga2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHR2YXIgX3ZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gcmVmPXsocmVmKT0+dGhpcy5zdGF0ZS5yZWZzW2l0ZW0ubmFtZV0gPSByZWZ9IG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkl0ZW1JbnB1dENoYW5nZX0gb25JbnB1dEVudGVyPXt0aGlzLnN1Ym1pdH0vPjtcblx0fSxcblx0X19yZW5kZXJJdGVtczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5ncm91cHMpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5zdGF0ZS5oaWRkZW5zID0ge307XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm0nLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nTmF0aXZlJyl7XG5cdFx0XHRyZXR1cm4gPE5hdGl2ZUZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxBamF4Rm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fVxuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWJ1dHRvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUJ1dHRvbnMnLFxuXHRfX2J1dHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGJ1dHRvbnMpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0c3dpdGNoKF9kYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ3Jlc2V0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYW5jZWwnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbi5CdXR0b25zIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWJ1dHRvbnMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLl9fYnV0dG9uQ2xpY2t9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1Hcm91cCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfcmV0dXJuID09PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSA8Rm9ybUl0ZW0gey4uLml0ZW19IGtleT17aW5kZXh9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0dXJuO1xuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpO1xuXG52YXIgRm9ybUl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidGb3JtSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1czogJ2RlZmF1bHQnLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yIHx8IFwiVGhlIGZpZWxkIGlzIHJlcXVpcmVkLlwiXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgX2NhbGxiYWNrID0gY2FsbGJhY2sgJiYgY2FsbGJhY2soX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfY2FsbGJhY2sgPT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lcnJvclxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiAnZGVmYXVsdCd9KSwgMjAwMCk7XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRfX29uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19vbklucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uSW5wdXRFbnRlciYmIHRoaXMucHJvcHMub25JbnB1dEVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVySGVhZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhlYWRlclwiPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5pY29uICYmIDxpY29uLlNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29ufSAvPn1cblx0XHRcdFx0e3RoaXMucHJvcHMubGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9pbnB1dFByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdib2R5LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaW5wdXQsIF9pbnB1dFByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWJvZHlcIiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3VmZml4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInN1ZmZpeFwiPnt0aGlzLnByb3BzLnN1ZmZpeH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLXJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkYXRhLWxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG5cdFx0XHRcdGRhdGEtc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuXHRcdFx0XHRkYXRhLXN0YXR1cz17dGhpcy5zdGF0ZS5zdGF0dXN9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCb2R5KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSXRlbTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtVGl0bGUnLFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXRpdGxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ6Zi10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJOYXRpdmVGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0YXV0b0NvbXBsZXRlOiAnb2ZmJyxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0bm9WYWxpZGF0ZTogbnVsbCxcblx0XHRcdHRhcmdldDogJ19zZWxmJyxcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMuX19pbml0VmFsdWUoKTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRpZihfdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRcdHRoaXMuX19pbml0QXBpVmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLl9faW5pdE9iamVjdFZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX2V2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRzIHx8IHt9LFxuXHRcdFx0X2JlZm9yZSA9IF9ldmVudHMuYmVmb3JlLFxuXHRcdFx0X2FmdGVyID0gX2V2ZW50cy5hZnRlcjtcblx0XHR0aGlzLnN0YXRlLmRhdGEgPSB6bi5kYXRhLmNyZWF0ZSh2YWx1ZSwgem4uZXh0ZW5kKF9ldmVudHMsIHtcblx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2JlZm9yZSAmJiBfYmVmb3JlKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2FmdGVyICYmIF9hZnRlcihzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0fSksIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdH0sXG5cdF9faW5pdE9iamVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyh2YWx1ZSwgdGhpcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fSk7XG5cdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVzZXQoKTtcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdHN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50LCBidG4pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19vbkl0ZW1DaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtQ2hhbmdlKCk7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lXX0gXG5cdFx0XHRcdFx0dGV4dD17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWUgKyBcIl9jb252ZXJ0XCJdfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uSXRlbUNoYW5nZX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXt0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2V9Lz5cblx0fSxcblx0X19yZW5kZXJJdGVtczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2dyb3VwcyA9IHRoaXMucHJvcHMuZ3JvdXBzIHx8IFtdO1xuXHRcdGlmKCFfZ3JvdXBzLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfaGlkZGVucyA9IHRoaXMucHJvcHMuaGlkZGVucyB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItbmF0aXZlLWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRhY3Rpb249e3RoaXMucHJvcHMuYWN0aW9ufVxuXHRcdFx0XHRhdXRvQ29tcGxldGU9e3RoaXMucHJvcHMuYXV0b0NvbXBsZXRlfVxuXHRcdFx0XHRtZXRob2Q9e3RoaXMucHJvcHMubWV0aG9kfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdG5vVmFsaWRhdGU9e3RoaXMucHJvcHMubm9WYWxpZGF0ZX1cblx0XHRcdFx0dGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH1cblx0XHRcdFx0ZW5jVHlwZT17dGhpcy5wcm9wcy5lbmNUeXBlfVxuXHRcdFx0XHRvblJlc2V0PXt0aGlzLl9fb25SZXNldH1cblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuX19vblN1Ym1pdH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfaGlkZGVucykubWFwKGZ1bmN0aW9uIChoaWRkZW4sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQga2V5PXsnaGlkZGVuXycgKyBoaWRkZW59IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtoaWRkZW59IHZhbHVlPXtfaGlkZGVuc1toaWRkZW5dfSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFqYXhGb3JtOiByZXF1aXJlKCcuL0FqYXhGb3JtJyksXG4gICAgRm9ybTogcmVxdWlyZSgnLi9Gb3JtJyksXG4gICAgRm9ybUJ1dHRvbnM6IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKSxcbiAgICBGb3JtR3JvdXA6IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyksXG4gICAgRm9ybUl0ZW06IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKSxcbiAgICBGb3JtVGl0bGU6IHJlcXVpcmUoJy4vRm9ybVRpdGxlJyksXG4gICAgTmF0aXZlRm9ybTogcmVxdWlyZSgnLi9OYXRpdmVGb3JtJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9