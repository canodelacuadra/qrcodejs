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
    const image = document.querySelector('#qrcode img');
        console.log(image.src)
    console.log(image.toDataURL())
    //añadimmos un enlace de descarga mediante js que simule un boton
    //<a href="imagen.jpg" download="imagen.jpg">Descargar imagen</a>
    const btnDownload = document.createElement("a");
    btnDownload.textContent = "Descargar";
   
    // Set the link's href attribute to the image's data URL
    image.src.replace(/^data:image\/\w+;base64,/, '');
   
    btnDownload.href = image.src;
    console.log(image.src)
   // Set the link's download attribute to the image's filename
btnDownload.download = 'image.png'; 
   // añadimos clases de bootstrap
    btnDownload.classList.add("btn", "btn-success", 'mt-2');//clases de bootstrap para que parezca un boton
    // lo mostramos el enlace
    display.appendChild(btnDownload);


})
cleanQr.addEventListener('click', function () { 
    display.innerHTML = '';
})


