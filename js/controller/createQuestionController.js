angular.module('app').controller('CreateQuestionCtrl', ['$scope', '$http','AppService', function($scope, $http, AppService) {
	
	$scope.isCollapsedHeader = true;
	$scope.isCollapsedQue = true;
	$scope.isCollapsedFooter = true;
	$scope.isCollapsedGnrlInfo = true;
	
	$scope.isbasic=true;
	$scope.isAdvance=false;
	
	$scope.addOptionValues=[];
	$scope.addOptions=function(value){
		$scope.addOptionValues.push(value);
		console.log($scope.addOptionValues);
	}
	
	
}]);