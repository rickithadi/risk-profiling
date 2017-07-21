angular.module('inspinia').controller('initialSliderController', function(retireService, $scope) {



  $scope.initialAmt=retireService.getinitialAmt();

  $scope.slider_init_options_initial = {
    min: 0,
    max: 500000,
    from: 70,
    step: 5,
    type: 'single',
    prefix: "$ ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onFinish: function(data) {
      if (data.input.attr('id') == 'slider_init_initial') {

        console.log('slider_init_initial:', data.from);

        $scope.initialAmt = data.from
        $scope.setinitialAmt($scope.initialAmt);
            $scope.$apply();
      

      };
    }
  }


  $scope.setinitialAmt = function(v_initialAmt) {
    console.log("setinitialAmt")
    retireService.setinitialAmt(v_initialAmt);
  }





})
