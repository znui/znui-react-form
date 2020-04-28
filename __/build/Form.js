"use strict";

var React = znui.React || require('react');

var AjaxForm = require('./AjaxForm');

var NativeForm = require('./NativeForm');

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