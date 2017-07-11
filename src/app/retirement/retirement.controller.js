angular.module('inspinia').controller('retireController', function($scope) {

  var test=5;
$scope.percentage=0;
  $scope.slider_init_options = {
    min: 0,
    max: 150,
    from: 70,
    step: 10,
    type: 'single',
    postfix: "% ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onFinish: function(data) {
      if (data.input.attr('id') == 'slider_init') {
        console.log('slider_init:' , data.from);
        test = data.from;
        console.log("test", test);
        $scope.percentage = data.from
        console.log($scope.percentage);

      }

    }

  };

})
