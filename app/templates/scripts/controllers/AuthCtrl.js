;(function (angular) {
    'use strict';

    angular
        .module('controllers.Auth', [])
        .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl () {
        var vm = this;
        vm.user = {
            username: 'wrong-username',
            password: 'wrong-password'
        };
        vm.enter = enter;

        function enter () {
            vm.isError = true;
        }
    }

})(angular);
