'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUBTITLE_HEADING_LEVEL = exports.TITLE_HEADING_LEVEL = undefined;
exports.default = Heading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE_HEADING_LEVEL = exports.TITLE_HEADING_LEVEL = 1;
var SUBTITLE_HEADING_LEVEL = exports.SUBTITLE_HEADING_LEVEL = 2;

function Heading(_ref) {
  var content = _ref.content,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? TITLE_HEADING_LEVEL : _ref$level;

  if (level === TITLE_HEADING_LEVEL) {
    return _react2.default.createElement(
      'h1',
      { className: _index2.default.Heading },
      content
    );
  }
  return _react2.default.createElement(
    'h2',
    { className: _index2.default.SubHeading },
    content
  );
}