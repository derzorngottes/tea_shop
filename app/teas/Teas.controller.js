(function() {
  'use strict';

  angular
    .module('teaApp')
    .controller('Teas', Teas);

  Teas.$inject = ['TeaService'];

  function Teas(TeaService) {
    var vm = this;

    vm.getTeas = function() {
      TeaService.getTeas().then(function(teas) {
        vm.teas = teas.data;
      }).catch(function(err) {
        vm.errors = err;
      });
    }
  }
})();
