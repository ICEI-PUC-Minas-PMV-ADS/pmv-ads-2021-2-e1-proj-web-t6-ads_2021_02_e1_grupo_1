let resultadosVendedores;
let caixaBusca;
let resultado;
let listaResultados;
let buscaInfo;
let numeroEstrelas;

updateResultadosDaBusca();

function updateResultadosDaBusca() {

    resultadosVendedores = [{"empty" : true},];
    buscaInfo = new URLSearchParams(window.location.search);

    for (let element = 0; element < listaVendedores.length; element++) {
        /* Verifica se o vendedor deve ser incluido na lista de resultados */
        if (condicoesParaInclusaoNaLista(element) == false) {
            resultadosVendedores[resultadosVendedores.length - 1] = listaVendedores[element];
            resultadosVendedores.push({});
        }
    }
    if (resultadosVendedores[0].empty) {
        resultadosVendedores.push({});
    }
    function condicoesParaInclusaoNaLista(id_vendedor, skip = false) {
        let avaliacao4EstrelasChecked = document.querySelector("#opcao-avaliacao4estrelas:checked");
        if (avaliacao4EstrelasChecked && Number(listaVendedores[id_vendedor].avaliacao) < 0.8) {
            skip = true;
        }
    return skip;
    }
    /* Mantém o texto de busca digitado na página anterior */

    document.querySelector("#buscar_vendedores").value = buscaInfo.get('busca');

    caixaBusca = document.querySelector(".lista_busca");
    for (let i = 0; i < (resultadosVendedores.length -1); i++) {
        let imagemResultado = resultadosVendedores[i].imagem;
        let nomeResultado = resultadosVendedores[i].nome;
        let descricaoResultado = resultadosVendedores[i].descricaoResumo;
        let avaliacaoResultado = resultadosVendedores[i].avaliacao;
        let linkResultado = resultadosVendedores[i].link;
        avaliacaoResultado = Number(avaliacaoResultado)*5;
        avaliacaoResultado = avaliacaoResultado.toFixed(2);
        avaliacaoResultado = String(avaliacaoResultado);
        avaliacaoResultado = avaliacaoResultado.replace(".", ",");

        if (resultadosVendedores[0].empty) {
            resultado = `<div class="alert-danger" style="padding: 8px; margin-top: 16px"><h4 class="text-center"> Nenhum vendedor encontrado </h4></div>`
        }
        else {
            resultado = `<div class="resultado_busca"> 
                                <a href="mini-website.html${linkResultado}" class="card_vendedor">
                                    <img src="${imagemResultado}"><br><h4 class="text-center">${nomeResultado}</h4>
                                </a><p class="descricao_busca"><b>Descrição:</b> ${descricaoResultado}</p>
                                <div class="avaliacao_texto"> <b>Avaliação ${avaliacaoResultado}/5</b></div>
                                <div class="avaliacao"> <img src="imagens/starzero.png"</img></div>
                                <div class="avaliacao avaliacao_max"> <img src="imagens/starfive.png"</img></div>
                            </div>`;
        }
        if (i == 0) { 
            listaResultados = resultado;
        } 
        else {
            listaResultados += resultado;
        }
    }

    caixaBusca.innerHTML = listaResultados;

    /* Estrelas */

    numeroEstrelas = document.querySelectorAll(".avaliacao_max");
    for (let element = 0; element < numeroEstrelas.length; element++) {
        let porcentagemAvaliacao = resultadosVendedores[element].avaliacao;
        let fiveStarsPixelWidth = 112;  /* 5 estrelas => width ="112px" */
        let pixelWidth;
        let diffPixelwidth;
        let compensatePosition = 2.5;       /* Compensa a diferença entre a largura da caixa e a largura da imagem */

        pixelWidth = fiveStarsPixelWidth * porcentagemAvaliacao + compensatePosition;
        diffPixelwidth = fiveStarsPixelWidth - pixelWidth;
        numeroEstrelas[element].style.width = String(pixelWidth) + "px";
        numeroEstrelas[element].style.marginRight = String(diffPixelwidth) + "px";  
    } 
}
