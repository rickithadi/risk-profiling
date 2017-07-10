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
            type: 'pie',
            //marginLeft: -410
        },
        credits: {
            enabled: false
        },
        colors: [
            '#5485BC', '#AA8C30', '#5C9384', '#981A37', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'],
        title: {

            verticalAlign: 'middle',
            //x: -210,
            //y: -40,
            useHTML: true,
            style: {
                display: 'block',
                color: 'grey',
                fontFamily: 'Helvetica Neue'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: false,

                }
            }
        },
        legend: {
            enabled: true,
            useHTML: true,
            verticalAlign: 'middle',
            //x: 100,
            labelFormatter: function () {
                return this.y + ' (' + this.percentage.toFixed(0) + '%) - ' + this.name;
            },
            itemDistance: 0,
            //itemWidth: 190,
            itemStyle: {
                //width: 180,
                font: 'Helvetica Neue',
                fontSize: '15px'
            }
        },
        series: [{
            name: 'loan',
            innerSize: '50%'
        }, {
            name: 'Plataforma',
            size: '80%',
            innerSize: '65%',
            showInLegend: true,
            data: data
        }]
    }

 }
});
