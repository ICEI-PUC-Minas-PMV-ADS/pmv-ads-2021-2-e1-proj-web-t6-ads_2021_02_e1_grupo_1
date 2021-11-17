updateListaProdutos();

function detalhesProduto(detalhes) {
    informacoesAdicionarCarrinho('close');
    localStorage.setItem('maisDetalhesAtual', JSON.stringify(detalhes));
    let findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === detalhes)
    document.querySelectorAll(".informacoes_imagem_produto")[0].src = listaVendedores[findIndex].catalogo[findIndexProduto].imagem;
    document.querySelectorAll(".informacoes_imagem_produto")[1].src = listaVendedores[findIndex].catalogo[findIndexProduto].imagem;
    document.querySelectorAll(".informacoes_nome_produto")[0].innerText = listaVendedores[findIndex].catalogo[findIndexProduto].nome;
    document.querySelectorAll(".informacoes_nome_produto")[1].innerText = listaVendedores[findIndex].catalogo[findIndexProduto].nome;
    document.querySelectorAll(".informacoes_preco_produto")[0].innerText = "Preço: R$ " + listaVendedores[findIndex].catalogo[findIndexProduto].preco.replace(".",",");
    document.querySelectorAll(".informacoes_preco_produto")[1].innerText = "Preço: R$ " + listaVendedores[findIndex].catalogo[findIndexProduto].preco.replace(".",",") + "/Unidade";
    document.querySelector("#informacoes_descricao_produto").innerHTML = "<b>Descrição:<br></b>" + listaVendedores[findIndex].catalogo[findIndexProduto].descricao;
    let organizarTextoSabores = listarSabores();
    document.querySelector("#informacoes_sabores_produto").innerHTML = "<b>Sabores:<br></b>" + organizarTextoSabores[0];
    document.querySelector("#selecionar_sabor").innerHTML = organizarTextoSabores[1];
    document.querySelector("#informacoes_outras_produto").innerHTML = "<b>Outras informações:<br></b>" + listaVendedores[findIndex].catalogo[findIndexProduto].outrasInformacoes;
    
    function listarSabores() {
        let sabores = listaVendedores[findIndex].catalogo[findIndexProduto].sabores;
        let textoSabores = "";
        let selectSabores = ``;
        if (sabores != null && sabores != "") {
            for (let i = 0; i < (sabores.length); i++) {
                if (i == (sabores.length - 1)) {
                    textoSabores += sabores[i]+".";
                }
                else {
                    textoSabores += sabores[i]+", "
                }
                selectSabores += `<option value="${sabores[i]}">${sabores[i]}</option>`;
            }
        }
        return [textoSabores, selectSabores];
    }
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
        if (typeof(precoProduto) == "string") {
            precoProduto = produtosMostrados[i].preco.replace(".",",");
        }
        let resultado;

        if (produtosMostrados[0].empty || produtosMostrados[0].nome == null) {
            resultado = `<div><div class="alert-danger" style="padding: 8px; margin-top: 32px; margin-bottom: 320px;"><h4 class="text-center"> Nenhum produto cadastrado </h4></div></div>`
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