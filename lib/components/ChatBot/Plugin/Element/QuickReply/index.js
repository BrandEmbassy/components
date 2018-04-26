'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuickReply(_ref) {
  var elements = _ref.elements,
      _onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: _index2.default.QuickReplies },
    elements.map(function (_ref2) {
      var text = _ref2.text,
          id = _ref2.id,
          postback = _ref2.postback;

      return _react2.default.createElement(
        'button',
        { key: id, onClick: function onClick() {
            return _onClick(postback, text);
          } },
        text
      );
    })
  );
}
exports.default = QuickReply;