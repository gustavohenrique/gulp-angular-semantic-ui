;(function (angular) {
    'use strict';

    angular
        .module('MainRouter', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/pagination', {
                    templateUrl: 'partials/pagination-list.html',
                    controller: 'PaginationCtrl',
                    controllerAs: 'vm'
                }).
                when('/pagination/edit/:name', {
                    templateUrl: 'partials/pagination-edit.html',
                    controller: 'PaginationCtrl',
                    controllerAs: 'vm'
                }).
                when('/login', {
                    templateUrl: 'partials/auth.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'vm'
                }).
                when('/tabs', {
                    templateUrl: 'partials/tabular.html',
                    controller: 'TabularCtrl',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        ]);
})(angular);
