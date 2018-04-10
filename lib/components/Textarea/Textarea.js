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

var _Textarea = require('./Textarea.css');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Textarea2.default);

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDisabled = _props.isDisabled,
          isError = _props.isError;


      var className = cx(_Textarea2.default.Textarea, {
        Disabled: isDisabled,
        Error: isError
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: _Textarea2.default.Label },
          this.props.label
        ),
        _react2.default.createElement(
          'div',
          { className: _Textarea2.default.Field },
          _react2.default.createElement('textarea', {
            name: this.props.name,
            rows: this.props.rows,
            value: this.props.value,
            placeholder: this.props.placeholder,
            disabled: this.props.isDisabled,
            onChange: this.props.onChange })
        ),
        _react2.default.createElement(
          'div',
          { className: _Textarea2.default.Desc + ' ' + _Textarea2.default.isRed + ' ' },
          this.props.desc
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _propTypes2.default.Array,
        name: _propTypes2.default.string,
        rows: _propTypes2.default.number,
        value: _propTypes2.default.string,
        placeholder: _propTypes2.default.string,
        isDisabled: _propTypes2.default.boolean,
        isError: _propTypes2.default.boolean,
        onChange: _propTypes2.default.func,
        desc: _propTypes2.default.string
      };
    }
  }]);

  return Textarea;
}(_react.Component);

exports.default = Textarea;