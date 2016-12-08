angular.module('nixonClone')
.controller('mensWatchesCtrl', function( $scope, mainService, $location ) {
    mainService.getMensWatches().then(function(response){
      console.log(response.data);
      $scope.products = response.data;
    });
});
