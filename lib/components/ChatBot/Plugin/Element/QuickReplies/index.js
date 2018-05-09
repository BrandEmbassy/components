'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ElementType = require('../ElementType');

var _ElementType2 = _interopRequireDefault(_ElementType);

var _Bubble = require('../Text/Bubble');

var _Bubble2 = _interopRequireDefault(_Bubble);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickReplies = function (_PureComponent) {
  _inherits(QuickReplies, _PureComponent);

  function QuickReplies() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QuickReplies);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QuickReplies.__proto__ || Object.getPrototypeOf(QuickReplies)).call.apply(_ref, [this].concat(args))), _this), _this.createOnClickHandler = function (postback, text) {
      return function () {
        var onClick = _this.props.onClick;

        if (!onClick) {
          return null;
        }
        return onClick(postback, text);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuickReplies, [{
    key: 'getTextElement',
    value: function getTextElement() {
      var elements = this.props.elements;

      var textElements = elements.filter(function (el) {
        return el.type === _ElementType2.default.TEXT;
      });
      return textElements[0] ? textElements[0] : null;
    }
  }, {
    key: 'getButtons',
    value: function getButtons() {
      var elements = this.props.elements;

      return elements.filter(function (el) {
        return el.type === _ElementType2.default.BUTTON;
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this2 = this;

      var onClick = this.props.onClick;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.ButtonsGroup },
        this.getButtons().map(function (_ref2) {
          var text = _ref2.text,
              id = _ref2.id,
              postback = _ref2.postback;

          return _react2.default.createElement(
            'button',
            { className: _index2.default.QuickReplyButton, key: id, onClick: _this2.createOnClickHandler(postback, text) },
            text
          );
        })
      );
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage(textElement) {
      return _react2.default.createElement(
        'div',
        { className: _index2.default.Message },
        _react2.default.createElement(_Bubble2.default, { text: textElement.text })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          elements = _props.elements,
          hideButtons = _props.hideButtons;

      var textElement = this.getTextElement();

      return _react2.default.createElement(
        'div',
        { className: _index2.default.QuickReplies },
        textElement && this.renderMessage(textElement),
        !hideButtons && this.renderButtons()
      );
    }
  }]);

  return QuickReplies;
}(_react.PureComponent);

exports.default = QuickReplies;