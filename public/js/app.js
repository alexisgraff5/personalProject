angular.module('nixonClone', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'mainCtrl'
  })
    .state('comp', {
     url: '/comp',
     templateUrl: './views/mens/comp/compTemp.html',
     controller: 'compCtrl'
});

  $urlRouterProvider.otherwise('/');

});
