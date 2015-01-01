var gitAppServices = angular.module('gitAppServices', ['ngResource']);

gitAppServices.factory('Issue', ['$resource', function($resource) {
	return $resource('https://api.github.com/repos/gruntjs/grunt/issues', {}, {
		query: {
		    method: 'GET',
		    isArray:true
		    }
	});
}]);
