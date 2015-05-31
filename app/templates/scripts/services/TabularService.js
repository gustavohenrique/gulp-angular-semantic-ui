;(function (angular) {
    'use strict';

    var app = angular.module('services.Tabular', []);

    app.service('tabularService', ['$http',

        function ($http) {
            
            this.findAll = function (success, error) {
                //$http.get('url-here').success(success).error(error);
                success();
            };
        }
    ]);

})(angular);
