(function() {
  'use strict';

  angular
    .module('teashopApp')
    .controller('Tea', Tea);

  Tea.$inject = ['$location', '$routeParams', 'TeaService'];

  function Tea($location, $routeParams, TeaService) {
    var vm = this;

    TeaService.getTea($routeParams.id).then(function(tea) {
      vm.tea = tea.data;
    })
    .catch(function(err) {
      vm.errors = err;
    });
  }
})();
