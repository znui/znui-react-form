var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRLabel',
	render: function(){
		var _label = this.props.text || this.props.value;
		return (
			<div className={znui.react.classname('zr-form-item-label', this.props.className)} style={this.props.style} >
				<div className="label" dangerouslySetInnerHTML={{ __html: _label }}></div>
			</div>
		);
	}
});