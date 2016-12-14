'use strict';

angular.module('nixonClone', ['ui.router']).config(function ($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  }).state('mens-watches', {
    url: '/mens-watches',
    templateUrl: './views/mens/mensWatches.html',
    controller: 'mensWatchesCtrl'
  }).state('driver', {
    url: '/mens-driver',
    templateUrl: './views/mens/driver/driverSearch.html',
    controller: 'mensDriverCtrl'
  }).state('comp', {
    url: '/mens-comp',
    templateUrl: './views/mens/comp/compSearch.html',
    controller: 'mensCompCtrl'
  }).state('corporal', {
    url: '/mens-corporal',
    templateUrl: './views/mens/corporal/corpSearch.html',
    controller: 'mensCorpCtrl'
  }).state('rollo', {
    url: '/mens-rollo',
    templateUrl: './views/mens/rollo/rolloSearch.html',
    controller: 'mensRolloCtrl'
  }).state('mens-bands', {
    url: '/mens-band-material',
    templateUrl: './views/mens/bands/mensBandMaterial.html',
    controller: 'mensWatchesCtrl'
  }).state('mens-band-stainless', {
    url: '/mens-material-stainless',
    templateUrl: './views/mens/bands/mensStainlessSearch.html',
    controller: 'mensStainlessCtrl'
  }).state('mens-band-leather', {
    url: '/mens-material-leather',
    templateUrl: './views/mens/bands/mensLeatherSearch.html',
    controller: 'mensLeatherCtrl'
  }).state('mens-band-silicone', {
    url: '/mens-material-silicone',
    templateUrl: './views/mens/bands/mensSiliconeSearch.html',
    controller: 'mensSiliconeCtrl'
  }).state('comp-s', {
    url: '/mens-comp-s',
    templateUrl: './views/mens/comp/compTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('corporal-ss', {
    url: '/mens-corporal-ss',
    templateUrl: './views/mens/corporal/corporalTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('rollo-leather', {
    url: '/mens-rollo-leather',
    templateUrl: './views/mens/rollo/rolloTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('driver-leather', {
    url: '/mens-driver-leather',
    templateUrl: './views/mens/driver/driverLeatherTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('driver-ss', {
    url: '/mens-driver-stainless',
    templateUrl: './views/mens/driver/driverSsTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('womens-watches', {
    url: '/womens-watches',
    templateUrl: './views/womens/womensWatches.html',
    controller: 'womensWatchesCtrl'
  }).state('kenzi', {
    url: '/womens-kenzi',
    templateUrl: './views/womens/kenzi/kenziSearch.html',
    controller: 'womensKenziCtrl'
  }).state('gi', {
    url: '/womens-gi',
    templateUrl: './views/womens/gi/giSearch.html',
    controller: 'womensGiCtrl'
  }).state('womens-bands', {
    url: '/womens-band-material',
    templateUrl: './views/womens/bands/womensBandMaterial.html',
    controller: 'womensWatchesCtrl'
  }).state('womens-band-stainless', {
    url: '/womens-material-stainless',
    templateUrl: './views/womens/bands/womensStainlessSearch.html',
    controller: 'womensStainlessCtrl'
  }).state('womens-band-leather', {
    url: '/womens-material-leather',
    templateUrl: './views/womens/bands/womensLeatherSearch.html',
    controller: 'womensLeatherCtrl'
  }).state('womens-band-nylon', {
    url: '/womens-material-nylon',
    templateUrl: './views/womens/bands/womensNylonSearch.html',
    controller: 'womensNylonCtrl'
  }).state('kenzi-leather', {
    url: '/womens-kenzi-leather',
    templateUrl: './views/womens/kenzi/kenziTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('gi-leather', {
    url: '/womens-gi-leather',
    templateUrl: './views/womens/gi/giLeatherTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('gi-nylon', {
    url: '/womens-gi-nylon',
    templateUrl: './views/womens/gi/giNylonTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('gi-stainless', {
    url: '/womens-gi-stainless',
    templateUrl: './views/womens/gi/giSsTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  }).state('cart', {
    url: '/cart',
    templateUrl: './views/cart.html',
    controller: 'cartCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('nixonClone').controller('cartCtrl', function ($scope, mainService) {
  mainService.getCart().then(function (response) {
    console.log(response.data);
    $scope.cart = response.data;
    totalCart();
  });

  $scope.removeItem = function (id) {
    mainService.removeItem(id).then(function (response) {
      console.log(response.data);
      $scope.cart = response.data;
      totalCart();
    });
  };

  function totalCart() {
    $scope.total = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      $scope.total += $scope.cart[i].price;
    }
  }

  $scope.checkout = function () {
    mainService.checkout($scope.cart[0].orderid).then(function (response) {
      $scope.cart = response.data;
      totalCart();
      swal({
        title: "CheckOut",
        text: "Checkout Complete",
        type: "success",
        confirmButtonText: "Awesome"
      });
    });
  };
});
'use strict';

angular.module('nixonClone').controller('mainCtrl', function ($scope, mainService) {

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var login = document.getElementById('exit');

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $scope.loginUser = function () {
    mainService.loginUser($scope.emailLogin, $scope.passwordLogin).then(function (response) {
      $scope.user = response.data[0];
      console.log(response);
      mainService.setUser($scope.user);
      if (response.data.length > 0) {
        modal.style.display = "none";
      } else {
        swal({
          title: "Error!",
          text: "Incorrect email or password. Please try again.",
          type: "error",
          confirmButtonText: "Cool"
        });
      }
    });
  };

  $scope.registerUser = function () {
    console.log("Fired login");
    mainService.registerUser($scope.user).then(function (response) {
      $scope.user = response.data[0];
      swal({
        title: "Registered!",
        text: "Thank you for registering, please login to continue",
        type: "success",
        confirmButtonText: "Cool"
      });
    });
  };
});
'use strict';

angular.module('nixonClone').controller('mensCompCtrl', function ($scope, mainService, $state) {
  mainService.getMensComp().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'comp s':
        state = 'comp-s';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensCorpCtrl', function ($scope, mainService, $state) {
  mainService.getMensCorp().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'corporal ss':
        state = 'corporal-ss';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensDriverCtrl', function ($scope, mainService, $state) {
  mainService.getMensDriver().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'driver leather':
        state = 'driver-leather';
        break;
      case 'driver ss':
        state = 'driver-ss';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensLeatherCtrl', function ($scope, mainService, $state) {
  mainService.getMensLeather().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'rollo leather':
        state = 'rollo-leather';
        break;
      case 'driver leather':
        state = 'driver-leather';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensRolloCtrl', function ($scope, mainService, $state) {
  mainService.getMensRollo().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'rollo leather':
        state = 'rollo-leather';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensSiliconeCtrl', function ($scope, mainService, $state) {
  mainService.getMensSilicone().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'comp s':
        state = 'comp-s';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensStainlessCtrl', function ($scope, mainService, $state) {
  mainService.getMensStainless().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'corporal ss':
        state = 'corporal-ss';
        break;
      case 'driver ss':
        state = 'driver-ss';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('mensWatchesCtrl', function ($scope, mainService, $state) {
  mainService.getMensWatches().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'corporal ss':
        state = 'corporal-ss';
        break;
      case 'rollo leather':
        state = 'rollo-leather';
        break;
      case 'comp s':
        state = 'comp-s';
        break;
      case 'driver leather':
        state = 'driver-leather';
        break;
      case 'driver ss':
        state = 'driver-ss';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('productViewCtrl', function ($scope, mainService, $stateParams) {
  $scope.watches = $stateParams.watches;
  $scope.selectedWatch = $scope.watches.watches[0];
  $scope.changeView = function (view) {
    $scope.watches.largeView = view;
  };
  $scope.changeWatch = function (watch) {
    $scope.selectedWatch = watch;
    $scope.watches.largeView = watch.view1;
  };
});
'use strict';

angular.module('nixonClone').controller('womensGiCtrl', function ($scope, mainService, $state) {
  mainService.getWomensGi().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'g.i. leather':
        state = 'gi-leather';
        break;
      case 'g.i. ss':
        state = 'gi-stainless';
        break;
      case 'g.i. nylon':
        state = 'gi-nylon';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('womensKenziCtrl', function ($scope, mainService, $state) {
  mainService.getWomensKenzi().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'kenzi leather':
        state = 'kenzi-leather';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('womensLeatherCtrl', function ($scope, mainService, $state) {
  mainService.getWomensLeather().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
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
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('womensNylonCtrl', function ($scope, mainService, $state) {
  mainService.getWomensNylon().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'g.i. nylon':
        state = 'gi-nylon';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('womensStainlessCtrl', function ($scope, mainService, $state) {
  mainService.getWomensStainless().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'g.i. ss':
        state = 'gi-stainless';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').controller('womensWatchesCtrl', function ($scope, mainService, $state) {
  mainService.getWomensWatches().then(function (response) {
    var products = response.data;
    $scope.products = {};
    for (var i = 0; i < products.length; i++) {
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

  $scope.showView = function (group, view) {
    group.largeView = view;
  };

  $scope.viewProduct = function (name, watches) {
    var state = void 0;
    switch (name) {
      case 'kenzi leather':
        state = 'kenzi-leather';
        break;
      case 'g.i. leather':
        state = 'gi-leather';
        break;
      case 'g.i. ss':
        state = 'gi-stainless';
        break;
      case 'g.i. nylon':
        state = 'gi-nylon';
        break;
      default:
        return;
    }
    $state.go(state, { watches: watches });
  };
});
'use strict';

angular.module('nixonClone').directive('addToCartDirective', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      product: '='
    },
    template: '<button class="btn" ng-click="addToCart(product)">Add to Cart</button>',
    controller: function controller($scope, mainService) {
      $scope.addToCart = function (product) {
        mainService.addToCart(product).then(function (response) {
          swal({
            title: "Added to Cart",
            text: "Item added successfully to cart",
            type: "success",
            confirmButtonText: "Cool"
          });
        });
      };
    }
  };
});
'use strict';

angular.module('nixonClone').service('mainService', function ($http) {
  this.user = {};

  this.loginUser = function (email, password) {
    return $http({
      url: '/login',
      method: 'POST',
      data: {
        email: email,
        password: password
      } });
  };

  this.setUser = function (user) {
    this.user = user;
  };

  this.registerUser = function (user) {
    return $http({
      url: '/register',
      method: 'POST',
      data: user
    });
  };

  this.addToCart = function (product) {
    return $http({
      method: 'POST',
      url: '/cart',
      data: {
        product: product,
        user: this.user.id
      }
    });
  };

  this.getCart = function () {
    return $http({
      method: 'GET',
      url: '/cart/' + this.user.id
    });
  };

  this.removeItem = function (id) {
    return $http({
      method: 'DELETE',
      url: '/cart/' + this.user.id + '/' + id
    });
  };

  this.checkout = function (orderId) {
    return $http({
      method: 'PUT',
      url: '/cart/' + this.user.id + '/' + orderId
    });
  };

  this.getMensWatches = function () {
    return $http({
      method: 'GET',
      url: '/mens-watches'
    });
  };

  this.getMensComp = function () {
    return $http({
      method: 'GET',
      url: '/mens-comp'
    });
  };

  this.getMensCorp = function () {
    return $http({
      method: 'GET',
      url: '/mens-corp'
    });
  };

  this.getMensDriver = function () {
    return $http({
      method: 'GET',
      url: '/mens-driver'
    });
  };

  this.getMensRollo = function () {
    return $http({
      method: 'GET',
      url: '/mens-rollo'
    });
  };

  this.getMensLeather = function () {
    return $http({
      method: 'GET',
      url: '/mens-material-leather'
    });
  };

  this.getMensStainless = function () {
    return $http({
      method: 'GET',
      url: '/mens-material-stainless'
    });
  };

  this.getMensSilicone = function () {
    return $http({
      method: 'GET',
      url: '/mens-material-silicone'
    });
  };

  this.getWomensWatches = function () {
    return $http({
      method: 'GET',
      url: '/womens-watches'
    });
  };

  this.getWomensKenzi = function () {
    return $http({
      method: 'GET',
      url: '/womens-kenzi'
    });
  };

  this.getWomensGi = function () {
    return $http({
      method: 'GET',
      url: '/womens-gi'
    });
  };

  this.getWomensLeather = function () {
    return $http({
      method: 'GET',
      url: '/womens-material-leather'
    });
  };

  this.getWomensStainless = function () {
    return $http({
      method: 'GET',
      url: '/womens-material-stainless'
    });
  };

  this.getWomensNylon = function () {
    return $http({
      method: 'GET',
      url: '/womens-material-nylon'
    });
  };
});