'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Channel = require('./Channel.css');

var _Channel2 = _interopRequireDefault(_Channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// type Props = {
//   Facebook: string, 
//   Twitter: string, 
//   Instagram: string, 
//   Google: string, 
//   Youtube: string, 
//   Linkedin: string, 
//   Livechat: string, 
//   Email: string, 
//   Forum: string, 
//   Vkontakte: string, 
//   Listening: string, 
//   Size60: string, 
//   Size40: string, 
//   Size20: string, 
//   Size16: string, 
//   DM: string
// }

var cx = _bind2.default.bind(_Channel2.default);

var Picture = function (_Component) {
  _inherits(Picture, _Component);

  function Picture() {
    _classCallCheck(this, Picture);

    return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
  }

  _createClass(Picture, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Facebook = _props.Facebook,
          Twitter = _props.Twitter,
          Instagram = _props.Instagram,
          Google = _props.Google,
          Youtube = _props.Youtube,
          Linkedin = _props.Linkedin,
          Livechat = _props.Livechat,
          Email = _props.Email,
          Forum = _props.Forum,
          Vkontakte = _props.Vkontakte,
          Listening = _props.Listening,
          Size60 = _props.Size60,
          Size40 = _props.Size40,
          Size20 = _props.Size20,
          Size16 = _props.Size16,
          DM = _props.DM;


      var className = cx(_Channel2.default.Channel, {
        Facebook: Facebook,
        Twitter: Twitter,
        Instagram: Instagram,
        Google: Google,
        Youtube: Youtube,
        Linkedin: Linkedin,
        Livechat: Livechat,
        Email: Email,
        Forum: Forum,
        Vkontakte: Vkontakte,
        Listening: Listening,
        Size60: Size60,
        Size40: Size40,
        Size20: Size20,
        Size16: Size16,
        DM: DM
      });

      return _react2.default.createElement('div', { className: className });
    }
  }]);

  return Picture;
}(_react.Component);

exports.default = Picture;