var React = znui.React || require('react');
var FormItem = require('./FormItem');
var FormGroup = require('./FormGroup');
var FormButtons = require('./FormButtons');
var popup = require('znui-react-popup');

module.exports = React.createClass({
	displayName:'ZRAjaxForm',
	getDefaultProps: function (){
		return {
			disabled: false,
			action: null,
			method: "post",
			encType: "multipart/form-data",
			buttons: [
				{ value: '取消', type: 'cancel', icon: 'fa-times' },
				{ value: '提交', type: 'submit', icon: 'fa-edit' }
			]
		}
	},
	getInitialState: function (){
		return {
			validateErrorMessage: null,
			submitting: false,
			hiddens: { },
			value: { },
			value: zn.extend({ }, this.props.value),
			data: [],
			refs: { }
		};
	},
	componentDidMount: function(){ 
		this.props.onDidMount && this.props.onDidMount(this);
	},
	componentWillUnmount: function (){

	},
	cancel: function (){
		this.props.onCancel && this.props.onCancel(this);
	},
	reset: function (){
		this.setState({
			submitting: false,
			hiddens: {}
		});
		var _refs = this.refs,
			_ref = null;

		for(var key in _refs){
			_ref = _refs[key];
			if(!_ref) { continue; }
			_ref.reset();
		}

		return this;
	},
	__onReset: function (){
		this.props.onReset && this.props.onReset();
	},
	getValue: function (callback){
		var _value = this.validate(callback);
		if(!_value){
			return false;
		}

		_value = zn.extend(_value, this.state.hiddens);
		_value = zn.extend(_value, this.props.hiddens);
		if(this.props.merge){
			var _temp = {};
			_temp[this.props.merge] = _value;
			_value = _temp;
		}

		return zn.extend(_value, this.props.exts), _value;
	},
	__isApiValue: function (value){
		if(value && typeof value == 'object' && value.__api__){
			return true;
		}

		return false;
	},
	setValue: function (value, callback){
		if(!value){
			return this;
		}
		if(this.__isApiValue(value) && this.state.value){
			return this.state.value.call(value, callback), this;
		}
		if(zn.is(value, 'object')){
			for(var key in this.state.hiddens){
				this.state.hiddens[key] = value[key] || this.state.hiddens[key];
			}

			var _refs = this.refs,
				_ref = null,
				_value = null,
				_text = null;
			for(var key in _refs){
				_ref = _refs[key];
				if(!_ref) { continue; }
				_value = value[key];
				_text = value[key+'_convert'];
				if(_value !== null){
					_ref.setValue(_value, _text);
				}
			}
		}
		
		return this;
	},
	submit: function (callback, event){
		var _value = this.getValue();
		if(!_value){
			return false;
		}

		if(process.env.NODE_ENV == 'development'){
			zn.debug('AjaxForm submit Data: ', _value);
		}

		var _return = this.props.onSubmitBefore && this.props.onSubmitBefore(_value, this, event);
		if(_return === false){
			return false;
		}

		_value = _return || _value;
		var _submitApi = zn.extend({ url: this.props.action, method: this.props.method }, this.props.submitApi),
			_method = this.props.method || _submitApi.method || 'post',
			_key = _method.toLocaleLowerCase() == 'get' ? 'params': 'data';

		if(!_submitApi[_key]) {
			_submitApi[_key] = {};
		}
		zn.extend(_submitApi[_key], _value);
		if(!_submitApi.url || !_submitApi[_key]){
			if(process.env.NODE_ENV == 'development'){
				zn.error('The form action is null, data: ', _value);
			}
			return false;
		}

		if(this.state.submit){
			this.state.submit.call(_submitApi, callback);
		}else{
			this.state.submit = zn.data.create(_submitApi, {
				before: function (sender, data){
					if(this.__isMounted){
						this.setState({ submitting: true });
					}
					this.props.onSubmiting && this.props.onSubmiting(data, this);
				}.bind(this),
				after: function (sender, data){
					if(this.__isMounted){
						this.setState({ submitting: false });
					}
					this.props.onSubmited && this.props.onSubmited(data, this);
				}.bind(this),
				success: function (sender, data){
					if(data.code == 200) {
						this.props.onSubmitSuccess && this.props.onSubmitSuccess(data.result, this);
					}else{
						this.props.onSubmitError && this.props.onSubmitError(data, this);
					}
				}.bind(this),
				error: function (sender, xhr){
					this.props.onSubmitError && this.props.onSubmitError(xhr, this);
				}.bind(this)
			}, this.props.context);
		}
	},
	__submit__: function (event, buttons){
		this.submit(null, event)
	},
	__onSubmit: function (){
		var _return = this.props.onSubmit && this.props.onSubmit();
		if(_return === false){
			return false;
		}
	},
	validate: function (callback){
		var _refs = this.state.refs,
			_ref = null,
			_data = {},
			_value = null;
		for(var key in _refs){
			_ref = _refs[key];
			if(!_ref) { continue; }
			if(!_ref.props.submitted || _ref.props.editable === false){ continue; }
			if(_ref.props.required && _ref.validate){
				_value = _ref.validate(callback);
				if(_value == null){
					return false;
				}
			}
			if(_ref.getValue){
				_value = _ref.getValue(callback);
			}

			if(_ref.props.required && _value == null){
				return false;
			}

			if(_value == null){
				continue;
			}

			_data[_ref.props.valueKey || key] = _value;
		}

		return _data;
	},
	__parseItemValue: function (value){
		if(value.indexOf("javascript:")==0){
			return eval(value);
		}

		return value;
	},
	__onItemInputChange: function (event, input, formitem){
		event.validateValue = formitem.validate();
		return this.props.onInputChange && this.props.onInputChange(event, input, formitem, this);
	},
	__onValidateError: function (errMessage, formItem){
		this.setState({
			validateErrorMessage: '输入框 “' + formItem.props.label + '” ' + errMessage
		});
	},
	__onValidateSuccess: function (){
		this.setState({
			validateErrorMessage: null
		});
	},
	__itemRender: function (item, index){
		if(item.type=='ZRHidden'){
			return this.state.hiddens[item.name] = item.value!=null ? this.__parseItemValue(item.value): null, null;
		}
		if(item.input && (item.input == 'zr.form.FormTitle' || item.input.displayName == 'ZRFormTitle')) {
			if(typeof item.input == 'string'){
				item.input = zn.path(window, item.input);
			}
			return <item.input key={index} {...item} />;
		}
		var _name = item.name,
			_value = this.state.value || {},
			_value_ = _value[_name],
			_text_ = _value[_name + '_convert'];
		if(_value_ == null && item.value != null){
			_value_ = item.value;
		}

		if(_text_ == null && item.text != null){
			_text_ = item.text;
		}

		return (
			<FormItem context={this.props.context} {...item} 
					key={index} 
					ref={(ref)=>this.state.refs[_name] = ref} 
					value={_value_}
					text={_text_}
					index={index}
					form={this}
					onValidateError={this.__onValidateError}
					onValidateSuccess={this.__onValidateSuccess}
					onInputChange={ item.onInputChange || this.__onItemInputChange } 
					onInputEnter={ item.onInputEnter || this.submit } />
		);
	},
	__renderPropsData: function (){
		var _data = this.props.data;
		if(zn.is(_data, 'function')) {
			_data = _data.call(null, this);
		}
		return <FormGroup data={_data} itemRender={this.__itemRender} responseHandler={this.props.responseHandler} />;
	},
	__renderStateData: function (){
		var _data = this.state.data;
		if(zn.is(_data, 'function')) {
			_data = _data.call(null, this);
		}
		return <FormGroup data={_data} itemRender={this.__itemRender} responseHandler={this.props.responseHandler} />;
	},
	__renderGroups: function (){
		if(!this.props.groups) {
			return null;
		}
		return (
			<div className="groups">
				{
					this.props.groups.map((group)=>{
						return <FormGroup {...group} itemRender={this.__itemRender} responseHandler={this.props.responseHandler} />;
					})
				}
			</div>
		);
	},
	__renderButtons: function (){
		if(!this.props.buttons){ return null; }
		return <FormButtons data={this.props.buttons} onSubmit={this.__submit__} onReset={this.reset} onCancel={this.cancel} />;
	},
	__onValueLoading: function (data){
		this.setState({
			submitting: true
		});
		this.props.onValueLoading && this.props.onValueLoading(data, this);
	},
	__onValueLoaded: function (data){
		this.setState({ value: data, submitting: false });
		this.props.onValueLoaded && this.props.onValueLoaded(data, this);
	},
	__onValueLoadError: function (xhr){
		this.setState({ submitting: false });
		this.props.onValueLoadError && this.props.onValueLoadError(xhr);
		popup.notifier.error("Error: " + xhr.message);
	},
	__renderValidateError: function (){
		if(this.state.validateErrorMessage){
			return (
				<div className="zr-form-validate-error">
					<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
					<span>{this.state.validateErrorMessage}</span>
				</div>
			);
		}
	},
	__render: function (){
		return (
			<div style={znui.react.style(this.props.style)}
				className={znui.react.classname('zr-form zr-ajax-form', this.props.className)} >
				{this.__renderPropsData()}
				{this.__renderStateData()}
				{this.__renderGroups()}
				{this.__renderValidateError()}
				{this.__renderButtons()}
				{this.state.submitting && <div className="zr-form-loader"><span className="loader" /><span className="text">提交中 ... </span></div>}
				{this.props.disabled && <div className="zr-form-disabled"></div>}
			</div>
		);
	},
	__loadingRender: function (){
		return (
			<div style={znui.react.style(this.props.style)} className={znui.react.classname('zr-form zr-ajax-form', this.props.className)}>
				<div className="zr-form-loader">
					<span className="loader" />
					<span className="text">Loading ... </span>
				</div>
			</div>
		);
	},
	render:function(){
		this.state.hiddens = {};
		if(this.__isApiValue(this.props.value)){
			return (
				<znui.react.DataLifecycle
					data={this.props.value}
					loadingRender={this.__loadingRender}
					onLoading={this.__onValueLoading}
					onFinished={this.__onValueLoaded}
					onError={this.__onValueLoadError}
					onDataCreated={(value)=>this.state.value = value}
					dataRender={this.__render} />
			);
		}

		if(this.props.value && typeof this.props.value == 'object'){
			this.state.value = this.props.value;
		}
		
		return this.__render();
	}
});