const darkModeButton = document.getElementById('darkModeButton');

// MOSTRAR MENU
function mostrarMenu() {
    navegacion.classList.toggle('mostrar');
    navegacion.style.transition = 'display 2s ease'
}

// DARK MODE
darkModeButton.addEventListener('click', darkMode);

function darkMode() {
    // class white, oscuro, darkImg
    const html = document.querySelector('html');
    const navLinks = document.querySelector('.navEnlaces');
    const navLinks1 = document.querySelector('.navEnlaces1');
    const raffDev = document.querySelector('.title');
    const navegacionCelularOscuro = document.querySelector('.navegacion');




    html.classList.toggle('oscuro');
    navLinks.classList.toggle('white');
    navLinks1.classList.toggle('white');
    raffDev.classList.toggle('white');
    navegacionCelularOscuro.classList.toggle('navegacionDark');

}





