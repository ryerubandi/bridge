'use strict';

angular.module('bridgeApp')
  .controller('RegistrationController', function($scope, $window, AuthenticationService) {
    $scope.user = {
      fname: '',
      lname: '',
      email: '',
      company: '',
      accountType: 'startup'
    };
    $scope.register = function() {
      if ($scope.registerForm.$valid) {
        AuthenticationService
          .register($scope.user)
          .success(function() {
            $window.alert('Registration Completed!');
          });
        $scope.user = {
          fname: '',
          lname: '',
          email: '',
          company: '',
          accountType: 'startup'
        };
      }
    };
  });