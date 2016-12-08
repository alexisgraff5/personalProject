angular.module('nixonClone')
.controller('mensStainlessCtrl', function( $scope, mainService) {
    mainService.getWomensLeather().then(function(response){
      console.log(response.data);
      $scope.products = response.data;
    });
});
