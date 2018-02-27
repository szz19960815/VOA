index.controller("readInfo",["$scope","$http","$stateParams",function($scope,$http,$stateParams){
	$scope.back = function(){
		history.back();
	}
	
	//请求文章列表
	$scope.articles = [];
	$http({
		method:"get",
		url:"mock/read.json"
	}).success(function(data){
		for (var i = 0; i < data.data.length; i++){
//			console.log($stateParams)
			$scope.articles.push(data.data[i].title);
//			console.log($stateParams.id)
			if(data.data[i].id == $stateParams.id){
				$scope.articleTitle = data.data[i].title;
				console.log($scope.articleTitle)
				$http({
					method:"get",
					url:data.data[i].version
				}).success(function(info){
					document.getElementById("readInfo").innerHTML = info;
				}).error(function(err){
					console.log(err)
				})
			}
		}
	})
}])