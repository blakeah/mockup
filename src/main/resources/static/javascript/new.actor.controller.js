function newActor($scope, $http) {
    $scope.a = {
            name : " ",
            img : " ",
            description : " ",
            gender : " ",
            height : " ",
            hair : " ",
            eyes : " ",

    };

    $scope.add = function() {
        var a = $scope.a;
        console.log("adding" , a);
        $scope.submissionSuccess = true;

        $http.post("/dev/api/addactor" , a)
            .success(function(data) {
                    console.log('success', data);
                    $scope.actor = data;
                    // for (var i = 0; i < $scope.a.length; i++) {
                    //     if ($scope.a[i].id === data.id) {
                    //         $scope.a[i] = data;
                    //     }
                    // }
                    })
            .error(function(data, status, headers, config) {
                    console.log('error', data);
                    });
    }
}
actorApp.controller("newActor", newActor);
