angular.module('nixonClone').directive('addToCartDirective', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      product: '='
    },
    template: '<button class="cart-btn" ng-click="addToCart(product)">Add to Cart</button>',
    controller: function($scope, mainService) {
      $scope.addToCart = product => {
        mainService.addToCart(product).then(response => {
          console.log(response.data);
        });
      };
      }
    };
  });
