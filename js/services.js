var gitAppServices = angular.module('gitAppServices', ['ngResource']);

gitAppServices.factory('Issue', ['$resource', function($resource) {
	return $resource('https://api.github.com/repos/:user/:repo/issues', {}, {
		query: {
		    method: 'GET',
		    isArray:true
		    }
	});
}]);

gitAppServices.factory('Repo', ['$resource', function($resource) {
	return $resource('https://api.github.com/users/:user/repos/', {}, {
		query: {
		    method: 'GET',
		    isArray:true
		    }
	});
}]);
