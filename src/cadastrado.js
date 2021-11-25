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
newEntry.cartoes = [];
newEntry.favoritos = {"vendedores": [{},], "produtos" : [{},],};
getListaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
findIndex = getListaUsuarios.findIndex(x => x.email === newEntry.email);
if (findIndex == -1) {
    if (newEntry.senha === newEntry.confirmaSenha) {
        let findIndexLoja;
        let finalizarCadastro = true;
        if (newEntry.clienteVendedor == "vendedor") {
            listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
            findIndexLoja = listaVendedores.findIndex(x => x.nome === newEntry.nomeLoja);
            if (findIndexLoja == -1) {
                adicionarNovaLoja(newEntry.nomeLoja);
            }
            else {
                finalizarCadastro = false;
                window.alert("Nome da loja já cadastrado por outro usuário!");
            }
        }
        if (finalizarCadastro) {
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
            window.location = "cadastro.html";
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

function adicionarNovaLoja(nomeDaLoja) {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let newVendedor = {
        "numero_lista" : 0,
        "nome" : "",
        "imagem" : "imagens/loja_placeholder.jpg",
        "descricaoResumo" : "Inserir descrição resumida",
        "descricao" : "Inserir descrição completa",
        "avaliacao" : "1.0",    /* Porcentagem de 0 até 1 */
        "link" : "",
        "videoApresentacao": "",
        "catalogo" : [],
        "carrinho" : [
            {},
        ],
        "precoEntrega" : "",
        "retiradaNaLoja" : true,
        "formasPagamento" : {
            "online" : [],
            "naEntrega" : [],
        },
        "redesSociais" : {
            "facebook" : "",
            "instagram": "",
            "twitter" : "",
            "tiktok" : "",
            "youtube" : "",
        },
    }
    newVendedor.nome = nomeDaLoja;
    newVendedor.numero_lista = listaVendedores.length + 1;
    let idLoja = nomeDaLoja.toLowerCase().replace(/ /g,"-");
    newVendedor.link = "?loja=" + idLoja;
    listaVendedores.push(newVendedor,);
    localStorage.setItem('listaVendedores', JSON.stringify(listaVendedores));
}