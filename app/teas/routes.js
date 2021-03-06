(function() {
  'use strict';

  angular
    .module('teashopApp')
    .config(config);

  config.$inject = ['$routeProvider']

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/teas/teas.html',
        controllerAs: 'teas',
        controller: 'Teas'
      })
      .when('/tea/:id/view', {
        templateUrl: 'app/teas/tea.html',
        controllerAs: 'tea',
        controller: 'Tea'
      })
      .otherwise({
        templateUrl: 'app/teas/teas.html',
        controllerAs: 'teas',
        controller: 'Teas'
      });
  }
})();
