(function (angular) {
    'use strict';

    var app = angular.module('AppFactory', []);

    app.factory('Global', [

        function () {
            return {
                isAuthenticated: false
            }
        }

    ]);


})(angular);
