/*
    Author : technovators
    File   : app.js
    Details: Application Config for application.
    Email  : technovators.msd@gmail.com
*/
  var app = angular.module('meetupApp', [ 'ui.router', 'ngAnimate', 'ngMaterial' ]);
  
  app.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)
.config(
  [          '$stateProvider', '$urlRouterProvider', 
    function ($stateProvider,   $urlRouterProvider) {
		

      $urlRouterProvider
          .when('/', '/home')
          .otherwise('/home');

      $stateProvider
		  .state('home', {
            url: '/home',
            templateUrl: 'html/home.html',
			controller: 'homeCtrl',
			onEnter: function () { console.log("enter home.html"); }
		  })
          .state('home.map', {
              templateUrl: 'html/partial-home-map.html',
              controller: 'partialCtrl'
          })
          .state('home.list', {
              
              templateUrl: 'html/partial-home-list.html',
              controller: 'partialCtrl'
          })
          .state('/home/:zipcode', {
              templateUtl: 'html/home.html',
              controller: 'homeCtrl'
          })
		.state('login', {
            url: '/login',
            templateUrl: 'html/login.html',
            onEnter: function() { console.log("enter login.html"); } })
		.state('apitest', {
            url: '/apitest',
            templateUrl: 'html/apitest.html',
            onEnter: function() { console.log("enter apitest.html"); } });
    }
  ]
);







