"use strict";

cardsApp.factory('revenueData', function ($q, $http) {
    return {
        getUserRevenue: function (userId, callback) {
            $http.get('/data/logs/' + userId + '.json')
                .success(function (logs) {
                    var revenue = 0;

                    for (var i = 0; i < logs.length; i++) {
                        var log = logs[i];

                        if (log.user_id === userId) {
                            revenue += log.revenue;
                        }
                    }

                    callback(revenue);
                });
        }
    };
});