'use strict';

app
.factory("AuthenticationService", function($http, $location) {
  return {
    login: function(credentials) {
      var login = $http.get("/api/auth.json", credentials);
      // login.success(cacheSession);
      // login.success(FlashService.clear);
      // login.error(loginError);
      return login;
    },
    register: function(payload){
      var service = $http.get("/api/auth.json", payload);
      // login.success(cacheSession);
      // login.success(FlashService.clear);
      // login.error(loginError);
      return service;
    },
    logout: function() {
      var logout = $http.get("/api/auth.json");
      // logout.success(uncacheSession);
      return logout;
    },
    isLoggedIn: function() {
      return true;
    }
  };
});