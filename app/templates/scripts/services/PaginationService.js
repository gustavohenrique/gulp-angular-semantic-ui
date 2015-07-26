;(function (angular) {
    'use strict';

    angular
        .module('services.Pagination', [])
        .service('paginationService', PaginationService);

    PaginationService.$inject = ['$http', '$q', 'Constants'];

    function PaginationService ($http, $q, Constants) {

        this.findAll = function (perPage, page) {
            var url = Constants.baseUrl + '/users/gustavohenrique/repos?sort=updated&direction=desc';
            if (page > 0) {
                url += '&page=' + page;
            }
            if (perPage > 0) {
                url += '&per_page=' + perPage;
            }
            return $http.get(url);
        };

        this.edit = function (name) {
            var url = Constants.baseUrl + '/repos/gustavohenrique/' + name;
            return $http.get(url);
        };

        this.remove = function (item) {
            var id = item.id;
            //$http.delete('http://some-url/?id=' + id).success(success).error(error);
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        };

        this.save = function (item) {
            if (item.hasOwnProperty('id') && item.id > 0) {
                // make a PUT to update url
            }
            else {
                // make a POST to insert url
            }
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        };
    }

})(angular);
