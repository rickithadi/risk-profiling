angular.module('inspinia').controller('retireController', function(retireService, $scope, $window) {

  $scope.apply = false;
$scope.name=retireService.getName();

  $scope.income=retireService.getIncome();

  console.log("loacl income", $scope.income)
  //$scope.retIncome=0;
  $scope.percentage=retireService.getPercentage();
  $scope.retIncome = $scope.percentage / 100 * $scope.income;

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


//   var init = function () {
//     console.log("loacl inc", $scope.income)
//     //  $scope.getIncome();
//       $scope.getPercentage();
//       $scope.getName();
//       console.log("hi")
// };
// // and fire it after definition
// init();

})
