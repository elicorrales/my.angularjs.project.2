'use strict';

angular.module('another').directive('anotherDirective',function() {
    return {
        transclude:true,
        templateUrl:'app/directives/another/another-directive.html',
        controller: ['$scope',function($scope) {
            console.log('Hello from anotherDirective controller');
        }]
    };
});