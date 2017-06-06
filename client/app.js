var Bridgeman = angular.module('Bridgeman', ['ngRoute', 'textAngular']);

	Bridgeman.config(['$routeProvider', '$httpProvider', '$locationProvider', '$qProvider', function($routeProvider, $httpProvider, $locationProvider, $qProvider){
			$qProvider.errorOnUnhandledRejections(false);
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
					templateUrl:'partials/home.html',					
				}).when('/about', {
					templateUrl:'partials/about.html',					
				}).when('/services', {
					templateUrl: 'partials/services.html',
					controller: 'servicesController'
				}).when('/blog', {
					templateUrl: 'partials/blog-home.html',
					controller: 'blogViewController'
				}).when('/blogAWS', {
					templateUrl: 'partials/blog-aws.html',
					controller: 'blogViewController'
				}).when('/blogSEO', {
					templateUrl: 'partials/blog-SEO.html',
					controller: 'blogViewController'
				}).when('/blogSecurity', {
					templateUrl: 'partials/blog-Security.html',
					controller: 'blogViewController'
				}).when('/blogBusiness', {
					templateUrl: 'partials/blog-Business.html',
					controller: 'blogViewController'
				}).when('/blogSportsTech', {
					templateUrl: 'partials/blog-SportsTech.html',
					controller: 'blogViewController'
				}).when('/blog-post/:id', {
					templateUrl: 'partials/blog-post.html',
					controller: 'blogViewController'					
				}).when('/contact', {
					templateUrl: 'partials/contact.html',
					controller: 'contactController'
				}).when('/login', {
					templateUrl:'partials/login.html',
					controller: 'loginController'
				}).when('/admin', {
					templateUrl:'partials/admin.html',
					controller: 'blogController'
				}).otherwise({
					redirectTo:'/'
				});
			$locationProvider.html5Mode(true);
		}])

	Bridgeman.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  		$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    		$location.hash($routeParams.scrollTo);
    		$anchorScroll();  
  });
})