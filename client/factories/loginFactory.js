Bridgeman.factory('loginFactory', function($http) {
	var factory = {};

	var user = {};

	factory.register = function(input, callback){
		$http.post('/reg', input).then(function(output){
			console.log("we made it back");
			callback(output);
		});
	}

	factory.login = function(input, callback){
		$http.post('/login', input).then(function(output){
			console.log("we made it back");
			callback(output);
		});
	}

	factory.setUser = function(data, callback) {
		user = data;
		callback();
	}

	factory.getUser = function(callback) {
		callback(user);
	}

	return factory;
});