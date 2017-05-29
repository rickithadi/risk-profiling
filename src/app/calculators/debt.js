'use strict'

angular.module('inspinia')
    .controller('AddNumbersController', function($scope) {
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

$scope.someData = {
		labels: [
        'Apr',
        'May',
        'Jun'
      ],
      datasets: [
        {
          data: [1, 7, 15, 19, 31, 40]
        },
        {
          data: [6, 12, 18, 24, 30, 36]
        }
      ]
	};

	$scope.someOptions = {
		segementStrokeWidth: 20,
		segmentStrokeColor: '#000'
	};

  $scope.lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
};
});
