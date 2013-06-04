"use strict";

cardsApp.controller('CardsController',
    function CardsController ($scope, userData) {
        $scope.sortorder = 'name';
        $scope.limit = 12;
        $scope.users = userData.getAllUsers();
    }
);