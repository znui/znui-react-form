(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Alert.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Alert.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Alert = React.createClass({
  displayName: 'ZRAlert',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null,
      onClick: null,
      buttons: [{
        text: '确认'
      }]
    };
  },
  __onClick: function __onClick(item, index) {
    item.index = index;

    var _result = this.props.onClick && this.props.onClick(item, this);

    _result = item.onClick && item.onClick(item, this);

    if (_result !== false) {
      zn.debug('alert.close');
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-alert', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), /*#__PURE__*/React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "alert-btn",
        onClick: function onClick() {
          return _this.__onClick(item, index);
        }
      }, item.text);
    }.bind(this))));
  }
});
module.exports = {
  Alert: Alert,
  alert: function alert(content, title, callback, props) {
    var _alert = modal.create( /*#__PURE__*/React.createElement(Alert, _extends({
      content: content,
      title: title,
      onClick: callback
    }, props)), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _alert;
  },
  confirm: function confirm(content, title, _confirm2, cancel, options) {
    var _options = zn.extend({
      cancel: '取消',
      confirm: '确定'
    }, options);

    var _confirm = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: content,
      title: title,
      buttons: [{
        text: _options.cancel,
        onClick: function onClick() {
          var _return = cancel && cancel(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }, {
        text: _options.confirm,
        onClick: function onClick() {
          var _return = _confirm2 && _confirm2(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _confirm;
  },
  prompt: function prompt(argv) {
    var _argv = zn.extend({
      title: argv.title,
      content: /*#__PURE__*/React.createElement("input", {
        className: "alert-input",
        onChange: argv.onChange,
        type: "text"
      }),
      confirm: argv.confirm,
      cancel: argv.cancel
    }, argv);

    var _prompt = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: _argv.content,
      title: _argv.title,
      buttons: [{
        text: _argv.cancelText || '取消',
        onClick: function onClick(event, alert) {
          var _return = _argv.cancel && _argv.cancel(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }, {
        text: _argv.confirmText || '确定',
        onClick: function onClick(event, alert) {
          var _return = _argv.confirm && _argv.confirm(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _prompt;
  }
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Dialog.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Dialog.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Dialog = React.createClass({
  displayName: 'ZRDialog',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null
    };
  },
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog', this.props.className),
      style: this.props.style,
      "data-focus": this.props.focus
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")), /*#__PURE__*/React.createElement("div", {
      className: "dialog-body"
    }, this.props.content));
  }
});
module.exports = {
  Dialog: Dialog,
  dialog: function dialog(argv, ifPush) {
    var _dialog = modal.create( /*#__PURE__*/React.createElement(Dialog, argv), {
      "class": 'modal-middle modal-overlay'
    }, ifPush);

    return _dialog;
  }
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Dropdown.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Dropdown.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var popover = __webpack_require__(/*! ./Popover */ "../node_modules/znui-react-popup/__/build/Popover.js").popover;

module.exports = {
  Dropdown: React.createClass({
    displayName: 'ZRDropdown',
    getDefaultProps: function getDefaultProps() {
      return {
        disabled: false,
        eventType: 'click'
      };
    },
    componentDidMount: function componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
    },
    componentWillUnmount: function componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener(this.props.eventType, this.__eventHandler, false);
    },
    getParent: function getParent(target) {
      if (target.classList.contains('zr-popup-dropdown')) {
        return target;
      } else {
        return this.getParent(target.parentNode);
      }
    },
    __eventHandler: function __eventHandler(event) {
      if (this.props.disabled) {
        return;
      }

      var _target = this.getParent(event.target),
          _popover = zn.extend({}, this.props.popover);

      if (_target && _popover && _popover.render) {
        var _render = _popover.render;

        if (zn.is(_render, 'function')) {
          if (!_render.prototype || !_render.prototype.render) {
            _render = _render(event, this);
          }
        }

        if (_render) {
          event.stopPropagation();
          _popover.render = null;
          delete _popover.render;
          popover.render(_render, zn.extend({
            reset: true,
            event: event,
            target: _target
          }, _popover));
        }
      }
    },
    render: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: znui.react.classname("zr-popup-dropdown", this.props.className),
        style: this.props.style
      }, this.props.children);
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Loader.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Loader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Loader = React.createClass({
  displayName: 'ZRLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      content: null,
      title: 'Loading ... '
    };
  },
  __renderContent: function __renderContent() {
    if (this.props.content) {
      return this.props.content;
    } else if (this.props.title) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "loader",
        "data-loader": "spinner"
      }), /*#__PURE__*/React.createElement("span", {
        className: "title"
      }, this.props.title));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-loader', this.props.className),
      style: znui.react.style(this.props.style)
    }, this.__renderContent());
  }
});
module.exports = {
  Loader: Loader,
  loader: zn.Class({
    "static": true,
    methods: {
      create: function create(argv) {
        var _this = this;

        if (this._loader) {
          this._loader.destroy();
        }

        return modal.create( /*#__PURE__*/React.createElement(Loader, argv), {
          "class": 'modal-middle modal-overlay',
          ref: function ref(_ref) {
            return _this._loader = _ref;
          }
        }, false);
      },
      loading: function loading(title) {
        return this.create({
          title: title
        });
      },
      close: function close() {
        if (this._loader) {
          this._loader.destroy();
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Modal.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Modal = React.createClass({
  displayName: 'ZRModal',
  getInitialState: function getInitialState() {
    return {
      destroyed: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  close: function close(callback) {
    return this.destroy(callback);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted || this.state.destroyed) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode.parentNode) {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode);
    }

    callback && callback();
    this.state.destroyed = true;
    this.props.onDestroy && this.props.onDestroy();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
  }
});
;
module.exports = {
  Modal: Modal,
  modal: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-modal-container"
        });
        this._modals = [];
      },
      create: function create(content, options, ifPush) {
        var _modal = ReactDOM.render( /*#__PURE__*/React.createElement(Modal, options, content), zn.dom.createElement('div', {
          "class": znui.classname('zr-popup-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom));

        zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);

        if (ifPush !== false) {
          this._modals.push(_modal);
        }

        return _modal;
      },
      close: function close(delay, callback) {
        zn.debug('Modal close(' + this._modals.length + '): ');

        var _modal = this._modals.pop();

        console.log(this._modals);

        if (_modal) {
          if (_modal.state.destroyed) {
            return this.close(delay, callback);
          }

          if (delay) {
            setTimeout(function () {
              return _modal.destroy(callback);
            }, delay);
          } else {
            _modal.destroy(callback);
          }
        }

        return this;
      },
      closeAll: function closeAll(delay) {
        if (this._modals.length) {
          this.close(delay, this.closeAll);
        }

        return this;
      },
      size: function size() {
        return this._modals.length;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Notifier.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Notifier.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var TYPE_ICONS = {
  heart: 'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
  secondary: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z',
  success: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
  warning: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  error: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z'
};
var Notifier = React.createClass({
  displayName: 'ZRNotification',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);

        ReactDOM.unmountComponentAtNode(_dom.parentNode);
      }
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-notifier notification-in', this.props.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: znui.react.classname("svg-inline--fa fa-check fa-w-16 ", this.props.className),
      style: this.props.style,
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: TYPE_ICONS[this.props.type || 'info']
    }))), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content), /*#__PURE__*/React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = {
  Notifier: Notifier,
  notifier: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": 'zr-popup-notifier-container'
        });
      },
      open: function open(type, content, delay) {
        ReactDOM.render( /*#__PURE__*/React.createElement(Notifier, {
          type: type,
          content: content,
          delay: delay
        }), zn.dom.createElement('div', {}, this._dom));
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('error', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Popover.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Popover.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Popover = React.createClass({
  displayName: 'ZRPopover',
  getDefaultProps: function getDefaultProps() {
    return {
      hiddenHeight: 5,
      closeable: false,
      popoverWidth: null,
      popoverHeight: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);

    if (this.props.event) {
      this._eventType = this.props.event.type || this.props.event;
      window.addEventListener(this._eventType, this.__onWindowClick, false);

      this._dom.addEventListener(this._eventType, function (event) {
        var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);

        if (_result === true) {//event.stopPropagation();
        }
      }.bind(this), true);

      setTimeout(function () {
        this.fixPosition(this.props.target);
      }.bind(this), 0);
    }

    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __isMatchParent: function __isMatchParent(target, parent) {
    if (target) {
      if (target.tagName == 'BODY' || target.tagName == 'HTML') {
        return false;
      }

      if (target !== parent) {
        return this.__isMatchParent(target.parentNode, parent);
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
  __onWindowClick: function __onWindowClick(event) {
    if (!this.__isMatchParent(event.target, this._dom)) {
      var _result = this.props.onWindowOutsideContainerEvent && this.props.onWindowOutsideContainerEvent(event, this);

      if (_result !== true) {
        this.close("Popover: on window outside container event");
      }
    } else {
      var _result = this.props.onWindowInsideContainerEvent && this.props.onWindowInsideContainerEvent(event, this);

      if (_result === true) {
        this.close("Popover: on window inside container event");
      }
    }
  },
  close: function close(tag) {
    //zn.info('Popover.close:', tag);
    if (this._dom) {
      window.removeEventListener(this._eventType, this.__onWindowClick, false);

      if (this._dom.parentNode) {
        this._dom.parentNode.style = '';
        ReactDOM.unmountComponentAtNode(this._dom.parentNode);
      }

      this._dom = null;
      this._eventType = null;
    }
  },
  fixPosition: function fixPosition(target) {
    var _popover = this._dom;

    var _t = zn.dom.getPosition(target),
        _popoverWidth = this.props.popoverWidth || _t.width,
        _popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
        _left = null,
        _top = null,
        _arrowClassNames = [];

    if (_popoverWidth == '100%') {
      _popoverWidth = _t.width;
    }

    if (_popoverHeight < this.props.hiddenHeight) {
      this.props.onHidden && this.props.onHidden();
      return;
    }

    if (_t.x + _popoverWidth > window.screen.availWidth) {
      _arrowClassNames.push('zr-arrow-placement-right');

      _left = document.body.scrollWidth - _t.x - _t.width;
      _popover.style.right = _left + 'px';
      _popover.parentNode.style.right = '0px';
    } else {
      _left = _t.x;

      _arrowClassNames.push('zr-arrow-placement-left');

      _popover.style.left = _left + 'px';
    }

    if (_t.y + _popoverHeight > window.screen.availHeight) {
      _arrowClassNames.push('zr-arrow-direction-bottom');

      _top = _t.height + 10;
      _popover.style.bottom = _top + 'px';
      _popover.parentNode.style.bottom = '0px';
    } else {
      _top = _t.y + _t.height + 10;

      _arrowClassNames.push('zr-arrow-direction-top');

      _popover.style.top = _top + 'px';
    }

    if (this.props.popoverWidth) {
      _popover.style.width = _popoverWidth + 'px';
    }

    if (this.props.popoverHeight) {
      if (_popover.offsetHeight != _popoverHeight) {
        _popover.style.height = _popoverHeight + 'px';
      }
    }

    _popover.style.visibility = 'visible';

    _arrowClassNames.push('zn-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  render: function render() {
    var _this = this;

    var _style = {};

    if (this.props.height) {
      _style.maxHeight = this.props.height + 'px';
    } else {
      _style.height = 'auto';
    }

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName)
    }, this.props.closeable && /*#__PURE__*/React.createElement("span", {
      className: "popover-close zr-hover-self-loading",
      onClick: function onClick() {
        return _this.close('self close');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: "svg-inline--fa fa-check fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    }))), /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("popover-content", this.props.className),
      style: (zn.extend({}, this.props.style), _style)
    }, this.props.content));
  }
});
module.exports = {
  Popover: Popover,
  popover: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-popover-container"
        });
      },
      render: function render(content, options) {
        if (options && options.reset) {
          this.close('zn.popover:render');
        }

        return this._popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
          content: content
        })), this._dom), this._popover;
      },
      close: function close(tag) {
        if (this._popover) {
          this._popover.close(tag);

          this._popover = null;
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Toast.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Toast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Toast = React.createClass({
  displayName: 'ZRToast',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1800);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('toast-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode.parentNode);
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-toast toast-in', this.props.type)
    }, this.props.content);
  }
});
module.exports = {
  Toast: Toast,
  toast: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-toast-container"
        });
      },
      open: function open(type, content, delay) {
        var _dom = document.createElement('div');

        ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
          type: type,
          content: content,
          delay: delay
        }), _dom);

        this._dom.appendChild(_dom);
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('danger', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Tooltip.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Tooltip.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Tooltip = React.createClass({
  displayName: 'ZRTooltip',
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);
    this.fixPosition(this.props.target);
  },
  fixPosition: function fixPosition(target) {
    if (!target) {
      throw new Error('fixPosition target is null.');
    }

    var _domWidth = this._dom.offsetWidth,
        _domHeight = this._dom.offsetHeight,
        _target = zn.dom.getPosition(target),
        _left = null,
        _top = null,
        _className = '';

    if (_target.x + _domWidth > document.body.scrollWidth) {
      _left = _target.width - _domWidth;
    } else {
      _left = _target.x + (_target.width - _domWidth) / 2;
    }

    if (_target.y + _domHeight > document.body.scrollHeight) {
      _top = _target.y - _domHeight - 16;
      _className = 'zr-arrow-direction-bottom';
    } else {
      _top = _target.y + _target.height + 16;
      _className = 'zr-arrow-direction-top';
    }

    if (_left < 0) {
      _className = 'zr-arrow-direction-left';
      _left = _target.x + _target.width + 4;
      _top = _target.y + 4;
    }

    this._dom.style.top = _top + 'px';
    this._dom.style.left = _left + 'px';
    _className && this._dom.classList.add(_className);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode) {
      _dom.parentNode.removeChild(_dom);
    }

    this.props.onDestroy && this.props.onDestroy();

    if (zn.is(callback, 'function')) {
      callback();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className),
      style: this.props.style
    }, this.props.content);
  }
});
module.exports = {
  Tooltip: Tooltip,
  tooltip: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-tooltip-container"
        });
        window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
        window.addEventListener('resize', this.__onWindowResize.bind(this), false);
      },
      __onWindowResize: function __onWindowResize() {
        this.close('znui.react.popup.tooltip: window.resizing');
      },
      __findZRPopupTooltipValue: function __findZRPopupTooltipValue(target) {
        if (target) {
          if (target.tagName == 'BODY' || target.tagName == 'HTML') {
            return false;
          }

          if (target.getAttribute && target.getAttribute('data-zr-popup-tooltip')) {
            return target.getAttribute('data-zr-popup-tooltip');
          } else {
            return this.__findZRPopupTooltipValue(target.parentNode);
          }
        }
      },
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target,
            _value = this.__findZRPopupTooltipValue(_target);

        if (_target && _value) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close('znui.react.popup.tooltip: window.mouseover');
          }

          this.render(_value, {
            target: _target
          });
        } else {
          this.close('znui.react.popup.tooltip: window.mouseover');
        }
      },
      render: function render(content, options) {
        if (this._tooltip) {
          this._tooltip.destroy();
        }

        this._tooltip = ReactDOM.render( /*#__PURE__*/React.createElement(Tooltip, _extends({}, options, {
          content: content
        })), this._dom);
      },
      close: function close(callback) {
        if (this._tooltip) {
          if (zn.is(callback, 'string') && process && process.env && "development" == 'development') {
            zn.debug(callback);
          }

          ReactDOM.unmountComponentAtNode(this._dom);

          this._tooltip.destroy(callback);

          this._tooltip = null;
        }

        return this;
      }
    }
  })
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = zn.deepAssigns({}, __webpack_require__(/*! ./Alert */ "../node_modules/znui-react-popup/__/build/Alert.js"), __webpack_require__(/*! ./Dialog */ "../node_modules/znui-react-popup/__/build/Dialog.js"), __webpack_require__(/*! ./Dropdown */ "../node_modules/znui-react-popup/__/build/Dropdown.js"), __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-popup/__/build/Loader.js"), __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js"), __webpack_require__(/*! ./Notifier */ "../node_modules/znui-react-popup/__/build/Notifier.js"), __webpack_require__(/*! ./Popover */ "../node_modules/znui-react-popup/__/build/Popover.js"), __webpack_require__(/*! ./Toast */ "../node_modules/znui-react-popup/__/build/Toast.js"), __webpack_require__(/*! ./Tooltip */ "../node_modules/znui-react-popup/__/build/Tooltip.js"));

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/production/index.bundle.js":
/*!***************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/production/index.bundle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t,e){for(var n in e)t[n]=e[n]}(this,function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){!function(){t.exports=this.React}()},function(t,e){!function(){t.exports=this.ReactDOM}()},function(t,e,n){var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRModal",getInitialState:function(){return{destroyed:!1}},componentDidMount:function(){this.props.onComponentDidMount&&this.props.onComponentDidMount(this)},close:function(t){return this.destroy(t)},destroy:function(t){if(!this.__isMounted||this.state.destroyed)return!1;var e=i.findDOMNode(this);if(!1===(this.props.onDestroyBefore&&this.props.onDestroyBefore(e)))return!1;e&&e.parentNode.parentNode&&(e.parentNode.parentNode.removeChild(e.parentNode),i.unmountComponentAtNode(e.parentNode)),t&&t(),this.state.destroyed=!0,this.props.onDestroy&&this.props.onDestroy()},render:function(){return r.createElement(r.Fragment,null,this.props.children)}});t.exports={Modal:s,modal:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-modal-container"}),this._modals=[]},create:function(t,e,n){var o=i.render(r.createElement(s,e,t),zn.dom.createElement("div",{class:znui.classname("zr-popup-modal",e.class),style:znui.style(e.style)},this._dom));return zn.debug("Modal created("+(this._modals.length+1)+"): ",o),!1!==n&&this._modals.push(o),o},close:function(t,e){zn.debug("Modal close("+this._modals.length+"): ");var n=this._modals.pop();if(n){if(n.state.destroyed)return this.close(t,e);t?setTimeout(function(){return n.destroy(e)},t):n.destroy(e)}return this},closeAll:function(t){return this._modals.length&&this.close(t,this.closeAll),this},size:function(){return this._modals.length}}})}},function(t,e,n){function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRPopover",getDefaultProps:function(){return{hiddenHeight:5,closeable:!1,popoverWidth:null,popoverHeight:null}},getInitialState:function(){return{arrowClassName:""}},componentDidMount:function(){this._dom=i.findDOMNode(this),this.props.event&&(this._eventType=this.props.event.type||this.props.event,window.addEventListener(this._eventType,this.__onWindowClick,!1),this._dom.addEventListener(this._eventType,function(t){this.props.onContainerEvent&&this.props.onContainerEvent(t,this)}.bind(this),!0),setTimeout(function(){this.fixPosition(this.props.target)}.bind(this),0)),this.props.onPopoverDidMount&&this.props.onPopoverDidMount(this)},__isMatchParent:function(t,e){return!t||"BODY"!=t.tagName&&"HTML"!=t.tagName&&(t===e||this.__isMatchParent(t.parentNode,e))},__onWindowClick:function(t){this.__isMatchParent(t.target,this._dom)?!0===(this.props.onWindowInsideContainerEvent&&this.props.onWindowInsideContainerEvent(t,this))&&this.close("Popover: on window inside container event"):!0!==(this.props.onWindowOutsideContainerEvent&&this.props.onWindowOutsideContainerEvent(t,this))&&this.close("Popover: on window outside container event")},close:function(){this._dom&&(window.removeEventListener(this._eventType,this.__onWindowClick,!1),this._dom.parentNode&&(this._dom.parentNode.style="",i.unmountComponentAtNode(this._dom.parentNode)),this._dom=null,this._eventType=null)},fixPosition:function(t){var e=this._dom,n=zn.dom.getPosition(t),o=this.props.popoverWidth||n.width,r=this.props.popoverHeight||zn.dom.getPosition(e).height,i=null,s=null,a=[];"100%"==o&&(o=n.width),r<this.props.hiddenHeight?this.props.onHidden&&this.props.onHidden():(n.x+o>window.screen.availWidth?(a.push("zr-arrow-placement-right"),i=document.body.scrollWidth-n.x-n.width,e.style.right=i+"px",e.parentNode.style.right="0px"):(i=n.x,a.push("zr-arrow-placement-left"),e.style.left=i+"px"),n.y+r>window.screen.availHeight?(a.push("zr-arrow-direction-bottom"),s=n.height+10,e.style.bottom=s+"px",e.parentNode.style.bottom="0px"):(s=n.y+n.height+10,a.push("zr-arrow-direction-top"),e.style.top=s+"px"),this.props.popoverWidth&&(e.style.width=o+"px"),this.props.popoverHeight&&e.offsetHeight!=r&&(e.style.height=r+"px"),e.style.visibility="visible",a.push("zn-animate-scale-up"),e.className=e.className+" "+a.join(" "))},render:function(){var t=this,e={};return this.props.height?e.maxHeight=this.props.height+"px":e.height="auto",r.createElement("div",{className:znui.react.classname("zr-popup-popover zr-arrow zr-arrow-color-white",this.state.arrowClassName)},this.props.closeable&&r.createElement("span",{className:"popover-close zr-hover-self-loading",onClick:function(){return t.close("self close")}},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"svg-inline--fa fa-check fa-w-16 ",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),r.createElement("div",{className:znui.react.classname("popover-content",this.props.className),style:(zn.extend({},this.props.style),e)},this.props.content))}});t.exports={Popover:s,popover:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-popover-container"})},render:function(t,e){return e&&e.reset&&this.close("zn.popover:render"),this._popover=i.render(r.createElement(s,o({},e,{content:t})),this._dom),this._popover},close:function(t){return this._popover&&(this._popover.close(t),this._popover=null),this}}})}},function(t,e,n){t.exports=zn.deepAssigns({},n(5),n(6),n(7),n(8),n(2),n(9),n(3),n(10),n(11))},function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var a=znui.React||n(0),c=n(2).modal,l=a.createClass({displayName:"ZRAlert",getDefaultProps:function(){return{title:"",content:null,onClick:null,buttons:[{text:"确认"}]}},__onClick:function(t,e){t.index=e;this.props.onClick&&this.props.onClick(t,this);!1!==(t.onClick&&t.onClick(t,this))&&(zn.debug("alert.close"),c.close())},render:function(){return a.createElement("div",{className:znui.react.classname("zr-popup-alert",this.props.className),style:this.props.style},a.createElement("div",{className:"alert-inner"},this.props.title&&a.createElement("div",{className:"alert-title"},this.props.title),this.props.content&&a.createElement("div",{className:"alert-content"},this.props.content)),a.createElement("div",{className:"alert-btns"},this.props.buttons.map(function(t,e){var n=this;return a.createElement("div",{key:e,className:"alert-btn",onClick:function(){return n.__onClick(t,e)}},t.text)}.bind(this))))}});t.exports={Alert:l,alert:function(t,e,n,o){return c.create(a.createElement(l,r({content:t,title:e,onClick:n},o)),{class:"modal-middle modal-overlay"},!1)},confirm:function(t,e,n,o,r){var i=zn.extend({cancel:"取消",confirm:"确定"},r),s=c.create(a.createElement(l,{content:t,title:e,buttons:[{text:i.cancel,onClick:function(){return!1!==(o&&o(s))&&s.destroy(),!1}},{text:i.confirm,onClick:function(){return!1!==(n&&n(s))&&s.destroy(),!1}}]}),{class:"modal-middle modal-overlay"},!1);return s},prompt:function(t){var n=zn.extend({title:t.title,content:a.createElement("input",{className:"alert-input",onChange:t.onChange,type:"text"}),confirm:t.confirm,cancel:t.cancel},t),o=c.create(a.createElement(l,{content:n.content,title:n.title,buttons:[{text:n.cancelText||"取消",onClick:function(t,e){return!1!==(n.cancel&&n.cancel(t,e))&&o.destroy(),!1}},{text:n.confirmText||"确定",onClick:function(t,e){return!1!==(n.confirm&&n.confirm(t,e))&&o.destroy(),!1}}]}),{class:"modal-middle modal-overlay"},!1);return o}}},function(t,e,n){var o=znui.React||n(0),r=n(2).modal,i=o.createClass({displayName:"ZRDialog",getDefaultProps:function(){return{title:"",content:null}},__onClose:function(t){!1!==(this.props.onClose&&this.props.onClose(t,this))&&r.close()},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-dialog",this.props.className),style:this.props.style,"data-focus":this.props.focus},o.createElement("div",{className:"dialog-header"},this.props.title&&o.createElement("div",{className:"dialog-title"},this.props.title),this.props.closeable&&o.createElement("span",{onClick:this.__onClose,className:"dialog-close"},"x")),o.createElement("div",{className:"dialog-body"},this.props.content))}});t.exports={Dialog:i,dialog:function(t,e){return r.create(o.createElement(i,t),{class:"modal-middle modal-overlay"},e)}}},function(t,e,n){var o=znui.React||n(0),r=znui.ReactDOM||n(1),i=n(3).popover;t.exports={Dropdown:o.createClass({displayName:"ZRDropdown",getDefaultProps:function(){return{disabled:!1,eventType:"click"}},componentDidMount:function(){r.findDOMNode(this).addEventListener(this.props.eventType,this.__eventHandler,!1)},componentWillUnmount:function(){r.findDOMNode(this).removeEventListener(this.props.eventType,this.__eventHandler,!1)},getParent:function(t){return t.classList.contains("zr-popup-dropdown")?t:this.getParent(t.parentNode)},__eventHandler:function(t){if(!this.props.disabled){var e=this.getParent(t.target),n=zn.extend({},this.props.popover);if(e&&n&&n.render){var o=n.render;zn.is(o,"function")&&(o.prototype&&o.prototype.render||(o=o(t,this))),o&&(t.stopPropagation(),n.render=null,delete n.render,i.render(o,zn.extend({reset:!0,event:t,target:e},n)))}}},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-dropdown",this.props.className),style:this.props.style},this.props.children)}})}},function(t,e,n){var o=znui.React||n(0),r=n(2).modal,i=o.createClass({displayName:"ZRLoader",getDefaultProps:function(){return{content:null,title:"Loading ... "}},__renderContent:function(){return this.props.content?this.props.content:this.props.title?o.createElement(o.Fragment,null,o.createElement("i",{className:"loader","data-loader":"spinner"}),o.createElement("span",{className:"title"},this.props.title)):void 0},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-loader",this.props.className),style:znui.react.style(this.props.style)},this.__renderContent())}});t.exports={Loader:i,loader:zn.Class({static:!0,methods:{create:function(t){var e=this;return this._loader&&this._loader.destroy(),r.create(o.createElement(i,t),{class:"modal-middle modal-overlay",ref:function(t){return e._loader=t}},!1)},loading:function(t){return this.create({title:t})},close:function(){return this._loader&&this._loader.destroy(),this}}})}},function(t,e,n){var o=znui.React||n(0),r=znui.ReactDOM||n(1),i={heart:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",secondary:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z",success:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",warning:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",error:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",info:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},s=o.createClass({displayName:"ZRNotification",componentDidMount:function(){window.setTimeout(this.out,this.props.delay||1500)},out:function(){var t=r.findDOMNode(this);t.classList.add("notification-out"),t.addEventListener("animationend",function(){t.parentNode.parentNode&&(t.parentNode.parentNode.removeChild(t.parentNode),r.unmountComponentAtNode(t.parentNode))},!1)},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-notifier notification-in",this.props.type)},o.createElement("div",{className:"icon"},o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:znui.react.classname("svg-inline--fa fa-check fa-w-16 ",this.props.className),style:this.props.style,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.createElement("path",{fill:"currentColor",d:i[this.props.type||"info"]}))),o.createElement("div",{className:"content"},this.props.content),o.createElement("i",{className:"close fa fa-times",onClick:this.out}))}});t.exports={Notifier:s,notifier:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-notifier-container"})},open:function(t,e,n){r.render(o.createElement(s,{type:t,content:e,delay:n}),zn.dom.createElement("div",{},this._dom))},success:function(t,e){return this.open("success",t,e)},warning:function(t,e){return this.open("warning",t,e)},error:function(t,e){return this.open("error",t,e)},info:function(t,e){return this.open("info",t,e)}}})}},function(t,e,n){var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRToast",componentDidMount:function(){window.setTimeout(this.out,this.props.delay||1800)},out:function(){var t=i.findDOMNode(this);t.classList.add("toast-out"),t.addEventListener("animationend",function(){t.parentNode.parentNode.removeChild(t.parentNode),i.unmountComponentAtNode(t.parentNode.parentNode)},!1)},render:function(){return r.createElement("div",{className:znui.react.classname("zr-popup-toast toast-in",this.props.type)},this.props.content)}});t.exports={Toast:s,toast:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-toast-container"})},open:function(t,e,n){var o=document.createElement("div");i.render(r.createElement(s,{type:t,content:e,delay:n}),o),this._dom.appendChild(o)},success:function(t,e){return this.open("success",t,e)},warning:function(t,e){return this.open("warning",t,e)},error:function(t,e){return this.open("danger",t,e)},info:function(t,e){return this.open("info",t,e)}}})}},function(t,e,s){(function(e){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var o=znui.React||s(0),r=znui.ReactDOM||s(1),i=o.createClass({displayName:"ZRTooltip",getInitialState:function(){return{arrowClassName:""}},componentDidMount:function(){this._dom=r.findDOMNode(this),this.fixPosition(this.props.target)},fixPosition:function(t){if(!t)throw new Error("fixPosition target is null.");var e=this._dom.offsetWidth,n=this._dom.offsetHeight,o=zn.dom.getPosition(t),r=null,i=null,s="";r=o.x+e>document.body.scrollWidth?o.width-e:o.x+(o.width-e)/2,s=o.y+n>document.body.scrollHeight?(i=o.y-n-16,"zr-arrow-direction-bottom"):(i=o.y+o.height+16,"zr-arrow-direction-top"),r<0&&(s="zr-arrow-direction-left",r=o.x+o.width+4,i=o.y+4),this._dom.style.top=i+"px",this._dom.style.left=r+"px",s&&this._dom.classList.add(s)},destroy:function(t){if(!this.__isMounted)return!1;var e=r.findDOMNode(this);if(!1===(this.props.onDestroyBefore&&this.props.onDestroyBefore(e)))return!1;e&&e.parentNode&&e.parentNode.removeChild(e),this.props.onDestroy&&this.props.onDestroy(),zn.is(t,"function")&&t()},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center",this.props.className),style:this.props.style},this.props.content)}});t.exports={Tooltip:i,tooltip:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-tooltip-container"}),window.addEventListener("mouseover",this.__onWindowMouseOver.bind(this),!0),window.addEventListener("resize",this.__onWindowResize.bind(this),!1)},__onWindowResize:function(){this.close("znui.react.popup.tooltip: window.resizing")},__findZRPopupTooltipValue:function(t){if(t)return"BODY"!=t.tagName&&"HTML"!=t.tagName&&(t.getAttribute&&t.getAttribute("data-zr-popup-tooltip")?t.getAttribute("data-zr-popup-tooltip"):this.__findZRPopupTooltipValue(t.parentNode))},__onWindowMouseOver:function(t){var e=t.target,n=this.__findZRPopupTooltipValue(e);e&&n?(this._tooltip&&this._tooltip.props.target!==e&&this.close("znui.react.popup.tooltip: window.mouseover"),this.render(n,{target:e})):this.close("znui.react.popup.tooltip: window.mouseover")},render:function(t,e){this._tooltip&&this._tooltip.destroy(),this._tooltip=r.render(o.createElement(i,n({},e,{content:t})),this._dom)},close:function(t){return this._tooltip&&(zn.is(t,"string")&&e&&e.env,r.unmountComponentAtNode(this._dom),this._tooltip.destroy(t),this._tooltip=null),this}}})}}).call(this,s(12))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(t){o=s}}();var c,l=[],p=!1,u=-1;function d(){p&&c&&(p=!1,c.length?l=c.concat(l):u=-1,l.length&&h())}function h(){if(!p){var t=a(d);p=!0;for(var e=l.length;e;){for(c=l,l=[];++u<e;)c&&c[u].run();u=-1,e=l.length}c=null,p=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function f(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||p||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]));

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-popup/index.js":
/*!*************************************************!*\
  !*** ../node_modules/znui-react-popup/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(/*! znui-react */ "znui-react");
if(process && process.env && "development") {
    if(true) {
        __webpack_require__(/*! ./__/dist/development/index.style.bundle.css */ "../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css");
        module.exports = __webpack_require__(/*! ./__/build/index.js */ "../node_modules/znui-react-popup/__/build/index.js");
    }else{}
}else {
    __webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css");
    module.exports = __webpack_require__(/*! ./__/dist/production/index.bundle.js */ "../node_modules/znui-react-popup/__/dist/production/index.bundle.js");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "./AjaxForm.js":
/*!*********************!*\
  !*** ./AjaxForm.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");

var FormGroup = __webpack_require__(/*! ./FormGroup */ "./FormGroup.js");

var FormButtons = __webpack_require__(/*! ./FormButtons */ "./FormButtons.js");

var popup = __webpack_require__(/*! znui-react-popup */ "../node_modules/znui-react-popup/index.js");

module.exports = React.createClass({
  displayName: 'ZRAjaxForm',
  getDefaultProps: function getDefaultProps() {
    return {
      action: null,
      method: "post",
      noValidate: null,
      encType: "multipart/form-data",
      buttons: [{
        value: '取消',
        type: 'cancel',
        icon: 'faTimes'
      }, {
        value: '提交',
        type: 'submit',
        icon: 'faHandPointUp'
      }]
    };
  },
  getInitialState: function getInitialState() {
    return {
      submitting: false,
      hiddens: {},
      data: {},
      value: {},
      refs: {}
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  cancel: function cancel() {
    this.props.onCancel && this.props.onCancel(this);
  },
  reset: function reset() {
    this.setState({
      submitting: false,
      hiddens: {}
    });
    var _refs = this.refs,
        _ref = null;

    for (var key in _refs) {
      _ref = _refs[key];

      if (!_ref) {
        continue;
      }

      _ref.reset();
    }

    return this;
  },
  __onReset: function __onReset() {
    this.props.onReset && this.props.onReset();
  },
  getValue: function getValue(callback) {
    var _value = this.validate(callback);

    if (!_value) {
      return false;
    }

    _value = zn.extend(_value, this.state.hiddens);
    _value = zn.extend(_value, this.props.hiddens);

    if (this.props.merge) {
      var _temp = {};
      _temp[this.props.merge] = _value;
      _value = _temp;
    }

    return zn.extend(_value, this.props.exts), _value;
  },
  __isApiValue: function __isApiValue(value) {
    if (value && _typeof(value) == 'object' && value.__api__) {
      return true;
    }

    return false;
  },
  setValue: function setValue(value, callback) {
    if (!value) {
      return this;
    }

    if (this.__isApiValue(value) && this.state.data) {
      return this.state.data.call(value, callback), this;
    }

    if (zn.is(value, 'object')) {
      for (var key in this.state.hiddens) {
        this.state.hiddens[key] = value[key] || this.state.hiddens[key];
      }

      var _refs = this.refs,
          _ref = null,
          _value = null,
          _text = null;

      for (var key in _refs) {
        _ref = _refs[key];

        if (!_ref) {
          continue;
        }

        _value = value[key];
        _text = value[key + '_convert'];

        if (_value !== null) {
          _ref.setValue(_value, _text);
        }
      }
    }

    return this;
  },
  submit: function submit(callback) {
    var _value = this.getValue();

    if (!_value) {
      return false;
    }

    var _return = this.props.onSubmitBefore && this.props.onSubmitBefore(_value, this);

    if (_return === false) {
      return false;
    }

    _value = _return || _value;

    var _submitApi = zn.extend({
      url: this.props.action,
      method: this.props.method
    }, this.props.submitApi),
        _method = this.props.method || _submitApi.method || 'post',
        _key = _method.toLocaleLowerCase() == 'get' ? 'params' : 'data';

    if (!_submitApi[_key]) {
      _submitApi[_key] = {};
    }

    zn.extend(_submitApi[_key], _value);

    if (!_submitApi.url || !_submitApi[_key]) {
      if (true) {
        zn.error('The form action is null, data: ', _value);
      }

      return false;
    }

    if (this.state.submit) {
      this.state.submit.call(_submitApi, callback);
    } else {
      this.state.submit = zn.data.create(_submitApi, {
        before: function (sender, data) {
          if (this.__isMounted) {
            this.setState({
              submitting: true
            });
          }

          this.props.onSubmiting && this.props.onSubmiting(data, this);
        }.bind(this),
        after: function (sender, data) {
          if (this.__isMounted) {
            this.setState({
              submitting: false
            });
          }

          this.props.onSubmited && this.props.onSubmited(data, this);
        }.bind(this),
        success: function (sender, data) {
          this.props.onSubmitSuccess && this.props.onSubmitSuccess(data, this);
        }.bind(this),
        error: function (sender, xhr) {
          this.props.onSubmitError && this.props.onSubmitError(xhr, this);
        }.bind(this)
      }, this.props.context);
    }
  },
  __onSubmit: function __onSubmit() {
    var _return = this.props.onSubmit && this.props.onSubmit();

    if (_return === false) {
      return false;
    }
  },
  validate: function validate(callback) {
    var _refs = this.state.refs,
        _ref = null,
        _data = {},
        _noValidate = this.props.noValidate,
        _value = null;

    for (var key in _refs) {
      _ref = _refs[key];

      if (!_ref || !_ref.props.required) {
        continue;
      }

      if (!_noValidate && _ref.validate) {
        _value = _ref.validate(callback);

        if (_value === undefined || _value === null) {
          return false;
        }
      }

      if (_ref.getValue) {
        _value = _ref.getValue(callback);
      }

      if (_value === false) {
        return false;
      }

      if (_value === null) {
        continue;
      }

      _data[_ref.props.valueKey || key] = _value;
    }

    return _data;
  },
  __parseItemValue: function __parseItemValue(value) {
    if (value.indexOf("javascript:") == 0) {
      return eval(value);
    }

    return value;
  },
  __onItemInputChange: function __onItemInputChange(event, input, formitem) {
    event.validateValue = formitem.validate();
    this.props.onItemInputChange && this.props.onItemInputChange(event, input, formitem);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    if (item.type == 'ZRHidden') {
      return this.state.hiddens[item.name] = item.value != null ? this.__parseItemValue(item.value) : null, null;
    }

    var _name = item.name,
        _value = this.state.value || {};

    return /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
      key: index,
      ref: function ref(_ref2) {
        return _this.state.refs[_name] = _ref2;
      },
      value: _value[_name],
      text: _value[_name + '_convert'],
      onInputChange: this.__onItemInputChange,
      onInputEnter: this.submit
    }));
  },
  __renderItems: function __renderItems() {
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: this.props.data,
      itemRender: this.__itemRender,
      responseHandler: this.props.responseHandler
    });
  },
  __renderGroups: function __renderGroups() {
    if (!this.props.groups) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "groups"
    }, this.props.groups.map(function (group) {
      return /*#__PURE__*/React.createElement(FormGroup, _extends({}, group, {
        itemRender: this.__itemRender,
        responseHandler: this.props.responseHandler
      }));
    }.bind(this)));
  },
  __renderButtons: function __renderButtons() {
    if (!this.props.buttons) {
      return null;
    }

    return /*#__PURE__*/React.createElement(FormButtons, {
      data: this.props.buttons,
      onSubmit: this.submit,
      onReset: this.reset,
      onCancel: this.cancel
    });
  },
  __onValueLoading: function __onValueLoading(data) {
    this.setState({
      submitting: true
    });
    this.props.onValueLoading && this.props.onValueLoading(data, this);
  },
  __onValueLoaded: function __onValueLoaded(data) {
    this.setState({
      value: data,
      submitting: false
    });
    this.props.onValueLoaded && this.props.onValueLoaded(data, this);
  },
  __onValueLoadError: function __onValueLoadError(xhr) {
    this.setState({
      submitting: false
    });
    this.props.onValueLoadError && this.props.onValueLoadError(xhr);
    popup.notifier.error("Error: " + xhr.message);
  },
  __render: function __render() {
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, this.__renderItems(), this.__renderGroups(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Submitting ... ")));
  },
  __loadingRender: function __loadingRender() {
    return /*#__PURE__*/React.createElement("div", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-ajax-form', this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Loading ... ")));
  },
  render: function render() {
    var _this2 = this;

    this.state.hiddens = {};

    if (this.__isApiValue(this.props.value)) {
      return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
        data: this.props.value,
        loadingRender: this.__loadingRender,
        onLoading: this.__onValueLoading,
        onFinished: this.__onValueLoaded,
        onError: this.__onValueLoadError,
        onDataCreated: function onDataCreated(data) {
          return _this2.state.data = data;
        },
        dataRender: this.__render
      });
    }

    if (this.props.value && _typeof(this.props.value) == 'object') {
      this.state.value = this.props.value;
    }

    return this.__render();
  }
});

/***/ }),

/***/ "./Form.js":
/*!*****************!*\
  !*** ./Form.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var AjaxForm = __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js");

var NativeForm = __webpack_require__(/*! ./NativeForm */ "./NativeForm.js");

module.exports = React.createClass({
  displayName: 'ZRForm',
  render: function render() {
    if (this.props.type == 'Native') {
      return /*#__PURE__*/React.createElement(NativeForm, this.props);
    } else {
      return /*#__PURE__*/React.createElement(AjaxForm, this.props);
    }
  }
});

/***/ }),

/***/ "./FormButtons.js":
/*!************************!*\
  !*** ./FormButtons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var button = __webpack_require__(/*! znui-react-button */ "znui-react-button");

module.exports = React.createClass({
  displayName: 'ZRFormButtons',
  __buttonClick: function __buttonClick(event, buttons) {
    var _data = event.data;

    switch (_data.type) {
      case 'reset':
        this.props.onReset && this.props.onReset(event, buttons);
        break;

      case 'submit':
        this.props.onSubmit && this.props.onSubmit(event, buttons);
        break;

      case 'cancel':
        this.props.onCancel && this.props.onCancel(event, buttons);
        break;

      default:
        this.props.onClick && this.props.onClick(event, buttons);
        break;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(button.Buttons, _extends({}, this.props, {
      className: znui.react.classname('zr-form-buttons', this.props.className),
      style: this.props.style,
      onClick: this.__buttonClick
    }));
  }
});

/***/ }),

/***/ "./FormGroup.js":
/*!**********************!*\
  !*** ./FormGroup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

var popup = __webpack_require__(/*! znui-react-popup */ "../node_modules/znui-react-popup/index.js");

module.exports = React.createClass({
  displayName: 'ZRFormGroup',
  getInitialState: function getInitialState() {
    return {
      loading: true
    };
  },
  __itemRender: function __itemRender(item, index) {
    var _return = this.props.itemRender && this.props.itemRender(item, index);

    if (_return === null) {
      _return = /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
        key: index
      }));
    }

    return _return;
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished() {
    this.setState({
      loading: false
    });
  },
  __onError: function __onError(xhr) {
    this.setState({
      loading: false
    });
    popup.notifier.error("Error: " + xhr.message);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-form-group", this.props.className),
      style: znui.react.style(this.props.style)
    }, /*#__PURE__*/React.createElement(znui.react.DataView, _extends({}, this.props, {
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished,
      onError: this.__onError
    })), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./FormItem.js":
/*!*********************!*\
  !*** ./FormItem.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var icon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon");

var FormItem = React.createClass({
  displayName: 'FormItem',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      required: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      status: 'default',
      value: this.props.value,
      text: this.props.text,
      errorMessage: null
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text
    });
  },
  getValue: function getValue(callback) {
    return this.state.value;
  },
  validate: function validate(callback) {
    var _value = this.state.value;

    if (this.props.required && (_value === '' || _value == null)) {
      this.setState({
        status: 'error',
        errorMessage: this.props.error || "The field is required."
      });
      return;
    }

    var _callback = callback && callback(_value, this);

    if (_callback === false) {
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
    this._timeout = window.setTimeout(function () {
      if (this.__isMounted && this.setState) {
        this.setState({
          status: 'default'
        });
      }
    }.bind(this), 1000);
    return _value;
  },
  __onInputChange: function __onInputChange(event, input) {
    event.formitem = this;

    var _return = this.props.onChange && this.props.onChange(event, input, this);

    if (_return === false) {
      return false;
    }

    this.state.value = event.value;
    this.props.onInputChange && this.props.onInputChange(event, input, this);
  },
  __onInputEnter: function __onInputEnter(event, input) {
    event.formitem = this;

    var _return = this.props.onEnter && this.props.onEnter(event, input, this);

    if (_return === false) {
      return false;
    }

    this.state.value = event.value;
    this.props.onInputEnter && this.props.onInputEnter(event, input, this);
  },
  __renderHeader: function __renderHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zrfi-header"
    }, this.props.icon && /*#__PURE__*/React.createElement(icon.SVGIcon, {
      icon: this.props.icon
    }), this.props.label && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.label));
  },
  __renderBody: function __renderBody() {
    var _inputProps = zn.extend({}, this.props, {
      className: znui.react.classname('body-input', this.props.inputClassName),
      value: this.state.value,
      text: this.state.text,
      onChange: this.__onInputChange,
      onEnter: this.__onInputEnter
    });

    var _inputElement = znui.react.createReactElement(this.props.input, _inputProps);

    return /*#__PURE__*/React.createElement("div", {
      className: "zrfi-body",
      "data-zr-popup-tooltip": this.state.errorMessage
    }, _inputElement, this.props.suffix && /*#__PURE__*/React.createElement("span", {
      className: "suffix"
    }, this.props.suffix));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname('zr-form-item', this.props.className),
      "data-disabled": this.props.disabled,
      "data-required": this.props.required,
      "data-layout": this.props.layout,
      "data-size": this.props.size,
      "data-status": this.state.status
    }, this.__renderHeader(), this.__renderBody());
  }
});
module.exports = FormItem;

/***/ }),

/***/ "./FormPanel.js":
/*!**********************!*\
  !*** ./FormPanel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var AjaxForm = __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js");

var NativeForm = __webpack_require__(/*! ./NativeForm */ "./NativeForm.js");

module.exports = React.createClass({
  displayName: 'ZRFormPanel',
  __render: function __render() {
    if (this.props.type == 'Native') {
      return /*#__PURE__*/React.createElement(NativeForm, this.props);
    } else {
      return /*#__PURE__*/React.createElement(AjaxForm, this.props);
    }
  },
  __renderTitle: function __renderTitle() {
    var _title = this.props.titleRender && this.props.titleRender();

    return _title || this.props.title;
  },
  render: function render() {
    var _title = this.__renderTitle();

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-panel', this.props.className),
      style: this.props.style
    }, !!_title && /*#__PURE__*/React.createElement("div", {
      className: "panel-title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "panel-content"
    }, this.__render()));
  }
});

/***/ }),

/***/ "./FormTitle.js":
/*!**********************!*\
  !*** ./FormTitle.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRFormTitle',
  getValue: function getValue() {
    return null;
  },
  setValue: function setValue(value) {
    return this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-form-title', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("span", {
      className: "zf-title"
    }, this.props.title));
  }
});

/***/ }),

/***/ "./NativeForm.js":
/*!***********************!*\
  !*** ./NativeForm.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var FormItem = __webpack_require__(/*! ./FormItem */ "./FormItem.js");

var FormGroup = __webpack_require__(/*! ./FormGroup */ "./FormGroup.js");

var FormButtons = __webpack_require__(/*! ./FormButtons */ "./FormButtons.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRNativeForm',
  getDefaultProps: function getDefaultProps() {
    return {
      action: null,
      autoComplete: 'off',
      method: "post",
      name: null,
      noValidate: null,
      target: '_self',
      encType: "multipart/form-data"
    };
  },
  getInitialState: function getInitialState() {
    return {
      submitting: false,
      value: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.__initValue();
  },
  __initValue: function __initValue() {
    var _value = this.props.value;

    if (_value) {
      if (_value.__api__) {
        this.__initApiValue(_value);
      } else {
        this.__initObjectValue(_value);
      }
    }
  },
  __initApiValue: function __initApiValue(value) {
    var _events = this.props.events || {},
        _before = _events.before,
        _after = _events.after;

    this.state.data = zn.data.create(value, zn.extend(_events, {
      before: function (sender, data) {
        this.setState({
          submitting: true
        });
        this.props.onValueLoading && this.props.onValueLoading(data, this);
        _before && _before(sender, data);
      }.bind(this),
      after: function (sender, data) {
        this.setState({
          submitting: false,
          value: data
        });
        this.props.onValueFinished && this.props.onValueFinished(data, this);
        _after && _after(sender, data);
      }.bind(this)
    }), this.props.context);
  },
  __initObjectValue: function __initObjectValue(value) {
    this.props.onValueLoading && this.props.onValueLoading(value, this);
    this.setState({
      value: value
    });
    this.props.onValueFinished && this.props.onValueFinished(value, this);
  },
  cancel: function cancel() {},
  reset: function reset() {
    this.setState({
      submitting: false,
      value: {}
    });
    ReactDOM.findDOMNode(this).reset();
  },
  __onReset: function __onReset() {
    this.props.onReset && this.props.onReset();
  },
  submit: function submit(event, btn) {
    this.setState({
      submitting: true
    });
  },
  __onSubmit: function __onSubmit(event) {
    var _return = this.props.onSubmit && this.props.onSubmit(event, this);

    if (_return === false) {
      return false;
    }
  },
  validate: function validate() {},
  __onItemChange: function __onItemChange() {
    this.props.onItemChange && this.props.onItemChange();
  },
  __onItemInputChange: function __onItemInputChange() {
    this.props.onItemInputChange && this.props.onItemInputChange();
  },
  __itemRender: function __itemRender(item, index) {
    return /*#__PURE__*/React.createElement(FormItem, _extends({
      key: index
    }, item, {
      value: this.state.value[item.name],
      text: this.state.value[item.name + "_convert"],
      onChange: this.__onItemChange,
      onInputChange: this.__onItemInputChange
    }));
  },
  __renderItems: function __renderItems() {
    return /*#__PURE__*/React.createElement(FormGroup, {
      data: this.props.data,
      itemRender: this.__itemRender
    });
  },
  __renderGroups: function __renderGroups() {
    var _groups = this.props.groups || [];

    if (!_groups.length) {
      return null;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "groups"
    }, _groups.map(function (group) {
      return /*#__PURE__*/React.createElement(FormGroup, _extends({}, group, {
        itemRender: this.__itemRender
      }));
    }.bind(this)));
  },
  __renderButtons: function __renderButtons() {
    if (!this.props.buttons) {
      return null;
    }

    return /*#__PURE__*/React.createElement(FormButtons, {
      data: this.props.buttons,
      onSubmit: this.submit,
      onReset: this.reset,
      onCancel: this.cancel
    });
  },
  render: function render() {
    var _hiddens = this.props.hiddens || {};

    return /*#__PURE__*/React.createElement("form", {
      style: znui.react.style(this.props.style),
      className: znui.react.classname('zr-form zr-native-form', this.props.className),
      action: this.props.action,
      autoComplete: this.props.autoComplete,
      method: this.props.method,
      name: this.props.name,
      noValidate: this.props.noValidate,
      target: this.props.target,
      encType: this.props.encType,
      onReset: this.__onReset,
      onSubmit: this.__onSubmit
    }, Object.keys(_hiddens).map(function (hidden, index) {
      return /*#__PURE__*/React.createElement("input", {
        key: 'hidden_' + hidden,
        type: "hidden",
        name: hidden,
        value: _hiddens[hidden]
      });
    }), this.__renderItems(), this.__renderGroups(), this.__renderButtons(), this.state.submitting && /*#__PURE__*/React.createElement("div", {
      className: "zr-form-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Submitting ...")));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  AjaxForm: __webpack_require__(/*! ./AjaxForm */ "./AjaxForm.js"),
  Form: __webpack_require__(/*! ./Form */ "./Form.js"),
  FormButtons: __webpack_require__(/*! ./FormButtons */ "./FormButtons.js"),
  FormGroup: __webpack_require__(/*! ./FormGroup */ "./FormGroup.js"),
  FormItem: __webpack_require__(/*! ./FormItem */ "./FormItem.js"),
  FormTitle: __webpack_require__(/*! ./FormTitle */ "./FormTitle.js"),
  FormPanel: __webpack_require__(/*! ./FormPanel */ "./FormPanel.js"),
  NativeForm: __webpack_require__(/*! ./NativeForm */ "./NativeForm.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ "znui-react":
/*!*********************!*\
  !*** external "zr" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr"]; }());

/***/ }),

/***/ "znui-react-button":
/*!*************************!*\
  !*** external "button" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["button"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BamF4Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtLmpzIiwid2VicGFjazovLy8uL0Zvcm1CdXR0b25zLmpzIiwid2VicGFjazovLy8uL0Zvcm1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVRpdGxlLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGb3JtSXRlbSIsIkZvcm1Hcm91cCIsIkZvcm1CdXR0b25zIiwicG9wdXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImFjdGlvbiIsIm1ldGhvZCIsIm5vVmFsaWRhdGUiLCJlbmNUeXBlIiwiYnV0dG9ucyIsInZhbHVlIiwidHlwZSIsImljb24iLCJnZXRJbml0aWFsU3RhdGUiLCJzdWJtaXR0aW5nIiwiaGlkZGVucyIsImRhdGEiLCJyZWZzIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbCIsInByb3BzIiwib25DYW5jZWwiLCJyZXNldCIsInNldFN0YXRlIiwiX3JlZnMiLCJfcmVmIiwia2V5IiwiX19vblJlc2V0Iiwib25SZXNldCIsImdldFZhbHVlIiwiY2FsbGJhY2siLCJfdmFsdWUiLCJ2YWxpZGF0ZSIsInpuIiwiZXh0ZW5kIiwic3RhdGUiLCJtZXJnZSIsIl90ZW1wIiwiZXh0cyIsIl9faXNBcGlWYWx1ZSIsIl9fYXBpX18iLCJzZXRWYWx1ZSIsImNhbGwiLCJpcyIsIl90ZXh0Iiwic3VibWl0IiwiX3JldHVybiIsIm9uU3VibWl0QmVmb3JlIiwiX3N1Ym1pdEFwaSIsInVybCIsInN1Ym1pdEFwaSIsIl9tZXRob2QiLCJfa2V5IiwidG9Mb2NhbGVMb3dlckNhc2UiLCJwcm9jZXNzIiwiZXJyb3IiLCJjcmVhdGUiLCJiZWZvcmUiLCJzZW5kZXIiLCJfX2lzTW91bnRlZCIsIm9uU3VibWl0aW5nIiwiYmluZCIsImFmdGVyIiwib25TdWJtaXRlZCIsInN1Y2Nlc3MiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJ4aHIiLCJvblN1Ym1pdEVycm9yIiwiY29udGV4dCIsIl9fb25TdWJtaXQiLCJvblN1Ym1pdCIsIl9kYXRhIiwiX25vVmFsaWRhdGUiLCJyZXF1aXJlZCIsInVuZGVmaW5lZCIsInZhbHVlS2V5IiwiX19wYXJzZUl0ZW1WYWx1ZSIsImluZGV4T2YiLCJldmFsIiwiX19vbkl0ZW1JbnB1dENoYW5nZSIsImV2ZW50IiwiaW5wdXQiLCJmb3JtaXRlbSIsInZhbGlkYXRlVmFsdWUiLCJvbkl0ZW1JbnB1dENoYW5nZSIsIl9faXRlbVJlbmRlciIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJfbmFtZSIsInJlZiIsIl9fcmVuZGVySXRlbXMiLCJyZXNwb25zZUhhbmRsZXIiLCJfX3JlbmRlckdyb3VwcyIsImdyb3VwcyIsIm1hcCIsImdyb3VwIiwiX19yZW5kZXJCdXR0b25zIiwiX19vblZhbHVlTG9hZGluZyIsIm9uVmFsdWVMb2FkaW5nIiwiX19vblZhbHVlTG9hZGVkIiwib25WYWx1ZUxvYWRlZCIsIl9fb25WYWx1ZUxvYWRFcnJvciIsIm9uVmFsdWVMb2FkRXJyb3IiLCJub3RpZmllciIsIm1lc3NhZ2UiLCJfX3JlbmRlciIsInJlYWN0Iiwic3R5bGUiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJfX2xvYWRpbmdSZW5kZXIiLCJyZW5kZXIiLCJBamF4Rm9ybSIsIk5hdGl2ZUZvcm0iLCJidXR0b24iLCJfX2J1dHRvbkNsaWNrIiwib25DbGljayIsImxvYWRlciIsImxvYWRpbmciLCJpdGVtUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJfX29uRXJyb3IiLCJkaXNhYmxlZCIsInN0YXR1cyIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJfdGltZW91dCIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsIl9jYWxsYmFjayIsInNldFRpbWVvdXQiLCJfX29uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRDaGFuZ2UiLCJfX29uSW5wdXRFbnRlciIsIm9uRW50ZXIiLCJvbklucHV0RW50ZXIiLCJfX3JlbmRlckhlYWRlciIsImxhYmVsIiwiX19yZW5kZXJCb2R5IiwiX2lucHV0UHJvcHMiLCJpbnB1dENsYXNzTmFtZSIsIl9pbnB1dEVsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJzdWZmaXgiLCJsYXlvdXQiLCJzaXplIiwiX19yZW5kZXJUaXRsZSIsIl90aXRsZSIsInRpdGxlUmVuZGVyIiwidGl0bGUiLCJSZWFjdERPTSIsImF1dG9Db21wbGV0ZSIsInRhcmdldCIsIl9faW5pdFZhbHVlIiwiX19pbml0QXBpVmFsdWUiLCJfX2luaXRPYmplY3RWYWx1ZSIsIl9ldmVudHMiLCJldmVudHMiLCJfYmVmb3JlIiwiX2FmdGVyIiwib25WYWx1ZUZpbmlzaGVkIiwiZmluZERPTU5vZGUiLCJidG4iLCJfX29uSXRlbUNoYW5nZSIsIm9uSXRlbUNoYW5nZSIsIl9ncm91cHMiLCJsZW5ndGgiLCJfaGlkZGVucyIsIk9i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bUJFLEtBQUs5RCxLQUFMLENBQVd0QixVQUFYLGlCQUF5QjtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUFnQztBQUFNLGVBQVMsRUFBQztBQUFoQixNQUFoQyxlQUEyRDtBQUFNLGVBQVMsRUFBQztBQUFoQix3QkFBM0QsQ0FuQjNCLENBREQ7QUF1QkE7QUFsSmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDUEFkLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiaUgsVUFBUSxFQUFFdkgsbUJBQU8sQ0FBQyxpQ0FBRCxDQURKO0FBRWJvTCxNQUFJLEVBQUVwTCxtQkFBTyxDQUFDLHlCQUFELENBRkE7QUFHYkcsYUFBVyxFQUFFSCxtQkFBTyxDQUFDLHVDQUFELENBSFA7QUFJYkUsV0FBUyxFQUFFRixtQkFBTyxDQUFDLG1DQUFELENBSkw7QUFLYkMsVUFBUSxFQUFFRCxtQkFBTyxDQUFDLGlDQUFELENBTEo7QUFNYnFMLFdBQVMsRUFBRXJMLG1CQUFPLENBQUMsbUNBQUQsQ0FOTDtBQU9ic0wsV0FBUyxFQUFFdEwsbUJBQU8sQ0FBQyxtQ0FBRCxDQVBMO0FBUWJ3SCxZQUFVLEVBQUV4SCxtQkFBTyxDQUFDLHFDQUFEO0FBUk4sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSw2QkFBNkIsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E1QyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSQWxlcnQnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiAn56Gu6K6kJ1xuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBfX29uQ2xpY2s6IGZ1bmN0aW9uIF9fb25DbGljayhpdGVtLCBpbmRleCkge1xuICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCB0aGlzKTtcblxuICAgIF9yZXN1bHQgPSBpdGVtLm9uQ2xpY2sgJiYgaXRlbS5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB6bi5kZWJ1ZygnYWxlcnQuY2xvc2UnKTtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtYWxlcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1pbm5lclwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtdGl0bGVcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUpLCB0aGlzLnByb3BzLmNvbnRlbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWNvbnRlbnRcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtYnRuc1wiXG4gICAgfSwgdGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1idG5cIixcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuX19vbkNsaWNrKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSwgaXRlbS50ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpKSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFsZXJ0OiBBbGVydCxcbiAgYWxlcnQ6IGZ1bmN0aW9uIGFsZXJ0KGNvbnRlbnQsIHRpdGxlLCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICB2YXIgX2FsZXJ0ID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwgX2V4dGVuZHMoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG9uQ2xpY2s6IGNhbGxiYWNrXG4gICAgfSwgcHJvcHMpKSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIF9hbGVydDtcbiAgfSxcbiAgY29uZmlybTogZnVuY3Rpb24gY29uZmlybShjb250ZW50LCB0aXRsZSwgX2NvbmZpcm0yLCBjYW5jZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMgPSB6bi5leHRlbmQoe1xuICAgICAgY2FuY2VsOiAn5Y+W5raIJyxcbiAgICAgIGNvbmZpcm06ICfnoa7lrponXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICB2YXIgX2NvbmZpcm0gPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY2FuY2VsLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gY2FuY2VsICYmIGNhbmNlbChfY29uZmlybSk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9jb25maXJtLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY29uZmlybSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IF9jb25maXJtMiAmJiBfY29uZmlybTIoX2NvbmZpcm0pO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfY29uZmlybS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX2NvbmZpcm07XG4gIH0sXG4gIHByb21wdDogZnVuY3Rpb24gcHJvbXB0KGFyZ3YpIHtcbiAgICB2YXIgX2FyZ3YgPSB6bi5leHRlbmQoe1xuICAgICAgdGl0bGU6IGFyZ3YudGl0bGUsXG4gICAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWlucHV0XCIsXG4gICAgICAgIG9uQ2hhbmdlOiBhcmd2Lm9uQ2hhbmdlLFxuICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgfSksXG4gICAgICBjb25maXJtOiBhcmd2LmNvbmZpcm0sXG4gICAgICBjYW5jZWw6IGFyZ3YuY2FuY2VsXG4gICAgfSwgYXJndik7XG5cbiAgICB2YXIgX3Byb21wdCA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgIGNvbnRlbnQ6IF9hcmd2LmNvbnRlbnQsXG4gICAgICB0aXRsZTogX2FyZ3YudGl0bGUsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiBfYXJndi5jYW5jZWxUZXh0IHx8ICflj5bmtognLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50LCBhbGVydCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gX2FyZ3YuY2FuY2VsICYmIF9hcmd2LmNhbmNlbChldmVudCwgYWxlcnQpO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfcHJvbXB0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX2FyZ3YuY29uZmlybVRleHQgfHwgJ+ehruWumicsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQsIGFsZXJ0KSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBfYXJndi5jb25maXJtICYmIF9hcmd2LmNvbmZpcm0oZXZlbnQsIGFsZXJ0KTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX3Byb21wdC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX3Byb21wdDtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBEaWFsb2cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJEaWFsb2cnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbFxuICAgIH07XG4gIH0sXG4gIF9fb25DbG9zZTogZnVuY3Rpb24gX19vbkNsb3NlKGV2ZW50KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xvc2UgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50LCB0aGlzKTtcblxuICAgIGlmIChfcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgIFwiZGF0YS1mb2N1c1wiOiB0aGlzLnByb3BzLmZvY3VzXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1oZWFkZXJcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIHRoaXMucHJvcHMuY2xvc2VhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLl9fb25DbG9zZSxcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctY2xvc2VcIlxuICAgIH0sIFwieFwiKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctYm9keVwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERpYWxvZzogRGlhbG9nLFxuICBkaWFsb2c6IGZ1bmN0aW9uIGRpYWxvZyhhcmd2LCBpZlB1c2gpIHtcbiAgICB2YXIgX2RpYWxvZyA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBhcmd2KSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgaWZQdXNoKTtcblxuICAgIHJldHVybiBfZGlhbG9nO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBwb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJykucG9wb3ZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERyb3Bkb3duOiBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdaUkRyb3Bkb3duJyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZXZlbnRUeXBlOiAnY2xpY2snXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfX2V2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RhcmdldCA9IHRoaXMuZ2V0UGFyZW50KGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgX3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cbiAgICAgIGlmIChfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcikge1xuICAgICAgICB2YXIgX3JlbmRlciA9IF9wb3BvdmVyLnJlbmRlcjtcblxuICAgICAgICBpZiAoem4uaXMoX3JlbmRlciwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICBpZiAoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgICAgIF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3JlbmRlcikge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcbiAgICAgICAgICBwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuICAgICAgICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICB0YXJnZXQ6IF90YXJnZXRcbiAgICAgICAgICB9LCBfcG9wb3ZlcikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkxvYWRlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgdGl0bGU6ICdMb2FkaW5nIC4uLiAnXG4gICAgfTtcbiAgfSxcbiAgX19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiBfX3JlbmRlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29udGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudGl0bGUpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImxvYWRlclwiLFxuICAgICAgICBcImRhdGEtbG9hZGVyXCI6IFwic3Bpbm5lclwiXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcbiAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUpKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1sb2FkZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogem51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKVxuICAgIH0sIHRoaXMuX19yZW5kZXJDb250ZW50KCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBMb2FkZXI6IExvYWRlcixcbiAgbG9hZGVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShhcmd2KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIGFyZ3YpLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbG9hZGVyID0gX3JlZjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiBmdW5jdGlvbiBsb2FkaW5nKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBNb2RhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUk1vZGFsJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3llZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzdHJveShjYWxsYmFjayk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQgfHwgdGhpcy5zdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblxuICAgIGlmIChfcmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB0aGlzLnN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3kgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufSk7XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTW9kYWw6IE1vZGFsLFxuICBtb2RhbDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtbW9kYWwtY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21vZGFscyA9IFtdO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGNvbnRlbnQsIG9wdGlvbnMsIGlmUHVzaCkge1xuICAgICAgICB2YXIgX21vZGFsID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgb3B0aW9ucywgY29udGVudCksIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiB6bnVpLmNsYXNzbmFtZSgnenItcG9wdXAtbW9kYWwnLCBvcHRpb25zW1wiY2xhc3NcIl0pLFxuICAgICAgICAgIHN0eWxlOiB6bnVpLnN0eWxlKG9wdGlvbnMuc3R5bGUpXG4gICAgICAgIH0sIHRoaXMuX2RvbSkpO1xuXG4gICAgICAgIHpuLmRlYnVnKCdNb2RhbCBjcmVhdGVkKCcgKyAodGhpcy5fbW9kYWxzLmxlbmd0aCArIDEpICsgJyk6ICcsIF9tb2RhbCk7XG5cbiAgICAgICAgaWYgKGlmUHVzaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9tb2RhbHMucHVzaChfbW9kYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9tb2RhbDtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHpuLmRlYnVnKCdNb2RhbCBjbG9zZSgnICsgdGhpcy5fbW9kYWxzLmxlbmd0aCArICcpOiAnKTtcblxuICAgICAgICB2YXIgX21vZGFsID0gdGhpcy5fbW9kYWxzLnBvcCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX21vZGFscyk7XG5cbiAgICAgICAgaWYgKF9tb2RhbCkge1xuICAgICAgICAgIGlmIChfbW9kYWwuc3RhdGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZShkZWxheSwgY2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBjbG9zZUFsbDogZnVuY3Rpb24gY2xvc2VBbGwoZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFscy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGRlbGF5LCB0aGlzLmNsb3NlQWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHNpemU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRZUEVfSUNPTlMgPSB7XG4gIGhlYXJ0OiAnTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6JyxcbiAgc2Vjb25kYXJ5OiAnTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0eicsXG4gIHN1Y2Nlc3M6ICdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6JyxcbiAgd2FybmluZzogJ001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLFxuICBlcnJvcjogJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonLFxuICBpbmZvOiAnTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHonXG59O1xudmFyIE5vdGlmaWVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTm90aWZpY2F0aW9uJyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE1MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24tb3V0Jyk7XG5cbiAgICBfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaWNvblwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIGQ6IFRZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlIHx8ICdpbmZvJ11cbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjbG9zZSBmYSBmYS10aW1lc1wiLFxuICAgICAgb25DbGljazogdGhpcy5vdXRcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5vdGlmaWVyOiBOb3RpZmllcixcbiAgbm90aWZpZXI6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnenItcG9wdXAtbm90aWZpZXItY29udGFpbmVyJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpZXIsIHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICAgIH0pLCB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIHRoaXMuX2RvbSkpO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8oY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBQb3BvdmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSUG9wb3ZlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoaWRkZW5IZWlnaHQ6IDUsXG4gICAgICBjbG9zZWFibGU6IGZhbHNlLFxuICAgICAgcG9wb3ZlcldpZHRoOiBudWxsLFxuICAgICAgcG9wb3ZlckhlaWdodDogbnVsbFxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcnJvd0NsYXNzTmFtZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ldmVudCkge1xuICAgICAgdGhpcy5fZXZlbnRUeXBlID0gdGhpcy5wcm9wcy5ldmVudC50eXBlIHx8IHRoaXMucHJvcHMuZXZlbnQ7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25Db250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKF9yZXN1bHQgPT09IHRydWUpIHsvL2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksIHRydWUpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgX19pc01hdGNoUGFyZW50OiBmdW5jdGlvbiBfX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQgIT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUsIHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBfX29uV2luZG93Q2xpY2s6IGZ1bmN0aW9uIF9fb25XaW5kb3dDbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5fX2lzTWF0Y2hQYXJlbnQoZXZlbnQudGFyZ2V0LCB0aGlzLl9kb20pKSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSh0YWcpIHtcbiAgICAvL3puLmluZm8oJ1BvcG92ZXIuY2xvc2U6JywgdGFnKTtcbiAgICBpZiAodGhpcy5fZG9tKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLl9kb20ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZSA9ICcnO1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9tID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50VHlwZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmaXhQb3NpdGlvbjogZnVuY3Rpb24gZml4UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgdmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXG4gICAgdmFyIF90ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9wb3BvdmVyV2lkdGggPSB0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCB8fCBfdC53aWR0aCxcbiAgICAgICAgX3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuICAgIGlmIChfcG9wb3ZlcldpZHRoID09ICcxMDAlJykge1xuICAgICAgX3BvcG92ZXJXaWR0aCA9IF90LndpZHRoO1xuICAgIH1cblxuICAgIGlmIChfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZGVuICYmIHRoaXMucHJvcHMub25IaWRkZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX3QueCArIF9wb3BvdmVyV2lkdGggPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpIHtcbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LXJpZ2h0Jyk7XG5cbiAgICAgIF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfbGVmdCA9IF90Lng7XG5cbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblxuICAgICAgX3BvcG92ZXIuc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAoX3QueSArIF9wb3BvdmVySGVpZ2h0ID4gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCkge1xuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJyk7XG5cbiAgICAgIF90b3AgPSBfdC5oZWlnaHQgKyAxMDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLmJvdHRvbSA9IF90b3AgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90LnkgKyBfdC5oZWlnaHQgKyAxMDtcblxuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cbiAgICAgIF9wb3BvdmVyLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCkge1xuICAgICAgX3BvcG92ZXIuc3R5bGUud2lkdGggPSBfcG9wb3ZlcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0KSB7XG4gICAgICBpZiAoX3BvcG92ZXIub2Zmc2V0SGVpZ2h0ICE9IF9wb3BvdmVySGVpZ2h0KSB7XG4gICAgICAgIF9wb3BvdmVyLnN0eWxlLmhlaWdodCA9IF9wb3BvdmVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6bi1hbmltYXRlLXNjYWxlLXVwJyk7XG5cbiAgICBfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfc3R5bGUgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgX3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3N0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtcG9wb3ZlciB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci13aGl0ZScsIHRoaXMuc3RhdGUuYXJyb3dDbGFzc05hbWUpXG4gICAgfSwgdGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJwb3BvdmVyLWNsb3NlIHpyLWhvdmVyLXNlbGYtbG9hZGluZ1wiLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsb3NlKCdzZWxmIGNsb3NlJyk7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiBcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZDogXCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCJcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiAoem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnN0eWxlKSwgX3N0eWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBQb3BvdmVyOiBQb3BvdmVyLFxuICBwb3BvdmVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNldCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3puLnBvcG92ZXI6cmVuZGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKSwgdGhpcy5fcG9wb3ZlcjtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UodGFnKSB7XG4gICAgICAgIGlmICh0aGlzLl9wb3BvdmVyKSB7XG4gICAgICAgICAgdGhpcy5fcG9wb3Zlci5jbG9zZSh0YWcpO1xuXG4gICAgICAgICAgdGhpcy5fcG9wb3ZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlRvYXN0JyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE4MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1vdXQnKTtcblxuICAgIF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC10b2FzdCB0b2FzdC1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb2FzdDogVG9hc3QsXG4gIHRvYXN0OiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb2FzdCwge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgICAgfSksIF9kb20pO1xuXG4gICAgICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdkYW5nZXInLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJUb29sdGlwJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycm93Q2xhc3NOYW1lOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgfSxcbiAgZml4UG9zaXRpb246IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLicpO1xuICAgIH1cblxuICAgIHZhciBfZG9tV2lkdGggPSB0aGlzLl9kb20ub2Zmc2V0V2lkdGgsXG4gICAgICAgIF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBfdGFyZ2V0ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9jbGFzc05hbWUgPSAnJztcblxuICAgIGlmIChfdGFyZ2V0LnggKyBfZG9tV2lkdGggPiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoKSB7XG4gICAgICBfbGVmdCA9IF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoX3RhcmdldC55ICsgX2RvbUhlaWdodCA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuICAgIH1cblxuICAgIGlmIChfbGVmdCA8IDApIHtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWxlZnQnO1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LnggKyBfdGFyZ2V0LndpZHRoICsgNDtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgKyA0O1xuICAgIH1cblxuICAgIHRoaXMuX2RvbS5zdHlsZS50b3AgPSBfdG9wICsgJ3B4JztcbiAgICB0aGlzLl9kb20uc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICBfY2xhc3NOYW1lICYmIHRoaXMuX2RvbS5jbGFzc0xpc3QuYWRkKF9jbGFzc05hbWUpO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cbiAgICBpZiAoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuXG4gICAgaWYgKHpuLmlzKGNhbGxiYWNrLCAnZnVuY3Rpb24nKSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVG9vbHRpcDogVG9vbHRpcCxcbiAgdG9vbHRpcDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtdG9vbHRpcC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICB9LFxuICAgICAgX19vbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gX19vbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmcnKTtcbiAgICAgIH0sXG4gICAgICBfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlOiBmdW5jdGlvbiBfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09ICdCT0RZJyB8fCB0YXJnZXQudGFnTmFtZSA9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfX29uV2luZG93TW91c2VPdmVyOiBmdW5jdGlvbiBfX29uV2luZG93TW91c2VPdmVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgX3ZhbHVlID0gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKF90YXJnZXQpO1xuXG4gICAgICAgIGlmIChfdGFyZ2V0ICYmIF92YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl90b29sdGlwICYmIHRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0ICE9PSBfdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlbmRlcihfdmFsdWUsIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCkge1xuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9vbHRpcCA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKTtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXApIHtcbiAgICAgICAgICBpZiAoem4uaXMoY2FsbGJhY2ssICdzdHJpbmcnKSAmJiBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIHpuLmRlYnVnKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSk7XG5cbiAgICAgICAgICB0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHpuLmRlZXBBc3NpZ25zKHt9LCByZXF1aXJlKCcuL0FsZXJ0JyksIHJlcXVpcmUoJy4vRGlhbG9nJyksIHJlcXVpcmUoJy4vRHJvcGRvd24nKSwgcmVxdWlyZSgnLi9Mb2FkZXInKSwgcmVxdWlyZSgnLi9Nb2RhbCcpLCByZXF1aXJlKCcuL05vdGlmaWVyJyksIHJlcXVpcmUoJy4vUG9wb3ZlcicpLCByZXF1aXJlKCcuL1RvYXN0JyksIHJlcXVpcmUoJy4vVG9vbHRpcCcpKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIiFmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKXRbbl09ZVtuXX0odGhpcyxmdW5jdGlvbihuKXt2YXIgbz17fTtmdW5jdGlvbiByKHQpe2lmKG9bdF0pcmV0dXJuIG9bdF0uZXhwb3J0czt2YXIgZT1vW3RdPXtpOnQsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gblt0XS5jYWxsKGUuZXhwb3J0cyxlLGUuZXhwb3J0cyxyKSxlLmw9ITAsZS5leHBvcnRzfXJldHVybiByLm09bixyLmM9byxyLmQ9ZnVuY3Rpb24odCxlLG4pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTQpfShbZnVuY3Rpb24odCxlKXshZnVuY3Rpb24oKXt0LmV4cG9ydHM9dGhpcy5SZWFjdH0oKX0sZnVuY3Rpb24odCxlKXshZnVuY3Rpb24oKXt0LmV4cG9ydHM9dGhpcy5SZWFjdERPTX0oKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPXpudWkuUmVhY3R8fG4oMCksaT16bnVpLlJlYWN0RE9NfHxuKDEpLHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUk1vZGFsXCIsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue2Rlc3Ryb3llZDohMX19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50JiZ0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyl9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRlc3Ryb3kodCl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7aWYoIXRoaXMuX19pc01vdW50ZWR8fHRoaXMuc3RhdGUuZGVzdHJveWVkKXJldHVybiExO3ZhciBlPWkuZmluZERPTU5vZGUodGhpcyk7aWYoITE9PT0odGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUmJnRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKGUpKSlyZXR1cm4hMTtlJiZlLnBhcmVudE5vZGUucGFyZW50Tm9kZSYmKGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUucGFyZW50Tm9kZSksaS51bm1vdW50Q29tcG9uZW50QXROb2RlKGUucGFyZW50Tm9kZSkpLHQmJnQoKSx0aGlzLnN0YXRlLmRlc3Ryb3llZD0hMCx0aGlzLnByb3BzLm9uRGVzdHJveSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3koKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LG51bGwsdGhpcy5wcm9wcy5jaGlsZHJlbil9fSk7dC5leHBvcnRzPXtNb2RhbDpzLG1vZGFsOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIn0pLHRoaXMuX21vZGFscz1bXX0sY3JlYXRlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1pLnJlbmRlcihyLmNyZWF0ZUVsZW1lbnQocyxlLHQpLHpuLmRvbS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzOnpudWkuY2xhc3NuYW1lKFwienItcG9wdXAtbW9kYWxcIixlLmNsYXNzKSxzdHlsZTp6bnVpLnN0eWxlKGUuc3R5bGUpfSx0aGlzLl9kb20pKTtyZXR1cm4gem4uZGVidWcoXCJNb2RhbCBjcmVhdGVkKFwiKyh0aGlzLl9tb2RhbHMubGVuZ3RoKzEpK1wiKTogXCIsbyksITEhPT1uJiZ0aGlzLl9tb2RhbHMucHVzaChvKSxvfSxjbG9zZTpmdW5jdGlvbih0LGUpe3puLmRlYnVnKFwiTW9kYWwgY2xvc2UoXCIrdGhpcy5fbW9kYWxzLmxlbmd0aCtcIik6IFwiKTt2YXIgbj10aGlzLl9tb2RhbHMucG9wKCk7aWYobil7aWYobi5zdGF0ZS5kZXN0cm95ZWQpcmV0dXJuIHRoaXMuY2xvc2UodCxlKTt0P3NldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gbi5kZXN0cm95KGUpfSx0KTpuLmRlc3Ryb3koZSl9cmV0dXJuIHRoaXN9LGNsb3NlQWxsOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoJiZ0aGlzLmNsb3NlKHQsdGhpcy5jbG9zZUFsbCksdGhpc30sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RofX19KX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcj16bnVpLlJlYWN0fHxuKDApLGk9em51aS5SZWFjdERPTXx8bigxKSxzPXIuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJQb3BvdmVyXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue2hpZGRlbkhlaWdodDo1LGNsb3NlYWJsZTohMSxwb3BvdmVyV2lkdGg6bnVsbCxwb3BvdmVySGVpZ2h0Om51bGx9fSxnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm57YXJyb3dDbGFzc05hbWU6XCJcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPWkuZmluZERPTU5vZGUodGhpcyksdGhpcy5wcm9wcy5ldmVudCYmKHRoaXMuX2V2ZW50VHlwZT10aGlzLnByb3BzLmV2ZW50LnR5cGV8fHRoaXMucHJvcHMuZXZlbnQsd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLHRoaXMuX19vbldpbmRvd0NsaWNrLCExKSx0aGlzLl9kb20uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50JiZ0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQodCx0aGlzKX0uYmluZCh0aGlzKSwhMCksc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpfS5iaW5kKHRoaXMpLDApKSx0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50JiZ0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50KHRoaXMpfSxfX2lzTWF0Y2hQYXJlbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4hdHx8XCJCT0RZXCIhPXQudGFnTmFtZSYmXCJIVE1MXCIhPXQudGFnTmFtZSYmKHQ9PT1lfHx0aGlzLl9faXNNYXRjaFBhcmVudCh0LnBhcmVudE5vZGUsZSkpfSxfX29uV2luZG93Q2xpY2s6ZnVuY3Rpb24odCl7dGhpcy5fX2lzTWF0Y2hQYXJlbnQodC50YXJnZXQsdGhpcy5fZG9tKT8hMD09PSh0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQmJnRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCh0LHRoaXMpKSYmdGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBpbnNpZGUgY29udGFpbmVyIGV2ZW50XCIpOiEwIT09KHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQmJnRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQodCx0aGlzKSkmJnRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIil9LGNsb3NlOmZ1bmN0aW9uKCl7dGhpcy5fZG9tJiYod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLHRoaXMuX19vbldpbmRvd0NsaWNrLCExKSx0aGlzLl9kb20ucGFyZW50Tm9kZSYmKHRoaXMuX2RvbS5wYXJlbnROb2RlLnN0eWxlPVwiXCIsaS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKSksdGhpcy5fZG9tPW51bGwsdGhpcy5fZXZlbnRUeXBlPW51bGwpfSxmaXhQb3NpdGlvbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9kb20sbj16bi5kb20uZ2V0UG9zaXRpb24odCksbz10aGlzLnByb3BzLnBvcG92ZXJXaWR0aHx8bi53aWR0aCxyPXRoaXMucHJvcHMucG9wb3ZlckhlaWdodHx8em4uZG9tLmdldFBvc2l0aW9uKGUpLmhlaWdodCxpPW51bGwscz1udWxsLGE9W107XCIxMDAlXCI9PW8mJihvPW4ud2lkdGgpLHI8dGhpcy5wcm9wcy5oaWRkZW5IZWlnaHQ/dGhpcy5wcm9wcy5vbkhpZGRlbiYmdGhpcy5wcm9wcy5vbkhpZGRlbigpOihuLngrbz53aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGg/KGEucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1yaWdodFwiKSxpPWRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgtbi54LW4ud2lkdGgsZS5zdHlsZS5yaWdodD1pK1wicHhcIixlLnBhcmVudE5vZGUuc3R5bGUucmlnaHQ9XCIwcHhcIik6KGk9bi54LGEucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1sZWZ0XCIpLGUuc3R5bGUubGVmdD1pK1wicHhcIiksbi55K3I+d2luZG93LnNjcmVlbi5hdmFpbEhlaWdodD8oYS5wdXNoKFwienItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbVwiKSxzPW4uaGVpZ2h0KzEwLGUuc3R5bGUuYm90dG9tPXMrXCJweFwiLGUucGFyZW50Tm9kZS5zdHlsZS5ib3R0b209XCIwcHhcIik6KHM9bi55K24uaGVpZ2h0KzEwLGEucHVzaChcInpyLWFycm93LWRpcmVjdGlvbi10b3BcIiksZS5zdHlsZS50b3A9cytcInB4XCIpLHRoaXMucHJvcHMucG9wb3ZlcldpZHRoJiYoZS5zdHlsZS53aWR0aD1vK1wicHhcIiksdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0JiZlLm9mZnNldEhlaWdodCE9ciYmKGUuc3R5bGUuaGVpZ2h0PXIrXCJweFwiKSxlLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIsYS5wdXNoKFwiem4tYW5pbWF0ZS1zY2FsZS11cFwiKSxlLmNsYXNzTmFtZT1lLmNsYXNzTmFtZStcIiBcIithLmpvaW4oXCIgXCIpKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXt9O3JldHVybiB0aGlzLnByb3BzLmhlaWdodD9lLm1heEhlaWdodD10aGlzLnByb3BzLmhlaWdodCtcInB4XCI6ZS5oZWlnaHQ9XCJhdXRvXCIsci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGVcIix0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0sdGhpcy5wcm9wcy5jbG9zZWFibGUmJnIuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuY2xvc2UoXCJzZWxmIGNsb3NlXCIpfX0sci5jcmVhdGVFbGVtZW50KFwic3ZnXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIixmb2N1c2FibGU6XCJmYWxzZVwiLFwiZGF0YS1wcmVmaXhcIjpcImZhc1wiLGNsYXNzTmFtZTpcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIscm9sZTpcImltZ1wiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDUxMiA1MTJcIn0sci5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtmaWxsOlwiY3VycmVudENvbG9yXCIsZDpcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIn0pKSksci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTooem4uZXh0ZW5kKHt9LHRoaXMucHJvcHMuc3R5bGUpLGUpfSx0aGlzLnByb3BzLmNvbnRlbnQpKX19KTt0LmV4cG9ydHM9e1BvcG92ZXI6cyxwb3BvdmVyOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwifSl9LHJlbmRlcjpmdW5jdGlvbih0LGUpe3JldHVybiBlJiZlLnJlc2V0JiZ0aGlzLmNsb3NlKFwiem4ucG9wb3ZlcjpyZW5kZXJcIiksdGhpcy5fcG9wb3Zlcj1pLnJlbmRlcihyLmNyZWF0ZUVsZW1lbnQocyxvKHt9LGUse2NvbnRlbnQ6dH0pKSx0aGlzLl9kb20pLHRoaXMuX3BvcG92ZXJ9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wb3BvdmVyJiYodGhpcy5fcG9wb3Zlci5jbG9zZSh0KSx0aGlzLl9wb3BvdmVyPW51bGwpLHRoaXN9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz16bi5kZWVwQXNzaWducyh7fSxuKDUpLG4oNiksbig3KSxuKDgpLG4oMiksbig5KSxuKDMpLG4oMTApLG4oMTEpKX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIHIoKXtyZXR1cm4ocj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBhPXpudWkuUmVhY3R8fG4oMCksYz1uKDIpLm1vZGFsLGw9YS5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkFsZXJ0XCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue3RpdGxlOlwiXCIsY29udGVudDpudWxsLG9uQ2xpY2s6bnVsbCxidXR0b25zOlt7dGV4dDpcIuehruiupFwifV19fSxfX29uQ2xpY2s6ZnVuY3Rpb24odCxlKXt0LmluZGV4PWU7dGhpcy5wcm9wcy5vbkNsaWNrJiZ0aGlzLnByb3BzLm9uQ2xpY2sodCx0aGlzKTshMSE9PSh0Lm9uQ2xpY2smJnQub25DbGljayh0LHRoaXMpKSYmKHpuLmRlYnVnKFwiYWxlcnQuY2xvc2VcIiksYy5jbG9zZSgpKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1hbGVydFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtaW5uZXJcIn0sdGhpcy5wcm9wcy50aXRsZSYmYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LXRpdGxlXCJ9LHRoaXMucHJvcHMudGl0bGUpLHRoaXMucHJvcHMuY29udGVudCYmYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LWNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSksYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LWJ0bnNcIn0sdGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6ZSxjbGFzc05hbWU6XCJhbGVydC1idG5cIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4uX19vbkNsaWNrKHQsZSl9fSx0LnRleHQpfS5iaW5kKHRoaXMpKSkpfX0pO3QuZXhwb3J0cz17QWxlcnQ6bCxhbGVydDpmdW5jdGlvbih0LGUsbixvKXtyZXR1cm4gYy5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGwscih7Y29udGVudDp0LHRpdGxlOmUsb25DbGljazpufSxvKSkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0sITEpfSxjb25maXJtOmZ1bmN0aW9uKHQsZSxuLG8scil7dmFyIGk9em4uZXh0ZW5kKHtjYW5jZWw6XCLlj5bmtohcIixjb25maXJtOlwi56Gu5a6aXCJ9LHIpLHM9Yy5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGwse2NvbnRlbnQ6dCx0aXRsZTplLGJ1dHRvbnM6W3t0ZXh0OmkuY2FuY2VsLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4hMSE9PShvJiZvKHMpKSYmcy5kZXN0cm95KCksITF9fSx7dGV4dDppLmNvbmZpcm0sb25DbGljazpmdW5jdGlvbigpe3JldHVybiExIT09KG4mJm4ocykpJiZzLmRlc3Ryb3koKSwhMX19XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LCExKTtyZXR1cm4gc30scHJvbXB0OmZ1bmN0aW9uKHQpe3ZhciBuPXpuLmV4dGVuZCh7dGl0bGU6dC50aXRsZSxjb250ZW50OmEuY3JlYXRlRWxlbWVudChcImlucHV0XCIse2NsYXNzTmFtZTpcImFsZXJ0LWlucHV0XCIsb25DaGFuZ2U6dC5vbkNoYW5nZSx0eXBlOlwidGV4dFwifSksY29uZmlybTp0LmNvbmZpcm0sY2FuY2VsOnQuY2FuY2VsfSx0KSxvPWMuY3JlYXRlKGEuY3JlYXRlRWxlbWVudChsLHtjb250ZW50Om4uY29udGVudCx0aXRsZTpuLnRpdGxlLGJ1dHRvbnM6W3t0ZXh0Om4uY2FuY2VsVGV4dHx8XCLlj5bmtohcIixvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITEhPT0obi5jYW5jZWwmJm4uY2FuY2VsKHQsZSkpJiZvLmRlc3Ryb3koKSwhMX19LHt0ZXh0Om4uY29uZmlybVRleHR8fFwi56Gu5a6aXCIsb25DbGljazpmdW5jdGlvbih0LGUpe3JldHVybiExIT09KG4uY29uZmlybSYmbi5jb25maXJtKHQsZSkpJiZvLmRlc3Ryb3koKSwhMX19XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LCExKTtyZXR1cm4gb319fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPW4oMikubW9kYWwsaT1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSRGlhbG9nXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue3RpdGxlOlwiXCIsY29udGVudDpudWxsfX0sX19vbkNsb3NlOmZ1bmN0aW9uKHQpeyExIT09KHRoaXMucHJvcHMub25DbG9zZSYmdGhpcy5wcm9wcy5vbkNsb3NlKHQsdGhpcykpJiZyLmNsb3NlKCl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZGlhbG9nXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGUsXCJkYXRhLWZvY3VzXCI6dGhpcy5wcm9wcy5mb2N1c30sby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImRpYWxvZy1oZWFkZXJcIn0sdGhpcy5wcm9wcy50aXRsZSYmby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImRpYWxvZy10aXRsZVwifSx0aGlzLnByb3BzLnRpdGxlKSx0aGlzLnByb3BzLmNsb3NlYWJsZSYmby5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtvbkNsaWNrOnRoaXMuX19vbkNsb3NlLGNsYXNzTmFtZTpcImRpYWxvZy1jbG9zZVwifSxcInhcIikpLG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctYm9keVwifSx0aGlzLnByb3BzLmNvbnRlbnQpKX19KTt0LmV4cG9ydHM9e0RpYWxvZzppLGRpYWxvZzpmdW5jdGlvbih0LGUpe3JldHVybiByLmNyZWF0ZShvLmNyZWF0ZUVsZW1lbnQoaSx0KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwifSxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPXpudWkuUmVhY3RET018fG4oMSksaT1uKDMpLnBvcG92ZXI7dC5leHBvcnRzPXtEcm9wZG93bjpvLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSRHJvcGRvd25cIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57ZGlzYWJsZWQ6ITEsZXZlbnRUeXBlOlwiY2xpY2tcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7ci5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLHRoaXMuX19ldmVudEhhbmRsZXIsITEpfSxjb21wb25lbnRXaWxsVW5tb3VudDpmdW5jdGlvbigpe3IuZmluZERPTU5vZGUodGhpcykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSx0aGlzLl9fZXZlbnRIYW5kbGVyLCExKX0sZ2V0UGFyZW50OmZ1bmN0aW9uKHQpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhcInpyLXBvcHVwLWRyb3Bkb3duXCIpP3Q6dGhpcy5nZXRQYXJlbnQodC5wYXJlbnROb2RlKX0sX19ldmVudEhhbmRsZXI6ZnVuY3Rpb24odCl7aWYoIXRoaXMucHJvcHMuZGlzYWJsZWQpe3ZhciBlPXRoaXMuZ2V0UGFyZW50KHQudGFyZ2V0KSxuPXpuLmV4dGVuZCh7fSx0aGlzLnByb3BzLnBvcG92ZXIpO2lmKGUmJm4mJm4ucmVuZGVyKXt2YXIgbz1uLnJlbmRlcjt6bi5pcyhvLFwiZnVuY3Rpb25cIikmJihvLnByb3RvdHlwZSYmby5wcm90b3R5cGUucmVuZGVyfHwobz1vKHQsdGhpcykpKSxvJiYodC5zdG9wUHJvcGFnYXRpb24oKSxuLnJlbmRlcj1udWxsLGRlbGV0ZSBuLnJlbmRlcixpLnJlbmRlcihvLHpuLmV4dGVuZCh7cmVzZXQ6ITAsZXZlbnQ6dCx0YXJnZXQ6ZX0sbikpKX19fSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWRyb3Bkb3duXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LHRoaXMucHJvcHMuY2hpbGRyZW4pfX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj1uKDIpLm1vZGFsLGk9by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkxvYWRlclwiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybntjb250ZW50Om51bGwsdGl0bGU6XCJMb2FkaW5nIC4uLiBcIn19LF9fcmVuZGVyQ29udGVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNvbnRlbnQ/dGhpcy5wcm9wcy5jb250ZW50OnRoaXMucHJvcHMudGl0bGU/by5jcmVhdGVFbGVtZW50KG8uRnJhZ21lbnQsbnVsbCxvLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImxvYWRlclwiLFwiZGF0YS1sb2FkZXJcIjpcInNwaW5uZXJcIn0pLG8uY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwidGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSkpOnZvaWQgMH0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1sb2FkZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0sdGhpcy5fX3JlbmRlckNvbnRlbnQoKSl9fSk7dC5leHBvcnRzPXtMb2FkZXI6aSxsb2FkZXI6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntjcmVhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5fbG9hZGVyJiZ0aGlzLl9sb2FkZXIuZGVzdHJveSgpLHIuY3JlYXRlKG8uY3JlYXRlRWxlbWVudChpLHQpLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCIscmVmOmZ1bmN0aW9uKHQpe3JldHVybiBlLl9sb2FkZXI9dH19LCExKX0sbG9hZGluZzpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jcmVhdGUoe3RpdGxlOnR9KX0sY2xvc2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9hZGVyJiZ0aGlzLl9sb2FkZXIuZGVzdHJveSgpLHRoaXN9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj16bnVpLlJlYWN0RE9NfHxuKDEpLGk9e2hlYXJ0OlwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCIsc2Vjb25kYXJ5OlwiTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0elwiLHN1Y2Nlc3M6XCJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6XCIsd2FybmluZzpcIk01NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHpcIixlcnJvcjpcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIixpbmZvOlwiTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHpcIn0scz1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTm90aWZpY2F0aW9uXCIsY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxNTAwKX0sb3V0OmZ1bmN0aW9uKCl7dmFyIHQ9ci5maW5kRE9NTm9kZSh0aGlzKTt0LmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb24tb3V0XCIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGZ1bmN0aW9uKCl7dC5wYXJlbnROb2RlLnBhcmVudE5vZGUmJih0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0LnBhcmVudE5vZGUpLHIudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0LnBhcmVudE5vZGUpKX0sITEpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pblwiLHRoaXMucHJvcHMudHlwZSl9LG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJpY29uXCJ9LG8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsZm9jdXNhYmxlOlwiZmFsc2VcIixcImRhdGEtcHJlZml4XCI6XCJmYXNcIixjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlLHJvbGU6XCJpbWdcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCA1MTIgNTEyXCJ9LG8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbDpcImN1cnJlbnRDb2xvclwiLGQ6aVt0aGlzLnByb3BzLnR5cGV8fFwiaW5mb1wiXX0pKSksby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSxvLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImNsb3NlIGZhIGZhLXRpbWVzXCIsb25DbGljazp0aGlzLm91dH0pKX19KTt0LmV4cG9ydHM9e05vdGlmaWVyOnMsbm90aWZpZXI6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLW5vdGlmaWVyLWNvbnRhaW5lclwifSl9LG9wZW46ZnVuY3Rpb24odCxlLG4pe3IucmVuZGVyKG8uY3JlYXRlRWxlbWVudChzLHt0eXBlOnQsY29udGVudDplLGRlbGF5Om59KSx6bi5kb20uY3JlYXRlRWxlbWVudChcImRpdlwiLHt9LHRoaXMuX2RvbSkpfSxzdWNjZXNzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcInN1Y2Nlc3NcIix0LGUpfSx3YXJuaW5nOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcIndhcm5pbmdcIix0LGUpfSxlcnJvcjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJlcnJvclwiLHQsZSl9LGluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiaW5mb1wiLHQsZSl9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPXpudWkuUmVhY3R8fG4oMCksaT16bnVpLlJlYWN0RE9NfHxuKDEpLHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUlRvYXN0XCIsY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxODAwKX0sb3V0OmZ1bmN0aW9uKCl7dmFyIHQ9aS5maW5kRE9NTm9kZSh0aGlzKTt0LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1vdXRcIiksdC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsZnVuY3Rpb24oKXt0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0LnBhcmVudE5vZGUpLGkudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0LnBhcmVudE5vZGUucGFyZW50Tm9kZSl9LCExKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b2FzdCB0b2FzdC1pblwiLHRoaXMucHJvcHMudHlwZSl9LHRoaXMucHJvcHMuY29udGVudCl9fSk7dC5leHBvcnRzPXtUb2FzdDpzLHRvYXN0OnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIn0pfSxvcGVuOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLHt0eXBlOnQsY29udGVudDplLGRlbGF5Om59KSxvKSx0aGlzLl9kb20uYXBwZW5kQ2hpbGQobyl9LHN1Y2Nlc3M6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwic3VjY2Vzc1wiLHQsZSl9LHdhcm5pbmc6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwid2FybmluZ1wiLHQsZSl9LGVycm9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcImRhbmdlclwiLHQsZSl9LGluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiaW5mb1wiLHQsZSl9fX0pfX0sZnVuY3Rpb24odCxlLHMpeyhmdW5jdGlvbihlKXtmdW5jdGlvbiBuKCl7cmV0dXJuKG49T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgbz16bnVpLlJlYWN0fHxzKDApLHI9em51aS5SZWFjdERPTXx8cygxKSxpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJUb29sdGlwXCIsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue2Fycm93Q2xhc3NOYW1lOlwiXCJ9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3RoaXMuX2RvbT1yLmZpbmRET01Ob2RlKHRoaXMpLHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpfSxmaXhQb3NpdGlvbjpmdW5jdGlvbih0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC5cIik7dmFyIGU9dGhpcy5fZG9tLm9mZnNldFdpZHRoLG49dGhpcy5fZG9tLm9mZnNldEhlaWdodCxvPXpuLmRvbS5nZXRQb3NpdGlvbih0KSxyPW51bGwsaT1udWxsLHM9XCJcIjtyPW8ueCtlPmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGg/by53aWR0aC1lOm8ueCsoby53aWR0aC1lKS8yLHM9by55K24+ZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ/KGk9by55LW4tMTYsXCJ6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tXCIpOihpPW8ueStvLmhlaWdodCsxNixcInpyLWFycm93LWRpcmVjdGlvbi10b3BcIikscjwwJiYocz1cInpyLWFycm93LWRpcmVjdGlvbi1sZWZ0XCIscj1vLngrby53aWR0aCs0LGk9by55KzQpLHRoaXMuX2RvbS5zdHlsZS50b3A9aStcInB4XCIsdGhpcy5fZG9tLnN0eWxlLmxlZnQ9citcInB4XCIscyYmdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQocyl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7aWYoIXRoaXMuX19pc01vdW50ZWQpcmV0dXJuITE7dmFyIGU9ci5maW5kRE9NTm9kZSh0aGlzKTtpZighMT09PSh0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoZSkpKXJldHVybiExO2UmJmUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLHRoaXMucHJvcHMub25EZXN0cm95JiZ0aGlzLnByb3BzLm9uRGVzdHJveSgpLHpuLmlzKHQsXCJmdW5jdGlvblwiKSYmdCgpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvb2x0aXAgenItYXJyb3cgenItYXJyb3ctY29sb3ItYmxhY2sgenItYXJyb3ctcGxhY2VtZW50LWNlbnRlclwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSx0aGlzLnByb3BzLmNvbnRlbnQpfX0pO3QuZXhwb3J0cz17VG9vbHRpcDppLHRvb2x0aXA6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLXRvb2x0aXAtY29udGFpbmVyXCJ9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCExKX0sX19vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuY2xvc2UoXCJ6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZ1wiKX0sX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZTpmdW5jdGlvbih0KXtpZih0KXJldHVyblwiQk9EWVwiIT10LnRhZ05hbWUmJlwiSFRNTFwiIT10LnRhZ05hbWUmJih0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpyLXBvcHVwLXRvb2x0aXBcIik/dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpyLXBvcHVwLXRvb2x0aXBcIik6dGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHQucGFyZW50Tm9kZSkpfSxfX29uV2luZG93TW91c2VPdmVyOmZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LG49dGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKGUpO2UmJm4/KHRoaXMuX3Rvb2x0aXAmJnRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0IT09ZSYmdGhpcy5jbG9zZShcInpudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlclwiKSx0aGlzLnJlbmRlcihuLHt0YXJnZXQ6ZX0pKTp0aGlzLmNsb3NlKFwiem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyXCIpfSxyZW5kZXI6ZnVuY3Rpb24odCxlKXt0aGlzLl90b29sdGlwJiZ0aGlzLl90b29sdGlwLmRlc3Ryb3koKSx0aGlzLl90b29sdGlwPXIucmVuZGVyKG8uY3JlYXRlRWxlbWVudChpLG4oe30sZSx7Y29udGVudDp0fSkpLHRoaXMuX2RvbSl9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl90b29sdGlwJiYoem4uaXModCxcInN0cmluZ1wiKSYmZSYmZS5lbnYsci51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSksdGhpcy5fdG9vbHRpcC5kZXN0cm95KHQpLHRoaXMuX3Rvb2x0aXA9bnVsbCksdGhpc319fSl9fSkuY2FsbCh0aGlzLHMoMTIpKX0sZnVuY3Rpb24odCxlKXt2YXIgbixvLHI9dC5leHBvcnRzPXt9O2Z1bmN0aW9uIGkoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHMoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gYShlKXtpZihuPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChuPT09aXx8IW4pJiZzZXRUaW1lb3V0KXJldHVybiBuPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbi5jYWxsKHRoaXMsZSwwKX19fSFmdW5jdGlvbigpe3RyeXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDppfWNhdGNoKHQpe249aX10cnl7bz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnN9Y2F0Y2godCl7bz1zfX0oKTt2YXIgYyxsPVtdLHA9ITEsdT0tMTtmdW5jdGlvbiBkKCl7cCYmYyYmKHA9ITEsYy5sZW5ndGg/bD1jLmNvbmNhdChsKTp1PS0xLGwubGVuZ3RoJiZoKCkpfWZ1bmN0aW9uIGgoKXtpZighcCl7dmFyIHQ9YShkKTtwPSEwO2Zvcih2YXIgZT1sLmxlbmd0aDtlOyl7Zm9yKGM9bCxsPVtdOysrdTxlOyljJiZjW3VdLnJ1bigpO3U9LTEsZT1sLmxlbmd0aH1jPW51bGwscD0hMSxmdW5jdGlvbihlKXtpZihvPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKG89PT1zfHwhbykmJmNsZWFyVGltZW91dClyZXR1cm4gbz1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtvKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gby5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG8uY2FsbCh0aGlzLGUpfX19KHQpfX1mdW5jdGlvbiBtKHQsZSl7dGhpcy5mdW49dCx0aGlzLmFycmF5PWV9ZnVuY3Rpb24gZigpe31yLm5leHRUaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKDE8YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWVbbi0xXT1hcmd1bWVudHNbbl07bC5wdXNoKG5ldyBtKHQsZSkpLDEhPT1sLmxlbmd0aHx8cHx8YShoKX0sbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0sci50aXRsZT1cImJyb3dzZXJcIixyLmJyb3dzZXI9ITAsci5lbnY9e30sci5hcmd2PVtdLHIudmVyc2lvbj1cIlwiLHIudmVyc2lvbnM9e30sci5vbj1mLHIuYWRkTGlzdGVuZXI9ZixyLm9uY2U9ZixyLm9mZj1mLHIucmVtb3ZlTGlzdGVuZXI9ZixyLnJlbW92ZUFsbExpc3RlbmVycz1mLHIuZW1pdD1mLHIucHJlcGVuZExpc3RlbmVyPWYsci5wcmVwZW5kT25jZUxpc3RlbmVyPWYsci5saXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuW119LHIuYmluZGluZz1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0sci5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0sci5jaGRpcj1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHIudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19XSkpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwicmVxdWlyZSgnem51aS1yZWFjdCcpO1xuaWYocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmVxdWlyZSgnLi9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2J1aWxkL2luZGV4LmpzJyk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMnKTtcbiAgICB9XG59ZWxzZSB7XG4gICAgcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG59IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZvcm1JdGVtID0gcmVxdWlyZSgnLi9Gb3JtSXRlbScpO1xudmFyIEZvcm1Hcm91cCA9IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyk7XG52YXIgRm9ybUJ1dHRvbnMgPSByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBamF4Rm9ybScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogbnVsbCxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRub1ZhbGlkYXRlOiBudWxsLFxuXHRcdFx0ZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdHsgdmFsdWU6ICflj5bmtognLCB0eXBlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICfmj5DkuqQnLCB0eXBlOiAnc3VibWl0JywgaWNvbjogJ2ZhSGFuZFBvaW50VXAnIH1cblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0aGlkZGVuczogeyB9LFxuXHRcdFx0ZGF0YTogeyB9LFxuXHRcdFx0dmFsdWU6IHsgfSxcblx0XHRcdHJlZnM6IHsgfVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpeyBcblx0XHRcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMpO1xuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHt9XG5cdFx0fSk7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGw7XG5cblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRfcmVmLnJlc2V0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy52YWxpZGF0ZShjYWxsYmFjayk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5zdGF0ZS5oaWRkZW5zKTtcblx0XHRfdmFsdWUgPSB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmhpZGRlbnMpO1xuXHRcdGlmKHRoaXMucHJvcHMubWVyZ2Upe1xuXHRcdFx0dmFyIF90ZW1wID0ge307XG5cdFx0XHRfdGVtcFt0aGlzLnByb3BzLm1lcmdlXSA9IF92YWx1ZTtcblx0XHRcdF92YWx1ZSA9IF90ZW1wO1xuXHRcdH1cblxuXHRcdHJldHVybiB6bi5leHRlbmQoX3ZhbHVlLCB0aGlzLnByb3BzLmV4dHMpLCBfdmFsdWU7XG5cdH0sXG5cdF9faXNBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIGNhbGxiYWNrKXtcblx0XHRpZighdmFsdWUpe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHZhbHVlKSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5jYWxsKHZhbHVlLCBjYWxsYmFjayksIHRoaXM7XG5cdFx0fVxuXHRcdGlmKHpuLmlzKHZhbHVlLCAnb2JqZWN0Jykpe1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5oaWRkZW5zKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5oaWRkZW5zW2tleV0gPSB2YWx1ZVtrZXldIHx8IHRoaXMuc3RhdGUuaGlkZGVuc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3JlZnMgPSB0aGlzLnJlZnMsXG5cdFx0XHRcdF9yZWYgPSBudWxsLFxuXHRcdFx0XHRfdmFsdWUgPSBudWxsLFxuXHRcdFx0XHRfdGV4dCA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRcdF9yZWYgPSBfcmVmc1trZXldO1xuXHRcdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0XHRfdmFsdWUgPSB2YWx1ZVtrZXldO1xuXHRcdFx0XHRfdGV4dCA9IHZhbHVlW2tleSsnX2NvbnZlcnQnXTtcblx0XHRcdFx0aWYoX3ZhbHVlICE9PSBudWxsKXtcblx0XHRcdFx0XHRfcmVmLnNldFZhbHVlKF92YWx1ZSwgX3RleHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRpZighX3ZhbHVlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEJlZm9yZShfdmFsdWUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRfdmFsdWUgPSBfcmV0dXJuIHx8IF92YWx1ZTtcblx0XHR2YXIgX3N1Ym1pdEFwaSA9IHpuLmV4dGVuZCh7IHVybDogdGhpcy5wcm9wcy5hY3Rpb24sIG1ldGhvZDogdGhpcy5wcm9wcy5tZXRob2QgfSwgdGhpcy5wcm9wcy5zdWJtaXRBcGkpLFxuXHRcdFx0X21ldGhvZCA9IHRoaXMucHJvcHMubWV0aG9kIHx8IF9zdWJtaXRBcGkubWV0aG9kIHx8ICdwb3N0Jyxcblx0XHRcdF9rZXkgPSBfbWV0aG9kLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2dldCcgPyAncGFyYW1zJzogJ2RhdGEnO1xuXG5cdFx0aWYoIV9zdWJtaXRBcGlbX2tleV0pIHtcblx0XHRcdF9zdWJtaXRBcGlbX2tleV0gPSB7fTtcblx0XHR9XG5cdFx0em4uZXh0ZW5kKF9zdWJtaXRBcGlbX2tleV0sIF92YWx1ZSk7XG5cdFx0aWYoIV9zdWJtaXRBcGkudXJsIHx8ICFfc3VibWl0QXBpW19rZXldKXtcblx0XHRcdGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpe1xuXHRcdFx0XHR6bi5lcnJvcignVGhlIGZvcm0gYWN0aW9uIGlzIG51bGwsIGRhdGE6ICcsIF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5zdGF0ZS5zdWJtaXQpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQuY2FsbChfc3VibWl0QXBpLCBjYWxsYmFjayk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdCA9IHpuLmRhdGEuY3JlYXRlKF9zdWJtaXRBcGksIHtcblx0XHRcdFx0YmVmb3JlOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0aW5nICYmIHRoaXMucHJvcHMub25TdWJtaXRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdGlmKHRoaXMuX19pc01vdW50ZWQpe1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ZWQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdGVkKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzICYmIHRoaXMucHJvcHMub25TdWJtaXRTdWNjZXNzKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoc2VuZGVyLCB4aHIpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25TdWJtaXRFcnJvciAmJiB0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IoeGhyLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdH1cblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR2YXIgX3JlZnMgPSB0aGlzLnN0YXRlLnJlZnMsXG5cdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdF9kYXRhID0ge30sXG5cdFx0XHRfbm9WYWxpZGF0ZSA9IHRoaXMucHJvcHMubm9WYWxpZGF0ZSxcblx0XHRcdF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZiB8fCAhX3JlZi5wcm9wcy5yZXF1aXJlZCkgeyBjb250aW51ZTsgfVxuXHRcdFx0aWYoIV9ub1ZhbGlkYXRlICYmIF9yZWYudmFsaWRhdGUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRcdFx0aWYoX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgX3ZhbHVlID09PSBudWxsKXtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKF9yZWYuZ2V0VmFsdWUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLmdldFZhbHVlKGNhbGxiYWNrKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3ZhbHVlID09PSBmYWxzZSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoX3ZhbHVlID09PSBudWxsKXtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdF9kYXRhW19yZWYucHJvcHMudmFsdWVLZXkgfHwga2V5XSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH0sXG5cdF9fcGFyc2VJdGVtVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT0wKXtcblx0XHRcdHJldHVybiBldmFsKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZvcm1pdGVtKXtcblx0XHRldmVudC52YWxpZGF0ZVZhbHVlID0gZm9ybWl0ZW0udmFsaWRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZihpdGVtLnR5cGU9PSdaUkhpZGRlbicpe1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuaGlkZGVuc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSE9bnVsbCA/IHRoaXMuX19wYXJzZUl0ZW1WYWx1ZShpdGVtLnZhbHVlKTogbnVsbCwgbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9uYW1lID0gaXRlbS5uYW1lLFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZSB8fCB7fTtcblx0XHRyZXR1cm4gPEZvcm1JdGVtIHsuLi5pdGVtfSBcblx0XHRcdFx0XHRrZXk9e2luZGV4fSBcblx0XHRcdFx0XHRyZWY9eyhyZWYpPT50aGlzLnN0YXRlLnJlZnNbX25hbWVdID0gcmVmfSBcblx0XHRcdFx0XHR2YWx1ZT17X3ZhbHVlW19uYW1lXX1cblx0XHRcdFx0XHR0ZXh0PXtfdmFsdWVbX25hbWUgKyAnX2NvbnZlcnQnXX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXt0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2V9IFxuXHRcdFx0XHRcdG9uSW5wdXRFbnRlcj17dGhpcy5zdWJtaXR9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPEZvcm1Hcm91cCBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0fSxcblx0X19yZW5kZXJHcm91cHM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmdyb3Vwcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ncm91cHMubWFwKGZ1bmN0aW9uIChncm91cCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEZvcm1Hcm91cCB7Li4uZ3JvdXB9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSAvPjtcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucyl7IHJldHVybiBudWxsOyB9XG5cdFx0cmV0dXJuIDxGb3JtQnV0dG9ucyBkYXRhPXt0aGlzLnByb3BzLmJ1dHRvbnN9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gb25SZXNldD17dGhpcy5yZXNldH0gb25DYW5jZWw9e3RoaXMuY2FuY2VsfSAvPjtcblx0fSxcblx0X19vblZhbHVlTG9hZGluZzogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBkYXRhLCBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX29uVmFsdWVMb2FkRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkRXJyb3IgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yKHhocik7XG5cdFx0cG9wdXAubm90aWZpZXIuZXJyb3IoXCJFcnJvcjogXCIgKyB4aHIubWVzc2FnZSk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybSB6ci1hamF4LWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckdyb3VwcygpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJ1dHRvbnMoKX1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc3VibWl0dGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cInpyLWZvcm0tbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+U3VibWl0dGluZyAuLi4gPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fbG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uIDwvc3Bhbj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMuc3RhdGUuaGlkZGVucyA9IHt9O1xuXHRcdGlmKHRoaXMuX19pc0FwaVZhbHVlKHRoaXMucHJvcHMudmFsdWUpKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9e3RoaXMuX19sb2FkaW5nUmVuZGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5fX29uVmFsdWVMb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vblZhbHVlTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vblZhbHVlTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9eyhkYXRhKT0+dGhpcy5zdGF0ZS5kYXRhID0gZGF0YX1cblx0XHRcdFx0XHRkYXRhUmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnZhbHVlICYmIHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09ICdvYmplY3QnKXtcblx0XHRcdHRoaXMuc3RhdGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlcigpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybScsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdOYXRpdmUnKXtcblx0XHRcdHJldHVybiA8TmF0aXZlRm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gPEFqYXhGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtYnV0dG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtQnV0dG9ucycsXG5cdF9fYnV0dG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgYnV0dG9ucyl7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHRzd2l0Y2goX2RhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAncmVzZXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0ICYmIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhbmNlbCc6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uLkJ1dHRvbnMgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tYnV0dG9ucycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuX19idXR0b25DbGlja30gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUdyb3VwJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuaXRlbVJlbmRlciAmJiB0aGlzLnByb3BzLml0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9yZXR1cm4gPT09IG51bGwpe1xuXHRcdFx0X3JldHVybiA9IDxGb3JtSXRlbSB7Li4uaXRlbX0ga2V5PXtpbmRleH0gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXR1cm47XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25FcnJvcjogZnVuY3Rpb24gKHhocil7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZm9ybS1ncm91cFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5fX29uRXJyb3J9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKTtcblxudmFyIEZvcm1JdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonRm9ybUl0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzOiAnZGVmYXVsdCcsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcblx0XHRcdGVycm9yTWVzc2FnZTogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuX3RpbWVvdXQpe1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHRleHQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0dGV4dDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCAmJiAoX3ZhbHVlID09PSAnJyB8fCBfdmFsdWUgPT0gbnVsbCkpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN0YXR1czogJ2Vycm9yJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiB0aGlzLnByb3BzLmVycm9yIHx8IFwiVGhlIGZpZWxkIGlzIHJlcXVpcmVkLlwiXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgX2NhbGxiYWNrID0gY2FsbGJhY2sgJiYgY2FsbGJhY2soX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfY2FsbGJhY2sgPT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lcnJvclxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9KTtcblx0XHR0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCl7XG5cdFx0XHRpZih0aGlzLl9faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiAnZGVmYXVsdCcgfSk7XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpLCAxMDAwKTtcblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX29uSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQuZm9ybWl0ZW0gPSB0aGlzO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgaW5wdXQsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25JbnB1dEVudGVyICYmIHRoaXMucHJvcHMub25JbnB1dEVudGVyKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVySGVhZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWhlYWRlclwiPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5pY29uICYmIDxpY29uLlNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29ufSAvPn1cblx0XHRcdFx0e3RoaXMucHJvcHMubGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmxhYmVsfTwvZGl2Pn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9pbnB1dFByb3BzID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLCB7XG5cdFx0XHRjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCdib2R5LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdHRleHQ6IHRoaXMuc3RhdGUudGV4dCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fb25JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19vbklucHV0RW50ZXJcblx0XHR9KTtcblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaW5wdXQsIF9pbnB1dFByb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6cmZpLWJvZHlcIiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3VmZml4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInN1ZmZpeFwiPnt0aGlzLnByb3BzLnN1ZmZpeH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWl0ZW0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLXJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRkYXRhLWxheW91dD17dGhpcy5wcm9wcy5sYXlvdXR9XG5cdFx0XHRcdGRhdGEtc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuXHRcdFx0XHRkYXRhLXN0YXR1cz17dGhpcy5zdGF0ZS5zdGF0dXN9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCb2R5KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtSXRlbTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWpheEZvcm0gPSByZXF1aXJlKCcuL0FqYXhGb3JtJyk7XG52YXIgTmF0aXZlRm9ybSA9IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVBhbmVsJyxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J05hdGl2ZScpe1xuXHRcdFx0cmV0dXJuIDxOYXRpdmVGb3JtIHsuLi50aGlzLnByb3BzfSAvPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8QWpheEZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJUaXRsZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF90aXRsZSA9IHRoaXMucHJvcHMudGl0bGVSZW5kZXIgJiYgdGhpcy5wcm9wcy50aXRsZVJlbmRlcigpO1xuXHRcdHJldHVybiBfdGl0bGUgfHwgdGhpcy5wcm9wcy50aXRsZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdGl0bGUgPSB0aGlzLl9fcmVuZGVyVGl0bGUoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXBhbmVsJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ISFfdGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50XCI+e3RoaXMuX19yZW5kZXIoKX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybVRpdGxlJyxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItZm9ybS10aXRsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiemYtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSTmF0aXZlRm9ybScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogbnVsbCxcblx0XHRcdGF1dG9Db21wbGV0ZTogJ29mZicsXG5cdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0bmFtZTogbnVsbCxcblx0XHRcdG5vVmFsaWRhdGU6IG51bGwsXG5cdFx0XHR0YXJnZXQ6ICdfc2VsZicsXG5cdFx0XHRlbmNUeXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHR2YWx1ZToge31cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpeyBcblx0XHR0aGlzLl9faW5pdFZhbHVlKCk7XG5cdH0sXG5cdF9faW5pdFZhbHVlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHRpZihfdmFsdWUpe1xuXHRcdFx0aWYoX3ZhbHVlLl9fYXBpX18pe1xuXHRcdFx0XHR0aGlzLl9faW5pdEFwaVZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5fX2luaXRPYmplY3RWYWx1ZShfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19pbml0QXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dmFyIF9ldmVudHMgPSB0aGlzLnByb3BzLmV2ZW50cyB8fCB7fSxcblx0XHRcdF9iZWZvcmUgPSBfZXZlbnRzLmJlZm9yZSxcblx0XHRcdF9hZnRlciA9IF9ldmVudHMuYWZ0ZXI7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhID0gem4uZGF0YS5jcmVhdGUodmFsdWUsIHpuLmV4dGVuZChfZXZlbnRzLCB7XG5cdFx0XHRiZWZvcmU6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9iZWZvcmUgJiYgX2JlZm9yZShzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGRhdGEpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQoZGF0YSwgdGhpcyk7XG5cdFx0XHRcdF9hZnRlciAmJiBfYWZ0ZXIoc2VuZGVyLCBkYXRhKTtcblx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdH0pLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHR9LFxuXHRfX2luaXRPYmplY3RWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcodmFsdWUsIHRoaXMpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQgJiYgdGhpcy5wcm9wcy5vblZhbHVlRmluaXNoZWQodmFsdWUsIHRoaXMpO1xuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdFxuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH0pO1xuXHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlc2V0KCk7XG5cdH0sXG5cdF9fb25SZXNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCgpO1xuXHR9LFxuXHRzdWJtaXQ6IGZ1bmN0aW9uIChldmVudCwgYnRuKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vblN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25TdWJtaXQgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdChldmVudCwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fb25JdGVtQ2hhbmdlOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUNoYW5nZSgpO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UoKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8Rm9ybUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlW2l0ZW0ubmFtZV19IFxuXHRcdFx0XHRcdHRleHQ9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lICsgXCJfY29udmVydFwiXX0gXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkl0ZW1DaGFuZ2V9XG5cdFx0XHRcdFx0b25JbnB1dENoYW5nZT17dGhpcy5fX29uSXRlbUlucHV0Q2hhbmdlfS8+XG5cdH0sXG5cdF9fcmVuZGVySXRlbXM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8Rm9ybUdyb3VwIGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckdyb3VwczogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9ncm91cHMgPSB0aGlzLnByb3BzLmdyb3VwcyB8fCBbXTtcblx0XHRpZighX2dyb3Vwcy5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwc1wiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2dyb3Vwcy5tYXAoZnVuY3Rpb24gKGdyb3VwKXtcblx0XHRcdFx0XHRcdHJldHVybiA8Rm9ybUdyb3VwIHsuLi5ncm91cH0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IC8+XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckJ1dHRvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmJ1dHRvbnMpIHsgcmV0dXJuIG51bGw7IH1cblx0XHRyZXR1cm4gPEZvcm1CdXR0b25zIGRhdGE9e3RoaXMucHJvcHMuYnV0dG9uc30gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvblJlc2V0PXt0aGlzLnJlc2V0fSBvbkNhbmNlbD17dGhpcy5jYW5jZWx9IC8+O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR2YXIgX2hpZGRlbnMgPSB0aGlzLnByb3BzLmhpZGRlbnMgfHwge307XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtIHpyLW5hdGl2ZS1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0YWN0aW9uPXt0aGlzLnByb3BzLmFjdGlvbn1cblx0XHRcdFx0YXV0b0NvbXBsZXRlPXt0aGlzLnByb3BzLmF1dG9Db21wbGV0ZX1cblx0XHRcdFx0bWV0aG9kPXt0aGlzLnByb3BzLm1ldGhvZH1cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRub1ZhbGlkYXRlPXt0aGlzLnByb3BzLm5vVmFsaWRhdGV9XG5cdFx0XHRcdHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9XG5cdFx0XHRcdGVuY1R5cGU9e3RoaXMucHJvcHMuZW5jVHlwZX1cblx0XHRcdFx0b25SZXNldD17dGhpcy5fX29uUmVzZXR9XG5cdFx0XHRcdG9uU3VibWl0PXt0aGlzLl9fb25TdWJtaXR9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX2hpZGRlbnMpLm1hcChmdW5jdGlvbiAoaGlkZGVuLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGlucHV0IGtleT17J2hpZGRlbl8nICsgaGlkZGVufSB0eXBlPVwiaGlkZGVuXCIgbmFtZT17aGlkZGVufSB2YWx1ZT17X2hpZGRlbnNbaGlkZGVuXX0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckl0ZW1zKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyR3JvdXBzKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQnV0dG9ucygpfVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zdWJtaXR0aW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5TdWJtaXR0aW5nIC4uLjwvc3Bhbj48L2Rpdj59XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBamF4Rm9ybTogcmVxdWlyZSgnLi9BamF4Rm9ybScpLFxuICAgIEZvcm06IHJlcXVpcmUoJy4vRm9ybScpLFxuICAgIEZvcm1CdXR0b25zOiByZXF1aXJlKCcuL0Zvcm1CdXR0b25zJyksXG4gICAgRm9ybUdyb3VwOiByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpLFxuICAgIEZvcm1JdGVtOiByZXF1aXJlKCcuL0Zvcm1JdGVtJyksXG4gICAgRm9ybVRpdGxlOiByZXF1aXJlKCcuL0Zvcm1UaXRsZScpLFxuICAgIEZvcm1QYW5lbDogcmVxdWlyZSgnLi9Gb3JtUGFuZWwnKSxcbiAgICBOYXRpdmVGb3JtOiByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6clwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImJ1dHRvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImljb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==