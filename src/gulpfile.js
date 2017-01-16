import globby from 'globby';
import gulp from 'gulp';
import swagger from 'swagger-parser';

gulp.task('validate', () => {
  let patterns = [`/data/**/*.swagger.{json,yml,yaml}`];

  return globby(patterns).then(paths => {

    return Promise.all(paths.map(validate))
      .then(pass)
      .catch(fail);
  });
});

gulp.task('default', ['validate']);

function validate(path) {
  return swagger.validate(path);
}

function pass(specifications) {
  if (!specifications) { throw new Error('No swagger specifications found'); }

  let filenames = specifications
    .map(specification => {
      return `${specification.info.title} ${specification.info.version}`})
        .toString()
        .replace(',', ' , ');

  console.log(`Validation successful\n\nSpecifications tested: ${filenames}`);
}

function fail(err) {
  throw new Error(err);
}
