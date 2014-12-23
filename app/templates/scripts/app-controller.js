(function (angular) {
    'use strict';

    var app = angular.module('AppController', []);

    app.controller('MainCtrl', ['$scope', '$timeout',

        function ($scope, $timeout) {
            $scope.isLoading = true;
            $timeout(function () {
                $scope.isLoading = false;
            },
            1000);

            $scope.contacts = [{
                name: 'Gustavo Henrique',
                site: 'about.me/gustavohenrique'
            }];

            $scope.insert = function () {
                $scope.contacts.push({
                    name: $scope.name,
                    site: $scope.site
                });
            };
        }
    ]);

})(angular);
