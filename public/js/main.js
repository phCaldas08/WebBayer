angular.module('bayer-web', ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: "HomeController"
    });

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: "LoginController"
    });

    
    $routeProvider.when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: "SignupController"
    });
       
       

    $routeProvider.otherwise({
        redirectTo: "/"
    })
    
});

let API = 'http://localhost:54297/api/bayer/';
var usuario = null;


function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
}



