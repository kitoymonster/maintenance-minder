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