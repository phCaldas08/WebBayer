angular.module('bayer-web').controller('LoginController', function($scope, $http, $location){
    
    $scope.iniciando = function(){
        usuario = null;
        recrutador = null;
        
        cssFiles = [];
        cssFiles = [
            "responsive-forms.css",
        ];
    }

    $scope.usuario = {
        login: null,
        senha: null,
        data_nascimento: new Date(1990, 00, 01)
    };
    
    $scope.esqueciMinhaSenha = false;

    $scope.logar = function(){
        if($scope.usuario.login && $scope.usuario.senha){

            $http({
                method: 'POST',
                url: API + 'login/login',
                data: { usuario: JSON.stringify($scope.usuario) },
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(function success(data){
                console.log(data);
                //alert("Login realizado com sucesso!")
                if(data.data.tipo == 'candidato'){
                    usuario = data.data.usuario;
                    $location.path("/dashboardCandidato");
                }
                else{                    
                    recrutador = data.data.usuario;
                    $location.path("/dashboardRecrutador");
                }
            }, function error(data){
                if(data.status == 401)  
                    alert("Usuário ou senha invalidos!")
                else
                    alert("Erro ao realizar login");
                console.log(data);
            }); 
        }
    }

    $scope.recuperarSenha = function(){
        if($scope.usuario.login && $scope.usuario.data_nascimento){

            $http({
                method: 'POST',
                url: API + 'login/esqueci_minha_senha',                
                data: { usuario: JSON.stringify($scope.usuario) },
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(function success(data){
                console.log(data);
                alert("Sua senha é: " + data.data)
            }, function error(data){
                if(data.status == 404)
                    alert("Nenhuma senha encontrada para este usuário e data de nascimento");
                else
                    alert("Erro ao realizar recuperação de senha");
                console.log(data);
            }); 
        }
    }
    
    
});