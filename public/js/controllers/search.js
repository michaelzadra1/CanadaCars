myApp.controller('SearchController', function($scope) {
	// Set animation class
	$scope.pageClass = 'page-search';

	// Slide menu toggling
	$scope.checked = false;

	$scope.toggle = function() {
		$scope.checked = !$scope.checked;
	}; //toggle

	/*// Chose database base on selected year
	$scope.generateCarModel = function(selectedYear) {
		// Use selected year to specify appropiate car collection
		var ref = new Firebase("https://angularmz.firebaseio.com/canadianCars/cars_" + selectedYear);

		$scope.cars = $firebaseArray(ref);
		console.log($scope.cars);	
	}; //generateCarModel*/

	

}); //SearchController 