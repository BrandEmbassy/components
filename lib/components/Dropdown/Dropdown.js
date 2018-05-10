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

var _Dropdown = require('./Dropdown.css');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownToggle = require('./../DropdownToggle/DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = require('./../DropdownMenu/DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_Dropdown2.default);

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'handleClick',
    value: function handleClick() {
      // console.log('handleclick');
      if (!this.props.isOpen) {
        // attach/remove event handler
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }

      this.props.toggleDropdown();
    }
  }, {
    key: 'handleOutsideClick',
    value: function handleOutsideClick(e) {
      // ignore clicks on the component itself
      if (this.refs.test.contains(e.target)) {
        return;
      }

      this.handleClick();
    }
  }, {
    key: 'getToggleComponent',
    value: function getToggleComponent(children) {
      return children.filter(function (child) {
        return child.type.name === 'DropdownToggle';
      })[0];
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;


      if (!this.props.isOpen) {
        return null;
      }

      return _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        children
      );
    }
  }, {
    key: 'renderToggle',
    value: function renderToggle() {
      if (!Number.isInteger(this.props.selectedItem)) {
        return this.props.toggleDefault;
      }

      return this.props.children[this.props.selectedItem];
    }
  }, {
    key: 'render',
    value: function render() {
      var styleName = this.props.styleName;

      var className = cx(_Dropdown2.default.Dropdown, styleName);

      return _react2.default.createElement(
        'div',
        { className: className, onClick: this.handleClick, ref: 'test' },
        _react2.default.createElement(
          _DropdownToggle2.default,
          { isOpen: this.props.isOpen },
          this.renderToggle()
        ),
        this.renderChildren()
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _propTypes2.default.Array,
        styleName: _propTypes2.default.string
      };
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;