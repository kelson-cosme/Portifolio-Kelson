const menuLinks = document.querySelectorAll(".navegacao2 a");

menuLinks.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    const listaMenu = document.getElementById("listaMenu");
    listaMenu.classList.remove("active")

    const linha1 = document.getElementById("line1");
    const linha2 = document.getElementById("line2");
    const linha3 = document.getElementById("line3");

    linha1.classList.remove("ativar")
    linha2.classList.remove("ativar2")
    linha3.classList.remove("ativar3")

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth",
    });
}


function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });

}

document.querySelector("#topo").addEventListener("click", function(event){
    event.preventDefault(); 
    scrollTo("#nav");

    console.log("njnnj")
});








