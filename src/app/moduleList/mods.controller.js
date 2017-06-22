angular.module('inspinia').controller('moduleController', function ($scope, modService) {

    $scope.modules = modService.list();

    $scope.savemodule = function () {
      modService.save($scope.newmod);
        $scope.newmod = {};
    }


    $scope.delete = function (id) {

        modService.delete(id);
        if ($scope.newmod.id == id) $scope.newmod = {};
    }


    $scope.edit = function (id) {
        $scope.newmod = angular.copy(modService.get(id));
    }
})
