"use strict";

cardsApp.factory('conversionData', function ($q, $http) {
    return {
        getUserConversion: function (userId, callback) {
            $http.get('/data/logs/' + userId + '.json')
                .success(function (logs) {
                    var conversionCount = 0;

                    for (var i = 0; i < logs.length; i++) {
                        var log = logs[i];

                        if (log.type === 'conversion' && log.user_id === userId) {
                            conversionCount++;
                        }
                    }

                    callback(conversionCount);
                });
        }
    };
});