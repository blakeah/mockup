function newActor($scope) {

    $scope.profile = [{
            "name": "",
            "gender": ""
            // "description": "",
            // "height": "",
            // "img": "",
            // "hair": "",
            // "eyes": "",
        }];

    $scope.sendMe = function() {
            var data = $scope.profile;
            toArray(data);
        }
}
actorApp.controller("newActor", newActor);
