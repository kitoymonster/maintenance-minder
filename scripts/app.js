var mmApp = angular.module('mmApp', ['ngRoute']);

mmApp.config(function($routeProvider){
    $routeProvider
	.when('/addMaintenance', {
		templateUrl: 'view/addMaintenance.html',
		controller: 'AddMaintenanceController'
	})
	.when('/editMaintenance', {
		templateUrl: 'view/editMaintenance.html',
		controller: 'EditMaintenanceController'
	})
	.when('/summaryMaintenace', {
		templateUrl: 'view/summaryMaintenace.html',
		controller: 'SummaryMaintenanceController'
	})
	.otherwise({
        redirectTo: '/addMaintenance'
    });
});	


