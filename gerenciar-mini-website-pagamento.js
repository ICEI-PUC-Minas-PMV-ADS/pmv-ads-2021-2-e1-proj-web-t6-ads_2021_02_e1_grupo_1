idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
let redesSociais = ["facebook", "instagram", "youtube", "twitter", "tiktok"]

checkBoxesOpcoesSalvas();

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

function precoEntrega() {
    let entregaParaEnderecoChecked = document.querySelector("#forma_entrega_endereco").checked;
    if (entregaParaEnderecoChecked) {
        document.querySelector("#forma_entrega_endereco_preco_hide").style = "display: block";
    }
    else {
        document.querySelector("#forma_entrega_endereco_preco_hide").style = "display: none";
    }
}

function checkBoxesOpcoesSalvas () {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let formasPagamento = listaVendedores[findIndex].formasPagamento;
    for (let i = 0; i < formasPagamento.online.length; i++) {
        if (formasPagamento.online[i] == "cartao") {
            document.querySelector("#forma_pagamento_online_cartao").checked = true;
        }
        if (formasPagamento.online[i] == "pix") {
            document.querySelector("#forma_pagamento_online_pix").checked = true;
        }
    }
    for (let i = 0; i < formasPagamento.naEntrega.length; i++) {
        if (formasPagamento.naEntrega[i] == "cartao") {
            document.querySelector("#forma_pagamento_entrega_cartao").checked = true;
        }
        if (formasPagamento.naEntrega[i] == "dinheiro") {
            document.querySelector("#forma_pagamento_entrega_dinheiro").checked = true;
        }
    }
    if (listaVendedores[findIndex].precoEntrega != "") {
        document.querySelector("#forma_entrega_endereco").checked = true;
        precoEntrega();
        let precoMostrarPrecoEntrega = listaVendedores[findIndex].precoEntrega;
        let reais = 0;
        let centavos = "00";
        if (precoMostrarPrecoEntrega != "") {
            reais = parseInt(precoMostrarPrecoEntrega);
            centavos = precoMostrarPrecoEntrega.substr(-2,2);
        }
        if (centavos.length == 1) {
            centavos = "0" + centavos;
        }
        document.querySelector("#forma_entrega_endereco_preco").value = reais;
        document.querySelector("#forma_entrega_endereco_preco_centavos").value = centavos;
    }
    if (listaVendedores[findIndex].retiradaNaLoja) {
        document.querySelector("#forma_entrega_retirada").checked = true;
    }
    
}

function submeterInformacoesVendaEntrega () {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores[findIndex].formasPagamento.online = [];
    if(document.querySelector("#forma_pagamento_online_cartao").checked) {
        listaVendedores[findIndex].formasPagamento.online.push("cartao");
    }
    if(document.querySelector("#forma_pagamento_online_pix").checked) {
        listaVendedores[findIndex].formasPagamento.online.push("pix");
    }

    listaVendedores[findIndex].formasPagamento.naEntrega = [];
    if(document.querySelector("#forma_pagamento_entrega_cartao").checked) {
        listaVendedores[findIndex].formasPagamento.naEntrega.push("cartao");
    }
    if(document.querySelector("#forma_pagamento_entrega_dinheiro").checked) {
        listaVendedores[findIndex].formasPagamento.naEntrega.push("dinheiro");
    }

    if(document.querySelector("#forma_entrega_endereco").checked) {
        let reais = document.querySelector("#forma_entrega_endereco_preco").value;
        let centavos = document.querySelector("#forma_entrega_endereco_preco_centavos").value;
        if (reais == "") {
            reais = 0;
        }
        if (centavos == "") {
            centavos = "0";
        }
        if (centavos.length == 1) {
            centavos = "0" + centavos;
        }
        listaVendedores[findIndex].precoEntrega = reais + "," + centavos;
    }
    else {
        listaVendedores[findIndex].precoEntrega = "";
    }
    if(document.querySelector("#forma_entrega_retirada").checked) {
        listaVendedores[findIndex].retiradaNaLoja = true;
    }
    else {
        listaVendedores[findIndex].retiradaNaLoja = false;        
    }
    window.alert("Informações alteradas!");
    updateLocalStorage();
}