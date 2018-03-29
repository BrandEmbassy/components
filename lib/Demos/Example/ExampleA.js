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

var _Label = require('./../../node_modules/components/Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Notification = require('./../../node_modules/components/Notification/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Statuses = require('./../../node_modules/components/Statuses/Statuses');

var _Statuses2 = _interopRequireDefault(_Statuses);

var _Tag = require('./../../node_modules/components/Tag/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _App = require('./../../App.css');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleA = function (_Component) {
  _inherits(ExampleA, _Component);

  function ExampleA(props) {
    _classCallCheck(this, ExampleA);

    var _this = _possibleConstructorReturn(this, (ExampleA.__proto__ || Object.getPrototypeOf(ExampleA)).call(this, props));

    _this.renderNotif = function () {
      if (_this.state.ShowNotif) {
        return _react2.default.createElement(_Notification2.default, { isRed: true, text: 'button was pressed here here hrere' });
      }
      return null;
    };

    _this.renderNotifFix = function () {
      if (_this.state.ShowNotifFix) {
        return _react2.default.createElement(_Notification2.default, { Fixed: true, isRed: true, text: 'button was pressed here here hrere' });
      }
      return null;
    };

    _this.state = {
      ShowNotif: false,
      ShowNotifFix: false
    };
    return _this;
  }

  _createClass(ExampleA, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            this.renderNotifFix()
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
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_Textarea2.default, { rows: '12', label: 'Input text here', desc: 'description...' })
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
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  this.renderNotif()
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15 center' },
                  _react2.default.createElement(_Button2.default, { Small: true, text: 'Show notification on click',
                    onClick: function onClick(e) {
                      e.stopPropagation();
                      _this2.setState({ ShowNotif: !_this2.state.ShowNotif });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 padding-15' },
                  _react2.default.createElement(_Button2.default, { Small: true, Wide: true, text: 'Show Fix notification on click',
                    onClick: function onClick(e) {
                      e.stopPropagation();
                      _this2.setState({ ShowNotifFix: !_this2.state.ShowNotifFix });
                    } })
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

  return ExampleA;
}(_react.Component);

exports.default = ExampleA;