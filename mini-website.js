if (findIndex == -1) {
    window.location = "mini-website-nao-encontrado.html";
}

document.querySelector("#nome_loja").innerText = listaVendedores[findIndex].nome;
document.querySelector("#texto_mini_website").innerText = listaVendedores[findIndex].descricao;
document.querySelector("#imagem_mini_website").src = listaVendedores[findIndex].imagem;

let videoApresentacao = src = listaVendedores[findIndex].videoApresentacao;

if (videoApresentacao != null && videoApresentacao != "") {
    document.querySelector("#video_apresentacao").src = videoApresentacao;
}
else {
    document.querySelector("#video_apresentacao").style = "display: none";
}
