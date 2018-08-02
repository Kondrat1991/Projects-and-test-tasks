'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var openURL = require('open');
var fs = require('fs');
var url = require('url');
var lazypipe = require('lazypipe');
var del = require('del');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var path = require('path');
var _ = require('lodash');

var DEBUG = false;
var now = new Date();

var startMagazine = {
	app: require('./bower.json').appPath || 'app',
	dist: 'dist',
	tmp: '.tmp'
};

var args = new Set(_.map(_.tail(_.tail(process.argv)), _.toLower));

var buildDesktop = args.has('--desktop');
console.info('+ Building Mobile Magazine');
if (buildDesktop) {
	console.info('+ Building Desktop Magazine');
}

var paths = {
	config: {
		dist: [startMagazine.app + '/magazine.config.json'],
		qa: [startMagazine.app + '/magazine.config.qa.json']
	},
	scripts: [startMagazine.app + '/scripts/**/*.js'],
	styles: [startMagazine.app + '/styles/**/*.css', startMagazine.app + '/scripts/**/*.css'],
	views: {
		main: buildDesktop ? [startMagazine.app + '/index.html', startMagazine.app + '/desktop.html'] : startMagazine.app + '/index.html',
		main_tmp: buildDesktop ? [startMagazine.tmp + '/index.html', startMagazine.tmp + '/desktop.html'] : startMagazine.tmp + '/index.html',
		files: [startMagazine.app + '/**/*.html', '!'+startMagazine.app+'/*.html', '!'+startMagazine.app+'/bower_components/**']
	}
};

var getCss2JsOptions = function(nameOfStyle){
	var prefix    = 'Styles[\''+nameOfStyle+'\']="';
	var suffix = '";'+'\n' ;
    return { trimSpacesBeforeNewline: true, trimTrailingNewline: true, splitOnNewline: false, prefix: prefix, suffix: suffix };

};


function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

////////////////////////
// Reusable pipelines //
////////////////////////

var lintScripts = lazypipe()
	.pipe($.jshint, '.jshintrc')
	//.pipe($.jshint.reporter, 'jshint-default')
	//.pipe($.jshint.reporter, 'jshint-fail')
	.pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
	.pipe($.autoprefixer, 'last 10 version')
	.pipe(gulp.dest, '.tmp/styles')
	.pipe($.concat, 'all_styles.css')
	//.pipe($.css2js, getCss2JsOptions('all.css'))
	//.pipe($.rename, {extname: '.js'});

var config = lazypipe()
	.pipe($.ngConfig, 'StartMagazineConfig')
	.pipe(gulp.dest, '.tmp/scripts/');


///////////
// Tasks //
///////////

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe(styles())
		.pipe(gulp.dest(startMagazine.tmp+'/styles/'));
});

gulp.task('styles:serve', ['styles'], function () {
	return gulp.src([startMagazine.tmp+'/styles/all_styles.css'])
		.pipe($.css2js(getCss2JsOptions('all.css')))
		.pipe($.rename({extname: '.js'}))
		.pipe(gulp.dest(startMagazine.tmp+'/scripts/'));
});

gulp.task('styles:dist', ['styles'],function () {
  	return gulp.src([startMagazine.tmp+'/styles/all_styles.css'])
		.pipe($.minifyCss({cache: true}))
		.pipe($.css2js(getCss2JsOptions('all.css')))
		.pipe($.rename({extname: '.js'}))
		.pipe(gulp.dest(startMagazine.tmp+'/scripts/'));
});

gulp.task('lint:scripts', function () {
	return gulp.src(paths.scripts)
		.pipe(lintScripts());
});

gulp.task('clean:tmp', del.bind(null, ['./.tmp']));

gulp.task('start:client', ['start:server', 'styles:serve', 'templateCache', 'config:dist', 'include'], function () {
	//openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['.tmp', 'app'],
			middleware: (req, res, next) => {
				var fileName = url.parse(req.url);
				fileName = fileName.href.split(fileName.search).join("");
				var fileExists = fs.existsSync('.tmp' + fileName);
				var fileExists = fileExists || fs.existsSync('app' + fileName);
				if (!fileExists && (fileName.indexOf("browser-sync-client")) < 0) {
					var res = fileName.split('/sandboxed');
				}
				fileName = (res.length > 1 && res[1] !== '') ? res[1] : fileName;
				req.url = fileName;
				next();
			},
			routes: {
				'/bower_components': 'bower_components',
			}
		}
	});

});

gulp.task('start:server:test', function() {
	browserSync({
		notify: false,
		port: 9001,
		server: {
			baseDir: ['test', '.tmp', 'app'],
			middleware: (req, res, next) => {
				var fileName = url.parse(req.url);
				fileName = fileName.href.split(fileName.search).join("");
				var fileExists = fs.existsSync('.tmp' + fileName);
				var fileExists = fileExists || fs.existsSync('app' + fileName);
				if (!fileExists && (fileName.indexOf("browser-sync-client")) < 0) {
					var res = fileName.split('/sandboxed');
				}
				fileName = (res.length > 1 && res[1] !== '') ? res[1] : fileName;
				req.url = fileName;
				next();
			},
			routes: {
				'/bower_components': 'bower_components',
			}
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([startMagazine.app + '/desktop.html', startMagazine.app + '/index*'], ['include']).on('change', browserSync.reload);
	gulp.watch(paths.styles, ['styles:serve']).on('change', browserSync.reload);
	gulp.watch(paths.views.files, ['templateCache']).on('change', browserSync.reload);
	gulp.watch(paths.scripts, ['lint:scripts']).on('change', browserSync.reload);
	gulp.watch(paths.config.dist, ['configGen']).on('change', browserSync.reload);
	gulp.watch('bower.json', ['bower']);

});

gulp.task('serve', function (cb) {
	runSequence('clean:tmp',
		['lint:scripts'],
		['start:client'],
		['watch'], cb);
});

gulp.task('serve:prod', function() {
	$.connect.server({
		root: [startMagazine.dist],
		livereload: true,
		port: 9000
	});
});

gulp.task('serve:dist', function() {
	runSequence('serve:prod');
});




gulp.task('bower', function () {
	return gulp.src(paths.views.main)
		.pipe($.if(DEBUG, $.debug()))
		.pipe(wiredep({
			directory: startMagazine.app + '/bower_components',
			ignorePath: '..'
		}))
		.pipe(gulp.dest(startMagazine.app));
});

gulp.task('templateCache', function() {
	return gulp.src(paths.views.files)
		.pipe($.angularTemplatecache({
			module: 'templates',
			transformUrl: function(url) {
				//url = 'views/'+url;
				return url;
			}
		}))
		.pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('clean:dist', del.bind(null, ['./dist']));

gulp.task('include', function() {
	return gulp.src(paths.views.main)
		.pipe($.include()).on('error', console.log)
		.pipe(gulp.dest(startMagazine.tmp));
});

gulp.task('include-assets:dist', function() {
	return gulp.src([startMagazine.app+'/index-*.*', startMagazine.app+'/index.css'])
		.pipe($.if('*.css', $.minifyCss({cache: true})))
		.pipe($.if('*.js', $.babel()))
		.pipe($.if('*.js', $.uglify()).on('error', function(e) { console.log('\x07', e.message, e); return this.end(); }))
		.pipe(gulp.dest(startMagazine.tmp));
});

gulp.task('include:dist', ['include-assets:dist'], function() {
	return gulp.src(paths.views.main)
		.pipe($.include({
			hardFail: true,
			includePaths: [
				__dirname + "/.tmp"
			]
		}))
		.pipe(gulp.dest(startMagazine.tmp));
});

//Converts components html to js
gulp.task('themes:styles', () => {
	var folders = getFolders(startMagazine.app+'/themes');
	var tasks = folders.map(function (folder) {
		var absPath = path.join(startMagazine.app + '/themes', folder, '/');
		return gulp.src([absPath + 'styles/**/*.css'])
			.pipe($.if(DEBUG, $.debug()))
			.pipe($.minifyCss({cache: true}))
			.pipe($.autoprefixer('last 10 versions'))
			.pipe(gulp.dest(startMagazine.dist + '/themes/' + folder +'/styles/'));
	});
	return merge(tasks);
})

//Converts components html to js
gulp.task('themes:assets', () => {
	var folders = getFolders(startMagazine.app+'/themes');
	var tasks = folders.map(function (folder) {
		var absPath = path.join(startMagazine.app + '/themes', folder, '/');
		return gulp.src([absPath + 'assets/**/*.*'])
			.pipe($.if(DEBUG, $.debug()))
			.pipe($.imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			}))
			.pipe(gulp.dest(startMagazine.dist + '/themes/' + folder +'/assets/'));
	});
	return merge(tasks);
})


//Converts components html to js
gulp.task('themes:fonts', () => {
	var folders = getFolders(startMagazine.app+'/themes');
	var tasks = folders.map(function (folder) {
		var absPath = path.join(startMagazine.app + '/themes', folder, '/');
		return gulp.src([absPath + 'fonts/**/*'])
			.pipe(gulp.dest(startMagazine.dist + '/themes/' + folder + '/fonts/'));
	});
	return merge(tasks);
})



gulp.task('themes:dist', function() {
	runSequence(['themes:styles', 'themes:assets', 'themes:fonts']);
});


gulp.task('client:build', ['styles:dist', 'bower', 'include:dist', 'templateCache'], function () {
	var jsFilter = $.filter(['**/*.js', '!scripts/magazine.config.js']);
	var cssFilter = $.filter(['**/*.css', '!styles/desktop.css']);
	var htmlFilter = $.filter(['**/*.html', '*.html']);
	var assets = $.useref.assets({searchPath: [startMagazine.app, '.tmp']});
	return gulp.src(paths.views.main_tmp)
		.pipe(assets)
		.pipe($.sourcemaps.init())
		.pipe(jsFilter)
		.pipe($.if(DEBUG, $.debug()))
		.pipe($.ngAnnotate())
		.pipe($.if('**/scripts.js', $.babel()))
		.pipe($.if('**/desktop-scripts.js', $.babel()))
		.pipe($.uglify().on('error', function(e) { console.log('\x07', e.message, e); return this.end(); }))
		.pipe(jsFilter.restore())
		.pipe(cssFilter)
		.pipe($.minifyCss({cache: true}))
		.pipe(cssFilter.restore())
		.pipe($.rev())
		.pipe(assets.restore())
		.pipe($.revReplace())
		.pipe($.useref())
		.pipe(htmlFilter)
		.pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe(htmlFilter.restore())
		.pipe($.sourcemaps.write('./maps/'))
		.pipe(gulp.dest(startMagazine.dist));
});

gulp.task('html', function () {
	return gulp.src(startMagazine.app + '/views/**/*')
		.pipe(gulp.dest(startMagazine.dist + '/views'));
});

gulp.task('images', function () {
	return gulp.src(startMagazine.app + '/assets/**/*')
		.pipe($.if(DEBUG, $.debug()))
		.pipe($.imagemin({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(startMagazine.dist + '/assets'));
});

gulp.task('copy:extras', /*['copy:3rdparty'], */ function () {
	return gulp.src([
		startMagazine.app + '/*/.*',
		startMagazine.app+'/404.html',
		startMagazine.app+'/unsupported.html',
		startMagazine.app+'/robots.txt',
		startMagazine.app+'/favicon.ico',
		startMagazine.app+'/manifest.json',
		startMagazine.app+'/demos.html',
		startMagazine.app+'/ads.txt'

	], { dot: true })
		.pipe($.if(DEBUG, $.debug()))
		.pipe(gulp.dest(startMagazine.dist));
});

gulp.task('copy:3rdparty', function () {
	return gulp.src([startMagazine.app + '/scripts/3rd_party/*.*'], { dot: true })
		.pipe($.if(DEBUG, $.debug()))
		.pipe(gulp.dest(startMagazine.dist+'/scripts/3rd_party/'));
});

gulp.task('copy:fonts', function () {
	return gulp.src(startMagazine.app + '/fonts/**/*')
		.pipe($.if(DEBUG, $.debug()))
		.pipe(gulp.dest(startMagazine.dist + '/fonts'));
});

gulp.task('configGen', function() {
	return gulp.src(paths.config.dist).pipe(config());
});


gulp.task('config:dist', ['configGen'], function() {
	return gulp.src('.tmp/scripts/magazine.config.js')
		.pipe($.if(DEBUG, $.debug()))
		.pipe($.replace('@@now', now))
		.pipe(gulp.dest('.tmp/scripts/'));
});


gulp.task('build', ['clean:dist'], function () {
	runSequence(['images', 'csvToJson', 'translation:update', 'copy:extras', 'copy:fonts', 'config:dist', 'themes:dist', 'client:build', 'generate-service-worker:dist']);
});

gulp.task('generate-service-worker:dist:video', function () {
	return gulp.src(startMagazine.app+'/extern/video.js')
		.pipe($.sourcemaps.init())
		.pipe($.if(DEBUG, $.debug()))
		.pipe($.babel())
		.pipe($.uglify().on('error', function(e) { console.log('\x07', e.message, e); return this.end(); }))
		.pipe($.sourcemaps.write('./maps/'))
		.pipe(gulp.dest(startMagazine.dist+'/extern/'));
});

gulp.task('zip', ['images', 'copy:extras', 'copy:fonts', 'config:dist', 'client:build', 'generate-service-worker:dist'], function () {
	return gulp.src([startMagazine.dist + '/**/*', '!'+startMagazine.dist + '/maps/**'])
		.pipe($.zip('magazine.latest.zip'))
		.pipe(gulp.dest(startMagazine.dist));
});


gulp.task('build:qa', ['clean:dist'], function () {
	runSequence(['images', 'copy:extras', 'copy:fonts', 'config:qa', 'client:build']);
});

gulp.task('generate-service-worker', ['images', 'copy:extras', 'copy:fonts', 'config:dist', 'client:build'] , function(callback) {
	var path = require('path');
	var wbBuild = require('workbox-build');

    wbBuild.generateSW({
        swDest: path.join(startMagazine.tmp, 'service-worker.js'),
    	globPatterns: [
			'./assets/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff,otf}',
			'./fonts/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff,otf}',
			'./scripts/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff,otf}'
      // startMagazine.dist + '/index.html'

    ],
        templatedUrls: {
            '/': ['./index.html'],
            '/feed/**/*': ['./index.html'],
            '/article/**/*': ['./index.html'],
            '/reading-list/**/*': ['./index.html'],
            //365
        },
		// navigateFallback: '/index.html',
		// navigateFallbackWhitelist: [/^\/feed\//, /^\/article\//, /^\/reading-list\//, /^\/365\//],
		// stripPrefix: startMagazine.dist+'/',
        globDirectory: startMagazine.dist+'/',
	    //replacePrefix: '.',
	    runtimeCaching: [
	    // 	{
	    //   urlPattern: /^\/feed\//,
	    //   handler: 'network-first',
	    //   options: {
	    //     cache: {
	    //       name: 'runtime-page-cache'
	    //     }
	    //   }
	    // },
			{
	      urlPattern: /mediaApi\/v1.0\/publisher/,
	      handler: 'fastest',
	      options: {
	        cache: {
	          maxEntries: 1,
	          maxAgeSeconds: 60*60*24*14,
	          name: 'runtime-settings-cache'
	        }
	      }
	    },
	    {
	      urlPattern: /mediaApi\/v1.0\/(?:content)|(?:category)/,
	      handler: 'fastest',
	      options: {
	        cache: {
	          maxAgeSeconds: 60*60,
	          name: 'runtime-content-cache'
	        }
	      }
	    } 
	    ],
	}, callback);
});

gulp.task('generate-service-worker:dist', ['generate-service-worker'] , function() {
	return gulp.src(startMagazine.tmp+'/service-worker.js')
		.pipe($.sourcemaps.init())
		//.pipe($.uglify())
		.pipe($.sourcemaps.write('./maps/'))
		.pipe(gulp.dest(startMagazine.dist));
});



gulp.task('translation:update', ['csvToJson'], function() {

	var languageCodes = {};

	var translationFileName = './dist/translations.json';

	fs.readFile(translationFileName, function (err, data) {

		var dataObj = false;

		dataObj = JSON.parse(data,null,2);

		if (!dataObj) console.log('Trnaslation: cannot parse file data to JSON');
		else {

			let filesData = [];

			Object.keys(dataObj).forEach(function (key) {


				if (dataObj[key]['Key']) {

					Object.keys(dataObj[key]).forEach(function (lang) {

						let rawVal = dataObj[key][lang].replace(/[\n\r]/g,' ');
						let value = (rawVal.indexOf('"') > -1 ? "'" : '"') +
							rawVal +
							(rawVal.indexOf('"') > -1 ? "'" : '"') +
							",\n";

						let rawKey = dataObj[key]['Key'];
						let valKey = (rawKey.indexOf('"') > -1 ? "'" : '"') +
							rawKey +
							(rawKey.indexOf('"') > -1 ? "': " : '": ');

						if (rawKey === 'LANGUAGE_CODE') {
							if (rawVal !== 'NONE' && lang !== 'Key') languageCodes[lang] = rawVal;
						} else {
							let dataToWrite = "\t" + valKey + value;
							filesData[lang] = (lang in filesData ? filesData[lang] + dataToWrite : dataToWrite);
						}
					});
				}
			});



			Object.keys(filesData).forEach(function (lang) {

				(function work(lang) {
					if (lang in languageCodes) {

						let fileName = './app/scripts/locale/translations_' + languageCodes[lang] + '.js';

						if (fs.existsSync(fileName)) {

							fs.unlinkSync(fileName);
						} else {
							console.log('language file not found: ' + lang);
						}

						let data = "translation['" + languageCodes[lang] + "'] = {\n" +
							filesData[lang].substr(0,filesData[lang].length-2) + "\n};";

						fs.appendFileSync(fileName, data);


					}
					else {
						//console.log('language not found: ' + lang);
					}
				})(lang);
			});

		}
	});

});

gulp.task('csvToJson', function () {
	return gulp.src('./app/scripts/locale/translations.csv')
		.pipe(csv2json({}))
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
