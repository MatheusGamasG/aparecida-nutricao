var botao = document.querySelector("#buscador");

function buscarPacientes() {
    fetch('https://api-pacientes.herokuapp.com/pacientes')
    .then((responseFlow) => {
        console.log('Buscando pacientes...');
        return responseFlow.json();
    })
    .then((data) => {
        data.forEach(paciente => {
            adicionaNaTabela(paciente);
        })
    })
}


// function buscarPacientes() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
//     console.log("Buscando pacientes...");
//     xhr.addEventListener('load', function() {
//         var resposta = xhr.responseText;
//         var buscaPacientes = JSON.parse(resposta);
//         buscaPacientes.forEach(function (paciente) {
//             adicionaNaTabela(paciente);
//         })
//     });    
//     xhr.send();
// }

botao.addEventListener('click', buscarPacientes);