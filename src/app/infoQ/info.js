'use strict'

angular.module('inspinia')
    .controller('infoController', function($scope) {
      var zoomzoom =10
      var targetAmt=10
      var initialAmt=0
      var timeHorizon=0
      var chart = Highcharts.chart('container', {



    xAxis: {
tickInterval: 1
    },
    title: {
      text: 'investment'
    },
      series : [  {
    data: [initialAmt, targetAmt]

  }
]
});

     $scope.updateChart = function(initialAmt, targetAmt){

     chart.series[0].setData([initialAmt, targetAmt]);
}

      // the button action
    $scope.zoomIn = function(){
      zoomzoom=zoomzoom+.5;
          chart.xAxis[0].setExtremes(0, zoomzoom);
          console.log(zoomzoom);
      }


      $scope.zoomOut = function(){
        zoomzoom=zoomzoom-.5;
            chart.xAxis[0].setExtremes(0, zoomzoom);
            console.log(zoomzoom);
        }
});
