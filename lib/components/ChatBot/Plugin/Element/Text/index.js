'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(_ref) {
  var content = _ref.content;

  return _react2.default.createElement(
    'p',
    { className: _index2.default.Text },
    content
  );
}