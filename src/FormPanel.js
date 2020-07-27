var React = znui.React || require('react');
var AjaxForm = require('./AjaxForm');
var NativeForm = require('./NativeForm');

module.exports = React.createClass({
	displayName:'ZRFormPanel',
	__render: function (){
		if(this.props.type=='Native'){
			return <NativeForm {...this.props} />;
		}else{
			return <AjaxForm {...this.props} />;
		}
	},
	__renderTitle: function (){
		var _title = this.props.titleRender && this.props.titleRender();
		return _title || this.props.title;
	},
	render: function(){
		var _title = this.__renderTitle();
		return (
			<div className={znui.react.classname('zr-form-panel', this.props.className)} style={this.props.style} >
				{
					!!_title && <div className="panel-title">
						{this.props.title}
					</div>
				}
				<div className="panel-content">{this.__render()}</div>
			</div>
		);
	}
});
