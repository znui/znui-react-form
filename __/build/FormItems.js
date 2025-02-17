"use strict";

var React = znui.React || require('react');
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