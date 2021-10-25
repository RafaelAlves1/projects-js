const gM = document.querySelector('.galery-modal'); //gM = Galery Modal
const iGM = document.querySelector('.galery-modal img'); // iGM = imagem da galery Modal


function fecharGaleria(){

    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";

}

function abrirGaleria (src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src;
}