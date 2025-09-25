//evento que se ejecuta cuando el DOM ha sido completamente cargado
//DOM: Document Object Model
document.addEventListener('DOMContentLoaded', function() {
    
    //declaramos una variable que represente al boton
    var btnOK = document.getElementById('miBoton');
    //agregamos un evento click al boton
    btnOK.addEventListener('click', function() {
        //declaramos una variable que represente al input
        var nombreGato = document.getElementById('input-name');
        //mostrtamos una alerta con el valor del input
        alert('El nombre de tu gato es: ' + nombreGato.value);  
        console.log('El nombre de tu gato es: ' + nombreGato.value);
        console.error('errrrrrorrrr');
    });
});
