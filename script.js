let btnGenQr = document.getElementById("genqr");
let cleanQr = document.getElementById("cleanqr");
let display = document.getElementById("qrcode");

btnGenQr.addEventListener('click', function () {
    let data = document.getElementById("data");
    let qrcode = new QRCode(display, {
        text: data,
    width: 200,
    height: 200,
    colorDark : "#ff0000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H 
    }); 
    //añadimmos un botón de descarga mediante js
    //<a href="imagen.jpg" download="imagen.jpg">Descargar imagen</a>
  
    
    const btnDownload = document.createElement("a");
    btnDownload.textContent = "Descargar";
    btnDownload.setAttribute("download", qrcode.img);
    console.log(qrcode)
    btnDownload.classList.add("btn", "btn-success", 'mt-2');//clases de bootstrap para que parezca un boton
    display.appendChild(btnDownload);


})
cleanQr.addEventListener('click', function () { 
    display.innerHTML = '';
})


