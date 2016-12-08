angular.module('nixonClone', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
  .state('mens-watches', {
    url: '/mens-watches',
    templateUrl: './views/mens/mensWatches.html',
    controller: 'mensWatchesCtrl'
  })
  .state('driver', {
    url: '/mens-driver',
    templateUrl: './views/mens/driver/driverSearch.html',
    controller: 'mensDriverCtrl'
  })
  .state('comp', {
    url: '/mens-comp',
    templateUrl: './views/mens/comp/compSearch.html',
    controller: 'mensCompCtrl'
  })
  .state('corporal', {
    url: '/mens-corporal',
    templateUrl: './views/mens/corporal/corpSearch.html',
    controller: 'mensCorpCtrl'
  })
  .state('rollo', {
    url: '/mens-rollo',
    templateUrl: './views/mens/rollo/rolloSearch.html',
    controller: 'mensRolloCtrl'
  })
  .state('mens-bands', {
    url: '/mens-band-material',
    templateUrl: './views/mens/bands/mensBandMaterial.html',
    controller: 'mensWatchesCtrl'
  })
  .state('mens-band-stainless', {
    url: '/mens-material-stainless',
    templateUrl: './views/mens/bands/mensStainlessSearch.html',
    controller: 'mensStainlessCtrl'
  })
  .state('mens-band-leather', {
    url: '/mens-material-leather',
    templateUrl: './views/mens/bands/mensLeatherSearch.html',
    controller: 'mensLeatherCtrl'
  })
  .state('mens-band-silicone', {
    url: '/mens-material-silicone',
    templateUrl: './views/mens/bands/mensSiliconeSearch.html',
    controller: 'mensSiliconeCtrl'
  })
  .state('comp-s', {
     url: '/mens-comp-s',
     templateUrl: './views/mens/comp/compTemp.html',
     controller: 'productViewCtrl',
     params: {
       watches: null
     }
   })
  .state('corporal-ss', {
    url: '/mens-corporal-ss',
    templateUrl: './views/mens/corporal/corporalTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('rollo-leather', {
    url: '/mens-rollo-leather',
    templateUrl: './views/mens/rollo/rolloTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('driver-leather', {
    url: '/mens-driver-leather',
    templateUrl: './views/mens/driver/driverLeatherTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('driver-ss', {
    url: '/mens-driver-stainless',
    templateUrl: './views/mens/driver/driverSsTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('womens-watches', {
    url: '/womens-watches',
    templateUrl: './views/womens/womensWatches.html',
    controller: 'womensWatchesCtrl'
    })
  .state('kenzi', {
    url: '/womens-kenzi',
    templateUrl: './views/womens/kenzi/kenziSearch.html',
    controller: 'womensKenziCtrl'
  })
  .state('gi', {
    url: '/womens-gi',
    templateUrl: './views/womens/gi/giSearch.html',
    controller: 'womensGiCtrl'
  })
  .state('womens-bands', {
    url: '/womens-band-material',
    templateUrl: './views/womens/bands/womensBandMaterial.html',
    controller: 'womensWatchesCtrl'
  })
  .state('womens-band-stainless', {
    url: '/womens-material-stainless',
    templateUrl: './views/womens/bands/womensStainlessSearch.html',
    controller: 'womensStainlessCtrl'
  })
  .state('womens-band-leather', {
    url: '/womens-material-leather',
    templateUrl: './views/womens/bands/womensLeatherSearch.html',
    controller: 'womensLeatherCtrl'
  })
  .state('womens-band-nylon', {
    url: '/womens-material-nylon',
    templateUrl: './views/womens/bands/womensNylonSearch.html',
    controller: 'womensNylonCtrl'
    })
  .state('kenzi-leather', {
    url: '/womens-kenzi-leather',
    templateUrl: './views/womens/kenzi/kenziTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('gi-leather', {
    url: '/womens-gi-leather',
    templateUrl: './views/womens/gi/giLeatherTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('gi-nylon', {
    url: '/womens-gi-nylon',
    templateUrl: './views/womens/gi/giNylonTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('gi-stainless', {
    url: '/womens-gi-stainless',
    templateUrl: './views/womens/gi/giSsTemp.html',
    controller: 'productViewCtrl',
    params: {
      watches: null
    }
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './views/cart.html',
    controller: 'cartCtrl'
  });

  $urlRouterProvider.otherwise('/');

});
