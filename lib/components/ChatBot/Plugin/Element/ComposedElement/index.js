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
      onClick = _ref.onClick,
      hideButtons = _ref.hideButtons,
      showTextAsMessage = _ref.showTextAsMessage;

  return _react2.default.createElement(
    'div',
    { className: _index2.default.ComposedElement },
    elements.map(function (_ref2) {
      var id = _ref2.id,
          type = _ref2.type,
          text = _ref2.text,
          url = _ref2.url,
          postback = _ref2.postback,
          elements = _ref2.elements;
      return _react2.default.createElement(_Element2.default, {
        key: id,
        id: id,
        type: type,
        text: text,
        url: url,
        postback: postback,
        elements: elements,
        onClick: onClick,
        hideButtons: hideButtons,
        showTextAsMessage: showTextAsMessage
      });
    })
  );
}