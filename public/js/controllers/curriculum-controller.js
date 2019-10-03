angular.module('bayer-web').controller('CurriculumController', function($scope, $http, $location){

    $scope.usuarioLogado = usuario;
    $scope.index = 0;

    $scope.usuario = {
        CPF: null,
        sobrenome: null,
        genero: null,
        cor: null,
        dataNascimento: null,
        rg: null,
        estadoEmissor: null
    }

    $scope.curriculum = {
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