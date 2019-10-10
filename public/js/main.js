angular.module('bayer-web', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            controller: "HomeController"
        });

        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: "LoginController"
        });


        $routeProvider.when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: "SignupController"
        });

        $routeProvider.when('/curriculum', {
            templateUrl: 'partials/curriculum.html',
            controller: 'CurriculumController'
        });

        $routeProvider.when('/dashboardCandidato', {
            templateUrl: 'partials/dashboard-candidato.html',
            controller: 'DashboardCandidatoController'
        });

        $routeProvider.when('/cadastroDeVaga', {
            templateUrl: 'partials/cadastro-vaga.html',
            controller: 'CadastroVagaController'
        });

        $routeProvider.when('/dashboardRecrutador', {
            templateUrl: 'partials/dashboard-recrutador.html',
            controller: 'DashboardRecrutadorController'
        })


        $routeProvider.otherwise({
            redirectTo: "/"
        })

    });

let API = 'http://localhost:54297/api/bayer/';
var usuario = null;
var recrutador = null;
var cssFiles = [];
var id_processo_seletivo = null;


function myFunction() {
    var x = document.querySelector(".myLinks");
    if (x.classList.contains("active")) {
        x.classList.remove("active");
    } else {
        x.classList.add("active");
    }
}

function carregarSetas() {
    arrow = document.querySelectorAll('.down-arrow')

    arrow.forEach(function (arrow) {

        arrow.onclick = function () {
            ul = arrow.parentNode
            if (ul.nextElementSibling.classList.contains('hidden')) {
                ul.nextElementSibling.classList.remove('hidden');
            } else ul.nextElementSibling.classList.add('hidden');
        }

    });
}

/******************************************************************************************************** */
//MASCARAS DE CPF, TELEFONE , CEP E DATA DE NASCIMENTO
//******************************************************************************************************** */

function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}
function fMascEx() {
    obj.value = masc(obj.value);
}
function mTel(tel) {
    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d)/, "($1");
    tel = tel.replace(/(.{3})(\d)/, "$1)$2");
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
}
function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}
function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
    return cep
}
function mNum(num) {
    num = num.replace(/\D/g, "");
    return num;
}

function mData(val) {
    var pass = val.value;
    var expr = /[0123456789]/;

    for (i = 0; i < pass.length; i++) {
        // charAt -> retorna o caractere posicionado no índice especificado
        var lchar = val.value.charAt(i);
        var nchar = val.value.charAt(i + 1);

        if (i == 0) {
            // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
            // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
            // instStr.search(expReg);
            if ((lchar.search(expr) != 0) || (lchar > 3)) {
                val.value = "";
            }

        } else if (i == 1) {

            if (lchar.search(expr) != 0) {
                // substring(indice1,indice2)
                // indice1, indice2 -> será usado para delimitar a string
                var tst1 = val.value.substring(0, (i));
                val.value = tst1;
                continue;
            }

            if ((nchar != '/') && (nchar != '')) {
                var tst1 = val.value.substring(0, (i) + 1);

                if (nchar.search(expr) != 0)
                    var tst2 = val.value.substring(i + 2, pass.length);
                else
                    var tst2 = val.value.substring(i + 1, pass.length);

                val.value = tst1 + '/' + tst2;
            }

        } else if (i == 4) {

            if (lchar.search(expr) != 0) {
                var tst1 = val.value.substring(0, (i));
                val.value = tst1;
                continue;
            }

            if ((nchar != '/') && (nchar != '')) {
                var tst1 = val.value.substring(0, (i) + 1);

                if (nchar.search(expr) != 0)
                    var tst2 = val.value.substring(i + 2, pass.length);
                else
                    var tst2 = val.value.substring(i + 1, pass.length);

                val.value = tst1 + '/' + tst2;
            }
        }

        if (i >= 6) {
            if (lchar.search(expr) != 0) {
                var tst1 = val.value.substring(0, (i));
                val.value = tst1;
            }
        }
    }

    if (pass.length > 10)
        val.value = val.value.substring(0, 10);
    return true;
}


//******************************************************************************************************** */
//FIM DAS MASCARAS DE CPF, TELEFONE , CEP E DATA DE NASCIMENTO
//******************************************************************************************************** */


