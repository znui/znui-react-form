var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRFormItemValue',
	__render: function (){
		switch(this.props.type) {
			
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-form-item-value', this.props.className)} style={this.props.style} >
				{this.__render()}
			</div>
		);
	}
});
