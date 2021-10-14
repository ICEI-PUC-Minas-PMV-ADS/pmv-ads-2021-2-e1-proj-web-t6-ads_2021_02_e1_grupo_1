let listaVendedores = [
    {
        "numero_lista" : 1,
        "nome" : "Loja 1",
        "imagem" : "imagens/loja_doces.jpg",
    },
    {
        "numero_lista" : 2,
        "nome" : "Loja 2",
        "imagem" : "imagens/loja_massas.jpg",
    },
    {
        "numero_lista" : 3,
        "nome" : "Loja 3",
        "imagem" : "imagens/loja_vegan.jpg",
    },
    {
        "numero_lista" : 4,
        "nome" : "Loja 4",
        "imagem" : "imagens/loja_cupcakes.jpg",
    },
  ]
let enderecoAtual = "Selecionar endereço";

let idUsuarioLogado = {"id": -1, "nome" : "Seu nome", "tipo": "none"}; /*id : -1 = nenhum usuário logado; tipo = cliente/vendedor */

updateLocalStorage();

/* Send to local storage */
function updateLocalStorage(){
    if (localStorage.getItem('listaVendedores') == null) {
        localStorage.setItem('listaVendedores', JSON.stringify(listaVendedores));
    }
    if (localStorage.getItem('enderecoAtual') == null) {
        localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    }
    if (localStorage.getItem('enderecoAtual') == null) {
        localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    }
    if (localStorage.getItem('idUsuarioLogado') == null) {
        localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));
    }
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    enderecoAtual = JSON.parse(localStorage.getItem('enderecoAtual'));
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));
    console.log(idUsuarioLogado);

    /* Update address */
    let endereco = document.querySelectorAll(".endereco_atual");
    for (let element = 0; element < endereco.length; element++) {
        endereco[element].textContent = enderecoAtual;   
      } 
    /* Update user menu items */
    if (idUsuarioLogado.id == -1) {
        document.querySelector(".navDrop-logado").style.display = "none";
        document.querySelector(".navDrop-login").style.display = "block";
    }
    else {
        document.querySelector(".navDrop-logado").style.display = "block";
        document.querySelector(".navDrop-login").style.display = "none";
    }
    
}


/* fim Send to local storage*/

function mudarEndereco() {
    enderecoAtual = document.querySelector("#input_modal_endereco").value;
    localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    updateLocalStorage();
}

function logOut() {
    idUsuarioLogado = {"id": -1, "nome" : "Seu nome", "tipo": "none"};
    localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));
    updateLocalStorage();
}