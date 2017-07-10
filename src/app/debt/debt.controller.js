angular.module('inspinia')
.controller('debtController', function ($scope, debtService) {

var data=[];
  $scope.debt = debtService.list();
 $scope.newdeb = {};


     $scope.savedeb = function () {
       console.log("adding debt");
         debtService.save($scope.newdeb);
         $scope.newdeb = {};
     }


     $scope.delete = function (id) {

         debtService.delete(id);
         if ($scope.newdeb.id == id) $scope.newdeb = {};
     }


     $scope.edit = function (id) {
         $scope.newdeb = angular.copy(debtService.get(id));
     }
     $scope.view = function (id) {
  //put stuff in goes to getvalues
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
})
