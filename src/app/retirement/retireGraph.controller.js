angular.module('inspinia').controller('retireGraphController', function(retireService, $scope) {

var graphRetire=retireService.drawGraphRetire();
var graphInvest=retireService.drawGraphInvest();
    $scope.infoChart_options = {

      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        chart: {
          spacingBottom: 15,
         spacingTop: 10,
         spacingLeft: 10,
         spacingRight: 10,

          //  type: 'areaspline',
          zoomType: 'xy'

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
          type: "line",
          name: "retirement",
          data: graphRetire,
          color: '#FF0000',
          dashStyle: 'solid',
          zoneAxis: 'x',
          zones: [
            {
              value: 50
            }, {
              dashStyle: 'Dot'
            }
          ]
        }, {
          type: "areaspline",
          name: "goal",
          data: graphInvest,
          color: '#125655'
        }

      ],

      title: {
        text: 'retirement'
      },
      //Boolean to control showing loading status on chart (optional)
      //Could be a string if you want to show specific loading text.
      loading: false,
      //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.

      //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
      useHighStocks: false,
      //size (optional) if left out the chart will default to size of the div or something sensible.
      size: {
        width: 1200,
        height: 600
      }

    }









})
