angular.module('inspinia').controller('moduleController', function ($scope, modService) {
  var updateDataG = [];

    $scope.modules = modService.list();
  $scope.newmod={};
    $scope.savemodule = function () {
      modService.save($scope.newmod);
        $scope.newmod = {};
    }


    $scope.delete = function (mod_id) {

        modService.delete(mod_id);
        if ($scope.newmod.mod_id != null && $scope.newmod.mod_id == mod_id) $scope.newmod = {};
    }



    $scope.view = function (mod_id) {
        $scope.newmod = angular.copy(modService.get(mod_id));
        updateDataG = $scope.newmod
        //console.log("array that comes bsck: ", updateDataG);
         $scope.infoChart_options.series[0].data = updateDataG;
           console.log("array that comes bsck: ", updateDataG);
}
        $scope.infoChart_options = {

          options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
              type: 'spline'
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
          }

        }


    // $scope.getFinalValue = function(mod_id) {
    //     $scope.newmod = angular.copy(modService.get(mod_id));
    //       var cash = $scope.newmod.initialAmt;
    //        var rate=5;
    //        var term=$scope.newmod.term;
    //      updateDataG=[];
    //         for (var i = 0; i < term; i++) {
    //         //console.log("cash1:",cash);
    //         cash = cash * rate / 100 + cash;
    //         console.log("cash:", cash);
    //         updateDataG.push(cash);
    //
    //       }
    //       console.log("array to update:", updateDataG);
    //
    //       $scope.infoChart_options.series[0].data = updateDataG;
    //     }

})
