"use strict";

/* Directives */

cardsApp.directive('impression', function (impressionData) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            attrs.$observe('impression', function (newUserId, oldUserId) {
                if (newUserId !== oldUserId) {
                    impressionData.getUserImpression(parseInt(newUserId, 10), function (count) {
                        elem.text(count);
                    });
                }
            });
        }
    };
});

cardsApp.directive('conversion', function (conversionData) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            attrs.$observe('conversion', function (newUserId, oldUserId) {
                if (newUserId !== oldUserId) {
                    conversionData.getUserConversion(parseInt(newUserId, 10), function (count) {
                        elem.text(count);
                    });
                }
            });
        }
    };
});

cardsApp.directive('revenue', function ($filter, revenueData) {
    return {
        restrict: 'A',
        require: '?$filter',
        link: function (scope, elem, attrs) {
            attrs.$observe('revenue', function (newUserId, oldUserId) {
                if (newUserId !== oldUserId) {
                    revenueData.getUserRevenue(parseInt(newUserId, 10), function (revenue) {
                        var currencyFilter = $filter('currency'),
                            className = revenue >= 0 ? "positive" : "negative";
                        elem.text(currencyFilter(revenue)).addClass(className);
                    });
                }
            });
        }
    };
});
