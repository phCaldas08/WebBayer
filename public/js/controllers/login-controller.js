angular.module('bayer-web').controller('LoginController', function($scope, $http){

    $scope.usuario = {
        login: null,
        senha: null
    };

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
                alert("Login realizado com sucesso!")
                usuario = $scope.usuario;
            }, function error(data){
                if(data.status == 401)
                    alert("Usuário ou senha invalidos!")
                else
                    alert("Erro ao realizar login");
                console.log(data);
            }); 
        }
    }
    
});