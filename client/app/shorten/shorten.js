angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // shorten link before add to Links array
  $scope.link = {};

  $scope.addLink = function( ) {
    // utilize addOne factory method
    return Links.addOne($scope.link);
  };
});
