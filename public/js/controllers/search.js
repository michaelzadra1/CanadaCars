myApp.controller('SearchController', function($scope, $http, $location) {
	// Set animation class
	$scope.pageClass = 'search';

	//Default radio button is single
	$scope.carMode = 'single';

	// Returns single car view, or compare car view, based on radio button selection
	$scope.carModeView = function () {
		return 'partials/' + $scope.carMode + '.html';
	};


        $scope.getCars = function(year) {
                console.log(year);
                // HTTP request to GET cars as JSON object
                $http.get('/cars').success(function(result){
                        console.log("I got data");
                        console.log(result);
                        $scope.cars = result;
                });    
        };

        

}); //SearchController 