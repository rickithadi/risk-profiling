angular.module('inspinia').controller('moduleController', function ($scope, modService) {

    $scope.modules = modService.list();
  $scope.newmod={};
    $scope.savemodule = function () {
      modService.save($scope.newmod);
        $scope.newmod = {};
    }


    $scope.delete = function (mod_id) {

        modService.delete(mod_id);
        if ($scope.newmod.mod_id != null && $scope.newmod.mod_id == mod_id) $scope.newmod = {};
    }



    $scope.view = function (mod_id) {
        $scope.newmod = angular.copy(modService.get(mod_id));
    }
})
