'use strict';

angular.module('capecrossing', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('lifestyle', {
        url: '/lifestyle',
        templateUrl: 'app/lifestyle/lifestyle.html',
        controller: 'LifestyleCtrl'
      })
      .state('location', {
        url: '/location',
        templateUrl: 'app/location/location.html',
        controller: 'locationCtrl'
      })
      .state('residences', {
        url: '/residences',
        templateUrl: 'app/residences/residences.html',
        controller: 'residencesCtrl'
      })
      .state('rental', {
        url: '/rental',
        templateUrl: 'app/rental/rental.html',
        controller: 'rentalCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'contactCtrl'
      })
    ;//end
    $urlRouterProvider.otherwise('/');
  })
;
