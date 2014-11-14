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
        '$rootScope', '$location', '$anchorScroll', '$sce', function ($rootScope, $location, $anchorScroll, $sce) {
            $rootScope.scrollTo = function (id) {
                $location.hash(id);
                $anchorScroll();
            };

            $rootScope.formUrl = 'https://docs.google.com/forms/d/1qRTIC1pq8cnQMJehWN_mhMg8r3QoZYjM8lrlTPI05Ys/viewform';

            $rootScope.informations = [
                {
                    content: 'ボルスタッド先生による<a href="#/class-archive">口頭発表講座</a>が10月29日から始まります。',
                    date: new Date(2014, 9, 21)
                },
                {
                    content: '<a href="data/院生評価者募集.pdf">シンポジウム当日に発表者の評価を行うアルバイト(大学院生向け)を募集しています。</a>',
                    date: new Date(2014, 9, 21)
                },
                {
                    content: '論文投稿締切は9月30日です。<a href="http://www.viz.media.kyoto-u.ac.jp/ojs">OJS</a>から投稿を行ってください。',
                    date: new Date(2014, 8, 15)
                },
                {
                    content: '<a href="#/class-archive">夏期集中講義</a>のアーカイブを更新しました。',
                    date: new Date(2014, 8, 15)
                },
                {
                    content: 'シンポジウムへの参加登録は8月8日(金)が締切です。早めの<a href="' + $rootScope + '">登録</a>をお願いします。',
                    date: new Date(2014, 6, 1)
                },
                {
                    content: '発表希望者向け<a href="#/class-archive">説明会</a>を7月3日(木)5限、7月11日(金)5限に吉田南1号館1共23教室で開催します。',
                    date: new Date(2014, 6, 1)
                },
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
            $rootScope.informations.forEach(function (info) {
                info.content = $sce.trustAsHtml(info.content);
            });
        }]);
})(sympo2014 || (sympo2014 = {}));
