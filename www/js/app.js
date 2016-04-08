var hive = angular.module('unionVillage', ['ui.router', 'unionVillage.controllers', 'unionVillage.services', 'unionVillage.directives', 'firebase']);

hive.config(function($stateProvider, $urlRouterProvider) {
      
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
    .state("unionVillage.leaseInfo", {
        url: "/leaseInfo",
        views: {
            'content@': {
                templateUrl: 'templates/leaseInfo.html'
            }
        }
    })
    .state("unionVillage.callUs", {
        url: "/callUs",
        views: {
            'content@': {
                templateUrl: 'templates/callUs.html'
            }
        }
    })
    .state("unionVillage.drivingDirections", {
        url: "/drivingDirections",
        views: {
            'content@': {
                templateUrl: 'templates/drivingDirections.html'
            }
        }
    })
    .state("unionVillage.login", {
        url: "/login",
        views: {
            'content@': {
                templateUrl: 'templates/login.html'
            }
        }
    })
    .state('unionVillage.thread', {
        url: "/thread",
        views: {
            'content@': {
                templateUrl: 'templates/thread.html'
            }
        }
    });

    
    $urlRouterProvider.otherwise("/");
    
});