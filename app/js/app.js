var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope, $http){

    $http.get('server/api/users')
        .success(function(data){
            $scope.users = data.users;
        });

    $scope.confirm = function(user){

        $http.post('server/api/users', user)
            .success(function(data){
                $scope.users.push(user);
                // only available from angularjs 1.1.1
                // https://github.com/angular/angular.js/pull/1127
                $scope.myForm.$setPristine();
                $scope.user = {};
            });
    }

    $scope.calculate = function(value){
        $scope.user.total = 55.65 * value;
    }

    $scope.checkEmail = function(){
        if($scope.user.email === $scope.user.email2){
            $scope.myForm.email.$setValidity('samemail', true);
            $scope.myForm.email2.$setValidity('samemail', true);
        } else {
            $scope.myForm.email.$setValidity('samemail', false);
            $scope.myForm.email2.$setValidity('samemail', false);
        }
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