const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        config: './.eslintrc.js',
      },
      src: [ '.' ],
    },
    stylelint: {
      options: {
        configFile: './.stylelintrc.json',
      },
      src: [ './app/css/**/*.scss' ],
    },
    webpack: {
      prod: webpackConfig,
    },
  });

  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('test', [ 'eslint', 'stylelint' ]);
  grunt.registerTask('build', [ 'webpack' ]);
  grunt.registerTask('default', [ 'eslint', 'stylelint', 'webpack' ]);
};
