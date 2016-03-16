// (function() {
//   'use strict';
// // esta directiva permite esperar a que el ultimo elemento del ng-repeat
//   angular
//     .module('angularTest')
//     .directive('slitSliderItem', [function() {
//         return {
//             restrict: 'A',
//             transclude: false,
//             link: function(scope, element) {
//               // wait for the last item in the ng-repeat then call init
//                 if(scope.$last) {
//                     scope.initCarousel(element.parent());
//                 }
//             }
//         };
//     }]);
//
// })();
