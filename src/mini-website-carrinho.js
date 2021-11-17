updateListaCarrinho();
updateListaProdutosPaginaCarrinho();

function updateListaCarrinho() {
    let listaCarrinho = ``;
    let carrinhoVendedorAtual = listaVendedores[findIndex].carrinho;
    let precoTotal = 0;
    for (let i = 0; i < (carrinhoVendedorAtual.length - 1); i++) {
        let imagemListaCarrinho = carrinhoVendedorAtual[i].imagem;
        let nomeListaCarrinho = carrinhoVendedorAtual[i].nome;
        let saborListaCarrinho = carrinhoVendedorAtual[i].sabor;
        let quantidadeListaCarrinho = carrinhoVendedorAtual[i].quantidade;
        let comentarioListaCarrinho = carrinhoVendedorAtual[i].comentarios;
        let precoListaCarrinho = carrinhoVendedorAtual[i].preco;
        precoTotal += precoListaCarrinho;
        precoListaCarrinho = precoListaCarrinho.toFixed(2);
        precoListaCarrinho = precoListaCarrinho.replace(".",",");

        listaCarrinho += `            
            <div class="produto_carrinho">
                <img src=${imagemListaCarrinho}> 
                <div id="produto_carrinho_centro">
                    <div>
                        <span id="produto_carrinho_nome">${nomeListaCarrinho}</span>
                    <div>
                        <span id="produto_carrinho_sabor"><b>Sabor:</b> ${saborListaCarrinho}</span>
                        <span id="produto_carrinho_quantidade"><b>Quantidade:</b> ${quantidadeListaCarrinho}</span>
                    </div>
                    <span id="produto_carrinho_comentarios"><b>Comentários:</b> ${comentarioListaCarrinho} </span>
                    <span id="produto_carrinho_preco"> ${precoListaCarrinho} R$ </span> 
                    <button class="btn btn-transparent" type="button" onclick="removerCarrinho(${i})">Cancelar</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector("#lista_carrinho_upper").innerHTML = listaCarrinho;
    precoTotal = precoTotal.toFixed(2);
    precoTotal = precoTotal.replace(".",",");
    document.querySelector("#lista_carrinho_preco_total").innerHTML = `Total: ${precoTotal} R$`;
}

function updateListaProdutosPaginaCarrinho() {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let catalogo = listaVendedores[findIndex].catalogo;
    let listaProdutosPaginaCarrinho = `<div class="h4 text-center">Adicionar produtos</div>`;
    
    for (let i = 0; i < catalogo.length; i++) {
        let imagemProduto = catalogo[i].imagem;
        let nomeProduto = catalogo[i].nome;
        let precoProduto = "Preço: R$ " + catalogo[i].preco.replace(".",",") + "/Unidade";
        let sabores = catalogo[i].sabores;
        let selecSabores = ``;
        for (let j = 0; j < sabores.length; j++) {
            selecSabores += `<option value="${sabores[j]}">${sabores[j]}</option>`;
        }
        listaProdutosPaginaCarrinho +=
        `
        <div id="carrinho_card_adicionar_produto">
          <div id="carrinho_adicionar_imagem">
            <img class="informacoes_imagem_produto" src="${imagemProduto}">
          </div>
          <div id="carrinho_adicionar_info">
            <div class="informacoes_nome_produto h4">${nomeProduto}</div>
            <p class="informacoes_preco_produto">
              ${precoProduto}
            </p>
            <form>
              <div class="text-left">
                <label for="selecionar_sabor${i}">
                <p>Sabor:</p>
                </label>
                <select name="selecionar_sabor" class="selecionar_sabor" id="selecionar_sabor${i}">
                ${selecSabores}
                </select>
                <span id="carrinho_card_adicionar_produto_quantidade">
                    <label for="selecionar_quantidade${i}">
                    <p>Quantidade:</p>
                    </label>
                    <input type="number" class="selecionar_quantidade" id="selecionar_quantidade${i}" value="1" min="1">
                </span>
                <div></div>
                <label for="comentario_pedido${i}" class="mr-left">
                  <p>Comentários:</p>
                </label>
                <div>
                  <textarea class="mr-right" id="comentario_pedido${i}" name="comentarios" rows="2"
                    cols="46 "></textarea>
                </div>

              </div>
              <button class="btn btn-secondary" type="button" id="carrinho_card_botao_favoritos">Favoritar produto</button>
              <button class="btn btn-primary" type="button" id="informacoes_botao_adicionar_produto" onclick='adicionarCarrinho(${i}, true)'>Adicionar ao carrinho</button>
            </form>
          </div>
        </div>
    `;
    }
    document.querySelector("#carrinho_adicionar_produtos").innerHTML = listaProdutosPaginaCarrinho;
}

function removerCarrinho(removerCarrinhoIndex = 0) {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores[findIndex].carrinho.splice(removerCarrinhoIndex, 1);
    updateLocalStorage();
    updateListaCarrinho();
    updateCarrinho();
}


