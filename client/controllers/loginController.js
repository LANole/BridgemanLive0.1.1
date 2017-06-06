Bridgeman.controller('loginController', function($scope, loginFactory, $location){
	$scope.test = "hello world";


	$scope.regUser = function() {
		console.log($scope.reg);
		$scope.error = "";

		if($scope.reg.password == $scope.reg.password_confirm && $scope.reg.name && $scope.reg.email && $scope.reg.password){
			loginFactory.register($scope.reg, function(output){
				console.log(output);
				console.log("back from loginFactory --->finished registering");

				if(output.data.error) {
				  $scope.error = output.data.error;
				} else {
				loginFactory.setUser(output.data, function(){
					$location.url('/admin');
				});
			  }
			});
		} else {
			$scope.error = "passwords do not match!";
		}

		$scope.reg = {}
	}

	$scope.loginUser = function() {
		console.log($scope.login);

		loginFactory.login($scope.login, function(output){
			console.log(output);
			console.log("back from loginFactory --->finished login");

			if(output.data.error) {
				  $scope.error = output.data.error;
				} else {
				loginFactory.setUser(output.data, function(){
					$location.url('/admin');
				});
			}
		});

		$scope.login = {}
	}
});