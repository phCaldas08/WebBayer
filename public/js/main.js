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
    
    $routeProvider.when('/curriculum', {
        templateUrl: 'partials/curriculum.html',
        controller: 'CurriculumController'
    });
    
    $routeProvider.when('/dashboardCandidato', {
        templateUrl: 'partials/dashboard-candidato.html',
        controller: 'DashboardCandidatoController'
    });

    $routeProvider.when('/cadastroDeVaga',{
        templateUrl: 'partials/cadastro-vaga.html',
        controller: 'CadastroVagaController'
    });

    $routeProvider.when('/dashboardRecrutador',{
        templateUrl: 'partials/dashboard-recrutador.html',
        controller: 'DashboardRecrutadorController'
    })
       

    $routeProvider.otherwise({
        redirectTo: "/"
    })
    
});

let API = 'http://localhost:54297/api/bayer/';
var usuario = null;
var recrutador = null;
var cssFiles = [];
var id_processo_seletivo = null;


function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
}

function carregarSetas(){
    arrow = document.querySelectorAll('.down-arrow')

    arrow.forEach(function (arrow) {

        arrow.onclick = function () {
            ul = arrow.parentNode
            if (ul.nextElementSibling.classList.contains('hidden')) {
                ul.nextElementSibling.classList.remove('hidden');
            } else ul.nextElementSibling.classList.add('hidden')
        }

    });
}

