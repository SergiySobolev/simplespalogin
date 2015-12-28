var app = angular.module('generalModule',
    [
        'ui.router',
        'loginModal'
    ]);

app.config(function ($stateProvider) {
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            data: {
                requireLogin: false
            }
        })
        .state('app', {
            abstract: true,
            data: {
                requireLogin: true
            }
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html'
        })

});

app.run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
        var requireLogin = toState.data.requireLogin;

        if(requireLogin && typeof $rootScope.currentUser == 'undefined'){
            event.preventDefault();
        // get me a login model
        }
    })

});
