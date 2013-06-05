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