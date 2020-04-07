
var a = angular.module('1st',['ngRoute'])

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

a.controller('b', function($scope,$window){

	$scope.logo = "images/1.png";

    $scope.jobs = [
       {Title:"web designer", Type:"full-time", Community:"dribble community", Location:"San Franciso, USA", Salary:14000, Description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {Title:"Front-end developer", Type:"part-time", Community:"twitter community", Location:"CA Franciso, USA", Salary:18000, Description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {Title:"backend developer", Type:"contract", Community:"linkedin community", Location:"miami", Salary:15000, Description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {Title:"fullstack developer", Type:"product-base", Community:"bionyn community", Location:"canada", Salary:20000, Description:"We are looking for a person with a strong medical background to provide medical advice to patients online."},
       {Title:"python developer", Type:"full-time", Community:"netsole community", Location:"uae", Salary:30000, Description:"We are looking for a person with a strong medical background to provide medical advice to patients online."}
    ];




   $scope.detail = function(index){

                $scope.title = $scope.jobs[index].Title;
                $scope.type = $scope.jobs[index].Type;
                $scope.community = $scope.jobs[index].Community;
                $scope.location = $scope.jobs[index].Location;
                $scope.salary = $scope.jobs[index].Salary;
                $scope.description = $scope.jobs[index].Description;
        };












  $scope.add = function () 
            {
                if (angular.isDefined($scope.Title) && $scope.Title != '' && $scope.Type != '' && $scope.Community != '' && $scope.Location != '' && $scope.Salary != '' && $scope.Description != '') 
                {
                    // ADD A NEW ELEMENT.
                    $scope.jobs.push({ Title: $scope.Title, Type: $scope.Type, Community: $scope.Community, Location: $scope.Location, Salary: $scope.Salary, Description: $scope.Description });

                    // CLEAR THE FIELDS.
                    $scope.Title = '';
                    $scope.Type = '';
                    $scope.Community = '';
                    $scope.Location = '';
                    $scope.Salary = '';
                    $scope.Description = '';
                    
                }
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