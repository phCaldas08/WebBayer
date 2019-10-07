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

    }

    $scope.index = 0;

    $scope.vaga = {
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