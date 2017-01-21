angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  // shorten link before add to Links array

  $scope.link;

  $scope.addLink = function( ) {
    $scope.Links.push($scope.shortLink);

  };
});

// should have a link property on the $scope

// should be able to create new links with addLink()

// should be able to create new links with addLink()
