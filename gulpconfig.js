var path = require('path');

module.exports = {
  basePath: '.',
  stylesheets: {
    processors: {
      'postcss-import': {},
      'postcss-mixins': {
        mixinsDir: path.join(__dirname, 'postcss', 'mixins')
      },
      'postcss-advanced-variables': {},
      'postcss-color-function': {},
      'postcss-extend': {},
      'postcss-nested': {},
      'autoprefixer': {
        browsers: ['last 3 versions']
      }
    }
  },
  cssInject: {
    target: 'THEME_NAME.libraries.yml',
    src: path.join('css', 'components', '**', '*.css')
  },
  notify: {
    successIcon: path.join(__dirname, 'gulp-tasks', 'images', 'success.png'),
    failedIcon: path.join(__dirname, 'gulp-tasks', 'images', 'failed.png'),
    errorIcon: path.join(__dirname, 'gulp-tasks', 'images', 'error.png')
  }
};
