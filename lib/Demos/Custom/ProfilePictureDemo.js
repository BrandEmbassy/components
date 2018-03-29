'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _ProfilePicture = require('./../../node_modules/components/ProfilePicture/ProfilePicture');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

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

var ProfilePictureDemo = function (_Component) {
  _inherits(ProfilePictureDemo, _Component);

  function ProfilePictureDemo() {
    _classCallCheck(this, ProfilePictureDemo);

    return _possibleConstructorReturn(this, (ProfilePictureDemo.__proto__ || Object.getPrototypeOf(ProfilePictureDemo)).apply(this, arguments));
  }

  _createClass(ProfilePictureDemo, [{
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
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'h2',
              { className: 'h2' },
              'Profile Pic'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Size'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'for 60px use class Size60'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'for 40px use class Size40'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              '32px is default'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'for 24px use class Size24'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'for 20px use class Size20'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'for 16px use class Size16'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' },
            _react2.default.createElement(_ProfilePicture2.default, { Size60: true }),
            _react2.default.createElement(_ProfilePicture2.default, { Size40: true }),
            _react2.default.createElement(_ProfilePicture2.default, null),
            _react2.default.createElement(_ProfilePicture2.default, { Size24: true }),
            _react2.default.createElement(_ProfilePicture2.default, { Size20: true }),
            _react2.default.createElement(_ProfilePicture2.default, { Size16: true })
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
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_ProfilePicture2.default, { Size24: true })))
            )
          )
        )
      );
    }
  }]);

  return ProfilePictureDemo;
}(_react.Component);

exports.default = ProfilePictureDemo;