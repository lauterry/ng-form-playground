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
        },
        {
            fullname : 'Pierre Martin',
            email : 'pierre.martin@yahoo.com',
            arrival : '2012-04-30',
            night : 3,
            total : 166.95
        },
        {
            fullname : 'Claire Dupont',
            email : 'claire.dupont@gmail.com',
            arrival : '2012-04-12',
            night : 5,
            total : 278.25
        },
        {
            fullname : 'Pauline Wilson',
            email : 'pauline.wilsons@gmail.com',
            arrival : '2014-01-10',
            night : 1,
            total : 55.65
        },
        {
            fullname : 'Pauline Wilson',
            email : 'pauline.wilsons@gmail.com',
            arrival : '2009-02-20',
            night : 5,
            total : 278.25
        }
    ];


    $scope.confirm = function(user){
        $scope.users.push(user);
        // only available from angularjs 1.1.1
        // https://github.com/angular/angular.js/pull/1127
        $scope.myForm.$setPristine();
        $scope.user = {};
    }

    $scope.calculate = function(value){
        $scope.user.total = 55.65 *value;
    }

    $scope.checkPassword = function(){
        if($scope.user.email === $scope.user.email2){
            $scope.myForm.email.$setValidity('password', true);
            $scope.myForm.email2.$setValidity('password', true);
        } else {
            $scope.myForm.email.$setValidity('password', false);
            $scope.myForm.email2.$setValidity('password', false);
        }
    }
});