angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here

  // shorten link before add to Links array
  
  $scope.Links = [];

  // $scope.addLink = () => {
  //   $scope.Links.push($scope.longLink);

  // };
});
