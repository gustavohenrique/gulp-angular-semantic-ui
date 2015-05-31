;(function (angular) {
    'use strict';

    var app = angular.module('controllers.Pagination', []);

    app.controller('PaginationCtrl', ['$scope', '$location', '$routeParams',
        '$timeout', 'paginationService',

        function ($scope, $location, $routeParams, $timeout, paginationService) {
            $scope.paginationData = {
                perPage: 5,
                currentPage: 1
            };
            $scope.isLoading = false;

            $scope.remove = function (item, index) {
                if ($scope.paginationData.items && $scope.paginationData.items.length > 0) {
                    paginationService.remove(item, function (res) {
                        $scope.paginationData.items.splice(index, 1);
                    });
                }
            };

            $scope.save = function () {
                // $timeout is used just for simulate a "loading"
                $scope.isLoading = true;
                $timeout(function () {
                    paginationService.save($scope.selectedItem, function (res) {
                        var item = $scope.selectedItem;
                        //$scope.items[item.index] = angular.copy(item.obj);
                        $scope.isLoading = false;
                    });
                },
                1000);
            };

            var calculateTotalPages = function () {
                paginationService.findAll(0, 0, function (res) {
                    var paginationData = $scope.paginationData || {};
                    paginationData.total = res.length;
                    paginationData.totalPages = Math.ceil(paginationData.total / paginationData.perPage);
                },
                function (res) {
                    console.log('Error trying to get the total of repositories', res);
                });
            };
            calculateTotalPages();

            var paginate = function (pageNumber, perPage) {
                $scope.isLoading = true;
                var paginationData = $scope.paginationData || {};
                if (! perPage) {
                    perPage = paginationData.perPage;
                }
                paginationService.findAll(perPage, pageNumber, function (res) {
                    paginationData.items = res;
                    $scope.isLoading = false;
                },
                function (res) {
                    console.log('Error getting the repositories list', res);
                });
            };

            var edit = function (name) {
                paginationService.edit(name, function (res) {
                    $scope.selectedItem = res;
                },
                function (res) {
                    console.log('Error getting the repository by name ' + name, res);
                });
            };

            if ($routeParams.name) {
                edit($routeParams.name);
            }
            else {
                paginate($scope.paginationData.currentPage);
            }

            // called by directives
            $scope.paginate = paginate;
        }
    ]);

})(angular);
