'use strict';

angular.module('bridgeApp')
  .controller('LoginController', function($scope, $window, AuthenticationService) {
    $scope.credentials = {
      email: '',
      password: ''
    };
    $scope.login = function() {
      if ($scope.loginForm.$valid) {
        AuthenticationService
          .login($scope.credentials)
          .success(function() {
            $window.location = '/dashboard.html';
          });
        $scope.credentials = {
          email: '',
          password: ''
        };
      }
    };
  });