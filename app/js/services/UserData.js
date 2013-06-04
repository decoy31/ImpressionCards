"use strict";

cardsApp.factory('userData', function ($q, $resource) {
    var resource = $resource('/data/users/:id', {id: '@id'});

    return {
        /**
         * Gets a promise object for the user matching the
         * specified user id.
         *
         * @param {number} userId User id.
         * @returns {promise} Returns a promise object representing
         *      a user.
         */
        getUser: function (userId) {
            var deferred = $q.defer();

            resource.get({id: userId},
                function (user) {
                    deferred.resolve(user);
                },
                function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },

        /**
         * Saves the specified user object to the DB.
         *
         * @param {object} user User object to save.
         * @returns {promise} Returns a promise object.
         */
        saveUser: function (user) {
            var deferred = $q.defer();

            resource.save(user,
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },

        /**
         * Gets an array of all user objects.
         *
         * @returns {Array}
         */
        getAllUsers: function () {
            return resource.query();
        }
    };
});