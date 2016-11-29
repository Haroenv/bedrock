const browserSync = require('browser-sync');
const path = require('path');
const paths = require('../paths');
const config = require('../../bedrock.config');

module.exports = function () {
  return browserSync.init({
    logLevel: "debug",
    files: [
      path.join(paths.compiled.path, '**/*'),
      '!**/*.map',
      paths.content.templates.all,
      './core/templates/**/*.jade',
      paths.content.scss.colorsDefinition,
      paths.content.templates.data,
      paths.content.docs,
    ],
    ui: false,
    ghostMode: false,
    notify: false,
    proxy: `localhost:${global.expressPort}`
  });
};
