index.controller("videoInfo",["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	//后退按钮
	$scope.back = function(){
		history.back();
	}
	
	//请求列表
	$scope.videoList = [];
	$http({
		method:"get",
		url:"mock/video.json"
	}).success(function(data){
//		console.log(data.data)
		for (var i = 0; i < data.data.length; i++){
//			console.log(data.data[i].title)
			$scope.videoList.push(data.data[i].title);
		}
	})
	
	//请求视频
	$scope.videos = {};
	$http({
		method:"get",
		url:"mock/video.json",
	}).success(function(data){
//		console.log($stateParams);
		for (var i = 0; i < data.data.length; i++){
			if (data.data[i].id = $stateParams){
				$scope.videos = data.data[i];
				$http({
					method:"get",
					url: data.data[i].version
				}).success(function(text){
//					console.log(text)
					document.getElementById("videoVersion").innerHTML = text;
				})
			}
		}
	})
	
	
	//请求视频译文
//	var URL = $scope.videos.version;
	
}]);