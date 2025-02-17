"use strict";

var React = znui.React || require('react');
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