app.controller("LoginCtrl", function($scope, $http, $resource, $sessionStorage, $location) {

$scope.login=function(){
$http.get('request/login/login.php').then(function(response){
											 console.log(response);
											 });
//$location.path("/dashboard");
}

});