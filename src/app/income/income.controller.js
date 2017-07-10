angular.module('inspinia').controller('incomeController', function ($scope, incomeService) {


  $scope.income = incomeService.list();
 $scope.newinc = {};


     $scope.saveinc = function () {
       console.log("adding income");
         incomeService.save($scope.newinc);
         $scope.newinc = {};
     }


     $scope.delete = function (id) {

         incomeService.delete(id);
         if ($scope.newinc.id == id) $scope.newinc = {};
     }


     $scope.edit = function (id) {
         $scope.newinc = angular.copy(incomeervice.get(id));
     }
 })
