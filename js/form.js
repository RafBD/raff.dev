// ENVIAR FORM
const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this);
    $buttonMailTo.setAttribute('href', `mailto:rafa.bediaz@gmail.com?subject= ¡Hola! Me gustaría contactar contigo. &body= Nombre: ${form.get('name')} ${form.get('lastName')} Correo: ${form.get('email')} Mensaje: ${form.get('message')}`);
    $buttonMailTo.click();
}