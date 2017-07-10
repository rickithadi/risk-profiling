angular.module('inspinia').controller('expensesController', function ($scope, expensesService) {


  $scope.expenses = expensesService.list();
 $scope.newexpense = {};


     $scope.saveexpense = function () {
       console.log("adding expenses");
         expensesService.save($scope.newexpense);
         $scope.newexpense = {};
     }


     $scope.delete = function (id) {

         expensesService.delete(id);
         if ($scope.newexpense.id == id) $scope.newexpense = {};
     }


     $scope.edit = function (id) {
         $scope.newexpense = angular.copy(expenseservice.get(id));
     }
 })
