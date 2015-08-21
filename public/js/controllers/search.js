myApp.controller('SearchController', function($scope, $http, $location, $routeParams) {

    $scope.resultsBool = false;
    // Hide sections until user makes selections
    $scope.dropdownHide = true;
    $scope.typeHide = false;
    $scope.resultsHide = false;

    $scope.whichCar = $routeParams.carId;

    $scope.isDisabled = !($scope.vehicleClass);

    // Set animation class
    $scope.pageClass = 'search';

    //Default radio button is single
    $scope.carMode = 'single';
    // String for selected car
    $scope.carString;

    // Returns single car view, or compare car view, based on radio button selection
    $scope.carModeView = function() {
        return 'partials/' + $scope.carMode + '.html';
    }; //carModeView

    // User selects year, function returns array of cars from that year
    $scope.getCars = function(year) {
        // HTTP request to GET cars as JSON object
        $http.post('/cars', {
            "year": year
        }).success(function(result) {
            // Cars of specified years contained in object cars
            $scope.cars = result;
        });
    }; //getCars

    // Generates picture for car, and displays stats for the selected vehicle
    $scope.generateCar = function(year, carMake, carModel, vehicleClass) {
            $scope.carString = year + ' ' + carMake.make + ' ' + carModel.model + ' ' + vehicleClass.vehicle_class;
            console.log($scope.carString);
            // Make HTTP request to get car stats
            $http.post('/selectCar', {
                    "year": year,
                    "make": carMake.make,
                    "model": carModel.model,
                    "vehicle_class": vehicleClass.vehicle_class
                })
                .success(function(result) {

                    $scope.selectedCars = result;
                    // Initialize selected row to null
                    $scope.selectedRow = 0;
                    // Intialize inspectCar as first selectedCar in object array
                    $scope.inspectCar = $scope.selectedCars[0];
                    //$scope.dropdownHide = true;
                    $scope.typeHide = true;
                });
            // Google search API
            google.load("search", "1", {
                "callback": OnLoad
            });
            var imageSearch;
            $scope.resultsBool = true;

        } //generateCar


    function searchComplete() {

        // Check that we got results
        if (imageSearch.results && imageSearch.results.length > 0) {

            // Loop through our results, printing them to the page.
            var results = imageSearch.results;

            var result = results[0];
            // Replace current image with new image found
            document.getElementById("lol").src = result.url;
        }
    }

    function OnLoad() {

        // Create an Image Search instance.
        imageSearch = new google.search.ImageSearch();
        imageSearch.setRestriction(
            google.search.ImageSearch.RESTRICT_IMAGESIZE,
            google.search.ImageSearch.IMAGESIZE_MEDIUM);

        // Set searchComplete as the callback function when a search is 
        // complete.  The imageSearch object will have results in it.
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Find me a beautiful car.
        imageSearch.execute($scope.carString);
    }


    // Sets the value of the row selector to current index
    $scope.setClickedRow = function(index) {
        $scope.selectedRow = index;
        $scope.inspectCar = $scope.selectedCars[index];
    };

    $scope.fcMax = 35;
    $scope.fcMaxMpg = 70;
    $scope.emissionsMax = 700;


}); //SearchController