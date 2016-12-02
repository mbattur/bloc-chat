(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
            
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
            // .state('room', {
            //     url: '/',
            //     controller: 'RoomsCtrl as room',
            //     templateUrl: '/templates/room.html',
            // });
        }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();