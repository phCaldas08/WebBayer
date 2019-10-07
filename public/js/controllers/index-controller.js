angular.module('bayer-web').controller('IndexController', function($scope, $http, $location){
    $scope.cssFiles = function(){
        return cssFiles;
    }    

    $scope.usuarioLogado = null;
    $scope.recrutadorLogado = null;

    $scope.alguemLogado = function(){

        $scope.usuarioLogado = usuario;
        $scope.recrutadorLogado = recrutador;

        if($scope.usuarioLogado || $scope.recrutadorLogado)
            return true;
        else 
            return false;
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