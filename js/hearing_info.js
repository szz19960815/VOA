index.controller("hearingInfo",["$scope","$http","$stateParams",function($scope,$http,$stateParams){
//	console.log("result")
//	console.log($stateParams);
	$scope.hearingInfo = "";
	$http({
		method:"get",
		url:"mock/lyr.txt",
		params:{}
	}).success(function(data){
		document.getElementById("hearingInfo").innerHTML = data;
	});
	$scope.back = function(){
//		console.log("返回按钮")
		history.back();
	}
	
	//获取列表信息
	$scope.lists = [];
	$http({
		method:"get",
		url:"mock/hearing.json"
	}).success(function(data){
		for(var i = 0; i < data[1].data.length; i++){
			$scope.lists.push(data[1].data[i].title)
//console.log(data[1].data[i].title)
		}
	});
}]);