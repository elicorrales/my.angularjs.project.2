'use strict';

angular.module('hello').directive('helloDirective', function() {
    return {
        template:'<div><h2>Hello From helloDirective</h2></div',
        controller: ['$scope',function($scope) {
            console.log('Hello from Hello Directive controller');
        }]
    };

});