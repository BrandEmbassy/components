'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Plugin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedElement = require('./Element/ComposedElement');

var _ComposedElement2 = _interopRequireDefault(_ComposedElement);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Plugin(_ref) {
  var elements = _ref.elements;

  var isItCarusel = elements.length > 1;
  var caruselClass = (0, _classnames2.default)(_defineProperty({}, _index2.default.Carusel, isItCarusel));

  return _react2.default.createElement(
    'div',
    { className: _index2.default.PluginFrameWrapper },
    _react2.default.createElement(
      'div',
      { className: _index2.default.ArrowWrapper },
      isItCarusel && _react2.default.createElement('div', { className: _index2.default.LeftRow })
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.PluginFrame },
      _react2.default.createElement(
        'div',
        { className: caruselClass },
        elements.map(function (element) {
          return _react2.default.createElement(
            'div',
            { 'class': _index2.default.Plugin },
            _react2.default.createElement(_ComposedElement2.default, { elements: element.elements })
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.ArrowWrapper },
      isItCarusel && _react2.default.createElement('div', { className: _index2.default.RightRow })
    )
  );
}