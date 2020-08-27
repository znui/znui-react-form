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

    if (true) {
      zn.debug('AjaxForm submit Data: ', _value);
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
        _value = null;

    for (var key in _refs) {
      _ref = _refs[key];

      if (!_ref) {
        continue;
      }

      if (_ref.props.required && _ref.validate) {
        _value = _ref.validate(callback);

        if (_value == null) {
          return false;
        }
      }

      if (_ref.getValue) {
        _value = _ref.getValue(callback);
      }

      if (_ref.props.required && _value == null) {
        return false;
      }

      if (_value == null) {
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
      value: item.value != null ? item.value : _value[_name],
      text: item.text != null ? item.text : _value[_name + '_convert'],
      onInputChange: item.onInputChange || this.__onItemInputChange,
      onInputEnter: item.onInputEnter || this.submit
    }));
  },
  __renderItems: function __renderItems() {
    var _data = this.props.data;

    if (zn.is(_data, 'function')) {
      _data = _data.call(null, this);
    }

    return /*#__PURE__*/React.createElement(FormGroup, {
      data: _data,
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
    var _this = this;

    this.setState({
      value: value,
      text: text
    }, function () {
      return _this.validate();
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
    this.state.value = event.value;

    var _return = this.props.onChange && this.props.onChange(event, input, this);

    if (_return === false) {
      return false;
    }

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

    var _input = this.props.input;

    if (_input && typeof _input == 'function' && !_input.prototype.isReactComponent) {
      _input = _input.call(null, this, _inputProps);
    }

    var _inputElement = znui.react.createReactElement(_input, _inputProps);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BamF4Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtLmpzIiwid2VicGFjazovLy8uL0Zvcm1CdXR0b25zLmpzIiwid2VicGFjazovLy8uL0Zvcm1Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9Gb3JtUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vRm9ybVRpdGxlLmpzIiwid2VicGFjazovLy8uL05hdGl2ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGb3JtSXRlbSIsIkZvcm1Hcm91cCIsIkZvcm1CdXR0b25zIiwicG9wdXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImFjdGlvbiIsIm1ldGhvZCIsImVuY1R5cGUiLCJidXR0b25zIiwidmFsdWUiLCJ0eXBlIiwiaWNvbiIsImdldEluaXRpYWxTdGF0ZSIsInN1Ym1pdHRpbmciLCJoaWRkZW5zIiwiZGF0YSIsInJlZnMiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsIiwicHJvcHMiLCJvbkNhbmNlbCIsInJlc2V0Iiwic2V0U3RhdGUiLCJfcmVmcyIsIl9yZWYiLCJrZXkiLCJfX29uUmVzZXQiLCJvblJlc2V0IiwiZ2V0VmFsdWUiLCJjYWxsYmFjayIsIl92YWx1ZSIsInZhbGlkYXRlIiwiem4iLCJleHRlbmQiLCJzdGF0ZSIsIm1lcmdlIiwiX3RlbXAiLCJleHRzIiwiX19pc0FwaVZhbHVlIiwiX19hcGlfXyIsInNldFZhbHVlIiwiY2FsbCIsImlzIiwiX3RleHQiLCJzdWJtaXQiLCJwcm9jZXNzIiwiZGVidWciLCJfcmV0dXJuIiwib25TdWJtaXRCZWZvcmUiLCJfc3VibWl0QXBpIiwidXJsIiwic3VibWl0QXBpIiwiX21ldGhvZCIsIl9rZXkiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImVycm9yIiwiY3JlYXRlIiwiYmVmb3JlIiwic2VuZGVyIiwiX19pc01vdW50ZWQiLCJvblN1Ym1pdGluZyIsImJpbmQiLCJhZnRlciIsIm9uU3VibWl0ZWQiLCJzdWNjZXNzIiwib25TdWJtaXRTdWNjZXNzIiwieGhyIiwib25TdWJtaXRFcnJvciIsImNvbnRleHQiLCJfX29uU3VibWl0Iiwib25TdWJtaXQiLCJfZGF0YSIsInJlcXVpcmVkIiwidmFsdWVLZXkiLCJfX3BhcnNlSXRlbVZhbHVlIiwiaW5kZXhPZiIsImV2YWwiLCJfX29uSXRlbUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJpbnB1dCIsImZvcm1pdGVtIiwidmFsaWRhdGVWYWx1ZSIsIm9uSXRlbUlucHV0Q2hhbmdlIiwiX19pdGVtUmVuZGVyIiwiaXRlbSIsImluZGV4IiwibmFtZSIsIl9uYW1lIiwicmVmIiwidGV4dCIsIm9uSW5wdXRDaGFuZ2UiLCJvbklucHV0RW50ZXIiLCJfX3JlbmRlckl0ZW1zIiwicmVzcG9uc2VIYW5kbGVyIiwiX19yZW5kZXJHcm91cHMiLCJncm91cHMiLCJtYXAiLCJncm91cCIsIl9fcmVuZGVyQnV0dG9ucyIsIl9fb25WYWx1ZUxvYWRpbmciLCJvblZhbHVlTG9hZGluZyIsIl9fb25WYWx1ZUxvYWRlZCIsIm9uVmFsdWVMb2FkZWQiLCJfX29uVmFsdWVMb2FkRXJyb3IiLCJvblZhbHVlTG9hZEVycm9yIiwibm90aWZpZXIiLCJtZXNzYWdlIiwiX19yZW5kZXIiLCJyZWFjdCIsInN0eWxlIiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwiX19sb2FkaW5nUmVuZGVyIiwicmVuZGVyIiwiQWpheEZvcm0iLCJOYXRpdmVGb3JtIiwiYnV0dG9uIiwiX19idXR0b25DbGljayIsIm9uQ2xpY2siLCJsb2FkZXIiLCJsb2FkaW5nIiwiaXRlbVJlbmRlciIsIl9fb25Mb2FkaW5nIiwiX19vbkZpbmlzaGVkIiwiX19vbkVycm9yIiwiZGlzYWJsZWQiLCJzdGF0dXMiLCJlcnJvck1lc3NhZ2UiLCJfdGltZW91dCIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsIl9jYWxsYmFjayIsInNldFRpbWVvdXQiLCJfX29uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIl9fb25JbnB1dEVudGVyIiwib25FbnRlciIsIl9fcmVuZGVySGVhZGVyIiwibGFiZWwiLCJfX3JlbmRlckJvZHkiLCJfaW5wdXRQcm9wcyIsImlucHV0Q2xhc3NOYW1lIiwiX2lucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsIl9pbnB1dEVsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJzdWZmaXgiLCJsYXlvdXQiLCJzaXplIiwiX19yZW5kZXJUaXRsZSIsIl90aXRsZSIsInRpdGxlUmVuZGVyIiwidGl0bGUiLCJSZWFjdERPTSIsImF1dG9Db21wbGV0ZSIsIm5vVmFsaWRhdGUiLCJ0YXJnZXQiLCJfX2luaXRWYWx1ZSIsIl9faW5pdEFwaVZhbHVlIiwiX19pbml0T2JqZWN0VmFsdWUiLCJfZXZlbnRzIiwiZXZlbnRzIiwiX2JlZm9yZSIsIl9hZnRlciIsIm9uVmFsdWVGaW5pc2hlZCIsImZpbmRET01Ob2RlIiwiYnRuIiwiX19vbkl0ZW1DaGFuZ2UiLCJvbkl0ZW1DaGFuZ2UiLCJfZ3JvdXBzIiwibGVuZ3RoIiwiX2hpZGRlbnMiLCJPYmplY3QiLCJrZXlzIiwiaGlkZGVuIiwiRm9ybSIsIkZvcm1UaXRsZSIsIkZvcm1QYW5lbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FB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LEVBQUVILG1CQUFPLENBQUMsdUNBQUQsQ0FIUDtBQUliRSxXQUFTLEVBQUVGLG1CQUFPLENBQUMsbUNBQUQsQ0FKTDtBQUtiQyxVQUFRLEVBQUVELG1CQUFPLENBQUMsaUNBQUQsQ0FMSjtBQU1idUwsV0FBUyxFQUFFdkwsbUJBQU8sQ0FBQyxtQ0FBRCxDQU5MO0FBT2J3TCxXQUFTLEVBQUV4TCxtQkFBTyxDQUFDLG1DQUFELENBUEw7QUFRYnlILFlBQVUsRUFBRXpILG1CQUFPLENBQUMscUNBQUQ7QUFSTixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLDZCQUE2QixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTVDLGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xuXG52YXIgQWxlcnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJBbGVydCcsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgb25DbGljazogbnVsbCxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6ICfnoa7orqQnXG4gICAgICB9XVxuICAgIH07XG4gIH0sXG4gIF9fb25DbGljazogZnVuY3Rpb24gX19vbkNsaWNrKGl0ZW0sIGluZGV4KSB7XG4gICAgaXRlbS5pbmRleCA9IGluZGV4O1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXG4gICAgX3Jlc3VsdCA9IGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cbiAgICBpZiAoX3Jlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHpuLmRlYnVnKCdhbGVydC5jbG9zZScpO1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1hbGVydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWlubmVyXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIHRoaXMucHJvcHMuY29udGVudCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1idG5zXCJcbiAgICB9LCB0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWJ0blwiLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fX29uQ2xpY2soaXRlbSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBpdGVtLnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSkpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQWxlcnQ6IEFsZXJ0LFxuICBhbGVydDogZnVuY3Rpb24gYWxlcnQoY29udGVudCwgdGl0bGUsIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBfYWxlcnQgPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCBfZXh0ZW5kcyh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgb25DbGljazogY2FsbGJhY2tcbiAgICB9LCBwcm9wcykpLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX2FsZXJ0O1xuICB9LFxuICBjb25maXJtOiBmdW5jdGlvbiBjb25maXJtKGNvbnRlbnQsIHRpdGxlLCBfY29uZmlybTIsIGNhbmNlbCwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyA9IHpuLmV4dGVuZCh7XG4gICAgICBjYW5jZWw6ICflj5bmtognLFxuICAgICAgY29uZmlybTogJ+ehruWumidcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHZhciBfY29uZmlybSA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiBfb3B0aW9ucy5jYW5jZWwsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBjYW5jZWwgJiYgY2FuY2VsKF9jb25maXJtKTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX2NvbmZpcm0uZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBfb3B0aW9ucy5jb25maXJtLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gX2NvbmZpcm0yICYmIF9jb25maXJtMihfY29uZmlybSk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9jb25maXJtLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiBfY29uZmlybTtcbiAgfSxcbiAgcHJvbXB0OiBmdW5jdGlvbiBwcm9tcHQoYXJndikge1xuICAgIHZhciBfYXJndiA9IHpuLmV4dGVuZCh7XG4gICAgICB0aXRsZTogYXJndi50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiYWxlcnQtaW5wdXRcIixcbiAgICAgICAgb25DaGFuZ2U6IGFyZ3Yub25DaGFuZ2UsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICB9KSxcbiAgICAgIGNvbmZpcm06IGFyZ3YuY29uZmlybSxcbiAgICAgIGNhbmNlbDogYXJndi5jYW5jZWxcbiAgICB9LCBhcmd2KTtcblxuICAgIHZhciBfcHJvbXB0ID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwge1xuICAgICAgY29udGVudDogX2FyZ3YuY29udGVudCxcbiAgICAgIHRpdGxlOiBfYXJndi50aXRsZSxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6IF9hcmd2LmNhbmNlbFRleHQgfHwgJ+WPlua2iCcsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQsIGFsZXJ0KSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBfYXJndi5jYW5jZWwgJiYgX2FyZ3YuY2FuY2VsKGV2ZW50LCBhbGVydCk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9wcm9tcHQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBfYXJndi5jb25maXJtVGV4dCB8fCAn56Gu5a6aJyxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCwgYWxlcnQpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IF9hcmd2LmNvbmZpcm0gJiYgX2FyZ3YuY29uZmlybShldmVudCwgYWxlcnQpO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfcHJvbXB0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiBfcHJvbXB0O1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIERpYWxvZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkRpYWxvZycsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250ZW50OiBudWxsXG4gICAgfTtcbiAgfSxcbiAgX19vbkNsb3NlOiBmdW5jdGlvbiBfX29uQ2xvc2UoZXZlbnQpIHtcbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25DbG9zZSAmJiB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsIHRoaXMpO1xuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWRpYWxvZycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgXCJkYXRhLWZvY3VzXCI6IHRoaXMucHJvcHMuZm9jdXNcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLWhlYWRlclwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLXRpdGxlXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlKSwgdGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX19vbkNsb3NlLFxuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1jbG9zZVwiXG4gICAgfSwgXCJ4XCIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1ib2R5XCJcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRGlhbG9nOiBEaWFsb2csXG4gIGRpYWxvZzogZnVuY3Rpb24gZGlhbG9nKGFyZ3YsIGlmUHVzaCkge1xuICAgIHZhciBfZGlhbG9nID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIGFyZ3YpLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBpZlB1c2gpO1xuXG4gICAgcmV0dXJuIF9kaWFsb2c7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIHBvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKS5wb3BvdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRHJvcGRvd246IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1pSRHJvcGRvd24nLFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBldmVudFR5cGU6ICdjbGljaydcbiAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgfSxcbiAgICBnZXRQYXJlbnQ6IGZ1bmN0aW9uIGdldFBhcmVudCh0YXJnZXQpIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd6ci1wb3B1cC1kcm9wZG93bicpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX19ldmVudEhhbmRsZXI6IGZ1bmN0aW9uIF9fZXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGFyZ2V0ID0gdGhpcy5nZXRQYXJlbnQoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICBfcG9wb3ZlciA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5wb3BvdmVyKTtcblxuICAgICAgaWYgKF90YXJnZXQgJiYgX3BvcG92ZXIgJiYgX3BvcG92ZXIucmVuZGVyKSB7XG4gICAgICAgIHZhciBfcmVuZGVyID0gX3BvcG92ZXIucmVuZGVyO1xuXG4gICAgICAgIGlmICh6bi5pcyhfcmVuZGVyLCAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIGlmICghX3JlbmRlci5wcm90b3R5cGUgfHwgIV9yZW5kZXIucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICAgICAgX3JlbmRlciA9IF9yZW5kZXIoZXZlbnQsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcmVuZGVyKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgX3BvcG92ZXIucmVuZGVyID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgX3BvcG92ZXIucmVuZGVyO1xuICAgICAgICAgIHBvcG92ZXIucmVuZGVyKF9yZW5kZXIsIHpuLmV4dGVuZCh7XG4gICAgICAgICAgICByZXNldDogdHJ1ZSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldFxuICAgICAgICAgIH0sIF9wb3BvdmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWRyb3Bkb3duXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xuXG52YXIgTG9hZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTG9hZGVyJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICB0aXRsZTogJ0xvYWRpbmcgLi4uICdcbiAgICB9O1xuICB9LFxuICBfX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIF9fcmVuZGVyQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jb250ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50aXRsZSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwibG9hZGVyXCIsXG4gICAgICAgIFwiZGF0YS1sb2FkZXJcIjogXCJzcGlubmVyXCJcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwidGl0bGVcIlxuICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSkpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWxvYWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpXG4gICAgfSwgdGhpcy5fX3JlbmRlckNvbnRlbnQoKSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIExvYWRlcjogTG9hZGVyLFxuICBsb2FkZXI6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGFyZ3YpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRlciwgYXJndiksIHtcbiAgICAgICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheScsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9sb2FkZXIgPSBfcmVmO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IGZ1bmN0aW9uIGxvYWRpbmcodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHtcbiAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIE1vZGFsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTW9kYWwnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveWVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5kZXN0cm95KGNhbGxiYWNrKTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCB8fCB0aGlzLnN0YXRlLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlICYmIHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKF9kb20pO1xuXG4gICAgaWYgKF9yZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKF9kb20gJiYgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIHRoaXMuc3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59KTtcbjtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBNb2RhbDogTW9kYWwsXG4gIG1vZGFsOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbW9kYWxzID0gW107XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoY29udGVudCwgb3B0aW9ucywgaWZQdXNoKSB7XG4gICAgICAgIHZhciBfbW9kYWwgPSBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCBvcHRpb25zLCBjb250ZW50KSwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IHpudWkuY2xhc3NuYW1lKCd6ci1wb3B1cC1tb2RhbCcsIG9wdGlvbnNbXCJjbGFzc1wiXSksXG4gICAgICAgICAgc3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcbiAgICAgICAgfSwgdGhpcy5fZG9tKSk7XG5cbiAgICAgICAgem4uZGVidWcoJ01vZGFsIGNyZWF0ZWQoJyArICh0aGlzLl9tb2RhbHMubGVuZ3RoICsgMSkgKyAnKTogJywgX21vZGFsKTtcblxuICAgICAgICBpZiAoaWZQdXNoICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuX21vZGFscy5wdXNoKF9tb2RhbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX21vZGFsO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgem4uZGVidWcoJ01vZGFsIGNsb3NlKCcgKyB0aGlzLl9tb2RhbHMubGVuZ3RoICsgJyk6ICcpO1xuXG4gICAgICAgIHZhciBfbW9kYWwgPSB0aGlzLl9tb2RhbHMucG9wKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fbW9kYWxzKTtcblxuICAgICAgICBpZiAoX21vZGFsKSB7XG4gICAgICAgICAgaWYgKF9tb2RhbC5zdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlKGRlbGF5LCBjYWxsYmFjayk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21vZGFsLmRlc3Ryb3koY2FsbGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGNsb3NlQWxsOiBmdW5jdGlvbiBjbG9zZUFsbChkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5fbW9kYWxzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgc2l6ZTogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVFlQRV9JQ09OUyA9IHtcbiAgaGVhcnQ6ICdNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXonLFxuICBzZWNvbmRhcnk6ICdNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NGg5NnY4NGMwIDkuOCAxMS4yIDE1LjUgMTkuMSA5LjdMMzA0IDQxNmgxNDRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6JyxcbiAgc3VjY2VzczogJ00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLFxuICB3YXJuaW5nOiAnTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicsXG4gIGVycm9yOiAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eicsXG4gIGluZm86ICdNMjAgNDI0LjIyOWgyMFYyNzkuNzcxSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMFYyMTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoMTEyYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxMi4yMjloMjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBWNDkyYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHYtNDcuNzcxYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwek05NiAwQzU2LjIzNSAwIDI0IDMyLjIzNSAyNCA3MnMzMi4yMzUgNzIgNzIgNzIgNzItMzIuMjM1IDcyLTcyUzEzNS43NjQgMCA5NiAweidcbn07XG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJOb3RpZmljYXRpb24nLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTUwMCk7XG4gIH0sXG4gIG91dDogZnVuY3Rpb24gb3V0KCkge1xuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBfZG9tLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbi1vdXQnKTtcblxuICAgIF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblxuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbm90aWZpZXIgbm90aWZpY2F0aW9uLWluJywgdGhpcy5wcm9wcy50eXBlKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJpY29uXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZDogVFlQRV9JQ09OU1t0aGlzLnByb3BzLnR5cGUgfHwgJ2luZm8nXVxuICAgIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCJcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNsb3NlIGZhIGZhLXRpbWVzXCIsXG4gICAgICBvbkNsaWNrOiB0aGlzLm91dFxuICAgIH0pKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTm90aWZpZXI6IE5vdGlmaWVyLFxuICBub3RpZmllcjogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6ICd6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXInXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4odHlwZSwgY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmllciwge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgICAgfSksIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgdGhpcy5fZG9tKSk7XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uIHdhcm5pbmcoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignZXJyb3InLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFBvcG92ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJQb3BvdmVyJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpZGRlbkhlaWdodDogNSxcbiAgICAgIGNsb3NlYWJsZTogZmFsc2UsXG4gICAgICBwb3BvdmVyV2lkdGg6IG51bGwsXG4gICAgICBwb3BvdmVySGVpZ2h0OiBudWxsXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycm93Q2xhc3NOYW1lOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmV2ZW50KSB7XG4gICAgICB0aGlzLl9ldmVudFR5cGUgPSB0aGlzLnByb3BzLmV2ZW50LnR5cGUgfHwgdGhpcy5wcm9wcy5ldmVudDtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgdGhpcy5fX29uV2luZG93Q2xpY2ssIGZhbHNlKTtcblxuICAgICAgdGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblxuICAgICAgICBpZiAoX3Jlc3VsdCA9PT0gdHJ1ZSkgey8vZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50KHRoaXMpO1xuICB9LFxuICBfX2lzTWF0Y2hQYXJlbnQ6IGZ1bmN0aW9uIF9faXNNYXRjaFBhcmVudCh0YXJnZXQsIHBhcmVudCkge1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldCAhPT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9faXNNYXRjaFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSwgcGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIF9fb25XaW5kb3dDbGljazogZnVuY3Rpb24gX19vbldpbmRvd0NsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9faXNNYXRjaFBhcmVudChldmVudC50YXJnZXQsIHRoaXMuX2RvbSkpIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblxuICAgICAgaWYgKF9yZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBvdXRzaWRlIGNvbnRhaW5lciBldmVudFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50KGV2ZW50LCB0aGlzKTtcblxuICAgICAgaWYgKF9yZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBpbnNpZGUgY29udGFpbmVyIGV2ZW50XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKHRhZykge1xuICAgIC8vem4uaW5mbygnUG9wb3Zlci5jbG9zZTonLCB0YWcpO1xuICAgIGlmICh0aGlzLl9kb20pIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgdGhpcy5fX29uV2luZG93Q2xpY2ssIGZhbHNlKTtcblxuICAgICAgaWYgKHRoaXMuX2RvbS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuX2RvbS5wYXJlbnROb2RlLnN0eWxlID0gJyc7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kb20gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRUeXBlID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGZpeFBvc2l0aW9uOiBmdW5jdGlvbiBmaXhQb3NpdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgX3BvcG92ZXIgPSB0aGlzLl9kb207XG5cbiAgICB2YXIgX3QgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcbiAgICAgICAgX3BvcG92ZXJXaWR0aCA9IHRoaXMucHJvcHMucG9wb3ZlcldpZHRoIHx8IF90LndpZHRoLFxuICAgICAgICBfcG9wb3ZlckhlaWdodCA9IHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCB8fCB6bi5kb20uZ2V0UG9zaXRpb24oX3BvcG92ZXIpLmhlaWdodCxcbiAgICAgICAgX2xlZnQgPSBudWxsLFxuICAgICAgICBfdG9wID0gbnVsbCxcbiAgICAgICAgX2Fycm93Q2xhc3NOYW1lcyA9IFtdO1xuXG4gICAgaWYgKF9wb3BvdmVyV2lkdGggPT0gJzEwMCUnKSB7XG4gICAgICBfcG9wb3ZlcldpZHRoID0gX3Qud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKF9wb3BvdmVySGVpZ2h0IDwgdGhpcy5wcm9wcy5oaWRkZW5IZWlnaHQpIHtcbiAgICAgIHRoaXMucHJvcHMub25IaWRkZW4gJiYgdGhpcy5wcm9wcy5vbkhpZGRlbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfdC54ICsgX3BvcG92ZXJXaWR0aCA+IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCkge1xuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtcmlnaHQnKTtcblxuICAgICAgX2xlZnQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoIC0gX3QueCAtIF90LndpZHRoO1xuICAgICAgX3BvcG92ZXIuc3R5bGUucmlnaHQgPSBfbGVmdCArICdweCc7XG4gICAgICBfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9sZWZ0ID0gX3QueDtcblxuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1wbGFjZW1lbnQtbGVmdCcpO1xuXG4gICAgICBfcG9wb3Zlci5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuICAgIH1cblxuICAgIGlmIChfdC55ICsgX3BvcG92ZXJIZWlnaHQgPiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KSB7XG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nKTtcblxuICAgICAgX3RvcCA9IF90LmhlaWdodCArIDEwO1xuICAgICAgX3BvcG92ZXIuc3R5bGUuYm90dG9tID0gX3RvcCArICdweCc7XG4gICAgICBfcG9wb3Zlci5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdG9wID0gX3QueSArIF90LmhlaWdodCArIDEwO1xuXG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnKTtcblxuICAgICAgX3BvcG92ZXIuc3R5bGUudG9wID0gX3RvcCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucG9wb3ZlcldpZHRoKSB7XG4gICAgICBfcG9wb3Zlci5zdHlsZS53aWR0aCA9IF9wb3BvdmVyV2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQpIHtcbiAgICAgIGlmIChfcG9wb3Zlci5vZmZzZXRIZWlnaHQgIT0gX3BvcG92ZXJIZWlnaHQpIHtcbiAgICAgICAgX3BvcG92ZXIuc3R5bGUuaGVpZ2h0ID0gX3BvcG92ZXJIZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9wb3BvdmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3puLWFuaW1hdGUtc2NhbGUtdXAnKTtcblxuICAgIF9wb3BvdmVyLmNsYXNzTmFtZSA9IF9wb3BvdmVyLmNsYXNzTmFtZSArICcgJyArIF9hcnJvd0NsYXNzTmFtZXMuam9pbignICcpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9zdHlsZSA9IHt9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0KSB7XG4gICAgICBfc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1wb3BvdmVyIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlJywgdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSlcbiAgICB9LCB0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xvc2UoJ3NlbGYgY2xvc2UnKTtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICBjbGFzc05hbWU6IFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIixcbiAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICBkOiBcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIlxuICAgIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJwb3BvdmVyLWNvbnRlbnRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6ICh6bi5leHRlbmQoe30sIHRoaXMucHJvcHMuc3R5bGUpLCBfc3R5bGUpXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBvcG92ZXI6IFBvcG92ZXIsXG4gIHBvcG92ZXI6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLXBvcG92ZXItY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgnem4ucG9wb3ZlcjpyZW5kZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3BvdmVyID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3BvdmVyLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSkpLCB0aGlzLl9kb20pLCB0aGlzLl9wb3BvdmVyO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSh0YWcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BvcG92ZXIpIHtcbiAgICAgICAgICB0aGlzLl9wb3BvdmVyLmNsb3NlKHRhZyk7XG5cbiAgICAgICAgICB0aGlzLl9wb3BvdmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvYXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSVG9hc3QnLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTgwMCk7XG4gIH0sXG4gIG91dDogZnVuY3Rpb24gb3V0KCkge1xuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBfZG9tLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LW91dCcpO1xuXG4gICAgX2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXRvYXN0IHRvYXN0LWluJywgdGhpcy5wcm9wcy50eXBlKVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRvYXN0OiBUb2FzdCxcbiAgdG9hc3Q6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4odHlwZSwgY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvYXN0LCB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgICB9KSwgX2RvbSk7XG5cbiAgICAgICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKF9kb20pO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2RhbmdlcicsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBpbmZvOiBmdW5jdGlvbiBpbmZvKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9vbHRpcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlRvb2x0aXAnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyb3dDbGFzc05hbWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuICB9LFxuICBmaXhQb3NpdGlvbjogZnVuY3Rpb24gZml4UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZml4UG9zaXRpb24gdGFyZ2V0IGlzIG51bGwuJyk7XG4gICAgfVxuXG4gICAgdmFyIF9kb21XaWR0aCA9IHRoaXMuX2RvbS5vZmZzZXRXaWR0aCxcbiAgICAgICAgX2RvbUhlaWdodCA9IHRoaXMuX2RvbS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIF90YXJnZXQgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcbiAgICAgICAgX2xlZnQgPSBudWxsLFxuICAgICAgICBfdG9wID0gbnVsbCxcbiAgICAgICAgX2NsYXNzTmFtZSA9ICcnO1xuXG4gICAgaWYgKF90YXJnZXQueCArIF9kb21XaWR0aCA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LnggKyAoX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aCkgLyAyO1xuICAgIH1cblxuICAgIGlmIChfdGFyZ2V0LnkgKyBfZG9tSGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgLSBfZG9tSGVpZ2h0IC0gMTY7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdG9wID0gX3RhcmdldC55ICsgX3RhcmdldC5oZWlnaHQgKyAxNjtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLXRvcCc7XG4gICAgfVxuXG4gICAgaWYgKF9sZWZ0IDwgMCkge1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdCc7XG4gICAgICBfbGVmdCA9IF90YXJnZXQueCArIF90YXJnZXQud2lkdGggKyA0O1xuICAgICAgX3RvcCA9IF90YXJnZXQueSArIDQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9tLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuICAgIHRoaXMuX2RvbS5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuICAgIF9jbGFzc05hbWUgJiYgdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoX2NsYXNzTmFtZSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblxuICAgIGlmIChfcmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChfZG9tICYmIF9kb20ucGFyZW50Tm9kZSkge1xuICAgICAgX2RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cbiAgICBpZiAoem4uaXMoY2FsbGJhY2ssICdmdW5jdGlvbicpKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb29sdGlwOiBUb29sdGlwLFxuICB0b29sdGlwOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fX29uV2luZG93TW91c2VPdmVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fX29uV2luZG93UmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBfX29uV2luZG93UmVzaXplOiBmdW5jdGlvbiBfX29uV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZycpO1xuICAgICAgfSxcbiAgICAgIF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWU6IGZ1bmN0aW9uIF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9fb25XaW5kb3dNb3VzZU92ZXI6IGZ1bmN0aW9uIF9fb25XaW5kb3dNb3VzZU92ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBfdmFsdWUgPSB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUoX3RhcmdldCk7XG5cbiAgICAgICAgaWYgKF90YXJnZXQgJiYgX3ZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXAgJiYgdGhpcy5fdG9vbHRpcC5wcm9wcy50YXJnZXQgIT09IF90YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVuZGVyKF92YWx1ZSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGFyZ2V0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwKSB7XG4gICAgICAgICAgdGhpcy5fdG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b29sdGlwID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSkpLCB0aGlzLl9kb20pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCkge1xuICAgICAgICAgIGlmICh6bi5pcyhjYWxsYmFjaywgJ3N0cmluZycpICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgem4uZGVidWcoY2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKTtcblxuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAuZGVzdHJveShjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLl90b29sdGlwID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gem4uZGVlcEFzc2lnbnMoe30sIHJlcXVpcmUoJy4vQWxlcnQnKSwgcmVxdWlyZSgnLi9EaWFsb2cnKSwgcmVxdWlyZSgnLi9Ecm9wZG93bicpLCByZXF1aXJlKCcuL0xvYWRlcicpLCByZXF1aXJlKCcuL01vZGFsJyksIHJlcXVpcmUoJy4vTm90aWZpZXInKSwgcmVxdWlyZSgnLi9Qb3BvdmVyJyksIHJlcXVpcmUoJy4vVG9hc3QnKSwgcmVxdWlyZSgnLi9Ub29sdGlwJykpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiIWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpdFtuXT1lW25dfSh0aGlzLGZ1bmN0aW9uKG4pe3ZhciBvPXt9O2Z1bmN0aW9uIHIodCl7aWYob1t0XSlyZXR1cm4gb1t0XS5leHBvcnRzO3ZhciBlPW9bdF09e2k6dCxsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3RdLmNhbGwoZS5leHBvcnRzLGUsZS5leHBvcnRzLHIpLGUubD0hMCxlLmV4cG9ydHN9cmV0dXJuIHIubT1uLHIuYz1vLHIuZD1mdW5jdGlvbih0LGUsbil7ci5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlyLmQobixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxyLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIHIuZChlLFwiYVwiLGUpLGV9LHIubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sci5wPVwiXCIscihyLnM9NCl9KFtmdW5jdGlvbih0LGUpeyFmdW5jdGlvbigpe3QuZXhwb3J0cz10aGlzLlJlYWN0fSgpfSxmdW5jdGlvbih0LGUpeyFmdW5jdGlvbigpe3QuZXhwb3J0cz10aGlzLlJlYWN0RE9NfSgpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9em51aS5SZWFjdHx8bigwKSxpPXpudWkuUmVhY3RET018fG4oMSkscz1yLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTW9kYWxcIixnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm57ZGVzdHJveWVkOiExfX0sY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQmJnRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKX0sY2xvc2U6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZGVzdHJveSh0KX0sZGVzdHJveTpmdW5jdGlvbih0KXtpZighdGhpcy5fX2lzTW91bnRlZHx8dGhpcy5zdGF0ZS5kZXN0cm95ZWQpcmV0dXJuITE7dmFyIGU9aS5maW5kRE9NTm9kZSh0aGlzKTtpZighMT09PSh0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoZSkpKXJldHVybiExO2UmJmUucGFyZW50Tm9kZS5wYXJlbnROb2RlJiYoZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS5wYXJlbnROb2RlKSxpLnVubW91bnRDb21wb25lbnRBdE5vZGUoZS5wYXJlbnROb2RlKSksdCYmdCgpLHRoaXMuc3RhdGUuZGVzdHJveWVkPSEwLHRoaXMucHJvcHMub25EZXN0cm95JiZ0aGlzLnByb3BzLm9uRGVzdHJveSgpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5jcmVhdGVFbGVtZW50KHIuRnJhZ21lbnQsbnVsbCx0aGlzLnByb3BzLmNoaWxkcmVuKX19KTt0LmV4cG9ydHM9e01vZGFsOnMsbW9kYWw6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLW1vZGFsLWNvbnRhaW5lclwifSksdGhpcy5fbW9kYWxzPVtdfSxjcmVhdGU6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWkucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLGUsdCksem4uZG9tLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6em51aS5jbGFzc25hbWUoXCJ6ci1wb3B1cC1tb2RhbFwiLGUuY2xhc3MpLHN0eWxlOnpudWkuc3R5bGUoZS5zdHlsZSl9LHRoaXMuX2RvbSkpO3JldHVybiB6bi5kZWJ1ZyhcIk1vZGFsIGNyZWF0ZWQoXCIrKHRoaXMuX21vZGFscy5sZW5ndGgrMSkrXCIpOiBcIixvKSwhMSE9PW4mJnRoaXMuX21vZGFscy5wdXNoKG8pLG99LGNsb3NlOmZ1bmN0aW9uKHQsZSl7em4uZGVidWcoXCJNb2RhbCBjbG9zZShcIit0aGlzLl9tb2RhbHMubGVuZ3RoK1wiKTogXCIpO3ZhciBuPXRoaXMuX21vZGFscy5wb3AoKTtpZihuKXtpZihuLnN0YXRlLmRlc3Ryb3llZClyZXR1cm4gdGhpcy5jbG9zZSh0LGUpO3Q/c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBuLmRlc3Ryb3koZSl9LHQpOm4uZGVzdHJveShlKX1yZXR1cm4gdGhpc30sY2xvc2VBbGw6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGgmJnRoaXMuY2xvc2UodCx0aGlzLmNsb3NlQWxsKSx0aGlzfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGh9fX0pfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciByPXpudWkuUmVhY3R8fG4oMCksaT16bnVpLlJlYWN0RE9NfHxuKDEpLHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUlBvcG92ZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57aGlkZGVuSGVpZ2h0OjUsY2xvc2VhYmxlOiExLHBvcG92ZXJXaWR0aDpudWxsLHBvcG92ZXJIZWlnaHQ6bnVsbH19LGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe3JldHVybnthcnJvd0NsYXNzTmFtZTpcIlwifX0sY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209aS5maW5kRE9NTm9kZSh0aGlzKSx0aGlzLnByb3BzLmV2ZW50JiYodGhpcy5fZXZlbnRUeXBlPXRoaXMucHJvcHMuZXZlbnQudHlwZXx8dGhpcy5wcm9wcy5ldmVudCx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsdGhpcy5fX29uV2luZG93Q2xpY2ssITEpLHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSxmdW5jdGlvbih0KXt0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQmJnRoaXMucHJvcHMub25Db250YWluZXJFdmVudCh0LHRoaXMpfS5iaW5kKHRoaXMpLCEwKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCl9LmJpbmQodGhpcyksMCkpLHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQmJnRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQodGhpcyl9LF9faXNNYXRjaFBhcmVudDpmdW5jdGlvbih0LGUpe3JldHVybiF0fHxcIkJPRFlcIiE9dC50YWdOYW1lJiZcIkhUTUxcIiE9dC50YWdOYW1lJiYodD09PWV8fHRoaXMuX19pc01hdGNoUGFyZW50KHQucGFyZW50Tm9kZSxlKSl9LF9fb25XaW5kb3dDbGljazpmdW5jdGlvbih0KXt0aGlzLl9faXNNYXRjaFBhcmVudCh0LnRhcmdldCx0aGlzLl9kb20pPyEwPT09KHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50KHQsdGhpcykpJiZ0aGlzLmNsb3NlKFwiUG9wb3Zlcjogb24gd2luZG93IGluc2lkZSBjb250YWluZXIgZXZlbnRcIik6ITAhPT0odGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCh0LHRoaXMpKSYmdGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBvdXRzaWRlIGNvbnRhaW5lciBldmVudFwiKX0sY2xvc2U6ZnVuY3Rpb24oKXt0aGlzLl9kb20mJih3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsdGhpcy5fX29uV2luZG93Q2xpY2ssITEpLHRoaXMuX2RvbS5wYXJlbnROb2RlJiYodGhpcy5fZG9tLnBhcmVudE5vZGUuc3R5bGU9XCJcIixpLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tLnBhcmVudE5vZGUpKSx0aGlzLl9kb209bnVsbCx0aGlzLl9ldmVudFR5cGU9bnVsbCl9LGZpeFBvc2l0aW9uOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2RvbSxuPXpuLmRvbS5nZXRQb3NpdGlvbih0KSxvPXRoaXMucHJvcHMucG9wb3ZlcldpZHRofHxuLndpZHRoLHI9dGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0fHx6bi5kb20uZ2V0UG9zaXRpb24oZSkuaGVpZ2h0LGk9bnVsbCxzPW51bGwsYT1bXTtcIjEwMCVcIj09byYmKG89bi53aWR0aCkscjx0aGlzLnByb3BzLmhpZGRlbkhlaWdodD90aGlzLnByb3BzLm9uSGlkZGVuJiZ0aGlzLnByb3BzLm9uSGlkZGVuKCk6KG4ueCtvPndpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aD8oYS5wdXNoKFwienItYXJyb3ctcGxhY2VtZW50LXJpZ2h0XCIpLGk9ZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aC1uLngtbi53aWR0aCxlLnN0eWxlLnJpZ2h0PWkrXCJweFwiLGUucGFyZW50Tm9kZS5zdHlsZS5yaWdodD1cIjBweFwiKTooaT1uLngsYS5wdXNoKFwienItYXJyb3ctcGxhY2VtZW50LWxlZnRcIiksZS5zdHlsZS5sZWZ0PWkrXCJweFwiKSxuLnkrcj53aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0PyhhLnB1c2goXCJ6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tXCIpLHM9bi5oZWlnaHQrMTAsZS5zdHlsZS5ib3R0b209cytcInB4XCIsZS5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbT1cIjBweFwiKToocz1uLnkrbi5oZWlnaHQrMTAsYS5wdXNoKFwienItYXJyb3ctZGlyZWN0aW9uLXRvcFwiKSxlLnN0eWxlLnRvcD1zK1wicHhcIiksdGhpcy5wcm9wcy5wb3BvdmVyV2lkdGgmJihlLnN0eWxlLndpZHRoPW8rXCJweFwiKSx0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQmJmUub2Zmc2V0SGVpZ2h0IT1yJiYoZS5zdHlsZS5oZWlnaHQ9citcInB4XCIpLGUuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIixhLnB1c2goXCJ6bi1hbmltYXRlLXNjYWxlLXVwXCIpLGUuY2xhc3NOYW1lPWUuY2xhc3NOYW1lK1wiIFwiK2Euam9pbihcIiBcIikpfSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9e307cmV0dXJuIHRoaXMucHJvcHMuaGVpZ2h0P2UubWF4SGVpZ2h0PXRoaXMucHJvcHMuaGVpZ2h0K1wicHhcIjplLmhlaWdodD1cImF1dG9cIixyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtcG9wb3ZlciB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci13aGl0ZVwiLHRoaXMuc3RhdGUuYXJyb3dDbGFzc05hbWUpfSx0aGlzLnByb3BzLmNsb3NlYWJsZSYmci5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJwb3BvdmVyLWNsb3NlIHpyLWhvdmVyLXNlbGYtbG9hZGluZ1wiLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdC5jbG9zZShcInNlbGYgY2xvc2VcIil9fSxyLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLGZvY3VzYWJsZTpcImZhbHNlXCIsXCJkYXRhLXByZWZpeFwiOlwiZmFzXCIsY2xhc3NOYW1lOlwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIixyb2xlOlwiaW1nXCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHZpZXdCb3g6XCIwIDAgNTEyIDUxMlwifSxyLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2ZpbGw6XCJjdXJyZW50Q29sb3JcIixkOlwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwifSkpKSxyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOih6bi5leHRlbmQoe30sdGhpcy5wcm9wcy5zdHlsZSksZSl9LHRoaXMucHJvcHMuY29udGVudCkpfX0pO3QuZXhwb3J0cz17UG9wb3ZlcjpzLHBvcG92ZXI6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLXBvcG92ZXItY29udGFpbmVyXCJ9KX0scmVuZGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUmJmUucmVzZXQmJnRoaXMuY2xvc2UoXCJ6bi5wb3BvdmVyOnJlbmRlclwiKSx0aGlzLl9wb3BvdmVyPWkucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLG8oe30sZSx7Y29udGVudDp0fSkpLHRoaXMuX2RvbSksdGhpcy5fcG9wb3Zlcn0sY2xvc2U6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3BvcG92ZXImJih0aGlzLl9wb3BvdmVyLmNsb3NlKHQpLHRoaXMuX3BvcG92ZXI9bnVsbCksdGhpc319fSl9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPXpuLmRlZXBBc3NpZ25zKHt9LG4oNSksbig2KSxuKDcpLG4oOCksbigyKSxuKDkpLG4oMyksbigxMCksbigxMSkpfSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gcigpe3JldHVybihyPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGE9em51aS5SZWFjdHx8bigwKSxjPW4oMikubW9kYWwsbD1hLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSQWxlcnRcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57dGl0bGU6XCJcIixjb250ZW50Om51bGwsb25DbGljazpudWxsLGJ1dHRvbnM6W3t0ZXh0Olwi56Gu6K6kXCJ9XX19LF9fb25DbGljazpmdW5jdGlvbih0LGUpe3QuaW5kZXg9ZTt0aGlzLnByb3BzLm9uQ2xpY2smJnRoaXMucHJvcHMub25DbGljayh0LHRoaXMpOyExIT09KHQub25DbGljayYmdC5vbkNsaWNrKHQsdGhpcykpJiYoem4uZGVidWcoXCJhbGVydC5jbG9zZVwiKSxjLmNsb3NlKCkpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWFsZXJ0XCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJhbGVydC1pbm5lclwifSx0aGlzLnByb3BzLnRpdGxlJiZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtdGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSksdGhpcy5wcm9wcy5jb250ZW50JiZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtY29udGVudFwifSx0aGlzLnByb3BzLmNvbnRlbnQpKSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtYnRuc1wifSx0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2tleTplLGNsYXNzTmFtZTpcImFsZXJ0LWJ0blwiLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gbi5fX29uQ2xpY2sodCxlKX19LHQudGV4dCl9LmJpbmQodGhpcykpKSl9fSk7dC5leHBvcnRzPXtBbGVydDpsLGFsZXJ0OmZ1bmN0aW9uKHQsZSxuLG8pe3JldHVybiBjLmNyZWF0ZShhLmNyZWF0ZUVsZW1lbnQobCxyKHtjb250ZW50OnQsdGl0bGU6ZSxvbkNsaWNrOm59LG8pKSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwifSwhMSl9LGNvbmZpcm06ZnVuY3Rpb24odCxlLG4sbyxyKXt2YXIgaT16bi5leHRlbmQoe2NhbmNlbDpcIuWPlua2iFwiLGNvbmZpcm06XCLnoa7lrppcIn0scikscz1jLmNyZWF0ZShhLmNyZWF0ZUVsZW1lbnQobCx7Y29udGVudDp0LHRpdGxlOmUsYnV0dG9uczpbe3RleHQ6aS5jYW5jZWwsb25DbGljazpmdW5jdGlvbigpe3JldHVybiExIT09KG8mJm8ocykpJiZzLmRlc3Ryb3koKSwhMX19LHt0ZXh0OmkuY29uZmlybSxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuITEhPT0obiYmbihzKSkmJnMuZGVzdHJveSgpLCExfX1dfSkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0sITEpO3JldHVybiBzfSxwcm9tcHQ6ZnVuY3Rpb24odCl7dmFyIG49em4uZXh0ZW5kKHt0aXRsZTp0LnRpdGxlLGNvbnRlbnQ6YS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIix7Y2xhc3NOYW1lOlwiYWxlcnQtaW5wdXRcIixvbkNoYW5nZTp0Lm9uQ2hhbmdlLHR5cGU6XCJ0ZXh0XCJ9KSxjb25maXJtOnQuY29uZmlybSxjYW5jZWw6dC5jYW5jZWx9LHQpLG89Yy5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGwse2NvbnRlbnQ6bi5jb250ZW50LHRpdGxlOm4udGl0bGUsYnV0dG9uczpbe3RleHQ6bi5jYW5jZWxUZXh0fHxcIuWPlua2iFwiLG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXtyZXR1cm4hMSE9PShuLmNhbmNlbCYmbi5jYW5jZWwodCxlKSkmJm8uZGVzdHJveSgpLCExfX0se3RleHQ6bi5jb25maXJtVGV4dHx8XCLnoa7lrppcIixvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITEhPT0obi5jb25maXJtJiZuLmNvbmZpcm0odCxlKSkmJm8uZGVzdHJveSgpLCExfX1dfSkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0sITEpO3JldHVybiBvfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz16bnVpLlJlYWN0fHxuKDApLHI9bigyKS5tb2RhbCxpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJEaWFsb2dcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57dGl0bGU6XCJcIixjb250ZW50Om51bGx9fSxfX29uQ2xvc2U6ZnVuY3Rpb24odCl7ITEhPT0odGhpcy5wcm9wcy5vbkNsb3NlJiZ0aGlzLnByb3BzLm9uQ2xvc2UodCx0aGlzKSkmJnIuY2xvc2UoKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kaWFsb2dcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZSxcImRhdGEtZm9jdXNcIjp0aGlzLnByb3BzLmZvY3VzfSxvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZGlhbG9nLWhlYWRlclwifSx0aGlzLnByb3BzLnRpdGxlJiZvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZGlhbG9nLXRpdGxlXCJ9LHRoaXMucHJvcHMudGl0bGUpLHRoaXMucHJvcHMuY2xvc2VhYmxlJiZvLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse29uQ2xpY2s6dGhpcy5fX29uQ2xvc2UsY2xhc3NOYW1lOlwiZGlhbG9nLWNsb3NlXCJ9LFwieFwiKSksby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImRpYWxvZy1ib2R5XCJ9LHRoaXMucHJvcHMuY29udGVudCkpfX0pO3QuZXhwb3J0cz17RGlhbG9nOmksZGlhbG9nOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHIuY3JlYXRlKG8uY3JlYXRlRWxlbWVudChpLHQpLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LGUpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz16bnVpLlJlYWN0fHxuKDApLHI9em51aS5SZWFjdERPTXx8bigxKSxpPW4oMykucG9wb3Zlcjt0LmV4cG9ydHM9e0Ryb3Bkb3duOm8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJEcm9wZG93blwiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybntkaXNhYmxlZDohMSxldmVudFR5cGU6XCJjbGlja1wifX0sY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtyLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsdGhpcy5fX2V2ZW50SGFuZGxlciwhMSl9LGNvbXBvbmVudFdpbGxVbm1vdW50OmZ1bmN0aW9uKCl7ci5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLHRoaXMuX19ldmVudEhhbmRsZXIsITEpfSxnZXRQYXJlbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwienItcG9wdXAtZHJvcGRvd25cIik/dDp0aGlzLmdldFBhcmVudCh0LnBhcmVudE5vZGUpfSxfX2V2ZW50SGFuZGxlcjpmdW5jdGlvbih0KXtpZighdGhpcy5wcm9wcy5kaXNhYmxlZCl7dmFyIGU9dGhpcy5nZXRQYXJlbnQodC50YXJnZXQpLG49em4uZXh0ZW5kKHt9LHRoaXMucHJvcHMucG9wb3Zlcik7aWYoZSYmbiYmbi5yZW5kZXIpe3ZhciBvPW4ucmVuZGVyO3puLmlzKG8sXCJmdW5jdGlvblwiKSYmKG8ucHJvdG90eXBlJiZvLnByb3RvdHlwZS5yZW5kZXJ8fChvPW8odCx0aGlzKSkpLG8mJih0LnN0b3BQcm9wYWdhdGlvbigpLG4ucmVuZGVyPW51bGwsZGVsZXRlIG4ucmVuZGVyLGkucmVuZGVyKG8sem4uZXh0ZW5kKHtyZXNldDohMCxldmVudDp0LHRhcmdldDplfSxuKSkpfX19LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZX0sdGhpcy5wcm9wcy5jaGlsZHJlbil9fSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPW4oMikubW9kYWwsaT1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTG9hZGVyXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRlbnQ6bnVsbCx0aXRsZTpcIkxvYWRpbmcgLi4uIFwifX0sX19yZW5kZXJDb250ZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMuY29udGVudD90aGlzLnByb3BzLmNvbnRlbnQ6dGhpcy5wcm9wcy50aXRsZT9vLmNyZWF0ZUVsZW1lbnQoby5GcmFnbWVudCxudWxsLG8uY3JlYXRlRWxlbWVudChcImlcIix7Y2xhc3NOYW1lOlwibG9hZGVyXCIsXCJkYXRhLWxvYWRlclwiOlwic3Bpbm5lclwifSksby5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJ0aXRsZVwifSx0aGlzLnByb3BzLnRpdGxlKSk6dm9pZCAwfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWxvYWRlclwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfSx0aGlzLl9fcmVuZGVyQ29udGVudCgpKX19KTt0LmV4cG9ydHM9e0xvYWRlcjppLGxvYWRlcjp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2NyZWF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybiB0aGlzLl9sb2FkZXImJnRoaXMuX2xvYWRlci5kZXN0cm95KCksci5jcmVhdGUoby5jcmVhdGVFbGVtZW50KGksdCkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIixyZWY6ZnVuY3Rpb24odCl7cmV0dXJuIGUuX2xvYWRlcj10fX0sITEpfSxsb2FkaW5nOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNyZWF0ZSh7dGl0bGU6dH0pfSxjbG9zZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9sb2FkZXImJnRoaXMuX2xvYWRlci5kZXN0cm95KCksdGhpc319fSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPXpudWkuUmVhY3RET018fG4oMSksaT17aGVhcnQ6XCJNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXpcIixzZWNvbmRhcnk6XCJNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NGg5NnY4NGMwIDkuOCAxMS4yIDE1LjUgMTkuMSA5LjdMMzA0IDQxNmgxNDRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6XCIsc3VjY2VzczpcIk0xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXpcIix3YXJuaW5nOlwiTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0elwiLGVycm9yOlwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiLGluZm86XCJNMjAgNDI0LjIyOWgyMFYyNzkuNzcxSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMFYyMTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoMTEyYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxMi4yMjloMjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBWNDkyYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHYtNDcuNzcxYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwek05NiAwQzU2LjIzNSAwIDI0IDMyLjIzNSAyNCA3MnMzMi4yMzUgNzIgNzIgNzIgNzItMzIuMjM1IDcyLTcyUzEzNS43NjQgMCA5NiAwelwifSxzPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJOb3RpZmljYXRpb25cIixjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3dpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LHRoaXMucHJvcHMuZGVsYXl8fDE1MDApfSxvdXQ6ZnVuY3Rpb24oKXt2YXIgdD1yLmZpbmRET01Ob2RlKHRoaXMpO3QuY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvbi1vdXRcIiksdC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsZnVuY3Rpb24oKXt0LnBhcmVudE5vZGUucGFyZW50Tm9kZSYmKHQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQucGFyZW50Tm9kZSksci51bm1vdW50Q29tcG9uZW50QXROb2RlKHQucGFyZW50Tm9kZSkpfSwhMSl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtbm90aWZpZXIgbm90aWZpY2F0aW9uLWluXCIsdGhpcy5wcm9wcy50eXBlKX0sby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImljb25cIn0sby5jcmVhdGVFbGVtZW50KFwic3ZnXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIixmb2N1c2FibGU6XCJmYWxzZVwiLFwiZGF0YS1wcmVmaXhcIjpcImZhc1wiLGNsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGUscm9sZTpcImltZ1wiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDUxMiA1MTJcIn0sby5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtmaWxsOlwiY3VycmVudENvbG9yXCIsZDppW3RoaXMucHJvcHMudHlwZXx8XCJpbmZvXCJdfSkpKSxvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiY29udGVudFwifSx0aGlzLnByb3BzLmNvbnRlbnQpLG8uY3JlYXRlRWxlbWVudChcImlcIix7Y2xhc3NOYW1lOlwiY2xvc2UgZmEgZmEtdGltZXNcIixvbkNsaWNrOnRoaXMub3V0fSkpfX0pO3QuZXhwb3J0cz17Tm90aWZpZXI6cyxub3RpZmllcjp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtbm90aWZpZXItY29udGFpbmVyXCJ9KX0sb3BlbjpmdW5jdGlvbih0LGUsbil7ci5yZW5kZXIoby5jcmVhdGVFbGVtZW50KHMse3R5cGU6dCxjb250ZW50OmUsZGVsYXk6bn0pLHpuLmRvbS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse30sdGhpcy5fZG9tKSl9LHN1Y2Nlc3M6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwic3VjY2Vzc1wiLHQsZSl9LHdhcm5pbmc6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwid2FybmluZ1wiLHQsZSl9LGVycm9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcImVycm9yXCIsdCxlKX0saW5mbzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJpbmZvXCIsdCxlKX19fSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9em51aS5SZWFjdHx8bigwKSxpPXpudWkuUmVhY3RET018fG4oMSkscz1yLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSVG9hc3RcIixjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3dpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LHRoaXMucHJvcHMuZGVsYXl8fDE4MDApfSxvdXQ6ZnVuY3Rpb24oKXt2YXIgdD1pLmZpbmRET01Ob2RlKHRoaXMpO3QuY2xhc3NMaXN0LmFkZChcInRvYXN0LW91dFwiKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixmdW5jdGlvbigpe3QucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQucGFyZW50Tm9kZSksaS51bm1vdW50Q29tcG9uZW50QXROb2RlKHQucGFyZW50Tm9kZS5wYXJlbnROb2RlKX0sITEpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvYXN0IHRvYXN0LWluXCIsdGhpcy5wcm9wcy50eXBlKX0sdGhpcy5wcm9wcy5jb250ZW50KX19KTt0LmV4cG9ydHM9e1RvYXN0OnMsdG9hc3Q6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwifSl9LG9wZW46ZnVuY3Rpb24odCxlLG4pe3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5yZW5kZXIoci5jcmVhdGVFbGVtZW50KHMse3R5cGU6dCxjb250ZW50OmUsZGVsYXk6bn0pLG8pLHRoaXMuX2RvbS5hcHBlbmRDaGlsZChvKX0sc3VjY2VzczpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJzdWNjZXNzXCIsdCxlKX0sd2FybmluZzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJ3YXJuaW5nXCIsdCxlKX0sZXJyb3I6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiZGFuZ2VyXCIsdCxlKX0saW5mbzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJpbmZvXCIsdCxlKX19fSl9fSxmdW5jdGlvbih0LGUscyl7KGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4oKXtyZXR1cm4obj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBvPXpudWkuUmVhY3R8fHMoMCkscj16bnVpLlJlYWN0RE9NfHxzKDEpLGk9by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUlRvb2x0aXBcIixnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm57YXJyb3dDbGFzc05hbWU6XCJcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXIuZmluZERPTU5vZGUodGhpcyksdGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCl9LGZpeFBvc2l0aW9uOmZ1bmN0aW9uKHQpe2lmKCF0KXRocm93IG5ldyBFcnJvcihcImZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLlwiKTt2YXIgZT10aGlzLl9kb20ub2Zmc2V0V2lkdGgsbj10aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LG89em4uZG9tLmdldFBvc2l0aW9uKHQpLHI9bnVsbCxpPW51bGwscz1cIlwiO3I9by54K2U+ZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aD9vLndpZHRoLWU6by54KyhvLndpZHRoLWUpLzIscz1vLnkrbj5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodD8oaT1vLnktbi0xNixcInpyLWFycm93LWRpcmVjdGlvbi1ib3R0b21cIik6KGk9by55K28uaGVpZ2h0KzE2LFwienItYXJyb3ctZGlyZWN0aW9uLXRvcFwiKSxyPDAmJihzPVwienItYXJyb3ctZGlyZWN0aW9uLWxlZnRcIixyPW8ueCtvLndpZHRoKzQsaT1vLnkrNCksdGhpcy5fZG9tLnN0eWxlLnRvcD1pK1wicHhcIix0aGlzLl9kb20uc3R5bGUubGVmdD1yK1wicHhcIixzJiZ0aGlzLl9kb20uY2xhc3NMaXN0LmFkZChzKX0sZGVzdHJveTpmdW5jdGlvbih0KXtpZighdGhpcy5fX2lzTW91bnRlZClyZXR1cm4hMTt2YXIgZT1yLmZpbmRET01Ob2RlKHRoaXMpO2lmKCExPT09KHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlJiZ0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShlKSkpcmV0dXJuITE7ZSYmZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksdGhpcy5wcm9wcy5vbkRlc3Ryb3kmJnRoaXMucHJvcHMub25EZXN0cm95KCksem4uaXModCxcImZ1bmN0aW9uXCIpJiZ0KCl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LHRoaXMucHJvcHMuY29udGVudCl9fSk7dC5leHBvcnRzPXtUb29sdGlwOmksdG9vbHRpcDp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtdG9vbHRpcC1jb250YWluZXJcIn0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5fX29uV2luZG93TW91c2VPdmVyLmJpbmQodGhpcyksITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fX29uV2luZG93UmVzaXplLmJpbmQodGhpcyksITEpfSxfX29uV2luZG93UmVzaXplOmZ1bmN0aW9uKCl7dGhpcy5jbG9zZShcInpudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93LnJlc2l6aW5nXCIpfSxfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlOmZ1bmN0aW9uKHQpe2lmKHQpcmV0dXJuXCJCT0RZXCIhPXQudGFnTmFtZSYmXCJIVE1MXCIhPXQudGFnTmFtZSYmKHQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShcImRhdGEtenItcG9wdXAtdG9vbHRpcFwiKT90LmdldEF0dHJpYnV0ZShcImRhdGEtenItcG9wdXAtdG9vbHRpcFwiKTp0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodC5wYXJlbnROb2RlKSl9LF9fb25XaW5kb3dNb3VzZU92ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj10aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUoZSk7ZSYmbj8odGhpcy5fdG9vbHRpcCYmdGhpcy5fdG9vbHRpcC5wcm9wcy50YXJnZXQhPT1lJiZ0aGlzLmNsb3NlKFwiem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyXCIpLHRoaXMucmVuZGVyKG4se3RhcmdldDplfSkpOnRoaXMuY2xvc2UoXCJ6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXJcIil9LHJlbmRlcjpmdW5jdGlvbih0LGUpe3RoaXMuX3Rvb2x0aXAmJnRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpLHRoaXMuX3Rvb2x0aXA9ci5yZW5kZXIoby5jcmVhdGVFbGVtZW50KGksbih7fSxlLHtjb250ZW50OnR9KSksdGhpcy5fZG9tKX0sY2xvc2U6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3Rvb2x0aXAmJih6bi5pcyh0LFwic3RyaW5nXCIpJiZlJiZlLmVudixyLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKSx0aGlzLl90b29sdGlwLmRlc3Ryb3kodCksdGhpcy5fdG9vbHRpcD1udWxsKSx0aGlzfX19KX19KS5jYWxsKHRoaXMscygxMikpfSxmdW5jdGlvbih0LGUpe3ZhciBuLG8scj10LmV4cG9ydHM9e307ZnVuY3Rpb24gaSgpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcygpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBhKGUpe2lmKG49PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KGUsMCk7aWYoKG49PT1pfHwhbikmJnNldFRpbWVvdXQpcmV0dXJuIG49c2V0VGltZW91dCxzZXRUaW1lb3V0KGUsMCk7dHJ5e3JldHVybiBuKGUsMCl9Y2F0Y2godCl7dHJ5e3JldHVybiBuLmNhbGwobnVsbCxlLDApfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlLDApfX19IWZ1bmN0aW9uKCl7dHJ5e249XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Oml9Y2F0Y2godCl7bj1pfXRyeXtvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6c31jYXRjaCh0KXtvPXN9fSgpO3ZhciBjLGw9W10scD0hMSx1PS0xO2Z1bmN0aW9uIGQoKXtwJiZjJiYocD0hMSxjLmxlbmd0aD9sPWMuY29uY2F0KGwpOnU9LTEsbC5sZW5ndGgmJmgoKSl9ZnVuY3Rpb24gaCgpe2lmKCFwKXt2YXIgdD1hKGQpO3A9ITA7Zm9yKHZhciBlPWwubGVuZ3RoO2U7KXtmb3IoYz1sLGw9W107Kyt1PGU7KWMmJmNbdV0ucnVuKCk7dT0tMSxlPWwubGVuZ3RofWM9bnVsbCxwPSExLGZ1bmN0aW9uKGUpe2lmKG89PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZigobz09PXN8fCFvKSYmY2xlYXJUaW1lb3V0KXJldHVybiBvPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQoZSk7dHJ5e28oZSl9Y2F0Y2godCl7dHJ5e3JldHVybiBvLmNhbGwobnVsbCxlKX1jYXRjaCh0KXtyZXR1cm4gby5jYWxsKHRoaXMsZSl9fX0odCl9fWZ1bmN0aW9uIG0odCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBmKCl7fXIubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoMTxhcmd1bWVudHMubGVuZ3RoKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTtsLnB1c2gobmV3IG0odCxlKSksMSE9PWwubGVuZ3RofHxwfHxhKGgpfSxtLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxyLnRpdGxlPVwiYnJvd3NlclwiLHIuYnJvd3Nlcj0hMCxyLmVudj17fSxyLmFyZ3Y9W10sci52ZXJzaW9uPVwiXCIsci52ZXJzaW9ucz17fSxyLm9uPWYsci5hZGRMaXN0ZW5lcj1mLHIub25jZT1mLHIub2ZmPWYsci5yZW1vdmVMaXN0ZW5lcj1mLHIucmVtb3ZlQWxsTGlzdGVuZXJzPWYsci5lbWl0PWYsci5wcmVwZW5kTGlzdGVuZXI9ZixyLnByZXBlbmRPbmNlTGlzdGVuZXI9ZixyLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5bXX0sci5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxyLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxyLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0sci51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX1dKSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJyZXF1aXJlKCd6bnVpLXJlYWN0Jyk7XG5pZihwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXF1aXJlKCcuL19fL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX18vYnVpbGQvaW5kZXguanMnKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcycpO1xuICAgIH1cbn1lbHNlIHtcbiAgICByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMnKTtcbn0iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgRm9ybUdyb3VwID0gcmVxdWlyZSgnLi9Gb3JtR3JvdXAnKTtcbnZhciBGb3JtQnV0dG9ucyA9IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFqYXhGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0bWV0aG9kOiBcInBvc3RcIixcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAn5Y+W5raIJywgdHlwZTogJ2NhbmNlbCcsIGljb246ICdmYVRpbWVzJyB9LFxuXHRcdFx0XHR7IHZhbHVlOiAn5o+Q5LqkJywgdHlwZTogJ3N1Ym1pdCcsIGljb246ICdmYUhhbmRQb2ludFVwJyB9XG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdGhpZGRlbnM6IHsgfSxcblx0XHRcdGRhdGE6IHsgfSxcblx0XHRcdHZhbHVlOiB7IH0sXG5cdFx0XHRyZWZzOiB7IH1cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXsgXG5cdFx0XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRjYW5jZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzKTtcblx0fSxcblx0cmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogZmFsc2UsXG5cdFx0XHRoaWRkZW5zOiB7fVxuXHRcdH0pO1xuXHRcdHZhciBfcmVmcyA9IHRoaXMucmVmcyxcblx0XHRcdF9yZWYgPSBudWxsO1xuXG5cdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0X3JlZiA9IF9yZWZzW2tleV07XG5cdFx0XHRpZighX3JlZikgeyBjb250aW51ZTsgfVxuXHRcdFx0X3JlZi5yZXNldCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRfX29uUmVzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25SZXNldCAmJiB0aGlzLnByb3BzLm9uUmVzZXQoKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMudmFsaWRhdGUoY2FsbGJhY2spO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdF92YWx1ZSA9IHpuLmV4dGVuZChfdmFsdWUsIHRoaXMuc3RhdGUuaGlkZGVucyk7XG5cdFx0X3ZhbHVlID0gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5oaWRkZW5zKTtcblx0XHRpZih0aGlzLnByb3BzLm1lcmdlKXtcblx0XHRcdHZhciBfdGVtcCA9IHt9O1xuXHRcdFx0X3RlbXBbdGhpcy5wcm9wcy5tZXJnZV0gPSBfdmFsdWU7XG5cdFx0XHRfdmFsdWUgPSBfdGVtcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gem4uZXh0ZW5kKF92YWx1ZSwgdGhpcy5wcm9wcy5leHRzKSwgX3ZhbHVlO1xuXHR9LFxuXHRfX2lzQXBpVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHZhbHVlLl9fYXBpX18pe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBjYWxsYmFjayl7XG5cdFx0aWYoIXZhbHVlKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZih0aGlzLl9faXNBcGlWYWx1ZSh2YWx1ZSkgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGEuY2FsbCh2YWx1ZSwgY2FsbGJhY2spLCB0aGlzO1xuXHRcdH1cblx0XHRpZih6bi5pcyh2YWx1ZSwgJ29iamVjdCcpKXtcblx0XHRcdGZvcih2YXIga2V5IGluIHRoaXMuc3RhdGUuaGlkZGVucyl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaGlkZGVuc1trZXldID0gdmFsdWVba2V5XSB8fCB0aGlzLnN0YXRlLmhpZGRlbnNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF9yZWZzID0gdGhpcy5yZWZzLFxuXHRcdFx0XHRfcmVmID0gbnVsbCxcblx0XHRcdFx0X3ZhbHVlID0gbnVsbCxcblx0XHRcdFx0X3RleHQgPSBudWxsO1xuXHRcdFx0Zm9yKHZhciBrZXkgaW4gX3JlZnMpe1xuXHRcdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdFx0aWYoIV9yZWYpIHsgY29udGludWU7IH1cblx0XHRcdFx0X3ZhbHVlID0gdmFsdWVba2V5XTtcblx0XHRcdFx0X3RleHQgPSB2YWx1ZVtrZXkrJ19jb252ZXJ0J107XG5cdFx0XHRcdGlmKF92YWx1ZSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0X3JlZi5zZXRWYWx1ZShfdmFsdWUsIF90ZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3VibWl0OiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0aWYoIV92YWx1ZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jyl7XG5cdFx0XHR6bi5kZWJ1ZygnQWpheEZvcm0gc3VibWl0IERhdGE6ICcsIF92YWx1ZSk7XG5cdFx0fVxuXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU3VibWl0QmVmb3JlICYmIHRoaXMucHJvcHMub25TdWJtaXRCZWZvcmUoX3ZhbHVlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0X3ZhbHVlID0gX3JldHVybiB8fCBfdmFsdWU7XG5cdFx0dmFyIF9zdWJtaXRBcGkgPSB6bi5leHRlbmQoeyB1cmw6IHRoaXMucHJvcHMuYWN0aW9uLCBtZXRob2Q6IHRoaXMucHJvcHMubWV0aG9kIH0sIHRoaXMucHJvcHMuc3VibWl0QXBpKSxcblx0XHRcdF9tZXRob2QgPSB0aGlzLnByb3BzLm1ldGhvZCB8fCBfc3VibWl0QXBpLm1ldGhvZCB8fCAncG9zdCcsXG5cdFx0XHRfa2V5ID0gX21ldGhvZC50b0xvY2FsZUxvd2VyQ2FzZSgpID09ICdnZXQnID8gJ3BhcmFtcyc6ICdkYXRhJztcblxuXHRcdGlmKCFfc3VibWl0QXBpW19rZXldKSB7XG5cdFx0XHRfc3VibWl0QXBpW19rZXldID0ge307XG5cdFx0fVxuXHRcdHpuLmV4dGVuZChfc3VibWl0QXBpW19rZXldLCBfdmFsdWUpO1xuXHRcdGlmKCFfc3VibWl0QXBpLnVybCB8fCAhX3N1Ym1pdEFwaVtfa2V5XSl7XG5cdFx0XHRpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKXtcblx0XHRcdFx0em4uZXJyb3IoJ1RoZSBmb3JtIGFjdGlvbiBpcyBudWxsLCBkYXRhOiAnLCBfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuc3RhdGUuc3VibWl0KXtcblx0XHRcdHRoaXMuc3RhdGUuc3VibWl0LmNhbGwoX3N1Ym1pdEFwaSwgY2FsbGJhY2spO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXQgPSB6bi5kYXRhLmNyZWF0ZShfc3VibWl0QXBpLCB7XG5cdFx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdFx0aWYodGhpcy5fX2lzTW91bnRlZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogdHJ1ZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdGluZyAmJiB0aGlzLnByb3BzLm9uU3VibWl0aW5nKGRhdGEsIHRoaXMpO1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGFmdGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHRpZih0aGlzLl9faXNNb3VudGVkKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdGVkICYmIHRoaXMucHJvcHMub25TdWJtaXRlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoc2VuZGVyLCBkYXRhKXtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0U3VjY2VzcyAmJiB0aGlzLnByb3BzLm9uU3VibWl0U3VjY2VzcyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24gKHNlbmRlciwgeGhyKXtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uU3VibWl0RXJyb3IgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdEVycm9yKHhociwgdGhpcyk7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHR9XG5cdH0sXG5cdF9fb25TdWJtaXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dmFyIF9yZWZzID0gdGhpcy5zdGF0ZS5yZWZzLFxuXHRcdFx0X3JlZiA9IG51bGwsXG5cdFx0XHRfZGF0YSA9IHt9LFxuXHRcdFx0X3ZhbHVlID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBfcmVmcyl7XG5cdFx0XHRfcmVmID0gX3JlZnNba2V5XTtcblx0XHRcdGlmKCFfcmVmKSB7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF9yZWYudmFsaWRhdGUpe1xuXHRcdFx0XHRfdmFsdWUgPSBfcmVmLnZhbGlkYXRlKGNhbGxiYWNrKTtcblx0XHRcdFx0aWYoX3ZhbHVlID09IG51bGwpe1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoX3JlZi5nZXRWYWx1ZSl7XG5cdFx0XHRcdF92YWx1ZSA9IF9yZWYuZ2V0VmFsdWUoY2FsbGJhY2spO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfcmVmLnByb3BzLnJlcXVpcmVkICYmIF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihfdmFsdWUgPT0gbnVsbCl7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfZGF0YVtfcmVmLnByb3BzLnZhbHVlS2V5IHx8IGtleV0gPSBfdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9kYXRhO1xuXHR9LFxuXHRfX3BhcnNlSXRlbVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHZhbHVlLmluZGV4T2YoXCJqYXZhc2NyaXB0OlwiKT09MCl7XG5cdFx0XHRyZXR1cm4gZXZhbCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uSXRlbUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmb3JtaXRlbSl7XG5cdFx0ZXZlbnQudmFsaWRhdGVWYWx1ZSA9IGZvcm1pdGVtLnZhbGlkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSXRlbUlucHV0Q2hhbmdlKGV2ZW50LCBpbnB1dCwgZm9ybWl0ZW0pO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoaXRlbS50eXBlPT0nWlJIaWRkZW4nKXtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlLmhpZGRlbnNbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWUhPW51bGwgPyB0aGlzLl9fcGFyc2VJdGVtVmFsdWUoaXRlbS52YWx1ZSk6IG51bGwsIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfbmFtZSA9IGl0ZW0ubmFtZSxcblx0XHRcdF92YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUgfHwge307XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0a2V5PXtpbmRleH0gXG5cdFx0XHRcdFx0cmVmPXsocmVmKT0+dGhpcy5zdGF0ZS5yZWZzW19uYW1lXSA9IHJlZn0gXG5cdFx0XHRcdFx0dmFsdWU9eyBpdGVtLnZhbHVlICE9IG51bGwgPyBpdGVtLnZhbHVlIDogX3ZhbHVlW19uYW1lXSB9XG5cdFx0XHRcdFx0dGV4dD17IGl0ZW0udGV4dCAhPSBudWxsID8gaXRlbS50ZXh0IDogX3ZhbHVlW19uYW1lICsgJ19jb252ZXJ0J119XG5cdFx0XHRcdFx0b25JbnB1dENoYW5nZT17IGl0ZW0ub25JbnB1dENoYW5nZSB8fCB0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2UgfSBcblx0XHRcdFx0XHRvbklucHV0RW50ZXI9eyBpdGVtLm9uSW5wdXRFbnRlciB8fCB0aGlzLnN1Ym1pdCB9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckl0ZW1zOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0aWYoem4uaXMoX2RhdGEsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRfZGF0YSA9IF9kYXRhLmNhbGwobnVsbCwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiA8Rm9ybUdyb3VwIGRhdGE9e19kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHRpZighdGhpcy5wcm9wcy5ncm91cHMpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncm91cHNcIj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gLz47XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckJ1dHRvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnByb3BzLmJ1dHRvbnMpeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRpbmc6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVMb2FkaW5nICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fb25WYWx1ZUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZGF0YSwgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZGVkICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRlZChkYXRhLCB0aGlzKTtcblx0fSxcblx0X19vblZhbHVlTG9hZEVycm9yOiBmdW5jdGlvbiAoeGhyKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSk7XG5cdFx0dGhpcy5wcm9wcy5vblZhbHVlTG9hZEVycm9yICYmIHRoaXMucHJvcHMub25WYWx1ZUxvYWRFcnJvcih4aHIpO1xuXHRcdHBvcHVwLm5vdGlmaWVyLmVycm9yKFwiRXJyb3I6IFwiICsgeGhyLm1lc3NhZ2UpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItYWpheC1mb3JtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uIDwvc3Bhbj48L2Rpdj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX2xvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfVxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtIHpyLWFqYXgtZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItZm9ybS1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Mb2FkaW5nIC4uLiA8L3NwYW4+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLnN0YXRlLmhpZGRlbnMgPSB7fTtcblx0XHRpZih0aGlzLl9faXNBcGlWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXt0aGlzLl9fbG9hZGluZ1JlbmRlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMuX19vblZhbHVlTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fb25WYWx1ZUxvYWRlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLl9fb25WYWx1ZUxvYWRFcnJvcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXsoZGF0YSk9PnRoaXMuc3RhdGUuZGF0YSA9IGRhdGF9XG5cdFx0XHRcdFx0ZGF0YVJlbmRlcj17dGhpcy5fX3JlbmRlcn0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy52YWx1ZSAmJiB0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PSAnb2JqZWN0Jyl7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuX19yZW5kZXIoKTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFqYXhGb3JtID0gcmVxdWlyZSgnLi9BamF4Rm9ybScpO1xudmFyIE5hdGl2ZUZvcm0gPSByZXF1aXJlKCcuL05hdGl2ZUZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm0nLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nTmF0aXZlJyl7XG5cdFx0XHRyZXR1cm4gPE5hdGl2ZUZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxBamF4Rm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fVxuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWJ1dHRvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRm9ybUJ1dHRvbnMnLFxuXHRfX2J1dHRvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGJ1dHRvbnMpe1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0c3dpdGNoKF9kYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ3Jlc2V0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldChldmVudCwgYnV0dG9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCBidXR0b25zKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYW5jZWwnOlxuXHRcdFx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwoZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIGJ1dHRvbnMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbi5CdXR0b25zIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLWJ1dHRvbnMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBvbkNsaWNrPXt0aGlzLl9fYnV0dG9uQ2xpY2t9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRm9ybUl0ZW0gPSByZXF1aXJlKCcuL0Zvcm1JdGVtJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZvcm1Hcm91cCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLml0ZW1SZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtUmVuZGVyKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfcmV0dXJuID09PSBudWxsKXtcblx0XHRcdF9yZXR1cm4gPSA8Rm9ybUl0ZW0gey4uLml0ZW19IGtleT17aW5kZXh9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0dXJuO1xuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRXJyb3I6IGZ1bmN0aW9uICh4aHIpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0XHRwb3B1cC5ub3RpZmllci5lcnJvcihcIkVycm9yOiBcIiArIHhoci5tZXNzYWdlKTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZvcm0tZ3JvdXBcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0aXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuX19vbkVycm9yfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJyk7XG5cbnZhciBGb3JtSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0Zvcm1JdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1czogJ2RlZmF1bHQnLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLl90aW1lb3V0KXtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0fVxuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0ZXh0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdHRleHQ6IHRleHRcblx0XHR9LCAoKT0+dGhpcy52YWxpZGF0ZSgpKTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG5cdH0sXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXHRcdGlmKHRoaXMucHJvcHMucmVxdWlyZWQgJiYgKF92YWx1ZSA9PT0gJycgfHwgX3ZhbHVlID09IG51bGwpKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lcnJvciB8fCBcIlRoZSBmaWVsZCBpcyByZXF1aXJlZC5cIlxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIF9jYWxsYmFjayA9IGNhbGxiYWNrICYmIGNhbGxiYWNrKF92YWx1ZSwgdGhpcyk7XG5cdFx0aWYoX2NhbGxiYWNrID09PSBmYWxzZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3RhdHVzOiAnZXJyb3InLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2U6IHRoaXMucHJvcHMuZXJyb3Jcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN0YXR1czogJ3N1Y2Nlc3MnLFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiBudWxsXG5cdFx0fSk7XG5cdFx0dGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xuXHRcdFx0aWYodGhpcy5fX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogJ2RlZmF1bHQnIH0pO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSwgMTAwMCk7XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRfX29uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudmFsdWU7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25JbnB1dENoYW5nZSAmJiB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19vbklucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50LmZvcm1pdGVtID0gdGhpcztcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uSW5wdXRFbnRlciAmJiB0aGlzLnByb3BzLm9uSW5wdXRFbnRlcihldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlckhlYWRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienJmaS1oZWFkZXJcIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuaWNvbiAmJiA8aWNvbi5TVkdJY29uIGljb249e3RoaXMucHJvcHMuaWNvbn0gLz59XG5cdFx0XHRcdHt0aGlzLnByb3BzLmxhYmVsICYmIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5sYWJlbH08L2Rpdj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckJvZHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnYm9keS1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWUpLFxuXHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHR0ZXh0OiB0aGlzLnN0YXRlLnRleHQsXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX29uSW5wdXRDaGFuZ2UsXG5cdFx0XHRvbkVudGVyOiB0aGlzLl9fb25JbnB1dEVudGVyXG5cdFx0fSk7XG5cdFx0dmFyIF9pbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cdFx0aWYoX2lucHV0ICYmIHR5cGVvZiBfaW5wdXQgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lucHV0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5jYWxsKG51bGwsIHRoaXMsIF9pbnB1dFByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9pbnB1dCwgX2lucHV0UHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyZmktYm9keVwiIGRhdGEtenItcG9wdXAtdG9vbHRpcD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuXHRcdFx0XHR7IF9pbnB1dEVsZW1lbnQgfVxuXHRcdFx0XHR7dGhpcy5wcm9wcy5zdWZmaXggJiYgPHNwYW4gY2xhc3NOYW1lPVwic3VmZml4XCI+e3RoaXMucHJvcHMuc3VmZml4fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0taXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdGRhdGEtbGF5b3V0PXt0aGlzLnByb3BzLmxheW91dH1cblx0XHRcdFx0ZGF0YS1zaXplPXt0aGlzLnByb3BzLnNpemV9XG5cdFx0XHRcdGRhdGEtc3RhdHVzPXt0aGlzLnN0YXRlLnN0YXR1c30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckhlYWRlcigpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckJvZHkoKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1JdGVtOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBamF4Rm9ybSA9IHJlcXVpcmUoJy4vQWpheEZvcm0nKTtcbnZhciBOYXRpdmVGb3JtID0gcmVxdWlyZSgnLi9OYXRpdmVGb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtUGFuZWwnLFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nTmF0aXZlJyl7XG5cdFx0XHRyZXR1cm4gPE5hdGl2ZUZvcm0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxBamF4Rm9ybSB7Li4udGhpcy5wcm9wc30gLz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclRpdGxlOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3RpdGxlID0gdGhpcy5wcm9wcy50aXRsZVJlbmRlciAmJiB0aGlzLnByb3BzLnRpdGxlUmVuZGVyKCk7XG5cdFx0cmV0dXJuIF90aXRsZSB8fCB0aGlzLnByb3BzLnRpdGxlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF90aXRsZSA9IHRoaXMuX19yZW5kZXJUaXRsZSgpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0tcGFuZWwnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQhIV90aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnRcIj57dGhpcy5fX3JlbmRlcigpfTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGb3JtVGl0bGUnLFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1mb3JtLXRpdGxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ6Zi10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBGb3JtSXRlbSA9IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKTtcbnZhciBGb3JtR3JvdXAgPSByZXF1aXJlKCcuL0Zvcm1Hcm91cCcpO1xudmFyIEZvcm1CdXR0b25zID0gcmVxdWlyZSgnLi9Gb3JtQnV0dG9ucycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJOYXRpdmVGb3JtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aW9uOiBudWxsLFxuXHRcdFx0YXV0b0NvbXBsZXRlOiAnb2ZmJyxcblx0XHRcdG1ldGhvZDogXCJwb3N0XCIsXG5cdFx0XHRuYW1lOiBudWxsLFxuXHRcdFx0bm9WYWxpZGF0ZTogbnVsbCxcblx0XHRcdHRhcmdldDogJ19zZWxmJyxcblx0XHRcdGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWJtaXR0aW5nOiBmYWxzZSxcblx0XHRcdHZhbHVlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7IFxuXHRcdHRoaXMuX19pbml0VmFsdWUoKTtcblx0fSxcblx0X19pbml0VmFsdWU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRpZihfdmFsdWUuX19hcGlfXyl7XG5cdFx0XHRcdHRoaXMuX19pbml0QXBpVmFsdWUoX3ZhbHVlKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLl9faW5pdE9iamVjdFZhbHVlKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRBcGlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX2V2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRzIHx8IHt9LFxuXHRcdFx0X2JlZm9yZSA9IF9ldmVudHMuYmVmb3JlLFxuXHRcdFx0X2FmdGVyID0gX2V2ZW50cy5hZnRlcjtcblx0XHR0aGlzLnN0YXRlLmRhdGEgPSB6bi5kYXRhLmNyZWF0ZSh2YWx1ZSwgem4uZXh0ZW5kKF9ldmVudHMsIHtcblx0XHRcdGJlZm9yZTogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyhkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2JlZm9yZSAmJiBfYmVmb3JlKHNlbmRlciwgZGF0YSk7XG5cdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRhZnRlcjogZnVuY3Rpb24gKHNlbmRlciwgZGF0YSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZChkYXRhLCB0aGlzKTtcblx0XHRcdFx0X2FmdGVyICYmIF9hZnRlcihzZW5kZXIsIGRhdGEpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0fSksIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdH0sXG5cdF9faW5pdE9iamVjdFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMucHJvcHMub25WYWx1ZUxvYWRpbmcgJiYgdGhpcy5wcm9wcy5vblZhbHVlTG9hZGluZyh2YWx1ZSwgdGhpcyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KTtcblx0XHR0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCAmJiB0aGlzLnByb3BzLm9uVmFsdWVGaW5pc2hlZCh2YWx1ZSwgdGhpcyk7XG5cdH0sXG5cdGNhbmNlbDogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdHJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHt9XG5cdFx0fSk7XG5cdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVzZXQoKTtcblx0fSxcblx0X19vblJlc2V0OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KCk7XG5cdH0sXG5cdHN1Ym1pdDogZnVuY3Rpb24gKGV2ZW50LCBidG4pe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c3VibWl0dGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uU3VibWl0OiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50LCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19vbkl0ZW1DaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2hhbmdlICYmIHRoaXMucHJvcHMub25JdGVtQ2hhbmdlKCk7XG5cdH0sXG5cdF9fb25JdGVtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkl0ZW1JbnB1dENoYW5nZSgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxGb3JtSXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWVbaXRlbS5uYW1lXX0gXG5cdFx0XHRcdFx0dGV4dD17dGhpcy5zdGF0ZS52YWx1ZVtpdGVtLm5hbWUgKyBcIl9jb252ZXJ0XCJdfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uSXRlbUNoYW5nZX1cblx0XHRcdFx0XHRvbklucHV0Q2hhbmdlPXt0aGlzLl9fb25JdGVtSW5wdXRDaGFuZ2V9Lz5cblx0fSxcblx0X19yZW5kZXJJdGVtczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDxGb3JtR3JvdXAgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz47XG5cdH0sXG5cdF9fcmVuZGVyR3JvdXBzOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2dyb3VwcyA9IHRoaXMucHJvcHMuZ3JvdXBzIHx8IFtdO1xuXHRcdGlmKCFfZ3JvdXBzLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzXCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZ3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxGb3JtR3JvdXAgey4uLmdyb3VwfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyQnV0dG9uczogZnVuY3Rpb24gKCl7XG5cdFx0aWYoIXRoaXMucHJvcHMuYnV0dG9ucykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHJldHVybiA8Rm9ybUJ1dHRvbnMgZGF0YT17dGhpcy5wcm9wcy5idXR0b25zfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IG9uUmVzZXQ9e3RoaXMucmVzZXR9IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbH0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfaGlkZGVucyA9IHRoaXMucHJvcHMuaGlkZGVucyB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9XG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWZvcm0genItbmF0aXZlLWZvcm0nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRhY3Rpb249e3RoaXMucHJvcHMuYWN0aW9ufVxuXHRcdFx0XHRhdXRvQ29tcGxldGU9e3RoaXMucHJvcHMuYXV0b0NvbXBsZXRlfVxuXHRcdFx0XHRtZXRob2Q9e3RoaXMucHJvcHMubWV0aG9kfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdG5vVmFsaWRhdGU9e3RoaXMucHJvcHMubm9WYWxpZGF0ZX1cblx0XHRcdFx0dGFyZ2V0PXt0aGlzLnByb3BzLnRhcmdldH1cblx0XHRcdFx0ZW5jVHlwZT17dGhpcy5wcm9wcy5lbmNUeXBlfVxuXHRcdFx0XHRvblJlc2V0PXt0aGlzLl9fb25SZXNldH1cblx0XHRcdFx0b25TdWJtaXQ9e3RoaXMuX19vblN1Ym1pdH0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfaGlkZGVucykubWFwKGZ1bmN0aW9uIChoaWRkZW4sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQga2V5PXsnaGlkZGVuXycgKyBoaWRkZW59IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtoaWRkZW59IHZhbHVlPXtfaGlkZGVuc1toaWRkZW5dfSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySXRlbXMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJHcm91cHMoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJCdXR0b25zKCl9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnN1Ym1pdHRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci1mb3JtLWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlN1Ym1pdHRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFqYXhGb3JtOiByZXF1aXJlKCcuL0FqYXhGb3JtJyksXG4gICAgRm9ybTogcmVxdWlyZSgnLi9Gb3JtJyksXG4gICAgRm9ybUJ1dHRvbnM6IHJlcXVpcmUoJy4vRm9ybUJ1dHRvbnMnKSxcbiAgICBGb3JtR3JvdXA6IHJlcXVpcmUoJy4vRm9ybUdyb3VwJyksXG4gICAgRm9ybUl0ZW06IHJlcXVpcmUoJy4vRm9ybUl0ZW0nKSxcbiAgICBGb3JtVGl0bGU6IHJlcXVpcmUoJy4vRm9ybVRpdGxlJyksXG4gICAgRm9ybVBhbmVsOiByZXF1aXJlKCcuL0Zvcm1QYW5lbCcpLFxuICAgIE5hdGl2ZUZvcm06IHJlcXVpcmUoJy4vTmF0aXZlRm9ybScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInpyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiYnV0dG9uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9