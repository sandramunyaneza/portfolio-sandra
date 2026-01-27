const image = document.querySelector("#menu");
const affichs = document.querySelector("#menu-btn");
affichs.addEventListener("click",()=>{
    image.classList.toggle("active");
    document.body.classList.toggle("navbar-hidden"); /* pour que la section prennent 100% de la largeur*/
    if(image.classList.contains("active")){
        affichs.textContent = "✖";
    }else{
        affichs.textContent = "☰";
    }
})