'use strict';

angular.module('inspinia')
  .controller('MainController', function ($scope) {

    var vm = this;

    vm.userName = 'Example user';
    vm.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    vm.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';


    $scope.sharedetails = [{
        "event":"treat",

        "shareno":4,
        "shareamount":125
    },{
        "event":"lunch",

        "shareno":5,
        "shareamount":100
    }];
  });
