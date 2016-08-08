var app = angular.module('surfApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: './templates/home.html'
	}).when('/surfkids', {
		controller: 'SurfKidsCtrl',
		templateUrl: './templates/surfkids.html'
	})
});

app.controller('HomeCtrl', function($scope) {
});

app.controller('SurfKidsCtrl', function($scope) {
});
