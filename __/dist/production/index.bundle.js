!function(t,e){for(var n in e)t[n]=e[n]}(this,function(n){var s={};function r(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){!function(){t.exports=this.React}()},function(t,e,n){var s=znui.React||n(0),r=s.createClass({displayName:"FormItem",getDefaultProps:function(){return{disabled:!1,required:!1,hint:null}},getInitialState:function(){return{status:"default",value:this.props.value,text:this.props.text,errorMessage:null}},componentWillUnmount:function(){this._timeout&&window.clearTimeout(this._timeout)},setValue:function(t,e){var n=this;this.setState({value:t,text:e},function(){return n.validate()})},getValue:function(){return this.state.value},validate:function(t){var e=this.state.value;if(!this.props.required||""!==e&&null!=e){if(!1!==(t&&t(e,this)))return this.setState({status:"success",errorMessage:null}),this._timeout=window.setTimeout(function(){this.__isMounted&&this.setState&&this.setState({status:"default"})}.bind(this),1e3),e;this.setState({status:"error",errorMessage:this.props.error})}else this.setState({status:"error",errorMessage:this.props.error||"The field is required."})},__onInputChange:function(t,e){if((t.formitem=this).state.value=t.value,!1===(this.props.onChange&&this.props.onChange(t,e,this)))return!1;this.props.onInputChange&&this.props.onInputChange(t,e,this)},__onInputEnter:function(t,e){if(!1===((t.formitem=this).props.onEnter&&this.props.onEnter(t,e,this)))return!1;this.state.value=t.value,this.props.onInputEnter&&this.props.onInputEnter(t,e,this)},__renderHeader:function(){return s.createElement("div",{className:"zrfi-header"},this.props.icon&&s.createElement("span",{className:"icon"},s.createElement("i",{className:"fa "+this.props.icon})),this.props.label&&s.createElement("div",{className:"title"},this.props.label))},__renderBody:function(){var t=zn.extend({},this.props,{className:znui.react.classname("body-input",this.props.inputClassName),value:this.state.value,text:this.state.text,onChange:this.__onInputChange,onEnter:this.__onInputEnter}),e=this.props.input;e&&"function"==typeof e&&!e.prototype.isReactComponent&&(e=e.call(null,this,t));var n=znui.react.createReactElement(e,t);return s.createElement("div",{className:"zrfi-body","data-zr-popup-tooltip":this.state.errorMessage},n,this.props.suffix&&s.createElement("span",{className:"suffix"},this.props.suffix))},__renderContent:function(){var t=zn.extend({},this.props,{className:znui.react.classname("render",this.props.renderClassName),value:this.state.value,text:this.state.text,onChange:this.__onInputChange,onEnter:this.__onInputEnter}),e=this.props.render;e&&"function"==typeof e&&!e.prototype.isReactComponent&&(e=e.call(null,this,t));var n=znui.react.createReactElement(e,t);return n||s.createElement(s.Fragment,null,this.__renderHeader(),this.__renderBody(),!!this.props.hint&&s.createElement("div",{className:"zrfi-hint"},s.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",className:"info-icon svg-inline--fa fa-info-circle fa-w-16 ",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.createElement("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})),this.props.hint))},render:function(){return s.createElement("div",{style:this.props.style,className:znui.react.classname("zr-form-item",this.props.className),"data-disabled":this.props.disabled,"data-required":this.props.required,"data-layout":this.props.layout,"data-size":this.props.size,"data-status":this.state.status},this.__renderContent())}});t.exports=r},function(module,exports,__webpack_require__){function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var React=znui.React||__webpack_require__(0),FormItem=__webpack_require__(1),FormGroup=__webpack_require__(3),FormButtons=__webpack_require__(4),popup=__webpack_require__(6);module.exports=React.createClass({displayName:"ZRAjaxForm",getDefaultProps:function(){return{disabled:!1,action:null,method:"post",encType:"multipart/form-data",buttons:[{value:"取消",type:"cancel",icon:"fa-times"},{value:"提交",type:"submit",icon:"fa-edit"}]}},getInitialState:function(){return{submitting:!1,hiddens:{},data:{},value:{},refs:{}}},componentDidMount:function(){},componentWillUnmount:function(){},cancel:function(){this.props.onCancel&&this.props.onCancel(this)},reset:function(){this.setState({submitting:!1,hiddens:{}});var t=this.refs,e=null;for(var n in t)(e=t[n])&&e.reset();return this},__onReset:function(){this.props.onReset&&this.props.onReset()},getValue:function(t){var e=this.validate(t);if(!e)return!1;if(e=zn.extend(e,this.state.hiddens),e=zn.extend(e,this.props.hiddens),this.props.merge){var n={};n[this.props.merge]=e,e=n}return zn.extend(e,this.props.exts),e},__isApiValue:function(t){return!(!t||"object"!=_typeof(t)||!t.__api__)},setValue:function(t,e){if(!t)return this;if(this.__isApiValue(t)&&this.state.data)return this.state.data.call(t,e),this;if(zn.is(t,"object")){for(var n in this.state.hiddens)this.state.hiddens[n]=t[n]||this.state.hiddens[n];var s=this.refs,r=null,i=null,a=null;for(var n in s)(r=s[n])&&(i=t[n],a=t[n+"_convert"],null!==i&&r.setValue(i,a))}return this},submit:function(t){var e=this.getValue();if(!e)return!1;var n=this.props.onSubmitBefore&&this.props.onSubmitBefore(e,this);if(!1===n)return!1;e=n||e;var s=zn.extend({url:this.props.action,method:this.props.method},this.props.submitApi),r="get"==(this.props.method||s.method||"post").toLocaleLowerCase()?"params":"data";if(s[r]||(s[r]={}),zn.extend(s[r],e),!s.url||!s[r])return!1;this.state.submit?this.state.submit.call(s,t):this.state.submit=zn.data.create(s,{before:function(t,e){this.__isMounted&&this.setState({submitting:!0}),this.props.onSubmiting&&this.props.onSubmiting(e,this)}.bind(this),after:function(t,e){this.__isMounted&&this.setState({submitting:!1}),this.props.onSubmited&&this.props.onSubmited(e,this)}.bind(this),success:function(t,e){this.props.onSubmitSuccess&&this.props.onSubmitSuccess(e,this)}.bind(this),error:function(t,e){this.props.onSubmitError&&this.props.onSubmitError(e,this)}.bind(this)},this.props.context)},__onSubmit:function(){if(!1===(this.props.onSubmit&&this.props.onSubmit()))return!1},validate:function(t){var e=this.state.refs,n=null,s={},r=null;for(var i in e)if(n=e[i]){if(n.props.required&&n.validate&&null==(r=n.validate(t)))return!1;if(n.getValue&&(r=n.getValue(t)),n.props.required&&null==r)return!1;null!=r&&(s[n.props.valueKey||i]=r)}return s},__parseItemValue:function __parseItemValue(value){return 0==value.indexOf("javascript:")?eval(value):value},__onItemInputChange:function(t,e,n){t.validateValue=n.validate(),this.props.onItemInputChange&&this.props.onItemInputChange(t,e,n)},__itemRender:function(t,e){var n=this;if("ZRHidden"==t.type)return this.state.hiddens[t.name]=null!=t.value?this.__parseItemValue(t.value):null,null;var s=t.name,r=this.state.value||{};return React.createElement(FormItem,_extends({},t,{key:e,ref:function(t){return n.state.refs[s]=t},value:null!=t.value?t.value:r[s],text:null!=t.text?t.text:r[s+"_convert"],onInputChange:t.onInputChange||this.__onItemInputChange,onInputEnter:t.onInputEnter||this.submit}))},__renderItems:function(){var t=this.props.data;return zn.is(t,"function")&&(t=t.call(null,this)),React.createElement(FormGroup,{data:t,itemRender:this.__itemRender,responseHandler:this.props.responseHandler})},__renderGroups:function(){return this.props.groups?React.createElement("div",{className:"groups"},this.props.groups.map(function(t){return React.createElement(FormGroup,_extends({},t,{itemRender:this.__itemRender,responseHandler:this.props.responseHandler}))}.bind(this))):null},__renderButtons:function(){return this.props.buttons?React.createElement(FormButtons,{data:this.props.buttons,onSubmit:this.submit,onReset:this.reset,onCancel:this.cancel}):null},__onValueLoading:function(t){this.setState({submitting:!0}),this.props.onValueLoading&&this.props.onValueLoading(t,this)},__onValueLoaded:function(t){this.setState({value:t,submitting:!1}),this.props.onValueLoaded&&this.props.onValueLoaded(t,this)},__onValueLoadError:function(t){this.setState({submitting:!1}),this.props.onValueLoadError&&this.props.onValueLoadError(t),popup.notifier.error("Error: "+t.message)},__render:function(){return React.createElement("div",{style:znui.react.style(this.props.style),className:znui.react.classname("zr-form zr-ajax-form",this.props.className)},this.__renderItems(),this.__renderGroups(),this.__renderButtons(),this.state.submitting&&React.createElement("div",{className:"zr-form-loader"},React.createElement("span",{className:"loader"}),React.createElement("span",{className:"text"},"Submitting ... ")),this.props.disabled&&React.createElement("div",{className:"zr-form-disabled"}))},__loadingRender:function(){return React.createElement("div",{style:znui.react.style(this.props.style),className:znui.react.classname("zr-form zr-ajax-form",this.props.className)},React.createElement("div",{className:"zr-form-loader"},React.createElement("span",{className:"loader"}),React.createElement("span",{className:"text"},"Loading ... ")))},render:function(){var e=this;return this.state.hiddens={},this.__isApiValue(this.props.value)?React.createElement(znui.react.DataLifecycle,{data:this.props.value,loadingRender:this.__loadingRender,onLoading:this.__onValueLoading,onFinished:this.__onValueLoaded,onError:this.__onValueLoadError,onDataCreated:function(t){return e.state.data=t},dataRender:this.__render}):(this.props.value&&"object"==_typeof(this.props.value)&&(this.state.value=this.props.value),this.__render())}})},function(t,e,n){function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var r=znui.React||n(0),i=n(1),a=n(8),o=n(6);t.exports=r.createClass({displayName:"ZRFormGroup",getInitialState:function(){return{loading:!0}},__itemRender:function(t,e){var n=this.props.itemRender&&this.props.itemRender(t,e);return null===n&&(n=r.createElement(i,s({},t,{key:e}))),n},__onLoading:function(){this.setState({loading:!0})},__onFinished:function(){this.setState({loading:!1})},__onError:function(t){this.setState({loading:!1}),o.notifier.error("Error: "+t.message)},render:function(){return r.createElement("div",{className:znui.react.classname("zr-form-group",this.props.className),style:znui.react.style(this.props.style)},r.createElement(znui.react.DataView,s({},this.props,{itemRender:this.__itemRender,onLoading:this.__onLoading,onFinished:this.__onFinished,onError:this.__onError})),this.state.loading&&r.createElement(a.Loader,{content:"...",loader:"circle",size:"size-smail",layout:"flex-row"}))}})},function(t,e,n){function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var r=znui.React||n(0),i=n(9);t.exports=r.createClass({displayName:"ZRFormButtons",__buttonClick:function(t,e){switch(t.data.type){case"reset":this.props.onReset&&this.props.onReset(t,e);break;case"submit":this.props.onSubmit&&this.props.onSubmit(t,e);break;case"cancel":this.props.onCancel&&this.props.onCancel(t,e);break;default:this.props.onClick&&this.props.onClick(t,e)}},render:function(){return r.createElement(i.Buttons,s({},this.props,{className:znui.react.classname("zr-form-buttons",this.props.className),style:this.props.style,onClick:this.__buttonClick}))}})},function(t,e,n){function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var r=znui.React||n(0),i=znui.ReactDOM||n(11),a=n(1),o=n(3),u=n(4);t.exports=r.createClass({displayName:"ZRNativeForm",getDefaultProps:function(){return{action:null,autoComplete:"off",method:"post",name:null,noValidate:null,target:"_self",encType:"multipart/form-data"}},getInitialState:function(){return{submitting:!1,value:{}}},componentDidMount:function(){this.__initValue()},__initValue:function(){var t=this.props.value;t&&(t.__api__?this.__initApiValue(t):this.__initObjectValue(t))},__initApiValue:function(t){var e=this.props.events||{},n=e.before,s=e.after;this.state.data=zn.data.create(t,zn.extend(e,{before:function(t,e){this.setState({submitting:!0}),this.props.onValueLoading&&this.props.onValueLoading(e,this),n&&n(t,e)}.bind(this),after:function(t,e){this.setState({submitting:!1,value:e}),this.props.onValueFinished&&this.props.onValueFinished(e,this),s&&s(t,e)}.bind(this)}),this.props.context)},__initObjectValue:function(t){this.props.onValueLoading&&this.props.onValueLoading(t,this),this.setState({value:t}),this.props.onValueFinished&&this.props.onValueFinished(t,this)},cancel:function(){},reset:function(){this.setState({submitting:!1,value:{}}),i.findDOMNode(this).reset()},__onReset:function(){this.props.onReset&&this.props.onReset()},submit:function(){this.setState({submitting:!0})},__onSubmit:function(t){if(!1===(this.props.onSubmit&&this.props.onSubmit(t,this)))return!1},validate:function(){},__onItemChange:function(){this.props.onItemChange&&this.props.onItemChange()},__onItemInputChange:function(){this.props.onItemInputChange&&this.props.onItemInputChange()},__itemRender:function(t,e){return r.createElement(a,s({key:e},t,{value:this.state.value[t.name],text:this.state.value[t.name+"_convert"],onChange:this.__onItemChange,onInputChange:this.__onItemInputChange}))},__renderItems:function(){return r.createElement(o,{data:this.props.data,itemRender:this.__itemRender})},__renderGroups:function(){var t=this.props.groups||[];return t.length?r.createElement("div",{className:"groups"},t.map(function(t){return r.createElement(o,s({},t,{itemRender:this.__itemRender}))}.bind(this))):null},__renderButtons:function(){return this.props.buttons?r.createElement(u,{data:this.props.buttons,onSubmit:this.submit,onReset:this.reset,onCancel:this.cancel}):null},render:function(){var n=this.props.hiddens||{};return r.createElement("form",{style:znui.react.style(this.props.style),className:znui.react.classname("zr-form zr-native-form",this.props.className),action:this.props.action,autoComplete:this.props.autoComplete,method:this.props.method,name:this.props.name,noValidate:this.props.noValidate,target:this.props.target,encType:this.props.encType,onReset:this.__onReset,onSubmit:this.__onSubmit},Object.keys(n).map(function(t,e){return r.createElement("input",{key:"hidden_"+t,type:"hidden",name:t,value:n[t]})}),this.__renderItems(),this.__renderGroups(),this.__renderButtons(),this.state.submitting&&r.createElement("div",{className:"zr-form-loader"},r.createElement("span",{className:"loader"}),r.createElement("span",{className:"text"},"Submitting ...")))}})},function(t,e){!function(){t.exports=this.popup}()},function(t,e,n){t.exports={AjaxForm:n(2),Form:n(10),FormButtons:n(4),FormGroup:n(3),FormItem:n(1),FormTitle:n(12),FormPanel:n(13),NativeForm:n(5)}},function(t,e){!function(){t.exports=this.loader}()},function(t,e){!function(){t.exports=this.button}()},function(t,e,n){var s=znui.React||n(0),r=n(2),i=n(5);t.exports=s.createClass({displayName:"ZRForm",render:function(){return"Native"==this.props.type?s.createElement(i,this.props):s.createElement(r,this.props)}})},function(t,e){!function(){t.exports=this.ReactDOM}()},function(t,e,n){var s=znui.React||n(0);t.exports=s.createClass({displayName:"ZRFormTitle",getValue:function(){return null},setValue:function(){return this},render:function(){return s.createElement("div",{className:znui.react.classname("zr-form-title",this.props.className),style:this.props.style},s.createElement("span",{className:"zf-title"},this.props.title))}})},function(t,e,n){var s=znui.React||n(0),r=n(2),i=n(5);t.exports=s.createClass({displayName:"ZRFormPanel",__render:function(){return"Native"==this.props.type?s.createElement(i,this.props):s.createElement(r,this.props)},__renderTitle:function(){return this.props.titleRender&&this.props.titleRender()||this.props.title},render:function(){var t=this.__renderTitle();return s.createElement("div",{className:znui.react.classname("zr-form-panel",this.props.className),style:this.props.style},!!t&&s.createElement("div",{className:"panel-title"},this.props.title),s.createElement("div",{className:"panel-content"},this.__render()))}})}]));