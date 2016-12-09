angular.module('nixonClone')
.controller('cartCtrl', function( $scope, mainService) {
    mainService.getCart().then(function(response){
      console.log(response.data);
      $scope.cart = response.data;
      totalCart();
    });

    $scope.removeItem = function(id) {
      mainService.removeItem(id).then(function(response){
        console.log(response.data);
        $scope.cart = response.data;
        totalCart();
      });
    };

    function totalCart() {
      $scope.total = 0;
      for (let i = 0; i < $scope.cart.length; i++) {
        $scope.total += $scope.cart[i].price;
      }
    }

    $scope.checkout = function() {
      mainService.checkout($scope.cart[0].orderid).then(function(response){
        $scope.cart  = response.data;
        totalCart();
      });
    };
  });
