angular.module('inspinia').controller('retireController', function(retireService, $scope, $window) {

  $scope.apply = false;
var penis=0;
//  $scope.income;
  //$scope.retIncome=0;
  $scope.percentage =70;
  $scope.retIncome = $scope.percentage / 100 * $scope.income;


  // $scope.setName = function(name) {
  //   console.log("setName")
  //   retireService.setName(name);
  // }
  // $scope.getName = function() {
  //   console.log("getName")
  //   retireService.getName();
  // }
  // $scope.setIncome = function(income) {
  //   console.log("setIncome")
  //   retireService.setIncome(income);
  // }
  $scope.getIncome = function() {
    console.log("getIncome")
    retireService.getIncome();
    retireService.income=$scope.income;
    console.log("local income", $scope.income)
  }
  // $scope.setPercentage = function(percentage) {
  //   retireService.setPercentage();
  // }
  $scope.getPercentage = function() {
    retireService.getPercentage();
    retireService.percentage=$scope.percentage;
  }

  $scope.redirect = function() {
    $scope.retIncome = $scope.percentage / 100 * $scope.income;
    console.log("income for retiremnt:", $scope.retIncome);
    $window.location.href = '#/retirement/retirement2';
  }

  $scope.slider_init_options = {
    min: 0,
    max: 150,
    from: 70,
    step: 5,
    type: 'single',
    postfix: "% ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onFinish: function(data) {
      if (data.input.attr('id') == 'slider_init') {
        console.log('slider_init:', data.from);

        $scope.percentage = data.from
        console.log($scope.percentage);

      }

    }

  };

  var init = function () {
      $scope.getIncome();
      $scope.getPercentage();
};
// and fire it after definition
init();

})
