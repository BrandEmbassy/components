'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Tag = require('./Tag.css');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Tag2.default);

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Pink = _props.Pink,
          Yellow = _props.Yellow,
          Green = _props.Green,
          Blue = _props.Blue,
          LightBlue = _props.LightBlue,
          Purple = _props.Purple,
          DarkPurple = _props.DarkPurple,
          Turquoise = _props.Turquoise,
          Red = _props.Red,
          Grey = _props.Grey;


      var className = cx(_Tag2.default.Tag, {
        Pink: Pink,
        Yellow: Yellow,
        Green: Green,
        Blue: Blue,
        LightBlue: LightBlue,
        Purple: Purple,
        Turquoise: Turquoise,
        DarkPurple: DarkPurple,
        Red: Red,
        Grey: Grey
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        this.props.text
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        text: _propTypes2.default.string,
        Pink: _propTypes2.default.boolean,
        Yellow: _propTypes2.default.boolean,
        Green: _propTypes2.default.boolean,
        Blue: _propTypes2.default.boolean,
        LightBlue: _propTypes2.default.boolean,
        Purple: _propTypes2.default.boolean,
        Turquoise: _propTypes2.default.boolean,
        DarkPurple: _propTypes2.default.boolean,
        Red: _propTypes2.default.boolean,
        Grey: _propTypes2.default.boolean
      };
    }
  }]);

  return Tag;
}(_react.Component);

exports.default = Tag;