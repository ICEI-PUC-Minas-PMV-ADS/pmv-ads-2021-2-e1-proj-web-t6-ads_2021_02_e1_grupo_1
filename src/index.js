/*carrossel homepage*/

document.querySelector("#carrossel_item0").numero_lista=associateListNumber(-1);
document.querySelector("#carrossel_item1").numero_lista=associateListNumber(0);
document.querySelector("#carrossel_item2").numero_lista=associateListNumber(1);
document.querySelector("#carrossel_item3").numero_lista=associateListNumber(2);
document.querySelector("#carrossel_item4").numero_lista=associateListNumber(3);

updateListInfo();

function associateListNumber(list_number) {
    if (list_number < 0) {
        list_number = listaVendedores.length -1;
    }
    else if (list_number > listaVendedores.length - 1)
    {
        list_number = 0;
    }
    return list_number;    
}

function updateListInfo() {
    update(0);
    update(1);
    update(2);
    update(3);
    update(4);
    function update(numeroItem) {
        item_carrossel = document.querySelector(`#carrossel_item${numeroItem}`);
        document.querySelector(`#carrossel_item${numeroItem} a img`).src = listaVendedores[item_carrossel.numero_lista].imagem;
        document.querySelector(`#anchor-loja${numeroItem}`).href = "mini-website.html" + listaVendedores[item_carrossel.numero_lista].link; 
        document.querySelector(`#nome-loja${numeroItem}`).textContent = listaVendedores[item_carrossel.numero_lista].nome;
    }
}

function carrossel(direction) {  
    let numero_painel 
    let style;
    let carrosselTransition = "all 0.3s ease-in-out 0s";
    let nextItem;
    document.querySelector(".carrossel-seta-left").disabled = true;
    document.querySelector(".carrossel-seta-right").disabled = true;
    setTimeout(endWait, 350);
    numero_painel = 0;
    if (direction == "left") {
        moveLeft(numero_painel);
    } 
    else if (direction == "right") {
        moveRight(numero_painel);   
    }
    numero_painel = 1;
    if (direction == "left") {
        moveLeft(numero_painel);
    } 
    else if (direction == "right") {
        moveRight(numero_painel);   
    }
    numero_painel = 2;
    if (direction == "left") {
        moveLeft(numero_painel);
    } 
    else if (direction == "right") {
        moveRight(numero_painel);   
    }
    numero_painel = 3;
    if (direction == "left") {
        moveLeft(numero_painel);
    } 
    else if (direction == "right") {
        moveRight(numero_painel);   
    }
    numero_painel = 4;
    if (direction == "left") {
        moveLeft(numero_painel);
    } 
    else if (direction == "right") {
        moveRight(numero_painel);   
    }
    function moveRight (numeroItem) {
        item_carrossel = document.querySelector(`#carrossel_item${numeroItem} a`);
        style = window.getComputedStyle(item_carrossel);     
        if (style.marginLeft == "-921px") {   
            item_carrossel.style.transition= "none";
            item_carrossel.style.marginLeft= "571px";
            nextItem = numeroItem - 1;
            if (numeroItem == 0) {
                nextItem = 4;
            }
            document.querySelector(`#carrossel_item${numeroItem}`).numero_lista = associateListNumber(document.querySelector(`#carrossel_item${nextItem}`).numero_lista + 1);
        } 
        else {
            item_carrossel.style.transition= carrosselTransition;
            item_carrossel.style .marginLeft= parseInt(style.marginLeft) - 373 + "px";          
        }
            
    }
    function moveLeft (numeroItem) {
        item_carrossel = document.querySelector(`#carrossel_item${numeroItem} a`);
        style = window.getComputedStyle(item_carrossel);    
        if (style.marginLeft == "571px") {   
            item_carrossel.style.transition= "none";
            item_carrossel.style.marginLeft= "-921px";
            nextItem = numeroItem + 1;
            if (numeroItem == 4) {
                nextItem = 0;
            }
            document.querySelector(`#carrossel_item${numeroItem}`).numero_lista = associateListNumber(document.querySelector(`#carrossel_item${nextItem}`).numero_lista - 1);
        } 
        else {
            item_carrossel.style.transition= carrosselTransition;
            item_carrossel.style.marginLeft= parseInt(style.marginLeft) + 373 + "px"; 
        }
            
    }
    function endWait() {
        updateListInfo();
        document.querySelector(".carrossel-seta-left").disabled = false;
        document.querySelector(".carrossel-seta-right").disabled = false;   
    }
}
/* fim carrossel homepage*/