angular.module('inspinia').controller('retireController', function(retireService, $scope) {

  $scope.apply = false;
  $scope.duration = retireService.getDuration();
  $scope.age = retireService.getAge();
  $scope.percentage = retireService.getPercentage();
  $scope.name = retireService.getName();
  $scope.retIncome = retireService.getRetIncome();
  $scope.goal = retireService.getGoal();
  $scope.income = retireService.getIncome();
  $scope.retAge = retireService.getRetAge();
  console.log("local income", $scope.income)

  $scope.setRetIncome = function() {
    var v_retIncome = $scope.percentage / 100 * $scope.income;
    console.log("v_retIncome",v_retIncome);
    retireService.setRetIncome(v_retIncome);
      $scope.retIncome = retireService.getRetIncome();
  //  console.log("retire", retIncome);


  }
  $scope.setGoal = function() {
    var v_goal = ($scope.retIncome * 12) * $scope.duration;
    console.log("v_goal",v_goal);
    retireService.setGoal(v_goal);

  }

  $scope.setName = function(name) {
    console.log("setName")
    retireService.setName(name);
  }

  $scope.setIncome = function(income) {
    console.log("setIncome")
    retireService.setIncome(income);
  }

  $scope.setDuration = function(duration) {
    console.log("setDuration")
    retireService.setDuration(duration);
  }

  $scope.setAge = function(age) {
    console.log("setAge")
    retireService.setAge(age);
  }

  $scope.setRetAge = function(retAge) {
    console.log("setRetAge")
    retireService.setRetAge(retAge);
  }
  $scope.slider_init_options = {
    min: 0,
    max: 150,
    from: 70,
    step: 5,
    type: 'single',
    postfix: "% ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onFinish: function(data) {
      if (data.input.attr('id') == 'slider_init') {
        console.log('slider_init:', data.from);

        $scope.percentage = data.from
        console.log($scope.percentage);
        $scope.setRetIncome();
        $scope.setGoal();

      }

    }

  };

  $scope.infoChart_options = {

    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
        type: 'spline',
        pointStart: retireService.getRetAge()
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
        data: [90, 90]
      }
    ],
    title: {
      text: 'retirement'
    },
    //Boolean to control showing loading status on chart (optional)
    //Could be a string if you want to show specific loading text.
    loading: false,
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
    //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
    xAxis: {
      min: retireService.getRetAge(),
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
      width: 1000,
      height: 400
    }

  }
})
