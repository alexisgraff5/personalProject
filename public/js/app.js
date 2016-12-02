angular.module('nixonClone', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    // templateUrl: './public/views/home.html'
    // controller: ''
  });
  // .state('', {
  //   url: '/',
  //   templateUrl: '',
  //   controller: ''
  // })
  // .state('', {
  //   url: '/',
  //   templateUrl: '',
  //   controller: ''
  // });

  $urlRouterProvider.otherwise('/');

});
