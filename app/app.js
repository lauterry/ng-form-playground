var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope){

    $scope.users = [
        {
            fullname : 'Thierry Lau',
            email : 'lau.t@sfeir.com',
            arrival : '2013-12-23',
            night : 4,
            total : 222.6
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
        $scope.user.total = 55.65 * value;
    }

});

formApp.filter('moon', function(){

    var MOON = {
        1 : '\u263D',
        2 : '\u263D\u263D',
        3 : '\u263D\u263D\u263D',
        4 : '\u263D\u263D\u263D\u263D',
        5 : '\u263D\u263D\u263D\u263D\u263D'
    }

    return function(value){
        return MOON[value];
    }
})