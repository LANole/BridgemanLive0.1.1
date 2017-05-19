var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = mongoose.model('User');

module.exports = (function() {
	return {
		reg: function(req, res) {
			console.log("in the reg method --> users controller".cyan)
			console.log(req.body);

			User.findOne({email: req.body.email}, function(err, oneUser) {
				if(err) {
					console.log("==== error ====".red);
				} else {
					if(oneUser) {
						console.log("==== user was found ====".yellow);
						res.json({error: "Email is already registered. Please login instead."});
					} else {
						console.log("==== user is good to register ====".green);

						var pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));

						var user = new User({name: req.body.name, email: req.body.email, password: pw});
						user.save(function(err){
							if(err) {
							console.log("==== error when registering ====".red);							
						} else {
							console.log("==== successfully registered a new user ====".green);
							res.json(user);
						}
					});
				  }
				}
		    });
		},

		login: function(req, res){
			console.log("in the login method --> users controller".cyan)
			console.log(req.body);

			User.findOne({email: req.body.email}, function(err, oneUser) {
				if(err) {
					console.log("==== error ====".red);
				} else {
					if(!oneUser) {
						console.log("==== user was not found ====".red);
						res.json({error: "Email is not registered. Please register."});
					} else {
						console.log("==== checking password ====".green);					

						if(bcrypt.compareSync(req.body.password, oneUser.password)){
						  console.log("==== successfully logged in ====".green);
						  res.json(oneUser);							
						} else {							
							res.json({error: "Password incorrect"});
						}
					}
				}
			});
		},
	}
})();