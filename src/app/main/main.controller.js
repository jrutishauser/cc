'use strict';

angular.module('capecrossing')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 3500;
    $scope.slides = [
      {
        image: 'assets/images/cc_web_rendering_home.jpg'
      },
      {
        image: 'assets/images/couple_enjoy_happy_hour.jpg'
      },
      {
        image: 'assets/images/egret_flying.jpg'
      },
      {
        image: 'assets/images/girl_in_sauna.jpg'
      },
      {
        image: 'assets/images/kids_swimming.jpg'
      },
      {
        image: 'assets/images/man_fishing.jpg'
      },
      {
        image: 'assets/images/man_kayaking.jpg'
      },
      {
        image: 'assets/images/manatee_smiling.jpg'
      },
      {
        image: 'assets/images/senior_couple.jpg'
      },
      {
        image: 'assets/images/woman_in_pool_w_hat.jpg'
      }
    ];
  });
