'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Switcher = require('./Switcher.css');

var _Switcher2 = _interopRequireDefault(_Switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Switcher2.default);

var Switcher = function (_Component) {
  _inherits(Switcher, _Component);

  function Switcher(props) {
    _classCallCheck(this, Switcher);

    var _this = _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, props));

    _this.state = { isActive: _this.props.isActive };
    return _this;
  }

  _createClass(Switcher, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isActive = this.props.isActive;


      var className = cx(_Switcher2.default.Switcher, {
        isActive: isActive
      });

      return _react2.default.createElement(
        'div',
        {
          onClick: function onClick(e) {
            e.stopPropagation();
            _this2.setState({ isActive: !_this2.state.isActive });
          },
          className: className },
        _react2.default.createElement(
          'div',
          { className: 'Label Label--on' },
          'On'
        ),
        _react2.default.createElement('div', { className: 'Switch' }),
        _react2.default.createElement(
          'div',
          { className: 'Label Label--off' },
          'Off'
        )
      );
    }
  }]);

  return Switcher;
}(_react.Component);

exports.default = Switcher;