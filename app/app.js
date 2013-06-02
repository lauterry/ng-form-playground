var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope){

    $scope.users = [];

    $scope.confirm = function(user){
        $scope.users.push(user);
        // only available from angularjs 1.1.1
        // https://github.com/angular/angular.js/pull/1127
        $scope.myForm.$setPristine();
        $scope.user = {};
    }

});