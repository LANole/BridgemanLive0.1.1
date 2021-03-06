Bridgeman.factory('blogFactory', function($http){
  var factory = {};

  factory.submitNewBlog = function(input, callback){
    $http.post('/blogs/new', input).then(function(output){
      console.log("we just added a new blog");
      callback(output.data);
    });
  }

  factory.getAllBlogs = function(callback){
    $http.get('/blogs/all').then(function(output){
      console.log("we just got all blogs");
      callback(output.data);
    });
  }

  factory.getOneBlog = function(blogID, callback){          
    $http.get('/blogs/' + blogID).then(function (output){          
      console.log(output.data);                             
      console.log("we just got one blog");
      callback(output.data);
    });
  }
  return factory;
});