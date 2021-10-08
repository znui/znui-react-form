"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: 'ZRHint',
  render: function render() {
    var _value = this.props.value || this.props.text;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-item-hint', this.props.className),
      style: this.props.style
    }, !!this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "hint-title"
    }, this.props.title), !!_value && /*#__PURE__*/React.createElement("div", {
      className: "hint-value",
      dangerouslySetInnerHTML: {
        __html: _value
      }
    }));
  }
});