angular.module('bayer-web').controller('DashboardRecrutadorController', function($scope, $http, $location){
    $scope.recrutadorLogado = recrutador;

    $scope.iniciando = function(){
        if(recrutador == null){            
            $location.path("/login");
            return;
        }

        cssFiles = [];
        cssFiles = [
            'home.css',
            'responsive-recruiter.css'
        ];

        //Carrega script para expandir descrições.
        carregarSetas();
    }



});