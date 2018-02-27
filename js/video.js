index.controller("video", ["$scope", "$http","$timeout", function($scope, $http,$timeout) {
	//加载视频列表
	$scope.loadVideoList = function() {
		$scope.videoList = [];
		return $http({
			method: "get",
			url: "mock/video.json"
		}).success(function(data) {
			//		console.log(data.data);
			for(var i = 0; i < data.data.length; i++) {
				//			console.log(data.data[i].id)
				$scope.videoList.push(data.data[i]);
			}
//			console.log($scope.videoList);
		})
	}
	//页面加载到这时加载一次列表
	$scope.loadVideoList();
	//停止下拉刷新
	$scope.doRefreshVideo = function() {
		$scope.loadVideoList()
			.finally(function() {
				// 停止广播ion-refresher
				$scope.$broadcast('scroll.refreshComplete');
			});
		//						alert("刷新完成")
	};
	//停止上拉加载
	$scope.loadMoreVideo = function() {
		$timeout(function(){
			$http({
				method: "get",
				url: "mock/video.json",
				params: {}
			}).success(function(data) {
				for(var i = 0; i < data.data.length; i++) {
				//			console.log(data.data[i].id)
				$scope.videoList.push(data.data[i]);
			}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
		},1000)
	};
}])