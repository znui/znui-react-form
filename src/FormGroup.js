var React = znui.React || require('react');
var FormItem = require('./FormItem');
var loader = require('znui-react-loader');
var popup = require('znui-react-popup');

module.exports = React.createClass({
	displayName:'ZRFormGroup',
	getInitialState: function (){
		return {
			loading: true
		};
	},
	__itemRender: function (item, index){
		var _return = this.props.itemRender && this.props.itemRender(item, index);
		if(_return === null){
			_return = <FormItem {...item} key={index} />;
		}

		return _return;
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (){
		this.setState({
			loading: false
		});
	},
	__onError: function (xhr){
		this.setState({
			loading: false
		});
		popup.notifier.error("Error: " + xhr.message);
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-form-group", this.props.className)} 
				style={znui.react.style(this.props.style)}>
				<znui.react.DataView {...this.props} 
					itemRender={this.__itemRender}
					onLoading={this.__onLoading}
					onFinished={this.__onFinished}
					onError={this.__onError} />
				{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
			</div>
		);
	}
});
