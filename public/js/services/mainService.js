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

  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/products'
    });
  };
});
