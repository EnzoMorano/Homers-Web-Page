const corizq = document.querySelector("#corizq");
const corder = document.querySelector("#corder");
const page = document.querySelector("#contenedor");

page.addEventListener("click", () => {
    corizq.style.animationName = "desplazamientoizq";
    corder.style.animationName = "desplazamientoder";
})