var React = znui.React || require('react');
var FormItem = require('./FormItem');
var FormGroup = require('./FormGroup');
var FormButtons = require('./FormButtons');

module.exports = React.createClass({
	displayName:'ZRAjaxForm',
	getDefaultProps: function (){
		return {
			action: null,
			method: "post",
			noValidate: null,
			encType: "multipart/form-data",
			buttons: [
				{ value: '取消', type: 'cancel', icon: 'faTimes' },
				{ value: '提交', type: 'submit', icon: 'faHandPointUp' },
			]
		}
	},
	getInitialState: function (){
		return {
			submitting: false,
			hiddens: { },
			data: { },
			refs: { }
		};
	},
	componentDidMount:function(){ 
		this.__initValue();
	},
	__initValue: function (){
		var _value = this.props.value;
		if(_value){
			if(_value.__api__){
				this.__initApiValue(_value);
			}else{
				this.__initObjectValue(_value);
			}
		}
	},
	__initApiValue: function (value){
		var _events = this.props.events || {},
			_before = _events.before,
			_after = _events.after;
		this.state.data = zn.data.create(value, zn.extend(_events, {
			before: function (sender, data){
				this.setState({
					submitting: true
				});
				this.props.onValueLoading && this.props.onValueLoading(data, this);
				_before && _before(sender, data);
			}.bind(this),
			after: function (sender, data){
				this.setState({
					submitting: false
				});
				this.setValue(data);
				this.props.onValueFinished && this.props.onValueFinished(data, this);
				_after && _after(sender, data);
			}.bind(this)
		}), this.props.context);
	},
	__initObjectValue: function (value){
		this.props.onValueLoading && this.props.onValueLoading(value, this);
		this.setValue(value);
		this.props.onValueFinished && this.props.onValueFinished(value, this);
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
		var _value = this.validate();
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
	setValue: function (value, callback){
		if(!value){
			return this;
		}
		if(value.__api__){
			return this.state.data.call(value), this;
		}
		if(zn.is(value, 'object')){
			for(var key in this.state.hiddens){
				this.state.hiddens[key] = value[key] || this.state.hiddens[key];
			}

			var _refs = this.refs;
			setTimeout(function (){
				var _ref = null,
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
			}, 0);
		}
		
	},
	submit: function (callback){
		var _value = this.getValue();
		if(!_value){
			return false;
		}

		var _return = this.props.onSubmitBefore && this.props.onSubmitBefore(_value, this);
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
			this.state.submit.call(_submitApi);
		}else{
			this.state.submit = zn.data.create(_submitApi, {
				before: function (sender, data){
					this.setState({ submitting: true });
					this.props.onSubmiting && this.props.onSubmiting(data, this);
				}.bind(this),
				after: function (sender, data){
					this.setState({ submitting: false });
					this.props.onSubmited && this.props.onSubmited(data, this);
				}.bind(this),
				error: function (sender, xhr){
					this.props.onSubmitError && this.props.onSubmitError(xhr, this);
				}.bind(this)
			}, this.props.context);
		}
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
			_noValidate = this.props.noValidate,
			_value = null;
		for(var key in _refs){
			_ref = _refs[key];
			if(!_ref) { continue; }
			if(!_noValidate && _ref.validate && !_ref.validate(callback)){
				return false;
			}
			if(_ref.getValue){
				_value = _ref.getValue(callback);
			}

			if(_value === false){
				return false;
			}

			if(_value === null){
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
		var _value = formitem.validate();
		this.props.onItemInputChange && this.props.onItemInputChange(event, input, formitem);
	},
	__itemRender: function (item, index){
		if(item.type=='ZRHidden'){
			return this.state.hiddens[item.name] = item.value!=null ? this.__parseItemValue(item.value): null, null;
		}
		return <FormItem {...item} key={index} ref={(ref)=>this.state.refs[item.name] = ref} onInputChange={this.__onItemInputChange} onInputEnter={this.submit}/>;
	},
	__renderItems: function (){
		return <FormGroup data={this.props.data} itemRender={this.__itemRender} />;
	},
	__renderGroups: function (){
		if(!this.props.groups) {
			return null;
		}
		return (
			<div className="groups">
				{
					this.props.groups.map(function (group){
						return <FormGroup {...group} itemRender={this.__itemRender} />
					}.bind(this))
				}
			</div>
		);
	},
	__renderButtons: function (){
		if(!this.props.buttons){ return null; }
		return <FormButtons data={this.props.buttons} onSubmit={this.submit} onReset={this.reset} onCancel={this.cancel} />;
	},
	render:function(){
		this.state.hiddens = {};
		return (
			<div style={znui.react.style(this.props.style)}
				className={znui.react.classname('zr-form zr-ajax-form', this.props.className)} >
				{this.__renderItems()}
				{this.__renderGroups()}
				{this.__renderButtons()}
				{this.state.submitting && <div className="zr-form-loader"><span className="loader" /><span className="text">Submitting ...</span></div>}
			</div>
		);
	}
});
