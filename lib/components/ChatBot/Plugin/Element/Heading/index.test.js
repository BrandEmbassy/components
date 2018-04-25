'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Heading', function () {
  var levels = [1, 2, 3];

  levels.forEach(function (level) {
    it('should return heading with correct level ' + level, function () {
      var wrapper = shallow(_react2.default.createElement(_index2.default, { level: level }));
      epxect(wrapper).toMatchSnapshot();
    });
  });
});