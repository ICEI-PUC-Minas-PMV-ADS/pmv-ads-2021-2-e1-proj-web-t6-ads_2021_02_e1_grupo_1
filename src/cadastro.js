let opcoes;
updateCadastro();
function updateCadastro(cliente_vendedor) {
    if (cliente_vendedor != null) {
        localStorage.setItem("clienteOuVendedor", cliente_vendedor);  
    }
    if (localStorage.getItem('clienteOuVendedor') == "cliente") {
        document.querySelector("#radio-cliente").setAttribute("checked","true");
        opcoes = document.querySelectorAll(".opcoes-vendedor")
        for (let element = 0; element < opcoes.length; element++) {
            opcoes[element].style.display = "none";
            document.querySelector("#cnpj-form").value = "none";
            document.querySelector("#nome-loja-form").value = "none";
          }
    }
    else if (localStorage.getItem('clienteOuVendedor') == "vendedor") {
        document.querySelector("#radio-vendedor").setAttribute("checked","true");
        opcoes = document.querySelectorAll(".opcoes-vendedor")
        for (let element = 0; element < opcoes.length; element++) {
            opcoes[element].style.display = "block";
            document.querySelector("#cnpj-form").value = "";
            document.querySelector("#nome-loja-form").value = "";
          } 
    }
}
