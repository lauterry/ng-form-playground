var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope){

    $scope.users = [];

    $scope.add = function(user){
        $scope.users.push(user);
        $scope.user = {};
    }

});