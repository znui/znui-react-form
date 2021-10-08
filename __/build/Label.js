"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: 'ZRLabel',
  render: function render() {
    var _label = this.props.text || this.props.value;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-label', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "label",
      dangerouslySetInnerHTML: {
        __html: _label
      }
    }));
  }
});