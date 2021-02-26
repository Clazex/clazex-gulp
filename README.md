# Clazex-gulp

> Extended gulp

## Usage

```bash
npm i -D @clazex/gulp
```

```javascript
// In your gulpfile

// Assume that `gulp-zip` is installed as a (dev)dependency

// const gulp = require("gulp")
const gulp = require("@clazex/gulp"); // Simply change the module to be required

module.exports = {
	default() {
		return gulp.src("src/**") // Use like original gulp but can also ...
			.pipe(gulp.plugins.zip()) // ... Get lazy-loaded plugins from gulp.plugins
			// .pipe(gulp.plugins.plumber()) // ... Be automatically `gulp-plumber`-ed
			.pipe(gulp.dest("dest/src.zip"));
	},

	copy() {
		return gulp._src("src/**") // Get unplumbered src() from gulp._src()
			.pipe(gulp._gulp.dest("dist")); // Get the original gulp from gulp._gulp
	}
};

/**
 * If you want to pass config to `gulp-load-plugins`, Use:
 * const gulp = require("@clazex/gulp").gulp({
 * 		loadPlugins: {
 * 			// Config here
 * 		}
 * });
 */
```
