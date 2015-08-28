myApp.controller('AboutController', function($scope) {
    // Set animation class
    $scope.pageClass = 'about';

    $scope.welcomeBool = true;

    function textReplace(string) {
        string = string.replace(/X/g, "Regular Gasoline");
        string = string.replace(/Z/g, "Premium Gasoline");
        string = string.replace(/D/g, "Diesel");
        string = string.replace(/E/g, "Ethanol (E85)");
        string = string.replace(/N/g, "Natural Gas");
        console.log(string);
    }

    $scope.text = function() {
        var element = document.getElementById("testText");
        var elementHtml = element.outerHTML;
        textReplace(elementHtml);

    }






    $scope.animate = function() {
        $scope.welcomeBool = !$scope.welcomeBool;
    };

    $scope.googleStuff = function() {
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
            document.getElementById("lol").src = result.url;
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

    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        console.log($scope.user);
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();







}); //MainController