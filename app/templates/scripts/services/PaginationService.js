;(function (angular) {
    'use strict';

    var URL_BASE = 'https://api.github.com';

    var app = angular.module('services.Pagination', []);

    app.service('paginationService', ['$http',

        function ($http) {
            
            this.findAll = function (perPage, page, success, error) {
                var url = URL_BASE + '/users/gustavohenrique/repos?sort=updated&direction=desc';
                if (page > 0) {
                    url += '&page=' + page;
                }
                if (perPage > 0) {
                    url += '&per_page=' + perPage;
                }
                $http.get(url).success(success).error(error);
            };

            this.edit = function (name, success, error) {
                var url = URL_BASE + '/repos/gustavohenrique/' + name;
                $http.get(url).success(success).error(error);
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
