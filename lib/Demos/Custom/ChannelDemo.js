'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _Channel = require('./../../node_modules/components/Channel/Channel');

var _Channel2 = _interopRequireDefault(_Channel);

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

var ChannelDemo = function (_Component) {
  _inherits(ChannelDemo, _Component);

  function ChannelDemo() {
    _classCallCheck(this, ChannelDemo);

    return _possibleConstructorReturn(this, (ChannelDemo.__proto__ || Object.getPrototypeOf(ChannelDemo)).apply(this, arguments));
  }

  _createClass(ChannelDemo, [{
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
              'ChanelPicture'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Facebook'
            ),
            _react2.default.createElement(_Channel2.default, { Facebook: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Facebook: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
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
              '24px is default'
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
            ),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Facebook: true, Size60: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'DM'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              ' add class DM'
            ),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size60: true, DM: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size40: true, DM: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, DM: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size20: true, DM: true }),
            _react2.default.createElement(_Channel2.default, { Facebook: true, Size16: true, DM: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Facebook: true, DM: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Twitter'
            ),
            _react2.default.createElement(_Channel2.default, { Twitter: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Twitter: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Twitter: true }),
            _react2.default.createElement(_Channel2.default, { Twitter: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Twitter: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Twitter: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Instagram'
            ),
            _react2.default.createElement(_Channel2.default, { Instagram: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Instagram: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Instagram: true }),
            _react2.default.createElement(_Channel2.default, { Instagram: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Instagram: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Instagram: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Google'
            ),
            _react2.default.createElement(_Channel2.default, { Google: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Google: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Google: true }),
            _react2.default.createElement(_Channel2.default, { Google: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Google: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Google: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Youtube'
            ),
            _react2.default.createElement(_Channel2.default, { Youtube: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Youtube: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Youtube: true }),
            _react2.default.createElement(_Channel2.default, { Youtube: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Youtube: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Youtube: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Linkedin'
            ),
            _react2.default.createElement(_Channel2.default, { Linkedin: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Linkedin: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Linkedin: true }),
            _react2.default.createElement(_Channel2.default, { Linkedin: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Linkedin: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Linkedin: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Livechat'
            ),
            _react2.default.createElement(_Channel2.default, { Livechat: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Livechat: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Livechat: true }),
            _react2.default.createElement(_Channel2.default, { Livechat: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Livechat: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Livechat: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Email'
            ),
            _react2.default.createElement(_Channel2.default, { Email: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Email: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Email: true }),
            _react2.default.createElement(_Channel2.default, { Email: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Email: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Email: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Forum'
            ),
            _react2.default.createElement(_Channel2.default, { Forum: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Forum: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Forum: true }),
            _react2.default.createElement(_Channel2.default, { Forum: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Forum: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Forum: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Vkontakte'
            ),
            _react2.default.createElement(_Channel2.default, { Vkontakte: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Vkontakte: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Vkontakte: true }),
            _react2.default.createElement(_Channel2.default, { Vkontakte: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Vkontakte: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Vkontakte: true })))
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row padding-20' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 ' },
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Listening'
            ),
            _react2.default.createElement(_Channel2.default, { Listening: true, Size60: true }),
            _react2.default.createElement(_Channel2.default, { Listening: true, Size40: true }),
            _react2.default.createElement(_Channel2.default, { Listening: true }),
            _react2.default.createElement(_Channel2.default, { Listening: true, Size20: true }),
            _react2.default.createElement(_Channel2.default, { Listening: true, Size16: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              _prism2.default,
              { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
              _jsBeautify2.default.html((0, _server.renderToString)(_react2.default.createElement(_Channel2.default, { Listening: true })))
            )
          )
        )
      );
    }
  }]);

  return ChannelDemo;
}(_react.Component);

exports.default = ChannelDemo;