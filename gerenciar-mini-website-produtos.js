idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));

let produtoAtual;

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

updateListaProdutos();

function detalhesProduto(detalhes, adicionar = false) {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    if (adicionar == true) {
        let novoProduto = { 
            "imagem": "imagens/produtos/produto_placeholder.jpg",
            "descricaoResumo": "Inserir descrição resumida",
            "descricao":"Inserir descrição",
            "sabores":[],
            "outrasInformacoes":"", 
            "preco": "0.00",
        }
        let novoNome = "";
        let nomeJaUsado = true;
        let nomeAdicionarIndice = 1;
        while (nomeJaUsado) {
            novoNome = "Novo produto " + nomeAdicionarIndice;
            let checarNome = listaVendedores[findIndex].catalogo.findIndex(x => x.nome == novoNome);
            if (checarNome == -1) {
                nomeJaUsado = false;
            }
            else {
                nomeAdicionarIndice++;
            }
        }
        novoProduto.nome = novoNome; 
        listaVendedores[findIndex].catalogo.push(novoProduto);
        updateLocalStorage();
        updateListaProdutos();
        detalhes = novoNome;
    }
    informacoesAdicionarCarrinho('close');
    localStorage.setItem('maisDetalhesAtual', JSON.stringify(detalhes));
    let findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === detalhes)
    document.querySelectorAll(".informacoes_imagem_produto")[0].src = listaVendedores[findIndex].catalogo[findIndexProduto].imagem;
    document.querySelector("#informacoes_nome_produto").value = listaVendedores[findIndex].catalogo[findIndexProduto].nome;
    let precoReaisCentavos = listaVendedores[findIndex].catalogo[findIndexProduto].preco;
    let precoReais = parseInt(precoReaisCentavos);
    let precoCentavos = precoReaisCentavos.substr(-2,2);
    document.querySelector("#informacoes_preco_produto_reais").value = precoReais;
    document.querySelector("#informacoes_preco_produto_centavos").value = precoCentavos;
    document.querySelector("#informacoes_descricao_produto").value = listaVendedores[findIndex].catalogo[findIndexProduto].descricao;
    document.querySelector("#informacoes_descricao_produto_resumo").value = listaVendedores[findIndex].catalogo[findIndexProduto].descricaoResumo;
    let organizarTextoSabores = listarSabores();
    document.querySelector("#informacoes_sabores_produto").innerHTML = organizarTextoSabores;
    document.querySelector("#informacoes_outras_produto").value = listaVendedores[findIndex].catalogo[findIndexProduto].outrasInformacoes;
}

function listarSabores() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    document.querySelector("#informacoes_sabores_produto_input").value = "";
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let sabores = listaVendedores[findIndex].catalogo[findIndexProduto].sabores;
    let textoSabores = ``;
    if (sabores != null && sabores != "") {
        for (let i = 0; i < (sabores.length); i++) {
            textoSabores += 
            `
            <span class = "gerenciar_sabores_lista no_word_wrap">
                ${sabores[i]}
                <button class="btn btn-transparent" type="button" onclick="removerSabor('${i}')"><i class="far fa-times-circle"></i></button>
            </span>
            `;
        }
    }
    return textoSabores;
}

/* Exibe os produtos disponiveis no catalogo */
function updateListaProdutos() { 
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let mostrarProdutos = document.querySelector("#mini_website_produtos");
    let catalogoProdutos = listaVendedores[findIndex].catalogo;
    let produtosMostrados = [{"empty" : true},];
    let listaProdutos;
    if (catalogoProdutos.length > 0) {
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
            resultado = ``
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
                <button class="btn btn-secondary" type="button" onclick="removerProduto('${nomeProduto}')"> Remover </button>
                <button class="btn btn-primary" type="button" onclick="detalhesProduto('${nomeProduto}')" data-toggle="modal" data-target="#mais_detalhes"> Editar produto </button>
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
    listaProdutos += 
    `
    <div class="card_produto text-center">
    <i class="fas fa-plus-circle fa-10x plus-circle"></i>
    <div class="card_produto_descricao">
    <div class="card_produto_detalhes">
    <button class="btn btn-primary" type="button" onclick="detalhesProduto('', true)" data-toggle="modal" data-target="#mais_detalhes"> Adicionar produto </button>
    </div>
    </div>
    `;
    mostrarProdutos.innerHTML = listaProdutos;
}

function removerProduto(nomeProduto) {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === nomeProduto);
    if (findIndexProduto != -1) {
        listaVendedores[findIndex].catalogo.splice(findIndexProduto, 1);
        updateLocalStorage();
        updateListaProdutos();
    }
}

function mudarInformacoesProduto() {
    mudarImagemProduto();
    mudarPrecoProduto();
    mudarDescricaoProduto();
    mudarOutrasInformacoesProduto();
    mudarNomeProduto();
    updateLocalStorage();
    window.alert("Alterações submetidas!");
    updateListaProdutos();
    $('#mais_detalhes').modal('hide');
}

function mudarImagemProduto() {
    let imagemNova = document.querySelector("#mudar_imagem_produto").files;
    if (imagemNova.length > 0) {
        produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
        findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
        const reader = new FileReader();
        reader.readAsDataURL(imagemNova[0]);
        reader.addEventListener("load", ()=> {
            idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
            listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
            listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
            let novaImagem = reader.result;
            listaVendedores[findIndex].catalogo[findIndexProduto].imagem = novaImagem;
            document.querySelectorAll(".informacoes_imagem_produto")[0].src = novaImagem;
            updateLocalStorage();
        });
    }
}

const fileInput = document.querySelector("#mudar_imagem_produto");

fileInput.addEventListener("change", atualizarImagemProduto);


function atualizarImagemProduto() {
    let imagemNova = document.querySelector("#mudar_imagem_produto").files;
    if (imagemNova.length > 0) {
        produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
        findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
        const reader = new FileReader();
        reader.readAsDataURL(imagemNova[0]);
        reader.addEventListener("load", ()=> {
            if (imagemNova[0].size <= 20000) {
                idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
                listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
                listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
                let novaImagem = reader.result;
                document.querySelectorAll(".informacoes_imagem_produto")[0].src = novaImagem;
            }
            else {
                window.alert("O arquivo deve possuir no máximo 20 KB!")
                document.querySelector("#mudar_imagem_produto").value = "";
            }
        });
    }
}

function mudarNomeProduto() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let novoNomeProduto = document.querySelector("#informacoes_nome_produto").value;
    let verificarNomeRepetido = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === novoNomeProduto);
    if (verificarNomeRepetido == -1 || novoNomeProduto == produtoAtual) {
        listaVendedores[findIndex].catalogo[findIndexProduto].nome = novoNomeProduto;
    }
    else {
        window.alert("Você já possui um produto cadastrado com esse nome! Nome do produto não será alterado.");
    }
    updateLocalStorage();
}

function mudarPrecoProduto() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let novoPreco = document.querySelector("#informacoes_preco_produto_reais").value;
    let novoPrecoCentavos = document.querySelector("#informacoes_preco_produto_centavos").value;
    if (novoPrecoCentavos.length == 1) {
        novoPrecoCentavos = "0" + novoPrecoCentavos;
    }
    novoPreco += "." + novoPrecoCentavos;
    listaVendedores[findIndex].catalogo[findIndexProduto].preco = novoPreco;
    updateLocalStorage();
}

function mudarDescricaoProduto() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let novaDescricao = document.querySelector("#informacoes_descricao_produto").value;
    let novoResumo = document.querySelector("#informacoes_descricao_produto_resumo").value;
    listaVendedores[findIndex].catalogo[findIndexProduto].descricao = novaDescricao;
    listaVendedores[findIndex].catalogo[findIndexProduto].descricaoResumo = novoResumo;
    updateLocalStorage();
}

function mudarOutrasInformacoesProduto() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let novoOutrasInformacoes = document.querySelector("#informacoes_outras_produto").value;
    listaVendedores[findIndex].catalogo[findIndexProduto].outrasInformacoes = novoOutrasInformacoes;
    updateLocalStorage();
}

function adicionarSabor() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    let novoSabor = document.querySelector("#informacoes_sabores_produto_input").value;
    if (novoSabor.length > 0) {
        listaVendedores[findIndex].catalogo[findIndexProduto].sabores.push(novoSabor);
    }
    updateLocalStorage();
    let organizarTextoSabores = listarSabores();
    document.querySelector("#informacoes_sabores_produto").innerHTML = organizarTextoSabores;
}

function removerSabor(indexSabor) {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    produtoAtual =  JSON.parse(localStorage.getItem('maisDetalhesAtual'));
    findIndexProduto = listaVendedores[findIndex].catalogo.findIndex(x => x.nome === produtoAtual);
    listaVendedores[findIndex].catalogo[findIndexProduto].sabores.splice(indexSabor, 1);
    updateLocalStorage();
    detalhesProduto(produtoAtual);
}