var app = angular.module('app', []);
app.controller('ctrl', function($scope,$http) {
    $scope.w = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
    $scope.users = [    
        { userName: '',userImg:'images/photo-1542103749-8ef59b94f47e.jfif',userTelephone:' (509) 658-7445',userMail:'',userDescription: 'Lorem ipsum dolor sit amet, te sed habeo voluptatum, et nec option prompta.',userAddress:'Germany- Berlin' },
        { userName: '',userImg:'images/photo-1500048993953-d23a436266cf.jfif',userTelephone:'(343) 261-2254',userMail:'',userDescription: 'Pri quis primis necessitatibus cu. Ei habemus senserit vim. Augue fabulas eos ex.',userAddress:'Britian- London' },
        { userName: '',userImg:'images/pexels-photo-733872.jpeg',userTelephone:'(873) 395-3050',userMail:'',userDescription: 'Pri quis primis necessitatibus cu. Ei habemus senserit vim. Augue fabulas eos ex.',userAddress:'Turkey- Istanbul' },
        { userName: '',userImg:'images/photo-1499358517822-d8578907a095.jfif',userTelephone:'(827) 655-6825',userMail:'',userDescription: 'his ex praesent forensibus efficiendi, an omnesque dignissim constituto mel.',userAddress:'Syria- Damscus' },
        { userName: '',userImg:'images/photo-1508214751196-bcfd4ca60f91.jfif',userTelephone:'(744) 283-8215',userMail:'',userDescription: 'Per eius alienum contentiones ad. Purto lucilius nominati est eu. ',userAddress:'Iraq- Baghdad' },
        { userName: '',userImg:'images/photo-1496239943629-500dbbf945b1.jfif',userTelephone:'(519) 363-0515',userMail:'',userDescription: 'Ad pri ferri nostro. Ea quot iudico graeci qui, sumo partem fastidii ut est.',userAddress:'America- Washington DC' },
        { userName: '',userImg:'images/photo-1548905131-34d75873c992.jfif',userTelephone:'(602) 334-9854',userMail:'',userDescription: 'ridens dolorem pertinacia ea vel. Duo id brute tempor, impetus detraxit molestiae nam.',userAddress:'Japan- Tokyo' },
        { userName: '',userImg:'images/photo-1544098485-2a2ed6da40ba.jfif',userTelephone:'(988) 411-3551',userMail:'',userDescription: 'wisi veri diceret sit. Malorum sententiae eam et. Deleniti invidunt quo no, ea diceret sensibus complectitur quo.',userAddress:'Syria- Homs' },
        { userName: '',userImg:'images/photo-1499358517822-d8578907a095.jfif',userTelephone:'(445) 820-4042',userMail:'',userDescription: 'Usu atqui nonumes ex. Et oratio laudem meliore vis. Ea eum ponderum accusata. Ut minim repudiare adipiscing pri.',userAddress:'Pakstan- Kabol' },
        { userName: '',userImg:'images/maxresdefault.jpg',userTelephone:'(795) 806-8070',userMail:'',userDescription: 'Est ex deserunt corrumpit. Lorem ludus rationibus ex pro, summo accusam consulatu te qui.',userAddress:'Jordan- Amman' },
        { userName: '',userImg:'images/johannes_strate_skarf_man_face_field_8373_1920x1080.jpg',userTelephone:'(680) 367-4535',userMail:'',userDescription: 'Et mazim iudico pro, vis ponderum contentiones ad, ius eu fierent intellegat. Quo oportere periculis eu.',userAddress:'Algeria- Algeria' },
        { userName: '',userImg:'images/1a9578e0-45a3-11e9-bfaf-cca800499787.jfif',userTelephone:'(660) 415-9135',userMail:'',userDescription: 'Tempor utamur ne vis, ut est consul indoctum, at enim vide sed. Cum munere prompta prodesset no.',userAddress:'France- Paris' },
        { userName: 'Iyad Omar',userImg:'images/i2rbqt0toz2nm4z7r4z7.webp',userTelephone:'(762) 991-4558',userMail:'',userDescription: 'nam id sumo epicurei oporteat. Cu alia insolens sensibus duo, eu eos officiis intellegam.',userAddress:'Turkey- Ankara' },
        { userName: 'Mohammed',userImg:'images/dan-baerx750.jpg',userTelephone:'(664) 636-2531',userMail:'',userDescription: 'Quando invenire gloriatur no per, nam ad imperdiet euripidis. Facete reformidans deterruisset eu eum.',userAddress:'Iran- Tahran' },
        { userName: 'Lary Boston',userImg:'images/photo-1548905131-34d75873c992.jfif',userTelephone:'(517) 274-5424',userMail:'',userDescription: 'vis quod aliquam fabellas ea, dolores mediocrem intellegebat ut mei.',userAddress:'Bahrin- Bahrin' }
    ];
    $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?per_page=12'
    }).then(function(data1) {
        console.log(data1);
        $scope.data = data1.data.data;
        for (var i = 0 ;i<$scope.data.length;i++){
            $scope.users[i].userName = $scope.data[i].first_name + " " + $scope.data[i].last_name;
            $scope.users[i].userMail = $scope.data[i].first_name;
        }
    });
    $scope.currPage = 0;
    $scope.Discover = function(data) {
        $scope.dataImg = $scope.users[data].userImg;
        $scope.title  = $scope.users[data].userName;
    };
    $scope.moveMe = function(data) {
        $scope.currPage = parseInt(data);
    };
    $scope.seekNext = function(){
            console.log($scope.currPage);

            if ($scope.w>600 && $scope.w<876){
                if (parseInt($scope.currPage) + 2 < 15){
                   $scope.currPage+=2;
                }
            }
            else if ($scope.w>=876){
                if (parseInt($scope.currPage) + 3 < 15){
                     $scope.currPage+=3;
            }
        }
            else {
                if (parseInt($scope.currPage) + 1 < 15){
                   $scope.currPage+=1;
                }
            }
        
          
    };
    $scope.seekBefore = function(){
          
        if ($scope.w>600 && $scope.w<876){
            if (parseInt($scope.currPage) - 2 > 0){
                $scope.currPage-=2;
            }
        }
        else if ($scope.w>=876){
            if (parseInt($scope.currPage) - 3 >= 0){
                 $scope.currPage-=3;
        }
    }
        else {
            if (parseInt($scope.currPage) - 1 > 0){
                $scope.currPage-=1;
            }
        }
    
    };  
    $scope.getStatus = function(){
        if ($scope.w>600 && $scope.w<876){
            return 2;
        }
        else if ($scope.w>=876){
            return 3;
        }
        return 1;
    };
    $scope.getPagStatus= function(){
        if ($scope.w>600 && $scope.w<876){
            return $scope.users.length/2;
        }
        else if ($scope.w>=876){
            return $scope.users.length/3;
        }
        return $scope.users.length;
    };
});