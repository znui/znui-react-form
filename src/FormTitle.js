var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRFormTitle',
	render: function(){
		return (
			<div className={znui.react.classname('zr-form-title', this.props.className)} style={this.props.style} >
				<span className="zf-title">{this.props.label}</span>
			</div>
		);
	}
});
