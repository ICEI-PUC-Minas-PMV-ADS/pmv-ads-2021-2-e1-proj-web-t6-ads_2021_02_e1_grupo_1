let newEntry = {};
let getListaUsuarios;
let lengthListaUsuarios;
let findIndex;
let formInfo = new URLSearchParams(window.location.search);

formInfo.forEach(function(value,name) {
Object.assign(newEntry, {[name]: value});
});
newEntry.nomeUsuario = newEntry.nome;
newEntry.telefone = "";
newEntry.endereco = "Selecionar endereço";
newEntry.historicoDePedidos = [{},];
newEntry.favoritos = {"vendedores": [{},], "produtos" : [{},],};
getListaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
findIndex = getListaUsuarios.findIndex(x => x.email === newEntry.email);
if (findIndex == -1) {
    if (newEntry.senha === newEntry.confirmaSenha) {
        lengthListaUsuarios = getListaUsuarios.length;  
        getListaUsuarios[lengthListaUsuarios - 1] = newEntry;
        getListaUsuarios.push({});
        localStorage.setItem('listaUsuarios', JSON.stringify(getListaUsuarios));
        alert('Usuário cadastrado com sucesso!')
        idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
        if (idUsuarioLogado.id == -1) {
            window.location = "login.html";
        }
        else {
            window.location = "index.html";
        }
            }
    else {
        alert('A senha digitada em "repita a senha" não bate com a do campo "senha"!')
        window.location = "cadastro.html";
    }
}
else {
    alert(`O e-mail ${newEntry.email} já foi cadastrado anteriormente! Use outro e-mail.`)
    window.location = "cadastro.html";
}
