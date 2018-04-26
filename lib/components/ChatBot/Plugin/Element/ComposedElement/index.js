'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComposedElement;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ComposedElement(_ref) {
  var elements = _ref.elements,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: _index2.default.ComposedElement },
    elements.map(function (element) {
      return _react2.default.createElement(_Element2.default, {
        key: element.id,
        id: element.id,
        type: element.type,
        text: element.text,
        url: element.url,
        postback: element.postback,
        elements: element.elements,
        onClick: onClick
      });
    })
  );
}