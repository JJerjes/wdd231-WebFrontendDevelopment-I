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

//API
const apiKey = "ab57c9a1c16158bb10309ce9c90ea53f";
const lat = "13.45";
const lon = "-9.25";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function loadCurrentWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        document.getElementById('temperature').innerHTML = `<strong>${data.main.temp}°C</strong>`;
        document.getElementById('conditions').textContent = `${data.weather[0].description}`;
        document.getElementById('high-low').textContent = `High: ${data.main.temp_max}°C / low: ${data.main.temp_min}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
        document.getElementById('sunset').textContent = `Sunset: ${sunset}`

        const iconCode = data.weather[0].icon;
        const iconUrl =  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.querySelector('.img-weather img').src = iconUrl;

        } catch (err) {
            console.log(`Error fetching current weather: ${err}`);
        }
}

async function loadWeatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        const days = [ 'wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
        for (let i=1; i<3; i++) {
            const forecast = data.list[i*8];
            const temp = forecast.main.temp;
            const iconCode = forecast.weather[0].icon;

            const li = document.querySelector('li');
            li.innerHTML = `${days[i]}: ${temp}°C`;
            forecastContainer.appendChild(li);
        }
    } catch (err) {
        console.error(`Error fetching forecast: ${err}`);
    }
}

loadCurrentWeather();
loadWeatherForecast();

async function loadBusinessCards() {
    try {
        const response = await fetch('/chamber/data/chamber.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');
        const businesses = await response.json();

        const container = document.getElementById('cards');
        container.innerHTML = '';

        businesses.forEach((biz) => {
            const card = document.createElement('section');
            card.classList.add('cards');

            card.innerHTML = `
            <h3>${biz.name}</h3>
            <p class="slogan">${biz.tagline}</p>
            <section class="biz-details">
                <section class="biz-img">
                    <img src="${biz.image}" alt="photo of ${biz.name}">
                </section>
                <section class="biz-info">
                    <p><strong>Email:</strong> ${biz.email}</p> 
                    <p><strong>Phone:</strong> ${biz.phone}</p>
                    <p class="url"><strong>URL:</strong> <a href="https://${biz.url}" target="_blank">${biz.url}</a></p>    
                </section>
            </section>       
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error(`Error loading business card ${err}`);
    }
}

loadBusinessCards();


const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');
})

