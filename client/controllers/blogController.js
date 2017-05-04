Bridgeman.controller('blogController', function($scope, loginFactory, blogFactory, $location, $routeParams){
  console.log("in the blog controller");

  $scope.user = {};
  $scope.blogs = [];

  loginFactory.getUser(function(data){
    $scope.user = data;
    console.log(data);
    if(!data._id){
      // kick the user back to the login page
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


    // run the factory method to save the new blog
    blogFactory.submitNewBlog($scope.newBlog, function(output){
      console.log(output);
      $scope.blogs = output;
    })

    $scope.newBlog = {};
  }


  //$scope.submitNewComment = function(id, content){

  //  var newComment = {};
  //  newComment._user = $scope.user._id;
  //  newComment.content = content;
  //  newComment._message = id;

  //  console.log(newComment);

    // run the factory method to save the new comment
  //  blogFactory.submitNewComment(newComment, function(output){
  //    console.log(output);
  //    $scope.messages = output;
  //  })
  //}
});