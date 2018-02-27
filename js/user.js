var user = angular.module("user",["ionic"]);

user.config(function($stateProvider){
	$stateProvider.state("login",{
		url:"/login",
		templateUrl:"login.html"
	}).state("register",{
		url:"/register",
		templateUrl:"register.html"
	})
})

