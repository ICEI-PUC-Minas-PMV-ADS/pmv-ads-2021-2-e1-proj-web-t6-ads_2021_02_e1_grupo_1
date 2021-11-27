idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
let redesSociais = ["facebook", "instagram", "youtube", "twitter", "tiktok"]

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
document.querySelector("#texto_gerenciar_mini_website").value = listaVendedores[findIndex].descricao;
document.querySelector("#texto_gerenciar_mini_website_resumo").value = listaVendedores[findIndex].descricaoResumo;
document.querySelector("#imagem_mini_website").src = listaVendedores[findIndex].imagem;

updateVideoApresentacao();

function updateVideoApresentacao() {
    document.querySelector("#mudar_video_loja").value = listaVendedores[findIndex].videoApresentacao;
    let videoApresentacao = src = listaVendedores[findIndex].videoApresentacao;

    if (videoApresentacao != null && videoApresentacao != "") {
        document.querySelector("#video_apresentacao").style = "display: inline";
        document.querySelector("#video_apresentacao").src = videoApresentacao;
    }
    else {
        document.querySelector("#video_apresentacao").style = "display: none";
    }
}

updateRedesSociais();

function updateRedesSociais() {
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    for (let i = 0; i < redesSociais.length; i++) {
        document.querySelector(`#mudar_${redesSociais[i]}`).value = listaVendedores[findIndex].redesSociais[`${redesSociais[i]}`];        
    }
}


function mudarDescricao() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let novaDescricao = document.querySelector("#texto_gerenciar_mini_website").value;
    listaVendedores[findIndex].descricao = novaDescricao;
    updateLocalStorage();
    window.alert("Descrição da loja alterada!");
}

function mudarDescricaoResumo() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let novaDescricao = document.querySelector("#texto_gerenciar_mini_website_resumo").value;
    listaVendedores[findIndex].descricaoResumo = novaDescricao;
    updateLocalStorage();
    window.alert("Descrição (resumo) da loja alterada!");
}

function mudarImagemLoja() {
    let imagemNova = document.querySelector("#mudar_imagem_loja").files;
    const reader = new FileReader();
    reader.readAsDataURL(imagemNova[0]);
    reader.addEventListener("load", ()=> {
        if (imagemNova[0].size <= 20000) {
            idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
            listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
            listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
            let novaImagem = reader.result;
            listaVendedores[findIndex].imagem = novaImagem;
            document.querySelector("#imagem_mini_website").src = novaImagem;
            updateLocalStorage();
            window.alert("Imagem da loja alterada!");        
        }
        else {
            window.alert("O arquivo deve possuir no máximo 20 KB!")
            document.querySelector("#mudar_imagem_loja").value = "";
        }
    });
}

function mudarVideoLoja() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    let novoVideo = document.querySelector("#mudar_video_loja").value;
    novoVideo = trocarWatchPorEmbed(novoVideo);
    listaVendedores[findIndex].videoApresentacao = novoVideo;
    updateLocalStorage();
    updateVideoApresentacao();
    window.alert("Vídeo de apresentação atualizado!");
    function trocarWatchPorEmbed (link) {
        link = link.replace("watch?v=","embed/");
        link = addHTTPS(link);
        return link;
    }
}

function mudarRedesSociais() {
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    for (let i = 0; i < redesSociais.length; i++) {
        let redeSocial = addHTTPS(document.querySelector(`#mudar_${redesSociais[i]}`).value);
        listaVendedores[findIndex].redesSociais[`${redesSociais[i]}`] = redeSocial;
    }
    updateLocalStorage();
    updateRedesSociais();
    window.alert("Links das redes sociais atualizados!");
}