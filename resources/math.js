//evento que se ejecuta cuando el DOM ha sido completamente cargado
//DOM: Document Object Model
document.addEventListener('DOMContentLoaded', function() {
    
    //declaramos una variable que represente al boton
    var btnOK = document.getElementById('btnSumar');
    //agregamos un evento click al boton
    btnOK.addEventListener('click', function() {
        //declaramos una variable que represente al input
        var value1 = parseFloat(document.getElementById('input-value1').value);
        
        var value2 = parseFloat(document.getElementById('input-value2').value);

        if (isNaN(value1) || isNaN(value2)) {
            alert('Por favor ingresa numeros validos');
            console.error('Error: Uno o ambos valores no son numeros validos');
            return;
        }

        var result = value1 + value2;

        //mostrtamos una alerta con el valor del input
        alert('El resultado de la suma es: ' + result);  
    });

    var btnRestar = document.getElementById('btnRestar');

    btnRestar.addEventListener('click', function() {

        var value1 = parseFloat(document.getElementById('input-value1').value);
        var value2 = parseFloat(document.getElementById('input-value2').value);

        if (isNaN(value1) || isNaN(value2)) {
            alert('Por favor ingresa numeros validos');
            console.error('Error: Uno o ambos valores no son numeros validos');
            return;
        }

        var result = value1 - value2;

        //mostrtamos una alerta con el valor del input
        alert('El resultado de la resta es: ' + result);
    });

    var btnMultiplicar = document.getElementById('btnMultiplicar');

    btnMultiplicar.addEventListener('click', function() {

        var value1 = parseFloat(document.getElementById('input-value1').value);
        var value2 = parseFloat(document.getElementById('input-value2').value);

        if (isNaN(value1) || isNaN(value2)) {
            alert('Por favor ingresa numeros validos');
            console.error('Error: Uno o ambos valores no son numeros validos');
            return;
        }

        var result = value1 * value2;

        //mostrtamos una alerta con el valor del input
        alert('El resultado de la multiplicacion es: ' + result);
    });
});
