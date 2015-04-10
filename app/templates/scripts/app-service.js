;(function (angular) {
    'use strict';

    var app = angular.module('AppService', []);

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
                var token = '1dc2be1047838f60217de89cae3d25ce348f20f5418e3db9d73214f18e49ff14';
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
                return config;
            }
        };
    }]);

    app.service('mainService', ['$http',

        function ($http) {
            
            this.findAll = function (success, error) {
                //$http.get('url-here').success(success).error(error);
                success();
            };
        }
    ]);

    app.service('paginationService', ['$http',

        function ($http) {
            
            this.findAll = function (rows, page, success, error) {
                $http.get('https://api.dribbble.com/v1/shots/?page=' + page)
                    .success(success)
                    .error(error);
            };

            this.remove = function (item, success, error) {
                var id = item.id;
                //$http.delete('http://some-url/?id=' + id).success(success).error(error);
                success();
            };

            this.save = function (item, success, error) {
                if (item.hasOwnProperty('id') && item.id > 0) {
                    // make a PUT to update url
                }
                else {
                    // make a POST to insert url
                }
                success();
            };
        }
    ]);


})(angular);
