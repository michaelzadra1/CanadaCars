myApp.controller('SearchController', function($scope, $location) {
	// Set animation class
	$scope.pageClass = 'search';

	//Default radio button is single
	$scope.carMode = 'single';

	// Returns single car view, or compare car view, based on radio button selection
	$scope.carModeView = function () {
		return 'partials/' + $scope.carMode + '.html';
	};

}); //SearchController 