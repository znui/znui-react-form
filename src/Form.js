var React = znui.React || require('react');
var AjaxForm = require('./AjaxForm');
var NativeForm = require('./NativeForm');

module.exports = React.createClass({
	displayName:'ZRForm',
	render: function(){
		if(this.props.type=='Native'){
			return <NativeForm {...this.props} />;
		}else{
			return <AjaxForm {...this.props} />;
		}
	}
});
