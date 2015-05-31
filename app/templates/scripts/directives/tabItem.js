;(function (angular) {
    'use strict';

    var app = angular.module('directives.Tabular', []);

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

})(angular);
