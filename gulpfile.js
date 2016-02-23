var gulp    = require('gulp');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var plumber = require('gulp-plumber');
var babel   = require('gulp-babel');
// var notify  = require('gulp-notify');
// var run     = require('run-sequence');


gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss',['sass']);
	gulp.watch('js/**/*.js',['js']);
});

gulp.task('sass', function()
{
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass({
				// includePaths : [require("bourbon").includePaths],
				// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
				outputStyle  : 'compact',
			}))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('js', function()
{
	gulp.src([
			'bower_components/moment/min/moment-with-locales.min.js',
			'bower_components/*/*.min.js',
		])
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./public/js'));

	gulp.src(['js/main.js', 'js/*/*.js'])
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify({
			output: {
				beautify     : true,
				indent_level : 2,
			}
		}))
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['sass', 'js']);
