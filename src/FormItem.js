var React = znui.React || require('react');

var FormItem = React.createClass({
	displayName:'FormItem',
	getDefaultProps: function (){
		return {
			submitted: true,
			disabled: false,
			required: false,
			hint: null
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
		});
	},
	getValue: function (callback){
		return this.state.value;
	},
	validate: function (callback){
		var _value = this.state.value,
			_error = this.props.error || "数据验证错误";
		if(this.props.required && (_value === '' || _value == null)){
			this.setState({
				status: 'error',
				errorMessage: _error
			});

			this.props.onValidateError && this.props.onValidateError(_error, this);
			return;
		}

		var _callback = callback && callback(_value, this);
		if(_callback === false){
			this.setState({
				status: 'error',
				errorMessage: _error
			});

			this.props.onValidateError && this.props.onValidateError(_error, this);
			return;
		}
		this.setState({
			status: 'success',
			errorMessage: null
		});
		
		this.props.onValidateSuccess && this.props.onValidateSuccess(this);
		this._timeout = window.setTimeout(function (){
			if(this.__isMounted && this.setState){
				this.setState({ status: 'default' });
			}
		}.bind(this), 1000);

		return _value;
	},
	__onInputChange: function (event, input){
		if(event.validate === false){
			return this.state.value = null, false;
		}

		event.formitem = this;
		this.state.value = event.value;
		var _return = this.props.onChange && this.props.onChange(event, input, this);
		if(_return === false){
			return false;
		}
		return this.props.onInputChange && this.props.onInputChange(event, input, this);
	},
	__onInputEnter: function (event, input){
		if(event.validate === false){
			return this.state.value = null, false;
		}

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
	__valueRender: function (props){
		switch(props.type){
			default:
				return (<span className="item-value">{props.text || props.value}</span>);
		}
	},
	__renderBody: function (){
		var _inputProps = zn.extend({}, this.props, this.props.inputProps, {
			className: znui.react.classname('body-input', this.props.inputClassName),
			value: this.state.value,
			text: this.state.text,
			onChange: this.__onInputChange,
			onEnter: this.__onInputEnter
		});
		var _input = this.props.input;
		if(_input && typeof _input == 'function' && !_input.prototype.isReactComponent){
			_input = _input.call(this.props.context || null, this, _inputProps);
		}

		var _inputElement = znui.react.createReactElement(_input, _inputProps, this.props.context);
		/*
		if(_inputProps.editable == false && _inputProps.value != null) {
			_inputElement = this.__valueRender(_inputProps);
		}*/
		return (
			<div className="zrfi-body" data-zr-popup-tooltip={this.state.errorMessage}>
				{ _inputElement }
				{this.props.suffix && <span className="suffix">{this.props.suffix}</span>}
			</div>
		);
	},
	__renderContent: function (){
		var _renderProps = zn.extend({}, this.props, {
			className: znui.react.classname('render', this.props.renderClassName),
			value: this.state.value,
			text: this.state.text,
			onChange: this.__onInputChange,
			onEnter: this.__onInputEnter
		});
		var _render = this.props.render;
		if(_render && typeof _render == 'function' && !_render.prototype.isReactComponent){
			_render = _render.call(null, this, _renderProps);
		}

		var _renderElement = znui.react.createReactElement(_render, _renderProps);
		if(_renderElement){
			return _renderElement;
		}else{
			return (
				<>
					{this.__renderHeader()}
					{this.__renderBody()}
					{ 
						!!this.props.hint && <div className="zrfi-hint">
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" className="info-icon svg-inline--fa fa-info-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
							{this.props.hint}
						</div> 
					}
				</>
			);
		}
	},
	render: function(){
		return (
			<div style={this.props.style} className={znui.react.classname('zr-form-item', this.props.className)} 
				data-disabled={this.props.disabled}
				data-required={this.props.required}
				data-layout={this.props.layout}
				data-size={this.props.size}
				data-status={this.state.status} >
				{this.__renderContent()}
			</div>
		);
	}
});

module.exports = FormItem;