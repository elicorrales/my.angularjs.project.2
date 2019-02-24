'use strict';

angular.module('routing',[]);

angular.module('routing').config(function($locationProvider,$routeProvider) {

    console.log('Inside routing');

    $locationProvider.html5Mode({enabled:true});

    $routeProvider
        .when('/',{
            template:'<h4>Hello from routing /</h4>'
        })
        .when('/1',{
            template:'<h4>You hit 1</h4>'
        })
        .when('/blog',{
            template:'<h4>You hit blog</h4>'
        })
        .otherwise({
            template:'Routing:notfound'
        });
});