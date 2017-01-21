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

  // $scope.getAll = function() {
  //   Links.getAll($scope.data)
  //   .then(function (allLinks) {
  //     $scope.data.links.push(allLinks);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  // }


  // $scope.addLink = function( ) {
  //   $scope.Links.push($scope.shortLink);

});


// should have a data property on the $scope

// should call `Links.getAll()` when controller is loaded

// should populate the data property after the call to `Links.getAll()`
