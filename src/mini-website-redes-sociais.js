if (findIndex == -1) {
    window.location = "mini-website-nao-encontrado.html";
}


let redesSociais = ["facebook", "instagram", "youtube", "twitter", "tiktok"]

let redesSociaisContent = 
`
<p class="form_label">Quer saber mais, e não perder nenhuma novidade sobre nossos produtos? <br> Siga-nos nas nossas redes sociais!</p>
<br>
<div>
`;

listaVendedores = JSON.parse(localStorage.getItem('listaVendedores'));
let nenhumaRede = true;
for (let i = 0; i < redesSociais.length; i++) {
    let link = listaVendedores[findIndex].redesSociais[`${redesSociais[i]}`];
    link = addHTTPS(link);
    if (link != "") {
        nenhumaRede = false;
        redesSociaisContent += 
        `
        <a href="${link}" target="_blank"><i class="fab fa-${redesSociais[i]} fa-3x"></i></a>        
        `;
    }
}

redesSociaisContent +=
`
</div>
<br>
`;

if (nenhumaRede == true) {
    redesSociaisContent =
    `
    <div class="alert-danger nao_encontrado"><div class="h4 text-center"> Nenhuma rede social cadastrada </div></div>
    `;  
}

document.querySelector("#mini_website_redes_sociais").innerHTML = redesSociaisContent;
