const form = document.getElementById('form-contatos');

const limpar = document.getElementById('reset');

const contatos = [];

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

limpar.addEventListener('click', function() {
    if (contatos.length >= 1){
        window.location.reload();
    }
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputSobrenome = document.getElementById('sobrenome').value;
    const inputTelefone = document.getElementById('telefone').value;
    const inputEmail = document.getElementById('email').value;

    if (contatos.includes(inputTelefone) || contatos.includes(inputEmail)){
        alert(`Esse telefone ${inputTelefone} já foi inserido na agenda`);
        alert(`Esse email ${inputEmail} já foi inserido na agenda`);
    } 
    else {
        contatos.push(inputTelefone, inputEmail)

        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputSobrenome}</td>`;
        linha += `<td>${inputTelefone}</td>`;
        linha += `<td>${inputEmail}</td>`;
        linha += `</tr>`;
        linhas += linha;

    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

