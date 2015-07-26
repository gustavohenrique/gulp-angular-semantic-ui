;(function (angular) {
    'use strict';

    angular
        .module('services.Tabular', [])
        .service('tabularService', TabularService);

    TabularService.$inject = ['$http'];

    function TabularService ($http) {
        this.findAll = function () {
            //return $http.get('url-here');

        };
    }

})(angular);
