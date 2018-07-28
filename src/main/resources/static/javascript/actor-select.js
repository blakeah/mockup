// Element locators
'use strict';
var faveApp = angular.module('faveApp', ['angular-alphaOrganizer' , 'limitTo']);

(function() {
    function ActorJsController($scope) {
        $scope.actors = [
            {   name: 'Frankie Burke',
                gender: 'Male',
                description: 'There\'s more than meets the eye in the case of Frankie Burke, but at the very least you\'ll find out hes dutiful and contemplative. Of course hes also lovable, gracious and honest, but in smaller doses and they\'re often spoiled by habits of being agonizing as well. His dutiful nature though, this is what he\'s kind of cherished for. There are many times when friends count on this and his insight when they\'re in need of support.',
                height: '6\' 2\"',
                img: '../images/profile-male.jpg',
                hair: 'Black',
                eyes: 'Brown',
                traits : [
                    'Shy',
                    'Nerdy',
                    'Funny'
                ]
            },
            {   name: 'Nathan Hunt',
                gender: 'Male',
                description: 'There\'s more than meets the eye in the case of Nathan Hunt, but two things you\'ll never forget are that hes energetic and protective. Of course he\'s also clever, cooperative and active, but those are often overshadowed by tendencies of being crude as well.',
                height: '5\' 11\"',
                img: '../images/profile-male.jpg',
                hair: 'Brown',
                eyes: 'Hazel',
                traits : [
                    'Athletic',
                    'Slim-Build',
                    'Serious',
                    'Action'
                ]
            },
            {   name: 'Owen Lane',
                gender: 'Male',
                description: 'Few know the true Owen Lane, but the two traits most people enjoy the most are that he\'s individualistic and organized. Of course he\'s also reflective, forgiving and witty, but these are in a way balance by being egocentric as well.  His individualism though, this is what he\'s often admired for. Friend\'s tend to count on this and his intuition whenever they need cheering up.',
                height: '6\' 1\"',
                img: '../images/profile-male.jpg',
                hair: 'Bald',
                eyes: 'Blue',
                traits : [
                    'Serious',
                    'Bulky',
                    'Intimidating',
                    'Action'
                ]
            },
            {   name: 'Madison Doyle',
                gender: 'Female',
                description: 'A lot can be said of Madison Doyle, but the biggest two things to know are that she\'s romantic and exciting. Of course shes also active, focused and charismatic, but theyre tainted by and mixed with habits of being lazy as well.  Her romantic nature though, this is what she\'s so well-liked for. People regularly count on this and her focus when they\'re feeling down.',
                height: '6\' 2\"',
                img: '../images/profile-female.jpg',
                hair: 'White',
                eyes: 'Blue',
                traits : [
                    'Snarky',
                    'Witty',
                    'Comedic',
                    'Elderly'
                ]
            },
            {   name: 'Ava Evans',
                gender: 'Female',
                description: 'Many things can be said of Ava Evans, but at the very least you\'ll find out shes spontaneous and playful. Of course she\'s also contemplative, good-natured and enthusiastic, but in a way they\'re lesser traits and tained by behaviors of being venomous as well.',
                height: '5\' 5\"',
                img: '../images/profile-female.jpg',
                hair: 'Black',
                eyes: 'Green',
                traits : [
                    'Composed',
                    'Calming',
                    'Quiet'
                ]
            },
            {   name: 'Kayla Rogers',
                gender: 'Female',
                description: 'Looks can be deceiving when it comes Kayla Rogers, but if there\'s anything you should know it\'s that she\'s open and leaderly. Of course she\'s also reflective, incorruptible and intuitive, but in a way they\'re lesser traits and tained by behaviors of being hostile as well.  Her openness though, this is what she\'s so well-liked for. There are many times when friends count on this and her energy whenever they need cheering up.',
                height: '5\' 9\"',
                img: '../images/profile-female.jpg',
                hair: 'Brown',
                eyes: 'Blue',
                traits : [
                    'Comedic',
                    'Side-kick'
                ]
            },
        ];
    }
    faveApp.controller("ActorJsController", ActorJsController);

    angular.module('angular-alphaOrganizer', [])
    .filter('alpha', function () {
      return function (obj, addKey) {
        if (!(obj instanceof Object)) {
          return obj;
        }
        if ( addKey === false ) {
          return Object.values(obj);
        } else {
          return Object.keys(obj).map(function (key) {
            return Object.defineProperty(obj[key], '$key', { enumerable: false, value: key});
          });
        }
      };
    });

    angular.module('limitTo', [])
    .controller('limit', ['$scope', function($scope) {
      $scope.letterLimit = 200;
    }]);

    // function FilmJsController($scope) {
    //     $scope.films = [
    //         {   title: 'Citizen Kane',
    //             director: 'Orson Welles',
    //             year: 1900
    //         },
    //     ];
    // }
    // faveApp.controller("FilmJsController", FilmJsController);
    //
    // function BookJsController($scope) {
    //     $scope.books = [
    //         {   title: 'Lolita',
    //             author: 'Vladimir Nabokov'
    //         },
    //         {   title: 'Nineteen Eighty Four',
    //             author: 'George Orwell'
    //         },
    //     ];
    // }
    // faveApp.controller("BookJsController", BookJsController);
    //
    // function SongJsController($scope) {
    //     $scope.songs = [
    //         {title: 'Sheela-Na-Gig', artist: 'PJ Harvey'},
    //         {title: 'Sky Saw', artist: 'Brian Eno'},
    //     ];
    // }
    // faveApp.controller("SongJsController", SongJsController);

})();
