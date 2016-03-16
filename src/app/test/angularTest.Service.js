(function() {
  'use strict';

  angular
  .module('angularTest')
  .service('dataService', dataService);

  dataService.$inject = ["$http", "$q"];

//  servicio implementado para buscar la data en el api

  // imagenes para el carousel

  function dataService($http, $q) {
    this.getAll = function(){
      var defered = $q.defer();
      var promise = defered.promise;

      $http.get('http://www.enobasistemas.com/cmstesting/Banners/bannersAjax')
      .success(function(data) {
        defered.resolve(data);
      })
      .error(function(err) {
        defered.reject(err)
      });
      return promise;
    };

    // seccion de noticias

    this.noticias = function(){
      var defered = $q.defer();
      var promise = defered.promise;

      $http.get('http://www.enobasistemas.com/cmstesting/Blogs/randomAjax')
      .success(function(data) {
        defered.resolve(data);
      })
      .error(function(err) {
        defered.reject(err)
      });
      return promise;
    };

    // seccion de marcas

    this.marcas = function() {
      var defered = $q.defer();
      var promise = defered.promise;

      $http.get('http://www.enobasistemas.com/cmstesting/Brands/indexAjax')
      .success(function(data) {
        defered.resolve(data);
      })
      .error(function(err){
        defered.reject(err)
      });
      return promise;
    };


  }

})();
