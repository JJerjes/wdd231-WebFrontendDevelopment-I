document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.querySelector('#name');    
    const emailField = document.querySelector('#email');
    const phoneField = document.querySelector('#phone');
    const serviceField = document.querySelector('#service');
    const messageField = document.querySelector('#message');
    const appointmentField = document.querySelector('#appointment');    

    if (localStorage.getItem('contactName')) {
        nameField.value = localStorage.getItem('contactName');
    }
    if (localStorage.getItem('contactEmail')) {
        emailField.value = localStorage.getItem('contactEmail');
    }
    if (localStorage.getItem('contactPhone')) {
        phoneField.value = localStorage.getItem('contactPhone');
    }
    if (localStorage.getItem('contactService')) {
        serviceField.value = localStorage.getItem('contactService');
    }
    if (localStorage.getItem('contactMessage')) {
        messageField.value = localStorage.getItem('contactMessage');
    }
    if (localStorage.getItem('contactAppointment')) {
        appointmentField.value = localStorage.getItem('contactAppointment');
    }

    nameField.addEventListener('input', ()=> {
        localStorage.setItem('contactName', nameField.value);
    });

    emailField.addEventListener('input', () => {
        localStorage.setItem('contactEmail', emailField);
    });

    phoneField.addEventListener('contactPhone', ()=> {
        localStorage.setItem('contactPhone', phoneField);
    });

    serviceField.addEventListener('contactService', ()=> {
        localStorage.setItem('contactService', serviceField);
    });

    messageField.addEventListener('contactMessage', ()=> {
        localStorage.setItem('contactMessage', messageField);
    });

    appointmentField.addEventListener('contactAppoinyment', () => {
        localStorage.setItem('contactAppointment', appointmentField);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', ()=> {
        localStorage.removeItem('contactName');
        localStorage.removeItem('contactEmail');
        localStorage.removeItem('contactPhone');
        localStorage.removeItem('contactService');
        localStorage.removeItem('contactMessage');
        localStorage.removeItem('contactAppointment');
    });
}); 