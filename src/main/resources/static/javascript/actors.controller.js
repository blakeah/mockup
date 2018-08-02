// Element locators
var faveApp = angular.module('faveApp', ['ui.bootstrap', 'limitTo']);

function actorsController($scope, $http, $uibModal) {

	// $http.get("http://localhost:8080/dev/api/actors").
	//     then(function(response) {
	//         $scope.actors = response.data;
	// });

	// Getting External JSON Data

	$http.get("https://raw.githubusercontent.com/blakeah/mockup/master/src/main/resources/data.json").
	then(function(response) {
		$scope.actors = response.data;
		$scope.traits = response.data;
	});

	// Order actors function

	$scope.orderByMe = function(m) {
		$scope.myOrderBy = m;
	};

	// Target Individual Actor to Display in Modal

	$scope.view = function(a) {
		$scope.a = a;
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'actorView',
			scope: $scope,
			size: 'lg',
		});
		$scope.close = function() {
			modalInstance.close();
		};
	};
}
faveApp.controller("actorsController", actorsController);
