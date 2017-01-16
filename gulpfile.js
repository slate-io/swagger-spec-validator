'use strict';

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _swaggerParser = require('swagger-parser');

var _swaggerParser2 = _interopRequireDefault(_swaggerParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('validate', function () {
  var patterns = ['/data/**/*.swagger.{json,yml,yaml}'];

  return (0, _globby2.default)(patterns).then(function (paths) {

    return Promise.all(paths.map(validate)).then(pass).catch(fail);
  });
});

_gulp2.default.task('default', ['validate']);

function validate(path) {
  return _swaggerParser2.default.validate(path);
}

function pass(specifications) {
  if (!specifications) {
    throw new Error('No swagger specifications found');
  }

  var filenames = specifications.map(function (specification) {
    return specification.info.title + ' ' + specification.info.version;
  }).toString().replace(',', ' , ');

  console.log('Validation successful\n\nSpecifications tested: ' + filenames);
}

function fail(err) {
  throw new Error(err);
}
