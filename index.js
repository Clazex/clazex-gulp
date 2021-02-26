const _gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");

function gulp({ loadPlugins = {} } = {}) {
	const plugins = gulpLoadPlugins(loadPlugins);
	
	return {
		..._gulp,
		src: (...args) => _gulp.src(...args)
			.pipe(plugins.plumber()),
		_src: _gulp.src,
		plugins,
		_gulp
	};
}

module.exports = gulp();

module.exports.gulp = gulp;
