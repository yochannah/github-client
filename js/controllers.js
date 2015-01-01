var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('IssuesListController', ['$scope','Issue', function($scope, Issue) {

	$scope.issues = [];
	
	$scope.search = function() {
	    $scope.issues = Issue.query($scope.filters, function (success) {
	    }, function (error) {
	        $scope.error = error;
	        
            //we'll add advanced error handling later, for now this should do. Ideally, let them know if the user exists even if the repo doesn't!
	        if($scope.error.status === "404") {
	            $scope.errorResponse = "It looks like the user or repo you were looking for couldn't be found. Please check if you've spelled everything correctly, and make sure it's not a private repo!";
	        } else {
	            $scope.errorResponse = "Oops. Looks like there has been an error. We've reported it to the computer elves and we're doing our best to fix it right now."
	        }
	        
	    });
	};

}]);
