(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' }
      })
      .state('index.minor', {
        url: "/minor",
        templateUrl: "app/minor/minor.html",
        data: { pageTitle: 'Example view' }
      })
      .state('financial_planning', {
        abstract: true,
        url: "/financial_planning",
        templateUrl: "app/components/common/content.html"
      })
      .state('financial_planning.home', {
        url: "/financial_planning/home",
        templateUrl: "app/fp/home_page.html",
        data: { pageTitle: 'HomePage' }
      })
      .state('financial_planning.get2know_active_investing', {
                url: "/get2know_active_investing",
                templateUrl: "app/fp/get2know_active_investing.html",
                data: { pageTitle: 'Get To Know - Active Investing' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_new_workforce', {
                url: "/get2know_new_workforce",
                templateUrl: "app/fp/get2know_new_workforce.html",
                data: { pageTitle: 'Get To Know - New Workforce' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_education', {
                url: "/get2know_education",
                templateUrl: "app/fp/get2know_education.html",
                data: { pageTitle: 'Get To Know - Education' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_retirement', {
                url: "/get2know_retirement",
                templateUrl: "app/fp/get2know_retirement.html",
                data: { pageTitle: 'Get To Know - Retirement' },
                access: { requiredLogin: true }
              })
        .state('calculators', {
          abstract: true,
          url: "/calculators",
          templateUrl: "app/components/common/content.html"
        })
        .state('calculators.main', {
          url: "/cal_main",
          templateUrl: "app/calculators/debt.html",
          data: { pageTitle: 'Example view' }
        })
        .state('pie', {
          abstract: true,
          url: "/pie",
          templateUrl: "app/components/common/content.html"
        })
        .state('pie.main', {
          url: "/pie_main",
          templateUrl: "app/pie/pie.html",
          data: { pageTitle: 'Example view' }
        })
      ;

    $urlRouterProvider.otherwise('/index/main');
  }

})();
