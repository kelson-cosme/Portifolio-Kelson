const menuMobile = document.getElementById("menuMobile"); /*Menu Hamburguer*/ 
const listaMenu = document.getElementById("listaMenu");/**NavBar */

const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function adicionarLista(){
    if(listaMenu.className == ""){
        listaMenu.classList.add("active");

        linha1.classList.add("ativar")
        linha2.classList.add("ativar2")
        linha3.classList.add("ativar3")

        console.log(listaMenu.className);
    } else {
        listaMenu.classList.remove("active")
        
        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
    }
}

menuMobile.addEventListener("click", adicionarLista);