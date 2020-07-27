"use strict";

var React = znui.React || require('react');

var AjaxForm = require('./AjaxForm');

var NativeForm = require('./NativeForm');

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