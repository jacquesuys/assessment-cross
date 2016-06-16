'use strict';

angular.module('crossApp', [])
  .controller('MainCtrl', function ($scope, $http) {
    // needs to be a service
    $http({
      method: 'GET',
      url: 'data/data.json'
    }).then(function(resp) {
      $scope.tests = resp.data;
    });

    $scope.isOpen = '';

    $scope.toggle = function($index) {
      $scope.isOpen = $index;
    };

  });