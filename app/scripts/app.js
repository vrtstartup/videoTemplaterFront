'use strict';

/**
 * @ngdoc overview
 * @name videoTemplaterFrontApp
 * @description
 * # videoTemplaterFrontApp
 *
 * Main module of the application.
 */


angular
    .module('videoTemplaterFrontApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ngFileSaver',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'ngFileUpload',
        'ngSanitize',
        'cfp.hotkeys'

    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/subtitles', {
                templateUrl: 'views/subtitles.html',
                controller: 'SubtitlesCtrl',
                controllerAs: 'subtitles'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function(hotkeysProvider) {
        hotkeysProvider.useNgRoute = false;
    });
