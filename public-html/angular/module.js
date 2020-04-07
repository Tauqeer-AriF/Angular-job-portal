
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
       {title:"web designer",type:"full-time", community:"dribble community", location:"San Franciso, USA", salary:14000, description:"here goes description"},
       {title:"Front-end developer",type:"part-time", community:"twitter community", location:"CA Franciso, USA", salary:18000, description:"here goes description"},
       {title:"backend developer",type:"contract", community:"linkedin community", location:"miami", salary:15000, description:"here goes description"},
       {title:"fullstack developer",type:"product-base", community:"bionyn community", location:"canada", salary:20000, description:"here goes description"},
       {title:"python developer",type:"full-time", community:"netsole community", location:"uae", salary:30000, description:"here goes description"}
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

     
      $scope.detail = function(){
         $scope.c = {"display":"block"}
         $scope.d = {"display":"none"}
         $scope.e = {"display":"none"}
         $scope.f = {"display":"none"}
      }

      $scope.home = function(){
         $scope.c = {"display":"none"}
         $scope.d = {"display":"block"}
         $scope.e = {"display":"block"}
         $scope.f = {"display":"block"}
      }
});