'use strict'

angular.module('inspinia').controller('AddNumbersPieController', function($scope) {

  $scope.loan = 0

  $scope.getChart = function(v_total, v_loan) {
    //var total = Number(total || 0);
    //loan = Number(loan || 0);
    var interestPaid = v_total - v_loan;
    console.log("seconffunc:");
    console.log("total:", v_total);
    console.log("loan:", v_loan);
    console.log("interestPaid:", interestPaid);

    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'total repayment:' + v_total
      },
      tooltip: {
        pointFormat: ' <b>{point.percentage:.1f}%</b>${series.data.y}'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %:<b>${series.data.y}</b>',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [
        {
          name: 'loan repayment',
          colorByPoint: true,
          data: [
            {
              name: 'interest',
              y: interestPaid,
              sliced: true,
              selected: true
            }, {
              name: 'principal amount',
              y: v_loan
            }
          ]
        }
      ]
    });
  }

  $scope.getValues = function(a, b, c) {
    var v_loan = Number($scope.a || 0);
    $scope.loan = v_loan
    console.log("loan:", v_loan);

    $scope.total = 0;
    var term = Number($scope.b || 0);
    var rate = Number($scope.c || 0);
    var hold = v_loan / term;
    var residue = v_loan;
    console.log("rate:", rate);
    for (var i = 0; i < term; i++) {
      $scope.total += residue * rate / 100;
      console.log("total (" + i + ") : " + $scope.total);
      residue = residue - hold;
    }
    $scope.total = v_loan + $scope.total;

    console.log("total:", $scope.total);
    console.log("loan:", $scope.loan);

  }
});
