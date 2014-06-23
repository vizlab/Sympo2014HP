/// <reference path="typings/tsd.d.ts"/>

module sympo2014 {

interface Information {
  content: string;
}

interface RootScope extends ng.IRootScopeService {
  scrollTo: (id : string) => void;
  informations: Information[];
  formUrl: string;
}

export var app = angular
  .module('sympo2014', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouteProvider: ng.ui.IUrlRouterProvider) => {
    $stateProvider
      .state('home', {
        templateUrl: 'partials/home.html',
        url: '/home',
      })
      .state('info', {
        templateUrl: 'partials/info.html',
        url: '/info',
      })
      .state('sympo', {
        templateUrl: 'partials/sympo.html',
        url: '/sympo',
      })
      .state('about', {
        templateUrl: 'partials/about.html',
        url: '/about',
      })
      .state('how-to-start', {
        templateUrl: 'partials/how-to-start.html',
        url: '/how-to-start',
      })
      .state('how-to-write', {
        templateUrl: 'partials/how-to-write.html',
        url: '/how-to-write',
      })
      .state('submit', {
        templateUrl: 'partials/submit.html',
        url: '/submit',
      })
      .state('requirements', {
        templateUrl: 'partials/requirements.html',
        url: '/requirements',
      })
      .state('faq', {
        templateUrl: 'partials/faq.html',
        url: '/faq',
      })
      .state('class-archive', {
        templateUrl: 'partials/class-archive.html',
        url: '/class-archive',
      })
      ;

    $urlRouteProvider.otherwise('/home');
  }])
  .run(['$rootScope', '$location', '$anchorScroll', '$sce', ($rootScope: RootScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $sce) => {
    $rootScope.scrollTo = (id : string) => {
      $location.hash(id);
      $anchorScroll();
    };

    $rootScope.formUrl = 'https://docs.google.com/forms/d/1qRTIC1pq8cnQMJehWN_mhMg8r3QoZYjM8lrlTPI05Ys/viewform';

    $rootScope.informations = [
      {
        content: '英語論文執筆に関する夏期集中講義は9月8日〜12日の2限〜4限に開講されます。',
        date: new Date(2014, 5, 23)
      },
      {
        content: '研究の世界入門講座のアーカイブが<a href="#/class-archive">こちら</a>からご覧いただけます。',
        date: new Date(2014, 5, 23)
      },
      {
        content: 'シンポジウムへの参加登録を<a href="' + $rootScope.formUrl + '">こちら</a>から受け付けています。',
        date: new Date(2014, 4, 7)
      },
      {
        content: 'シンポジウムの開催日が11月21日に決定しました。',
        date: new Date(2014, 5, 9)
      },
      {
        content: '<a href="#/class-archive#t0">研究の世界入門講座</a> 第4回、第5回は1共23(212)に教室が変更になります。',
        date: new Date(2014, 4, 29)
      },
      {
        content: '5月14日から<a href="#/class-archive#t0">研究の世界入門講座</a>が開催されます。',
        date: new Date(2014, 4, 7)
      },
      {
        content: 'シンポ2014HPがリリースしました。',
        date: new Date(2014, 2, 11)
      }
    ];
    $rootScope.informations.forEach((info) => {
      info.content = $sce.trustAsHtml(info.content);
    });
  }])
  ;
}
