idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
if (idUsuarioLogado.id != -1) {
    alert("Login efetuado com sucesso!");
    window.location = "index.html";
}

function login() { 
    let getListaUsuarios;
    let findIndex;
    let checkEmail;
    let checkSenha;
    getListaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    checkEmail = document.querySelector("#email-login").value;
    findIndex = getListaUsuarios.findIndex(x => x.email === checkEmail);
    if (findIndex == -1) {
    alert(`Não há nenhum usuário cadastrado com o E-mail ${checkEmail}! Crie uma conta.`);
    }
    else {
        checkSenha = document.querySelector("#senha-login").value;
        if (checkSenha === getListaUsuarios[findIndex].senha) {
            idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
            idUsuarioLogado.id = findIndex;
            idUsuarioLogado.nome = getListaUsuarios[findIndex].nome;
            idUsuarioLogado.tipo = getListaUsuarios[findIndex].clienteVendedor;
            localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));

            enderecoAtual = JSON.parse(localStorage.getItem('enderecoAtual'));
            listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
            
            enderecoAtual = listaUsuarios[findIndex].endereco;
            updateLocalStorage();
        } 
        else {
                alert("Senha incorreta!")
        }
    }
}
