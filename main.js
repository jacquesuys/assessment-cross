'use strict';

angular.module('crossApp', [])
  .controller('MainCtrl', function ($scope, $http) {
    // TODO needs to be a service
    $http({
      method: 'GET',
      url: 'data/data.json'
    }).then(function(resp) {
      $scope.tests = resp.data;
    });

    // TODO setup a directive
    $scope.isOpen = '';
    $scope.toggle = function($index) {
      $scope.isOpen = $index;
    };

    $scope.switch = false;
    $scope.lightbox = function() {
      $scope.switch = !$scope.switch;
    };
    
  });