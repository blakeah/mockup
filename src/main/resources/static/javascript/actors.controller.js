// Element locators
var faveApp = angular.module('faveApp', ['ui.bootstrap' , 'limitTo']);

function actorsController($scope, $http, $uibModal) {

    $scope.actors = [{
            id: 0001,
            name: 'Nathan Hunt',
            gender: 'Male',
            description: 'There\'s more than meets the eye in the case of Nathan Hunt, but two things you\'ll never forget are that hes energetic and protective. Of course he\'s also clever, cooperative and active, but those are often overshadowed by tendencies of being crude as well.',
            height: '5\' 11\"',
            img: '../images/profile-male.jpg',
            hair: 'Brown',
            eyes: 'Hazel',
            traits: [
                'Athletic',
                'Slim-Build',
                'Serious',
                'Action'
            ]
        },
        {
            id: 0002,
            name: 'Madison Doyle',
            gender: 'Female',
            description: 'A lot can be said of Madison Doyle, but the biggest two things to know are that she\'s romantic and exciting. Of course shes also active, focused and charismatic, but theyre tainted by and mixed with habits of being lazy as well.  Her romantic nature though, this is what she\'s so well-liked for. People regularly count on this and her focus when they\'re feeling down.',
            height: '4\' 11\"',
            img: '../images/profile-female.jpg',
            hair: 'White',
            eyes: 'Blue',
            traits: [
                'Snarky',
                'Witty',
                'Comedic',
                'Elderly'
            ]
        },
        {
            id: 0003,
            name: 'Owen Lane',
            gender: 'Male',
            description: 'Few know the true Owen Lane, but the two traits most people enjoy the most are that he\'s individualistic and organized. Of course he\'s also reflective, forgiving and witty, but these are in a way balance by being egocentric as well.  His individualism though, this is what he\'s often admired for. Friend\'s tend to count on this and his intuition whenever they need cheering up.',
            height: '6\' 1\"',
            img: '../images/profile-male.jpg',
            hair: 'Bald',
            eyes: 'Blue',
            traits: [
                'Serious',
                'Bulky',
                'Intimidating',
                'Action'
            ]
        },
        {
            id: 0004,
            name: 'Ava Evans',
            gender: 'Female',
            description: 'Many things can be said of Ava Evans, but at the very least you\'ll find out shes spontaneous and playful. Of course she\'s also contemplative, good-natured and enthusiastic, but in a way they\'re lesser traits and tained by behaviors of being venomous as well.',
            height: '5\' 5\"',
            img: '../images/profile-female.jpg',
            hair: 'Black',
            eyes: 'Green',
            traits: [
                'Composed',
                'Calming',
                'Quiet'
            ]
        },
        {
            id: 0005,
            name: 'Frankie Burke',
            gender: 'Male',
            description: 'There\'s more than meets the eye in the case of Frankie Burke, but at the very least you\'ll find out hes dutiful and contemplative. Of course hes also lovable, gracious and honest, but in smaller doses and they\'re often spoiled by habits of being agonizing as well. His dutiful nature though, this is what he\'s kind of cherished for. There are many times when friends count on this and his insight when they\'re in need of support.',
            height: '6\' 2\"',
            img: '../images/profile-male.jpg',
            hair: 'Black',
            eyes: 'Brown',
            traits: [
                'Shy',
                'Nerdy',
                'Funny'
            ]
        },
        {
            id: 0006,
            name: 'Kayla Rogers',
            gender: 'Female',
            description: 'Looks can be deceiving when it comes Kayla Rogers, but if there\'s anything you should know it\'s that she\'s open and leaderly. Of course she\'s also reflective, incorruptible and intuitive, but in a way they\'re lesser traits and tained by behaviors of being hostile as well.  Her openness though, this is what she\'s so well-liked for. There are many times when friends count on this and her energy whenever they need cheering up.',
            height: '5\' 9\"',
            img: '../images/profile-female.jpg',
            hair: 'Brown',
            eyes: 'Blue',
            traits: [
                'Comedic',
                'Side-kick'
            ]
        },
    ];

    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
    });

    $http.get("http://localhost:8080/dev/api/actors").
        then(function(response) {
            $scope.actors = response.data;
    });

    // $http.get(encodeURI("http://localhost:8080/dev/api/actors")).
    // .success(function(response) {
    //         $scope.somevar = response;
    // })
    // .error(function(data, status) {
    //     console.log('Error in status: ', status);
    // });

    // $http.get(encodeURI("http://localhost:8080/dev/api/actors"))
    //     .success(function(response) {
    //         $scope.somevar = response;
    // })
    // $http.get('http://localhost:8080/dev/api/actors');

    $scope.orderByMe = function(m) {
        $scope.myOrderBy = m;
    };

    $scope.view = function(a) {
        $scope.a = a;
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'actorView',
            scope: $scope,
            size: 'lg',
        });
        $scope.close = function () {
            modalInstance.close();
        };
    };
}
faveApp.controller("actorsController", actorsController);
