'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(_ref) {
  var src = _ref.src,
      title = _ref.title;

  return _react2.default.createElement(
    'div',
    { 'class': _index2.default.Image },
    _react2.default.createElement('img', { src: src, title: title })
  );
}