



let btnGenQr = document.getElementById("genqr");
btnGenQr.addEventListener('click', function () {
    let data = document.getElementById("data");
    let display = document.getElementById("qrcode");

    let qrcode = new QRCode(display, {
        text: data,
    width: 200,
    height: 200,
    colorDark : "#ff0000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    
    });
   
    
})


