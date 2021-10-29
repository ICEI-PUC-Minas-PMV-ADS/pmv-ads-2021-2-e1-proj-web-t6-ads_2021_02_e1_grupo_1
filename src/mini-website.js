let lojaInfo = new URLSearchParams(window.location.search);

/* Exibe o nome da loja escolhida */

document.querySelector("#lojaURL").innerText = lojaInfo.get('loja');