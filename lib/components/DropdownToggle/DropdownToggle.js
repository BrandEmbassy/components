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

var _DropdownToggle = require('./DropdownToggle.css');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_DropdownToggle2.default);

var DropdownToggle = function (_Component) {
  _inherits(DropdownToggle, _Component);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).apply(this, arguments));
  }

  _createClass(DropdownToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          styleName = _props.styleName;


      var className = cx(_DropdownToggle2.default.DropdownToggle, styleName, {
        isOpen: isOpen
      });

      return _react2.default.createElement(
        'button',
        { className: className, onClick: this.props.onClick },
        this.props.children,
        _react2.default.createElement(
          'div',
          { className: _DropdownToggle2.default.Icon },
          _react2.default.createElement('div', { 'class': 'be-icon-arrow-down' })
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        onClick: _propTypes2.default.Func,
        children: _propTypes2.default.Array,
        isOpen: _propTypes2.default.boolean,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return DropdownToggle;
}(_react.Component);

exports.default = DropdownToggle;