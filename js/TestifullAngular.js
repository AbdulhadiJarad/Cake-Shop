var app = angular.module('app', []);
app.controller('ctrl', ['$window', '$scope','$http','$interval', function($window, $scope,$http,$interval) {
$scope.Gallary = 
[
    {img:'images/Testifull/img (145).jpg',des:'',title:'Pound'},
    {img:'images/Testifull/img (150).jpg',des:'',title:'Sponge'},
    {img:'images/Testifull/img (152).jpg',des:'',title:'Butter'},
    {img:'images/Testifull/img (151).jpg',des:'',title:'Genoise'},
    {img:'images/Testifull/img (40).jpg',des:'',title:'Biscuit'},
    {img:'images/Testifull/web_mobile_750x814_scr_caramel.png',des:'',title:'Angel'},
    {img:'images/Testifull/INDIVIDUAL-FLOURLESS-CHOCOLATE-CAKE-11.jpg',des:'',title:'Strubarry'},
    {img:'images/Testifull/chocolate-and-cream-layer-cake-1812-cover.jpg',des:'',title:'Chiffon'},
    {img:'images/Testifull/Chocolate-Velvet-Cake-27.jpg',des:'',title:'Baked Flourless'},
    {img:'images/Testifull/snowy-chocolate-baby-cakes-sl.jpg',des:'',title:'Unbaked Flourless'},
    {img:'images/Testifull/LAYERED-CHOCOLATE-CAKE.jpg',des:'',title:'Carrot'},
    {img:'https://img.taste.com.au/cx-CbSOI/taste/2016/11/santa-hat-brownies-62051-1.jpeg',des:'',title:'Red Velvet'}
];
$scope.dataset = [
    { limitStar:'3' },
    { limitStar:'2' },
    { limitStar:'4' },
    { limitStar:'1' },
    { limitStar:'3' },
    { limitStar:'1' },
    { limitStar:'4' },
    { limitStar:'2' },
    { limitStar:'3' }
];
$scope.randomStars = 3;
$scope.clicked = {
    img:'images/Testifull/img (152).jpg',
    title: 'Butter'
};    
$scope.clickedFun = function(data){
    console.log(data);
    $scope.clicked.img = data.img;
    $scope.clicked.title = data.title;
    $scope.randomStars = Math.ceil(Math.random()*5);
};
}]);
