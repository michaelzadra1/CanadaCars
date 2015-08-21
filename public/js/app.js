var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'modaltemplate', 'angular.filter']);

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
	.when('/carDetails/:carId', {
		templateUrl: 'partials/carDetails.html',
		controller: 'SearchController'
	})
	.when ('/about', {
		templateUrl: 'partials/about.html',
		controller: 'AboutController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);

// Services

try {
	myApp.service('loginModalService', function ($modal, $rootScope) {

    function assignCurrentUser(user) {
        $rootScope.currentUser = user;
        return user;
    }

    return function () {
        var instance = $modal.open({
            templateUrl: 'partials/modal.html',
            controller: 'ModalController',
            controllerAs: 'ModalController',
            windowClass: 'vertical-center',
            backdrop: true,
            backdrop: 'static',
            sticky: true
        })

        return instance.result.then(assignCurrentUser);
    };

});
} catch (e) {
	alert("Error --- " + e.message);
}
