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