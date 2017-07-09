angular.module('inspinia').controller('investmentController', function ($scope, investmentService) {
  var updateDataG = [];
$scope.newinvestment = {};


    $scope.investments = investmentService.list();
  $scope.newinvestment={};
    $scope.saveinvestment = function () {
      investmentService.save($scope.newinvestment);
        $scope.newinvestment = {};
    }


    $scope.delete = function (investment_id) {

        investmentService.delete(investment_id);
        if ($scope.newinvestment.investment_id != null && $scope.newinvestment.investment_id == investment_id) $scope.newinvestment = {};
    }



    $scope.view = function (investment_id) {
        $scope.newinvestment = angular.copy(investmentService.get(investment_id));
        updateDataG = $scope.newinvestment
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


    // $scope.getFinalValue = function(investment_id) {
    //     $scope.newinvestment = angular.copy(investmentService.get(investment_id));
    //       var cash = $scope.newinvestment.initialAmt;
    //        var rate=5;
    //        var term=$scope.newinvestment.term;
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
