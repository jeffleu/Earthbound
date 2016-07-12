angular.module('earthbound', [
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/map', {
      templateUrl: 'views/map.html',
      controller: 'MapCtrl'
    })
    .when('/battle', {
      templateUrl: '../views/battle.html',
      controller: 'BattleCtrl' 
    });
})