let lojaInfo = new URLSearchParams(window.location.search).get('loja');

if (lojaInfo != null) {
    localStorage.setItem('lojaAtual', JSON.stringify(lojaInfo));
}

let lojaAtual = JSON.parse(localStorage.getItem('lojaAtual'));

/* Exibe o nome da loja escolhida */

listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));

findIndex = procurarIdLoja(lojaAtual);

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


function informacoesAdicionarCarrinho(open_close) {
    if (open_close === "open") {
        document.querySelector("#informacoes_adicionar_carrinho").style.display = "block";

        /* Resetar valores do formulário */
        let detalhes = JSON.parse(localStorage.getItem('maisDetalhesAtual'));
        let findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === detalhes);
        document.querySelector("#selecionar_sabor").value = listaVendedores[findIndex].catalogo[findIndexProduto].sabores[0];
        document.querySelector("#selecionar_quantidade").value = 1;
        document.querySelector("#comentario_pedido").value = "";
        document.querySelector("#container_informacoes_botao_adicionar_produto").innerHTML = `<button class="btn btn-primary" type="button" id="informacoes_botao_adicionar_produto" onclick='adicionarCarrinho(${findIndexProduto})'>Adicionar ao carrinho</button>`;
        /* ---------------------------- */
    }
    else if (open_close === "close") {
        document.querySelector("#informacoes_adicionar_carrinho").style.display = "none";
    }
}

function adicionarCarrinho (indexProduto, paginaCarrinho = false) {
    let entryCarrinho = {};
    let findIndexProduto = indexProduto;
    let indexValue = "";
    if (paginaCarrinho == true) {
        indexValue = indexProduto;
    }
    entryCarrinho.imagem = listaVendedores[findIndex].catalogo[findIndexProduto].imagem;
    entryCarrinho.nome = listaVendedores[findIndex].catalogo[findIndexProduto].nome;
    entryCarrinho.sabor = document.querySelector(`#selecionar_sabor${indexValue}`).value;
    entryCarrinho.quantidade = document.querySelector(`#selecionar_quantidade${indexValue}`).value;
    entryCarrinho.comentarios = document.querySelector(`#comentario_pedido${indexValue}`).value;
    entryCarrinho.preco = parseFloat(listaVendedores[findIndex].catalogo[findIndexProduto].preco) * parseInt(entryCarrinho.quantidade);
    entryCarrinho.id = entryCarrinho.nome + entryCarrinho.sabor + entryCarrinho.comentarios;
    
    /* Checa se o mesmo produto já foi pedido e soma as quantidades caso verifique que sim */

    let checkRepetition = listaVendedores[findIndex].carrinho.findIndex(x => x.id === entryCarrinho.id);

    if (checkRepetition == -1) { 
        listaVendedores[findIndex].carrinho[listaVendedores[findIndex].carrinho.length - 1] = entryCarrinho;
        listaVendedores[findIndex].carrinho.push({});
    } 
    else {
        entryCarrinho.quantidade = parseInt(entryCarrinho.quantidade) + parseInt(listaVendedores[findIndex].carrinho[checkRepetition].quantidade);
        entryCarrinho.preco = parseFloat(listaVendedores[findIndex].catalogo[findIndexProduto].preco) * parseInt(entryCarrinho.quantidade);
        listaVendedores[findIndex].carrinho[checkRepetition] = entryCarrinho;
    }

    updateLocalStorage();
    updateCarrinho();   
    if (paginaCarrinho == true) {
        updateListaCarrinho()
        updateListaProdutosPaginaCarrinho()
    }
    else {
    informacoesAdicionarCarrinho("close"); 
    window.alert("Pedido adicionado ao carrinho com sucesso!");
    }
}

