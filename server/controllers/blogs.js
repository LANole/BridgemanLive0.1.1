var mongoose = require('mongoose');

// Require the model and save it in a variable
var Blog = mongoose.model('Blog');

module.exports = (function() {
    return {
      getAllBlogs: function(req, res){
        Blog.find({}).populate([{path : '_user'}]).exec(function(err, b){
          if(err){
            console.log("there was an error when getting all blogs".red);
          } else {
            console.log(b);
            console.log("successfully got all blogs".green);
            res.json(b);
          }
        });
      },

      getOneBlog: function(req, res) {         
        Blog.findOne({_id: req.params.id}).exec(function(err, b) {        //({_id: req.params.id}, function(err,b){})
          if(err){
            console.log('error is', err);
            console.log("there was an error when getting the blog".red);
          } else {
            console.log(b);
            console.log("successfully got the blog".green);
            res.json(b);
          }
        });
       },

      addBlog: function(req, res) {
        console.log("===========================".yellow);
        console.log(req.body);
        console.log("===========================".yellow);

        var b = new Blog({category: req.body.category, title: req.body.title, snippet: req.body.snippet, content: req.body.content, _user: req.body._user})
        b.save(function(err){
          if(err){
            console.log("there was an error when saving a blog".red);
          } else {
            console.log(b);
            console.log("successfully saved the above blog".green);

            res.redirect('/blogs/all');
          }
        })
      }
    }
})();