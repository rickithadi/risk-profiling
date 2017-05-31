'use strict'

angular.module('inspinia')
    .controller('AddNumbersPieController', function($scope) {
        $scope.AddNumbers = function() {
            var loan = Number($scope.loan || 0);
            console.log("loan:", loan);
 // $scope.total = loan;
 $scope.total = 0;
 // console.log($scope.total);
var term = Number($scope.term || 0);
var rate = Number($scope.rate || 0);
var hold=loan/term;
var residue=  loan;
console.log("rate:", rate);
for (var i = 0; i < term; i++) {
  $scope.total += residue * rate/100;
console.log("total (" + i+") : " + $scope.total);
 residue=residue-hold;
}
$scope.total=loan+$scope.total;
console.log("total:", $scope.total);

}
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'trying my best'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'loan',
        colorByPoint: true,
        data: [{
            name: 'interest',
            y: 2
        },
         {
            name: 'Chrome',
            y: 3,

        },
        {
            name: 'Proprietary or Undetectable',
            y: 1
        }]
    }]
});

});
