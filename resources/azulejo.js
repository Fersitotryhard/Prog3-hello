document.addEventListener('DOMContentLoaded', function() {
    //declaramos una variable que represente al boton
    var btnDesglosar = document.getElementById('btnDesglosar');
    //agregamos un evento click al boton
    btnDesglosar.addEventListener('click', function() {
        //declaramos una variable que represente al input
        var largo = parseFloat(document.getElementById('input-largo').value);

        var ancho = parseFloat(document.getElementById('input-ancho').value);

        var precio = parseFloat(document.getElementById('input-precio').value);

        if (isNaN(largo) || isNaN(ancho) || isNaN(precio)) {
            alert('Por favor ingresa numeros validos');
            console.error('Error: Uno o ambos valores no son numeros validos');
            return;
        }
        var areaSuperficial = (largo * 100) * (ancho * 100); // en cm²
        var areaAzulejo = 25 * 25; // en cm²
        var CantidadAzulejos = areaSuperficial / areaAzulejo;
        var costoTotal = CantidadAzulejos * precio;

        //mostrtamos una alerta con el valor del input
        alert('El area superficial es: ' + areaSuperficial + ' mts\n' +
              'La cantidad de azulejos necesarios es: ' + Math.ceil(CantidadAzulejos) + '\n' +
              'El costo total es: $' + costoTotal.toFixed(2));
    });
});