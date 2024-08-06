'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: ['./src/views/index.pug', './src/views/pages/*.pug'],
      dist: './dist/',
      watch: ['./src/blocks/**/*.pug', './src/views/**/*.pug'],
    },
    styles: {
      src: './src/assets/styles/main.{scss,sass}',
      dist: './dist/assets/styles/',
      watch: ['./src/blocks/**/*.{scss,sass}', './src/assets/styles/**/*.{scss,sass}'],
    },
    scripts: {
      src: './src/assets/js/index.js',
      dist: './dist/assets/js/',
      watch: ['./src/blocks/**/*.js', './src/assets/js/**/*.js'],
    },
    images: {
      src: [
        './src/assets/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
        '!./src/assets/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      ],
      dist: './dist/assets/img/',
      watch: './src/assets/img/**/*.{jpg,jpeg,png,gif,svg}',
    },
    video: {
      src: './src/assets/video/**/*',
      dist: './dist/assets/video/',
      watch: './src/assets/video/**/*',
    },
    sprites: {
      src: './src/assets/img/svg/*.svg',
      dist: './dist/assets/img/sprites/',
      watch: './src/assets/img/svg/*.svg',
    },
    fonts: {
      src: './src/assets/fonts/**/*.{woff,woff2}',
      dist: './dist/assets/fonts/',
      watch: './src/assets/fonts/**/*.{woff,woff2}',
    },
    favicons: {
      src: './src/assets/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './dist/assets/img/favicons/',
    },
    gzip: {
      src: './src/.htaccess',
      dist: './dist/',
    },
  };

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'scripts',
    'images',
    'video',
    'webp',
    'sprites',
    'fonts',
    'favicons',
  ]),
  gulp.parallel('serve')
);

export const prod = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'scripts',
    'images',
    'video',
    'webp',
    'sprites',
    'fonts',
    'favicons',
    'gzip',
  ])
);

export const deployFTP = gulp.series(
  gulp.parallel([
    'deployFTP'
  ])
);

export default development;
