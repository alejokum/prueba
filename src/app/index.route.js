(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'app/test/angularTest.html',
        controller: 'TestController',
        controllerAs: 'angular'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
