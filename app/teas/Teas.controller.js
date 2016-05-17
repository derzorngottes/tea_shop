(function() {
  'use strict';

  angular
    .module('teashopApp')
    .controller('Teas', Teas);

  Teas.$inject = ['TeaService'];

  function Teas(TeaService) {
    var vm = this;

    vm.userCat = 'all';
    vm.teaCats = [
      'all',
      'indian',
      'japanese',
      'chinese',
      'green',
      'black',
      'white',
      'oolong',
      'rooibos'
    ];

    //vm.filterCats = function()

    TeaService.getTeas().then(function(teas) {
      vm.teas = teas.data;
    })
    .catch(function(err) {
      vm.errors = err;
    });
  }
})();
