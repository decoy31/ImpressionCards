"use strict";

cardsApp.factory('logData', function ($q, $resource) {
    var resource = $resource('/data/logs/:id', {id: '@id'});

    return {
        getUserLog: function (userId) {
            var deferred = $q.defer();

            resource.get({id: userId},
                function (log) {
                    deferred.resolve(log);
                },
                function (log) {
                    deferred.reject(log);
                });

            return deferred.promise;
        },
        getAllLogs: function (callback) {
            return resource.query(callback);
        }
    };
});