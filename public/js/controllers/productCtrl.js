angular.module('nixonClone')
.controller('productCtrl', function( $scope, mainService, $location ) {
    mainService.getProducts().then(function(response){
      console.log(response.data);
      $scope.products = response.data;
    });
});
