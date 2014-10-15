# Fiddlify

Gulp helper for kxFiddle (no intentions to `npm publish` this module)

*Example usage*
```javascript
var gulp = require('gulp'),
	fiddlify = require('gulp-fiddlify');

gulp.task('default', function() {
	return gulp.src('./examples-dir/**/*.*')
		.pipe(fiddlify())
		.pipe(gulp.dest('./output-dir'));
});
```
