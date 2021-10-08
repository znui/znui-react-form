var React = znui.React || require('react');
module.exports = React.createClass({
	displayName:'ZRHint',
	render: function(){
		var _value = this.props.value || this.props.text;
		return (
			<div className={znui.react.classname('zr-form-item-hint', this.props.className)} style={this.props.style} >
				{
					!!this.props.title && <div className="hint-title">
						{this.props.title}
					</div>
				}
				{
					!!_value && <div className="hint-value" dangerouslySetInnerHTML={{ __html: _value }}></div>
				}
			</div>
		);
	}
});
