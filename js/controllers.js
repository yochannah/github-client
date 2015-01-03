var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('IssuesListController', ['$scope','Issue', 'User', function($scope, Issue, User) {

	$scope.issues = [];
	$scope.repos = [];
	
	$scope.search = function() {
        $scope.searchFor(Issue,'issues');
    };
    	
    $scope.searchUsers = function() {
        $scope.searchFor(User,'repos');
    };

    $scope.searchFor = function(thingToFind, storeAs) {
        $scope.loading = true;
        $scope.errorResponse = false;

        $scope[storeAs] = thingToFind.query(
        $scope.filters, 
        function (success) {
            console.log(success, storeAs);
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
