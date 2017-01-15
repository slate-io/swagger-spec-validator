import globby from 'globby';
import gulp from 'gulp';
import swagger from 'swagger-parser';

process.env['SCHEMA_PATH'] = './specs';

gulp.task('validate', () => {
  var SCHEMA_PATH = getPath();
  var patterns = [`./${SCHEMA_PATH}/**/swagger.{json,yml,yaml}`];
  
  return globby(patterns).then((paths) => {
    return Promise.all(paths.map(validate))
      .then(pass)
      .catch(fail);
  });
});

gulp.task('default', ['validate']);

function validate(path) {
  return swagger.validate(path);
}

function pass(apis) {
  if (!apis)
    console.log('No swagger files found');

  var apiTitles = apis
                    .map((api) => {
                      return `${api.info.title} ${api.info.version}`})
                    .toString()
                    .replace(',', ' , ');

  console.log(`Swagger API Definition Passed \n\nAPIs Tested: ${apiTitles}`);
}

function fail(err) {
  throw new Error(err);
}

function getPath() {
  if (typeof process.env.SCHEMA_PATH !== 'string')
    throw new Error('env SCHEMA_PATH is not defined.');
  return process.env.SCHEMA_PATH;
}