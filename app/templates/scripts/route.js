;(function (angular) {
    'use strict';

    var app = angular.module('MainRouter', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/pagination', {
                    templateUrl: 'partials/pagination-list.html',
                    controller: 'PaginationCtrl'
                }).
                when('/pagination/edit/:name', {
                    templateUrl: 'partials/pagination-edit.html',
                    controller: 'PaginationCtrl'
                }).
                when('/login', {
                    templateUrl: 'partials/auth.html',
                    controller: 'AuthCtrl'
                }).
                when('/tabs', {
                    templateUrl: 'partials/tabular.html',
                    controller: 'TabularCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);
})(angular);
