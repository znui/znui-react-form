"use strict";

var React = znui.React || require('react');
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