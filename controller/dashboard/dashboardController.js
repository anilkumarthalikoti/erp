"use strict";
define(['application-configuration', 'dashboardService', 'alertsService'], function (app) {

    app.register.controller('dashboardController', ['$scope', '$rootScope', 'dashboardService', 'alertsService',
        function ($scope, $rootScope, dashboardService, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];
         var startWithDataset =1;
var startWithData =1;   
            var mydata1 = {
	labels : ["January","February","March","April","May","June","July"],
 
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointstrokeColor : "yellow",
			data : [95,53,99,,73,27,82],
//			data : [40],

      title : "2014"
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "green",
			pointstrokeColor : "yellow",
			data : [35,43,59,,31,50,66],
//			data : [35],
      title : "2013"
		}
	]
} ;
var opt1 = {
      animationStartWithDataset : startWithDataset,
      animationStartWithData : startWithData,
      animationSteps : 200,
      canvasBorders : true,
      canvasBordersWidth : 3,
      canvasBordersColor : "black",
      graphTitle : "default animation",
      legend : true,
      inGraphDataShow : true,
      annotateDisplay : true,
      graphTitleFontSize: 18

};
            $scope.loadCharts = function () {
               
                new Chart(document.getElementById("canvas_Bar1").getContext("2d")).Bar(mydata1,opt1);

            }

            

        }]);
});
