user.controller("register",["$scope","$http","$state",function($scope,$http,$state){
	var reg = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);
	$scope.register = function(){
		if(!reg.test($scope.name)){
			alert("请输入正确的手机号码!");
		}else{
			if(!$scope.psw){alert("请输入密码！")}
			else{
				if(!$scope.repsw){alert("请确认密码！")}
				else{
					if($scope.psw !== $scope.repsw){
						alert("两次输入密码不一致!");
					}else{
						$http({
							method:"post",
							url:"http://stuapi.ysd3g.com/api/CreateUser",
							params:{loginName:$scope.name,pwd:$scope.psw,email:"",mtel:"",token:"aa4ccde8-3b85-476d-b68b-7f78f72e74d1"}
						}).success(function(data){
							console.log(data);
								$state.go("login");
						}).error(function(data){
							console.log(data)
						})
					}
				}
			}
		}
	}
}])