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
                templateUrl: 'portal-templates/index.html'
            }
        }
    })
    .state("unionVillage.dashboard", {
        url: "/dashboard",
        views: {
            'content@': {
                templateUrl: 'portal-templates/dashboard.html'
            }
        }
    });
    
    $urlRouterProvider.otherwise("/");
    
});