;(function (angular) {
    'use strict';

    var app = angular.module('directives.Pagination', []);

    app.directive('pagination', [function () {
        return {
            restrict: 'E',
            template: '<div class="ui pagination menu"> \
                <a class="icon item" ng-click="vm.previous()"><i class="left arrow icon"></i></a> \
                <a class="icon disabled item">{{ vm.paginationData.currentPage }} / {{ vm.paginationData.totalPages }}</a> \
                <a class="icon item" ng-click="vm.next()"><i class="right arrow icon"></i></a> \
                </div>',
            scope: '=',
            link: function (scope, element, attrs) {
                var vm = scope.vm;
                vm.paginationData.currentPage = 1;
                vm.next = function () {
                    vm.paginationData.currentPage++;
                    if (vm.paginationData.currentPage > vm.paginationData.totalPages) {
                        vm.paginationData.currentPage = vm.paginationData.totalPages;
                    }
                    vm.paginate(vm.paginationData.currentPage);
                };

                vm.previous = function () {
                    vm.paginationData.currentPage--;
                    if (vm.paginationData.currentPage < 1) {
                        vm.paginationData.currentPage = 1;
                    }
                    vm.paginate(vm.paginationData.currentPage);
                };
            }
        };
    }]);

})(angular);
