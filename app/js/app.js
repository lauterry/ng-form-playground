var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope, $http){

    $http.get('/server/api/users')
        .success(function(data){
            $scope.users = data.users;
        });

    $scope.confirm = function(user){
        $http.post('/server/api/users', user)
            .success(function(){
                $scope.users.push(user);
                $scope.user = {};
            });
    }

    $scope.calculate = function(value){
        $scope.user.total = 55.65 * value;
    }

});