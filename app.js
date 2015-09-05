var campernewsApp = angular.module("campernewsApp", []);

campernewsApp.controller("CamperNewsCtrl", function($scope, $http) {
	/*$scope.stories = [
		{ 	'articleHyperlink': 'http://www.businessinsider.com/learning-how-to-code-imposter-syndrome-2014-11',
			'imageSrc': 'http://static6.businessinsider.com/image/546cf4f9eab8ea4763e8f0b8/a-programmer-describes-how-he-nearly-went-insane-learning-to-code.jpg',
			'commentsCount': 5,
			'commentsHyperlink': 'http://www.businessinsider.com/learning-how-to-code-imposter-syndrome-2014-11',
			'authorHyperlink': 'http://www.businessinsider.com/learning-how-to-code-imposter-syndrome-2014-11',
			'authorName': "twoscoop",
			'headline': "A Programmer Describes How He Nearly Went Insane Learning To Code"

		}
	];*/
	var url = 'http://www.freecodecamp.com/stories/hotStories';
	$scope.news = [];
	$http.get(url).success(function(response) {
		$scope.stories = response;
		console.log(response[0]);
	});
});