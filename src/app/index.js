'use strict';

angular.module("capecrossing", ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'duParallax'])
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
        controller: 'LocationCtrl'
      })
      .state('residences', {
        url: '/residences',
        templateUrl: 'app/residences/residences.html',
        controller: 'ResidencesCtrl'
      })
      .state('rental', {
        url: '/rental',
        templateUrl: 'app/rental/rental.html',
        controller: 'RentalCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
    ;//end
    $urlRouterProvider.otherwise('/');
  })
;
