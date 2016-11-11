
angular.module('mmApp', ['ngTable']).controller('SummaryMaintenanceController', function ($scope, NgTableParams) {
	$scope.message = 'Summary';	
    $scope.users = 
    	[{"id":1,"first_name":"Philip","last_name":"Kim","email":"pkim0@mediafire.com","country":"Indonesia","ip_address":"29.107.35.8"},
    	 {"id":50,"first_name":"Andrea","last_name":"Greene","email":"agreene4@fda.gov","country":"Russia","ip_address":"128.72.13.52"}];

    var self = this;
    var data = [{name: "Moroni1", age: 50},{name: "Moroni2", age: 50},{name: "Moroni3", age: 50},{name: "Moroni", age: 50}];
    self.tableParams = new NgTableParams({
    	page: 1, // show first page
    	count: 10 // count per page
    }, { dataset: data});
});
angular.module('mmApp').controller('AddMaintenanceController', function($scope) {
	$scope.message = 'Add Maintenance Reminder';	
});
angular.module('mmApp').controller('EditMaintenanceController', function($scope) {
	$scope.message = 'Edit Maintenance Reminder';
});
