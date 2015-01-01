var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('IssuesListController', ['$scope','Issue', function($scope, Issue) {

	$scope.issues = [];
	
	$scope.search = function() {
	    $scope.issues = Issue.query($scope.filters, function (success) {
	    }, function (error) {
	        console.error("TODO: Useful feedback...")
	    });
	};

}]);
