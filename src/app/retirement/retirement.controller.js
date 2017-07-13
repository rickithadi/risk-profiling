angular.module('inspinia').controller('retireController', function(retireService, $scope, $window) {

  $scope.apply = false;
  $scope.percentage = retireService.getPercentage();
  $scope.name = retireService.getName();
  $scope.retIncome=retireService.getRetIncome();
  $scope.income = retireService.getIncome();

  console.log("loacl income", $scope.income)


  $scope.setRetIncome = function() {
  var hold=$scope.percentage/100 * $scope.income;
  retireService.setRetIncome(hold);

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
