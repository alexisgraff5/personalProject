angular.module('nixonClone')
.controller('womensStainlessCtrl', function( $scope, mainService, $state) {
    mainService.getWomensStainless().then(function(response){
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
        case 'g.i. ss':
          state = 'gi-stainless';
          break;
        default:
          return;
      }
      $state.go(state, {watches: watches});
    };
});
