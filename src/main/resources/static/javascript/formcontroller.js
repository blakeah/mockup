
function post($scope) {

    $scope.profile = [{
            "name": "",
            "gender": ""
            // "description": "",
            // "height": "",
            // "img": "",
            // "hair": "",
            // "eyes": "",
        }];

    $scope.init = function(){
            var result = [];
            for (var prop in obj) {
                var value = obj[prop];
                console.log(prop);
                if (typeof value === 'object') {
                    result.push(toArray(value));
                    console.log(result);
                } else {
                    result.push(value);
                    console.log(result);
                }
            }
            return result;
        }

        $scope.sendMe = function() {
            var data = $scope.profile;
            toArray(data);
            alert(JSON.stringify(toArray(data)));
        }

        $scope.Add = function() {
            //Add the new item to the Array.
            var newActor = {};
            newActor.name = $scope.name;
            newActor.gender = $scope.gender;

            $scope.profile.push(newActor);

            $scope.name = "";
            $scope.gender = "";
        }
}
actorApp.controller("post", post);
