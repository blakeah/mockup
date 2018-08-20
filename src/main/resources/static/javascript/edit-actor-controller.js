function editActor($scope, $http) {

    $scope.a = angular.copy($scope.actor);

    $scope.save = function(a) {

        console.log("saving" , a);

        $http.post("http://localhost:8080/dev/api/saveactor" , a)
            .success(function(data) {
                    console.log('success', data);
                    $scope.actor = data;

                    for (var i = 0; i < $scope.actors.length; i++) {
                        if ($scope.actors[i].id === data.id) {
                            $scope.actors[i] = data;
                        }
                    }

                    })
            .error(function(data, status, headers, config) {
                    console.log('error', data);
                    });
    }
}
actorApp.controller("editActor", editActor);
