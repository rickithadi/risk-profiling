angular.module('inspinia').controller('detailController', function(retireService, $scope) {

//$scope.income=0; 
  $scope.setName = function(name) {
    console.log("setName")
    retireService.setName(name);
  }

  $scope.setIncome = function(income) {
    console.log("setIncome")
    retireService.setIncome(income);
  }



})
