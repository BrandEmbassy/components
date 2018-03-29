'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _Statuses = require('./../../node_modules/components/Statuses/Statuses');

var _Statuses2 = _interopRequireDefault(_Statuses);

var _prism = require('react-syntax-highlighter/prism');

var _prism2 = _interopRequireDefault(_prism);

var _prism3 = require('react-syntax-highlighter/styles/prism');

var _server = require('react-dom/server');

var _jsBeautify = require('js-beautify');

var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusesDemo = function (_Component) {
  _inherits(StatusesDemo, _Component);

  function StatusesDemo() {
    _classCallCheck(this, StatusesDemo);

    return _possibleConstructorReturn(this, (StatusesDemo.__proto__ || Object.getPrototypeOf(StatusesDemo)).apply(this, arguments));
  }

  _createClass(StatusesDemo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(
              'h2',
              { className: 'h2' },
              'Statuses'
            ),
            'Orange / Yellow / Green / Blue / Purple / Red / Grey'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 padding-20' },
            _react2.default.createElement(_Statuses2.default, { Orange: true, text: 'new' }),
            _react2.default.createElement(_Statuses2.default, { Yellow: true, text: 'open' }),
            _react2.default.createElement(_Statuses2.default, { Green: true, text: 'resolved' }),
            _react2.default.createElement(_Statuses2.default, { Blue: true, text: 'pending' }),
            _react2.default.createElement(_Statuses2.default, { Purple: true, text: 'escalated' }),
            _react2.default.createElement(_Statuses2.default, { Red: true, text: 'closed' }),
            _react2.default.createElement(_Statuses2.default, { Grey: true, text: 'trashed' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Statuses2.default, { Orange: true, text: 'new' })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Reversed'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 padding-20' },
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Orange: true, text: 'new' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Yellow: true, text: 'open' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Green: true, text: 'resolved' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Blue: true, text: 'pending' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Purple: true, text: 'escalated' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Red: true, text: 'closed' }),
            _react2.default.createElement(_Statuses2.default, { Reversed: true, Grey: true, text: 'trashed' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Statuses2.default, { Reversed: true, Orange: true, text: 'new' })))
            )
          )
        )
      );
    }
  }]);

  return StatusesDemo;
}(_react.Component);

exports.default = StatusesDemo;