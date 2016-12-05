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

  $urlRouterProvider.otherwise('/home');

});
