
var a = angular.module('1st',['ngRoute']);

a.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/work', {
        templateUrl: 'pages/work.html',
    }).
     when('/blog', {
        templateUrl: 'pages/blog.html',
    }).
     when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
    otherwise({
        redirectTo: 'index.html',
    });
}]
);

a.controller('b', function($scope){

	$scope.logo = "images/1.png";

    $scope.jobs =[
       {title:"web designer",type:"full-time", community:"dribble community", location:"San Franciso, USA", salary:14000, description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {title:"Front-end developer",type:"part-time", community:"twitter community", location:"CA Franciso, USA", salary:18000, description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {title:"backend developer",type:"contract", community:"linkedin community", location:"miami", salary:15000, description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {title:"fullstack developer",type:"product-base", community:"bionyn community", location:"canada", salary:20000, description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {title:"python developer",type:"full-time", community:"netsole community", location:"uae", salary:30000, description:"We are looking for a person with a strong medical background to provide medical advice to patients online."}
    ]

  $scope.add = function () 
            {
                if (angular.isDefined($scope.title) && $scope.title != '' && $scope.type != '' && $scope.community != '' && $scope.location != '' && $scope.salary != '' && $scope.description != '') 
                {
                    // ADD A NEW ELEMENT.
                    $scope.jobs.push({ title: $scope.title, type: $scope.type, community: $scope.community, location: $scope.location, salary: $scope.salary, description: $scope.description });

                    // CLEAR THE FIELDS.
                    $scope.title = '';
                    $scope.type = '';
                    $scope.community = '';
                    $scope.location = '';
                    $scope.salary = '';
                    $scope.description = '';
                    
                }
            }

     
      $scope.detail = function(index){
         $scope.c = {"display":"block"}
         $scope.d = {"display":"none"}
         $scope.e = {"display":"none"}
         $scope.f = {"display":"none"}
          $scope.jobs.get(index,1)
     }
    $scope.remove = function(index){
         $scope.jobs.splice(index,1)
      }

      $scope.home = function(){
         $scope.c = {"display":"none"}
         $scope.d = {"display":"block"}
         $scope.e = {"display":"block"}
         $scope.f = {"display":"block"}
      }


        $scope.c = true;
         $scope.d = true;
         $scope.e = true;
         $scope.f = true;
         $scope.g = true;
         $scope.h = true;
         $scope.i = true;
         $scope.j = true;

     $scope.about = function(){
        $scope.g = true;
        $scope.e = false;
         $scope.c = false;
         $scope.d = false;
         $scope.e = false;
         $scope.f = false;
         $scope.h = false;
         $scope.i = false;
         $scope.j = false;
     }

     $scope.work = function(){
        $scope.g = false;
        $scope.e = false;
         $scope.c = false;
         $scope.d = false;
         $scope.e = false;
         $scope.f = false;
         $scope.h = true;
         $scope.i = false;
         $scope.j = false;
     }

     $scope.blog = function(){
        $scope.g = false;
        $scope.e = false;
         $scope.c = false;
         $scope.d = false;
         $scope.e = false;
         $scope.f = false;
         $scope.h = false;
         $scope.i = true;
         $scope.j = false;
     }

     $scope.contact = function(){
        $scope.g = false;
        $scope.e = false;
         $scope.c = false;
         $scope.d = false;
         $scope.e = false;
         $scope.f = false;
         $scope.h = false;
         $scope.i = false;
         $scope.j = true;
     }


});