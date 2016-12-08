angular.module('nixonClone')
.controller('womensNylonCtrl', function( $scope, mainService) {
    mainService.getWomensLeather().then(function(response){
      console.log(response.data);
      $scope.products = response.data;
    });
});
