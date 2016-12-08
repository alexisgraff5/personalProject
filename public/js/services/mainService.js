angular.module('nixonClone')
.service('mainService', function($http ) {
  this.user = {};

  this.loginUser = function(email, password) {
    return $http({
      url: '/login',
      method: 'POST',
      data: {
        email: email,
        password: password
    }});
  };

  this.setUser = function(user) {
    this.user = user;
    console.log(this.user);
  };

  this.getMensWatches = function() {
    return $http({
      method: 'GET',
      url: '/mens-watches'
    });
  };

  this.getMensLeather = function() {
    return $http({
      method: 'GET',
      url: '/mens-material-leather'
    });
  };

  this.getMensStainless = function() {
    return $http({
      method: 'GET',
      url: '/mens-material-stainless'
    });
  };

  this.getMensSilicone = function() {
    return $http({
      method: 'GET',
      url: '/mens-material-silicone'
    });
  };

  this.getWomensWatches = function() {
    return $http({
      method: 'GET',
      url: '/womens-watches'
    });
  };

  this.getWomensLeather = function() {
    return $http({
      method: 'GET',
      url: '/womens-material-leather'
    });
  };

  this.getWomensStainless = function() {
    return $http({
      method: 'GET',
      url: '/womens-material-stainless'
    });
  };

  this.getWomensNylon = function() {
    return $http({
      method: 'GET',
      url: '/womens-material-nylon'
    });
  };

});
