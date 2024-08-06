var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
 
gulp.task( 'deployFTP', function () {
 
  var conn = ftp.create({
    host: 'partner202.beget.tech',
    user: 'partner202_np',
    password: 'O&5Q3r1r',
    parallel: 10,
    log: gutil.log
  });

  var globs = [
    './dist/**'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src(globs, { base: './dist', buffer: false })
    //.pipe( conn.newer( '/public_html' ) ) // only upload newer files
    .pipe(conn.dest('/'));

});