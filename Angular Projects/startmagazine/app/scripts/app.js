'use strict';


window.app = angular
	.module('MyApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ui.router',
		'ngSanitize',
		'rx',
		'LocalStorageModule'
	])

	//DEBUG configuration
	.config(function ($logProvider, $compileProvider) {
		$compileProvider.debugInfoEnabled(true); 
		$logProvider.debugEnabled(true);
	})
	//carambola config 
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('home', {
				url: '/',
				views: {
					"content@": {
						templateUrl: 'views/home.html',
						controller: 'HomeController'
					}
				}
			});
			$urlRouterProvider.otherwise('/');


	})
	.config(function ($httpProvider, $locationProvider) {
		$httpProvider.defaults.useXDomain = true;
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
			enabled: false,
			requireBase: true
		});
	})
	.run(function ($log) {
		$log.info('Application Started!');		
	});