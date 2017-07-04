angular.module('inspinia').controller('debtController', function ($scope, debtService) {


  $scope.debt = debtService.list();
 $scope.newdeb = {};


     $scope.savedeb = function () {
       console.log("adding debt");
         debtService.save($scope.newdeb);
         $scope.newdeb = {};
     }


     $scope.delete = function (id) {

         debtervice.delete(id);
         if ($scope.newdeb.id == id) $scope.newdeb = {};
     }


     $scope.edit = function (id) {
         $scope.newdeb = angular.copy(debtervice.get(id));
     }
 })
