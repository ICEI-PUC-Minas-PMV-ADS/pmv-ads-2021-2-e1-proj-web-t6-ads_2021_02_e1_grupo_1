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

function detalhesProduto(detalhes) {
    window.alert(detalhes);
}

/* Exibe os produtos disponiveis no catalogo */

let mostrarProdutos = document.querySelector("#mini_website_produtos");
let catalogoProdutos = listaVendedores[findIndex].catalogo;
let produtosMostrados = [{"empty" : true},];
let listaProdutos;
if (catalogoProdutos) {
    for (let i = 0; i < (catalogoProdutos.length); i++) {
        produtosMostrados[i] = catalogoProdutos[i];
        produtosMostrados.push({});
    }
}
else {
    produtosMostrados.push({});
}


for (let i = 0; i < (produtosMostrados.length - 1); i++) {
    let imagemProduto = produtosMostrados[i].imagem;
    let nomeProduto = produtosMostrados[i].nome;
    let descricaoProduto = produtosMostrados[i].descricao;
    let precoProduto = produtosMostrados[i].preco;
    let resultado;

    if (produtosMostrados[0].empty) {
        resultado = `<div class="alert-danger" style="padding: 8px; margin-top: 32px; margin-bottom: 320px;"><h4 class="text-center"> Nenhum produto cadastrado </h4></div>`
    }
    else {
        resultado = `
            <div class="card_produto">
            <img src="${imagemProduto}">
            <div class="card_produto_descricao">
            <h4 class="text-center">${nomeProduto}</h4>
            <p>${descricaoProduto}</p>
            </div>
            <div class="card_produto_preco">
            <b>R$ ${precoProduto}</b>
            </div>
            <div class="card_produto_detalhes">
            <button class="btn btn-primary" type="button" onclick="detalhesProduto('${nomeProduto}')"> Mais detalhes</button>
            </div>
            </div>
        `;
    }
    if (i == 0) { 
        listaProdutos = resultado;
    } 
    else {
        listaProdutos += resultado;
    }
}

mostrarProdutos.innerHTML = listaProdutos;