"use strict";
define(['application-configuration', 'userService', 'alertsService'], function (app) {

    app.register.controller('schoolController', ['$scope', '$rootScope', 'userService', 'alertsService',
        function ($scope, $rootScope, userService, alertsService) {

            $rootScope.closeAlert = alertsService.closeAlert;
            $rootScope.alerts = [];

            $scope.initializeController = function () {
               
                $scope.UserName = "";               
                $scope.Password = "";

                //alertsService.RenderSuccessMessage("Please register if you do not have an account.");

            }

            $scope.login = function () {
                $rootScope.IsloggedIn = false;
                var user = $scope.createLoginCredentials();
                userService.login(user, $scope.loginCompleted, $scope.loginError);
               
            }

            $scope.loginCompleted = function (response) {
            var data=JSON.parse(JSON.stringify(response))[0];
          if(data.loginpwd!=$scope.Password){
               alertsService.RenderErrorMessage("Invalid Credentials");
          }else{
              $rootScope.IsloggedIn=true;
              $rootScope.userDetails=data;
               
                window.location = "applicationMasterPage.html#/dashboard/dashboard";
            }
            }

            $scope.loginError = function (response) {

                alertsService.RenderErrorMessage("response.ReturnMessage","Unable to process login");
        
                $scope.clearValidationErrors();
                alertsService.SetValidationErrors($scope, response.ValidationErrors);              

            }

            $scope.clearValidationErrors = function () {
              
                $scope.UserNameInputError = false;               
                $scope.PasswordInputError = false;               

            }

            $scope.createLoginCredentials = function () {

                var user = new Object();
               
                user.UserName = $scope.UserName;              
                user.Password = $scope.Password;
             
                return user;

            }

        }]);
});
