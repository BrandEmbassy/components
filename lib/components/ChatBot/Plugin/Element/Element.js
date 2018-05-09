'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _QuickReplies = require('./QuickReplies');

var _QuickReplies2 = _interopRequireDefault(_QuickReplies);

var _ComposedElement = require('./ComposedElement');

var _ComposedElement2 = _interopRequireDefault(_ComposedElement);

var _ElementType = require('./ElementType');

var _ElementType2 = _interopRequireDefault(_ElementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Element(props) {
  var type = props.type,
      text = props.text,
      url = props.url,
      postback = props.postback,
      elements = props.elements,
      onClick = props.onClick,
      hideButtons = props.hideButtons,
      showTextAsMessage = props.showTextAsMessage;

  var headingType = [_ElementType2.default.HEADING, _ElementType2.default.TITLE, _ElementType2.default.SUBTITLE];

  if (type === _ElementType2.default.BUTTON) {
    return _react2.default.createElement(_Button2.default, { label: text, onClick: onClick, postback: postback });
  }
  if (headingType.indexOf(type) > -1) {
    var level = type === _ElementType2.default.SUBTITLE ? _Heading.SUBTITLE_HEADING_LEVEL : _Heading.TITLE_HEADING_LEVEL;
    return _react2.default.createElement(_Heading2.default, { content: text, level: level });
  }
  if (type === _ElementType2.default.TEXT) {
    return _react2.default.createElement(_Text2.default, { content: text, showAsMessage: showTextAsMessage });
  }
  if (type === _ElementType2.default.IMAGE) {
    return _react2.default.createElement(_Image2.default, { src: url });
  }
  if (type === _ElementType2.default.QUICK_REPLIES) {
    return _react2.default.createElement(_QuickReplies2.default, { elements: elements, onClick: onClick, hideButtons: hideButtons });
  }
  if (Array.isArray(elements)) {
    var _showTextAsMessage = type === _ElementType2.default.TEXT_AND_BUTTONS;
    return _react2.default.createElement(_ComposedElement2.default, { elements: elements, onClick: onClick, showTextAsMessage: _showTextAsMessage });
  }
  return null;
}