// Element locators
var actorApp = angular.module('actorApp', ['ui.bootstrap' ]);

function actorsController($scope, $http, $uibModal) {

    $scope.init = function() {
    // Getting Local JSON Data

        $http.get("http://localhost:8080/dev/api/actors").
            then(function(response) {
                $scope.actors = response.data;
        });
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

    // New Actor Form Modal
    $scope.newActor = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'newactor',
            scope: $scope,
            size: 'lg',
    });
    $scope.close = function() {
        modalInstance.close();
    };
    }

    $scope.editActor = function(a) {
        $scope.a = a;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'editactor',
            scope: $scope,
            size: 'lg',
    });
    $scope.close = function() {
        modalInstance.close();
    };
    }

    // Target Individual Actor to Display in Modal
    $scope.view = function(a) {
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


    // modalInstance.result.then(function(data) {
    //
    //     console.log("saving dialogue" , data);
    //
    //     $scope.a.name = "Changing Name";
    //
    //     $http.post("http://localhost:8080/dev/api/saveactor" , $scope.a).success(function(data) {
    //         console.log('success', data);
    //             }).error(function(data, status, headers, config) {
    //                 console.log('error', data);
    //         });
    //     },
    //     function() {
    //         console.log('saved dialogue' + new Date() + data);
    //     });
    //     $scope.close = function() {
    //         modalInstance.close();
    //     };

    }


}
actorApp.controller("actorsController", actorsController);
