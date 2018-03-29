'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!../../styles/Base.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typography = function (_Component) {
  _inherits(Typography, _Component);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  _createClass(Typography, [{
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
              'h1',
              { className: 'h1' },
              'Typohgraphy .h1'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'h2' },
              'Typohgraphy .h2'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'h3' },
              'Typohgraphy .h3'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'h4' },
              'Typohgraphy .h4'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'h2',
              { className: 'h2' },
              '.p'
            ),
            _react2.default.createElement(
              'p',
              { className: 'p' },
              'Paragraph Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus porttitor turpis ac leo. Nunc auctor. Vivamus porttitor turpis ac leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Mauris tincidunt sem sed arcu. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aliquam ante. Ut tempus purus at lorem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Donec quis nibh at felis congue commodo. Aliquam ante. Fusce nibh. Phasellus faucibus molestie nisl. Nullam eget nisl. Integer in sapien. Nunc dapibus tortor vel mi dapibus sollicitudin. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In dapibus augue non sapien.'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'h2' },
              '.justify'
            ),
            _react2.default.createElement(
              'p',
              { className: 'p justify' },
              'Etiam quis quam. In convallis. Praesent in mauris eu tortor porttitor accumsan. Pellentesque arcu. In rutrum. Aenean fermentum risus id tortor. Ut tempus purus at lorem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis condimentum augue id magna semper rutrum. Nulla non arcu lacinia neque faucibus fringilla. Fusce nibh. Etiam quis quam. In convallis. Praesent in mauris eu tortor porttitor accumsan. Pellentesque arcu. In rutrum. Aenean fermentum risus id tortor. Ut tempus purus at lorem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis condimentum augue id magna semper rutrum. Nulla non arcu lacinia neque faucibus fringilla. Fusce nibh.'
            )
          )
        )
      );
    }
  }]);

  return Typography;
}(_react.Component);

exports.default = Typography;