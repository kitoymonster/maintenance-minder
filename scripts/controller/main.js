
angular.module('mmApp').controller('SummaryMaintenanceController', function ($scope) {
	$scope.message = 'Summary Maintenance Reminder';	
    $scope.users = 
    	[{"id":1,"first_name":"Philip","last_name":"Kim","email":"pkim0@mediafire.com","country":"Indonesia","ip_address":"29.107.35.8"},
    	 {"id":50,"first_name":"Andrea","last_name":"Greene","email":"agreene4@fda.gov","country":"Russia","ip_address":"128.72.13.52"}];
});
angular.module('mmApp').controller('AddMaintenanceController', function($scope) {
	$scope.message = 'Add Maintenance Reminder';	
});
angular.module('mmApp').controller('EditMaintenanceController', function($scope) {
	$scope.message = 'Edit Maintenance Reminder';
});
