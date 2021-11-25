idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
let redesSociais = ["facebook", "instagram", "youtube", "twitter", "tiktok"]

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

