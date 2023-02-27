document.addEventListener('DOMContentLoaded', function () {

    const email = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputNombre = document.querySelector('#nombre');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    //  Asignar eventos

    // blur se dispara cada que te sales del input, 
    // input se dispara cada que el usuario este escribiendo pero no al abandonar el input
    inputEmail.addEventListener('input', validar); // value detecta lo que se escribio en el input
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputNombre.addEventListener('input', validar);

    function validar (event) {
        
        if (event.target.value.trim() === '') {
            mostrarAlerta(`El campo ${event.target.id} es obligatorio`, event.target.parentElement);
            email[event.target.name] = '';
            comprobarEmail();
            return;
        }

        if (event.target.id === 'email' && !validarEmail(event.target.value)) {
            console.log(event.target.parentElement);
            mostrarAlerta('El email no es valido', event.target.parentElement);
            email[event.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta (event.target.parentElement);

        // Asignar los valores
        email[event.target.name] = event.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta (mensaje, referencia) {

        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bgRed');
        error.classList.add('white', 'p-2', 'txt-center', 'font-bold', 'f-size');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta (referencia) {

       // Comprueba si ya existe una alerta
       const alerta = referencia.querySelector('.bgRed');

       if (alerta) {
           alerta.remove();
       }
    }

    function validarEmail (email) {
        const regex =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail () {
        
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
    }
})