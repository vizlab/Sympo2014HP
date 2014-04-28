var sympo2014;
(function (sympo2014) {
    sympo2014.app = angular.module('sympo2014', ['ui.router']).config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {
            $stateProvider.state('home', {
                templateUrl: 'partials/home.html',
                url: '/home'
            }).state('info', {
                templateUrl: 'partials/info.html',
                url: '/info'
            }).state('sympo', {
                templateUrl: 'partials/sympo.html',
                url: '/sympo'
            }).state('about', {
                templateUrl: 'partials/about.html',
                url: '/about'
            }).state('how-to-start', {
                templateUrl: 'partials/how-to-start.html',
                url: '/how-to-start'
            }).state('how-to-write', {
                templateUrl: 'partials/how-to-write.html',
                url: '/how-to-write'
            }).state('submit', {
                templateUrl: 'partials/submit.html',
                url: '/submit'
            }).state('requirements', {
                templateUrl: 'partials/requirements.html',
                url: '/requirements'
            }).state('faq', {
                templateUrl: 'partials/faq.html',
                url: '/faq'
            }).state('class-archive', {
                templateUrl: 'partials/class-archive.html',
                url: '/class-archive'
            });

            $urlRouteProvider.otherwise('/home');
        }]).run([
        '$rootScope', '$location', '$anchorScroll', function ($rootScope, $location, $anchorScroll) {
            $rootScope.scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };
        }]);
})(sympo2014 || (sympo2014 = {}));
