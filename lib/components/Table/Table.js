'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Table = require('./Table.css');

var _Table2 = _interopRequireDefault(_Table);

var _Checkbox = require('./../Checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Link = require('./../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Table2.default);

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var Fixed = this.props.Fixed;


      var className = cx(_Table2.default.Table, {
        Fixed: Fixed
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement('th', null),
              _react2.default.createElement(
                'th',
                null,
                'Channel'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Delaying messages'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Default delay value'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Maximum delay value'
              ),
              _react2.default.createElement('th', null),
              _react2.default.createElement('th', null)
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Checkbox2.default, { name: 'nameA', id: 'xxx' })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'acc.socialmedia@homecredit.co.id'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                'test'
              ),
              _react2.default.createElement(
                'td',
                null,
                'testtest'
              ),
              _react2.default.createElement(
                'td',
                null,
                'testtesttest'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', Blue: true, text: 'Edit' })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash' })
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Checkbox2.default, { name: 'nameA', id: 'yyy' })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'acc.nevim@nevim.co.id'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                'test2131'
              ),
              _react2.default.createElement(
                'td',
                null,
                'testtest32'
              ),
              _react2.default.createElement(
                'td',
                null,
                'testtesttest31'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Link2.default, { Icon: 'be-icon-pencil', Blue: true, text: 'Edit' })
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(_Link2.default, { Icon: 'be-icon-trash' })
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _propTypes2.default.Array,
        Fixed: _propTypes2.default.boolean
      };
    }
  }]);

  return Table;
}(_react.Component);

exports.default = Table;