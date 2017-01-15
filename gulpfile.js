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
    console.log(paths);
    return Promise.all(paths.map(validate)).then(pass).catch(fail);
  });
});

_gulp2.default.task('default', ['validate']);

function validate(path) {
  return _swaggerParser2.default.validate(path);
}

function pass(apis) {
  if (!apis) console.log('No swagger files found');

  var apiTitles = apis.map(function (api) {
    return api.info.title + ' ' + api.info.version;
  }).toString().replace(',', ' , ');

  console.log('Swagger API Definition Passed \n\nAPIs Tested: ' + apiTitles);
}

function fail(err) {
  throw new Error(err);
}
