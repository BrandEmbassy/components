'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!./../../styles/Base.css');

var _Header = require('./../../node_modules/components/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Breadcrumbs = require('./../../node_modules/components/Breadcrumbs/Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Table = require('./../../node_modules/components/Table/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Input = require('./../../node_modules/components/Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = require('./../../node_modules/components/Textarea/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Checkbox = require('./../../node_modules/components/Checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('./../../node_modules/components/Radio/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Button = require('./../../node_modules/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('./../../node_modules/components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Channel = require('./../../node_modules/components/Channel/Channel');

var _Channel2 = _interopRequireDefault(_Channel);

var _Notification = require('./../../node_modules/components/Notification/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _App = require('./../../App.css');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleB = function (_Component) {
  _inherits(ExampleB, _Component);

  function ExampleB() {
    _classCallCheck(this, ExampleB);

    return _possibleConstructorReturn(this, (ExampleB.__proto__ || Object.getPrototypeOf(ExampleB)).apply(this, arguments));
  }

  _createClass(ExampleB, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _App2.default.App },
        _react2.default.createElement(
          'div',
          { className: _App2.default.Static },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_Header2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _App2.default.Flexcols },
          _react2.default.createElement(
            'div',
            { className: _App2.default.Static },
            _react2.default.createElement(_Button2.default, { text: 'dadawdawdawda' })
          ),
          _react2.default.createElement(
            'div',
            { className: _App2.default.Flexrows },
            _react2.default.createElement(
              'div',
              { className: _App2.default.Static },
              _react2.default.createElement(_Header2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: _App2.default.Flex },
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' }),
              ' ',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null)
            )
          )
        )
      );
    }
  }]);

  return ExampleB;
}(_react.Component);

exports.default = ExampleB;