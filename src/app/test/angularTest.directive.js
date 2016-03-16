(function() {
  'use strict';

  angular
    .module('angularTest')
    .directive("imageBlur", imageBlur);


    function imageBlur(){
      return {
        restrict: 'C',
        link: function(scope, element){
          angular.element('.image-blur').blurryLoad();
        }
      }
    }

})();
