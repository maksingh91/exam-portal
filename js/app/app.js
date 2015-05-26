var app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http','AppService', function($scope, $http, AppService) {

	$scope.pageData = {};
	
	
	AppService.fetchData("http://www.w3schools.com/angular/customers.php").then(function(data) {
	console.log(JSON.stringify(data));
	});
	
	 
}]);


