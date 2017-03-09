Bridgeman.controller('contactController', ['$scope', 'ContactFactory', '$location', function($scope, ContactFactory, $location){

	$scope.createContact = function(contact){
		ContactFactory.createContact(contact, function(res){
			$location.path('/about');
		}, 5000);
	}

	
}])