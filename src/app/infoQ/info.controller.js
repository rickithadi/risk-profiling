'use strict'

angular.module('inspinia').controller('infoController', function($scope) {
  var zoomzoom = 10;
  var targetAmt = 10;
  var initialAmt = 0;
  var timeHorizon = 0;
  var rate = 0.2;
  var updateDataG = [];
var arrDara=[];

  $scope.infoChart_options = {

    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
        type: 'spline'
      },
      colors: [
        '#e3edec',
        '#90abbe',
        '#d78807',
        '#c74e05',
        '#ca2400',
        '#e9df9a',
        '#7a8630',
        '#3d451e',
        '#c7b28c',
        '#af8155'
      ],
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

    series : [{ data: [] }],
    title: {
      text: 'Cumulative Return'
    },
    //Boolean to control showing loading status on chart (optional)
    //Could be a string if you want to show specific loading text.
    loading: false,
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
    //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
    xAxis: {
      tickInterval: 1
    },
    yAxis: {
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
    },
    //function (optional)
    func: function(chart) {
      //setup some logic for the chart
    }
  }

// the button action


$scope.getFinalValue = function(rate, term, initialAmt) {
  var cash = initialAmt;
updateDataG=[];
    for (var i = 0; i < term; i++) {
    //console.log("cash1:",cash);
    cash = cash * rate / 100 + cash;
    console.log("cash2:", cash);
    updateDataG.push(cash);

  }

  console.log("updateDataG", updateDataG);

  console.log("array to update:", updateDataG);
  //chart.series[0].update[updateDataG];
  $scope.infoChart_options.series[0].data = updateDataG;
}

// $scope.clear = function(){
//   var clearChart=[];
//   $scope.infoChart_options.series[0].data = clearChart;
//
//
// }
});
