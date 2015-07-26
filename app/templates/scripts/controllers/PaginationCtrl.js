;(function (angular) {
    'use strict';

    angular
        .module('controllers.Pagination', [])
        .controller('PaginationCtrl', PaginationCtrl);

    PaginationCtrl.$inject = [
        '$location', '$routeParams',
        '$timeout', 'paginationService'
    ];

    function PaginationCtrl ($location, $routeParams, $timeout, paginationService) {
        var vm = this;
        vm.paginationData = {
            perPage: 5,
            currentPage: 1
        };
        vm.isLoading = false;
        vm.remove = remove;
        vm.save = save;
        vm.paginate = paginate; // called by directives

        if ($routeParams.name) {
            edit($routeParams.name);
        }
        else {
            paginate(vm.paginationData.currentPage);
        }

        function remove (item, index) {
            if (vm.paginationData.items && vm.paginationData.items.length > 0) {
                paginationService.remove(item)
                .then(function (res) {
                    vm.paginationData.items.splice(index, 1);
                });
            }
        }

        function save () {
            // $timeout is used just for simulate a "loading"
            vm.isLoading = true;
            $timeout(function () {
                paginationService.save(vm.selectedItem)
                .then(function (res) {
                    var item = vm.selectedItem;
                    //vm.items[item.index] = angular.copy(item.obj);
                    vm.isLoading = false;
                });
            },
            1000);
        }

        function calculateTotalPages () {
            paginationService.findAll(0, 0)
            .success(function (res) {
                var paginationData = vm.paginationData || {};
                paginationData.total = res.length;
                paginationData.totalPages = Math.ceil(paginationData.total / paginationData.perPage);
            })
            .error(function (res) {
                console.log('Error trying to get the total of repositories', res);
            });
        }
        calculateTotalPages();

        function paginate (pageNumber, perPage) {
            vm.isLoading = true;
            var paginationData = vm.paginationData || {};
            if (! perPage) {
                perPage = paginationData.perPage;
            }
            paginationService.findAll(perPage, pageNumber)
            .success(function (res) {
                paginationData.items = res;
                vm.isLoading = false;
            })
            .error(function (res) {
                console.log('Error getting the repositories list', res);
            });
        }

        function edit (name) {
            paginationService.edit(name)
            .success(function (res) {
                vm.selectedItem = res;
            })
            .error(function (res) {
                console.log('Error getting the repository by name ' + name, res);
            });
        }

    }

})(angular);
