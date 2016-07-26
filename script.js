var app = angular.module('surfApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: '/templates/Home.html'
	})
});

app.controller('HomeCtrl', function($scope) {
});