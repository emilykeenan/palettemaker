var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/palette', {
            templateUrl: '/views/templates/home.html',
            controller: 'PaletteController',
            controllerAs: 'pc'
        })
        .otherwise({
            redirectTo: '/palette'
        });
}]);
