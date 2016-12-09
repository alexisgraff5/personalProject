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
  };

  this.addToCart = function(product) {
    return $http({
      method: 'POST',
      url: '/cart',
      data: {
        product: product,
        user: this.user.id
      }
    });
  };

  this.getCart = function() {
    return $http({
      method: 'GET',
      url: '/cart/' + this.user.id
    });
  };

  this.removeItem = function(id) {
    return $http({
      method: 'DELETE',
      url: '/cart/' + this.user.id + '/' + id
    });
  };

  this.checkout = function(orderId) {
    return $http({
      method: 'PUT',
      url: '/cart/' + this.user.id + '/' + orderId
    });
  };

  this.getMensWatches = function() {
    return $http({
      method: 'GET',
      url: '/mens-watches'
    });
  };

  this.getMensComp = function() {
    return $http({
      method: 'GET',
      url: '/mens-comp'
    });
  };

  this.getMensCorp = function() {
    return $http({
      method: 'GET',
      url: '/mens-corp'
    });
  };

  this.getMensDriver = function() {
    return $http({
      method: 'GET',
      url: '/mens-driver'
    });
  };

  this.getMensRollo = function() {
    return $http({
      method: 'GET',
      url: '/mens-rollo'
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

  this.getWomensKenzi = function() {
    return $http({
      method: 'GET',
      url: '/womens-kenzi'
    });
  };

  this.getWomensGi = function() {
    return $http({
      method: 'GET',
      url: '/womens-gi'
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
