async function loadServices() {
    try {
        const response = await fetch('data/services.json');
        if (!response.ok) {
            throw new Error('Error al cargar los servicios');
        }

        const services = await response.json();
        displayServices(services);
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
    }
}

function displayServices(services) {
    const container = document.getElementById('services-container');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `
            <h3>${service.h3}</h3>
            <img src="${service.img}" alt="${service.h3}">
            <p>${service.text}</p>
        `;
        container.appendChild(serviceElement);
    });
}
document.addEventListener('DOMContentLoaded', loadServices);
