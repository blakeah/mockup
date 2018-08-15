function editActor($scope) {

    $scope.arrayToString = function(string){
        return string.join(", ");
    };

}
actorApp.controller("editActor", editActor);
