# Librería js codigos qr

el autor de la librería qrcode.js es David Shim. Su nombre de usuario en GitHub es "davidshimjs".David Shim es un desarrollador web independiente de Corea del Sur

La librería se publicó por primera vez en 2012 y ha sido descargada más de 100 millones de veces. Es una de las librerías de códigos QR más populares del mundo.


Sintaxis: esta biblioteca nos expone una clase llamada QRCode y el constructor espera dos parámetros de la siguiente manera: 

``new QRCode(destino, opciones);``


- Destino [cadena o elemento HTML]: este parámetro especifica la cadena, que es la identificación o el elemento al que queremos apuntar para mostrar el código QR. Por ejemplo,
- Opciones es el contenido o opciones:
``new QRCode("id-of-element", "contenido del código QR");``
Opciones [cadena o JSON]: Este parámetro contiene 2 opciones: 
- cadena: para uso básico podemos proporcionar directamente el contenido del código QR
- JSON: cuando necesitamos algo de personalización
        -texto [cadena]: contenido del código QR
        -ancho,alto [int]: ancho y alto del código QR
        -colorDark[cadena]: color del código qr
        -colorLight[cadena]: color del fondo del código qr
        -nivel correcto:   nivel de corrección de errores: L, M, H, Q
````js
nuevo QRCode(document.getElementById("qrcode"), "contenido como cadena");
````
o

````js 
var qrcode = nuevo QRCode("prueba", {
 texto: "http://www.geeksforgeeks.org",
 ancho: 256,
 altura: 256,
 colorOscuro: "#000000",
 colorLuz: "#ffffff",
 NivelCorrecto: QRCode.CorrectLevel.H
});
````
Articulos: 
- https://www.geeksforgeeks.org/how-to-make-a-qr-code-generator-using-qrcode-js/
- https://bensonruan.com/generate-qr-code-with-javascript-qrcode-js/?source=post_page-----88c7cb08a8f9--------------------------------
- https://tecnops.es/generando-codigo-qr-con-javascript/

- https://libreriasjs.com/libreria-javascript-crear-y-leer-qrs-qrcode-y-jsqr/ 
Nivel de corrección de errores:
- https://www.qrcode.com/en/about/error_correction.html