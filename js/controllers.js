var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('IssuesListController', ['$scope','Issue', function($scope, Issue) {

	$scope.issues = Issue.query();
	
	$scope.search = function() {
	    console.log('booya');
	};

}]);
