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

var _Link = require('./Link.css');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Link2.default);

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'renderIcon',
    value: function renderIcon() {
      if (this.props.Icon) {
        return _react2.default.createElement('div', { className: this.props.Icon });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Blue = _props.Blue,
          White = _props.White,
          Green = _props.Green,
          Red = _props.Red,
          Black = _props.Black,
          styleName = _props.styleName;


      var className = cx(_Link2.default.Link, styleName, {
        Blue: Blue,
        White: White,
        Green: Green,
        Red: Red,
        Black: Black
      });

      return _react2.default.createElement(
        'a',
        { className: className, onClick: this.props.onClick },
        this.renderIcon(),
        _react2.default.createElement(
          'div',
          { className: _Link2.default.Text },
          this.props.text
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        onClick: _propTypes2.default.Func,
        text: _propTypes2.default.string,
        Icon: _propTypes2.default.string,
        Blue: _propTypes2.default.boolean,
        White: _propTypes2.default.boolean,
        Green: _propTypes2.default.boolean,
        Red: _propTypes2.default.boolean,
        Black: _propTypes2.default.boolean,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return Link;
}(_react.Component);

exports.default = Link;