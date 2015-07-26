;(function (angular) {
    'use strict';

    var app = angular.module('directives.Tabular', []);

    app.directive('tabItem', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var ACTIVE_CLASS = 'active';
                var id = attrs.id;

                element.on('click', changeTab);

                function removeClass (el) {
                    el.classList.remove(ACTIVE_CLASS);
                }

                function changeTab () {
                    // Remove the active class from all tab items and tab contents
                    Array.prototype.slice.call(document.querySelectorAll('.tab.active')).map(removeClass);

                    // Add the active class to current tab and it content
                    element.addClass(ACTIVE_CLASS);
                    document.querySelector('.tab.segment.' + id).classList.add(ACTIVE_CLASS);
                }
            }
        };
    });

})(angular);