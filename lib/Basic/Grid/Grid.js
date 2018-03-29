'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('!style-loader!css-loader!../../styles/Base.css');

require('!style-loader!css-loader!./GridDemo.css');

var _prism = require('react-syntax-highlighter/prism');

var _prism2 = _interopRequireDefault(_prism);

var _prism3 = require('react-syntax-highlighter/styles/prism');

var _App = require('./../../App.css');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var code = '<div class="container"> \n  <div class="row">\n    <div class="col-xs-3">\n      ...\n    </div>\n    <div class="col-xs-4">\n    ...\n    </div>\n    <div class="col-xs-3">\n    ...\n    </div>\n  </div>\n</div>\n';

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
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
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'Grid'
              )
            )
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
              { className: 'col-xs-12' },
              '.App__App have 100% width and 100% height',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'inside, you can have App__Static and App__Flex',
              _react2.default.createElement('br', null),
              ' ',
              _react2.default.createElement('br', null),
              'Static stay fixed and Flex is posible to scroll - Example : this page',
              _react2.default.createElement('br', null),
              ' ',
              _react2.default.createElement('br', null),
              'you can nest it using Flexcols or Flexrows - Example in Example/ExampleB'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row padding-20' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'Rows and columns'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              '.Row is parent everytime',
              _react2.default.createElement('br', null),
              ' ',
              _react2.default.createElement('br', null),
              'inside use columns ',
              _react2.default.createElement('br', null),
              ' ',
              _react2.default.createElement('br', null),
              '12 grid system or auto size col'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '\n  <div class="row">\n    <div class="col-xs-3">\n      ...\n    </div>\n    <div class="col-xs-4">\n    ...\n    </div>\n    <div class="col-xs-3">\n    ...\n    </div>\n  </div>\n'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'container color6 center' },
            _react2.default.createElement(
              'div',
              { className: 'row around-xs color5' },
              _react2.default.createElement(
                'div',
                { 'class': 'col-xs-12 center' },
                _react2.default.createElement(
                  'h3',
                  { className: 'h3' },
                  '.row'
                ),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'col-xs-3 color center' },
                '.col-xs-3',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h3',
                  { className: 'h3' },
                  'xs'
                ),
                _react2.default.createElement('br', null),
                '( for all size )'
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'col-xs-4 color center' },
                '.col-md-4 ',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h3',
                  { className: 'h3' },
                  'md'
                ),
                _react2.default.createElement('br', null),
                '( rewriting XS parameters when width is 640px + )',
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'col-xs-3 color center' },
                '.col-lg-3 ',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h3',
                  { className: 'h3' },
                  'lg'
                ),
                _react2.default.createElement('br', null),
                '( ... width 960px + )'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-12 padding-' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'class padding'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'columns have 10px left and 10px right padding bz default',
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'container and rows are without default padding',
                _react2.default.createElement('br', null),
                'you can add padding class '
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row around-xs">\n  <div class="col-xs-2 padding-5">\n    .padding-5 \n  </div>\n  <div class="col-xs-2 padding-10">\n    .padding-10 \n  </div>\n  <div class="col-xs-2 padding-15">\n    .padding-15 \n  </div>\n  <div class="col-xs-2 padding-20">\n    .padding-20 \n  </div>\n</div>\n'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row around-xs' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2 color7 padding-5' },
              '.padding-5'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2 color7 padding-10' },
              '.padding-10'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2 color7 padding-15' },
              '.padding-15'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2 color7 padding-20' },
              '.padding-20'
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
                'columns'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'resize window to see diference between xs md lg'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row">\n<div class="col-xs-8 col-md-4 col-lg-2">\n  col-xs-8 col-md-4 col-lg-2 \n</div>\n</div>\n<div class="row">\n<div class="col-xs-12 col-md-10 col-lg-6" >\n  col-xs-12 col-md-10 col-lg-6\n</div>\n</div>\n<div class="row">\n<div class="col-xs-6 col-md-8 col-lg-12" >\n  col-xs-6 col-md-8 col-lg-12\n</div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-8 col-md-4 col-lg-2 color padding-20' },
              'col-xs-8 col-md-4 col-lg-2'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-10 col-lg-6 color padding-20' },
              'col-xs-12 col-md-10 col-lg-6'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 col-md-8 col-lg-12 color padding-20' },
              'col-xs-6 col-md-8 col-lg-12'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'Offset'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row">\n  <div class="col-xs-offset-9 col-xs-3">\n    col-xs-offset-9 col-xs-3 \n  </div>\n  </div>\n\n  <div class="row">\n  <div class="col-xs-offset-6 col-xs-6">\n    col-xs-offset-6 col-xs-6\n  </div>\n  </div>\n\n  <div class="row">\n  <div class="col-xs-offset-3 col-xs-6">\n    col-xs-offset-3 col-xs-6\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-offset-9 col-xs-3 color padding-20 ' },
              'col-xs-offset-9 col-xs-3'
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-offset-6 col-xs-6 color padding-20 ' },
              'col-xs-offset-6 col-xs-6'
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-offset-3 col-xs-6 color padding-20 ' },
              'col-xs-offset-3 col-xs-6'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-12' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'Auto Width'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div className="row">\n  <div class="col-xs">\n    col-xs \n  </div>\n  <div class="col-xs">\n    col-xs \n  </div>\n  <div class="col-xs">\n    col-xs \n  </div>\n</div>\n\n<div className="row">\n  <div class="col-xs">\n    col-xs \n  </div>\n  <div class="col-xs">\n    col-xs \n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color3 padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color2 padding-20 ' },
              'col-xs'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color2 padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color2 padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color padding-20 ' },
              'col-xs'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs color2 padding-20 ' },
              'col-xs'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-12' },
              _react2.default.createElement(
                'h2',
                { className: 'h2' },
                'Alignment'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row start-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row start-xs">\n  <div class="col-xs-6">\n    .start-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row start-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3 padding-10 ' },
              '.start-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 ' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row center-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row center-xs">\n  <div class="col-xs-6">\n    .center-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row center-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3 padding-10' },
              '.center-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row end-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row end-xs">\n  <div class="col-xs-6">\n    .end-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row end-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3 padding-10' },
              '.end-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row top-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row top-xs">\n  <div class="col-xs-6">\n\n  ...\n  ...\n  ...\n\n  </div>\n  <div class="col-xs-6">\n    .top-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row top-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color2' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3 padding-10' },
              '.top-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row middle-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row middle-xs">\n  <div class="col-xs-6">\n\n  ...\n  ...\n  ...\n\n  </div>\n  <div class="col-xs-6">\n    .middle-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row middle-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color2' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3  padding-10' },
              '.middle-'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row bottom-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div className="row bottom-xs">\n  <div className="col-xs-6">\n\n  ...\n  ...\n  ...\n\n  </div>\n  <div className="col-xs-6">\n    .bottom-\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row bottom-xs color4' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color2' },
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 color3 padding-10' },
              '.bottom-'
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
                'Distribution'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row around-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row around-xs">\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row around-xs color4' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row between-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row between-xs">\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n  <div class="col-xs-2">\n    col-xs-2\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row between-xs color4' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              'col-xs-2'
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
                'Reordering'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'second .col-xs-2 have .first-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row around-xs">\n  <div class="col-xs-2">\n    1\n  </div>\n  <div class="col-xs-2 first-xs">\n    2\n  </div>\n  <div class="col-xs-2">\n    3\n  </div>\n  <div class="col-xs-2">\n    4\n  </div>\n  <div class="col-xs-2">\n    5\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row around-xs color4' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '1'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 first-xs color2' },
              '2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '3'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '4'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '5'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'second .col-xs-2 have .last-xs'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row">\n  <div class="col-xs-2">\n    1\n  </div>\n  <div class="col-xs-2 last-xs">\n    2\n  </div>\n  <div class="col-xs-2">\n    3\n  </div>\n  <div class="col-xs-2">\n    4\n  </div>\n  <div class="col-xs-2">\n    5\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row around-xs color4' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '1'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 last-xs color2 padding-10' },
              '2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '3'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '4'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '5'
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
                'Reversing'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'h3' },
                'div .row .reverse'
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
                _prism2.default,
                { language: 'jsx', style: _prism3.base16AteliersulphurpoolLight },
                '<div class="row reverse">\n  <div class="col-xs-2">\n    1\n  </div>\n  <div class="col-xs-2">\n    2\n  </div>\n  <div class="col-xs-2">\n    3\n  </div>\n  <div class="col-xs-2">\n    4\n  </div>\n  <div class="col-xs-2">\n    5\n  </div>\n</div>'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'row reverse around-xs color4' },
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '1'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '2'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '3'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '4'
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'col-xs-2 color3 padding-10' },
              '5'
            )
          )
        )
      );
    }
  }]);

  return Grid;
}(_react.Component);

exports.default = Grid;