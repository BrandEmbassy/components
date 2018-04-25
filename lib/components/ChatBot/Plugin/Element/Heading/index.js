'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Heading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Heading(_ref) {
  var content = _ref.content,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 1 : _ref$level;

  if (level === 1) {
    return _react2.default.createElement(
      'h1',
      null,
      content
    );
  }
  return _react2.default.createElement(
    'h2',
    null,
    content
  );
}