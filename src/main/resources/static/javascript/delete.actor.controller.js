function deleteActor($scope, $http) {

            $scope.a = $scope.actor;

            $scope.delete = function(a) {
                var a = $scope.a;
                console.log("deleting" , a);

                $http.post("/dev/api/deleteactor" , a)
                    .success(function(data) {
                            console.log('success', data);
                            
                            })
                    .error(function(data, status, headers, config) {
                            console.log('error', data);
                            });
            }
}
actorApp.controller("deleteActor", deleteActor);
