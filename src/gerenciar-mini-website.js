idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
if (idUsuarioLogado.id != -1) {
    lojaAtual = listaUsuarios[idUsuarioLogado.id].nomeLoja;
    if (lojaAtual != null && lojaAtual !="") {
        lojaAtual = lojaAtual.toLowerCase().replace(/ /g,"-");
        findIndex = procurarIdLoja(lojaAtual);
    }
    else {
        findIndex = -1;
    }
}
else {
    findIndex = -1;
}

if (findIndex == -1) {
    window.location = "mini-website-nao-encontrado.html"   
}

document.querySelector("#nome_loja").innerText = listaVendedores[findIndex].nome;
document.querySelector("#texto_gerenciar_mini_website").value = listaVendedores[findIndex].descricao;
document.querySelector("#texto_gerenciar_mini_website_resumo").value = listaVendedores[findIndex].descricaoResumo;
document.querySelector("#imagem_mini_website").src = listaVendedores[findIndex].imagem;

function mudarDescricao() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let novaDescricao = document.querySelector("#texto_gerenciar_mini_website").value;
    listaVendedores[findIndex].descricao = novaDescricao;
    updateLocalStorage();
    window.alert("Descrição da loja alterada!");
}

function mudarDescricaoResumo() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let novaDescricao = document.querySelector("#texto_gerenciar_mini_website_resumo").value;
    listaVendedores[findIndex].descricaoResumo = novaDescricao;
    updateLocalStorage();
    window.alert("Descrição (resumo) da loja alterada!");
}

function mudarImagemLoja() {
    let imagemNova = document.querySelector("#mudar_imagem_loja").files;
    const reader = new FileReader();
    reader.readAsDataURL(imagemNova[0]);
    reader.addEventListener("load", ()=> {
        idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
        listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
        listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
        let novaImagem = reader.result;
        listaVendedores[findIndex].imagem = novaImagem;
        document.querySelector("#imagem_mini_website").src = novaImagem;
        updateLocalStorage();
        window.alert("Imagem da loja alterada!");        
    });
}