;(function (angular) {
    'use strict';

    var app = angular.module('AppDirectives', []);

    app.directive('tabItem', function () {
        return {
            restrict: 'E',
            template: '<a class="item {{activeClass}} {{id}}" ng-click="changeTab()" style="cursor:pointer">{{text}}</a>',
            scope: {
                active: '=',
                id: '=',
                text: '='
            },
            link: function (scope, element, attrs) {
                var ACTIVE_CLASS = 'active';
                scope.activeClass = (scope.active) ? ACTIVE_CLASS : '';

                scope.changeTab = function () {
                    var f = function (el) {
                        el.classList.remove('active');
                    };
                    Array.prototype.slice.call(document.querySelectorAll('a.item')).map(f);
                    Array.prototype.slice.call(document.querySelectorAll('.tab.segment')).map(f);
                    document.querySelector('.item.' + scope.id).classList.add(ACTIVE_CLASS);
                    document.querySelector('.tab.segment.' + scope.id).classList.add(ACTIVE_CLASS);
                };
            }
        };
    });

    app.directive('showIf', function () {
        return {
            restrict: 'A',
            scope: '&',
            link: function (scope, element, attrs) {
                attrs.$observe('showIf', function(value) {
                    if (value === true || value === 'true') {
                        element.removeClass('hide');
                    }
                    else {
                        element.addClass('hide');
                    }
                });
            }
        };
    });

    app.directive('pagination', [function () {
        return {
            restrict: 'E',
            template: '<div class="ui pagination menu"> \
                <a class="icon item" ng-click="previous()"><i class="left arrow icon"></i></a> \
                <a class="icon disabled item">{{ currentPage }} / {{ totalPages }}</a> \
                <a class="icon item" ng-click="next()"><i class="right arrow icon"></i></a> \
                </div>',
            scope: '=',
            link: function (scope, element, attrs) {
                
                scope.next = function () {
                    scope.currentPage++;
                    if (scope.currentPage > scope.totalPages) {
                        scope.currentPage = scope.totalPages;
                    }
                    scope.paginate(scope.currentPage);
                };

                scope.previous = function () {
                    scope.currentPage--;
                    if (scope.currentPage < 1) {
                        scope.currentPage = 1;
                    }
                    scope.paginate(scope.currentPage);
                };
            }
        };
    }]);


})(angular);
