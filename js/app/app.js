// module to display provider details 
angular.module(
		'app',
		[ 'ui.router', 'ui.bootstrap', 'ngTouch', 'ui.grid', 'ui.grid.pagination',
				'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.autoResize']).

config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/createQuestion');
	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	/*.state('viewPrvdDtlPage', {
		url : '/viewPrvdDtlPage/:prvdId',
		views : {
			'' : {
				templateUrl : 'partials/viewPrvdDetail.html',
				controller : 'ViewPrvdDetailCtrl'
			},

			'demographic@viewPrvdDtlPage' : {
				templateUrl : 'partials/demographic.html',
				controller : 'DemographicCtrl'
			},
			'clinical@viewPrvdDtlPage' : {
				templateUrl : 'partials/clinical.html',
				controller : 'ClinicalCtrl'
			},
			'watchlist@viewPrvdDtlPage' : {
				templateUrl : 'partials/watchlist.html',
				controller : 'WatchListCtrl'
			}
		}
	})*/.state('createQuestion', {
		url : '/createQuestion',
		templateUrl : 'partials/createQuestion.html',
		controller : 'CreateQuestionCtrl'
	});
} ]);