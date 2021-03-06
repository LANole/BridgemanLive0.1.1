var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	email: {
		type: String,
		required: true,
		validate: [{
          validator: function( email ) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		return re.test(email);
          },
          message: "{ VALUE } is not a valid email"
        }]
    },
	password: {type: String, required: true, minlength: 4}

}, {timestamp: true});
mongoose.model('User', UserSchema);