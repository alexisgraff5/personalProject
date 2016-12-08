angular.module('nixonClone')
.controller('mensLeatherCtrl', function( $scope, mainService, $state) {
    mainService.getMensLeather().then(function(response){
      let products = response.data;
      $scope.products = {};
      for (let i = 0; i < products.length; i++) {
        if ($scope.products[products[i].name]) {
          $scope.products[products[i].name].watches.push(products[i]);
        } else {
          $scope.products[products[i].name] = {
            largeView: products[i].view1,
            watches: [products[i]]
          };

        }
      }

    });

    $scope.showView = (group, view) => {
      group.largeView = view;
    };

    $scope.viewProduct = (name, watches) => {
      let state;
      switch (name) {
        case 'rollo leather':
          state = 'rollo';
          break;
        case 'driver leather':
          state = 'driver-leather';
          break;
        default:
          return;
      }
      $state.go(state, {watches: watches});
    };
});
