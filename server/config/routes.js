var users = require('./../controllers/users.js');
var blogs = require('./../controllers/blogs.js');

module.exports = function(app){
	
	app.post('/reg', function(req, res){
	users.reg(req, res);
	});

	app.post('/login', function(req, res){
	users.login(req, res);
	});
	
	app.get('/blogs/all', function(req, res) {
        blogs.getAllBlogs(req, res);
    });

    app.get('/blogs/:id', blogs.getOneBlog); 			       
    

    app.post('/blogs/new', function(req, res) {
        blogs.addBlog(req, res);
    });

	app.post('/contact', function(req,res){

		var api_key = 'key-2451a2b90a87be616ab68b8f7c8f97ea';
		var domain = 'sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
		 
		var data = {
		  from: 'Website inquiry <postmaster@sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org>',
		  to: 'tombridgemandev@gmail.com',
		  subject: req.body.full_name+" has sent you a message",
		  html:
			  req.body.full_name+" ..."+			  
			  req.body.phone+" ..."+
			  req.body.email+" ..."+			  		  
		  	  req.body.message
		};
		 
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		  console.log("working...");
		  if(!error)
		    res.send("Your message has been sent");
		  else
		  	res.send("Uh oh... something went wrong!");
		});
	});
}