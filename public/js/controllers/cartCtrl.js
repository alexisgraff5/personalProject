angular.module('nixonClone')
.controller('cartCtrl', function( $scope, mainService) {
    mainService.getCart().then(function(response){
      console.log(response.data);
      $scope.cart = response.data;
    });
  });
