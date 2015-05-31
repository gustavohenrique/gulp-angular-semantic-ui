;(function (angular) {
    'use strict';

    var app = angular.module('controllers.Menu', []);

    app.controller('MenuCtrl', ['$scope', '$location',

        function ($scope, $location) {
            $scope.showBox = function (box) {
                $location.path(box);
            };

        }
    ]);

})(angular);
