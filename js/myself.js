index.controller("myself",["$state","$scope","$http","$location","$cacheFactory","$rootScope","$stateParams",function($state,$scope,$http,$location,$cacheFactory,$rootScope,$stateParams){
	$scope.toLogin = function(){
		window.location = "html/user.html";
	}
	var a = $stateParams.user;
	if(a){
		document.getElementById("isLogin").innerHTML = a;
	}else{
		document.getElementById("isLogin").innerHTML = "您还未登录呢";
	}
	
	document.addEventListener("plusready",$scope.exit,false);
//	function onPlusReady(){
		$scope.exit = function(){
			plus.storage.getItem("user");
			plus.storage.removeItem("user");
			$state.reload("myself")
		}
//	}
	
}])