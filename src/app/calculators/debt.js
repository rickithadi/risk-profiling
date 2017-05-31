'use strict'

angular.module('inspinia').controller('AddNumbersController', function($scope) {
  $scope.AddNumbers = function() {
    var loan = Number($scope.loan || 0);
    console.log("loan:", loan);

    $scope.total = 0;
    var term = Number($scope.term || 0);
    var rate = Number($scope.rate || 0);
    var hold = loan / term;
    var residue = loan;
    console.log("rate:", rate);
    for (var i = 0; i < term; i++) {
      $scope.total += residue * rate / 100;
      console.log("total (" + i + ") : " + $scope.total);
      residue = residue - hold;
    }
    $scope.total = loan + $scope.total;
    console.log("total:", $scope.total);
  }

$scope.chartTypes = [
  {"id": "line", "title": "Line"},
  {"id": "spline", "title": "Smooth line"},
  {"id": "area", "title": "Area"},
  {"id": "areaspline", "title": "Smooth area"},
  {"id": "column", "title": "Column"},
  {"id": "bar", "title": "Bar"},
  {"id": "pie", "title": "Pie"},
  {"id": "scatter", "title": "Scatter"}
];

$scope.dashStyles = [
  {"id": "Solid", "title": "Solid"},
  {"id": "ShortDash", "title": "ShortDash"},
  {"id": "ShortDot", "title": "ShortDot"},
  {"id": "ShortDashDot", "title": "ShortDashDot"},
  {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
  {"id": "Dot", "title": "Dot"},
  {"id": "Dash", "title": "Dash"},
  {"id": "LongDash", "title": "LongDash"},
  {"id": "DashDot", "title": "DashDot"},
  {"id": "LongDashDot", "title": "LongDashDot"},
  {"id": "LongDashDotDot", "title": "LongDashDotDot"}
];

$scope.chartSeries = [
  //{"name": "Some data", "data": [1, 2, 4, 7, 3], id: 's1'},
{"name": "Some data", "data": [[3,1], [4,2], [5,4], [6,7], [7,3]], id: 's1'},
  {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true, id: 's2'},
  {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column", id: 's3'},
  {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column", id: 's4'}
];

$scope.chartStack = [
  {"id": '', "title": "No"},
  {"id": "normal", "title": "Normal"},
  {"id": "percent", "title": "Percent"}
];

$scope.addPoints = function () {
  var seriesArray = $scope.chartConfig.series;
  var rndIdx = Math.floor(Math.random() * seriesArray.length);
  seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20]);
};

var seriesId = 0;
var yAxisId = 0;
var xAxisId = 0;

$scope.addAxis = function(xy) {
/*
    Adds a Y Axis
*/
var id;
var axis;
if (xy==='Y') {
  yAxisId += 1;
  id = yAxisId;
  axis = 'yAxis';
} else {
  xAxisId += 1;
  id = xAxisId;
  axis = 'xAxis';
}


var rnd = [];
for (var i = 0; i < 10; i++) {
    rnd.push(Math.floor(Math.random() * 20) + 1);
}
if (!$scope.chartConfig[axis]) {
  $scope.chartConfig[axis] = [];
}
$scope.chartConfig[axis].push({
    min: Math.min.apply(null, rnd),
    max: Math.max.apply(null, rnd),
    title: {
        text: xy + "-Axis" + id.toString()
    },
    id: xy + 'Axis_' + id
});
};


$scope.addSeries = function () {
  var rnd = []
  for (var i = 0; i < 10; i++) {
    rnd.push(Math.floor(Math.random() * 20) + 1)
  }
  var sId = '__series' + seriesId++;
  $scope.chartConfig.series.push({
    data: rnd,
    id: sId
  });
};

$scope.removeRandomSeries = function () {
  var seriesArray = $scope.chartConfig.series;
  var rndIdx = Math.floor(Math.random() * seriesArray.length);
  seriesArray.splice(rndIdx, 1);
};

$scope.removeSeries = function (id) {
  var seriesArray = $scope.chartConfig.series;
  seriesArray.splice(id, 1);
};

$scope.toggleHighCharts = function () {
  this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks;
};

$scope.replaceAllSeries = function () {
  var data = [
    { name: "first", data: [10], id: 'a' },
    { name: "second", data: [3], id: 'b' },
    { name: "third", data: [13], id: 'c' }
  ];
  $scope.chartConfig.series = data;
};

$scope.chartConfig = {

  chart: {
    height: 500,
    width: 500,
    type: 'line'
  },
  plotOptions: {
    series: {
      stacking: ''
    }
  },
  series: $scope.chartSeries,
  title: {
    text: 'Hello'
  }
}

$scope.reflow = function () {
  $scope.$broadcast('highchartsng.reflow');
};
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
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
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 20
        }, {
            name: 'Chrome',
            y: 20,

        }, {
            name: 'Firefox',
            y: 20
        }, {
            name: 'Safari',
            y: 20
        }, {
            name: 'Opera',
            y: 15
        }, {
            name: 'Proprietary or Undetectable',
            y: 5
        }]
    }]
});
});
