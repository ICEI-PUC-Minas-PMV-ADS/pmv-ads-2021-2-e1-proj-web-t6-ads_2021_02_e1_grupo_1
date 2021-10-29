let listaVendedores = [
    {
        "numero_lista" : 1,
        "nome" : "Doces Caseiros",
        "imagem" : "imagens/loja_doces.jpg",
        "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque. Vitae iure id et delectus deserunt officiis sunt numquam quas rerum quaerat! In, architecto! Minus eos voluptate facere! Provident.",
        "avaliacao" : "0.92",   /* Porcentagem de 0 até 1 */
        "link" : "#doces_caseiros",
    },
    {
        "numero_lista" : 2,
        "nome" : "Massas Congeladas",
        "imagem" : "imagens/loja_massas.jpg",
        "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque. Vitae iure id et delectus deserunt officiis sunt numquam quas rerum quaerat! In, architecto! Minus eos voluptate facere! Provident.",
        "avaliacao" : "0.85",    /* Porcentagem de 0 até 1 */
        "link" : "#massas_congeladas",
    },
    {
        "numero_lista" : 3,
        "nome" : "Marmitas Vegan",
        "imagem" : "imagens/loja_vegan.jpg",
        "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque. Vitae iure id et delectus deserunt officiis sunt numquam quas rerum quaerat! In, architecto! Minus eos voluptate facere! Provident.",
        "avaliacao" : "0.67",     /* Porcentagem de 0 até 1 */
        "link" : "#marmitas_vegan",
    },
    {
        "numero_lista" : 4,
        "nome" : "Cupcakes Variados",
        "imagem" : "imagens/loja_cupcakes.jpg",
        "descricao" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam porro. Ea tenetur consequuntur sed doloribus magni repellendus, asperiores, facilis est maiores obcaecati molestias perspiciatis accusantium consequatur, esse culpa nisi itaque. Vitae iure id et delectus deserunt officiis sunt numquam quas rerum quaerat! In, architecto! Minus eos voluptate facere! Provident.",
        "avaliacao" : "0.8",    /* Porcentagem de 0 até 1 */
        "link" : "#cupcakes_variados",
    },
  ]
let enderecoAtual = "Selecionar endereço";

let listaUsuarios = [{}];

let idUsuarioLogado = {"id": -1, "nome" : "Seu nome", "tipo": "none"}; /*id : -1 = nenhum usuário logado; tipo = cliente/vendedor */

updateLocalStorage();

/* Send to local storage */
function updateLocalStorage(){
    let endereco;
    let nomeUsuario;
    if (localStorage.getItem('listaVendedores') == null) {
        localStorage.setItem('listaVendedores', JSON.stringify(listaVendedores));
    }
    if (localStorage.getItem('enderecoAtual') == null) {
        localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    }
    if (localStorage.getItem('enderecoAtual') == null) {
        localStorage.setItem('enderecoAtual', JSON.stringify(enderecoAtual));
    }
    if (localStorage.getItem('listaUsuarios') == null) {
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }
    if (localStorage.getItem('idUsuarioLogado') == null) {
        localStorage.setItem('idUsuarioLogado', JSON.stringify(idUsuarioLogado));
    }
    if (localStorage.getItem('clienteOuVendedor') == null) {
        localStorage.setItem('clienteOuVendedor', "cliente");
    }
    listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
    enderecoAtual = JSON.parse(localStorage.getItem('enderecoAtual'));
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    idUsuarioLogado = JSON.parse(localStorage.getItem('idUsuarioLogado'));

    /* Update address */
    endereco = document.querySelectorAll(".endereco_atual");
    for (let element = 0; element < endereco.length; element++) {
        endereco[element].textContent = enderecoAtual;   
      } 
    nomeUsuario = document.querySelectorAll(".nome_usuario");
    for (let element = 0; element < nomeUsuario.length; element++) {
        nomeUsuario[element].textContent = idUsuarioLogado.nome;   
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
function redirectClienteOuVendedor(cliente_vendedor = "cliente") {
    localStorage.setItem("clienteOuVendedor", cliente_vendedor);
}