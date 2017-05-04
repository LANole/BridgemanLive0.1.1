Bridgeman.controller('blogViewController', function($scope, blogFactory, $location, $routeParams){
  console.log("in the blog VIEW controller");

  $scope.blogs = [];
  $scope.one = [];

  blogFactory.getAllBlogs(function(output){
    $scope.blogs = output;
    console.log(output);
  })

  blogFactory.getOneBlog($routeParams.id, function(output){  //Kelvin has ($routeParams.id, function(output){ in video 2:31:36 mark
    $scope.one = output;
    console.log(output);
  })
});