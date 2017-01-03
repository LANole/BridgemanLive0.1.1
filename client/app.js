var Bridgeman = angular.module('Bridgeman', ['ngRoute']);

	Bridgeman.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
			$httpProvider.interceptors.push(function($q, $location){									
				return{
					'responseError': function(rejection){
						if(rejection.status == 401){
							$location.url('/');
						}
						return $q.reject(rejection);
						}
					}
				});
			$routeProvider
				.when('/', {
					templateUrl:'partials/homepage.html',					
				}).when('/about/',{
					templateUrl:'partials/about.html',					
				}).when('/developer/', {
					templateUrl: 'partials/developer.html',					
				}).when('/contact/', {
					templateUrl: 'partials/contact.html',
					controller: 'contactController'
				}).otherwise({
					redirectTo:'/'
				});
		}])