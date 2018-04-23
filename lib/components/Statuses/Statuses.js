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
    key: 'renderText',
    value: function renderText() {
      var status = this.props.status;

      //   // return <FormattedMessage id={`${status}`} defaultMessage="Default value if translation is not available" />

      if (!status) {
        return "empty";
      } else {
        return '' + status;
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          styleName = _props.styleName,
          Reversed = _props.Reversed,
          status = _props.status;


      var className = cx(_Statuses2.default.Statuses, styleName, {
        Reversed: Reversed,
        New: status === "New",
        Open: status === "Open",
        Resolved: status === "Resolved",
        Pending: status === "Pending",
        Escalated: status === "Escalated",
        Closed: status === "Closed",
        Trashed: status === "Trashed"
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderText()
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        text: _propTypes2.default.string,
        status: _propTypes2.default.string,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return Statuses;
}(_react.Component);

exports.default = Statuses;