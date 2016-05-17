(function() {
  'use strict'

  angular
    .module('teashopApp', ['ngRoute'])
    .config(config);

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  }
})();
