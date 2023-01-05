const darkModeButton = document.getElementById('darkModeButton');
const navegacion = document.querySelector('#navegacion');
const iconMenu = document.querySelector('.buttonMenu');

iconMenu.addEventListener('click', () => {
    if (navegacion.classList.contains('activo')) {
        console.log('si tiene activo');
        navegacion.classList.remove('activo');

    } else {
        console.log('no tiene activo');
        navegacion.classList.add('activo');
    }
});

// DARK MODE
darkModeButton.addEventListener('click', () => {

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
});