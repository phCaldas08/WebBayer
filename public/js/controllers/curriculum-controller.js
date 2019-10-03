angular.module('bayer-web').controller('CurriculumController', function($scope, $http, $location){

    $scope.usuarioLogado = usuario;
    $scope.index = 0;

    $scope.curriculum = {
        CPF: null,
        sobrenome: null,
        genero: '',
        cor: '',
        dataNascimento: null,
        rg: null,
        estadoEmissor: null,
        endereco: {
            cep: null,
            rua: null,
            numero: null,
            complemento: null,
            cidade: null,
            estado: null
        },
        ensino: {
            nivel: '',
            instituicao: null,
            curso: null,
            anoConclusao: null,
            periodo: null,
            situacao: '',
            observacao: null
        }

    }

});