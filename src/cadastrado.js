let newEntry = {};
let getListaUsuarios;
let lengthListaUsuarios;
let findIndex;
/* const resultsList = document.getElementById('results');
new URLSearchParams(window.location.search).forEach((value,name) => {resultsList.append(`${name}: ${value}`) 
resultsList.append(document.createElement('br'))}) */

let formInfo = new URLSearchParams(window.location.search);
formInfo.forEach(function(value,name) {
Object.assign(newEntry, {[name]: value});
});
getListaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
findIndex = getListaUsuarios.findIndex(x => x.email === newEntry.email);
if (findIndex == -1) {
    if (newEntry.senha === newEntry.confirmaSenha) {
        lengthListaUsuarios = getListaUsuarios.length;  
        getListaUsuarios[lengthListaUsuarios - 1] = newEntry;
        getListaUsuarios.push({});
        localStorage.setItem('listaUsuarios', JSON.stringify(getListaUsuarios));
        alert('Usuário cadastrado com sucesso!')
        window.location = "login.html";
    }
    else {
        alert('A senha digitada em "repita a senha" não bate com a do campo "senha"!')
        window.location = "cadastro.html";
    }
}
else {
    alert(`O e-mail ${newEntry.email} já foi cadastrado anteriormente! Use outro e-mail.`)
    window.location = "cadastro.html";
}
