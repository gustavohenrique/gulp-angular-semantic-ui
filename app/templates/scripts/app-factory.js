;(function (angular) {
    'use strict';

    var app = angular.module('AppFactory', []);

    app.factory('Global', [

        function () {
            return {
                activatedBox: '',
                constants: {
                    LOGIN_BOX: 'login',
                    PAGINATION_BOX: 'pagination',
                    PAGINATION_EDIT_ITEM_BOX: 'pagination_edit_item',
                    TAB_BOX: 'tabular'
                }
            }
        }

    ]);


})(angular);
