angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.Links = Links;

  Links.getAll($scope.data)
    .then(function (allLinks) {
      $scope.data.links = allLinks;
    })
    .catch(function (err) {
      console.log(err);
    });
});
