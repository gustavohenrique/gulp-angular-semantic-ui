;(function (angular) {
    'use strict';

    angular
        .module('controllers.Menu', [])
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$location'];

    function MenuCtrl ($location) {
        var vm = this;
        vm.showBox = function (box) {
            $location.path(box);
        };

    }

})(angular);
