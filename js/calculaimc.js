var pacientesTr = document.querySelectorAll(".paciente");
var nomeTD = document.querySelectorAll(".info-nome");
var pesoTD = document.querySelectorAll(".info-peso");
var alturaTD = document.querySelectorAll(".info-altura");
var imcTD = document.querySelectorAll(".info-imc");


function calculaIMC(peso, altura) {
    var calculo = peso / (altura * altura);
    return calculo.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

for (var i = 0; i < pacientesTr.length; i++) {
    var imc = calculaIMC(pesoTD[i].textContent, alturaTD[i].textContent);
    var testealtura = validaAltura(alturaTD[i].textContent);
    var testepeso = validaPeso(pesoTD[i].textContent);

    if (testepeso && testealtura) {
        imcTD[i].textContent = imc;
    } else if (!testepeso && !testealtura) {
        imcTD[i].textContent = "PESO E ALTURA INVÁLIDOS!"
        pacientesTr[i].classList.add("mensagem-erro");
    } else if (!testepeso) {
        imcTD[i].textContent = "PESO INVÁLIDO!"
        pacientesTr[i].classList.add("mensagem-erro");
    } else if (!testealtura) {
        imcTD[i].textContent = "ALTURA INVÁLIDA!"
        pacientesTr[i].classList.add("mensagem-erro");
    }

}

