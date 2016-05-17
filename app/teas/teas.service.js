(function() {
  'use strict';

  angular
    .module('teashopApp')
    .service('TeaService', TeaService);

  TeaService.$inject = ['$http'];

  function TeaService($http) {
    return {
      getTeas: function() {
        return $http.get('app/public/catalog.json')
      },
      getTea: function(id) {
        return $http.get('teas.json' + id)
      }
    };
  }
})();
