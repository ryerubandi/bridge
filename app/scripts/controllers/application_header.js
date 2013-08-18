'use strict';

app.controller('ApplicationHeaderController', function($scope, $window, AuthenticationService, USER) {
  $scope.user = USER;
  $scope.logout = function() {
    AuthenticationService
      .logout()
      .success(function() {
        $window.location = "/index.html";
      });
  };
});