Bridgeman.controller('servicesController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll.yOffset = 50;
		$anchorScroll();
	}
}]);