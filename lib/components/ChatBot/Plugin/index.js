'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plugin = function (_Component) {
  _inherits(Plugin, _Component);

  function Plugin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Plugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Plugin.__proto__ || Object.getPrototypeOf(Plugin)).call.apply(_ref, [this].concat(args))), _this), _this.scroller = null, _this.requestAnimationFrameId = null, _this.SCROLL_DIRECTION_RIGHT = 1, _this.SCROLL_DIRECTION_LEFT = -1, _this.scrollTo = function (direction) {
      if (_this.scroller !== null) {
        _this.scroller.scrollLeft += direction * 10;
      }
      _this.requestAnimationFrameId = requestAnimationFrame(function () {
        return _this.scrollTo(direction);
      });
    }, _this.stopScroll = function () {
      cancelAnimationFrame(_this.requestAnimationFrameId);
    }, _this.startScroll = function (direction) {
      if (_this.requestAnimationFrameId !== null) {
        cancelAnimationFrame(_this.requestAnimationFrameId);
      }
      _this.requestAnimationFrameId = requestAnimationFrame(function () {
        return _this.scrollTo(direction);
      });
    }, _this.handleLeftArrowClick = function () {
      _this.startScroll(_this.SCROLL_DIRECTION_LEFT);
    }, _this.handleRightArrowClick = function () {
      _this.startScroll(_this.SCROLL_DIRECTION_RIGHT);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Plugin, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          elements = _props.elements,
          onClick = _props.onClick;

      var isItCarusel = elements.length > 1;
      var caruselClass = (0, _classnames2.default)(_defineProperty({}, _index2.default.Carusel, isItCarusel));

      return _react2.default.createElement(
        'div',
        { className: _index2.default.PluginFrameWrapper },
        _react2.default.createElement(
          'div',
          { className: _index2.default.ArrowWrapper },
          isItCarusel && _react2.default.createElement('div', { className: _index2.default.LeftRow, onMouseLeave: this.stopScroll, onMouseUp: this.stopScroll, onMouseDown: this.handleLeftArrowClick })
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default.PluginFrame, ref: function ref(el) {
              return _this2.scroller = el;
            } },
          _react2.default.createElement(
            'div',
            { className: caruselClass },
            elements.map(function (element) {
              return _react2.default.createElement(
                'div',
                { 'class': _index2.default.Plugin },
                _react2.default.createElement(_ComposedElement2.default, { elements: element.elements, onClick: onClick })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default.ArrowWrapper },
          isItCarusel && _react2.default.createElement('div', { className: _index2.default.RightRow, onMouseLeave: this.stopScroll, onMouseUp: this.stopScroll, onMouseDown: this.handleRightArrowClick })
        )
      );
    }
  }]);

  return Plugin;
}(_react.Component);

Plugin.prototype.defaultProps = {
  elements: []
};

exports.default = Plugin;