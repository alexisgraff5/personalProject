angular.module('nixonClone', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
  .state('mens-watches', {
    url: '/mens-watches',
    templateUrl: './views/mens/mensWatches.html',
    controller: 'productCtrl'
  })
  .state('womens-watches', {
    url: '/womens-watches',
    templateUrl: './views/womens/womensWatches.html',
    controller: 'productCtrl'
    })
  .state('comp', {
     url: '/mens-comp',
     templateUrl: './views/mens/comp/compTemp.html',
     controller: 'productCtrl'
   })
  .state('corporal', {
    url: '/mens-corporal',
    templateUrl: './views/mens/corporal/corporalTemp.html',
    controller: 'productCtrl'
  })
  .state('rollo', {
    url: '/mens-rollo',
    templateUrl: './views/mens/rollo/rolloTemp.html',
    controller: 'productCtrl'
  })
  .state('kenzi', {
    url: '/womens-kenzi',
    templateUrl: './views/womens/kenzi/kenziTemp.html',
    controller: 'productCtrl'
  })
  .state('driver-leather', {
    url: '/mens-driver-leather',
    templateUrl: './views/mens/driver/driverLeatherTemp.html',
    controller: 'productCtrl'
  })
  .state('driver-ss', {
    url: '/mens-driver-stainless',
    templateUrl: './views/mens/driver/driverSsTemp.html',
    controller: 'productCtrl'
  })
  .state('gi-leather', {
    url: '/womens-gi-leather',
    templateUrl: './views/womens/gi/giLeatherTemp.html',
    controller: 'productCtrl'
  })
  .state('gi-nylon', {
    url: '/womens-gi-nylon',
    templateUrl: './views/womens/gi/giNylonTemp.html',
    controller: 'productCtrl'
  })
  .state('gi-stainless', {
    url: '/womens-gi-stainless',
    templateUrl: './views/womens/gi/giSsTemp.html',
    controller: 'productCtrl'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './views/cart.html',
    controller: 'productCtrl'
  })
  .state('womens-bands', {
    url: '/womens-band-material',
    templateUrl: './views/womens/bands/womensBandMaterial.html',
    controller: 'productCtrl'
  })
  .state('womens-bands-stainless', {
    url: '/womens-material-stainless',
    templateUrl: './views/womens/bands/womensStainlessSearch.html',
    controller: 'productCtrl'
  })
  .state('womens-bands-leather', {
    url: '/womens-material-leather',
    templateUrl: './views/womens/bands/womensLeatherSearch.html',
    controller: 'productCtrl'
  })
  .state('womens-bands-nylon', {
    url: '/womens-material-nylon',
    templateUrl: './views/womens/bands/womensNylonSearch.html',
    controller: 'productCtrl'
  })
  .state('mens-bands-material', {
    url: '/mens-band-material',
    templateUrl: './views/mens/bands/mensBandMaterial.html',
    controller: 'productCtrl'
  })
  .state('mens-bands-stainless', {
    url: '/mens-material-stainless',
    templateUrl: './views/mens/bands/mensStainlessSearch.html',
    controller: 'productCtrl'
  })
  .state('mens-bands-leather', {
    url: '/mens-material-leather',
    templateUrl: './views/mens/bands/mensLeatherSearch.html',
    controller: 'productCtrl'
  })
  .state('mens-bands-silicone', {
    url: '/mens-material-silicone',
    templateUrl: './views/mens/bands/mensSiliconeSearch.html',
    controller: 'productCtrl'
  })

  $urlRouterProvider.otherwise('/home');

});
