(function () {
    'use strict';
    
    angular.module('Layout')
        .directive('wacho', function() {
            return {
                restrict: 'A',
                replace: 'false',
                templateUrl: 'app/layout/header.html'
            }
        })
        .directive('presentation', function () {
            return {
                restrict: 'A',
                replace: 'true',
                templateUrl: 'app/layout/presentation.html'
            }
        })
        .directive('footer', function () {
            return {
                restrict: 'A',
                replace: 'true',
                templateUrl: 'app/layout/footer.html'
            }
        });
    
 }());