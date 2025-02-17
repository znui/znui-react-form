"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var React = znui.React || require('react');
var FormItem = require('./FormItem');
var FormGroup = require('./FormGroup');
var FormButtons = require('./FormButtons');
var popup = require('znui-react-popup');
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
    if (process.env.NODE_ENV == 'development') {
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
      if (process.env.NODE_ENV == 'development') {
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