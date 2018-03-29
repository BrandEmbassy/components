'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _Link = require('./../../node_modules/components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

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

var LinkDemo = function (_Component) {
  _inherits(LinkDemo, _Component);

  function LinkDemo() {
    _classCallCheck(this, LinkDemo);

    return _possibleConstructorReturn(this, (LinkDemo.__proto__ || Object.getPrototypeOf(LinkDemo)).apply(this, arguments));
  }

  _createClass(LinkDemo, [{
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
              'Link'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', text: 'edit' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', text: 'edit' })))
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
              'h2',
              { className: 'h2' },
              'Blue'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20 ' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', Blue: true, text: 'edit' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash', Blue: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', Blue: true, text: 'edit' })))
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
              'h2',
              { className: 'h2' },
              'white'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20 color' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', White: true, text: 'edit' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash', White: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', White: true, text: 'edit' })))
            )
          )
        )
      );
    }
  }]);

  return LinkDemo;
}(_react.Component);

exports.default = LinkDemo;