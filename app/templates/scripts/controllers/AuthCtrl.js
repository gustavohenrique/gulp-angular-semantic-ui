;(function (angular) {
    'use strict';

    var app = angular.module('controllers.Auth', []);

    app.controller('AuthCtrl', ['$scope',

        function ($scope) {
            $scope.user = {
                username: 'wrong-username',
                password: 'wrong-password'
            };

            $scope.enter = function () {
                $scope.isError = true;
            };
        }
    ]);

})(angular);
