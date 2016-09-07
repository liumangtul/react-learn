(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _parent = require('./components/parent.jsx');

ReactDOM.render(React.createElement(_parent.Parent, null), document.getElementById('app'));

},{"./components/parent.jsx":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Child = exports.Child = React.createClass({
    displayName: "Child",

    render: function render() {
        return React.createElement("div", null, " The Child ");
    }
});

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parent = undefined;

var _child = require('./child.jsx');

var Parent = exports.Parent = React.createClass({
    displayName: 'Parent',

    render: function render() {
        return React.createElement('div', null, React.createElement('div', null, ' Hello World '), React.createElement(_child.Child, null));
    }
});

},{"./child.jsx":2}]},{},[1]);
