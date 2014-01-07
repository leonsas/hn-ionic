angular.module('hn.controllers', [])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example
})

// A simple controller that fetches a list of data
.controller('StoriesCtrl', function($scope, Stories) {

    Stories.getStoriesAsync(function(results) {
      console.log(results);
      $scope.stories = results;
  });

})

// A simple controller that shows a tapped item's data
.controller('StoryCtrl', function($scope, $routeParams, Stories) {
  Stories.getStoryByIDAsync($routeParams.storyID, function(results){
    console.log(results);
    $scope.story = results;
  });




});
