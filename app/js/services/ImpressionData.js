"use strict";

cardsApp.factory('impressionData', function ($q, $http) {
    return {
        getUserImpression: function (userId, callback) {
            $http.get('/data/logs/' + userId + '.json')
                .success(function (logs) {
                    var impressionCount = 0;

                    for (var i = 0; i < logs.length; i++) {
                        var log = logs[i];

                        if (log.type === 'impression' && log.user_id === userId) {
                            impressionCount++;
                        }
                    }

                    callback(impressionCount);
                });
        }
    };
});