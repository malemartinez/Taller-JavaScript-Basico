const ArrowDownBtn = document.querySelector(".arrow-back-button")
const btnResponsiveMenu = document.querySelector(".menu-button")
const MenuResponsivo = document.querySelector(".menu-responsive")

btnResponsiveMenu.addEventListener( "click" , (event)=>{
    MenuResponsivo.classList.toggle("menu-visible")
    MenuResponsivo.classList.toggle("menu-oculto")
})
ArrowDownBtn.addEventListener( "click", ()=>{
    MenuResponsivo.classList.toggle("menu-visible")
    MenuResponsivo.classList.toggle("menu-oculto")
})