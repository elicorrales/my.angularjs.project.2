'use strict';

angular.module('app').controller('main', function($scope) {

    console.log('Inside app main controller');

    $scope.hellos = [
        {id:1,hello:'hello'},
        {id:2,hello:'hello'},
        {id:3,hello:'hello'},
        {id:4,hello:'hello'},
        {id:5,hello:'hello'},
        {id:6,hello:'hello'},
    ];

});