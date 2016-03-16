(function() {
  'use strict';

  angular
    .module('angularTest')
    .directive('owlCarousel',function(){
      return {
          restrict: 'E', // para especificar que la directiva representara una etiqueta
          transclude: false, // indica que la directiva no encapsulara a otra ya que tiene el valor de false
          link: function (scope) {
              scope.initCarousel = function(element) { // inicializa el carousel y evalua las opciones especificadas en la vista
              // provide any default options you want
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
          }
      }
  })
})();
