'use strict';

angular.module('crossApp', [])
  .controller('MainCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'data/data.json'
    }).then(function(resp) {
      $scope.data = resp.data;
    });
  });