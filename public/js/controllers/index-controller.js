angular.module('bayer-web').controller('IndexController', function($scope, $http, $location){
    $scope.cssFiles = function(){
        return cssFiles;
    }    

    $scope.usuarioLogado = null;
    $scope.recrutadorLogado = null;

    $scope.tipoLogado = function(){

        $scope.usuarioLogado = usuario;
        $scope.recrutadorLogado = recrutador;

        if($scope.usuarioLogado)
            return 1;
        else if($scope.recrutadorLogado)
            return 2;
        else 
            return 0;
    }

    $scope.tipoDashboard = function(){

        $scope.usuarioLogado = usuario;
        $scope.recrutadorLogado = recrutador;

        if($scope.usuarioLogado)
            return '#/dashboardCandidato';
        else
            return '#/dashboardRecrutador';
    }
})