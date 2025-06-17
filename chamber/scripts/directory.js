const courFooter = document.querySelector('#courses');
courFooter.textContent = `WDD231 Class Project`;

const fullName = document.querySelector('#fullName');
const year = new Date().getFullYear();

fullName.textContent = `Jerjes Mariluz.`
document.querySelector('#year').innerHTML = `&copy;${year} Timbuktu of Commerce`;

const currently = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

let formateDate = currently.toLocaleString('en-US', options);
formateDate = formateDate.replace(',', '');
document.getElementById('lastModified').textContent = `Last Modification: ${formateDate}`;

const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
})

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const display = document.querySelector('article');

gridBtn.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});


async function fetchData() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error("Error:", error);
        display.innerHTML = `<p>No se pudieron cargar los datos.</p>`;
    }
}

 function renderData(data) {
     display.innerHTML = '';

     data.forEach(item => {
         const section = document.createElement('section');
         section.classList.add('section');

         section.innerHTML = `
           <img src="${item.logo}" alt="${item.name}" width="150">
           <h3>${item.name}</h3>
           <p><strong>Tel:</strong> ${item.phone}</p>
           <p><strong>Address:</strong> ${item.address}</p>
           <a href="${item.website}" target="_blank">Visitar Web</a>
           <p><strong>Membership:</strong> ${item.membership}</p>
         `;
         display.appendChild(section);
     });
 }

fetchData();

//     // LIMPIA y aplica clase según vista
//     container.classList.remove('grid-view', 'list-view');
//     container.classList.add(viewType === 'grid' ? 'grid-view' : 'list-view');
// }

// async function init() {
//     const data = await fetchData();
//     if (!data) return;

//     renderData(data, 'grid'); // vista inicial

//     gridBtn.addEventListener('click', () => renderData(data, 'grid'));
//     listBtn.addEventListener('click', () => renderData(data, 'list'));
// }

// init();


