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

var _Select = require('./Select.css');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Select2.default);

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          styleName = _props.styleName,
          Wide = _props.Wide,
          isDisabled = _props.isDisabled,
          isError = _props.isError;


      var className = cx(_Select2.default.Select, styleName, {
        Wide: Wide,
        Disabled: isDisabled,
        Error: isError
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: _Select2.default.Label },
          this.props.label
        ),
        _react2.default.createElement(
          'select',
          { disabled: this.props.isDisabled },
          _react2.default.createElement(
            'option',
            { value: 'volvo' },
            'Volvo'
          ),
          _react2.default.createElement(
            'option',
            { value: 'mercedes' },
            'Mercedes'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Select2.default.Desc },
          this.props.desc
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        label: _propTypes2.default.string,
        isDisabled: _propTypes2.default.boolean,
        desc: _propTypes2.default.string,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;