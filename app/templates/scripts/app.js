;(function (angular) {
    'use strict';

    var app = angular.module('MainApp', ['MainRouter',
        'controllers.Auth', 'controllers.Menu', 'controllers.Pagination', 'controllers.Tabular',
        'services.Pagination', 'services.Tabular',
        'directives.Pagination', 'directives.Tabular', 'directives.showIf']);

    /*
    app.config(['$httpProvider', function ($httpProvider) {
        // CORS
        $httpProvider.interceptors.push('AuthInterceptor');
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }]);

    app.factory('AuthInterceptor', [function () {
        return {
            request: function (config) {
                var token = '';
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
                return config;
            }
        };
    }]);
    */
    
})(angular);
