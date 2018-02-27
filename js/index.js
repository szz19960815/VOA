



var index = angular.module("index", ["ionic"]);
index.config(function($stateProvider) {
	$stateProvider.state("hearing", {
		url: "/hearing",
		templateUrl: "html/hearing.html",
		controler:"content"
	}).state("video", {
		url: "/video",
		templateUrl: "html/video.html",
		controller:"video"
	}).state("read", {
		url: "/read",
		templateUrl: "html/read.html",
		controller:"read"
	}).state("myself", {
		url: "/myself/:user",
		templateUrl: "html/myself.html",
		controller:"myself",
		cache : false,
		params : {user:null}
		
	}).state("hearing_info",{
		url:"/hearing_info/:id",
		templateUrl: "html/hearing_info.html",
		controller:"hearingInfo"
	}).state("video_info",{
		url:"/video_info/:id",
		templateUrl: "html/video_info.html",
		controller:"videoInfo"
	}).state("read_info",{
		url:"/read_info/:id",
		templateUrl: "html/read_info.html",
		controller:"readInfo"
	})
});
index.controller("content", ["$scope", "$http", "$state", "$location","$timeout", function($scope, $http, $state, $location,$timeout) {
	$state.go("hearing");
	
	
	//听力部分
	$scope.bannerList = [];
	$scope.foot_style1 = true;
	$scope.choice1 = function(){
		$scope.foot_style1 = true;
		$scope.foot_style2 = false;
		$scope.foot_style3 = false;
		$scope.foot_style4 = false;
	}
	$scope.choice2 = function(){
		$scope.foot_style1 = false;
		$scope.foot_style2 = true;
		$scope.foot_style3 = false;
		$scope.foot_style4 = false;
	}
	$scope.choice3 = function(){
		$scope.foot_style1 = false;
		$scope.foot_style2 = false;
		$scope.foot_style3 = true;
		$scope.foot_style4 = false;
	}
	document.addEventListener("plusready",onPlusReady,false);
		function onPlusReady(){
			
	$scope.choice4 = function(){
		$scope.foot_style1 = false;
		$scope.foot_style2 = false;
		$scope.foot_style3 = false;
		$scope.foot_style4 = true;
		var a = plus.storage.getItem("user");
	$state.go("myself",{user : a})
			
		}
	}

	//加载轮播图
	$http({
		method: "get",
		url: "mock/hearing.json",
		params: {}
	}).success(function(data) {
		for(var i = 0; i < data.length; i++) {
			var banner = data[0].data;
			for(var i = 0; i < banner.length; i++) {
				$scope.bannerList.push(banner[i]);
			}
		}
	})
	
	//加载信息列表
	$scope.loadInfo = function(){
		$scope.List = [];
		return $http({
			method: "get",
			url: "mock/hearing.json",
			params: {}
		}).success(function(data) {
			for(var i = 0; i < data.length; i++) {
				var list = data[1].data;
				for(var i = 0; i < list.length; i++) {
					$scope.List.push(list[i]);
				}
			}
		})
	}
	//下拉刷新
	$scope.loadInfo();
	$scope.doRefresh = function() {
		$scope.loadInfo()
		.finally(function() {
			// 停止广播ion-refresher
			$scope.$broadcast('scroll.refreshComplete');
		});
		//						alert("刷新完成")
	};

	//停止上拉加载
	$scope.loadMore = function() {
		$timeout(function(){
			$http({
				method: "get",
				url: "mock/hearing.json",
				params: {}
			}).success(function(data) {
				for(var i = 0; i < data.length; i++) {
					var list = data[1].data;
					for(var i = 0; i < list.length; i++) {
						$scope.List.push(list[i]);
					}
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			})
		},1000)
	};
}]);
