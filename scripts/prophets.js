const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData()

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.classList.add('section-one');
        

        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        fullName.style.color = `navy`;
        fullName.style.margin = `20px 0`

        let birthday = document.createElement('p');
        birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthday.style.color = `black`;

        let placebirth = document.createElement('p');
        placebirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        placebirth.style.color = `black`;

        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        

        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(placebirth);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

