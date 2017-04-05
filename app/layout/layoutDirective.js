(function () {
    'use strict';
    
    angular.module('Layout')
        .directive('nav', function() {
            return {
                restrict: 'A',
                replace: 'true',
                templateUrl: 'app/layout/nav.html'
            }
        })
        .directive('carousell', function () {
            return {
                restrict: 'A',
                resplace: 'true',
                templateUrl: 'app/layout/carousell.html'
            }
        });
    
 }());