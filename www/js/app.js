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
    .state("unionVillage.ourVillage", {
        url: "/ourVillage",
        views: {
            'content@': {
                templateUrl: 'templates/ourVillage.html'
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