function FemaleActorJsController($scope) {
    $scope.actress = [
        {   id: 0004,
            name: 'Madison Doyle',
            gender: 'Female',
            description: 'A lot can be said of Madison Doyle, but the biggest two things to know are that she\'s romantic and exciting. Of course shes also active, focused and charismatic, but theyre tainted by and mixed with habits of being lazy as well.  Her romantic nature though, this is what she\'s so well-liked for. People regularly count on this and her focus when they\'re feeling down.',
            height: '4\' 11\"',
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
        {   id: 0005,
            name: 'Ava Evans',
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
        {   id: 0006,
            name: 'Kayla Rogers',
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
faveApp.controller("FemaleActorJsController", FemaleActorJsController);
