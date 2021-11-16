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

updateCarrinho();

function updateCarrinho () {
    document.querySelector("#numero_itens_carrinho").innerText = listaVendedores[findIndex].carrinho.length -1;

    if (listaVendedores[findIndex].carrinho.length -1 > 0) {
        document.querySelector("#carrinho_contador").style.display = "block";
    }
    else {
        document.querySelector("#carrinho_contador").style.display = "none";
    }
}