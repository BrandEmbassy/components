'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!../../styles/Base.css');

var _Icons = require('./Icons.css');

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = function (_Component) {
  _inherits(Icons, _Component);

  function Icons() {
    _classCallCheck(this, Icons);

    return _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).apply(this, arguments));
  }

  _createClass(Icons, [{
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
              'div',
              { className: _Icons2.default.Icons },
              _react2.default.createElement('div', { className: 'be-icon-arrows' }),
              _react2.default.createElement('div', { className: 'be-icon-trash' }),
              _react2.default.createElement('div', { className: 'be-icon-pencil' }),
              _react2.default.createElement('div', { className: 'be-icon-check' }),
              _react2.default.createElement('div', { className: 'be-icon-cross' }),
              _react2.default.createElement('div', { className: 'be-icon-more' }),
              _react2.default.createElement('div', { className: 'be-icon-plus' }),
              _react2.default.createElement('div', { className: 'be-icon-mail' }),
              _react2.default.createElement('div', { className: 'be-icon-linkedin' }),
              _react2.default.createElement('div', { className: 'be-icon-youtube' }),
              _react2.default.createElement('div', { className: 'be-icon-facebook' }),
              _react2.default.createElement('div', { className: 'be-icon-twitter' }),
              _react2.default.createElement('div', { className: 'be-icon-messenger' }),
              _react2.default.createElement('div', { className: 'be-icon-gplus' }),
              _react2.default.createElement('div', { className: 'be-icon-livechat' }),
              _react2.default.createElement('div', { className: 'be-icon-forum' }),
              _react2.default.createElement('div', { className: 'be-icon-copy' }),
              _react2.default.createElement('div', { className: 'be-icon-long-arrow-left' }),
              _react2.default.createElement('div', { className: 'be-icon-vk' }),
              _react2.default.createElement('div', { className: 'be-icon-search' }),
              _react2.default.createElement('div', { className: 'be-icon-calendar-o' }),
              _react2.default.createElement('div', { className: 'be-icon-calendar' }),
              _react2.default.createElement('div', { className: 'be-icon-refresh' }),
              _react2.default.createElement('div', { className: 'be-icon-reply' }),
              _react2.default.createElement('div', { className: 'be-icon-external-link' }),
              _react2.default.createElement('div', { className: 'be-icon-download' }),
              _react2.default.createElement('div', { className: 'be-icon-user-secret' }),
              _react2.default.createElement('div', { className: 'be-icon-users' }),
              _react2.default.createElement('div', { className: 'be-icon-link' }),
              _react2.default.createElement('div', { className: 'be-icon-info-circle' }),
              _react2.default.createElement('div', { className: 'be-icon-spinner' }),
              _react2.default.createElement('div', { className: 'be-icon-arrow-right' }),
              _react2.default.createElement('div', { className: 'be-icon-arrow-down' }),
              _react2.default.createElement('div', { className: 'be-icon-icon-insta' }),
              _react2.default.createElement('div', { className: 'be-icon-activity' }),
              _react2.default.createElement('div', { className: 'be-icon-flags' }),
              _react2.default.createElement('div', { className: 'be-icon-foods' }),
              _react2.default.createElement('div', { className: 'be-icon-people' }),
              _react2.default.createElement('div', { className: 'be-icon-recent' }),
              _react2.default.createElement('div', { className: 'be-icon-symbols' }),
              _react2.default.createElement('div', { className: 'be-icon-places' }),
              _react2.default.createElement('div', { className: 'be-icon-nature' }),
              _react2.default.createElement('div', { className: 'be-icon-objects' }),
              _react2.default.createElement('div', { className: 'be-icon-expand' }),
              _react2.default.createElement('div', { className: 'be-icon-inbox' }),
              _react2.default.createElement('div', { className: 'be-icon-pending' }),
              _react2.default.createElement('div', { className: 'be-icon-starred' }),
              _react2.default.createElement('div', { className: 'be-icon-life-ring' }),
              _react2.default.createElement('div', { className: 'be-icon-sec-settings' }),
              _react2.default.createElement('div', { className: 'be-icon-arrow-left' }),
              _react2.default.createElement('div', { className: 'be-icon-resolved' }),
              _react2.default.createElement('div', { className: 'be-icon-sec-care' }),
              _react2.default.createElement('div', { className: 'be-icon-sec-crm' }),
              _react2.default.createElement('div', { className: 'be-icon-escalated' }),
              _react2.default.createElement('div', { className: 'be-icon-sec-reports' }),
              _react2.default.createElement('div', { className: 'be-icon-plus-1' }),
              _react2.default.createElement('div', { className: 'be-icon-flag' }),
              _react2.default.createElement('div', { className: 'be-icon-envelope' }),
              _react2.default.createElement('div', { className: 'be-icon-logout' }),
              _react2.default.createElement('div', { className: 'be-icon-be-symbol' }),
              _react2.default.createElement('div', { className: 'be-icon-lock' }),
              _react2.default.createElement('div', { className: 'be-icon-icon-dm' }),
              _react2.default.createElement('div', { className: 'be-icon-sec-engage' }),
              _react2.default.createElement('div', { className: 'be-icon-icon-cross' }),
              _react2.default.createElement('div', { className: 'be-icon-phone' }),
              _react2.default.createElement('div', { className: 'be-icon-video-camera' }),
              _react2.default.createElement('div', { className: 'be-icon-volume-off' }),
              _react2.default.createElement('div', { className: 'be-icon-volume-up' }),
              _react2.default.createElement('div', { className: 'be-icon-icon-minimize' }),
              _react2.default.createElement('div', { className: 'be-icon-zendesk' }),
              _react2.default.createElement('div', { className: 'be-icon-tag' }),
              _react2.default.createElement('div', { className: 'be-icon-sentiment' }),
              _react2.default.createElement('div', { className: 'be-icon-reply-2' }),
              _react2.default.createElement('div', { className: 'be-icon-random' }),
              _react2.default.createElement('div', { className: 'be-icon-repeat' }),
              _react2.default.createElement('div', { className: 'be-icon-alert' }),
              _react2.default.createElement('div', { className: 'be-icon-long-arrow-right' }),
              _react2.default.createElement('div', { className: 'be-icon-api' }),
              _react2.default.createElement('div', { className: 'be-icon-chevron-down' }),
              _react2.default.createElement('div', { className: 'be-icon-copy-1' }),
              _react2.default.createElement('div', { className: 'be-icon-drag-hor' }),
              _react2.default.createElement('div', { className: 'be-icon-drag-vert' }),
              _react2.default.createElement('div', { className: 'be-icon-gallery' }),
              _react2.default.createElement('div', { className: 'be-icon-menu' }),
              _react2.default.createElement('div', { className: 'be-icon-play' }),
              _react2.default.createElement('div', { className: 'be-icon-quick-replies' }),
              _react2.default.createElement('div', { className: 'be-icon-quit' }),
              _react2.default.createElement('div', { className: 'be-icon-redirect' }),
              _react2.default.createElement('div', { className: 'be-icon-store' }),
              _react2.default.createElement('div', { className: 'be-icon-text' }),
              _react2.default.createElement('div', { className: 'be-icon-multi-audio' }),
              _react2.default.createElement('div', { className: 'be-icon-multi-file' }),
              _react2.default.createElement('div', { className: 'be-icon-multi-image' }),
              _react2.default.createElement('div', { className: 'be-icon-multi-video' }),
              _react2.default.createElement('div', { className: 'be-icon-male' }),
              _react2.default.createElement('div', { className: 'be-icon-file' }),
              _react2.default.createElement('div', { className: 'be-icon-paperclip' }),
              _react2.default.createElement('div', { className: 'be-icon-exclamation-triangle' }),
              _react2.default.createElement('div', { className: 'be-icon-download-1' }),
              _react2.default.createElement('div', { className: 'be-icon-external-link-square' }),
              _react2.default.createElement('div', { className: 'be-icon-livechat-2' }),
              _react2.default.createElement('div', { className: 'be-icon-rating-1' }),
              _react2.default.createElement('div', { className: 'be-icon-rating-2' }),
              _react2.default.createElement('div', { className: 'be-icon-rating-3' }),
              _react2.default.createElement('div', { className: 'be-icon-rating-5' }),
              _react2.default.createElement('div', { className: 'be-icon-thumb-down' }),
              _react2.default.createElement('div', { className: 'be-icon-thumb-up' }),
              _react2.default.createElement('div', { className: 'be-icon-close-big' }),
              _react2.default.createElement('div', { className: 'be-icon-chevron-right' }),
              _react2.default.createElement('div', { className: 'be-icon-chevron-left' }),
              _react2.default.createElement('div', { className: 'be-icon-emoji' }),
              _react2.default.createElement('div', { className: 'be-icon-be-logo' }),
              _react2.default.createElement('div', { className: 'be-icon-rating-4' }),
              _react2.default.createElement('div', { className: 'be-icon-arrow-drop' }),
              _react2.default.createElement('div', { className: 'be-icon-file-drop' }),
              _react2.default.createElement('div', { className: 'be-icon-enlarge' }),
              _react2.default.createElement('div', { className: 'be-icon-mail-1' }),
              _react2.default.createElement('div', { className: 'be-icon-agent' }),
              _react2.default.createElement('div', { className: 'be-icon-moon' }),
              _react2.default.createElement('div', { className: 'be-icon-livechat-off' }),
              _react2.default.createElement('div', { className: 'be-icon-plug' })
            )
          )
        )
      );
    }
  }]);

  return Icons;
}(_react.Component);

exports.default = Icons;