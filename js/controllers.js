var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('IssuesListController', ['$scope','Issue', 'Repo', function($scope, Issue, Repo) {

    $scope.reset = function() {
    	$scope.issues = null;
	    $scope.repos = null;
	    $scope.loading = null;
	    $scope.errorResponse = null;
	    $scope.filters = null;
    };


    $scope.reset();
	
	$scope.getIssues = function() {
        $scope.searchFor(Issue,'issues');
    };
    	
    $scope.getRepos = function() {
    	$scope.repos = null;    
        $scope.searchFor(Repo,'repos');
    };

    $scope.searchFor = function(thingToFind, storeAs) {
        $scope.loading = true;
        $scope.errorResponse = false;

        $scope[storeAs] = thingToFind.query(
        $scope.filters, 
        function (success) {
            $scope.loading = false;
        }, 
        function (error) {
            $scope.loading = false;
            $scope.error(error);
        });
    };
    

    $scope.error = function(error) {
    	    if(error.status == "404") {
                $scope.errorResponse = "404: It looks like the user you were looking for couldn't be found. Please check if you've spelled everything correctly!";
            } else {
                $scope.errorResponse = "Oops. Looks like there has been an error. We've reported it to the computer elves and we're doing our best to fix it right now."
            }
    	};
	
}]);
