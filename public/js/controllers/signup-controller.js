angular.module('bayer-web').controller('SignupController', function($scope, $http, $location){

    $scope.usuario = {
        email: null,
        login: null,
        senha: null,
        tel: null,
        CPF: null,
        nome: null,
        sobrenome: null,
        dataNascimento: '01/01/1990',
        cor: "",
        genero: "",
        estadoEmissor: null,


    };

    $scope.confirmacaoSenha = null;

    $scope.cadastrar = function(){
        if($scope.confirmacaoSenha == $scope.usuario.senha){
            var data = null;

            $scope.usuario.login = $scope.usuario.email;
            $scope.usuario.registro = $scope.usuario.CPF;

            if($scope.usuario.email.includes("@bayer"))
                data = { recrutador: JSON.stringify($scope.usuario) }
            else
                data = { candidato: JSON.stringify($scope.usuario) }                

            $http({
                method: 'POST',
                url: API + 'login/cadastrar',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(function success(data){
                alert("Cadastro realizado com sucesso!");
                //usuario = $scope.usuario;
                $location.path("/login");
            }, function error(data){

                if(data.status == 400)
                    alert(data.message);
                else
                    alert("Não foi possível realizar seu cadastro, tente novamente!");

                console.log(data);
            }); 
        }
        else
            alert("Senhas diferentes");
    }
    
});