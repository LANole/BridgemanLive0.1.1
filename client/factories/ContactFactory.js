Bridgeman.factory('ContactFactory', ['$http','$location', function($http, $location){
	var factory = {};
	factory.createContact = function(contact, callback){
		$http({
			method:"POST",
			url:'/contact',
			data: contact,
		}).then(function success(res){
			callback(res);
		}, function error(res){
			console.log(res);
		});
	}
	return factory;
}])