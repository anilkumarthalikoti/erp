"use strict";
define(['application-configuration', 'branchService', 'alertsService'], function (app) {

    app.register.controller('branchController', ['$scope', '$rootScope', 'branchService', 'alertsService',
        function ($scope, $rootScope, branchService, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];
            $scope.schoolDetails=function(){
                branchService.getSchoolDetails(function(success){
                    console.log(success);
                    
                },function(error){
                    console.log(error+"Error");
                });
            }
                $scope.saveSchoolDetails=function(){
                    
                }
            $scope.createSchoolDetails=function(){
                var school=new Object();
                school.schoolName=$scope.schoolName;
               // school.address=$scope.address;
                school.regcode=$scope.regcode;
                school.website=$scope.website;
                school.phoneno=$scope.phoneno;
                school.faxno=$scope.faxno;
                school.schoolId=$scope.schoolId;
                
                
                
                return school;
                
            }

        }]);
});
