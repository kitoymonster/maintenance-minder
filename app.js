var mmApp = angular.module('mmApp', ['ngRoute']);

mmApp.config(function($routeProvider){
    $routeProvider
	.when('/addMaintenance', {
		templateUrl: 'js/templates/addMaintenance.html',
		controller: 'AddMaintenanceController'
	})
	.when('/editMaintenance', {
		templateUrl: 'js/templates/editMaintenance.html',
		controller: 'EditMaintenanceController'
	})
	.when('/summaryMaintenace', {
		templateUrl: 'js/templates/summaryMaintenace.html',
		controller: 'SummaryMaintenanceController'
	})
});	

	
mmApp.controller('AddMaintenanceController', function($scope) {
	$scope.message = 'This 1is Add new order screen';	
});

mmApp.controller('EditMaintenanceController', function($scope) {
	$scope.message = 'This is Edit orders screen';
});

mmApp.controller('SummaryMaintenanceController', function($scope) {
	$scope.message = 'This is Show orders screen';
});
