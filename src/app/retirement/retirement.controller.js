angular.module('inspinia').controller('retireController', function(retireService, $scope, $window) {

  $scope.apply = false;
  $scope.percentage = retireService.getPercentage();
  $scope.name = retireService.getName();
  $scope.retIncome=retireService.getRetIncome();
  $scope.income = retireService.getIncome();

  console.log("local income", $scope.income)


  $scope.setRetIncome = function() {
  var hold=$scope.percentage/100 * $scope.income;
  retireService.setRetIncome(hold);

  }


  $scope.setName = function(name) {
    console.log("setName")
    retireService.setName(name);
  }

  $scope.setIncome = function(income) {
    console.log("setIncome")
    retireService.setIncome(income);
  }

  $scope.setDuration = function(duration) {
    console.log("setDuration")
    retireService.setDuration(duration);
  }

  $scope.setAge = function(age) {
    console.log("setAge")
    retireService.setAge(age);
  }

  $scope.setRetAge = function(retAge) {
    console.log("setRetAge")
    retireService.setRetAge(retAge);
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
