var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var FormItem = require('./FormItem');
var FormGroup = require('./FormGroup');
var FormButtons = require('./FormButtons');

module.exports = React.createClass({
	displayName:'ZRNativeForm',
	getDefaultProps: function (){
		return {
			action: null,
			autoComplete: 'off',
			method: "post",
			name: null,
			noValidate: null,
			target: '_self',
			encType: "multipart/form-data"
		}
	},
	getInitialState: function (){
		return {
			submitting: false,
			value: {}
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
					submitting: false,
					value: data
				});
				this.props.onValueFinished && this.props.onValueFinished(data, this);
				_after && _after(sender, data);
			}.bind(this)
		}), this.props.context);
	},
	__initObjectValue: function (value){
		this.props.onValueLoading && this.props.onValueLoading(value, this);
		this.setState({ value: value });
		this.props.onValueFinished && this.props.onValueFinished(value, this);
	},
	cancel: function (){
		
	},
	reset: function (){
		this.setState({
			submitting: false,
			value: {}
		});
		ReactDOM.findDOMNode(this).reset();
	},
	__onReset: function (){
		this.props.onReset && this.props.onReset();
	},
	submit: function (event, btn){
		this.setState({
			submitting: true
		});
	},
	__onSubmit: function (event){
		var _return = this.props.onSubmit && this.props.onSubmit(event, this);
		if(_return === false){
			return false;
		}
	},
	validate: function (){

	},
	__onItemChange: function (){
		this.props.onItemChange && this.props.onItemChange();
	},
	__onItemInputChange: function (){
		this.props.onItemInputChange && this.props.onItemInputChange();
	},
	__itemRender: function (item, index){
		return <FormItem key={index} {...item} 
					value={this.state.value[item.name]} 
					text={this.state.value[item.name + "_convert"]} 
					onChange={this.__onItemChange}
					onInputChange={this.__onItemInputChange}/>
	},
	__renderItems: function (){
		return <FormGroup data={this.props.data} itemRender={this.__itemRender} />;
	},
	__renderGroups: function (){
		var _groups = this.props.groups || [];
		if(!_groups.length){
			return null;
		}
		return (
			<div className="groups">
				{
					_groups.map(function (group){
						return <FormGroup {...group} itemRender={this.__itemRender} />
					}.bind(this))
				}
			</div>
		);
	},
	__renderButtons: function (){
		if(!this.props.buttons) { return null; }
		return <FormButtons data={this.props.buttons} onSubmit={this.submit} onReset={this.reset} onCancel={this.cancel} />;
	},
	render:function(){
		var _hiddens = this.props.hiddens || {};
		return (
			<form style={znui.react.style(this.props.style)}
				className={znui.react.classname('zr-form zr-native-form', this.props.className)} 
				action={this.props.action}
				autoComplete={this.props.autoComplete}
				method={this.props.method}
				name={this.props.name}
				noValidate={this.props.noValidate}
				target={this.props.target}
				encType={this.props.encType}
				onReset={this.__onReset}
				onSubmit={this.__onSubmit}>
				{
					Object.keys(_hiddens).map(function (hidden, index){
						return <input key={'hidden_' + hidden} type="hidden" name={hidden} value={_hiddens[hidden]} />;
					})
				}
				{this.__renderItems()}
				{this.__renderGroups()}
				{this.__renderButtons()}
				{this.state.submitting && <div className="zr-form-loader"><span className="loader" /><span className="text">Submitting ...</span></div>}
			</form>
		);
	}
});
