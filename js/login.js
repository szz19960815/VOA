user.controller("login",["$scope","$state","$http","$cacheFactory","$rootScope",function($scope,$state,$http,$cacheFactory,$rootScope){
	$state.go("login");
	$rootScope.user = "";
	$scope.back = function(){
		window.location = "../index.html";
	}
	var reg = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);
	
	document.addEventListener("plusready",onPlusReady,false);
					function onPlusReady(){
						
		
						
					
	$scope.login = function(){
		if(!reg.test($scope.name)){alert("请输入一个正确的手机号！")}
		else{
			if(!$scope.psw){alert("请输入密码！")}
			else{
				$http({
					method:"post",
					url:"http://stuapi.ysd3g.com/api/login",
					params:{un:$scope.name,pwd:$scope.psw,token:"aa4ccde8-3b85-476d-b68b-7f78f72e74d1"}
				}).success(function(data){
					console.log(data)
					window.location = "../index.html";
					var a = plus.storage.setItem("user",$scope.name);
					console.log(plus.storage.getItem("user"));
				}).error(function(data){
					console.log(data);
				})
			}
		}
	}}
}]);