var gulp = require( "gulp" );
var cssnano = require( "gulp-cssnano" );
var rename = require( "gulp-rename" );
var sass = require( "gulp-sass" );
var sourcemap = require( "gulp-sourcemaps" );

gulp.task( "default",
	function defaultTask( ){
		return gulp
			.src( "./_text-size.scss" )
			.pipe( rename( "text-size.scss" ) )
			.pipe( sass( ) )
			.pipe( gulp.dest( "./" ) )
			.pipe( sourcemap.init( ) )
			.pipe( rename( "text-size.min.css" ) )
			.pipe( cssnano( ) )
			.pipe( sourcemap.write( "." ) )
			.pipe( gulp.dest( "./" ) );
	} );
