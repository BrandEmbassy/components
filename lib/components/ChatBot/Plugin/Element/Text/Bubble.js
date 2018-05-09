'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Bubble;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Bubble = require('./Bubble.css');

var _Bubble2 = _interopRequireDefault(_Bubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Bubble(_ref) {
  var text = _ref.text;

  return _react2.default.createElement(
    'div',
    { className: _Bubble2.default.Bubble },
    text
  );
}