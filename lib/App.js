'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./../src/Basic/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Typography = require('./../src/Basic/Typography/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Icons = require('./../src/Basic/Icons/Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _InputDemo = require('./Demos/Forms/InputDemo');

var _InputDemo2 = _interopRequireDefault(_InputDemo);

var _SelectboxDemo = require('./Demos/Forms/SelectboxDemo');

var _SelectboxDemo2 = _interopRequireDefault(_SelectboxDemo);

var _TextareaDemo = require('./Demos/Forms/TextareaDemo');

var _TextareaDemo2 = _interopRequireDefault(_TextareaDemo);

var _CheckboxDemo = require('./Demos/Forms/CheckboxDemo');

var _CheckboxDemo2 = _interopRequireDefault(_CheckboxDemo);

var _RadioDemo = require('./Demos/Forms/RadioDemo');

var _RadioDemo2 = _interopRequireDefault(_RadioDemo);

var _TableDemo = require('./Demos/Forms/TableDemo');

var _TableDemo2 = _interopRequireDefault(_TableDemo);

var _SubmitDemo = require('./Demos/Forms/SubmitDemo');

var _SubmitDemo2 = _interopRequireDefault(_SubmitDemo);

var _ButtonDemo = require('./Demos/Controls/ButtonDemo');

var _ButtonDemo2 = _interopRequireDefault(_ButtonDemo);

var _ButtonGroupDemo = require('./Demos/Controls/ButtonGroupDemo');

var _ButtonGroupDemo2 = _interopRequireDefault(_ButtonGroupDemo);

var _LinkDemo = require('./Demos/Controls/LinkDemo');

var _LinkDemo2 = _interopRequireDefault(_LinkDemo);

var _StatusesDemo = require('./Demos/Custom/StatusesDemo');

var _StatusesDemo2 = _interopRequireDefault(_StatusesDemo);

var _TagDemo = require('./Demos/Custom/TagDemo');

var _TagDemo2 = _interopRequireDefault(_TagDemo);

var _BreadcrumbsDemo = require('./Demos/Navigation/BreadcrumbsDemo');

var _BreadcrumbsDemo2 = _interopRequireDefault(_BreadcrumbsDemo);

var _DropdownDemo = require('./Demos/Navigation/DropdownDemo');

var _DropdownDemo2 = _interopRequireDefault(_DropdownDemo);

var _HeaderDemo = require('./Demos/Custom/HeaderDemo');

var _HeaderDemo2 = _interopRequireDefault(_HeaderDemo);

var _LabelDemo = require('./Demos/Custom/LabelDemo');

var _LabelDemo2 = _interopRequireDefault(_LabelDemo);

var _ChannelDemo = require('./Demos/Custom/ChannelDemo');

var _ChannelDemo2 = _interopRequireDefault(_ChannelDemo);

var _NotificationDemo = require('./Demos/Custom/NotificationDemo');

var _NotificationDemo2 = _interopRequireDefault(_NotificationDemo);

var _ProfilePictureDemo = require('./Demos/Custom/ProfilePictureDemo');

var _ProfilePictureDemo2 = _interopRequireDefault(_ProfilePictureDemo);

require('./styles/Base.css');

var _App = require('./App.css');

var _App2 = _interopRequireDefault(_App);

var _Button = require('components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Link = require('components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _ButtonGroup = require('components/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Switcher = require('components/Switcher');

var _Switcher2 = _interopRequireDefault(_Switcher);

var _Header = require('components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Dropdown = require('components/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Breadcrumbs = require('components/Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Channel = require('components/Channel');

var _Channel2 = _interopRequireDefault(_Channel);

var _Checkbox = require('components/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Input = require('components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Label = require('components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Notification = require('components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _ProfilePicture = require('components/ProfilePicture');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

var _Radio = require('components/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Selectbox = require('components/Selectbox');

var _Selectbox2 = _interopRequireDefault(_Selectbox);

var _Submit = require('components/Submit');

var _Submit2 = _interopRequireDefault(_Submit);

var _Table = require('components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Tag = require('components/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Textarea = require('components/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Statuses = require('components/Statuses');

var _Statuses2 = _interopRequireDefault(_Statuses);

var _Global = require('components/Global');

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
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
          { className: _App2.default.Flex },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs' },
              _react2.default.createElement(
                'b',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://localhost:6006' },
                  'Open'
                )
              ),
              ' component library'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs' },
              _react2.default.createElement(
                _Breadcrumbs2.default,
                null,
                _react2.default.createElement(_Button2.default, { Small: true, text: 'Add someting', Icon: 'be-icon-plus' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs' },
              _react2.default.createElement(_Table2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Form'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Input2.default, { label: 'Input text here', desc: 'description...' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Textarea2.default, { label: 'Textarea here', desc: 'description...' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-15' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-10' },
                  _react2.default.createElement(_Checkbox2.default, { name: 'nameA', id: 'aaa', label: 'label text here' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-10' },
                  _react2.default.createElement(_Checkbox2.default, { name: 'nameA', id: 'bbb', label: 'label text here' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-5' },
                  _react2.default.createElement(_Radio2.default, { name: 'nameB', id: 'C', label: 'male' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-5' },
                  _react2.default.createElement(_Radio2.default, { name: 'nameB', id: 'D', label: 'female' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-5' },
                  _react2.default.createElement(_Radio2.default, { name: 'nameB', id: 'E', label: 'apache helicopter' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Button2.default, { text: 'Send Form Wide', Wide: true })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Button2.default, { text: 'Send Form' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Links'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-plus', Green: true, text: 'Add' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', Blue: true, text: 'Edit' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash', text: 'Remove' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-mail', text: '' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-check', Green: true, text: '' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-more', text: '' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-search', Red: true, text: '' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 color4 padding-10' },
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-check', Green: true, text: '' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-more', Black: true, text: '' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-search', Red: true, text: 'search' }),
                  _react2.default.createElement(_Link2.default, { Icon: 'be-icon-mail', White: true, text: 'Mail' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Chanels'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Channel2.default, { Facebook: true, Size40: true, DM: true }),
                  _react2.default.createElement(_Channel2.default, { Instagram: true, Size40: true }),
                  _react2.default.createElement(_Channel2.default, { Twitter: true, Size40: true }),
                  _react2.default.createElement(_Channel2.default, { Livechat: true, Size40: true, DM: true })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Statuses'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Statuses2.default, { Orange: true, text: 'new' }),
                  _react2.default.createElement(_Statuses2.default, { Yellow: true, text: 'open' }),
                  _react2.default.createElement(_Statuses2.default, { Green: true, text: 'resolved' }),
                  _react2.default.createElement(_Statuses2.default, { Blue: true, text: 'pending' }),
                  _react2.default.createElement(_Statuses2.default, { Purple: true, text: 'escalated' }),
                  _react2.default.createElement(_Statuses2.default, { Red: true, text: 'closed' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Orange: true, text: 'new' }),
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Yellow: true, text: 'open' }),
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Green: true, text: 'resolved' }),
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Blue: true, text: 'pending' }),
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Purple: true, text: 'escalated' }),
                  _react2.default.createElement(_Statuses2.default, { Reversed: true, Red: true, text: 'closed' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Tags'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Tag2.default, { Red: true, text: 'Tag name' }),
                  _react2.default.createElement(_Tag2.default, { Yellow: true, text: 'Tag name' }),
                  _react2.default.createElement(_Tag2.default, { Turquoise: true, text: 'Tag name' }),
                  _react2.default.createElement(_Tag2.default, { Green: true, text: 'Tag name' }),
                  _react2.default.createElement(_Tag2.default, { LightBlue: true, text: 'Tag name' }),
                  _react2.default.createElement(_Tag2.default, { Blue: true, text: 'Tag name' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row padding-10' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Notification message'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row around-xs padding-20' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 background padding-20' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    'h3',
                    { className: 'h3' },
                    'Form'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(
                    _Label2.default,
                    { text: 'facebook channel label text here' },
                    _react2.default.createElement(_Channel2.default, { Facebook: true, Size40: true })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Input2.default, { label: 'Input text here', desc: 'description...' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Textarea2.default, { label: 'Input text here', desc: 'description...' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Button2.default, { text: 'Send Form Wide', Wide: true })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;