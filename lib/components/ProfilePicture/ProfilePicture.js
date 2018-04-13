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

var _ProfilePicture = require('./ProfilePicture.css');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ProfilePicture2.default);

var ProfilePicture = function (_Component) {
  _inherits(ProfilePicture, _Component);

  function ProfilePicture() {
    _classCallCheck(this, ProfilePicture);

    return _possibleConstructorReturn(this, (ProfilePicture.__proto__ || Object.getPrototypeOf(ProfilePicture)).apply(this, arguments));
  }

  _createClass(ProfilePicture, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var _props = this.props,
          styleName = _props.styleName,
          Size60 = _props.Size60,
          Size40 = _props.Size40,
          Size24 = _props.Size24,
          Size20 = _props.Size20,
          Size16 = _props.Size16;


      var className = cx(_ProfilePicture2.default.ProfilePicture, styleName, {
        Size60: Size60,
        Size40: Size40,
        Size24: Size24,
        Size20: Size20,
        Size16: Size16
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('img', (_React$createElement = { src: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg' }, _defineProperty(_React$createElement, 'src', this.props.imgSrc), _defineProperty(_React$createElement, 'alt', ''), _React$createElement))
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        imgSrc: _propTypes2.default.string,
        Size60: _propTypes2.default.string,
        Size40: _propTypes2.default.string,
        Size24: _propTypes2.default.string,
        Size20: _propTypes2.default.string,
        Size16: _propTypes2.default.string,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return ProfilePicture;
}(_react.Component);

exports.default = ProfilePicture;