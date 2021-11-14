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

updateListaProdutos();

function detalhesProduto(detalhes) {
    localStorage.setItem('maisDetalhesAtual', JSON.stringify(detalhes));
    let findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === detalhes)
    document.querySelector("#informacoes_imagem_produto").src = listaVendedores[findIndex].catalogo[findIndexProduto].imagem;
    document.querySelector("#informacoes_nome_produto").innerText = listaVendedores[findIndex].catalogo[findIndexProduto].nome;
    document.querySelector("#informacoes_preco_produto").innerText = "Preço: R$ " + listaVendedores[findIndex].catalogo[findIndexProduto].preco;
    document.querySelector("#informacoes_descricao_produto").innerHTML = "<b>Descrição:<br></b>" + listaVendedores[findIndex].catalogo[findIndexProduto].descricao;
    let organizarTextoSabores = listarSabores();
    document.querySelector("#informacoes_sabores_produto").innerHTML = "<b>Sabores:<br></b>" + organizarTextoSabores;
    document.querySelector("#informacoes_outras_produto").innerHTML = "<b>Outras informações:<br></b>" + listaVendedores[findIndex].catalogo[findIndexProduto].outrasInformacoes;
    
    function listarSabores() {
        let sabores = listaVendedores[findIndex].catalogo[findIndexProduto].sabores;
        let textoSabores = "";
        if (sabores != null && sabores != "") {
            for (let i = 0; i < (sabores.length); i++) {
                if (i == (sabores.length - 1)) {
                    textoSabores += sabores[i]+".";
                }
                else {
                    textoSabores += sabores[i]+", "
                }
            }
        }
        return textoSabores;
    }
}

function informacoesAdicionarCarrinho() {
    document.querySelector("#informacoes_adicionar_carrinho").innerHTML = 
}

/* Exibe os produtos disponiveis no catalogo */
function updateListaProdutos() { 
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
        let descricaoProduto = produtosMostrados[i].descricaoResumo;
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
                <button class="btn btn-primary" type="button" onclick="detalhesProduto('${nomeProduto}')" data-toggle="modal" data-target="#mais_detalhes"> Mais detalhes</button>
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
}