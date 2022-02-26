var button = document.querySelector("#adicionarPaciente");
var form = document.querySelector("#novoPaciente");
var tabela = document.querySelector("#tabela-pacientes");
var ulErros = document.querySelector("#mensagens-erro");

function adicionaPaciente(evento) {
    evento.preventDefault();
    ulErros.innerHTML = "";

    var paciente = {
        nome: form.novoNome.value,
        peso: form.novoPeso.value,
        altura: form.novaAltura.value,
        gordura: form.novaGordura.value,
        imc: calculaIMC(form.novoPeso.value, form.novaAltura.value)
    }

    var erros = validaForm(paciente);

    if (erros.length > 0) {
        erros.forEach(function (erro) {
            criaLi(erro);
        })
        return;
    }
    adicionaNaTabela(paciente);
    form.reset();
}

function adicionaNaTabela(paciente) {
    var novaTr = criaTr();
    criaTd(paciente.nome, "info-nome", novaTr);
    criaTd(paciente.peso, "info-peso", novaTr);
    criaTd(paciente.altura, "info-altura", novaTr);
    criaTd(paciente.gordura, "info-gordura", novaTr);
    criaTd(paciente.imc, "info-imc", novaTr);
}

function criaTr() {
    var newTr = document.createElement("tr");
    newTr.classList.add("paciente");
    tabela.appendChild(newTr);
    return newTr;
}

function criaTd(conteudo, classe, novaTr) {
    var newTd = document.createElement("td");
    newTd.textContent = conteudo;
    newTd.classList.add(classe);
    novaTr.appendChild(newTd);
    return newTd;
}

function validaForm(paciente) {
    var erros = [];
    if (!validaPeso(paciente.peso)) {
        erros.push("*Verifique o campo PESO.");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("*Verifique o campo ALTURA.");
    }
    if (paciente.altura.length == 0 || paciente.peso.length == 0 || paciente.nome == 0 || paciente.gordura == 0) {
        erros.push("*Verifique se existe algum CAMPO EM BRANCO.");
    }

    return erros;
}

function criaLi(msg) {
    var newLi = document.createElement("li");
    ulErros.appendChild(newLi);
    newLi.classList.add("mensagens-erro");
    newLi.textContent = msg;
}

button.addEventListener('click', adicionaPaciente);