if (findIndex == -1) {
  window.location = "mini-website-nao-encontrado.html";
}

let finalizarPedido = false;
let precoEntregaNormal = listaVendedores[findIndex].precoEntrega;
let precoEntrega = 0;

updateListaCarrinho();
updateListaProdutosPaginaCarrinho();

function updateListaCarrinho() {
    let listaCarrinho = ``;
    let guardarHistorico = {};
    let guardarHistoricoDetalhes = ``
    let carrinhoVendedorAtual = listaVendedores[findIndex].carrinho;
    let precoTotal = 0;
    document.querySelector("#botao_finalizar_pedido").type = "button";

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
        guardarHistoricoDetalhes += `            
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
                </div>
            </div>
        </div>
    `;
    }
    precoEntrega = parseInt(precoEntrega);
    if (precoEntrega != null && precoEntrega > 0) {
      precoTotal += precoEntrega;
      precoEntrega = precoEntrega.toFixed(2).replace(".",",");
      listaCarrinho += `<div class="h4_sub" id="preco_entrega">Entrega: ${precoEntrega} R$</div>`;
      guardarHistoricoDetalhes += `<div class="h4_text text-right">Entrega: ${precoEntrega} R$</div>`
    }
    
    document.querySelector("#lista_carrinho_upper").innerHTML = listaCarrinho;
    precoTotal = precoTotal.toFixed(2);
    precoTotal = precoTotal.replace(".",",");
    document.querySelector("#lista_carrinho_preco_total").innerHTML = `Total: ${precoTotal} R$`;

    guardarHistorico.detalhes = guardarHistoricoDetalhes;
    guardarHistorico.preco = precoTotal;
    guardarHistorico.repetir = carrinhoVendedorAtual;
    localStorage.setItem('formatoGuardarHistorico', JSON.stringify(guardarHistorico));
}

function updateListaProdutosPaginaCarrinho() {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let catalogo = listaVendedores[findIndex].catalogo;
    let listaProdutosPaginaCarrinho;
    let nomeTipoDePagamento;
    enderecoAtual = JSON.parse(localStorage.getItem('enderecoAtual'));

    if (finalizarPedido) {
      document.querySelector("#botao_finalizar_pedido").type = "button";
    }
    else {
      document.querySelector("#botao_finalizar_pedido").type = "button";
    }

    if (finalizarPedido) {
      
      precoEntrega = precoEntregaNormal;

      listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
      let formasPagamento = listaVendedores[findIndex].formasPagamento;

      let formasPagamentoDisponiveis = `
      <div class="h4_sub">Pagar online</div>
      <div>
      <ul class="list-group list-group-horizontal">
      `;
      
      let pagamentoOnlineDisponivel = false;

      for (let i = 0; i < formasPagamento.online.length; i++) {
        nomeTipoDePagamento = checarNomeDoTipoDePagamento(formasPagamento.online[i]);
        if (formasPagamento.online[i] != null && formasPagamento.online[i] != "") {
          pagamentoOnlineDisponivel = true;
          formasPagamentoDisponiveis += `
            <li class="list-group-item  border-0">
              <input type="radio" id="forma_pagamento_${formasPagamento.online[i]}" name="forma_pagamento" required> <label for="forma_pagamento_${formasPagamento.online[i]}"> ${nomeTipoDePagamento} <label></input>
            </li>
          `;
        }
      }

      formasPagamentoDisponiveis += `
      </ul>
      </div>
      <br>
      `;
      
      if (pagamentoOnlineDisponivel == false) {
        formasPagamentoDisponiveis = `
        <ul class="list-group list-group-horizontal">
        </ul>
        </div>
        `;
        
      }

      let formasPagamentoDisponiveisNaEntrega = `
      <div class="h4_sub">Pagar na entrega</div>
      <div>
      <ul class="list-group list-group-horizontal">
      `;
      
      pagamentoNaEntregaDisponivel = false;
      for (let i = 0; i < formasPagamento.naEntrega.length; i++) {
        nomeTipoDePagamento = checarNomeDoTipoDePagamento(formasPagamento.naEntrega[i]);
        if (formasPagamento.naEntrega[i] != null && formasPagamento.naEntrega[i] != "") {
        formasPagamentoDisponiveisNaEntrega += `
            <li class="list-group-item  border-0">
              <input type="radio" id="forma_pagamento_entrega${formasPagamento.naEntrega[i]}" name="forma_pagamento" required> <label for="forma_pagamento_entrega${formasPagamento.naEntrega[i]}"> ${nomeTipoDePagamento} <label></input>
            </li>
          `;
          pagamentoNaEntregaDisponivel = true;
        }
      }

      formasPagamentoDisponiveisNaEntrega += `
      </ul>
      </div>
      <br>
      `;

      if (pagamentoNaEntregaDisponivel == false) {
        formasPagamentoDisponiveisNaEntrega = `
        <div>
        <ul class="list-group list-group-horizontal">
        </ul>
        </div>
        `;
        
      }

      let formasDeEntrega = `
      <ul class="list-group">
      `;

      if(listaVendedores[findIndex].precoEntrega != "") { 
      formasDeEntrega += `
      <li class="list-group-item  border-0">
      <input type="radio" id="entregar" name="forma_de_entrega" checked onclick="selecionarEntrega()" required> <label for="entregar"> Entrega para: 
      <i><a class="black-link" href=# data-toggle="modal" data-target="#selecionar_endereco">- ${enderecoAtual} -</i></a> 
      Custo R$ ${precoEntregaNormal} <label></input>
      </li>
      `;
      }

      if(listaVendedores[findIndex].retiradaNaLoja) { 
        if(listaVendedores[findIndex].precoEntrega != "") { 
          formasDeEntrega += `
          <li class="list-group-item  border-0">
          <input type="radio" id="retirar" name="forma_de_entrega" onclick="selecionarEntrega()" required> <label for="retirar"> Retirar na loja <label></input>
          </li>
          `;
          }
          else {
          formasDeEntrega += `
          <li class="list-group-item  border-0">
          <input type="radio" id="retirar" name="forma_de_entrega" onclick="selecionarEntrega()" required checked> <label for="retirar"> Retirar na loja <label></input>
          </li>
          `;
          }
        }

      formasDeEntrega += `
      </ul>
      `;

      listaProdutosPaginaCarrinho = `
      <button class="btn btn-transparent" type="button" id="botao_voltar" onclick="voltarPedido()"><i class="fas fa-angle-left"></i> Voltar</button>
      <div class="h4 text-center">Dados do pagamento</div>
      <div id="carrinho_pagamento">
        <div class="h4">Formas de pagamento disponíveis</div>
        <br>
        <div>
        ${formasPagamentoDisponiveis}

        ${formasPagamentoDisponiveisNaEntrega}
        <div class="h4_sub">Entrega</div>
        <div>
        ${formasDeEntrega}
        </div>
      </div>
      `;
    }
    else {
      listaProdutosPaginaCarrinho = `<div class="h4 text-center">Adicionar produtos</div>`;
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
                <button class="btn btn-secondary carrinho_card_botao_favoritos" type="button" onclick="favoritarProduto(${i})">Favoritar produto</button>
                <button class="btn btn-primary informacoes_botao_adicionar_produto" type="button" onclick='adicionarCarrinho(${i}, true)'>Adicionar ao carrinho</button>
              </form>
            </div>
          </div>
        `;
      }
    }
    
    document.querySelector("#carrinho_adicionar_produtos").innerHTML = listaProdutosPaginaCarrinho;
    updateListaCarrinho();

    function checarNomeDoTipoDePagamento(tipoPagamento) {
      if (tipoPagamento == "cartao") {
        return "Cartão";
      }
      else if (tipoPagamento == "pix") {
        return "Pix";
      }
      else if (tipoPagamento == "dinheiro") {
        return "Dinheiro";
      }
    }
}

function removerCarrinho(removerCarrinhoIndex = 0) {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores[findIndex].carrinho.splice(removerCarrinhoIndex, 1);
    updateLocalStorage();
    updateListaCarrinho();
    updateCarrinho();
}

function finalizarPedidoCarrinho() {
  let usuario = JSON.parse(localStorage.getItem('idUsuarioLogado'))
  listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
  let carrinho = listaVendedores[findIndex].carrinho;
  let realizarEntrega = true;
  if (listaVendedores[findIndex].retiradaNaLoja == false && listaVendedores[findIndex].precoEntrega == "") {
    window.alert("Entrega indisponível no momento!");
    realizarEntrega = false;
  }
  let formasPagamento = listaVendedores[findIndex].formasPagamento;
  if (formasPagamento.online == "" && formasPagamento.naEntrega == "" && finalizarPedido) {
    window.alert("Formas de pagamento indisponíveis no momento!");
    realizarEntrega = false;
  }
  if (realizarEntrega) {
    if (finalizarPedido && carrinho.length > 1 && usuario.id != -1) {
      document.querySelector("#botao_finalizar_pedido").type = "submit";
    }
    else {
      if (usuario.id != -1 && carrinho.length > 1) {
        finalizarPedido = true;
      }
      else if (carrinho.length == 1) {
        window.alert("Carrinho vazio!")
      }
      else {
        window.alert("Faça login para finalizar o pedido!")
      }
      finalizarPedidoReverseWrap()
      updateListaProdutosPaginaCarrinho();
    }
  }
}

function voltarPedido() {
  finalizarPedido = false;
  finalizarPedidoReverseWrap()
  selecionarEntrega();
  updateListaProdutosPaginaCarrinho();
}

function selecionarEntrega () {
  if (document.querySelector("#entregar") != null) {
    if (document.querySelector("#entregar").checked && finalizarPedido) {
      precoEntrega = precoEntregaNormal;
    }
    else {
      precoEntrega = 0;
    }
  }
  else {
    precoEntrega = 0;
  }
  updateListaCarrinho();
}

function pedidoSubmetido() {
  listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
  let carrinhoVendedorAtual = listaVendedores[findIndex].carrinho;
  carrinhoVendedorAtual = [{}];
  listaVendedores[findIndex].carrinho = carrinhoVendedorAtual;
  guardarHistorico()
  function guardarHistorico() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let guardarHistorico = JSON.parse(localStorage.getItem('formatoGuardarHistorico'));

    let lojaAtual = listaVendedores[findIndex];
    let numeroPedido = listaUsuarios[idUsuarioLogado.id].historicoDePedidos.length;
    /* Informações gerais */
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].numeroDoPedido = numeroPedido;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].nomeVendedor = lojaAtual.nome;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].valorDaCompra = guardarHistorico.preco;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].detalhes = guardarHistorico.detalhes;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].repetir = guardarHistorico.repetir;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].idLoja = JSON.parse(localStorage.getItem('lojaAtual'));;
    /* > Data da compra */
    let dataHoje = new Date();
    let dd = String(dataHoje.getDate()).padStart(2, '0');
    let mm = String(dataHoje.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = dataHoje.getFullYear();
    dataHoje = dd + '/' + mm + '/' + yyyy;
    listaUsuarios[idUsuarioLogado.id].historicoDePedidos[numeroPedido - 1].dataCompra = dataHoje;
    /* ----------------- */

    listaUsuarios[idUsuarioLogado.id].historicoDePedidos.push({});
  }
  updateLocalStorage();
  window.alert("Pedido submetido!");
}

function finalizarPedidoReverseWrap() {
  if (finalizarPedido) {
    document.querySelector("#mini_website_carrinho").style = "flex-wrap: wrap";
  }
  else {
  document.querySelector("#mini_website_carrinho").style = "flex-wrap: reverse-wrap";
  }
}