angular.module('nixonClone')
.controller('productViewCtrl', function( $scope, mainService, $stateParams) {
  $scope.watches = $stateParams.watches;
  $scope.selectedWatch = $scope.watches.watches[0];
  $scope.changeView = view => {
    $scope.watches.largeView = view;
  };
  $scope.changeWatch = watch => {
    $scope.selectedWatch = watch;
    $scope.watches.largeView = watch.view1;
  };
});
