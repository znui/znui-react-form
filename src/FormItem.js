var React = znui.React || require('react');
var icon = require('znui-react-icon');

var FormItem = React.createClass({
	displayName:'FormItem',
	getDefaultProps: function (){
		return {
			disabled: false,
			required: true
		}
	},
	getInitialState: function(){
		return {
			status: 'default',
			value: this.props.value,
			errorMessage: null
		}
	},
	setValue: function (value, text){
		this.setState({
			value: value,
			text: text
		});
	},
	getValue: function (callback){
		return this.state.value;
	},
	validate: function (callback){
		var _value = this.state.value;
		if(this.props.required && (_value === '' || _value == null)){
			this.setState({
				status: 'error',
				errorMessage: this.props.error || "The field is required."
			});
			return;
		}

		var _callback = callback && callback(_value, this);
		if(_callback === false){
			this.setState({
				status: 'error',
				errorMessage: this.props.error
			});
			return;
		}
		this.setState({
			status: 'success',
			errorMessage: null
		});
		window.setTimeout(()=>this.setState({status: 'default'}), 2000);

		return _value;
	},
	__onInputChange: function (event, input){
		event.formitem = this;
		this.state.value = event.value;
		var _return = this.props.onChange && this.props.onChange(event, input, this);
		if(_return === false){
			return false;
		}
		this.props.onInputChange && this.props.onInputChange(event, input, this);
	},
	__renderHeader: function (){
		return (
			<div className="zrfi-header">
				{this.props.icon && <icon.SVGIcon icon={this.props.icon} />}
				{this.props.label && <div className="title">{this.props.label}</div>}
			</div>
		);
	},
	__renderBody: function (){
		var _inputProps = zn.extend({}, this.props, {
			className: znui.react.classname('body-input', this.props.inputClassName),
			value: this.state.value,
			text: this.state.text,
			onChange: this.__onInputChange
		});
		var _inputElement = znui.react.createReactElement(this.props.input, _inputProps);
		return (
			<div className="zrfi-body" data-zr-popup-tooltip={this.state.errorMessage}>
				{ _inputElement }
				{this.props.suffix && <span className="suffix">{this.props.suffix}</span>}
			</div>
		);
	},
	render: function(){
		return (
			<div style={this.props.style} className={znui.react.classname('zr-form-item', this.props.className)} 
				data-disabled={this.props.disabled}
				data-required={this.props.required}
				data-layout={this.props.layout}
				data-size={this.props.size}
				data-status={this.state.status} >
				{this.__renderHeader()}
				{this.__renderBody()}
			</div>
		);
	}
});




module.exports = FormItem;