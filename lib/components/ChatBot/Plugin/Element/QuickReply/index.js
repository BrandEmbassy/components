'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QuickReply;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuickReply(_ref) {
  var elements = _ref.elements,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'div',
    { className: _index2.default.QuickReplies },
    elements.map(function (_ref2) {
      var text = _ref2.text,
          id = _ref2.id,
          postback = _ref2.postback;

      return _react2.default.createElement(_Button2.default, { key: id, label: text, postback: postback, onClick: onClick });
    })
  );
}