"use strict";
define(['application-configuration', 'dashboardService', 'alertsService'], function (app) {

    app.register.controller('dashboardController', ['$scope', '$rootScope', 'dashboardService', 'alertsService',
        function ($scope, $rootScope, dashboardService, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];

            $scope.initializeController = function () {
               
                

            }

            

        }]);
});
