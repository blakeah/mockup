'use strict';
var faveApp = angular.module('faveApp', []);

(function() {

    function ActorJsController($scope) {
        $scope.actors = [
            {   name: 'John Smith',
                gender: 'Male',
                description: 'Standard male model actor who is good in all roles.  This actor will has experience in Broadway Musicals and is very talented',
                height: '5\" 10\'',
                img: 'images/profile0.png'
            },
            {   name: 'Joe Green',
                gender: 'Male',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard male model actor who is good in all roles.',
                height: '5\" 11\'',
                img: 'images/profile1.png'
            },
            {   name: 'Stan Brown',
                gender: 'Male',
                description: 'This actor will has experience in Broadway Musicals and is very talented.  Standard male model actor who is good in all roles.',
                height: '5\" 8\'',
                img: 'images/profile2.png'
            },
        ];
    }
    faveApp.controller("ActorJsController", ActorJsController);

    function FilmJsController($scope) {
        $scope.films = [
            {   title: 'Citizen Kane',
                director: 'Orson Welles',
                year: 1900
            },
        ];
    }
    faveApp.controller("FilmJsController", FilmJsController);

    function BookJsController($scope) {
        $scope.books = [
            {   title: 'Lolita',
                author: 'Vladimir Nabokov'
            },
            {   title: 'Nineteen Eighty Four',
                author: 'George Orwell'
            },
        ];
    }
    faveApp.controller("BookJsController", BookJsController);

    function SongJsController($scope) {
        $scope.songs = [
            {title: 'Sheela-Na-Gig', artist: 'PJ Harvey'},
            {title: 'Sky Saw', artist: 'Brian Eno'},
        ];
    }
    faveApp.controller("SongJsController", SongJsController);

})();
