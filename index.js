let imagem = window.document.getElementById("logo");
let g = 0;
let saiu = false;

function sair() {
    if (!saiu) {
        open("página.htm", "_self");
        saiu = true;
    }
}

setInterval(() => {
    if (g < 1) {
        g += 0.001;
    } else {
        sair();
    }
    console.log(g);
    imagem.style.opacity = g;
}, 7);