angular.module('inspinia').controller('retireController', function($scope,$location) {

  $scope.apply = false;
  $scope.income = 6000;

  $scope.percentage = 70;
 //$scope.retIncome=$scope.percentage/100 *$scope.income;
  $scope.redirect = function() {
     $scope.retIncome=$scope.percentage/100 *$scope.income;
    $location.url('/retirement2.html');
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
