angular.module('bayer-web').controller('DashboardCandidatoController', function($scope, $http, $location){

    $scope.usuarioLogado = usuario;

    $scope.iniciando = function(){
        if(usuario == null){            
            $location.path("/login");
            return;
        }

        cssFiles = [];
        cssFiles = [
            'home.css',
        ];

        //Carrega script para expandir descrições.
        carregarSetas();
    }

});
