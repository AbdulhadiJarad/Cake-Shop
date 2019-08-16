
    var app = angular.module('app', []);
//     app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "cackShope.html",
//         controller : "ctrl"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/contact", {
//         templateUrl : "contact.html"
//     });
// });
    var a = 'hello world';
    app.controller('ctrl', ['$window', '$scope','$http','$interval', function($window, $scope,$http,$interval) {
        $scope.Counter = 1;
        $scope.Counter1 = 0;
        $scope.Counter2 = 0;
        $scope.Counter3 = 0;
        $scope.Counter4 = 0;
        $scope.numberWithCommas = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        var a = $interval(function(){
            console.log('hey');
            $scope.Counter*=2;
        }, 100,15,true);
        var a1 = $interval(function(){
            console.log('hey');
            $scope.Counter1+=100;
        }, 2,100,true);
        var a2 = $interval(function(){
            console.log('hey');
            $scope.Counter2+=1000;
        }, -1,170,true);
        var a3 = $interval(function(){
            console.log('hey');
            $scope.Counter3+=20;
        }, 20,100,true);
        
        console.log($scope.numberWithCommas(1000));
        $scope.more = 0;
        $scope.message='See More';
        $scope. w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
        $scope.hello = a;
        $scope.hotImg = 'icon/1147432.svg';
        $scope.dataset = [
            { title: 'Syrian Cake', hotImg: $scope.hotImg, cardFooter: 'Free', image: 'images/photo-1519869325930-281384150729.jfif',limitStar:'3' },
            { title: 'Spanish Cake', hotImg: $scope.hotImg, cardFooter: 'Top Sale', image: 'images/photo-1426869884541-df7117556757.jfif',limitStar:'2' },
            { title: 'German Cake', hotImg: $scope.hotImg, cardFooter: 'huge Discounts  ', image: 'images/photo-1521886655570-97530ff9454b.jfif',limitStar:'4' },
            { title: 'Italian Cake', hotImg: $scope.hotImg, cardFooter: 'Few products', image: 'images/default_So-Easy-Birthday-Cake-Cupcakes-MAIN-20190419-2001-27913-9217.jpg',limitStar:'1' },
            { title: 'Turkish Cake', hotImg: $scope.hotImg, cardFooter: 'huge Discounts  ', image: 'images/bake-and-take-round-pan-of-cake.jpg',limitStar:'3' },
            { title: 'American Cake', hotImg: $scope.hotImg, cardFooter: 'Free', image: 'images/9bf7ba54-e7de-4997-93cf-a73cffab9cd7.jpg',limitStar:'1' },
            { title: 'Canadian Cake', hotImg: $scope.hotImg, cardFooter: 'Top Sale', image: 'images/keto-cake-chocolate.jpg',limitStar:'4' },
            { title: 'French Cake', hotImg: $scope.hotImg, cardFooter: 'Free', image: 'images/cake.jpg',limitStar:'2' },
            { title: 'British Cake', hotImg: $scope.hotImg, cardFooter: 'Few products  ', image: 'images/Coffee-cake.jpg',limitStar:'3' }
        ];
   
        $scope.getCount = function(){
            var div = document.querySelector('#mytable');
            var Count = div.querySelectorAll('tr').length;
            Count<$scope.dataset.length?$scope.more+=3:$scope.more-=3;
            if ($scope.more+3<$scope.dataset.length)
                $scope.message='See More';
            else 
                $scope.message='See Less';
            console.log(Count);
        };
        $scope.NewStuff = '$index';
        $scope.UpOrDown = true;
        $scope.sort = function(NewStuff){
            console.log(NewStuff);
            if ($scope.NewStuff == NewStuff)
                $scope.UpOrDown = !$scope.UpOrDown;
            else $scope.UpOrDown = false;
                 $scope.NewStuff = NewStuff;
        }
        $scope.filterData = $scope.dataset.length;
        $scope.nodes = [];
        $scope.SelectValue = 1;
        $scope.currPage = 0;
        $scope.data = [];
        $scope.Rand = {
            image: '',
            info: '',
            firstName: '',
            lastName: '',
            num: ''
        };
        
        console.log($scope.Rand);
        console.log('hey');
        $scope.moveMe = function(data) {
            $scope.currPage = parseInt(data) * 3 - 3;
        };
        $scope.next = function() {
            if ($scope.currPage <= 5)
                $scope.currPage = parseInt($scope.currPage) + 3;
        };
        $scope.last = function() {
            if ($scope.currPage >= 3)
                $scope.currPage = parseInt($scope.currPage) - 3;
        };
        $scope.Discover = function(data) {
            $scope.dataImg = $scope.dataset[data].image;
            $scope.title  = $scope.dataset[data].title;
            $scope.getRandomInfo();
        };
        
        $scope.getRandomInfo = function() {
            $http({
                method: 'GET',
                url: 'https://reqres.in/api/users?per_page=12'
            }).then(function(data1) {
                console.log(data1);
                $scope.data = data1.data.data;
                console.log($scope.data[Math.floor(Math.random() * 12)]);
                $scope.Rand.image = $scope.data[Math.floor(Math.random() * 12)].avatar;
                $scope.Rand.firstName = $scope.data[Math.floor(Math.random() * 12)].first_name;
                $scope.Rand.lastName = $scope.data[Math.floor(Math.random() * 12)].last_name;
                console.log($scope.Rand.firstName);
             
            });

            $http({
                method: 'GET',
                url: 'https://api.adviceslip.com/advice'
            }).then(function(data1) {
                console.log(data1.data.slip.advice);
                $scope.Rand.info = data1.data.slip.advice;
            });
            $scope.Rand.num = Math.floor(Math.random() * 60);
        };
        $scope.countHieght = function() {
            var elmnt = document.getElementById("myDIV");
            var y = elmnt.scrollTop;
            var h = window.innerHeight;
            console.log(y + "px" + '<br>' + h + '<br>' + y * 100 / h);
        };
        $scope.apear = function(id){
        console.log('this');
        console.log(typeof id);
        var wisam = document.getElementById(id);
        wisam.classList.add('wisam');
        wisam.classList.remove('wisam-before');
    };
    $scope.disApear = function(id){
        console.log('mouse overed');
        console.log(typeof id);
        var wisam = document.getElementById(id);
        wisam.classList.remove('wisam');
        wisam.classList.add('wisam-before');
    };

    }]);
