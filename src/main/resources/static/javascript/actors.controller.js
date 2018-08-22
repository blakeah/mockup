// Element locators
var actorApp = angular.module('actorApp', ['ui.bootstrap' ]);

function actorsController($scope, $http, $uibModal) {

    $scope.init = function() {
    // Getting Local JSON Data

        // $http.get("http://localhost:8080/dev/api/actordata").
        //     then(function(response) {
        //         $scope.actors = response.data;
        // });
        $http.get("/dev/api/actordata").
            then(function(response) {
                $scope.actors = response.data;
        });

        $scope.submissionSuccess = false;
    }
    // Getting External JSON Data

    // $http.get("https://raw.githubusercontent.com/blakeah/mockup/master/src/main/resources/data.json").
    // then(function(response) {
    // 	$scope.actors = response.data;
    // 	$scope.traits = response.data;
    // });

    // Order actors function
    $scope.orderByMe = function(m) {
        $scope.myOrderBy = m;
    };

    // Target Individual Actor to Display in Modal
    $scope.viewActor = function(a) {
        $scope.a = a;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'actorview',
            scope: $scope,
            size: 'lg',
    });
        $scope.close = function() {
            modalInstance.close();
        };
    }
    $scope.deleteActor = function(a) {
        $scope.a = a;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'deleteactor',
            scope: $scope,
            size: 'lg',
    });
        $scope.close = function() {
            modalInstance.close();
        };
        $scope.delete = function() {
            
        };
    }

    // New Actor Form Modal
    $scope.newActor = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'newactor',
            controller: newActor,
            scope: $scope,
            size: 'lg',

    });
        $scope.close = function() {
            modalInstance.close();
        };

    }

    // Edit Actor Form Modal
    $scope.editActor = function(a) {
        $scope.actor = a;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'editactor',
            controller: editActor,
            scope: $scope,
            size: 'lg'
        });

        $scope.close = function() {
            modalInstance.close();
            console.log("Closing");
        };
    }



}
actorApp.controller("actorsController", actorsController);
