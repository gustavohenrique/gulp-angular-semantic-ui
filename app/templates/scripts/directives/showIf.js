;(function (angular) {
    'use strict';

    var app = angular.module('directives.showIf', []);

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

})(angular);
