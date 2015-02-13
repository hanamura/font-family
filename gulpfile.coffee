browserify = require 'browserify'
buffer     = require 'vinyl-buffer'
gulp       = require 'gulp'
rename     = require 'gulp-rename'
source     = require 'vinyl-source-stream'
uglify     = require 'gulp-uglify'

pkg = require './package'

gulp.task 'build', ->
  browserify entries: ['./export.js']
    .bundle()
    .pipe source pkg.name + '.js'
    .pipe buffer()
    .pipe gulp.dest '.'
    .pipe uglify()
    .pipe rename pkg.name + '.min.js'
    .pipe gulp.dest '.'

gulp.task 'watch', ['build'], ->
  gulp.watch ['index.js', 'export.js'], ['build']
