// Element locators


'use strict';
var faveApp = angular.module('faveApp', ['angular-toArrayFilter']);

(function() {

    function ActorJsController($scope) {
        $scope.actors = [
            {   name: 'John Smith',
                gender: 'Male',
                description: 'Standard male model actor who is good in all roles.  This actor will has experience in Broadway Musicals and is very talented',
                height: '5\" 10\'',
                img: 'images/profile-male.jpg',
                hair: 'Black',
                eyes: 'Brown',
                traits : [
                    'Shy',
                    'Nerdy'
                ]
            },
            {   name: 'Bob Green',
                gender: 'Male',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard male model actor who is good in all roles.',
                height: '5\" 11\'',
                img: 'images/profile-male.jpg',
                hair: 'Brown',
                eyes: 'Hazel',
                traits : [
                    'Athletic',
                    'Slim-Build'
                ]
            },
            {   name: 'Stan Brown',
                gender: 'Male',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard male model actor who is good in all roles.',
                height: '5\" 8\'',
                img: 'images/profile-male.jpg',
                hair: 'Bald',
                eyes: 'Blue',
                traits : [
                    'Serious',
                    'Bulky',
                    'Intimidating'
                ]
            },
            {   name: 'Caroline Yellow',
                gender: 'Female',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard female model actor who is good in all roles.',
                height: '5\" 4\'',
                img: 'images/profile-female.jpg',
                hair: 'White',
                eyes: 'Blue',
                traits : [
                    'Shy1231',
                    'someotherone'
                ]
            },
            {   name: 'Stacie Blue',
                gender: 'Female',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard female model actor who is good in all roles.',
                height: '5\" 5\'',
                img: 'images/profile-female.jpg',
                hair: 'black',
                eyes: 'Green',
                traits : [
                    'Shy1231',
                    'someotherone'
                ]
            },
            {   name: 'Anya Maroon',
                gender: 'Female',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard female model actor who is good in all roles.',
                height: '5\" 9\'',
                img: 'images/profile-female.jpg',
                hair: 'Brown',
                eyes: 'Blue',
                traits : [
                    'Shy1231',
                    'someotherone'
                ]
            },
        ];
    }
    faveApp.controller("ActorJsController", ActorJsController);

    angular.module('angular-toArrayFilter', [])

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
