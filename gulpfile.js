'use strict';

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _swaggerParser = require('swagger-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env['SCHEMA_PATH'] = './specs';

_gulp2.default.task('validate', function () {
    var SCHEMA_PATH = getPath();
    var patterns = ['./' + SCHEMA_PATH + '/**/swagger.{json,yml,yaml}'];

    (0, _globby2.default)(patterns).then(function (paths) {
        Promise.all(paths.map(validate)).then(pass).catch(fail);
    });
});

_gulp2.default.task('default', ['validate']);

function validate(path) {
    return _swaggerParser.swagger.validate(path);
}

function pass() {
    console.log('Validation passed, schemas are valid');
}

function fail(err) {
    throw new Error(err);
}

function getPath() {
    if (typeof process.env.SCHEMA_PATH !== 'string') throw new Error('env SCHEMA_PATH is not defined.');
    return process.env.SCHEMA_PATH;
}
