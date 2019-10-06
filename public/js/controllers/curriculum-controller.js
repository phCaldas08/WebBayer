angular.module('bayer-web').controller('CurriculumController', function($scope, $http, $location){

    usuario;
    $scope.index = 0;
    $scope.usuarioLogado = usuario;

    $scope.usuario = {
        CPF: null,
        sobrenome: null,
        genero: "",
        cor: "",
        dataNascimento: null,
        rg: null,
        estadoEmissor: null,
        telefone: null
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
        },
        skill: {
            primeiroIdioma: null,
            nivelPrimeiroIdioma: 0,
            segundoIdioma: null,
            nivelSegundoIdioma: 0,
            terceiroIdioma: null,
            nivelTerceiroIdioma: 0,
            primeiraHabilida: null,
            nivelPrimeiraHabilidade: 0,
            segundaHabilidade: null,
            nivelSegundaHabilidade: 0,
            terceiraHabilidade: null,
            nivelTerceiraHabilidade: 0
        }

    }

    $scope.consultarCurriculo = function(){
        if(usuario == null){            
            $location.path("/login");
            return;
        }

        let data = {
            id_usuario: usuario.id_usuario,
        };

        $http({
            method: 'POST',
            url: API + 'curriculo/ConsultarCurriculo',
            data: data,
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(function success(data){
            $scope.usuario = data.data.usuario;
            $scope.curriculum = data.data.curriculo;
            //usuario = $scope.usuario;
            //$location.path("/dashboard");
        }, function error(data){

            if(data.status == 400)
                alert(data.message);
            else
                alert("Não conseguimos consultar seu perfil, tente novamente! :)");

            console.log(data);
        }); 
    }
    
    $scope.enviarCurriculo = function(){
            
        if($scope.usuario.CPF && $scope.usuario.sobrenome && $scope.usuario.genero != "" && $scope.usuario.cor != ""
            && $scope.usuario.telefone && $scope.usuario.rg && $scope.usuario.estadoEmissor && $scope.usuario.dataNascimento ){
            var data = null;

            data = {
                id_usuario: usuario.id_usuario,
                usuario: $scope.usuario,
                curriculum: $scope.curriculum
            }              

            $http({
                method: 'POST',
                url: API + 'curriculo/inserirCurriculo',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(function success(data){
                alert("Curriculo cadastrado com sucesso!");
                //usuario = $scope.usuario;
                $location.path("/dashboard");
            }, function error(data){

                if(data.status == 400)
                    alert(data.message);
                else
                    alert("Não foi possível cadastrar seu currículum, tente novamente!");

                console.log(data);
            }); 
        }

         
    }

});