angular.module('inspinia').controller('retireController', function($scope, $window) {

  $scope.apply = false;
  $scope.income = 6000;
$scope.retIncome=0;
  $scope.percentage = 70;
  //$scope.retIncome=$scope.percentage/100 *$scope.income;
  $scope.redirect = function() {
    $scope.retIncome = $scope.percentage / 100 * $scope.income;
    console.log("income for retiremnt:",   $scope.retIncome);
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

})
