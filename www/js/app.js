// angular.module is a global place for creating, registering and retrieving Angular modules
// 'hn-ionic' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'hn.services' is found in services.js
// 'hn.controllers' is found in controllers.js
angular.module('hn-ionic', ['ionic', 'ngRoute', 'ngAnimate', 'hn.services', 'hn.controllers'])

.config(function ($compileProvider){
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.config(function($sceDelegateProvider){
    //Whitelisting all domains to allow iframe to view them. Should use a safer way?
    $sceDelegateProvider.resourceUrlWhitelist(['**', 'self']);
})

.config(function($routeProvider, $locationProvider) {


  $routeProvider.when('/front', {
    templateUrl: 'templates/front.html'
  });

  $routeProvider.when('/story/:storyID', {
    templateUrl: 'templates/story.html',
    controller: 'StoryCtrl'
  });

  // if none of the above routes are met, use this fallback
  // which leads to HN's front page
  $routeProvider.otherwise({
    redirectTo: '/front'
  });

});

