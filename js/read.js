index.controller("read",["$scope","$http","$timeout",function($scope,$http,$timeout){
	$scope.getData = function(){
		$scope.bookList = [];
		return $http({
			method:"get",
			url:"mock/read.json"
		}).success(function(data){
//			console.log(data);
			for(var i = 0; i < data.data.length; i++){
//				console.log(data.data[i].title)
				$scope.bookList.push(data.data[i]);
			}
		})
	}
	//页面加载到这时加载一次列表
	$scope.getData();
	//停止下拉刷新
	$scope.doRefreshRead = function() {
		$scope.getData()
			.finally(function() {
				// 停止广播ion-refresher
				$scope.$broadcast('scroll.refreshComplete');
			});
		//						alert("刷新完成")
	};
	//停止上拉加载
	$scope.loadMoreRead = function() {
		$timeout(function(){
			$http({
				method: "get",
				url: "mock/read.json",
				params: {}
			}).success(function(data) {
				for(var i = 0; i < data.data.length; i++){
//				console.log(data.data[i].title)
				$scope.bookList.push(data.data[i]);
			}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
		},1000)
	};
}])