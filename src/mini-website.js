let lojaInfo = new URLSearchParams(window.location.search).get('loja');

if (lojaInfo != null) {
    localStorage.setItem('lojaAtual', JSON.stringify(lojaInfo));
}

let lojaAtual = JSON.parse(localStorage.getItem('lojaAtual'));

/* Exibe o nome da loja escolhida */

listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
let linkDaLojaNaLista = "?loja=" + lojaAtual;
findIndex = listaVendedores.findIndex(x => x.link === linkDaLojaNaLista);
if (findIndex == -1) {
    window.location = "mini-website-nao-encontrado.html";
}

document.querySelector("#nome_loja").innerText = listaVendedores[findIndex].nome;
document.querySelector("#texto_mini_website").innerText = listaVendedores[findIndex].descricao;
document.querySelector("#imagem_mini_website").src = listaVendedores[findIndex].imagem;
