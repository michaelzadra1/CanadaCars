var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'pageslide-directive']);

// Routing

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	})
	.when ('/search', {
		templateUrl: 'partials/search.html',
		controller: 'SearchController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);
