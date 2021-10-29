let resultadosVendedores = listaVendedores;
let caixaBusca;
let resultado;
let listaResultados;
let buscaInfo = new URLSearchParams(window.location.search);
let numeroEstrelas;

/* Mantém o texto de busca digitado na página anterior */

document.querySelector("#buscar_vendedores").value = buscaInfo.get('busca');

caixaBusca = document.querySelector(".lista_busca");
for (let i = 0; i < resultadosVendedores.length; i++) {
    let imagemResultado = resultadosVendedores[i].imagem;
    let nomeResultado = resultadosVendedores[i].nome;
    let descricaoResultado = resultadosVendedores[i].descricao;
    let avaliacaoResultado = resultadosVendedores[i].avaliacao;
    let linkResultado = resultadosVendedores[i].link;
    resultado = `<div class="resultado_busca"> 
                        <a href="${linkResultado}" class="card_vendedor">
                            <img src="${imagemResultado}"><br><h4 class="text-center">${nomeResultado}</h4>
                        </a><p class="descricao_busca"><b>Descrição:</b> ${descricaoResultado}</p>
                        <div class="avaliacao_texto"> <b>Avaliação</b></div>
                        <div class="avaliacao"> <img src="imagens/starzero.png"</img></div>
                        <div class="avaliacao avaliacao_max"> <img src="imagens/starfive.png"</img></div>
                    </div>`;
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
