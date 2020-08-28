var React = znui.React || require('react');

var FormItem = React.createClass({
	displayName:'FormItem',
	getDefaultProps: function (){
		return {
			disabled: false,
			required: false
		}
	},
	getInitialState: function(){
		return {
			status: 'default',
			value: this.props.value,
			text: this.props.text,
			errorMessage: null
		}
	},
	componentWillUnmount: function (){
		if(this._timeout){
			window.clearTimeout(this._timeout);
		}
	},
	setValue: function (value, text){
		this.setState({
			value: value,
			text: text
		}, ()=>this.validate());
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
		this._timeout = window.setTimeout(function (){
			if(this.__isMounted && this.setState){
				this.setState({ status: 'default' });
			}
		}.bind(this), 1000);

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
	__onInputEnter: function (event, input){
		event.formitem = this;
		var _return = this.props.onEnter && this.props.onEnter(event, input, this);
		if(_return === false){
			return false;
		}
		this.state.value = event.value;
		this.props.onInputEnter && this.props.onInputEnter(event, input, this);
	},
	__renderHeader: function (){
		return (
			<div className="zrfi-header">
				{this.props.icon && <span className="icon"><i className={"fa " + this.props.icon} /></span>}
				{this.props.label && <div className="title">{this.props.label}</div>}
			</div>
		);
	},
	__renderBody: function (){
		var _inputProps = zn.extend({}, this.props, {
			className: znui.react.classname('body-input', this.props.inputClassName),
			value: this.state.value,
			text: this.state.text,
			onChange: this.__onInputChange,
			onEnter: this.__onInputEnter
		});
		var _input = this.props.input;
		if(_input && typeof _input == 'function' && !_input.prototype.isReactComponent){
			_input = _input.call(null, this, _inputProps);
		}

		var _inputElement = znui.react.createReactElement(_input, _inputProps);
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