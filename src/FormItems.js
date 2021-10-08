var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRFormItems',
	__render: function () {

	},
	render: function(){
		
		return (
			<div className={znui.react.classname('zr-form-item-value', this.props.className)} style={this.props.style} >
				{
					this.props.data.map(function (){

					})
				}
			</div>
		);
	}
});
