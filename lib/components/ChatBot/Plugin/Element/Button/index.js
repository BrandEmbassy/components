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

function Button(_ref) {
  var label = _ref.label,
      _onClick = _ref.onClick,
      postback = _ref.postback;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'button',
      { className: _index2.default.Button, onClick: function onClick() {
          return _onClick(postback, label);
        } },
      label
    )
  );
}
exports.default = Button;