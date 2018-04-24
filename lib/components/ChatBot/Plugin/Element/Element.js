'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;
exports.default = Element;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _QuickReply = require('./QuickReply');

var _QuickReply2 = _interopRequireDefault(_QuickReply);

var _ComposedElement = require('./ComposedElement');

var _ComposedElement2 = _interopRequireDefault(_ComposedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = exports.types = {
  BUTTON: 'BUTTON',
  HEADING: 'HEADING',
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  QUICK_REPLY: 'QUICK_REPLY'
};

function Element(_ref) {
  var id = _ref.id,
      type = _ref.type,
      text = _ref.text,
      url = _ref.url,
      postback = _ref.postback,
      elements = _ref.elements,
      onClick = _ref.onClick;

  if (type === types.BUTTON) {
    return _react2.default.createElement(_Button2.default, { label: text, onClick: onClick, postback: postback });
  }
  if (type === types.HEADING) {
    return _react2.default.createElement(_Heading2.default, { content: text });
  }
  if (type === types.TEXT) {
    return _react2.default.createElement(_Text2.default, { content: text });
  }
  if (type === types.IMAGE) {
    return _react2.default.createElement(_Image2.default, { src: url });
  }
  if (type === types.QUICK_REPLY) {
    return _react2.default.createElement(_QuickReply2.default, { elements: elements, onSelect: onClick });
  }
  if (Array.isArray(elements)) {
    return _react2.default.createElement(_ComposedElement2.default, { elements: elements, onClick: onClick });
  }
  return null;
}