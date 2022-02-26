var input = document.querySelector("#filtro");

function filtraPacientes() {
    var pacientes = document.querySelectorAll(".paciente");
    var inputContent = this.value;
    var expressao = new RegExp(this.value, 'i');
    
    if (inputContent.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var nomeTD = pacientes[i].querySelector(".info-nome");
            var nome = nomeTD.textContent;
            if(expressao.test(nome)) {
                pacientes[i].classList.remove("inv");
            } else {
                pacientes[i].classList.add("inv");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove("inv");
        }
    }
}

input.addEventListener('input', filtraPacientes);