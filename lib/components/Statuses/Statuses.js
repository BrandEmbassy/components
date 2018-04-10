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

var _Statuses = require('./Statuses.css');

var _Statuses2 = _interopRequireDefault(_Statuses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Statuses2.default);

var Statuses = function (_Component) {
  _inherits(Statuses, _Component);

  function Statuses() {
    _classCallCheck(this, Statuses);

    return _possibleConstructorReturn(this, (Statuses.__proto__ || Object.getPrototypeOf(Statuses)).apply(this, arguments));
  }

  _createClass(Statuses, [{
    key: 'render',


    // renderText() {
    //   const { status } = this.props;
    //   if (!status) {
    //     return null;
    //   } else {
    //     return "dwadwada";
    //   // return <FormattedMessage id={`${status}`} defaultMessage="Default value if translation is not available" />
    //   // return `${status}` ;
    //  };

    value: function render() {
      var _props = this.props,
          New = _props.New,
          Open = _props.Open,
          Resolved = _props.Resolved,
          Pending = _props.Pending,
          Escalated = _props.Escalated,
          Closed = _props.Closed,
          Trashed = _props.Trashed,
          Reversed = _props.Reversed;


      var className = cx(_Statuses2.default.Statuses, {
        New: New,
        Open: Open,
        Resolved: Resolved,
        Pending: Pending,
        Escalated: Escalated,
        Closed: Closed,
        Trashed: Trashed,
        Reversed: Reversed
      });

      return _react2.default.createElement('div', { className: className });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        text: _propTypes2.default.string,
        New: _propTypes2.default.boolean,
        Open: _propTypes2.default.boolean,
        Resolved: _propTypes2.default.boolean,
        Pending: _propTypes2.default.boolean,
        Escalated: _propTypes2.default.boolean,
        Closed: _propTypes2.default.boolean,
        Trashed: _propTypes2.default.boolean,
        Reversed: _propTypes2.default.boolean
        // status: string
      };
    }
  }]);

  return Statuses;
}(_react.Component);

exports.default = Statuses;