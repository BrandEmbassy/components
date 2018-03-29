'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _Radio = require('./../../node_modules/components/Radio/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

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

var RadioDemo = function (_Component) {
  _inherits(RadioDemo, _Component);

  function RadioDemo() {
    _classCallCheck(this, RadioDemo);

    return _possibleConstructorReturn(this, (RadioDemo.__proto__ || Object.getPrototypeOf(RadioDemo)).apply(this, arguments));
  }

  _createClass(RadioDemo, [{
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
              'Radio'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(_Radio2.default, { name: 'name', id: 'aaa' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'html'
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
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Radio2.default, { name: 'name', id: 'aaa' })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'usage with text '
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'bbb', label: 'chose here' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'ccc', label: 'or chose this' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'ddd', label: 'or this' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(
                'div',
                { className: 'col-xs-6' },
                _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'bbb', label: 'chose here' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'ccc', label: 'or chose this' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_Radio2.default, { name: 'yyy', id: 'ddd', label: 'or this' })
              )))
            )
          )
        )
      );
    }
  }]);

  return RadioDemo;
}(_react.Component);

exports.default = RadioDemo;