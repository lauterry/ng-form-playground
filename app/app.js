var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope){

    $scope.users = [
        {
            fullname : 'Lau Thierry',
            email : 'thierlau@gmail.com',
            arrival : '2013-03-28',
            night : 5,
            total : 550.65
        },
        {
            fullname : 'Letélié Sébastien',
            email : 'sebastien.letelie@gmail.com',
            arrival : '2013-12-23',
            night : 3,
            total : 345.70
        },
        {
            fullname : 'Chatel Thierry',
            email : 'tchatel@gmail.com',
            arrival : '2013-05-14',
            night : 1,
            total : 45.35
        }
    ];

    $scope.confirm = function(user){
        $scope.users.push(user);
        $scope.user = {};
    }

    $scope.calculate = function(value){
        $scope.user.total = 55.65 * value;
    }

});