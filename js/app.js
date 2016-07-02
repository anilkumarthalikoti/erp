// JavaScript Document
var app=angular.module("erp", ['ngRoute','ngResource','ngStorage']);
app.config(['$routeProvider','$locationProvider','$httpProvider','$resourceProvider',
  function($routeProvider,$locationProvider,$httpProvider,$resourceProvider) {
	  
    $routeProvider.
      when('/login', {
        templateUrl: 'templates/login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'templates/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
	  .when('/logout',{
	  templateUrl: 'templates/login/login.html',
        controller: 'LogoutCtrl'
	  })
	  .
      otherwise({
        redirectTo: '/login'
      });
	  
	 //$locationProvider.html5Mode(true);
	 $httpProvider.defaults.withCredentials = true;
	  $httpProvider.defaults.headers.post['Access-Control-Allow-Origin']='*';
	 $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .run(function($sessionStorage,$location){
		if($sessionStorage.userdata==undefined){
		 $location.path("/login");
		}else{
		 
		if($location.url()=="/login"){
		 
		$location.path("/login");
		}
		}
  })
  ;