(function (angular) {
    'use strict';

    var app = angular.module('AppService', []);

    app.service('mainService', ['$http',

        function ($http) {
            
            this.findAll = function (success, error) {
                $http.get('url-here').success(success).error(error);
            }
        }
    ]);


})(angular);
