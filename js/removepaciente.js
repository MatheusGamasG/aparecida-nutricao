var tabela = document.querySelector("#tabela-pacientes");

function removePaciente(evento) {
    evento.target.parentNode.classList.add("fade");
    setTimeout(function () {
        evento.target.parentNode.remove();
    }, 500);
}

tabela.addEventListener('dblclick', removePaciente);