myApp.controller('AboutController', function($scope) {
    // Set animation class
    $scope.pageClass = 'about';

    $scope.welcomeBool = true;
    $scope.animate = function() {
        $scope.welcomeBool = !$scope.welcomeBool;
    };

    $scope.googleStuff = function(){
		   	google.load("search", "1", {
		        "callback": OnLoad
		    });
		    var imageSearch;
    }


    function searchComplete() {

        // Check that we got results
        if (imageSearch.results && imageSearch.results.length > 0) {

            // Loop through our results, printing them to the page.
            var results = imageSearch.results;
          
            // Get first result
            var result = results[0];

            // Replace current image with new image found
            document.getElementById("lol").src=result.url;
            }
        }

    function OnLoad() {

        // Create an Image Search instance.
        imageSearch = new google.search.ImageSearch();

        // Set searchComplete as the callback function when a search is 
        // complete.  The imageSearch object will have results in it.
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Find me a beautiful car.
        imageSearch.execute("lol");
    }

}); //MainController