myApp.controller('NavController', function($scope, $http, $location) {

	// Checks whether current partial is active or not, and adjusts navbar active
	$scope.getClass = function(path) {
		if ($location.path() === path) {
			return 'active';
		} else {
			return '';
		}
	};//getClass

}); //NavController