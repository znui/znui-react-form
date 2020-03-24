var React = znui.React || require('react');
var button = require('znui-react-button');

module.exports = React.createClass({
	displayName:'ZRFormButtons',
	__buttonClick: function (event, buttons){
		var _data = event.data;
		switch(_data.type) {
			case 'reset':
				this.props.onReset && this.props.onReset(event, buttons);
				break;
			case 'submit':
				this.props.onSubmit && this.props.onSubmit(event, buttons);
				break;
			case 'cancel':
				this.props.onCancel && this.props.onCancel(event, buttons);
				break;
			default:
				this.props.onClick && this.props.onClick(event, buttons);
				break;
		}
	},
	render: function(){
		return (
			<button.Buttons {...this.props} className={znui.react.classname('zr-form-buttons', this.props.className)} style={this.props.style} onClick={this.__buttonClick} />
		);
	}
});
