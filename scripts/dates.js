const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
})

const fname = document.querySelector('#fullName');
fname.innerHTML = `<h1>Jerjes Mariluz Caciano</h1>`;

const year = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = `&copy;${year} | Jerjes Mariluz C. | Perú`;

const current = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

let formaDate = current.toLocaleString('en-US', options);
formaDate = formaDate.replace(',', '');

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.innerHTML = `Last Modified: ${formaDate}`;

lastModifiedElement.style.color = 'yellow';





