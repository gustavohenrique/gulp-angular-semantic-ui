;(function (angular) {
    'use strict';

    var app = angular.module('AppController', []);

    app.controller('MenuCtrl', ['$scope', 'Global',

        function ($scope, Global) {
            $scope.Global = Global;

            $scope.showBox = function (boxName) {
                Global.activatedBox = boxName;
            };
        }
    ]);

    app.controller('TabularCtrl', ['$scope', 'Global',

        function ($scope, Global) {
            $scope.Global = Global;
        }
    ]);

    app.controller('AuthCtrl', ['$scope', 'Global',

        function ($scope, Global) {
            $scope.Global = Global;
            $scope.user = {
                username: 'wrong-username',
                password: 'pass'
            };

            $scope.enter = function () {
                $scope.isError = true;
            };
        }
    ]);

    app.controller('PaginationCtrl', ['$scope', '$timeout', 'Global', 'paginationService',

        function ($scope, $timeout, Global, paginationService) {
            $scope.Global = Global;
            $scope.currentPage = 1;
            $scope.total = 1;
            $scope.rows = 10;
            $scope.totalPages = 1;
            $scope.isLoading = false;
            $scope.selectedItem = {};

            $scope.remove = function (item, index) {
                if ($scope.items && $scope.items.length > 0) {
                    paginationService.remove(item, function (res) {
                        $scope.items.splice(index, 1);
                    });
                }
            };

            $scope.edit = function (item, index) {
                $scope.selectedItem = {
                    index: index,
                    obj: angular.copy(item)
                };

                Global.activatedBox = Global.constants.PAGINATION_EDIT_ITEM_BOX;
            };

            $scope.save = function () {
                // $timeout is used just for a loading demo
                $scope.isLoading = true;
                $timeout(function () {
                    paginationService.save($scope.selectedItem, function (res) {
                        var item = $scope.selectedItem;
                        $scope.items[item.index] = angular.copy(item.obj);
                        $scope.isLoading = false;
                        cancel();
                    });
                },
                1000);
            };

            var cancel = function () {
                $scope.selectedItem = {};
                Global.activatedBox = Global.constants.PAGINATION_BOX;
            };
            $scope.cancel = cancel;

            var paginate = function (pageNumber) {
                $scope.isLoading = true;
                paginationService.findAll($scope.rows, pageNumber, function (res) {
                    $scope.items = res;
                    $scope.total = res.length;
                    $scope.totalPages = Math.ceil($scope.total / $scope.rows);
                    $scope.isLoading = false;
                });
            };

            $scope.paginate = paginate;

            // Load content when page is ready
            paginate($scope.currentPage);
        }
    ]);

})(angular);
