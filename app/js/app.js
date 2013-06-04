"use strict";

var cardsApp = angular.module('cardsApp', ['ngSanitize', 'ngResource']).
    config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: '/partials/CardList.html',
            controller: 'CardsController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    });
