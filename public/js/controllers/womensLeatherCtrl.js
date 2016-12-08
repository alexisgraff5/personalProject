angular.module('nixonClone')
.controller('womensLeatherCtrl', function( $scope, mainService, $state) {
    mainService.getWomensLeather().then(function(response){
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
        case 'kenzi leather':
          state = 'kenzi-leather';
          break;
        case 'g.i. leather':
          state = 'gi-leather';
          break;
        default:
          return;
      }
      $state.go(state, {watches: watches});
    };
});
