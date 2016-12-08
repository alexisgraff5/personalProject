angular.module('nixonClone')
.controller('mensLeatherCtrl', function( $scope, mainService) {
    mainService.getWomensLeather().then(function(response){
      console.log(response.data);
      $scope.products = response.data;
    });
});
