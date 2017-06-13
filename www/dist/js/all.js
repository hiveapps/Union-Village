var unionVillage = angular.module('unionVillage', ['ui.router', 'unionVillage.controllers', 'unionVillage.services', 'unionVillage.directives', 'firebase', 'ui.bootstrap']);

unionVillage.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

unionVillage.config(function($stateProvider, $urlRouterProvider) {
      
  $stateProvider
  
  // setup an abstract state for the tabs directive   
  .state('unionVillage', {
        abstract: true,
        views: {
            'header': {
                templateUrl: 'templates/header.html'
            },
            'footer': {
                templateUrl: 'templates/footer.html'
            }
        }
    })
    .state("unionVillage.home", {
        url: "/",
        views: {
            'content@': {
                templateUrl: 'templates/home.html'
            }
        }
    })
    .state("unionVillage.integratedVillage", {
        url: "/integratedVillage",
        views: {
            'content@': {
                templateUrl: 'templates/integratedVillage.html'
            }
        }
    })
    .state("unionVillage.wellnessVillage", {
        url: "/wellnessVillage",
        views: {
            'content@': {
                templateUrl: 'templates/wellnessVillage.html'
            }
        }
    })
    .state("unionVillage.location", {
        url: "/location",
        views: {
            'content@': {
                templateUrl: 'templates/location.html'
            }
        }
    })
    .state("unionVillage.leaseInfo", {
        url: "/leaseInfo",
        views: {
            'content@': {
                templateUrl: 'templates/leaseInfo.html'
            }
        }
    })
    .state("unionVillage.project", {
        url: "/project",
        views: {
            'content@': {
                templateUrl: 'templates/project.html'
            }
        }
    })
        .state("unionVillage.live", {
        url: "/live",
        views: {
            'content@': {
                templateUrl: 'templates/live.html'
            }
        }
    })
        .state("unionVillage.work", {
        url: "/work",
        views: {
            'content@': {
                templateUrl: 'templates/work.html'
            }
        }
    })
        .state("unionVillage.play", {
        url: "/play",
        views: {
            'content@': {
                templateUrl: 'templates/play.html'
            }
        }
    })
    .state("unionVillage.ourCompany", {
        url: "/ourCompany",
        views: {
            'content@': {
                templateUrl: 'templates/ourCompany.html'
            }
        }
    })
    .state("unionVillage.photos", {
        url: "/photos",
        views: {
            'content@': {
                templateUrl: 'templates/photos.html'
            }
        }
    })
    .state("unionVillage.map", {
        url: "/map",
        views: {
            'content@': {
                templateUrl: 'templates/map.html'
            }
        }
    })
    .state("unionVillage.press", {
        url: "/press",
        views: {
            'content@': {
                templateUrl: 'templates/press.html'
            }
        }
    })
    .state("unionVillage.contact", {
        url: "/contact",
        views: {
            'content@': {
                templateUrl: 'templates/contact.html'
            }
        }
    })
    .state("unionVillage.test", {
        url: "/test",
        views: {
            'content@': {
                templateUrl: 'templates/test.html'
            }
        }
    })
    .state("unionVillage.success", {
        url: "/success",
        views: {
            'content@': {
                templateUrl: 'templates/success.html'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});
var unionVillage = angular.module('unionVillage.controllers', []);


unionVillage.controller("headerCtrl", function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});


unionVillage.controller("homeCtrl", function($scope, $state){
	jQuery(document).ready(function($){
		//open-close submenu on mobile
		$('.cd-main-nav').on('click', function(event){
			if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
		});
	});
});

unionVillage.controller("testingCtrl", function($scope, $state){
	var $animation_elements = $('.animation-element');
	var $window = $(window);
	
	function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);
	
	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
	
		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
		(element_top_position <= window_bottom_position)) {
		$element.addClass('in-view');
		} else {
		$element.removeClass('in-view');
		}
	});
	}
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});


unionVillage.controller("servicesCtrl", function($scope, $state){
	
});


unionVillage.controller("aboutUsCtrl", function($scope, $state){
	
});


unionVillage.controller("pricingCtrl", function($scope, $state){
	
});

unionVillage.controller("contactCtrl", function($scope, $state){
	$('.maps').click(function () {
		$('.maps iframe').css("pointer-events", "auto");
	});

	$( ".maps" ).mouseleave(function() {
	$('.maps iframe').css("pointer-events", "none"); 
	});
});

unionVillage.controller("mailCtrl", function($scope, $state){
	(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
});