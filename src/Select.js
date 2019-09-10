require('./Select.less');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'Select',
	propTypes: {
		textKey: React.PropTypes.string,
		valueKey: React.PropTypes.string
	},
	getDefaultProps: function () {
		return {
			dataType: 'int',
			className: '',
			autoLoad: true,
			textKey: 'text',
			valueKey: 'value',
			placeholder: "select ..."
		};
	},
	getInitialState: function(){
		return {
			loading: false,
			selected: false,
			currIndex: null,
			value: this.props.value,
			data: []
		}
	},
	componentDidMount:function(){
		var _source = this.props.data || this.props.items;
		this._dataSource = zn.store.dataSource(_source, {
			autoLoad: this.props.autoLoad,
			onExec: function (){
				var _result = this.props.onLoading && this.props.onLoading();
				if(_result !== false && this.isMounted()){
					this.state.loading = true;
				}
			}.bind(this),
			onSuccess: function (data){
				this.__onDataLoaded(this.__dataHandler(data));
				this.props.onData && this.props.onData(data);
			}.bind(this)
		});
	},
	__dataHandler: function (data){
		if(this.props.dataHandler){
			return this.props.dataHandler(data);
		}

		return data.result || data;
	},
	__onDataLoaded: function (data){
		if(!this.isMounted()){
			return false;
		}
		var _value = this.props.value,
			_valueKey = this.props.valueKey;

		if(data.length==undefined){
			var temp = [];
			for(var key in data){
				temp.push(data[key]);
			}
			data = temp;
		}
		this.state.data = data;
		this.setState({
			data: data,
			loading: false
		}, function (){
			if(_value&&!this.state.value){
				this.setValue(_value);
			}
			this.props.onLoaded && this.props.onLoaded(data, this);
		}.bind(this));
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.data!==this.props.data){
			//this._dataSource.reset(nextProps.data);
		}
	},
	request: function (data, argv){
		this._dataSource.reset(data, argv);
	},
	filter: function (handler) {
		var _data = [];
		this.state.data.forEach(function (item, index, array) {
			if(handler(item, index, array) !== false){
				_data.push(item);
			}
		});

		this.setState({ data: _data });
	},
	refresh: function (){
		this._dataSource.refresh();
	},
	__onSelectClick: function (event) {
		if(!this.props.autoLoad){
			this._dataSource.exec();
		}
		event.stopPropagation();
		event.preventDefault();
	},
	__parseExp: function (item, exp){
		if(typeof exp == 'string'){
			if(exp.indexOf('{')!=-1){
				return zn.format(exp, item);
			} else {
				return item[exp];
			}
		} else if(typeof exp == 'function') {
			return exp(item);
		}
	},
	__itemRender: function (item, index){
		item = item || {};
		if(typeof item === 'string'){
			var _temp = {};
			_temp[this.props.valueKey] = _temp[this.props.textKey] = item;
			this.state.data[index] = item = _temp;
		}
		item.index = index;

		var _value = this.__parseExp(item, this.props.valueKey),
			_text = this.__parseExp(item, this.props.textKey);
		return <option key={index} value={_value}>{_text}</option>;
	},
	__onSelectChange: function (event){
		var _target = event.target,
			_selectedIndex = (+_target.selectedIndex - 1),
			_item = this.state.data[_selectedIndex],
			_value = this.__parseExp(_item, this.props.valueKey),
			_text = this.__parseExp(_item, this.props.textKey);

		var _data = {
			selectedIndex: _selectedIndex,
			text: _text,
			value: _value,
			item: _item
		};
		this.setValue(_value, event);
	},
	getValue: function () {
		var _value = this.state.value || ReactDOM.findDOMNode(this).value;
		if(isNaN(_value)){
			return _value;
		}else {
			return +_value;
		}
		//return this.props.dataType=='int'?(+_value):_value;
	},
	setValue: function (value, event) {
		this.setState({
			value: value,
			selected: value?true:false
		}, function () {
			var _item = null,
				_valueKey = this.props.valueKey;
			if(this.state.data && this.state.data.length){
				for(var i = 0, _len = this.state.data.length; i<_len; i++){
					if(value==this.state.data[i][_valueKey]){
						_item = this.state.data[i];
					}
				}
			}
			this.props.onChange && this.props.onChange(_item, this, value);
		});
	},
	render: function(){
		return (
			<select
				className={zn.react.classname("zr-select", this.state.selected?'':'no-selected')}
				style={this.props.style}
				name={this.props.name}
				required={this.props.required}
				disabled={this.props.disabled||this.props.readonly}
				value={this.state.value}
				onChange={this.__onSelectChange}
				onClick={this.__onSelectClick}>
				<option value="" disabled>{this.props.placeholder}</option>
				{
					this.state.data && this.state.data.map&&this.state.data.map(this.__itemRender)
				}
			</select>
		);
	}
});
