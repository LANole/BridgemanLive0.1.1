Bridgeman.controller('blogController', function($scope, loginFactory, blogFactory, $location, $routeParams){
  console.log("in the blog controller");

  $scope.user = {};
  $scope.blogs = [];

  loginFactory.getUser(function(data){
    $scope.user = data;
    console.log(data);
    if(!data._id){
      
      $location.url('/login');
    }
  });

  blogFactory.getAllBlogs(function(output){
    $scope.blogs = output;
    console.log(output);
  })

  $scope.submitNewBlog = function(){
    $scope.newBlog._user = $scope.user._id;
    console.log($scope.newBlog);

    blogFactory.submitNewBlog($scope.newBlog, function(output){
      console.log(output);
      $scope.blogs = output;
    })

    $scope.newBlog = {};
  }  
});