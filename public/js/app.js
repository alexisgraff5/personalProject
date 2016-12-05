angular.module('nixonClone', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
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

  $urlRouterProvider.otherwise('/home');

});
