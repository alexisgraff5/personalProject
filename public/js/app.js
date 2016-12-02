angular.module('nixonClone', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
    .state('comp', {
     url: '/comp',
     templateUrl: './views/mens/comp/compTemp.html',
     controller: 'productCtrl'
});

  $urlRouterProvider.otherwise('/home');

});
