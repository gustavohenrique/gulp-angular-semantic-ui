;(function (angular) {
    'use strict';

    var app = angular.module('directives.Pagination', []);

    app.directive('pagination', [function () {
        return {
            restrict: 'E',
            template: '<div class="ui pagination menu"> \
                <a class="icon item" ng-click="previous()"><i class="left arrow icon"></i></a> \
                <a class="icon disabled item">{{ paginationData.currentPage }} / {{ paginationData.totalPages }}</a> \
                <a class="icon item" ng-click="next()"><i class="right arrow icon"></i></a> \
                </div>',
            scope: '=',
            link: function (scope, element, attrs) {
                scope.paginationData.currentPage = 1;
                scope.next = function () {
                    scope.paginationData.currentPage++;
                    if (scope.paginationData.currentPage > scope.paginationData.totalPages) {
                        scope.paginationData.currentPage = scope.paginationData.totalPages;
                    }
                    scope.paginate(scope.paginationData.currentPage);
                };

                scope.previous = function () {
                    scope.paginationData.currentPage--;
                    if (scope.paginationData.currentPage < 1) {
                        scope.paginationData.currentPage = 1;
                    }
                    scope.paginate(scope.paginationData.currentPage);
                };
            }
        };
    }]);

})(angular);
