Bridgeman.controller('blogViewController', function($scope, blogFactory, $location, $routeParams){
  console.log("in the blog VIEW controller");

  $scope.blogs = [];
  $scope.one = [];


  if ($routeParams.id) {
    blogFactory.getOneBlog($routeParams.id, function(output) {
    $scope.one = output;
    console.log(output);
    });
  } else {
    blogFactory.getAllBlogs(function(output) {
    $scope.blogs = output;
    console.log(output);
    });
  }  
});