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
        $scope.consultaVagas();
    }

    $scope.vagas_abertas = [];

    $scope.trocarTela = function(tela){
        $location.path("/" + tela);
    }

    $scope.carregarSetas = function(){
        carregarSetas();
    }

    $scope.consultaVagas = function(){
        let data = {
            id_recrutador: recrutador.id_recrutador
        };

        $http({
            method: 'POST',
            url: API + 'processoseletivo/ProcessosSeletivos',
            data: data,
            headers: {
                'Content-Type': 'application/json'
              }

        }).then(function success(data){
            $scope.vagas_abertas = data.data.vagas_abertas.vagas_abertas;
            $scope.vagas_encerradas = data.data.vagas_encerradas.vagas_encerradas;
        }, function error(data){

            if(data.status == 400)
            if(data.status == 400)
                alert(data.message);
            else
                alert("Não conseguimos consultar este processo seletivo, tente novamente! :)");
        });
    }

    $scope.setIdProcessoSeletivo = function(id){
        id_processo_seletivo = id;
    }

});