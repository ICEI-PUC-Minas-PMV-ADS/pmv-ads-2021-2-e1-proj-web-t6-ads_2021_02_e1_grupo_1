function login() {
    localStorage.setItem('idUsuarioLogado', JSON.stringify(1));
    localStorage.getItem('idUsuarioLogado', JSON.stringify(1));
    window.location = "index.html";
}