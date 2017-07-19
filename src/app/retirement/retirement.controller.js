angular.module('inspinia').controller('retireController', function(retireService, $scope) {

  $scope.duration = retireService.getDuration();
  $scope.age = retireService.getAge();
  $scope.percentage = retireService.getPercentage();
  $scope.income = retireService.getIncome();
  $scope.retAge = retireService.getRetAge();
    $scope.retIncome = retireService.getRetIncome();
      $scope.goal = retireService.getGoal();

  function getRetGraph(v_retAge, v_duration, v_goal, v_age) {

    var dieAge = v_retAge + v_duration;

    var data = [
      [
        v_retAge, v_goal
      ],
      [dieAge, 0]
    ];
    console.log("data retGraph:", data);
    return data;
  }

  function getProjectedGraph(v_retAge, v_goal, v_age) {
    var data = [
      [
        v_age, 0
      ],
      [v_retAge, v_goal]
    ];
    console.log("data projGraph:", data);
    return data;
  }

  //$scope.graphData=[[$scope.retAge,$scope.goal],[$scope.dieAge,0]];

  $scope.setRetIncome = function(v_percentage, v_income) {
    var v_retIncome = v_percentage / 100 * v_income;
    console.log("v_retIncome", v_retIncome);
    retireService.setRetIncome(v_retIncome);
    $scope.retIncome = retireService.getRetIncome();
    console.log($scope.retIncome);
  }
  $scope.setGoal = function(v_retIncome, v_duration) {
    var v_goal = (v_retIncome * 12) * v_duration;
    console.log("v_goal", v_goal);
    retireService.setGoal(v_goal);
    $scope.goal = retireService.getGoal();
  }

  $scope.setName = function(name) {
    console.log("setName")
    retireService.setName(name);
    $scope.name = retireService.getName();
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
        console.log("percentage", $scope.percentage);
         $scope.setRetIncome($scope.percentage, $scope.income);
         $scope.setGoal($scope.retIncome, $scope.duration);

        $scope.infoChart_options.series[0].data = getRetGraph($scope.retAge, $scope.duration, retireService.getGoal(), $scope.age);
        $scope.infoChart_options.series[1].data = getProjectedGraph($scope.retAge,retireService.getGoal(),$scope.age);


      };
    }
  }

  $scope.infoChart_options = {

    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
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
        data: [],
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
        data: [],
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
      width: 1000,
      height: 400
    }

  }
  $scope.init = function() {
    console.log("init");
    $scope.setRetIncome($scope.percentage, $scope.income);
    $scope.setGoal($scope.retIncome, $scope.duration);
    $scope.infoChart_options.series[0].data = getRetGraph($scope.retAge, $scope.duration, retireService.getGoal(), $scope.age);
    $scope.infoChart_options.series[1].data = getProjectedGraph($scope.retAge, retireService.getGoal(), $scope.age);

  }

  $scope.init();

})
