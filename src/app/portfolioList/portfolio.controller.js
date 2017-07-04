'use strict'

angular.module('inspinia').controller('portController', function($scope) {

  var updateDataG = [
    [
      0, 0
    ],
    [10, 10]
  ];
  var age = 20;
var year=age;
  $scope.infoChart_options = {

    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
        type: 'scatter',
        zoomType: 'x',
         lineWidth: 1,
          dashstyle: 'Solid',
        events: {
          click: function(e) {
            // find the clicked values and the series
            var x = Math.round(e.xAxis[0].value),
              y = Math.round(e.yAxis[0].value),
              series = this.series[0];

            // Add it
            if (x > age && x> year) {
              series.addPoint([x, y]);

              updateDataG.push([x], [y]);
              year=x++;
              //    chart.redraw();
              //  series.addPoint([x, y]);
              console.log("added", updateDataG);
            }

          }
        }
      },

      tooltip: {
        style: {
          padding: 10,
          fontWeight: 'bold'
        }
      }
    },
    credits: {
      enabled: false
    },

    series: [
      {
        data: []
      }
    ],
    title: {
      text: 'Cumulative Return'
    },
    //Boolean to control showing loading status on chart (optional)
    //Could be a string if you want to show specific loading text.
    loading: false,
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
    //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
    xAxis: {
      gridLineWidth: 1,
      min: 0,
      max: 90,
      tickInterval: 1,
      minPadding: 0.05,
      maxPadding: 0.05
    },
    yAxis: {
      min: 0,
      max: 900000,
      endOnTick:true ,
      title: {
        text: ''
      }
    },
    //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
    useHighStocks: false,
    //size (optional) if left out the chart will default to size of the div or something sensible.
    size: {
      width: 600,
      height: 400
    }
  }

  $scope.go = function() {

    console.log(updateDataG);
  }

  //  $scope.infoChart_options.series[0].data = updateDataG;

});
