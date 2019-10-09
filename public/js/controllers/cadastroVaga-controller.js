angular.module('bayer-web').controller('CadastroVagaController', function($scope, $http, $location){

    $scope.iniciando = function(){       
        if(recrutador == null){            
            $location.path("/login");
            return;
        }
        
        cssFiles = [];
        cssFiles = [
            "responsive-forms.css",
            'responsive-curriculum.css',
            'responsive-skills.css',
        ];

        if(id_processo_seletivo){
            $scope.consultaVaga(id_processo_seletivo);
            id_processo_seletivo = null;

        }

    }

    $scope.consultaVaga = function(id_processo_seletivo){
        let data = {
            id_recrutador: recrutador.id_recrutador,
            id_processo_seletivo: id_processo_seletivo
        };

        $http({
            method: 'POST',
            url: API + 'processoseletivo/ConsultaProcessoSeletivo',
            data: data,
            headers: {
                'Content-Type': 'application/json'
              }

        }).then(function success(data){
            $scope.vaga = data.data.processo_seletivo;
        }, function error(data){

            if(data.status == 400)
            if(data.status == 400)
                alert(data.message);
            else
                alert("Não conseguimos consultar este processo seletivo, tente novamente! :)");
        });
    }

    $scope.cadastrarProcessoSeletivo = function(){
        let data = {
            id_recrutador: recrutador.id_recrutador,
            processo_seletivo: $scope.vaga

        };

        $http({
            method: 'POST',
            url: API + 'processoseletivo/NovoProcessoSeletivo',
            data: data,
            headers: {
                'Content-Type': 'application/json'
              }

        }).then(function success(data){  
            alert("Processo seletivo cadastrado com sucesso!");
            $location.path("/dashboardRecrutador");

        }, function error(data){
            alert("Não conseguimos cadastrar este processo seletivo, tente novamente! :)");
        });
    }

    $scope.index = 0;

    $scope.vaga = {
        id_processo_seletivo: 0,
        id_recrutador: recrutador.id_recrutador,
        n_inscritos: 0,
        descricao: null,
        nivel: '',
        dataTermino: null,
        limiteCandidatos: null,
        escolaridade: {
            nivel: '',
            status: '',
            areaAtuacao: '',
            nomeCurso: null,
            anoFormacao: null
        },
        experiencia: {
            duracao: null,
            areaAtuacao: null,
            ultimoCargo: null,
            observacao: null
        },
        skill: {
            primeiroIdioma: null,
            nivelPrimeiroIdioma: '',
            segundaIdioma: null,
            nivelSegundoIdioma: '',
            terceiroIdioma: null,
            nivelTerceiroIdioma: '',
            primeiraSkill: null,
            nivelPrimeiraSkill: '',
            segundaSkill: null,
            nivelSegundaSkill: '',
            terceiraSkill: null,
            nivelTerceiraSkill: '',
        }
    }
});